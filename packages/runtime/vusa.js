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
      dep.depend({
        context: context,
        expr: keyExpr
      });
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

  this.data.owner = this;
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

    var _loop2 = function _loop2(_i) {
      var key = _this._computedKeys[_i];

      _calcComputed.default.call(_this, key);

      (0, _util.def)(_this, key, {
        get: function get() {
          return me.data.get(key);
        }
      });
    };

    for (var _i = 0; _i < this._computedKeys.length; _i++) {
      _loop2(_i);
    }

    for (var _i2 = 0; _i2 < this._methodKeys.length; _i2++) {
      var key = this._methodKeys[_i2];
      this[key] = this[key].bind(this);
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

  var value = originalGet.call(this, expr && expr.paths.length ? expr : undefined, callee);
  expr && expr.paths[0] && expr.paths[0].value === 'a' && console.log(value, expr, this);

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
  },
  _cat: function _cat(a, b) {
    return a.toString() + b;
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

var _san = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function calcComputed(key) {
  var _this = this;

  var computedDeps = this.computedDeps[key];

  if (!computedDeps) {
    computedDeps = this.computedDeps[key] = {};
  }

  var me = this;
  var oldValue = this.data.get(key);
  (0, _bindData.resetTarget)();
  var value = this.computed[key].call(this);
  var deps = _bindData.Dep.target;

  var _loop = function _loop(i) {
    var dep = deps[i];
    var expr = dep.expr,
        context = dep.context;
    var exprPrefix = _this === context ? '' : 'upper';
    var exprSuffix = expr.paths.map(function (a) {
      return a.value;
    }).join('.');
    var exprStr = exprPrefix + exprSuffix;

    if (!computedDeps[exprStr]) {
      computedDeps[exprStr] = 1;
      delete expr.changeCache;
      (0, _san.nextTick)(function () {
        context.watch(expr, function (change) {
          calcComputed.call(me, key);
        });
      });
    }
  };

  for (var i = 0; i < deps.length; i++) {
    _loop(i);
  }

  (0, _bindData.cleanTarget)();

  if (oldValue !== value) {
    this.data.set(key, value);
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3V0aWwuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2FuXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvYmluZC1kYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lL2dldC1zbG90cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcnVudGltZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcnVudGltZS9kZWZpbmUtY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lL292ZXJyaWRlLWRhdGEtZ2V0LmpzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lL21lcmdlLWNsYXNzLmpzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lL21lcmdlLXN0eWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lL2xvb3AtZXhwcmVzc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcnVudGltZS9nZXQtY29tcG9uZW50LXR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvb2JqZWN0LWNvbXB1dGVkLXByb3BlcnRpcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvcmVmLmpzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lL21lcmdlLW9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvY29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvZ2xvYmFsLWFwaS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcnVudGltZS9jYWxjLWNvbXB1dGVkLmpzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lL2NhbGwtYWN0aXZhdGVkLWhvb2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvdHJhbnNpdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcnVudGltZS9jbGFzcy11dGlsLmpzIl0sIm5hbWVzIjpbImV4dGVuZCIsIk9iamVjdCIsImFzc2lnbiIsInRvT2JqZWN0IiwiYXJyIiwicmVzIiwiaSIsImxlbmd0aCIsInJlbW92ZSIsIml0ZW0iLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJfdG9TdHJpbmciLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImlzT2JqZWN0Iiwib2JqIiwiaGFzT3duUHJvcGVydHkiLCJoYXNPd24iLCJrZXkiLCJjYWxsIiwiaXNQbGFpbk9iamVjdCIsImRlZiIsInByb3BlcnR5IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwiY2FjaGVkIiwiZm4iLCJjYWNoZSIsImNyZWF0ZSIsImNhY2hlZEZuIiwic3RyIiwiaGl0IiwiaHlwaGVuYXRlUkUiLCJoeXBoZW5hdGUiLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJjYW1lbGl6ZSIsIl8iLCJjIiwidG9VcHBlckNhc2UiLCJvbmNlIiwiY2FsbGVkIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJhcnJheVByb3RvIiwiQXJyYXkiLCJhcnJheU1ldGhvZHMiLCJtZXRob2RzVG9QYXRjaCIsImZvckVhY2giLCJtZXRob2QiLCJvcmlnaW5hbCIsInZhbHVlIiwiYXJncyIsInJlc3VsdCIsIm9iIiwiX19vYl9fIiwiaW5zZXJ0ZWQiLCJzbGljZSIsIm9ic2VydmVBcnJheSIsImNvbnRleHQiLCJkYXRhIiwic2V0IiwiZXhwciIsImZvcmNlIiwib2JzZXJ2ZSIsImdldCIsIk9ic2VydmVyIiwiaXNBcnJheSIsIl9fcHJvdG9fXyIsImtleXMiLCJ3YWxrIiwiZGVmaW5lUmVhY3RpdmUiLCJpdGVtcyIsImwiLCJwYXRocyIsInR5cGUiLCJFeHByVHlwZSIsIk5VTUJFUiIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImdldHRlciIsInNldHRlciIsImtleUV4cHIiLCJBQ0NFU1NPUiIsIlNUUklORyIsImRlcCIsIkRlcCIsInZhbCIsIm5ld1Byb3BlcnR5IiwibmV3VmFsIiwiZGVwZW5kIiwiZGVmYXVsdEV4cHIiLCJfZGF0YUtleXMiLCJfcHJvcEtleXMiLCJrZXlMZW5ndGgiLCJfZGF0YSIsIm93bmVyIiwiaXNFeHRlbnNpYmxlIiwidGFyZ2V0IiwicHVzaCIsInJlc2V0VGFyZ2V0IiwiY2xlYW5UYXJnZXQiLCJzbG90Q2hpbGRyZW4iLCJsaWZlQ3ljbGUiLCJzb3VyY2VTbG90cyIsImF0dGFjaGVkIiwicmVkdWNlIiwicHJldiIsImNoaWxkIiwibmFtZSIsImNvbmNhdCIsImNoaWxkcmVuIiwic2xvdHMiLCJuYW1lZCIsIm5vbmFtZSIsImRlZmF1bHQiLCJub29wIiwiZGVmYXVsdFNhbk9wdGlvbnMiLCIkYWN0aXZhdGUiLCJjYWxsQWN0aXZpdGVkIiwiJGRlYWN0aXZhdGUiLCJjYWxsRGVBY3Rpdml0ZWQiLCJfbWMiLCJtZXJnZUNsYXNzIiwiX21zIiwibWVyZ2VTdHlsZSIsIl9sIiwibG9vcEV4cHJlc3Npb24iLCJfZXgiLCJfb2NwIiwib2JqZWN0Q29tcHV0ZWRQcm9wZXJ0aWVzIiwiX25vb3AiLCJfdCIsIlRyYW5zaXRpb24iLCJnZXRDb21wb25lbnRUeXBlIiwiJGVtaXQiLCJDb21wb25lbnQiLCJmaXJlIiwiJG9uIiwib24iLCIkd2F0Y2giLCJ3YXRjaCIsIiRuZXh0VGljayIsIm5leHRUaWNrIiwibWVtYmVyTWFwIiwiJGVsIiwiZWwiLCIkY29udGV4dCIsIiRwYXJlbnQiLCJwYXJlbnRDb21wb25lbnQiLCIkY2hpbGRyZW4iLCJmaWx0ZXIiLCJub2RlVHlwZSIsIiRyb290Iiwicm9vdCIsIiRzbG90cyIsInNsb3QiLCJfaXNEZXN0cm95ZWQiLCJkaXNwb3NlZCIsIm9yaWdpbmFsVXBkYXRlIiwiX3VwZGF0ZSIsImNoYW5nZXMiLCJfdG9QaGFzZSIsImlubmVyS2V5IiwiZGVmaW5lIiwib3B0aW9ucyIsInNhbk9wdGlvbnMiLCJ0ZW1wbGF0ZSIsIl9fc2FudGVtcGxhdGUiLCJhTm9kZSIsIl9fc2FuYU5vZGUiLCJfaXNTYW4iLCJjb21waWxlZEhvb2siLCJjb21waWxlZCIsIl9jYWxjQ29tcHV0ZWQiLCJwcm9wZXJ0aWVzIiwicHJvcHMiLCIkb3B0aW9ucyIsImRlZmluZVByb3BlcnRpZXMiLCJyZWZzIiwiX19zYW5SZWZzIiwiaW5pdGVkSG9vayIsImluaXRlZCIsIm1lIiwiJHJlZnMiLCJsZW4iLCJyIiwicmVmIiwiJHN0eWxlIiwicmF3IiwiYmluZERhdGEiLCJfY29tcHV0ZWRLZXlzIiwiY2FsY0NvbXB1dGVkIiwiX21ldGhvZEtleXMiLCJiaW5kIiwicHJlcHJvY2Vzc0FOb2RlIiwiYmVmb3JlVXBkYXRlSG9vayIsImJlZm9yZVVwZGF0ZSIsImluaXREYXRhIiwiZGVmYXVsdFByb3BzIiwicHJvcEtleXMiLCJwIiwicHJvcCIsImNvbXB1dGVkIiwiX3NyY1NiaW5kRGF0YSIsImNvbXBvbmVudHMiLCJjb21wb25lbnQiLCJfY21wdFJlYWR5IiwiY21wdCIsIm9yaWdpbmFsR2V0IiwiRGF0YSIsImNhbGxlZSIsInVuZGVmaW5lZCIsImNvbnNvbGUiLCJsb2ciLCJmaXJzdCIsInN0cmluZyIsImNscyIsInNwbGl0Iiwib2JqZWN0IiwiYXJyYXkiLCJjbGF6eiIsImVsZW1lbnQiLCJzdGF0aWNDbGFzcyIsImpvaW4iLCJwYXJzZVN0eWxlVGV4dCIsImNzc1RleHQiLCJsaXN0RGVsaW1pdGVyIiwicHJvcGVydHlEZWxpbWl0ZXIiLCJ0bXAiLCJ0cmltIiwibm9ybWFsaXplU3R5bGVCaW5kaW5nIiwiYmluZGluZ1N0eWxlIiwic3RhdGljU3R5bGUiLCJzdHlsZSIsInZTaG93IiwiZGlzcGxheSIsInRvQXJyYXkiLCJuIiwiaXNOYU4iLCJ0YWdOYW1lIiwiaG90c3BvdCIsImlzIiwiaXNWYWx1ZSIsImsiLCJ2IiwiY2hpbGRyZW5UcmF2ZXJzYWwiLCJyZWZUYXJnZXQiLCJlbGVtZW50VHJhdmVyc2FsIiwiZGlyZWN0aXZlcyIsInNhbiIsImV2YWxFeHByIiwic2NvcGUiLCJtYXAiLCJzb3VyY2UiLCJtZXJnZUhvb2siLCJwYXJlbnRWYWwiLCJjaGlsZFZhbCIsIm1lcmdlT3B0aW9ucyIsImRlc3RPcHRpb25zIiwibGlzdCIsIm1peGlucyIsImF0b21CdWlsZEluTWl4aW4iLCJtZXRob2RzIiwib3B0IiwiaiIsImxpZmVDeWNsZUtleXMiLCJkayIsImxpZmVDeWNsZU1hcCIsImhvb2tzIiwiaG9vayIsIm1lc3NhZ2VzIiwiYmVmb3JlQ3JlYXRlIiwibW91bnRlZCIsImNyZWF0ZWQiLCJiZWZvcmVNb3VudCIsImJlZm9yZURlc3Ryb3kiLCJkZXN0cm95IiwidXBkYXRlZCIsImFjdGl2YXRlZCIsImRlYWN0aXZhdGVkIiwiTUFUSF9NRVRIT0QiLCJNYXRoIiwiYXJyYXlfc2xpY2UiLCJzdGFydCIsImVuZCIsImFycmF5X2pvaW4iLCJzZXAiLCJzdHJfcG9zIiwibWF0Y2giLCJvYmplY3RfZnJlZXplIiwiZnJlZXplIiwiZmlsdGVycyIsImpzb24iLCJKU09OIiwic3RyaW5naWZ5IiwibG93ZXIiLCJ1cHBlciIsIl9jYXQiLCJhIiwiYiIsImNvbXB1dGVkRGVwcyIsIm9sZFZhbHVlIiwiZGVwcyIsImV4cHJQcmVmaXgiLCJleHByU3VmZml4IiwiZXhwclN0ciIsImNoYW5nZUNhY2hlIiwiY2hhbmdlIiwiY3JlYXRlQ2FsbEZhY3RvcnkiLCJkaXJlY3QiLCJlbGUiLCJOb2RlVHlwZSIsIkNNUFQiLCJyZXNvbHZlVHJhbnNpdGlvbiIsImNzcyIsImF1dG9Dc3NUcmFuc2l0aW9uIiwiZW50ZXJDbGFzcyIsImVudGVyVG9DbGFzcyIsImVudGVyQWN0aXZlQ2xhc3MiLCJsZWF2ZUNsYXNzIiwibGVhdmVUb0NsYXNzIiwibGVhdmVBY3RpdmVDbGFzcyIsIlRSQU5TSVRJT04iLCJBTklNQVRJT04iLCJ0cmFuc2l0aW9uUHJvcCIsInRyYW5zaXRpb25FbmRFdmVudCIsImFuaW1hdGlvblByb3AiLCJhbmltYXRpb25FbmRFdmVudCIsIndpbmRvdyIsIm9udHJhbnNpdGlvbmVuZCIsIm9ud2Via2l0dHJhbnNpdGlvbmVuZCIsIm9uYW5pbWF0aW9uZW5kIiwib253ZWJraXRhbmltYXRpb25lbmQiLCJyYWYiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzZXRUaW1lb3V0IiwibmV4dEZyYW1lIiwidHJhbnNmb3JtUkUiLCJnZXRUcmFuc2l0aW9uSW5mbyIsImV4cGVjdGVkVHlwZSIsInN0eWxlcyIsImdldENvbXB1dGVkU3R5bGUiLCJ0cmFuc2l0aW9uRGVsYXlzIiwidHJhbnNpdGlvbkR1cmF0aW9ucyIsInRyYW5zaXRpb25UaW1lb3V0IiwiZ2V0VGltZW91dCIsImFuaW1hdGlvbkRlbGF5cyIsImFuaW1hdGlvbkR1cmF0aW9ucyIsImFuaW1hdGlvblRpbWVvdXQiLCJ0aW1lb3V0IiwicHJvcENvdW50IiwibWF4IiwiaGFzVHJhbnNmb3JtIiwidGVzdCIsImRlbGF5cyIsImR1cmF0aW9ucyIsImQiLCJ0b01zIiwicyIsIk51bWJlciIsImFkZFRyYW5zaXRpb25DbGFzcyIsInRyYW5zaXRpb25DbGFzc2VzIiwiX3RyYW5zaXRpb25DbGFzc2VzIiwicmVtb3ZlVHJhbnNpdGlvbkNsYXNzIiwiaXNWYWxpZER1cmF0aW9uIiwid2hlblRyYW5zaXRpb25FbmRzIiwiY2IiLCJldmVudCIsImVuZGVkIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9uRW5kIiwiZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJhcHBlYXJDbGFzcyIsImFwcGVhclRvQ2xhc3MiLCJhcHBlYXJBY3RpdmVDbGFzcyIsImJlZm9yZUVudGVyIiwiZW50ZXIiLCJhZnRlckVudGVyIiwiZW50ZXJDYW5jZWxsZWQiLCJiZWZvcmVBcHBlYXIiLCJhcHBlYXIiLCJhZnRlckFwcGVhciIsImFwcGVhckNhbmNlbGxlZCIsImJlZm9yZUxlYXZlIiwibGVhdmUiLCJhZnRlckxlYXZlIiwibGVhdmVDYW5jZWxsZWQiLCJkZWxheUxlYXZlIiwiZHVyYXRpb24iLCJleHBlY3RzQ1NTIiwiZW50ZXJIYW5kbGVyIiwibGVhdmVIYW5kbGVyIiwiZ2V0SG9vayIsImludm9rZXJGbiIsImRvbmUiLCJpc0FwcGVhciIsIl9sZWF2ZUNiIiwiY2FuY2VsbGVkIiwiX2VudGVyQ2IiLCJzdGFydENsYXNzIiwiYWN0aXZlQ2xhc3MiLCJ0b0NsYXNzIiwiYmVmb3JlRW50ZXJIb29rIiwiZW50ZXJIb29rIiwiYWZ0ZXJFbnRlckhvb2siLCJlbnRlckNhbmNlbGxlZEhvb2siLCJleHBsaWNpdEVudGVyRHVyYXRpb24iLCJ1c2VyV2FudHNDb250cm9sIiwibGVhdmVIb29rIiwiZGVsYXlMZWF2ZUhvb2siLCJiZWZvcmVMZWF2ZUhvb2siLCJhZnRlckxlYXZlSG9vayIsImV4cGxpY2l0TGVhdmVEdXJhdGlvbiIsInBlcmZvcm1MZWF2ZSIsIndoaXRlc3BhY2VSRSIsImFkZENsYXNzIiwiY2xhc3NMaXN0IiwiYWRkIiwiY3VyIiwiZ2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQ2xhc3MiLCJyZW1vdmVBdHRyaWJ1dGUiLCJ0YXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2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LE9BQXhCLENBQWdDLFVBQUFWLENBQUM7QUFBQSxlQUFJMkcsRUFBRSxDQUFDZ1IsU0FBSCxDQUFhNVosTUFBYixDQUFvQmlDLENBQXBCLENBQUo7QUFBQSxPQUFqQztBQUNILEtBRkQsTUFHSztBQUNEMkcsUUFBRSxDQUFDZ1IsU0FBSCxDQUFhNVosTUFBYixDQUFvQm1OLEdBQXBCO0FBQ0g7O0FBQ0QsUUFBSSxDQUFDdkUsRUFBRSxDQUFDZ1IsU0FBSCxDQUFhN1osTUFBbEIsRUFBMEI7QUFDdEI2SSxRQUFFLENBQUNzUixlQUFILENBQW1CLE9BQW5CO0FBQ0g7QUFDSixHQVZELE1BV0s7QUFDRCxRQUFJSixHQUFHLGNBQU9sUixFQUFFLENBQUNtUixZQUFILENBQWdCLE9BQWhCLEtBQTRCLEVBQW5DLE1BQVA7QUFDQSxRQUFNSSxHQUFHLEdBQUcsTUFBTWhOLEdBQU4sR0FBWSxHQUF4Qjs7QUFDQSxXQUFPMk0sR0FBRyxDQUFDM1osT0FBSixDQUFZZ2EsR0FBWixLQUFvQixDQUEzQixFQUE4QjtBQUMxQkwsU0FBRyxHQUFHQSxHQUFHLENBQUNqWSxPQUFKLENBQVlzWSxHQUFaLEVBQWlCLEdBQWpCLENBQU47QUFDSDs7QUFDREwsT0FBRyxHQUFHQSxHQUFHLENBQUM5TCxJQUFKLEVBQU47O0FBQ0EsUUFBSThMLEdBQUosRUFBUztBQUNMbFIsUUFBRSxDQUFDb1IsWUFBSCxDQUFnQixPQUFoQixFQUF5QkYsR0FBekI7QUFDSCxLQUZELE1BR0s7QUFDRGxSLFFBQUUsQ0FBQ3NSLGVBQUgsQ0FBbUIsT0FBbkI7QUFDSDtBQUNKO0FBQ0osQyIsImZpbGUiOiJ2dXNhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwic2FuXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInNhblwiXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZmFjdG9yeShyZXF1aXJlKFwic2FuXCIpKSA6IGZhY3Rvcnkocm9vdFtcInNhblwiXSk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh3aW5kb3csIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzFfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcbiIsIi8qKlxuICogQGZpbGUg5LiA5Lqb5bel5YW35Ye95pWwXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuLyoqXG4gKiBNaXggcHJvcGVydGllcyBpbnRvIHRhcmdldCBvYmplY3QuXG4gKi9cbmV4cG9ydCBjb25zdCBleHRlbmQgPSBPYmplY3QuYXNzaWduO1xuXG4vKipcbiAqIE1lcmdlIGFuIEFycmF5IG9mIE9iamVjdHMgaW50byBhIHNpbmdsZSBPYmplY3QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b09iamVjdChhcnIpIHtcbiAgICBjb25zdCByZXMgPSB7fTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoYXJyW2ldKSB7XG4gICAgICAgICAgICBleHRlbmQocmVzLCBhcnJbaV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59XG5cbi8qKlxuICogUmVtb3ZlIGFuIGl0ZW0gZnJvbSBhbiBhcnJheS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZShhcnIsIGl0ZW0pIHtcbiAgICBpZiAoYXJyLmxlbmd0aCkge1xuICAgICAgICBjb25zdCBpbmRleCA9IGFyci5pbmRleE9mKGl0ZW0pO1xuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIGFyci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIEdldCB0aGUgcmF3IHR5cGUgc3RyaW5nIG9mIGEgdmFsdWUsIGUuZy4sIFtvYmplY3QgT2JqZWN0XS5cbiAqL1xuZXhwb3J0IGNvbnN0IF90b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogUXVpY2sgb2JqZWN0IGNoZWNrIC0gdGhpcyBpcyBwcmltYXJpbHkgdXNlZCB0byB0ZWxsXG4gKiBPYmplY3RzIGZyb20gcHJpbWl0aXZlIHZhbHVlcyB3aGVuIHdlIGtub3cgdGhlIHZhbHVlXG4gKiBpcyBhIEpTT04tY29tcGxpYW50IHR5cGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdChvYmopIHtcbiAgICByZXR1cm4gb2JqICE9PSBudWxsICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgYW4gb2JqZWN0IGhhcyB0aGUgcHJvcGVydHkuXG4gKi9cbmNvbnN0IGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbmV4cG9ydCBmdW5jdGlvbiBoYXNPd24ob2JqLCBrZXkpIHtcbiAgICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSk7XG59XG5cbi8qKlxuICogU3RyaWN0IG9iamVjdCB0eXBlIGNoZWNrLiBPbmx5IHJldHVybnMgdHJ1ZVxuICogZm9yIHBsYWluIEphdmFTY3JpcHQgb2JqZWN0cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzUGxhaW5PYmplY3Qob2JqKSB7XG4gICAgcmV0dXJuIF90b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IE9iamVjdF0nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVmKG9iaiwga2V5LCBwcm9wZXJ0eSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgZXh0ZW5kKHtcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0sIHByb3BlcnR5KSk7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgY2FjaGVkIHZlcnNpb24gb2YgYSBwdXJlIGZ1bmN0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2FjaGVkKGZuKSB7XG4gICAgY29uc3QgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHJldHVybiBmdW5jdGlvbiBjYWNoZWRGbihzdHIpIHtcbiAgICAgICAgY29uc3QgaGl0ID0gY2FjaGVbc3RyXTtcbiAgICAgICAgcmV0dXJuIGhpdCB8fCAoY2FjaGVbc3RyXSA9IGZuKHN0cikpO1xuICAgIH07XG59XG5cbi8qKlxuICogSHlwaGVuYXRlIGEgY2FtZWxDYXNlIHN0cmluZy5cbiAqL1xuY29uc3QgaHlwaGVuYXRlUkUgPSAvKFteLV0pKFtBLVpdKS9nO1xuZXhwb3J0IGNvbnN0IGh5cGhlbmF0ZSA9IGNhY2hlZCgoc3RyKSA9PiB7XG4gICAgcmV0dXJuIHN0clxuICAgICAgICAucmVwbGFjZShoeXBoZW5hdGVSRSwgJyQxLSQyJylcbiAgICAgICAgLnJlcGxhY2UoaHlwaGVuYXRlUkUsICckMS0kMicpXG4gICAgICAgIC50b0xvd2VyQ2FzZSgpO1xufSk7XG5cbmV4cG9ydCBjb25zdCBjYW1lbGl6ZSA9IHN0ciA9PiBzdHIucmVwbGFjZSgvLShcXHcpL2csIChfLCBjKSA9PiAoYyA/IGMudG9VcHBlckNhc2UoKSA6ICcnKSk7XG5cbi8qKlxuICogRW5zdXJlIGEgZnVuY3Rpb24gaXMgY2FsbGVkIG9ubHkgb25jZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9uY2UoZm4pIHtcbiAgICBsZXQgY2FsbGVkID0gZmFsc2VcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgICAgY2FsbGVkID0gdHJ1ZVxuICAgICAgICBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gICAgICB9XG4gICAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX18xX187IiwiLyoqXG4gKiBAZmlsZSDmlbDmja7nu5HlrppcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQge2lzT2JqZWN0LCBoYXNPd24sIGlzUGxhaW5PYmplY3QsIGV4dGVuZCwgZGVmfSBmcm9tICcuLi9zaGFyZWQvdXRpbCc7XG5pbXBvcnQge0V4cHJUeXBlfSBmcm9tICdzYW4nO1xuXG5jb25zdCBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuY29uc3QgYXJyYXlNZXRob2RzID0gT2JqZWN0LmNyZWF0ZShhcnJheVByb3RvKTtcblxuY29uc3QgbWV0aG9kc1RvUGF0Y2ggPSBbXG4gICAgJ3B1c2gnLFxuICAgICdwb3AnLFxuICAgICdzaGlmdCcsXG4gICAgJ3Vuc2hpZnQnLFxuICAgICdzcGxpY2UnLFxuICAgICdzb3J0JyxcbiAgICAncmV2ZXJzZSdcbl07XG5cbi8qKlxuICogSW50ZXJjZXB0IG11dGF0aW5nIG1ldGhvZHMgYW5kIGVtaXQgZXZlbnRzXG4gKi9cbm1ldGhvZHNUb1BhdGNoLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgIC8vIGNhY2hlIG9yaWdpbmFsIG1ldGhvZFxuICAgIGNvbnN0IG9yaWdpbmFsID0gYXJyYXlQcm90b1ttZXRob2RdXG4gICAgZGVmKGFycmF5TWV0aG9kcywgbWV0aG9kLCB7XG4gICAgICAgIHZhbHVlKC4uLmFyZ3MpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IG9yaWdpbmFsLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICAgICAgY29uc3Qgb2IgPSB0aGlzLl9fb2JfXztcbiAgICAgICAgICAgIGxldCBpbnNlcnRlZDtcbiAgICAgICAgICAgIHN3aXRjaCAobWV0aG9kKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAncHVzaCc6XG4gICAgICAgICAgICAgICAgY2FzZSAndW5zaGlmdCc6XG4gICAgICAgICAgICAgICAgICAgIGluc2VydGVkID0gYXJncztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnc3BsaWNlJzpcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0ZWQgPSBhcmdzLnNsaWNlKDIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpbnNlcnRlZCkge1xuICAgICAgICAgICAgICAgIG9iLm9ic2VydmVBcnJheShpbnNlcnRlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvYi5jb250ZXh0LmRhdGEuc2V0KG9iLmV4cHIsIHRoaXMsIHtmb3JjZTogdHJ1ZX0pO1xuICAgICAgICAgICAgb2JzZXJ2ZShvYi5jb250ZXh0LmRhdGEuZ2V0KG9iLmV4cHIpLCBvYi5leHByLCBvYi5jb250ZXh0KTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICB9KVxufSk7XG5cbmNsYXNzIE9ic2VydmVyIHtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlLCBleHByLCBjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuZXhwciA9IGV4cHI7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIGRlZih2YWx1ZSwgJ19fb2JfXycsIHtcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlLl9fcHJvdG9fXyA9IGFycmF5TWV0aG9kcztcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZUFycmF5KHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMua2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKSB8fCBbXTtcbiAgICAgICAgICAgIHRoaXMud2Fsayh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXYWxrIHRocm91Z2ggYWxsIHByb3BlcnRpZXMgYW5kIGNvbnZlcnQgdGhlbSBpbnRvXG4gICAgICogZ2V0dGVyL3NldHRlcnMuIFRoaXMgbWV0aG9kIHNob3VsZCBvbmx5IGJlIGNhbGxlZCB3aGVuXG4gICAgICogdmFsdWUgdHlwZSBpcyBPYmplY3QuXG4gICAgICovXG4gICAgd2FsayhvYmopIHtcbiAgICAgICAgY29uc3Qga2V5cyA9IHRoaXMua2V5cztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBkZWZpbmVSZWFjdGl2ZShvYmosIGtleXNbaV0sIHRoaXMuZXhwciwgdGhpcy5jb250ZXh0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9ic2VydmUgYSBsaXN0IG9mIEFycmF5IGl0ZW1zLlxuICAgICAqL1xuICAgIG9ic2VydmVBcnJheShpdGVtcykge1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGl0ZW1zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgb2JzZXJ2ZShpdGVtc1tpXSwgZXh0ZW5kKHt9LCB0aGlzLmV4cHIsIHtcbiAgICAgICAgICAgICAgICBwYXRoczogWy4uLnRoaXMuZXhwci5wYXRocywge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBFeHByVHlwZS5OVU1CRVIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBpXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0pLCB0aGlzLmNvbnRleHQpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkZWZpbmVSZWFjdGl2ZShvYmosIGtleSwgZXhwciwgY29udGV4dCkge1xuXG4gICAgY29uc3QgcHJvcGVydHkgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KTtcbiAgICBpZiAocHJvcGVydHkgJiYgcHJvcGVydHkuY29uZmlndXJhYmxlID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gY2F0ZXIgZm9yIHByZS1kZWZpbmVkIGdldHRlci9zZXR0ZXJzXG4gICAgY29uc3QgZ2V0dGVyID0gcHJvcGVydHkgJiYgcHJvcGVydHkuZ2V0O1xuICAgIGNvbnN0IHNldHRlciA9IHByb3BlcnR5ICYmIHByb3BlcnR5LnNldDtcblxuICAgIGNvbnN0IGtleUV4cHIgPSB7XG4gICAgICAgIHR5cGU6IEV4cHJUeXBlLkFDQ0VTU09SLFxuICAgICAgICBwYXRoczogWy4uLmV4cHIucGF0aHMsIHtcbiAgICAgICAgICAgIHR5cGU6IEV4cHJUeXBlLlNUUklORyxcbiAgICAgICAgICAgIHZhbHVlOiBrZXlcbiAgICAgICAgfV1cbiAgICB9O1xuXG4gICAgY29uc3QgZGVwID0gbmV3IERlcDtcblxuICAgIGxldCB2YWwgPSBvYmpba2V5XTtcbiAgICBvYnNlcnZlKHZhbCwga2V5RXhwciwgY29udGV4dCk7XG4gICAgY29uc3QgbmV3UHJvcGVydHkgPSB7XG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgc2V0KG5ld1ZhbCkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBnZXR0ZXIgPyBnZXR0ZXIuY2FsbChvYmopIDogdmFsO1xuICAgICAgICAgICAgaWYgKG5ld1ZhbCA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZ2V0dGVyICYmICFzZXR0ZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2V0dGVyKSB7XG4gICAgICAgICAgICAgICAgc2V0dGVyLmNhbGwob2JqLCBuZXdWYWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsID0gbmV3VmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb2JzZXJ2ZShuZXdWYWwsIGtleUV4cHIsIGNvbnRleHQpO1xuICAgICAgICAgICAgY29udGV4dC5kYXRhLnNldChrZXlFeHByLCBuZXdWYWwsIHtmb3JjZTogdHJ1ZX0pO1xuICAgICAgICB9LFxuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICBkZXAuZGVwZW5kKHtcbiAgICAgICAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgICAgICAgIGV4cHI6IGtleUV4cHJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBnZXR0ZXIgPyBnZXR0ZXIuY2FsbChvYmopIDogdmFsO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBkZWYob2JqLCBrZXksIG5ld1Byb3BlcnR5KTtcbn1cblxuY29uc3QgZGVmYXVsdEV4cHIgPSB7XG4gICAgdHlwZTogRXhwclR5cGUuQUNDRVNTT1IsXG4gICAgcGF0aHM6IFtdXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZXhwciA9IGV4dGVuZCh7fSwgZGVmYXVsdEV4cHIpO1xuICAgIGNvbnN0IGtleXMgPSBbLi4udGhpcy5fZGF0YUtleXMsIC4uLnRoaXMuX3Byb3BLZXlzXTtcbiAgICBjb25zdCBrZXlMZW5ndGggPSBrZXlzLmxlbmd0aDtcblxuICAgIG9ic2VydmUodGhpcy5kYXRhLmdldCgpLCBleHByLCB0aGlzKTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzO1xuXG4gICAgdGhpcy5fZGF0YSA9IHRoaXMuZGF0YS5nZXQoKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5TGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgZGVmKGNvbnRleHQsIGtleSwge1xuICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb250ZXh0Ll9kYXRhW2tleV07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0KG5ld1ZhbCkge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuX2RhdGFba2V5XSA9IG5ld1ZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5kYXRhLm93bmVyID0gdGhpcztcbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZSh2YWx1ZSwgZXhwciwgY29udGV4dCkge1xuICAgIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IG9iO1xuICAgIGlmIChoYXNPd24odmFsdWUsICdfX29iX18nKSAmJiB2YWx1ZS5fX29iX18gaW5zdGFuY2VvZiBPYnNlcnZlcikge1xuICAgICAgICBvYiA9IHZhbHVlLl9fb2JfX1xuICAgIH1cbiAgICBlbHNlIGlmIChcbiAgICAgICAgKEFycmF5LmlzQXJyYXkodmFsdWUpIHx8IGlzUGxhaW5PYmplY3QodmFsdWUpKVxuICAgICAgICAmJiBPYmplY3QuaXNFeHRlbnNpYmxlKHZhbHVlKVxuICAgICkge1xuICAgICAgICBvYiA9IG5ldyBPYnNlcnZlcih2YWx1ZSwgZXhwciwgY29udGV4dCk7XG4gICAgfVxuICAgIHJldHVybiBvYjtcbn1cblxuLyoqXG4gKiBBIGRlcCBpcyBhbiBvYnNlcnZhYmxlIHRoYXQgY2FuIGhhdmUgbXVsdGlwbGVcbiAqIGRpcmVjdGl2ZXMgc3Vic2NyaWJpbmcgdG8gaXQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBEZXAoKSB7fVxuXG5EZXAucHJvdG90eXBlLmRlcGVuZCA9IGZ1bmN0aW9uIChleHByKSB7XG4gICAgaWYgKERlcC50YXJnZXQpIHtcbiAgICAgICAgRGVwLnRhcmdldC5wdXNoKGV4cHIpO1xuICAgIH1cbn07XG5cbi8vIFRoZSBjdXJyZW50IHRhcmdldCB3YXRjaGVyIGJlaW5nIGV2YWx1YXRlZC5cbi8vIFRoaXMgaXMgZ2xvYmFsbHkgdW5pcXVlIGJlY2F1c2Ugb25seSBvbmUgd2F0Y2hlclxuLy8gY2FuIGJlIGV2YWx1YXRlZCBhdCBhIHRpbWUuXG5EZXAudGFyZ2V0ID0gbnVsbDtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0VGFyZ2V0KCkge1xuICAgIERlcC50YXJnZXQgPSBbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFuVGFyZ2V0KCkge1xuICAgIERlcC50YXJnZXQgPSBudWxsO1xufVxuIiwiLyoqXG4gKiBAZmlsZSBzbG90XG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHtleHRlbmR9IGZyb20gJy4uL3NoYXJlZC91dGlsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHtcbiAgICAgICAgc2xvdENoaWxkcmVuLFxuICAgICAgICBsaWZlQ3ljbGUsXG4gICAgICAgIHNvdXJjZVNsb3RzXG4gICAgfSA9IHRoaXM7XG5cbiAgICBpZiAobGlmZUN5Y2xlLmF0dGFjaGVkKSB7XG4gICAgICAgIHJldHVybiBzbG90Q2hpbGRyZW4ucmVkdWNlKChwcmV2LCBjaGlsZCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGNoaWxkLm5hbWUgfHwgJ2RlZmF1bHQnO1xuICAgICAgICAgICAgaWYgKCFwcmV2W25hbWVdKSB7XG4gICAgICAgICAgICAgICAgcHJldltuYW1lXSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJldltuYW1lXSA9IHByZXZbbmFtZV0uY29uY2F0KGNoaWxkLmNoaWxkcmVuKTtcbiAgICAgICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgICB9LCB7fSk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2xvdHMgPSB7fTtcblxuICAgIGlmIChzb3VyY2VTbG90cy5uYW1lZCkge1xuICAgICAgICBleHRlbmQoc2xvdHMsIHNvdXJjZVNsb3RzLm5hbWVkKTtcbiAgICB9XG4gICAgaWYgKHNvdXJjZVNsb3RzLm5vbmFtZSkge1xuICAgICAgICBzbG90cy5kZWZhdWx0ID0gc291cmNlU2xvdHMubm9uYW1lO1xuICAgIH1cblxuICAgIHJldHVybiBzbG90cztcblxufVxuIiwiLyoqXG4gKiBAZmlsZSBlbnRyeVxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmV4cG9ydCB7ZGVmYXVsdCBhcyBkZWZpbmVDb21wb25lbnR9IGZyb20gJy4vZGVmaW5lLWNvbXBvbmVudCc7XG4iLCIvKipcbiAqIEBmaWxlIGNvbXBvbmVudFxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCAnLi9vdmVycmlkZS1kYXRhLWdldCc7XG5cbmltcG9ydCB7ZGVmaW5lQ29tcG9uZW50LCBpbmhlcml0cywgQ29tcG9uZW50LCBuZXh0VGlja30gZnJvbSAnc2FuJztcbmltcG9ydCB7ZXh0ZW5kLCBoeXBoZW5hdGUsIGRlZn0gZnJvbSAnLi4vc2hhcmVkL3V0aWwnO1xuaW1wb3J0IG1lcmdlQ2xhc3MgZnJvbSAnLi9tZXJnZS1jbGFzcyc7XG5pbXBvcnQgbWVyZ2VTdHlsZSBmcm9tICcuL21lcmdlLXN0eWxlJztcbmltcG9ydCBsb29wRXhwcmVzc2lvbiBmcm9tICcuL2xvb3AtZXhwcmVzc2lvbic7XG5pbXBvcnQgZ2V0Q29tcG9uZW50VHlwZSBmcm9tICcuL2dldC1jb21wb25lbnQtdHlwZSc7XG5pbXBvcnQgb2JqZWN0Q29tcHV0ZWRQcm9wZXJ0aWVzIGZyb20gJy4vb2JqZWN0LWNvbXB1dGVkLXByb3BlcnRpcnMnO1xuaW1wb3J0IHJlZiBmcm9tICcuL3JlZic7XG5pbXBvcnQgbWVyZ2VPcHRpb25zIGZyb20gJy4vbWVyZ2Utb3B0aW9ucyc7XG5pbXBvcnQgYmluZERhdGEgZnJvbSAnLi9iaW5kLWRhdGEnO1xuaW1wb3J0IGNhbGNDb21wdXRlZCBmcm9tICcuL2NhbGMtY29tcHV0ZWQnO1xuaW1wb3J0IHNsb3QgZnJvbSAnLi9nZXQtc2xvdHMnO1xuaW1wb3J0IHtjYWxsQWN0aXZpdGVkLCBjYWxsRGVBY3Rpdml0ZWR9IGZyb20gJy4vY2FsbC1hY3RpdmF0ZWQtaG9vayc7XG5pbXBvcnQgVHJhbnNpdGlvbiBmcm9tICcuL3RyYW5zaXRpb24nO1xuXG5jb25zdCBub29wID0gKCkgPT4ge307XG5cbi8qIGVzbGludC1kaXNhYmxlIGZlY3MtY2FtZWxjYXNlICovXG5jb25zdCBkZWZhdWx0U2FuT3B0aW9ucyA9IHtcbiAgICAkYWN0aXZhdGU6IGNhbGxBY3Rpdml0ZWQsXG4gICAgJGRlYWN0aXZhdGU6IGNhbGxEZUFjdGl2aXRlZCxcbiAgICBfbWM6IG1lcmdlQ2xhc3MsXG4gICAgX21zOiBtZXJnZVN0eWxlLFxuICAgIF9sOiBsb29wRXhwcmVzc2lvbixcbiAgICBfZXg6IGV4dGVuZCxcbiAgICBfb2NwOiBvYmplY3RDb21wdXRlZFByb3BlcnRpZXMsXG4gICAgX25vb3A6IG5vb3AsXG4gICAgX3Q6IFRyYW5zaXRpb24sXG4gICAgZ2V0Q29tcG9uZW50VHlwZSxcbiAgICAkZW1pdDogQ29tcG9uZW50LnByb3RvdHlwZS5maXJlLFxuICAgICRvbjogQ29tcG9uZW50LnByb3RvdHlwZS5vbixcbiAgICAkd2F0Y2g6IENvbXBvbmVudC5wcm90b3R5cGUud2F0Y2gsXG4gICAgJG5leHRUaWNrOiBuZXh0VGlja1xufTtcbi8qIGVzbGludC1lbmFibGUgZmVjcy1jYW1lbGNhc2UgKi9cblxuY29uc3QgbWVtYmVyTWFwID0ge1xuICAgICRlbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWw7XG4gICAgfSxcbiAgICAkY29udGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3duZXI7XG4gICAgfSxcbiAgICAkcGFyZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnRDb21wb25lbnQ7XG4gICAgfSxcbiAgICAkY2hpbGRyZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoaWxkcmVuLmZpbHRlcihjaGlsZCA9PiBjaGlsZC5ub2RlVHlwZSA9PT0gNSk7XG4gICAgfSxcbiAgICAkcm9vdCgpIHtcbiAgICAgICAgbGV0IHJvb3QgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5wYXJlbnRDb21wb25lbnQpIHtcbiAgICAgICAgICAgIHdoaWxlIChyb290LnBhcmVudENvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIHJvb3QgPSByb290LnBhcmVudENvbXBvbmVudFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByb290O1xuICAgIH0sXG4gICAgJHNsb3RzOiBzbG90LFxuICAgIF9pc0Rlc3Ryb3llZCgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5saWZlQ3ljbGUuZGlzcG9zZWQ7XG4gICAgfVxufTtcblxuY29uc3Qgb3JpZ2luYWxVcGRhdGUgPSBDb21wb25lbnQucHJvdG90eXBlLl91cGRhdGU7XG5cbkNvbXBvbmVudC5wcm90b3R5cGUuX3VwZGF0ZSA9IGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5fdG9QaGFzZSgnYmVmb3JlVXBkYXRlJyk7XG4gICAgfVxuICAgIG9yaWdpbmFsVXBkYXRlLmNhbGwodGhpcywgY2hhbmdlcyk7XG59O1xuXG5jb25zdCBpbm5lcktleSA9ICdfU2FuQ3Rvcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlZmluZShvcHRpb25zKSB7XG5cbiAgICBpZiAob3B0aW9uc1tpbm5lcktleV0pIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnNbaW5uZXJLZXldO1xuICAgIH1cblxuICAgIGNvbnN0IHNhbk9wdGlvbnMgPSBleHRlbmQoe1xuICAgICAgICB0ZW1wbGF0ZTogb3B0aW9ucy5fX3NhbnRlbXBsYXRlLFxuICAgICAgICBhTm9kZTogb3B0aW9ucy5fX3NhbmFOb2RlLFxuICAgICAgICBfaXNTYW46IHRydWUsXG4gICAgfSwgZGVmYXVsdFNhbk9wdGlvbnMsIG1lcmdlT3B0aW9ucyhvcHRpb25zKSk7XG5cbiAgICBjb25zdCBjb21waWxlZEhvb2sgPSBzYW5PcHRpb25zLmNvbXBpbGVkO1xuICAgIHNhbk9wdGlvbnMuY29tcGlsZWQgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgdGhpcy5fY2FsY0NvbXB1dGVkID0gbm9vcDtcbiAgICAgICAgY29tcGlsZWRIb29rICYmIGNvbXBpbGVkSG9vay5jYWxsKHRoaXMpO1xuXG4gICAgICAgIGNvbnN0IHByb3BlcnRpZXMgPSBPYmplY3RcbiAgICAgICAgICAgIC5rZXlzKG1lbWJlck1hcClcbiAgICAgICAgICAgIC5yZWR1Y2UoKHByb3BzLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBwcm9wc1trZXldID0ge1xuICAgICAgICAgICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWVtYmVyTWFwW2tleV0uY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3BzO1xuICAgICAgICAgICAgfSwge30pO1xuXG4gICAgICAgIHByb3BlcnRpZXMuJG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB2YWx1ZTogb3B0aW9uc1xuICAgICAgICB9O1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHByb3BlcnRpZXMpO1xuICAgIH07XG5cbiAgICBjb25zdCByZWZzID0gb3B0aW9ucy5fX3NhblJlZnM7XG4gICAgY29uc3QgaW5pdGVkSG9vayA9IHNhbk9wdGlvbnMuaW5pdGVkO1xuICAgIHNhbk9wdGlvbnMuaW5pdGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBtZSA9IHRoaXM7XG4gICAgICAgIHRoaXMuJHJlZnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG4gICAgICAgIGlmIChyZWZzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gcmVmcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHIgPSByZWZzW2ldO1xuICAgICAgICAgICAgICAgIGRlZihtZS4kcmVmcywgci5uYW1lLCB7XG4gICAgICAgICAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByLnJvb3QgPyBtZS5lbCA6IG1lLnJlZihyLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBvdmVyd3JpdGUgc2FuIGNvbXBvbmVudCBhcGkgZm9yIHN1cHBvcnQgdi1mb3IgKyByZWZcbiAgICAgICAgICAgIG1lLnJlZiA9IHJlZjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG1lcmdlIGNzcyBtb2R1bGVzXG4gICAgICAgIGlmICh0aGlzLiRzdHlsZSkge1xuICAgICAgICAgICAgZXh0ZW5kKHRoaXMuZGF0YS5yYXcuJHN0eWxlLCB0aGlzLiRzdHlsZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGJpbmREYXRhLmNhbGwodGhpcyk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9jb21wdXRlZEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHRoaXMuX2NvbXB1dGVkS2V5c1tpXTtcbiAgICAgICAgICAgIGNhbGNDb21wdXRlZC5jYWxsKHRoaXMsIGtleSk7XG4gICAgICAgICAgICBkZWYodGhpcywga2V5LCB7XG4gICAgICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWUuZGF0YS5nZXQoa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fbWV0aG9kS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gdGhpcy5fbWV0aG9kS2V5c1tpXTtcbiAgICAgICAgICAgIHRoaXNba2V5XSA9IHRoaXNba2V5XS5iaW5kKHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5pdGVkSG9vayAmJiBpbml0ZWRIb29rLmNhbGwodGhpcyk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMud2F0Y2gpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMud2F0Y2gpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLndhdGNoKGtleSwgb3B0aW9ucy53YXRjaFtrZXldLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5wcmVwcm9jZXNzQU5vZGUpIHtcbiAgICAgICAgICAgIG9wdGlvbnMucHJlcHJvY2Vzc0FOb2RlLmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgYmVmb3JlVXBkYXRlSG9vayA9IHNhbk9wdGlvbnMuYmVmb3JlVXBkYXRlO1xuICAgIHNhbk9wdGlvbnMuYmVmb3JlVXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBiZWZvcmVVcGRhdGVIb29rICYmIGJlZm9yZVVwZGF0ZUhvb2suY2FsbCh0aGlzKTtcblxuICAgICAgICBpZiAob3B0aW9ucy5wcmVwcm9jZXNzQU5vZGUpIHtcbiAgICAgICAgICAgIG9wdGlvbnMucHJlcHJvY2Vzc0FOb2RlLmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgc2FuT3B0aW9ucy5pbml0RGF0YSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBjb25zdCBtZSA9IHRoaXM7XG5cbiAgICAgICAgY29uc3QgZGVmYXVsdFByb3BzID0ge307XG4gICAgICAgIGlmIChvcHRpb25zLnByb3BzKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9wS2V5cyA9IG1lLl9wcm9wS2V5cyA9IG9wdGlvbnMuX3Byb3BLZXlzID0gb3B0aW9ucy5wcm9wc1xuICAgICAgICAgICAgICAgID8gKEFycmF5LmlzQXJyYXkob3B0aW9ucy5wcm9wcykgPyBvcHRpb25zLnByb3BzIDogT2JqZWN0LmtleXMob3B0aW9ucy5wcm9wcykpXG4gICAgICAgICAgICAgICAgOiBbXTtcblxuICAgICAgICAgICAgLy8g6buY6K6k5bGe5oCnXG4gICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkob3B0aW9ucy5wcm9wcykpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gcHJvcEtleXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcCA9IHByb3BLZXlzW2ldO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wID0gb3B0aW9ucy5wcm9wc1twXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCdkZWZhdWx0JyBpbiBwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0UHJvcHNbcF0gPSB0eXBlb2YgcHJvcC5kZWZhdWx0ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBwcm9wLmRlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcHJvcC5kZWZhdWx0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbWUuX3Byb3BLZXlzID0gW107XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5jb21wdXRlZCkge1xuICAgICAgICAgICAgbWUuX2NvbXB1dGVkS2V5cyA9IE9iamVjdC5rZXlzKG9wdGlvbnMuY29tcHV0ZWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbWUuX2NvbXB1dGVkS2V5cyA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IHR5cGVvZiBvcHRpb25zLmRhdGEgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgID8gb3B0aW9ucy5kYXRhLmNhbGwoZXh0ZW5kKHt9LCBkZWZhdWx0UHJvcHMsIHRoaXMuX3NyY1NiaW5kRGF0YSkpXG4gICAgICAgICAgICA6IChvcHRpb25zLmRhdGEgfHwge30pO1xuXG4gICAgICAgIHRoaXMuX2RhdGFLZXlzID0gT2JqZWN0LmtleXMoZGF0YSkgfHwgW107XG5cbiAgICAgICAgcmV0dXJuIGV4dGVuZCh7JHN0eWxlOiB7fX0sIGRlZmF1bHRQcm9wcywgZGF0YSk7XG4gICAgfTtcblxuICAgIGlmIChvcHRpb25zLmNvbXBvbmVudHMpIHtcbiAgICAgICAgc2FuT3B0aW9ucy5jb21wb25lbnRzID0gT2JqZWN0XG4gICAgICAgICAgICAua2V5cyhvcHRpb25zLmNvbXBvbmVudHMpXG4gICAgICAgICAgICAucmVkdWNlKChwcmV2LCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBvcHRpb25zLmNvbXBvbmVudHNba2V5XTtcbiAgICAgICAgICAgICAgICBwcmV2W2tleV0gPSBwcmV2W2h5cGhlbmF0ZShrZXkpXSA9IGNvbXBvbmVudCBpbnN0YW5jZW9mIENvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICA/IGNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICA6IChjb21wb25lbnQudGVtcGxhdGUgfHwgY29tcG9uZW50LmFOb2RlID8gZGVmaW5lQ29tcG9uZW50KGNvbXBvbmVudCkgOiBkZWZpbmUoY29tcG9uZW50KSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICAgICAgICB9LCB7fSk7XG4gICAgICAgIHNhbk9wdGlvbnMuX2NtcHRSZWFkeSA9IDE7XG4gICAgfVxuXG4gICAgY29uc3QgY21wdCA9IGRlZmluZUNvbXBvbmVudChzYW5PcHRpb25zKTtcblxuICAgIHJldHVybiBvcHRpb25zW2lubmVyS2V5XSA9IGNtcHQ7XG59XG5cbiIsIi8qKlxuICogQGZpbGUgb3ZlcnJpZGUgZXZhbCBleHByXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHtEYXRhLCBwYXJzZUV4cHIsIEV4cHJUeXBlLCBldmFsRXhwcn0gZnJvbSAnc2FuJztcblxuY29uc3Qgb3JpZ2luYWxHZXQgPSBEYXRhLnByb3RvdHlwZS5nZXQ7XG5cbkRhdGEucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChleHByLCBjYWxsZWUpIHtcbiAgICBpZiAoZXhwciAmJiB0eXBlb2YgZXhwciAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXhwciA9IHBhcnNlRXhwcihleHByKTtcbiAgICB9XG4gICAgbGV0IHZhbHVlID0gb3JpZ2luYWxHZXQuY2FsbCh0aGlzLCBleHByICYmIGV4cHIucGF0aHMubGVuZ3RoID8gZXhwciA6IHVuZGVmaW5lZCwgY2FsbGVlKTtcbiAgICBleHByICYmIGV4cHIucGF0aHNbMF0gJiYgZXhwci5wYXRoc1swXS52YWx1ZSA9PT0gJ2EnICYmIGNvbnNvbGUubG9nKHZhbHVlLCBleHByLCB0aGlzKTtcbiAgICBpZiAoIWV4cHIgfHwgdmFsdWUgIT09IHVuZGVmaW5lZCB8fCAhdGhpcy5vd25lciB8fCBleHByLnR5cGUgIT09IEV4cHJUeXBlLkFDQ0VTU09SKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgY29uc3QgcGF0aHMgPSBleHByLnBhdGhzO1xuICAgIGNvbnN0IGZpcnN0ID0gcGF0aHNbMF0udmFsdWU7XG4gICAgaWYgKFxuICAgICAgICBbXG4gICAgICAgICAgICAuLi50aGlzLm93bmVyLl9wcm9wS2V5cyxcbiAgICAgICAgICAgIC4uLnRoaXMub3duZXIuX2RhdGFLZXlzLFxuICAgICAgICAgICAgLi4udGhpcy5vd25lci5fY29tcHV0ZWRLZXlzXG4gICAgICAgIF0uaW5kZXhPZihmaXJzdCkgPj0gMFxuICAgICkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHZhbHVlID0gdGhpcy5vd25lcltmaXJzdF07XG4gICAgZm9yICh2YXIgaSA9IDEsIGwgPSBwYXRocy5sZW5ndGg7IHZhbHVlICE9IG51bGwgJiYgaSA8IGw7IGkrKykge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlW3BhdGhzW2ldLnZhbHVlIHx8IGV2YWxFeHByKHBhdGhzW2ldLCBjYWxsZWUpXTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xufTtcbiIsIi8qKlxuICogQGZpbGUgbWVyZ2UgY2xhc3NcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5mdW5jdGlvbiBzdHJpbmcoY2xzID0gJycpIHtcbiAgICBpZiAoIWNscykge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHJldHVybiBjbHNcbiAgICAgICAgLnNwbGl0KCcgJylcbiAgICAgICAgLnJlZHVjZSgocHJldiwgbmFtZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgICAgW25hbWVdOiAxXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LCB7fSk7XG59XG5cbmZ1bmN0aW9uIG9iamVjdChjbHMgPSB7fSkge1xuICAgIHJldHVybiBPYmplY3RcbiAgICAgICAgLmtleXMoY2xzKVxuICAgICAgICAucmVkdWNlKChwcmV2LCBrZXkpID0+IHtcbiAgICAgICAgICAgIGlmICghY2xzW2tleV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgICAgICAuLi5zdHJpbmcoa2V5KVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSwge30pO1xufVxuXG5mdW5jdGlvbiBhcnJheShjbHMgPSBbXSkge1xuICAgIGxldCBjbGF6eiA9IHt9O1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBjbHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGNsc1tpXTtcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBjbGF6eiA9IHtcbiAgICAgICAgICAgIC4uLmNsYXp6LFxuICAgICAgICAgICAgLi4uKFxuICAgICAgICAgICAgICAgIHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgID8gc3RyaW5nKGVsZW1lbnQpXG4gICAgICAgICAgICAgICAgOiAoQXJyYXkuaXNBcnJheShlbGVtZW50KSA/IGFycmF5KGVsZW1lbnQpIDogb2JqZWN0KGVsZW1lbnQpKVxuICAgICAgICAgICAgKVxuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gY2xheno7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0aWNDbGFzcyA9ICcnLCBjbHMgPSB7fSkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhhcnJheShbc3RhdGljQ2xhc3MsIGNsc10pKS5qb2luKCcgJyk7XG59XG4iLCIvKipcbiAqIEBmaWxlIG1lcmdlIHN0eWxlXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHtjYWNoZWQsIGV4dGVuZCwgdG9PYmplY3R9IGZyb20gJy4uL3NoYXJlZC91dGlsJztcblxuY29uc3QgcGFyc2VTdHlsZVRleHQgPSBjYWNoZWQoZnVuY3Rpb24gKGNzc1RleHQpIHtcbiAgICBjb25zdCByZXMgPSB7fTtcbiAgICBjb25zdCBsaXN0RGVsaW1pdGVyID0gLzsoPyFbXihdKlxcKSkvZztcbiAgICBjb25zdCBwcm9wZXJ0eURlbGltaXRlciA9IC86KC4rKS87XG4gICAgY3NzVGV4dC5zcGxpdChsaXN0RGVsaW1pdGVyKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICB2YXIgdG1wID0gaXRlbS5zcGxpdChwcm9wZXJ0eURlbGltaXRlcik7XG4gICAgICAgICAgICB0bXAubGVuZ3RoID4gMSAmJiAocmVzW3RtcFswXS50cmltKCldID0gdG1wWzFdLnRyaW0oKSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzO1xufSk7XG5cbi8vIG5vcm1hbGl6ZSBwb3NzaWJsZSBhcnJheSAvIHN0cmluZyB2YWx1ZXMgaW50byBPYmplY3RcbmZ1bmN0aW9uIG5vcm1hbGl6ZVN0eWxlQmluZGluZyhiaW5kaW5nU3R5bGUpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShiaW5kaW5nU3R5bGUpKSB7XG4gICAgICAgIHJldHVybiB0b09iamVjdChiaW5kaW5nU3R5bGUpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGJpbmRpbmdTdHlsZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlU3R5bGVUZXh0KGJpbmRpbmdTdHlsZSk7XG4gICAgfVxuICAgIHJldHVybiBiaW5kaW5nU3R5bGU7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRpY1N0eWxlLCBzdHlsZSwgdlNob3cgPSB0cnVlKSB7XG4gICAgc3R5bGUgPSBub3JtYWxpemVTdHlsZUJpbmRpbmcoc3R5bGUpO1xuICAgIGlmICghdlNob3cpIHtcbiAgICAgICAgc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gICAgcmV0dXJuIHN0YXRpY1N0eWxlXG4gICAgICAgID8gZXh0ZW5kKHN0YXRpY1N0eWxlLCBzdHlsZSlcbiAgICAgICAgOiBzdHlsZTtcbn1cbiIsIi8qKlxuICogQGZpbGUgbG9vcCBleHByZXNzaW9uXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHtjYWNoZWR9IGZyb20gJy4uL3NoYXJlZC91dGlsJztcblxuY29uc3QgdG9BcnJheSA9IGNhY2hlZChmdW5jdGlvbiAobikge1xuICAgIGNvbnN0IHZhbHVlID0gbmV3IEFycmF5KG4pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgIHZhbHVlW2ldID0gaSArIDE7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAoIWlzTmFOKHZhbHVlKSkge1xuICAgICAgICBjb25zdCBuID0gK3ZhbHVlO1xuICAgICAgICB2YWx1ZSA9IHRvQXJyYXkobik7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn1cblxuIiwiLyoqXG4gKiBAZmlsZSBnZXQgY29tcG9uZW50IHR5cGVcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQge2V2YWxFeHByfSBmcm9tICdzYW4nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoYU5vZGUsIGRhdGEpIHtcbiAgICBpZiAoYU5vZGUudGFnTmFtZSAhPT0gJ2NvbXBvbmVudCcgfHwgYU5vZGUuaG90c3BvdC5wcm9wcy5pcyA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudHNbYU5vZGUudGFnTmFtZV07XG4gICAgfVxuXG4gICAgY29uc3QgaXMgPSBhTm9kZS5wcm9wc1thTm9kZS5ob3RzcG90LnByb3BzLmlzXTtcbiAgICBjb25zdCBpc1ZhbHVlID0gZXZhbEV4cHIoaXMuZXhwciwgZGF0YSk7XG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50c1tpc1ZhbHVlXTtcbn1cbiIsIi8qKlxuICogQGZpbGUgb2JqZWN0IGNvbXB1dGVkIHByb3BlcnRpZXMgbWVyZ2VcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocHJvcGVydGllcykge1xuICAgIHJldHVybiBwcm9wZXJ0aWVzLnJlZHVjZSgocHJldiwge2ssIHZ9KSA9PiB7XG4gICAgICAgIHByZXZba10gPSB2O1xuICAgICAgICByZXR1cm4gcHJldjtcbiAgICB9LCB7fSk7XG59XG4iLCIvKipcbiAqIEBmaWxlIHNhbiByZWYgcmV3cml0ZVxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCAqIGFzIHNhbiBmcm9tICdzYW4nO1xuaW1wb3J0IHtjYW1lbGl6ZX0gZnJvbSAnLi4vc2hhcmVkL3V0aWwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAobmFtZSkge1xuXG4gICAgY29uc3Qgb3duZXIgPSB0aGlzO1xuXG4gICAgZnVuY3Rpb24gY2hpbGRyZW5UcmF2ZXJzYWwoY2hpbGRyZW4pIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcmVmVGFyZ2V0ID0gZWxlbWVudFRyYXZlcnNhbChjaGlsZHJlbltpXSk7XG4gICAgICAgICAgICBpZiAocmVmVGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlZlRhcmdldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVsZW1lbnRUcmF2ZXJzYWwoZWxlbWVudCkge1xuICAgICAgICBjb25zdCBub2RlVHlwZSA9IGVsZW1lbnQubm9kZVR5cGU7XG4gICAgICAgIGlmIChub2RlVHlwZSA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZWZUYXJnZXQ7XG4gICAgICAgIGlmIChlbGVtZW50Lm93bmVyID09PSBvd25lcikge1xuICAgICAgICAgICAgbGV0IHJlZjtcbiAgICAgICAgICAgIGxldCB2YWx1ZTtcbiAgICAgICAgICAgIHN3aXRjaCAobm9kZVR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICByZWYgPSBlbGVtZW50LmFOb2RlLmRpcmVjdGl2ZXMucmVmO1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHJlZiAmJiBzYW4uZXZhbEV4cHIocmVmLnZhbHVlLCBlbGVtZW50LnNjb3BlLCBvd25lcik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWYgJiYgKHZhbHVlID09PSBuYW1lIHx8IGNhbWVsaXplKHZhbHVlKSA9PT0gbmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBub2RlVHlwZSA9PT0gNCA/IGVsZW1lbnQuZWwgOiBlbGVtZW50LmNoaWxkcmVuLm1hcChlbGVtZW50VHJhdmVyc2FsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgcmVmID0gZWxlbWVudC5zb3VyY2UuZGlyZWN0aXZlcy5yZWY7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gcmVmICYmIHNhbi5ldmFsRXhwcihyZWYudmFsdWUsIGVsZW1lbnQuc2NvcGUsIG93bmVyKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlZiAmJiAodmFsdWUgPT09IG5hbWUgfHwgY2FtZWxpemUodmFsdWUpID09PSBuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVmVGFyZ2V0ID0gZWxlbWVudC5zbG90Q2hpbGRyZW4gJiYgY2hpbGRyZW5UcmF2ZXJzYWwoZWxlbWVudC5zbG90Q2hpbGRyZW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlZlRhcmdldCB8fCBjaGlsZHJlblRyYXZlcnNhbChlbGVtZW50LmNoaWxkcmVuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGRyZW5UcmF2ZXJzYWwodGhpcy5jaGlsZHJlbik7XG59O1xuIiwiLyoqXG4gKiBAZmlsZSBtZXJnZSBvcHRpb25zXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHtleHRlbmR9IGZyb20gJy4uL3NoYXJlZC91dGlsJztcbmltcG9ydCB7bGlmZUN5Y2xlS2V5cywgbGlmZUN5Y2xlTWFwfSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCAqIGFzIGF0b21CdWlsZEluTWl4aW4gZnJvbSAnLi9nbG9iYWwtYXBpJztcblxuY29uc3Qga2V5cyA9IFtcbiAgICAnZmlsdGVycycsXG4gICAgJ2NvbXB1dGVkJ1xuXTtcblxuZnVuY3Rpb24gbWVyZ2VIb29rKHBhcmVudFZhbCwgY2hpbGRWYWwpIHtcbiAgICByZXR1cm4gY2hpbGRWYWxcbiAgICAgICAgPyBwYXJlbnRWYWxcbiAgICAgICAgICAgID8gcGFyZW50VmFsLmNvbmNhdChjaGlsZFZhbClcbiAgICAgICAgICAgIDogQXJyYXkuaXNBcnJheShjaGlsZFZhbClcbiAgICAgICAgICAgICAgICA/IGNoaWxkVmFsXG4gICAgICAgICAgICAgICAgOiBbY2hpbGRWYWxdXG4gICAgICAgICAgICA6IHBhcmVudFZhbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVyZ2VPcHRpb25zKG9wdGlvbnMpIHtcbiAgICBjb25zdCBkZXN0T3B0aW9ucyA9IHt9O1xuICAgIGNvbnN0IGxpc3QgPSBBcnJheS5pc0FycmF5KG9wdGlvbnMubWl4aW5zKVxuICAgICAgICA/IFthdG9tQnVpbGRJbk1peGluLCAuLi5vcHRpb25zLm1peGlucywgb3B0aW9uc11cbiAgICAgICAgOiBbYXRvbUJ1aWxkSW5NaXhpbiwgb3B0aW9uc107XG5cbiAgICBjb25zdCBtZXRob2RzID0ge307XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gbGlzdC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBjb25zdCBvcHQgPSBsaXN0W2ldO1xuICAgICAgICBvcHQubWV0aG9kcyAmJiBleHRlbmQobWV0aG9kcywgb3B0Lm1ldGhvZHMpO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGtleXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGsgPSBrZXlzW2pdO1xuICAgICAgICAgICAgaWYgKG9wdFtrXSkge1xuICAgICAgICAgICAgICAgIGRlc3RPcHRpb25zW2tdID0gZXh0ZW5kKGRlc3RPcHRpb25zW2tdIHx8IHt9LCBvcHRba10pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGlmZUN5Y2xlS2V5cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgY29uc3QgayA9IGxpZmVDeWNsZUtleXNbal07XG4gICAgICAgICAgICBjb25zdCBkayA9IGxpZmVDeWNsZU1hcFtrXTtcbiAgICAgICAgICAgIGlmIChvcHRba10pIHtcbiAgICAgICAgICAgICAgICBkZXN0T3B0aW9uc1tka10gPSBtZXJnZUhvb2soZGVzdE9wdGlvbnNbZGtdIHx8IFtdLCBvcHRba10pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGlmZUN5Y2xlS2V5cy5sZW5ndGg7IGorKykge1xuICAgICAgICBjb25zdCBrID0gbGlmZUN5Y2xlS2V5c1tqXTtcbiAgICAgICAgY29uc3QgZGsgPSBsaWZlQ3ljbGVNYXBba107XG4gICAgICAgIGlmIChkZXN0T3B0aW9uc1tka10pIHtcbiAgICAgICAgICAgIGNvbnN0IGhvb2tzID0gZGVzdE9wdGlvbnNbZGtdLnNsaWNlKCk7XG4gICAgICAgICAgICBkZXN0T3B0aW9uc1tka10gPSBob29rcy5sZW5ndGggPT09IDEgPyBob29rc1swXSA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBob29rcy5mb3JFYWNoKGhvb2sgPT4gaG9vay5jYWxsKHRoaXMpLCB0aGlzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGVzdE9wdGlvbnMuX21ldGhvZEtleXMgPSBPYmplY3Qua2V5cyhtZXRob2RzKTtcbiAgICBleHRlbmQoZGVzdE9wdGlvbnMsIG1ldGhvZHMpO1xuICAgIGlmIChvcHRpb25zLm1lc3NhZ2VzKSB7XG4gICAgICAgIGRlc3RPcHRpb25zLm1lc3NhZ2VzID0gb3B0aW9ucy5tZXNzYWdlcztcbiAgICB9XG4gICAgcmV0dXJuIGRlc3RPcHRpb25zO1xufVxuIiwiLyoqXG4gKiBAZmlsZSBjb25zdGFudHNcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5leHBvcnQgY29uc3QgbGlmZUN5Y2xlTWFwID0ge1xuICAgIGJlZm9yZUNyZWF0ZTogJ2NvbXBpbGVkJyxcbiAgICBtb3VudGVkOiAnYXR0YWNoZWQnLFxuICAgIGNyZWF0ZWQ6ICdpbml0ZWQnLFxuICAgIGJlZm9yZU1vdW50OiAnY3JlYXRlZCcsXG4gICAgYmVmb3JlRGVzdHJveTogJ2RldGFjaGVkJyxcbiAgICBkZXN0cm95OiAnZGlzcG9zZWQnLFxuICAgIHVwZGF0ZWQ6ICd1cGRhdGVkJyxcbiAgICBiZWZvcmVVcGRhdGU6ICdiZWZvcmVVcGRhdGUnLFxuICAgIGFjdGl2YXRlZDogJ2FjdGl2YXRlZCcsXG4gICAgZGVhY3RpdmF0ZWQ6ICdkZWFjdGl2YXRlZCdcbn07XG5cbmV4cG9ydCBjb25zdCBsaWZlQ3ljbGVLZXlzID0gT2JqZWN0LmtleXMobGlmZUN5Y2xlTWFwKTtcbiIsIi8qKlxuICogQGZpbGUg5YWo5bGA55Sf5pWI55qE5Ye95pWwXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHt0b09iamVjdH0gZnJvbSAnLi4vc2hhcmVkL3V0aWwnO1xuXG5jb25zdCBNQVRIX01FVEhPRCA9IFtcbiAgICAnZmxvb3InLCAnY2VpbCcsICdyb3VuZCcsXG4gICAgJ2FicycsICdtYXgnLCAnbWluJywgJ3Bvdydcbl07XG5cbmV4cG9ydCBjb25zdCBtZXRob2RzID0ge307XG5cbk1BVEhfTUVUSE9ELmZvckVhY2gobmFtZSA9PiB7XG4gICAgbWV0aG9kc1tgbWF0aF8ke25hbWV9YF0gPSBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICByZXR1cm4gTWF0aFtuYW1lXS5hcHBseShNYXRoLCBhcmdzKTtcbiAgICB9O1xufSk7XG5cbm1ldGhvZHMuYXJyYXlfc2xpY2UgPSBmdW5jdGlvbiAoYXJyLCBzdGFydCwgbGVuKSB7XG4gICAgdmFyIGVuZCA9IGxlbiA9PSBudWxsID8gdm9pZCAwIDogKGxlbiA+PSAwID8gKHN0YXJ0ICsgbGVuKSA6IChhcnIubGVuZ3RoICsgbGVuKSk7XG4gICAgcmV0dXJuIGFyci5zbGljZShzdGFydCwgZW5kKTtcbn07XG5cbm1ldGhvZHMuYXJyYXlfam9pbiA9IGZ1bmN0aW9uIChhcnIsIHNlcCkge1xuICAgIHJldHVybiBhcnIuam9pbihzZXApO1xufTtcblxubWV0aG9kcy5zdHJfcG9zID0gZnVuY3Rpb24gKHN0ciwgbWF0Y2gpIHtcbiAgICByZXR1cm4gc3RyLmluZGV4T2YobWF0Y2gpO1xufTtcblxubWV0aG9kcy5vYmplY3RfZnJlZXplID0gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBPYmplY3QuZnJlZXplKG9iaik7XG59O1xuXG5leHBvcnQgY29uc3QgZmlsdGVycyA9IHtcbiAgICBqc29uKG9iaikge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoanNvbik7XG4gICAgfSxcbiAgICBsb3dlcihzdHIpIHtcbiAgICAgICAgcmV0dXJuIHN0ci50b0xvd2VyQ2FzZSgpO1xuICAgIH0sXG4gICAgdXBwZXIoc3RyKSB7XG4gICAgICAgIHJldHVybiBzdHIudG9VcHBlckNhc2UoKTtcbiAgICB9LFxuICAgIF9jYXQoYSwgYikge1xuICAgICAgICByZXR1cm4gYS50b1N0cmluZygpICsgYjtcbiAgICB9XG59O1xuIiwiLyoqXG4gKiBAZmlsZSDopobnm5Ygc2FuIOWOn+eUn+eahCBfY2FsY0NvbXB1dGVkXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHtkZWZ9IGZyb20gJy4uL3NoYXJlZC91dGlsJztcbmltcG9ydCBzbG90cyBmcm9tICcuL2dldC1zbG90cyc7XG5pbXBvcnQge3Jlc2V0VGFyZ2V0LCBjbGVhblRhcmdldCwgRGVwfSBmcm9tICcuL2JpbmQtZGF0YSc7XG5pbXBvcnQge25leHRUaWNrfSBmcm9tICdzYW4nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYWxjQ29tcHV0ZWQoa2V5KSB7XG4gICAgbGV0IGNvbXB1dGVkRGVwcyA9IHRoaXMuY29tcHV0ZWREZXBzW2tleV07XG4gICAgaWYgKCFjb21wdXRlZERlcHMpIHtcbiAgICAgICAgY29tcHV0ZWREZXBzID0gdGhpcy5jb21wdXRlZERlcHNba2V5XSA9IHt9O1xuICAgIH1cblxuICAgIGNvbnN0IG1lID0gdGhpcztcblxuICAgIGNvbnN0IG9sZFZhbHVlID0gdGhpcy5kYXRhLmdldChrZXkpO1xuXG4gICAgcmVzZXRUYXJnZXQoKTtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuY29tcHV0ZWRba2V5XS5jYWxsKHRoaXMpO1xuICAgIGNvbnN0IGRlcHMgPSBEZXAudGFyZ2V0O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBkZXAgPSBkZXBzW2ldO1xuICAgICAgICBjb25zdCB7ZXhwciwgY29udGV4dH0gPSBkZXA7XG4gICAgICAgIGNvbnN0IGV4cHJQcmVmaXggPSB0aGlzID09PSBjb250ZXh0ID8gJycgOiAndXBwZXInO1xuICAgICAgICBjb25zdCBleHByU3VmZml4ID0gZXhwci5wYXRocy5tYXAoYSA9PiBhLnZhbHVlKS5qb2luKCcuJyk7XG4gICAgICAgIGNvbnN0IGV4cHJTdHIgPSBleHByUHJlZml4ICsgZXhwclN1ZmZpeDtcbiAgICAgICAgaWYgKCFjb21wdXRlZERlcHNbZXhwclN0cl0pIHtcbiAgICAgICAgICAgIGNvbXB1dGVkRGVwc1tleHByU3RyXSA9IDE7XG4gICAgICAgICAgICBkZWxldGUgZXhwci5jaGFuZ2VDYWNoZTtcbiAgICAgICAgICAgIG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0LndhdGNoKGV4cHIsIGZ1bmN0aW9uIChjaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsY0NvbXB1dGVkLmNhbGwobWUsIGtleSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjbGVhblRhcmdldCgpO1xuXG4gICAgaWYgKG9sZFZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICB0aGlzLmRhdGEuc2V0KGtleSwgdmFsdWUpO1xuICAgIH1cbn1cbiIsIi8qKlxuICogQGZpbGUgY2FsbCBhY3RpdmF0ZWQgZGVhY3RpdmF0ZWRcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQge05vZGVUeXBlfSBmcm9tICdzYW4nO1xuXG5mdW5jdGlvbiBjcmVhdGVDYWxsRmFjdG9yeShuYW1lKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGNhbGwoZGlyZWN0KSB7XG4gICAgICAgIGNvbnN0IGVsZSA9IHRoaXM7XG4gICAgICAgIGlmIChlbGUubm9kZVR5cGUgPT09IE5vZGVUeXBlLkNNUFQpIHtcbiAgICAgICAgICAgIGVsZS5fdG9QaGFzZShuYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlLmNoaWxkcmVuICYmIGVsZS5jaGlsZHJlbi5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBlbGUuY2hpbGRyZW4uZm9yRWFjaChjYWxsKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNhbGxBY3Rpdml0ZWQgPSBjcmVhdGVDYWxsRmFjdG9yeSgnYWN0aXZpdGVkJyk7XG5leHBvcnQgY29uc3QgY2FsbERlQWN0aXZpdGVkID0gY3JlYXRlQ2FsbEZhY3RvcnkoJ2RlYWN0aXZpdGVkJyk7XG4iLCIvKipcbiAqIEBmaWxlIHMtdHJhbnNpdGlvblxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCB7Y2FjaGVkLCByZW1vdmUsIGV4dGVuZCwgb25jZSwgaXNPYmplY3R9IGZyb20gJy4uL3NoYXJlZC91dGlsJztcbmltcG9ydCB7YWRkQ2xhc3MsIHJlbW92ZUNsYXNzfSBmcm9tICcuL2NsYXNzLXV0aWwnO1xuXG5mdW5jdGlvbiByZXNvbHZlVHJhbnNpdGlvbihkZWYpIHtcbiAgICBpZiAoIWRlZikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKHR5cGVvZiBkZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IHt9O1xuICAgICAgICBpZiAoZGVmLmNzcyAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGV4dGVuZChyZXMsIGF1dG9Dc3NUcmFuc2l0aW9uKGRlZi5uYW1lIHx8ICd2JykpO1xuICAgICAgICB9XG4gICAgICAgIGV4dGVuZChyZXMsIGRlZik7XG4gICAgICAgIHJldHVybiByZXNcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGRlZiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIGF1dG9Dc3NUcmFuc2l0aW9uKGRlZilcbiAgICB9XG59XG5cbmNvbnN0IGF1dG9Dc3NUcmFuc2l0aW9uID0gY2FjaGVkKG5hbWUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGVudGVyQ2xhc3M6IGAke25hbWV9LWVudGVyYCxcbiAgICAgICAgZW50ZXJUb0NsYXNzOiBgJHtuYW1lfS1lbnRlci10b2AsXG4gICAgICAgIGVudGVyQWN0aXZlQ2xhc3M6IGAke25hbWV9LWVudGVyLWFjdGl2ZWAsXG4gICAgICAgIGxlYXZlQ2xhc3M6IGAke25hbWV9LWxlYXZlYCxcbiAgICAgICAgbGVhdmVUb0NsYXNzOiBgJHtuYW1lfS1sZWF2ZS10b2AsXG4gICAgICAgIGxlYXZlQWN0aXZlQ2xhc3M6IGAke25hbWV9LWxlYXZlLWFjdGl2ZWBcbiAgICB9O1xufSk7XG5cbmNvbnN0IFRSQU5TSVRJT04gPSAndHJhbnNpdGlvbic7XG5jb25zdCBBTklNQVRJT04gPSAnYW5pbWF0aW9uJztcblxuLy8gVHJhbnNpdGlvbiBwcm9wZXJ0eS9ldmVudCBzbmlmZmluZ1xubGV0IHRyYW5zaXRpb25Qcm9wID0gJ3RyYW5zaXRpb24nO1xubGV0IHRyYW5zaXRpb25FbmRFdmVudCA9ICd0cmFuc2l0aW9uZW5kJztcbmxldCBhbmltYXRpb25Qcm9wID0gJ2FuaW1hdGlvbic7XG5sZXQgYW5pbWF0aW9uRW5kRXZlbnQgPSAnYW5pbWF0aW9uZW5kJztcbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuaWYgKFxuICAgIHdpbmRvdy5vbnRyYW5zaXRpb25lbmQgPT09IHVuZGVmaW5lZFxuICAgICYmIHdpbmRvdy5vbndlYmtpdHRyYW5zaXRpb25lbmQgIT09IHVuZGVmaW5lZFxuKSB7XG4gICAgdHJhbnNpdGlvblByb3AgPSAnV2Via2l0VHJhbnNpdGlvbic7XG4gICAgdHJhbnNpdGlvbkVuZEV2ZW50ID0gJ3dlYmtpdFRyYW5zaXRpb25FbmQnO1xufVxuaWYgKFxuICAgIHdpbmRvdy5vbmFuaW1hdGlvbmVuZCA9PT0gdW5kZWZpbmVkXG4gICAgJiYgd2luZG93Lm9ud2Via2l0YW5pbWF0aW9uZW5kICE9PSB1bmRlZmluZWRcbikge1xuICAgIGFuaW1hdGlvblByb3AgPSAnV2Via2l0QW5pbWF0aW9uJztcbiAgICBhbmltYXRpb25FbmRFdmVudCA9ICd3ZWJraXRBbmltYXRpb25FbmQnO1xufVxuXG5jb25zdCByYWYgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgPyB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lLmJpbmQod2luZG93KVxuICAgIDogc2V0VGltZW91dDtcblxuZnVuY3Rpb24gbmV4dEZyYW1lIChmbikge1xuICAgIHJhZigoKSA9PiB7XG4gICAgICAgIHJhZihmbik7XG4gICAgfSk7XG59XG5cbmNvbnN0IHRyYW5zZm9ybVJFID0gL1xcYih0cmFuc2Zvcm18YWxsKSgsfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHJhbnNpdGlvbkluZm8oZWwsIGV4cGVjdGVkVHlwZSkge1xuICAgIGNvbnN0IHN0eWxlcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKVxuICAgIC8vIEpTRE9NIG1heSByZXR1cm4gdW5kZWZpbmVkIGZvciB0cmFuc2l0aW9uIHByb3BlcnRpZXNcbiAgICBjb25zdCB0cmFuc2l0aW9uRGVsYXlzID0gKHN0eWxlc1t0cmFuc2l0aW9uUHJvcCArICdEZWxheSddIHx8ICcnKS5zcGxpdCgnLCAnKTtcbiAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb25zID0gKHN0eWxlc1t0cmFuc2l0aW9uUHJvcCArICdEdXJhdGlvbiddIHx8ICcnKS5zcGxpdCgnLCAnKTtcbiAgICBjb25zdCB0cmFuc2l0aW9uVGltZW91dCA9IGdldFRpbWVvdXQodHJhbnNpdGlvbkRlbGF5cywgdHJhbnNpdGlvbkR1cmF0aW9ucyk7XG4gICAgY29uc3QgYW5pbWF0aW9uRGVsYXlzID0gKHN0eWxlc1thbmltYXRpb25Qcm9wICsgJ0RlbGF5J10gfHwgJycpLnNwbGl0KCcsICcpO1xuICAgIGNvbnN0IGFuaW1hdGlvbkR1cmF0aW9ucyA9IChzdHlsZXNbYW5pbWF0aW9uUHJvcCArICdEdXJhdGlvbiddIHx8ICcnKS5zcGxpdCgnLCAnKTtcbiAgICBjb25zdCBhbmltYXRpb25UaW1lb3V0ID0gZ2V0VGltZW91dChhbmltYXRpb25EZWxheXMsIGFuaW1hdGlvbkR1cmF0aW9ucyk7XG5cbiAgICBsZXQgdHlwZTtcbiAgICBsZXQgdGltZW91dCA9IDA7XG4gICAgbGV0IHByb3BDb3VudCA9IDA7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKGV4cGVjdGVkVHlwZSA9PT0gVFJBTlNJVElPTikge1xuICAgICAgICBpZiAodHJhbnNpdGlvblRpbWVvdXQgPiAwKSB7XG4gICAgICAgICAgICB0eXBlID0gVFJBTlNJVElPTjtcbiAgICAgICAgICAgIHRpbWVvdXQgPSB0cmFuc2l0aW9uVGltZW91dDtcbiAgICAgICAgICAgIHByb3BDb3VudCA9IHRyYW5zaXRpb25EdXJhdGlvbnMubGVuZ3RoO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGV4cGVjdGVkVHlwZSA9PT0gQU5JTUFUSU9OKSB7XG4gICAgICAgIGlmIChhbmltYXRpb25UaW1lb3V0ID4gMCkge1xuICAgICAgICAgICAgdHlwZSA9IEFOSU1BVElPTjtcbiAgICAgICAgICAgIHRpbWVvdXQgPSBhbmltYXRpb25UaW1lb3V0O1xuICAgICAgICAgICAgcHJvcENvdW50ID0gYW5pbWF0aW9uRHVyYXRpb25zLmxlbmd0aDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGltZW91dCA9IE1hdGgubWF4KHRyYW5zaXRpb25UaW1lb3V0LCBhbmltYXRpb25UaW1lb3V0KVxuICAgICAgICB0eXBlID0gdGltZW91dCA+IDBcbiAgICAgICAgICAgID8gdHJhbnNpdGlvblRpbWVvdXQgPiBhbmltYXRpb25UaW1lb3V0XG4gICAgICAgICAgICAgICAgPyBUUkFOU0lUSU9OXG4gICAgICAgICAgICAgICAgOiBBTklNQVRJT05cbiAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgcHJvcENvdW50ID0gdHlwZVxuICAgICAgICAgICAgPyB0eXBlID09PSBUUkFOU0lUSU9OXG4gICAgICAgICAgICAgICAgPyB0cmFuc2l0aW9uRHVyYXRpb25zLmxlbmd0aFxuICAgICAgICAgICAgICAgIDogYW5pbWF0aW9uRHVyYXRpb25zLmxlbmd0aFxuICAgICAgICAgICAgOiAwO1xuICAgIH1cbiAgICBjb25zdCBoYXNUcmFuc2Zvcm0gPVxuICAgICAgICB0eXBlID09PSBUUkFOU0lUSU9OXG4gICAgICAgICYmIHRyYW5zZm9ybVJFLnRlc3Qoc3R5bGVzW3RyYW5zaXRpb25Qcm9wICsgJ1Byb3BlcnR5J10pO1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGUsXG4gICAgICAgIHRpbWVvdXQsXG4gICAgICAgIHByb3BDb3VudCxcbiAgICAgICAgaGFzVHJhbnNmb3JtXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0VGltZW91dChkZWxheXMsIGR1cmF0aW9ucykge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgd2hpbGUgKGRlbGF5cy5sZW5ndGggPCBkdXJhdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgIGRlbGF5cyA9IGRlbGF5cy5jb25jYXQoZGVsYXlzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gTWF0aC5tYXguYXBwbHkobnVsbCwgZHVyYXRpb25zLm1hcCgoZCwgaSkgPT4ge1xuICAgICAgICByZXR1cm4gdG9NcyhkKSArIHRvTXMoZGVsYXlzW2ldKTtcbiAgICB9KSk7XG59XG5cbi8vIE9sZCB2ZXJzaW9ucyBvZiBDaHJvbWl1bSAoYmVsb3cgNjEuMC4zMTYzLjEwMCkgZm9ybWF0cyBmbG9hdGluZyBwb2ludGVyIG51bWJlcnNcbi8vIGluIGEgbG9jYWxlLWRlcGVuZGVudCB3YXksIHVzaW5nIGEgY29tbWEgaW5zdGVhZCBvZiBhIGRvdC5cbi8vIElmIGNvbW1hIGlzIG5vdCByZXBsYWNlZCB3aXRoIGEgZG90LCB0aGUgaW5wdXQgd2lsbCBiZSByb3VuZGVkIGRvd24gKGkuZS4gYWN0aW5nXG4vLyBhcyBhIGZsb29yIGZ1bmN0aW9uKSBjYXVzaW5nIHVuZXhwZWN0ZWQgYmVoYXZpb3JzXG5mdW5jdGlvbiB0b01zKHMpIHtcbiAgICByZXR1cm4gTnVtYmVyKHMuc2xpY2UoMCwgLTEpLnJlcGxhY2UoJywnLCAnLicpKSAqIDEwMDA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUcmFuc2l0aW9uQ2xhc3MoZWwsIGNscykge1xuICAgIGNvbnN0IHRyYW5zaXRpb25DbGFzc2VzID0gZWwuX3RyYW5zaXRpb25DbGFzc2VzIHx8IChlbC5fdHJhbnNpdGlvbkNsYXNzZXMgPSBbXSk7XG4gICAgaWYgKHRyYW5zaXRpb25DbGFzc2VzLmluZGV4T2YoY2xzKSA8IDApIHtcbiAgICAgICAgdHJhbnNpdGlvbkNsYXNzZXMucHVzaChjbHMpO1xuICAgICAgICBhZGRDbGFzcyhlbCwgY2xzKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVUcmFuc2l0aW9uQ2xhc3MoZWwsIGNscykge1xuICAgIGlmIChlbC5fdHJhbnNpdGlvbkNsYXNzZXMpIHtcbiAgICAgICAgcmVtb3ZlKGVsLl90cmFuc2l0aW9uQ2xhc3NlcywgY2xzKTtcbiAgICB9XG4gICAgcmVtb3ZlQ2xhc3MoZWwsIGNscyk7XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWREdXJhdGlvbih2YWwpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHZhbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3aGVuVHJhbnNpdGlvbkVuZHMoZWwsIGV4cGVjdGVkVHlwZSwgY2IpIHtcbiAgICBjb25zdCB7XG4gICAgICAgIHR5cGUsXG4gICAgICAgIHRpbWVvdXQsXG4gICAgICAgIHByb3BDb3VudFxuICAgIH0gPSBnZXRUcmFuc2l0aW9uSW5mbyhlbCwgZXhwZWN0ZWRUeXBlKTtcbiAgICBpZiAoIXR5cGUpIHtcbiAgICAgICAgcmV0dXJuIGNiKCk7XG4gICAgfVxuICAgIGNvbnN0IGV2ZW50ID0gdHlwZSA9PT0gVFJBTlNJVElPTiA/IHRyYW5zaXRpb25FbmRFdmVudCA6IGFuaW1hdGlvbkVuZEV2ZW50O1xuICAgIGxldCBlbmRlZCA9IDA7XG4gICAgY29uc3QgZW5kID0gKCkgPT4ge1xuICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBvbkVuZClcbiAgICAgICAgY2IoKVxuICAgIH07XG4gICAgY29uc3Qgb25FbmQgPSBlID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBlbCkge1xuICAgICAgICAgICAgaWYgKCsrZW5kZWQgPj0gcHJvcENvdW50KSB7XG4gICAgICAgICAgICAgICAgZW5kKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAoZW5kZWQgPCBwcm9wQ291bnQpIHtcbiAgICAgICAgICAgIGVuZCgpO1xuICAgICAgICB9XG4gICAgfSwgdGltZW91dCArIDEpO1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIG9uRW5kKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAgIGNvbnN0IGRhdGEgPSByZXNvbHZlVHJhbnNpdGlvbihvcHRpb25zKTtcblxuICAgIGNvbnN0IHtcbiAgICAgICAgY3NzLFxuICAgICAgICB0eXBlLFxuICAgICAgICBlbnRlckNsYXNzLFxuICAgICAgICBlbnRlclRvQ2xhc3MsXG4gICAgICAgIGVudGVyQWN0aXZlQ2xhc3MsXG4gICAgICAgIGFwcGVhckNsYXNzLFxuICAgICAgICBhcHBlYXJUb0NsYXNzLFxuICAgICAgICBhcHBlYXJBY3RpdmVDbGFzcyxcbiAgICAgICAgYmVmb3JlRW50ZXIsXG4gICAgICAgIGVudGVyLFxuICAgICAgICBhZnRlckVudGVyLFxuICAgICAgICBlbnRlckNhbmNlbGxlZCxcbiAgICAgICAgYmVmb3JlQXBwZWFyLFxuICAgICAgICBhcHBlYXIsXG4gICAgICAgIGFmdGVyQXBwZWFyLFxuICAgICAgICBhcHBlYXJDYW5jZWxsZWQsXG4gICAgICAgIGxlYXZlQ2xhc3MsXG4gICAgICAgIGxlYXZlVG9DbGFzcyxcbiAgICAgICAgbGVhdmVBY3RpdmVDbGFzcyxcbiAgICAgICAgYmVmb3JlTGVhdmUsXG4gICAgICAgIGxlYXZlLFxuICAgICAgICBhZnRlckxlYXZlLFxuICAgICAgICBsZWF2ZUNhbmNlbGxlZCxcbiAgICAgICAgZGVsYXlMZWF2ZSxcbiAgICAgICAgZHVyYXRpb25cbiAgICB9ID0gcmVzb2x2ZVRyYW5zaXRpb24ob3B0aW9ucyk7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcztcbiAgICBjb25zdCBleHBlY3RzQ1NTID0gY3NzICE9PSBmYWxzZTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGVudGVyOiBlbnRlckhhbmRsZXIsXG4gICAgICAgIGxlYXZlOiBsZWF2ZUhhbmRsZXJcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gZ2V0SG9vayhmbikge1xuICAgICAgICBpZiAoIWZuKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuIGZuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGludm9rZXJGbiA9IGNvbnRleHQub3duZXJbZm5dO1xuICAgICAgICBpZiAoaW52b2tlckZuICYmIHR5cGVvZiBpbnZva2VyRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybiBpbnZva2VyRm47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVudGVySGFuZGxlcihlbCwgZG9uZSkge1xuICAgICAgICBjb25zdCBpc0FwcGVhciA9ICFjb250ZXh0LmxpZmVDeWNsZS5hdHRhY2hlZDtcblxuICAgICAgICAvLyBjYWxsIGxlYXZlIGNhbGxiYWNrIG5vd1xuICAgICAgICBpZiAoZWwuX2xlYXZlQ2IpIHtcbiAgICAgICAgICAgIGVsLl9sZWF2ZUNiLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgICAgIGVsLl9sZWF2ZUNiKClcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICBpZiAoZWwuX2VudGVyQ2IgfHwgZWwubm9kZVR5cGUgIT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0FwcGVhciAmJiAhYXBwZWFyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzdGFydENsYXNzID0gaXNBcHBlYXIgJiYgYXBwZWFyQ2xhc3NcbiAgICAgICAgICAgID8gYXBwZWFyQ2xhc3NcbiAgICAgICAgICAgIDogZW50ZXJDbGFzcztcbiAgICAgICAgY29uc3QgYWN0aXZlQ2xhc3MgPSBpc0FwcGVhciAmJiBhcHBlYXJBY3RpdmVDbGFzc1xuICAgICAgICAgICAgPyBhcHBlYXJBY3RpdmVDbGFzc1xuICAgICAgICAgICAgOiBlbnRlckFjdGl2ZUNsYXNzO1xuICAgICAgICBjb25zdCB0b0NsYXNzID0gaXNBcHBlYXIgJiYgYXBwZWFyVG9DbGFzc1xuICAgICAgICAgICAgPyBhcHBlYXJUb0NsYXNzXG4gICAgICAgICAgICA6IGVudGVyVG9DbGFzcztcblxuICAgICAgICBjb25zdCBiZWZvcmVFbnRlckhvb2sgPSBpc0FwcGVhclxuICAgICAgICAgICAgPyAoZ2V0SG9vayhiZWZvcmVBcHBlYXIpIHx8IGdldEhvb2soYmVmb3JlRW50ZXIpKVxuICAgICAgICAgICAgOiBnZXRIb29rKGJlZm9yZUVudGVyKTtcbiAgICAgICAgY29uc3QgZW50ZXJIb29rID0gaXNBcHBlYXJcbiAgICAgICAgICAgID8gKGdldEhvb2soYXBwZWFyKSB8fCBnZXRIb29rKGVudGVyKSlcbiAgICAgICAgICAgIDogZ2V0SG9vayhlbnRlcik7XG4gICAgICAgIGNvbnN0IGFmdGVyRW50ZXJIb29rID0gaXNBcHBlYXJcbiAgICAgICAgICAgID8gKGdldEhvb2soYWZ0ZXJBcHBlYXIpIHx8IGdldEhvb2soYWZ0ZXJFbnRlcikpXG4gICAgICAgICAgICA6IGdldEhvb2soYWZ0ZXJFbnRlcik7XG4gICAgICAgIGNvbnN0IGVudGVyQ2FuY2VsbGVkSG9vayA9IGlzQXBwZWFyXG4gICAgICAgICAgICA/IChnZXRIb29rKGFwcGVhckNhbmNlbGxlZCkgfHwgZ2V0SG9vayhlbnRlckNhbmNlbGxlZCkpXG4gICAgICAgICAgICA6IGdldEhvb2soZW50ZXJDYW5jZWxsZWQpO1xuXG4gICAgICAgIGNvbnN0IGV4cGxpY2l0RW50ZXJEdXJhdGlvbiA9ICsoaXNPYmplY3QoZHVyYXRpb24pID8gZHVyYXRpb24uZW50ZXIgOiBkdXJhdGlvbik7XG4gICAgICAgIGNvbnN0IHVzZXJXYW50c0NvbnRyb2wgPSBlbnRlckhvb2sgJiYgZW50ZXJIb29rLmxlbmd0aCA+IDE7XG5cbiAgICAgICAgY29uc3QgY2IgPSBlbC5fZW50ZXJDYiA9IG9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV4cGVjdHNDU1MpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVUcmFuc2l0aW9uQ2xhc3MoZWwsIHRvQ2xhc3MpXG4gICAgICAgICAgICAgICAgcmVtb3ZlVHJhbnNpdGlvbkNsYXNzKGVsLCBhY3RpdmVDbGFzcylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYi5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXhwZWN0c0NTUykge1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVUcmFuc2l0aW9uQ2xhc3MoZWwsIHN0YXJ0Q2xhc3MpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVudGVyQ2FuY2VsbGVkSG9vayAmJiBlbnRlckNhbmNlbGxlZEhvb2soZWwpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhZnRlckVudGVySG9vayAmJiBhZnRlckVudGVySG9vayhlbClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsLl9lbnRlckNiID0gbnVsbFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBzdGFydCBlbnRlciB0cmFuc2l0aW9uXG4gICAgICAgIGVudGVySG9vayAmJiBlbnRlckhvb2soZWwsIGNiKTtcbiAgICAgICAgYmVmb3JlRW50ZXJIb29rICYmIGJlZm9yZUVudGVySG9vayhlbCk7XG4gICAgICAgIGlmIChleHBlY3RzQ1NTKSB7XG4gICAgICAgICAgICBhZGRUcmFuc2l0aW9uQ2xhc3MoZWwsIHN0YXJ0Q2xhc3MpO1xuICAgICAgICAgICAgYWRkVHJhbnNpdGlvbkNsYXNzKGVsLCBhY3RpdmVDbGFzcyk7XG4gICAgICAgICAgICBuZXh0RnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlbW92ZVRyYW5zaXRpb25DbGFzcyhlbCwgc3RhcnRDbGFzcylcbiAgICAgICAgICAgICAgICBpZiAoIWNiLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICBhZGRUcmFuc2l0aW9uQ2xhc3MoZWwsIHRvQ2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXVzZXJXYW50c0NvbnRyb2wpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1ZhbGlkRHVyYXRpb24oZXhwbGljaXRFbnRlckR1cmF0aW9uKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoY2IsIGV4cGxpY2l0RW50ZXJEdXJhdGlvbilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZW5UcmFuc2l0aW9uRW5kcyhlbCwgdHlwZSwgY2IpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZXhwZWN0c0NTUyAmJiAhdXNlcldhbnRzQ29udHJvbCkge1xuICAgICAgICAgICAgY2IoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRvbmUoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsZWF2ZUhhbmRsZXIoZWwsIGRvbmUpIHtcblxuICAgICAgICAvLyBjYWxsIGVudGVyIGNhbGxiYWNrIG5vd1xuICAgICAgICBpZiAoZWwuX2VudGVyQ2IpIHtcbiAgICAgICAgICAgIGVsLl9lbnRlckNiLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICBlbC5fZW50ZXJDYigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgIGlmIChlbC5fbGVhdmVDYikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbGVhdmVIb29rID0gZ2V0SG9vayhsZWF2ZSk7XG4gICAgICAgIGNvbnN0IGRlbGF5TGVhdmVIb29rID0gZ2V0SG9vayhkZWxheUxlYXZlKTtcbiAgICAgICAgY29uc3QgYmVmb3JlTGVhdmVIb29rID0gZ2V0SG9vayhiZWZvcmVMZWF2ZSk7XG4gICAgICAgIGNvbnN0IGFmdGVyTGVhdmVIb29rID0gZ2V0SG9vayhhZnRlckxlYXZlKTtcblxuICAgICAgICBjb25zdCBleHBsaWNpdExlYXZlRHVyYXRpb24gPSArKGlzT2JqZWN0KGR1cmF0aW9uKSA/IGR1cmF0aW9uLmxlYXZlIDogZHVyYXRpb24pO1xuICAgICAgICBjb25zdCB1c2VyV2FudHNDb250cm9sID0gbGVhdmVIb29rICYmIGxlYXZlSG9vay5sZW5ndGggPiAxO1xuXG4gICAgICAgIGNvbnN0IGNiID0gZWwuX2xlYXZlQ2IgPSBvbmNlKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChleHBlY3RzQ1NTKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlVHJhbnNpdGlvbkNsYXNzKGVsLCBsZWF2ZVRvQ2xhc3MpO1xuICAgICAgICAgICAgICAgIHJlbW92ZVRyYW5zaXRpb25DbGFzcyhlbCwgbGVhdmVBY3RpdmVDbGFzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2IuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKGV4cGVjdHNDU1MpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlVHJhbnNpdGlvbkNsYXNzKGVsLCBsZWF2ZUNsYXNzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVhdmVDYW5jZWxsZWQgJiYgbGVhdmVDYW5jZWxsZWQoZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9uZSgpXG4gICAgICAgICAgICAgICAgYWZ0ZXJMZWF2ZUhvb2sgJiYgYWZ0ZXJMZWF2ZUhvb2soZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWwuX2xlYXZlQ2IgPSBudWxsO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoZGVsYXlMZWF2ZUhvb2spIHtcbiAgICAgICAgICAgIGRlbGF5TGVhdmVIb29rKHBlcmZvcm1MZWF2ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwZXJmb3JtTGVhdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHBlcmZvcm1MZWF2ZSgpIHtcbiAgICAgICAgICAgIC8vIHRoZSBkZWxheWVkIGxlYXZlIG1heSBoYXZlIGFscmVhZHkgYmVlbiBjYW5jZWxsZWRcbiAgICAgICAgICAgIGlmIChjYi5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiZWZvcmVMZWF2ZUhvb2sgJiYgYmVmb3JlTGVhdmVIb29rKGVsKTtcbiAgICAgICAgICAgIGlmIChleHBlY3RzQ1NTKSB7XG4gICAgICAgICAgICAgICAgYWRkVHJhbnNpdGlvbkNsYXNzKGVsLCBsZWF2ZUNsYXNzKTtcbiAgICAgICAgICAgICAgICBhZGRUcmFuc2l0aW9uQ2xhc3MoZWwsIGxlYXZlQWN0aXZlQ2xhc3MpO1xuICAgICAgICAgICAgICAgIG5leHRGcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZVRyYW5zaXRpb25DbGFzcyhlbCwgbGVhdmVDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY2IuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRUcmFuc2l0aW9uQ2xhc3MoZWwsIGxlYXZlVG9DbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXVzZXJXYW50c0NvbnRyb2wpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNWYWxpZER1cmF0aW9uKGV4cGxpY2l0TGVhdmVEdXJhdGlvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChjYiwgZXhwbGljaXRMZWF2ZUR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZW5UcmFuc2l0aW9uRW5kcyhlbCwgdHlwZSwgY2IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGVhdmVIb29rICYmIGxlYXZlSG9vayhlbCwgY2IpO1xuICAgICAgICAgICAgaWYgKCFleHBlY3RzQ1NTICYmICF1c2VyV2FudHNDb250cm9sKSB7XG4gICAgICAgICAgICAgICAgY2IoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8qKlxuICogQGZpbGUgY2xhc3MgdXRpbHNcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5jb25zdCB3aGl0ZXNwYWNlUkUgPSAvXFxzKy9cblxuLyoqXG4gKiBBZGQgY2xhc3Mgd2l0aCBjb21wYXRpYmlsaXR5IGZvciBTVkcgc2luY2UgY2xhc3NMaXN0IGlzIG5vdCBzdXBwb3J0ZWQgb25cbiAqIFNWRyBlbGVtZW50cyBpbiBJRVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2xhc3MgKGVsLCBjbHMpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoIWNscyB8fCAhKGNscyA9IGNscy50cmltKCkpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmIChlbC5jbGFzc0xpc3QpIHtcbiAgICAgICAgaWYgKGNscy5pbmRleE9mKCcgJykgPiAtMSkge1xuICAgICAgICAgICAgY2xzLnNwbGl0KHdoaXRlc3BhY2VSRSkuZm9yRWFjaChjID0+IGVsLmNsYXNzTGlzdC5hZGQoYykpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKGNscylcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc3QgY3VyID0gYCAke2VsLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSB8fCAnJ30gYFxuICAgICAgICBpZiAoY3VyLmluZGV4T2YoJyAnICsgY2xzICsgJyAnKSA8IDApIHtcbiAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAoY3VyICsgY2xzKS50cmltKCkpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogUmVtb3ZlIGNsYXNzIHdpdGggY29tcGF0aWJpbGl0eSBmb3IgU1ZHIHNpbmNlIGNsYXNzTGlzdCBpcyBub3Qgc3VwcG9ydGVkIG9uXG4gKiBTVkcgZWxlbWVudHMgaW4gSUVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNsYXNzIChlbCwgY2xzKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKCFjbHMgfHwgIShjbHMgPSBjbHMudHJpbSgpKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAoZWwuY2xhc3NMaXN0KSB7XG4gICAgICAgIGlmIChjbHMuaW5kZXhPZignICcpID4gLTEpIHtcbiAgICAgICAgICAgIGNscy5zcGxpdCh3aGl0ZXNwYWNlUkUpLmZvckVhY2goYyA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKGMpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWVsLmNsYXNzTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbGV0IGN1ciA9IGAgJHtlbC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgfHwgJyd9IGA7XG4gICAgICAgIGNvbnN0IHRhciA9ICcgJyArIGNscyArICcgJztcbiAgICAgICAgd2hpbGUgKGN1ci5pbmRleE9mKHRhcikgPj0gMCkge1xuICAgICAgICAgICAgY3VyID0gY3VyLnJlcGxhY2UodGFyLCAnICcpO1xuICAgICAgICB9XG4gICAgICAgIGN1ciA9IGN1ci50cmltKClcbiAgICAgICAgaWYgKGN1cikge1xuICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsIGN1cik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9