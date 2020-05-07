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

var _callActivatedHook = __webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultSanOptions = {
  $activate: _callActivatedHook.callActivited,
  $deactivate: _callActivatedHook.callDeActivited,
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

  var beforeUpdateHook = sanOptions.beforeUpdate;

  sanOptions.beforeUpdate = function () {
    beforeUpdateHook && beforeUpdateHook.call(this);

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

        destOptions[_dk] = hooks.length === 1 ? hooks[0] : function () {
          var _this = this;

          hooks.forEach(function (hook) {
            return hook.call(_this);
          }, this);
        };
      })();
    }
  }

  if (options.messages) {
    destOptions.messages = options.messages;
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
  beforeUpdate: 'beforeUpdate',
  activated: 'activated',
  deactivated: 'deactivated'
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

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3V0aWwuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2FuXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvZ2V0LXNsb3RzLmpzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lL2RlZmluZS1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvb3ZlcnJpZGUtZGF0YS1nZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvbWVyZ2UtY2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvbWVyZ2Utc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvbG9vcC1leHByZXNzaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lL2dldC1jb21wb25lbnQtdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcnVudGltZS9vYmplY3QtY29tcHV0ZWQtcHJvcGVydGlycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcnVudGltZS9yZWYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvbWVyZ2Utb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcnVudGltZS9jb25zdGFudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcnVudGltZS9hdG9tLWdsb2JhbC1hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvYmluZC1kYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lL2NhbGMtY29tcHV0ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvY2FsbC1hY3RpdmF0ZWQtaG9vay5qcyJdLCJuYW1lcyI6WyJleHRlbmQiLCJPYmplY3QiLCJhc3NpZ24iLCJ0b09iamVjdCIsImFyciIsInJlcyIsImkiLCJsZW5ndGgiLCJfdG9TdHJpbmciLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImlzT2JqZWN0Iiwib2JqIiwiaGFzT3duUHJvcGVydHkiLCJoYXNPd24iLCJrZXkiLCJjYWxsIiwiaXNQbGFpbk9iamVjdCIsImRlZiIsInByb3BlcnR5IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwiY2FjaGVkIiwiZm4iLCJjYWNoZSIsImNyZWF0ZSIsImNhY2hlZEZuIiwic3RyIiwiaGl0IiwiaHlwaGVuYXRlUkUiLCJoeXBoZW5hdGUiLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJjYW1lbGl6ZSIsIl8iLCJjIiwidG9VcHBlckNhc2UiLCJzbG90Q2hpbGRyZW4iLCJsaWZlQ3ljbGUiLCJzb3VyY2VTbG90cyIsImF0dGFjaGVkIiwicmVkdWNlIiwicHJldiIsImNoaWxkIiwibmFtZSIsImNvbmNhdCIsImNoaWxkcmVuIiwic2xvdHMiLCJuYW1lZCIsIm5vbmFtZSIsImRlZmF1bHQiLCJkZWZhdWx0U2FuT3B0aW9ucyIsIiRhY3RpdmF0ZSIsImNhbGxBY3Rpdml0ZWQiLCIkZGVhY3RpdmF0ZSIsImNhbGxEZUFjdGl2aXRlZCIsIl9tYyIsIm1lcmdlQ2xhc3MiLCJfbXMiLCJtZXJnZVN0eWxlIiwiX2wiLCJsb29wRXhwcmVzc2lvbiIsIl9leCIsIl9vY3AiLCJvYmplY3RDb21wdXRlZFByb3BlcnRpZXMiLCJnZXRDb21wb25lbnRUeXBlIiwiJGVtaXQiLCJDb21wb25lbnQiLCJmaXJlIiwiJG9uIiwib24iLCIkd2F0Y2giLCJ3YXRjaCIsIl9ub29wIiwibWVtYmVyTWFwIiwiJGVsIiwiZWwiLCIkY29udGV4dCIsIm93bmVyIiwiJHBhcmVudCIsInBhcmVudENvbXBvbmVudCIsIiRjaGlsZHJlbiIsImZpbHRlciIsIm5vZGVUeXBlIiwiJHJvb3QiLCJyb290IiwiJHNsb3RzIiwic2xvdCIsIl9pc0Rlc3Ryb3llZCIsImRpc3Bvc2VkIiwib3JpZ2luYWxVcGRhdGUiLCJfdXBkYXRlIiwiY2hhbmdlcyIsIl90b1BoYXNlIiwiaW5uZXJLZXkiLCJkZWZpbmUiLCJvcHRpb25zIiwic2FuT3B0aW9ucyIsInRlbXBsYXRlIiwiX19zYW50ZW1wbGF0ZSIsImFOb2RlIiwiX19zYW5hTm9kZSIsImNvbXBpbGVkSG9vayIsImNvbXBpbGVkIiwiX2lzU2FuIiwiX2NhbGNDb21wdXRlZCIsImNhbGNDb21wdXRlZCIsImJpbmQiLCJwcm9wZXJ0aWVzIiwia2V5cyIsInByb3BzIiwiZ2V0IiwiJG9wdGlvbnMiLCJ2YWx1ZSIsImRlZmluZVByb3BlcnRpZXMiLCJyZWZzIiwiX19zYW5SZWZzIiwiaW5pdGVkSG9vayIsImluaXRlZCIsIm1lIiwiJHJlZnMiLCJsZW4iLCJyIiwicmVmIiwiJHN0eWxlIiwiZGF0YSIsInJhdyIsImJpbmREYXRhIiwiZm9yRWFjaCIsInByZXByY2Vzc0FOb2RlIiwiYmVmb3JlVXBkYXRlSG9vayIsImJlZm9yZVVwZGF0ZSIsImluaXREYXRhIiwiZGVmYXVsdFByb3BzIiwicHJvcEtleXMiLCJfcHJvcEtleXMiLCJBcnJheSIsImlzQXJyYXkiLCJwIiwicHJvcCIsImNvbXB1dGVkIiwiX2NvbXB1dGVkS2V5cyIsImsiLCJfc3JjU2JpbmREYXRhIiwiX2RhdGFLZXlzIiwiY29tcG9uZW50cyIsIm9yaWdpbmFsR2V0IiwiRGF0YSIsImV4cHIiLCJjYWxsZWUiLCJ1bmRlZmluZWQiLCJ0eXBlIiwiRXhwclR5cGUiLCJBQ0NFU1NPUiIsInBhdGhzIiwiZmlyc3QiLCJpbmRleE9mIiwibCIsInN0cmluZyIsImNscyIsInNwbGl0Iiwib2JqZWN0IiwiYXJyYXkiLCJjbGF6eiIsImVsZW1lbnQiLCJzdGF0aWNDbGFzcyIsImpvaW4iLCJwYXJzZVN0eWxlVGV4dCIsImNzc1RleHQiLCJsaXN0RGVsaW1pdGVyIiwicHJvcGVydHlEZWxpbWl0ZXIiLCJpdGVtIiwidG1wIiwidHJpbSIsIm5vcm1hbGl6ZVN0eWxlQmluZGluZyIsImJpbmRpbmdTdHlsZSIsInN0YXRpY1N0eWxlIiwic3R5bGUiLCJ2U2hvdyIsImRpc3BsYXkiLCJ0b0FycmF5IiwibiIsImlzTmFOIiwidGFnTmFtZSIsImhvdHNwb3QiLCJpcyIsImlzVmFsdWUiLCJ2IiwiY2hpbGRyZW5UcmF2ZXJzYWwiLCJyZWZUYXJnZXQiLCJlbGVtZW50VHJhdmVyc2FsIiwiZGlyZWN0aXZlcyIsInNhbiIsImV2YWxFeHByIiwic2NvcGUiLCJtYXAiLCJzb3VyY2UiLCJtZXJnZUhvb2siLCJwYXJlbnRWYWwiLCJjaGlsZFZhbCIsIm1lcmdlT3B0aW9ucyIsImRlc3RPcHRpb25zIiwibGlzdCIsIm1peGlucyIsImF0b21CdWlsZEluTWl4aW4iLCJvcHQiLCJtZXRob2RzIiwiaiIsImxpZmVDeWNsZUtleXMiLCJkayIsImxpZmVDeWNsZU1hcCIsImhvb2tzIiwic2xpY2UiLCJob29rIiwibWVzc2FnZXMiLCJiZWZvcmVDcmVhdGUiLCJtb3VudGVkIiwiY3JlYXRlZCIsImJlZm9yZU1vdW50IiwiYmVmb3JlRGVzdHJveSIsImRlc3Ryb3kiLCJ1cGRhdGVkIiwiYWN0aXZhdGVkIiwiZGVhY3RpdmF0ZWQiLCJNQVRIX01FVEhPRCIsImV4cG9ydHMiLCJhcmdzIiwiTWF0aCIsImFwcGx5IiwiYXJyYXlfc2xpY2UiLCJzdGFydCIsImVuZCIsImFycmF5X2pvaW4iLCJzZXAiLCJzdHJfcG9zIiwibWF0Y2giLCJvYmplY3RfZnJlZXplIiwiZnJlZXplIiwiZmlsdGVycyIsImpzb24iLCJKU09OIiwic3RyaW5naWZ5IiwibG93ZXIiLCJ1cHBlciIsImFycmF5UHJvdG8iLCJhcnJheU1ldGhvZHMiLCJtZXRob2RzVG9QYXRjaCIsIm1ldGhvZCIsIm9yaWdpbmFsIiwicmVzdWx0Iiwib2IiLCJfX29iX18iLCJpbnNlcnRlZCIsIm9ic2VydmVBcnJheSIsImNvbnRleHQiLCJvYnNlcnZlIiwiT2JzZXJ2ZXIiLCJfX3Byb3RvX18iLCJ3YWxrIiwiZGVmaW5lUmVhY3RpdmUiLCJpdGVtcyIsIk5VTUJFUiIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImdldHRlciIsInNldHRlciIsInNldCIsImtleUV4cHIiLCJTVFJJTkciLCJ2YWwiLCJuZXdQcm9wZXJ0eSIsIm5ld1ZhbCIsImZvcmNlIiwiZGVmYXVsdEV4cHIiLCJrZXlMZW5ndGgiLCJfZGF0YSIsImlzRXh0ZW5zaWJsZSIsImNvbXB1dGVkRGVwcyIsImNyZWF0ZUNhbGxGYWN0b3J5IiwiZGlyZWN0IiwiZWxlIiwiTm9kZVR5cGUiLCJDTVBUIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRU8sSUFBTUEsTUFBTSxHQUFHQyxNQUFNLENBQUNDLE1BQXRCOzs7QUFLQSxTQUFTQyxRQUFULENBQWtCQyxHQUFsQixFQUF1QjtBQUMxQixNQUFNQyxHQUFHLEdB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Q0FBQyxXQUFELENBQXZDOztBQUNBLElBQU05TixlQUFlLEdBQUc4TixpQkFBaUIsQ0FBQyxhQUFELENBQXpDIiwiZmlsZSI6InZ1c2EuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJzYW5cIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wic2FuXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBmYWN0b3J5KHJlcXVpcmUoXCJzYW5cIikpIDogZmFjdG9yeShyb290W1wic2FuXCJdKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHdpbmRvdywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fMV9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuIiwiLyoqXG4gKiBAZmlsZSDkuIDkupvlt6Xlhbflh73mlbBcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG4vKipcbiAqIE1peCBwcm9wZXJ0aWVzIGludG8gdGFyZ2V0IG9iamVjdC5cbiAqL1xuZXhwb3J0IGNvbnN0IGV4dGVuZCA9IE9iamVjdC5hc3NpZ247XG5cbi8qKlxuICogTWVyZ2UgYW4gQXJyYXkgb2YgT2JqZWN0cyBpbnRvIGEgc2luZ2xlIE9iamVjdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvT2JqZWN0KGFycikge1xuICAgIGNvbnN0IHJlcyA9IHt9O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChhcnJbaV0pIHtcbiAgICAgICAgICAgIGV4dGVuZChyZXMsIGFycltpXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHJhdyB0eXBlIHN0cmluZyBvZiBhIHZhbHVlLCBlLmcuLCBbb2JqZWN0IE9iamVjdF0uXG4gKi9cbmV4cG9ydCBjb25zdCBfdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIFF1aWNrIG9iamVjdCBjaGVjayAtIHRoaXMgaXMgcHJpbWFyaWx5IHVzZWQgdG8gdGVsbFxuICogT2JqZWN0cyBmcm9tIHByaW1pdGl2ZSB2YWx1ZXMgd2hlbiB3ZSBrbm93IHRoZSB2YWx1ZVxuICogaXMgYSBKU09OLWNvbXBsaWFudCB0eXBlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3Qob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAhPT0gbnVsbCAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIGFuIG9iamVjdCBoYXMgdGhlIHByb3BlcnR5LlxuICovXG5jb25zdCBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5leHBvcnQgZnVuY3Rpb24gaGFzT3duKG9iaiwga2V5KSB7XG4gICAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpO1xufVxuXG4vKipcbiAqIFN0cmljdCBvYmplY3QgdHlwZSBjaGVjay4gT25seSByZXR1cm5zIHRydWVcbiAqIGZvciBwbGFpbiBKYXZhU2NyaXB0IG9iamVjdHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1BsYWluT2JqZWN0KG9iaikge1xuICAgIHJldHVybiBfdG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBPYmplY3RdJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZihvYmosIGtleSwgcHJvcGVydHkpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIGV4dGVuZCh7XG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9LCBwcm9wZXJ0eSkpO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIGNhY2hlZCB2ZXJzaW9uIG9mIGEgcHVyZSBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhY2hlZChmbikge1xuICAgIGNvbnN0IGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gY2FjaGVkRm4oc3RyKSB7XG4gICAgICAgIGNvbnN0IGhpdCA9IGNhY2hlW3N0cl07XG4gICAgICAgIHJldHVybiBoaXQgfHwgKGNhY2hlW3N0cl0gPSBmbihzdHIpKTtcbiAgICB9O1xufVxuXG4vKipcbiAqIEh5cGhlbmF0ZSBhIGNhbWVsQ2FzZSBzdHJpbmcuXG4gKi9cbmNvbnN0IGh5cGhlbmF0ZVJFID0gLyhbXi1dKShbQS1aXSkvZztcbmV4cG9ydCBjb25zdCBoeXBoZW5hdGUgPSBjYWNoZWQoKHN0cikgPT4ge1xuICAgIHJldHVybiBzdHJcbiAgICAgICAgLnJlcGxhY2UoaHlwaGVuYXRlUkUsICckMS0kMicpXG4gICAgICAgIC5yZXBsYWNlKGh5cGhlbmF0ZVJFLCAnJDEtJDInKVxuICAgICAgICAudG9Mb3dlckNhc2UoKTtcbn0pO1xuXG5leHBvcnQgY29uc3QgY2FtZWxpemUgPSBzdHIgPT4gc3RyLnJlcGxhY2UoLy0oXFx3KS9nLCAoXywgYykgPT4gKGMgPyBjLnRvVXBwZXJDYXNlKCkgOiAnJykpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX18xX187IiwiLyoqXG4gKiBAZmlsZSBzbG90XG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHtleHRlbmR9IGZyb20gJy4uL3NoYXJlZC91dGlsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHtcbiAgICAgICAgc2xvdENoaWxkcmVuLFxuICAgICAgICBsaWZlQ3ljbGUsXG4gICAgICAgIHNvdXJjZVNsb3RzXG4gICAgfSA9IHRoaXM7XG5cbiAgICBpZiAobGlmZUN5Y2xlLmF0dGFjaGVkKSB7XG4gICAgICAgIHJldHVybiBzbG90Q2hpbGRyZW4ucmVkdWNlKChwcmV2LCBjaGlsZCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGNoaWxkLm5hbWUgfHwgJ2RlZmF1bHQnO1xuICAgICAgICAgICAgaWYgKCFwcmV2W25hbWVdKSB7XG4gICAgICAgICAgICAgICAgcHJldltuYW1lXSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJldltuYW1lXSA9IHByZXZbbmFtZV0uY29uY2F0KGNoaWxkLmNoaWxkcmVuKTtcbiAgICAgICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgICB9LCB7fSk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2xvdHMgPSB7fTtcblxuICAgIGlmIChzb3VyY2VTbG90cy5uYW1lZCkge1xuICAgICAgICBleHRlbmQoc2xvdHMsIHNvdXJjZVNsb3RzLm5hbWVkKTtcbiAgICB9XG4gICAgaWYgKHNvdXJjZVNsb3RzLm5vbmFtZSkge1xuICAgICAgICBzbG90cy5kZWZhdWx0ID0gc291cmNlU2xvdHMubm9uYW1lO1xuICAgIH1cblxuICAgIHJldHVybiBzbG90cztcblxufVxuIiwiLyoqXG4gKiBAZmlsZSBlbnRyeVxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmV4cG9ydCB7ZGVmYXVsdCBhcyBkZWZpbmVDb21wb25lbnR9IGZyb20gJy4vZGVmaW5lLWNvbXBvbmVudCc7XG4iLCIvKipcbiAqIEBmaWxlIGNvbXBvbmVudFxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCAnLi9vdmVycmlkZS1kYXRhLWdldCc7XG5cbmltcG9ydCB7ZGVmaW5lQ29tcG9uZW50LCBpbmhlcml0cywgQ29tcG9uZW50fSBmcm9tICdzYW4nO1xuaW1wb3J0IHtleHRlbmQsIGh5cGhlbmF0ZSwgZGVmfSBmcm9tICcuLi9zaGFyZWQvdXRpbCc7XG5pbXBvcnQgbWVyZ2VDbGFzcyBmcm9tICcuL21lcmdlLWNsYXNzJztcbmltcG9ydCBtZXJnZVN0eWxlIGZyb20gJy4vbWVyZ2Utc3R5bGUnO1xuaW1wb3J0IGxvb3BFeHByZXNzaW9uIGZyb20gJy4vbG9vcC1leHByZXNzaW9uJztcbmltcG9ydCBnZXRDb21wb25lbnRUeXBlIGZyb20gJy4vZ2V0LWNvbXBvbmVudC10eXBlJztcbmltcG9ydCBvYmplY3RDb21wdXRlZFByb3BlcnRpZXMgZnJvbSAnLi9vYmplY3QtY29tcHV0ZWQtcHJvcGVydGlycyc7XG5pbXBvcnQgcmVmIGZyb20gJy4vcmVmJztcbmltcG9ydCBtZXJnZU9wdGlvbnMgZnJvbSAnLi9tZXJnZS1vcHRpb25zJztcbmltcG9ydCBiaW5kRGF0YSBmcm9tICcuL2JpbmQtZGF0YSc7XG5pbXBvcnQgY2FsY0NvbXB1dGVkIGZyb20gJy4vY2FsYy1jb21wdXRlZCc7XG5pbXBvcnQgc2xvdCBmcm9tICcuL2dldC1zbG90cyc7XG5pbXBvcnQge2NhbGxBY3Rpdml0ZWQsIGNhbGxEZUFjdGl2aXRlZH0gZnJvbSAnLi9jYWxsLWFjdGl2YXRlZC1ob29rJztcblxuLyogZXNsaW50LWRpc2FibGUgZmVjcy1jYW1lbGNhc2UgKi9cbmNvbnN0IGRlZmF1bHRTYW5PcHRpb25zID0ge1xuICAgICRhY3RpdmF0ZTogY2FsbEFjdGl2aXRlZCxcbiAgICAkZGVhY3RpdmF0ZTogY2FsbERlQWN0aXZpdGVkLFxuICAgIF9tYzogbWVyZ2VDbGFzcyxcbiAgICBfbXM6IG1lcmdlU3R5bGUsXG4gICAgX2w6IGxvb3BFeHByZXNzaW9uLFxuICAgIF9leDogZXh0ZW5kLFxuICAgIF9vY3A6IG9iamVjdENvbXB1dGVkUHJvcGVydGllcyxcbiAgICBnZXRDb21wb25lbnRUeXBlLFxuICAgICRlbWl0OiBDb21wb25lbnQucHJvdG90eXBlLmZpcmUsXG4gICAgJG9uOiBDb21wb25lbnQucHJvdG90eXBlLm9uLFxuICAgICR3YXRjaDogQ29tcG9uZW50LnByb3RvdHlwZS53YXRjaCxcbiAgICBfbm9vcDogZnVuY3Rpb24gKCkge31cbn07XG4vKiBlc2xpbnQtZW5hYmxlIGZlY3MtY2FtZWxjYXNlICovXG5cbmNvbnN0IG1lbWJlck1hcCA9IHtcbiAgICAkZWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsO1xuICAgIH0sXG4gICAgJGNvbnRleHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm93bmVyO1xuICAgIH0sXG4gICAgJHBhcmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50Q29tcG9uZW50O1xuICAgIH0sXG4gICAgJGNoaWxkcmVuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5maWx0ZXIoY2hpbGQgPT4gY2hpbGQubm9kZVR5cGUgPT09IDUpO1xuICAgIH0sXG4gICAgJHJvb3QoKSB7XG4gICAgICAgIGxldCByb290ID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMucGFyZW50Q29tcG9uZW50KSB7XG4gICAgICAgICAgICB3aGlsZSAocm9vdC5wYXJlbnRDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICByb290ID0gcm9vdC5wYXJlbnRDb21wb25lbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcm9vdDtcbiAgICB9LFxuICAgICRzbG90czogc2xvdCxcbiAgICBfaXNEZXN0cm95ZWQoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMubGlmZUN5Y2xlLmRpc3Bvc2VkO1xuICAgIH1cbn07XG5cbmNvbnN0IG9yaWdpbmFsVXBkYXRlID0gQ29tcG9uZW50LnByb3RvdHlwZS5fdXBkYXRlO1xuXG5Db21wb25lbnQucHJvdG90eXBlLl91cGRhdGUgPSBmdW5jdGlvbiAoY2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMuX3RvUGhhc2UoJ2JlZm9yZVVwZGF0ZScpO1xuICAgIH1cbiAgICBvcmlnaW5hbFVwZGF0ZS5jYWxsKHRoaXMsIGNoYW5nZXMpO1xufTtcblxuY29uc3QgaW5uZXJLZXkgPSAnX1NhbkN0b3InO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWZpbmUob3B0aW9ucykge1xuXG4gICAgaWYgKG9wdGlvbnNbaW5uZXJLZXldKSB7XG4gICAgICAgIHJldHVybiBvcHRpb25zW2lubmVyS2V5XTtcbiAgICB9XG5cbiAgICBjb25zdCBzYW5PcHRpb25zID0gZXh0ZW5kKHtcbiAgICAgICAgdGVtcGxhdGU6IG9wdGlvbnMuX19zYW50ZW1wbGF0ZSxcbiAgICAgICAgYU5vZGU6IG9wdGlvbnMuX19zYW5hTm9kZSxcbiAgICB9LCBkZWZhdWx0U2FuT3B0aW9ucywgbWVyZ2VPcHRpb25zKG9wdGlvbnMpKTtcblxuICAgIGNvbnN0IGNvbXBpbGVkSG9vayA9IHNhbk9wdGlvbnMuY29tcGlsZWQ7XG4gICAgc2FuT3B0aW9ucy5jb21waWxlZCA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB0aGlzLl9pc1NhbiA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5fY2FsY0NvbXB1dGVkID0gY2FsY0NvbXB1dGVkLmJpbmQodGhpcyk7XG4gICAgICAgIGNvbXBpbGVkSG9vayAmJiBjb21waWxlZEhvb2suY2FsbCh0aGlzKTtcblxuICAgICAgICBjb25zdCBwcm9wZXJ0aWVzID0gT2JqZWN0XG4gICAgICAgICAgICAua2V5cyhtZW1iZXJNYXApXG4gICAgICAgICAgICAucmVkdWNlKChwcm9wcywga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgcHJvcHNba2V5XSA9IHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1lbWJlck1hcFtrZXldLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9wcztcbiAgICAgICAgICAgIH0sIHt9KTtcblxuICAgICAgICBwcm9wZXJ0aWVzLiRvcHRpb25zID0ge1xuICAgICAgICAgICAgdmFsdWU6IG9wdGlvbnNcbiAgICAgICAgfTtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCBwcm9wZXJ0aWVzKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVmcyA9IG9wdGlvbnMuX19zYW5SZWZzO1xuICAgIGNvbnN0IGluaXRlZEhvb2sgPSBzYW5PcHRpb25zLmluaXRlZDtcbiAgICBzYW5PcHRpb25zLmluaXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgbWUgPSB0aGlzO1xuICAgICAgICB0aGlzLiRyZWZzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuICAgICAgICBpZiAocmVmcykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHJlZnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCByID0gcmVmc1tpXTtcbiAgICAgICAgICAgICAgICBkZWYobWUuJHJlZnMsIHIubmFtZSwge1xuICAgICAgICAgICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gci5yb290ID8gbWUuZWwgOiBtZS5yZWYoci5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gb3ZlcndyaXRlIHNhbiBjb21wb25lbnQgYXBpIGZvciBzdXBwb3J0IHYtZm9yICsgcmVmXG4gICAgICAgICAgICBtZS5yZWYgPSByZWY7XG4gICAgICAgIH1cblxuICAgICAgICBpbml0ZWRIb29rICYmIGluaXRlZEhvb2suY2FsbCh0aGlzKTtcblxuICAgICAgICAvLyBtZXJnZSBjc3MgbW9kdWxlc1xuICAgICAgICBpZiAodGhpcy4kc3R5bGUpIHtcbiAgICAgICAgICAgIGV4dGVuZCh0aGlzLmRhdGEucmF3LiRzdHlsZSwgdGhpcy4kc3R5bGUpXG4gICAgICAgIH1cblxuICAgICAgICBiaW5kRGF0YS5jYWxsKHRoaXMpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLndhdGNoKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhvcHRpb25zLndhdGNoKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy53YXRjaChrZXksIG9wdGlvbnMud2F0Y2hba2V5XS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMucHJlcHJjZXNzQU5vZGUpIHtcbiAgICAgICAgICAgIG9wdGlvbnMucHJlcHJjZXNzQU5vZGUuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBiZWZvcmVVcGRhdGVIb29rID0gc2FuT3B0aW9ucy5iZWZvcmVVcGRhdGU7XG4gICAgc2FuT3B0aW9ucy5iZWZvcmVVcGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGJlZm9yZVVwZGF0ZUhvb2sgJiYgYmVmb3JlVXBkYXRlSG9vay5jYWxsKHRoaXMpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLnByZXByY2Vzc0FOb2RlKSB7XG4gICAgICAgICAgICBvcHRpb25zLnByZXByY2Vzc0FOb2RlLmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgc2FuT3B0aW9ucy5pbml0RGF0YSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBjb25zdCBtZSA9IHRoaXM7XG5cbiAgICAgICAgY29uc3QgZGVmYXVsdFByb3BzID0ge307XG4gICAgICAgIGlmIChvcHRpb25zLnByb3BzKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9wS2V5cyA9IG1lLl9wcm9wS2V5cyA9IG9wdGlvbnMuX3Byb3BLZXlzID0gb3B0aW9ucy5wcm9wc1xuICAgICAgICAgICAgICAgID8gKEFycmF5LmlzQXJyYXkob3B0aW9ucy5wcm9wcykgPyBvcHRpb25zLnByb3BzIDogT2JqZWN0LmtleXMob3B0aW9ucy5wcm9wcykpXG4gICAgICAgICAgICAgICAgOiBbXTtcblxuICAgICAgICAgICAgLy8g6buY6K6k5bGe5oCnXG4gICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkob3B0aW9ucy5wcm9wcykpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gcHJvcEtleXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcCA9IHByb3BLZXlzW2ldO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wID0gb3B0aW9ucy5wcm9wc1twXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCdkZWZhdWx0JyBpbiBwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0UHJvcHNbcF0gPSB0eXBlb2YgcHJvcC5kZWZhdWx0ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBwcm9wLmRlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcHJvcC5kZWZhdWx0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbWUuX3Byb3BLZXlzID0gW107XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5jb21wdXRlZCkge1xuICAgICAgICAgICAgbWUuX2NvbXB1dGVkS2V5cyA9IE9iamVjdC5rZXlzKG9wdGlvbnMuY29tcHV0ZWQpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IG1lLl9jb21wdXRlZEtleXM7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGsgPSBtZS5fY29tcHV0ZWRLZXlzW2ldO1xuICAgICAgICAgICAgICAgIGRlZihtZSwgaywge1xuICAgICAgICAgICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWUuZGF0YS5nZXQoayk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1lLl9jb21wdXRlZEtleXMgPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRhdGEgPSB0eXBlb2Ygb3B0aW9ucy5kYXRhID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICA/IG9wdGlvbnMuZGF0YS5jYWxsKGV4dGVuZCh7fSwgZGVmYXVsdFByb3BzLCB0aGlzLl9zcmNTYmluZERhdGEpKVxuICAgICAgICAgICAgOiAob3B0aW9ucy5kYXRhIHx8IHt9KTtcblxuICAgICAgICB0aGlzLl9kYXRhS2V5cyA9IE9iamVjdC5rZXlzKGRhdGEpIHx8IFtdO1xuXG4gICAgICAgIHJldHVybiBleHRlbmQoeyRzdHlsZToge319LCBkZWZhdWx0UHJvcHMsIGRhdGEpO1xuICAgIH07XG5cbiAgICBpZiAob3B0aW9ucy5jb21wb25lbnRzKSB7XG4gICAgICAgIHNhbk9wdGlvbnMuY29tcG9uZW50cyA9IE9iamVjdFxuICAgICAgICAgICAgLmtleXMob3B0aW9ucy5jb21wb25lbnRzKVxuICAgICAgICAgICAgLnJlZHVjZSgocHJldiwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgcHJldltrZXldID0gcHJldltoeXBoZW5hdGUoa2V5KV0gPSBkZWZpbmUob3B0aW9ucy5jb21wb25lbnRzW2tleV0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgICAgICAgfSwge30pO1xuICAgIH1cblxuICAgIGNvbnN0IENvbXBvbmVudCA9IGRlZmluZUNvbXBvbmVudChzYW5PcHRpb25zKTtcblxuICAgIHJldHVybiBvcHRpb25zW2lubmVyS2V5XSA9IENvbXBvbmVudDtcbn1cblxuIiwiLyoqXG4gKiBAZmlsZSBvdmVycmlkZSBldmFsIGV4cHJcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQge0RhdGEsIHBhcnNlRXhwciwgRXhwclR5cGUsIGV2YWxFeHByfSBmcm9tICdzYW4nO1xuXG5jb25zdCBvcmlnaW5hbEdldCA9IERhdGEucHJvdG90eXBlLmdldDtcblxuRGF0YS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGV4cHIsIGNhbGxlZSkge1xuICAgIGlmIChleHByICYmIHR5cGVvZiBleHByICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBleHByID0gcGFyc2VFeHByKGV4cHIpO1xuICAgIH1cbiAgICBsZXQgdmFsdWUgPSBvcmlnaW5hbEdldC5jYWxsKHRoaXMsIGV4cHIsIGNhbGxlZSk7XG4gICAgaWYgKCFleHByIHx8IHZhbHVlICE9PSB1bmRlZmluZWQgfHwgIXRoaXMub3duZXIgfHwgZXhwci50eXBlICE9PSBFeHByVHlwZS5BQ0NFU1NPUikge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGNvbnN0IHBhdGhzID0gZXhwci5wYXRocztcbiAgICBjb25zdCBmaXJzdCA9IHBhdGhzWzBdLnZhbHVlO1xuICAgIGlmIChcbiAgICAgICAgW1xuICAgICAgICAgICAgLi4udGhpcy5vd25lci5fcHJvcEtleXMsXG4gICAgICAgICAgICAuLi50aGlzLm93bmVyLl9kYXRhS2V5cyxcbiAgICAgICAgICAgIC4uLnRoaXMub3duZXIuX2NvbXB1dGVkS2V5c1xuICAgICAgICBdLmluZGV4T2YoZmlyc3QpID49IDBcbiAgICApIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICB2YWx1ZSA9IHRoaXMub3duZXJbZmlyc3RdO1xuICAgIGZvciAodmFyIGkgPSAxLCBsID0gcGF0aHMubGVuZ3RoOyB2YWx1ZSAhPSBudWxsICYmIGkgPCBsOyBpKyspIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZVtwYXRoc1tpXS52YWx1ZSB8fCBldmFsRXhwcihwYXRoc1tpXSwgY2FsbGVlKV07XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn07XG4iLCIvKipcbiAqIEBmaWxlIG1lcmdlIGNsYXNzXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuZnVuY3Rpb24gc3RyaW5nKGNscyA9ICcnKSB7XG4gICAgaWYgKCFjbHMpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICByZXR1cm4gY2xzXG4gICAgICAgIC5zcGxpdCgnICcpXG4gICAgICAgIC5yZWR1Y2UoKHByZXYsIG5hbWUpID0+IHtcbiAgICAgICAgICAgIGlmICghbmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgICAgIFtuYW1lXTogMVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSwge30pO1xufVxuXG5mdW5jdGlvbiBvYmplY3QoY2xzID0ge30pIHtcbiAgICByZXR1cm4gT2JqZWN0XG4gICAgICAgIC5rZXlzKGNscylcbiAgICAgICAgLnJlZHVjZSgocHJldiwga2V5KSA9PiB7XG4gICAgICAgICAgICBpZiAoIWNsc1trZXldKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgICAgLi4uc3RyaW5nKGtleSlcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sIHt9KTtcbn1cblxuZnVuY3Rpb24gYXJyYXkoY2xzID0gW10pIHtcbiAgICBsZXQgY2xhenogPSB7fTtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gY2xzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBjbHNbaV07XG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgY2xhenogPSB7XG4gICAgICAgICAgICAuLi5jbGF6eixcbiAgICAgICAgICAgIC4uLihcbiAgICAgICAgICAgICAgICB0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgICA/IHN0cmluZyhlbGVtZW50KVxuICAgICAgICAgICAgICAgIDogKEFycmF5LmlzQXJyYXkoZWxlbWVudCkgPyBhcnJheShlbGVtZW50KSA6IG9iamVjdChlbGVtZW50KSlcbiAgICAgICAgICAgIClcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIGNsYXp6O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGljQ2xhc3MgPSAnJywgY2xzID0ge30pIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoYXJyYXkoW3N0YXRpY0NsYXNzLCBjbHNdKSkuam9pbignICcpO1xufVxuIiwiLyoqXG4gKiBAZmlsZSBtZXJnZSBzdHlsZVxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCB7Y2FjaGVkLCBleHRlbmQsIHRvT2JqZWN0fSBmcm9tICcuLi9zaGFyZWQvdXRpbCc7XG5cbmNvbnN0IHBhcnNlU3R5bGVUZXh0ID0gY2FjaGVkKGZ1bmN0aW9uIChjc3NUZXh0KSB7XG4gICAgY29uc3QgcmVzID0ge307XG4gICAgY29uc3QgbGlzdERlbGltaXRlciA9IC87KD8hW14oXSpcXCkpL2c7XG4gICAgY29uc3QgcHJvcGVydHlEZWxpbWl0ZXIgPSAvOiguKykvO1xuICAgIGNzc1RleHQuc3BsaXQobGlzdERlbGltaXRlcikuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgdmFyIHRtcCA9IGl0ZW0uc3BsaXQocHJvcGVydHlEZWxpbWl0ZXIpO1xuICAgICAgICAgICAgdG1wLmxlbmd0aCA+IDEgJiYgKHJlc1t0bXBbMF0udHJpbSgpXSA9IHRtcFsxXS50cmltKCkpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlcztcbn0pO1xuXG4vLyBub3JtYWxpemUgcG9zc2libGUgYXJyYXkgLyBzdHJpbmcgdmFsdWVzIGludG8gT2JqZWN0XG5mdW5jdGlvbiBub3JtYWxpemVTdHlsZUJpbmRpbmcoYmluZGluZ1N0eWxlKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYmluZGluZ1N0eWxlKSkge1xuICAgICAgICByZXR1cm4gdG9PYmplY3QoYmluZGluZ1N0eWxlKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBiaW5kaW5nU3R5bGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBwYXJzZVN0eWxlVGV4dChiaW5kaW5nU3R5bGUpO1xuICAgIH1cbiAgICByZXR1cm4gYmluZGluZ1N0eWxlO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0aWNTdHlsZSwgc3R5bGUsIHZTaG93ID0gdHJ1ZSkge1xuICAgIHN0eWxlID0gbm9ybWFsaXplU3R5bGVCaW5kaW5nKHN0eWxlKTtcbiAgICBpZiAoIXZTaG93KSB7XG4gICAgICAgIHN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICAgIHJldHVybiBzdGF0aWNTdHlsZVxuICAgICAgICA/IGV4dGVuZChzdGF0aWNTdHlsZSwgc3R5bGUpXG4gICAgICAgIDogc3R5bGU7XG59XG4iLCIvKipcbiAqIEBmaWxlIGxvb3AgZXhwcmVzc2lvblxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCB7Y2FjaGVkfSBmcm9tICcuLi9zaGFyZWQvdXRpbCc7XG5cbmNvbnN0IHRvQXJyYXkgPSBjYWNoZWQoZnVuY3Rpb24gKG4pIHtcbiAgICBjb25zdCB2YWx1ZSA9IG5ldyBBcnJheShuKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICB2YWx1ZVtpXSA9IGkgKyAxO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKCFpc05hTih2YWx1ZSkpIHtcbiAgICAgICAgY29uc3QgbiA9ICt2YWx1ZTtcbiAgICAgICAgdmFsdWUgPSB0b0FycmF5KG4pO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG59XG5cbiIsIi8qKlxuICogQGZpbGUgZ2V0IGNvbXBvbmVudCB0eXBlXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHtldmFsRXhwcn0gZnJvbSAnc2FuJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGFOb2RlLCBkYXRhKSB7XG4gICAgaWYgKGFOb2RlLnRhZ05hbWUgIT09ICdjb21wb25lbnQnIHx8IGFOb2RlLmhvdHNwb3QucHJvcHMuaXMgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnRzW2FOb2RlLnRhZ05hbWVdO1xuICAgIH1cblxuICAgIGNvbnN0IGlzID0gYU5vZGUucHJvcHNbYU5vZGUuaG90c3BvdC5wcm9wcy5pc107XG4gICAgY29uc3QgaXNWYWx1ZSA9IGV2YWxFeHByKGlzLmV4cHIsIGRhdGEpO1xuICAgIHJldHVybiB0aGlzLmNvbXBvbmVudHNbaXNWYWx1ZV07XG59XG4iLCIvKipcbiAqIEBmaWxlIG9iamVjdCBjb21wdXRlZCBwcm9wZXJ0aWVzIG1lcmdlXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb3BlcnRpZXMpIHtcbiAgICByZXR1cm4gcHJvcGVydGllcy5yZWR1Y2UoKHByZXYsIHtrLCB2fSkgPT4ge1xuICAgICAgICBwcmV2W2tdID0gdjtcbiAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgfSwge30pO1xufVxuIiwiLyoqXG4gKiBAZmlsZSBzYW4gcmVmIHJld3JpdGVcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQgKiBhcyBzYW4gZnJvbSAnc2FuJztcbmltcG9ydCB7Y2FtZWxpemV9IGZyb20gJy4uL3NoYXJlZC91dGlsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKG5hbWUpIHtcblxuICAgIGNvbnN0IG93bmVyID0gdGhpcztcblxuICAgIGZ1bmN0aW9uIGNoaWxkcmVuVHJhdmVyc2FsKGNoaWxkcmVuKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgbGV0IHJlZlRhcmdldCA9IGVsZW1lbnRUcmF2ZXJzYWwoY2hpbGRyZW5baV0pO1xuICAgICAgICAgICAgaWYgKHJlZlRhcmdldCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZWZUYXJnZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlbGVtZW50VHJhdmVyc2FsKGVsZW1lbnQpIHtcbiAgICAgICAgY29uc3Qgbm9kZVR5cGUgPSBlbGVtZW50Lm5vZGVUeXBlO1xuICAgICAgICBpZiAobm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVmVGFyZ2V0O1xuICAgICAgICBpZiAoZWxlbWVudC5vd25lciA9PT0gb3duZXIpIHtcbiAgICAgICAgICAgIGxldCByZWY7XG4gICAgICAgICAgICBsZXQgdmFsdWU7XG4gICAgICAgICAgICBzd2l0Y2ggKG5vZGVUeXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgcmVmID0gZWxlbWVudC5hTm9kZS5kaXJlY3RpdmVzLnJlZjtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBzYW4uZXZhbEV4cHIocmVmLnZhbHVlLCBlbGVtZW50LnNjb3BlLCBvd25lcik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWYgJiYgKHZhbHVlID09PSBuYW1lIHx8IGNhbWVsaXplKHZhbHVlKSA9PT0gbmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBub2RlVHlwZSA9PT0gNCA/IGVsZW1lbnQuZWwgOiBlbGVtZW50LmNoaWxkcmVuLm1hcChlbGVtZW50VHJhdmVyc2FsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgcmVmID0gZWxlbWVudC5zb3VyY2UuZGlyZWN0aXZlcy5yZWY7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gc2FuLmV2YWxFeHByKHJlZi52YWx1ZSwgZWxlbWVudC5zY29wZSwgb3duZXIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVmICYmICh2YWx1ZSA9PT0gbmFtZSB8fCBjYW1lbGl6ZSh2YWx1ZSkgPT09IG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZWZUYXJnZXQgPSBlbGVtZW50LnNsb3RDaGlsZHJlbiAmJiBjaGlsZHJlblRyYXZlcnNhbChlbGVtZW50LnNsb3RDaGlsZHJlbik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVmVGFyZ2V0IHx8IGNoaWxkcmVuVHJhdmVyc2FsKGVsZW1lbnQuY2hpbGRyZW4pO1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZHJlblRyYXZlcnNhbCh0aGlzLmNoaWxkcmVuKTtcbn07XG4iLCIvKipcbiAqIEBmaWxlIG1lcmdlIG9wdGlvbnNcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQge2V4dGVuZH0gZnJvbSAnLi4vc2hhcmVkL3V0aWwnO1xuaW1wb3J0IHtsaWZlQ3ljbGVLZXlzLCBsaWZlQ3ljbGVNYXB9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IGF0b21CdWlsZEluTWl4aW4gZnJvbSAnLi9hdG9tLWdsb2JhbC1hcGknO1xuXG5jb25zdCBrZXlzID0gW1xuICAgICdmaWx0ZXJzJyxcbiAgICAnY29tcHV0ZWQnXG5dO1xuXG5mdW5jdGlvbiBtZXJnZUhvb2socGFyZW50VmFsLCBjaGlsZFZhbCkge1xuICAgIHJldHVybiBjaGlsZFZhbFxuICAgICAgICA/IHBhcmVudFZhbFxuICAgICAgICAgICAgPyBwYXJlbnRWYWwuY29uY2F0KGNoaWxkVmFsKVxuICAgICAgICAgICAgOiBBcnJheS5pc0FycmF5KGNoaWxkVmFsKVxuICAgICAgICAgICAgICAgID8gY2hpbGRWYWxcbiAgICAgICAgICAgICAgICA6IFtjaGlsZFZhbF1cbiAgICAgICAgICAgIDogcGFyZW50VmFsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZXJnZU9wdGlvbnMob3B0aW9ucykge1xuICAgIGNvbnN0IGRlc3RPcHRpb25zID0ge307XG4gICAgY29uc3QgbGlzdCA9IEFycmF5LmlzQXJyYXkob3B0aW9ucy5taXhpbnMpXG4gICAgICAgID8gW2F0b21CdWlsZEluTWl4aW4sIC4uLm9wdGlvbnMubWl4aW5zLCBvcHRpb25zXVxuICAgICAgICA6IFthdG9tQnVpbGRJbk1peGluLCBvcHRpb25zXTtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gbGlzdC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBjb25zdCBvcHQgPSBsaXN0W2ldO1xuICAgICAgICBvcHQubWV0aG9kcyAmJiBleHRlbmQoZGVzdE9wdGlvbnMsIG9wdC5tZXRob2RzKTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBrZXlzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCBrID0ga2V5c1tqXTtcbiAgICAgICAgICAgIGlmIChvcHRba10pIHtcbiAgICAgICAgICAgICAgICBkZXN0T3B0aW9uc1trXSA9IGV4dGVuZChkZXN0T3B0aW9uc1trXSB8fCB7fSwgb3B0W2tdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxpZmVDeWNsZUtleXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGsgPSBsaWZlQ3ljbGVLZXlzW2pdO1xuICAgICAgICAgICAgY29uc3QgZGsgPSBsaWZlQ3ljbGVNYXBba107XG4gICAgICAgICAgICBpZiAob3B0W2tdKSB7XG4gICAgICAgICAgICAgICAgZGVzdE9wdGlvbnNbZGtdID0gbWVyZ2VIb29rKGRlc3RPcHRpb25zW2RrXSB8fCBbXSwgb3B0W2tdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxpZmVDeWNsZUtleXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgY29uc3QgayA9IGxpZmVDeWNsZUtleXNbal07XG4gICAgICAgIGNvbnN0IGRrID0gbGlmZUN5Y2xlTWFwW2tdO1xuICAgICAgICBpZiAoZGVzdE9wdGlvbnNbZGtdKSB7XG4gICAgICAgICAgICBjb25zdCBob29rcyA9IGRlc3RPcHRpb25zW2RrXS5zbGljZSgpO1xuICAgICAgICAgICAgZGVzdE9wdGlvbnNbZGtdID0gaG9va3MubGVuZ3RoID09PSAxID8gaG9va3NbMF0gOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaG9va3MuZm9yRWFjaChob29rID0+IGhvb2suY2FsbCh0aGlzKSwgdGhpcyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChvcHRpb25zLm1lc3NhZ2VzKSB7XG4gICAgICAgIGRlc3RPcHRpb25zLm1lc3NhZ2VzID0gb3B0aW9ucy5tZXNzYWdlcztcbiAgICB9XG4gICAgcmV0dXJuIGRlc3RPcHRpb25zO1xufVxuIiwiLyoqXG4gKiBAZmlsZSBjb25zdGFudHNcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5leHBvcnQgY29uc3QgbGlmZUN5Y2xlTWFwID0ge1xuICAgIGJlZm9yZUNyZWF0ZTogJ2NvbXBpbGVkJyxcbiAgICBtb3VudGVkOiAnYXR0YWNoZWQnLFxuICAgIGNyZWF0ZWQ6ICdpbml0ZWQnLFxuICAgIGJlZm9yZU1vdW50OiAnY3JlYXRlZCcsXG4gICAgYmVmb3JlRGVzdHJveTogJ2RldGFjaGVkJyxcbiAgICBkZXN0cm95OiAnZGlzcG9zZWQnLFxuICAgIHVwZGF0ZWQ6ICd1cGRhdGVkJyxcbiAgICBiZWZvcmVVcGRhdGU6ICdiZWZvcmVVcGRhdGUnLFxuICAgIGFjdGl2YXRlZDogJ2FjdGl2YXRlZCcsXG4gICAgZGVhY3RpdmF0ZWQ6ICdkZWFjdGl2YXRlZCdcbn07XG5cbmV4cG9ydCBjb25zdCBsaWZlQ3ljbGVLZXlzID0gT2JqZWN0LmtleXMobGlmZUN5Y2xlTWFwKTtcbiIsIi8qKlxuICogQGZpbGUg5YWo5bGA55Sf5pWI55qE5Ye95pWwXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuY29uc3QgTUFUSF9NRVRIT0QgPSBbXG4gICAgJ2Zsb29yJywgJ2NlaWwnLCAncm91bmQnLFxuICAgICdhYnMnLCAnbWF4JywgJ21pbicsICdwb3cnXG5dO1xuXG5jb25zdCBtZXRob2RzID0gZXhwb3J0cy5tZXRob2RzID0ge307XG5cbk1BVEhfTUVUSE9ELmZvckVhY2gobmFtZSA9PiB7XG4gICAgbWV0aG9kc1tgbWF0aF8ke25hbWV9YF0gPSBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICByZXR1cm4gTWF0aFtuYW1lXS5hcHBseShNYXRoLCBhcmdzKTtcbiAgICB9O1xufSk7XG5cbm1ldGhvZHMuYXJyYXlfc2xpY2UgPSBmdW5jdGlvbiAoYXJyLCBzdGFydCwgbGVuKSB7XG4gICAgdmFyIGVuZCA9IGxlbiA9PSBudWxsID8gdm9pZCAwIDogKGxlbiA+PSAwID8gKHN0YXJ0ICsgbGVuKSA6IChhcnIubGVuZ3RoICsgbGVuKSk7XG4gICAgcmV0dXJuIGFyci5zbGljZShzdGFydCwgZW5kKTtcbn07XG5cbm1ldGhvZHMuYXJyYXlfam9pbiA9IGZ1bmN0aW9uIChhcnIsIHNlcCkge1xuICAgIHJldHVybiBhcnIuam9pbihzZXApO1xufTtcblxubWV0aG9kcy5zdHJfcG9zID0gZnVuY3Rpb24gKHN0ciwgbWF0Y2gpIHtcbiAgICByZXR1cm4gc3RyLmluZGV4T2YobWF0Y2gpO1xufTtcblxubWV0aG9kcy5vYmplY3RfZnJlZXplID0gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBPYmplY3QuZnJlZXplKG9iaik7XG59O1xuXG5leHBvcnRzLmZpbHRlcnMgPSB7XG4gICAganNvbihvYmopIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGpzb24pO1xuICAgIH0sXG4gICAgbG93ZXIoc3RyKSB7XG4gICAgICAgIHJldHVybiBzdHIudG9Mb3dlckNhc2UoKTtcbiAgICB9LFxuICAgIHVwcGVyKHN0cikge1xuICAgICAgICByZXR1cm4gc3RyLnRvVXBwZXJDYXNlKCk7XG4gICAgfVxufTtcbiIsIi8qKlxuICogQGZpbGUg5pWw5o2u57uR5a6aXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHtpc09iamVjdCwgaGFzT3duLCBpc1BsYWluT2JqZWN0LCBleHRlbmQsIGRlZn0gZnJvbSAnLi4vc2hhcmVkL3V0aWwnO1xuaW1wb3J0IHtFeHByVHlwZX0gZnJvbSAnc2FuJztcblxuY29uc3QgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcbmNvbnN0IGFycmF5TWV0aG9kcyA9IE9iamVjdC5jcmVhdGUoYXJyYXlQcm90byk7XG5cbmNvbnN0IG1ldGhvZHNUb1BhdGNoID0gW1xuICAgICdwdXNoJyxcbiAgICAncG9wJyxcbiAgICAnc2hpZnQnLFxuICAgICd1bnNoaWZ0JyxcbiAgICAnc3BsaWNlJ1xuICAgIC8vICdzb3J0JyxcbiAgICAvLyAncmV2ZXJzZSdcbl07XG5cbi8qKlxuICogSW50ZXJjZXB0IG11dGF0aW5nIG1ldGhvZHMgYW5kIGVtaXQgZXZlbnRzXG4gKi9cbm1ldGhvZHNUb1BhdGNoLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgIC8vIGNhY2hlIG9yaWdpbmFsIG1ldGhvZFxuICAgIGNvbnN0IG9yaWdpbmFsID0gYXJyYXlQcm90b1ttZXRob2RdXG4gICAgZGVmKGFycmF5TWV0aG9kcywgbWV0aG9kLCB7XG4gICAgICAgIHZhbHVlKC4uLmFyZ3MpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IG9yaWdpbmFsLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICAgICAgY29uc3Qgb2IgPSB0aGlzLl9fb2JfXztcbiAgICAgICAgICAgIGxldCBpbnNlcnRlZDtcbiAgICAgICAgICAgIHN3aXRjaCAobWV0aG9kKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAncHVzaCc6XG4gICAgICAgICAgICAgICAgY2FzZSAndW5zaGlmdCc6XG4gICAgICAgICAgICAgICAgICAgIGluc2VydGVkID0gYXJncztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnc3BsaWNlJzpcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0ZWQgPSBhcmdzLnNsaWNlKDIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpbnNlcnRlZCkge1xuICAgICAgICAgICAgICAgIG9iLm9ic2VydmVBcnJheShpbnNlcnRlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvYi5jb250ZXh0LmRhdGFbbWV0aG9kXS5jYWxsKG9iLmNvbnRleHQuZGF0YSwgb2IuZXhwciwgLi4uYXJncyk7XG4gICAgICAgICAgICBvYnNlcnZlKG9iLmNvbnRleHQuZGF0YS5nZXQob2IuZXhwciksIG9iLmV4cHIsIG9iLmNvbnRleHQpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgIH0pXG59KTtcblxuY2xhc3MgT2JzZXJ2ZXIge1xuXG4gICAgY29uc3RydWN0b3IodmFsdWUsIGV4cHIsIGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5leHByID0gZXhwcjtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgZGVmKHZhbHVlLCAnX19vYl9fJywge1xuICAgICAgICAgICAgdmFsdWU6IHRoaXNcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgdmFsdWUuX19wcm90b19fID0gYXJyYXlNZXRob2RzO1xuICAgICAgICAgICAgdGhpcy5vYnNlcnZlQXJyYXkodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5rZXlzID0gT2JqZWN0LmtleXModmFsdWUpIHx8IFtdO1xuICAgICAgICAgICAgdGhpcy53YWxrKHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdhbGsgdGhyb3VnaCBhbGwgcHJvcGVydGllcyBhbmQgY29udmVydCB0aGVtIGludG9cbiAgICAgKiBnZXR0ZXIvc2V0dGVycy4gVGhpcyBtZXRob2Qgc2hvdWxkIG9ubHkgYmUgY2FsbGVkIHdoZW5cbiAgICAgKiB2YWx1ZSB0eXBlIGlzIE9iamVjdC5cbiAgICAgKi9cbiAgICB3YWxrKG9iaikge1xuICAgICAgICBjb25zdCBrZXlzID0gdGhpcy5rZXlzO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGRlZmluZVJlYWN0aXZlKG9iaiwga2V5c1tpXSwgdGhpcy5leHByLCB0aGlzLmNvbnRleHQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT2JzZXJ2ZSBhIGxpc3Qgb2YgQXJyYXkgaXRlbXMuXG4gICAgICovXG4gICAgb2JzZXJ2ZUFycmF5KGl0ZW1zKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gaXRlbXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBvYnNlcnZlKGl0ZW1zW2ldLCBleHRlbmQoe30sIHRoaXMuZXhwciwge1xuICAgICAgICAgICAgICAgIHBhdGhzOiBbLi4udGhpcy5leHByLnBhdGhzLCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IEV4cHJUeXBlLk5VTUJFUixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGlcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSksIHRoaXMuY29udGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRlZmluZVJlYWN0aXZlKG9iaiwga2V5LCBleHByLCBjb250ZXh0KSB7XG5cbiAgICBjb25zdCBwcm9wZXJ0eSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpO1xuICAgIGlmIChwcm9wZXJ0eSAmJiBwcm9wZXJ0eS5jb25maWd1cmFibGUgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBjYXRlciBmb3IgcHJlLWRlZmluZWQgZ2V0dGVyL3NldHRlcnNcbiAgICBjb25zdCBnZXR0ZXIgPSBwcm9wZXJ0eSAmJiBwcm9wZXJ0eS5nZXQ7XG4gICAgY29uc3Qgc2V0dGVyID0gcHJvcGVydHkgJiYgcHJvcGVydHkuc2V0O1xuXG4gICAgY29uc3Qga2V5RXhwciA9IHtcbiAgICAgICAgdHlwZTogRXhwclR5cGUuQUNDRVNTT1IsXG4gICAgICAgIHBhdGhzOiBbLi4uZXhwci5wYXRocywge1xuICAgICAgICAgICAgdHlwZTogRXhwclR5cGUuU1RSSU5HLFxuICAgICAgICAgICAgdmFsdWU6IGtleVxuICAgICAgICB9XVxuICAgIH07XG5cbiAgICBsZXQgdmFsID0gb2JqW2tleV07XG4gICAgb2JzZXJ2ZSh2YWwsIGtleUV4cHIsIGNvbnRleHQpO1xuICAgIGNvbnN0IG5ld1Byb3BlcnR5ID0ge1xuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIHNldChuZXdWYWwpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZ2V0dGVyID8gZ2V0dGVyLmNhbGwob2JqKSA6IHZhbDtcbiAgICAgICAgICAgIGlmIChuZXdWYWwgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGdldHRlciAmJiAhc2V0dGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNldHRlcikge1xuICAgICAgICAgICAgICAgIHNldHRlci5jYWxsKG9iaiwgbmV3VmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhbCA9IG5ld1ZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9ic2VydmUobmV3VmFsLCBrZXlFeHByLCBjb250ZXh0KTtcbiAgICAgICAgICAgIGNvbnRleHQuZGF0YS5zZXQoa2V5RXhwciwgbmV3VmFsLCB7Zm9yY2U6IHRydWV9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBnZXR0ZXIgPyBnZXR0ZXIuY2FsbChvYmopIDogdmFsO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBkZWYob2JqLCBrZXksIG5ld1Byb3BlcnR5KTtcbn1cblxuY29uc3QgZGVmYXVsdEV4cHIgPSB7XG4gICAgdHlwZTogRXhwclR5cGUuQUNDRVNTT1IsXG4gICAgcGF0aHM6IFtdXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZXhwciA9IGV4dGVuZCh7fSwgZGVmYXVsdEV4cHIpO1xuICAgIGNvbnN0IGtleXMgPSBbLi4udGhpcy5fZGF0YUtleXMsIC4uLnRoaXMuX3Byb3BLZXlzXTtcbiAgICBjb25zdCBrZXlMZW5ndGggPSBrZXlzLmxlbmd0aDtcblxuICAgIG9ic2VydmUodGhpcy5kYXRhLmdldCgpLCBleHByLCB0aGlzKTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzO1xuXG4gICAgdGhpcy5fZGF0YSA9IHRoaXMuZGF0YS5nZXQoKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5TGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgZGVmKGNvbnRleHQsIGtleSwge1xuICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb250ZXh0Ll9kYXRhW2tleV07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0KG5ld1ZhbCkge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuX2RhdGFba2V5XSA9IG5ld1ZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5kYXRhLm93bmVyID0gdGhpcztcbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZSh2YWx1ZSwgZXhwciwgY29udGV4dCkge1xuICAgIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IG9iO1xuICAgIGlmIChoYXNPd24odmFsdWUsICdfX29iX18nKSAmJiB2YWx1ZS5fX29iX18gaW5zdGFuY2VvZiBPYnNlcnZlcikge1xuICAgICAgICBvYiA9IHZhbHVlLl9fb2JfX1xuICAgIH1cbiAgICBlbHNlIGlmIChcbiAgICAgICAgKEFycmF5LmlzQXJyYXkodmFsdWUpIHx8IGlzUGxhaW5PYmplY3QodmFsdWUpKVxuICAgICAgICAmJiBPYmplY3QuaXNFeHRlbnNpYmxlKHZhbHVlKVxuICAgICkge1xuICAgICAgICBvYiA9IG5ldyBPYnNlcnZlcih2YWx1ZSwgZXhwciwgY29udGV4dCk7XG4gICAgfVxuICAgIHJldHVybiBvYjtcbn1cbiIsIi8qKlxuICogQGZpbGUg6KaG55uWIHNhbiDljp/nlJ/nmoQgX2NhbGNDb21wdXRlZFxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCB7ZGVmfSBmcm9tICcuLi9zaGFyZWQvdXRpbCc7XG5pbXBvcnQgc2xvdHMgZnJvbSAnLi9nZXQtc2xvdHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoa2V5KSB7XG4gICAgbGV0IGNvbXB1dGVkRGVwcyA9IHRoaXMuY29tcHV0ZWREZXBzW2tleV07XG4gICAgaWYgKCFjb21wdXRlZERlcHMpIHtcbiAgICAgICAgY29tcHV0ZWREZXBzID0gdGhpcy5jb21wdXRlZERlcHNba2V5XSA9IHt9O1xuICAgIH1cblxuICAgIGNvbnN0IG1lID0gdGhpcztcbiAgICBjb25zdCBkYXRhID0gbWUuZGF0YS5nZXQoKTtcbiAgICBjb25zdCBjb250ZXh0ID0ge307XG5cbiAgICBkZWYoY29udGV4dCwgJyRyb290Jywge1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gbWUuJHJvb3Q7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGRlZihjb250ZXh0LCAnJHNsb3RzJywge1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gc2xvdHMuY2FsbChtZSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhkYXRhKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBrID0ga2V5c1tpXTtcbiAgICAgICAgZGVmKGNvbnRleHQsIGssIHtcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWNvbXB1dGVkRGVwc1trXSkge1xuICAgICAgICAgICAgICAgICAgICBjb21wdXRlZERlcHNba10gPSAxO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChtZS5jb21wdXRlZFtrXSAmJiAhbWUuY29tcHV0ZWREZXBzW2tdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZS5fY2FsY0NvbXB1dGVkKGspO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbWUud2F0Y2goaywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWUuX2NhbGNDb21wdXRlZChrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gbWUuZGF0YS5nZXQoayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuZGF0YS5zZXQoa2V5LCB0aGlzLmNvbXB1dGVkW2tleV0uY2FsbChjb250ZXh0KSk7XG59XG4iLCIvKipcbiAqIEBmaWxlIGNhbGwgYWN0aXZhdGVkIGRlYWN0aXZhdGVkXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHtOb2RlVHlwZX0gZnJvbSAnc2FuJztcblxuZnVuY3Rpb24gY3JlYXRlQ2FsbEZhY3RvcnkobmFtZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiBjYWxsKGRpcmVjdCkge1xuICAgICAgICBjb25zdCBlbGUgPSB0aGlzO1xuICAgICAgICBpZiAoZWxlLm5vZGVUeXBlID09PSBOb2RlVHlwZS5DTVBUKSB7XG4gICAgICAgICAgICBlbGUuX3RvUGhhc2UobmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsZS5jaGlsZHJlbiAmJiBlbGUuY2hpbGRyZW4ubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgZWxlLmNoaWxkcmVuLmZvckVhY2goY2FsbCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBjYWxsQWN0aXZpdGVkID0gY3JlYXRlQ2FsbEZhY3RvcnkoJ2FjdGl2aXRlZCcpO1xuZXhwb3J0IGNvbnN0IGNhbGxEZUFjdGl2aXRlZCA9IGNyZWF0ZUNhbGxGYWN0b3J5KCdkZWFjdGl2aXRlZCcpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==