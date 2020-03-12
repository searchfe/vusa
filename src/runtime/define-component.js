/**
 * @file component
 * @author cxtom(cxtom2008@gmail.com)
 */

import {defineComponent, inherits, evalExpr} from 'san';
import {extend, hyphenate} from '../shared/util';
import mergeClass from './merge-class';
import mergeStyle from './merge-style';
import loopExpression from './loop-expression';
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
    _l: loopExpression
}, atomGlobalApis);


defaultSanOptions.getComponentType = function (aNode, data) {
    if (aNode.hotspot.props.is == null) {
        return this.components[aNode.tagName];
    }

    const is = aNode.props[aNode.hotspot.props.is];
    const isValue = evalExpr(is.expr, data);
    aNode.tagName = isValue;
    aNode.props.splice(is, 1);
    return this.components[isValue];
};

/* eslint-enable fecs-camelcase */

export default function define(options) {

    const sanOptions = extend({
        template: options.__santemplate,
        aNode: options.__sanaNode
    }, defaultSanOptions);

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
        Object.keys(options.methods).forEach(key => {
            sanOptions[key] = options.methods[key];
        });
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

