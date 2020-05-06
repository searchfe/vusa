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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3V0aWwuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2FuXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvZ2V0LXNsb3RzLmpzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lL2RlZmluZS1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvb3ZlcnJpZGUtZGF0YS1nZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvbWVyZ2UtY2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvbWVyZ2Utc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvbG9vcC1leHByZXNzaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lL2dldC1jb21wb25lbnQtdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcnVudGltZS9vYmplY3QtY29tcHV0ZWQtcHJvcGVydGlycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcnVudGltZS9yZWYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvbWVyZ2Utb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcnVudGltZS9jb25zdGFudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcnVudGltZS9hdG9tLWdsb2JhbC1hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvYmluZC1kYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lL2NhbGMtY29tcHV0ZWQuanMiXSwibmFtZXMiOlsiZXh0ZW5kIiwiT2JqZWN0IiwiYXNzaWduIiwidG9PYmplY3QiLCJhcnIiLCJyZXMiLCJpIiwibGVuZ3RoIiwiX3RvU3RyaW5nIiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJpc09iamVjdCIsIm9iaiIsImhhc093blByb3BlcnR5IiwiaGFzT3duIiwia2V5IiwiY2FsbCIsImlzUGxhaW5PYmplY3QiLCJkZWYiLCJwcm9wZXJ0eSIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsImNhY2hlZCIsImZuIiwiY2FjaGUiLCJjcmVhdGUiLCJjYWNoZWRGbiIsInN0ciIsImhpdCIsImh5cGhlbmF0ZVJFIiwiaHlwaGVuYXRlIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwiY2FtZWxpemUiLCJfIiwiYyIsInRvVXBwZXJDYXNlIiwic2xvdENoaWxkcmVuIiwibGlmZUN5Y2xlIiwic291cmNlU2xvdHMiLCJhdHRhY2hlZCIsInJlZHVjZSIsInByZXYiLCJjaGlsZCIsIm5hbWUiLCJjb25jYXQiLCJjaGlsZHJlbiIsInNsb3RzIiwibmFtZWQiLCJub25hbWUiLCJkZWZhdWx0IiwiZGVmYXVsdFNhbk9wdGlvbnMiLCJfbWMiLCJtZXJnZUNsYXNzIiwiX21zIiwibWVyZ2VTdHlsZSIsIl9sIiwibG9vcEV4cHJlc3Npb24iLCJfZXgiLCJfb2NwIiwib2JqZWN0Q29tcHV0ZWRQcm9wZXJ0aWVzIiwiZ2V0Q29tcG9uZW50VHlwZSIsIiRlbWl0IiwiQ29tcG9uZW50IiwiZmlyZSIsIiRvbiIsIm9uIiwiJHdhdGNoIiwid2F0Y2giLCJfbm9vcCIsIm1lbWJlck1hcCIsIiRlbCIsImVsIiwiJGNvbnRleHQiLCJvd25lciIsIiRwYXJlbnQiLCJwYXJlbnRDb21wb25lbnQiLCIkY2hpbGRyZW4iLCJmaWx0ZXIiLCJub2RlVHlwZSIsIiRyb290Iiwicm9vdCIsIiRzbG90cyIsInNsb3QiLCJfaXNEZXN0cm95ZWQiLCJkaXNwb3NlZCIsIm9yaWdpbmFsVXBkYXRlIiwiX3VwZGF0ZSIsImNoYW5nZXMiLCJfdG9QaGFzZSIsImlubmVyS2V5IiwiZGVmaW5lIiwib3B0aW9ucyIsInNhbk9wdGlvbnMiLCJ0ZW1wbGF0ZSIsIl9fc2FudGVtcGxhdGUiLCJhTm9kZSIsIl9fc2FuYU5vZGUiLCJjb21waWxlZEhvb2siLCJjb21waWxlZCIsIl9pc1NhbiIsIl9jYWxjQ29tcHV0ZWQiLCJjYWxjQ29tcHV0ZWQiLCJiaW5kIiwicHJvcGVydGllcyIsImtleXMiLCJwcm9wcyIsImdldCIsIiRvcHRpb25zIiwidmFsdWUiLCJkZWZpbmVQcm9wZXJ0aWVzIiwicmVmcyIsIl9fc2FuUmVmcyIsImluaXRlZEhvb2siLCJpbml0ZWQiLCJtZSIsIiRyZWZzIiwibGVuIiwiciIsInJlZiIsIiRzdHlsZSIsImRhdGEiLCJyYXciLCJiaW5kRGF0YSIsImZvckVhY2giLCJwcmVwcmNlc3NBTm9kZSIsImluaXREYXRhIiwiZGVmYXVsdFByb3BzIiwicHJvcEtleXMiLCJfcHJvcEtleXMiLCJBcnJheSIsImlzQXJyYXkiLCJwIiwicHJvcCIsImNvbXB1dGVkIiwiX2NvbXB1dGVkS2V5cyIsImsiLCJfc3JjU2JpbmREYXRhIiwiX2RhdGFLZXlzIiwiY29tcG9uZW50cyIsIm9yaWdpbmFsR2V0IiwiRGF0YSIsImV4cHIiLCJjYWxsZWUiLCJ1bmRlZmluZWQiLCJ0eXBlIiwiRXhwclR5cGUiLCJBQ0NFU1NPUiIsInBhdGhzIiwiZmlyc3QiLCJpbmRleE9mIiwibCIsInN0cmluZyIsImNscyIsInNwbGl0Iiwib2JqZWN0IiwiYXJyYXkiLCJjbGF6eiIsImVsZW1lbnQiLCJzdGF0aWNDbGFzcyIsImpvaW4iLCJwYXJzZVN0eWxlVGV4dCIsImNzc1RleHQiLCJsaXN0RGVsaW1pdGVyIiwicHJvcGVydHlEZWxpbWl0ZXIiLCJpdGVtIiwidG1wIiwidHJpbSIsIm5vcm1hbGl6ZVN0eWxlQmluZGluZyIsImJpbmRpbmdTdHlsZSIsInN0YXRpY1N0eWxlIiwic3R5bGUiLCJ2U2hvdyIsImRpc3BsYXkiLCJ0b0FycmF5IiwibiIsImlzTmFOIiwidGFnTmFtZSIsImhvdHNwb3QiLCJpcyIsImlzVmFsdWUiLCJ2IiwiY2hpbGRyZW5UcmF2ZXJzYWwiLCJyZWZUYXJnZXQiLCJlbGVtZW50VHJhdmVyc2FsIiwiZGlyZWN0aXZlcyIsInNhbiIsImV2YWxFeHByIiwic2NvcGUiLCJtYXAiLCJzb3VyY2UiLCJtZXJnZUhvb2siLCJwYXJlbnRWYWwiLCJjaGlsZFZhbCIsIm1lcmdlT3B0aW9ucyIsImRlc3RPcHRpb25zIiwibGlzdCIsIm1peGlucyIsImF0b21CdWlsZEluTWl4aW4iLCJvcHQiLCJtZXRob2RzIiwiaiIsImxpZmVDeWNsZUtleXMiLCJkayIsImxpZmVDeWNsZU1hcCIsImhvb2tzIiwic2xpY2UiLCJob29rIiwiYmVmb3JlQ3JlYXRlIiwibW91bnRlZCIsImNyZWF0ZWQiLCJiZWZvcmVNb3VudCIsImJlZm9yZURlc3Ryb3kiLCJkZXN0cm95IiwidXBkYXRlZCIsImJlZm9yZVVwZGF0ZSIsIk1BVEhfTUVUSE9EIiwiZXhwb3J0cyIsImFyZ3MiLCJNYXRoIiwiYXBwbHkiLCJhcnJheV9zbGljZSIsInN0YXJ0IiwiZW5kIiwiYXJyYXlfam9pbiIsInNlcCIsInN0cl9wb3MiLCJtYXRjaCIsIm9iamVjdF9mcmVlemUiLCJmcmVlemUiLCJmaWx0ZXJzIiwianNvbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJsb3dlciIsInVwcGVyIiwiYXJyYXlQcm90byIsImFycmF5TWV0aG9kcyIsIm1ldGhvZHNUb1BhdGNoIiwibWV0aG9kIiwib3JpZ2luYWwiLCJyZXN1bHQiLCJvYiIsIl9fb2JfXyIsImluc2VydGVkIiwib2JzZXJ2ZUFycmF5IiwiY29udGV4dCIsIm9ic2VydmUiLCJPYnNlcnZlciIsIl9fcHJvdG9fXyIsIndhbGsiLCJkZWZpbmVSZWFjdGl2ZSIsIml0ZW1zIiwiTlVNQkVSIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZ2V0dGVyIiwic2V0dGVyIiwic2V0Iiwia2V5RXhwciIsIlNUUklORyIsInZhbCIsIm5ld1Byb3BlcnR5IiwibmV3VmFsIiwiZm9yY2UiLCJkZWZhdWx0RXhwciIsImtleUxlbmd0aCIsIl9kYXRhIiwiaXNFeHRlbnNpYmxlIiwiY29t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LENBQWIsRUFBZ0I7QUFDWjdCLFNBRFksaUJBQ047QUFDRixZQUFJLENBQUNpSyxZQUFZLENBQUNwSSxDQUFELENBQWpCLEVBQXNCO0FBQ2xCb0ksc0JBQVksQ0FBQ3BJLENBQUQsQ0FBWixHQUFrQixDQUFsQjs7QUFFQSxjQUFJckIsRUFBRSxDQUFDbUIsUUFBSCxDQUFZRSxDQUFaLEtBQWtCLENBQUNyQixFQUFFLENBQUN5SixZQUFILENBQWdCcEksQ0FBaEIsQ0FBdkIsRUFBMkM7QUFDdkNyQixjQUFFLENBQUNkLGFBQUgsQ0FBaUJtQyxDQUFqQjtBQUNIOztBQUVEckIsWUFBRSxDQUFDL0MsS0FBSCxDQUFTb0UsQ0FBVCxFQUFZLFlBQVk7QUFDcEJyQixjQUFFLENBQUNkLGFBQUgsQ0FBaUJ2RixHQUFqQjtBQUNILFdBRkQ7QUFHSDs7QUFFRCxlQUFPcUcsRUFBRSxDQUFDTSxJQUFILENBQVFkLEdBQVIsQ0FBWTZCLENBQVosQ0FBUDtBQUNIO0FBZlcsS0FBaEI7QUExQnNCOztBQXdCMUIsT0FBSyxJQUFJbkksQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR29HLElBQUksQ0FBQ25HLE1BQXpCLEVBQWlDRCxDQUFDLEVBQWxDLEVBQXNDO0FBQUEsVUFBN0JBLENBQTZCO0FBbUJyQzs7QUFFRCxPQUFLb0gsSUFBTCxDQUFVd0ksR0FBVixDQUFjblAsR0FBZCxFQUFtQixLQUFLd0gsUUFBTCxDQUFjeEgsR0FBZCxFQUFtQkMsSUFBbkIsQ0FBd0J1TyxPQUF4QixDQUFuQjtBQUNILEMiLCJmaWxlIjoidnVzYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInNhblwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJzYW5cIl0sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGZhY3RvcnkocmVxdWlyZShcInNhblwiKSkgOiBmYWN0b3J5KHJvb3RbXCJzYW5cIl0pO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkod2luZG93LCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX18xX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCIvKipcbiAqIEBmaWxlIOS4gOS6m+W3peWFt+WHveaVsFxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbi8qKlxuICogTWl4IHByb3BlcnRpZXMgaW50byB0YXJnZXQgb2JqZWN0LlxuICovXG5leHBvcnQgY29uc3QgZXh0ZW5kID0gT2JqZWN0LmFzc2lnbjtcblxuLyoqXG4gKiBNZXJnZSBhbiBBcnJheSBvZiBPYmplY3RzIGludG8gYSBzaW5nbGUgT2JqZWN0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9PYmplY3QoYXJyKSB7XG4gICAgY29uc3QgcmVzID0ge307XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGFycltpXSkge1xuICAgICAgICAgICAgZXh0ZW5kKHJlcywgYXJyW2ldKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufVxuXG4vKipcbiAqIEdldCB0aGUgcmF3IHR5cGUgc3RyaW5nIG9mIGEgdmFsdWUsIGUuZy4sIFtvYmplY3QgT2JqZWN0XS5cbiAqL1xuZXhwb3J0IGNvbnN0IF90b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogUXVpY2sgb2JqZWN0IGNoZWNrIC0gdGhpcyBpcyBwcmltYXJpbHkgdXNlZCB0byB0ZWxsXG4gKiBPYmplY3RzIGZyb20gcHJpbWl0aXZlIHZhbHVlcyB3aGVuIHdlIGtub3cgdGhlIHZhbHVlXG4gKiBpcyBhIEpTT04tY29tcGxpYW50IHR5cGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdChvYmopIHtcbiAgICByZXR1cm4gb2JqICE9PSBudWxsICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgYW4gb2JqZWN0IGhhcyB0aGUgcHJvcGVydHkuXG4gKi9cbmNvbnN0IGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbmV4cG9ydCBmdW5jdGlvbiBoYXNPd24ob2JqLCBrZXkpIHtcbiAgICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSk7XG59XG5cbi8qKlxuICogU3RyaWN0IG9iamVjdCB0eXBlIGNoZWNrLiBPbmx5IHJldHVybnMgdHJ1ZVxuICogZm9yIHBsYWluIEphdmFTY3JpcHQgb2JqZWN0cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzUGxhaW5PYmplY3Qob2JqKSB7XG4gICAgcmV0dXJuIF90b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IE9iamVjdF0nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVmKG9iaiwga2V5LCBwcm9wZXJ0eSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgZXh0ZW5kKHtcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0sIHByb3BlcnR5KSk7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgY2FjaGVkIHZlcnNpb24gb2YgYSBwdXJlIGZ1bmN0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2FjaGVkKGZuKSB7XG4gICAgY29uc3QgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHJldHVybiBmdW5jdGlvbiBjYWNoZWRGbihzdHIpIHtcbiAgICAgICAgY29uc3QgaGl0ID0gY2FjaGVbc3RyXTtcbiAgICAgICAgcmV0dXJuIGhpdCB8fCAoY2FjaGVbc3RyXSA9IGZuKHN0cikpO1xuICAgIH07XG59XG5cbi8qKlxuICogSHlwaGVuYXRlIGEgY2FtZWxDYXNlIHN0cmluZy5cbiAqL1xuY29uc3QgaHlwaGVuYXRlUkUgPSAvKFteLV0pKFtBLVpdKS9nO1xuZXhwb3J0IGNvbnN0IGh5cGhlbmF0ZSA9IGNhY2hlZCgoc3RyKSA9PiB7XG4gICAgcmV0dXJuIHN0clxuICAgICAgICAucmVwbGFjZShoeXBoZW5hdGVSRSwgJyQxLSQyJylcbiAgICAgICAgLnJlcGxhY2UoaHlwaGVuYXRlUkUsICckMS0kMicpXG4gICAgICAgIC50b0xvd2VyQ2FzZSgpO1xufSk7XG5cbmV4cG9ydCBjb25zdCBjYW1lbGl6ZSA9IHN0ciA9PiBzdHIucmVwbGFjZSgvLShcXHcpL2csIChfLCBjKSA9PiAoYyA/IGMudG9VcHBlckNhc2UoKSA6ICcnKSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzFfXzsiLCIvKipcbiAqIEBmaWxlIHNsb3RcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQge2V4dGVuZH0gZnJvbSAnLi4vc2hhcmVkL3V0aWwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3Qge1xuICAgICAgICBzbG90Q2hpbGRyZW4sXG4gICAgICAgIGxpZmVDeWNsZSxcbiAgICAgICAgc291cmNlU2xvdHNcbiAgICB9ID0gdGhpcztcblxuICAgIGlmIChsaWZlQ3ljbGUuYXR0YWNoZWQpIHtcbiAgICAgICAgcmV0dXJuIHNsb3RDaGlsZHJlbi5yZWR1Y2UoKHByZXYsIGNoaWxkKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gY2hpbGQubmFtZSB8fCAnZGVmYXVsdCc7XG4gICAgICAgICAgICBpZiAoIXByZXZbbmFtZV0pIHtcbiAgICAgICAgICAgICAgICBwcmV2W25hbWVdID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcmV2W25hbWVdID0gcHJldltuYW1lXS5jb25jYXQoY2hpbGQuY2hpbGRyZW4pO1xuICAgICAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICAgIH0sIHt9KTtcbiAgICB9XG5cbiAgICBjb25zdCBzbG90cyA9IHt9O1xuXG4gICAgaWYgKHNvdXJjZVNsb3RzLm5hbWVkKSB7XG4gICAgICAgIGV4dGVuZChzbG90cywgc291cmNlU2xvdHMubmFtZWQpO1xuICAgIH1cbiAgICBpZiAoc291cmNlU2xvdHMubm9uYW1lKSB7XG4gICAgICAgIHNsb3RzLmRlZmF1bHQgPSBzb3VyY2VTbG90cy5ub25hbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNsb3RzO1xuXG59XG4iLCIvKipcbiAqIEBmaWxlIGVudHJ5XG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuZXhwb3J0IHtkZWZhdWx0IGFzIGRlZmluZUNvbXBvbmVudH0gZnJvbSAnLi9kZWZpbmUtY29tcG9uZW50JztcbiIsIi8qKlxuICogQGZpbGUgY29tcG9uZW50XG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0ICcuL292ZXJyaWRlLWRhdGEtZ2V0JztcblxuaW1wb3J0IHtkZWZpbmVDb21wb25lbnQsIGluaGVyaXRzLCBDb21wb25lbnR9IGZyb20gJ3Nhbic7XG5pbXBvcnQge2V4dGVuZCwgaHlwaGVuYXRlLCBkZWZ9IGZyb20gJy4uL3NoYXJlZC91dGlsJztcbmltcG9ydCBtZXJnZUNsYXNzIGZyb20gJy4vbWVyZ2UtY2xhc3MnO1xuaW1wb3J0IG1lcmdlU3R5bGUgZnJvbSAnLi9tZXJnZS1zdHlsZSc7XG5pbXBvcnQgbG9vcEV4cHJlc3Npb24gZnJvbSAnLi9sb29wLWV4cHJlc3Npb24nO1xuaW1wb3J0IGdldENvbXBvbmVudFR5cGUgZnJvbSAnLi9nZXQtY29tcG9uZW50LXR5cGUnO1xuaW1wb3J0IG9iamVjdENvbXB1dGVkUHJvcGVydGllcyBmcm9tICcuL29iamVjdC1jb21wdXRlZC1wcm9wZXJ0aXJzJztcbmltcG9ydCByZWYgZnJvbSAnLi9yZWYnO1xuaW1wb3J0IG1lcmdlT3B0aW9ucyBmcm9tICcuL21lcmdlLW9wdGlvbnMnO1xuaW1wb3J0IGJpbmREYXRhIGZyb20gJy4vYmluZC1kYXRhJztcbmltcG9ydCBjYWxjQ29tcHV0ZWQgZnJvbSAnLi9jYWxjLWNvbXB1dGVkJztcbmltcG9ydCBzbG90IGZyb20gJy4vZ2V0LXNsb3RzJztcblxuLyogZXNsaW50LWRpc2FibGUgZmVjcy1jYW1lbGNhc2UgKi9cbmNvbnN0IGRlZmF1bHRTYW5PcHRpb25zID0ge1xuICAgIF9tYzogbWVyZ2VDbGFzcyxcbiAgICBfbXM6IG1lcmdlU3R5bGUsXG4gICAgX2w6IGxvb3BFeHByZXNzaW9uLFxuICAgIF9leDogZXh0ZW5kLFxuICAgIF9vY3A6IG9iamVjdENvbXB1dGVkUHJvcGVydGllcyxcbiAgICBnZXRDb21wb25lbnRUeXBlLFxuICAgICRlbWl0OiBDb21wb25lbnQucHJvdG90eXBlLmZpcmUsXG4gICAgJG9uOiBDb21wb25lbnQucHJvdG90eXBlLm9uLFxuICAgICR3YXRjaDogQ29tcG9uZW50LnByb3RvdHlwZS53YXRjaCxcbiAgICBfbm9vcDogZnVuY3Rpb24gKCkge31cbn07XG4vKiBlc2xpbnQtZW5hYmxlIGZlY3MtY2FtZWxjYXNlICovXG5cbmNvbnN0IG1lbWJlck1hcCA9IHtcbiAgICAkZWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsO1xuICAgIH0sXG4gICAgJGNvbnRleHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm93bmVyO1xuICAgIH0sXG4gICAgJHBhcmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50Q29tcG9uZW50O1xuICAgIH0sXG4gICAgJGNoaWxkcmVuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5maWx0ZXIoY2hpbGQgPT4gY2hpbGQubm9kZVR5cGUgPT09IDUpO1xuICAgIH0sXG4gICAgJHJvb3QoKSB7XG4gICAgICAgIGxldCByb290ID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMucGFyZW50Q29tcG9uZW50KSB7XG4gICAgICAgICAgICB3aGlsZSAocm9vdC5wYXJlbnRDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICByb290ID0gcm9vdC5wYXJlbnRDb21wb25lbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcm9vdDtcbiAgICB9LFxuICAgICRzbG90czogc2xvdCxcbiAgICBfaXNEZXN0cm95ZWQoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMubGlmZUN5Y2xlLmRpc3Bvc2VkO1xuICAgIH1cbn07XG5cbmNvbnN0IG9yaWdpbmFsVXBkYXRlID0gQ29tcG9uZW50LnByb3RvdHlwZS5fdXBkYXRlO1xuXG5Db21wb25lbnQucHJvdG90eXBlLl91cGRhdGUgPSBmdW5jdGlvbiAoY2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMuX3RvUGhhc2UoJ2JlZm9yZVVwZGF0ZScpO1xuICAgIH1cbiAgICBvcmlnaW5hbFVwZGF0ZS5jYWxsKHRoaXMsIGNoYW5nZXMpO1xufTtcblxuY29uc3QgaW5uZXJLZXkgPSAnX1NhbkN0b3InO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWZpbmUob3B0aW9ucykge1xuXG4gICAgaWYgKG9wdGlvbnNbaW5uZXJLZXldKSB7XG4gICAgICAgIHJldHVybiBvcHRpb25zW2lubmVyS2V5XTtcbiAgICB9XG5cbiAgICBjb25zdCBzYW5PcHRpb25zID0gZXh0ZW5kKHtcbiAgICAgICAgdGVtcGxhdGU6IG9wdGlvbnMuX19zYW50ZW1wbGF0ZSxcbiAgICAgICAgYU5vZGU6IG9wdGlvbnMuX19zYW5hTm9kZSxcbiAgICB9LCBkZWZhdWx0U2FuT3B0aW9ucywgbWVyZ2VPcHRpb25zKG9wdGlvbnMpKTtcblxuICAgIGNvbnN0IGNvbXBpbGVkSG9vayA9IHNhbk9wdGlvbnMuY29tcGlsZWQ7XG4gICAgc2FuT3B0aW9ucy5jb21waWxlZCA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB0aGlzLl9pc1NhbiA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5fY2FsY0NvbXB1dGVkID0gY2FsY0NvbXB1dGVkLmJpbmQodGhpcyk7XG4gICAgICAgIGNvbXBpbGVkSG9vayAmJiBjb21waWxlZEhvb2suY2FsbCh0aGlzKTtcblxuICAgICAgICBjb25zdCBwcm9wZXJ0aWVzID0gT2JqZWN0XG4gICAgICAgICAgICAua2V5cyhtZW1iZXJNYXApXG4gICAgICAgICAgICAucmVkdWNlKChwcm9wcywga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgcHJvcHNba2V5XSA9IHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1lbWJlck1hcFtrZXldLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9wcztcbiAgICAgICAgICAgIH0sIHt9KTtcblxuICAgICAgICBwcm9wZXJ0aWVzLiRvcHRpb25zID0ge1xuICAgICAgICAgICAgdmFsdWU6IG9wdGlvbnNcbiAgICAgICAgfTtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCBwcm9wZXJ0aWVzKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVmcyA9IG9wdGlvbnMuX19zYW5SZWZzO1xuICAgIGNvbnN0IGluaXRlZEhvb2sgPSBzYW5PcHRpb25zLmluaXRlZDtcbiAgICBzYW5PcHRpb25zLmluaXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgbWUgPSB0aGlzO1xuICAgICAgICB0aGlzLiRyZWZzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuICAgICAgICBpZiAocmVmcykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHJlZnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCByID0gcmVmc1tpXTtcbiAgICAgICAgICAgICAgICBkZWYobWUuJHJlZnMsIHIubmFtZSwge1xuICAgICAgICAgICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gci5yb290ID8gbWUuZWwgOiBtZS5yZWYoci5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gb3ZlcndyaXRlIHNhbiBjb21wb25lbnQgYXBpIGZvciBzdXBwb3J0IHYtZm9yICsgcmVmXG4gICAgICAgICAgICBtZS5yZWYgPSByZWY7XG4gICAgICAgIH1cblxuICAgICAgICBpbml0ZWRIb29rICYmIGluaXRlZEhvb2suY2FsbCh0aGlzKTtcblxuICAgICAgICAvLyBtZXJnZSBjc3MgbW9kdWxlc1xuICAgICAgICBpZiAodGhpcy4kc3R5bGUpIHtcbiAgICAgICAgICAgIGV4dGVuZCh0aGlzLmRhdGEucmF3LiRzdHlsZSwgdGhpcy4kc3R5bGUpXG4gICAgICAgIH1cblxuICAgICAgICBiaW5kRGF0YS5jYWxsKHRoaXMpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLndhdGNoKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhvcHRpb25zLndhdGNoKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy53YXRjaChrZXksIG9wdGlvbnMud2F0Y2hba2V5XS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMucHJlcHJjZXNzQU5vZGUpIHtcbiAgICAgICAgICAgIG9wdGlvbnMucHJlcHJjZXNzQU5vZGUuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBzYW5PcHRpb25zLmluaXREYXRhID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGNvbnN0IG1lID0gdGhpcztcblxuICAgICAgICBjb25zdCBkZWZhdWx0UHJvcHMgPSB7fTtcbiAgICAgICAgaWYgKG9wdGlvbnMucHJvcHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb3BLZXlzID0gbWUuX3Byb3BLZXlzID0gb3B0aW9ucy5fcHJvcEtleXMgPSBvcHRpb25zLnByb3BzXG4gICAgICAgICAgICAgICAgPyAoQXJyYXkuaXNBcnJheShvcHRpb25zLnByb3BzKSA/IG9wdGlvbnMucHJvcHMgOiBPYmplY3Qua2V5cyhvcHRpb25zLnByb3BzKSlcbiAgICAgICAgICAgICAgICA6IFtdO1xuXG4gICAgICAgICAgICAvLyDpu5jorqTlsZ7mgKdcbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShvcHRpb25zLnByb3BzKSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBwcm9wS2V5cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwID0gcHJvcEtleXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3AgPSBvcHRpb25zLnByb3BzW3BdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoJ2RlZmF1bHQnIGluIHByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRQcm9wc1twXSA9IHR5cGVvZiBwcm9wLmRlZmF1bHQgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHByb3AuZGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBwcm9wLmRlZmF1bHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBtZS5fcHJvcEtleXMgPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLmNvbXB1dGVkKSB7XG4gICAgICAgICAgICBtZS5fY29tcHV0ZWRLZXlzID0gT2JqZWN0LmtleXMob3B0aW9ucy5jb21wdXRlZCk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gbWUuX2NvbXB1dGVkS2V5czsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgayA9IG1lLl9jb21wdXRlZEtleXNbaV07XG4gICAgICAgICAgICAgICAgZGVmKG1lLCBrLCB7XG4gICAgICAgICAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtZS5kYXRhLmdldChrKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbWUuX2NvbXB1dGVkS2V5cyA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IHR5cGVvZiBvcHRpb25zLmRhdGEgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgID8gb3B0aW9ucy5kYXRhLmNhbGwoZXh0ZW5kKHt9LCBkZWZhdWx0UHJvcHMsIHRoaXMuX3NyY1NiaW5kRGF0YSkpXG4gICAgICAgICAgICA6IChvcHRpb25zLmRhdGEgfHwge30pO1xuXG4gICAgICAgIHRoaXMuX2RhdGFLZXlzID0gT2JqZWN0LmtleXMoZGF0YSkgfHwgW107XG5cbiAgICAgICAgcmV0dXJuIGV4dGVuZCh7JHN0eWxlOiB7fX0sIGRlZmF1bHRQcm9wcywgZGF0YSk7XG4gICAgfTtcblxuICAgIGlmIChvcHRpb25zLmNvbXBvbmVudHMpIHtcbiAgICAgICAgc2FuT3B0aW9ucy5jb21wb25lbnRzID0gT2JqZWN0XG4gICAgICAgICAgICAua2V5cyhvcHRpb25zLmNvbXBvbmVudHMpXG4gICAgICAgICAgICAucmVkdWNlKChwcmV2LCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBwcmV2W2tleV0gPSBwcmV2W2h5cGhlbmF0ZShrZXkpXSA9IGRlZmluZShvcHRpb25zLmNvbXBvbmVudHNba2V5XSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICAgICAgICB9LCB7fSk7XG4gICAgfVxuXG4gICAgY29uc3QgQ29tcG9uZW50ID0gZGVmaW5lQ29tcG9uZW50KHNhbk9wdGlvbnMpO1xuXG4gICAgcmV0dXJuIG9wdGlvbnNbaW5uZXJLZXldID0gQ29tcG9uZW50O1xufVxuXG4iLCIvKipcbiAqIEBmaWxlIG92ZXJyaWRlIGV2YWwgZXhwclxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCB7RGF0YSwgcGFyc2VFeHByLCBFeHByVHlwZSwgZXZhbEV4cHJ9IGZyb20gJ3Nhbic7XG5cbmNvbnN0IG9yaWdpbmFsR2V0ID0gRGF0YS5wcm90b3R5cGUuZ2V0O1xuXG5EYXRhLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoZXhwciwgY2FsbGVlKSB7XG4gICAgaWYgKGV4cHIgJiYgdHlwZW9mIGV4cHIgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGV4cHIgPSBwYXJzZUV4cHIoZXhwcik7XG4gICAgfVxuICAgIGxldCB2YWx1ZSA9IG9yaWdpbmFsR2V0LmNhbGwodGhpcywgZXhwciwgY2FsbGVlKTtcbiAgICBpZiAoIWV4cHIgfHwgdmFsdWUgIT09IHVuZGVmaW5lZCB8fCAhdGhpcy5vd25lciB8fCBleHByLnR5cGUgIT09IEV4cHJUeXBlLkFDQ0VTU09SKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgY29uc3QgcGF0aHMgPSBleHByLnBhdGhzO1xuICAgIGNvbnN0IGZpcnN0ID0gcGF0aHNbMF0udmFsdWU7XG4gICAgaWYgKFxuICAgICAgICBbXG4gICAgICAgICAgICAuLi50aGlzLm93bmVyLl9wcm9wS2V5cyxcbiAgICAgICAgICAgIC4uLnRoaXMub3duZXIuX2RhdGFLZXlzLFxuICAgICAgICAgICAgLi4udGhpcy5vd25lci5fY29tcHV0ZWRLZXlzXG4gICAgICAgIF0uaW5kZXhPZihmaXJzdCkgPj0gMFxuICAgICkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHZhbHVlID0gdGhpcy5vd25lcltmaXJzdF07XG4gICAgZm9yICh2YXIgaSA9IDEsIGwgPSBwYXRocy5sZW5ndGg7IHZhbHVlICE9IG51bGwgJiYgaSA8IGw7IGkrKykge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlW3BhdGhzW2ldLnZhbHVlIHx8IGV2YWxFeHByKHBhdGhzW2ldLCBjYWxsZWUpXTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xufTtcbiIsIi8qKlxuICogQGZpbGUgbWVyZ2UgY2xhc3NcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5mdW5jdGlvbiBzdHJpbmcoY2xzID0gJycpIHtcbiAgICBpZiAoIWNscykge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHJldHVybiBjbHNcbiAgICAgICAgLnNwbGl0KCcgJylcbiAgICAgICAgLnJlZHVjZSgocHJldiwgbmFtZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgICAgW25hbWVdOiAxXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LCB7fSk7XG59XG5cbmZ1bmN0aW9uIG9iamVjdChjbHMgPSB7fSkge1xuICAgIHJldHVybiBPYmplY3RcbiAgICAgICAgLmtleXMoY2xzKVxuICAgICAgICAucmVkdWNlKChwcmV2LCBrZXkpID0+IHtcbiAgICAgICAgICAgIGlmICghY2xzW2tleV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgICAgICAuLi5zdHJpbmcoa2V5KVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSwge30pO1xufVxuXG5mdW5jdGlvbiBhcnJheShjbHMgPSBbXSkge1xuICAgIGxldCBjbGF6eiA9IHt9O1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBjbHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGNsc1tpXTtcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBjbGF6eiA9IHtcbiAgICAgICAgICAgIC4uLmNsYXp6LFxuICAgICAgICAgICAgLi4uKFxuICAgICAgICAgICAgICAgIHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgID8gc3RyaW5nKGVsZW1lbnQpXG4gICAgICAgICAgICAgICAgOiAoQXJyYXkuaXNBcnJheShlbGVtZW50KSA/IGFycmF5KGVsZW1lbnQpIDogb2JqZWN0KGVsZW1lbnQpKVxuICAgICAgICAgICAgKVxuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gY2xheno7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0aWNDbGFzcyA9ICcnLCBjbHMgPSB7fSkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhhcnJheShbc3RhdGljQ2xhc3MsIGNsc10pKS5qb2luKCcgJyk7XG59XG4iLCIvKipcbiAqIEBmaWxlIG1lcmdlIHN0eWxlXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHtjYWNoZWQsIGV4dGVuZCwgdG9PYmplY3R9IGZyb20gJy4uL3NoYXJlZC91dGlsJztcblxuY29uc3QgcGFyc2VTdHlsZVRleHQgPSBjYWNoZWQoZnVuY3Rpb24gKGNzc1RleHQpIHtcbiAgICBjb25zdCByZXMgPSB7fTtcbiAgICBjb25zdCBsaXN0RGVsaW1pdGVyID0gLzsoPyFbXihdKlxcKSkvZztcbiAgICBjb25zdCBwcm9wZXJ0eURlbGltaXRlciA9IC86KC4rKS87XG4gICAgY3NzVGV4dC5zcGxpdChsaXN0RGVsaW1pdGVyKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICB2YXIgdG1wID0gaXRlbS5zcGxpdChwcm9wZXJ0eURlbGltaXRlcik7XG4gICAgICAgICAgICB0bXAubGVuZ3RoID4gMSAmJiAocmVzW3RtcFswXS50cmltKCldID0gdG1wWzFdLnRyaW0oKSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzO1xufSk7XG5cbi8vIG5vcm1hbGl6ZSBwb3NzaWJsZSBhcnJheSAvIHN0cmluZyB2YWx1ZXMgaW50byBPYmplY3RcbmZ1bmN0aW9uIG5vcm1hbGl6ZVN0eWxlQmluZGluZyhiaW5kaW5nU3R5bGUpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShiaW5kaW5nU3R5bGUpKSB7XG4gICAgICAgIHJldHVybiB0b09iamVjdChiaW5kaW5nU3R5bGUpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGJpbmRpbmdTdHlsZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlU3R5bGVUZXh0KGJpbmRpbmdTdHlsZSk7XG4gICAgfVxuICAgIHJldHVybiBiaW5kaW5nU3R5bGU7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRpY1N0eWxlLCBzdHlsZSwgdlNob3cgPSB0cnVlKSB7XG4gICAgc3R5bGUgPSBub3JtYWxpemVTdHlsZUJpbmRpbmcoc3R5bGUpO1xuICAgIGlmICghdlNob3cpIHtcbiAgICAgICAgc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gICAgcmV0dXJuIHN0YXRpY1N0eWxlXG4gICAgICAgID8gZXh0ZW5kKHN0YXRpY1N0eWxlLCBzdHlsZSlcbiAgICAgICAgOiBzdHlsZTtcbn1cbiIsIi8qKlxuICogQGZpbGUgbG9vcCBleHByZXNzaW9uXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHtjYWNoZWR9IGZyb20gJy4uL3NoYXJlZC91dGlsJztcblxuY29uc3QgdG9BcnJheSA9IGNhY2hlZChmdW5jdGlvbiAobikge1xuICAgIGNvbnN0IHZhbHVlID0gbmV3IEFycmF5KG4pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgIHZhbHVlW2ldID0gaSArIDE7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAoIWlzTmFOKHZhbHVlKSkge1xuICAgICAgICBjb25zdCBuID0gK3ZhbHVlO1xuICAgICAgICB2YWx1ZSA9IHRvQXJyYXkobik7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn1cblxuIiwiLyoqXG4gKiBAZmlsZSBnZXQgY29tcG9uZW50IHR5cGVcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQge2V2YWxFeHByfSBmcm9tICdzYW4nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoYU5vZGUsIGRhdGEpIHtcbiAgICBpZiAoYU5vZGUudGFnTmFtZSAhPT0gJ2NvbXBvbmVudCcgfHwgYU5vZGUuaG90c3BvdC5wcm9wcy5pcyA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudHNbYU5vZGUudGFnTmFtZV07XG4gICAgfVxuXG4gICAgY29uc3QgaXMgPSBhTm9kZS5wcm9wc1thTm9kZS5ob3RzcG90LnByb3BzLmlzXTtcbiAgICBjb25zdCBpc1ZhbHVlID0gZXZhbEV4cHIoaXMuZXhwciwgZGF0YSk7XG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50c1tpc1ZhbHVlXTtcbn1cbiIsIi8qKlxuICogQGZpbGUgb2JqZWN0IGNvbXB1dGVkIHByb3BlcnRpZXMgbWVyZ2VcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocHJvcGVydGllcykge1xuICAgIHJldHVybiBwcm9wZXJ0aWVzLnJlZHVjZSgocHJldiwge2ssIHZ9KSA9PiB7XG4gICAgICAgIHByZXZba10gPSB2O1xuICAgICAgICByZXR1cm4gcHJldjtcbiAgICB9LCB7fSk7XG59XG4iLCIvKipcbiAqIEBmaWxlIHNhbiByZWYgcmV3cml0ZVxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCAqIGFzIHNhbiBmcm9tICdzYW4nO1xuaW1wb3J0IHtjYW1lbGl6ZX0gZnJvbSAnLi4vc2hhcmVkL3V0aWwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAobmFtZSkge1xuXG4gICAgY29uc3Qgb3duZXIgPSB0aGlzO1xuXG4gICAgZnVuY3Rpb24gY2hpbGRyZW5UcmF2ZXJzYWwoY2hpbGRyZW4pIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcmVmVGFyZ2V0ID0gZWxlbWVudFRyYXZlcnNhbChjaGlsZHJlbltpXSk7XG4gICAgICAgICAgICBpZiAocmVmVGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlZlRhcmdldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVsZW1lbnRUcmF2ZXJzYWwoZWxlbWVudCkge1xuICAgICAgICBjb25zdCBub2RlVHlwZSA9IGVsZW1lbnQubm9kZVR5cGU7XG4gICAgICAgIGlmIChub2RlVHlwZSA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZWZUYXJnZXQ7XG4gICAgICAgIGlmIChlbGVtZW50Lm93bmVyID09PSBvd25lcikge1xuICAgICAgICAgICAgbGV0IHJlZjtcbiAgICAgICAgICAgIGxldCB2YWx1ZTtcbiAgICAgICAgICAgIHN3aXRjaCAobm9kZVR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICByZWYgPSBlbGVtZW50LmFOb2RlLmRpcmVjdGl2ZXMucmVmO1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHNhbi5ldmFsRXhwcihyZWYudmFsdWUsIGVsZW1lbnQuc2NvcGUsIG93bmVyKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlZiAmJiAodmFsdWUgPT09IG5hbWUgfHwgY2FtZWxpemUodmFsdWUpID09PSBuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5vZGVUeXBlID09PSA0ID8gZWxlbWVudC5lbCA6IGVsZW1lbnQuY2hpbGRyZW4ubWFwKGVsZW1lbnRUcmF2ZXJzYWwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICByZWYgPSBlbGVtZW50LnNvdXJjZS5kaXJlY3RpdmVzLnJlZjtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBzYW4uZXZhbEV4cHIocmVmLnZhbHVlLCBlbGVtZW50LnNjb3BlLCBvd25lcik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWYgJiYgKHZhbHVlID09PSBuYW1lIHx8IGNhbWVsaXplKHZhbHVlKSA9PT0gbmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlZlRhcmdldCA9IGVsZW1lbnQuc2xvdENoaWxkcmVuICYmIGNoaWxkcmVuVHJhdmVyc2FsKGVsZW1lbnQuc2xvdENoaWxkcmVuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZWZUYXJnZXQgfHwgY2hpbGRyZW5UcmF2ZXJzYWwoZWxlbWVudC5jaGlsZHJlbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkcmVuVHJhdmVyc2FsKHRoaXMuY2hpbGRyZW4pO1xufTtcbiIsIi8qKlxuICogQGZpbGUgbWVyZ2Ugb3B0aW9uc1xuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCB7ZXh0ZW5kfSBmcm9tICcuLi9zaGFyZWQvdXRpbCc7XG5pbXBvcnQge2xpZmVDeWNsZUtleXMsIGxpZmVDeWNsZU1hcH0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQgYXRvbUJ1aWxkSW5NaXhpbiBmcm9tICcuL2F0b20tZ2xvYmFsLWFwaSc7XG5cbmNvbnN0IGtleXMgPSBbXG4gICAgJ2ZpbHRlcnMnLFxuICAgICdjb21wdXRlZCdcbl07XG5cbmZ1bmN0aW9uIG1lcmdlSG9vayhwYXJlbnRWYWwsIGNoaWxkVmFsKSB7XG4gICAgcmV0dXJuIGNoaWxkVmFsXG4gICAgICAgID8gcGFyZW50VmFsXG4gICAgICAgICAgICA/IHBhcmVudFZhbC5jb25jYXQoY2hpbGRWYWwpXG4gICAgICAgICAgICA6IEFycmF5LmlzQXJyYXkoY2hpbGRWYWwpXG4gICAgICAgICAgICAgICAgPyBjaGlsZFZhbFxuICAgICAgICAgICAgICAgIDogW2NoaWxkVmFsXVxuICAgICAgICAgICAgOiBwYXJlbnRWYWw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lcmdlT3B0aW9ucyhvcHRpb25zKSB7XG4gICAgY29uc3QgZGVzdE9wdGlvbnMgPSB7fTtcbiAgICBjb25zdCBsaXN0ID0gQXJyYXkuaXNBcnJheShvcHRpb25zLm1peGlucylcbiAgICAgICAgPyBbYXRvbUJ1aWxkSW5NaXhpbiwgLi4ub3B0aW9ucy5taXhpbnMsIG9wdGlvbnNdXG4gICAgICAgIDogW2F0b21CdWlsZEluTWl4aW4sIG9wdGlvbnNdO1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBsaXN0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG9wdCA9IGxpc3RbaV07XG4gICAgICAgIG9wdC5tZXRob2RzICYmIGV4dGVuZChkZXN0T3B0aW9ucywgb3B0Lm1ldGhvZHMpO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGtleXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGsgPSBrZXlzW2pdO1xuICAgICAgICAgICAgaWYgKG9wdFtrXSkge1xuICAgICAgICAgICAgICAgIGRlc3RPcHRpb25zW2tdID0gZXh0ZW5kKGRlc3RPcHRpb25zW2tdIHx8IHt9LCBvcHRba10pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGlmZUN5Y2xlS2V5cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgY29uc3QgayA9IGxpZmVDeWNsZUtleXNbal07XG4gICAgICAgICAgICBjb25zdCBkayA9IGxpZmVDeWNsZU1hcFtrXTtcbiAgICAgICAgICAgIGlmIChvcHRba10pIHtcbiAgICAgICAgICAgICAgICBkZXN0T3B0aW9uc1tka10gPSBtZXJnZUhvb2soZGVzdE9wdGlvbnNbZGtdIHx8IFtdLCBvcHRba10pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGlmZUN5Y2xlS2V5cy5sZW5ndGg7IGorKykge1xuICAgICAgICBjb25zdCBrID0gbGlmZUN5Y2xlS2V5c1tqXTtcbiAgICAgICAgY29uc3QgZGsgPSBsaWZlQ3ljbGVNYXBba107XG4gICAgICAgIGlmIChkZXN0T3B0aW9uc1tka10pIHtcbiAgICAgICAgICAgIGNvbnN0IGhvb2tzID0gZGVzdE9wdGlvbnNbZGtdLnNsaWNlKCk7XG4gICAgICAgICAgICBkZXN0T3B0aW9uc1tka10gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaG9va3MuZm9yRWFjaChob29rID0+IGhvb2suY2FsbCh0aGlzKSwgdGhpcyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkZXN0T3B0aW9ucztcbn1cbiIsIi8qKlxuICogQGZpbGUgY29uc3RhbnRzXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuZXhwb3J0IGNvbnN0IGxpZmVDeWNsZU1hcCA9IHtcbiAgICBiZWZvcmVDcmVhdGU6ICdjb21waWxlZCcsXG4gICAgbW91bnRlZDogJ2F0dGFjaGVkJyxcbiAgICBjcmVhdGVkOiAnaW5pdGVkJyxcbiAgICBiZWZvcmVNb3VudDogJ2NyZWF0ZWQnLFxuICAgIGJlZm9yZURlc3Ryb3k6ICdkZXRhY2hlZCcsXG4gICAgZGVzdHJveTogJ2Rpc3Bvc2VkJyxcbiAgICB1cGRhdGVkOiAndXBkYXRlZCcsXG4gICAgYmVmb3JlVXBkYXRlOiAnYmVmb3JlVXBkYXRlJ1xufTtcblxuZXhwb3J0IGNvbnN0IGxpZmVDeWNsZUtleXMgPSBPYmplY3Qua2V5cyhsaWZlQ3ljbGVNYXApO1xuIiwiLyoqXG4gKiBAZmlsZSDlhajlsYDnlJ/mlYjnmoTlh73mlbBcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5jb25zdCBNQVRIX01FVEhPRCA9IFtcbiAgICAnZmxvb3InLCAnY2VpbCcsICdyb3VuZCcsXG4gICAgJ2FicycsICdtYXgnLCAnbWluJywgJ3Bvdydcbl07XG5cbmNvbnN0IG1ldGhvZHMgPSBleHBvcnRzLm1ldGhvZHMgPSB7fTtcblxuTUFUSF9NRVRIT0QuZm9yRWFjaChuYW1lID0+IHtcbiAgICBtZXRob2RzW2BtYXRoXyR7bmFtZX1gXSA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICAgIHJldHVybiBNYXRoW25hbWVdLmFwcGx5KE1hdGgsIGFyZ3MpO1xuICAgIH07XG59KTtcblxubWV0aG9kcy5hcnJheV9zbGljZSA9IGZ1bmN0aW9uIChhcnIsIHN0YXJ0LCBsZW4pIHtcbiAgICB2YXIgZW5kID0gbGVuID09IG51bGwgPyB2b2lkIDAgOiAobGVuID49IDAgPyAoc3RhcnQgKyBsZW4pIDogKGFyci5sZW5ndGggKyBsZW4pKTtcbiAgICByZXR1cm4gYXJyLnNsaWNlKHN0YXJ0LCBlbmQpO1xufTtcblxubWV0aG9kcy5hcnJheV9qb2luID0gZnVuY3Rpb24gKGFyciwgc2VwKSB7XG4gICAgcmV0dXJuIGFyci5qb2luKHNlcCk7XG59O1xuXG5tZXRob2RzLnN0cl9wb3MgPSBmdW5jdGlvbiAoc3RyLCBtYXRjaCkge1xuICAgIHJldHVybiBzdHIuaW5kZXhPZihtYXRjaCk7XG59O1xuXG5tZXRob2RzLm9iamVjdF9mcmVlemUgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIE9iamVjdC5mcmVlemUob2JqKTtcbn07XG5cbmV4cG9ydHMuZmlsdGVycyA9IHtcbiAgICBqc29uKG9iaikge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoanNvbik7XG4gICAgfSxcbiAgICBsb3dlcihzdHIpIHtcbiAgICAgICAgcmV0dXJuIHN0ci50b0xvd2VyQ2FzZSgpO1xuICAgIH0sXG4gICAgdXBwZXIoc3RyKSB7XG4gICAgICAgIHJldHVybiBzdHIudG9VcHBlckNhc2UoKTtcbiAgICB9XG59O1xuIiwiLyoqXG4gKiBAZmlsZSDmlbDmja7nu5HlrppcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQge2lzT2JqZWN0LCBoYXNPd24sIGlzUGxhaW5PYmplY3QsIGV4dGVuZCwgZGVmfSBmcm9tICcuLi9zaGFyZWQvdXRpbCc7XG5pbXBvcnQge0V4cHJUeXBlfSBmcm9tICdzYW4nO1xuXG5jb25zdCBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuY29uc3QgYXJyYXlNZXRob2RzID0gT2JqZWN0LmNyZWF0ZShhcnJheVByb3RvKTtcblxuY29uc3QgbWV0aG9kc1RvUGF0Y2ggPSBbXG4gICAgJ3B1c2gnLFxuICAgICdwb3AnLFxuICAgICdzaGlmdCcsXG4gICAgJ3Vuc2hpZnQnLFxuICAgICdzcGxpY2UnXG4gICAgLy8gJ3NvcnQnLFxuICAgIC8vICdyZXZlcnNlJ1xuXTtcblxuLyoqXG4gKiBJbnRlcmNlcHQgbXV0YXRpbmcgbWV0aG9kcyBhbmQgZW1pdCBldmVudHNcbiAqL1xubWV0aG9kc1RvUGF0Y2guZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XG4gICAgLy8gY2FjaGUgb3JpZ2luYWwgbWV0aG9kXG4gICAgY29uc3Qgb3JpZ2luYWwgPSBhcnJheVByb3RvW21ldGhvZF1cbiAgICBkZWYoYXJyYXlNZXRob2RzLCBtZXRob2QsIHtcbiAgICAgICAgdmFsdWUoLi4uYXJncykge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gb3JpZ2luYWwuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgICAgICBjb25zdCBvYiA9IHRoaXMuX19vYl9fO1xuICAgICAgICAgICAgbGV0IGluc2VydGVkO1xuICAgICAgICAgICAgc3dpdGNoIChtZXRob2QpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdwdXNoJzpcbiAgICAgICAgICAgICAgICBjYXNlICd1bnNoaWZ0JzpcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0ZWQgPSBhcmdzO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdzcGxpY2UnOlxuICAgICAgICAgICAgICAgICAgICBpbnNlcnRlZCA9IGFyZ3Muc2xpY2UoMik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGluc2VydGVkKSB7XG4gICAgICAgICAgICAgICAgb2Iub2JzZXJ2ZUFycmF5KGluc2VydGVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9iLmNvbnRleHQuZGF0YVttZXRob2RdLmNhbGwob2IuY29udGV4dC5kYXRhLCBvYi5leHByLCAuLi5hcmdzKTtcbiAgICAgICAgICAgIG9ic2VydmUob2IuY29udGV4dC5kYXRhLmdldChvYi5leHByKSwgb2IuZXhwciwgb2IuY29udGV4dCk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgfSlcbn0pO1xuXG5jbGFzcyBPYnNlcnZlciB7XG5cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSwgZXhwciwgY29udGV4dCkge1xuICAgICAgICB0aGlzLmV4cHIgPSBleHByO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICBkZWYodmFsdWUsICdfX29iX18nLCB7XG4gICAgICAgICAgICB2YWx1ZTogdGhpc1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZS5fX3Byb3RvX18gPSBhcnJheU1ldGhvZHM7XG4gICAgICAgICAgICB0aGlzLm9ic2VydmVBcnJheSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSkgfHwgW107XG4gICAgICAgICAgICB0aGlzLndhbGsodmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2FsayB0aHJvdWdoIGFsbCBwcm9wZXJ0aWVzIGFuZCBjb252ZXJ0IHRoZW0gaW50b1xuICAgICAqIGdldHRlci9zZXR0ZXJzLiBUaGlzIG1ldGhvZCBzaG91bGQgb25seSBiZSBjYWxsZWQgd2hlblxuICAgICAqIHZhbHVlIHR5cGUgaXMgT2JqZWN0LlxuICAgICAqL1xuICAgIHdhbGsob2JqKSB7XG4gICAgICAgIGNvbnN0IGtleXMgPSB0aGlzLmtleXM7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZGVmaW5lUmVhY3RpdmUob2JqLCBrZXlzW2ldLCB0aGlzLmV4cHIsIHRoaXMuY29udGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPYnNlcnZlIGEgbGlzdCBvZiBBcnJheSBpdGVtcy5cbiAgICAgKi9cbiAgICBvYnNlcnZlQXJyYXkoaXRlbXMpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBpdGVtcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIG9ic2VydmUoaXRlbXNbaV0sIGV4dGVuZCh7fSwgdGhpcy5leHByLCB7XG4gICAgICAgICAgICAgICAgcGF0aHM6IFsuLi50aGlzLmV4cHIucGF0aHMsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogRXhwclR5cGUuTlVNQkVSLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9KSwgdGhpcy5jb250ZXh0KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5lUmVhY3RpdmUob2JqLCBrZXksIGV4cHIsIGNvbnRleHQpIHtcblxuICAgIGNvbnN0IHByb3BlcnR5ID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSk7XG4gICAgaWYgKHByb3BlcnR5ICYmIHByb3BlcnR5LmNvbmZpZ3VyYWJsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGNhdGVyIGZvciBwcmUtZGVmaW5lZCBnZXR0ZXIvc2V0dGVyc1xuICAgIGNvbnN0IGdldHRlciA9IHByb3BlcnR5ICYmIHByb3BlcnR5LmdldDtcbiAgICBjb25zdCBzZXR0ZXIgPSBwcm9wZXJ0eSAmJiBwcm9wZXJ0eS5zZXQ7XG5cbiAgICBjb25zdCBrZXlFeHByID0ge1xuICAgICAgICB0eXBlOiBFeHByVHlwZS5BQ0NFU1NPUixcbiAgICAgICAgcGF0aHM6IFsuLi5leHByLnBhdGhzLCB7XG4gICAgICAgICAgICB0eXBlOiBFeHByVHlwZS5TVFJJTkcsXG4gICAgICAgICAgICB2YWx1ZToga2V5XG4gICAgICAgIH1dXG4gICAgfTtcblxuICAgIGxldCB2YWwgPSBvYmpba2V5XTtcbiAgICBvYnNlcnZlKHZhbCwga2V5RXhwciwgY29udGV4dCk7XG4gICAgY29uc3QgbmV3UHJvcGVydHkgPSB7XG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgc2V0KG5ld1ZhbCkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBnZXR0ZXIgPyBnZXR0ZXIuY2FsbChvYmopIDogdmFsO1xuICAgICAgICAgICAgaWYgKG5ld1ZhbCA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZ2V0dGVyICYmICFzZXR0ZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2V0dGVyKSB7XG4gICAgICAgICAgICAgICAgc2V0dGVyLmNhbGwob2JqLCBuZXdWYWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsID0gbmV3VmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb2JzZXJ2ZShuZXdWYWwsIGtleUV4cHIsIGNvbnRleHQpO1xuICAgICAgICAgICAgY29udGV4dC5kYXRhLnNldChrZXlFeHByLCBuZXdWYWwsIHtmb3JjZTogdHJ1ZX0pO1xuICAgICAgICB9LFxuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGdldHRlciA/IGdldHRlci5jYWxsKG9iaikgOiB2YWw7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGRlZihvYmosIGtleSwgbmV3UHJvcGVydHkpO1xufVxuXG5jb25zdCBkZWZhdWx0RXhwciA9IHtcbiAgICB0eXBlOiBFeHByVHlwZS5BQ0NFU1NPUixcbiAgICBwYXRoczogW11cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBleHByID0gZXh0ZW5kKHt9LCBkZWZhdWx0RXhwcik7XG4gICAgY29uc3Qga2V5cyA9IFsuLi50aGlzLl9kYXRhS2V5cywgLi4udGhpcy5fcHJvcEtleXNdO1xuICAgIGNvbnN0IGtleUxlbmd0aCA9IGtleXMubGVuZ3RoO1xuXG4gICAgb2JzZXJ2ZSh0aGlzLmRhdGEuZ2V0KCksIGV4cHIsIHRoaXMpO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXM7XG5cbiAgICB0aGlzLl9kYXRhID0gdGhpcy5kYXRhLmdldCgpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlMZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBrZXkgPSBrZXlzW2ldO1xuICAgICAgICBkZWYoY29udGV4dCwga2V5LCB7XG4gICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRleHQuX2RhdGFba2V5XTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQobmV3VmFsKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5fZGF0YVtrZXldID0gbmV3VmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmRhdGEub3duZXIgPSB0aGlzO1xufVxuXG5mdW5jdGlvbiBvYnNlcnZlKHZhbHVlLCBleHByLCBjb250ZXh0KSB7XG4gICAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgb2I7XG4gICAgaWYgKGhhc093bih2YWx1ZSwgJ19fb2JfXycpICYmIHZhbHVlLl9fb2JfXyBpbnN0YW5jZW9mIE9ic2VydmVyKSB7XG4gICAgICAgIG9iID0gdmFsdWUuX19vYl9fXG4gICAgfVxuICAgIGVsc2UgaWYgKFxuICAgICAgICAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgfHwgaXNQbGFpbk9iamVjdCh2YWx1ZSkpXG4gICAgICAgICYmIE9iamVjdC5pc0V4dGVuc2libGUodmFsdWUpXG4gICAgKSB7XG4gICAgICAgIG9iID0gbmV3IE9ic2VydmVyKHZhbHVlLCBleHByLCBjb250ZXh0KTtcbiAgICB9XG4gICAgcmV0dXJuIG9iO1xufVxuIiwiLyoqXG4gKiBAZmlsZSDopobnm5Ygc2FuIOWOn+eUn+eahCBfY2FsY0NvbXB1dGVkXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHtkZWZ9IGZyb20gJy4uL3NoYXJlZC91dGlsJztcbmltcG9ydCBzbG90cyBmcm9tICcuL2dldC1zbG90cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChrZXkpIHtcbiAgICBsZXQgY29tcHV0ZWREZXBzID0gdGhpcy5jb21wdXRlZERlcHNba2V5XTtcbiAgICBpZiAoIWNvbXB1dGVkRGVwcykge1xuICAgICAgICBjb21wdXRlZERlcHMgPSB0aGlzLmNvbXB1dGVkRGVwc1trZXldID0ge307XG4gICAgfVxuXG4gICAgY29uc3QgbWUgPSB0aGlzO1xuICAgIGNvbnN0IGRhdGEgPSBtZS5kYXRhLmdldCgpO1xuICAgIGNvbnN0IGNvbnRleHQgPSB7fTtcblxuICAgIGRlZihjb250ZXh0LCAnJHJvb3QnLCB7XG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiBtZS4kcm9vdDtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgZGVmKGNvbnRleHQsICckc2xvdHMnLCB7XG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiBzbG90cy5jYWxsKG1lKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGRhdGEpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGsgPSBrZXlzW2ldO1xuICAgICAgICBkZWYoY29udGV4dCwgaywge1xuICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIGlmICghY29tcHV0ZWREZXBzW2tdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXB1dGVkRGVwc1trXSA9IDE7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lLmNvbXB1dGVkW2tdICYmICFtZS5jb21wdXRlZERlcHNba10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLl9jYWxjQ29tcHV0ZWQoayk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBtZS53YXRjaChrLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZS5fY2FsY0NvbXB1dGVkKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBtZS5kYXRhLmdldChrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5kYXRhLnNldChrZXksIHRoaXMuY29tcHV0ZWRba2V5XS5jYWxsKGNvbnRleHQpKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=