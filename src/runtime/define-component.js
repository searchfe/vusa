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
import objectComputedProperties from './object-computed-propertirs';
import ref from './ref';
import mergeOptions from './merge-options';

/* eslint-disable fecs-camelcase */
const defaultSanOptions = {
    _mc: mergeClass,
    _ms: mergeStyle,
    _l: loopExpression,
    _ex: extend,
    _ocp: objectComputedProperties,
    getComponentType
};
/* eslint-enable fecs-camelcase */

export default function define(options) {

    const sanOptions = extend({
        template: options.__santemplate,
        aNode: options.__sanaNode
    }, defaultSanOptions, mergeOptions(options));

    const refs = options.__sanRefs;
    const initedHook = sanOptions.inited;
    sanOptions.inited = function () {
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

        Object.defineProperty(me, '$el', {
            enumerable: true,
            get() {
                return this.el;
            }
        });

        Object.defineProperty(me, '$options', {
            enumerable: true,
            get() {
                return options;
            }
        });

        initedHook && initedHook.call(this);
    };

    if (options.data || options.props) {
        sanOptions.initData = function () {

            const me = this;

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

                    Object.defineProperty(me, p, {
                        enumerable: true,
                        get() {
                            return me.data.get(p);
                        }
                    });
                });
            }

            const data = typeof options.data === 'function'
                ? options.data.call(extend({}, defaultProps, bindData))
                : (options.data || {});

            const dataKeys = Object.keys(data);
            dataKeys.forEach(key => {
                Object.defineProperty(me, key, {
                    enumerable: true,
                    get() {
                        return me.data.get(key);
                    },
                    set(val) {
                        me.data.set(key, value);
                    }
                });
            });

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

