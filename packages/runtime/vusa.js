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
  $slots: _getSlots.default,
  _isDestroyed: function _isDestroyed() {
    return !!this.lifeCycle.disposed;
  }
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
    this._isSan = true;
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

    if (options.preprcessANode) {
      options.preprcessANode.call(this);
    } else if (options.render && this.$super.render) {
      this.$super.render = function () {};

      options.render.call(this);
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
  updated: 'updated',
  beforeUpdate: 'beforeUpdate'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3V0aWwuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2FuXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvZ2V0LXNsb3RzLmpzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lL2RlZmluZS1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvb3ZlcnJpZGUtZGF0YS1nZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvbWVyZ2UtY2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvbWVyZ2Utc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvbG9vcC1leHByZXNzaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lL2dldC1jb21wb25lbnQtdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcnVudGltZS9vYmplY3QtY29tcHV0ZWQtcHJvcGVydGlycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcnVudGltZS9yZWYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvbWVyZ2Utb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcnVudGltZS9jb25zdGFudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcnVudGltZS9hdG9tLWdsb2JhbC1hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvYmluZC1kYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lL2NhbGMtY29tcHV0ZWQuanMiXSwibmFtZXMiOlsiZXh0ZW5kIiwiT2JqZWN0IiwiYXNzaWduIiwidG9PYmplY3QiLCJhcnIiLCJyZXMiLCJpIiwibGVuZ3RoIiwiX3RvU3RyaW5nIiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJpc09iamVjdCIsIm9iaiIsImhhc093blByb3BlcnR5IiwiaGFzT3duIiwia2V5IiwiY2FsbCIsImlzUGxhaW5PYmplY3QiLCJkZWYiLCJwcm9wZXJ0eSIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsImNhY2hlZCIsImZuIiwiY2FjaGUiLCJjcmVhdGUiLCJjYWNoZWRGbiIsInN0ciIsImhpdCIsImh5cGhlbmF0ZVJFIiwiaHlwaGVuYXRlIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwiY2FtZWxpemUiLCJfIiwiYyIsInRvVXBwZXJDYXNlIiwic2xvdENoaWxkcmVuIiwibGlmZUN5Y2xlIiwic291cmNlU2xvdHMiLCJhdHRhY2hlZCIsInJlZHVjZSIsInByZXYiLCJjaGlsZCIsIm5hbWUiLCJjb25jYXQiLCJjaGlsZHJlbiIsInNsb3RzIiwibmFtZWQiLCJub25hbWUiLCJkZWZhdWx0IiwiZGVmYXVsdFNhbk9wdGlvbnMiLCJfbWMiLCJtZXJnZUNsYXNzIiwiX21zIiwibWVyZ2VTdHlsZSIsIl9sIiwibG9vcEV4cHJlc3Npb24iLCJfZXgiLCJfb2NwIiwib2JqZWN0Q29tcHV0ZWRQcm9wZXJ0aWVzIiwiZ2V0Q29tcG9uZW50VHlwZSIsIiRlbWl0IiwiQ29tcG9uZW50IiwiZmlyZSIsIiRvbiIsIm9uIiwiJHdhdGNoIiwid2F0Y2giLCJfbm9vcCIsIm1lbWJlck1hcCIsIiRlbCIsImVsIiwiJGNvbnRleHQiLCJvd25lciIsIiRwYXJlbnQiLCJwYXJlbnRDb21wb25lbnQiLCIkY2hpbGRyZW4iLCJmaWx0ZXIiLCJub2RlVHlwZSIsIiRyb290Iiwicm9vdCIsIiRzbG90cyIsInNsb3QiLCJfaXNEZXN0cm95ZWQiLCJkaXNwb3NlZCIsImlubmVyS2V5IiwiZGVmaW5lIiwib3B0aW9ucyIsInNhbk9wdGlvbnMiLCJ0ZW1wbGF0ZSIsIl9fc2FudGVtcGxhdGUiLCJhTm9kZSIsIl9fc2FuYU5vZGUiLCJjb21waWxlZEhvb2siLCJjb21waWxlZCIsIl9pc1NhbiIsIl9jYWxjQ29tcHV0ZWQiLCJjYWxjQ29tcHV0ZWQiLCJiaW5kIiwicHJvcGVydGllcyIsImtleXMiLCJwcm9wcyIsImdldCIsIiRvcHRpb25zIiwidmFsdWUiLCJkZWZpbmVQcm9wZXJ0aWVzIiwicmVmcyIsIl9fc2FuUmVmcyIsImluaXRlZEhvb2siLCJpbml0ZWQiLCJtZSIsIiRyZWZzIiwibGVuIiwiciIsInJlZiIsIiRzdHlsZSIsImRhdGEiLCJyYXciLCJiaW5kRGF0YSIsImZvckVhY2giLCJwcmVwcmNlc3NBTm9kZSIsInJlbmRlciIsIiRzdXBlciIsImluaXREYXRhIiwiZGVmYXVsdFByb3BzIiwicHJvcEtleXMiLCJfcHJvcEtleXMiLCJBcnJheSIsImlzQXJyYXkiLCJwIiwicHJvcCIsImNvbXB1dGVkIiwiX2NvbXB1dGVkS2V5cyIsImsiLCJfc3JjU2JpbmREYXRhIiwiX2RhdGFLZXlzIiwiY29tcG9uZW50cyIsIm9yaWdpbmFsR2V0IiwiRGF0YSIsImV4cHIiLCJjYWxsZWUiLCJ1bmRlZmluZWQiLCJ0eXBlIiwiRXhwclR5cGUiLCJBQ0NFU1NPUiIsInBhdGhzIiwiZmlyc3QiLCJpbmRleE9mIiwibCIsInN0cmluZyIsImNscyIsInNwbGl0Iiwib2JqZWN0IiwiYXJyYXkiLCJjbGF6eiIsImVsZW1lbnQiLCJzdGF0aWNDbGFzcyIsImpvaW4iLCJwYXJzZVN0eWxlVGV4dCIsImNzc1RleHQiLCJsaXN0RGVsaW1pdGVyIiwicHJvcGVydHlEZWxpbWl0ZXIiLCJpdGVtIiwidG1wIiwidHJpbSIsIm5vcm1hbGl6ZVN0eWxlQmluZGluZyIsImJpbmRpbmdTdHlsZSIsInN0YXRpY1N0eWxlIiwic3R5bGUiLCJ2U2hvdyIsImRpc3BsYXkiLCJ0b0FycmF5IiwibiIsImlzTmFOIiwidGFnTmFtZSIsImhvdHNwb3QiLCJpcyIsImlzVmFsdWUiLCJ2IiwiY2hpbGRyZW5UcmF2ZXJzYWwiLCJyZWZUYXJnZXQiLCJlbGVtZW50VHJhdmVyc2FsIiwiZGlyZWN0aXZlcyIsInNhbiIsImV2YWxFeHByIiwic2NvcGUiLCJtYXAiLCJzb3VyY2UiLCJtZXJnZUhvb2siLCJwYXJlbnRWYWwiLCJjaGlsZFZhbCIsIm1lcmdlT3B0aW9ucyIsImRlc3RPcHRpb25zIiwibGlzdCIsIm1peGlucyIsImF0b21CdWlsZEluTWl4aW4iLCJvcHQiLCJtZXRob2RzIiwiaiIsImxpZmVDeWNsZUtleXMiLCJkayIsImxpZmVDeWNsZU1hcCIsImhvb2tzIiwic2xpY2UiLCJob29rIiwiYmVmb3JlQ3JlYXRlIiwibW91bnRlZCIsImNyZWF0ZWQiLCJiZWZvcmVNb3VudCIsImJlZm9yZURlc3Ryb3kiLCJkZXN0cm95IiwidXBkYXRlZCIsImJlZm9yZVVwZGF0ZSIsIk1BVEhfTUVUSE9EIiwiZXhwb3J0cyIsImFyZ3MiLCJNYXRoIiwiYXBwbHkiLCJhcnJheV9zbGljZSIsInN0YXJ0IiwiZW5kIiwiYXJyYXlfam9pbiIsInNlcCIsInN0cl9wb3MiLCJtYXRjaCIsIm9iamVjdF9mcmVlemUiLCJmcmVlemUiLCJmaWx0ZXJzIiwianNvbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJsb3dlciIsInVwcGVyIiwiYXJyYXlQcm90byIsImFycmF5TWV0aG9kcyIsIm1ldGhvZHNUb1BhdGNoIiwibWV0aG9kIiwib3JpZ2luYWwiLCJyZXN1bHQiLCJvYiIsIl9fb2JfXyIsImluc2VydGVkIiwib2JzZXJ2ZUFycmF5IiwiY29udGV4dCIsIm9ic2VydmUiLCJPYnNlcnZlciIsIl9fcHJvdG9fXyIsIndhbGsiLCJkZWZpbmVSZWFjdGl2ZSIsIml0ZW1zIiwiTlVNQkVSIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZ2V0dGVyIiwic2V0dGVyIiwic2V0Iiwia2V5RXhwciIsIlNUUklORyIsInZhbCIsIm5ld1Byb3BlcnR5IiwibmV3VmFsIiwiZm9yY2UiLCJkZWZhdWx0RXhwciIsImtleUxlbmd0aCIsIl9kYXRhIiwiaXNFeHRlbnNpYmxlIiwiY29tcHV0ZWREZXBzIl0sIm1hcHBpbmdzIjoiQUFBQTtB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O0FBQ2xCb0ksc0JBQVksQ0FBQ3BJLENBQUQsQ0FBWixHQUFrQixDQUFsQjs7QUFFQSxjQUFJdkIsRUFBRSxDQUFDcUIsUUFBSCxDQUFZRSxDQUFaLEtBQWtCLENBQUN2QixFQUFFLENBQUMySixZQUFILENBQWdCcEksQ0FBaEIsQ0FBdkIsRUFBMkM7QUFDdkN2QixjQUFFLENBQUNkLGFBQUgsQ0FBaUJxQyxDQUFqQjtBQUNIOztBQUVEdkIsWUFBRSxDQUFDM0MsS0FBSCxDQUFTa0UsQ0FBVCxFQUFZLFlBQVk7QUFDcEJ2QixjQUFFLENBQUNkLGFBQUgsQ0FBaUJuRixHQUFqQjtBQUNILFdBRkQ7QUFHSDs7QUFFRCxlQUFPaUcsRUFBRSxDQUFDTSxJQUFILENBQVFkLEdBQVIsQ0FBWStCLENBQVosQ0FBUDtBQUNIO0FBZlcsS0FBaEI7QUExQnNCOztBQXdCMUIsT0FBSyxJQUFJakksQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2dHLElBQUksQ0FBQy9GLE1BQXpCLEVBQWlDRCxDQUFDLEVBQWxDLEVBQXNDO0FBQUEsVUFBN0JBLENBQTZCO0FBbUJyQzs7QUFFRCxPQUFLZ0gsSUFBTCxDQUFVMEksR0FBVixDQUFjalAsR0FBZCxFQUFtQixLQUFLc0gsUUFBTCxDQUFjdEgsR0FBZCxFQUFtQkMsSUFBbkIsQ0FBd0JxTyxPQUF4QixDQUFuQjtBQUNILEMiLCJmaWxlIjoidnVzYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInNhblwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJzYW5cIl0sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGZhY3RvcnkocmVxdWlyZShcInNhblwiKSkgOiBmYWN0b3J5KHJvb3RbXCJzYW5cIl0pO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkod2luZG93LCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX18xX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCIvKipcbiAqIEBmaWxlIOS4gOS6m+W3peWFt+WHveaVsFxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbi8qKlxuICogTWl4IHByb3BlcnRpZXMgaW50byB0YXJnZXQgb2JqZWN0LlxuICovXG5leHBvcnQgY29uc3QgZXh0ZW5kID0gT2JqZWN0LmFzc2lnbjtcblxuLyoqXG4gKiBNZXJnZSBhbiBBcnJheSBvZiBPYmplY3RzIGludG8gYSBzaW5nbGUgT2JqZWN0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9PYmplY3QoYXJyKSB7XG4gICAgY29uc3QgcmVzID0ge307XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGFycltpXSkge1xuICAgICAgICAgICAgZXh0ZW5kKHJlcywgYXJyW2ldKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufVxuXG4vKipcbiAqIEdldCB0aGUgcmF3IHR5cGUgc3RyaW5nIG9mIGEgdmFsdWUsIGUuZy4sIFtvYmplY3QgT2JqZWN0XS5cbiAqL1xuZXhwb3J0IGNvbnN0IF90b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogUXVpY2sgb2JqZWN0IGNoZWNrIC0gdGhpcyBpcyBwcmltYXJpbHkgdXNlZCB0byB0ZWxsXG4gKiBPYmplY3RzIGZyb20gcHJpbWl0aXZlIHZhbHVlcyB3aGVuIHdlIGtub3cgdGhlIHZhbHVlXG4gKiBpcyBhIEpTT04tY29tcGxpYW50IHR5cGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdChvYmopIHtcbiAgICByZXR1cm4gb2JqICE9PSBudWxsICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgYW4gb2JqZWN0IGhhcyB0aGUgcHJvcGVydHkuXG4gKi9cbmNvbnN0IGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbmV4cG9ydCBmdW5jdGlvbiBoYXNPd24ob2JqLCBrZXkpIHtcbiAgICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSk7XG59XG5cbi8qKlxuICogU3RyaWN0IG9iamVjdCB0eXBlIGNoZWNrLiBPbmx5IHJldHVybnMgdHJ1ZVxuICogZm9yIHBsYWluIEphdmFTY3JpcHQgb2JqZWN0cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzUGxhaW5PYmplY3Qob2JqKSB7XG4gICAgcmV0dXJuIF90b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IE9iamVjdF0nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVmKG9iaiwga2V5LCBwcm9wZXJ0eSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgZXh0ZW5kKHtcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0sIHByb3BlcnR5KSk7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgY2FjaGVkIHZlcnNpb24gb2YgYSBwdXJlIGZ1bmN0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2FjaGVkKGZuKSB7XG4gICAgY29uc3QgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHJldHVybiBmdW5jdGlvbiBjYWNoZWRGbihzdHIpIHtcbiAgICAgICAgY29uc3QgaGl0ID0gY2FjaGVbc3RyXTtcbiAgICAgICAgcmV0dXJuIGhpdCB8fCAoY2FjaGVbc3RyXSA9IGZuKHN0cikpO1xuICAgIH07XG59XG5cbi8qKlxuICogSHlwaGVuYXRlIGEgY2FtZWxDYXNlIHN0cmluZy5cbiAqL1xuY29uc3QgaHlwaGVuYXRlUkUgPSAvKFteLV0pKFtBLVpdKS9nO1xuZXhwb3J0IGNvbnN0IGh5cGhlbmF0ZSA9IGNhY2hlZCgoc3RyKSA9PiB7XG4gICAgcmV0dXJuIHN0clxuICAgICAgICAucmVwbGFjZShoeXBoZW5hdGVSRSwgJyQxLSQyJylcbiAgICAgICAgLnJlcGxhY2UoaHlwaGVuYXRlUkUsICckMS0kMicpXG4gICAgICAgIC50b0xvd2VyQ2FzZSgpO1xufSk7XG5cbmV4cG9ydCBjb25zdCBjYW1lbGl6ZSA9IHN0ciA9PiBzdHIucmVwbGFjZSgvLShcXHcpL2csIChfLCBjKSA9PiAoYyA/IGMudG9VcHBlckNhc2UoKSA6ICcnKSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzFfXzsiLCIvKipcbiAqIEBmaWxlIHNsb3RcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQge2V4dGVuZH0gZnJvbSAnLi4vc2hhcmVkL3V0aWwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3Qge1xuICAgICAgICBzbG90Q2hpbGRyZW4sXG4gICAgICAgIGxpZmVDeWNsZSxcbiAgICAgICAgc291cmNlU2xvdHNcbiAgICB9ID0gdGhpcztcblxuICAgIGlmIChsaWZlQ3ljbGUuYXR0YWNoZWQpIHtcbiAgICAgICAgcmV0dXJuIHNsb3RDaGlsZHJlbi5yZWR1Y2UoKHByZXYsIGNoaWxkKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gY2hpbGQubmFtZSB8fCAnZGVmYXVsdCc7XG4gICAgICAgICAgICBpZiAoIXByZXZbbmFtZV0pIHtcbiAgICAgICAgICAgICAgICBwcmV2W25hbWVdID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcmV2W25hbWVdID0gcHJldltuYW1lXS5jb25jYXQoY2hpbGQuY2hpbGRyZW4pO1xuICAgICAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICAgIH0sIHt9KTtcbiAgICB9XG5cbiAgICBjb25zdCBzbG90cyA9IHt9O1xuXG4gICAgaWYgKHNvdXJjZVNsb3RzLm5hbWVkKSB7XG4gICAgICAgIGV4dGVuZChzbG90cywgc291cmNlU2xvdHMubmFtZWQpO1xuICAgIH1cbiAgICBpZiAoc291cmNlU2xvdHMubm9uYW1lKSB7XG4gICAgICAgIHNsb3RzLmRlZmF1bHQgPSBzb3VyY2VTbG90cy5ub25hbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNsb3RzO1xuXG59XG4iLCIvKipcbiAqIEBmaWxlIGVudHJ5XG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuZXhwb3J0IHtkZWZhdWx0IGFzIGRlZmluZUNvbXBvbmVudH0gZnJvbSAnLi9kZWZpbmUtY29tcG9uZW50JztcbiIsIi8qKlxuICogQGZpbGUgY29tcG9uZW50XG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0ICcuL292ZXJyaWRlLWRhdGEtZ2V0JztcblxuaW1wb3J0IHtkZWZpbmVDb21wb25lbnQsIGluaGVyaXRzLCBDb21wb25lbnR9IGZyb20gJ3Nhbic7XG5pbXBvcnQge2V4dGVuZCwgaHlwaGVuYXRlLCBkZWZ9IGZyb20gJy4uL3NoYXJlZC91dGlsJztcbmltcG9ydCBtZXJnZUNsYXNzIGZyb20gJy4vbWVyZ2UtY2xhc3MnO1xuaW1wb3J0IG1lcmdlU3R5bGUgZnJvbSAnLi9tZXJnZS1zdHlsZSc7XG5pbXBvcnQgbG9vcEV4cHJlc3Npb24gZnJvbSAnLi9sb29wLWV4cHJlc3Npb24nO1xuaW1wb3J0IGdldENvbXBvbmVudFR5cGUgZnJvbSAnLi9nZXQtY29tcG9uZW50LXR5cGUnO1xuaW1wb3J0IG9iamVjdENvbXB1dGVkUHJvcGVydGllcyBmcm9tICcuL29iamVjdC1jb21wdXRlZC1wcm9wZXJ0aXJzJztcbmltcG9ydCByZWYgZnJvbSAnLi9yZWYnO1xuaW1wb3J0IG1lcmdlT3B0aW9ucyBmcm9tICcuL21lcmdlLW9wdGlvbnMnO1xuaW1wb3J0IGJpbmREYXRhIGZyb20gJy4vYmluZC1kYXRhJztcbmltcG9ydCBjYWxjQ29tcHV0ZWQgZnJvbSAnLi9jYWxjLWNvbXB1dGVkJztcbmltcG9ydCBzbG90IGZyb20gJy4vZ2V0LXNsb3RzJztcblxuLyogZXNsaW50LWRpc2FibGUgZmVjcy1jYW1lbGNhc2UgKi9cbmNvbnN0IGRlZmF1bHRTYW5PcHRpb25zID0ge1xuICAgIF9tYzogbWVyZ2VDbGFzcyxcbiAgICBfbXM6IG1lcmdlU3R5bGUsXG4gICAgX2w6IGxvb3BFeHByZXNzaW9uLFxuICAgIF9leDogZXh0ZW5kLFxuICAgIF9vY3A6IG9iamVjdENvbXB1dGVkUHJvcGVydGllcyxcbiAgICBnZXRDb21wb25lbnRUeXBlLFxuICAgICRlbWl0OiBDb21wb25lbnQucHJvdG90eXBlLmZpcmUsXG4gICAgJG9uOiBDb21wb25lbnQucHJvdG90eXBlLm9uLFxuICAgICR3YXRjaDogQ29tcG9uZW50LnByb3RvdHlwZS53YXRjaCxcbiAgICBfbm9vcDogZnVuY3Rpb24gKCkge31cbn07XG4vKiBlc2xpbnQtZW5hYmxlIGZlY3MtY2FtZWxjYXNlICovXG5cbmNvbnN0IG1lbWJlck1hcCA9IHtcbiAgICAkZWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsO1xuICAgIH0sXG4gICAgJGNvbnRleHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm93bmVyO1xuICAgIH0sXG4gICAgJHBhcmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50Q29tcG9uZW50O1xuICAgIH0sXG4gICAgJGNoaWxkcmVuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5maWx0ZXIoY2hpbGQgPT4gY2hpbGQubm9kZVR5cGUgPT09IDUpO1xuICAgIH0sXG4gICAgJHJvb3QoKSB7XG4gICAgICAgIGxldCByb290ID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMucGFyZW50Q29tcG9uZW50KSB7XG4gICAgICAgICAgICB3aGlsZSAocm9vdC5wYXJlbnRDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICByb290ID0gcm9vdC5wYXJlbnRDb21wb25lbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcm9vdDtcbiAgICB9LFxuICAgICRzbG90czogc2xvdCxcbiAgICBfaXNEZXN0cm95ZWQoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMubGlmZUN5Y2xlLmRpc3Bvc2VkO1xuICAgIH1cbn07XG5cbmNvbnN0IGlubmVyS2V5ID0gJ19TYW5DdG9yJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVmaW5lKG9wdGlvbnMpIHtcblxuICAgIGlmIChvcHRpb25zW2lubmVyS2V5XSkge1xuICAgICAgICByZXR1cm4gb3B0aW9uc1tpbm5lcktleV07XG4gICAgfVxuXG4gICAgY29uc3Qgc2FuT3B0aW9ucyA9IGV4dGVuZCh7XG4gICAgICAgIHRlbXBsYXRlOiBvcHRpb25zLl9fc2FudGVtcGxhdGUsXG4gICAgICAgIGFOb2RlOiBvcHRpb25zLl9fc2FuYU5vZGUsXG4gICAgfSwgZGVmYXVsdFNhbk9wdGlvbnMsIG1lcmdlT3B0aW9ucyhvcHRpb25zKSk7XG5cbiAgICBjb25zdCBjb21waWxlZEhvb2sgPSBzYW5PcHRpb25zLmNvbXBpbGVkO1xuICAgIHNhbk9wdGlvbnMuY29tcGlsZWQgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgdGhpcy5faXNTYW4gPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuX2NhbGNDb21wdXRlZCA9IGNhbGNDb21wdXRlZC5iaW5kKHRoaXMpO1xuICAgICAgICBjb21waWxlZEhvb2sgJiYgY29tcGlsZWRIb29rLmNhbGwodGhpcyk7XG5cbiAgICAgICAgY29uc3QgcHJvcGVydGllcyA9IE9iamVjdFxuICAgICAgICAgICAgLmtleXMobWVtYmVyTWFwKVxuICAgICAgICAgICAgLnJlZHVjZSgocHJvcHMsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIHByb3BzW2tleV0gPSB7XG4gICAgICAgICAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtZW1iZXJNYXBba2V5XS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvcHM7XG4gICAgICAgICAgICB9LCB7fSk7XG5cbiAgICAgICAgcHJvcGVydGllcy4kb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHZhbHVlOiBvcHRpb25zXG4gICAgICAgIH07XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywgcHJvcGVydGllcyk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlZnMgPSBvcHRpb25zLl9fc2FuUmVmcztcbiAgICBjb25zdCBpbml0ZWRIb29rID0gc2FuT3B0aW9ucy5pbml0ZWQ7XG4gICAgc2FuT3B0aW9ucy5pbml0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IG1lID0gdGhpcztcbiAgICAgICAgdGhpcy4kcmVmcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbiAgICAgICAgaWYgKHJlZnMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSByZWZzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgciA9IHJlZnNbaV07XG4gICAgICAgICAgICAgICAgZGVmKG1lLiRyZWZzLCByLm5hbWUsIHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHIucm9vdCA/IG1lLmVsIDogbWUucmVmKHIubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIG92ZXJ3cml0ZSBzYW4gY29tcG9uZW50IGFwaSBmb3Igc3VwcG9ydCB2LWZvciArIHJlZlxuICAgICAgICAgICAgbWUucmVmID0gcmVmO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5pdGVkSG9vayAmJiBpbml0ZWRIb29rLmNhbGwodGhpcyk7XG5cbiAgICAgICAgLy8gbWVyZ2UgY3NzIG1vZHVsZXNcbiAgICAgICAgaWYgKHRoaXMuJHN0eWxlKSB7XG4gICAgICAgICAgICBleHRlbmQodGhpcy5kYXRhLnJhdy4kc3R5bGUsIHRoaXMuJHN0eWxlKVxuICAgICAgICB9XG5cbiAgICAgICAgYmluZERhdGEuY2FsbCh0aGlzKTtcblxuICAgICAgICBpZiAob3B0aW9ucy53YXRjaCkge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMob3B0aW9ucy53YXRjaCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMud2F0Y2goa2V5LCBvcHRpb25zLndhdGNoW2tleV0uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLnByZXByY2Vzc0FOb2RlKSB7XG4gICAgICAgICAgICBvcHRpb25zLnByZXByY2Vzc0FOb2RlLmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAob3B0aW9ucy5yZW5kZXIgJiYgdGhpcy4kc3VwZXIucmVuZGVyKSB7XG4gICAgICAgICAgICB0aGlzLiRzdXBlci5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgICAgIG9wdGlvbnMucmVuZGVyLmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgc2FuT3B0aW9ucy5pbml0RGF0YSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBjb25zdCBtZSA9IHRoaXM7XG5cbiAgICAgICAgY29uc3QgZGVmYXVsdFByb3BzID0ge307XG4gICAgICAgIGlmIChvcHRpb25zLnByb3BzKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9wS2V5cyA9IG1lLl9wcm9wS2V5cyA9IG9wdGlvbnMuX3Byb3BLZXlzID0gb3B0aW9ucy5wcm9wc1xuICAgICAgICAgICAgICAgID8gKEFycmF5LmlzQXJyYXkob3B0aW9ucy5wcm9wcykgPyBvcHRpb25zLnByb3BzIDogT2JqZWN0LmtleXMob3B0aW9ucy5wcm9wcykpXG4gICAgICAgICAgICAgICAgOiBbXTtcblxuICAgICAgICAgICAgLy8g6buY6K6k5bGe5oCnXG4gICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkob3B0aW9ucy5wcm9wcykpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gcHJvcEtleXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcCA9IHByb3BLZXlzW2ldO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wID0gb3B0aW9ucy5wcm9wc1twXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCdkZWZhdWx0JyBpbiBwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0UHJvcHNbcF0gPSB0eXBlb2YgcHJvcC5kZWZhdWx0ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBwcm9wLmRlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcHJvcC5kZWZhdWx0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbWUuX3Byb3BLZXlzID0gW107XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5jb21wdXRlZCkge1xuICAgICAgICAgICAgbWUuX2NvbXB1dGVkS2V5cyA9IE9iamVjdC5rZXlzKG9wdGlvbnMuY29tcHV0ZWQpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IG1lLl9jb21wdXRlZEtleXM7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGsgPSBtZS5fY29tcHV0ZWRLZXlzW2ldO1xuICAgICAgICAgICAgICAgIGRlZihtZSwgaywge1xuICAgICAgICAgICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWUuZGF0YS5nZXQoayk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1lLl9jb21wdXRlZEtleXMgPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRhdGEgPSB0eXBlb2Ygb3B0aW9ucy5kYXRhID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICA/IG9wdGlvbnMuZGF0YS5jYWxsKGV4dGVuZCh7fSwgZGVmYXVsdFByb3BzLCB0aGlzLl9zcmNTYmluZERhdGEpKVxuICAgICAgICAgICAgOiAob3B0aW9ucy5kYXRhIHx8IHt9KTtcblxuICAgICAgICB0aGlzLl9kYXRhS2V5cyA9IE9iamVjdC5rZXlzKGRhdGEpIHx8IFtdO1xuXG4gICAgICAgIHJldHVybiBleHRlbmQoeyRzdHlsZToge319LCBkZWZhdWx0UHJvcHMsIGRhdGEpO1xuICAgIH07XG5cbiAgICBpZiAob3B0aW9ucy5jb21wb25lbnRzKSB7XG4gICAgICAgIHNhbk9wdGlvbnMuY29tcG9uZW50cyA9IE9iamVjdFxuICAgICAgICAgICAgLmtleXMob3B0aW9ucy5jb21wb25lbnRzKVxuICAgICAgICAgICAgLnJlZHVjZSgocHJldiwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgcHJldltrZXldID0gcHJldltoeXBoZW5hdGUoa2V5KV0gPSBkZWZpbmUob3B0aW9ucy5jb21wb25lbnRzW2tleV0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgICAgICAgfSwge30pO1xuICAgIH1cblxuICAgIGNvbnN0IENvbXBvbmVudCA9IGRlZmluZUNvbXBvbmVudChzYW5PcHRpb25zKTtcblxuICAgIHJldHVybiBvcHRpb25zW2lubmVyS2V5XSA9IENvbXBvbmVudDtcbn1cblxuIiwiLyoqXG4gKiBAZmlsZSBvdmVycmlkZSBldmFsIGV4cHJcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQge0RhdGEsIHBhcnNlRXhwciwgRXhwclR5cGUsIGV2YWxFeHByfSBmcm9tICdzYW4nO1xuXG5jb25zdCBvcmlnaW5hbEdldCA9IERhdGEucHJvdG90eXBlLmdldDtcblxuRGF0YS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGV4cHIsIGNhbGxlZSkge1xuICAgIGlmIChleHByICYmIHR5cGVvZiBleHByICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBleHByID0gcGFyc2VFeHByKGV4cHIpO1xuICAgIH1cbiAgICBsZXQgdmFsdWUgPSBvcmlnaW5hbEdldC5jYWxsKHRoaXMsIGV4cHIsIGNhbGxlZSk7XG4gICAgaWYgKCFleHByIHx8IHZhbHVlICE9PSB1bmRlZmluZWQgfHwgIXRoaXMub3duZXIgfHwgZXhwci50eXBlICE9PSBFeHByVHlwZS5BQ0NFU1NPUikge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGNvbnN0IHBhdGhzID0gZXhwci5wYXRocztcbiAgICBjb25zdCBmaXJzdCA9IHBhdGhzWzBdLnZhbHVlO1xuICAgIGlmIChcbiAgICAgICAgW1xuICAgICAgICAgICAgLi4udGhpcy5vd25lci5fcHJvcEtleXMsXG4gICAgICAgICAgICAuLi50aGlzLm93bmVyLl9kYXRhS2V5cyxcbiAgICAgICAgICAgIC4uLnRoaXMub3duZXIuX2NvbXB1dGVkS2V5c1xuICAgICAgICBdLmluZGV4T2YoZmlyc3QpID49IDBcbiAgICApIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICB2YWx1ZSA9IHRoaXMub3duZXJbZmlyc3RdO1xuICAgIGZvciAodmFyIGkgPSAxLCBsID0gcGF0aHMubGVuZ3RoOyB2YWx1ZSAhPSBudWxsICYmIGkgPCBsOyBpKyspIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZVtwYXRoc1tpXS52YWx1ZSB8fCBldmFsRXhwcihwYXRoc1tpXSwgY2FsbGVlKV07XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn07XG4iLCIvKipcbiAqIEBmaWxlIG1lcmdlIGNsYXNzXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuZnVuY3Rpb24gc3RyaW5nKGNscyA9ICcnKSB7XG4gICAgaWYgKCFjbHMpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICByZXR1cm4gY2xzXG4gICAgICAgIC5zcGxpdCgnICcpXG4gICAgICAgIC5yZWR1Y2UoKHByZXYsIG5hbWUpID0+IHtcbiAgICAgICAgICAgIGlmICghbmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgICAgIFtuYW1lXTogMVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSwge30pO1xufVxuXG5mdW5jdGlvbiBvYmplY3QoY2xzID0ge30pIHtcbiAgICByZXR1cm4gT2JqZWN0XG4gICAgICAgIC5rZXlzKGNscylcbiAgICAgICAgLnJlZHVjZSgocHJldiwga2V5KSA9PiB7XG4gICAgICAgICAgICBpZiAoIWNsc1trZXldKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgICAgLi4uc3RyaW5nKGtleSlcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sIHt9KTtcbn1cblxuZnVuY3Rpb24gYXJyYXkoY2xzID0gW10pIHtcbiAgICBsZXQgY2xhenogPSB7fTtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gY2xzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBjbHNbaV07XG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgY2xhenogPSB7XG4gICAgICAgICAgICAuLi5jbGF6eixcbiAgICAgICAgICAgIC4uLihcbiAgICAgICAgICAgICAgICB0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgICA/IHN0cmluZyhlbGVtZW50KVxuICAgICAgICAgICAgICAgIDogKEFycmF5LmlzQXJyYXkoZWxlbWVudCkgPyBhcnJheShlbGVtZW50KSA6IG9iamVjdChlbGVtZW50KSlcbiAgICAgICAgICAgIClcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIGNsYXp6O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGljQ2xhc3MgPSAnJywgY2xzID0ge30pIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoYXJyYXkoW3N0YXRpY0NsYXNzLCBjbHNdKSkuam9pbignICcpO1xufVxuIiwiLyoqXG4gKiBAZmlsZSBtZXJnZSBzdHlsZVxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCB7Y2FjaGVkLCBleHRlbmQsIHRvT2JqZWN0fSBmcm9tICcuLi9zaGFyZWQvdXRpbCc7XG5cbmNvbnN0IHBhcnNlU3R5bGVUZXh0ID0gY2FjaGVkKGZ1bmN0aW9uIChjc3NUZXh0KSB7XG4gICAgY29uc3QgcmVzID0ge307XG4gICAgY29uc3QgbGlzdERlbGltaXRlciA9IC87KD8hW14oXSpcXCkpL2c7XG4gICAgY29uc3QgcHJvcGVydHlEZWxpbWl0ZXIgPSAvOiguKykvO1xuICAgIGNzc1RleHQuc3BsaXQobGlzdERlbGltaXRlcikuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgdmFyIHRtcCA9IGl0ZW0uc3BsaXQocHJvcGVydHlEZWxpbWl0ZXIpO1xuICAgICAgICAgICAgdG1wLmxlbmd0aCA+IDEgJiYgKHJlc1t0bXBbMF0udHJpbSgpXSA9IHRtcFsxXS50cmltKCkpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlcztcbn0pO1xuXG4vLyBub3JtYWxpemUgcG9zc2libGUgYXJyYXkgLyBzdHJpbmcgdmFsdWVzIGludG8gT2JqZWN0XG5mdW5jdGlvbiBub3JtYWxpemVTdHlsZUJpbmRpbmcoYmluZGluZ1N0eWxlKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYmluZGluZ1N0eWxlKSkge1xuICAgICAgICByZXR1cm4gdG9PYmplY3QoYmluZGluZ1N0eWxlKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBiaW5kaW5nU3R5bGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBwYXJzZVN0eWxlVGV4dChiaW5kaW5nU3R5bGUpO1xuICAgIH1cbiAgICByZXR1cm4gYmluZGluZ1N0eWxlO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0aWNTdHlsZSwgc3R5bGUsIHZTaG93ID0gdHJ1ZSkge1xuICAgIHN0eWxlID0gbm9ybWFsaXplU3R5bGVCaW5kaW5nKHN0eWxlKTtcbiAgICBpZiAoIXZTaG93KSB7XG4gICAgICAgIHN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICAgIHJldHVybiBzdGF0aWNTdHlsZVxuICAgICAgICA/IGV4dGVuZChzdGF0aWNTdHlsZSwgc3R5bGUpXG4gICAgICAgIDogc3R5bGU7XG59XG4iLCIvKipcbiAqIEBmaWxlIGxvb3AgZXhwcmVzc2lvblxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCB7Y2FjaGVkfSBmcm9tICcuLi9zaGFyZWQvdXRpbCc7XG5cbmNvbnN0IHRvQXJyYXkgPSBjYWNoZWQoZnVuY3Rpb24gKG4pIHtcbiAgICBjb25zdCB2YWx1ZSA9IG5ldyBBcnJheShuKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICB2YWx1ZVtpXSA9IGkgKyAxO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKCFpc05hTih2YWx1ZSkpIHtcbiAgICAgICAgY29uc3QgbiA9ICt2YWx1ZTtcbiAgICAgICAgdmFsdWUgPSB0b0FycmF5KG4pO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG59XG5cbiIsIi8qKlxuICogQGZpbGUgZ2V0IGNvbXBvbmVudCB0eXBlXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHtldmFsRXhwcn0gZnJvbSAnc2FuJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGFOb2RlLCBkYXRhKSB7XG4gICAgaWYgKGFOb2RlLnRhZ05hbWUgIT09ICdjb21wb25lbnQnIHx8IGFOb2RlLmhvdHNwb3QucHJvcHMuaXMgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnRzW2FOb2RlLnRhZ05hbWVdO1xuICAgIH1cblxuICAgIGNvbnN0IGlzID0gYU5vZGUucHJvcHNbYU5vZGUuaG90c3BvdC5wcm9wcy5pc107XG4gICAgY29uc3QgaXNWYWx1ZSA9IGV2YWxFeHByKGlzLmV4cHIsIGRhdGEpO1xuICAgIHJldHVybiB0aGlzLmNvbXBvbmVudHNbaXNWYWx1ZV07XG59XG4iLCIvKipcbiAqIEBmaWxlIG9iamVjdCBjb21wdXRlZCBwcm9wZXJ0aWVzIG1lcmdlXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb3BlcnRpZXMpIHtcbiAgICByZXR1cm4gcHJvcGVydGllcy5yZWR1Y2UoKHByZXYsIHtrLCB2fSkgPT4ge1xuICAgICAgICBwcmV2W2tdID0gdjtcbiAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgfSwge30pO1xufVxuIiwiLyoqXG4gKiBAZmlsZSBzYW4gcmVmIHJld3JpdGVcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQgKiBhcyBzYW4gZnJvbSAnc2FuJztcbmltcG9ydCB7Y2FtZWxpemV9IGZyb20gJy4uL3NoYXJlZC91dGlsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKG5hbWUpIHtcblxuICAgIGNvbnN0IG93bmVyID0gdGhpcztcblxuICAgIGZ1bmN0aW9uIGNoaWxkcmVuVHJhdmVyc2FsKGNoaWxkcmVuKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgbGV0IHJlZlRhcmdldCA9IGVsZW1lbnRUcmF2ZXJzYWwoY2hpbGRyZW5baV0pO1xuICAgICAgICAgICAgaWYgKHJlZlRhcmdldCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZWZUYXJnZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlbGVtZW50VHJhdmVyc2FsKGVsZW1lbnQpIHtcbiAgICAgICAgY29uc3Qgbm9kZVR5cGUgPSBlbGVtZW50Lm5vZGVUeXBlO1xuICAgICAgICBpZiAobm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVmVGFyZ2V0O1xuICAgICAgICBpZiAoZWxlbWVudC5vd25lciA9PT0gb3duZXIpIHtcbiAgICAgICAgICAgIGxldCByZWY7XG4gICAgICAgICAgICBsZXQgdmFsdWU7XG4gICAgICAgICAgICBzd2l0Y2ggKG5vZGVUeXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgcmVmID0gZWxlbWVudC5hTm9kZS5kaXJlY3RpdmVzLnJlZjtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBzYW4uZXZhbEV4cHIocmVmLnZhbHVlLCBlbGVtZW50LnNjb3BlLCBvd25lcik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWYgJiYgKHZhbHVlID09PSBuYW1lIHx8IGNhbWVsaXplKHZhbHVlKSA9PT0gbmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBub2RlVHlwZSA9PT0gNCA/IGVsZW1lbnQuZWwgOiBlbGVtZW50LmNoaWxkcmVuLm1hcChlbGVtZW50VHJhdmVyc2FsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgcmVmID0gZWxlbWVudC5zb3VyY2UuZGlyZWN0aXZlcy5yZWY7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gc2FuLmV2YWxFeHByKHJlZi52YWx1ZSwgZWxlbWVudC5zY29wZSwgb3duZXIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVmICYmICh2YWx1ZSA9PT0gbmFtZSB8fCBjYW1lbGl6ZSh2YWx1ZSkgPT09IG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZWZUYXJnZXQgPSBlbGVtZW50LnNsb3RDaGlsZHJlbiAmJiBjaGlsZHJlblRyYXZlcnNhbChlbGVtZW50LnNsb3RDaGlsZHJlbik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVmVGFyZ2V0IHx8IGNoaWxkcmVuVHJhdmVyc2FsKGVsZW1lbnQuY2hpbGRyZW4pO1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZHJlblRyYXZlcnNhbCh0aGlzLmNoaWxkcmVuKTtcbn07XG4iLCIvKipcbiAqIEBmaWxlIG1lcmdlIG9wdGlvbnNcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQge2V4dGVuZH0gZnJvbSAnLi4vc2hhcmVkL3V0aWwnO1xuaW1wb3J0IHtsaWZlQ3ljbGVLZXlzLCBsaWZlQ3ljbGVNYXB9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IGF0b21CdWlsZEluTWl4aW4gZnJvbSAnLi9hdG9tLWdsb2JhbC1hcGknO1xuXG5jb25zdCBrZXlzID0gW1xuICAgICdmaWx0ZXJzJyxcbiAgICAnY29tcHV0ZWQnXG5dO1xuXG5mdW5jdGlvbiBtZXJnZUhvb2socGFyZW50VmFsLCBjaGlsZFZhbCkge1xuICAgIHJldHVybiBjaGlsZFZhbFxuICAgICAgICA/IHBhcmVudFZhbFxuICAgICAgICAgICAgPyBwYXJlbnRWYWwuY29uY2F0KGNoaWxkVmFsKVxuICAgICAgICAgICAgOiBBcnJheS5pc0FycmF5KGNoaWxkVmFsKVxuICAgICAgICAgICAgICAgID8gY2hpbGRWYWxcbiAgICAgICAgICAgICAgICA6IFtjaGlsZFZhbF1cbiAgICAgICAgICAgIDogcGFyZW50VmFsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZXJnZU9wdGlvbnMob3B0aW9ucykge1xuICAgIGNvbnN0IGRlc3RPcHRpb25zID0ge307XG4gICAgY29uc3QgbGlzdCA9IEFycmF5LmlzQXJyYXkob3B0aW9ucy5taXhpbnMpXG4gICAgICAgID8gW2F0b21CdWlsZEluTWl4aW4sIC4uLm9wdGlvbnMubWl4aW5zLCBvcHRpb25zXVxuICAgICAgICA6IFthdG9tQnVpbGRJbk1peGluLCBvcHRpb25zXTtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gbGlzdC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBjb25zdCBvcHQgPSBsaXN0W2ldO1xuICAgICAgICBvcHQubWV0aG9kcyAmJiBleHRlbmQoZGVzdE9wdGlvbnMsIG9wdC5tZXRob2RzKTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBrZXlzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCBrID0ga2V5c1tqXTtcbiAgICAgICAgICAgIGlmIChvcHRba10pIHtcbiAgICAgICAgICAgICAgICBkZXN0T3B0aW9uc1trXSA9IGV4dGVuZChkZXN0T3B0aW9uc1trXSB8fCB7fSwgb3B0W2tdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxpZmVDeWNsZUtleXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGsgPSBsaWZlQ3ljbGVLZXlzW2pdO1xuICAgICAgICAgICAgY29uc3QgZGsgPSBsaWZlQ3ljbGVNYXBba107XG4gICAgICAgICAgICBpZiAob3B0W2tdKSB7XG4gICAgICAgICAgICAgICAgZGVzdE9wdGlvbnNbZGtdID0gbWVyZ2VIb29rKGRlc3RPcHRpb25zW2RrXSB8fCBbXSwgb3B0W2tdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxpZmVDeWNsZUtleXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgY29uc3QgayA9IGxpZmVDeWNsZUtleXNbal07XG4gICAgICAgIGNvbnN0IGRrID0gbGlmZUN5Y2xlTWFwW2tdO1xuICAgICAgICBpZiAoZGVzdE9wdGlvbnNbZGtdKSB7XG4gICAgICAgICAgICBjb25zdCBob29rcyA9IGRlc3RPcHRpb25zW2RrXS5zbGljZSgpO1xuICAgICAgICAgICAgZGVzdE9wdGlvbnNbZGtdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGhvb2tzLmZvckVhY2goaG9vayA9PiBob29rLmNhbGwodGhpcyksIHRoaXMpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGVzdE9wdGlvbnM7XG59XG4iLCIvKipcbiAqIEBmaWxlIGNvbnN0YW50c1xuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmV4cG9ydCBjb25zdCBsaWZlQ3ljbGVNYXAgPSB7XG4gICAgYmVmb3JlQ3JlYXRlOiAnY29tcGlsZWQnLFxuICAgIG1vdW50ZWQ6ICdhdHRhY2hlZCcsXG4gICAgY3JlYXRlZDogJ2luaXRlZCcsXG4gICAgYmVmb3JlTW91bnQ6ICdjcmVhdGVkJyxcbiAgICBiZWZvcmVEZXN0cm95OiAnZGV0YWNoZWQnLFxuICAgIGRlc3Ryb3k6ICdkaXNwb3NlZCcsXG4gICAgdXBkYXRlZDogJ3VwZGF0ZWQnLFxuICAgIGJlZm9yZVVwZGF0ZTogJ2JlZm9yZVVwZGF0ZSdcbn07XG5cbmV4cG9ydCBjb25zdCBsaWZlQ3ljbGVLZXlzID0gT2JqZWN0LmtleXMobGlmZUN5Y2xlTWFwKTtcbiIsIi8qKlxuICogQGZpbGUg5YWo5bGA55Sf5pWI55qE5Ye95pWwXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuY29uc3QgTUFUSF9NRVRIT0QgPSBbXG4gICAgJ2Zsb29yJywgJ2NlaWwnLCAncm91bmQnLFxuICAgICdhYnMnLCAnbWF4JywgJ21pbicsICdwb3cnXG5dO1xuXG5jb25zdCBtZXRob2RzID0gZXhwb3J0cy5tZXRob2RzID0ge307XG5cbk1BVEhfTUVUSE9ELmZvckVhY2gobmFtZSA9PiB7XG4gICAgbWV0aG9kc1tgbWF0aF8ke25hbWV9YF0gPSBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICByZXR1cm4gTWF0aFtuYW1lXS5hcHBseShNYXRoLCBhcmdzKTtcbiAgICB9O1xufSk7XG5cbm1ldGhvZHMuYXJyYXlfc2xpY2UgPSBmdW5jdGlvbiAoYXJyLCBzdGFydCwgbGVuKSB7XG4gICAgdmFyIGVuZCA9IGxlbiA9PSBudWxsID8gdm9pZCAwIDogKGxlbiA+PSAwID8gKHN0YXJ0ICsgbGVuKSA6IChhcnIubGVuZ3RoICsgbGVuKSk7XG4gICAgcmV0dXJuIGFyci5zbGljZShzdGFydCwgZW5kKTtcbn07XG5cbm1ldGhvZHMuYXJyYXlfam9pbiA9IGZ1bmN0aW9uIChhcnIsIHNlcCkge1xuICAgIHJldHVybiBhcnIuam9pbihzZXApO1xufTtcblxubWV0aG9kcy5zdHJfcG9zID0gZnVuY3Rpb24gKHN0ciwgbWF0Y2gpIHtcbiAgICByZXR1cm4gc3RyLmluZGV4T2YobWF0Y2gpO1xufTtcblxubWV0aG9kcy5vYmplY3RfZnJlZXplID0gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBPYmplY3QuZnJlZXplKG9iaik7XG59O1xuXG5leHBvcnRzLmZpbHRlcnMgPSB7XG4gICAganNvbihvYmopIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGpzb24pO1xuICAgIH0sXG4gICAgbG93ZXIoc3RyKSB7XG4gICAgICAgIHJldHVybiBzdHIudG9Mb3dlckNhc2UoKTtcbiAgICB9LFxuICAgIHVwcGVyKHN0cikge1xuICAgICAgICByZXR1cm4gc3RyLnRvVXBwZXJDYXNlKCk7XG4gICAgfVxufTtcbiIsIi8qKlxuICogQGZpbGUg5pWw5o2u57uR5a6aXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHtpc09iamVjdCwgaGFzT3duLCBpc1BsYWluT2JqZWN0LCBleHRlbmQsIGRlZn0gZnJvbSAnLi4vc2hhcmVkL3V0aWwnO1xuaW1wb3J0IHtFeHByVHlwZX0gZnJvbSAnc2FuJztcblxuY29uc3QgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcbmNvbnN0IGFycmF5TWV0aG9kcyA9IE9iamVjdC5jcmVhdGUoYXJyYXlQcm90byk7XG5cbmNvbnN0IG1ldGhvZHNUb1BhdGNoID0gW1xuICAgICdwdXNoJyxcbiAgICAncG9wJyxcbiAgICAnc2hpZnQnLFxuICAgICd1bnNoaWZ0JyxcbiAgICAnc3BsaWNlJ1xuICAgIC8vICdzb3J0JyxcbiAgICAvLyAncmV2ZXJzZSdcbl07XG5cbi8qKlxuICogSW50ZXJjZXB0IG11dGF0aW5nIG1ldGhvZHMgYW5kIGVtaXQgZXZlbnRzXG4gKi9cbm1ldGhvZHNUb1BhdGNoLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgIC8vIGNhY2hlIG9yaWdpbmFsIG1ldGhvZFxuICAgIGNvbnN0IG9yaWdpbmFsID0gYXJyYXlQcm90b1ttZXRob2RdXG4gICAgZGVmKGFycmF5TWV0aG9kcywgbWV0aG9kLCB7XG4gICAgICAgIHZhbHVlKC4uLmFyZ3MpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IG9yaWdpbmFsLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICAgICAgY29uc3Qgb2IgPSB0aGlzLl9fb2JfXztcbiAgICAgICAgICAgIGxldCBpbnNlcnRlZDtcbiAgICAgICAgICAgIHN3aXRjaCAobWV0aG9kKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAncHVzaCc6XG4gICAgICAgICAgICAgICAgY2FzZSAndW5zaGlmdCc6XG4gICAgICAgICAgICAgICAgICAgIGluc2VydGVkID0gYXJncztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnc3BsaWNlJzpcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0ZWQgPSBhcmdzLnNsaWNlKDIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpbnNlcnRlZCkge1xuICAgICAgICAgICAgICAgIG9iLm9ic2VydmVBcnJheShpbnNlcnRlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvYi5jb250ZXh0LmRhdGFbbWV0aG9kXS5jYWxsKG9iLmNvbnRleHQuZGF0YSwgb2IuZXhwciwgLi4uYXJncyk7XG4gICAgICAgICAgICBvYnNlcnZlKG9iLmNvbnRleHQuZGF0YS5nZXQob2IuZXhwciksIG9iLmV4cHIsIG9iLmNvbnRleHQpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgIH0pXG59KTtcblxuY2xhc3MgT2JzZXJ2ZXIge1xuXG4gICAgY29uc3RydWN0b3IodmFsdWUsIGV4cHIsIGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5leHByID0gZXhwcjtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgZGVmKHZhbHVlLCAnX19vYl9fJywge1xuICAgICAgICAgICAgdmFsdWU6IHRoaXNcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgdmFsdWUuX19wcm90b19fID0gYXJyYXlNZXRob2RzO1xuICAgICAgICAgICAgdGhpcy5vYnNlcnZlQXJyYXkodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5rZXlzID0gT2JqZWN0LmtleXModmFsdWUpIHx8IFtdO1xuICAgICAgICAgICAgdGhpcy53YWxrKHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdhbGsgdGhyb3VnaCBhbGwgcHJvcGVydGllcyBhbmQgY29udmVydCB0aGVtIGludG9cbiAgICAgKiBnZXR0ZXIvc2V0dGVycy4gVGhpcyBtZXRob2Qgc2hvdWxkIG9ubHkgYmUgY2FsbGVkIHdoZW5cbiAgICAgKiB2YWx1ZSB0eXBlIGlzIE9iamVjdC5cbiAgICAgKi9cbiAgICB3YWxrKG9iaikge1xuICAgICAgICBjb25zdCBrZXlzID0gdGhpcy5rZXlzO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGRlZmluZVJlYWN0aXZlKG9iaiwga2V5c1tpXSwgdGhpcy5leHByLCB0aGlzLmNvbnRleHQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT2JzZXJ2ZSBhIGxpc3Qgb2YgQXJyYXkgaXRlbXMuXG4gICAgICovXG4gICAgb2JzZXJ2ZUFycmF5KGl0ZW1zKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gaXRlbXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBvYnNlcnZlKGl0ZW1zW2ldLCBleHRlbmQoe30sIHRoaXMuZXhwciwge1xuICAgICAgICAgICAgICAgIHBhdGhzOiBbLi4udGhpcy5leHByLnBhdGhzLCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IEV4cHJUeXBlLk5VTUJFUixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGlcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSksIHRoaXMuY29udGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRlZmluZVJlYWN0aXZlKG9iaiwga2V5LCBleHByLCBjb250ZXh0KSB7XG5cbiAgICBjb25zdCBwcm9wZXJ0eSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpO1xuICAgIGlmIChwcm9wZXJ0eSAmJiBwcm9wZXJ0eS5jb25maWd1cmFibGUgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBjYXRlciBmb3IgcHJlLWRlZmluZWQgZ2V0dGVyL3NldHRlcnNcbiAgICBjb25zdCBnZXR0ZXIgPSBwcm9wZXJ0eSAmJiBwcm9wZXJ0eS5nZXQ7XG4gICAgY29uc3Qgc2V0dGVyID0gcHJvcGVydHkgJiYgcHJvcGVydHkuc2V0O1xuXG4gICAgY29uc3Qga2V5RXhwciA9IHtcbiAgICAgICAgdHlwZTogRXhwclR5cGUuQUNDRVNTT1IsXG4gICAgICAgIHBhdGhzOiBbLi4uZXhwci5wYXRocywge1xuICAgICAgICAgICAgdHlwZTogRXhwclR5cGUuU1RSSU5HLFxuICAgICAgICAgICAgdmFsdWU6IGtleVxuICAgICAgICB9XVxuICAgIH07XG5cbiAgICBsZXQgdmFsID0gb2JqW2tleV07XG4gICAgb2JzZXJ2ZSh2YWwsIGtleUV4cHIsIGNvbnRleHQpO1xuICAgIGNvbnN0IG5ld1Byb3BlcnR5ID0ge1xuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIHNldChuZXdWYWwpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZ2V0dGVyID8gZ2V0dGVyLmNhbGwob2JqKSA6IHZhbDtcbiAgICAgICAgICAgIGlmIChuZXdWYWwgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGdldHRlciAmJiAhc2V0dGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNldHRlcikge1xuICAgICAgICAgICAgICAgIHNldHRlci5jYWxsKG9iaiwgbmV3VmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhbCA9IG5ld1ZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9ic2VydmUobmV3VmFsLCBrZXlFeHByLCBjb250ZXh0KTtcbiAgICAgICAgICAgIGNvbnRleHQuZGF0YS5zZXQoa2V5RXhwciwgbmV3VmFsLCB7Zm9yY2U6IHRydWV9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBnZXR0ZXIgPyBnZXR0ZXIuY2FsbChvYmopIDogdmFsO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBkZWYob2JqLCBrZXksIG5ld1Byb3BlcnR5KTtcbn1cblxuY29uc3QgZGVmYXVsdEV4cHIgPSB7XG4gICAgdHlwZTogRXhwclR5cGUuQUNDRVNTT1IsXG4gICAgcGF0aHM6IFtdXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZXhwciA9IGV4dGVuZCh7fSwgZGVmYXVsdEV4cHIpO1xuICAgIGNvbnN0IGtleXMgPSBbLi4udGhpcy5fZGF0YUtleXMsIC4uLnRoaXMuX3Byb3BLZXlzXTtcbiAgICBjb25zdCBrZXlMZW5ndGggPSBrZXlzLmxlbmd0aDtcblxuICAgIG9ic2VydmUodGhpcy5kYXRhLmdldCgpLCBleHByLCB0aGlzKTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzO1xuXG4gICAgdGhpcy5fZGF0YSA9IHRoaXMuZGF0YS5nZXQoKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5TGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgZGVmKGNvbnRleHQsIGtleSwge1xuICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb250ZXh0Ll9kYXRhW2tleV07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0KG5ld1ZhbCkge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuX2RhdGFba2V5XSA9IG5ld1ZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5kYXRhLm93bmVyID0gdGhpcztcbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZSh2YWx1ZSwgZXhwciwgY29udGV4dCkge1xuICAgIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IG9iO1xuICAgIGlmIChoYXNPd24odmFsdWUsICdfX29iX18nKSAmJiB2YWx1ZS5fX29iX18gaW5zdGFuY2VvZiBPYnNlcnZlcikge1xuICAgICAgICBvYiA9IHZhbHVlLl9fb2JfX1xuICAgIH1cbiAgICBlbHNlIGlmIChcbiAgICAgICAgKEFycmF5LmlzQXJyYXkodmFsdWUpIHx8IGlzUGxhaW5PYmplY3QodmFsdWUpKVxuICAgICAgICAmJiBPYmplY3QuaXNFeHRlbnNpYmxlKHZhbHVlKVxuICAgICkge1xuICAgICAgICBvYiA9IG5ldyBPYnNlcnZlcih2YWx1ZSwgZXhwciwgY29udGV4dCk7XG4gICAgfVxuICAgIHJldHVybiBvYjtcbn1cbiIsIi8qKlxuICogQGZpbGUg6KaG55uWIHNhbiDljp/nlJ/nmoQgX2NhbGNDb21wdXRlZFxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCB7ZGVmfSBmcm9tICcuLi9zaGFyZWQvdXRpbCc7XG5pbXBvcnQgc2xvdHMgZnJvbSAnLi9nZXQtc2xvdHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoa2V5KSB7XG4gICAgbGV0IGNvbXB1dGVkRGVwcyA9IHRoaXMuY29tcHV0ZWREZXBzW2tleV07XG4gICAgaWYgKCFjb21wdXRlZERlcHMpIHtcbiAgICAgICAgY29tcHV0ZWREZXBzID0gdGhpcy5jb21wdXRlZERlcHNba2V5XSA9IHt9O1xuICAgIH1cblxuICAgIGNvbnN0IG1lID0gdGhpcztcbiAgICBjb25zdCBkYXRhID0gbWUuZGF0YS5nZXQoKTtcbiAgICBjb25zdCBjb250ZXh0ID0ge307XG5cbiAgICBkZWYoY29udGV4dCwgJyRyb290Jywge1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gbWUuJHJvb3Q7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGRlZihjb250ZXh0LCAnJHNsb3RzJywge1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gc2xvdHMuY2FsbChtZSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhkYXRhKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBrID0ga2V5c1tpXTtcbiAgICAgICAgZGVmKGNvbnRleHQsIGssIHtcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWNvbXB1dGVkRGVwc1trXSkge1xuICAgICAgICAgICAgICAgICAgICBjb21wdXRlZERlcHNba10gPSAxO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChtZS5jb21wdXRlZFtrXSAmJiAhbWUuY29tcHV0ZWREZXBzW2tdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZS5fY2FsY0NvbXB1dGVkKGspO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbWUud2F0Y2goaywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWUuX2NhbGNDb21wdXRlZChrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gbWUuZGF0YS5nZXQoayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuZGF0YS5zZXQoa2V5LCB0aGlzLmNvbXB1dGVkW2tleV0uY2FsbChjb250ZXh0KSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9