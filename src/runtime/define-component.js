/**
 * @file component
 * @author cxtom(cxtom2008@gmail.com)
 */

import './override-data-get';

import {defineComponent, Component, nextTick, createComponentLoader} from 'san';
import {extend, hyphenate, def, freeze, createAccesser, isPlainObject} from '../shared/util';
import loopExpression from './loop-expression';
import objectComputedProperties from './object-computed-propertirs';
import ref from './ref';
import mergeOptions, {globalOptions} from './merge-options';
import bindData, {set, del} from './bind-data-defineproperty';
import slot from './get-slots';
import {callActivited, callDeActivited} from './call-activated-hook';
import Transition from './transition';
import toSafeString from './safe-html';
import toHtml from './html';
import changeDisabled from './disabled';
import watcher from './watch';

const COMPONENT_REFERENCE = '__COMPONENT_REFERENCE__';

const noop = () => {};

const callFilter = function (name, args) {
    return this.filters[name](...args);
}

/* eslint-disable fecs-camelcase */
const defaultSanOptions = {
    $activate: callActivited,
    $deactivate: callDeActivited,
    _l: loopExpression,
    _ex: extend,
    _ocp: objectComputedProperties,
    _noop: noop,
    _t: Transition,
    _sf: toSafeString,
    _f: callFilter,
    _h: toHtml,
    $emit: Component.prototype.fire,
    $on: Component.prototype.on,
    $off: function(name) {
        if (name) {
            return Component.prototype.un.call(this, name);
        }
        if (this.listeners && Object.keys(this.listeners).length) {
            Object.keys(this.listeners).forEach(l => {
                return Component.prototype.un.call(this, l)
            });
        }
    },
    $watch: function(name, listener, declaration) {
        if (!listener) return;

        let source = undefined;

        if (declaration && Object.keys(declaration) && !isPlainObject(listener)) {
            source = Object.assign({}, declaration, {
                handler: listener
            });
        }

        const {handler} = watcher(name, source? source : listener, this);

        return Component.prototype.watch.call(this, name, (newValue, sourceValue) => handler.call(this, newValue, sourceValue.oldValue));
    },
    $nextTick: nextTick,
    $set: set,
    _da: changeDisabled,
    $destroy: function () {
        Component.prototype.dispose.call(this);
        Component.prototype._leave.call(this);
    },
};
/* eslint-enable fecs-camelcase */

export const VusaComponent = defineComponent(defaultSanOptions);

const memberMap = {
    $el() {
        return this.el;
    },
    $data() {
        return this.data && this.data.raw;
    },
    $context() {
        return this.owner;
    },
    $parent() {
        return this.parentComponent;
    },
    $children() {
        let children = [];
        if (this._rootNode
            && this.tagName !== this._rootNode.tagName
            && this._rootNode.lifeCycle && !this._rootNode.lifeCycle.disposed) {
            children.unshift(this._rootNode);
        }
        return (children.concat(this.children)).filter(child => {
            return child.nodeType === 5;
        });
    },
    _isMounted() {
        return !!this.lifeCycle.attached;
    },
    _isBeingDestroyed() {
        return this.lifeCycle.detached !== true;
    },
    $root() {
        let root = this;
        if (this.parentComponent) {
            while (root.parentComponent) {
                root = root.parentComponent;
            }
        }

        if (root && root.data && root.data.data && root.data.data.$rootData) {
            for (var key in root.data.data.$rootData) {
                root[key] = root.data.data.$rootData[key];
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
        const proto = component.prototype;

        if (!proto.hasOwnProperty('_cmptReady')) {
            const components = component.components || proto.components || {};
            proto.components = normalizeComponents(components);
            proto._cmptReady = 1;
        }
        return component;
    }
    // 兼容纯 san 组件，需要提前到这里判断，否则会走到 createComponentLoader 逻辑
    if (component.template || component.aNode || component.aPack) {
        if (component.components) {
            component.components = normalizeComponents(component.components);
            component._cmptReady = 1;
        }
        return defineComponent(component);
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
    return define(component);
}

function normalizeComponents(components) {
    return components = Object
        .keys(components)
        .reduce((prev, key) => {
            const component = components[key];
            prev[key] = prev[hyphenate(key)] = normalizeComponent(component);
            return prev;
        }, extend({}, globalOptions.components));
}

export default function define(options) {

    if (options.hasOwnProperty(innerKey)) {
        return options[innerKey];
    }

    if (typeof options === 'function') {
        return normalizeComponent(options);
    }

    const prePareOptions = {};

    if (options.components) {
        prePareOptions.components = normalizeComponents(options.components);
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
                const {handler} = watcher(key, options.watch[key], this);

                this.watch(key, (newValue, sourceValue) => handler.call(this, newValue, sourceValue.oldValue));
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

        const me = this;

        const properties = Object
            .keys(memberMap)
            .reduce((props, key) => {
                props[key] = {
                    get() {
                        return memberMap[key].call(me);
                    },
                };
                return props;
            }, {});

        properties.$options = {
            value: options,
        };

        properties.$delete = {
            get() {
                return (...opt) => del.call(me, opt)
            }
        }

        Object.defineProperties(this, properties);

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
            this._dataKeys = data && Object.keys(data) || [];
        }

        const initialData = extend({$style: {}}, defaultProps, data);

        if (!optimizeSSR && options.computed) {
            me._computedKeys = Object.keys(options.computed);
        }
        else if (!optimizeSSR) {
            me._computedKeys = [];
        }

        if (optimizeSSR) {
            Object.defineProperties(this.data.data, properties);
        }

        return initialData;
    };

    const cmpt = defineComponent(sanOptions, VusaComponent);
    return options[innerKey] = cmpt;
}
