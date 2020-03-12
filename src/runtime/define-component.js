/**
 * @file component
 * @author cxtom(cxtom2008@gmail.com)
 */

import {defineComponent, inherits, evalExpr} from 'san';
import {extend, hyphenate} from '../shared/util';
import mergeClass from './merge-class';
import mergeStyle from './merge-style';
import loopExpression from './loop-expression';
import getComponentType from './get-component-type';
import ref from './ref';
import * as atomGlobalApis from './atom-global-api';

const lifeCycleMap = {
    beforeCreate: 'compiled',
    mounted: 'attached',
    created: 'inited',
    beforeMount: 'created',
    beforeDestroy: 'detached',
    destroy: 'disposed',
    updated: 'updated',
    beforeUpdate: 'updated'
};

/* eslint-disable fecs-camelcase */
const defaultSanOptions = extend({
    _mc: mergeClass,
    _ms: mergeStyle,
    _l: loopExpression,
    getComponentType
}, atomGlobalApis);

/* eslint-enable fecs-camelcase */

export default function define(options) {
    debugger;
    const sanOptions = extend({
        template: options.__santemplate,
        aNode: options.__sanaNode
    }, defaultSanOptions);

    // 处理 mixin
    if (options.mixins && options.mixins.length) {

        let methods = {};
        for (let i = 0; i < options.mixins.length; i++) {
            const item = options.mixins[i];
            if (!item) {
                continue;
            }

            // 所有 mixins 的 methods 收集到一起，优先数组后面的 methods
            if (item.methods) {
                methods = Object.assign(methods, item.methods);
            }
            // 处理其他生命周期
            ['created', 'mounted', 'activated', 'deactivated', 'beforeDestroy'].forEach(key => {
                if (!options[key] && item[key]) {
                    options[key] = item[key];
                }
            });
        }

        if (Object.keys(methods).length) {
            if (!options.methods) {
                options.methods = {};
            }
            options.methods = Object.assign({}, methods, options.methods);
        }
    }

    if (options.filters) {
        sanOptions.filters = extend(
            sanOptions.filters,
            options.filters
        );
    }

    ['computed', 'watch'].forEach(key => {
        if (options[key]) {
            sanOptions[key] = options[key];
        }
    });

    if (options.methods) {
        extend(sanOptions, options.methods);
    }

    Object.keys(lifeCycleMap).forEach(hook => {
        if (options[hook]) {
            sanOptions[lifeCycleMap[hook]] = options[hook];
        }
    });

    const refs = options.__sanRefs;
    const createdHook = sanOptions.created;
    sanOptions.created = function () {
        const me = this;
        this.$refs = Object.create(null);

        if (refs) {
            for (let i = 0, len = refs.length; i < len; i++) {
                const r = refs[i];
                Object.defineProperty(me.$refs, r.name, {
                    enumerable: true,
                    get() {
                        return r.root ? me.el : me.ref(r.name);
                    }
                });
            }
            // overwrite san component api for support v-for + ref
            me.ref = ref;
        }

        createdHook && createdHook.call(this);
    };

    if (options.data || options.props) {
        sanOptions.initData = function () {

            const bindData = this._sbindData || {};
            const propKeys = options.props
                ? (Array.isArray(options.props) ? options.props : Object.keys(options.props))
                : [];

            // 默认属性
            const defaultProps = {};
            if (options.props && !Array.isArray(options.props)) {
                propKeys.forEach(p => {
                    if ('default' in options.props[p]) {
                        defaultProps[p] = typeof options.props[p].default === 'function'
                            ? options.props[p].default()
                            : options.props[p].default
                    }
                })
            }

            const data = typeof options.data === 'function'
                ? options.data.call(extend({}, defaultProps, bindData))
                : (options.data || {});

            return extend({}, defaultProps, data);
        };
    }

    if (options.components) {
        sanOptions.components = Object
            .keys(options.components)
            .reduce((prev, key) => {
                prev[key] = prev[hyphenate(key)] = define(options.components[key]);
                return prev;
            }, {});
    }

    const Component = defineComponent(sanOptions);

    return Component;
}

