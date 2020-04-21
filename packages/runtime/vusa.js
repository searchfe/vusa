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
  return Component;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3V0aWwuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2FuXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvZGVmaW5lLWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcnVudGltZS9vdmVycmlkZS1kYXRhLWdldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcnVudGltZS9tZXJnZS1jbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcnVudGltZS9tZXJnZS1zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcnVudGltZS9sb29wLWV4cHJlc3Npb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvZ2V0LWNvbXBvbmVudC10eXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lL29iamVjdC1jb21wdXRlZC1wcm9wZXJ0aXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lL3JlZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcnVudGltZS9tZXJnZS1vcHRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lL2NvbnN0YW50LmpzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lL2F0b20tZ2xvYmFsLWFwaS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcnVudGltZS9iaW5kLWRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvY2FsYy1jb21wdXRlZC5qcyJdLCJuYW1lcyI6WyJleHRlbmQiLCJPYmplY3QiLCJhc3NpZ24iLCJ0b09iamVjdCIsImFyciIsInJlcyIsImkiLCJsZW5ndGgiLCJfdG9TdHJpbmciLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImlzT2JqZWN0Iiwib2JqIiwiaGFzT3duUHJvcGVydHkiLCJoYXNPd24iLCJrZXkiLCJjYWxsIiwiaXNQbGFpbk9iamVjdCIsImRlZiIsInByb3BlcnR5IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwiY2FjaGVkIiwiZm4iLCJjYWNoZSIsImNyZWF0ZSIsImNhY2hlZEZuIiwic3RyIiwiaGl0IiwiaHlwaGVuYXRlUkUiLCJoeXBoZW5hdGUiLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJjYW1lbGl6ZSIsIl8iLCJjIiwidG9VcHBlckNhc2UiLCJkZWZhdWx0U2FuT3B0aW9ucyIsIl9tYyIsIm1lcmdlQ2xhc3MiLCJfbXMiLCJtZXJnZVN0eWxlIiwiX2wiLCJsb29wRXhwcmVzc2lvbiIsIl9leCIsIl9vY3AiLCJvYmplY3RDb21wdXRlZFByb3BlcnRpZXMiLCJnZXRDb21wb25lbnRUeXBlIiwiJGVtaXQiLCJDb21wb25lbnQiLCJmaXJlIiwiJG9uIiwib24iLCIkd2F0Y2giLCJ3YXRjaCIsIl9ub29wIiwibWVtYmVyTWFwIiwiJGVsIiwiZWwiLCIkY29udGV4dCIsIm93bmVyIiwiJHBhcmVudCIsInBhcmVudENvbXBvbmVudCIsIiRjaGlsZHJlbiIsImNoaWxkcmVuIiwiZmlsdGVyIiwiY2hpbGQiLCJub2RlVHlwZSIsIiRyb290Iiwicm9vdCIsImRlZmluZSIsIm9wdGlvbnMiLCJzYW5PcHRpb25zIiwidGVtcGxhdGUiLCJfX3NhbnRlbXBsYXRlIiwiYU5vZGUiLCJfX3NhbmFOb2RlIiwiY29tcGlsZWRIb29rIiwiY29tcGlsZWQiLCJfY2FsY0NvbXB1dGVkIiwiY2FsY0NvbXB1dGVkIiwiYmluZCIsInByb3BlcnRpZXMiLCJrZXlzIiwicmVkdWNlIiwicHJvcHMiLCJnZXQiLCIkb3B0aW9ucyIsInZhbHVlIiwiZGVmaW5lUHJvcGVydGllcyIsInJlZnMiLCJfX3NhblJlZnMiLCJpbml0ZWRIb29rIiwiaW5pdGVkIiwibWUiLCIkcmVmcyIsImxlbiIsInIiLCJuYW1lIiwicmVmIiwiJHN0eWxlIiwiZGF0YSIsIm1lcmdlIiwiYmluZERhdGEiLCJpbml0RGF0YSIsImRlZmF1bHRQcm9wcyIsInByb3BLZXlzIiwiX3Byb3BLZXlzIiwiQXJyYXkiLCJpc0FycmF5IiwicCIsInByb3AiLCJkZWZhdWx0IiwiY29tcHV0ZWQiLCJfY29tcHV0ZWRLZXlzIiwiayIsIl9zcmNTYmluZERhdGEiLCJfZGF0YUtleXMiLCJjb21wb25lbnRzIiwicHJldiIsIm9yaWdpbmFsR2V0IiwiRGF0YSIsImV4cHIiLCJjYWxsZWUiLCJ1bmRlZmluZWQiLCJ0eXBlIiwiRXhwclR5cGUiLCJBQ0NFU1NPUiIsInBhdGhzIiwiZmlyc3QiLCJpbmRleE9mIiwibCIsInN0cmluZyIsImNscyIsInNwbGl0Iiwib2JqZWN0IiwiYXJyYXkiLCJjbGF6eiIsImVsZW1lbnQiLCJzdGF0aWNDbGFzcyIsImpvaW4iLCJwYXJzZVN0eWxlVGV4dCIsImNzc1RleHQiLCJsaXN0RGVsaW1pdGVyIiwicHJvcGVydHlEZWxpbWl0ZXIiLCJmb3JFYWNoIiwiaXRlbSIsInRtcCIsInRyaW0iLCJub3JtYWxpemVTdHlsZUJpbmRpbmciLCJiaW5kaW5nU3R5bGUiLCJzdGF0aWNTdHlsZSIsInN0eWxlIiwidlNob3ciLCJkaXNwbGF5IiwidG9BcnJheSIsIm4iLCJpc05hTiIsInRhZ05hbWUiLCJob3RzcG90IiwiaXMiLCJpc1ZhbHVlIiwidiIsImNoaWxkcmVuVHJhdmVyc2FsIiwicmVmVGFyZ2V0IiwiZWxlbWVudFRyYXZlcnNhbCIsImRpcmVjdGl2ZXMiLCJzYW4iLCJldmFsRXhwciIsInNjb3BlIiwibWFwIiwic291cmNlIiwic2xvdENoaWxkcmVuIiwibWVyZ2VIb29rIiwicGFyZW50VmFsIiwiY2hpbGRWYWwiLCJjb25jYXQiLCJtZXJnZU9wdGlvbnMiLCJkZXN0T3B0aW9ucyIsImxpc3QiLCJtaXhpbnMiLCJhdG9tQnVpbGRJbk1peGluIiwib3B0IiwibWV0aG9kcyIsImoiLCJsaWZlQ3ljbGVLZXlzIiwiZGsiLCJsaWZlQ3ljbGVNYXAiLCJob29rcyIsInNsaWNlIiwiaG9vayIsImJlZm9yZUNyZWF0ZSIsIm1vdW50ZWQiLCJjcmVhdGVkIiwiYmVmb3JlTW91bnQiLCJiZWZvcmVEZXN0cm95IiwiZGVzdHJveSIsInVwZGF0ZWQiLCJNQVRIX01FVEhPRCIsImV4cG9ydHMiLCJhcmdzIiwiTWF0aCIsImFwcGx5IiwiYXJyYXlfc2xpY2UiLCJzdGFydCIsImVuZCIsImFycmF5X2pvaW4iLCJzZXAiLCJzdHJfcG9zIiwibWF0Y2giLCJvYmplY3RfZnJlZXplIiwiZnJlZXplIiwiZmlsdGVycyIsImpzb24iLCJKU09OIiwic3RyaW5naWZ5IiwibG93ZXIiLCJ1cHBlciIsImFycmF5UHJvdG8iLCJhcnJheU1ldGhvZHMiLCJtZXRob2RzVG9QYXRjaCIsIm1ldGhvZCIsIm9yaWdpbmFsIiwib2IiLCJfX29iX18iLCJpbnNlcnRlZCIsIm9ic2VydmVBcnJheSIsImNvbnRleHQiLCJyZXN1bHQiLCJvYnNlcnZlIiwiT2JzZXJ2ZXIiLCJfX3Byb3RvX18iLCJ3YWxrIiwiZGVmaW5lUmVhY3RpdmUiLCJpdGVtcyIsIk5VTUJFUiIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImdldHRlciIsInNldHRlciIsInNldCIsImtleUV4cHIiLCJTVFJJTkciLCJ2YWwiLCJuZXdQcm9wZXJ0eSIsIm5ld1ZhbCIsImZvcmNlIiwiZGVmYXVsdEV4cHIiLCJrZXlMZW5ndGgiLCJfZGF0YSIsImlzRXh0ZW5zaWJsZSIsImNvbXB1dGVkRGVwcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBD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QVlFLENBQVosS0FBa0IsQ0FBQ3JCLEVBQUUsQ0FBQzRKLFlBQUgsQ0FBZ0J2SSxDQUFoQixDQUF2QixFQUEyQztBQUN2Q3JCLGNBQUUsQ0FBQ2YsYUFBSCxDQUFpQm9DLENBQWpCO0FBQ0g7O0FBRURyQixZQUFFLENBQUN4QyxLQUFILENBQVM2RCxDQUFULEVBQVksWUFBWTtBQUNwQnJCLGNBQUUsQ0FBQ2YsYUFBSCxDQUFpQmpFLEdBQWpCO0FBQ0gsV0FGRDtBQUdIOztBQUVELGVBQU9nRixFQUFFLENBQUNPLElBQUgsQ0FBUWYsR0FBUixDQUFZNkIsQ0FBWixDQUFQO0FBQ0g7QUFmVyxLQUFoQjtBQXBCc0I7O0FBa0IxQixPQUFLLElBQUk5RyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHOEUsSUFBSSxDQUFDN0UsTUFBekIsRUFBaUNELENBQUMsRUFBbEMsRUFBc0M7QUFBQSxVQUE3QkEsQ0FBNkI7QUFtQnJDOztBQUVELE9BQUtnRyxJQUFMLENBQVUwSSxHQUFWLENBQWNqTyxHQUFkLEVBQW1CLEtBQUttRyxRQUFMLENBQWNuRyxHQUFkLEVBQW1CQyxJQUFuQixDQUF3Qm9OLE9BQXhCLENBQW5CO0FBQ0gsQyIsImZpbGUiOiJ2dXNhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwic2FuXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInNhblwiXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZmFjdG9yeShyZXF1aXJlKFwic2FuXCIpKSA6IGZhY3Rvcnkocm9vdFtcInNhblwiXSk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh3aW5kb3csIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzFfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcbiIsIi8qKlxuICogQGZpbGUg5LiA5Lqb5bel5YW35Ye95pWwXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuLyoqXG4gKiBNaXggcHJvcGVydGllcyBpbnRvIHRhcmdldCBvYmplY3QuXG4gKi9cbmV4cG9ydCBjb25zdCBleHRlbmQgPSBPYmplY3QuYXNzaWduO1xuXG4vKipcbiAqIE1lcmdlIGFuIEFycmF5IG9mIE9iamVjdHMgaW50byBhIHNpbmdsZSBPYmplY3QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b09iamVjdChhcnIpIHtcbiAgICBjb25zdCByZXMgPSB7fTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoYXJyW2ldKSB7XG4gICAgICAgICAgICBleHRlbmQocmVzLCBhcnJbaV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59XG5cbi8qKlxuICogR2V0IHRoZSByYXcgdHlwZSBzdHJpbmcgb2YgYSB2YWx1ZSwgZS5nLiwgW29iamVjdCBPYmplY3RdLlxuICovXG5leHBvcnQgY29uc3QgX3RvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBRdWljayBvYmplY3QgY2hlY2sgLSB0aGlzIGlzIHByaW1hcmlseSB1c2VkIHRvIHRlbGxcbiAqIE9iamVjdHMgZnJvbSBwcmltaXRpdmUgdmFsdWVzIHdoZW4gd2Uga25vdyB0aGUgdmFsdWVcbiAqIGlzIGEgSlNPTi1jb21wbGlhbnQgdHlwZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqZWN0KG9iaikge1xuICAgIHJldHVybiBvYmogIT09IG51bGwgJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogQ2hlY2sgd2hldGhlciBhbiBvYmplY3QgaGFzIHRoZSBwcm9wZXJ0eS5cbiAqL1xuY29uc3QgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuZXhwb3J0IGZ1bmN0aW9uIGhhc093bihvYmosIGtleSkge1xuICAgIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KTtcbn1cblxuLyoqXG4gKiBTdHJpY3Qgb2JqZWN0IHR5cGUgY2hlY2suIE9ubHkgcmV0dXJucyB0cnVlXG4gKiBmb3IgcGxhaW4gSmF2YVNjcmlwdCBvYmplY3RzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNQbGFpbk9iamVjdChvYmopIHtcbiAgICByZXR1cm4gX3RvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgT2JqZWN0XSc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWYob2JqLCBrZXksIHByb3BlcnR5KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCBleHRlbmQoe1xuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSwgcHJvcGVydHkpKTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBjYWNoZWQgdmVyc2lvbiBvZiBhIHB1cmUgZnVuY3Rpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjYWNoZWQoZm4pIHtcbiAgICBjb25zdCBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGNhY2hlZEZuKHN0cikge1xuICAgICAgICBjb25zdCBoaXQgPSBjYWNoZVtzdHJdO1xuICAgICAgICByZXR1cm4gaGl0IHx8IChjYWNoZVtzdHJdID0gZm4oc3RyKSk7XG4gICAgfTtcbn1cblxuLyoqXG4gKiBIeXBoZW5hdGUgYSBjYW1lbENhc2Ugc3RyaW5nLlxuICovXG5jb25zdCBoeXBoZW5hdGVSRSA9IC8oW14tXSkoW0EtWl0pL2c7XG5leHBvcnQgY29uc3QgaHlwaGVuYXRlID0gY2FjaGVkKChzdHIpID0+IHtcbiAgICByZXR1cm4gc3RyXG4gICAgICAgIC5yZXBsYWNlKGh5cGhlbmF0ZVJFLCAnJDEtJDInKVxuICAgICAgICAucmVwbGFjZShoeXBoZW5hdGVSRSwgJyQxLSQyJylcbiAgICAgICAgLnRvTG93ZXJDYXNlKCk7XG59KTtcblxuZXhwb3J0IGNvbnN0IGNhbWVsaXplID0gc3RyID0+IHN0ci5yZXBsYWNlKC8tKFxcdykvZywgKF8sIGMpID0+IChjID8gYy50b1VwcGVyQ2FzZSgpIDogJycpKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fMV9fOyIsIi8qKlxuICogQGZpbGUgZW50cnlcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5leHBvcnQge2RlZmF1bHQgYXMgZGVmaW5lQ29tcG9uZW50fSBmcm9tICcuL2RlZmluZS1jb21wb25lbnQnO1xuIiwiLyoqXG4gKiBAZmlsZSBjb21wb25lbnRcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQgJy4vb3ZlcnJpZGUtZGF0YS1nZXQnO1xuXG5pbXBvcnQge2RlZmluZUNvbXBvbmVudCwgaW5oZXJpdHMsIENvbXBvbmVudH0gZnJvbSAnc2FuJztcbmltcG9ydCB7ZXh0ZW5kLCBoeXBoZW5hdGUsIGRlZn0gZnJvbSAnLi4vc2hhcmVkL3V0aWwnO1xuaW1wb3J0IG1lcmdlQ2xhc3MgZnJvbSAnLi9tZXJnZS1jbGFzcyc7XG5pbXBvcnQgbWVyZ2VTdHlsZSBmcm9tICcuL21lcmdlLXN0eWxlJztcbmltcG9ydCBsb29wRXhwcmVzc2lvbiBmcm9tICcuL2xvb3AtZXhwcmVzc2lvbic7XG5pbXBvcnQgZ2V0Q29tcG9uZW50VHlwZSBmcm9tICcuL2dldC1jb21wb25lbnQtdHlwZSc7XG5pbXBvcnQgb2JqZWN0Q29tcHV0ZWRQcm9wZXJ0aWVzIGZyb20gJy4vb2JqZWN0LWNvbXB1dGVkLXByb3BlcnRpcnMnO1xuaW1wb3J0IHJlZiBmcm9tICcuL3JlZic7XG5pbXBvcnQgbWVyZ2VPcHRpb25zIGZyb20gJy4vbWVyZ2Utb3B0aW9ucyc7XG5pbXBvcnQgYmluZERhdGEgZnJvbSAnLi9iaW5kLWRhdGEnO1xuaW1wb3J0IGNhbGNDb21wdXRlZCBmcm9tICcuL2NhbGMtY29tcHV0ZWQnO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBmZWNzLWNhbWVsY2FzZSAqL1xuY29uc3QgZGVmYXVsdFNhbk9wdGlvbnMgPSB7XG4gICAgX21jOiBtZXJnZUNsYXNzLFxuICAgIF9tczogbWVyZ2VTdHlsZSxcbiAgICBfbDogbG9vcEV4cHJlc3Npb24sXG4gICAgX2V4OiBleHRlbmQsXG4gICAgX29jcDogb2JqZWN0Q29tcHV0ZWRQcm9wZXJ0aWVzLFxuICAgIGdldENvbXBvbmVudFR5cGUsXG4gICAgJGVtaXQ6IENvbXBvbmVudC5wcm90b3R5cGUuZmlyZSxcbiAgICAkb246IENvbXBvbmVudC5wcm90b3R5cGUub24sXG4gICAgJHdhdGNoOiBDb21wb25lbnQucHJvdG90eXBlLndhdGNoLFxuICAgIF9ub29wOiBmdW5jdGlvbiAoKSB7fVxufTtcbi8qIGVzbGludC1lbmFibGUgZmVjcy1jYW1lbGNhc2UgKi9cblxuY29uc3QgbWVtYmVyTWFwID0ge1xuICAgICRlbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWw7XG4gICAgfSxcbiAgICAkY29udGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3duZXI7XG4gICAgfSxcbiAgICAkcGFyZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnRDb21wb25lbnQ7XG4gICAgfSxcbiAgICAkY2hpbGRyZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoaWxkcmVuLmZpbHRlcihjaGlsZCA9PiBjaGlsZC5ub2RlVHlwZSA9PT0gNSk7XG4gICAgfSxcbiAgICAkcm9vdCgpIHtcbiAgICAgICAgbGV0IHJvb3QgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5wYXJlbnRDb21wb25lbnQpIHtcbiAgICAgICAgICAgIHdoaWxlIChyb290LnBhcmVudENvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIHJvb3QgPSByb290LnBhcmVudENvbXBvbmVudFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByb290O1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlZmluZShvcHRpb25zKSB7XG5cbiAgICBjb25zdCBzYW5PcHRpb25zID0gZXh0ZW5kKHtcbiAgICAgICAgdGVtcGxhdGU6IG9wdGlvbnMuX19zYW50ZW1wbGF0ZSxcbiAgICAgICAgYU5vZGU6IG9wdGlvbnMuX19zYW5hTm9kZSxcbiAgICB9LCBkZWZhdWx0U2FuT3B0aW9ucywgbWVyZ2VPcHRpb25zKG9wdGlvbnMpKTtcblxuICAgIGNvbnN0IGNvbXBpbGVkSG9vayA9IHNhbk9wdGlvbnMuY29tcGlsZWQ7XG4gICAgc2FuT3B0aW9ucy5jb21waWxlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fY2FsY0NvbXB1dGVkID0gY2FsY0NvbXB1dGVkLmJpbmQodGhpcyk7XG4gICAgICAgIGNvbXBpbGVkSG9vayAmJiBjb21waWxlZEhvb2suY2FsbCh0aGlzKTtcblxuICAgICAgICBjb25zdCBwcm9wZXJ0aWVzID0gT2JqZWN0XG4gICAgICAgICAgICAua2V5cyhtZW1iZXJNYXApXG4gICAgICAgICAgICAucmVkdWNlKChwcm9wcywga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgcHJvcHNba2V5XSA9IHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1lbWJlck1hcFtrZXldLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9wcztcbiAgICAgICAgICAgIH0sIHt9KTtcblxuICAgICAgICBwcm9wZXJ0aWVzLiRvcHRpb25zID0ge1xuICAgICAgICAgICAgdmFsdWU6IG9wdGlvbnNcbiAgICAgICAgfTtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCBwcm9wZXJ0aWVzKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVmcyA9IG9wdGlvbnMuX19zYW5SZWZzO1xuICAgIGNvbnN0IGluaXRlZEhvb2sgPSBzYW5PcHRpb25zLmluaXRlZDtcbiAgICBzYW5PcHRpb25zLmluaXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgbWUgPSB0aGlzO1xuICAgICAgICB0aGlzLiRyZWZzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuICAgICAgICBpZiAocmVmcykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHJlZnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCByID0gcmVmc1tpXTtcbiAgICAgICAgICAgICAgICBkZWYobWUuJHJlZnMsIHIubmFtZSwge1xuICAgICAgICAgICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gci5yb290ID8gbWUuZWwgOiBtZS5yZWYoci5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gb3ZlcndyaXRlIHNhbiBjb21wb25lbnQgYXBpIGZvciBzdXBwb3J0IHYtZm9yICsgcmVmXG4gICAgICAgICAgICBtZS5yZWYgPSByZWY7XG4gICAgICAgIH1cblxuICAgICAgICBpbml0ZWRIb29rICYmIGluaXRlZEhvb2suY2FsbCh0aGlzKTtcblxuICAgICAgICAvLyBtZXJnZSBjc3MgbW9kdWxlc1xuICAgICAgICBpZiAodGhpcy4kc3R5bGUpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5tZXJnZSgnJHN0eWxlJywgdGhpcy4kc3R5bGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgYmluZERhdGEuY2FsbCh0aGlzKTtcbiAgICB9O1xuXG4gICAgc2FuT3B0aW9ucy5pbml0RGF0YSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBjb25zdCBtZSA9IHRoaXM7XG5cbiAgICAgICAgY29uc3QgZGVmYXVsdFByb3BzID0ge307XG4gICAgICAgIGlmIChvcHRpb25zLnByb3BzKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9wS2V5cyA9IG1lLl9wcm9wS2V5cyA9IG9wdGlvbnMuX3Byb3BLZXlzID0gb3B0aW9ucy5wcm9wc1xuICAgICAgICAgICAgICAgID8gKEFycmF5LmlzQXJyYXkob3B0aW9ucy5wcm9wcykgPyBvcHRpb25zLnByb3BzIDogT2JqZWN0LmtleXMob3B0aW9ucy5wcm9wcykpXG4gICAgICAgICAgICAgICAgOiBbXTtcblxuICAgICAgICAgICAgLy8g6buY6K6k5bGe5oCnXG4gICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkob3B0aW9ucy5wcm9wcykpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gcHJvcEtleXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcCA9IHByb3BLZXlzW2ldO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wID0gb3B0aW9ucy5wcm9wc1twXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCdkZWZhdWx0JyBpbiBwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0UHJvcHNbcF0gPSB0eXBlb2YgcHJvcC5kZWZhdWx0ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBwcm9wLmRlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcHJvcC5kZWZhdWx0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGRlZihtZSwgcCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtZS5kYXRhLmdldChwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuY29tcHV0ZWQpIHtcbiAgICAgICAgICAgIG1lLl9jb21wdXRlZEtleXMgPSBPYmplY3Qua2V5cyhvcHRpb25zLmNvbXB1dGVkKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBtZS5fY29tcHV0ZWRLZXlzOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBrID0gbWUuX2NvbXB1dGVkS2V5c1tpXTtcbiAgICAgICAgICAgICAgICBkZWYobWUsIGssIHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1lLmRhdGEuZ2V0KGspO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBtZS5fY29tcHV0ZWRLZXlzID0gW107XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkYXRhID0gdHlwZW9mIG9wdGlvbnMuZGF0YSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgPyBvcHRpb25zLmRhdGEuY2FsbChleHRlbmQoe30sIGRlZmF1bHRQcm9wcywgdGhpcy5fc3JjU2JpbmREYXRhKSlcbiAgICAgICAgICAgIDogKG9wdGlvbnMuZGF0YSB8fCB7fSk7XG5cbiAgICAgICAgdGhpcy5fZGF0YUtleXMgPSBPYmplY3Qua2V5cyhkYXRhKSB8fCBbXTtcblxuICAgICAgICByZXR1cm4gZXh0ZW5kKHskc3R5bGU6IHt9fSwgZGVmYXVsdFByb3BzLCBkYXRhKTtcbiAgICB9O1xuXG4gICAgaWYgKG9wdGlvbnMuY29tcG9uZW50cykge1xuICAgICAgICBzYW5PcHRpb25zLmNvbXBvbmVudHMgPSBPYmplY3RcbiAgICAgICAgICAgIC5rZXlzKG9wdGlvbnMuY29tcG9uZW50cylcbiAgICAgICAgICAgIC5yZWR1Y2UoKHByZXYsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIHByZXZba2V5XSA9IHByZXZbaHlwaGVuYXRlKGtleSldID0gZGVmaW5lKG9wdGlvbnMuY29tcG9uZW50c1trZXldKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgICAgICAgIH0sIHt9KTtcbiAgICB9XG5cbiAgICBjb25zdCBDb21wb25lbnQgPSBkZWZpbmVDb21wb25lbnQoc2FuT3B0aW9ucyk7XG5cbiAgICByZXR1cm4gQ29tcG9uZW50O1xufVxuXG4iLCIvKipcbiAqIEBmaWxlIG92ZXJyaWRlIGV2YWwgZXhwclxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCB7RGF0YSwgcGFyc2VFeHByLCBFeHByVHlwZSwgZXZhbEV4cHJ9IGZyb20gJ3Nhbic7XG5cbmNvbnN0IG9yaWdpbmFsR2V0ID0gRGF0YS5wcm90b3R5cGUuZ2V0O1xuXG5EYXRhLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoZXhwciwgY2FsbGVlKSB7XG4gICAgaWYgKGV4cHIgJiYgdHlwZW9mIGV4cHIgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGV4cHIgPSBwYXJzZUV4cHIoZXhwcik7XG4gICAgfVxuICAgIGxldCB2YWx1ZSA9IG9yaWdpbmFsR2V0LmNhbGwodGhpcywgZXhwciwgY2FsbGVlKTtcbiAgICBpZiAoIWV4cHIgfHwgdmFsdWUgIT09IHVuZGVmaW5lZCB8fCAhdGhpcy5vd25lciB8fCBleHByLnR5cGUgIT09IEV4cHJUeXBlLkFDQ0VTU09SKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgY29uc3QgcGF0aHMgPSBleHByLnBhdGhzO1xuICAgIGNvbnN0IGZpcnN0ID0gcGF0aHNbMF0udmFsdWU7XG4gICAgaWYgKFxuICAgICAgICBbXG4gICAgICAgICAgICAuLi50aGlzLm93bmVyLl9wcm9wS2V5cyxcbiAgICAgICAgICAgIC4uLnRoaXMub3duZXIuX2RhdGFLZXlzLFxuICAgICAgICAgICAgLi4udGhpcy5vd25lci5fY29tcHV0ZWRLZXlzXG4gICAgICAgIF0uaW5kZXhPZihmaXJzdCkgPj0gMFxuICAgICkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHZhbHVlID0gdGhpcy5vd25lcltmaXJzdF07XG4gICAgZm9yICh2YXIgaSA9IDEsIGwgPSBwYXRocy5sZW5ndGg7IHZhbHVlICE9IG51bGwgJiYgaSA8IGw7IGkrKykge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlW3BhdGhzW2ldLnZhbHVlIHx8IGV2YWxFeHByKHBhdGhzW2ldLCBjYWxsZWUpXTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xufTtcbiIsIi8qKlxuICogQGZpbGUgbWVyZ2UgY2xhc3NcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5mdW5jdGlvbiBzdHJpbmcoY2xzID0gJycpIHtcbiAgICBpZiAoIWNscykge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHJldHVybiBjbHNcbiAgICAgICAgLnNwbGl0KCcgJylcbiAgICAgICAgLnJlZHVjZSgocHJldiwgbmFtZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgICAgW25hbWVdOiAxXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LCB7fSk7XG59XG5cbmZ1bmN0aW9uIG9iamVjdChjbHMgPSB7fSkge1xuICAgIHJldHVybiBPYmplY3RcbiAgICAgICAgLmtleXMoY2xzKVxuICAgICAgICAucmVkdWNlKChwcmV2LCBrZXkpID0+IHtcbiAgICAgICAgICAgIGlmICghY2xzW2tleV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgICAgICAuLi5zdHJpbmcoa2V5KVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSwge30pO1xufVxuXG5mdW5jdGlvbiBhcnJheShjbHMgPSBbXSkge1xuICAgIGxldCBjbGF6eiA9IHt9O1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBjbHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGNsc1tpXTtcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBjbGF6eiA9IHtcbiAgICAgICAgICAgIC4uLmNsYXp6LFxuICAgICAgICAgICAgLi4uKFxuICAgICAgICAgICAgICAgIHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgID8gc3RyaW5nKGVsZW1lbnQpXG4gICAgICAgICAgICAgICAgOiAoQXJyYXkuaXNBcnJheShlbGVtZW50KSA/IGFycmF5KGVsZW1lbnQpIDogb2JqZWN0KGVsZW1lbnQpKVxuICAgICAgICAgICAgKVxuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gY2xheno7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0aWNDbGFzcyA9ICcnLCBjbHMgPSB7fSkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhhcnJheShbc3RhdGljQ2xhc3MsIGNsc10pKS5qb2luKCcgJyk7XG59XG4iLCIvKipcbiAqIEBmaWxlIG1lcmdlIHN0eWxlXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHtjYWNoZWQsIGV4dGVuZCwgdG9PYmplY3R9IGZyb20gJy4uL3NoYXJlZC91dGlsJztcblxuY29uc3QgcGFyc2VTdHlsZVRleHQgPSBjYWNoZWQoZnVuY3Rpb24gKGNzc1RleHQpIHtcbiAgICBjb25zdCByZXMgPSB7fTtcbiAgICBjb25zdCBsaXN0RGVsaW1pdGVyID0gLzsoPyFbXihdKlxcKSkvZztcbiAgICBjb25zdCBwcm9wZXJ0eURlbGltaXRlciA9IC86KC4rKS87XG4gICAgY3NzVGV4dC5zcGxpdChsaXN0RGVsaW1pdGVyKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICB2YXIgdG1wID0gaXRlbS5zcGxpdChwcm9wZXJ0eURlbGltaXRlcik7XG4gICAgICAgICAgICB0bXAubGVuZ3RoID4gMSAmJiAocmVzW3RtcFswXS50cmltKCldID0gdG1wWzFdLnRyaW0oKSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzO1xufSk7XG5cbi8vIG5vcm1hbGl6ZSBwb3NzaWJsZSBhcnJheSAvIHN0cmluZyB2YWx1ZXMgaW50byBPYmplY3RcbmZ1bmN0aW9uIG5vcm1hbGl6ZVN0eWxlQmluZGluZyhiaW5kaW5nU3R5bGUpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShiaW5kaW5nU3R5bGUpKSB7XG4gICAgICAgIHJldHVybiB0b09iamVjdChiaW5kaW5nU3R5bGUpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGJpbmRpbmdTdHlsZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlU3R5bGVUZXh0KGJpbmRpbmdTdHlsZSk7XG4gICAgfVxuICAgIHJldHVybiBiaW5kaW5nU3R5bGU7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRpY1N0eWxlLCBzdHlsZSwgdlNob3cgPSB0cnVlKSB7XG4gICAgc3R5bGUgPSBub3JtYWxpemVTdHlsZUJpbmRpbmcoc3R5bGUpO1xuICAgIGlmICghdlNob3cpIHtcbiAgICAgICAgc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gICAgcmV0dXJuIHN0YXRpY1N0eWxlXG4gICAgICAgID8gZXh0ZW5kKHN0YXRpY1N0eWxlLCBzdHlsZSlcbiAgICAgICAgOiBzdHlsZTtcbn1cbiIsIi8qKlxuICogQGZpbGUgbG9vcCBleHByZXNzaW9uXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHtjYWNoZWR9IGZyb20gJy4uL3NoYXJlZC91dGlsJztcblxuY29uc3QgdG9BcnJheSA9IGNhY2hlZChmdW5jdGlvbiAobikge1xuICAgIGNvbnN0IHZhbHVlID0gbmV3IEFycmF5KG4pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgIHZhbHVlW2ldID0gaSArIDE7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAoIWlzTmFOKHZhbHVlKSkge1xuICAgICAgICBjb25zdCBuID0gK3ZhbHVlO1xuICAgICAgICB2YWx1ZSA9IHRvQXJyYXkobik7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn1cblxuIiwiLyoqXG4gKiBAZmlsZSBnZXQgY29tcG9uZW50IHR5cGVcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQge2V2YWxFeHByfSBmcm9tICdzYW4nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoYU5vZGUsIGRhdGEpIHtcbiAgICBpZiAoYU5vZGUudGFnTmFtZSAhPT0gJ2NvbXBvbmVudCcgfHwgYU5vZGUuaG90c3BvdC5wcm9wcy5pcyA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudHNbYU5vZGUudGFnTmFtZV07XG4gICAgfVxuXG4gICAgY29uc3QgaXMgPSBhTm9kZS5wcm9wc1thTm9kZS5ob3RzcG90LnByb3BzLmlzXTtcbiAgICBjb25zdCBpc1ZhbHVlID0gZXZhbEV4cHIoaXMuZXhwciwgZGF0YSk7XG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50c1tpc1ZhbHVlXTtcbn1cbiIsIi8qKlxuICogQGZpbGUgb2JqZWN0IGNvbXB1dGVkIHByb3BlcnRpZXMgbWVyZ2VcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocHJvcGVydGllcykge1xuICAgIHJldHVybiBwcm9wZXJ0aWVzLnJlZHVjZSgocHJldiwge2ssIHZ9KSA9PiB7XG4gICAgICAgIHByZXZba10gPSB2O1xuICAgICAgICByZXR1cm4gcHJldjtcbiAgICB9LCB7fSk7XG59XG4iLCIvKipcbiAqIEBmaWxlIHNhbiByZWYgcmV3cml0ZVxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCAqIGFzIHNhbiBmcm9tICdzYW4nO1xuaW1wb3J0IHtjYW1lbGl6ZX0gZnJvbSAnLi4vc2hhcmVkL3V0aWwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAobmFtZSkge1xuXG4gICAgY29uc3Qgb3duZXIgPSB0aGlzO1xuXG4gICAgZnVuY3Rpb24gY2hpbGRyZW5UcmF2ZXJzYWwoY2hpbGRyZW4pIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcmVmVGFyZ2V0ID0gZWxlbWVudFRyYXZlcnNhbChjaGlsZHJlbltpXSk7XG4gICAgICAgICAgICBpZiAocmVmVGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlZlRhcmdldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVsZW1lbnRUcmF2ZXJzYWwoZWxlbWVudCkge1xuICAgICAgICBjb25zdCBub2RlVHlwZSA9IGVsZW1lbnQubm9kZVR5cGU7XG4gICAgICAgIGlmIChub2RlVHlwZSA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZWZUYXJnZXQ7XG4gICAgICAgIGlmIChlbGVtZW50Lm93bmVyID09PSBvd25lcikge1xuICAgICAgICAgICAgbGV0IHJlZjtcbiAgICAgICAgICAgIGxldCB2YWx1ZTtcbiAgICAgICAgICAgIHN3aXRjaCAobm9kZVR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICByZWYgPSBlbGVtZW50LmFOb2RlLmRpcmVjdGl2ZXMucmVmO1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHNhbi5ldmFsRXhwcihyZWYudmFsdWUsIGVsZW1lbnQuc2NvcGUsIG93bmVyKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlZiAmJiAodmFsdWUgPT09IG5hbWUgfHwgY2FtZWxpemUodmFsdWUpID09PSBuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5vZGVUeXBlID09PSA0ID8gZWxlbWVudC5lbCA6IGVsZW1lbnQuY2hpbGRyZW4ubWFwKGVsZW1lbnRUcmF2ZXJzYWwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICByZWYgPSBlbGVtZW50LnNvdXJjZS5kaXJlY3RpdmVzLnJlZjtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBzYW4uZXZhbEV4cHIocmVmLnZhbHVlLCBlbGVtZW50LnNjb3BlLCBvd25lcik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWYgJiYgKHZhbHVlID09PSBuYW1lIHx8IGNhbWVsaXplKHZhbHVlKSA9PT0gbmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlZlRhcmdldCA9IGVsZW1lbnQuc2xvdENoaWxkcmVuICYmIGNoaWxkcmVuVHJhdmVyc2FsKGVsZW1lbnQuc2xvdENoaWxkcmVuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZWZUYXJnZXQgfHwgY2hpbGRyZW5UcmF2ZXJzYWwoZWxlbWVudC5jaGlsZHJlbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkcmVuVHJhdmVyc2FsKHRoaXMuY2hpbGRyZW4pO1xufTtcbiIsIi8qKlxuICogQGZpbGUgbWVyZ2Ugb3B0aW9uc1xuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCB7ZXh0ZW5kfSBmcm9tICcuLi9zaGFyZWQvdXRpbCc7XG5pbXBvcnQge2xpZmVDeWNsZUtleXMsIGxpZmVDeWNsZU1hcH0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQgYXRvbUJ1aWxkSW5NaXhpbiBmcm9tICcuL2F0b20tZ2xvYmFsLWFwaSc7XG5cbmNvbnN0IGtleXMgPSBbXG4gICAgJ2ZpbHRlcnMnLFxuICAgICd3YXRjaCcsXG4gICAgJ2NvbXB1dGVkJ1xuXTtcblxuZnVuY3Rpb24gbWVyZ2VIb29rKHBhcmVudFZhbCwgY2hpbGRWYWwpIHtcbiAgICByZXR1cm4gY2hpbGRWYWxcbiAgICAgICAgPyBwYXJlbnRWYWxcbiAgICAgICAgICAgID8gcGFyZW50VmFsLmNvbmNhdChjaGlsZFZhbClcbiAgICAgICAgICAgIDogQXJyYXkuaXNBcnJheShjaGlsZFZhbClcbiAgICAgICAgICAgICAgICA/IGNoaWxkVmFsXG4gICAgICAgICAgICAgICAgOiBbY2hpbGRWYWxdXG4gICAgICAgICAgICA6IHBhcmVudFZhbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVyZ2VPcHRpb25zKG9wdGlvbnMpIHtcbiAgICBjb25zdCBkZXN0T3B0aW9ucyA9IHt9O1xuICAgIGNvbnN0IGxpc3QgPSBBcnJheS5pc0FycmF5KG9wdGlvbnMubWl4aW5zKVxuICAgICAgICA/IFthdG9tQnVpbGRJbk1peGluLCAuLi5vcHRpb25zLm1peGlucywgb3B0aW9uc11cbiAgICAgICAgOiBbYXRvbUJ1aWxkSW5NaXhpbiwgb3B0aW9uc107XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGxpc3QubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgY29uc3Qgb3B0ID0gbGlzdFtpXTtcbiAgICAgICAgb3B0Lm1ldGhvZHMgJiYgZXh0ZW5kKGRlc3RPcHRpb25zLCBvcHQubWV0aG9kcyk7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwga2V5cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgY29uc3QgayA9IGtleXNbal07XG4gICAgICAgICAgICBpZiAob3B0W2tdKSB7XG4gICAgICAgICAgICAgICAgZGVzdE9wdGlvbnNba10gPSBleHRlbmQoZGVzdE9wdGlvbnNba10gfHwge30sIG9wdFtrXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsaWZlQ3ljbGVLZXlzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCBrID0gbGlmZUN5Y2xlS2V5c1tqXTtcbiAgICAgICAgICAgIGNvbnN0IGRrID0gbGlmZUN5Y2xlTWFwW2tdO1xuICAgICAgICAgICAgaWYgKG9wdFtrXSkge1xuICAgICAgICAgICAgICAgIGRlc3RPcHRpb25zW2RrXSA9IG1lcmdlSG9vayhkZXN0T3B0aW9uc1tka10gfHwgW10sIG9wdFtrXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBsaWZlQ3ljbGVLZXlzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGNvbnN0IGsgPSBsaWZlQ3ljbGVLZXlzW2pdO1xuICAgICAgICBjb25zdCBkayA9IGxpZmVDeWNsZU1hcFtrXTtcbiAgICAgICAgaWYgKGRlc3RPcHRpb25zW2RrXSkge1xuICAgICAgICAgICAgY29uc3QgaG9va3MgPSBkZXN0T3B0aW9uc1tka10uc2xpY2UoKTtcbiAgICAgICAgICAgIGRlc3RPcHRpb25zW2RrXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBob29rcy5mb3JFYWNoKGhvb2sgPT4gaG9vay5jYWxsKHRoaXMpLCB0aGlzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRlc3RPcHRpb25zO1xufVxuIiwiLyoqXG4gKiBAZmlsZSBjb25zdGFudHNcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5leHBvcnQgY29uc3QgbGlmZUN5Y2xlTWFwID0ge1xuICAgIGJlZm9yZUNyZWF0ZTogJ2NvbXBpbGVkJyxcbiAgICBtb3VudGVkOiAnYXR0YWNoZWQnLFxuICAgIGNyZWF0ZWQ6ICdpbml0ZWQnLFxuICAgIGJlZm9yZU1vdW50OiAnY3JlYXRlZCcsXG4gICAgYmVmb3JlRGVzdHJveTogJ2RldGFjaGVkJyxcbiAgICBkZXN0cm95OiAnZGlzcG9zZWQnLFxuICAgIHVwZGF0ZWQ6ICd1cGRhdGVkJ1xuICAgIC8vIGJlZm9yZVVwZGF0ZTogJ3VwZGF0ZWQnXG59O1xuXG5leHBvcnQgY29uc3QgbGlmZUN5Y2xlS2V5cyA9IE9iamVjdC5rZXlzKGxpZmVDeWNsZU1hcCk7XG4iLCIvKipcbiAqIEBmaWxlIOWFqOWxgOeUn+aViOeahOWHveaVsFxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmNvbnN0IE1BVEhfTUVUSE9EID0gW1xuICAgICdmbG9vcicsICdjZWlsJywgJ3JvdW5kJyxcbiAgICAnYWJzJywgJ21heCcsICdtaW4nLCAncG93J1xuXTtcblxuY29uc3QgbWV0aG9kcyA9IGV4cG9ydHMubWV0aG9kcyA9IHt9O1xuXG5NQVRIX01FVEhPRC5mb3JFYWNoKG5hbWUgPT4ge1xuICAgIG1ldGhvZHNbYG1hdGhfJHtuYW1lfWBdID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIE1hdGhbbmFtZV0uYXBwbHkoTWF0aCwgYXJncyk7XG4gICAgfTtcbn0pO1xuXG5tZXRob2RzLmFycmF5X3NsaWNlID0gZnVuY3Rpb24gKGFyciwgc3RhcnQsIGxlbikge1xuICAgIHZhciBlbmQgPSBsZW4gPT0gbnVsbCA/IHZvaWQgMCA6IChsZW4gPj0gMCA/IChzdGFydCArIGxlbikgOiAoYXJyLmxlbmd0aCArIGxlbikpO1xuICAgIHJldHVybiBhcnIuc2xpY2Uoc3RhcnQsIGVuZCk7XG59O1xuXG5tZXRob2RzLmFycmF5X2pvaW4gPSBmdW5jdGlvbiAoYXJyLCBzZXApIHtcbiAgICByZXR1cm4gYXJyLmpvaW4oc2VwKTtcbn07XG5cbm1ldGhvZHMuc3RyX3BvcyA9IGZ1bmN0aW9uIChzdHIsIG1hdGNoKSB7XG4gICAgcmV0dXJuIHN0ci5pbmRleE9mKG1hdGNoKTtcbn07XG5cbm1ldGhvZHMub2JqZWN0X2ZyZWV6ZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gT2JqZWN0LmZyZWV6ZShvYmopO1xufTtcblxuZXhwb3J0cy5maWx0ZXJzID0ge1xuICAgIGpzb24ob2JqKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShqc29uKTtcbiAgICB9LFxuICAgIGxvd2VyKHN0cikge1xuICAgICAgICByZXR1cm4gc3RyLnRvTG93ZXJDYXNlKCk7XG4gICAgfSxcbiAgICB1cHBlcihzdHIpIHtcbiAgICAgICAgcmV0dXJuIHN0ci50b1VwcGVyQ2FzZSgpO1xuICAgIH1cbn07XG4iLCIvKipcbiAqIEBmaWxlIOaVsOaNrue7keWumlxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCB7aXNPYmplY3QsIGhhc093biwgaXNQbGFpbk9iamVjdCwgZXh0ZW5kLCBkZWZ9IGZyb20gJy4uL3NoYXJlZC91dGlsJztcbmltcG9ydCB7RXhwclR5cGV9IGZyb20gJ3Nhbic7XG5cbmNvbnN0IGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5jb25zdCBhcnJheU1ldGhvZHMgPSBPYmplY3QuY3JlYXRlKGFycmF5UHJvdG8pO1xuXG5jb25zdCBtZXRob2RzVG9QYXRjaCA9IFtcbiAgICAncHVzaCcsXG4gICAgJ3BvcCcsXG4gICAgJ3NoaWZ0JyxcbiAgICAndW5zaGlmdCcsXG4gICAgJ3NwbGljZSdcbiAgICAvLyAnc29ydCcsXG4gICAgLy8gJ3JldmVyc2UnXG5dO1xuXG4vKipcbiAqIEludGVyY2VwdCBtdXRhdGluZyBtZXRob2RzIGFuZCBlbWl0IGV2ZW50c1xuICovXG5tZXRob2RzVG9QYXRjaC5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICAvLyBjYWNoZSBvcmlnaW5hbCBtZXRob2RcbiAgICBjb25zdCBvcmlnaW5hbCA9IGFycmF5UHJvdG9bbWV0aG9kXVxuICAgIGRlZihhcnJheU1ldGhvZHMsIG1ldGhvZCwge1xuICAgICAgICB2YWx1ZSguLi5hcmdzKSB7XG4gICAgICAgICAgICBjb25zdCBvYiA9IHRoaXMuX19vYl9fO1xuICAgICAgICAgICAgbGV0IGluc2VydGVkO1xuICAgICAgICAgICAgc3dpdGNoIChtZXRob2QpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdwdXNoJzpcbiAgICAgICAgICAgICAgICBjYXNlICd1bnNoaWZ0JzpcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0ZWQgPSBhcmdzO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdzcGxpY2UnOlxuICAgICAgICAgICAgICAgICAgICBpbnNlcnRlZCA9IGFyZ3Muc2xpY2UoMik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGluc2VydGVkKSB7XG4gICAgICAgICAgICAgICAgb2Iub2JzZXJ2ZUFycmF5KGluc2VydGVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9iLmNvbnRleHQuZGF0YVttZXRob2RdKG9iLmV4cHIsIC4uLmFyZ3MpO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gb2IuY29udGV4dC5kYXRhLmdldChvYi5leHByKTtcbiAgICAgICAgICAgIG9ic2VydmUocmVzdWx0LCBvYi5leHByLCBvYi5jb250ZXh0KTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICB9KVxufSk7XG5cbmNsYXNzIE9ic2VydmVyIHtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlLCBleHByLCBjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuZXhwciA9IGV4cHI7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIGRlZih2YWx1ZSwgJ19fb2JfXycsIHtcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlLl9fcHJvdG9fXyA9IGFycmF5TWV0aG9kcztcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZUFycmF5KHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMua2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKSB8fCBbXTtcbiAgICAgICAgICAgIHRoaXMud2Fsayh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXYWxrIHRocm91Z2ggYWxsIHByb3BlcnRpZXMgYW5kIGNvbnZlcnQgdGhlbSBpbnRvXG4gICAgICogZ2V0dGVyL3NldHRlcnMuIFRoaXMgbWV0aG9kIHNob3VsZCBvbmx5IGJlIGNhbGxlZCB3aGVuXG4gICAgICogdmFsdWUgdHlwZSBpcyBPYmplY3QuXG4gICAgICovXG4gICAgd2FsayhvYmopIHtcbiAgICAgICAgY29uc3Qga2V5cyA9IHRoaXMua2V5cztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBkZWZpbmVSZWFjdGl2ZShvYmosIGtleXNbaV0sIHRoaXMuZXhwciwgdGhpcy5jb250ZXh0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9ic2VydmUgYSBsaXN0IG9mIEFycmF5IGl0ZW1zLlxuICAgICAqL1xuICAgIG9ic2VydmVBcnJheShpdGVtcykge1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGl0ZW1zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgb2JzZXJ2ZShpdGVtc1tpXSwgZXh0ZW5kKHt9LCB0aGlzLmV4cHIsIHtcbiAgICAgICAgICAgICAgICBwYXRoczogWy4uLnRoaXMuZXhwci5wYXRocywge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBFeHByVHlwZS5OVU1CRVIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBpXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0pLCB0aGlzLmNvbnRleHQpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkZWZpbmVSZWFjdGl2ZShvYmosIGtleSwgZXhwciwgY29udGV4dCkge1xuXG4gICAgY29uc3QgcHJvcGVydHkgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KTtcbiAgICBpZiAocHJvcGVydHkgJiYgcHJvcGVydHkuY29uZmlndXJhYmxlID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gY2F0ZXIgZm9yIHByZS1kZWZpbmVkIGdldHRlci9zZXR0ZXJzXG4gICAgY29uc3QgZ2V0dGVyID0gcHJvcGVydHkgJiYgcHJvcGVydHkuZ2V0O1xuICAgIGNvbnN0IHNldHRlciA9IHByb3BlcnR5ICYmIHByb3BlcnR5LnNldDtcblxuICAgIGNvbnN0IGtleUV4cHIgPSB7XG4gICAgICAgIHR5cGU6IEV4cHJUeXBlLkFDQ0VTU09SLFxuICAgICAgICBwYXRoczogWy4uLmV4cHIucGF0aHMsIHtcbiAgICAgICAgICAgIHR5cGU6IEV4cHJUeXBlLlNUUklORyxcbiAgICAgICAgICAgIHZhbHVlOiBrZXlcbiAgICAgICAgfV1cbiAgICB9O1xuXG4gICAgbGV0IHZhbCA9IG9ialtrZXldO1xuICAgIG9ic2VydmUodmFsLCBrZXlFeHByLCBjb250ZXh0KTtcbiAgICBjb25zdCBuZXdQcm9wZXJ0eSA9IHtcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBzZXQobmV3VmFsKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGdldHRlciA/IGdldHRlci5jYWxsKG9iaikgOiB2YWw7XG4gICAgICAgICAgICBpZiAobmV3VmFsID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChnZXR0ZXIgJiYgIXNldHRlcikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzZXR0ZXIpIHtcbiAgICAgICAgICAgICAgICBzZXR0ZXIuY2FsbChvYmosIG5ld1ZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWwgPSBuZXdWYWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvYnNlcnZlKG5ld1ZhbCwga2V5RXhwciwgY29udGV4dCk7XG4gICAgICAgICAgICBjb250ZXh0LmRhdGEuc2V0KGtleUV4cHIsIG5ld1ZhbCwge2ZvcmNlOiB0cnVlfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZ2V0dGVyID8gZ2V0dGVyLmNhbGwob2JqKSA6IHZhbDtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZGVmKG9iaiwga2V5LCBuZXdQcm9wZXJ0eSk7XG59XG5cbmNvbnN0IGRlZmF1bHRFeHByID0ge1xuICAgIHR5cGU6IEV4cHJUeXBlLkFDQ0VTU09SLFxuICAgIHBhdGhzOiBbXVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGV4cHIgPSBleHRlbmQoe30sIGRlZmF1bHRFeHByKTtcbiAgICBjb25zdCBrZXlzID0gdGhpcy5fZGF0YUtleXM7XG4gICAgY29uc3Qga2V5TGVuZ3RoID0ga2V5cy5sZW5ndGg7XG5cbiAgICBvYnNlcnZlKHRoaXMuZGF0YS5nZXQoKSwgZXhwciwgdGhpcyk7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcztcblxuICAgIHRoaXMuX2RhdGEgPSB0aGlzLmRhdGEuZ2V0KCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleUxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IGtleXNbaV07XG4gICAgICAgIGRlZihjb250ZXh0LCBrZXksIHtcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGV4dC5fZGF0YVtrZXldO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldChuZXdWYWwpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0Ll9kYXRhW2tleV0gPSBuZXdWYWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuZGF0YS5vd25lciA9IHRoaXM7XG59XG5cbmZ1bmN0aW9uIG9ic2VydmUodmFsdWUsIGV4cHIsIGNvbnRleHQpIHtcbiAgICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBvYjtcbiAgICBpZiAoaGFzT3duKHZhbHVlLCAnX19vYl9fJykgJiYgdmFsdWUuX19vYl9fIGluc3RhbmNlb2YgT2JzZXJ2ZXIpIHtcbiAgICAgICAgb2IgPSB2YWx1ZS5fX29iX19cbiAgICB9XG4gICAgZWxzZSBpZiAoXG4gICAgICAgIChBcnJheS5pc0FycmF5KHZhbHVlKSB8fCBpc1BsYWluT2JqZWN0KHZhbHVlKSlcbiAgICAgICAgJiYgT2JqZWN0LmlzRXh0ZW5zaWJsZSh2YWx1ZSlcbiAgICApIHtcbiAgICAgICAgb2IgPSBuZXcgT2JzZXJ2ZXIodmFsdWUsIGV4cHIsIGNvbnRleHQpO1xuICAgIH1cbiAgICByZXR1cm4gb2I7XG59XG4iLCIvKipcbiAqIEBmaWxlIOimhuebliBzYW4g5Y6f55Sf55qEIF9jYWxjQ29tcHV0ZWRcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQge2RlZn0gZnJvbSAnLi4vc2hhcmVkL3V0aWwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoa2V5KSB7XG4gICAgbGV0IGNvbXB1dGVkRGVwcyA9IHRoaXMuY29tcHV0ZWREZXBzW2tleV07XG4gICAgaWYgKCFjb21wdXRlZERlcHMpIHtcbiAgICAgICAgY29tcHV0ZWREZXBzID0gdGhpcy5jb21wdXRlZERlcHNba2V5XSA9IHt9O1xuICAgIH1cblxuICAgIGNvbnN0IG1lID0gdGhpcztcbiAgICBjb25zdCBkYXRhID0gbWUuZGF0YS5nZXQoKTtcbiAgICBjb25zdCBjb250ZXh0ID0ge307XG5cbiAgICBkZWYoY29udGV4dCwgJyRyb290Jywge1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gbWUuJHJvb3Q7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhkYXRhKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBrID0ga2V5c1tpXTtcbiAgICAgICAgZGVmKGNvbnRleHQsIGssIHtcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWNvbXB1dGVkRGVwc1trXSkge1xuICAgICAgICAgICAgICAgICAgICBjb21wdXRlZERlcHNba10gPSAxO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChtZS5jb21wdXRlZFtrXSAmJiAhbWUuY29tcHV0ZWREZXBzW2tdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZS5fY2FsY0NvbXB1dGVkKGspO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbWUud2F0Y2goaywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWUuX2NhbGNDb21wdXRlZChrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gbWUuZGF0YS5nZXQoayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuZGF0YS5zZXQoa2V5LCB0aGlzLmNvbXB1dGVkW2tleV0uY2FsbChjb250ZXh0KSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9