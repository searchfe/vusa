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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
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
exports.isObject = isObject;
exports.hasOwn = hasOwn;
exports.isPlainObject = isPlainObject;
exports.def = def;
exports.cached = cached;
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
Object.defineProperty(exports, "defineComponent", {
  enumerable: true,
  get: function get() {
    return _defineComponent.default;
  }
});

var _defineComponent = _interopRequireDefault(__webpack_require__(3));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = define;

__webpack_require__(4);

var _san = __webpack_require__(1);

var _util = __webpack_require__(0);

var _mergeClass = _interopRequireDefault(__webpack_require__(5));

var _mergeStyle = _interopRequireDefault(__webpack_require__(6));

var _loopExpression = _interopRequireDefault(__webpack_require__(7));

var _getComponentType = _interopRequireDefault(__webpack_require__(8));

var _objectComputedPropertirs = _interopRequireDefault(__webpack_require__(9));

var _ref = _interopRequireDefault(__webpack_require__(10));

var _mergeOptions = _interopRequireDefault(__webpack_require__(11));

var _bindData = _interopRequireDefault(__webpack_require__(14));

var _calcComputed = _interopRequireDefault(__webpack_require__(15));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultSanOptions = {
  _mc: _mergeClass.default,
  _ms: _mergeStyle.default,
  _l: _loopExpression.default,
  _ex: _util.extend,
  _ocp: _objectComputedPropertirs.default,
  getComponentType: _getComponentType.default,
  $emit: _san.Component.prototype.fire,
  $on: _san.Component.prototype.on,
  $watch: _san.Component.prototype.watch,
  _noop: function _noop() {}
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
  }
};

function define(options) {
  if (options._SanCtor) {
    return options._SanCtor;
  }

  var sanOptions = (0, _util.extend)({
    template: options.__santemplate,
    aNode: options.__sanaNode
  }, defaultSanOptions, (0, _mergeOptions.default)(options));
  var compiledHook = sanOptions.compiled;

  sanOptions.compiled = function () {
    this._calcComputed = _calcComputed.default.bind(this);
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

    initedHook && initedHook.call(this);

    if (this.$style) {
      this.data.merge('$style', this.$style);
    }

    _bindData.default.call(this);
  };

  sanOptions.initData = function () {
    var me = this;
    var defaultProps = {};

    if (options.props) {
      var propKeys = me._propKeys = options._propKeys = options.props ? Array.isArray(options.props) ? options.props : Object.keys(options.props) : [];

      if (!Array.isArray(options.props)) {
        var _loop2 = function _loop2(i, len) {
          var p = propKeys[i];
          var prop = options.props[p];

          if ('default' in prop) {
            defaultProps[p] = typeof prop.default === 'function' ? prop.default() : prop.default;
          }

          (0, _util.def)(me, p, {
            get: function get() {
              return me.data.get(p);
            }
          });
        };

        for (var i = 0, len = propKeys.length; i < len; i++) {
          _loop2(i, len);
        }
      }
    }

    if (options.computed) {
      me._computedKeys = Object.keys(options.computed);

      var _loop3 = function _loop3(_i, _len) {
        var k = me._computedKeys[_i];
        (0, _util.def)(me, k, {
          get: function get() {
            return me.data.get(k);
          }
        });
      };

      for (var _i = 0, _len = me._computedKeys; _i < _len; _i++) {
        _loop3(_i, _len);
      }
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
      prev[key] = prev[(0, _util.hyphenate)(key)] = define(options.components[key]);
      return prev;
    }, {});
  }

  var Component = (0, _san.defineComponent)(sanOptions);
  return options._SanCtor = Component;
}

/***/ }),
/* 4 */
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
/* 5 */
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
/* 6 */
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
/* 7 */
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
/* 8 */
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
/* 9 */
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
/* 10 */
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
          value = san.evalExpr(ref.value, element.scope, owner);

          if (ref && (value === name || (0, _util.camelize)(value) === name)) {
            return nodeType === 4 ? element.el : element.children.map(elementTraversal);
          }

          break;

        case 5:
          ref = element.source.directives.ref;
          value = san.evalExpr(ref.value, element.scope, owner);

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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mergeOptions;

var _util = __webpack_require__(0);

var _constant = __webpack_require__(12);

var _atomGlobalApi = _interopRequireDefault(__webpack_require__(13));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var keys = ['filters', 'watch', 'computed'];

function mergeHook(parentVal, childVal) {
  return childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
}

function mergeOptions(options) {
  var destOptions = {};
  var list = Array.isArray(options.mixins) ? [_atomGlobalApi.default].concat(_toConsumableArray(options.mixins), [options]) : [_atomGlobalApi.default, options];

  for (var i = 0, len = list.length; i < len; i++) {
    var opt = list[i];
    opt.methods && (0, _util.extend)(destOptions, opt.methods);

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

        destOptions[_dk] = function () {
          var _this = this;

          hooks.forEach(function (hook) {
            return hook.call(_this);
          }, this);
        };
      })();
    }
  }

  return destOptions;
}

/***/ }),
/* 12 */
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
  updated: 'updated'
};
exports.lifeCycleMap = lifeCycleMap;
var lifeCycleKeys = Object.keys(lifeCycleMap);
exports.lifeCycleKeys = lifeCycleKeys;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var MATH_METHOD = ['floor', 'ceil', 'round', 'abs', 'max', 'min', 'pow'];
var methods = exports.methods = {};
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

exports.filters = {
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

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

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
var methodsToPatch = ['push', 'pop', 'shift', 'unshift', 'splice'];
methodsToPatch.forEach(function (method) {
  var original = arrayProto[method];
  (0, _util.def)(arrayMethods, method, {
    value: function value() {
      var _ob$context$data;

      var ob = this.__ob__;
      var inserted;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

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

      (_ob$context$data = ob.context.data)[method].apply(_ob$context$data, [ob.expr].concat(args));

      var result = ob.context.data.get(ob.expr);
      observe(result, ob.expr, ob.context);
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
  var keys = this._dataKeys;
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

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _util = __webpack_require__(0);

function _default(key) {
  var computedDeps = this.computedDeps[key];

  if (!computedDeps) {
    computedDeps = this.computedDeps[key] = {};
  }

  var me = this;
  var data = me.data.get();
  var context = {};
  (0, _util.def)(context, '$root', {
    get: function get() {
      return me.$root;
    }
  });
  var keys = Object.keys(data);

  var _loop = function _loop(i) {
    var k = keys[i];
    (0, _util.def)(context, k, {
      get: function get() {
        if (!computedDeps[k]) {
          computedDeps[k] = 1;

          if (me.computed[k] && !me.computedDeps[k]) {
            me._calcComputed(k);
          }

          me.watch(k, function () {
            me._calcComputed(key);
          });
        }

        return me.data.get(k);
      }
    });
  };

  for (var i = 0; i < keys.length; i++) {
    _loop(i);
  }

  this.data.set(key, this.computed[key].call(context));
}

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3V0aWwuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2FuXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvZGVmaW5lLWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcnVudGltZS9vdmVycmlkZS1kYXRhLWdldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcnVudGltZS9tZXJnZS1jbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcnVudGltZS9tZXJnZS1zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcnVudGltZS9sb29wLWV4cHJlc3Npb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvZ2V0LWNvbXBvbmVudC10eXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lL29iamVjdC1jb21wdXRlZC1wcm9wZXJ0aXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lL3JlZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcnVudGltZS9tZXJnZS1vcHRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lL2NvbnN0YW50LmpzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lL2F0b20tZ2xvYmFsLWFwaS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcnVudGltZS9iaW5kLWRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvY2FsYy1jb21wdXRlZC5qcyJdLCJuYW1lcyI6WyJleHRlbmQiLCJPYmplY3QiLCJhc3NpZ24iLCJ0b09iamVjdCIsImFyciIsInJlcyIsImkiLCJsZW5ndGgiLCJfdG9TdHJpbmciLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImlzT2JqZWN0Iiwib2JqIiwiaGFzT3duUHJvcGVydHkiLCJoYXNPd24iLCJrZXkiLCJjYWxsIiwiaXNQbGFpbk9iamVjdCIsImRlZiIsInByb3BlcnR5IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwiY2FjaGVkIiwiZm4iLCJjYWNoZSIsImNyZWF0ZSIsImNhY2hlZEZuIiwic3RyIiwiaGl0IiwiaHlwaGVuYXRlUkUiLCJoeXBoZW5hdGUiLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJjYW1lbGl6ZSIsIl8iLCJjIiwidG9VcHBlckNhc2UiLCJkZWZhdWx0U2FuT3B0aW9ucyIsIl9tYyIsIm1lcmdlQ2xhc3MiLCJfbXMiLCJtZXJnZVN0eWxlIiwiX2wiLCJsb29wRXhwcmVzc2lvbiIsIl9leCIsIl9vY3AiLCJvYmplY3RDb21wdXRlZFByb3BlcnRpZXMiLCJnZXRDb21wb25lbnRUeXBlIiwiJGVtaXQiLCJDb21wb25lbnQiLCJmaXJlIiwiJG9uIiwib24iLCIkd2F0Y2giLCJ3YXRjaCIsIl9ub29wIiwibWVtYmVyTWFwIiwiJGVsIiwiZWwiLCIkY29udGV4dCIsIm93bmVyIiwiJHBhcmVudCIsInBhcmVudENvbXBvbmVudCIsIiRjaGlsZHJlbiIsImNoaWxkcmVuIiwiZmlsdGVyIiwiY2hpbGQiLCJub2RlVHlwZSIsIiRyb290Iiwicm9vdCIsImRlZmluZSIsIm9wdGlvbnMiLCJfU2FuQ3RvciIsInNhbk9wdGlvbnMiLCJ0ZW1wbGF0ZSIsIl9fc2FudGVtcGxhdGUiLCJhTm9kZSIsIl9fc2FuYU5vZGUiLCJjb21waWxlZEhvb2siLCJjb21waWxlZCIsIl9jYWxjQ29tcHV0ZWQiLCJjYWxjQ29tcHV0ZWQiLCJiaW5kIiwicHJvcGVydGllcyIsImtleXMiLCJyZWR1Y2UiLCJwcm9wcyIsImdldCIsIiRvcHRpb25zIiwidmFsdWUiLCJkZWZpbmVQcm9wZXJ0aWVzIiwicmVmcyIsIl9fc2FuUmVmcyIsImluaXRlZEhvb2siLCJpbml0ZWQiLCJtZSIsIiRyZWZzIiwibGVuIiwiciIsIm5hbWUiLCJyZWYiLCIkc3R5bGUiLCJkYXRhIiwibWVyZ2UiLCJiaW5kRGF0YSIsImluaXREYXRhIiwiZGVmYXVsdFByb3BzIiwicHJvcEtleXMiLCJfcHJvcEtleXMiLCJBcnJheSIsImlzQXJyYXkiLCJwIiwicHJvcCIsImRlZmF1bHQiLCJjb21wdXRlZCIsIl9jb21wdXRlZEtleXMiLCJrIiwiX3NyY1NiaW5kRGF0YSIsIl9kYXRhS2V5cyIsImNvbXBvbmVudHMiLCJwcmV2Iiwib3JpZ2luYWxHZXQiLCJEYXRhIiwiZXhwciIsImNhbGxlZSIsInVuZGVmaW5lZCIsInR5cGUiLCJFeHByVHlwZSIsIkFDQ0VTU09SIiwicGF0aHMiLCJmaXJzdCIsImluZGV4T2YiLCJsIiwic3RyaW5nIiwiY2xzIiwic3BsaXQiLCJvYmplY3QiLCJhcnJheSIsImNsYXp6IiwiZWxlbWVudCIsInN0YXRpY0NsYXNzIiwiam9pbiIsInBhcnNlU3R5bGVUZXh0IiwiY3NzVGV4dCIsImxpc3REZWxpbWl0ZXIiLCJwcm9wZXJ0eURlbGltaXRlciIsImZvckVhY2giLCJpdGVtIiwidG1wIiwidHJpbSIsIm5vcm1hbGl6ZVN0eWxlQmluZGluZyIsImJpbmRpbmdTdHlsZSIsInN0YXRpY1N0eWxlIiwic3R5bGUiLCJ2U2hvdyIsImRpc3BsYXkiLCJ0b0FycmF5IiwibiIsImlzTmFOIiwidGFnTmFtZSIsImhvdHNwb3QiLCJpcyIsImlzVmFsdWUiLCJ2IiwiY2hpbGRyZW5UcmF2ZXJzYWwiLCJyZWZUYXJnZXQiLCJlbGVtZW50VHJhdmVyc2FsIiwiZGlyZWN0aXZlcyIsInNhbiIsImV2YWxFeHByIiwic2NvcGUiLCJtYXAiLCJzb3VyY2UiLCJzbG90Q2hpbGRyZW4iLCJtZXJnZUhvb2siLCJwYXJlbnRWYWwiLCJjaGlsZFZhbCIsImNvbmNhdCIsIm1lcmdlT3B0aW9ucyIsImRlc3RPcHRpb25zIiwibGlzdCIsIm1peGlucyIsImF0b21CdWlsZEluTWl4aW4iLCJvcHQiLCJtZXRob2RzIiwiaiIsImxpZmVDeWNsZUtleXMiLCJkayIsImxpZmVDeWNsZU1hcCIsImhvb2tzIiwic2xpY2UiLCJob29rIiwiYmVmb3JlQ3JlYXRlIiwibW91bnRlZCIsImNyZWF0ZWQiLCJiZWZvcmVNb3VudCIsImJlZm9yZURlc3Ryb3kiLCJkZXN0cm95IiwidXBkYXRlZCIsIk1BVEhfTUVUSE9EIiwiZXhwb3J0cyIsImFyZ3MiLCJNYXRoIiwiYXBwbHkiLCJhcnJheV9zbGljZSIsInN0YXJ0IiwiZW5kIiwiYXJyYXlfam9pbiIsInNlcCIsInN0cl9wb3MiLCJtYXRjaCIsIm9iamVjdF9mcmVlemUiLCJmcmVlemUiLCJmaWx0ZXJzIiwianNvbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJsb3dlciIsInVwcGVyIiwiYXJyYXlQcm90byIsImFycmF5TWV0aG9kcyIsIm1ldGhvZHNUb1BhdGNoIiwibWV0aG9kIiwib3JpZ2luYWwiLCJvYiIsIl9fb2JfXyIsImluc2VydGVkIiwib2JzZXJ2ZUFycmF5IiwiY29udGV4dCIsInJlc3VsdCIsIm9ic2VydmUiLCJPYnNlcnZlciIsIl9fcHJvdG9fXyIsIndhbGsiLCJkZWZpbmVSZWFjdGl2ZSIsIml0ZW1zIiwiTlVNQkVSIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZ2V0dGVyIiwic2V0dGVyIiwic2V0Iiwia2V5RXhwciIsIlNUUklORyIsInZhbCIsIm5ld1Byb3BlcnR5IiwibmV3VmFsIiwiZm9yY2UiLCJkZWZhdWx0RXhwciIsImtleUxlbmd0aCIsIl9kYXRhIiwiaXNFeHRlbnNpYmxlIiwiY29tcHV0ZWREZXBzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtR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QUFZLENBQUN2SSxDQUFELENBQWpCLEVBQXNCO0FBQ2xCdUksc0JBQVksQ0FBQ3ZJLENBQUQsQ0FBWixHQUFrQixDQUFsQjs7QUFFQSxjQUFJckIsRUFBRSxDQUFDbUIsUUFBSCxDQUFZRSxDQUFaLEtBQWtCLENBQUNyQixFQUFFLENBQUM0SixZQUFILENBQWdCdkksQ0FBaEIsQ0FBdkIsRUFBMkM7QUFDdkNyQixjQUFFLENBQUNmLGFBQUgsQ0FBaUJvQyxDQUFqQjtBQUNIOztBQUVEckIsWUFBRSxDQUFDekMsS0FBSCxDQUFTOEQsQ0FBVCxFQUFZLFlBQVk7QUFDcEJyQixjQUFFLENBQUNmLGFBQUgsQ0FBaUJsRSxHQUFqQjtBQUNILFdBRkQ7QUFHSDs7QUFFRCxlQUFPaUYsRUFBRSxDQUFDTyxJQUFILENBQVFmLEdBQVIsQ0FBWTZCLENBQVosQ0FBUDtBQUNIO0FBZlcsS0FBaEI7QUFwQnNCOztBQWtCMUIsT0FBSyxJQUFJL0csQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRytFLElBQUksQ0FBQzlFLE1BQXpCLEVBQWlDRCxDQUFDLEVBQWxDLEVBQXNDO0FBQUEsVUFBN0JBLENBQTZCO0FBbUJyQzs7QUFFRCxPQUFLaUcsSUFBTCxDQUFVMEksR0FBVixDQUFjbE8sR0FBZCxFQUFtQixLQUFLb0csUUFBTCxDQUFjcEcsR0FBZCxFQUFtQkMsSUFBbkIsQ0FBd0JxTixPQUF4QixDQUFuQjtBQUNILEMiLCJmaWxlIjoidnVzYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInNhblwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJzYW5cIl0sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGZhY3RvcnkocmVxdWlyZShcInNhblwiKSkgOiBmYWN0b3J5KHJvb3RbXCJzYW5cIl0pO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkod2luZG93LCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX18xX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMik7XG4iLCIvKipcbiAqIEBmaWxlIOS4gOS6m+W3peWFt+WHveaVsFxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbi8qKlxuICogTWl4IHByb3BlcnRpZXMgaW50byB0YXJnZXQgb2JqZWN0LlxuICovXG5leHBvcnQgY29uc3QgZXh0ZW5kID0gT2JqZWN0LmFzc2lnbjtcblxuLyoqXG4gKiBNZXJnZSBhbiBBcnJheSBvZiBPYmplY3RzIGludG8gYSBzaW5nbGUgT2JqZWN0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9PYmplY3QoYXJyKSB7XG4gICAgY29uc3QgcmVzID0ge307XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGFycltpXSkge1xuICAgICAgICAgICAgZXh0ZW5kKHJlcywgYXJyW2ldKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufVxuXG4vKipcbiAqIEdldCB0aGUgcmF3IHR5cGUgc3RyaW5nIG9mIGEgdmFsdWUsIGUuZy4sIFtvYmplY3QgT2JqZWN0XS5cbiAqL1xuZXhwb3J0IGNvbnN0IF90b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogUXVpY2sgb2JqZWN0IGNoZWNrIC0gdGhpcyBpcyBwcmltYXJpbHkgdXNlZCB0byB0ZWxsXG4gKiBPYmplY3RzIGZyb20gcHJpbWl0aXZlIHZhbHVlcyB3aGVuIHdlIGtub3cgdGhlIHZhbHVlXG4gKiBpcyBhIEpTT04tY29tcGxpYW50IHR5cGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdChvYmopIHtcbiAgICByZXR1cm4gb2JqICE9PSBudWxsICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgYW4gb2JqZWN0IGhhcyB0aGUgcHJvcGVydHkuXG4gKi9cbmNvbnN0IGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbmV4cG9ydCBmdW5jdGlvbiBoYXNPd24ob2JqLCBrZXkpIHtcbiAgICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSk7XG59XG5cbi8qKlxuICogU3RyaWN0IG9iamVjdCB0eXBlIGNoZWNrLiBPbmx5IHJldHVybnMgdHJ1ZVxuICogZm9yIHBsYWluIEphdmFTY3JpcHQgb2JqZWN0cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzUGxhaW5PYmplY3Qob2JqKSB7XG4gICAgcmV0dXJuIF90b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IE9iamVjdF0nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVmKG9iaiwga2V5LCBwcm9wZXJ0eSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgZXh0ZW5kKHtcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0sIHByb3BlcnR5KSk7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgY2FjaGVkIHZlcnNpb24gb2YgYSBwdXJlIGZ1bmN0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2FjaGVkKGZuKSB7XG4gICAgY29uc3QgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHJldHVybiBmdW5jdGlvbiBjYWNoZWRGbihzdHIpIHtcbiAgICAgICAgY29uc3QgaGl0ID0gY2FjaGVbc3RyXTtcbiAgICAgICAgcmV0dXJuIGhpdCB8fCAoY2FjaGVbc3RyXSA9IGZuKHN0cikpO1xuICAgIH07XG59XG5cbi8qKlxuICogSHlwaGVuYXRlIGEgY2FtZWxDYXNlIHN0cmluZy5cbiAqL1xuY29uc3QgaHlwaGVuYXRlUkUgPSAvKFteLV0pKFtBLVpdKS9nO1xuZXhwb3J0IGNvbnN0IGh5cGhlbmF0ZSA9IGNhY2hlZCgoc3RyKSA9PiB7XG4gICAgcmV0dXJuIHN0clxuICAgICAgICAucmVwbGFjZShoeXBoZW5hdGVSRSwgJyQxLSQyJylcbiAgICAgICAgLnJlcGxhY2UoaHlwaGVuYXRlUkUsICckMS0kMicpXG4gICAgICAgIC50b0xvd2VyQ2FzZSgpO1xufSk7XG5cbmV4cG9ydCBjb25zdCBjYW1lbGl6ZSA9IHN0ciA9PiBzdHIucmVwbGFjZSgvLShcXHcpL2csIChfLCBjKSA9PiAoYyA/IGMudG9VcHBlckNhc2UoKSA6ICcnKSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzFfXzsiLCIvKipcbiAqIEBmaWxlIGVudHJ5XG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuZXhwb3J0IHtkZWZhdWx0IGFzIGRlZmluZUNvbXBvbmVudH0gZnJvbSAnLi9kZWZpbmUtY29tcG9uZW50JztcbiIsIi8qKlxuICogQGZpbGUgY29tcG9uZW50XG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0ICcuL292ZXJyaWRlLWRhdGEtZ2V0JztcblxuaW1wb3J0IHtkZWZpbmVDb21wb25lbnQsIGluaGVyaXRzLCBDb21wb25lbnR9IGZyb20gJ3Nhbic7XG5pbXBvcnQge2V4dGVuZCwgaHlwaGVuYXRlLCBkZWZ9IGZyb20gJy4uL3NoYXJlZC91dGlsJztcbmltcG9ydCBtZXJnZUNsYXNzIGZyb20gJy4vbWVyZ2UtY2xhc3MnO1xuaW1wb3J0IG1lcmdlU3R5bGUgZnJvbSAnLi9tZXJnZS1zdHlsZSc7XG5pbXBvcnQgbG9vcEV4cHJlc3Npb24gZnJvbSAnLi9sb29wLWV4cHJlc3Npb24nO1xuaW1wb3J0IGdldENvbXBvbmVudFR5cGUgZnJvbSAnLi9nZXQtY29tcG9uZW50LXR5cGUnO1xuaW1wb3J0IG9iamVjdENvbXB1dGVkUHJvcGVydGllcyBmcm9tICcuL29iamVjdC1jb21wdXRlZC1wcm9wZXJ0aXJzJztcbmltcG9ydCByZWYgZnJvbSAnLi9yZWYnO1xuaW1wb3J0IG1lcmdlT3B0aW9ucyBmcm9tICcuL21lcmdlLW9wdGlvbnMnO1xuaW1wb3J0IGJpbmREYXRhIGZyb20gJy4vYmluZC1kYXRhJztcbmltcG9ydCBjYWxjQ29tcHV0ZWQgZnJvbSAnLi9jYWxjLWNvbXB1dGVkJztcblxuLyogZXNsaW50LWRpc2FibGUgZmVjcy1jYW1lbGNhc2UgKi9cbmNvbnN0IGRlZmF1bHRTYW5PcHRpb25zID0ge1xuICAgIF9tYzogbWVyZ2VDbGFzcyxcbiAgICBfbXM6IG1lcmdlU3R5bGUsXG4gICAgX2w6IGxvb3BFeHByZXNzaW9uLFxuICAgIF9leDogZXh0ZW5kLFxuICAgIF9vY3A6IG9iamVjdENvbXB1dGVkUHJvcGVydGllcyxcbiAgICBnZXRDb21wb25lbnRUeXBlLFxuICAgICRlbWl0OiBDb21wb25lbnQucHJvdG90eXBlLmZpcmUsXG4gICAgJG9uOiBDb21wb25lbnQucHJvdG90eXBlLm9uLFxuICAgICR3YXRjaDogQ29tcG9uZW50LnByb3RvdHlwZS53YXRjaCxcbiAgICBfbm9vcDogZnVuY3Rpb24gKCkge31cbn07XG4vKiBlc2xpbnQtZW5hYmxlIGZlY3MtY2FtZWxjYXNlICovXG5cbmNvbnN0IG1lbWJlck1hcCA9IHtcbiAgICAkZWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsO1xuICAgIH0sXG4gICAgJGNvbnRleHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm93bmVyO1xuICAgIH0sXG4gICAgJHBhcmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50Q29tcG9uZW50O1xuICAgIH0sXG4gICAgJGNoaWxkcmVuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5maWx0ZXIoY2hpbGQgPT4gY2hpbGQubm9kZVR5cGUgPT09IDUpO1xuICAgIH0sXG4gICAgJHJvb3QoKSB7XG4gICAgICAgIGxldCByb290ID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMucGFyZW50Q29tcG9uZW50KSB7XG4gICAgICAgICAgICB3aGlsZSAocm9vdC5wYXJlbnRDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICByb290ID0gcm9vdC5wYXJlbnRDb21wb25lbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcm9vdDtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWZpbmUob3B0aW9ucykge1xuXG4gICAgaWYgKG9wdGlvbnMuX1NhbkN0b3IpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnMuX1NhbkN0b3I7XG4gICAgfVxuXG4gICAgY29uc3Qgc2FuT3B0aW9ucyA9IGV4dGVuZCh7XG4gICAgICAgIHRlbXBsYXRlOiBvcHRpb25zLl9fc2FudGVtcGxhdGUsXG4gICAgICAgIGFOb2RlOiBvcHRpb25zLl9fc2FuYU5vZGUsXG4gICAgfSwgZGVmYXVsdFNhbk9wdGlvbnMsIG1lcmdlT3B0aW9ucyhvcHRpb25zKSk7XG5cbiAgICBjb25zdCBjb21waWxlZEhvb2sgPSBzYW5PcHRpb25zLmNvbXBpbGVkO1xuICAgIHNhbk9wdGlvbnMuY29tcGlsZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX2NhbGNDb21wdXRlZCA9IGNhbGNDb21wdXRlZC5iaW5kKHRoaXMpO1xuICAgICAgICBjb21waWxlZEhvb2sgJiYgY29tcGlsZWRIb29rLmNhbGwodGhpcyk7XG5cbiAgICAgICAgY29uc3QgcHJvcGVydGllcyA9IE9iamVjdFxuICAgICAgICAgICAgLmtleXMobWVtYmVyTWFwKVxuICAgICAgICAgICAgLnJlZHVjZSgocHJvcHMsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIHByb3BzW2tleV0gPSB7XG4gICAgICAgICAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtZW1iZXJNYXBba2V5XS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvcHM7XG4gICAgICAgICAgICB9LCB7fSk7XG5cbiAgICAgICAgcHJvcGVydGllcy4kb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHZhbHVlOiBvcHRpb25zXG4gICAgICAgIH07XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywgcHJvcGVydGllcyk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlZnMgPSBvcHRpb25zLl9fc2FuUmVmcztcbiAgICBjb25zdCBpbml0ZWRIb29rID0gc2FuT3B0aW9ucy5pbml0ZWQ7XG4gICAgc2FuT3B0aW9ucy5pbml0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IG1lID0gdGhpcztcbiAgICAgICAgdGhpcy4kcmVmcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbiAgICAgICAgaWYgKHJlZnMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSByZWZzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgciA9IHJlZnNbaV07XG4gICAgICAgICAgICAgICAgZGVmKG1lLiRyZWZzLCByLm5hbWUsIHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHIucm9vdCA/IG1lLmVsIDogbWUucmVmKHIubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIG92ZXJ3cml0ZSBzYW4gY29tcG9uZW50IGFwaSBmb3Igc3VwcG9ydCB2LWZvciArIHJlZlxuICAgICAgICAgICAgbWUucmVmID0gcmVmO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5pdGVkSG9vayAmJiBpbml0ZWRIb29rLmNhbGwodGhpcyk7XG5cbiAgICAgICAgLy8gbWVyZ2UgY3NzIG1vZHVsZXNcbiAgICAgICAgaWYgKHRoaXMuJHN0eWxlKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGEubWVyZ2UoJyRzdHlsZScsIHRoaXMuJHN0eWxlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJpbmREYXRhLmNhbGwodGhpcyk7XG4gICAgfTtcblxuICAgIHNhbk9wdGlvbnMuaW5pdERhdGEgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgY29uc3QgbWUgPSB0aGlzO1xuXG4gICAgICAgIGNvbnN0IGRlZmF1bHRQcm9wcyA9IHt9O1xuICAgICAgICBpZiAob3B0aW9ucy5wcm9wcykge1xuICAgICAgICAgICAgY29uc3QgcHJvcEtleXMgPSBtZS5fcHJvcEtleXMgPSBvcHRpb25zLl9wcm9wS2V5cyA9IG9wdGlvbnMucHJvcHNcbiAgICAgICAgICAgICAgICA/IChBcnJheS5pc0FycmF5KG9wdGlvbnMucHJvcHMpID8gb3B0aW9ucy5wcm9wcyA6IE9iamVjdC5rZXlzKG9wdGlvbnMucHJvcHMpKVxuICAgICAgICAgICAgICAgIDogW107XG5cbiAgICAgICAgICAgIC8vIOm7mOiupOWxnuaAp1xuICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG9wdGlvbnMucHJvcHMpKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHByb3BLZXlzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHAgPSBwcm9wS2V5c1tpXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcCA9IG9wdGlvbnMucHJvcHNbcF07XG4gICAgICAgICAgICAgICAgICAgIGlmICgnZGVmYXVsdCcgaW4gcHJvcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFByb3BzW3BdID0gdHlwZW9mIHByb3AuZGVmYXVsdCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gcHJvcC5kZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHByb3AuZGVmYXVsdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBkZWYobWUsIHAsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWUuZGF0YS5nZXQocCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLmNvbXB1dGVkKSB7XG4gICAgICAgICAgICBtZS5fY29tcHV0ZWRLZXlzID0gT2JqZWN0LmtleXMob3B0aW9ucy5jb21wdXRlZCk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gbWUuX2NvbXB1dGVkS2V5czsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgayA9IG1lLl9jb21wdXRlZEtleXNbaV07XG4gICAgICAgICAgICAgICAgZGVmKG1lLCBrLCB7XG4gICAgICAgICAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtZS5kYXRhLmdldChrKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbWUuX2NvbXB1dGVkS2V5cyA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IHR5cGVvZiBvcHRpb25zLmRhdGEgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgID8gb3B0aW9ucy5kYXRhLmNhbGwoZXh0ZW5kKHt9LCBkZWZhdWx0UHJvcHMsIHRoaXMuX3NyY1NiaW5kRGF0YSkpXG4gICAgICAgICAgICA6IChvcHRpb25zLmRhdGEgfHwge30pO1xuXG4gICAgICAgIHRoaXMuX2RhdGFLZXlzID0gT2JqZWN0LmtleXMoZGF0YSkgfHwgW107XG5cbiAgICAgICAgcmV0dXJuIGV4dGVuZCh7JHN0eWxlOiB7fX0sIGRlZmF1bHRQcm9wcywgZGF0YSk7XG4gICAgfTtcblxuICAgIGlmIChvcHRpb25zLmNvbXBvbmVudHMpIHtcbiAgICAgICAgc2FuT3B0aW9ucy5jb21wb25lbnRzID0gT2JqZWN0XG4gICAgICAgICAgICAua2V5cyhvcHRpb25zLmNvbXBvbmVudHMpXG4gICAgICAgICAgICAucmVkdWNlKChwcmV2LCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBwcmV2W2tleV0gPSBwcmV2W2h5cGhlbmF0ZShrZXkpXSA9IGRlZmluZShvcHRpb25zLmNvbXBvbmVudHNba2V5XSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICAgICAgICB9LCB7fSk7XG4gICAgfVxuXG4gICAgY29uc3QgQ29tcG9uZW50ID0gZGVmaW5lQ29tcG9uZW50KHNhbk9wdGlvbnMpO1xuXG4gICAgcmV0dXJuIG9wdGlvbnMuX1NhbkN0b3IgPSBDb21wb25lbnQ7XG59XG5cbiIsIi8qKlxuICogQGZpbGUgb3ZlcnJpZGUgZXZhbCBleHByXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHtEYXRhLCBwYXJzZUV4cHIsIEV4cHJUeXBlLCBldmFsRXhwcn0gZnJvbSAnc2FuJztcblxuY29uc3Qgb3JpZ2luYWxHZXQgPSBEYXRhLnByb3RvdHlwZS5nZXQ7XG5cbkRhdGEucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChleHByLCBjYWxsZWUpIHtcbiAgICBpZiAoZXhwciAmJiB0eXBlb2YgZXhwciAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXhwciA9IHBhcnNlRXhwcihleHByKTtcbiAgICB9XG4gICAgbGV0IHZhbHVlID0gb3JpZ2luYWxHZXQuY2FsbCh0aGlzLCBleHByLCBjYWxsZWUpO1xuICAgIGlmICghZXhwciB8fCB2YWx1ZSAhPT0gdW5kZWZpbmVkIHx8ICF0aGlzLm93bmVyIHx8IGV4cHIudHlwZSAhPT0gRXhwclR5cGUuQUNDRVNTT1IpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBjb25zdCBwYXRocyA9IGV4cHIucGF0aHM7XG4gICAgY29uc3QgZmlyc3QgPSBwYXRoc1swXS52YWx1ZTtcbiAgICBpZiAoXG4gICAgICAgIFtcbiAgICAgICAgICAgIC4uLnRoaXMub3duZXIuX3Byb3BLZXlzLFxuICAgICAgICAgICAgLi4udGhpcy5vd25lci5fZGF0YUtleXMsXG4gICAgICAgICAgICAuLi50aGlzLm93bmVyLl9jb21wdXRlZEtleXNcbiAgICAgICAgXS5pbmRleE9mKGZpcnN0KSA+PSAwXG4gICAgKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgdmFsdWUgPSB0aGlzLm93bmVyW2ZpcnN0XTtcbiAgICBmb3IgKHZhciBpID0gMSwgbCA9IHBhdGhzLmxlbmd0aDsgdmFsdWUgIT0gbnVsbCAmJiBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWVbcGF0aHNbaV0udmFsdWUgfHwgZXZhbEV4cHIocGF0aHNbaV0sIGNhbGxlZSldO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG59O1xuIiwiLyoqXG4gKiBAZmlsZSBtZXJnZSBjbGFzc1xuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmZ1bmN0aW9uIHN0cmluZyhjbHMgPSAnJykge1xuICAgIGlmICghY2xzKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuIGNsc1xuICAgICAgICAuc3BsaXQoJyAnKVxuICAgICAgICAucmVkdWNlKChwcmV2LCBuYW1lKSA9PiB7XG4gICAgICAgICAgICBpZiAoIW5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgICAgICBbbmFtZV06IDFcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sIHt9KTtcbn1cblxuZnVuY3Rpb24gb2JqZWN0KGNscyA9IHt9KSB7XG4gICAgcmV0dXJuIE9iamVjdFxuICAgICAgICAua2V5cyhjbHMpXG4gICAgICAgIC5yZWR1Y2UoKHByZXYsIGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFjbHNba2V5XSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgICAgIC4uLnN0cmluZyhrZXkpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LCB7fSk7XG59XG5cbmZ1bmN0aW9uIGFycmF5KGNscyA9IFtdKSB7XG4gICAgbGV0IGNsYXp6ID0ge307XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGNscy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gY2xzW2ldO1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGNsYXp6ID0ge1xuICAgICAgICAgICAgLi4uY2xhenosXG4gICAgICAgICAgICAuLi4oXG4gICAgICAgICAgICAgICAgdHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgPyBzdHJpbmcoZWxlbWVudClcbiAgICAgICAgICAgICAgICA6IChBcnJheS5pc0FycmF5KGVsZW1lbnQpID8gYXJyYXkoZWxlbWVudCkgOiBvYmplY3QoZWxlbWVudCkpXG4gICAgICAgICAgICApXG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBjbGF6ejtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRpY0NsYXNzID0gJycsIGNscyA9IHt9KSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGFycmF5KFtzdGF0aWNDbGFzcywgY2xzXSkpLmpvaW4oJyAnKTtcbn1cbiIsIi8qKlxuICogQGZpbGUgbWVyZ2Ugc3R5bGVcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQge2NhY2hlZCwgZXh0ZW5kLCB0b09iamVjdH0gZnJvbSAnLi4vc2hhcmVkL3V0aWwnO1xuXG5jb25zdCBwYXJzZVN0eWxlVGV4dCA9IGNhY2hlZChmdW5jdGlvbiAoY3NzVGV4dCkge1xuICAgIGNvbnN0IHJlcyA9IHt9O1xuICAgIGNvbnN0IGxpc3REZWxpbWl0ZXIgPSAvOyg/IVteKF0qXFwpKS9nO1xuICAgIGNvbnN0IHByb3BlcnR5RGVsaW1pdGVyID0gLzooLispLztcbiAgICBjc3NUZXh0LnNwbGl0KGxpc3REZWxpbWl0ZXIpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgIHZhciB0bXAgPSBpdGVtLnNwbGl0KHByb3BlcnR5RGVsaW1pdGVyKTtcbiAgICAgICAgICAgIHRtcC5sZW5ndGggPiAxICYmIChyZXNbdG1wWzBdLnRyaW0oKV0gPSB0bXBbMV0udHJpbSgpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXM7XG59KTtcblxuLy8gbm9ybWFsaXplIHBvc3NpYmxlIGFycmF5IC8gc3RyaW5nIHZhbHVlcyBpbnRvIE9iamVjdFxuZnVuY3Rpb24gbm9ybWFsaXplU3R5bGVCaW5kaW5nKGJpbmRpbmdTdHlsZSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGJpbmRpbmdTdHlsZSkpIHtcbiAgICAgICAgcmV0dXJuIHRvT2JqZWN0KGJpbmRpbmdTdHlsZSk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgYmluZGluZ1N0eWxlID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gcGFyc2VTdHlsZVRleHQoYmluZGluZ1N0eWxlKTtcbiAgICB9XG4gICAgcmV0dXJuIGJpbmRpbmdTdHlsZTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGljU3R5bGUsIHN0eWxlLCB2U2hvdyA9IHRydWUpIHtcbiAgICBzdHlsZSA9IG5vcm1hbGl6ZVN0eWxlQmluZGluZyhzdHlsZSk7XG4gICAgaWYgKCF2U2hvdykge1xuICAgICAgICBzdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgICByZXR1cm4gc3RhdGljU3R5bGVcbiAgICAgICAgPyBleHRlbmQoc3RhdGljU3R5bGUsIHN0eWxlKVxuICAgICAgICA6IHN0eWxlO1xufVxuIiwiLyoqXG4gKiBAZmlsZSBsb29wIGV4cHJlc3Npb25cbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQge2NhY2hlZH0gZnJvbSAnLi4vc2hhcmVkL3V0aWwnO1xuXG5jb25zdCB0b0FycmF5ID0gY2FjaGVkKGZ1bmN0aW9uIChuKSB7XG4gICAgY29uc3QgdmFsdWUgPSBuZXcgQXJyYXkobik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgdmFsdWVbaV0gPSBpICsgMTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICghaXNOYU4odmFsdWUpKSB7XG4gICAgICAgIGNvbnN0IG4gPSArdmFsdWU7XG4gICAgICAgIHZhbHVlID0gdG9BcnJheShuKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuXG4iLCIvKipcbiAqIEBmaWxlIGdldCBjb21wb25lbnQgdHlwZVxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCB7ZXZhbEV4cHJ9IGZyb20gJ3Nhbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChhTm9kZSwgZGF0YSkge1xuICAgIGlmIChhTm9kZS50YWdOYW1lICE9PSAnY29tcG9uZW50JyB8fCBhTm9kZS5ob3RzcG90LnByb3BzLmlzID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50c1thTm9kZS50YWdOYW1lXTtcbiAgICB9XG5cbiAgICBjb25zdCBpcyA9IGFOb2RlLnByb3BzW2FOb2RlLmhvdHNwb3QucHJvcHMuaXNdO1xuICAgIGNvbnN0IGlzVmFsdWUgPSBldmFsRXhwcihpcy5leHByLCBkYXRhKTtcbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnRzW2lzVmFsdWVdO1xufVxuIiwiLyoqXG4gKiBAZmlsZSBvYmplY3QgY29tcHV0ZWQgcHJvcGVydGllcyBtZXJnZVxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwcm9wZXJ0aWVzKSB7XG4gICAgcmV0dXJuIHByb3BlcnRpZXMucmVkdWNlKChwcmV2LCB7aywgdn0pID0+IHtcbiAgICAgICAgcHJldltrXSA9IHY7XG4gICAgICAgIHJldHVybiBwcmV2O1xuICAgIH0sIHt9KTtcbn1cbiIsIi8qKlxuICogQGZpbGUgc2FuIHJlZiByZXdyaXRlXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0ICogYXMgc2FuIGZyb20gJ3Nhbic7XG5pbXBvcnQge2NhbWVsaXplfSBmcm9tICcuLi9zaGFyZWQvdXRpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChuYW1lKSB7XG5cbiAgICBjb25zdCBvd25lciA9IHRoaXM7XG5cbiAgICBmdW5jdGlvbiBjaGlsZHJlblRyYXZlcnNhbChjaGlsZHJlbikge1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGxldCByZWZUYXJnZXQgPSBlbGVtZW50VHJhdmVyc2FsKGNoaWxkcmVuW2ldKTtcbiAgICAgICAgICAgIGlmIChyZWZUYXJnZXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVmVGFyZ2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZWxlbWVudFRyYXZlcnNhbChlbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IG5vZGVUeXBlID0gZWxlbWVudC5ub2RlVHlwZTtcbiAgICAgICAgaWYgKG5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlZlRhcmdldDtcbiAgICAgICAgaWYgKGVsZW1lbnQub3duZXIgPT09IG93bmVyKSB7XG4gICAgICAgICAgICBsZXQgcmVmO1xuICAgICAgICAgICAgbGV0IHZhbHVlO1xuICAgICAgICAgICAgc3dpdGNoIChub2RlVHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIHJlZiA9IGVsZW1lbnQuYU5vZGUuZGlyZWN0aXZlcy5yZWY7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gc2FuLmV2YWxFeHByKHJlZi52YWx1ZSwgZWxlbWVudC5zY29wZSwgb3duZXIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVmICYmICh2YWx1ZSA9PT0gbmFtZSB8fCBjYW1lbGl6ZSh2YWx1ZSkgPT09IG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbm9kZVR5cGUgPT09IDQgPyBlbGVtZW50LmVsIDogZWxlbWVudC5jaGlsZHJlbi5tYXAoZWxlbWVudFRyYXZlcnNhbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgIHJlZiA9IGVsZW1lbnQuc291cmNlLmRpcmVjdGl2ZXMucmVmO1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHNhbi5ldmFsRXhwcihyZWYudmFsdWUsIGVsZW1lbnQuc2NvcGUsIG93bmVyKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlZiAmJiAodmFsdWUgPT09IG5hbWUgfHwgY2FtZWxpemUodmFsdWUpID09PSBuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVmVGFyZ2V0ID0gZWxlbWVudC5zbG90Q2hpbGRyZW4gJiYgY2hpbGRyZW5UcmF2ZXJzYWwoZWxlbWVudC5zbG90Q2hpbGRyZW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlZlRhcmdldCB8fCBjaGlsZHJlblRyYXZlcnNhbChlbGVtZW50LmNoaWxkcmVuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGRyZW5UcmF2ZXJzYWwodGhpcy5jaGlsZHJlbik7XG59O1xuIiwiLyoqXG4gKiBAZmlsZSBtZXJnZSBvcHRpb25zXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHtleHRlbmR9IGZyb20gJy4uL3NoYXJlZC91dGlsJztcbmltcG9ydCB7bGlmZUN5Y2xlS2V5cywgbGlmZUN5Y2xlTWFwfSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCBhdG9tQnVpbGRJbk1peGluIGZyb20gJy4vYXRvbS1nbG9iYWwtYXBpJztcblxuY29uc3Qga2V5cyA9IFtcbiAgICAnZmlsdGVycycsXG4gICAgJ3dhdGNoJyxcbiAgICAnY29tcHV0ZWQnXG5dO1xuXG5mdW5jdGlvbiBtZXJnZUhvb2socGFyZW50VmFsLCBjaGlsZFZhbCkge1xuICAgIHJldHVybiBjaGlsZFZhbFxuICAgICAgICA/IHBhcmVudFZhbFxuICAgICAgICAgICAgPyBwYXJlbnRWYWwuY29uY2F0KGNoaWxkVmFsKVxuICAgICAgICAgICAgOiBBcnJheS5pc0FycmF5KGNoaWxkVmFsKVxuICAgICAgICAgICAgICAgID8gY2hpbGRWYWxcbiAgICAgICAgICAgICAgICA6IFtjaGlsZFZhbF1cbiAgICAgICAgICAgIDogcGFyZW50VmFsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZXJnZU9wdGlvbnMob3B0aW9ucykge1xuICAgIGNvbnN0IGRlc3RPcHRpb25zID0ge307XG4gICAgY29uc3QgbGlzdCA9IEFycmF5LmlzQXJyYXkob3B0aW9ucy5taXhpbnMpXG4gICAgICAgID8gW2F0b21CdWlsZEluTWl4aW4sIC4uLm9wdGlvbnMubWl4aW5zLCBvcHRpb25zXVxuICAgICAgICA6IFthdG9tQnVpbGRJbk1peGluLCBvcHRpb25zXTtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gbGlzdC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBjb25zdCBvcHQgPSBsaXN0W2ldO1xuICAgICAgICBvcHQubWV0aG9kcyAmJiBleHRlbmQoZGVzdE9wdGlvbnMsIG9wdC5tZXRob2RzKTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBrZXlzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCBrID0ga2V5c1tqXTtcbiAgICAgICAgICAgIGlmIChvcHRba10pIHtcbiAgICAgICAgICAgICAgICBkZXN0T3B0aW9uc1trXSA9IGV4dGVuZChkZXN0T3B0aW9uc1trXSB8fCB7fSwgb3B0W2tdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxpZmVDeWNsZUtleXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGsgPSBsaWZlQ3ljbGVLZXlzW2pdO1xuICAgICAgICAgICAgY29uc3QgZGsgPSBsaWZlQ3ljbGVNYXBba107XG4gICAgICAgICAgICBpZiAob3B0W2tdKSB7XG4gICAgICAgICAgICAgICAgZGVzdE9wdGlvbnNbZGtdID0gbWVyZ2VIb29rKGRlc3RPcHRpb25zW2RrXSB8fCBbXSwgb3B0W2tdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxpZmVDeWNsZUtleXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgY29uc3QgayA9IGxpZmVDeWNsZUtleXNbal07XG4gICAgICAgIGNvbnN0IGRrID0gbGlmZUN5Y2xlTWFwW2tdO1xuICAgICAgICBpZiAoZGVzdE9wdGlvbnNbZGtdKSB7XG4gICAgICAgICAgICBjb25zdCBob29rcyA9IGRlc3RPcHRpb25zW2RrXS5zbGljZSgpO1xuICAgICAgICAgICAgZGVzdE9wdGlvbnNbZGtdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGhvb2tzLmZvckVhY2goaG9vayA9PiBob29rLmNhbGwodGhpcyksIHRoaXMpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGVzdE9wdGlvbnM7XG59XG4iLCIvKipcbiAqIEBmaWxlIGNvbnN0YW50c1xuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmV4cG9ydCBjb25zdCBsaWZlQ3ljbGVNYXAgPSB7XG4gICAgYmVmb3JlQ3JlYXRlOiAnY29tcGlsZWQnLFxuICAgIG1vdW50ZWQ6ICdhdHRhY2hlZCcsXG4gICAgY3JlYXRlZDogJ2luaXRlZCcsXG4gICAgYmVmb3JlTW91bnQ6ICdjcmVhdGVkJyxcbiAgICBiZWZvcmVEZXN0cm95OiAnZGV0YWNoZWQnLFxuICAgIGRlc3Ryb3k6ICdkaXNwb3NlZCcsXG4gICAgdXBkYXRlZDogJ3VwZGF0ZWQnXG4gICAgLy8gYmVmb3JlVXBkYXRlOiAndXBkYXRlZCdcbn07XG5cbmV4cG9ydCBjb25zdCBsaWZlQ3ljbGVLZXlzID0gT2JqZWN0LmtleXMobGlmZUN5Y2xlTWFwKTtcbiIsIi8qKlxuICogQGZpbGUg5YWo5bGA55Sf5pWI55qE5Ye95pWwXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuY29uc3QgTUFUSF9NRVRIT0QgPSBbXG4gICAgJ2Zsb29yJywgJ2NlaWwnLCAncm91bmQnLFxuICAgICdhYnMnLCAnbWF4JywgJ21pbicsICdwb3cnXG5dO1xuXG5jb25zdCBtZXRob2RzID0gZXhwb3J0cy5tZXRob2RzID0ge307XG5cbk1BVEhfTUVUSE9ELmZvckVhY2gobmFtZSA9PiB7XG4gICAgbWV0aG9kc1tgbWF0aF8ke25hbWV9YF0gPSBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICByZXR1cm4gTWF0aFtuYW1lXS5hcHBseShNYXRoLCBhcmdzKTtcbiAgICB9O1xufSk7XG5cbm1ldGhvZHMuYXJyYXlfc2xpY2UgPSBmdW5jdGlvbiAoYXJyLCBzdGFydCwgbGVuKSB7XG4gICAgdmFyIGVuZCA9IGxlbiA9PSBudWxsID8gdm9pZCAwIDogKGxlbiA+PSAwID8gKHN0YXJ0ICsgbGVuKSA6IChhcnIubGVuZ3RoICsgbGVuKSk7XG4gICAgcmV0dXJuIGFyci5zbGljZShzdGFydCwgZW5kKTtcbn07XG5cbm1ldGhvZHMuYXJyYXlfam9pbiA9IGZ1bmN0aW9uIChhcnIsIHNlcCkge1xuICAgIHJldHVybiBhcnIuam9pbihzZXApO1xufTtcblxubWV0aG9kcy5zdHJfcG9zID0gZnVuY3Rpb24gKHN0ciwgbWF0Y2gpIHtcbiAgICByZXR1cm4gc3RyLmluZGV4T2YobWF0Y2gpO1xufTtcblxubWV0aG9kcy5vYmplY3RfZnJlZXplID0gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBPYmplY3QuZnJlZXplKG9iaik7XG59O1xuXG5leHBvcnRzLmZpbHRlcnMgPSB7XG4gICAganNvbihvYmopIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGpzb24pO1xuICAgIH0sXG4gICAgbG93ZXIoc3RyKSB7XG4gICAgICAgIHJldHVybiBzdHIudG9Mb3dlckNhc2UoKTtcbiAgICB9LFxuICAgIHVwcGVyKHN0cikge1xuICAgICAgICByZXR1cm4gc3RyLnRvVXBwZXJDYXNlKCk7XG4gICAgfVxufTtcbiIsIi8qKlxuICogQGZpbGUg5pWw5o2u57uR5a6aXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHtpc09iamVjdCwgaGFzT3duLCBpc1BsYWluT2JqZWN0LCBleHRlbmQsIGRlZn0gZnJvbSAnLi4vc2hhcmVkL3V0aWwnO1xuaW1wb3J0IHtFeHByVHlwZX0gZnJvbSAnc2FuJztcblxuY29uc3QgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcbmNvbnN0IGFycmF5TWV0aG9kcyA9IE9iamVjdC5jcmVhdGUoYXJyYXlQcm90byk7XG5cbmNvbnN0IG1ldGhvZHNUb1BhdGNoID0gW1xuICAgICdwdXNoJyxcbiAgICAncG9wJyxcbiAgICAnc2hpZnQnLFxuICAgICd1bnNoaWZ0JyxcbiAgICAnc3BsaWNlJ1xuICAgIC8vICdzb3J0JyxcbiAgICAvLyAncmV2ZXJzZSdcbl07XG5cbi8qKlxuICogSW50ZXJjZXB0IG11dGF0aW5nIG1ldGhvZHMgYW5kIGVtaXQgZXZlbnRzXG4gKi9cbm1ldGhvZHNUb1BhdGNoLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgIC8vIGNhY2hlIG9yaWdpbmFsIG1ldGhvZFxuICAgIGNvbnN0IG9yaWdpbmFsID0gYXJyYXlQcm90b1ttZXRob2RdXG4gICAgZGVmKGFycmF5TWV0aG9kcywgbWV0aG9kLCB7XG4gICAgICAgIHZhbHVlKC4uLmFyZ3MpIHtcbiAgICAgICAgICAgIGNvbnN0IG9iID0gdGhpcy5fX29iX187XG4gICAgICAgICAgICBsZXQgaW5zZXJ0ZWQ7XG4gICAgICAgICAgICBzd2l0Y2ggKG1ldGhvZCkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3B1c2gnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ3Vuc2hpZnQnOlxuICAgICAgICAgICAgICAgICAgICBpbnNlcnRlZCA9IGFyZ3M7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3NwbGljZSc6XG4gICAgICAgICAgICAgICAgICAgIGluc2VydGVkID0gYXJncy5zbGljZSgyKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaW5zZXJ0ZWQpIHtcbiAgICAgICAgICAgICAgICBvYi5vYnNlcnZlQXJyYXkoaW5zZXJ0ZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb2IuY29udGV4dC5kYXRhW21ldGhvZF0ob2IuZXhwciwgLi4uYXJncyk7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBvYi5jb250ZXh0LmRhdGEuZ2V0KG9iLmV4cHIpO1xuICAgICAgICAgICAgb2JzZXJ2ZShyZXN1bHQsIG9iLmV4cHIsIG9iLmNvbnRleHQpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgIH0pXG59KTtcblxuY2xhc3MgT2JzZXJ2ZXIge1xuXG4gICAgY29uc3RydWN0b3IodmFsdWUsIGV4cHIsIGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5leHByID0gZXhwcjtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgZGVmKHZhbHVlLCAnX19vYl9fJywge1xuICAgICAgICAgICAgdmFsdWU6IHRoaXNcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgdmFsdWUuX19wcm90b19fID0gYXJyYXlNZXRob2RzO1xuICAgICAgICAgICAgdGhpcy5vYnNlcnZlQXJyYXkodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5rZXlzID0gT2JqZWN0LmtleXModmFsdWUpIHx8IFtdO1xuICAgICAgICAgICAgdGhpcy53YWxrKHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdhbGsgdGhyb3VnaCBhbGwgcHJvcGVydGllcyBhbmQgY29udmVydCB0aGVtIGludG9cbiAgICAgKiBnZXR0ZXIvc2V0dGVycy4gVGhpcyBtZXRob2Qgc2hvdWxkIG9ubHkgYmUgY2FsbGVkIHdoZW5cbiAgICAgKiB2YWx1ZSB0eXBlIGlzIE9iamVjdC5cbiAgICAgKi9cbiAgICB3YWxrKG9iaikge1xuICAgICAgICBjb25zdCBrZXlzID0gdGhpcy5rZXlzO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGRlZmluZVJlYWN0aXZlKG9iaiwga2V5c1tpXSwgdGhpcy5leHByLCB0aGlzLmNvbnRleHQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT2JzZXJ2ZSBhIGxpc3Qgb2YgQXJyYXkgaXRlbXMuXG4gICAgICovXG4gICAgb2JzZXJ2ZUFycmF5KGl0ZW1zKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gaXRlbXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBvYnNlcnZlKGl0ZW1zW2ldLCBleHRlbmQoe30sIHRoaXMuZXhwciwge1xuICAgICAgICAgICAgICAgIHBhdGhzOiBbLi4udGhpcy5leHByLnBhdGhzLCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IEV4cHJUeXBlLk5VTUJFUixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGlcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSksIHRoaXMuY29udGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRlZmluZVJlYWN0aXZlKG9iaiwga2V5LCBleHByLCBjb250ZXh0KSB7XG5cbiAgICBjb25zdCBwcm9wZXJ0eSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpO1xuICAgIGlmIChwcm9wZXJ0eSAmJiBwcm9wZXJ0eS5jb25maWd1cmFibGUgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBjYXRlciBmb3IgcHJlLWRlZmluZWQgZ2V0dGVyL3NldHRlcnNcbiAgICBjb25zdCBnZXR0ZXIgPSBwcm9wZXJ0eSAmJiBwcm9wZXJ0eS5nZXQ7XG4gICAgY29uc3Qgc2V0dGVyID0gcHJvcGVydHkgJiYgcHJvcGVydHkuc2V0O1xuXG4gICAgY29uc3Qga2V5RXhwciA9IHtcbiAgICAgICAgdHlwZTogRXhwclR5cGUuQUNDRVNTT1IsXG4gICAgICAgIHBhdGhzOiBbLi4uZXhwci5wYXRocywge1xuICAgICAgICAgICAgdHlwZTogRXhwclR5cGUuU1RSSU5HLFxuICAgICAgICAgICAgdmFsdWU6IGtleVxuICAgICAgICB9XVxuICAgIH07XG5cbiAgICBsZXQgdmFsID0gb2JqW2tleV07XG4gICAgb2JzZXJ2ZSh2YWwsIGtleUV4cHIsIGNvbnRleHQpO1xuICAgIGNvbnN0IG5ld1Byb3BlcnR5ID0ge1xuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIHNldChuZXdWYWwpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZ2V0dGVyID8gZ2V0dGVyLmNhbGwob2JqKSA6IHZhbDtcbiAgICAgICAgICAgIGlmIChuZXdWYWwgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGdldHRlciAmJiAhc2V0dGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNldHRlcikge1xuICAgICAgICAgICAgICAgIHNldHRlci5jYWxsKG9iaiwgbmV3VmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhbCA9IG5ld1ZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9ic2VydmUobmV3VmFsLCBrZXlFeHByLCBjb250ZXh0KTtcbiAgICAgICAgICAgIGNvbnRleHQuZGF0YS5zZXQoa2V5RXhwciwgbmV3VmFsLCB7Zm9yY2U6IHRydWV9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBnZXR0ZXIgPyBnZXR0ZXIuY2FsbChvYmopIDogdmFsO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBkZWYob2JqLCBrZXksIG5ld1Byb3BlcnR5KTtcbn1cblxuY29uc3QgZGVmYXVsdEV4cHIgPSB7XG4gICAgdHlwZTogRXhwclR5cGUuQUNDRVNTT1IsXG4gICAgcGF0aHM6IFtdXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZXhwciA9IGV4dGVuZCh7fSwgZGVmYXVsdEV4cHIpO1xuICAgIGNvbnN0IGtleXMgPSB0aGlzLl9kYXRhS2V5cztcbiAgICBjb25zdCBrZXlMZW5ndGggPSBrZXlzLmxlbmd0aDtcblxuICAgIG9ic2VydmUodGhpcy5kYXRhLmdldCgpLCBleHByLCB0aGlzKTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzO1xuXG4gICAgdGhpcy5fZGF0YSA9IHRoaXMuZGF0YS5nZXQoKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5TGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgZGVmKGNvbnRleHQsIGtleSwge1xuICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb250ZXh0Ll9kYXRhW2tleV07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0KG5ld1ZhbCkge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuX2RhdGFba2V5XSA9IG5ld1ZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5kYXRhLm93bmVyID0gdGhpcztcbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZSh2YWx1ZSwgZXhwciwgY29udGV4dCkge1xuICAgIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IG9iO1xuICAgIGlmIChoYXNPd24odmFsdWUsICdfX29iX18nKSAmJiB2YWx1ZS5fX29iX18gaW5zdGFuY2VvZiBPYnNlcnZlcikge1xuICAgICAgICBvYiA9IHZhbHVlLl9fb2JfX1xuICAgIH1cbiAgICBlbHNlIGlmIChcbiAgICAgICAgKEFycmF5LmlzQXJyYXkodmFsdWUpIHx8IGlzUGxhaW5PYmplY3QodmFsdWUpKVxuICAgICAgICAmJiBPYmplY3QuaXNFeHRlbnNpYmxlKHZhbHVlKVxuICAgICkge1xuICAgICAgICBvYiA9IG5ldyBPYnNlcnZlcih2YWx1ZSwgZXhwciwgY29udGV4dCk7XG4gICAgfVxuICAgIHJldHVybiBvYjtcbn1cbiIsIi8qKlxuICogQGZpbGUg6KaG55uWIHNhbiDljp/nlJ/nmoQgX2NhbGNDb21wdXRlZFxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCB7ZGVmfSBmcm9tICcuLi9zaGFyZWQvdXRpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChrZXkpIHtcbiAgICBsZXQgY29tcHV0ZWREZXBzID0gdGhpcy5jb21wdXRlZERlcHNba2V5XTtcbiAgICBpZiAoIWNvbXB1dGVkRGVwcykge1xuICAgICAgICBjb21wdXRlZERlcHMgPSB0aGlzLmNvbXB1dGVkRGVwc1trZXldID0ge307XG4gICAgfVxuXG4gICAgY29uc3QgbWUgPSB0aGlzO1xuICAgIGNvbnN0IGRhdGEgPSBtZS5kYXRhLmdldCgpO1xuICAgIGNvbnN0IGNvbnRleHQgPSB7fTtcblxuICAgIGRlZihjb250ZXh0LCAnJHJvb3QnLCB7XG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiBtZS4kcm9vdDtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGRhdGEpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGsgPSBrZXlzW2ldO1xuICAgICAgICBkZWYoY29udGV4dCwgaywge1xuICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIGlmICghY29tcHV0ZWREZXBzW2tdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXB1dGVkRGVwc1trXSA9IDE7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lLmNvbXB1dGVkW2tdICYmICFtZS5jb21wdXRlZERlcHNba10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLl9jYWxjQ29tcHV0ZWQoayk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBtZS53YXRjaChrLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZS5fY2FsY0NvbXB1dGVkKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBtZS5kYXRhLmdldChrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5kYXRhLnNldChrZXksIHRoaXMuY29tcHV0ZWRba2V5XS5jYWxsKGNvbnRleHQpKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=