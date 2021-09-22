/**
 * @file component
 * @author cxtom(cxtom2008@gmail.com)
 */

import './override-data-get';

import {defineComponent, Component, nextTick, createComponentLoader} from 'san';
import {extend, hyphenate, def, freeze, createAccesser} from '../shared/util';
import mergeClass from './merge-class';
import mergeStyle from './merge-style';
import loopExpression from './loop-expression';
import objectComputedProperties from './object-computed-propertirs';
import ref from './ref';
import mergeOptions, {globalOptions} from './merge-options';
import bindData, {set} from './bind-data-defineproperty';
import slot from './get-slots';
import {callActivited, callDeActivited} from './call-activated-hook';
import Transition from './transition';
import toSafeString from './safe-html';
import {COMPONENT_REFERENCE} from 'san-ssr/dist/helpers/markExternalComponent';

const noop = () => {};

/* eslint-disable fecs-camelcase */
const defaultSanOptions = {
    $activate: callActivited,
    $deactivate: callDeActivited,
    _mc: mergeClass,
    _ms: mergeStyle,
    _l: loopExpression,
    _ex: extend,
    _ocp: objectComputedProperties,
    _noop: noop,
    _t: Transition,
    _sf: toSafeString,
    $emit: Component.prototype.fire,
    $on: Component.prototype.on,
    $watch: Component.prototype.watch,
    $nextTick: nextTick,
    $set: set,
};
/* eslint-enable fecs-camelcase */

export const VusaComponent = defineComponent(defaultSanOptions);

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
                root = root.parentComponent;
            }
        }
        return root;
    },
    $slots: slot,
    _isDestroyed() {
        return !!this.lifeCycle.disposed;
    },
};

const originalUpdate = Component.prototype._update;

Component.prototype._update = function (changes) {
    if (changes) {
        this._toPhase('beforeUpdate');
    }
    originalUpdate.call(this, changes);
};

const innerKey = '_SanCtor';

const styleAccesser = createAccesser('$style');

function normalizeComponent(component) {
    // 兼容 san-ssr 外部组件，直接返回
    if (component && component[COMPONENT_REFERENCE]) {
        return component;
    }
    if (component instanceof Component || component instanceof VusaComponent) {
        return component;
    }
    if (typeof component === 'function') {
        return createComponentLoader(() => {
            return new Promise(resolve => {
                component(function (cmpt) {
                    resolve(define(cmpt));
                });
            });
        });
    }
    return component.template || component.aNode || component.aPack
        ? defineComponent(component)
        : define(component);
}

export default function define(options) {

    if (options[innerKey]) {
        return options[innerKey];
    }

    if (typeof options === 'function') {
        return normalizeComponent(options);
    }

    const prePareOptions = {};

    if (options.components) {
        prePareOptions.components = Object
            .keys(options.components)
            .reduce((prev, key) => {
                const component = options.components[key];
                prev[key] = prev[hyphenate(key)] = normalizeComponent(component);
                return prev;
            }, extend({}, globalOptions.components));
        prePareOptions._cmptReady = 1;
    }

    if (
        options.template || options.aNode || options.aPack
        || options instanceof Component || options instanceof VusaComponent
    ) {
        return defineComponent(extend({}, options, prePareOptions));
    }

    const optimizeSSR = options.__sanOptimizeSSR || false;

    const sanOptions = extend(prePareOptions, {
        template: options.__santemplate,
        aNode: options.__sanaNode,
        aPack: options.__sanaPack,
        _isSan: true,
    }, mergeOptions(options));

    const refs = options.__sanRefs;
    const initedHook = sanOptions.inited;
    sanOptions.inited = function () {
        const me = this;

        if (!optimizeSSR) {
            this.$refs = Object.create(null);

            if (refs) {
                for (let i = 0, len = refs.length; i < len; i++) {
                    const r = refs[i];
                    def(me.$refs, r.name, {
                        get() {
                            return r.root ? me.el : me.ref(r.name);
                        },
                    });
                }
                // overwrite san component api for support v-for + ref
                me.ref = ref;
            }
        }

        // merge css modules
        if (this.$style) {
            this.data.set(styleAccesser, freeze(this.$style));
        }

        if (!optimizeSSR) {
            bindData.call(this, options.computed);
        }
        else if (options.computed && optimizeSSR) {
            for (const key in options.computed) {
                if (Object.hasOwnProperty.call(options.computed, key)) {
                    const element = options.computed[key];
                    this.data.data[key] = element.call(this.data.data);
                }
            }
        }

        initedHook && initedHook.call(this);

        if (options.watch && !optimizeSSR) {
            Object.keys(options.watch).forEach(key => {
                this.watch(key, options.watch[key].bind(this));
            });
        }

        if (options.preprocessANode) {
            options.preprocessANode.call(this);
        }
    };

    const beforeUpdateHook = sanOptions.beforeUpdate;
    sanOptions.beforeUpdate = function () {
        beforeUpdateHook && beforeUpdateHook.call(this);

        if (options.preprocessANode) {
            options.preprocessANode.call(this);
        }
    };

    const compiledHook = sanOptions.compiled;
    sanOptions.initData = function () {

        this._calcComputed = noop;

        // san-ssr 下没有执行 compiled 生命周期
        compiledHook && compiledHook.call(this);

        const properties = Object
            .keys(memberMap)
            .reduce((props, key) => {
                props[key] = {
                    get() {
                        return memberMap[key].call(this);
                    },
                };
                return props;
            }, {});

        properties.$options = {
            value: options,
        };

        Object.defineProperties(this, properties);

        const me = this;

        const defaultProps = {};
        if (options.props) {
            const propKeys = options.props
                ? (Array.isArray(options.props) ? options.props : Object.keys(options.props))
                : [];

            if (!optimizeSSR) {
                me._propKeys = options._propKeys = propKeys;
            }

            const propKeyLength = propKeys.length;

            // 默认属性
            if (propKeyLength > 0 && !Array.isArray(options.props)) {
                for (let i = 0, len = propKeys.length; i < len; i++) {
                    const p = propKeys[i];
                    const prop = options.props[p];
                    if (prop.default) {
                        defaultProps[p] = typeof prop.default === 'function'
                            ? prop.default()
                            : prop.default;
                    }
                }
            }
        }
        else {
            me._propKeys = [];
        }

        const data = typeof options.data === 'function'
            ? options.data.call(
                extend(
                    {},
                    defaultProps,
                    optimizeSSR ? this.data.data : this._srcSbindData
                )
            )
            : (options.data || {});

        if (!optimizeSSR) {
            this._dataKeys = Object.keys(data) || [];
        }

        const initialData = extend({$style: {}}, defaultProps, data);

        if (!optimizeSSR && options.computed) {
            me._computedKeys = Object.keys(options.computed);
        }
        else if (!optimizeSSR) {
            me._computedKeys = [];
        }

        return initialData;
    };

    const cmpt = defineComponent(sanOptions, VusaComponent);

    return options[innerKey] = cmpt;
}
