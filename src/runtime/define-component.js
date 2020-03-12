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

const lifeCycleArr = [
    'beforeCreate',
    'mounted',
    'created',
    'beforeMount',
    'beforeDestroy',
    'destroy',
    'updated',
    'beforeUpdate'
];

/* eslint-disable fecs-camelcase */
const defaultSanOptions = extend({
    _mc: mergeClass,
    _ms: mergeStyle,
    _l: loopExpression,
    getComponentType
}, atomGlobalApis);

/* eslint-enable fecs-camelcase */

export default function define(options) {

    const sanOptions = extend({
        template: options.__santemplate,
        aNode: options.__sanaNode
    }, defaultSanOptions);

    let tempLifeCycle = {};

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
            // 处理生命周期
            lifeCycleArr.forEach(lifeName => {
                if (item[lifeName]) {
                    if (!tempLifeCycle[lifeName]) {
                        tempLifeCycle[lifeName] = [];
                    }
                    tempLifeCycle[lifeName].push(item[lifeName]);
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

    // 循环遍历非 mixin 的生命周期，保存到数组中
    for (let i = 0; i < lifeCycleArr.length; i++) {
        const lifeName = lifeCycleArr[i];
        if (options[lifeName]) {
            if (!tempLifeCycle[lifeName]) {
                tempLifeCycle[lifeName] = [];
            }
            tempLifeCycle[lifeName].push(options[lifeName]);
        }

        // 至此生命周期保存到了数组中
    }
    console.log('sanOptions.mounted', sanOptions.mounted);


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

    // 循环调用函数，created 下面单独处理
    Object.keys(lifeCycleMap).forEach(hook => {
        if (tempLifeCycle[hook]
            && tempLifeCycle[hook].length
            && hook !== 'created') {
            sanOptions[lifeCycleMap[hook]] = function () {
                const me = this;
                for (let j = 0; j < tempLifeCycle[hook].length; j++) {
                    tempLifeCycle[hook][j].call(this);
                }
            }
        }
    });

    const refs = options.__sanRefs;
    const createdHook = options.created;
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

        // created 在这里循环调用
        if (createdHook) {
            for (let i = 0; i < tempLifeCycle.created.length; i++) {
                tempLifeCycle.created[i].call(me);
            }
        }
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

