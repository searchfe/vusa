/**
 * @file component
 * @author cxtom(cxtom2008@gmail.com)
 */

import './override-data-get';

import {defineComponent, inherits, Component, nextTick} from 'san';
import {extend, hyphenate, def, freeze} from '../shared/util';
import mergeClass from './merge-class';
import mergeStyle from './merge-style';
import loopExpression from './loop-expression';
import getComponentType from './get-component-type';
import objectComputedProperties from './object-computed-propertirs';
import ref from './ref';
import mergeOptions from './merge-options';
import bindData from './bind-data';
import slot from './get-slots';
import {callActivited, callDeActivited} from './call-activated-hook';
import Transition from './transition';

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
    getComponentType,
    $emit: Component.prototype.fire,
    $on: Component.prototype.on,
    $watch: Component.prototype.watch,
    $nextTick: nextTick
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
    },
    $slots: slot,
    _isDestroyed() {
        return !!this.lifeCycle.disposed;
    }
};

const originalUpdate = Component.prototype._update;

Component.prototype._update = function (changes) {
    if (changes) {
        this._toPhase('beforeUpdate');
    }
    originalUpdate.call(this, changes);
};

const innerKey = '_SanCtor';

export default function define(options) {

    if (options[innerKey]) {
        return options[innerKey];
    }

    const prePareOptions = {};

    if (options.components) {
        prePareOptions.components = Object
            .keys(options.components)
            .reduce((prev, key) => {
                const component = options.components[key];
                prev[key] = prev[hyphenate(key)] = component instanceof Component
                    ? component
                    : (component.template || component.aNode ? defineComponent(component) : define(component));
                return prev;
            }, {});
        prePareOptions._cmptReady = 1;
    }

    if (options.template || options.aNode || options instanceof Component) {
        return defineComponent(extend({}, options, prePareOptions));
    }

    const sanOptions = extend(prePareOptions, {
        template: options.__santemplate,
        aNode: options.__sanaNode,
        _isSan: true,
    }, defaultSanOptions, mergeOptions(options));

    const compiledHook = sanOptions.compiled;
    sanOptions.compiled = function () {

        this._calcComputed = noop;

        compiledHook && compiledHook.call(this);

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

        Object.defineProperties(this, properties);
    };

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

        // merge css modules
        if (this.$style) {
            this.data.set(getExpr('$style', freeze(this.$style)));
        }

        bindData.call(this);

        for (let i = 0; i < this._methodKeys.length; i++) {
            const key = this._methodKeys[i];
            this[key] = this[key].bind(this);
        }

        initedHook && initedHook.call(this);

        if (options.watch) {
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

    sanOptions.initData = function () {

        const me = this;

        const defaultProps = {};
        if (options.props) {
            const propKeys = me._propKeys = options._propKeys = options.props
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
                }
            }
        }
        else {
            me._propKeys = [];
        }

        if (options.computed) {
            me._computedKeys = Object.keys(options.computed);
        }
        else {
            me._computedKeys = [];
        }

        const data = typeof options.data === 'function'
            ? options.data.call(extend({}, defaultProps, this._srcSbindData))
            : (options.data || {});

        this._dataKeys = Object.keys(data) || [];

        return extend({$style: {}}, defaultProps, data);
    };

    const cmpt = defineComponent(sanOptions);

    return options[innerKey] = cmpt;
}

