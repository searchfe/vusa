(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("san"));
	else if(typeof define === 'function' && define.amd)
		define(["san"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("san")) : factory(root["san"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toObject = toObject;
exports.remove = remove;
exports.isObject = isObject;
exports.hasOwn = hasOwn;
exports.isPlainObject = isPlainObject;
exports.def = def;
exports.cached = cached;
exports.once = once;
exports.camelize = exports.hyphenate = exports._toString = exports.extend = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var extend = Object.assign;
exports.extend = extend;

function toObject(arr) {
  var res = {};

  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }

  return res;
}

function remove(arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);

    if (index > -1) {
      return arr.splice(index, 1);
    }
  }
}

var _toString = Object.prototype.toString;
exports._toString = _toString;

function isObject(obj) {
  return obj !== null && _typeof(obj) === 'object';
}

var hasOwnProperty = Object.prototype.hasOwnProperty;

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function def(obj, key, property) {
  Object.defineProperty(obj, key, extend({
    enumerable: false,
    configurable: true
  }, property));
}

function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

var hyphenateRE = /([^-])([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '$1-$2').replace(hyphenateRE, '$1-$2').toLowerCase();
});
exports.hyphenate = hyphenate;

var camelize = function camelize(str) {
  return str.replace(/-(\w)/g, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
};

exports.camelize = camelize;

function once(fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  };
}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
exports.Dep = Dep;
exports.resetTarget = resetTarget;
exports.cleanTarget = cleanTarget;

var _util = __webpack_require__(0);

var _san = __webpack_require__(1);

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);
var methodsToPatch = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];
methodsToPatch.forEach(function (method) {
  var original = arrayProto[method];
  (0, _util.def)(arrayMethods, method, {
    value: function value() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var result = original.apply(this, args);
      var ob = this.__ob__;
      var inserted;

      switch (method) {
        case 'push':
        case 'unshift':
          inserted = args;
          break;

        case 'splice':
          inserted = args.slice(2);
          break;
      }

      if (inserted) {
        ob.observeArray(inserted);
      }

      ob.context.data.set(ob.expr, this, {
        force: true
      });
      observe(ob.context.data.get(ob.expr), ob.expr, ob.context);
      return result;
    }
  });
});

var Observer = function () {
  function Observer(value, expr, context) {
    _classCallCheck(this, Observer);

    this.expr = expr;
    this.context = context;
    (0, _util.def)(value, '__ob__', {
      value: this
    });
    this.value = value;

    if (Array.isArray(value)) {
      value.__proto__ = arrayMethods;
      this.observeArray(value);
    } else {
      this.keys = Object.keys(value) || [];
      this.walk(value);
    }
  }

  _createClass(Observer, [{
    key: "walk",
    value: function walk(obj) {
      var keys = this.keys;

      for (var i = 0; i < keys.length; i++) {
        defineReactive(obj, keys[i], this.expr, this.context);
      }
    }
  }, {
    key: "observeArray",
    value: function observeArray(items) {
      for (var i = 0, l = items.length; i < l; i++) {
        observe(items[i], (0, _util.extend)({}, this.expr, {
          paths: [].concat(_toConsumableArray(this.expr.paths), [{
            type: _san.ExprType.NUMBER,
            value: i
          }])
        }), this.context);
      }
    }
  }]);

  return Observer;
}();

function defineReactive(obj, key, expr, context) {
  var property = Object.getOwnPropertyDescriptor(obj, key);

  if (property && property.configurable === false) {
    return;
  }

  var getter = property && property.get;
  var setter = property && property.set;
  var keyExpr = {
    type: _san.ExprType.ACCESSOR,
    paths: [].concat(_toConsumableArray(expr.paths), [{
      type: _san.ExprType.STRING,
      value: key
    }])
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
      } else {
        val = newVal;
      }

      observe(newVal, keyExpr, context);
      context.data.set(keyExpr, newVal, {
        force: true
      });
    },
    get: function get() {
      dep.depend(keyExpr);
      var value = getter ? getter.call(obj) : val;
      return value;
    }
  };
  (0, _util.def)(obj, key, newProperty);
}

var defaultExpr = {
  type: _san.ExprType.ACCESSOR,
  paths: []
};

function _default() {
  var expr = (0, _util.extend)({}, defaultExpr);
  var keys = [].concat(_toConsumableArray(this._dataKeys), _toConsumableArray(this._propKeys));
  var keyLength = keys.length;
  observe(this.data.get(), expr, this);
  var context = this;
  this._data = this.data.get();

  var _loop = function _loop(i) {
    var key = keys[i];
    (0, _util.def)(context, key, {
      get: function get() {
        return context._data[key];
      },
      set: function set(newVal) {
        context._data[key] = newVal;
      }
    });
  };

  for (var i = 0; i < keyLength; i++) {
    _loop(i);
  }
}

function observe(value, expr, context) {
  if (!(0, _util.isObject)(value)) {
    return;
  }

  var ob;

  if ((0, _util.hasOwn)(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if ((Array.isArray(value) || (0, _util.isPlainObject)(value)) && Object.isExtensible(value)) {
    ob = new Observer(value, expr, context);
  }

  return ob;
}

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

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _util = __webpack_require__(0);

function _default() {
  var slotChildren = this.slotChildren,
      lifeCycle = this.lifeCycle,
      sourceSlots = this.sourceSlots;

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
    (0, _util.extend)(slots, sourceSlots.named);
  }

  if (sourceSlots.noname) {
    slots.default = sourceSlots.noname;
  }

  return slots;
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "defineComponent", {
  enumerable: true,
  get: function get() {
    return _defineComponent.default;
  }
});

var _defineComponent = _interopRequireDefault(__webpack_require__(5));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = define;

__webpack_require__(6);

var _san = __webpack_require__(1);

var _util = __webpack_require__(0);

var _mergeClass = _interopRequireDefault(__webpack_require__(7));

var _mergeStyle = _interopRequireDefault(__webpack_require__(8));

var _loopExpression = _interopRequireDefault(__webpack_require__(9));

var _getComponentType = _interopRequireDefault(__webpack_require__(10));

var _objectComputedPropertirs = _interopRequireDefault(__webpack_require__(11));

var _ref = _interopRequireDefault(__webpack_require__(12));

var _mergeOptions = _interopRequireDefault(__webpack_require__(13));

var _bindData = _interopRequireDefault(__webpack_require__(2));

var _calcComputed = _interopRequireDefault(__webpack_require__(16));

var _getSlots = _interopRequireDefault(__webpack_require__(3));

var _callActivatedHook = __webpack_require__(17);

var _transition = _interopRequireDefault(__webpack_require__(18));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noop = function noop() {};

var defaultSanOptions = {
  $activate: _callActivatedHook.callActivited,
  $deactivate: _callActivatedHook.callDeActivited,
  _mc: _mergeClass.default,
  _ms: _mergeStyle.default,
  _l: _loopExpression.default,
  _ex: _util.extend,
  _ocp: _objectComputedPropertirs.default,
  _noop: noop,
  _t: _transition.default,
  getComponentType: _getComponentType.default,
  $emit: _san.Component.prototype.fire,
  $on: _san.Component.prototype.on,
  $watch: _san.Component.prototype.watch,
  $nextTick: _san.nextTick
};
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
    return this.children.filter(function (child) {
      return child.nodeType === 5;
    });
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
  $slots: _getSlots.default,
  _isDestroyed: function _isDestroyed() {
    return !!this.lifeCycle.disposed;
  }
};
var originalUpdate = _san.Component.prototype._update;

_san.Component.prototype._update = function (changes) {
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

  var sanOptions = (0, _util.extend)({
    template: options.__santemplate,
    aNode: options.__sanaNode,
    _isSan: true
  }, defaultSanOptions, (0, _mergeOptions.default)(options));
  var compiledHook = sanOptions.compiled;

  sanOptions.compiled = function () {
    this._calcComputed = noop;
    compiledHook && compiledHook.call(this);
    var properties = Object.keys(memberMap).reduce(function (props, key) {
      props[key] = {
        get: function get() {
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

  var refs = options.__sanRefs;
  var initedHook = sanOptions.inited;

  sanOptions.inited = function () {
    var _this = this;

    var me = this;
    this.$refs = Object.create(null);

    if (refs) {
      var _loop = function _loop(i, len) {
        var r = refs[i];
        (0, _util.def)(me.$refs, r.name, {
          get: function get() {
            return r.root ? me.el : me.ref(r.name);
          }
        });
      };

      for (var i = 0, len = refs.length; i < len; i++) {
        _loop(i, len);
      }

      me.ref = _ref.default;
    }

    if (this.$style) {
      (0, _util.extend)(this.data.raw.$style, this.$style);
    }

    _bindData.default.call(this);

    for (var _i = 0; _i < this._computedKeys.length; _i++) {
      var key = this._computedKeys[_i];

      _calcComputed.default.call(this, key);

      (0, _util.def)(this, key, {
        get: function get() {
          return me.data.get(k);
        }
      });
    }

    for (var _i2 = 0; _i2 < this._methodKeys.length; _i2++) {
      var _key = this._methodKeys[_i2];
      this[_key] = this[_key].bind(this);
    }

    initedHook && initedHook.call(this);

    if (options.watch) {
      Object.keys(options.watch).forEach(function (key) {
        _this.watch(key, options.watch[key].bind(_this));
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
      var propKeys = me._propKeys = options._propKeys = options.props ? Array.isArray(options.props) ? options.props : Object.keys(options.props) : [];

      if (!Array.isArray(options.props)) {
        for (var i = 0, len = propKeys.length; i < len; i++) {
          var p = propKeys[i];
          var prop = options.props[p];

          if ('default' in prop) {
            defaultProps[p] = typeof prop.default === 'function' ? prop.default() : prop.default;
          }
        }
      }
    } else {
      me._propKeys = [];
    }

    if (options.computed) {
      me._computedKeys = Object.keys(options.computed);
    } else {
      me._computedKeys = [];
    }

    var data = typeof options.data === 'function' ? options.data.call((0, _util.extend)({}, defaultProps, this._srcSbindData)) : options.data || {};
    this._dataKeys = Object.keys(data) || [];
    return (0, _util.extend)({
      $style: {}
    }, defaultProps, data);
  };

  if (options.components) {
    sanOptions.components = Object.keys(options.components).reduce(function (prev, key) {
      var component = options.components[key];
      prev[key] = prev[(0, _util.hyphenate)(key)] = component instanceof _san.Component ? component : component.template || component.aNode ? (0, _san.defineComponent)(component) : define(component);
      return prev;
    }, {});
    sanOptions._cmptReady = 1;
  }

  var cmpt = (0, _san.defineComponent)(sanOptions);
  return options[innerKey] = cmpt;
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _san = __webpack_require__(1);

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var originalGet = _san.Data.prototype.get;

_san.Data.prototype.get = function (expr, callee) {
  if (expr && _typeof(expr) !== 'object') {
    expr = (0, _san.parseExpr)(expr);
  }

  var value = originalGet.call(this, expr, callee);

  if (!expr || value !== undefined || !this.owner || expr.type !== _san.ExprType.ACCESSOR) {
    return value;
  }

  var paths = expr.paths;
  var first = paths[0].value;

  if ([].concat(_toConsumableArray(this.owner._propKeys), _toConsumableArray(this.owner._dataKeys), _toConsumableArray(this.owner._computedKeys)).indexOf(first) >= 0) {
    return value;
  }

  value = this.owner[first];

  for (var i = 1, l = paths.length; value != null && i < l; i++) {
    value = value[paths[i].value || (0, _san.evalExpr)(paths[i], callee)];
  }

  return value;
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function string() {
  var cls = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  if (!cls) {
    return '';
  }

  return cls.split(' ').reduce(function (prev, name) {
    if (!name) {
      return prev;
    }

    return _objectSpread({}, prev, _defineProperty({}, name, 1));
  }, {});
}

function object() {
  var cls = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object.keys(cls).reduce(function (prev, key) {
    if (!cls[key]) {
      return prev;
    }

    return _objectSpread({}, prev, {}, string(key));
  }, {});
}

function array() {
  var cls = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var clazz = {};

  for (var i = 0, len = cls.length; i < len; i++) {
    var element = cls[i];

    if (!element) {
      continue;
    }

    clazz = _objectSpread({}, clazz, {}, typeof element === 'string' ? string(element) : Array.isArray(element) ? array(element) : object(element));
  }

  return clazz;
}

function _default() {
  var staticClass = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var cls = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return Object.keys(array([staticClass, cls])).join(' ');
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _util = __webpack_require__(0);

var parseStyleText = (0, _util.cached)(function (cssText) {
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

function normalizeStyleBinding(bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return (0, _util.toObject)(bindingStyle);
  }

  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle);
  }

  return bindingStyle;
}

function _default(staticStyle, style) {
  var vShow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  style = normalizeStyleBinding(style);

  if (!vShow) {
    style.display = 'none';
  }

  return staticStyle ? (0, _util.extend)(staticStyle, style) : style;
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _util = __webpack_require__(0);

var toArray = (0, _util.cached)(function (n) {
  var value = new Array(n);

  for (var i = 0; i < n; i++) {
    value[i] = i + 1;
  }

  return value;
});

function _default(value) {
  if (!isNaN(value)) {
    var n = +value;
    value = toArray(n);
  }

  return value;
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _san = __webpack_require__(1);

function _default(aNode, data) {
  if (aNode.tagName !== 'component' || aNode.hotspot.props.is == null) {
    return this.components[aNode.tagName];
  }

  var is = aNode.props[aNode.hotspot.props.is];
  var isValue = (0, _san.evalExpr)(is.expr, data);
  return this.components[isValue];
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default(properties) {
  return properties.reduce(function (prev, _ref) {
    var k = _ref.k,
        v = _ref.v;
    prev[k] = v;
    return prev;
  }, {});
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var san = _interopRequireWildcard(__webpack_require__(1));

var _util = __webpack_require__(0);

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _default(name) {
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

          if (ref && (value === name || (0, _util.camelize)(value) === name)) {
            return nodeType === 4 ? element.el : element.children.map(elementTraversal);
          }

          break;

        case 5:
          ref = element.source.directives.ref;
          value = ref && san.evalExpr(ref.value, element.scope, owner);

          if (ref && (value === name || (0, _util.camelize)(value) === name)) {
            return element;
          }

      }

      refTarget = element.slotChildren && childrenTraversal(element.slotChildren);
    }

    return refTarget || childrenTraversal(element.children);
  }

  return childrenTraversal(this.children);
}

;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mergeOptions;

var _util = __webpack_require__(0);

var _constant = __webpack_require__(14);

var atomBuildInMixin = _interopRequireWildcard(__webpack_require__(15));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var keys = ['filters', 'computed'];

function mergeHook(parentVal, childVal) {
  return childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
}

function mergeOptions(options) {
  var destOptions = {};
  var list = Array.isArray(options.mixins) ? [atomBuildInMixin].concat(_toConsumableArray(options.mixins), [options]) : [atomBuildInMixin, options];
  var methods = {};

  for (var i = 0, len = list.length; i < len; i++) {
    var opt = list[i];
    opt.methods && (0, _util.extend)(methods, opt.methods);

    for (var j = 0; j < keys.length; j++) {
      var k = keys[j];

      if (opt[k]) {
        destOptions[k] = (0, _util.extend)(destOptions[k] || {}, opt[k]);
      }
    }

    for (var _j = 0; _j < _constant.lifeCycleKeys.length; _j++) {
      var _k = _constant.lifeCycleKeys[_j];
      var dk = _constant.lifeCycleMap[_k];

      if (opt[_k]) {
        destOptions[dk] = mergeHook(destOptions[dk] || [], opt[_k]);
      }
    }
  }

  for (var _j2 = 0; _j2 < _constant.lifeCycleKeys.length; _j2++) {
    var _k2 = _constant.lifeCycleKeys[_j2];
    var _dk = _constant.lifeCycleMap[_k2];

    if (destOptions[_dk]) {
      (function () {
        var hooks = destOptions[_dk].slice();

        destOptions[_dk] = hooks.length === 1 ? hooks[0] : function () {
          var _this = this;

          hooks.forEach(function (hook) {
            return hook.call(_this);
          }, this);
        };
      })();
    }
  }

  destOptions._methodKeys = Object.keys(methods);
  (0, _util.extend)(destOptions, methods);

  if (options.messages) {
    destOptions.messages = options.messages;
  }

  return destOptions;
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lifeCycleKeys = exports.lifeCycleMap = void 0;
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
  deactivated: 'deactivated'
};
exports.lifeCycleMap = lifeCycleMap;
var lifeCycleKeys = Object.keys(lifeCycleMap);
exports.lifeCycleKeys = lifeCycleKeys;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filters = exports.methods = void 0;

var _util = __webpack_require__(0);

var MATH_METHOD = ['floor', 'ceil', 'round', 'abs', 'max', 'min', 'pow'];
var methods = {};
exports.methods = methods;
MATH_METHOD.forEach(function (name) {
  methods["math_".concat(name)] = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return Math[name].apply(Math, args);
  };
});

methods.array_slice = function (arr, start, len) {
  var end = len == null ? void 0 : len >= 0 ? start + len : arr.length + len;
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
  json: function (_json) {
    function json(_x) {
      return _json.apply(this, arguments);
    }

    json.toString = function () {
      return _json.toString();
    };

    return json;
  }(function (obj) {
    return JSON.stringify(json);
  }),
  lower: function lower(str) {
    return str.toLowerCase();
  },
  upper: function upper(str) {
    return str.toUpperCase();
  }
};
exports.filters = filters;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = calcComputed;

var _util = __webpack_require__(0);

var _getSlots = _interopRequireDefault(__webpack_require__(3));

var _bindData = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function calcComputed(key) {
  var computedDeps = this.computedDeps[key];

  if (!computedDeps) {
    computedDeps = this.computedDeps[key] = {};
  }

  (0, _bindData.resetTarget)();
  var value = this.computed[key].call(this);
  var deps = _bindData.Dep.target;

  for (var i = 0; i < deps.length; i++) {
    var dep = deps[i];
    var expr = dep.paths.map(function (a) {
      return a.value;
    }).join('.');

    if (!computedDeps[expr]) {
      computedDeps[expr] = 1;

      if (this.computed[expr] && !this.computedDeps[expr]) {
        calcComputed.call(this, expr);
      }

      this.watch(expr, function () {
        calcComputed.call(this, key);
      });
    }
  }

  (0, _bindData.cleanTarget)();
  this.data.set(key, value);
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.callDeActivited = exports.callActivited = void 0;

var _san = __webpack_require__(1);

function createCallFactory(name) {
  return function call(direct) {
    var ele = this;

    if (ele.nodeType === _san.NodeType.CMPT) {
      ele._toPhase(name);
    }

    if (ele.children && ele.children.length > 1) {
      ele.children.forEach(call);
    }
  };
}

var callActivited = createCallFactory('activited');
exports.callActivited = callActivited;
var callDeActivited = createCallFactory('deactivited');
exports.callDeActivited = callDeActivited;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTransitionInfo = getTransitionInfo;
exports.addTransitionClass = addTransitionClass;
exports.removeTransitionClass = removeTransitionClass;
exports.whenTransitionEnds = whenTransitionEnds;
exports.default = _default;

var _util = __webpack_require__(0);

var _classUtil = __webpack_require__(19);

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function resolveTransition(def) {
  if (!def) {
    return;
  }

  if (_typeof(def) === 'object') {
    var res = {};

    if (def.css !== false) {
      (0, _util.extend)(res, autoCssTransition(def.name || 'v'));
    }

    (0, _util.extend)(res, def);
    return res;
  } else if (typeof def === 'string') {
    return autoCssTransition(def);
  }
}

var autoCssTransition = (0, _util.cached)(function (name) {
  return {
    enterClass: "".concat(name, "-enter"),
    enterToClass: "".concat(name, "-enter-to"),
    enterActiveClass: "".concat(name, "-enter-active"),
    leaveClass: "".concat(name, "-leave"),
    leaveToClass: "".concat(name, "-leave-to"),
    leaveActiveClass: "".concat(name, "-leave-active")
  };
});
var TRANSITION = 'transition';
var ANIMATION = 'animation';
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';

if (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined) {
  transitionProp = 'WebkitTransition';
  transitionEndEvent = 'webkitTransitionEnd';
}

if (window.onanimationend === undefined && window.onwebkitanimationend !== undefined) {
  animationProp = 'WebkitAnimation';
  animationEndEvent = 'webkitAnimationEnd';
}

var raf = window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout;

function nextFrame(fn) {
  raf(function () {
    raf(fn);
  });
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo(el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
  var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
  var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);
  var type;
  var timeout = 0;
  var propCount = 0;

  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
    propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
  }

  var hasTransform = type === TRANSITION && transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  };
}

function getTimeout(delays, durations) {
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i]);
  }));
}

function toMs(s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000;
}

function addTransitionClass(el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);

  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    (0, _classUtil.addClass)(el, cls);
  }
}

function removeTransitionClass(el, cls) {
  if (el._transitionClasses) {
    (0, _util.remove)(el._transitionClasses, cls);
  }

  (0, _classUtil.removeClass)(el, cls);
}

function isValidDuration(val) {
  return typeof val === 'number' && !isNaN(val);
}

function whenTransitionEnds(el, expectedType, cb) {
  var _getTransitionInfo = getTransitionInfo(el, expectedType),
      type = _getTransitionInfo.type,
      timeout = _getTransitionInfo.timeout,
      propCount = _getTransitionInfo.propCount;

  if (!type) {
    return cb();
  }

  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;

  var end = function end() {
    el.removeEventListener(event, onEnd);
    cb();
  };

  var onEnd = function onEnd(e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };

  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

function _default(options) {
  var data = resolveTransition(options);

  var _resolveTransition = resolveTransition(options),
      css = _resolveTransition.css,
      type = _resolveTransition.type,
      enterClass = _resolveTransition.enterClass,
      enterToClass = _resolveTransition.enterToClass,
      enterActiveClass = _resolveTransition.enterActiveClass,
      appearClass = _resolveTransition.appearClass,
      appearToClass = _resolveTransition.appearToClass,
      appearActiveClass = _resolveTransition.appearActiveClass,
      beforeEnter = _resolveTransition.beforeEnter,
      enter = _resolveTransition.enter,
      afterEnter = _resolveTransition.afterEnter,
      enterCancelled = _resolveTransition.enterCancelled,
      beforeAppear = _resolveTransition.beforeAppear,
      appear = _resolveTransition.appear,
      afterAppear = _resolveTransition.afterAppear,
      appearCancelled = _resolveTransition.appearCancelled,
      leaveClass = _resolveTransition.leaveClass,
      leaveToClass = _resolveTransition.leaveToClass,
      leaveActiveClass = _resolveTransition.leaveActiveClass,
      beforeLeave = _resolveTransition.beforeLeave,
      leave = _resolveTransition.leave,
      afterLeave = _resolveTransition.afterLeave,
      leaveCancelled = _resolveTransition.leaveCancelled,
      delayLeave = _resolveTransition.delayLeave,
      duration = _resolveTransition.duration;

  var context = this;
  var expectsCSS = css !== false;
  return {
    enter: enterHandler,
    leave: leaveHandler
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

    if (el._leaveCb) {
      el._leaveCb.cancelled = true;

      el._leaveCb();
    }

    if (el._enterCb || el.nodeType !== 1) {
      return;
    }

    if (isAppear && !appear) {
      return;
    }

    var startClass = isAppear && appearClass ? appearClass : enterClass;
    var activeClass = isAppear && appearActiveClass ? appearActiveClass : enterActiveClass;
    var toClass = isAppear && appearToClass ? appearToClass : enterToClass;
    var beforeEnterHook = isAppear ? getHook(beforeAppear) || getHook(beforeEnter) : getHook(beforeEnter);
    var enterHook = isAppear ? getHook(appear) || getHook(enter) : getHook(enter);
    var afterEnterHook = isAppear ? getHook(afterAppear) || getHook(afterEnter) : getHook(afterEnter);
    var enterCancelledHook = isAppear ? getHook(appearCancelled) || getHook(enterCancelled) : getHook(enterCancelled);
    var explicitEnterDuration = +((0, _util.isObject)(duration) ? duration.enter : duration);
    var userWantsControl = enterHook && enterHook.length > 1;
    var cb = el._enterCb = (0, _util.once)(function () {
      if (expectsCSS) {
        removeTransitionClass(el, toClass);
        removeTransitionClass(el, activeClass);
      }

      if (cb.cancelled) {
        if (expectsCSS) {
          removeTransitionClass(el, startClass);
        }

        enterCancelledHook && enterCancelledHook(el);
      } else {
        afterEnterHook && afterEnterHook(el);
      }

      el._enterCb = null;
    });
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
            } else {
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
    if (el._enterCb) {
      el._enterCb.cancelled = true;

      el._enterCb();
    }

    if (el._leaveCb) {
      return;
    }

    var leaveHook = getHook(leave);
    var delayLeaveHook = getHook(delayLeave);
    var beforeLeaveHook = getHook(beforeLeave);
    var afterLeaveHook = getHook(afterLeave);
    var explicitLeaveDuration = +((0, _util.isObject)(duration) ? duration.leave : duration);
    var userWantsControl = leaveHook && leaveHook.length > 1;
    var cb = el._leaveCb = (0, _util.once)(function () {
      if (expectsCSS) {
        removeTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveActiveClass);
      }

      if (cb.cancelled) {
        if (expectsCSS) {
          removeTransitionClass(el, leaveClass);
        }

        leaveCancelled && leaveCancelled(el);
      } else {
        done();
        afterLeaveHook && afterLeaveHook(el);
      }

      el._leaveCb = null;
    });

    if (delayLeaveHook) {
      delayLeaveHook(performLeave);
    } else {
      performLeave();
    }

    function performLeave() {
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
              } else {
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

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addClass = addClass;
exports.removeClass = removeClass;
var whitespaceRE = /\s+/;

function addClass(el, cls) {
  if (!cls || !(cls = cls.trim())) {
    return;
  }

  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) {
        return el.classList.add(c);
      });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " ".concat(el.getAttribute('class') || '', " ");

    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

function removeClass(el, cls) {
  if (!cls || !(cls = cls.trim())) {
    return;
  }

  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) {
        return el.classList.remove(c);
      });
    } else {
      el.classList.remove(cls);
    }

    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " ".concat(el.getAttribute('class') || '', " ");
    var tar = ' ' + cls + ' ';

    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }

    cur = cur.trim();

    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3V0aWwuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2FuXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvYmluZC1kYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lL2dldC1zbG90cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcnVudGltZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcnVudGltZS9kZWZpbmUtY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lL292ZXJyaWRlLWRhdGEtZ2V0LmpzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lL21lcmdlLWNsYXNzLmpzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lL21lcmdlLXN0eWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lL2xvb3AtZXhwcmVzc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcnVudGltZS9nZXQtY29tcG9uZW50LXR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvb2JqZWN0LWNvbXB1dGVkLXByb3BlcnRpcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvcmVmLmpzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lL21lcmdlLW9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvY29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvYXRvbS1nbG9iYWwtYXBpLmpzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lL2NhbGMtY29tcHV0ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvY2FsbC1hY3RpdmF0ZWQtaG9vay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcnVudGltZS90cmFuc2l0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lL2NsYXNzLXV0aWwuanMiXSwibmFtZXMiOlsiZXh0ZW5kIiwiT2JqZWN0IiwiYXNzaWduIiwidG9PYmplY3QiLCJhcnIiLCJyZXMiLCJpIiwibGVuZ3RoIiwicmVtb3ZlIiwiaXRlbSIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsIl90b1N0cmluZyIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiaXNPYmplY3QiLCJvYmoiLCJoYXNPd25Qcm9wZXJ0eSIsImhhc093biIsImtleSIsImNhbGwiLCJpc1BsYWluT2JqZWN0IiwiZGVmIiwicHJvcGVydHkiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJjYWNoZWQiLCJmbiIsImNhY2hlIiwiY3JlYXRlIiwiY2FjaGVkRm4iLCJzdHIiLCJoaXQiLCJoeXBoZW5hdGVSRSIsImh5cGhlbmF0ZSIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsImNhbWVsaXplIiwiXyIsImMiLCJ0b1VwcGVyQ2FzZSIsIm9uY2UiLCJjYWxsZWQiLCJhcHBseSIsImFyZ3VtZW50cyIsImFycmF5UHJvdG8iLCJBcnJheSIsImFycmF5TWV0aG9kcyIsIm1ldGhvZHNUb1BhdGNoIiwiZm9yRWFjaCIsIm1ldGhvZCIsIm9yaWdpbmFsIiwidmFsdWUiLCJhcmdzIiwicmVzdWx0Iiwib2IiLCJfX29iX18iLCJpbnNlcnRlZCIsInNsaWNlIiwib2JzZXJ2ZUFycmF5IiwiY29udGV4dCIsImRhdGEiLCJzZXQiLCJleHByIiwiZm9yY2UiLCJvYnNlcnZlIiwiZ2V0IiwiT2JzZXJ2ZXIiLCJpc0FycmF5IiwiX19wcm90b19fIiwia2V5cyIsIndhbGsiLCJkZWZpbmVSZWFjdGl2ZSIsIml0ZW1zIiwibCIsInBhdGhzIiwidHlwZSIsIkV4cHJUeXBlIiwiTlVNQkVSIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZ2V0dGVyIiwic2V0dGVyIiwia2V5RXhwciIsIkFDQ0VTU09SIiwiU1RSSU5HIiwiZGVwIiwiRGVwIiwidmFsIiwibmV3UHJvcGVydHkiLCJuZXdWYWwiLCJkZXBlbmQiLCJkZWZhdWx0RXhwciIsIl9kYXRhS2V5cyIsIl9wcm9wS2V5cyIsImtleUxlbmd0aCIsIl9kYXRhIiwiaXNFeHRlbnNpYmxlIiwidGFyZ2V0IiwicHVzaCIsInJlc2V0VGFyZ2V0IiwiY2xlYW5UYXJnZXQiLCJzbG90Q2hpbGRyZW4iLCJsaWZlQ3ljbGUiLCJzb3VyY2VTbG90cyIsImF0dGFjaGVkIiwicmVkdWNlIiwicHJldiIsImNoaWxkIiwibmFtZSIsImNvbmNhdCIsImNoaWxkcmVuIiwic2xvdHMiLCJuYW1lZCIsIm5vbmFtZSIsImRlZmF1bHQiLCJub29wIiwiZGVmYXVsdFNhbk9wdGlvbnMiLCIkYWN0aXZhdGUiLCJjYWxsQWN0aXZpdGVkIiwiJGRlYWN0aXZhdGUiLCJjYWxsRGVBY3Rpdml0ZWQiLCJfbWMiLCJtZXJnZUNsYXNzIiwiX21zIiwibWVyZ2VTdHlsZSIsIl9sIiwibG9vcEV4cHJlc3Npb24iLCJfZXgiLCJfb2NwIiwib2JqZWN0Q29tcHV0ZWRQcm9wZXJ0aWVzIiwiX25vb3AiLCJfdCIsIlRyYW5zaXRpb24iLCJnZXRDb21wb25lbnRUeXBlIiwiJGVtaXQiLCJDb21wb25lbnQiLCJmaXJlIiwiJG9uIiwib24iLCIkd2F0Y2giLCJ3YXRjaCIsIiRuZXh0VGljayIsIm5leHRUaWNrIiwibWVtYmVyTWFwIiwiJGVsIiwiZWwiLCIkY29udGV4dCIsIm93bmVyIiwiJHBhcmVudCIsInBhcmVudENvbXBvbmVudCIsIiRjaGlsZHJlbiIsImZpbHRlciIsIm5vZGVUeXBlIiwiJHJvb3QiLCJyb290IiwiJHNsb3RzIiwic2xvdCIsIl9pc0Rlc3Ryb3llZCIsImRpc3Bvc2VkIiwib3JpZ2luYWxVcGRhdGUiLCJfdXBkYXRlIiwiY2hhbmdlcyIsIl90b1BoYXNlIiwiaW5uZXJLZXkiLCJkZWZpbmUiLCJvcHRpb25zIiwic2FuT3B0aW9ucyIsInRlbXBsYXRlIiwiX19zYW50ZW1wbGF0ZSIsImFOb2RlIiwiX19zYW5hTm9kZSIsIl9pc1NhbiIsImNvbXBpbGVkSG9vayIsImNvbXBpbGVkIiwiX2NhbGNDb21wdXRlZCIsInByb3BlcnRpZXMiLCJwcm9wcyIsIiRvcHRpb25zIiwiZGVmaW5lUHJvcGVydGllcyIsInJlZnMiLCJfX3NhblJlZnMiLCJpbml0ZWRIb29rIiwiaW5pdGVkIiwibWUiLCIkcmVmcyIsImxlbiIsInIiLCJyZWYiLCIkc3R5bGUiLCJyYXciLCJiaW5kRGF0YSIsIl9jb21wdXRlZEtleXMiLCJjYWxjQ29tcHV0ZWQiLCJrIiwiX21ldGhvZEtleXMiLCJiaW5kIiwicHJlcHJvY2Vzc0FOb2RlIiwiYmVmb3JlVXBkYXRlSG9vayIsImJlZm9yZVVwZGF0ZSIsImluaXREYXRhIiwiZGVmYXVsdFByb3BzIiwicHJvcEtleXMiLCJwIiwicHJvcCIsImNvbXB1dGVkIiwiX3NyY1NiaW5kRGF0YSIsImNvbXBvbmVudHMiLCJjb21wb25lbnQiLCJfY21wdFJlYWR5IiwiY21wdCIsIm9yaWdpbmFsR2V0IiwiRGF0YSIsImNhbGxlZSIsInVuZGVmaW5lZCIsImZpcnN0Iiwic3RyaW5nIiwiY2xzIiwic3BsaXQiLCJvYmplY3QiLCJhcnJheSIsImNsYXp6IiwiZWxlbWVudCIsInN0YXRpY0NsYXNzIiwiam9pbiIsInBhcnNlU3R5bGVUZXh0IiwiY3NzVGV4dCIsImxpc3REZWxpbWl0ZXIiLCJwcm9wZXJ0eURlbGltaXRlciIsInRtcCIsInRyaW0iLCJub3JtYWxpemVTdHlsZUJpbmRpbmciLCJiaW5kaW5nU3R5bGUiLCJzdGF0aWNTdHlsZSIsInN0eWxlIiwidlNob3ciLCJkaXNwbGF5IiwidG9BcnJheSIsIm4iLCJpc05hTiIsInRhZ05hbWUiLCJob3RzcG90IiwiaXMiLCJpc1ZhbHVlIiwidiIsImNoaWxkcmVuVHJhdmVyc2FsIiwicmVmVGFyZ2V0IiwiZWxlbWVudFRyYXZlcnNhbCIsImRpcmVjdGl2ZXMiLCJzYW4iLCJldmFsRXhwciIsInNjb3BlIiwibWFwIiwic291cmNlIiwibWVyZ2VIb29rIiwicGFyZW50VmFsIiwiY2hpbGRWYWwiLCJtZXJnZU9wdGlvbnMiLCJkZXN0T3B0aW9ucyIsImxpc3QiLCJtaXhpbnMiLCJhdG9tQnVpbGRJbk1peGluIiwibWV0aG9kcyIsIm9wdCIsImoiLCJsaWZlQ3ljbGVLZXlzIiwiZGsiLCJsaWZlQ3ljbGVNYXAiLCJob29rcyIsImhvb2siLCJtZXNzYWdlcyIsImJlZm9yZUNyZWF0ZSIsIm1vdW50ZWQiLCJjcmVhdGVkIiwiYmVmb3JlTW91bnQiLCJiZWZvcmVEZXN0cm95IiwiZGVzdHJveSIsInVwZGF0ZWQiLCJhY3RpdmF0ZWQiLCJkZWFjdGl2YXRlZCIsIk1BVEhfTUVUSE9EIiwiTWF0aCIsImFycmF5X3NsaWNlIiwic3RhcnQiLCJlbmQiLCJhcnJheV9qb2luIiwic2VwIiwic3RyX3BvcyIsIm1hdGNoIiwib2JqZWN0X2ZyZWV6ZSIsImZyZWV6ZSIsImZpbHRlcnMiLCJqc29uIiwiSlNPTiIsInN0cmluZ2lmeSIsImxvd2VyIiwidXBwZXIiLCJjb21wdXRlZERlcHMiLCJkZXBzIiwiYSIsImNyZWF0ZUNhbGxGYWN0b3J5IiwiZGlyZWN0IiwiZWxlIiwiTm9kZVR5cGUiLCJDTVBUIiwicmVzb2x2ZVRyYW5zaXRpb24iLCJjc3MiLCJhdXRvQ3NzVHJhbnNpdGlvbiIsImVudGVyQ2xhc3MiLCJlbnRlclRvQ2xhc3MiLCJlbnRlckFjdGl2ZUNsYXNzIiwibGVhdmVDbGFzcyIsImxlYXZlVG9DbGFzcyIsImxlYXZlQWN0aXZlQ2xhc3MiLCJUUkFOU0lUSU9OIiwiQU5JTUFUSU9OIiwidHJhbnNpdGlvblByb3AiLCJ0cmFuc2l0aW9uRW5kRXZlbnQiLCJhbmltYXRpb25Qcm9wIiwiYW5pbWF0aW9uRW5kRXZlbnQiLCJ3aW5kb3ciLCJvbnRyYW5zaXRpb25lbmQiLCJvbndlYmtpdHRyYW5zaXRpb25lbmQiLCJvbmFuaW1hdGlvbmVuZCIsIm9ud2Via2l0YW5pbWF0aW9uZW5kIiwicmFmIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic2V0VGltZW91dCIsIm5leHRGcmFtZSIsInRyYW5zZm9ybVJFIiwiZ2V0VHJhbnNpdGlvbkluZm8iLCJleHBlY3RlZFR5cGUiLCJzdHlsZXMiLCJnZXRDb21wdXRlZFN0eWxlIiwidHJhbnNpdGlvbkRlbGF5cyIsInRyYW5zaXRpb25EdXJhdGlvbnMiLCJ0cmFuc2l0aW9uVGltZW91dCIsImdldFRpbWVvdXQiLCJhbmltYXRpb25EZWxheXMiLCJhbmltYXRpb25EdXJhdGlvbnMiLCJhbmltYXRpb25UaW1lb3V0IiwidGltZW91dCIsInByb3BDb3VudCIsIm1heCIsImhhc1RyYW5zZm9ybSIsInRlc3QiLCJkZWxheXMiLCJkdXJhdGlvbnMiLCJkIiwidG9NcyIsInMiLCJOdW1iZXIiLCJhZGRUcmFuc2l0aW9uQ2xhc3MiLCJ0cmFuc2l0aW9uQ2xhc3NlcyIsIl90cmFuc2l0aW9uQ2xhc3NlcyIsInJlbW92ZVRyYW5zaXRpb25DbGFzcyIsImlzVmFsaWREdXJhdGlvbiIsIndoZW5UcmFuc2l0aW9uRW5kcyIsImNiIiwiZXZlbnQiLCJlbmRlZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJvbkVuZCIsImUiLCJhZGRFdmVudExpc3RlbmVyIiwiYXBwZWFyQ2xhc3MiLCJhcHBlYXJUb0NsYXNzIiwiYXBwZWFyQWN0aXZlQ2xhc3MiLCJiZWZvcmVFbnRlciIsImVudGVyIiwiYWZ0ZXJFbnRlciIsImVudGVyQ2FuY2VsbGVkIiwiYmVmb3JlQXBwZWFyIiwiYXBwZWFyIiwiYWZ0ZXJBcHBlYXIiLCJhcHBlYXJDYW5jZWxsZWQiLCJiZWZvcmVMZWF2ZSIsImxlYXZlIiwiYWZ0ZXJMZWF2ZSIsImxlYXZlQ2FuY2VsbGVkIiwiZGVsYXlMZWF2ZSIsImR1cmF0aW9uIiwiZXhwZWN0c0NTUyIsImVudGVySGFuZGxlciIsImxlYXZlSGFuZGxlciIsImdldEhvb2siLCJpbnZva2VyRm4iLCJkb25lIiwiaXNBcHBlYXIiLCJfbGVhdmVDYiIsImNhbmNlbGxlZCIsIl9lbnRlckNiIiwic3RhcnRDbGFzcyIsImFjdGl2ZUNsYXNzIiwidG9DbGFzcyIsImJlZm9yZUVudGVySG9vayIsImVudGVySG9vayIsImFmdGVyRW50ZXJIb29rIiwiZW50ZXJDYW5jZWxsZWRIb29rIiwiZXhwbGljaXRFbnRlckR1cmF0aW9uIiwidXNlcldhbnRzQ29udHJvbCIsImxlYXZlSG9vayIsImRlbGF5TGVhdmVIb29rIiwiYmVmb3JlTGVhdmVIb29rIiwiYWZ0ZXJMZWF2ZUhvb2siLCJleHBsaWNpdExlYXZlRHVyYXRpb24iLCJwZXJmb3JtTGVhdmUiLCJ3aGl0ZXNwYWNlUkUiLCJhZGRDbGFzcyIsImNsYXNzTGlzdCIsImFkZCIsImN1ciIsImdldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUNsYXNzIiwicmVtb3ZlQXR0cmlidXRlIiwidGFyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7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QUNDLEtBQUosQ0FBVTZMLFlBQVYsRUFBd0JyVyxPQUF4QixDQUFnQyxVQUFBVixDQUFDO0FBQUEsZUFBSTBHLEVBQUUsQ0FBQ3VRLFNBQUgsQ0FBYWxaLE1BQWIsQ0FBb0JpQyxDQUFwQixDQUFKO0FBQUEsT0FBakM7QUFDSCxLQUZELE1BR0s7QUFDRDBHLFFBQUUsQ0FBQ3VRLFNBQUgsQ0FBYWxaLE1BQWIsQ0FBb0JrTixHQUFwQjtBQUNIOztBQUNELFFBQUksQ0FBQ3ZFLEVBQUUsQ0FBQ3VRLFNBQUgsQ0FBYW5aLE1BQWxCLEVBQTBCO0FBQ3RCNEksUUFBRSxDQUFDNlEsZUFBSCxDQUFtQixPQUFuQjtBQUNIO0FBQ0osR0FWRCxNQVdLO0FBQ0QsUUFBSUosR0FBRyxjQUFPelEsRUFBRSxDQUFDMFEsWUFBSCxDQUFnQixPQUFoQixLQUE0QixFQUFuQyxNQUFQO0FBQ0EsUUFBTUksR0FBRyxHQUFHLE1BQU12TSxHQUFOLEdBQVksR0FBeEI7O0FBQ0EsV0FBT2tNLEdBQUcsQ0FBQ2paLE9BQUosQ0FBWXNaLEdBQVosS0FBb0IsQ0FBM0IsRUFBOEI7QUFDMUJMLFNBQUcsR0FBR0EsR0FBRyxDQUFDdlgsT0FBSixDQUFZNFgsR0FBWixFQUFpQixHQUFqQixDQUFOO0FBQ0g7O0FBQ0RMLE9BQUcsR0FBR0EsR0FBRyxDQUFDckwsSUFBSixFQUFOOztBQUNBLFFBQUlxTCxHQUFKLEVBQVM7QUFDTHpRLFFBQUUsQ0FBQzJRLFlBQUgsQ0FBZ0IsT0FBaEIsRUFBeUJGLEdBQXpCO0FBQ0gsS0FGRCxNQUdLO0FBQ0R6USxRQUFFLENBQUM2USxlQUFILENBQW1CLE9BQW5CO0FBQ0g7QUFDSjtBQUNKLEMiLCJmaWxlIjoidnVzYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInNhblwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJzYW5cIl0sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGZhY3RvcnkocmVxdWlyZShcInNhblwiKSkgOiBmYWN0b3J5KHJvb3RbXCJzYW5cIl0pO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkod2luZG93LCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX18xX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG4iLCIvKipcbiAqIEBmaWxlIOS4gOS6m+W3peWFt+WHveaVsFxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbi8qKlxuICogTWl4IHByb3BlcnRpZXMgaW50byB0YXJnZXQgb2JqZWN0LlxuICovXG5leHBvcnQgY29uc3QgZXh0ZW5kID0gT2JqZWN0LmFzc2lnbjtcblxuLyoqXG4gKiBNZXJnZSBhbiBBcnJheSBvZiBPYmplY3RzIGludG8gYSBzaW5nbGUgT2JqZWN0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9PYmplY3QoYXJyKSB7XG4gICAgY29uc3QgcmVzID0ge307XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGFycltpXSkge1xuICAgICAgICAgICAgZXh0ZW5kKHJlcywgYXJyW2ldKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufVxuXG4vKipcbiAqIFJlbW92ZSBhbiBpdGVtIGZyb20gYW4gYXJyYXkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmUoYXJyLCBpdGVtKSB7XG4gICAgaWYgKGFyci5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBhcnIuaW5kZXhPZihpdGVtKTtcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBhcnIuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBHZXQgdGhlIHJhdyB0eXBlIHN0cmluZyBvZiBhIHZhbHVlLCBlLmcuLCBbb2JqZWN0IE9iamVjdF0uXG4gKi9cbmV4cG9ydCBjb25zdCBfdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIFF1aWNrIG9iamVjdCBjaGVjayAtIHRoaXMgaXMgcHJpbWFyaWx5IHVzZWQgdG8gdGVsbFxuICogT2JqZWN0cyBmcm9tIHByaW1pdGl2ZSB2YWx1ZXMgd2hlbiB3ZSBrbm93IHRoZSB2YWx1ZVxuICogaXMgYSBKU09OLWNvbXBsaWFudCB0eXBlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3Qob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAhPT0gbnVsbCAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIGFuIG9iamVjdCBoYXMgdGhlIHByb3BlcnR5LlxuICovXG5jb25zdCBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5leHBvcnQgZnVuY3Rpb24gaGFzT3duKG9iaiwga2V5KSB7XG4gICAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpO1xufVxuXG4vKipcbiAqIFN0cmljdCBvYmplY3QgdHlwZSBjaGVjay4gT25seSByZXR1cm5zIHRydWVcbiAqIGZvciBwbGFpbiBKYXZhU2NyaXB0IG9iamVjdHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1BsYWluT2JqZWN0KG9iaikge1xuICAgIHJldHVybiBfdG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBPYmplY3RdJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZihvYmosIGtleSwgcHJvcGVydHkpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIGV4dGVuZCh7XG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9LCBwcm9wZXJ0eSkpO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIGNhY2hlZCB2ZXJzaW9uIG9mIGEgcHVyZSBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhY2hlZChmbikge1xuICAgIGNvbnN0IGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gY2FjaGVkRm4oc3RyKSB7XG4gICAgICAgIGNvbnN0IGhpdCA9IGNhY2hlW3N0cl07XG4gICAgICAgIHJldHVybiBoaXQgfHwgKGNhY2hlW3N0cl0gPSBmbihzdHIpKTtcbiAgICB9O1xufVxuXG4vKipcbiAqIEh5cGhlbmF0ZSBhIGNhbWVsQ2FzZSBzdHJpbmcuXG4gKi9cbmNvbnN0IGh5cGhlbmF0ZVJFID0gLyhbXi1dKShbQS1aXSkvZztcbmV4cG9ydCBjb25zdCBoeXBoZW5hdGUgPSBjYWNoZWQoKHN0cikgPT4ge1xuICAgIHJldHVybiBzdHJcbiAgICAgICAgLnJlcGxhY2UoaHlwaGVuYXRlUkUsICckMS0kMicpXG4gICAgICAgIC5yZXBsYWNlKGh5cGhlbmF0ZVJFLCAnJDEtJDInKVxuICAgICAgICAudG9Mb3dlckNhc2UoKTtcbn0pO1xuXG5leHBvcnQgY29uc3QgY2FtZWxpemUgPSBzdHIgPT4gc3RyLnJlcGxhY2UoLy0oXFx3KS9nLCAoXywgYykgPT4gKGMgPyBjLnRvVXBwZXJDYXNlKCkgOiAnJykpO1xuXG4vKipcbiAqIEVuc3VyZSBhIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbmx5IG9uY2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvbmNlKGZuKSB7XG4gICAgbGV0IGNhbGxlZCA9IGZhbHNlXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghY2FsbGVkKSB7XG4gICAgICAgIGNhbGxlZCA9IHRydWVcbiAgICAgICAgZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICAgICAgfVxuICAgIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fMV9fOyIsIi8qKlxuICogQGZpbGUg5pWw5o2u57uR5a6aXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHtpc09iamVjdCwgaGFzT3duLCBpc1BsYWluT2JqZWN0LCBleHRlbmQsIGRlZn0gZnJvbSAnLi4vc2hhcmVkL3V0aWwnO1xuaW1wb3J0IHtFeHByVHlwZX0gZnJvbSAnc2FuJztcblxuY29uc3QgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcbmNvbnN0IGFycmF5TWV0aG9kcyA9IE9iamVjdC5jcmVhdGUoYXJyYXlQcm90byk7XG5cbmNvbnN0IG1ldGhvZHNUb1BhdGNoID0gW1xuICAgICdwdXNoJyxcbiAgICAncG9wJyxcbiAgICAnc2hpZnQnLFxuICAgICd1bnNoaWZ0JyxcbiAgICAnc3BsaWNlJyxcbiAgICAnc29ydCcsXG4gICAgJ3JldmVyc2UnXG5dO1xuXG4vKipcbiAqIEludGVyY2VwdCBtdXRhdGluZyBtZXRob2RzIGFuZCBlbWl0IGV2ZW50c1xuICovXG5tZXRob2RzVG9QYXRjaC5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICAvLyBjYWNoZSBvcmlnaW5hbCBtZXRob2RcbiAgICBjb25zdCBvcmlnaW5hbCA9IGFycmF5UHJvdG9bbWV0aG9kXVxuICAgIGRlZihhcnJheU1ldGhvZHMsIG1ldGhvZCwge1xuICAgICAgICB2YWx1ZSguLi5hcmdzKSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgICAgIGNvbnN0IG9iID0gdGhpcy5fX29iX187XG4gICAgICAgICAgICBsZXQgaW5zZXJ0ZWQ7XG4gICAgICAgICAgICBzd2l0Y2ggKG1ldGhvZCkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3B1c2gnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ3Vuc2hpZnQnOlxuICAgICAgICAgICAgICAgICAgICBpbnNlcnRlZCA9IGFyZ3M7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3NwbGljZSc6XG4gICAgICAgICAgICAgICAgICAgIGluc2VydGVkID0gYXJncy5zbGljZSgyKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaW5zZXJ0ZWQpIHtcbiAgICAgICAgICAgICAgICBvYi5vYnNlcnZlQXJyYXkoaW5zZXJ0ZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb2IuY29udGV4dC5kYXRhLnNldChvYi5leHByLCB0aGlzLCB7Zm9yY2U6IHRydWV9KTtcbiAgICAgICAgICAgIG9ic2VydmUob2IuY29udGV4dC5kYXRhLmdldChvYi5leHByKSwgb2IuZXhwciwgb2IuY29udGV4dCk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgfSlcbn0pO1xuXG5jbGFzcyBPYnNlcnZlciB7XG5cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSwgZXhwciwgY29udGV4dCkge1xuICAgICAgICB0aGlzLmV4cHIgPSBleHByO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICBkZWYodmFsdWUsICdfX29iX18nLCB7XG4gICAgICAgICAgICB2YWx1ZTogdGhpc1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZS5fX3Byb3RvX18gPSBhcnJheU1ldGhvZHM7XG4gICAgICAgICAgICB0aGlzLm9ic2VydmVBcnJheSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSkgfHwgW107XG4gICAgICAgICAgICB0aGlzLndhbGsodmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2FsayB0aHJvdWdoIGFsbCBwcm9wZXJ0aWVzIGFuZCBjb252ZXJ0IHRoZW0gaW50b1xuICAgICAqIGdldHRlci9zZXR0ZXJzLiBUaGlzIG1ldGhvZCBzaG91bGQgb25seSBiZSBjYWxsZWQgd2hlblxuICAgICAqIHZhbHVlIHR5cGUgaXMgT2JqZWN0LlxuICAgICAqL1xuICAgIHdhbGsob2JqKSB7XG4gICAgICAgIGNvbnN0IGtleXMgPSB0aGlzLmtleXM7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZGVmaW5lUmVhY3RpdmUob2JqLCBrZXlzW2ldLCB0aGlzLmV4cHIsIHRoaXMuY29udGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPYnNlcnZlIGEgbGlzdCBvZiBBcnJheSBpdGVtcy5cbiAgICAgKi9cbiAgICBvYnNlcnZlQXJyYXkoaXRlbXMpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBpdGVtcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIG9ic2VydmUoaXRlbXNbaV0sIGV4dGVuZCh7fSwgdGhpcy5leHByLCB7XG4gICAgICAgICAgICAgICAgcGF0aHM6IFsuLi50aGlzLmV4cHIucGF0aHMsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogRXhwclR5cGUuTlVNQkVSLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9KSwgdGhpcy5jb250ZXh0KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5lUmVhY3RpdmUob2JqLCBrZXksIGV4cHIsIGNvbnRleHQpIHtcblxuICAgIGNvbnN0IHByb3BlcnR5ID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSk7XG4gICAgaWYgKHByb3BlcnR5ICYmIHByb3BlcnR5LmNvbmZpZ3VyYWJsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGNhdGVyIGZvciBwcmUtZGVmaW5lZCBnZXR0ZXIvc2V0dGVyc1xuICAgIGNvbnN0IGdldHRlciA9IHByb3BlcnR5ICYmIHByb3BlcnR5LmdldDtcbiAgICBjb25zdCBzZXR0ZXIgPSBwcm9wZXJ0eSAmJiBwcm9wZXJ0eS5zZXQ7XG5cbiAgICBjb25zdCBrZXlFeHByID0ge1xuICAgICAgICB0eXBlOiBFeHByVHlwZS5BQ0NFU1NPUixcbiAgICAgICAgcGF0aHM6IFsuLi5leHByLnBhdGhzLCB7XG4gICAgICAgICAgICB0eXBlOiBFeHByVHlwZS5TVFJJTkcsXG4gICAgICAgICAgICB2YWx1ZToga2V5XG4gICAgICAgIH1dXG4gICAgfTtcblxuICAgIGNvbnN0IGRlcCA9IG5ldyBEZXA7XG5cbiAgICBsZXQgdmFsID0gb2JqW2tleV07XG4gICAgb2JzZXJ2ZSh2YWwsIGtleUV4cHIsIGNvbnRleHQpO1xuICAgIGNvbnN0IG5ld1Byb3BlcnR5ID0ge1xuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIHNldChuZXdWYWwpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZ2V0dGVyID8gZ2V0dGVyLmNhbGwob2JqKSA6IHZhbDtcbiAgICAgICAgICAgIGlmIChuZXdWYWwgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGdldHRlciAmJiAhc2V0dGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNldHRlcikge1xuICAgICAgICAgICAgICAgIHNldHRlci5jYWxsKG9iaiwgbmV3VmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhbCA9IG5ld1ZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9ic2VydmUobmV3VmFsLCBrZXlFeHByLCBjb250ZXh0KTtcbiAgICAgICAgICAgIGNvbnRleHQuZGF0YS5zZXQoa2V5RXhwciwgbmV3VmFsLCB7Zm9yY2U6IHRydWV9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgZGVwLmRlcGVuZChrZXlFeHByKTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZ2V0dGVyID8gZ2V0dGVyLmNhbGwob2JqKSA6IHZhbDtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZGVmKG9iaiwga2V5LCBuZXdQcm9wZXJ0eSk7XG59XG5cbmNvbnN0IGRlZmF1bHRFeHByID0ge1xuICAgIHR5cGU6IEV4cHJUeXBlLkFDQ0VTU09SLFxuICAgIHBhdGhzOiBbXVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGV4cHIgPSBleHRlbmQoe30sIGRlZmF1bHRFeHByKTtcbiAgICBjb25zdCBrZXlzID0gWy4uLnRoaXMuX2RhdGFLZXlzLCAuLi50aGlzLl9wcm9wS2V5c107XG4gICAgY29uc3Qga2V5TGVuZ3RoID0ga2V5cy5sZW5ndGg7XG5cbiAgICBvYnNlcnZlKHRoaXMuZGF0YS5nZXQoKSwgZXhwciwgdGhpcyk7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcztcblxuICAgIHRoaXMuX2RhdGEgPSB0aGlzLmRhdGEuZ2V0KCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleUxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IGtleXNbaV07XG4gICAgICAgIGRlZihjb250ZXh0LCBrZXksIHtcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGV4dC5fZGF0YVtrZXldO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldChuZXdWYWwpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0Ll9kYXRhW2tleV0gPSBuZXdWYWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZSh2YWx1ZSwgZXhwciwgY29udGV4dCkge1xuICAgIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IG9iO1xuICAgIGlmIChoYXNPd24odmFsdWUsICdfX29iX18nKSAmJiB2YWx1ZS5fX29iX18gaW5zdGFuY2VvZiBPYnNlcnZlcikge1xuICAgICAgICBvYiA9IHZhbHVlLl9fb2JfX1xuICAgIH1cbiAgICBlbHNlIGlmIChcbiAgICAgICAgKEFycmF5LmlzQXJyYXkodmFsdWUpIHx8IGlzUGxhaW5PYmplY3QodmFsdWUpKVxuICAgICAgICAmJiBPYmplY3QuaXNFeHRlbnNpYmxlKHZhbHVlKVxuICAgICkge1xuICAgICAgICBvYiA9IG5ldyBPYnNlcnZlcih2YWx1ZSwgZXhwciwgY29udGV4dCk7XG4gICAgfVxuICAgIHJldHVybiBvYjtcbn1cblxuLyoqXG4gKiBBIGRlcCBpcyBhbiBvYnNlcnZhYmxlIHRoYXQgY2FuIGhhdmUgbXVsdGlwbGVcbiAqIGRpcmVjdGl2ZXMgc3Vic2NyaWJpbmcgdG8gaXQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBEZXAoKSB7fVxuXG5EZXAucHJvdG90eXBlLmRlcGVuZCA9IGZ1bmN0aW9uIChleHByKSB7XG4gICAgaWYgKERlcC50YXJnZXQpIHtcbiAgICAgICAgRGVwLnRhcmdldC5wdXNoKGV4cHIpO1xuICAgIH1cbn07XG5cbi8vIFRoZSBjdXJyZW50IHRhcmdldCB3YXRjaGVyIGJlaW5nIGV2YWx1YXRlZC5cbi8vIFRoaXMgaXMgZ2xvYmFsbHkgdW5pcXVlIGJlY2F1c2Ugb25seSBvbmUgd2F0Y2hlclxuLy8gY2FuIGJlIGV2YWx1YXRlZCBhdCBhIHRpbWUuXG5EZXAudGFyZ2V0ID0gbnVsbDtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0VGFyZ2V0KCkge1xuICAgIERlcC50YXJnZXQgPSBbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFuVGFyZ2V0KCkge1xuICAgIERlcC50YXJnZXQgPSBudWxsO1xufVxuIiwiLyoqXG4gKiBAZmlsZSBzbG90XG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHtleHRlbmR9IGZyb20gJy4uL3NoYXJlZC91dGlsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHtcbiAgICAgICAgc2xvdENoaWxkcmVuLFxuICAgICAgICBsaWZlQ3ljbGUsXG4gICAgICAgIHNvdXJjZVNsb3RzXG4gICAgfSA9IHRoaXM7XG5cbiAgICBpZiAobGlmZUN5Y2xlLmF0dGFjaGVkKSB7XG4gICAgICAgIHJldHVybiBzbG90Q2hpbGRyZW4ucmVkdWNlKChwcmV2LCBjaGlsZCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGNoaWxkLm5hbWUgfHwgJ2RlZmF1bHQnO1xuICAgICAgICAgICAgaWYgKCFwcmV2W25hbWVdKSB7XG4gICAgICAgICAgICAgICAgcHJldltuYW1lXSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJldltuYW1lXSA9IHByZXZbbmFtZV0uY29uY2F0KGNoaWxkLmNoaWxkcmVuKTtcbiAgICAgICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgICB9LCB7fSk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2xvdHMgPSB7fTtcblxuICAgIGlmIChzb3VyY2VTbG90cy5uYW1lZCkge1xuICAgICAgICBleHRlbmQoc2xvdHMsIHNvdXJjZVNsb3RzLm5hbWVkKTtcbiAgICB9XG4gICAgaWYgKHNvdXJjZVNsb3RzLm5vbmFtZSkge1xuICAgICAgICBzbG90cy5kZWZhdWx0ID0gc291cmNlU2xvdHMubm9uYW1lO1xuICAgIH1cblxuICAgIHJldHVybiBzbG90cztcblxufVxuIiwiLyoqXG4gKiBAZmlsZSBlbnRyeVxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmV4cG9ydCB7ZGVmYXVsdCBhcyBkZWZpbmVDb21wb25lbnR9IGZyb20gJy4vZGVmaW5lLWNvbXBvbmVudCc7XG4iLCIvKipcbiAqIEBmaWxlIGNvbXBvbmVudFxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCAnLi9vdmVycmlkZS1kYXRhLWdldCc7XG5cbmltcG9ydCB7ZGVmaW5lQ29tcG9uZW50LCBpbmhlcml0cywgQ29tcG9uZW50LCBuZXh0VGlja30gZnJvbSAnc2FuJztcbmltcG9ydCB7ZXh0ZW5kLCBoeXBoZW5hdGUsIGRlZn0gZnJvbSAnLi4vc2hhcmVkL3V0aWwnO1xuaW1wb3J0IG1lcmdlQ2xhc3MgZnJvbSAnLi9tZXJnZS1jbGFzcyc7XG5pbXBvcnQgbWVyZ2VTdHlsZSBmcm9tICcuL21lcmdlLXN0eWxlJztcbmltcG9ydCBsb29wRXhwcmVzc2lvbiBmcm9tICcuL2xvb3AtZXhwcmVzc2lvbic7XG5pbXBvcnQgZ2V0Q29tcG9uZW50VHlwZSBmcm9tICcuL2dldC1jb21wb25lbnQtdHlwZSc7XG5pbXBvcnQgb2JqZWN0Q29tcHV0ZWRQcm9wZXJ0aWVzIGZyb20gJy4vb2JqZWN0LWNvbXB1dGVkLXByb3BlcnRpcnMnO1xuaW1wb3J0IHJlZiBmcm9tICcuL3JlZic7XG5pbXBvcnQgbWVyZ2VPcHRpb25zIGZyb20gJy4vbWVyZ2Utb3B0aW9ucyc7XG5pbXBvcnQgYmluZERhdGEgZnJvbSAnLi9iaW5kLWRhdGEnO1xuaW1wb3J0IGNhbGNDb21wdXRlZCBmcm9tICcuL2NhbGMtY29tcHV0ZWQnO1xuaW1wb3J0IHNsb3QgZnJvbSAnLi9nZXQtc2xvdHMnO1xuaW1wb3J0IHtjYWxsQWN0aXZpdGVkLCBjYWxsRGVBY3Rpdml0ZWR9IGZyb20gJy4vY2FsbC1hY3RpdmF0ZWQtaG9vayc7XG5pbXBvcnQgVHJhbnNpdGlvbiBmcm9tICcuL3RyYW5zaXRpb24nO1xuXG5jb25zdCBub29wID0gKCkgPT4ge307XG5cbi8qIGVzbGludC1kaXNhYmxlIGZlY3MtY2FtZWxjYXNlICovXG5jb25zdCBkZWZhdWx0U2FuT3B0aW9ucyA9IHtcbiAgICAkYWN0aXZhdGU6IGNhbGxBY3Rpdml0ZWQsXG4gICAgJGRlYWN0aXZhdGU6IGNhbGxEZUFjdGl2aXRlZCxcbiAgICBfbWM6IG1lcmdlQ2xhc3MsXG4gICAgX21zOiBtZXJnZVN0eWxlLFxuICAgIF9sOiBsb29wRXhwcmVzc2lvbixcbiAgICBfZXg6IGV4dGVuZCxcbiAgICBfb2NwOiBvYmplY3RDb21wdXRlZFByb3BlcnRpZXMsXG4gICAgX25vb3A6IG5vb3AsXG4gICAgX3Q6IFRyYW5zaXRpb24sXG4gICAgZ2V0Q29tcG9uZW50VHlwZSxcbiAgICAkZW1pdDogQ29tcG9uZW50LnByb3RvdHlwZS5maXJlLFxuICAgICRvbjogQ29tcG9uZW50LnByb3RvdHlwZS5vbixcbiAgICAkd2F0Y2g6IENvbXBvbmVudC5wcm90b3R5cGUud2F0Y2gsXG4gICAgJG5leHRUaWNrOiBuZXh0VGlja1xufTtcbi8qIGVzbGludC1lbmFibGUgZmVjcy1jYW1lbGNhc2UgKi9cblxuY29uc3QgbWVtYmVyTWFwID0ge1xuICAgICRlbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWw7XG4gICAgfSxcbiAgICAkY29udGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3duZXI7XG4gICAgfSxcbiAgICAkcGFyZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnRDb21wb25lbnQ7XG4gICAgfSxcbiAgICAkY2hpbGRyZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoaWxkcmVuLmZpbHRlcihjaGlsZCA9PiBjaGlsZC5ub2RlVHlwZSA9PT0gNSk7XG4gICAgfSxcbiAgICAkcm9vdCgpIHtcbiAgICAgICAgbGV0IHJvb3QgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5wYXJlbnRDb21wb25lbnQpIHtcbiAgICAgICAgICAgIHdoaWxlIChyb290LnBhcmVudENvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIHJvb3QgPSByb290LnBhcmVudENvbXBvbmVudFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByb290O1xuICAgIH0sXG4gICAgJHNsb3RzOiBzbG90LFxuICAgIF9pc0Rlc3Ryb3llZCgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5saWZlQ3ljbGUuZGlzcG9zZWQ7XG4gICAgfVxufTtcblxuY29uc3Qgb3JpZ2luYWxVcGRhdGUgPSBDb21wb25lbnQucHJvdG90eXBlLl91cGRhdGU7XG5cbkNvbXBvbmVudC5wcm90b3R5cGUuX3VwZGF0ZSA9IGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5fdG9QaGFzZSgnYmVmb3JlVXBkYXRlJyk7XG4gICAgfVxuICAgIG9yaWdpbmFsVXBkYXRlLmNhbGwodGhpcywgY2hhbmdlcyk7XG59O1xuXG5jb25zdCBpbm5lcktleSA9ICdfU2FuQ3Rvcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlZmluZShvcHRpb25zKSB7XG5cbiAgICBpZiAob3B0aW9uc1tpbm5lcktleV0pIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnNbaW5uZXJLZXldO1xuICAgIH1cblxuICAgIGNvbnN0IHNhbk9wdGlvbnMgPSBleHRlbmQoe1xuICAgICAgICB0ZW1wbGF0ZTogb3B0aW9ucy5fX3NhbnRlbXBsYXRlLFxuICAgICAgICBhTm9kZTogb3B0aW9ucy5fX3NhbmFOb2RlLFxuICAgICAgICBfaXNTYW46IHRydWUsXG4gICAgfSwgZGVmYXVsdFNhbk9wdGlvbnMsIG1lcmdlT3B0aW9ucyhvcHRpb25zKSk7XG5cbiAgICBjb25zdCBjb21waWxlZEhvb2sgPSBzYW5PcHRpb25zLmNvbXBpbGVkO1xuICAgIHNhbk9wdGlvbnMuY29tcGlsZWQgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgdGhpcy5fY2FsY0NvbXB1dGVkID0gbm9vcDtcbiAgICAgICAgY29tcGlsZWRIb29rICYmIGNvbXBpbGVkSG9vay5jYWxsKHRoaXMpO1xuXG4gICAgICAgIGNvbnN0IHByb3BlcnRpZXMgPSBPYmplY3RcbiAgICAgICAgICAgIC5rZXlzKG1lbWJlck1hcClcbiAgICAgICAgICAgIC5yZWR1Y2UoKHByb3BzLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBwcm9wc1trZXldID0ge1xuICAgICAgICAgICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWVtYmVyTWFwW2tleV0uY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3BzO1xuICAgICAgICAgICAgfSwge30pO1xuXG4gICAgICAgIHByb3BlcnRpZXMuJG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB2YWx1ZTogb3B0aW9uc1xuICAgICAgICB9O1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHByb3BlcnRpZXMpO1xuICAgIH07XG5cbiAgICBjb25zdCByZWZzID0gb3B0aW9ucy5fX3NhblJlZnM7XG4gICAgY29uc3QgaW5pdGVkSG9vayA9IHNhbk9wdGlvbnMuaW5pdGVkO1xuICAgIHNhbk9wdGlvbnMuaW5pdGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBtZSA9IHRoaXM7XG4gICAgICAgIHRoaXMuJHJlZnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG4gICAgICAgIGlmIChyZWZzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gcmVmcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHIgPSByZWZzW2ldO1xuICAgICAgICAgICAgICAgIGRlZihtZS4kcmVmcywgci5uYW1lLCB7XG4gICAgICAgICAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByLnJvb3QgPyBtZS5lbCA6IG1lLnJlZihyLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBvdmVyd3JpdGUgc2FuIGNvbXBvbmVudCBhcGkgZm9yIHN1cHBvcnQgdi1mb3IgKyByZWZcbiAgICAgICAgICAgIG1lLnJlZiA9IHJlZjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG1lcmdlIGNzcyBtb2R1bGVzXG4gICAgICAgIGlmICh0aGlzLiRzdHlsZSkge1xuICAgICAgICAgICAgZXh0ZW5kKHRoaXMuZGF0YS5yYXcuJHN0eWxlLCB0aGlzLiRzdHlsZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGJpbmREYXRhLmNhbGwodGhpcyk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9jb21wdXRlZEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHRoaXMuX2NvbXB1dGVkS2V5c1tpXTtcbiAgICAgICAgICAgIGNhbGNDb21wdXRlZC5jYWxsKHRoaXMsIGtleSk7XG4gICAgICAgICAgICBkZWYodGhpcywga2V5LCB7XG4gICAgICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWUuZGF0YS5nZXQoayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX21ldGhvZEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHRoaXMuX21ldGhvZEtleXNbaV07XG4gICAgICAgICAgICB0aGlzW2tleV0gPSB0aGlzW2tleV0uYmluZCh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGluaXRlZEhvb2sgJiYgaW5pdGVkSG9vay5jYWxsKHRoaXMpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLndhdGNoKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhvcHRpb25zLndhdGNoKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy53YXRjaChrZXksIG9wdGlvbnMud2F0Y2hba2V5XS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMucHJlcHJvY2Vzc0FOb2RlKSB7XG4gICAgICAgICAgICBvcHRpb25zLnByZXByb2Nlc3NBTm9kZS5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGJlZm9yZVVwZGF0ZUhvb2sgPSBzYW5PcHRpb25zLmJlZm9yZVVwZGF0ZTtcbiAgICBzYW5PcHRpb25zLmJlZm9yZVVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYmVmb3JlVXBkYXRlSG9vayAmJiBiZWZvcmVVcGRhdGVIb29rLmNhbGwodGhpcyk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMucHJlcHJvY2Vzc0FOb2RlKSB7XG4gICAgICAgICAgICBvcHRpb25zLnByZXByb2Nlc3NBTm9kZS5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHNhbk9wdGlvbnMuaW5pdERhdGEgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgY29uc3QgbWUgPSB0aGlzO1xuXG4gICAgICAgIGNvbnN0IGRlZmF1bHRQcm9wcyA9IHt9O1xuICAgICAgICBpZiAob3B0aW9ucy5wcm9wcykge1xuICAgICAgICAgICAgY29uc3QgcHJvcEtleXMgPSBtZS5fcHJvcEtleXMgPSBvcHRpb25zLl9wcm9wS2V5cyA9IG9wdGlvbnMucHJvcHNcbiAgICAgICAgICAgICAgICA/IChBcnJheS5pc0FycmF5KG9wdGlvbnMucHJvcHMpID8gb3B0aW9ucy5wcm9wcyA6IE9iamVjdC5rZXlzKG9wdGlvbnMucHJvcHMpKVxuICAgICAgICAgICAgICAgIDogW107XG5cbiAgICAgICAgICAgIC8vIOm7mOiupOWxnuaAp1xuICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG9wdGlvbnMucHJvcHMpKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHByb3BLZXlzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHAgPSBwcm9wS2V5c1tpXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcCA9IG9wdGlvbnMucHJvcHNbcF07XG4gICAgICAgICAgICAgICAgICAgIGlmICgnZGVmYXVsdCcgaW4gcHJvcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFByb3BzW3BdID0gdHlwZW9mIHByb3AuZGVmYXVsdCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gcHJvcC5kZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHByb3AuZGVmYXVsdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1lLl9wcm9wS2V5cyA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuY29tcHV0ZWQpIHtcbiAgICAgICAgICAgIG1lLl9jb21wdXRlZEtleXMgPSBPYmplY3Qua2V5cyhvcHRpb25zLmNvbXB1dGVkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1lLl9jb21wdXRlZEtleXMgPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRhdGEgPSB0eXBlb2Ygb3B0aW9ucy5kYXRhID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICA/IG9wdGlvbnMuZGF0YS5jYWxsKGV4dGVuZCh7fSwgZGVmYXVsdFByb3BzLCB0aGlzLl9zcmNTYmluZERhdGEpKVxuICAgICAgICAgICAgOiAob3B0aW9ucy5kYXRhIHx8IHt9KTtcblxuICAgICAgICB0aGlzLl9kYXRhS2V5cyA9IE9iamVjdC5rZXlzKGRhdGEpIHx8IFtdO1xuXG4gICAgICAgIHJldHVybiBleHRlbmQoeyRzdHlsZToge319LCBkZWZhdWx0UHJvcHMsIGRhdGEpO1xuICAgIH07XG5cbiAgICBpZiAob3B0aW9ucy5jb21wb25lbnRzKSB7XG4gICAgICAgIHNhbk9wdGlvbnMuY29tcG9uZW50cyA9IE9iamVjdFxuICAgICAgICAgICAgLmtleXMob3B0aW9ucy5jb21wb25lbnRzKVxuICAgICAgICAgICAgLnJlZHVjZSgocHJldiwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gb3B0aW9ucy5jb21wb25lbnRzW2tleV07XG4gICAgICAgICAgICAgICAgcHJldltrZXldID0gcHJldltoeXBoZW5hdGUoa2V5KV0gPSBjb21wb25lbnQgaW5zdGFuY2VvZiBDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgPyBjb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgOiAoY29tcG9uZW50LnRlbXBsYXRlIHx8IGNvbXBvbmVudC5hTm9kZSA/IGRlZmluZUNvbXBvbmVudChjb21wb25lbnQpIDogZGVmaW5lKGNvbXBvbmVudCkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgICAgICAgfSwge30pO1xuICAgICAgICBzYW5PcHRpb25zLl9jbXB0UmVhZHkgPSAxO1xuICAgIH1cblxuICAgIGNvbnN0IGNtcHQgPSBkZWZpbmVDb21wb25lbnQoc2FuT3B0aW9ucyk7XG5cbiAgICByZXR1cm4gb3B0aW9uc1tpbm5lcktleV0gPSBjbXB0O1xufVxuXG4iLCIvKipcbiAqIEBmaWxlIG92ZXJyaWRlIGV2YWwgZXhwclxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCB7RGF0YSwgcGFyc2VFeHByLCBFeHByVHlwZSwgZXZhbEV4cHJ9IGZyb20gJ3Nhbic7XG5cbmNvbnN0IG9yaWdpbmFsR2V0ID0gRGF0YS5wcm90b3R5cGUuZ2V0O1xuXG5EYXRhLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoZXhwciwgY2FsbGVlKSB7XG4gICAgaWYgKGV4cHIgJiYgdHlwZW9mIGV4cHIgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGV4cHIgPSBwYXJzZUV4cHIoZXhwcik7XG4gICAgfVxuICAgIGxldCB2YWx1ZSA9IG9yaWdpbmFsR2V0LmNhbGwodGhpcywgZXhwciwgY2FsbGVlKTtcbiAgICBpZiAoIWV4cHIgfHwgdmFsdWUgIT09IHVuZGVmaW5lZCB8fCAhdGhpcy5vd25lciB8fCBleHByLnR5cGUgIT09IEV4cHJUeXBlLkFDQ0VTU09SKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgY29uc3QgcGF0aHMgPSBleHByLnBhdGhzO1xuICAgIGNvbnN0IGZpcnN0ID0gcGF0aHNbMF0udmFsdWU7XG4gICAgaWYgKFxuICAgICAgICBbXG4gICAgICAgICAgICAuLi50aGlzLm93bmVyLl9wcm9wS2V5cyxcbiAgICAgICAgICAgIC4uLnRoaXMub3duZXIuX2RhdGFLZXlzLFxuICAgICAgICAgICAgLi4udGhpcy5vd25lci5fY29tcHV0ZWRLZXlzXG4gICAgICAgIF0uaW5kZXhPZihmaXJzdCkgPj0gMFxuICAgICkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHZhbHVlID0gdGhpcy5vd25lcltmaXJzdF07XG4gICAgZm9yICh2YXIgaSA9IDEsIGwgPSBwYXRocy5sZW5ndGg7IHZhbHVlICE9IG51bGwgJiYgaSA8IGw7IGkrKykge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlW3BhdGhzW2ldLnZhbHVlIHx8IGV2YWxFeHByKHBhdGhzW2ldLCBjYWxsZWUpXTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xufTtcbiIsIi8qKlxuICogQGZpbGUgbWVyZ2UgY2xhc3NcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5mdW5jdGlvbiBzdHJpbmcoY2xzID0gJycpIHtcbiAgICBpZiAoIWNscykge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHJldHVybiBjbHNcbiAgICAgICAgLnNwbGl0KCcgJylcbiAgICAgICAgLnJlZHVjZSgocHJldiwgbmFtZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgICAgW25hbWVdOiAxXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LCB7fSk7XG59XG5cbmZ1bmN0aW9uIG9iamVjdChjbHMgPSB7fSkge1xuICAgIHJldHVybiBPYmplY3RcbiAgICAgICAgLmtleXMoY2xzKVxuICAgICAgICAucmVkdWNlKChwcmV2LCBrZXkpID0+IHtcbiAgICAgICAgICAgIGlmICghY2xzW2tleV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgICAgICAuLi5zdHJpbmcoa2V5KVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSwge30pO1xufVxuXG5mdW5jdGlvbiBhcnJheShjbHMgPSBbXSkge1xuICAgIGxldCBjbGF6eiA9IHt9O1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBjbHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGNsc1tpXTtcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBjbGF6eiA9IHtcbiAgICAgICAgICAgIC4uLmNsYXp6LFxuICAgICAgICAgICAgLi4uKFxuICAgICAgICAgICAgICAgIHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgID8gc3RyaW5nKGVsZW1lbnQpXG4gICAgICAgICAgICAgICAgOiAoQXJyYXkuaXNBcnJheShlbGVtZW50KSA/IGFycmF5KGVsZW1lbnQpIDogb2JqZWN0KGVsZW1lbnQpKVxuICAgICAgICAgICAgKVxuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gY2xheno7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0aWNDbGFzcyA9ICcnLCBjbHMgPSB7fSkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhhcnJheShbc3RhdGljQ2xhc3MsIGNsc10pKS5qb2luKCcgJyk7XG59XG4iLCIvKipcbiAqIEBmaWxlIG1lcmdlIHN0eWxlXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHtjYWNoZWQsIGV4dGVuZCwgdG9PYmplY3R9IGZyb20gJy4uL3NoYXJlZC91dGlsJztcblxuY29uc3QgcGFyc2VTdHlsZVRleHQgPSBjYWNoZWQoZnVuY3Rpb24gKGNzc1RleHQpIHtcbiAgICBjb25zdCByZXMgPSB7fTtcbiAgICBjb25zdCBsaXN0RGVsaW1pdGVyID0gLzsoPyFbXihdKlxcKSkvZztcbiAgICBjb25zdCBwcm9wZXJ0eURlbGltaXRlciA9IC86KC4rKS87XG4gICAgY3NzVGV4dC5zcGxpdChsaXN0RGVsaW1pdGVyKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICB2YXIgdG1wID0gaXRlbS5zcGxpdChwcm9wZXJ0eURlbGltaXRlcik7XG4gICAgICAgICAgICB0bXAubGVuZ3RoID4gMSAmJiAocmVzW3RtcFswXS50cmltKCldID0gdG1wWzFdLnRyaW0oKSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzO1xufSk7XG5cbi8vIG5vcm1hbGl6ZSBwb3NzaWJsZSBhcnJheSAvIHN0cmluZyB2YWx1ZXMgaW50byBPYmplY3RcbmZ1bmN0aW9uIG5vcm1hbGl6ZVN0eWxlQmluZGluZyhiaW5kaW5nU3R5bGUpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShiaW5kaW5nU3R5bGUpKSB7XG4gICAgICAgIHJldHVybiB0b09iamVjdChiaW5kaW5nU3R5bGUpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGJpbmRpbmdTdHlsZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlU3R5bGVUZXh0KGJpbmRpbmdTdHlsZSk7XG4gICAgfVxuICAgIHJldHVybiBiaW5kaW5nU3R5bGU7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRpY1N0eWxlLCBzdHlsZSwgdlNob3cgPSB0cnVlKSB7XG4gICAgc3R5bGUgPSBub3JtYWxpemVTdHlsZUJpbmRpbmcoc3R5bGUpO1xuICAgIGlmICghdlNob3cpIHtcbiAgICAgICAgc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gICAgcmV0dXJuIHN0YXRpY1N0eWxlXG4gICAgICAgID8gZXh0ZW5kKHN0YXRpY1N0eWxlLCBzdHlsZSlcbiAgICAgICAgOiBzdHlsZTtcbn1cbiIsIi8qKlxuICogQGZpbGUgbG9vcCBleHByZXNzaW9uXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHtjYWNoZWR9IGZyb20gJy4uL3NoYXJlZC91dGlsJztcblxuY29uc3QgdG9BcnJheSA9IGNhY2hlZChmdW5jdGlvbiAobikge1xuICAgIGNvbnN0IHZhbHVlID0gbmV3IEFycmF5KG4pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgIHZhbHVlW2ldID0gaSArIDE7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAoIWlzTmFOKHZhbHVlKSkge1xuICAgICAgICBjb25zdCBuID0gK3ZhbHVlO1xuICAgICAgICB2YWx1ZSA9IHRvQXJyYXkobik7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn1cblxuIiwiLyoqXG4gKiBAZmlsZSBnZXQgY29tcG9uZW50IHR5cGVcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQge2V2YWxFeHByfSBmcm9tICdzYW4nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoYU5vZGUsIGRhdGEpIHtcbiAgICBpZiAoYU5vZGUudGFnTmFtZSAhPT0gJ2NvbXBvbmVudCcgfHwgYU5vZGUuaG90c3BvdC5wcm9wcy5pcyA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudHNbYU5vZGUudGFnTmFtZV07XG4gICAgfVxuXG4gICAgY29uc3QgaXMgPSBhTm9kZS5wcm9wc1thTm9kZS5ob3RzcG90LnByb3BzLmlzXTtcbiAgICBjb25zdCBpc1ZhbHVlID0gZXZhbEV4cHIoaXMuZXhwciwgZGF0YSk7XG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50c1tpc1ZhbHVlXTtcbn1cbiIsIi8qKlxuICogQGZpbGUgb2JqZWN0IGNvbXB1dGVkIHByb3BlcnRpZXMgbWVyZ2VcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocHJvcGVydGllcykge1xuICAgIHJldHVybiBwcm9wZXJ0aWVzLnJlZHVjZSgocHJldiwge2ssIHZ9KSA9PiB7XG4gICAgICAgIHByZXZba10gPSB2O1xuICAgICAgICByZXR1cm4gcHJldjtcbiAgICB9LCB7fSk7XG59XG4iLCIvKipcbiAqIEBmaWxlIHNhbiByZWYgcmV3cml0ZVxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCAqIGFzIHNhbiBmcm9tICdzYW4nO1xuaW1wb3J0IHtjYW1lbGl6ZX0gZnJvbSAnLi4vc2hhcmVkL3V0aWwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAobmFtZSkge1xuXG4gICAgY29uc3Qgb3duZXIgPSB0aGlzO1xuXG4gICAgZnVuY3Rpb24gY2hpbGRyZW5UcmF2ZXJzYWwoY2hpbGRyZW4pIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcmVmVGFyZ2V0ID0gZWxlbWVudFRyYXZlcnNhbChjaGlsZHJlbltpXSk7XG4gICAgICAgICAgICBpZiAocmVmVGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlZlRhcmdldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVsZW1lbnRUcmF2ZXJzYWwoZWxlbWVudCkge1xuICAgICAgICBjb25zdCBub2RlVHlwZSA9IGVsZW1lbnQubm9kZVR5cGU7XG4gICAgICAgIGlmIChub2RlVHlwZSA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZWZUYXJnZXQ7XG4gICAgICAgIGlmIChlbGVtZW50Lm93bmVyID09PSBvd25lcikge1xuICAgICAgICAgICAgbGV0IHJlZjtcbiAgICAgICAgICAgIGxldCB2YWx1ZTtcbiAgICAgICAgICAgIHN3aXRjaCAobm9kZVR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICByZWYgPSBlbGVtZW50LmFOb2RlLmRpcmVjdGl2ZXMucmVmO1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHJlZiAmJiBzYW4uZXZhbEV4cHIocmVmLnZhbHVlLCBlbGVtZW50LnNjb3BlLCBvd25lcik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWYgJiYgKHZhbHVlID09PSBuYW1lIHx8IGNhbWVsaXplKHZhbHVlKSA9PT0gbmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBub2RlVHlwZSA9PT0gNCA/IGVsZW1lbnQuZWwgOiBlbGVtZW50LmNoaWxkcmVuLm1hcChlbGVtZW50VHJhdmVyc2FsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgcmVmID0gZWxlbWVudC5zb3VyY2UuZGlyZWN0aXZlcy5yZWY7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gcmVmICYmIHNhbi5ldmFsRXhwcihyZWYudmFsdWUsIGVsZW1lbnQuc2NvcGUsIG93bmVyKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlZiAmJiAodmFsdWUgPT09IG5hbWUgfHwgY2FtZWxpemUodmFsdWUpID09PSBuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVmVGFyZ2V0ID0gZWxlbWVudC5zbG90Q2hpbGRyZW4gJiYgY2hpbGRyZW5UcmF2ZXJzYWwoZWxlbWVudC5zbG90Q2hpbGRyZW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlZlRhcmdldCB8fCBjaGlsZHJlblRyYXZlcnNhbChlbGVtZW50LmNoaWxkcmVuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGRyZW5UcmF2ZXJzYWwodGhpcy5jaGlsZHJlbik7XG59O1xuIiwiLyoqXG4gKiBAZmlsZSBtZXJnZSBvcHRpb25zXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHtleHRlbmR9IGZyb20gJy4uL3NoYXJlZC91dGlsJztcbmltcG9ydCB7bGlmZUN5Y2xlS2V5cywgbGlmZUN5Y2xlTWFwfSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCAqIGFzIGF0b21CdWlsZEluTWl4aW4gZnJvbSAnLi9hdG9tLWdsb2JhbC1hcGknO1xuXG5jb25zdCBrZXlzID0gW1xuICAgICdmaWx0ZXJzJyxcbiAgICAnY29tcHV0ZWQnXG5dO1xuXG5mdW5jdGlvbiBtZXJnZUhvb2socGFyZW50VmFsLCBjaGlsZFZhbCkge1xuICAgIHJldHVybiBjaGlsZFZhbFxuICAgICAgICA/IHBhcmVudFZhbFxuICAgICAgICAgICAgPyBwYXJlbnRWYWwuY29uY2F0KGNoaWxkVmFsKVxuICAgICAgICAgICAgOiBBcnJheS5pc0FycmF5KGNoaWxkVmFsKVxuICAgICAgICAgICAgICAgID8gY2hpbGRWYWxcbiAgICAgICAgICAgICAgICA6IFtjaGlsZFZhbF1cbiAgICAgICAgICAgIDogcGFyZW50VmFsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZXJnZU9wdGlvbnMob3B0aW9ucykge1xuICAgIGNvbnN0IGRlc3RPcHRpb25zID0ge307XG4gICAgY29uc3QgbGlzdCA9IEFycmF5LmlzQXJyYXkob3B0aW9ucy5taXhpbnMpXG4gICAgICAgID8gW2F0b21CdWlsZEluTWl4aW4sIC4uLm9wdGlvbnMubWl4aW5zLCBvcHRpb25zXVxuICAgICAgICA6IFthdG9tQnVpbGRJbk1peGluLCBvcHRpb25zXTtcblxuICAgIGNvbnN0IG1ldGhvZHMgPSB7fTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBsaXN0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG9wdCA9IGxpc3RbaV07XG4gICAgICAgIG9wdC5tZXRob2RzICYmIGV4dGVuZChtZXRob2RzLCBvcHQubWV0aG9kcyk7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwga2V5cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgY29uc3QgayA9IGtleXNbal07XG4gICAgICAgICAgICBpZiAob3B0W2tdKSB7XG4gICAgICAgICAgICAgICAgZGVzdE9wdGlvbnNba10gPSBleHRlbmQoZGVzdE9wdGlvbnNba10gfHwge30sIG9wdFtrXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsaWZlQ3ljbGVLZXlzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCBrID0gbGlmZUN5Y2xlS2V5c1tqXTtcbiAgICAgICAgICAgIGNvbnN0IGRrID0gbGlmZUN5Y2xlTWFwW2tdO1xuICAgICAgICAgICAgaWYgKG9wdFtrXSkge1xuICAgICAgICAgICAgICAgIGRlc3RPcHRpb25zW2RrXSA9IG1lcmdlSG9vayhkZXN0T3B0aW9uc1tka10gfHwgW10sIG9wdFtrXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBsaWZlQ3ljbGVLZXlzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGNvbnN0IGsgPSBsaWZlQ3ljbGVLZXlzW2pdO1xuICAgICAgICBjb25zdCBkayA9IGxpZmVDeWNsZU1hcFtrXTtcbiAgICAgICAgaWYgKGRlc3RPcHRpb25zW2RrXSkge1xuICAgICAgICAgICAgY29uc3QgaG9va3MgPSBkZXN0T3B0aW9uc1tka10uc2xpY2UoKTtcbiAgICAgICAgICAgIGRlc3RPcHRpb25zW2RrXSA9IGhvb2tzLmxlbmd0aCA9PT0gMSA/IGhvb2tzWzBdIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGhvb2tzLmZvckVhY2goaG9vayA9PiBob29rLmNhbGwodGhpcyksIHRoaXMpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkZXN0T3B0aW9ucy5fbWV0aG9kS2V5cyA9IE9iamVjdC5rZXlzKG1ldGhvZHMpO1xuICAgIGV4dGVuZChkZXN0T3B0aW9ucywgbWV0aG9kcyk7XG4gICAgaWYgKG9wdGlvbnMubWVzc2FnZXMpIHtcbiAgICAgICAgZGVzdE9wdGlvbnMubWVzc2FnZXMgPSBvcHRpb25zLm1lc3NhZ2VzO1xuICAgIH1cbiAgICByZXR1cm4gZGVzdE9wdGlvbnM7XG59XG4iLCIvKipcbiAqIEBmaWxlIGNvbnN0YW50c1xuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmV4cG9ydCBjb25zdCBsaWZlQ3ljbGVNYXAgPSB7XG4gICAgYmVmb3JlQ3JlYXRlOiAnY29tcGlsZWQnLFxuICAgIG1vdW50ZWQ6ICdhdHRhY2hlZCcsXG4gICAgY3JlYXRlZDogJ2luaXRlZCcsXG4gICAgYmVmb3JlTW91bnQ6ICdjcmVhdGVkJyxcbiAgICBiZWZvcmVEZXN0cm95OiAnZGV0YWNoZWQnLFxuICAgIGRlc3Ryb3k6ICdkaXNwb3NlZCcsXG4gICAgdXBkYXRlZDogJ3VwZGF0ZWQnLFxuICAgIGJlZm9yZVVwZGF0ZTogJ2JlZm9yZVVwZGF0ZScsXG4gICAgYWN0aXZhdGVkOiAnYWN0aXZhdGVkJyxcbiAgICBkZWFjdGl2YXRlZDogJ2RlYWN0aXZhdGVkJ1xufTtcblxuZXhwb3J0IGNvbnN0IGxpZmVDeWNsZUtleXMgPSBPYmplY3Qua2V5cyhsaWZlQ3ljbGVNYXApO1xuIiwiLyoqXG4gKiBAZmlsZSDlhajlsYDnlJ/mlYjnmoTlh73mlbBcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQge3RvT2JqZWN0fSBmcm9tICcuLi9zaGFyZWQvdXRpbCc7XG5cbmNvbnN0IE1BVEhfTUVUSE9EID0gW1xuICAgICdmbG9vcicsICdjZWlsJywgJ3JvdW5kJyxcbiAgICAnYWJzJywgJ21heCcsICdtaW4nLCAncG93J1xuXTtcblxuZXhwb3J0IGNvbnN0IG1ldGhvZHMgPSB7fTtcblxuTUFUSF9NRVRIT0QuZm9yRWFjaChuYW1lID0+IHtcbiAgICBtZXRob2RzW2BtYXRoXyR7bmFtZX1gXSA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICAgIHJldHVybiBNYXRoW25hbWVdLmFwcGx5KE1hdGgsIGFyZ3MpO1xuICAgIH07XG59KTtcblxubWV0aG9kcy5hcnJheV9zbGljZSA9IGZ1bmN0aW9uIChhcnIsIHN0YXJ0LCBsZW4pIHtcbiAgICB2YXIgZW5kID0gbGVuID09IG51bGwgPyB2b2lkIDAgOiAobGVuID49IDAgPyAoc3RhcnQgKyBsZW4pIDogKGFyci5sZW5ndGggKyBsZW4pKTtcbiAgICByZXR1cm4gYXJyLnNsaWNlKHN0YXJ0LCBlbmQpO1xufTtcblxubWV0aG9kcy5hcnJheV9qb2luID0gZnVuY3Rpb24gKGFyciwgc2VwKSB7XG4gICAgcmV0dXJuIGFyci5qb2luKHNlcCk7XG59O1xuXG5tZXRob2RzLnN0cl9wb3MgPSBmdW5jdGlvbiAoc3RyLCBtYXRjaCkge1xuICAgIHJldHVybiBzdHIuaW5kZXhPZihtYXRjaCk7XG59O1xuXG5tZXRob2RzLm9iamVjdF9mcmVlemUgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIE9iamVjdC5mcmVlemUob2JqKTtcbn07XG5cbmV4cG9ydCBjb25zdCBmaWx0ZXJzID0ge1xuICAgIGpzb24ob2JqKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShqc29uKTtcbiAgICB9LFxuICAgIGxvd2VyKHN0cikge1xuICAgICAgICByZXR1cm4gc3RyLnRvTG93ZXJDYXNlKCk7XG4gICAgfSxcbiAgICB1cHBlcihzdHIpIHtcbiAgICAgICAgcmV0dXJuIHN0ci50b1VwcGVyQ2FzZSgpO1xuICAgIH1cbn07XG4iLCIvKipcbiAqIEBmaWxlIOimhuebliBzYW4g5Y6f55Sf55qEIF9jYWxjQ29tcHV0ZWRcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQge2RlZn0gZnJvbSAnLi4vc2hhcmVkL3V0aWwnO1xuaW1wb3J0IHNsb3RzIGZyb20gJy4vZ2V0LXNsb3RzJztcbmltcG9ydCB7cmVzZXRUYXJnZXQsIGNsZWFuVGFyZ2V0LCBEZXB9IGZyb20gJy4vYmluZC1kYXRhJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2FsY0NvbXB1dGVkKGtleSkge1xuICAgIGxldCBjb21wdXRlZERlcHMgPSB0aGlzLmNvbXB1dGVkRGVwc1trZXldO1xuICAgIGlmICghY29tcHV0ZWREZXBzKSB7XG4gICAgICAgIGNvbXB1dGVkRGVwcyA9IHRoaXMuY29tcHV0ZWREZXBzW2tleV0gPSB7fTtcbiAgICB9XG5cbiAgICByZXNldFRhcmdldCgpO1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5jb21wdXRlZFtrZXldLmNhbGwodGhpcyk7XG5cbiAgICBjb25zdCBkZXBzID0gRGVwLnRhcmdldDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgZGVwID0gZGVwc1tpXTtcbiAgICAgICAgY29uc3QgZXhwciA9IGRlcC5wYXRocy5tYXAoYSA9PiBhLnZhbHVlKS5qb2luKCcuJyk7XG4gICAgICAgIGlmICghY29tcHV0ZWREZXBzW2V4cHJdKSB7XG4gICAgICAgICAgICBjb21wdXRlZERlcHNbZXhwcl0gPSAxO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5jb21wdXRlZFtleHByXSAmJiAhdGhpcy5jb21wdXRlZERlcHNbZXhwcl0pIHtcbiAgICAgICAgICAgICAgICBjYWxjQ29tcHV0ZWQuY2FsbCh0aGlzLCBleHByKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy53YXRjaChleHByLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY2FsY0NvbXB1dGVkLmNhbGwodGhpcywga2V5KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNsZWFuVGFyZ2V0KCk7XG5cbiAgICB0aGlzLmRhdGEuc2V0KGtleSwgdmFsdWUpO1xufVxuIiwiLyoqXG4gKiBAZmlsZSBjYWxsIGFjdGl2YXRlZCBkZWFjdGl2YXRlZFxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCB7Tm9kZVR5cGV9IGZyb20gJ3Nhbic7XG5cbmZ1bmN0aW9uIGNyZWF0ZUNhbGxGYWN0b3J5KG5hbWUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gY2FsbChkaXJlY3QpIHtcbiAgICAgICAgY29uc3QgZWxlID0gdGhpcztcbiAgICAgICAgaWYgKGVsZS5ub2RlVHlwZSA9PT0gTm9kZVR5cGUuQ01QVCkge1xuICAgICAgICAgICAgZWxlLl90b1BoYXNlKG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbGUuY2hpbGRyZW4gJiYgZWxlLmNoaWxkcmVuLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGVsZS5jaGlsZHJlbi5mb3JFYWNoKGNhbGwpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgY2FsbEFjdGl2aXRlZCA9IGNyZWF0ZUNhbGxGYWN0b3J5KCdhY3Rpdml0ZWQnKTtcbmV4cG9ydCBjb25zdCBjYWxsRGVBY3Rpdml0ZWQgPSBjcmVhdGVDYWxsRmFjdG9yeSgnZGVhY3Rpdml0ZWQnKTtcbiIsIi8qKlxuICogQGZpbGUgcy10cmFuc2l0aW9uXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHtjYWNoZWQsIHJlbW92ZSwgZXh0ZW5kLCBvbmNlLCBpc09iamVjdH0gZnJvbSAnLi4vc2hhcmVkL3V0aWwnO1xuaW1wb3J0IHthZGRDbGFzcywgcmVtb3ZlQ2xhc3N9IGZyb20gJy4vY2xhc3MtdXRpbCc7XG5cbmZ1bmN0aW9uIHJlc29sdmVUcmFuc2l0aW9uKGRlZikge1xuICAgIGlmICghZGVmKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAodHlwZW9mIGRlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgY29uc3QgcmVzID0ge307XG4gICAgICAgIGlmIChkZWYuY3NzICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgZXh0ZW5kKHJlcywgYXV0b0Nzc1RyYW5zaXRpb24oZGVmLm5hbWUgfHwgJ3YnKSk7XG4gICAgICAgIH1cbiAgICAgICAgZXh0ZW5kKHJlcywgZGVmKTtcbiAgICAgICAgcmV0dXJuIHJlc1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgZGVmID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gYXV0b0Nzc1RyYW5zaXRpb24oZGVmKVxuICAgIH1cbn1cblxuY29uc3QgYXV0b0Nzc1RyYW5zaXRpb24gPSBjYWNoZWQobmFtZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZW50ZXJDbGFzczogYCR7bmFtZX0tZW50ZXJgLFxuICAgICAgICBlbnRlclRvQ2xhc3M6IGAke25hbWV9LWVudGVyLXRvYCxcbiAgICAgICAgZW50ZXJBY3RpdmVDbGFzczogYCR7bmFtZX0tZW50ZXItYWN0aXZlYCxcbiAgICAgICAgbGVhdmVDbGFzczogYCR7bmFtZX0tbGVhdmVgLFxuICAgICAgICBsZWF2ZVRvQ2xhc3M6IGAke25hbWV9LWxlYXZlLXRvYCxcbiAgICAgICAgbGVhdmVBY3RpdmVDbGFzczogYCR7bmFtZX0tbGVhdmUtYWN0aXZlYFxuICAgIH07XG59KTtcblxuY29uc3QgVFJBTlNJVElPTiA9ICd0cmFuc2l0aW9uJztcbmNvbnN0IEFOSU1BVElPTiA9ICdhbmltYXRpb24nO1xuXG4vLyBUcmFuc2l0aW9uIHByb3BlcnR5L2V2ZW50IHNuaWZmaW5nXG5sZXQgdHJhbnNpdGlvblByb3AgPSAndHJhbnNpdGlvbic7XG5sZXQgdHJhbnNpdGlvbkVuZEV2ZW50ID0gJ3RyYW5zaXRpb25lbmQnO1xubGV0IGFuaW1hdGlvblByb3AgPSAnYW5pbWF0aW9uJztcbmxldCBhbmltYXRpb25FbmRFdmVudCA9ICdhbmltYXRpb25lbmQnO1xuLyogaXN0YW5idWwgaWdub3JlIGlmICovXG5pZiAoXG4gICAgd2luZG93Lm9udHJhbnNpdGlvbmVuZCA9PT0gdW5kZWZpbmVkXG4gICAgJiYgd2luZG93Lm9ud2Via2l0dHJhbnNpdGlvbmVuZCAhPT0gdW5kZWZpbmVkXG4pIHtcbiAgICB0cmFuc2l0aW9uUHJvcCA9ICdXZWJraXRUcmFuc2l0aW9uJztcbiAgICB0cmFuc2l0aW9uRW5kRXZlbnQgPSAnd2Via2l0VHJhbnNpdGlvbkVuZCc7XG59XG5pZiAoXG4gICAgd2luZG93Lm9uYW5pbWF0aW9uZW5kID09PSB1bmRlZmluZWRcbiAgICAmJiB3aW5kb3cub253ZWJraXRhbmltYXRpb25lbmQgIT09IHVuZGVmaW5lZFxuKSB7XG4gICAgYW5pbWF0aW9uUHJvcCA9ICdXZWJraXRBbmltYXRpb24nO1xuICAgIGFuaW1hdGlvbkVuZEV2ZW50ID0gJ3dlYmtpdEFuaW1hdGlvbkVuZCc7XG59XG5cbmNvbnN0IHJhZiA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgICA/IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUuYmluZCh3aW5kb3cpXG4gICAgOiBzZXRUaW1lb3V0O1xuXG5mdW5jdGlvbiBuZXh0RnJhbWUgKGZuKSB7XG4gICAgcmFmKCgpID0+IHtcbiAgICAgICAgcmFmKGZuKTtcbiAgICB9KTtcbn1cblxuY29uc3QgdHJhbnNmb3JtUkUgPSAvXFxiKHRyYW5zZm9ybXxhbGwpKCx8JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUcmFuc2l0aW9uSW5mbyhlbCwgZXhwZWN0ZWRUeXBlKSB7XG4gICAgY29uc3Qgc3R5bGVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpXG4gICAgLy8gSlNET00gbWF5IHJldHVybiB1bmRlZmluZWQgZm9yIHRyYW5zaXRpb24gcHJvcGVydGllc1xuICAgIGNvbnN0IHRyYW5zaXRpb25EZWxheXMgPSAoc3R5bGVzW3RyYW5zaXRpb25Qcm9wICsgJ0RlbGF5J10gfHwgJycpLnNwbGl0KCcsICcpO1xuICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbnMgPSAoc3R5bGVzW3RyYW5zaXRpb25Qcm9wICsgJ0R1cmF0aW9uJ10gfHwgJycpLnNwbGl0KCcsICcpO1xuICAgIGNvbnN0IHRyYW5zaXRpb25UaW1lb3V0ID0gZ2V0VGltZW91dCh0cmFuc2l0aW9uRGVsYXlzLCB0cmFuc2l0aW9uRHVyYXRpb25zKTtcbiAgICBjb25zdCBhbmltYXRpb25EZWxheXMgPSAoc3R5bGVzW2FuaW1hdGlvblByb3AgKyAnRGVsYXknXSB8fCAnJykuc3BsaXQoJywgJyk7XG4gICAgY29uc3QgYW5pbWF0aW9uRHVyYXRpb25zID0gKHN0eWxlc1thbmltYXRpb25Qcm9wICsgJ0R1cmF0aW9uJ10gfHwgJycpLnNwbGl0KCcsICcpO1xuICAgIGNvbnN0IGFuaW1hdGlvblRpbWVvdXQgPSBnZXRUaW1lb3V0KGFuaW1hdGlvbkRlbGF5cywgYW5pbWF0aW9uRHVyYXRpb25zKTtcblxuICAgIGxldCB0eXBlO1xuICAgIGxldCB0aW1lb3V0ID0gMDtcbiAgICBsZXQgcHJvcENvdW50ID0gMDtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoZXhwZWN0ZWRUeXBlID09PSBUUkFOU0lUSU9OKSB7XG4gICAgICAgIGlmICh0cmFuc2l0aW9uVGltZW91dCA+IDApIHtcbiAgICAgICAgICAgIHR5cGUgPSBUUkFOU0lUSU9OO1xuICAgICAgICAgICAgdGltZW91dCA9IHRyYW5zaXRpb25UaW1lb3V0O1xuICAgICAgICAgICAgcHJvcENvdW50ID0gdHJhbnNpdGlvbkR1cmF0aW9ucy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoZXhwZWN0ZWRUeXBlID09PSBBTklNQVRJT04pIHtcbiAgICAgICAgaWYgKGFuaW1hdGlvblRpbWVvdXQgPiAwKSB7XG4gICAgICAgICAgICB0eXBlID0gQU5JTUFUSU9OO1xuICAgICAgICAgICAgdGltZW91dCA9IGFuaW1hdGlvblRpbWVvdXQ7XG4gICAgICAgICAgICBwcm9wQ291bnQgPSBhbmltYXRpb25EdXJhdGlvbnMubGVuZ3RoO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aW1lb3V0ID0gTWF0aC5tYXgodHJhbnNpdGlvblRpbWVvdXQsIGFuaW1hdGlvblRpbWVvdXQpXG4gICAgICAgIHR5cGUgPSB0aW1lb3V0ID4gMFxuICAgICAgICAgICAgPyB0cmFuc2l0aW9uVGltZW91dCA+IGFuaW1hdGlvblRpbWVvdXRcbiAgICAgICAgICAgICAgICA/IFRSQU5TSVRJT05cbiAgICAgICAgICAgICAgICA6IEFOSU1BVElPTlxuICAgICAgICAgICAgOiBudWxsO1xuICAgICAgICBwcm9wQ291bnQgPSB0eXBlXG4gICAgICAgICAgICA/IHR5cGUgPT09IFRSQU5TSVRJT05cbiAgICAgICAgICAgICAgICA/IHRyYW5zaXRpb25EdXJhdGlvbnMubGVuZ3RoXG4gICAgICAgICAgICAgICAgOiBhbmltYXRpb25EdXJhdGlvbnMubGVuZ3RoXG4gICAgICAgICAgICA6IDA7XG4gICAgfVxuICAgIGNvbnN0IGhhc1RyYW5zZm9ybSA9XG4gICAgICAgIHR5cGUgPT09IFRSQU5TSVRJT05cbiAgICAgICAgJiYgdHJhbnNmb3JtUkUudGVzdChzdHlsZXNbdHJhbnNpdGlvblByb3AgKyAnUHJvcGVydHknXSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZSxcbiAgICAgICAgdGltZW91dCxcbiAgICAgICAgcHJvcENvdW50LFxuICAgICAgICBoYXNUcmFuc2Zvcm1cbiAgICB9O1xufVxuXG5mdW5jdGlvbiBnZXRUaW1lb3V0KGRlbGF5cywgZHVyYXRpb25zKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICB3aGlsZSAoZGVsYXlzLmxlbmd0aCA8IGR1cmF0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgZGVsYXlzID0gZGVsYXlzLmNvbmNhdChkZWxheXMpO1xuICAgIH1cblxuICAgIHJldHVybiBNYXRoLm1heC5hcHBseShudWxsLCBkdXJhdGlvbnMubWFwKChkLCBpKSA9PiB7XG4gICAgICAgIHJldHVybiB0b01zKGQpICsgdG9NcyhkZWxheXNbaV0pO1xuICAgIH0pKTtcbn1cblxuLy8gT2xkIHZlcnNpb25zIG9mIENocm9taXVtIChiZWxvdyA2MS4wLjMxNjMuMTAwKSBmb3JtYXRzIGZsb2F0aW5nIHBvaW50ZXIgbnVtYmVyc1xuLy8gaW4gYSBsb2NhbGUtZGVwZW5kZW50IHdheSwgdXNpbmcgYSBjb21tYSBpbnN0ZWFkIG9mIGEgZG90LlxuLy8gSWYgY29tbWEgaXMgbm90IHJlcGxhY2VkIHdpdGggYSBkb3QsIHRoZSBpbnB1dCB3aWxsIGJlIHJvdW5kZWQgZG93biAoaS5lLiBhY3Rpbmdcbi8vIGFzIGEgZmxvb3IgZnVuY3Rpb24pIGNhdXNpbmcgdW5leHBlY3RlZCBiZWhhdmlvcnNcbmZ1bmN0aW9uIHRvTXMocykge1xuICAgIHJldHVybiBOdW1iZXIocy5zbGljZSgwLCAtMSkucmVwbGFjZSgnLCcsICcuJykpICogMTAwMDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRyYW5zaXRpb25DbGFzcyhlbCwgY2xzKSB7XG4gICAgY29uc3QgdHJhbnNpdGlvbkNsYXNzZXMgPSBlbC5fdHJhbnNpdGlvbkNsYXNzZXMgfHwgKGVsLl90cmFuc2l0aW9uQ2xhc3NlcyA9IFtdKTtcbiAgICBpZiAodHJhbnNpdGlvbkNsYXNzZXMuaW5kZXhPZihjbHMpIDwgMCkge1xuICAgICAgICB0cmFuc2l0aW9uQ2xhc3Nlcy5wdXNoKGNscyk7XG4gICAgICAgIGFkZENsYXNzKGVsLCBjbHMpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVRyYW5zaXRpb25DbGFzcyhlbCwgY2xzKSB7XG4gICAgaWYgKGVsLl90cmFuc2l0aW9uQ2xhc3Nlcykge1xuICAgICAgICByZW1vdmUoZWwuX3RyYW5zaXRpb25DbGFzc2VzLCBjbHMpO1xuICAgIH1cbiAgICByZW1vdmVDbGFzcyhlbCwgY2xzKTtcbn1cblxuZnVuY3Rpb24gaXNWYWxpZER1cmF0aW9uKHZhbCkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJyAmJiAhaXNOYU4odmFsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdoZW5UcmFuc2l0aW9uRW5kcyhlbCwgZXhwZWN0ZWRUeXBlLCBjYikge1xuICAgIGNvbnN0IHtcbiAgICAgICAgdHlwZSxcbiAgICAgICAgdGltZW91dCxcbiAgICAgICAgcHJvcENvdW50XG4gICAgfSA9IGdldFRyYW5zaXRpb25JbmZvKGVsLCBleHBlY3RlZFR5cGUpO1xuICAgIGlmICghdHlwZSkge1xuICAgICAgICByZXR1cm4gY2IoKTtcbiAgICB9XG4gICAgY29uc3QgZXZlbnQgPSB0eXBlID09PSBUUkFOU0lUSU9OID8gdHJhbnNpdGlvbkVuZEV2ZW50IDogYW5pbWF0aW9uRW5kRXZlbnQ7XG4gICAgbGV0IGVuZGVkID0gMDtcbiAgICBjb25zdCBlbmQgPSAoKSA9PiB7XG4gICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIG9uRW5kKVxuICAgICAgICBjYigpXG4gICAgfTtcbiAgICBjb25zdCBvbkVuZCA9IGUgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQgPT09IGVsKSB7XG4gICAgICAgICAgICBpZiAoKytlbmRlZCA+PSBwcm9wQ291bnQpIHtcbiAgICAgICAgICAgICAgICBlbmQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmIChlbmRlZCA8IHByb3BDb3VudCkge1xuICAgICAgICAgICAgZW5kKCk7XG4gICAgICAgIH1cbiAgICB9LCB0aW1lb3V0ICsgMSk7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgb25FbmQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICAgY29uc3QgZGF0YSA9IHJlc29sdmVUcmFuc2l0aW9uKG9wdGlvbnMpO1xuXG4gICAgY29uc3Qge1xuICAgICAgICBjc3MsXG4gICAgICAgIHR5cGUsXG4gICAgICAgIGVudGVyQ2xhc3MsXG4gICAgICAgIGVudGVyVG9DbGFzcyxcbiAgICAgICAgZW50ZXJBY3RpdmVDbGFzcyxcbiAgICAgICAgYXBwZWFyQ2xhc3MsXG4gICAgICAgIGFwcGVhclRvQ2xhc3MsXG4gICAgICAgIGFwcGVhckFjdGl2ZUNsYXNzLFxuICAgICAgICBiZWZvcmVFbnRlcixcbiAgICAgICAgZW50ZXIsXG4gICAgICAgIGFmdGVyRW50ZXIsXG4gICAgICAgIGVudGVyQ2FuY2VsbGVkLFxuICAgICAgICBiZWZvcmVBcHBlYXIsXG4gICAgICAgIGFwcGVhcixcbiAgICAgICAgYWZ0ZXJBcHBlYXIsXG4gICAgICAgIGFwcGVhckNhbmNlbGxlZCxcbiAgICAgICAgbGVhdmVDbGFzcyxcbiAgICAgICAgbGVhdmVUb0NsYXNzLFxuICAgICAgICBsZWF2ZUFjdGl2ZUNsYXNzLFxuICAgICAgICBiZWZvcmVMZWF2ZSxcbiAgICAgICAgbGVhdmUsXG4gICAgICAgIGFmdGVyTGVhdmUsXG4gICAgICAgIGxlYXZlQ2FuY2VsbGVkLFxuICAgICAgICBkZWxheUxlYXZlLFxuICAgICAgICBkdXJhdGlvblxuICAgIH0gPSByZXNvbHZlVHJhbnNpdGlvbihvcHRpb25zKTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzO1xuICAgIGNvbnN0IGV4cGVjdHNDU1MgPSBjc3MgIT09IGZhbHNlO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZW50ZXI6IGVudGVySGFuZGxlcixcbiAgICAgICAgbGVhdmU6IGxlYXZlSGFuZGxlclxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBnZXRIb29rKGZuKSB7XG4gICAgICAgIGlmICghZm4pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm4gZm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaW52b2tlckZuID0gY29udGV4dC5vd25lcltmbl07XG4gICAgICAgIGlmIChpbnZva2VyRm4gJiYgdHlwZW9mIGludm9rZXJGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuIGludm9rZXJGbjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZW50ZXJIYW5kbGVyKGVsLCBkb25lKSB7XG4gICAgICAgIGNvbnN0IGlzQXBwZWFyID0gIWNvbnRleHQubGlmZUN5Y2xlLmF0dGFjaGVkO1xuXG4gICAgICAgIC8vIGNhbGwgbGVhdmUgY2FsbGJhY2sgbm93XG4gICAgICAgIGlmIChlbC5fbGVhdmVDYikge1xuICAgICAgICAgICAgZWwuX2xlYXZlQ2IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICAgICAgZWwuX2xlYXZlQ2IoKVxuICAgICAgICB9XG5cbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgIGlmIChlbC5fZW50ZXJDYiB8fCBlbC5ub2RlVHlwZSAhPT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzQXBwZWFyICYmICFhcHBlYXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN0YXJ0Q2xhc3MgPSBpc0FwcGVhciAmJiBhcHBlYXJDbGFzc1xuICAgICAgICAgICAgPyBhcHBlYXJDbGFzc1xuICAgICAgICAgICAgOiBlbnRlckNsYXNzO1xuICAgICAgICBjb25zdCBhY3RpdmVDbGFzcyA9IGlzQXBwZWFyICYmIGFwcGVhckFjdGl2ZUNsYXNzXG4gICAgICAgICAgICA/IGFwcGVhckFjdGl2ZUNsYXNzXG4gICAgICAgICAgICA6IGVudGVyQWN0aXZlQ2xhc3M7XG4gICAgICAgIGNvbnN0IHRvQ2xhc3MgPSBpc0FwcGVhciAmJiBhcHBlYXJUb0NsYXNzXG4gICAgICAgICAgICA/IGFwcGVhclRvQ2xhc3NcbiAgICAgICAgICAgIDogZW50ZXJUb0NsYXNzO1xuXG4gICAgICAgIGNvbnN0IGJlZm9yZUVudGVySG9vayA9IGlzQXBwZWFyXG4gICAgICAgICAgICA/IChnZXRIb29rKGJlZm9yZUFwcGVhcikgfHwgZ2V0SG9vayhiZWZvcmVFbnRlcikpXG4gICAgICAgICAgICA6IGdldEhvb2soYmVmb3JlRW50ZXIpO1xuICAgICAgICBjb25zdCBlbnRlckhvb2sgPSBpc0FwcGVhclxuICAgICAgICAgICAgPyAoZ2V0SG9vayhhcHBlYXIpIHx8IGdldEhvb2soZW50ZXIpKVxuICAgICAgICAgICAgOiBnZXRIb29rKGVudGVyKTtcbiAgICAgICAgY29uc3QgYWZ0ZXJFbnRlckhvb2sgPSBpc0FwcGVhclxuICAgICAgICAgICAgPyAoZ2V0SG9vayhhZnRlckFwcGVhcikgfHwgZ2V0SG9vayhhZnRlckVudGVyKSlcbiAgICAgICAgICAgIDogZ2V0SG9vayhhZnRlckVudGVyKTtcbiAgICAgICAgY29uc3QgZW50ZXJDYW5jZWxsZWRIb29rID0gaXNBcHBlYXJcbiAgICAgICAgICAgID8gKGdldEhvb2soYXBwZWFyQ2FuY2VsbGVkKSB8fCBnZXRIb29rKGVudGVyQ2FuY2VsbGVkKSlcbiAgICAgICAgICAgIDogZ2V0SG9vayhlbnRlckNhbmNlbGxlZCk7XG5cbiAgICAgICAgY29uc3QgZXhwbGljaXRFbnRlckR1cmF0aW9uID0gKyhpc09iamVjdChkdXJhdGlvbikgPyBkdXJhdGlvbi5lbnRlciA6IGR1cmF0aW9uKTtcbiAgICAgICAgY29uc3QgdXNlcldhbnRzQ29udHJvbCA9IGVudGVySG9vayAmJiBlbnRlckhvb2subGVuZ3RoID4gMTtcblxuICAgICAgICBjb25zdCBjYiA9IGVsLl9lbnRlckNiID0gb25jZSgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXhwZWN0c0NTUykge1xuICAgICAgICAgICAgICAgIHJlbW92ZVRyYW5zaXRpb25DbGFzcyhlbCwgdG9DbGFzcylcbiAgICAgICAgICAgICAgICByZW1vdmVUcmFuc2l0aW9uQ2xhc3MoZWwsIGFjdGl2ZUNsYXNzKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNiLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgIGlmIChleHBlY3RzQ1NTKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZVRyYW5zaXRpb25DbGFzcyhlbCwgc3RhcnRDbGFzcylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZW50ZXJDYW5jZWxsZWRIb29rICYmIGVudGVyQ2FuY2VsbGVkSG9vayhlbClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGFmdGVyRW50ZXJIb29rICYmIGFmdGVyRW50ZXJIb29rKGVsKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWwuX2VudGVyQ2IgPSBudWxsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHN0YXJ0IGVudGVyIHRyYW5zaXRpb25cbiAgICAgICAgZW50ZXJIb29rICYmIGVudGVySG9vayhlbCwgY2IpO1xuICAgICAgICBiZWZvcmVFbnRlckhvb2sgJiYgYmVmb3JlRW50ZXJIb29rKGVsKTtcbiAgICAgICAgaWYgKGV4cGVjdHNDU1MpIHtcbiAgICAgICAgICAgIGFkZFRyYW5zaXRpb25DbGFzcyhlbCwgc3RhcnRDbGFzcyk7XG4gICAgICAgICAgICBhZGRUcmFuc2l0aW9uQ2xhc3MoZWwsIGFjdGl2ZUNsYXNzKTtcbiAgICAgICAgICAgIG5leHRGcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlVHJhbnNpdGlvbkNsYXNzKGVsLCBzdGFydENsYXNzKVxuICAgICAgICAgICAgICAgIGlmICghY2IuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZFRyYW5zaXRpb25DbGFzcyhlbCwgdG9DbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdXNlcldhbnRzQ29udHJvbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzVmFsaWREdXJhdGlvbihleHBsaWNpdEVudGVyRHVyYXRpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChjYiwgZXhwbGljaXRFbnRlckR1cmF0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hlblRyYW5zaXRpb25FbmRzKGVsLCB0eXBlLCBjYilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFleHBlY3RzQ1NTICYmICF1c2VyV2FudHNDb250cm9sKSB7XG4gICAgICAgICAgICBjYigpO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9uZSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxlYXZlSGFuZGxlcihlbCwgZG9uZSkge1xuXG4gICAgICAgIC8vIGNhbGwgZW50ZXIgY2FsbGJhY2sgbm93XG4gICAgICAgIGlmIChlbC5fZW50ZXJDYikge1xuICAgICAgICAgICAgZWwuX2VudGVyQ2IuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGVsLl9lbnRlckNiKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgaWYgKGVsLl9sZWF2ZUNiKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsZWF2ZUhvb2sgPSBnZXRIb29rKGxlYXZlKTtcbiAgICAgICAgY29uc3QgZGVsYXlMZWF2ZUhvb2sgPSBnZXRIb29rKGRlbGF5TGVhdmUpO1xuICAgICAgICBjb25zdCBiZWZvcmVMZWF2ZUhvb2sgPSBnZXRIb29rKGJlZm9yZUxlYXZlKTtcbiAgICAgICAgY29uc3QgYWZ0ZXJMZWF2ZUhvb2sgPSBnZXRIb29rKGFmdGVyTGVhdmUpO1xuXG4gICAgICAgIGNvbnN0IGV4cGxpY2l0TGVhdmVEdXJhdGlvbiA9ICsoaXNPYmplY3QoZHVyYXRpb24pID8gZHVyYXRpb24ubGVhdmUgOiBkdXJhdGlvbik7XG4gICAgICAgIGNvbnN0IHVzZXJXYW50c0NvbnRyb2wgPSBsZWF2ZUhvb2sgJiYgbGVhdmVIb29rLmxlbmd0aCA+IDE7XG5cbiAgICAgICAgY29uc3QgY2IgPSBlbC5fbGVhdmVDYiA9IG9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV4cGVjdHNDU1MpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVUcmFuc2l0aW9uQ2xhc3MoZWwsIGxlYXZlVG9DbGFzcyk7XG4gICAgICAgICAgICAgICAgcmVtb3ZlVHJhbnNpdGlvbkNsYXNzKGVsLCBsZWF2ZUFjdGl2ZUNsYXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYi5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXhwZWN0c0NTUykge1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVUcmFuc2l0aW9uQ2xhc3MoZWwsIGxlYXZlQ2xhc3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWF2ZUNhbmNlbGxlZCAmJiBsZWF2ZUNhbmNlbGxlZChlbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb25lKClcbiAgICAgICAgICAgICAgICBhZnRlckxlYXZlSG9vayAmJiBhZnRlckxlYXZlSG9vayhlbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbC5fbGVhdmVDYiA9IG51bGw7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChkZWxheUxlYXZlSG9vaykge1xuICAgICAgICAgICAgZGVsYXlMZWF2ZUhvb2socGVyZm9ybUxlYXZlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHBlcmZvcm1MZWF2ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcGVyZm9ybUxlYXZlKCkge1xuICAgICAgICAgICAgLy8gdGhlIGRlbGF5ZWQgbGVhdmUgbWF5IGhhdmUgYWxyZWFkeSBiZWVuIGNhbmNlbGxlZFxuICAgICAgICAgICAgaWYgKGNiLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJlZm9yZUxlYXZlSG9vayAmJiBiZWZvcmVMZWF2ZUhvb2soZWwpO1xuICAgICAgICAgICAgaWYgKGV4cGVjdHNDU1MpIHtcbiAgICAgICAgICAgICAgICBhZGRUcmFuc2l0aW9uQ2xhc3MoZWwsIGxlYXZlQ2xhc3MpO1xuICAgICAgICAgICAgICAgIGFkZFRyYW5zaXRpb25DbGFzcyhlbCwgbGVhdmVBY3RpdmVDbGFzcyk7XG4gICAgICAgICAgICAgICAgbmV4dEZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlVHJhbnNpdGlvbkNsYXNzKGVsLCBsZWF2ZUNsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjYi5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRyYW5zaXRpb25DbGFzcyhlbCwgbGVhdmVUb0NsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdXNlcldhbnRzQ29udHJvbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1ZhbGlkRHVyYXRpb24oZXhwbGljaXRMZWF2ZUR1cmF0aW9uKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGNiLCBleHBsaWNpdExlYXZlRHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hlblRyYW5zaXRpb25FbmRzKGVsLCB0eXBlLCBjYik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZWF2ZUhvb2sgJiYgbGVhdmVIb29rKGVsLCBjYik7XG4gICAgICAgICAgICBpZiAoIWV4cGVjdHNDU1MgJiYgIXVzZXJXYW50c0NvbnRyb2wpIHtcbiAgICAgICAgICAgICAgICBjYigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiLyoqXG4gKiBAZmlsZSBjbGFzcyB1dGlsc1xuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmNvbnN0IHdoaXRlc3BhY2VSRSA9IC9cXHMrL1xuXG4vKipcbiAqIEFkZCBjbGFzcyB3aXRoIGNvbXBhdGliaWxpdHkgZm9yIFNWRyBzaW5jZSBjbGFzc0xpc3QgaXMgbm90IHN1cHBvcnRlZCBvblxuICogU1ZHIGVsZW1lbnRzIGluIElFXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRDbGFzcyAoZWwsIGNscykge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICghY2xzIHx8ICEoY2xzID0gY2xzLnRyaW0oKSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKGVsLmNsYXNzTGlzdCkge1xuICAgICAgICBpZiAoY2xzLmluZGV4T2YoJyAnKSA+IC0xKSB7XG4gICAgICAgICAgICBjbHMuc3BsaXQod2hpdGVzcGFjZVJFKS5mb3JFYWNoKGMgPT4gZWwuY2xhc3NMaXN0LmFkZChjKSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xzKVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBjdXIgPSBgICR7ZWwuZ2V0QXR0cmlidXRlKCdjbGFzcycpIHx8ICcnfSBgXG4gICAgICAgIGlmIChjdXIuaW5kZXhPZignICcgKyBjbHMgKyAnICcpIDwgMCkge1xuICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsIChjdXIgKyBjbHMpLnRyaW0oKSlcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBSZW1vdmUgY2xhc3Mgd2l0aCBjb21wYXRpYmlsaXR5IGZvciBTVkcgc2luY2UgY2xhc3NMaXN0IGlzIG5vdCBzdXBwb3J0ZWQgb25cbiAqIFNWRyBlbGVtZW50cyBpbiBJRVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2xhc3MgKGVsLCBjbHMpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoIWNscyB8fCAhKGNscyA9IGNscy50cmltKCkpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmIChlbC5jbGFzc0xpc3QpIHtcbiAgICAgICAgaWYgKGNscy5pbmRleE9mKCcgJykgPiAtMSkge1xuICAgICAgICAgICAgY2xzLnNwbGl0KHdoaXRlc3BhY2VSRSkuZm9yRWFjaChjID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoYykpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShjbHMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZWwuY2xhc3NMaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBsZXQgY3VyID0gYCAke2VsLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSB8fCAnJ30gYDtcbiAgICAgICAgY29uc3QgdGFyID0gJyAnICsgY2xzICsgJyAnO1xuICAgICAgICB3aGlsZSAoY3VyLmluZGV4T2YodGFyKSA+PSAwKSB7XG4gICAgICAgICAgICBjdXIgPSBjdXIucmVwbGFjZSh0YXIsICcgJyk7XG4gICAgICAgIH1cbiAgICAgICAgY3VyID0gY3VyLnRyaW0oKVxuICAgICAgICBpZiAoY3VyKSB7XG4gICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgY3VyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=