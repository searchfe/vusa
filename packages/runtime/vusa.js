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
      this.data.merge('$style', this.$style);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3V0aWwuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2FuXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvZ2V0LXNsb3RzLmpzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lL2RlZmluZS1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvb3ZlcnJpZGUtZGF0YS1nZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvbWVyZ2UtY2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvbWVyZ2Utc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvbG9vcC1leHByZXNzaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lL2dldC1jb21wb25lbnQtdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcnVudGltZS9vYmplY3QtY29tcHV0ZWQtcHJvcGVydGlycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcnVudGltZS9yZWYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvbWVyZ2Utb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcnVudGltZS9jb25zdGFudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcnVudGltZS9hdG9tLWdsb2JhbC1hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvYmluZC1kYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lL2NhbGMtY29tcHV0ZWQuanMiXSwibmFtZXMiOlsiZXh0ZW5kIiwiT2JqZWN0IiwiYXNzaWduIiwidG9PYmplY3QiLCJhcnIiLCJyZXMiLCJpIiwibGVuZ3RoIiwiX3RvU3RyaW5nIiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJpc09iamVjdCIsIm9iaiIsImhhc093blByb3BlcnR5IiwiaGFzT3duIiwia2V5IiwiY2FsbCIsImlzUGxhaW5PYmplY3QiLCJkZWYiLCJwcm9wZXJ0eSIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsImNhY2hlZCIsImZuIiwiY2FjaGUiLCJjcmVhdGUiLCJjYWNoZWRGbiIsInN0ciIsImhpdCIsImh5cGhlbmF0ZVJFIiwiaHlwaGVuYXRlIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwiY2FtZWxpemUiLCJfIiwiYyIsInRvVXBwZXJDYXNlIiwic2xvdENoaWxkcmVuIiwicmVkdWNlIiwicHJldiIsImNoaWxkIiwibmFtZSIsImNvbmNhdCIsImNoaWxkcmVuIiwiZGVmYXVsdFNhbk9wdGlvbnMiLCJfbWMiLCJtZXJnZUNsYXNzIiwiX21zIiwibWVyZ2VTdHlsZSIsIl9sIiwibG9vcEV4cHJlc3Npb24iLCJfZXgiLCJfb2NwIiwib2JqZWN0Q29tcHV0ZWRQcm9wZXJ0aWVzIiwiZ2V0Q29tcG9uZW50VHlwZSIsIiRlbWl0IiwiQ29tcG9uZW50IiwiZmlyZSIsIiRvbiIsIm9uIiwiJHdhdGNoIiwid2F0Y2giLCJfbm9vcCIsIm1lbWJlck1hcCIsIiRlbCIsImVsIiwiJGNvbnRleHQiLCJvd25lciIsIiRwYXJlbnQiLCJwYXJlbnRDb21wb25lbnQiLCIkY2hpbGRyZW4iLCJmaWx0ZXIiLCJub2RlVHlwZSIsIiRyb290Iiwicm9vdCIsIiRzbG90cyIsInNsb3QiLCJkZWZpbmUiLCJvcHRpb25zIiwiX1NhbkN0b3IiLCJzYW5PcHRpb25zIiwidGVtcGxhdGUiLCJfX3NhbnRlbXBsYXRlIiwiYU5vZGUiLCJfX3NhbmFOb2RlIiwiY29tcGlsZWRIb29rIiwiY29tcGlsZWQiLCJfY2FsY0NvbXB1dGVkIiwiY2FsY0NvbXB1dGVkIiwiYmluZCIsInByb3BlcnRpZXMiLCJrZXlzIiwicHJvcHMiLCJnZXQiLCIkb3B0aW9ucyIsInZhbHVlIiwiZGVmaW5lUHJvcGVydGllcyIsInJlZnMiLCJfX3NhblJlZnMiLCJpbml0ZWRIb29rIiwiaW5pdGVkIiwibWUiLCIkcmVmcyIsImxlbiIsInIiLCJyZWYiLCIkc3R5bGUiLCJkYXRhIiwibWVyZ2UiLCJiaW5kRGF0YSIsImZvckVhY2giLCJpbml0RGF0YSIsImRlZmF1bHRQcm9wcyIsInByb3BLZXlzIiwiX3Byb3BLZXlzIiwiQXJyYXkiLCJpc0FycmF5IiwicCIsInByb3AiLCJkZWZhdWx0IiwiY29tcHV0ZWQiLCJfY29tcHV0ZWRLZXlzIiwiayIsIl9zcmNTYmluZERhdGEiLCJfZGF0YUtleXMiLCJjb21wb25lbnRzIiwib3JpZ2luYWxHZXQiLCJEYXRhIiwiZXhwciIsImNhbGxlZSIsInVuZGVmaW5lZCIsInR5cGUiLCJFeHByVHlwZSIsIkFDQ0VTU09SIiwicGF0aHMiLCJmaXJzdCIsImluZGV4T2YiLCJsIiwic3RyaW5nIiwiY2xzIiwic3BsaXQiLCJvYmplY3QiLCJhcnJheSIsImNsYXp6IiwiZWxlbWVudCIsInN0YXRpY0NsYXNzIiwiam9pbiIsInBhcnNlU3R5bGVUZXh0IiwiY3NzVGV4dCIsImxpc3REZWxpbWl0ZXIiLCJwcm9wZXJ0eURlbGltaXRlciIsIml0ZW0iLCJ0bXAiLCJ0cmltIiwibm9ybWFsaXplU3R5bGVCaW5kaW5nIiwiYmluZGluZ1N0eWxlIiwic3RhdGljU3R5bGUiLCJzdHlsZSIsInZTaG93IiwiZGlzcGxheSIsInRvQXJyYXkiLCJuIiwiaXNOYU4iLCJ0YWdOYW1lIiwiaG90c3BvdCIsImlzIiwiaXNWYWx1ZSIsInYiLCJjaGlsZHJlblRyYXZlcnNhbCIsInJlZlRhcmdldCIsImVsZW1lbnRUcmF2ZXJzYWwiLCJkaXJlY3RpdmVzIiwic2FuIiwiZXZhbEV4cHIiLCJzY29wZSIsIm1hcCIsInNvdXJjZSIsIm1lcmdlSG9vayIsInBhcmVudFZhbCIsImNoaWxkVmFsIiwibWVyZ2VPcHRpb25zIiwiZGVzdE9wdGlvbnMiLCJsaXN0IiwibWl4aW5zIiwiYXRvbUJ1aWxkSW5NaXhpbiIsIm9wdCIsIm1ldGhvZHMiLCJqIiwibGlmZUN5Y2xlS2V5cyIsImRrIiwibGlmZUN5Y2xlTWFwIiwiaG9va3MiLCJzbGljZSIsImhvb2siLCJiZWZvcmVDcmVhdGUiLCJtb3VudGVkIiwiY3JlYXRlZCIsImJlZm9yZU1vdW50IiwiYmVmb3JlRGVzdHJveSIsImRlc3Ryb3kiLCJ1cGRhdGVkIiwiTUFUSF9NRVRIT0QiLCJleHBvcnRzIiwiYXJncyIsIk1hdGgiLCJhcHBseSIsImFycmF5X3NsaWNlIiwic3RhcnQiLCJlbmQiLCJhcnJheV9qb2luIiwic2VwIiwic3RyX3BvcyIsIm1hdGNoIiwib2JqZWN0X2ZyZWV6ZSIsImZyZWV6ZSIsImZpbHRlcnMiLCJqc29uIiwiSlNPTiIsInN0cmluZ2lmeSIsImxvd2VyIiwidXBwZXIiLCJhcnJheVByb3RvIiwiYXJyYXlNZXRob2RzIiwibWV0aG9kc1RvUGF0Y2giLCJtZXRob2QiLCJvcmlnaW5hbCIsIm9iIiwiX19vYl9fIiwiaW5zZXJ0ZWQiLCJvYnNlcnZlQXJyYXkiLCJjb250ZXh0IiwicmVzdWx0Iiwib2JzZXJ2ZSIsIk9ic2VydmVyIiwiX19wcm90b19fIiwid2FsayIsImRlZmluZVJlYWN0aXZlIiwiaXRlbXMiLCJOVU1CRVIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJnZXR0ZXIiLCJzZXR0ZXIiLCJzZXQiLCJrZXlFeHByIiwiU1RSSU5HIiwidmFsIiwibmV3UHJvcGVydHkiLCJuZXdWYWwiLCJmb3JjZSIsImRlZmF1bHRFeHByIiwia2V5TGVuZ3RoIiwiX2RhdGEiLCJpc0V4dGVuc2libGUiLCJjb21wdXRlZERlcHMiLCJzbG90cyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFD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RUFBc0I7QUFDbEJtSSxzQkFBWSxDQUFDbkksQ0FBRCxDQUFaLEdBQWtCLENBQWxCOztBQUVBLGNBQUlyQixFQUFFLENBQUNtQixRQUFILENBQVlFLENBQVosS0FBa0IsQ0FBQ3JCLEVBQUUsQ0FBQ3dKLFlBQUgsQ0FBZ0JuSSxDQUFoQixDQUF2QixFQUEyQztBQUN2Q3JCLGNBQUUsQ0FBQ2QsYUFBSCxDQUFpQm1DLENBQWpCO0FBQ0g7O0FBRURyQixZQUFFLENBQUN4QyxLQUFILENBQVM2RCxDQUFULEVBQVksWUFBWTtBQUNwQnJCLGNBQUUsQ0FBQ2QsYUFBSCxDQUFpQnpFLEdBQWpCO0FBQ0gsV0FGRDtBQUdIOztBQUVELGVBQU91RixFQUFFLENBQUNNLElBQUgsQ0FBUWQsR0FBUixDQUFZNkIsQ0FBWixDQUFQO0FBQ0g7QUFmVyxLQUFoQjtBQTFCc0I7O0FBd0IxQixPQUFLLElBQUlySCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHc0YsSUFBSSxDQUFDckYsTUFBekIsRUFBaUNELENBQUMsRUFBbEMsRUFBc0M7QUFBQSxVQUE3QkEsQ0FBNkI7QUFtQnJDOztBQUVELE9BQUtzRyxJQUFMLENBQVV1SSxHQUFWLENBQWNwTyxHQUFkLEVBQW1CLEtBQUswRyxRQUFMLENBQWMxRyxHQUFkLEVBQW1CQyxJQUFuQixDQUF3QnVOLE9BQXhCLENBQW5CO0FBQ0gsQyIsImZpbGUiOiJ2dXNhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwic2FuXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInNhblwiXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZmFjdG9yeShyZXF1aXJlKFwic2FuXCIpKSA6IGZhY3Rvcnkocm9vdFtcInNhblwiXSk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh3aW5kb3csIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzFfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbiIsIi8qKlxuICogQGZpbGUg5LiA5Lqb5bel5YW35Ye95pWwXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuLyoqXG4gKiBNaXggcHJvcGVydGllcyBpbnRvIHRhcmdldCBvYmplY3QuXG4gKi9cbmV4cG9ydCBjb25zdCBleHRlbmQgPSBPYmplY3QuYXNzaWduO1xuXG4vKipcbiAqIE1lcmdlIGFuIEFycmF5IG9mIE9iamVjdHMgaW50byBhIHNpbmdsZSBPYmplY3QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b09iamVjdChhcnIpIHtcbiAgICBjb25zdCByZXMgPSB7fTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoYXJyW2ldKSB7XG4gICAgICAgICAgICBleHRlbmQocmVzLCBhcnJbaV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59XG5cbi8qKlxuICogR2V0IHRoZSByYXcgdHlwZSBzdHJpbmcgb2YgYSB2YWx1ZSwgZS5nLiwgW29iamVjdCBPYmplY3RdLlxuICovXG5leHBvcnQgY29uc3QgX3RvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBRdWljayBvYmplY3QgY2hlY2sgLSB0aGlzIGlzIHByaW1hcmlseSB1c2VkIHRvIHRlbGxcbiAqIE9iamVjdHMgZnJvbSBwcmltaXRpdmUgdmFsdWVzIHdoZW4gd2Uga25vdyB0aGUgdmFsdWVcbiAqIGlzIGEgSlNPTi1jb21wbGlhbnQgdHlwZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqZWN0KG9iaikge1xuICAgIHJldHVybiBvYmogIT09IG51bGwgJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogQ2hlY2sgd2hldGhlciBhbiBvYmplY3QgaGFzIHRoZSBwcm9wZXJ0eS5cbiAqL1xuY29uc3QgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuZXhwb3J0IGZ1bmN0aW9uIGhhc093bihvYmosIGtleSkge1xuICAgIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KTtcbn1cblxuLyoqXG4gKiBTdHJpY3Qgb2JqZWN0IHR5cGUgY2hlY2suIE9ubHkgcmV0dXJucyB0cnVlXG4gKiBmb3IgcGxhaW4gSmF2YVNjcmlwdCBvYmplY3RzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNQbGFpbk9iamVjdChvYmopIHtcbiAgICByZXR1cm4gX3RvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgT2JqZWN0XSc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWYob2JqLCBrZXksIHByb3BlcnR5KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCBleHRlbmQoe1xuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSwgcHJvcGVydHkpKTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBjYWNoZWQgdmVyc2lvbiBvZiBhIHB1cmUgZnVuY3Rpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjYWNoZWQoZm4pIHtcbiAgICBjb25zdCBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGNhY2hlZEZuKHN0cikge1xuICAgICAgICBjb25zdCBoaXQgPSBjYWNoZVtzdHJdO1xuICAgICAgICByZXR1cm4gaGl0IHx8IChjYWNoZVtzdHJdID0gZm4oc3RyKSk7XG4gICAgfTtcbn1cblxuLyoqXG4gKiBIeXBoZW5hdGUgYSBjYW1lbENhc2Ugc3RyaW5nLlxuICovXG5jb25zdCBoeXBoZW5hdGVSRSA9IC8oW14tXSkoW0EtWl0pL2c7XG5leHBvcnQgY29uc3QgaHlwaGVuYXRlID0gY2FjaGVkKChzdHIpID0+IHtcbiAgICByZXR1cm4gc3RyXG4gICAgICAgIC5yZXBsYWNlKGh5cGhlbmF0ZVJFLCAnJDEtJDInKVxuICAgICAgICAucmVwbGFjZShoeXBoZW5hdGVSRSwgJyQxLSQyJylcbiAgICAgICAgLnRvTG93ZXJDYXNlKCk7XG59KTtcblxuZXhwb3J0IGNvbnN0IGNhbWVsaXplID0gc3RyID0+IHN0ci5yZXBsYWNlKC8tKFxcdykvZywgKF8sIGMpID0+IChjID8gYy50b1VwcGVyQ2FzZSgpIDogJycpKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fMV9fOyIsIi8qKlxuICogQGZpbGUgc2xvdFxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCB7ZXh0ZW5kfSBmcm9tICcuLi9zaGFyZWQvdXRpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCB7XG4gICAgICAgIHNsb3RDaGlsZHJlblxuICAgIH0gPSB0aGlzO1xuXG4gICAgcmV0dXJuIHNsb3RDaGlsZHJlbi5yZWR1Y2UoKHByZXYsIGNoaWxkKSA9PiB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBjaGlsZC5uYW1lIHx8ICdkZWZhdWx0JztcbiAgICAgICAgaWYgKCFwcmV2W25hbWVdKSB7XG4gICAgICAgICAgICBwcmV2W25hbWVdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgcHJldltuYW1lXSA9IHByZXZbbmFtZV0uY29uY2F0KGNoaWxkLmNoaWxkcmVuKTtcbiAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgfSwge30pO1xufVxuIiwiLyoqXG4gKiBAZmlsZSBlbnRyeVxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmV4cG9ydCB7ZGVmYXVsdCBhcyBkZWZpbmVDb21wb25lbnR9IGZyb20gJy4vZGVmaW5lLWNvbXBvbmVudCc7XG4iLCIvKipcbiAqIEBmaWxlIGNvbXBvbmVudFxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCAnLi9vdmVycmlkZS1kYXRhLWdldCc7XG5cbmltcG9ydCB7ZGVmaW5lQ29tcG9uZW50LCBpbmhlcml0cywgQ29tcG9uZW50fSBmcm9tICdzYW4nO1xuaW1wb3J0IHtleHRlbmQsIGh5cGhlbmF0ZSwgZGVmfSBmcm9tICcuLi9zaGFyZWQvdXRpbCc7XG5pbXBvcnQgbWVyZ2VDbGFzcyBmcm9tICcuL21lcmdlLWNsYXNzJztcbmltcG9ydCBtZXJnZVN0eWxlIGZyb20gJy4vbWVyZ2Utc3R5bGUnO1xuaW1wb3J0IGxvb3BFeHByZXNzaW9uIGZyb20gJy4vbG9vcC1leHByZXNzaW9uJztcbmltcG9ydCBnZXRDb21wb25lbnRUeXBlIGZyb20gJy4vZ2V0LWNvbXBvbmVudC10eXBlJztcbmltcG9ydCBvYmplY3RDb21wdXRlZFByb3BlcnRpZXMgZnJvbSAnLi9vYmplY3QtY29tcHV0ZWQtcHJvcGVydGlycyc7XG5pbXBvcnQgcmVmIGZyb20gJy4vcmVmJztcbmltcG9ydCBtZXJnZU9wdGlvbnMgZnJvbSAnLi9tZXJnZS1vcHRpb25zJztcbmltcG9ydCBiaW5kRGF0YSBmcm9tICcuL2JpbmQtZGF0YSc7XG5pbXBvcnQgY2FsY0NvbXB1dGVkIGZyb20gJy4vY2FsYy1jb21wdXRlZCc7XG5pbXBvcnQgc2xvdCBmcm9tICcuL2dldC1zbG90cyc7XG5cbi8qIGVzbGludC1kaXNhYmxlIGZlY3MtY2FtZWxjYXNlICovXG5jb25zdCBkZWZhdWx0U2FuT3B0aW9ucyA9IHtcbiAgICBfbWM6IG1lcmdlQ2xhc3MsXG4gICAgX21zOiBtZXJnZVN0eWxlLFxuICAgIF9sOiBsb29wRXhwcmVzc2lvbixcbiAgICBfZXg6IGV4dGVuZCxcbiAgICBfb2NwOiBvYmplY3RDb21wdXRlZFByb3BlcnRpZXMsXG4gICAgZ2V0Q29tcG9uZW50VHlwZSxcbiAgICAkZW1pdDogQ29tcG9uZW50LnByb3RvdHlwZS5maXJlLFxuICAgICRvbjogQ29tcG9uZW50LnByb3RvdHlwZS5vbixcbiAgICAkd2F0Y2g6IENvbXBvbmVudC5wcm90b3R5cGUud2F0Y2gsXG4gICAgX25vb3A6IGZ1bmN0aW9uICgpIHt9XG59O1xuLyogZXNsaW50LWVuYWJsZSBmZWNzLWNhbWVsY2FzZSAqL1xuXG5jb25zdCBtZW1iZXJNYXAgPSB7XG4gICAgJGVsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbDtcbiAgICB9LFxuICAgICRjb250ZXh0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vd25lcjtcbiAgICB9LFxuICAgICRwYXJlbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmVudENvbXBvbmVudDtcbiAgICB9LFxuICAgICRjaGlsZHJlbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+IGNoaWxkLm5vZGVUeXBlID09PSA1KTtcbiAgICB9LFxuICAgICRyb290KCkge1xuICAgICAgICBsZXQgcm9vdCA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLnBhcmVudENvbXBvbmVudCkge1xuICAgICAgICAgICAgd2hpbGUgKHJvb3QucGFyZW50Q29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgcm9vdCA9IHJvb3QucGFyZW50Q29tcG9uZW50XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgfSxcbiAgICAkc2xvdHM6IHNsb3Rcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlZmluZShvcHRpb25zKSB7XG5cbiAgICBpZiAob3B0aW9ucy5fU2FuQ3Rvcikge1xuICAgICAgICByZXR1cm4gb3B0aW9ucy5fU2FuQ3RvcjtcbiAgICB9XG5cbiAgICBjb25zdCBzYW5PcHRpb25zID0gZXh0ZW5kKHtcbiAgICAgICAgdGVtcGxhdGU6IG9wdGlvbnMuX19zYW50ZW1wbGF0ZSxcbiAgICAgICAgYU5vZGU6IG9wdGlvbnMuX19zYW5hTm9kZSxcbiAgICB9LCBkZWZhdWx0U2FuT3B0aW9ucywgbWVyZ2VPcHRpb25zKG9wdGlvbnMpKTtcblxuICAgIGNvbnN0IGNvbXBpbGVkSG9vayA9IHNhbk9wdGlvbnMuY29tcGlsZWQ7XG4gICAgc2FuT3B0aW9ucy5jb21waWxlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fY2FsY0NvbXB1dGVkID0gY2FsY0NvbXB1dGVkLmJpbmQodGhpcyk7XG4gICAgICAgIGNvbXBpbGVkSG9vayAmJiBjb21waWxlZEhvb2suY2FsbCh0aGlzKTtcblxuICAgICAgICBjb25zdCBwcm9wZXJ0aWVzID0gT2JqZWN0XG4gICAgICAgICAgICAua2V5cyhtZW1iZXJNYXApXG4gICAgICAgICAgICAucmVkdWNlKChwcm9wcywga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgcHJvcHNba2V5XSA9IHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1lbWJlck1hcFtrZXldLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9wcztcbiAgICAgICAgICAgIH0sIHt9KTtcblxuICAgICAgICBwcm9wZXJ0aWVzLiRvcHRpb25zID0ge1xuICAgICAgICAgICAgdmFsdWU6IG9wdGlvbnNcbiAgICAgICAgfTtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCBwcm9wZXJ0aWVzKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVmcyA9IG9wdGlvbnMuX19zYW5SZWZzO1xuICAgIGNvbnN0IGluaXRlZEhvb2sgPSBzYW5PcHRpb25zLmluaXRlZDtcbiAgICBzYW5PcHRpb25zLmluaXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgbWUgPSB0aGlzO1xuICAgICAgICB0aGlzLiRyZWZzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuICAgICAgICBpZiAocmVmcykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHJlZnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCByID0gcmVmc1tpXTtcbiAgICAgICAgICAgICAgICBkZWYobWUuJHJlZnMsIHIubmFtZSwge1xuICAgICAgICAgICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gci5yb290ID8gbWUuZWwgOiBtZS5yZWYoci5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gb3ZlcndyaXRlIHNhbiBjb21wb25lbnQgYXBpIGZvciBzdXBwb3J0IHYtZm9yICsgcmVmXG4gICAgICAgICAgICBtZS5yZWYgPSByZWY7XG4gICAgICAgIH1cblxuICAgICAgICBpbml0ZWRIb29rICYmIGluaXRlZEhvb2suY2FsbCh0aGlzKTtcblxuICAgICAgICAvLyBtZXJnZSBjc3MgbW9kdWxlc1xuICAgICAgICBpZiAodGhpcy4kc3R5bGUpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5tZXJnZSgnJHN0eWxlJywgdGhpcy4kc3R5bGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgYmluZERhdGEuY2FsbCh0aGlzKTtcblxuICAgICAgICBpZiAob3B0aW9ucy53YXRjaCkge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMob3B0aW9ucy53YXRjaCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMud2F0Y2goa2V5LCBvcHRpb25zLndhdGNoW2tleV0uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBzYW5PcHRpb25zLmluaXREYXRhID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGNvbnN0IG1lID0gdGhpcztcblxuICAgICAgICBjb25zdCBkZWZhdWx0UHJvcHMgPSB7fTtcbiAgICAgICAgaWYgKG9wdGlvbnMucHJvcHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb3BLZXlzID0gbWUuX3Byb3BLZXlzID0gb3B0aW9ucy5fcHJvcEtleXMgPSBvcHRpb25zLnByb3BzXG4gICAgICAgICAgICAgICAgPyAoQXJyYXkuaXNBcnJheShvcHRpb25zLnByb3BzKSA/IG9wdGlvbnMucHJvcHMgOiBPYmplY3Qua2V5cyhvcHRpb25zLnByb3BzKSlcbiAgICAgICAgICAgICAgICA6IFtdO1xuXG4gICAgICAgICAgICAvLyDpu5jorqTlsZ7mgKdcbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShvcHRpb25zLnByb3BzKSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBwcm9wS2V5cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwID0gcHJvcEtleXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3AgPSBvcHRpb25zLnByb3BzW3BdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoJ2RlZmF1bHQnIGluIHByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRQcm9wc1twXSA9IHR5cGVvZiBwcm9wLmRlZmF1bHQgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHByb3AuZGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBwcm9wLmRlZmF1bHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZGVmKG1lLCBwLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1lLmRhdGEuZ2V0KHApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5jb21wdXRlZCkge1xuICAgICAgICAgICAgbWUuX2NvbXB1dGVkS2V5cyA9IE9iamVjdC5rZXlzKG9wdGlvbnMuY29tcHV0ZWQpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IG1lLl9jb21wdXRlZEtleXM7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGsgPSBtZS5fY29tcHV0ZWRLZXlzW2ldO1xuICAgICAgICAgICAgICAgIGRlZihtZSwgaywge1xuICAgICAgICAgICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWUuZGF0YS5nZXQoayk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1lLl9jb21wdXRlZEtleXMgPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRhdGEgPSB0eXBlb2Ygb3B0aW9ucy5kYXRhID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICA/IG9wdGlvbnMuZGF0YS5jYWxsKGV4dGVuZCh7fSwgZGVmYXVsdFByb3BzLCB0aGlzLl9zcmNTYmluZERhdGEpKVxuICAgICAgICAgICAgOiAob3B0aW9ucy5kYXRhIHx8IHt9KTtcblxuICAgICAgICB0aGlzLl9kYXRhS2V5cyA9IE9iamVjdC5rZXlzKGRhdGEpIHx8IFtdO1xuXG4gICAgICAgIHJldHVybiBleHRlbmQoeyRzdHlsZToge319LCBkZWZhdWx0UHJvcHMsIGRhdGEpO1xuICAgIH07XG5cbiAgICBpZiAob3B0aW9ucy5jb21wb25lbnRzKSB7XG4gICAgICAgIHNhbk9wdGlvbnMuY29tcG9uZW50cyA9IE9iamVjdFxuICAgICAgICAgICAgLmtleXMob3B0aW9ucy5jb21wb25lbnRzKVxuICAgICAgICAgICAgLnJlZHVjZSgocHJldiwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgcHJldltrZXldID0gcHJldltoeXBoZW5hdGUoa2V5KV0gPSBkZWZpbmUob3B0aW9ucy5jb21wb25lbnRzW2tleV0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgICAgICAgfSwge30pO1xuICAgIH1cblxuICAgIGNvbnN0IENvbXBvbmVudCA9IGRlZmluZUNvbXBvbmVudChzYW5PcHRpb25zKTtcblxuICAgIHJldHVybiBvcHRpb25zLl9TYW5DdG9yID0gQ29tcG9uZW50O1xufVxuXG4iLCIvKipcbiAqIEBmaWxlIG92ZXJyaWRlIGV2YWwgZXhwclxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCB7RGF0YSwgcGFyc2VFeHByLCBFeHByVHlwZSwgZXZhbEV4cHJ9IGZyb20gJ3Nhbic7XG5cbmNvbnN0IG9yaWdpbmFsR2V0ID0gRGF0YS5wcm90b3R5cGUuZ2V0O1xuXG5EYXRhLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoZXhwciwgY2FsbGVlKSB7XG4gICAgaWYgKGV4cHIgJiYgdHlwZW9mIGV4cHIgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGV4cHIgPSBwYXJzZUV4cHIoZXhwcik7XG4gICAgfVxuICAgIGxldCB2YWx1ZSA9IG9yaWdpbmFsR2V0LmNhbGwodGhpcywgZXhwciwgY2FsbGVlKTtcbiAgICBpZiAoIWV4cHIgfHwgdmFsdWUgIT09IHVuZGVmaW5lZCB8fCAhdGhpcy5vd25lciB8fCBleHByLnR5cGUgIT09IEV4cHJUeXBlLkFDQ0VTU09SKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgY29uc3QgcGF0aHMgPSBleHByLnBhdGhzO1xuICAgIGNvbnN0IGZpcnN0ID0gcGF0aHNbMF0udmFsdWU7XG4gICAgaWYgKFxuICAgICAgICBbXG4gICAgICAgICAgICAuLi50aGlzLm93bmVyLl9wcm9wS2V5cyxcbiAgICAgICAgICAgIC4uLnRoaXMub3duZXIuX2RhdGFLZXlzLFxuICAgICAgICAgICAgLi4udGhpcy5vd25lci5fY29tcHV0ZWRLZXlzXG4gICAgICAgIF0uaW5kZXhPZihmaXJzdCkgPj0gMFxuICAgICkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHZhbHVlID0gdGhpcy5vd25lcltmaXJzdF07XG4gICAgZm9yICh2YXIgaSA9IDEsIGwgPSBwYXRocy5sZW5ndGg7IHZhbHVlICE9IG51bGwgJiYgaSA8IGw7IGkrKykge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlW3BhdGhzW2ldLnZhbHVlIHx8IGV2YWxFeHByKHBhdGhzW2ldLCBjYWxsZWUpXTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xufTtcbiIsIi8qKlxuICogQGZpbGUgbWVyZ2UgY2xhc3NcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5mdW5jdGlvbiBzdHJpbmcoY2xzID0gJycpIHtcbiAgICBpZiAoIWNscykge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHJldHVybiBjbHNcbiAgICAgICAgLnNwbGl0KCcgJylcbiAgICAgICAgLnJlZHVjZSgocHJldiwgbmFtZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgICAgW25hbWVdOiAxXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LCB7fSk7XG59XG5cbmZ1bmN0aW9uIG9iamVjdChjbHMgPSB7fSkge1xuICAgIHJldHVybiBPYmplY3RcbiAgICAgICAgLmtleXMoY2xzKVxuICAgICAgICAucmVkdWNlKChwcmV2LCBrZXkpID0+IHtcbiAgICAgICAgICAgIGlmICghY2xzW2tleV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgICAgICAuLi5zdHJpbmcoa2V5KVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSwge30pO1xufVxuXG5mdW5jdGlvbiBhcnJheShjbHMgPSBbXSkge1xuICAgIGxldCBjbGF6eiA9IHt9O1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBjbHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGNsc1tpXTtcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBjbGF6eiA9IHtcbiAgICAgICAgICAgIC4uLmNsYXp6LFxuICAgICAgICAgICAgLi4uKFxuICAgICAgICAgICAgICAgIHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgID8gc3RyaW5nKGVsZW1lbnQpXG4gICAgICAgICAgICAgICAgOiAoQXJyYXkuaXNBcnJheShlbGVtZW50KSA/IGFycmF5KGVsZW1lbnQpIDogb2JqZWN0KGVsZW1lbnQpKVxuICAgICAgICAgICAgKVxuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gY2xheno7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0aWNDbGFzcyA9ICcnLCBjbHMgPSB7fSkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhhcnJheShbc3RhdGljQ2xhc3MsIGNsc10pKS5qb2luKCcgJyk7XG59XG4iLCIvKipcbiAqIEBmaWxlIG1lcmdlIHN0eWxlXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHtjYWNoZWQsIGV4dGVuZCwgdG9PYmplY3R9IGZyb20gJy4uL3NoYXJlZC91dGlsJztcblxuY29uc3QgcGFyc2VTdHlsZVRleHQgPSBjYWNoZWQoZnVuY3Rpb24gKGNzc1RleHQpIHtcbiAgICBjb25zdCByZXMgPSB7fTtcbiAgICBjb25zdCBsaXN0RGVsaW1pdGVyID0gLzsoPyFbXihdKlxcKSkvZztcbiAgICBjb25zdCBwcm9wZXJ0eURlbGltaXRlciA9IC86KC4rKS87XG4gICAgY3NzVGV4dC5zcGxpdChsaXN0RGVsaW1pdGVyKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICB2YXIgdG1wID0gaXRlbS5zcGxpdChwcm9wZXJ0eURlbGltaXRlcik7XG4gICAgICAgICAgICB0bXAubGVuZ3RoID4gMSAmJiAocmVzW3RtcFswXS50cmltKCldID0gdG1wWzFdLnRyaW0oKSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzO1xufSk7XG5cbi8vIG5vcm1hbGl6ZSBwb3NzaWJsZSBhcnJheSAvIHN0cmluZyB2YWx1ZXMgaW50byBPYmplY3RcbmZ1bmN0aW9uIG5vcm1hbGl6ZVN0eWxlQmluZGluZyhiaW5kaW5nU3R5bGUpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShiaW5kaW5nU3R5bGUpKSB7XG4gICAgICAgIHJldHVybiB0b09iamVjdChiaW5kaW5nU3R5bGUpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGJpbmRpbmdTdHlsZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlU3R5bGVUZXh0KGJpbmRpbmdTdHlsZSk7XG4gICAgfVxuICAgIHJldHVybiBiaW5kaW5nU3R5bGU7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRpY1N0eWxlLCBzdHlsZSwgdlNob3cgPSB0cnVlKSB7XG4gICAgc3R5bGUgPSBub3JtYWxpemVTdHlsZUJpbmRpbmcoc3R5bGUpO1xuICAgIGlmICghdlNob3cpIHtcbiAgICAgICAgc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gICAgcmV0dXJuIHN0YXRpY1N0eWxlXG4gICAgICAgID8gZXh0ZW5kKHN0YXRpY1N0eWxlLCBzdHlsZSlcbiAgICAgICAgOiBzdHlsZTtcbn1cbiIsIi8qKlxuICogQGZpbGUgbG9vcCBleHByZXNzaW9uXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHtjYWNoZWR9IGZyb20gJy4uL3NoYXJlZC91dGlsJztcblxuY29uc3QgdG9BcnJheSA9IGNhY2hlZChmdW5jdGlvbiAobikge1xuICAgIGNvbnN0IHZhbHVlID0gbmV3IEFycmF5KG4pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgIHZhbHVlW2ldID0gaSArIDE7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAoIWlzTmFOKHZhbHVlKSkge1xuICAgICAgICBjb25zdCBuID0gK3ZhbHVlO1xuICAgICAgICB2YWx1ZSA9IHRvQXJyYXkobik7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn1cblxuIiwiLyoqXG4gKiBAZmlsZSBnZXQgY29tcG9uZW50IHR5cGVcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQge2V2YWxFeHByfSBmcm9tICdzYW4nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoYU5vZGUsIGRhdGEpIHtcbiAgICBpZiAoYU5vZGUudGFnTmFtZSAhPT0gJ2NvbXBvbmVudCcgfHwgYU5vZGUuaG90c3BvdC5wcm9wcy5pcyA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudHNbYU5vZGUudGFnTmFtZV07XG4gICAgfVxuXG4gICAgY29uc3QgaXMgPSBhTm9kZS5wcm9wc1thTm9kZS5ob3RzcG90LnByb3BzLmlzXTtcbiAgICBjb25zdCBpc1ZhbHVlID0gZXZhbEV4cHIoaXMuZXhwciwgZGF0YSk7XG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50c1tpc1ZhbHVlXTtcbn1cbiIsIi8qKlxuICogQGZpbGUgb2JqZWN0IGNvbXB1dGVkIHByb3BlcnRpZXMgbWVyZ2VcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocHJvcGVydGllcykge1xuICAgIHJldHVybiBwcm9wZXJ0aWVzLnJlZHVjZSgocHJldiwge2ssIHZ9KSA9PiB7XG4gICAgICAgIHByZXZba10gPSB2O1xuICAgICAgICByZXR1cm4gcHJldjtcbiAgICB9LCB7fSk7XG59XG4iLCIvKipcbiAqIEBmaWxlIHNhbiByZWYgcmV3cml0ZVxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCAqIGFzIHNhbiBmcm9tICdzYW4nO1xuaW1wb3J0IHtjYW1lbGl6ZX0gZnJvbSAnLi4vc2hhcmVkL3V0aWwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAobmFtZSkge1xuXG4gICAgY29uc3Qgb3duZXIgPSB0aGlzO1xuXG4gICAgZnVuY3Rpb24gY2hpbGRyZW5UcmF2ZXJzYWwoY2hpbGRyZW4pIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcmVmVGFyZ2V0ID0gZWxlbWVudFRyYXZlcnNhbChjaGlsZHJlbltpXSk7XG4gICAgICAgICAgICBpZiAocmVmVGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlZlRhcmdldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVsZW1lbnRUcmF2ZXJzYWwoZWxlbWVudCkge1xuICAgICAgICBjb25zdCBub2RlVHlwZSA9IGVsZW1lbnQubm9kZVR5cGU7XG4gICAgICAgIGlmIChub2RlVHlwZSA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZWZUYXJnZXQ7XG4gICAgICAgIGlmIChlbGVtZW50Lm93bmVyID09PSBvd25lcikge1xuICAgICAgICAgICAgbGV0IHJlZjtcbiAgICAgICAgICAgIGxldCB2YWx1ZTtcbiAgICAgICAgICAgIHN3aXRjaCAobm9kZVR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICByZWYgPSBlbGVtZW50LmFOb2RlLmRpcmVjdGl2ZXMucmVmO1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHNhbi5ldmFsRXhwcihyZWYudmFsdWUsIGVsZW1lbnQuc2NvcGUsIG93bmVyKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlZiAmJiAodmFsdWUgPT09IG5hbWUgfHwgY2FtZWxpemUodmFsdWUpID09PSBuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5vZGVUeXBlID09PSA0ID8gZWxlbWVudC5lbCA6IGVsZW1lbnQuY2hpbGRyZW4ubWFwKGVsZW1lbnRUcmF2ZXJzYWwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICByZWYgPSBlbGVtZW50LnNvdXJjZS5kaXJlY3RpdmVzLnJlZjtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBzYW4uZXZhbEV4cHIocmVmLnZhbHVlLCBlbGVtZW50LnNjb3BlLCBvd25lcik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWYgJiYgKHZhbHVlID09PSBuYW1lIHx8IGNhbWVsaXplKHZhbHVlKSA9PT0gbmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlZlRhcmdldCA9IGVsZW1lbnQuc2xvdENoaWxkcmVuICYmIGNoaWxkcmVuVHJhdmVyc2FsKGVsZW1lbnQuc2xvdENoaWxkcmVuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZWZUYXJnZXQgfHwgY2hpbGRyZW5UcmF2ZXJzYWwoZWxlbWVudC5jaGlsZHJlbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkcmVuVHJhdmVyc2FsKHRoaXMuY2hpbGRyZW4pO1xufTtcbiIsIi8qKlxuICogQGZpbGUgbWVyZ2Ugb3B0aW9uc1xuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCB7ZXh0ZW5kfSBmcm9tICcuLi9zaGFyZWQvdXRpbCc7XG5pbXBvcnQge2xpZmVDeWNsZUtleXMsIGxpZmVDeWNsZU1hcH0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQgYXRvbUJ1aWxkSW5NaXhpbiBmcm9tICcuL2F0b20tZ2xvYmFsLWFwaSc7XG5cbmNvbnN0IGtleXMgPSBbXG4gICAgJ2ZpbHRlcnMnLFxuICAgICdjb21wdXRlZCdcbl07XG5cbmZ1bmN0aW9uIG1lcmdlSG9vayhwYXJlbnRWYWwsIGNoaWxkVmFsKSB7XG4gICAgcmV0dXJuIGNoaWxkVmFsXG4gICAgICAgID8gcGFyZW50VmFsXG4gICAgICAgICAgICA/IHBhcmVudFZhbC5jb25jYXQoY2hpbGRWYWwpXG4gICAgICAgICAgICA6IEFycmF5LmlzQXJyYXkoY2hpbGRWYWwpXG4gICAgICAgICAgICAgICAgPyBjaGlsZFZhbFxuICAgICAgICAgICAgICAgIDogW2NoaWxkVmFsXVxuICAgICAgICAgICAgOiBwYXJlbnRWYWw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lcmdlT3B0aW9ucyhvcHRpb25zKSB7XG4gICAgY29uc3QgZGVzdE9wdGlvbnMgPSB7fTtcbiAgICBjb25zdCBsaXN0ID0gQXJyYXkuaXNBcnJheShvcHRpb25zLm1peGlucylcbiAgICAgICAgPyBbYXRvbUJ1aWxkSW5NaXhpbiwgLi4ub3B0aW9ucy5taXhpbnMsIG9wdGlvbnNdXG4gICAgICAgIDogW2F0b21CdWlsZEluTWl4aW4sIG9wdGlvbnNdO1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBsaXN0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG9wdCA9IGxpc3RbaV07XG4gICAgICAgIG9wdC5tZXRob2RzICYmIGV4dGVuZChkZXN0T3B0aW9ucywgb3B0Lm1ldGhvZHMpO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGtleXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGsgPSBrZXlzW2pdO1xuICAgICAgICAgICAgaWYgKG9wdFtrXSkge1xuICAgICAgICAgICAgICAgIGRlc3RPcHRpb25zW2tdID0gZXh0ZW5kKGRlc3RPcHRpb25zW2tdIHx8IHt9LCBvcHRba10pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGlmZUN5Y2xlS2V5cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgY29uc3QgayA9IGxpZmVDeWNsZUtleXNbal07XG4gICAgICAgICAgICBjb25zdCBkayA9IGxpZmVDeWNsZU1hcFtrXTtcbiAgICAgICAgICAgIGlmIChvcHRba10pIHtcbiAgICAgICAgICAgICAgICBkZXN0T3B0aW9uc1tka10gPSBtZXJnZUhvb2soZGVzdE9wdGlvbnNbZGtdIHx8IFtdLCBvcHRba10pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGlmZUN5Y2xlS2V5cy5sZW5ndGg7IGorKykge1xuICAgICAgICBjb25zdCBrID0gbGlmZUN5Y2xlS2V5c1tqXTtcbiAgICAgICAgY29uc3QgZGsgPSBsaWZlQ3ljbGVNYXBba107XG4gICAgICAgIGlmIChkZXN0T3B0aW9uc1tka10pIHtcbiAgICAgICAgICAgIGNvbnN0IGhvb2tzID0gZGVzdE9wdGlvbnNbZGtdLnNsaWNlKCk7XG4gICAgICAgICAgICBkZXN0T3B0aW9uc1tka10gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaG9va3MuZm9yRWFjaChob29rID0+IGhvb2suY2FsbCh0aGlzKSwgdGhpcyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkZXN0T3B0aW9ucztcbn1cbiIsIi8qKlxuICogQGZpbGUgY29uc3RhbnRzXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuZXhwb3J0IGNvbnN0IGxpZmVDeWNsZU1hcCA9IHtcbiAgICBiZWZvcmVDcmVhdGU6ICdjb21waWxlZCcsXG4gICAgbW91bnRlZDogJ2F0dGFjaGVkJyxcbiAgICBjcmVhdGVkOiAnaW5pdGVkJyxcbiAgICBiZWZvcmVNb3VudDogJ2NyZWF0ZWQnLFxuICAgIGJlZm9yZURlc3Ryb3k6ICdkZXRhY2hlZCcsXG4gICAgZGVzdHJveTogJ2Rpc3Bvc2VkJyxcbiAgICB1cGRhdGVkOiAndXBkYXRlZCdcbiAgICAvLyBiZWZvcmVVcGRhdGU6ICd1cGRhdGVkJ1xufTtcblxuZXhwb3J0IGNvbnN0IGxpZmVDeWNsZUtleXMgPSBPYmplY3Qua2V5cyhsaWZlQ3ljbGVNYXApO1xuIiwiLyoqXG4gKiBAZmlsZSDlhajlsYDnlJ/mlYjnmoTlh73mlbBcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5jb25zdCBNQVRIX01FVEhPRCA9IFtcbiAgICAnZmxvb3InLCAnY2VpbCcsICdyb3VuZCcsXG4gICAgJ2FicycsICdtYXgnLCAnbWluJywgJ3Bvdydcbl07XG5cbmNvbnN0IG1ldGhvZHMgPSBleHBvcnRzLm1ldGhvZHMgPSB7fTtcblxuTUFUSF9NRVRIT0QuZm9yRWFjaChuYW1lID0+IHtcbiAgICBtZXRob2RzW2BtYXRoXyR7bmFtZX1gXSA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICAgIHJldHVybiBNYXRoW25hbWVdLmFwcGx5KE1hdGgsIGFyZ3MpO1xuICAgIH07XG59KTtcblxubWV0aG9kcy5hcnJheV9zbGljZSA9IGZ1bmN0aW9uIChhcnIsIHN0YXJ0LCBsZW4pIHtcbiAgICB2YXIgZW5kID0gbGVuID09IG51bGwgPyB2b2lkIDAgOiAobGVuID49IDAgPyAoc3RhcnQgKyBsZW4pIDogKGFyci5sZW5ndGggKyBsZW4pKTtcbiAgICByZXR1cm4gYXJyLnNsaWNlKHN0YXJ0LCBlbmQpO1xufTtcblxubWV0aG9kcy5hcnJheV9qb2luID0gZnVuY3Rpb24gKGFyciwgc2VwKSB7XG4gICAgcmV0dXJuIGFyci5qb2luKHNlcCk7XG59O1xuXG5tZXRob2RzLnN0cl9wb3MgPSBmdW5jdGlvbiAoc3RyLCBtYXRjaCkge1xuICAgIHJldHVybiBzdHIuaW5kZXhPZihtYXRjaCk7XG59O1xuXG5tZXRob2RzLm9iamVjdF9mcmVlemUgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIE9iamVjdC5mcmVlemUob2JqKTtcbn07XG5cbmV4cG9ydHMuZmlsdGVycyA9IHtcbiAgICBqc29uKG9iaikge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoanNvbik7XG4gICAgfSxcbiAgICBsb3dlcihzdHIpIHtcbiAgICAgICAgcmV0dXJuIHN0ci50b0xvd2VyQ2FzZSgpO1xuICAgIH0sXG4gICAgdXBwZXIoc3RyKSB7XG4gICAgICAgIHJldHVybiBzdHIudG9VcHBlckNhc2UoKTtcbiAgICB9XG59O1xuIiwiLyoqXG4gKiBAZmlsZSDmlbDmja7nu5HlrppcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQge2lzT2JqZWN0LCBoYXNPd24sIGlzUGxhaW5PYmplY3QsIGV4dGVuZCwgZGVmfSBmcm9tICcuLi9zaGFyZWQvdXRpbCc7XG5pbXBvcnQge0V4cHJUeXBlfSBmcm9tICdzYW4nO1xuXG5jb25zdCBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuY29uc3QgYXJyYXlNZXRob2RzID0gT2JqZWN0LmNyZWF0ZShhcnJheVByb3RvKTtcblxuY29uc3QgbWV0aG9kc1RvUGF0Y2ggPSBbXG4gICAgJ3B1c2gnLFxuICAgICdwb3AnLFxuICAgICdzaGlmdCcsXG4gICAgJ3Vuc2hpZnQnLFxuICAgICdzcGxpY2UnXG4gICAgLy8gJ3NvcnQnLFxuICAgIC8vICdyZXZlcnNlJ1xuXTtcblxuLyoqXG4gKiBJbnRlcmNlcHQgbXV0YXRpbmcgbWV0aG9kcyBhbmQgZW1pdCBldmVudHNcbiAqL1xubWV0aG9kc1RvUGF0Y2guZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XG4gICAgLy8gY2FjaGUgb3JpZ2luYWwgbWV0aG9kXG4gICAgY29uc3Qgb3JpZ2luYWwgPSBhcnJheVByb3RvW21ldGhvZF1cbiAgICBkZWYoYXJyYXlNZXRob2RzLCBtZXRob2QsIHtcbiAgICAgICAgdmFsdWUoLi4uYXJncykge1xuICAgICAgICAgICAgY29uc3Qgb2IgPSB0aGlzLl9fb2JfXztcbiAgICAgICAgICAgIGxldCBpbnNlcnRlZDtcbiAgICAgICAgICAgIHN3aXRjaCAobWV0aG9kKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAncHVzaCc6XG4gICAgICAgICAgICAgICAgY2FzZSAndW5zaGlmdCc6XG4gICAgICAgICAgICAgICAgICAgIGluc2VydGVkID0gYXJncztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnc3BsaWNlJzpcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0ZWQgPSBhcmdzLnNsaWNlKDIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpbnNlcnRlZCkge1xuICAgICAgICAgICAgICAgIG9iLm9ic2VydmVBcnJheShpbnNlcnRlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvYi5jb250ZXh0LmRhdGFbbWV0aG9kXShvYi5leHByLCAuLi5hcmdzKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IG9iLmNvbnRleHQuZGF0YS5nZXQob2IuZXhwcik7XG4gICAgICAgICAgICBvYnNlcnZlKHJlc3VsdCwgb2IuZXhwciwgb2IuY29udGV4dCk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgfSlcbn0pO1xuXG5jbGFzcyBPYnNlcnZlciB7XG5cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSwgZXhwciwgY29udGV4dCkge1xuICAgICAgICB0aGlzLmV4cHIgPSBleHByO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICBkZWYodmFsdWUsICdfX29iX18nLCB7XG4gICAgICAgICAgICB2YWx1ZTogdGhpc1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZS5fX3Byb3RvX18gPSBhcnJheU1ldGhvZHM7XG4gICAgICAgICAgICB0aGlzLm9ic2VydmVBcnJheSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSkgfHwgW107XG4gICAgICAgICAgICB0aGlzLndhbGsodmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2FsayB0aHJvdWdoIGFsbCBwcm9wZXJ0aWVzIGFuZCBjb252ZXJ0IHRoZW0gaW50b1xuICAgICAqIGdldHRlci9zZXR0ZXJzLiBUaGlzIG1ldGhvZCBzaG91bGQgb25seSBiZSBjYWxsZWQgd2hlblxuICAgICAqIHZhbHVlIHR5cGUgaXMgT2JqZWN0LlxuICAgICAqL1xuICAgIHdhbGsob2JqKSB7XG4gICAgICAgIGNvbnN0IGtleXMgPSB0aGlzLmtleXM7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZGVmaW5lUmVhY3RpdmUob2JqLCBrZXlzW2ldLCB0aGlzLmV4cHIsIHRoaXMuY29udGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPYnNlcnZlIGEgbGlzdCBvZiBBcnJheSBpdGVtcy5cbiAgICAgKi9cbiAgICBvYnNlcnZlQXJyYXkoaXRlbXMpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBpdGVtcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIG9ic2VydmUoaXRlbXNbaV0sIGV4dGVuZCh7fSwgdGhpcy5leHByLCB7XG4gICAgICAgICAgICAgICAgcGF0aHM6IFsuLi50aGlzLmV4cHIucGF0aHMsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogRXhwclR5cGUuTlVNQkVSLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9KSwgdGhpcy5jb250ZXh0KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5lUmVhY3RpdmUob2JqLCBrZXksIGV4cHIsIGNvbnRleHQpIHtcblxuICAgIGNvbnN0IHByb3BlcnR5ID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSk7XG4gICAgaWYgKHByb3BlcnR5ICYmIHByb3BlcnR5LmNvbmZpZ3VyYWJsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGNhdGVyIGZvciBwcmUtZGVmaW5lZCBnZXR0ZXIvc2V0dGVyc1xuICAgIGNvbnN0IGdldHRlciA9IHByb3BlcnR5ICYmIHByb3BlcnR5LmdldDtcbiAgICBjb25zdCBzZXR0ZXIgPSBwcm9wZXJ0eSAmJiBwcm9wZXJ0eS5zZXQ7XG5cbiAgICBjb25zdCBrZXlFeHByID0ge1xuICAgICAgICB0eXBlOiBFeHByVHlwZS5BQ0NFU1NPUixcbiAgICAgICAgcGF0aHM6IFsuLi5leHByLnBhdGhzLCB7XG4gICAgICAgICAgICB0eXBlOiBFeHByVHlwZS5TVFJJTkcsXG4gICAgICAgICAgICB2YWx1ZToga2V5XG4gICAgICAgIH1dXG4gICAgfTtcblxuICAgIGxldCB2YWwgPSBvYmpba2V5XTtcbiAgICBvYnNlcnZlKHZhbCwga2V5RXhwciwgY29udGV4dCk7XG4gICAgY29uc3QgbmV3UHJvcGVydHkgPSB7XG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgc2V0KG5ld1ZhbCkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBnZXR0ZXIgPyBnZXR0ZXIuY2FsbChvYmopIDogdmFsO1xuICAgICAgICAgICAgaWYgKG5ld1ZhbCA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZ2V0dGVyICYmICFzZXR0ZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2V0dGVyKSB7XG4gICAgICAgICAgICAgICAgc2V0dGVyLmNhbGwob2JqLCBuZXdWYWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsID0gbmV3VmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb2JzZXJ2ZShuZXdWYWwsIGtleUV4cHIsIGNvbnRleHQpO1xuICAgICAgICAgICAgY29udGV4dC5kYXRhLnNldChrZXlFeHByLCBuZXdWYWwsIHtmb3JjZTogdHJ1ZX0pO1xuICAgICAgICB9LFxuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGdldHRlciA/IGdldHRlci5jYWxsKG9iaikgOiB2YWw7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGRlZihvYmosIGtleSwgbmV3UHJvcGVydHkpO1xufVxuXG5jb25zdCBkZWZhdWx0RXhwciA9IHtcbiAgICB0eXBlOiBFeHByVHlwZS5BQ0NFU1NPUixcbiAgICBwYXRoczogW11cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBleHByID0gZXh0ZW5kKHt9LCBkZWZhdWx0RXhwcik7XG4gICAgY29uc3Qga2V5cyA9IHRoaXMuX2RhdGFLZXlzO1xuICAgIGNvbnN0IGtleUxlbmd0aCA9IGtleXMubGVuZ3RoO1xuXG4gICAgb2JzZXJ2ZSh0aGlzLmRhdGEuZ2V0KCksIGV4cHIsIHRoaXMpO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXM7XG5cbiAgICB0aGlzLl9kYXRhID0gdGhpcy5kYXRhLmdldCgpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlMZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBrZXkgPSBrZXlzW2ldO1xuICAgICAgICBkZWYoY29udGV4dCwga2V5LCB7XG4gICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRleHQuX2RhdGFba2V5XTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQobmV3VmFsKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5fZGF0YVtrZXldID0gbmV3VmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmRhdGEub3duZXIgPSB0aGlzO1xufVxuXG5mdW5jdGlvbiBvYnNlcnZlKHZhbHVlLCBleHByLCBjb250ZXh0KSB7XG4gICAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgb2I7XG4gICAgaWYgKGhhc093bih2YWx1ZSwgJ19fb2JfXycpICYmIHZhbHVlLl9fb2JfXyBpbnN0YW5jZW9mIE9ic2VydmVyKSB7XG4gICAgICAgIG9iID0gdmFsdWUuX19vYl9fXG4gICAgfVxuICAgIGVsc2UgaWYgKFxuICAgICAgICAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgfHwgaXNQbGFpbk9iamVjdCh2YWx1ZSkpXG4gICAgICAgICYmIE9iamVjdC5pc0V4dGVuc2libGUodmFsdWUpXG4gICAgKSB7XG4gICAgICAgIG9iID0gbmV3IE9ic2VydmVyKHZhbHVlLCBleHByLCBjb250ZXh0KTtcbiAgICB9XG4gICAgcmV0dXJuIG9iO1xufVxuIiwiLyoqXG4gKiBAZmlsZSDopobnm5Ygc2FuIOWOn+eUn+eahCBfY2FsY0NvbXB1dGVkXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHtkZWZ9IGZyb20gJy4uL3NoYXJlZC91dGlsJztcbmltcG9ydCBzbG90cyBmcm9tICcuL2dldC1zbG90cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChrZXkpIHtcbiAgICBsZXQgY29tcHV0ZWREZXBzID0gdGhpcy5jb21wdXRlZERlcHNba2V5XTtcbiAgICBpZiAoIWNvbXB1dGVkRGVwcykge1xuICAgICAgICBjb21wdXRlZERlcHMgPSB0aGlzLmNvbXB1dGVkRGVwc1trZXldID0ge307XG4gICAgfVxuXG4gICAgY29uc3QgbWUgPSB0aGlzO1xuICAgIGNvbnN0IGRhdGEgPSBtZS5kYXRhLmdldCgpO1xuICAgIGNvbnN0IGNvbnRleHQgPSB7fTtcblxuICAgIGRlZihjb250ZXh0LCAnJHJvb3QnLCB7XG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiBtZS4kcm9vdDtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgZGVmKGNvbnRleHQsICckc2xvdHMnLCB7XG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiBzbG90cy5jYWxsKG1lKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGRhdGEpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGsgPSBrZXlzW2ldO1xuICAgICAgICBkZWYoY29udGV4dCwgaywge1xuICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIGlmICghY29tcHV0ZWREZXBzW2tdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXB1dGVkRGVwc1trXSA9IDE7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lLmNvbXB1dGVkW2tdICYmICFtZS5jb21wdXRlZERlcHNba10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLl9jYWxjQ29tcHV0ZWQoayk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBtZS53YXRjaChrLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZS5fY2FsY0NvbXB1dGVkKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBtZS5kYXRhLmdldChrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5kYXRhLnNldChrZXksIHRoaXMuY29tcHV0ZWRba2V5XS5jYWxsKGNvbnRleHQpKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=