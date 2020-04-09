/**
 * @file component
 * @author cxtom(cxtom2008@gmail.com)
 */

import {defineComponent, inherits, evalExpr, Component} from 'san';
import {extend, hyphenate, def} from '../shared/util';
import mergeClass from './merge-class';
import mergeStyle from './merge-style';
import loopExpression from './loop-expression';
import getComponentType from './get-component-type';
import objectComputedProperties from './object-computed-propertirs';
import ref from './ref';
import mergeOptions from './merge-options';
import bindData from './bind-data';

/* eslint-disable fecs-camelcase */
const defaultSanOptions = {
    _mc: mergeClass,
    _ms: mergeStyle,
    _l: loopExpression,
    _ex: extend,
    _ocp: objectComputedProperties,
    getComponentType,
    $emit: Component.prototype.fire,
    $on: Component.prototype.on,
    $watch: Component.prototype.watch
};
/* eslint-enable fecs-camelcase */

const memberMap = {
    $el() {
        return this.el;
    },
    $context() {
        return this.owner;
    },
    $parent() {
        return this.parentComponent;
    },
    $children() {
        return this.children.filter(child => child.nodeType === 5);
    },
    $root() {
        let root = this;
        if (this.parentComponent) {
            while (root.parentComponent) {
                root = root.parentComponent
            }
        }
        return root;
    }
};

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
                def(me.$refs, r.name, {
                    get() {
                        return r.root ? me.el : me.ref(r.name);
                    }
                });
            }
            // overwrite san component api for support v-for + ref
            me.ref = ref;
        }

        const properties = Object
            .keys(memberMap)
            .reduce((props, key) => {
                props[key] = {
                    get() {
                        return memberMap[key].call(this);
                    }
                };
                return props;
            }, {});

        properties.$options = {
            value: options
        };

        Object.defineProperties(me, properties);

        initedHook && initedHook.call(this);

        // merge css modules
        if (this.$style) {
            this.data.merge('$style', this.$style);
        }

        bindData.call(this);
    };

    sanOptions.initData = function () {

        const me = this;

        const defaultProps = {};
        if (options.props) {
            const propKeys = options._propKeys = options.props
                ? (Array.isArray(options.props) ? options.props : Object.keys(options.props))
                : [];

            // 默认属性
            if (!Array.isArray(options.props)) {
                for (let i = 0, len = propKeys.length; i < len; i++) {
                    const p = propKeys[i];
                    const prop = options.props[p];
                    if ('default' in prop) {
                        defaultProps[p] = typeof prop.default === 'function'
                            ? prop.default()
                            : prop.default;
                    }
                    def(me, p, {
                        get() {
                            return me.data.get(p);
                        }
                    });
                }
            }
        }

        const data = typeof options.data === 'function'
            ? options.data.call(extend({}, defaultProps, this._srcSbindData))
            : (options.data || {});

        this._dataKeys = Object.keys(data) || [];

        return extend({$style: {}}, defaultProps, data);
    };

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

