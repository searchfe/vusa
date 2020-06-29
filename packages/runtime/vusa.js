/*!
 * vusa v1.0.0
 * (c) 2019-2020 * Released under the MIT License.
 */
/* eslint-disable */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('san')) :
    typeof define === 'function' && define.amd ? define(['exports', 'san'], factory) :
    (global = global || self, factory(global.Vusa = {}, global.san));
}(this, (function (exports, san) { 'use strict';

    /**
     * @file override eval expr
     * @author cxtom(cxtom2008@gmail.com)
     */

    var original = san.Data.prototype.get;

    san.Data.prototype.get = function (expr, callee) {
        if (!expr) {
            return this.raw;
        }
        var key = expr;
        if (typeof expr === 'string') {
            expr = san.parseExpr(expr);
        }
        else {
            key = expr.paths.map(function (a) { return a.value; }).join('.');
        }

        this._dep && this._dep.depend({
            key: key,
            expr: expr,
        });

        var value = original.call(this, expr, callee);
        if (!expr || value !== undefined || !this.owner || expr.type !== san.ExprType.ACCESSOR) {
            return value;
        }
        var paths = expr.paths;
        var first = paths[0].value;
        if (
            ( this.owner._propKeys ).concat( this.owner._dataKeys,
                this.owner._computedKeys ).indexOf(first) >= 0
        ) {
            return value;
        }
        value = this.owner[first];
        for (var i = 1, l = paths.length; value != null && i < l; i++) {
            value = value[paths[i].value || san.evalExpr(paths[i], callee)];
        }
        return value;
    };

    /**
     * @file 一些工具函数
     * @author cxtom(cxtom2008@gmail.com)
     */

    /**
     * Mix properties into target object.
     */
    var extend = Object.assign;

    /**
     * Merge an Array of Objects into a single Object.
     */
    function toObject(arr) {
        var res = {};
        for (var i = 0; i < arr.length; i++) {
            if (arr[i]) {
                extend(res, arr[i]);
            }
        }
        return res;
    }

    /**
     * Remove an item from an array.
     */
    function remove(arr, item) {
        if (arr.length) {
            var index = arr.indexOf(item);
            if (index > -1) {
                return arr.splice(index, 1);
            }
        }
    }

    /**
     * Quick object check - this is primarily used to tell
     * Objects from primitive values when we know the value
     * is a JSON-compliant type.
     */
    function isObject(obj) {
        return obj !== null && typeof obj === 'object';
    }

    function def(obj, key, property) {
        Object.defineProperty(obj, key, extend({
            enumerable: false,
            configurable: true,
        }, property));
    }

    /**
     * Create a cached version of a pure function.
     */
    function cached(fn) {
        var cache = Object.create(null);
        return function cachedFn(str) {
            var hit = cache[str];
            return hit || (cache[str] = fn(str));
        };
    }

    /**
     * Hyphenate a camelCase string.
     */
    var hyphenateRE = /([^-])([A-Z])/g;
    var hyphenate = cached(function (str) {
        return str
            .replace(hyphenateRE, '$1-$2')
            .replace(hyphenateRE, '$1-$2')
            .toLowerCase();
    });

    var camelize = function (str) { return str.replace(/-(\w)/g, function (_, c) { return (c ? c.toUpperCase() : ''); }); };

    /**
     * Ensure a function is called only once.
     */
    function once(fn) {
        var called = false;
        return function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            if (!called) {
                called = true;
                fn.apply(this, args);
            }
        };
    }

    var supportFreeze = typeof Object.freeze === 'function';

    function freeze(obj) {
        return supportFreeze && isObject(obj) ? Object.freeze(obj) : obj;
    }

    function createAccesser(key) {
        return {
            type: san.ExprType.ACCESSOR,
            paths: [{
                type: 1,
                value: key,
            }],
        };
    }

    /**
     * @file merge class
     * @author cxtom(cxtom2008@gmail.com)
     */

    function string(cls) {
        if ( cls === void 0 ) cls = '';

        if (!cls) {
            return '';
        }
        return cls
            .split(' ')
            .reduce(function (prev, name) {
                var obj;

                if (!name) {
                    return prev;
                }
                return Object.assign({}, prev,
                    ( obj = {}, obj[name] = 1, obj ));
            }, {});
    }

    function object(cls) {
        if ( cls === void 0 ) cls = {};

        return Object
            .keys(cls)
            .reduce(function (prev, key) {
                if (!cls[key]) {
                    return prev;
                }
                return Object.assign({}, prev,
                    string(key));
            }, {});
    }

    function array(cls) {
        if ( cls === void 0 ) cls = [];

        var clazz = {};
        for (var i = 0, len = cls.length; i < len; i++) {
            var element = cls[i];
            if (!element) {
                continue;
            }
            clazz = Object.assign({}, clazz,
                (
                    typeof element === 'string'
                    ? string(element)
                    : (Array.isArray(element) ? array(element) : object(element))
                ));
        }
        return clazz;
    }

    function mergeClass (staticClass, cls) {
        if ( staticClass === void 0 ) staticClass = '';
        if ( cls === void 0 ) cls = {};

        return Object.keys(array([staticClass, cls])).join(' ');
    }

    /**
     * @file merge style
     * @author cxtom(cxtom2008@gmail.com)
     */

    var parseStyleText = cached(function (cssText) {
        var res = {};
        var listDelimiter = /;(?![^(]*\))/g;
        var propertyDelimiter = /:(.+)/;
        cssText.split(listDelimiter).forEach(function (item) {
            if (item) {
                var tmp = item.split(propertyDelimiter);
                tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
            }
        });
        return res;
    });

    // normalize possible array / string values into Object
    function normalizeStyleBinding(bindingStyle) {
        if (Array.isArray(bindingStyle)) {
            return toObject(bindingStyle);
        }
        if (typeof bindingStyle === 'string') {
            return parseStyleText(bindingStyle);
        }
        return bindingStyle;
    }


    function mergeStyle (staticStyle, style, vShow) {
        if ( vShow === void 0 ) vShow = true;

        style = normalizeStyleBinding(style);
        if (!vShow) {
            style.display = 'none';
        }
        return staticStyle
            ? extend(staticStyle, style)
            : style;
    }

    /**
     * @file loop expression
     * @author cxtom(cxtom2008@gmail.com)
     */

    var toArray = cached(function (n) {
        var value = new Array(n);
        for (var i = 0; i < n; i++) {
            value[i] = i + 1;
        }
        return value;
    });

    function loopExpression (value) {
        if (!isNaN(value)) {
            var n = +value;
            value = toArray(n);
        }
        return value;
    }

    /**
     * @file get component type
     * @author cxtom(cxtom2008@gmail.com)
     */

    function getComponentType (aNode, data) {
        if (aNode.tagName !== 'component' || aNode.hotspot.props.is == null) {
            return this.components[aNode.tagName];
        }

        var is = aNode.props[aNode.hotspot.props.is];
        var isValue = san.evalExpr(is.expr, data);
        return this.components[isValue];
    }

    /**
     * @file object computed properties merge
     * @author cxtom(cxtom2008@gmail.com)
     */

    function objectComputedProperties (properties) {
        return properties.reduce(function (prev, ref) {
            var k = ref.k;
            var v = ref.v;

            prev[k] = v;
            return prev;
        }, {});
    }

    /**
     * @file san ref rewrite
     * @author cxtom(cxtom2008@gmail.com)
     */

    function ref (name) {

        var owner = this;

        function childrenTraversal(children) {
            for (var i = 0, len = children.length; i < len; i++) {
                var refTarget = elementTraversal(children[i]);
                if (refTarget) {
                    return refTarget;
                }
            }
        }

        function elementTraversal(element) {
            var nodeType = element.nodeType;
            if (nodeType === 1) {
                return;
            }
            var refTarget;
            if (element.owner === owner) {
                var ref;
                var value;
                switch (nodeType) {
                    case 4:
                    case 3:
                        ref = element.aNode.directives.ref;
                        value = ref && san.evalExpr(ref.value, element.scope, owner);
                        if (ref && (value === name || camelize(value) === name)) {
                            return nodeType === 4 ? element.el : element.children.map(elementTraversal);
                        }
                        break;

                    case 5:
                        ref = element.source.directives.ref;
                        value = ref && san.evalExpr(ref.value, element.scope, owner);
                        if (ref && (value === name || camelize(value) === name)) {
                            return element;
                        }
                }

                refTarget = element.slotChildren && childrenTraversal(element.slotChildren);
            }

            return refTarget || childrenTraversal(element.children);
        }

        return childrenTraversal(this.children);
    }

    /**
     * @file constants
     * @author cxtom(cxtom2008@gmail.com)
     */

    var lifeCycleMap = {
        beforeCreate: 'compiled',
        mounted: 'attached',
        created: 'inited',
        beforeMount: 'created',
        beforeDestroy: 'detached',
        destroy: 'disposed',
        updated: 'updated',
        beforeUpdate: 'beforeUpdate',
        activated: 'activated',
        deactivated: 'deactivated',
    };

    var lifeCycleKeys = Object.keys(lifeCycleMap);

    /**
     * @file 全局生效的函数
     * @author cxtom(cxtom2008@gmail.com)
     */

    var MATH_METHOD = [
        'floor', 'ceil', 'round',
        'abs', 'max', 'min', 'pow'
    ];

    var methods = {};

    MATH_METHOD.forEach(function (name) {
        methods[("math_" + name)] = function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            return Math[name].apply(Math, args);
        };
    });

    methods.array_slice = function (arr, start, len) {
        var end = len == null ? void 0 : (len >= 0 ? (start + len) : (arr.length + len));
        return arr.slice(start, end);
    };

    methods.array_join = function (arr, sep) {
        return arr.join(sep);
    };

    methods.str_pos = function (str, match) {
        return str.indexOf(match);
    };

    methods.object_freeze = function (obj) {
        return Object.freeze(obj);
    };

    var filters = {
        json: function json$1(obj) {
            return JSON.stringify(json);
        },
        lower: function lower(str) {
            return str.toLowerCase();
        },
        upper: function upper(str) {
            return str.toUpperCase();
        },
        _cat: function _cat(a, b) {
            return (a || '').toString() + (b || '');
        }
    };

    var atomBuildInMixin = /*#__PURE__*/Object.freeze({
        __proto__: null,
        methods: methods,
        filters: filters
    });

    /**
     * @file merge options
     * @author cxtom(cxtom2008@gmail.com)
     */

    var keys = [
        'filters',
        'computed'
    ];

    function mergeHook(parentVal, childVal) {
        return childVal
            ? parentVal
                ? parentVal.concat(childVal)
                : Array.isArray(childVal)
                    ? childVal
                    : [childVal]
                : parentVal;
    }

    function mergeOptions(options) {
        var destOptions = {};
        var list = Array.isArray(options.mixins)
            ? [atomBuildInMixin ].concat( options.mixins, [options])
            : [atomBuildInMixin, options];

        var methods = {};

        for (var i = 0, len = list.length; i < len; i++) {
            var opt = list[i];
            opt.methods && extend(methods, opt.methods);
            for (var j = 0; j < keys.length; j++) {
                var k = keys[j];
                if (opt[k]) {
                    destOptions[k] = extend(destOptions[k] || {}, opt[k]);
                }
            }
            for (var j$1 = 0; j$1 < lifeCycleKeys.length; j$1++) {
                var k$1 = lifeCycleKeys[j$1];
                var dk = lifeCycleMap[k$1];
                if (opt[k$1]) {
                    destOptions[dk] = mergeHook(destOptions[dk] || [], opt[k$1]);
                }
            }
        }
        for (var j$2 = 0; j$2 < lifeCycleKeys.length; j$2++) {
            var k$2 = lifeCycleKeys[j$2];
            var dk$1 = lifeCycleMap[k$2];
            if (destOptions[dk$1]) {
                var hooks = destOptions[dk$1].slice();
                destOptions[dk$1] = hooks.length === 1 ? hooks[0] : function () {
                    var this$1 = this;

                    hooks.forEach(function (hook) { return hook.call(this$1); }, this);
                };
            }
        }
        destOptions._methodKeys = Object.keys(methods);
        extend(destOptions, methods);
        if (options.messages) {
            destOptions.messages = options.messages;
        }
        return destOptions;
    }

    /**
     * @file san dep
     * @author cxtom(cxtom2008@gmail.com)
     */


    function Dep() {}

    Dep.prototype.depend = function (expr) {
        if (Dep.target) {
            Dep.target.push(expr);
        }
    };

    Dep.target = null;

    function resetTarget() {
        Dep.target = [];
    }

    function cleanTarget() {
        Dep.target = null;
    }

    /**
     * @file calcComputed override
     * @author cxtom(cxtom2008@gmail.com)
     */

    function calcComputed(computedExpr) {

        if (typeof computedExpr === 'object') {
            computedExpr = computedExpr.paths.map(function (a) { return a.value; }).join('.');
        }

        var computedDeps = this.computedDeps[computedExpr];
        if (!computedDeps) {
            computedDeps = this.computedDeps[computedExpr] = {};
        }

        resetTarget();
        var value = this.computed[computedExpr].call(this);
        var deps = Dep.target;
        cleanTarget();

        var me = this;

        for (var i = 0; i < deps.length; i++) {
            var dep = deps[i];
            var expr = dep.expr;
            var key = dep.key;
            if (!computedDeps[key]) {
                computedDeps[key] = 1;
                this.watch(expr, function () {
                    calcComputed.call(me, computedExpr);
                });
            }
        }

        this.data.set(computedExpr, value);
    }

    /**
     * @file 数据绑定
     * @author cxtom(cxtom2008@gmail.com)
     */


    function bindData () {
        var this$1 = this;

        var keys = ( this._dataKeys ).concat( this._propKeys);
        var keyLength = keys.length;

        var context = this;

        var loop = function ( i ) {
            var key = keys[i];
            def(context, key, {
                get: function get() {
                    return context.data.get(createAccesser(key));
                },
                set: function set(newVal) {
                    context.data.set(createAccesser(key), newVal);
                },
            });
        };

        for (var i = 0; i < keyLength; i++) loop( i );

        var me = this.data.owner = this;
        this.data._dep = new Dep();

        // define computed
        var loop$1 = function ( i ) {
            var key$1 = this$1._computedKeys[i];
            def(this$1, key$1, {
                get: function get() {
                    return me.data.get(createAccesser(key$1));
                },
            });
            calcComputed.call(this$1, key$1);
        };

        for (var i$1 = 0; i$1 < this$1._computedKeys.length; i$1++) loop$1( i$1 );
    }

    /**
     * @file slot
     * @author cxtom(cxtom2008@gmail.com)
     */

    function slot () {
        var ref = this;
        var slotChildren = ref.slotChildren;
        var lifeCycle = ref.lifeCycle;
        var sourceSlots = ref.sourceSlots;

        if (lifeCycle.attached) {
            return slotChildren.reduce(function (prev, child) {
                var name = child.name || 'default';
                if (!prev[name]) {
                    prev[name] = [];
                }
                prev[name] = prev[name].concat(child.children);
                return prev;
            }, {});
        }

        var slots = {};

        if (sourceSlots.named) {
            extend(slots, sourceSlots.named);
        }
        if (sourceSlots.noname) {
            slots.default = sourceSlots.noname;
        }

        return slots;
    }

    /**
     * @file call activated deactivated
     * @author cxtom(cxtom2008@gmail.com)
     */

    function createCallFactory(name) {
        return function call(direct) {
            var ele = this;
            if (ele.nodeType === san.NodeType.CMPT) {
                ele._toPhase(name);
            }
            if (ele.children && ele.children.length > 1) {
                ele.children.forEach(call);
            }
        };
    }

    var callActivited = createCallFactory('activited');
    var callDeActivited = createCallFactory('deactivited');

    /**
     * @file class utils
     * @author cxtom(cxtom2008@gmail.com)
     */

    var whitespaceRE = /\s+/;

    /**
     * Add class with compatibility for SVG since classList is not supported on
     * SVG elements in IE
     */
    function addClass(el, cls) {
        /* istanbul ignore if */
        if (!cls || !(cls = cls.trim())) {
            return;
        }

        /* istanbul ignore else */
        if (el.classList) {
            if (cls.indexOf(' ') > -1) {
                cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
            }
            else {
                el.classList.add(cls);
            }
        }
        else {
            var cur = " " + (el.getAttribute('class') || '') + " ";
            if (cur.indexOf(' ' + cls + ' ') < 0) {
                el.setAttribute('class', (cur + cls).trim());
            }
        }
    }

    /**
     * Remove class with compatibility for SVG since classList is not supported on
     * SVG elements in IE
     */
    function removeClass(el, cls) {
        /* istanbul ignore if */
        if (!cls || !(cls = cls.trim())) {
            return;
        }

        /* istanbul ignore else */
        if (el.classList) {
            if (cls.indexOf(' ') > -1) {
                cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
            }
            else {
                el.classList.remove(cls);
            }
            if (!el.classList.length) {
                el.removeAttribute('class');
            }
        }
        else {
            var cur = " " + (el.getAttribute('class') || '') + " ";
            var tar = ' ' + cls + ' ';
            while (cur.indexOf(tar) >= 0) {
                cur = cur.replace(tar, ' ');
            }
            cur = cur.trim();
            if (cur) {
                el.setAttribute('class', cur);
            }
            else {
                el.removeAttribute('class');
            }
        }
    }

    /**
     * @file s-transition
     * @author cxtom(cxtom2008@gmail.com)
     */

    var autoCssTransition = cached(function (name) {
        return {
            enterClass: (name + "-enter"),
            enterToClass: (name + "-enter-to"),
            enterActiveClass: (name + "-enter-active"),
            leaveClass: (name + "-leave"),
            leaveToClass: (name + "-leave-to"),
            leaveActiveClass: (name + "-leave-active"),
        };
    });

    function resolveTransition(def) {
        if (!def) {
            return;
        }
        /* istanbul ignore else */
        if (typeof def === 'object') {
            var res = {};
            if (def.css !== false) {
                extend(res, autoCssTransition(def.name || 'v'));
            }
            extend(res, def);
            return res;
        }
        else if (typeof def === 'string') {
            return autoCssTransition(def);
        }
    }

    var TRANSITION = 'transition';
    var ANIMATION = 'animation';

    // Transition property/event sniffing
    var transitionProp = 'transition';
    var transitionEndEvent = 'transitionend';
    var animationProp = 'animation';
    var animationEndEvent = 'animationend';
    /* istanbul ignore if */
    if (
        window.ontransitionend === undefined
        && window.onwebkittransitionend !== undefined
    ) {
        transitionProp = 'WebkitTransition';
        transitionEndEvent = 'webkitTransitionEnd';
    }
    if (
        window.onanimationend === undefined
        && window.onwebkitanimationend !== undefined
    ) {
        animationProp = 'WebkitAnimation';
        animationEndEvent = 'webkitAnimationEnd';
    }

    var raf = window.requestAnimationFrame
        ? window.requestAnimationFrame.bind(window)
        : setTimeout;

    function nextFrame(fn) {
        raf(function () {
            raf(fn);
        });
    }

    var transformRE = /\b(transform|all)(,|$)/;

    function getTransitionInfo(el, expectedType) {
        var styles = window.getComputedStyle(el);
        // JSDOM may return undefined for transition properties
        var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
        var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
        var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
        var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
        var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
        var animationTimeout = getTimeout(animationDelays, animationDurations);

        var type;
        var timeout = 0;
        var propCount = 0;
        /* istanbul ignore if */
        if (expectedType === TRANSITION) {
            if (transitionTimeout > 0) {
                type = TRANSITION;
                timeout = transitionTimeout;
                propCount = transitionDurations.length;
            }
        }
        else if (expectedType === ANIMATION) {
            if (animationTimeout > 0) {
                type = ANIMATION;
                timeout = animationTimeout;
                propCount = animationDurations.length;
            }
        }
        else {
            timeout = Math.max(transitionTimeout, animationTimeout);
            type = timeout > 0
                ? transitionTimeout > animationTimeout
                    ? TRANSITION
                    : ANIMATION
                : null;
            propCount = type
                ? type === TRANSITION
                    ? transitionDurations.length
                    : animationDurations.length
                : 0;
        }
        var hasTransform =
            type === TRANSITION
            && transformRE.test(styles[transitionProp + 'Property']);
        return {
            type: type,
            timeout: timeout,
            propCount: propCount,
            hasTransform: hasTransform,
        };
    }

    function getTimeout(delays, durations) {
        /* istanbul ignore next */
        while (delays.length < durations.length) {
            delays = delays.concat(delays);
        }

        return Math.max.apply(null, durations.map(function (d, i) {
            return toMs(d) + toMs(delays[i]);
        }));
    }

    // Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
    // in a locale-dependent way, using a comma instead of a dot.
    // If comma is not replaced with a dot, the input will be rounded down (i.e. acting
    // as a floor function) causing unexpected behaviors
    function toMs(s) {
        return Number(s.slice(0, -1).replace(',', '.')) * 1000;
    }

    function addTransitionClass(el, cls) {
        var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
        if (transitionClasses.indexOf(cls) < 0) {
            transitionClasses.push(cls);
            addClass(el, cls);
        }
    }

    function removeTransitionClass(el, cls) {
        if (el._transitionClasses) {
            remove(el._transitionClasses, cls);
        }
        removeClass(el, cls);
    }

    function isValidDuration(val) {
        return typeof val === 'number' && !isNaN(val);
    }

    function whenTransitionEnds(el, expectedType, cb) {
        var ref = getTransitionInfo(el, expectedType);
        var type = ref.type;
        var timeout = ref.timeout;
        var propCount = ref.propCount;
        if (!type) {
            return cb();
        }
        var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
        var ended = 0;
        var onEnd = function (e) {
            if (e.target === el) {
                if (++ended >= propCount) {
                    // eslint-disable-next-line no-use-before-define
                    end();
                }
            }
        };
        var end = function () {
            el.removeEventListener(event, onEnd);
            cb();
        };
        setTimeout(function () {
            if (ended < propCount) {
                end();
            }
        }, timeout + 1);
        el.addEventListener(event, onEnd);
    }

    function Transition (options) {

        var ref = resolveTransition(options);
        var css = ref.css;
        var type = ref.type;
        var enterClass = ref.enterClass;
        var enterToClass = ref.enterToClass;
        var enterActiveClass = ref.enterActiveClass;
        var appearClass = ref.appearClass;
        var appearToClass = ref.appearToClass;
        var appearActiveClass = ref.appearActiveClass;
        var beforeEnter = ref.beforeEnter;
        var enter = ref.enter;
        var afterEnter = ref.afterEnter;
        var enterCancelled = ref.enterCancelled;
        var beforeAppear = ref.beforeAppear;
        var appear = ref.appear;
        var afterAppear = ref.afterAppear;
        var appearCancelled = ref.appearCancelled;
        var leaveClass = ref.leaveClass;
        var leaveToClass = ref.leaveToClass;
        var leaveActiveClass = ref.leaveActiveClass;
        var beforeLeave = ref.beforeLeave;
        var leave = ref.leave;
        var afterLeave = ref.afterLeave;
        var leaveCancelled = ref.leaveCancelled;
        var delayLeave = ref.delayLeave;
        var duration = ref.duration;

        var context = this;
        var expectsCSS = css !== false;

        return {
            enter: enterHandler,
            leave: leaveHandler,
        };

        function getHook(fn) {
            if (!fn) {
                return false;
            }
            if (typeof fn === 'function') {
                return fn;
            }
            var invokerFn = context.owner[fn];
            if (invokerFn && typeof invokerFn === 'function') {
                return invokerFn;
            }
            return false;
        }

        function enterHandler(el, done) {
            var isAppear = !context.lifeCycle.attached;

            // call leave callback now
            if (el._leaveCb) {
                el._leaveCb.cancelled = true;
                el._leaveCb();
            }

            /* istanbul ignore if */
            if (el._enterCb || el.nodeType !== 1) {
                return;
            }

            if (isAppear && !appear) {
                return;
            }

            var startClass = isAppear && appearClass
                ? appearClass
                : enterClass;
            var activeClass = isAppear && appearActiveClass
                ? appearActiveClass
                : enterActiveClass;
            var toClass = isAppear && appearToClass
                ? appearToClass
                : enterToClass;

            var beforeEnterHook = isAppear
                ? (getHook(beforeAppear) || getHook(beforeEnter))
                : getHook(beforeEnter);
            var enterHook = isAppear
                ? (getHook(appear) || getHook(enter))
                : getHook(enter);
            var afterEnterHook = isAppear
                ? (getHook(afterAppear) || getHook(afterEnter))
                : getHook(afterEnter);
            var enterCancelledHook = isAppear
                ? (getHook(appearCancelled) || getHook(enterCancelled))
                : getHook(enterCancelled);

            var explicitEnterDuration = +(isObject(duration) ? duration.enter : duration);
            var userWantsControl = enterHook && enterHook.length > 1;

            var cb = el._enterCb = once(function () {
                if (expectsCSS) {
                    removeTransitionClass(el, toClass);
                    removeTransitionClass(el, activeClass);
                }
                if (cb.cancelled) {
                    if (expectsCSS) {
                        removeTransitionClass(el, startClass);
                    }
                    enterCancelledHook && enterCancelledHook(el);
                }
                else {
                    afterEnterHook && afterEnterHook(el);
                }
                el._enterCb = null;
            });

            // start enter transition
            enterHook && enterHook(el, cb);
            beforeEnterHook && beforeEnterHook(el);
            if (expectsCSS) {
                addTransitionClass(el, startClass);
                addTransitionClass(el, activeClass);
                nextFrame(function () {
                    removeTransitionClass(el, startClass);
                    if (!cb.cancelled) {
                        addTransitionClass(el, toClass);
                        if (!userWantsControl) {
                            if (isValidDuration(explicitEnterDuration)) {
                                setTimeout(cb, explicitEnterDuration);
                            }
                            else {
                                whenTransitionEnds(el, type, cb);
                            }
                        }
                    }
                });
            }

            if (!expectsCSS && !userWantsControl) {
                cb();
            }

            done();
        }

        function leaveHandler(el, done) {

            // call enter callback now
            if (el._enterCb) {
                el._enterCb.cancelled = true;
                el._enterCb();
            }

            /* istanbul ignore if */
            if (el._leaveCb) {
                return;
            }

            var leaveHook = getHook(leave);
            var delayLeaveHook = getHook(delayLeave);
            var beforeLeaveHook = getHook(beforeLeave);
            var afterLeaveHook = getHook(afterLeave);

            var explicitLeaveDuration = +(isObject(duration) ? duration.leave : duration);
            var userWantsControl = leaveHook && leaveHook.length > 1;

            var cb = el._leaveCb = once(function () {
                if (expectsCSS) {
                    removeTransitionClass(el, leaveToClass);
                    removeTransitionClass(el, leaveActiveClass);
                }
                if (cb.cancelled) {
                    if (expectsCSS) {
                        removeTransitionClass(el, leaveClass);
                    }
                    leaveCancelled && leaveCancelled(el);
                }
                else {
                    done();
                    afterLeaveHook && afterLeaveHook(el);
                }
                el._leaveCb = null;
            });

            if (delayLeaveHook) {
                delayLeaveHook(performLeave);
            }
            else {
                performLeave();
            }

            function performLeave() {
                // the delayed leave may have already been cancelled
                if (cb.cancelled) {
                    return;
                }
                beforeLeaveHook && beforeLeaveHook(el);
                if (expectsCSS) {
                    addTransitionClass(el, leaveClass);
                    addTransitionClass(el, leaveActiveClass);
                    nextFrame(function () {
                        removeTransitionClass(el, leaveClass);
                        if (!cb.cancelled) {
                            addTransitionClass(el, leaveToClass);
                            if (!userWantsControl) {
                                if (isValidDuration(explicitLeaveDuration)) {
                                    setTimeout(cb, explicitLeaveDuration);
                                }
                                else {
                                    whenTransitionEnds(el, type, cb);
                                }
                            }
                        }
                    });
                }
                leaveHook && leaveHook(el, cb);
                if (!expectsCSS && !userWantsControl) {
                    cb();
                }
            }
        }
    }

    /**
     * @file component
     * @author cxtom(cxtom2008@gmail.com)
     */

    var noop = function () {};

    /* eslint-disable fecs-camelcase */
    var defaultSanOptions = {
        $activate: callActivited,
        $deactivate: callDeActivited,
        _mc: mergeClass,
        _ms: mergeStyle,
        _l: loopExpression,
        _ex: extend,
        _ocp: objectComputedProperties,
        _noop: noop,
        _t: Transition,
        getComponentType: getComponentType,
        $emit: san.Component.prototype.fire,
        $on: san.Component.prototype.on,
        $watch: san.Component.prototype.watch,
        $nextTick: san.nextTick,
    };
    /* eslint-enable fecs-camelcase */

    var memberMap = {
        $el: function $el() {
            return this.el;
        },
        $context: function $context() {
            return this.owner;
        },
        $parent: function $parent() {
            return this.parentComponent;
        },
        $children: function $children() {
            return this.children.filter(function (child) { return child.nodeType === 5; });
        },
        $root: function $root() {
            var root = this;
            if (this.parentComponent) {
                while (root.parentComponent) {
                    root = root.parentComponent;
                }
            }
            return root;
        },
        $slots: slot,
        _isDestroyed: function _isDestroyed() {
            return !!this.lifeCycle.disposed;
        },
    };

    var originalUpdate = san.Component.prototype._update;

    san.Component.prototype._update = function (changes) {
        if (changes) {
            this._toPhase('beforeUpdate');
        }
        originalUpdate.call(this, changes);
    };

    var innerKey = '_SanCtor';

    function define(options) {

        if (options[innerKey]) {
            return options[innerKey];
        }

        var prePareOptions = {};

        if (options.components) {
            prePareOptions.components = Object
                .keys(options.components)
                .reduce(function (prev, key) {
                    var component = options.components[key];
                    prev[key] = prev[hyphenate(key)] = component instanceof san.Component
                        ? component
                        : (component.template || component.aNode ? san.defineComponent(component) : define(component));
                    return prev;
                }, {});
            prePareOptions._cmptReady = 1;
        }

        if (options.template || options.aNode || options instanceof san.Component) {
            return san.defineComponent(extend({}, options, prePareOptions));
        }

        var sanOptions = extend(prePareOptions, {
            template: options.__santemplate,
            aNode: options.__sanaNode,
            _isSan: true,
        }, defaultSanOptions, mergeOptions(options));

        var compiledHook = sanOptions.compiled;
        sanOptions.compiled = function () {

            this._calcComputed = noop;

            compiledHook && compiledHook.call(this);

            var properties = Object
                .keys(memberMap)
                .reduce(function (props, key) {
                    props[key] = {
                        get: function get() {
                            return memberMap[key].call(this);
                        },
                    };
                    return props;
                }, {});

            properties.$options = {
                value: options,
            };

            Object.defineProperties(this, properties);
        };

        var refs = options.__sanRefs;
        var initedHook = sanOptions.inited;
        sanOptions.inited = function () {
            var this$1 = this;

            var me = this;
            this.$refs = Object.create(null);

            if (refs) {
                var loop = function ( i, len ) {
                    var r = refs[i];
                    def(me.$refs, r.name, {
                        get: function get() {
                            return r.root ? me.el : me.ref(r.name);
                        },
                    });
                };

                for (var i = 0, len = refs.length; i < len; i++) loop( i, len );
                // overwrite san component api for support v-for + ref
                me.ref = ref;
            }

            // merge css modules
            if (this.$style) {
                this.data.set(createAccesser('$style'), freeze(this.$style));
            }

            bindData.call(this);

            for (var i$1 = 0; i$1 < this._methodKeys.length; i$1++) {
                var key = this._methodKeys[i$1];
                this[key] = this[key].bind(this);
            }

            initedHook && initedHook.call(this);

            if (options.watch) {
                Object.keys(options.watch).forEach(function (key) {
                    this$1.watch(key, options.watch[key].bind(this$1));
                });
            }

            if (options.preprocessANode) {
                options.preprocessANode.call(this);
            }
        };

        var beforeUpdateHook = sanOptions.beforeUpdate;
        sanOptions.beforeUpdate = function () {
            beforeUpdateHook && beforeUpdateHook.call(this);

            if (options.preprocessANode) {
                options.preprocessANode.call(this);
            }
        };

        sanOptions.initData = function () {

            var me = this;

            var defaultProps = {};
            if (options.props) {
                var propKeys = me._propKeys = options._propKeys = options.props
                    ? (Array.isArray(options.props) ? options.props : Object.keys(options.props))
                    : [];

                // 默认属性
                if (!Array.isArray(options.props)) {
                    for (var i = 0, len = propKeys.length; i < len; i++) {
                        var p = propKeys[i];
                        var prop = options.props[p];
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

            var data = typeof options.data === 'function'
                ? options.data.call(extend({}, defaultProps, this._srcSbindData))
                : (options.data || {});

            this._dataKeys = Object.keys(data) || [];

            return extend({$style: {}}, defaultProps, data);
        };

        var cmpt = san.defineComponent(sanOptions);

        return options[innerKey] = cmpt;
    }

    exports.defineComponent = define;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
