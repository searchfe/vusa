/*!
 * vusa v1.0.0
 * (c) 2019-2021 * Released under the MIT License.
 */
/* eslint-disable */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('san')) :
    typeof define === 'function' && define.amd ? define(['exports', 'san'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Vusa = {}, global.san));
}(this, (function (exports, san) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var san__namespace = /*#__PURE__*/_interopNamespace(san);

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
     * Get the raw type string of a value, e.g., [object Object].
     */
    var _toString = Object.prototype.toString;

    /**
     * Quick object check - this is primarily used to tell
     * Objects from primitive values when we know the value
     * is a JSON-compliant type.
     */
    function isObject(obj) {
        return obj !== null && typeof obj === 'object';
    }

    /**
     * Check whether an object has the property.
     */
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    function hasOwn(obj, key) {
        return hasOwnProperty.call(obj, key);
    }

    /**
     * Strict object type check. Only returns true
     * for plain JavaScript objects.
     */
    function isPlainObject(obj) {
        return _toString.call(obj) === '[object Object]';
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

    function isPrimitive(value) {
        return (
            typeof value === 'string'
            || typeof value === 'number'
            || typeof value === 'symbol'
            || typeof value === 'boolean'
        );
    }

    function isValidArrayIndex(val) {
        var n = parseFloat(String(val));
        return n >= 0 && Math.floor(n) === n && isFinite(val);
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

    function hyphenateKey(object) {
        var ret = {};
        for (var key in object) {
            if (Object.hasOwnProperty.call(object, key)) {
                ret[hyphenate(key)] = object[key];
            }
        }
        return ret;
    }

    // normalize possible array / string values into Object
    function normalizeStyleBinding(bindingStyle) {
        if (Array.isArray(bindingStyle)) {
            return hyphenateKey(toObject(bindingStyle));
        }
        if (typeof bindingStyle === 'string') {
            return parseStyleText(bindingStyle);
        }
        return hyphenateKey(bindingStyle);
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
                        value = ref && san__namespace.evalExpr(ref.value, element.scope, owner);
                        if (ref && (value === name || camelize(value) === name)) {
                            return nodeType === 4 ? element.el : element.children.map(elementTraversal);
                        }
                        break;

                    case 5:
                        ref = element.source.directives.ref;
                        value = ref && san__namespace.evalExpr(ref.value, element.scope, owner);
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
        errorCaptured: 'error',
    };

    var lifeCycleKeys = Object.keys(lifeCycleMap);

    /**
     * @file 全局生效的函数
     * @author cxtom(cxtom2008@gmail.com)
     */

    var MATH_METHOD = [
        'floor', 'ceil', 'round',
        'abs', 'max', 'min', 'pow' ];

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
        json: function json(obj) {
            return JSON.stringify(obj);
        },
        lower: function lower(str) {
            return str.toLowerCase();
        },
        upper: function upper(str) {
            return str.toUpperCase();
        },
        _cat: function _cat(a, b) {
            return (a || '').toString() + (b || '');
        },
    };

    /**
     * @file merge options
     * @author cxtom(cxtom2008@gmail.com)
     */

    var keys = [
        'filters' ];

    var globalOptions = {
        methods: methods,
        filters: filters,
    };

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
            ? [globalOptions ].concat( options.mixins, [options])
            : [globalOptions, options];

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
                    var this$1$1 = this;

                    hooks.forEach(function (hook) { return hook.call(this$1$1); }, this);
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

    function calcComputed(computedExpr, computed) {

        if (typeof computedExpr === 'object') {
            computedExpr = computedExpr.paths.map(function (a) { return a.value; }).join('.');
        }

        var computedDeps = this.computedDeps[computedExpr];
        if (!computedDeps) {
            computedDeps = this.computedDeps[computedExpr] = {};
        }

        resetTarget();
        var value = computed[computedExpr].call(this);
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
                    calcComputed.call(me, computedExpr, computed);
                });
            }
        }

        this.data.set(computedExpr, value);
    }

    /**
     * @file 数据绑定
     * @author cxtom(cxtom2008@gmail.com)
     */

    var arrayProto = Array.prototype;
    var arrayMethods = Object.create(arrayProto);

    var methodsToPatch = [
        'push',
        'pop',
        'shift',
        'unshift',
        'splice',
        'sort',
        'reverse' ];

    /**
     * Intercept mutating methods and emit events
     */
    methodsToPatch.forEach(function (method) {
        // cache original method
        var original = arrayProto[method];
        def(arrayMethods, method, {
            value: function value() {
                var args = [], len = arguments.length;
                while ( len-- ) args[ len ] = arguments[ len ];

                var ob = this.__ob__;
                switch (method) {
                    case 'push':
                    case 'unshift':
                        ob.context.data[method](ob.expr, args[0]);
                        break;
                    case 'pop':
                    case 'shift':
                        ob.context.data[method](ob.expr);
                        break;
                    case 'splice':
                        ob.context.data.splice(ob.expr, args);
                        break;
                    default:
                        ob.context.data.set(ob.expr, original.apply(this.slice(), args));
                }
                var result = ob.context.data.get(ob.expr);
                observe(result, ob.expr, ob.context);
                return result;
            },
        });
    });

    var Observer = function Observer(value, expr, context) {
        this.expr = expr;
        this.context = context;
        def(value, '__ob__', {
            value: this,
        });

        this.value = value;

        if (Array.isArray(value)) {
            // eslint-disable-next-line no-proto
            value.__proto__ = arrayMethods;
            this.observeArray(value);
        }
        else {
            this.keys = Object.keys(value) || [];
            this.walk(value);
        }
    };

    /**
     * Walk through all properties and convert them into
     * getter/setters. This method should only be called when
     * value type is Object.
     */
    Observer.prototype.walk = function walk (obj) {
        var keys = this.keys;
        for (var i = 0; i < keys.length; i++) {
            defineReactive(obj, keys[i], this.expr, this.context);
        }
    };

    /**
     * Observe a list of Array items.
     */
    Observer.prototype.observeArray = function observeArray (items) {
        for (var i = 0, l = items.length; i < l; i++) {
            observe(items[i], extend({}, this.expr, {
                paths: ( this.expr.paths ).concat( [{
                    type: san.ExprType.NUMBER,
                    value: i,
                }]),
            }), this.context);
        }
    };

    function defineReactive(obj, key, expr, context) {

        var property = Object.getOwnPropertyDescriptor(obj, key);
        if (property && property.configurable === false) {
            return;
        }

        // cater for pre-defined getter/setters
        var getter = property && property.get;
        var setter = property && property.set;

        var keyExpr = {
            type: san.ExprType.ACCESSOR,
            paths: ( expr.paths ).concat( [{
                type: san.ExprType.STRING,
                value: key,
            }]),
        };

        var dep = new Dep();

        var val = obj[key];
        observe(val, keyExpr, context);
        var newProperty = {
            enumerable: true,
            configurable: true,
            set: function set(newVal) {
                var value = getter ? getter.call(obj) : val;
                if (newVal === value) {
                    return;
                }
                if (getter && !setter) {
                    return;
                }
                if (setter) {
                    setter.call(obj, newVal);
                }
                else {
                    val = newVal;
                }
                observe(newVal, keyExpr, context);
                context.data.set(keyExpr, newVal, {force: true});
            },
            get: function get() {
                dep.depend({
                    context: context,
                    expr: keyExpr,
                });
                var value = getter ? getter.call(obj) : val;
                return value;
            },
        };
        def(obj, key, newProperty);
    }

    // const defaultExpr = {
    //     type: ExprType.ACCESSOR,
    //     paths: [],
    // };

    function observe(value, expr, context) {
        if (!isObject(value)) {
            return;
        }
        var ob;
        if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
            ob = value.__ob__;
        }
        else if (
            (Array.isArray(value) || isPlainObject(value))
            && Object.isExtensible(value)
        ) {
            ob = new Observer(value, expr, context);
        }
        return ob;
    }

    function set(target, propertyNameOrIndex, value) {
        if (target == null || isPrimitive(target)) {
            return;
        }
        var expr = san.parseExpr(propertyNameOrIndex);
        if (target.nodeType === san.NodeType.CMPT) {
            target.data.set(expr, value, {
                force: true,
            });
            return value;
        }
        var ob = target.__ob__;
        if (ob && Array.isArray(target) && isValidArrayIndex(propertyNameOrIndex)) {
            target.length = Math.max(target.length, propertyNameOrIndex);
            ob.context.data.splice(ob.expr, expr, 1, value);
        }
        else if (ob) {
            var finalExpr = {
                type: san.ExprType.ACCESSOR,
                paths: ( ob.expr.paths ).concat( expr.paths),
            };
            ob.context.set(finalExpr, value, {
                force: true,
            });
        }
    }

    function bindData (computed) {
        var this$1$1 = this;

        // const expr = extend({}, defaultExpr);
        var keys = ( this._dataKeys ).concat( this._propKeys);
        var keyLength = keys.length;

        var context = this;

        var dep = new Dep();

        var loop = function ( i ) {
            var key = keys[i];
            var keyExpr = {
                type: san.ExprType.ACCESSOR,
                paths: [{
                    type: san.ExprType.STRING,
                    value: key,
                }],
            };
            def(context, key, {
                get: function get() {
                    dep.depend({
                        context: context,
                        expr: keyExpr,
                    });
                    var val = context.data.get(keyExpr);
                    observe(val, keyExpr, context);
                    return val;
                },
                set: function set(newVal) {
                    if (hasOwn(newVal, '__ob__')) {
                        if (Array.isArray(newVal)) {
                            newVal = newVal.slice();
                        }
                        else {
                            newVal = Object.assign({}, newVal);
                        }
                    }
                    context.data.set(keyExpr, newVal);
                },
            });
        };

        for (var i = 0; i < keyLength; i++) loop( i );

        var me = this.data.owner = this;

        // define computed
        this.computedDeps = {};
        var loop$1 = function ( i ) {
            var key$1 = this$1$1._computedKeys[i];
            calcComputed.call(this$1$1, key$1, computed);
            def(this$1$1, key$1, {
                get: function get() {
                    return me.data.get(createAccesser(key$1));
                },
            });
        };

        for (var i$1 = 0; i$1 < this$1$1._computedKeys.length; i$1++) loop$1( i$1 );
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

    var inBrowser = typeof window !== 'undefined';
    var TRANSITION = 'transition';
    var ANIMATION = 'animation';

    // Transition property/event sniffing
    var transitionProp = 'transition';
    var transitionEndEvent = 'transitionend';
    var animationProp = 'animation';
    var animationEndEvent = 'animationend';

    if (inBrowser) {
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
    }

    var raf = inBrowser
        ? window.requestAnimationFrame
            ? window.requestAnimationFrame.bind(window)
            : setTimeout
        : function (fn) { return fn(); };

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
        var hasTransform = type === TRANSITION
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

    function processAttr(str) {
        return str.split(/(?=<)/g).map(function (subStr) {
            if (/^<\//.test(subStr) || (subStr.indexOf('>') < 0)) {
                return subStr;
            }
            var reg = /\s*(on[^\s"'<>\/=]+)\s*=/gi;
            var gtIndex = subStr.indexOf('>');
            var back = subStr.slice(gtIndex + 1);
            var front = subStr.slice(0, gtIndex + 1).replace(reg, function (match, match1) {
                return match.replace(match1, match1 + '-safe');
            });
            return front + back;
        }).join('');
    }

    function toSafeString(html) {
        if (html.indexOf('<') > -1) {
            var reg = /((<script.*?<\/script>)|(<style.*?<\/style>))/ig;
            var map = {
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;', // 与 PHP 转义保持一致
            };
            html = html.replace(reg, function (match) {
                return match.replace(/([<>"])/g, function (char) {
                    return map[char];
                });
            });
            return processAttr(html);
        }
        return html;
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
        _sf: toSafeString,
        $emit: san.Component.prototype.fire,
        $on: san.Component.prototype.on,
        $watch: san.Component.prototype.watch,
        $nextTick: san.nextTick,
        $set: set,
    };
    /* eslint-enable fecs-camelcase */

    var VusaComponent = san.defineComponent(defaultSanOptions);

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

    var styleAccesser = createAccesser('$style');

    function normalizeComponent(component) {
        if (component instanceof san.Component || component instanceof VusaComponent) {
            return component;
        }
        if (typeof component === 'function') {
            return san.createComponentLoader(function () {
                return new Promise(function (resolve) {
                    component(function (cmpt) {
                        resolve(define(cmpt));
                    });
                });
            });
        }
        return component.template || component.aNode || component.aPack
            ? san.defineComponent(component)
            : define(component);
    }

    function define(options) {

        if (options[innerKey]) {
            return options[innerKey];
        }

        if (typeof options === 'function') {
            return normalizeComponent(options);
        }

        var prePareOptions = {};

        if (options.components) {
            prePareOptions.components = Object
                .keys(options.components)
                .reduce(function (prev, key) {
                    var component = options.components[key];
                    prev[key] = prev[hyphenate(key)] = normalizeComponent(component);
                    return prev;
                }, extend({}, globalOptions.components));
            prePareOptions._cmptReady = 1;
        }

        if (
            options.template || options.aNode || options.aPack
            || options instanceof san.Component || options instanceof VusaComponent
        ) {
            return san.defineComponent(extend({}, options, prePareOptions));
        }

        var optimizeSSR = options.__sanOptimizeSSR || false;

        var sanOptions = extend(prePareOptions, {
            template: options.__santemplate,
            aNode: options.__sanaNode,
            aPack: options.__sanaPack,
            _isSan: true,
        }, mergeOptions(options));

        var refs = options.__sanRefs;
        var initedHook = sanOptions.inited;
        sanOptions.inited = function () {
            var this$1$1 = this;

            var me = this;

            if (!optimizeSSR) {
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
            }

            // merge css modules
            if (this.$style) {
                this.data.set(styleAccesser, freeze(this.$style));
            }

            if (!optimizeSSR) {
                bindData.call(this, options.computed);
            }
            else if (options.computed && optimizeSSR) {
                for (var key in options.computed) {
                    if (Object.hasOwnProperty.call(options.computed, key)) {
                        var element = options.computed[key];
                        this.data.data[key] = element.call(this.data.data);
                    }
                }
            }

            initedHook && initedHook.call(this);

            if (options.watch && !optimizeSSR) {
                Object.keys(options.watch).forEach(function (key) {
                    this$1$1.watch(key, options.watch[key].bind(this$1$1));
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

        var compiledHook = sanOptions.compiled;
        sanOptions.initData = function () {

            this._calcComputed = noop;

            // san-ssr 下没有执行 compiled 生命周期
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

            var me = this;

            var defaultProps = {};
            if (options.props) {
                var propKeys = options.props
                    ? (Array.isArray(options.props) ? options.props : Object.keys(options.props))
                    : [];

                if (!optimizeSSR) {
                    me._propKeys = options._propKeys = propKeys;
                }

                var propKeyLength = propKeys.length;

                // 默认属性
                if (propKeyLength > 0 && !Array.isArray(options.props)) {
                    for (var i = 0, len = propKeys.length; i < len; i++) {
                        var p = propKeys[i];
                        var prop = options.props[p];
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

            var data = typeof options.data === 'function'
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

            var initialData = extend({$style: {}}, defaultProps, data);

            if (!optimizeSSR && options.computed) {
                me._computedKeys = Object.keys(options.computed);
            }
            else if (!optimizeSSR) {
                me._computedKeys = [];
            }

            return initialData;
        };

        var cmpt = san.defineComponent(sanOptions, VusaComponent);

        return options[innerKey] = cmpt;
    }

    var mixin = function (options) {
        mergeOptions(options);
    };

    var component = function (name, Component) {
        globalOptions.components = globalOptions.components || {};
        globalOptions.components[name] = define(Component);
    };

    exports.component = component;
    exports.defineComponent = define;
    exports.mixin = mixin;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
