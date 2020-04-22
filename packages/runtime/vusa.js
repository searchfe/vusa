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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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
exports.default = _default;

var _util = __webpack_require__(0);

function _default() {
  var slotChildren = this.slotChildren;
  return slotChildren.reduce(function (prev, child) {
    var name = child.name || 'default';

    if (!prev[name]) {
      prev[name] = [];
    }

    prev[name] = prev[name].concat(child.children);
    return prev;
  }, {});
}

/***/ }),
/* 3 */
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

var _defineComponent = _interopRequireDefault(__webpack_require__(4));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = define;

__webpack_require__(5);

var _san = __webpack_require__(1);

var _util = __webpack_require__(0);

var _mergeClass = _interopRequireDefault(__webpack_require__(6));

var _mergeStyle = _interopRequireDefault(__webpack_require__(7));

var _loopExpression = _interopRequireDefault(__webpack_require__(8));

var _getComponentType = _interopRequireDefault(__webpack_require__(9));

var _objectComputedPropertirs = _interopRequireDefault(__webpack_require__(10));

var _ref = _interopRequireDefault(__webpack_require__(11));

var _mergeOptions = _interopRequireDefault(__webpack_require__(12));

var _bindData = _interopRequireDefault(__webpack_require__(15));

var _calcComputed = _interopRequireDefault(__webpack_require__(16));

var _getSlots = _interopRequireDefault(__webpack_require__(2));

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
  },
  $slots: _getSlots.default
};
var innerKey = '_SanCtor';

function define(options) {
  if (options[innerKey]) {
    return options[innerKey];
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

    initedHook && initedHook.call(this);

    if (this.$style) {
      (0, _util.extend)(this.data.raw.$style, this.$style);
    }

    _bindData.default.call(this);

    if (options.watch) {
      Object.keys(options.watch).forEach(function (key) {
        _this.watch(key, options.watch[key].bind(_this));
      });
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
    }

    if (options.computed) {
      me._computedKeys = Object.keys(options.computed);

      var _loop2 = function _loop2(_i, _len) {
        var k = me._computedKeys[_i];
        (0, _util.def)(me, k, {
          get: function get() {
            return me.data.get(k);
          }
        });
      };

      for (var _i = 0, _len = me._computedKeys; _i < _len; _i++) {
        _loop2(_i, _len);
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
  return options[innerKey] = Component;
}

/***/ }),
/* 5 */
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
/* 6 */
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
/* 7 */
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
/* 8 */
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
/* 9 */
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
/* 10 */
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
/* 11 */
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mergeOptions;

var _util = __webpack_require__(0);

var _constant = __webpack_require__(13);

var _atomGlobalApi = _interopRequireDefault(__webpack_require__(14));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
/* 13 */
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
/* 14 */
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
/* 15 */
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
      var _ob$context$data$meth;

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

      (_ob$context$data$meth = ob.context.data[method]).call.apply(_ob$context$data$meth, [ob.context.data, ob.expr].concat(args));

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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _util = __webpack_require__(0);

var _getSlots = _interopRequireDefault(__webpack_require__(2));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  (0, _util.def)(context, '$slots', {
    get: function get() {
      return _getSlots.default.call(me);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3V0aWwuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2FuXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvZ2V0LXNsb3RzLmpzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lL2RlZmluZS1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvb3ZlcnJpZGUtZGF0YS1nZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvbWVyZ2UtY2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvbWVyZ2Utc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvbG9vcC1leHByZXNzaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lL2dldC1jb21wb25lbnQtdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcnVudGltZS9vYmplY3QtY29tcHV0ZWQtcHJvcGVydGlycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcnVudGltZS9yZWYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvbWVyZ2Utb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcnVudGltZS9jb25zdGFudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcnVudGltZS9hdG9tLWdsb2JhbC1hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvYmluZC1kYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lL2NhbGMtY29tcHV0ZWQuanMiXSwibmFtZXMiOlsiZXh0ZW5kIiwiT2JqZWN0IiwiYXNzaWduIiwidG9PYmplY3QiLCJhcnIiLCJyZXMiLCJpIiwibGVuZ3RoIiwiX3RvU3RyaW5nIiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJpc09iamVjdCIsIm9iaiIsImhhc093blByb3BlcnR5IiwiaGFzT3duIiwia2V5IiwiY2FsbCIsImlzUGxhaW5PYmplY3QiLCJkZWYiLCJwcm9wZXJ0eSIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsImNhY2hlZCIsImZuIiwiY2FjaGUiLCJjcmVhdGUiLCJjYWNoZWRGbiIsInN0ciIsImhpdCIsImh5cGhlbmF0ZVJFIiwiaHlwaGVuYXRlIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwiY2FtZWxpemUiLCJfIiwiYyIsInRvVXBwZXJDYXNlIiwic2xvdENoaWxkcmVuIiwicmVkdWNlIiwicHJldiIsImNoaWxkIiwibmFtZSIsImNvbmNhdCIsImNoaWxkcmVuIiwiZGVmYXVsdFNhbk9wdGlvbnMiLCJfbWMiLCJtZXJnZUNsYXNzIiwiX21zIiwibWVyZ2VTdHlsZSIsIl9sIiwibG9vcEV4cHJlc3Npb24iLCJfZXgiLCJfb2NwIiwib2JqZWN0Q29tcHV0ZWRQcm9wZXJ0aWVzIiwiZ2V0Q29tcG9uZW50VHlwZSIsIiRlbWl0IiwiQ29tcG9uZW50IiwiZmlyZSIsIiRvbiIsIm9uIiwiJHdhdGNoIiwid2F0Y2giLCJfbm9vcCIsIm1lbWJlck1hcCIsIiRlbCIsImVsIiwiJGNvbnRleHQiLCJvd25lciIsIiRwYXJlbnQiLCJwYXJlbnRDb21wb25lbnQiLCIkY2hpbGRyZW4iLCJmaWx0ZXIiLCJub2RlVHlwZSIsIiRyb290Iiwicm9vdCIsIiRzbG90cyIsInNsb3QiLCJpbm5lcktleSIsImRlZmluZSIsIm9wdGlvbnMiLCJzYW5PcHRpb25zIiwidGVtcGxhdGUiLCJfX3NhbnRlbXBsYXRlIiwiYU5vZGUiLCJfX3NhbmFOb2RlIiwiY29tcGlsZWRIb29rIiwiY29tcGlsZWQiLCJfY2FsY0NvbXB1dGVkIiwiY2FsY0NvbXB1dGVkIiwiYmluZCIsInByb3BlcnRpZXMiLCJrZXlzIiwicHJvcHMiLCJnZXQiLCIkb3B0aW9ucyIsInZhbHVlIiwiZGVmaW5lUHJvcGVydGllcyIsInJlZnMiLCJfX3NhblJlZnMiLCJpbml0ZWRIb29rIiwiaW5pdGVkIiwibWUiLCIkcmVmcyIsImxlbiIsInIiLCJyZWYiLCIkc3R5bGUiLCJkYXRhIiwicmF3IiwiYmluZERhdGEiLCJmb3JFYWNoIiwiaW5pdERhdGEiLCJkZWZhdWx0UHJvcHMiLCJwcm9wS2V5cyIsIl9wcm9wS2V5cyIsIkFycmF5IiwiaXNBcnJheSIsInAiLCJwcm9wIiwiZGVmYXVsdCIsImNvbXB1dGVkIiwiX2NvbXB1dGVkS2V5cyIsImsiLCJfc3JjU2JpbmREYXRhIiwiX2RhdGFLZXlzIiwiY29tcG9uZW50cyIsIm9yaWdpbmFsR2V0IiwiRGF0YSIsImV4cHIiLCJjYWxsZWUiLCJ1bmRlZmluZWQiLCJ0eXBlIiwiRXhwclR5cGUiLCJBQ0NFU1NPUiIsInBhdGhzIiwiZmlyc3QiLCJpbmRleE9mIiwibCIsInN0cmluZyIsImNscyIsInNwbGl0Iiwib2JqZWN0IiwiYXJyYXkiLCJjbGF6eiIsImVsZW1lbnQiLCJzdGF0aWNDbGFzcyIsImpvaW4iLCJwYXJzZVN0eWxlVGV4dCIsImNzc1RleHQiLCJsaXN0RGVsaW1pdGVyIiwicHJvcGVydHlEZWxpbWl0ZXIiLCJpdGVtIiwidG1wIiwidHJpbSIsIm5vcm1hbGl6ZVN0eWxlQmluZGluZyIsImJpbmRpbmdTdHlsZSIsInN0YXRpY1N0eWxlIiwic3R5bGUiLCJ2U2hvdyIsImRpc3BsYXkiLCJ0b0FycmF5IiwibiIsImlzTmFOIiwidGFnTmFtZSIsImhvdHNwb3QiLCJpcyIsImlzVmFsdWUiLCJ2IiwiY2hpbGRyZW5UcmF2ZXJzYWwiLCJyZWZUYXJnZXQiLCJlbGVtZW50VHJhdmVyc2FsIiwiZGlyZWN0aXZlcyIsInNhbiIsImV2YWxFeHByIiwic2NvcGUiLCJtYXAiLCJzb3VyY2UiLCJtZXJnZUhvb2siLCJwYXJlbnRWYWwiLCJjaGlsZFZhbCIsIm1lcmdlT3B0aW9ucyIsImRlc3RPcHRpb25zIiwibGlzdCIsIm1peGlucyIsImF0b21CdWlsZEluTWl4aW4iLCJvcHQiLCJtZXRob2RzIiwiaiIsImxpZmVDeWNsZUtleXMiLCJkayIsImxpZmVDeWNsZU1hcCIsImhvb2tzIiwic2xpY2UiLCJob29rIiwiYmVmb3JlQ3JlYXRlIiwibW91bnRlZCIsImNyZWF0ZWQiLCJiZWZvcmVNb3VudCIsImJlZm9yZURlc3Ryb3kiLCJkZXN0cm95IiwidXBkYXRlZCIsIk1BVEhfTUVUSE9EIiwiZXhwb3J0cyIsImFyZ3MiLCJNYXRoIiwiYXBwbHkiLCJhcnJheV9zbGljZSIsInN0YXJ0IiwiZW5kIiwiYXJyYXlfam9pbiIsInNlcCIsInN0cl9wb3MiLCJtYXRjaCIsIm9iamVjdF9mcmVlemUiLCJmcmVlemUiLCJmaWx0ZXJzIiwianNvbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJsb3dlciIsInVwcGVyIiwiYXJyYXlQcm90byIsImFycmF5TWV0aG9kcyIsIm1ldGhvZHNUb1BhdGNoIiwibWV0aG9kIiwib3JpZ2luYWwiLCJyZXN1bHQiLCJvYiIsIl9fb2JfXyIsImluc2VydGVkIiwib2JzZXJ2ZUFycmF5IiwiY29udGV4dCIsIm9ic2VydmUiLCJPYnNlcnZlciIsIl9fcHJvdG9fXyIsIndhbGsiLCJkZWZpbmVSZWFjdGl2ZSIsIml0ZW1zIiwiTlVNQkVSIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZ2V0dGVyIiwic2V0dGVyIiwic2V0Iiwia2V5RXhwciIsIlNUUklORyIsInZhbCIsIm5ld1Byb3BlcnR5IiwibmV3VmFsIiwiZm9yY2UiLCJkZWZhdWx0RXhwciIsImtleUxlbmd0aCIsIl9kYXRhIiwiaXNFeHRlbnNpYmxlIiwiY29tcHV0ZWREZXBzIiwic2xvdHMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7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SXJCLEVBQUUsQ0FBQ21CLFFBQUgsQ0FBWUUsQ0FBWixLQUFrQixDQUFDckIsRUFBRSxDQUFDd0osWUFBSCxDQUFnQm5JLENBQWhCLENBQXZCLEVBQTJDO0FBQ3ZDckIsY0FBRSxDQUFDZCxhQUFILENBQWlCbUMsQ0FBakI7QUFDSDs7QUFFRHJCLFlBQUUsQ0FBQ3hDLEtBQUgsQ0FBUzZELENBQVQsRUFBWSxZQUFZO0FBQ3BCckIsY0FBRSxDQUFDZCxhQUFILENBQWlCekUsR0FBakI7QUFDSCxXQUZEO0FBR0g7O0FBRUQsZUFBT3VGLEVBQUUsQ0FBQ00sSUFBSCxDQUFRZCxHQUFSLENBQVk2QixDQUFaLENBQVA7QUFDSDtBQWZXLEtBQWhCO0FBMUJzQjs7QUF3QjFCLE9BQUssSUFBSXJILENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdzRixJQUFJLENBQUNyRixNQUF6QixFQUFpQ0QsQ0FBQyxFQUFsQyxFQUFzQztBQUFBLFVBQTdCQSxDQUE2QjtBQW1CckM7O0FBRUQsT0FBS3NHLElBQUwsQ0FBVXVJLEdBQVYsQ0FBY3BPLEdBQWQsRUFBbUIsS0FBSzBHLFFBQUwsQ0FBYzFHLEdBQWQsRUFBbUJDLElBQW5CLENBQXdCd04sT0FBeEIsQ0FBbkI7QUFDSCxDIiwiZmlsZSI6InZ1c2EuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJzYW5cIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wic2FuXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBmYWN0b3J5KHJlcXVpcmUoXCJzYW5cIikpIDogZmFjdG9yeShyb290W1wic2FuXCJdKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHdpbmRvdywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fMV9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuIiwiLyoqXG4gKiBAZmlsZSDkuIDkupvlt6Xlhbflh73mlbBcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG4vKipcbiAqIE1peCBwcm9wZXJ0aWVzIGludG8gdGFyZ2V0IG9iamVjdC5cbiAqL1xuZXhwb3J0IGNvbnN0IGV4dGVuZCA9IE9iamVjdC5hc3NpZ247XG5cbi8qKlxuICogTWVyZ2UgYW4gQXJyYXkgb2YgT2JqZWN0cyBpbnRvIGEgc2luZ2xlIE9iamVjdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvT2JqZWN0KGFycikge1xuICAgIGNvbnN0IHJlcyA9IHt9O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChhcnJbaV0pIHtcbiAgICAgICAgICAgIGV4dGVuZChyZXMsIGFycltpXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHJhdyB0eXBlIHN0cmluZyBvZiBhIHZhbHVlLCBlLmcuLCBbb2JqZWN0IE9iamVjdF0uXG4gKi9cbmV4cG9ydCBjb25zdCBfdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIFF1aWNrIG9iamVjdCBjaGVjayAtIHRoaXMgaXMgcHJpbWFyaWx5IHVzZWQgdG8gdGVsbFxuICogT2JqZWN0cyBmcm9tIHByaW1pdGl2ZSB2YWx1ZXMgd2hlbiB3ZSBrbm93IHRoZSB2YWx1ZVxuICogaXMgYSBKU09OLWNvbXBsaWFudCB0eXBlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3Qob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAhPT0gbnVsbCAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIGFuIG9iamVjdCBoYXMgdGhlIHByb3BlcnR5LlxuICovXG5jb25zdCBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5leHBvcnQgZnVuY3Rpb24gaGFzT3duKG9iaiwga2V5KSB7XG4gICAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpO1xufVxuXG4vKipcbiAqIFN0cmljdCBvYmplY3QgdHlwZSBjaGVjay4gT25seSByZXR1cm5zIHRydWVcbiAqIGZvciBwbGFpbiBKYXZhU2NyaXB0IG9iamVjdHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1BsYWluT2JqZWN0KG9iaikge1xuICAgIHJldHVybiBfdG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBPYmplY3RdJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZihvYmosIGtleSwgcHJvcGVydHkpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIGV4dGVuZCh7XG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9LCBwcm9wZXJ0eSkpO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIGNhY2hlZCB2ZXJzaW9uIG9mIGEgcHVyZSBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhY2hlZChmbikge1xuICAgIGNvbnN0IGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gY2FjaGVkRm4oc3RyKSB7XG4gICAgICAgIGNvbnN0IGhpdCA9IGNhY2hlW3N0cl07XG4gICAgICAgIHJldHVybiBoaXQgfHwgKGNhY2hlW3N0cl0gPSBmbihzdHIpKTtcbiAgICB9O1xufVxuXG4vKipcbiAqIEh5cGhlbmF0ZSBhIGNhbWVsQ2FzZSBzdHJpbmcuXG4gKi9cbmNvbnN0IGh5cGhlbmF0ZVJFID0gLyhbXi1dKShbQS1aXSkvZztcbmV4cG9ydCBjb25zdCBoeXBoZW5hdGUgPSBjYWNoZWQoKHN0cikgPT4ge1xuICAgIHJldHVybiBzdHJcbiAgICAgICAgLnJlcGxhY2UoaHlwaGVuYXRlUkUsICckMS0kMicpXG4gICAgICAgIC5yZXBsYWNlKGh5cGhlbmF0ZVJFLCAnJDEtJDInKVxuICAgICAgICAudG9Mb3dlckNhc2UoKTtcbn0pO1xuXG5leHBvcnQgY29uc3QgY2FtZWxpemUgPSBzdHIgPT4gc3RyLnJlcGxhY2UoLy0oXFx3KS9nLCAoXywgYykgPT4gKGMgPyBjLnRvVXBwZXJDYXNlKCkgOiAnJykpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX18xX187IiwiLyoqXG4gKiBAZmlsZSBzbG90XG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHtleHRlbmR9IGZyb20gJy4uL3NoYXJlZC91dGlsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHtcbiAgICAgICAgc2xvdENoaWxkcmVuXG4gICAgfSA9IHRoaXM7XG5cbiAgICByZXR1cm4gc2xvdENoaWxkcmVuLnJlZHVjZSgocHJldiwgY2hpbGQpID0+IHtcbiAgICAgICAgY29uc3QgbmFtZSA9IGNoaWxkLm5hbWUgfHwgJ2RlZmF1bHQnO1xuICAgICAgICBpZiAoIXByZXZbbmFtZV0pIHtcbiAgICAgICAgICAgIHByZXZbbmFtZV0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBwcmV2W25hbWVdID0gcHJldltuYW1lXS5jb25jYXQoY2hpbGQuY2hpbGRyZW4pO1xuICAgICAgICByZXR1cm4gcHJldjtcbiAgICB9LCB7fSk7XG59XG4iLCIvKipcbiAqIEBmaWxlIGVudHJ5XG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuZXhwb3J0IHtkZWZhdWx0IGFzIGRlZmluZUNvbXBvbmVudH0gZnJvbSAnLi9kZWZpbmUtY29tcG9uZW50JztcbiIsIi8qKlxuICogQGZpbGUgY29tcG9uZW50XG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0ICcuL292ZXJyaWRlLWRhdGEtZ2V0JztcblxuaW1wb3J0IHtkZWZpbmVDb21wb25lbnQsIGluaGVyaXRzLCBDb21wb25lbnR9IGZyb20gJ3Nhbic7XG5pbXBvcnQge2V4dGVuZCwgaHlwaGVuYXRlLCBkZWZ9IGZyb20gJy4uL3NoYXJlZC91dGlsJztcbmltcG9ydCBtZXJnZUNsYXNzIGZyb20gJy4vbWVyZ2UtY2xhc3MnO1xuaW1wb3J0IG1lcmdlU3R5bGUgZnJvbSAnLi9tZXJnZS1zdHlsZSc7XG5pbXBvcnQgbG9vcEV4cHJlc3Npb24gZnJvbSAnLi9sb29wLWV4cHJlc3Npb24nO1xuaW1wb3J0IGdldENvbXBvbmVudFR5cGUgZnJvbSAnLi9nZXQtY29tcG9uZW50LXR5cGUnO1xuaW1wb3J0IG9iamVjdENvbXB1dGVkUHJvcGVydGllcyBmcm9tICcuL29iamVjdC1jb21wdXRlZC1wcm9wZXJ0aXJzJztcbmltcG9ydCByZWYgZnJvbSAnLi9yZWYnO1xuaW1wb3J0IG1lcmdlT3B0aW9ucyBmcm9tICcuL21lcmdlLW9wdGlvbnMnO1xuaW1wb3J0IGJpbmREYXRhIGZyb20gJy4vYmluZC1kYXRhJztcbmltcG9ydCBjYWxjQ29tcHV0ZWQgZnJvbSAnLi9jYWxjLWNvbXB1dGVkJztcbmltcG9ydCBzbG90IGZyb20gJy4vZ2V0LXNsb3RzJztcblxuLyogZXNsaW50LWRpc2FibGUgZmVjcy1jYW1lbGNhc2UgKi9cbmNvbnN0IGRlZmF1bHRTYW5PcHRpb25zID0ge1xuICAgIF9tYzogbWVyZ2VDbGFzcyxcbiAgICBfbXM6IG1lcmdlU3R5bGUsXG4gICAgX2w6IGxvb3BFeHByZXNzaW9uLFxuICAgIF9leDogZXh0ZW5kLFxuICAgIF9vY3A6IG9iamVjdENvbXB1dGVkUHJvcGVydGllcyxcbiAgICBnZXRDb21wb25lbnRUeXBlLFxuICAgICRlbWl0OiBDb21wb25lbnQucHJvdG90eXBlLmZpcmUsXG4gICAgJG9uOiBDb21wb25lbnQucHJvdG90eXBlLm9uLFxuICAgICR3YXRjaDogQ29tcG9uZW50LnByb3RvdHlwZS53YXRjaCxcbiAgICBfbm9vcDogZnVuY3Rpb24gKCkge31cbn07XG4vKiBlc2xpbnQtZW5hYmxlIGZlY3MtY2FtZWxjYXNlICovXG5cbmNvbnN0IG1lbWJlck1hcCA9IHtcbiAgICAkZWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsO1xuICAgIH0sXG4gICAgJGNvbnRleHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm93bmVyO1xuICAgIH0sXG4gICAgJHBhcmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50Q29tcG9uZW50O1xuICAgIH0sXG4gICAgJGNoaWxkcmVuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5maWx0ZXIoY2hpbGQgPT4gY2hpbGQubm9kZVR5cGUgPT09IDUpO1xuICAgIH0sXG4gICAgJHJvb3QoKSB7XG4gICAgICAgIGxldCByb290ID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMucGFyZW50Q29tcG9uZW50KSB7XG4gICAgICAgICAgICB3aGlsZSAocm9vdC5wYXJlbnRDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICByb290ID0gcm9vdC5wYXJlbnRDb21wb25lbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcm9vdDtcbiAgICB9LFxuICAgICRzbG90czogc2xvdFxufTtcblxuY29uc3QgaW5uZXJLZXkgPSAnX1NhbkN0b3InO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWZpbmUob3B0aW9ucykge1xuXG4gICAgaWYgKG9wdGlvbnNbaW5uZXJLZXldKSB7XG4gICAgICAgIHJldHVybiBvcHRpb25zW2lubmVyS2V5XTtcbiAgICB9XG5cbiAgICBjb25zdCBzYW5PcHRpb25zID0gZXh0ZW5kKHtcbiAgICAgICAgdGVtcGxhdGU6IG9wdGlvbnMuX19zYW50ZW1wbGF0ZSxcbiAgICAgICAgYU5vZGU6IG9wdGlvbnMuX19zYW5hTm9kZSxcbiAgICB9LCBkZWZhdWx0U2FuT3B0aW9ucywgbWVyZ2VPcHRpb25zKG9wdGlvbnMpKTtcblxuICAgIGNvbnN0IGNvbXBpbGVkSG9vayA9IHNhbk9wdGlvbnMuY29tcGlsZWQ7XG4gICAgc2FuT3B0aW9ucy5jb21waWxlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fY2FsY0NvbXB1dGVkID0gY2FsY0NvbXB1dGVkLmJpbmQodGhpcyk7XG4gICAgICAgIGNvbXBpbGVkSG9vayAmJiBjb21waWxlZEhvb2suY2FsbCh0aGlzKTtcblxuICAgICAgICBjb25zdCBwcm9wZXJ0aWVzID0gT2JqZWN0XG4gICAgICAgICAgICAua2V5cyhtZW1iZXJNYXApXG4gICAgICAgICAgICAucmVkdWNlKChwcm9wcywga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgcHJvcHNba2V5XSA9IHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1lbWJlck1hcFtrZXldLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9wcztcbiAgICAgICAgICAgIH0sIHt9KTtcblxuICAgICAgICBwcm9wZXJ0aWVzLiRvcHRpb25zID0ge1xuICAgICAgICAgICAgdmFsdWU6IG9wdGlvbnNcbiAgICAgICAgfTtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCBwcm9wZXJ0aWVzKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVmcyA9IG9wdGlvbnMuX19zYW5SZWZzO1xuICAgIGNvbnN0IGluaXRlZEhvb2sgPSBzYW5PcHRpb25zLmluaXRlZDtcbiAgICBzYW5PcHRpb25zLmluaXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgbWUgPSB0aGlzO1xuICAgICAgICB0aGlzLiRyZWZzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuICAgICAgICBpZiAocmVmcykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHJlZnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCByID0gcmVmc1tpXTtcbiAgICAgICAgICAgICAgICBkZWYobWUuJHJlZnMsIHIubmFtZSwge1xuICAgICAgICAgICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gci5yb290ID8gbWUuZWwgOiBtZS5yZWYoci5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gb3ZlcndyaXRlIHNhbiBjb21wb25lbnQgYXBpIGZvciBzdXBwb3J0IHYtZm9yICsgcmVmXG4gICAgICAgICAgICBtZS5yZWYgPSByZWY7XG4gICAgICAgIH1cblxuICAgICAgICBpbml0ZWRIb29rICYmIGluaXRlZEhvb2suY2FsbCh0aGlzKTtcblxuICAgICAgICAvLyBtZXJnZSBjc3MgbW9kdWxlc1xuICAgICAgICBpZiAodGhpcy4kc3R5bGUpIHtcbiAgICAgICAgICAgIGV4dGVuZCh0aGlzLmRhdGEucmF3LiRzdHlsZSwgdGhpcy4kc3R5bGUpXG4gICAgICAgIH1cblxuICAgICAgICBiaW5kRGF0YS5jYWxsKHRoaXMpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLndhdGNoKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhvcHRpb25zLndhdGNoKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy53YXRjaChrZXksIG9wdGlvbnMud2F0Y2hba2V5XS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHNhbk9wdGlvbnMuaW5pdERhdGEgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgY29uc3QgbWUgPSB0aGlzO1xuXG4gICAgICAgIGNvbnN0IGRlZmF1bHRQcm9wcyA9IHt9O1xuICAgICAgICBpZiAob3B0aW9ucy5wcm9wcykge1xuICAgICAgICAgICAgY29uc3QgcHJvcEtleXMgPSBtZS5fcHJvcEtleXMgPSBvcHRpb25zLl9wcm9wS2V5cyA9IG9wdGlvbnMucHJvcHNcbiAgICAgICAgICAgICAgICA/IChBcnJheS5pc0FycmF5KG9wdGlvbnMucHJvcHMpID8gb3B0aW9ucy5wcm9wcyA6IE9iamVjdC5rZXlzKG9wdGlvbnMucHJvcHMpKVxuICAgICAgICAgICAgICAgIDogW107XG5cbiAgICAgICAgICAgIC8vIOm7mOiupOWxnuaAp1xuICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG9wdGlvbnMucHJvcHMpKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHByb3BLZXlzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHAgPSBwcm9wS2V5c1tpXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcCA9IG9wdGlvbnMucHJvcHNbcF07XG4gICAgICAgICAgICAgICAgICAgIGlmICgnZGVmYXVsdCcgaW4gcHJvcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFByb3BzW3BdID0gdHlwZW9mIHByb3AuZGVmYXVsdCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gcHJvcC5kZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHByb3AuZGVmYXVsdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLmNvbXB1dGVkKSB7XG4gICAgICAgICAgICBtZS5fY29tcHV0ZWRLZXlzID0gT2JqZWN0LmtleXMob3B0aW9ucy5jb21wdXRlZCk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gbWUuX2NvbXB1dGVkS2V5czsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgayA9IG1lLl9jb21wdXRlZEtleXNbaV07XG4gICAgICAgICAgICAgICAgZGVmKG1lLCBrLCB7XG4gICAgICAgICAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtZS5kYXRhLmdldChrKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbWUuX2NvbXB1dGVkS2V5cyA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IHR5cGVvZiBvcHRpb25zLmRhdGEgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgID8gb3B0aW9ucy5kYXRhLmNhbGwoZXh0ZW5kKHt9LCBkZWZhdWx0UHJvcHMsIHRoaXMuX3NyY1NiaW5kRGF0YSkpXG4gICAgICAgICAgICA6IChvcHRpb25zLmRhdGEgfHwge30pO1xuXG4gICAgICAgIHRoaXMuX2RhdGFLZXlzID0gT2JqZWN0LmtleXMoZGF0YSkgfHwgW107XG5cbiAgICAgICAgcmV0dXJuIGV4dGVuZCh7JHN0eWxlOiB7fX0sIGRlZmF1bHRQcm9wcywgZGF0YSk7XG4gICAgfTtcblxuICAgIGlmIChvcHRpb25zLmNvbXBvbmVudHMpIHtcbiAgICAgICAgc2FuT3B0aW9ucy5jb21wb25lbnRzID0gT2JqZWN0XG4gICAgICAgICAgICAua2V5cyhvcHRpb25zLmNvbXBvbmVudHMpXG4gICAgICAgICAgICAucmVkdWNlKChwcmV2LCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBwcmV2W2tleV0gPSBwcmV2W2h5cGhlbmF0ZShrZXkpXSA9IGRlZmluZShvcHRpb25zLmNvbXBvbmVudHNba2V5XSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICAgICAgICB9LCB7fSk7XG4gICAgfVxuXG4gICAgY29uc3QgQ29tcG9uZW50ID0gZGVmaW5lQ29tcG9uZW50KHNhbk9wdGlvbnMpO1xuXG4gICAgcmV0dXJuIG9wdGlvbnNbaW5uZXJLZXldID0gQ29tcG9uZW50O1xufVxuXG4iLCIvKipcbiAqIEBmaWxlIG92ZXJyaWRlIGV2YWwgZXhwclxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCB7RGF0YSwgcGFyc2VFeHByLCBFeHByVHlwZSwgZXZhbEV4cHJ9IGZyb20gJ3Nhbic7XG5cbmNvbnN0IG9yaWdpbmFsR2V0ID0gRGF0YS5wcm90b3R5cGUuZ2V0O1xuXG5EYXRhLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoZXhwciwgY2FsbGVlKSB7XG4gICAgaWYgKGV4cHIgJiYgdHlwZW9mIGV4cHIgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGV4cHIgPSBwYXJzZUV4cHIoZXhwcik7XG4gICAgfVxuICAgIGxldCB2YWx1ZSA9IG9yaWdpbmFsR2V0LmNhbGwodGhpcywgZXhwciwgY2FsbGVlKTtcbiAgICBpZiAoIWV4cHIgfHwgdmFsdWUgIT09IHVuZGVmaW5lZCB8fCAhdGhpcy5vd25lciB8fCBleHByLnR5cGUgIT09IEV4cHJUeXBlLkFDQ0VTU09SKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgY29uc3QgcGF0aHMgPSBleHByLnBhdGhzO1xuICAgIGNvbnN0IGZpcnN0ID0gcGF0aHNbMF0udmFsdWU7XG4gICAgaWYgKFxuICAgICAgICBbXG4gICAgICAgICAgICAuLi50aGlzLm93bmVyLl9wcm9wS2V5cyxcbiAgICAgICAgICAgIC4uLnRoaXMub3duZXIuX2RhdGFLZXlzLFxuICAgICAgICAgICAgLi4udGhpcy5vd25lci5fY29tcHV0ZWRLZXlzXG4gICAgICAgIF0uaW5kZXhPZihmaXJzdCkgPj0gMFxuICAgICkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHZhbHVlID0gdGhpcy5vd25lcltmaXJzdF07XG4gICAgZm9yICh2YXIgaSA9IDEsIGwgPSBwYXRocy5sZW5ndGg7IHZhbHVlICE9IG51bGwgJiYgaSA8IGw7IGkrKykge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlW3BhdGhzW2ldLnZhbHVlIHx8IGV2YWxFeHByKHBhdGhzW2ldLCBjYWxsZWUpXTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xufTtcbiIsIi8qKlxuICogQGZpbGUgbWVyZ2UgY2xhc3NcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5mdW5jdGlvbiBzdHJpbmcoY2xzID0gJycpIHtcbiAgICBpZiAoIWNscykge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHJldHVybiBjbHNcbiAgICAgICAgLnNwbGl0KCcgJylcbiAgICAgICAgLnJlZHVjZSgocHJldiwgbmFtZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgICAgW25hbWVdOiAxXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LCB7fSk7XG59XG5cbmZ1bmN0aW9uIG9iamVjdChjbHMgPSB7fSkge1xuICAgIHJldHVybiBPYmplY3RcbiAgICAgICAgLmtleXMoY2xzKVxuICAgICAgICAucmVkdWNlKChwcmV2LCBrZXkpID0+IHtcbiAgICAgICAgICAgIGlmICghY2xzW2tleV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgICAgICAuLi5zdHJpbmcoa2V5KVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSwge30pO1xufVxuXG5mdW5jdGlvbiBhcnJheShjbHMgPSBbXSkge1xuICAgIGxldCBjbGF6eiA9IHt9O1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBjbHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGNsc1tpXTtcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBjbGF6eiA9IHtcbiAgICAgICAgICAgIC4uLmNsYXp6LFxuICAgICAgICAgICAgLi4uKFxuICAgICAgICAgICAgICAgIHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgID8gc3RyaW5nKGVsZW1lbnQpXG4gICAgICAgICAgICAgICAgOiAoQXJyYXkuaXNBcnJheShlbGVtZW50KSA/IGFycmF5KGVsZW1lbnQpIDogb2JqZWN0KGVsZW1lbnQpKVxuICAgICAgICAgICAgKVxuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gY2xheno7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0aWNDbGFzcyA9ICcnLCBjbHMgPSB7fSkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhhcnJheShbc3RhdGljQ2xhc3MsIGNsc10pKS5qb2luKCcgJyk7XG59XG4iLCIvKipcbiAqIEBmaWxlIG1lcmdlIHN0eWxlXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHtjYWNoZWQsIGV4dGVuZCwgdG9PYmplY3R9IGZyb20gJy4uL3NoYXJlZC91dGlsJztcblxuY29uc3QgcGFyc2VTdHlsZVRleHQgPSBjYWNoZWQoZnVuY3Rpb24gKGNzc1RleHQpIHtcbiAgICBjb25zdCByZXMgPSB7fTtcbiAgICBjb25zdCBsaXN0RGVsaW1pdGVyID0gLzsoPyFbXihdKlxcKSkvZztcbiAgICBjb25zdCBwcm9wZXJ0eURlbGltaXRlciA9IC86KC4rKS87XG4gICAgY3NzVGV4dC5zcGxpdChsaXN0RGVsaW1pdGVyKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICB2YXIgdG1wID0gaXRlbS5zcGxpdChwcm9wZXJ0eURlbGltaXRlcik7XG4gICAgICAgICAgICB0bXAubGVuZ3RoID4gMSAmJiAocmVzW3RtcFswXS50cmltKCldID0gdG1wWzFdLnRyaW0oKSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzO1xufSk7XG5cbi8vIG5vcm1hbGl6ZSBwb3NzaWJsZSBhcnJheSAvIHN0cmluZyB2YWx1ZXMgaW50byBPYmplY3RcbmZ1bmN0aW9uIG5vcm1hbGl6ZVN0eWxlQmluZGluZyhiaW5kaW5nU3R5bGUpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShiaW5kaW5nU3R5bGUpKSB7XG4gICAgICAgIHJldHVybiB0b09iamVjdChiaW5kaW5nU3R5bGUpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGJpbmRpbmdTdHlsZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlU3R5bGVUZXh0KGJpbmRpbmdTdHlsZSk7XG4gICAgfVxuICAgIHJldHVybiBiaW5kaW5nU3R5bGU7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRpY1N0eWxlLCBzdHlsZSwgdlNob3cgPSB0cnVlKSB7XG4gICAgc3R5bGUgPSBub3JtYWxpemVTdHlsZUJpbmRpbmcoc3R5bGUpO1xuICAgIGlmICghdlNob3cpIHtcbiAgICAgICAgc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gICAgcmV0dXJuIHN0YXRpY1N0eWxlXG4gICAgICAgID8gZXh0ZW5kKHN0YXRpY1N0eWxlLCBzdHlsZSlcbiAgICAgICAgOiBzdHlsZTtcbn1cbiIsIi8qKlxuICogQGZpbGUgbG9vcCBleHByZXNzaW9uXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHtjYWNoZWR9IGZyb20gJy4uL3NoYXJlZC91dGlsJztcblxuY29uc3QgdG9BcnJheSA9IGNhY2hlZChmdW5jdGlvbiAobikge1xuICAgIGNvbnN0IHZhbHVlID0gbmV3IEFycmF5KG4pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgIHZhbHVlW2ldID0gaSArIDE7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAoIWlzTmFOKHZhbHVlKSkge1xuICAgICAgICBjb25zdCBuID0gK3ZhbHVlO1xuICAgICAgICB2YWx1ZSA9IHRvQXJyYXkobik7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn1cblxuIiwiLyoqXG4gKiBAZmlsZSBnZXQgY29tcG9uZW50IHR5cGVcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQge2V2YWxFeHByfSBmcm9tICdzYW4nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoYU5vZGUsIGRhdGEpIHtcbiAgICBpZiAoYU5vZGUudGFnTmFtZSAhPT0gJ2NvbXBvbmVudCcgfHwgYU5vZGUuaG90c3BvdC5wcm9wcy5pcyA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudHNbYU5vZGUudGFnTmFtZV07XG4gICAgfVxuXG4gICAgY29uc3QgaXMgPSBhTm9kZS5wcm9wc1thTm9kZS5ob3RzcG90LnByb3BzLmlzXTtcbiAgICBjb25zdCBpc1ZhbHVlID0gZXZhbEV4cHIoaXMuZXhwciwgZGF0YSk7XG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50c1tpc1ZhbHVlXTtcbn1cbiIsIi8qKlxuICogQGZpbGUgb2JqZWN0IGNvbXB1dGVkIHByb3BlcnRpZXMgbWVyZ2VcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocHJvcGVydGllcykge1xuICAgIHJldHVybiBwcm9wZXJ0aWVzLnJlZHVjZSgocHJldiwge2ssIHZ9KSA9PiB7XG4gICAgICAgIHByZXZba10gPSB2O1xuICAgICAgICByZXR1cm4gcHJldjtcbiAgICB9LCB7fSk7XG59XG4iLCIvKipcbiAqIEBmaWxlIHNhbiByZWYgcmV3cml0ZVxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCAqIGFzIHNhbiBmcm9tICdzYW4nO1xuaW1wb3J0IHtjYW1lbGl6ZX0gZnJvbSAnLi4vc2hhcmVkL3V0aWwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAobmFtZSkge1xuXG4gICAgY29uc3Qgb3duZXIgPSB0aGlzO1xuXG4gICAgZnVuY3Rpb24gY2hpbGRyZW5UcmF2ZXJzYWwoY2hpbGRyZW4pIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcmVmVGFyZ2V0ID0gZWxlbWVudFRyYXZlcnNhbChjaGlsZHJlbltpXSk7XG4gICAgICAgICAgICBpZiAocmVmVGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlZlRhcmdldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVsZW1lbnRUcmF2ZXJzYWwoZWxlbWVudCkge1xuICAgICAgICBjb25zdCBub2RlVHlwZSA9IGVsZW1lbnQubm9kZVR5cGU7XG4gICAgICAgIGlmIChub2RlVHlwZSA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZWZUYXJnZXQ7XG4gICAgICAgIGlmIChlbGVtZW50Lm93bmVyID09PSBvd25lcikge1xuICAgICAgICAgICAgbGV0IHJlZjtcbiAgICAgICAgICAgIGxldCB2YWx1ZTtcbiAgICAgICAgICAgIHN3aXRjaCAobm9kZVR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICByZWYgPSBlbGVtZW50LmFOb2RlLmRpcmVjdGl2ZXMucmVmO1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHNhbi5ldmFsRXhwcihyZWYudmFsdWUsIGVsZW1lbnQuc2NvcGUsIG93bmVyKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlZiAmJiAodmFsdWUgPT09IG5hbWUgfHwgY2FtZWxpemUodmFsdWUpID09PSBuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5vZGVUeXBlID09PSA0ID8gZWxlbWVudC5lbCA6IGVsZW1lbnQuY2hpbGRyZW4ubWFwKGVsZW1lbnRUcmF2ZXJzYWwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICByZWYgPSBlbGVtZW50LnNvdXJjZS5kaXJlY3RpdmVzLnJlZjtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBzYW4uZXZhbEV4cHIocmVmLnZhbHVlLCBlbGVtZW50LnNjb3BlLCBvd25lcik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWYgJiYgKHZhbHVlID09PSBuYW1lIHx8IGNhbWVsaXplKHZhbHVlKSA9PT0gbmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlZlRhcmdldCA9IGVsZW1lbnQuc2xvdENoaWxkcmVuICYmIGNoaWxkcmVuVHJhdmVyc2FsKGVsZW1lbnQuc2xvdENoaWxkcmVuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZWZUYXJnZXQgfHwgY2hpbGRyZW5UcmF2ZXJzYWwoZWxlbWVudC5jaGlsZHJlbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkcmVuVHJhdmVyc2FsKHRoaXMuY2hpbGRyZW4pO1xufTtcbiIsIi8qKlxuICogQGZpbGUgbWVyZ2Ugb3B0aW9uc1xuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCB7ZXh0ZW5kfSBmcm9tICcuLi9zaGFyZWQvdXRpbCc7XG5pbXBvcnQge2xpZmVDeWNsZUtleXMsIGxpZmVDeWNsZU1hcH0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQgYXRvbUJ1aWxkSW5NaXhpbiBmcm9tICcuL2F0b20tZ2xvYmFsLWFwaSc7XG5cbmNvbnN0IGtleXMgPSBbXG4gICAgJ2ZpbHRlcnMnLFxuICAgICdjb21wdXRlZCdcbl07XG5cbmZ1bmN0aW9uIG1lcmdlSG9vayhwYXJlbnRWYWwsIGNoaWxkVmFsKSB7XG4gICAgcmV0dXJuIGNoaWxkVmFsXG4gICAgICAgID8gcGFyZW50VmFsXG4gICAgICAgICAgICA/IHBhcmVudFZhbC5jb25jYXQoY2hpbGRWYWwpXG4gICAgICAgICAgICA6IEFycmF5LmlzQXJyYXkoY2hpbGRWYWwpXG4gICAgICAgICAgICAgICAgPyBjaGlsZFZhbFxuICAgICAgICAgICAgICAgIDogW2NoaWxkVmFsXVxuICAgICAgICAgICAgOiBwYXJlbnRWYWw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lcmdlT3B0aW9ucyhvcHRpb25zKSB7XG4gICAgY29uc3QgZGVzdE9wdGlvbnMgPSB7fTtcbiAgICBjb25zdCBsaXN0ID0gQXJyYXkuaXNBcnJheShvcHRpb25zLm1peGlucylcbiAgICAgICAgPyBbYXRvbUJ1aWxkSW5NaXhpbiwgLi4ub3B0aW9ucy5taXhpbnMsIG9wdGlvbnNdXG4gICAgICAgIDogW2F0b21CdWlsZEluTWl4aW4sIG9wdGlvbnNdO1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBsaXN0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG9wdCA9IGxpc3RbaV07XG4gICAgICAgIG9wdC5tZXRob2RzICYmIGV4dGVuZChkZXN0T3B0aW9ucywgb3B0Lm1ldGhvZHMpO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGtleXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGsgPSBrZXlzW2pdO1xuICAgICAgICAgICAgaWYgKG9wdFtrXSkge1xuICAgICAgICAgICAgICAgIGRlc3RPcHRpb25zW2tdID0gZXh0ZW5kKGRlc3RPcHRpb25zW2tdIHx8IHt9LCBvcHRba10pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGlmZUN5Y2xlS2V5cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgY29uc3QgayA9IGxpZmVDeWNsZUtleXNbal07XG4gICAgICAgICAgICBjb25zdCBkayA9IGxpZmVDeWNsZU1hcFtrXTtcbiAgICAgICAgICAgIGlmIChvcHRba10pIHtcbiAgICAgICAgICAgICAgICBkZXN0T3B0aW9uc1tka10gPSBtZXJnZUhvb2soZGVzdE9wdGlvbnNbZGtdIHx8IFtdLCBvcHRba10pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGlmZUN5Y2xlS2V5cy5sZW5ndGg7IGorKykge1xuICAgICAgICBjb25zdCBrID0gbGlmZUN5Y2xlS2V5c1tqXTtcbiAgICAgICAgY29uc3QgZGsgPSBsaWZlQ3ljbGVNYXBba107XG4gICAgICAgIGlmIChkZXN0T3B0aW9uc1tka10pIHtcbiAgICAgICAgICAgIGNvbnN0IGhvb2tzID0gZGVzdE9wdGlvbnNbZGtdLnNsaWNlKCk7XG4gICAgICAgICAgICBkZXN0T3B0aW9uc1tka10gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaG9va3MuZm9yRWFjaChob29rID0+IGhvb2suY2FsbCh0aGlzKSwgdGhpcyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkZXN0T3B0aW9ucztcbn1cbiIsIi8qKlxuICogQGZpbGUgY29uc3RhbnRzXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuZXhwb3J0IGNvbnN0IGxpZmVDeWNsZU1hcCA9IHtcbiAgICBiZWZvcmVDcmVhdGU6ICdjb21waWxlZCcsXG4gICAgbW91bnRlZDogJ2F0dGFjaGVkJyxcbiAgICBjcmVhdGVkOiAnaW5pdGVkJyxcbiAgICBiZWZvcmVNb3VudDogJ2NyZWF0ZWQnLFxuICAgIGJlZm9yZURlc3Ryb3k6ICdkZXRhY2hlZCcsXG4gICAgZGVzdHJveTogJ2Rpc3Bvc2VkJyxcbiAgICB1cGRhdGVkOiAndXBkYXRlZCdcbiAgICAvLyBiZWZvcmVVcGRhdGU6ICd1cGRhdGVkJ1xufTtcblxuZXhwb3J0IGNvbnN0IGxpZmVDeWNsZUtleXMgPSBPYmplY3Qua2V5cyhsaWZlQ3ljbGVNYXApO1xuIiwiLyoqXG4gKiBAZmlsZSDlhajlsYDnlJ/mlYjnmoTlh73mlbBcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5jb25zdCBNQVRIX01FVEhPRCA9IFtcbiAgICAnZmxvb3InLCAnY2VpbCcsICdyb3VuZCcsXG4gICAgJ2FicycsICdtYXgnLCAnbWluJywgJ3Bvdydcbl07XG5cbmNvbnN0IG1ldGhvZHMgPSBleHBvcnRzLm1ldGhvZHMgPSB7fTtcblxuTUFUSF9NRVRIT0QuZm9yRWFjaChuYW1lID0+IHtcbiAgICBtZXRob2RzW2BtYXRoXyR7bmFtZX1gXSA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICAgIHJldHVybiBNYXRoW25hbWVdLmFwcGx5KE1hdGgsIGFyZ3MpO1xuICAgIH07XG59KTtcblxubWV0aG9kcy5hcnJheV9zbGljZSA9IGZ1bmN0aW9uIChhcnIsIHN0YXJ0LCBsZW4pIHtcbiAgICB2YXIgZW5kID0gbGVuID09IG51bGwgPyB2b2lkIDAgOiAobGVuID49IDAgPyAoc3RhcnQgKyBsZW4pIDogKGFyci5sZW5ndGggKyBsZW4pKTtcbiAgICByZXR1cm4gYXJyLnNsaWNlKHN0YXJ0LCBlbmQpO1xufTtcblxubWV0aG9kcy5hcnJheV9qb2luID0gZnVuY3Rpb24gKGFyciwgc2VwKSB7XG4gICAgcmV0dXJuIGFyci5qb2luKHNlcCk7XG59O1xuXG5tZXRob2RzLnN0cl9wb3MgPSBmdW5jdGlvbiAoc3RyLCBtYXRjaCkge1xuICAgIHJldHVybiBzdHIuaW5kZXhPZihtYXRjaCk7XG59O1xuXG5tZXRob2RzLm9iamVjdF9mcmVlemUgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIE9iamVjdC5mcmVlemUob2JqKTtcbn07XG5cbmV4cG9ydHMuZmlsdGVycyA9IHtcbiAgICBqc29uKG9iaikge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoanNvbik7XG4gICAgfSxcbiAgICBsb3dlcihzdHIpIHtcbiAgICAgICAgcmV0dXJuIHN0ci50b0xvd2VyQ2FzZSgpO1xuICAgIH0sXG4gICAgdXBwZXIoc3RyKSB7XG4gICAgICAgIHJldHVybiBzdHIudG9VcHBlckNhc2UoKTtcbiAgICB9XG59O1xuIiwiLyoqXG4gKiBAZmlsZSDmlbDmja7nu5HlrppcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQge2lzT2JqZWN0LCBoYXNPd24sIGlzUGxhaW5PYmplY3QsIGV4dGVuZCwgZGVmfSBmcm9tICcuLi9zaGFyZWQvdXRpbCc7XG5pbXBvcnQge0V4cHJUeXBlfSBmcm9tICdzYW4nO1xuXG5jb25zdCBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuY29uc3QgYXJyYXlNZXRob2RzID0gT2JqZWN0LmNyZWF0ZShhcnJheVByb3RvKTtcblxuY29uc3QgbWV0aG9kc1RvUGF0Y2ggPSBbXG4gICAgJ3B1c2gnLFxuICAgICdwb3AnLFxuICAgICdzaGlmdCcsXG4gICAgJ3Vuc2hpZnQnLFxuICAgICdzcGxpY2UnXG4gICAgLy8gJ3NvcnQnLFxuICAgIC8vICdyZXZlcnNlJ1xuXTtcblxuLyoqXG4gKiBJbnRlcmNlcHQgbXV0YXRpbmcgbWV0aG9kcyBhbmQgZW1pdCBldmVudHNcbiAqL1xubWV0aG9kc1RvUGF0Y2guZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XG4gICAgLy8gY2FjaGUgb3JpZ2luYWwgbWV0aG9kXG4gICAgY29uc3Qgb3JpZ2luYWwgPSBhcnJheVByb3RvW21ldGhvZF1cbiAgICBkZWYoYXJyYXlNZXRob2RzLCBtZXRob2QsIHtcbiAgICAgICAgdmFsdWUoLi4uYXJncykge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gb3JpZ2luYWwuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgICAgICBjb25zdCBvYiA9IHRoaXMuX19vYl9fO1xuICAgICAgICAgICAgbGV0IGluc2VydGVkO1xuICAgICAgICAgICAgc3dpdGNoIChtZXRob2QpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdwdXNoJzpcbiAgICAgICAgICAgICAgICBjYXNlICd1bnNoaWZ0JzpcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0ZWQgPSBhcmdzO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdzcGxpY2UnOlxuICAgICAgICAgICAgICAgICAgICBpbnNlcnRlZCA9IGFyZ3Muc2xpY2UoMik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGluc2VydGVkKSB7XG4gICAgICAgICAgICAgICAgb2Iub2JzZXJ2ZUFycmF5KGluc2VydGVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9iLmNvbnRleHQuZGF0YVttZXRob2RdLmNhbGwob2IuY29udGV4dC5kYXRhLCBvYi5leHByLCAuLi5hcmdzKTtcbiAgICAgICAgICAgIG9ic2VydmUob2IuY29udGV4dC5kYXRhLmdldChvYi5leHByKSwgb2IuZXhwciwgb2IuY29udGV4dCk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgfSlcbn0pO1xuXG5jbGFzcyBPYnNlcnZlciB7XG5cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSwgZXhwciwgY29udGV4dCkge1xuICAgICAgICB0aGlzLmV4cHIgPSBleHByO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICBkZWYodmFsdWUsICdfX29iX18nLCB7XG4gICAgICAgICAgICB2YWx1ZTogdGhpc1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZS5fX3Byb3RvX18gPSBhcnJheU1ldGhvZHM7XG4gICAgICAgICAgICB0aGlzLm9ic2VydmVBcnJheSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSkgfHwgW107XG4gICAgICAgICAgICB0aGlzLndhbGsodmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2FsayB0aHJvdWdoIGFsbCBwcm9wZXJ0aWVzIGFuZCBjb252ZXJ0IHRoZW0gaW50b1xuICAgICAqIGdldHRlci9zZXR0ZXJzLiBUaGlzIG1ldGhvZCBzaG91bGQgb25seSBiZSBjYWxsZWQgd2hlblxuICAgICAqIHZhbHVlIHR5cGUgaXMgT2JqZWN0LlxuICAgICAqL1xuICAgIHdhbGsob2JqKSB7XG4gICAgICAgIGNvbnN0IGtleXMgPSB0aGlzLmtleXM7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZGVmaW5lUmVhY3RpdmUob2JqLCBrZXlzW2ldLCB0aGlzLmV4cHIsIHRoaXMuY29udGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPYnNlcnZlIGEgbGlzdCBvZiBBcnJheSBpdGVtcy5cbiAgICAgKi9cbiAgICBvYnNlcnZlQXJyYXkoaXRlbXMpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBpdGVtcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIG9ic2VydmUoaXRlbXNbaV0sIGV4dGVuZCh7fSwgdGhpcy5leHByLCB7XG4gICAgICAgICAgICAgICAgcGF0aHM6IFsuLi50aGlzLmV4cHIucGF0aHMsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogRXhwclR5cGUuTlVNQkVSLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9KSwgdGhpcy5jb250ZXh0KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5lUmVhY3RpdmUob2JqLCBrZXksIGV4cHIsIGNvbnRleHQpIHtcblxuICAgIGNvbnN0IHByb3BlcnR5ID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSk7XG4gICAgaWYgKHByb3BlcnR5ICYmIHByb3BlcnR5LmNvbmZpZ3VyYWJsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGNhdGVyIGZvciBwcmUtZGVmaW5lZCBnZXR0ZXIvc2V0dGVyc1xuICAgIGNvbnN0IGdldHRlciA9IHByb3BlcnR5ICYmIHByb3BlcnR5LmdldDtcbiAgICBjb25zdCBzZXR0ZXIgPSBwcm9wZXJ0eSAmJiBwcm9wZXJ0eS5zZXQ7XG5cbiAgICBjb25zdCBrZXlFeHByID0ge1xuICAgICAgICB0eXBlOiBFeHByVHlwZS5BQ0NFU1NPUixcbiAgICAgICAgcGF0aHM6IFsuLi5leHByLnBhdGhzLCB7XG4gICAgICAgICAgICB0eXBlOiBFeHByVHlwZS5TVFJJTkcsXG4gICAgICAgICAgICB2YWx1ZToga2V5XG4gICAgICAgIH1dXG4gICAgfTtcblxuICAgIGxldCB2YWwgPSBvYmpba2V5XTtcbiAgICBvYnNlcnZlKHZhbCwga2V5RXhwciwgY29udGV4dCk7XG4gICAgY29uc3QgbmV3UHJvcGVydHkgPSB7XG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgc2V0KG5ld1ZhbCkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBnZXR0ZXIgPyBnZXR0ZXIuY2FsbChvYmopIDogdmFsO1xuICAgICAgICAgICAgaWYgKG5ld1ZhbCA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZ2V0dGVyICYmICFzZXR0ZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2V0dGVyKSB7XG4gICAgICAgICAgICAgICAgc2V0dGVyLmNhbGwob2JqLCBuZXdWYWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsID0gbmV3VmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb2JzZXJ2ZShuZXdWYWwsIGtleUV4cHIsIGNvbnRleHQpO1xuICAgICAgICAgICAgY29udGV4dC5kYXRhLnNldChrZXlFeHByLCBuZXdWYWwsIHtmb3JjZTogdHJ1ZX0pO1xuICAgICAgICB9LFxuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGdldHRlciA/IGdldHRlci5jYWxsKG9iaikgOiB2YWw7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGRlZihvYmosIGtleSwgbmV3UHJvcGVydHkpO1xufVxuXG5jb25zdCBkZWZhdWx0RXhwciA9IHtcbiAgICB0eXBlOiBFeHByVHlwZS5BQ0NFU1NPUixcbiAgICBwYXRoczogW11cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBleHByID0gZXh0ZW5kKHt9LCBkZWZhdWx0RXhwcik7XG4gICAgY29uc3Qga2V5cyA9IHRoaXMuX2RhdGFLZXlzO1xuICAgIGNvbnN0IGtleUxlbmd0aCA9IGtleXMubGVuZ3RoO1xuXG4gICAgb2JzZXJ2ZSh0aGlzLmRhdGEuZ2V0KCksIGV4cHIsIHRoaXMpO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXM7XG5cbiAgICB0aGlzLl9kYXRhID0gdGhpcy5kYXRhLmdldCgpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlMZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBrZXkgPSBrZXlzW2ldO1xuICAgICAgICBkZWYoY29udGV4dCwga2V5LCB7XG4gICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRleHQuX2RhdGFba2V5XTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQobmV3VmFsKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5fZGF0YVtrZXldID0gbmV3VmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmRhdGEub3duZXIgPSB0aGlzO1xufVxuXG5mdW5jdGlvbiBvYnNlcnZlKHZhbHVlLCBleHByLCBjb250ZXh0KSB7XG4gICAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgb2I7XG4gICAgaWYgKGhhc093bih2YWx1ZSwgJ19fb2JfXycpICYmIHZhbHVlLl9fb2JfXyBpbnN0YW5jZW9mIE9ic2VydmVyKSB7XG4gICAgICAgIG9iID0gdmFsdWUuX19vYl9fXG4gICAgfVxuICAgIGVsc2UgaWYgKFxuICAgICAgICAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgfHwgaXNQbGFpbk9iamVjdCh2YWx1ZSkpXG4gICAgICAgICYmIE9iamVjdC5pc0V4dGVuc2libGUodmFsdWUpXG4gICAgKSB7XG4gICAgICAgIG9iID0gbmV3IE9ic2VydmVyKHZhbHVlLCBleHByLCBjb250ZXh0KTtcbiAgICB9XG4gICAgcmV0dXJuIG9iO1xufVxuIiwiLyoqXG4gKiBAZmlsZSDopobnm5Ygc2FuIOWOn+eUn+eahCBfY2FsY0NvbXB1dGVkXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHtkZWZ9IGZyb20gJy4uL3NoYXJlZC91dGlsJztcbmltcG9ydCBzbG90cyBmcm9tICcuL2dldC1zbG90cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChrZXkpIHtcbiAgICBsZXQgY29tcHV0ZWREZXBzID0gdGhpcy5jb21wdXRlZERlcHNba2V5XTtcbiAgICBpZiAoIWNvbXB1dGVkRGVwcykge1xuICAgICAgICBjb21wdXRlZERlcHMgPSB0aGlzLmNvbXB1dGVkRGVwc1trZXldID0ge307XG4gICAgfVxuXG4gICAgY29uc3QgbWUgPSB0aGlzO1xuICAgIGNvbnN0IGRhdGEgPSBtZS5kYXRhLmdldCgpO1xuICAgIGNvbnN0IGNvbnRleHQgPSB7fTtcblxuICAgIGRlZihjb250ZXh0LCAnJHJvb3QnLCB7XG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiBtZS4kcm9vdDtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgZGVmKGNvbnRleHQsICckc2xvdHMnLCB7XG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiBzbG90cy5jYWxsKG1lKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGRhdGEpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGsgPSBrZXlzW2ldO1xuICAgICAgICBkZWYoY29udGV4dCwgaywge1xuICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIGlmICghY29tcHV0ZWREZXBzW2tdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXB1dGVkRGVwc1trXSA9IDE7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lLmNvbXB1dGVkW2tdICYmICFtZS5jb21wdXRlZERlcHNba10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLl9jYWxjQ29tcHV0ZWQoayk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBtZS53YXRjaChrLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZS5fY2FsY0NvbXB1dGVkKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBtZS5kYXRhLmdldChrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5kYXRhLnNldChrZXksIHRoaXMuY29tcHV0ZWRba2V5XS5jYWxsKGNvbnRleHQpKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=