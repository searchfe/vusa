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
  _noop: function _noop() {},
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
      var component = options.components[key];
      prev[key] = prev[(0, _util.hyphenate)(key)] = component instanceof _san.Component ? component : define(component);
      return prev;
    }, {});
    sanOptions._cmptReady = 1;
  }

  var cmpt = (0, _san.defineComponent)(sanOptions);
  return options[innerKey] = cmpt;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3V0aWwuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2FuXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvZ2V0LXNsb3RzLmpzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lL2RlZmluZS1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvb3ZlcnJpZGUtZGF0YS1nZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvbWVyZ2UtY2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvbWVyZ2Utc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvbG9vcC1leHByZXNzaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lL2dldC1jb21wb25lbnQtdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcnVudGltZS9vYmplY3QtY29tcHV0ZWQtcHJvcGVydGlycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcnVudGltZS9yZWYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvbWVyZ2Utb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcnVudGltZS9jb25zdGFudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcnVudGltZS9hdG9tLWdsb2JhbC1hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvYmluZC1kYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lL2NhbGMtY29tcHV0ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvY2FsbC1hY3RpdmF0ZWQtaG9vay5qcyJdLCJuYW1lcyI6WyJleHRlbmQiLCJPYmplY3QiLCJhc3NpZ24iLCJ0b09iamVjdCIsImFyciIsInJlcyIsImkiLCJsZW5ndGgiLCJfdG9TdHJpbmciLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImlzT2JqZWN0Iiwib2JqIiwiaGFzT3duUHJvcGVydHkiLCJoYXNPd24iLCJrZXkiLCJjYWxsIiwiaXNQbGFpbk9iamVjdCIsImRlZiIsInByb3BlcnR5IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwiY2FjaGVkIiwiZm4iLCJjYWNoZSIsImNyZWF0ZSIsImNhY2hlZEZuIiwic3RyIiwiaGl0IiwiaHlwaGVuYXRlUkUiLCJoeXBoZW5hdGUiLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJjYW1lbGl6ZSIsIl8iLCJjIiwidG9VcHBlckNhc2UiLCJzbG90Q2hpbGRyZW4iLCJsaWZlQ3ljbGUiLCJzb3VyY2VTbG90cyIsImF0dGFjaGVkIiwicmVkdWNlIiwicHJldiIsImNoaWxkIiwibmFtZSIsImNvbmNhdCIsImNoaWxkcmVuIiwic2xvdHMiLCJuYW1lZCIsIm5vbmFtZSIsImRlZmF1bHQiLCJkZWZhdWx0U2FuT3B0aW9ucyIsIiRhY3RpdmF0ZSIsImNhbGxBY3Rpdml0ZWQiLCIkZGVhY3RpdmF0ZSIsImNhbGxEZUFjdGl2aXRlZCIsIl9tYyIsIm1lcmdlQ2xhc3MiLCJfbXMiLCJtZXJnZVN0eWxlIiwiX2wiLCJsb29wRXhwcmVzc2lvbiIsIl9leCIsIl9vY3AiLCJvYmplY3RDb21wdXRlZFByb3BlcnRpZXMiLCJfbm9vcCIsImdldENvbXBvbmVudFR5cGUiLCIkZW1pdCIsIkNvbXBvbmVudCIsImZpcmUiLCIkb24iLCJvbiIsIiR3YXRjaCIsIndhdGNoIiwiJG5leHRUaWNrIiwibmV4dFRpY2siLCJtZW1iZXJNYXAiLCIkZWwiLCJlbCIsIiRjb250ZXh0Iiwib3duZXIiLCIkcGFyZW50IiwicGFyZW50Q29tcG9uZW50IiwiJGNoaWxkcmVuIiwiZmlsdGVyIiwibm9kZVR5cGUiLCIkcm9vdCIsInJvb3QiLCIkc2xvdHMiLCJzbG90IiwiX2lzRGVzdHJveWVkIiwiZGlzcG9zZWQiLCJvcmlnaW5hbFVwZGF0ZSIsIl91cGRhdGUiLCJjaGFuZ2VzIiwiX3RvUGhhc2UiLCJpbm5lcktleSIsImRlZmluZSIsIm9wdGlvbnMiLCJzYW5PcHRpb25zIiwidGVtcGxhdGUiLCJfX3NhbnRlbXBsYXRlIiwiYU5vZGUiLCJfX3NhbmFOb2RlIiwiY29tcGlsZWRIb29rIiwiY29tcGlsZWQiLCJfaXNTYW4iLCJfY2FsY0NvbXB1dGVkIiwiY2FsY0NvbXB1dGVkIiwiYmluZCIsInByb3BlcnRpZXMiLCJrZXlzIiwicHJvcHMiLCJnZXQiLCIkb3B0aW9ucyIsInZhbHVlIiwiZGVmaW5lUHJvcGVydGllcyIsInJlZnMiLCJfX3NhblJlZnMiLCJpbml0ZWRIb29rIiwiaW5pdGVkIiwibWUiLCIkcmVmcyIsImxlbiIsInIiLCJyZWYiLCIkc3R5bGUiLCJkYXRhIiwicmF3IiwiYmluZERhdGEiLCJmb3JFYWNoIiwicHJlcHJvY2Vzc0FOb2RlIiwiYmVmb3JlVXBkYXRlSG9vayIsImJlZm9yZVVwZGF0ZSIsImluaXREYXRhIiwiZGVmYXVsdFByb3BzIiwicHJvcEtleXMiLCJfcHJvcEtleXMiLCJBcnJheSIsImlzQXJyYXkiLCJwIiwicHJvcCIsImNvbXB1dGVkIiwiX2NvbXB1dGVkS2V5cyIsImsiLCJfc3JjU2JpbmREYXRhIiwiX2RhdGFLZXlzIiwiY29tcG9uZW50cyIsImNvbXBvbmVudCIsIl9jbXB0UmVhZHkiLCJjbXB0Iiwib3JpZ2luYWxHZXQiLCJEYXRhIiwiZXhwciIsImNhbGxlZSIsInVuZGVmaW5lZCIsInR5cGUiLCJFeHByVHlwZSIsIkFDQ0VTU09SIiwicGF0aHMiLCJmaXJzdCIsImluZGV4T2YiLCJsIiwic3RyaW5nIiwiY2xzIiwic3BsaXQiLCJvYmplY3QiLCJhcnJheSIsImNsYXp6IiwiZWxlbWVudCIsInN0YXRpY0NsYXNzIiwiam9pbiIsInBhcnNlU3R5bGVUZXh0IiwiY3NzVGV4dCIsImxpc3REZWxpbWl0ZXIiLCJwcm9wZXJ0eURlbGltaXRlciIsIml0ZW0iLCJ0bXAiLCJ0cmltIiwibm9ybWFsaXplU3R5bGVCaW5kaW5nIiwiYmluZGluZ1N0eWxlIiwic3RhdGljU3R5bGUiLCJzdHlsZSIsInZTaG93IiwiZGlzcGxheSIsInRvQXJyYXkiLCJuIiwiaXNOYU4iLCJ0YWdOYW1lIiwiaG90c3BvdCIsImlzIiwiaXNWYWx1ZSIsInYiLCJjaGlsZHJlblRyYXZlcnNhbCIsInJlZlRhcmdldCIsImVsZW1lbnRUcmF2ZXJzYWwiLCJkaXJlY3RpdmVzIiwic2FuIiwiZXZhbEV4cHIiLCJzY29wZSIsIm1hcCIsInNvdXJjZSIsIm1lcmdlSG9vayIsInBhcmVudFZhbCIsImNoaWxkVmFsIiwibWVyZ2VPcHRpb25zIiwiZGVzdE9wdGlvbnMiLCJsaXN0IiwibWl4aW5zIiwiYXRvbUJ1aWxkSW5NaXhpbiIsIm9wdCIsIm1ldGhvZHMiLCJqIiwibGlmZUN5Y2xlS2V5cyIsImRrIiwibGlmZUN5Y2xlTWFwIiwiaG9va3MiLCJzbGljZSIsImhvb2siLCJtZXNzYWdlcyIsImJlZm9yZUNyZWF0ZSIsIm1vdW50ZWQiLCJjcmVhdGVkIiwiYmVmb3JlTW91bnQiLCJiZWZvcmVEZXN0cm95IiwiZGVzdHJveSIsInVwZGF0ZWQiLCJhY3RpdmF0ZWQiLCJkZWFjdGl2YXRlZCIsIk1BVEhfTUVUSE9EIiwiZXhwb3J0cyIsImFyZ3MiLCJNYXRoIiwiYXBwbHkiLCJhcnJheV9zbGljZSIsInN0YXJ0IiwiZW5kIiwiYXJyYXlfam9pbiIsInNlcCIsInN0cl9wb3MiLCJtYXRjaCIsIm9iamVjdF9mcmVlemUiLCJmcmVlemUiLCJmaWx0ZXJzIiwianNvbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJsb3dlciIsInVwcGVyIiwiYXJyYXlQcm90byIsImFycmF5TWV0aG9kcyIsIm1ldGhvZHNUb1BhdGNoIiwibWV0aG9kIiwib3JpZ2luYWwiLCJyZXN1bHQiLCJvYiIsIl9fb2JfXyIsImluc2VydGVkIiwib2JzZXJ2ZUFycmF5IiwiY29udGV4dCIsIm9ic2VydmUiLCJPYnNlcnZlciIsIl9fcHJvdG9fXyIsIndhbGsiLCJkZWZpbmVSZWFjdGl2ZSIsIml0ZW1zIiwiTlVNQkVSIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZ2V0dGVyIiwic2V0dGVyIiwic2V0Iiwia2V5RXhwciIsIlNUUklORyIsInZhbCIsIm5ld1Byb3BlcnR5IiwibmV3VmFsIiwiZm9yY2UiLCJkZWZhdWx0RXhwciIsImtleUxlbmd0aCIsIl9kYXRhIiwiaXNFeHRlbnNpYmxlIiwiY29tcHV0ZWREZXBzIiwiY3JlYXRlQ2FsbEZhY3RvcnkiLCJkaXJlY3QiLCJlbGUiLCJOb2RlVHlwZSIsIkNNUFQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFFTyxJQUFNQSxNQUFNLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBdEI7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RCxRQUFJZ1AsR0FBRyxDQUFDOU8sUUFBSixJQUFnQjhPLEdBQUcsQ0FBQzlPLFFBQUosQ0FBYXhDLE1BQWIsR0FBc0IsQ0FBMUMsRUFBNkM7QUFDekNzUixTQUFHLENBQUM5TyxRQUFKLENBQWFvRixPQUFiLENBQXFCbkgsSUFBckI7QUFDSDtBQUNKLEdBUkQ7QUFTSDs7QUFFTSxJQUFNc0MsYUFBYSxHQUFHcU8saUJBQWlCLENBQUMsV0FBRCxDQUF2Qzs7QUFDQSxJQUFNbk8sZUFBZSxHQUFHbU8saUJBQWlCLENBQUMsYUFBRCxDQUF6QyIsImZpbGUiOiJ2dXNhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwic2FuXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInNhblwiXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZmFjdG9yeShyZXF1aXJlKFwic2FuXCIpKSA6IGZhY3Rvcnkocm9vdFtcInNhblwiXSk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh3aW5kb3csIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzFfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbiIsIi8qKlxuICogQGZpbGUg5LiA5Lqb5bel5YW35Ye95pWwXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuLyoqXG4gKiBNaXggcHJvcGVydGllcyBpbnRvIHRhcmdldCBvYmplY3QuXG4gKi9cbmV4cG9ydCBjb25zdCBleHRlbmQgPSBPYmplY3QuYXNzaWduO1xuXG4vKipcbiAqIE1lcmdlIGFuIEFycmF5IG9mIE9iamVjdHMgaW50byBhIHNpbmdsZSBPYmplY3QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b09iamVjdChhcnIpIHtcbiAgICBjb25zdCByZXMgPSB7fTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoYXJyW2ldKSB7XG4gICAgICAgICAgICBleHRlbmQocmVzLCBhcnJbaV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59XG5cbi8qKlxuICogR2V0IHRoZSByYXcgdHlwZSBzdHJpbmcgb2YgYSB2YWx1ZSwgZS5nLiwgW29iamVjdCBPYmplY3RdLlxuICovXG5leHBvcnQgY29uc3QgX3RvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBRdWljayBvYmplY3QgY2hlY2sgLSB0aGlzIGlzIHByaW1hcmlseSB1c2VkIHRvIHRlbGxcbiAqIE9iamVjdHMgZnJvbSBwcmltaXRpdmUgdmFsdWVzIHdoZW4gd2Uga25vdyB0aGUgdmFsdWVcbiAqIGlzIGEgSlNPTi1jb21wbGlhbnQgdHlwZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqZWN0KG9iaikge1xuICAgIHJldHVybiBvYmogIT09IG51bGwgJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogQ2hlY2sgd2hldGhlciBhbiBvYmplY3QgaGFzIHRoZSBwcm9wZXJ0eS5cbiAqL1xuY29uc3QgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuZXhwb3J0IGZ1bmN0aW9uIGhhc093bihvYmosIGtleSkge1xuICAgIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KTtcbn1cblxuLyoqXG4gKiBTdHJpY3Qgb2JqZWN0IHR5cGUgY2hlY2suIE9ubHkgcmV0dXJucyB0cnVlXG4gKiBmb3IgcGxhaW4gSmF2YVNjcmlwdCBvYmplY3RzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNQbGFpbk9iamVjdChvYmopIHtcbiAgICByZXR1cm4gX3RvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgT2JqZWN0XSc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWYob2JqLCBrZXksIHByb3BlcnR5KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCBleHRlbmQoe1xuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSwgcHJvcGVydHkpKTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBjYWNoZWQgdmVyc2lvbiBvZiBhIHB1cmUgZnVuY3Rpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjYWNoZWQoZm4pIHtcbiAgICBjb25zdCBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGNhY2hlZEZuKHN0cikge1xuICAgICAgICBjb25zdCBoaXQgPSBjYWNoZVtzdHJdO1xuICAgICAgICByZXR1cm4gaGl0IHx8IChjYWNoZVtzdHJdID0gZm4oc3RyKSk7XG4gICAgfTtcbn1cblxuLyoqXG4gKiBIeXBoZW5hdGUgYSBjYW1lbENhc2Ugc3RyaW5nLlxuICovXG5jb25zdCBoeXBoZW5hdGVSRSA9IC8oW14tXSkoW0EtWl0pL2c7XG5leHBvcnQgY29uc3QgaHlwaGVuYXRlID0gY2FjaGVkKChzdHIpID0+IHtcbiAgICByZXR1cm4gc3RyXG4gICAgICAgIC5yZXBsYWNlKGh5cGhlbmF0ZVJFLCAnJDEtJDInKVxuICAgICAgICAucmVwbGFjZShoeXBoZW5hdGVSRSwgJyQxLSQyJylcbiAgICAgICAgLnRvTG93ZXJDYXNlKCk7XG59KTtcblxuZXhwb3J0IGNvbnN0IGNhbWVsaXplID0gc3RyID0+IHN0ci5yZXBsYWNlKC8tKFxcdykvZywgKF8sIGMpID0+IChjID8gYy50b1VwcGVyQ2FzZSgpIDogJycpKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fMV9fOyIsIi8qKlxuICogQGZpbGUgc2xvdFxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCB7ZXh0ZW5kfSBmcm9tICcuLi9zaGFyZWQvdXRpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCB7XG4gICAgICAgIHNsb3RDaGlsZHJlbixcbiAgICAgICAgbGlmZUN5Y2xlLFxuICAgICAgICBzb3VyY2VTbG90c1xuICAgIH0gPSB0aGlzO1xuXG4gICAgaWYgKGxpZmVDeWNsZS5hdHRhY2hlZCkge1xuICAgICAgICByZXR1cm4gc2xvdENoaWxkcmVuLnJlZHVjZSgocHJldiwgY2hpbGQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBjaGlsZC5uYW1lIHx8ICdkZWZhdWx0JztcbiAgICAgICAgICAgIGlmICghcHJldltuYW1lXSkge1xuICAgICAgICAgICAgICAgIHByZXZbbmFtZV0gPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByZXZbbmFtZV0gPSBwcmV2W25hbWVdLmNvbmNhdChjaGlsZC5jaGlsZHJlbik7XG4gICAgICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgICAgfSwge30pO1xuICAgIH1cblxuICAgIGNvbnN0IHNsb3RzID0ge307XG5cbiAgICBpZiAoc291cmNlU2xvdHMubmFtZWQpIHtcbiAgICAgICAgZXh0ZW5kKHNsb3RzLCBzb3VyY2VTbG90cy5uYW1lZCk7XG4gICAgfVxuICAgIGlmIChzb3VyY2VTbG90cy5ub25hbWUpIHtcbiAgICAgICAgc2xvdHMuZGVmYXVsdCA9IHNvdXJjZVNsb3RzLm5vbmFtZTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2xvdHM7XG5cbn1cbiIsIi8qKlxuICogQGZpbGUgZW50cnlcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5leHBvcnQge2RlZmF1bHQgYXMgZGVmaW5lQ29tcG9uZW50fSBmcm9tICcuL2RlZmluZS1jb21wb25lbnQnO1xuIiwiLyoqXG4gKiBAZmlsZSBjb21wb25lbnRcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQgJy4vb3ZlcnJpZGUtZGF0YS1nZXQnO1xuXG5pbXBvcnQge2RlZmluZUNvbXBvbmVudCwgaW5oZXJpdHMsIENvbXBvbmVudCwgbmV4dFRpY2t9IGZyb20gJ3Nhbic7XG5pbXBvcnQge2V4dGVuZCwgaHlwaGVuYXRlLCBkZWZ9IGZyb20gJy4uL3NoYXJlZC91dGlsJztcbmltcG9ydCBtZXJnZUNsYXNzIGZyb20gJy4vbWVyZ2UtY2xhc3MnO1xuaW1wb3J0IG1lcmdlU3R5bGUgZnJvbSAnLi9tZXJnZS1zdHlsZSc7XG5pbXBvcnQgbG9vcEV4cHJlc3Npb24gZnJvbSAnLi9sb29wLWV4cHJlc3Npb24nO1xuaW1wb3J0IGdldENvbXBvbmVudFR5cGUgZnJvbSAnLi9nZXQtY29tcG9uZW50LXR5cGUnO1xuaW1wb3J0IG9iamVjdENvbXB1dGVkUHJvcGVydGllcyBmcm9tICcuL29iamVjdC1jb21wdXRlZC1wcm9wZXJ0aXJzJztcbmltcG9ydCByZWYgZnJvbSAnLi9yZWYnO1xuaW1wb3J0IG1lcmdlT3B0aW9ucyBmcm9tICcuL21lcmdlLW9wdGlvbnMnO1xuaW1wb3J0IGJpbmREYXRhIGZyb20gJy4vYmluZC1kYXRhJztcbmltcG9ydCBjYWxjQ29tcHV0ZWQgZnJvbSAnLi9jYWxjLWNvbXB1dGVkJztcbmltcG9ydCBzbG90IGZyb20gJy4vZ2V0LXNsb3RzJztcbmltcG9ydCB7Y2FsbEFjdGl2aXRlZCwgY2FsbERlQWN0aXZpdGVkfSBmcm9tICcuL2NhbGwtYWN0aXZhdGVkLWhvb2snO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBmZWNzLWNhbWVsY2FzZSAqL1xuY29uc3QgZGVmYXVsdFNhbk9wdGlvbnMgPSB7XG4gICAgJGFjdGl2YXRlOiBjYWxsQWN0aXZpdGVkLFxuICAgICRkZWFjdGl2YXRlOiBjYWxsRGVBY3Rpdml0ZWQsXG4gICAgX21jOiBtZXJnZUNsYXNzLFxuICAgIF9tczogbWVyZ2VTdHlsZSxcbiAgICBfbDogbG9vcEV4cHJlc3Npb24sXG4gICAgX2V4OiBleHRlbmQsXG4gICAgX29jcDogb2JqZWN0Q29tcHV0ZWRQcm9wZXJ0aWVzLFxuICAgIF9ub29wOiBmdW5jdGlvbiAoKSB7fSxcbiAgICBnZXRDb21wb25lbnRUeXBlLFxuICAgICRlbWl0OiBDb21wb25lbnQucHJvdG90eXBlLmZpcmUsXG4gICAgJG9uOiBDb21wb25lbnQucHJvdG90eXBlLm9uLFxuICAgICR3YXRjaDogQ29tcG9uZW50LnByb3RvdHlwZS53YXRjaCxcbiAgICAkbmV4dFRpY2s6IG5leHRUaWNrXG59O1xuLyogZXNsaW50LWVuYWJsZSBmZWNzLWNhbWVsY2FzZSAqL1xuXG5jb25zdCBtZW1iZXJNYXAgPSB7XG4gICAgJGVsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbDtcbiAgICB9LFxuICAgICRjb250ZXh0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vd25lcjtcbiAgICB9LFxuICAgICRwYXJlbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmVudENvbXBvbmVudDtcbiAgICB9LFxuICAgICRjaGlsZHJlbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+IGNoaWxkLm5vZGVUeXBlID09PSA1KTtcbiAgICB9LFxuICAgICRyb290KCkge1xuICAgICAgICBsZXQgcm9vdCA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLnBhcmVudENvbXBvbmVudCkge1xuICAgICAgICAgICAgd2hpbGUgKHJvb3QucGFyZW50Q29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgcm9vdCA9IHJvb3QucGFyZW50Q29tcG9uZW50XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgfSxcbiAgICAkc2xvdHM6IHNsb3QsXG4gICAgX2lzRGVzdHJveWVkKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLmxpZmVDeWNsZS5kaXNwb3NlZDtcbiAgICB9XG59O1xuXG5jb25zdCBvcmlnaW5hbFVwZGF0ZSA9IENvbXBvbmVudC5wcm90b3R5cGUuX3VwZGF0ZTtcblxuQ29tcG9uZW50LnByb3RvdHlwZS5fdXBkYXRlID0gZnVuY3Rpb24gKGNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlcykge1xuICAgICAgICB0aGlzLl90b1BoYXNlKCdiZWZvcmVVcGRhdGUnKTtcbiAgICB9XG4gICAgb3JpZ2luYWxVcGRhdGUuY2FsbCh0aGlzLCBjaGFuZ2VzKTtcbn07XG5cbmNvbnN0IGlubmVyS2V5ID0gJ19TYW5DdG9yJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVmaW5lKG9wdGlvbnMpIHtcblxuICAgIGlmIChvcHRpb25zW2lubmVyS2V5XSkge1xuICAgICAgICByZXR1cm4gb3B0aW9uc1tpbm5lcktleV07XG4gICAgfVxuXG4gICAgY29uc3Qgc2FuT3B0aW9ucyA9IGV4dGVuZCh7XG4gICAgICAgIHRlbXBsYXRlOiBvcHRpb25zLl9fc2FudGVtcGxhdGUsXG4gICAgICAgIGFOb2RlOiBvcHRpb25zLl9fc2FuYU5vZGUsXG4gICAgfSwgZGVmYXVsdFNhbk9wdGlvbnMsIG1lcmdlT3B0aW9ucyhvcHRpb25zKSk7XG5cbiAgICBjb25zdCBjb21waWxlZEhvb2sgPSBzYW5PcHRpb25zLmNvbXBpbGVkO1xuICAgIHNhbk9wdGlvbnMuY29tcGlsZWQgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgdGhpcy5faXNTYW4gPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuX2NhbGNDb21wdXRlZCA9IGNhbGNDb21wdXRlZC5iaW5kKHRoaXMpO1xuICAgICAgICBjb21waWxlZEhvb2sgJiYgY29tcGlsZWRIb29rLmNhbGwodGhpcyk7XG5cbiAgICAgICAgY29uc3QgcHJvcGVydGllcyA9IE9iamVjdFxuICAgICAgICAgICAgLmtleXMobWVtYmVyTWFwKVxuICAgICAgICAgICAgLnJlZHVjZSgocHJvcHMsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIHByb3BzW2tleV0gPSB7XG4gICAgICAgICAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtZW1iZXJNYXBba2V5XS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvcHM7XG4gICAgICAgICAgICB9LCB7fSk7XG5cbiAgICAgICAgcHJvcGVydGllcy4kb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHZhbHVlOiBvcHRpb25zXG4gICAgICAgIH07XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywgcHJvcGVydGllcyk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlZnMgPSBvcHRpb25zLl9fc2FuUmVmcztcbiAgICBjb25zdCBpbml0ZWRIb29rID0gc2FuT3B0aW9ucy5pbml0ZWQ7XG4gICAgc2FuT3B0aW9ucy5pbml0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IG1lID0gdGhpcztcbiAgICAgICAgdGhpcy4kcmVmcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbiAgICAgICAgaWYgKHJlZnMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSByZWZzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgciA9IHJlZnNbaV07XG4gICAgICAgICAgICAgICAgZGVmKG1lLiRyZWZzLCByLm5hbWUsIHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHIucm9vdCA/IG1lLmVsIDogbWUucmVmKHIubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIG92ZXJ3cml0ZSBzYW4gY29tcG9uZW50IGFwaSBmb3Igc3VwcG9ydCB2LWZvciArIHJlZlxuICAgICAgICAgICAgbWUucmVmID0gcmVmO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5pdGVkSG9vayAmJiBpbml0ZWRIb29rLmNhbGwodGhpcyk7XG5cbiAgICAgICAgLy8gbWVyZ2UgY3NzIG1vZHVsZXNcbiAgICAgICAgaWYgKHRoaXMuJHN0eWxlKSB7XG4gICAgICAgICAgICBleHRlbmQodGhpcy5kYXRhLnJhdy4kc3R5bGUsIHRoaXMuJHN0eWxlKVxuICAgICAgICB9XG5cbiAgICAgICAgYmluZERhdGEuY2FsbCh0aGlzKTtcblxuICAgICAgICBpZiAob3B0aW9ucy53YXRjaCkge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMob3B0aW9ucy53YXRjaCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMud2F0Y2goa2V5LCBvcHRpb25zLndhdGNoW2tleV0uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLnByZXByb2Nlc3NBTm9kZSkge1xuICAgICAgICAgICAgb3B0aW9ucy5wcmVwcm9jZXNzQU5vZGUuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBiZWZvcmVVcGRhdGVIb29rID0gc2FuT3B0aW9ucy5iZWZvcmVVcGRhdGU7XG4gICAgc2FuT3B0aW9ucy5iZWZvcmVVcGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGJlZm9yZVVwZGF0ZUhvb2sgJiYgYmVmb3JlVXBkYXRlSG9vay5jYWxsKHRoaXMpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLnByZXByb2Nlc3NBTm9kZSkge1xuICAgICAgICAgICAgb3B0aW9ucy5wcmVwcm9jZXNzQU5vZGUuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBzYW5PcHRpb25zLmluaXREYXRhID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGNvbnN0IG1lID0gdGhpcztcblxuICAgICAgICBjb25zdCBkZWZhdWx0UHJvcHMgPSB7fTtcbiAgICAgICAgaWYgKG9wdGlvbnMucHJvcHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb3BLZXlzID0gbWUuX3Byb3BLZXlzID0gb3B0aW9ucy5fcHJvcEtleXMgPSBvcHRpb25zLnByb3BzXG4gICAgICAgICAgICAgICAgPyAoQXJyYXkuaXNBcnJheShvcHRpb25zLnByb3BzKSA/IG9wdGlvbnMucHJvcHMgOiBPYmplY3Qua2V5cyhvcHRpb25zLnByb3BzKSlcbiAgICAgICAgICAgICAgICA6IFtdO1xuXG4gICAgICAgICAgICAvLyDpu5jorqTlsZ7mgKdcbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShvcHRpb25zLnByb3BzKSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBwcm9wS2V5cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwID0gcHJvcEtleXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3AgPSBvcHRpb25zLnByb3BzW3BdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoJ2RlZmF1bHQnIGluIHByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRQcm9wc1twXSA9IHR5cGVvZiBwcm9wLmRlZmF1bHQgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHByb3AuZGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBwcm9wLmRlZmF1bHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBtZS5fcHJvcEtleXMgPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLmNvbXB1dGVkKSB7XG4gICAgICAgICAgICBtZS5fY29tcHV0ZWRLZXlzID0gT2JqZWN0LmtleXMob3B0aW9ucy5jb21wdXRlZCk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gbWUuX2NvbXB1dGVkS2V5czsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgayA9IG1lLl9jb21wdXRlZEtleXNbaV07XG4gICAgICAgICAgICAgICAgZGVmKG1lLCBrLCB7XG4gICAgICAgICAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtZS5kYXRhLmdldChrKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbWUuX2NvbXB1dGVkS2V5cyA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IHR5cGVvZiBvcHRpb25zLmRhdGEgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgID8gb3B0aW9ucy5kYXRhLmNhbGwoZXh0ZW5kKHt9LCBkZWZhdWx0UHJvcHMsIHRoaXMuX3NyY1NiaW5kRGF0YSkpXG4gICAgICAgICAgICA6IChvcHRpb25zLmRhdGEgfHwge30pO1xuXG4gICAgICAgIHRoaXMuX2RhdGFLZXlzID0gT2JqZWN0LmtleXMoZGF0YSkgfHwgW107XG5cbiAgICAgICAgcmV0dXJuIGV4dGVuZCh7JHN0eWxlOiB7fX0sIGRlZmF1bHRQcm9wcywgZGF0YSk7XG4gICAgfTtcblxuICAgIGlmIChvcHRpb25zLmNvbXBvbmVudHMpIHtcbiAgICAgICAgc2FuT3B0aW9ucy5jb21wb25lbnRzID0gT2JqZWN0XG4gICAgICAgICAgICAua2V5cyhvcHRpb25zLmNvbXBvbmVudHMpXG4gICAgICAgICAgICAucmVkdWNlKChwcmV2LCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBvcHRpb25zLmNvbXBvbmVudHNba2V5XTtcbiAgICAgICAgICAgICAgICBwcmV2W2tleV0gPSBwcmV2W2h5cGhlbmF0ZShrZXkpXSA9IGNvbXBvbmVudCBpbnN0YW5jZW9mIENvbXBvbmVudCA/IGNvbXBvbmVudCA6IGRlZmluZShjb21wb25lbnQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgICAgICAgfSwge30pO1xuXG4gICAgICAgIHNhbk9wdGlvbnMuX2NtcHRSZWFkeSA9IDE7XG4gICAgfVxuXG4gICAgY29uc3QgY21wdCA9IGRlZmluZUNvbXBvbmVudChzYW5PcHRpb25zKTtcblxuICAgIHJldHVybiBvcHRpb25zW2lubmVyS2V5XSA9IGNtcHQ7XG59XG5cbiIsIi8qKlxuICogQGZpbGUgb3ZlcnJpZGUgZXZhbCBleHByXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHtEYXRhLCBwYXJzZUV4cHIsIEV4cHJUeXBlLCBldmFsRXhwcn0gZnJvbSAnc2FuJztcblxuY29uc3Qgb3JpZ2luYWxHZXQgPSBEYXRhLnByb3RvdHlwZS5nZXQ7XG5cbkRhdGEucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChleHByLCBjYWxsZWUpIHtcbiAgICBpZiAoZXhwciAmJiB0eXBlb2YgZXhwciAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXhwciA9IHBhcnNlRXhwcihleHByKTtcbiAgICB9XG4gICAgbGV0IHZhbHVlID0gb3JpZ2luYWxHZXQuY2FsbCh0aGlzLCBleHByLCBjYWxsZWUpO1xuICAgIGlmICghZXhwciB8fCB2YWx1ZSAhPT0gdW5kZWZpbmVkIHx8ICF0aGlzLm93bmVyIHx8IGV4cHIudHlwZSAhPT0gRXhwclR5cGUuQUNDRVNTT1IpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBjb25zdCBwYXRocyA9IGV4cHIucGF0aHM7XG4gICAgY29uc3QgZmlyc3QgPSBwYXRoc1swXS52YWx1ZTtcbiAgICBpZiAoXG4gICAgICAgIFtcbiAgICAgICAgICAgIC4uLnRoaXMub3duZXIuX3Byb3BLZXlzLFxuICAgICAgICAgICAgLi4udGhpcy5vd25lci5fZGF0YUtleXMsXG4gICAgICAgICAgICAuLi50aGlzLm93bmVyLl9jb21wdXRlZEtleXNcbiAgICAgICAgXS5pbmRleE9mKGZpcnN0KSA+PSAwXG4gICAgKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgdmFsdWUgPSB0aGlzLm93bmVyW2ZpcnN0XTtcbiAgICBmb3IgKHZhciBpID0gMSwgbCA9IHBhdGhzLmxlbmd0aDsgdmFsdWUgIT0gbnVsbCAmJiBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWVbcGF0aHNbaV0udmFsdWUgfHwgZXZhbEV4cHIocGF0aHNbaV0sIGNhbGxlZSldO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG59O1xuIiwiLyoqXG4gKiBAZmlsZSBtZXJnZSBjbGFzc1xuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmZ1bmN0aW9uIHN0cmluZyhjbHMgPSAnJykge1xuICAgIGlmICghY2xzKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuIGNsc1xuICAgICAgICAuc3BsaXQoJyAnKVxuICAgICAgICAucmVkdWNlKChwcmV2LCBuYW1lKSA9PiB7XG4gICAgICAgICAgICBpZiAoIW5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgICAgICBbbmFtZV06IDFcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sIHt9KTtcbn1cblxuZnVuY3Rpb24gb2JqZWN0KGNscyA9IHt9KSB7XG4gICAgcmV0dXJuIE9iamVjdFxuICAgICAgICAua2V5cyhjbHMpXG4gICAgICAgIC5yZWR1Y2UoKHByZXYsIGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFjbHNba2V5XSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgICAgIC4uLnN0cmluZyhrZXkpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LCB7fSk7XG59XG5cbmZ1bmN0aW9uIGFycmF5KGNscyA9IFtdKSB7XG4gICAgbGV0IGNsYXp6ID0ge307XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGNscy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gY2xzW2ldO1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGNsYXp6ID0ge1xuICAgICAgICAgICAgLi4uY2xhenosXG4gICAgICAgICAgICAuLi4oXG4gICAgICAgICAgICAgICAgdHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgPyBzdHJpbmcoZWxlbWVudClcbiAgICAgICAgICAgICAgICA6IChBcnJheS5pc0FycmF5KGVsZW1lbnQpID8gYXJyYXkoZWxlbWVudCkgOiBvYmplY3QoZWxlbWVudCkpXG4gICAgICAgICAgICApXG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBjbGF6ejtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRpY0NsYXNzID0gJycsIGNscyA9IHt9KSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGFycmF5KFtzdGF0aWNDbGFzcywgY2xzXSkpLmpvaW4oJyAnKTtcbn1cbiIsIi8qKlxuICogQGZpbGUgbWVyZ2Ugc3R5bGVcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQge2NhY2hlZCwgZXh0ZW5kLCB0b09iamVjdH0gZnJvbSAnLi4vc2hhcmVkL3V0aWwnO1xuXG5jb25zdCBwYXJzZVN0eWxlVGV4dCA9IGNhY2hlZChmdW5jdGlvbiAoY3NzVGV4dCkge1xuICAgIGNvbnN0IHJlcyA9IHt9O1xuICAgIGNvbnN0IGxpc3REZWxpbWl0ZXIgPSAvOyg/IVteKF0qXFwpKS9nO1xuICAgIGNvbnN0IHByb3BlcnR5RGVsaW1pdGVyID0gLzooLispLztcbiAgICBjc3NUZXh0LnNwbGl0KGxpc3REZWxpbWl0ZXIpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgIHZhciB0bXAgPSBpdGVtLnNwbGl0KHByb3BlcnR5RGVsaW1pdGVyKTtcbiAgICAgICAgICAgIHRtcC5sZW5ndGggPiAxICYmIChyZXNbdG1wWzBdLnRyaW0oKV0gPSB0bXBbMV0udHJpbSgpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXM7XG59KTtcblxuLy8gbm9ybWFsaXplIHBvc3NpYmxlIGFycmF5IC8gc3RyaW5nIHZhbHVlcyBpbnRvIE9iamVjdFxuZnVuY3Rpb24gbm9ybWFsaXplU3R5bGVCaW5kaW5nKGJpbmRpbmdTdHlsZSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGJpbmRpbmdTdHlsZSkpIHtcbiAgICAgICAgcmV0dXJuIHRvT2JqZWN0KGJpbmRpbmdTdHlsZSk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgYmluZGluZ1N0eWxlID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gcGFyc2VTdHlsZVRleHQoYmluZGluZ1N0eWxlKTtcbiAgICB9XG4gICAgcmV0dXJuIGJpbmRpbmdTdHlsZTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGljU3R5bGUsIHN0eWxlLCB2U2hvdyA9IHRydWUpIHtcbiAgICBzdHlsZSA9IG5vcm1hbGl6ZVN0eWxlQmluZGluZyhzdHlsZSk7XG4gICAgaWYgKCF2U2hvdykge1xuICAgICAgICBzdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgICByZXR1cm4gc3RhdGljU3R5bGVcbiAgICAgICAgPyBleHRlbmQoc3RhdGljU3R5bGUsIHN0eWxlKVxuICAgICAgICA6IHN0eWxlO1xufVxuIiwiLyoqXG4gKiBAZmlsZSBsb29wIGV4cHJlc3Npb25cbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQge2NhY2hlZH0gZnJvbSAnLi4vc2hhcmVkL3V0aWwnO1xuXG5jb25zdCB0b0FycmF5ID0gY2FjaGVkKGZ1bmN0aW9uIChuKSB7XG4gICAgY29uc3QgdmFsdWUgPSBuZXcgQXJyYXkobik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgdmFsdWVbaV0gPSBpICsgMTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICghaXNOYU4odmFsdWUpKSB7XG4gICAgICAgIGNvbnN0IG4gPSArdmFsdWU7XG4gICAgICAgIHZhbHVlID0gdG9BcnJheShuKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuXG4iLCIvKipcbiAqIEBmaWxlIGdldCBjb21wb25lbnQgdHlwZVxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCB7ZXZhbEV4cHJ9IGZyb20gJ3Nhbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChhTm9kZSwgZGF0YSkge1xuICAgIGlmIChhTm9kZS50YWdOYW1lICE9PSAnY29tcG9uZW50JyB8fCBhTm9kZS5ob3RzcG90LnByb3BzLmlzID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50c1thTm9kZS50YWdOYW1lXTtcbiAgICB9XG5cbiAgICBjb25zdCBpcyA9IGFOb2RlLnByb3BzW2FOb2RlLmhvdHNwb3QucHJvcHMuaXNdO1xuICAgIGNvbnN0IGlzVmFsdWUgPSBldmFsRXhwcihpcy5leHByLCBkYXRhKTtcbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnRzW2lzVmFsdWVdO1xufVxuIiwiLyoqXG4gKiBAZmlsZSBvYmplY3QgY29tcHV0ZWQgcHJvcGVydGllcyBtZXJnZVxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwcm9wZXJ0aWVzKSB7XG4gICAgcmV0dXJuIHByb3BlcnRpZXMucmVkdWNlKChwcmV2LCB7aywgdn0pID0+IHtcbiAgICAgICAgcHJldltrXSA9IHY7XG4gICAgICAgIHJldHVybiBwcmV2O1xuICAgIH0sIHt9KTtcbn1cbiIsIi8qKlxuICogQGZpbGUgc2FuIHJlZiByZXdyaXRlXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0ICogYXMgc2FuIGZyb20gJ3Nhbic7XG5pbXBvcnQge2NhbWVsaXplfSBmcm9tICcuLi9zaGFyZWQvdXRpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChuYW1lKSB7XG5cbiAgICBjb25zdCBvd25lciA9IHRoaXM7XG5cbiAgICBmdW5jdGlvbiBjaGlsZHJlblRyYXZlcnNhbChjaGlsZHJlbikge1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGxldCByZWZUYXJnZXQgPSBlbGVtZW50VHJhdmVyc2FsKGNoaWxkcmVuW2ldKTtcbiAgICAgICAgICAgIGlmIChyZWZUYXJnZXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVmVGFyZ2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZWxlbWVudFRyYXZlcnNhbChlbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IG5vZGVUeXBlID0gZWxlbWVudC5ub2RlVHlwZTtcbiAgICAgICAgaWYgKG5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlZlRhcmdldDtcbiAgICAgICAgaWYgKGVsZW1lbnQub3duZXIgPT09IG93bmVyKSB7XG4gICAgICAgICAgICBsZXQgcmVmO1xuICAgICAgICAgICAgbGV0IHZhbHVlO1xuICAgICAgICAgICAgc3dpdGNoIChub2RlVHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIHJlZiA9IGVsZW1lbnQuYU5vZGUuZGlyZWN0aXZlcy5yZWY7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gc2FuLmV2YWxFeHByKHJlZi52YWx1ZSwgZWxlbWVudC5zY29wZSwgb3duZXIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVmICYmICh2YWx1ZSA9PT0gbmFtZSB8fCBjYW1lbGl6ZSh2YWx1ZSkgPT09IG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbm9kZVR5cGUgPT09IDQgPyBlbGVtZW50LmVsIDogZWxlbWVudC5jaGlsZHJlbi5tYXAoZWxlbWVudFRyYXZlcnNhbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgIHJlZiA9IGVsZW1lbnQuc291cmNlLmRpcmVjdGl2ZXMucmVmO1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHNhbi5ldmFsRXhwcihyZWYudmFsdWUsIGVsZW1lbnQuc2NvcGUsIG93bmVyKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlZiAmJiAodmFsdWUgPT09IG5hbWUgfHwgY2FtZWxpemUodmFsdWUpID09PSBuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVmVGFyZ2V0ID0gZWxlbWVudC5zbG90Q2hpbGRyZW4gJiYgY2hpbGRyZW5UcmF2ZXJzYWwoZWxlbWVudC5zbG90Q2hpbGRyZW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlZlRhcmdldCB8fCBjaGlsZHJlblRyYXZlcnNhbChlbGVtZW50LmNoaWxkcmVuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGRyZW5UcmF2ZXJzYWwodGhpcy5jaGlsZHJlbik7XG59O1xuIiwiLyoqXG4gKiBAZmlsZSBtZXJnZSBvcHRpb25zXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHtleHRlbmR9IGZyb20gJy4uL3NoYXJlZC91dGlsJztcbmltcG9ydCB7bGlmZUN5Y2xlS2V5cywgbGlmZUN5Y2xlTWFwfSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCBhdG9tQnVpbGRJbk1peGluIGZyb20gJy4vYXRvbS1nbG9iYWwtYXBpJztcblxuY29uc3Qga2V5cyA9IFtcbiAgICAnZmlsdGVycycsXG4gICAgJ2NvbXB1dGVkJ1xuXTtcblxuZnVuY3Rpb24gbWVyZ2VIb29rKHBhcmVudFZhbCwgY2hpbGRWYWwpIHtcbiAgICByZXR1cm4gY2hpbGRWYWxcbiAgICAgICAgPyBwYXJlbnRWYWxcbiAgICAgICAgICAgID8gcGFyZW50VmFsLmNvbmNhdChjaGlsZFZhbClcbiAgICAgICAgICAgIDogQXJyYXkuaXNBcnJheShjaGlsZFZhbClcbiAgICAgICAgICAgICAgICA/IGNoaWxkVmFsXG4gICAgICAgICAgICAgICAgOiBbY2hpbGRWYWxdXG4gICAgICAgICAgICA6IHBhcmVudFZhbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVyZ2VPcHRpb25zKG9wdGlvbnMpIHtcbiAgICBjb25zdCBkZXN0T3B0aW9ucyA9IHt9O1xuICAgIGNvbnN0IGxpc3QgPSBBcnJheS5pc0FycmF5KG9wdGlvbnMubWl4aW5zKVxuICAgICAgICA/IFthdG9tQnVpbGRJbk1peGluLCAuLi5vcHRpb25zLm1peGlucywgb3B0aW9uc11cbiAgICAgICAgOiBbYXRvbUJ1aWxkSW5NaXhpbiwgb3B0aW9uc107XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGxpc3QubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgY29uc3Qgb3B0ID0gbGlzdFtpXTtcbiAgICAgICAgb3B0Lm1ldGhvZHMgJiYgZXh0ZW5kKGRlc3RPcHRpb25zLCBvcHQubWV0aG9kcyk7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwga2V5cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgY29uc3QgayA9IGtleXNbal07XG4gICAgICAgICAgICBpZiAob3B0W2tdKSB7XG4gICAgICAgICAgICAgICAgZGVzdE9wdGlvbnNba10gPSBleHRlbmQoZGVzdE9wdGlvbnNba10gfHwge30sIG9wdFtrXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsaWZlQ3ljbGVLZXlzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCBrID0gbGlmZUN5Y2xlS2V5c1tqXTtcbiAgICAgICAgICAgIGNvbnN0IGRrID0gbGlmZUN5Y2xlTWFwW2tdO1xuICAgICAgICAgICAgaWYgKG9wdFtrXSkge1xuICAgICAgICAgICAgICAgIGRlc3RPcHRpb25zW2RrXSA9IG1lcmdlSG9vayhkZXN0T3B0aW9uc1tka10gfHwgW10sIG9wdFtrXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBsaWZlQ3ljbGVLZXlzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGNvbnN0IGsgPSBsaWZlQ3ljbGVLZXlzW2pdO1xuICAgICAgICBjb25zdCBkayA9IGxpZmVDeWNsZU1hcFtrXTtcbiAgICAgICAgaWYgKGRlc3RPcHRpb25zW2RrXSkge1xuICAgICAgICAgICAgY29uc3QgaG9va3MgPSBkZXN0T3B0aW9uc1tka10uc2xpY2UoKTtcbiAgICAgICAgICAgIGRlc3RPcHRpb25zW2RrXSA9IGhvb2tzLmxlbmd0aCA9PT0gMSA/IGhvb2tzWzBdIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGhvb2tzLmZvckVhY2goaG9vayA9PiBob29rLmNhbGwodGhpcyksIHRoaXMpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAob3B0aW9ucy5tZXNzYWdlcykge1xuICAgICAgICBkZXN0T3B0aW9ucy5tZXNzYWdlcyA9IG9wdGlvbnMubWVzc2FnZXM7XG4gICAgfVxuICAgIHJldHVybiBkZXN0T3B0aW9ucztcbn1cbiIsIi8qKlxuICogQGZpbGUgY29uc3RhbnRzXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuZXhwb3J0IGNvbnN0IGxpZmVDeWNsZU1hcCA9IHtcbiAgICBiZWZvcmVDcmVhdGU6ICdjb21waWxlZCcsXG4gICAgbW91bnRlZDogJ2F0dGFjaGVkJyxcbiAgICBjcmVhdGVkOiAnaW5pdGVkJyxcbiAgICBiZWZvcmVNb3VudDogJ2NyZWF0ZWQnLFxuICAgIGJlZm9yZURlc3Ryb3k6ICdkZXRhY2hlZCcsXG4gICAgZGVzdHJveTogJ2Rpc3Bvc2VkJyxcbiAgICB1cGRhdGVkOiAndXBkYXRlZCcsXG4gICAgYmVmb3JlVXBkYXRlOiAnYmVmb3JlVXBkYXRlJyxcbiAgICBhY3RpdmF0ZWQ6ICdhY3RpdmF0ZWQnLFxuICAgIGRlYWN0aXZhdGVkOiAnZGVhY3RpdmF0ZWQnXG59O1xuXG5leHBvcnQgY29uc3QgbGlmZUN5Y2xlS2V5cyA9IE9iamVjdC5rZXlzKGxpZmVDeWNsZU1hcCk7XG4iLCIvKipcbiAqIEBmaWxlIOWFqOWxgOeUn+aViOeahOWHveaVsFxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmNvbnN0IE1BVEhfTUVUSE9EID0gW1xuICAgICdmbG9vcicsICdjZWlsJywgJ3JvdW5kJyxcbiAgICAnYWJzJywgJ21heCcsICdtaW4nLCAncG93J1xuXTtcblxuY29uc3QgbWV0aG9kcyA9IGV4cG9ydHMubWV0aG9kcyA9IHt9O1xuXG5NQVRIX01FVEhPRC5mb3JFYWNoKG5hbWUgPT4ge1xuICAgIG1ldGhvZHNbYG1hdGhfJHtuYW1lfWBdID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIE1hdGhbbmFtZV0uYXBwbHkoTWF0aCwgYXJncyk7XG4gICAgfTtcbn0pO1xuXG5tZXRob2RzLmFycmF5X3NsaWNlID0gZnVuY3Rpb24gKGFyciwgc3RhcnQsIGxlbikge1xuICAgIHZhciBlbmQgPSBsZW4gPT0gbnVsbCA/IHZvaWQgMCA6IChsZW4gPj0gMCA/IChzdGFydCArIGxlbikgOiAoYXJyLmxlbmd0aCArIGxlbikpO1xuICAgIHJldHVybiBhcnIuc2xpY2Uoc3RhcnQsIGVuZCk7XG59O1xuXG5tZXRob2RzLmFycmF5X2pvaW4gPSBmdW5jdGlvbiAoYXJyLCBzZXApIHtcbiAgICByZXR1cm4gYXJyLmpvaW4oc2VwKTtcbn07XG5cbm1ldGhvZHMuc3RyX3BvcyA9IGZ1bmN0aW9uIChzdHIsIG1hdGNoKSB7XG4gICAgcmV0dXJuIHN0ci5pbmRleE9mKG1hdGNoKTtcbn07XG5cbm1ldGhvZHMub2JqZWN0X2ZyZWV6ZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gT2JqZWN0LmZyZWV6ZShvYmopO1xufTtcblxuZXhwb3J0cy5maWx0ZXJzID0ge1xuICAgIGpzb24ob2JqKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShqc29uKTtcbiAgICB9LFxuICAgIGxvd2VyKHN0cikge1xuICAgICAgICByZXR1cm4gc3RyLnRvTG93ZXJDYXNlKCk7XG4gICAgfSxcbiAgICB1cHBlcihzdHIpIHtcbiAgICAgICAgcmV0dXJuIHN0ci50b1VwcGVyQ2FzZSgpO1xuICAgIH1cbn07XG4iLCIvKipcbiAqIEBmaWxlIOaVsOaNrue7keWumlxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCB7aXNPYmplY3QsIGhhc093biwgaXNQbGFpbk9iamVjdCwgZXh0ZW5kLCBkZWZ9IGZyb20gJy4uL3NoYXJlZC91dGlsJztcbmltcG9ydCB7RXhwclR5cGV9IGZyb20gJ3Nhbic7XG5cbmNvbnN0IGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5jb25zdCBhcnJheU1ldGhvZHMgPSBPYmplY3QuY3JlYXRlKGFycmF5UHJvdG8pO1xuXG5jb25zdCBtZXRob2RzVG9QYXRjaCA9IFtcbiAgICAncHVzaCcsXG4gICAgJ3BvcCcsXG4gICAgJ3NoaWZ0JyxcbiAgICAndW5zaGlmdCcsXG4gICAgJ3NwbGljZSdcbiAgICAvLyAnc29ydCcsXG4gICAgLy8gJ3JldmVyc2UnXG5dO1xuXG4vKipcbiAqIEludGVyY2VwdCBtdXRhdGluZyBtZXRob2RzIGFuZCBlbWl0IGV2ZW50c1xuICovXG5tZXRob2RzVG9QYXRjaC5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICAvLyBjYWNoZSBvcmlnaW5hbCBtZXRob2RcbiAgICBjb25zdCBvcmlnaW5hbCA9IGFycmF5UHJvdG9bbWV0aG9kXVxuICAgIGRlZihhcnJheU1ldGhvZHMsIG1ldGhvZCwge1xuICAgICAgICB2YWx1ZSguLi5hcmdzKSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgICAgIGNvbnN0IG9iID0gdGhpcy5fX29iX187XG4gICAgICAgICAgICBsZXQgaW5zZXJ0ZWQ7XG4gICAgICAgICAgICBzd2l0Y2ggKG1ldGhvZCkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3B1c2gnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ3Vuc2hpZnQnOlxuICAgICAgICAgICAgICAgICAgICBpbnNlcnRlZCA9IGFyZ3M7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3NwbGljZSc6XG4gICAgICAgICAgICAgICAgICAgIGluc2VydGVkID0gYXJncy5zbGljZSgyKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaW5zZXJ0ZWQpIHtcbiAgICAgICAgICAgICAgICBvYi5vYnNlcnZlQXJyYXkoaW5zZXJ0ZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb2IuY29udGV4dC5kYXRhW21ldGhvZF0uY2FsbChvYi5jb250ZXh0LmRhdGEsIG9iLmV4cHIsIC4uLmFyZ3MpO1xuICAgICAgICAgICAgb2JzZXJ2ZShvYi5jb250ZXh0LmRhdGEuZ2V0KG9iLmV4cHIpLCBvYi5leHByLCBvYi5jb250ZXh0KTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICB9KVxufSk7XG5cbmNsYXNzIE9ic2VydmVyIHtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlLCBleHByLCBjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuZXhwciA9IGV4cHI7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIGRlZih2YWx1ZSwgJ19fb2JfXycsIHtcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlLl9fcHJvdG9fXyA9IGFycmF5TWV0aG9kcztcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZUFycmF5KHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMua2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKSB8fCBbXTtcbiAgICAgICAgICAgIHRoaXMud2Fsayh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXYWxrIHRocm91Z2ggYWxsIHByb3BlcnRpZXMgYW5kIGNvbnZlcnQgdGhlbSBpbnRvXG4gICAgICogZ2V0dGVyL3NldHRlcnMuIFRoaXMgbWV0aG9kIHNob3VsZCBvbmx5IGJlIGNhbGxlZCB3aGVuXG4gICAgICogdmFsdWUgdHlwZSBpcyBPYmplY3QuXG4gICAgICovXG4gICAgd2FsayhvYmopIHtcbiAgICAgICAgY29uc3Qga2V5cyA9IHRoaXMua2V5cztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBkZWZpbmVSZWFjdGl2ZShvYmosIGtleXNbaV0sIHRoaXMuZXhwciwgdGhpcy5jb250ZXh0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9ic2VydmUgYSBsaXN0IG9mIEFycmF5IGl0ZW1zLlxuICAgICAqL1xuICAgIG9ic2VydmVBcnJheShpdGVtcykge1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGl0ZW1zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgb2JzZXJ2ZShpdGVtc1tpXSwgZXh0ZW5kKHt9LCB0aGlzLmV4cHIsIHtcbiAgICAgICAgICAgICAgICBwYXRoczogWy4uLnRoaXMuZXhwci5wYXRocywge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBFeHByVHlwZS5OVU1CRVIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBpXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0pLCB0aGlzLmNvbnRleHQpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkZWZpbmVSZWFjdGl2ZShvYmosIGtleSwgZXhwciwgY29udGV4dCkge1xuXG4gICAgY29uc3QgcHJvcGVydHkgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KTtcbiAgICBpZiAocHJvcGVydHkgJiYgcHJvcGVydHkuY29uZmlndXJhYmxlID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gY2F0ZXIgZm9yIHByZS1kZWZpbmVkIGdldHRlci9zZXR0ZXJzXG4gICAgY29uc3QgZ2V0dGVyID0gcHJvcGVydHkgJiYgcHJvcGVydHkuZ2V0O1xuICAgIGNvbnN0IHNldHRlciA9IHByb3BlcnR5ICYmIHByb3BlcnR5LnNldDtcblxuICAgIGNvbnN0IGtleUV4cHIgPSB7XG4gICAgICAgIHR5cGU6IEV4cHJUeXBlLkFDQ0VTU09SLFxuICAgICAgICBwYXRoczogWy4uLmV4cHIucGF0aHMsIHtcbiAgICAgICAgICAgIHR5cGU6IEV4cHJUeXBlLlNUUklORyxcbiAgICAgICAgICAgIHZhbHVlOiBrZXlcbiAgICAgICAgfV1cbiAgICB9O1xuXG4gICAgbGV0IHZhbCA9IG9ialtrZXldO1xuICAgIG9ic2VydmUodmFsLCBrZXlFeHByLCBjb250ZXh0KTtcbiAgICBjb25zdCBuZXdQcm9wZXJ0eSA9IHtcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBzZXQobmV3VmFsKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGdldHRlciA/IGdldHRlci5jYWxsKG9iaikgOiB2YWw7XG4gICAgICAgICAgICBpZiAobmV3VmFsID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChnZXR0ZXIgJiYgIXNldHRlcikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzZXR0ZXIpIHtcbiAgICAgICAgICAgICAgICBzZXR0ZXIuY2FsbChvYmosIG5ld1ZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWwgPSBuZXdWYWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvYnNlcnZlKG5ld1ZhbCwga2V5RXhwciwgY29udGV4dCk7XG4gICAgICAgICAgICBjb250ZXh0LmRhdGEuc2V0KGtleUV4cHIsIG5ld1ZhbCwge2ZvcmNlOiB0cnVlfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZ2V0dGVyID8gZ2V0dGVyLmNhbGwob2JqKSA6IHZhbDtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZGVmKG9iaiwga2V5LCBuZXdQcm9wZXJ0eSk7XG59XG5cbmNvbnN0IGRlZmF1bHRFeHByID0ge1xuICAgIHR5cGU6IEV4cHJUeXBlLkFDQ0VTU09SLFxuICAgIHBhdGhzOiBbXVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGV4cHIgPSBleHRlbmQoe30sIGRlZmF1bHRFeHByKTtcbiAgICBjb25zdCBrZXlzID0gWy4uLnRoaXMuX2RhdGFLZXlzLCAuLi50aGlzLl9wcm9wS2V5c107XG4gICAgY29uc3Qga2V5TGVuZ3RoID0ga2V5cy5sZW5ndGg7XG5cbiAgICBvYnNlcnZlKHRoaXMuZGF0YS5nZXQoKSwgZXhwciwgdGhpcyk7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcztcblxuICAgIHRoaXMuX2RhdGEgPSB0aGlzLmRhdGEuZ2V0KCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleUxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IGtleXNbaV07XG4gICAgICAgIGRlZihjb250ZXh0LCBrZXksIHtcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGV4dC5fZGF0YVtrZXldO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldChuZXdWYWwpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0Ll9kYXRhW2tleV0gPSBuZXdWYWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuZGF0YS5vd25lciA9IHRoaXM7XG59XG5cbmZ1bmN0aW9uIG9ic2VydmUodmFsdWUsIGV4cHIsIGNvbnRleHQpIHtcbiAgICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBvYjtcbiAgICBpZiAoaGFzT3duKHZhbHVlLCAnX19vYl9fJykgJiYgdmFsdWUuX19vYl9fIGluc3RhbmNlb2YgT2JzZXJ2ZXIpIHtcbiAgICAgICAgb2IgPSB2YWx1ZS5fX29iX19cbiAgICB9XG4gICAgZWxzZSBpZiAoXG4gICAgICAgIChBcnJheS5pc0FycmF5KHZhbHVlKSB8fCBpc1BsYWluT2JqZWN0KHZhbHVlKSlcbiAgICAgICAgJiYgT2JqZWN0LmlzRXh0ZW5zaWJsZSh2YWx1ZSlcbiAgICApIHtcbiAgICAgICAgb2IgPSBuZXcgT2JzZXJ2ZXIodmFsdWUsIGV4cHIsIGNvbnRleHQpO1xuICAgIH1cbiAgICByZXR1cm4gb2I7XG59XG4iLCIvKipcbiAqIEBmaWxlIOimhuebliBzYW4g5Y6f55Sf55qEIF9jYWxjQ29tcHV0ZWRcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQge2RlZn0gZnJvbSAnLi4vc2hhcmVkL3V0aWwnO1xuaW1wb3J0IHNsb3RzIGZyb20gJy4vZ2V0LXNsb3RzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGtleSkge1xuICAgIGxldCBjb21wdXRlZERlcHMgPSB0aGlzLmNvbXB1dGVkRGVwc1trZXldO1xuICAgIGlmICghY29tcHV0ZWREZXBzKSB7XG4gICAgICAgIGNvbXB1dGVkRGVwcyA9IHRoaXMuY29tcHV0ZWREZXBzW2tleV0gPSB7fTtcbiAgICB9XG5cbiAgICBjb25zdCBtZSA9IHRoaXM7XG4gICAgY29uc3QgZGF0YSA9IG1lLmRhdGEuZ2V0KCk7XG4gICAgY29uc3QgY29udGV4dCA9IHt9O1xuXG4gICAgZGVmKGNvbnRleHQsICckcm9vdCcsIHtcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIG1lLiRyb290O1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBkZWYoY29udGV4dCwgJyRzbG90cycsIHtcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHNsb3RzLmNhbGwobWUpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZGF0YSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgayA9IGtleXNbaV07XG4gICAgICAgIGRlZihjb250ZXh0LCBrLCB7XG4gICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFjb21wdXRlZERlcHNba10pIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcHV0ZWREZXBzW2tdID0gMTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAobWUuY29tcHV0ZWRba10gJiYgIW1lLmNvbXB1dGVkRGVwc1trXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWUuX2NhbGNDb21wdXRlZChrKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIG1lLndhdGNoKGssIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLl9jYWxjQ29tcHV0ZWQoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lLmRhdGEuZ2V0KGspO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmRhdGEuc2V0KGtleSwgdGhpcy5jb21wdXRlZFtrZXldLmNhbGwoY29udGV4dCkpO1xufVxuIiwiLyoqXG4gKiBAZmlsZSBjYWxsIGFjdGl2YXRlZCBkZWFjdGl2YXRlZFxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCB7Tm9kZVR5cGV9IGZyb20gJ3Nhbic7XG5cbmZ1bmN0aW9uIGNyZWF0ZUNhbGxGYWN0b3J5KG5hbWUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gY2FsbChkaXJlY3QpIHtcbiAgICAgICAgY29uc3QgZWxlID0gdGhpcztcbiAgICAgICAgaWYgKGVsZS5ub2RlVHlwZSA9PT0gTm9kZVR5cGUuQ01QVCkge1xuICAgICAgICAgICAgZWxlLl90b1BoYXNlKG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbGUuY2hpbGRyZW4gJiYgZWxlLmNoaWxkcmVuLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGVsZS5jaGlsZHJlbi5mb3JFYWNoKGNhbGwpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgY2FsbEFjdGl2aXRlZCA9IGNyZWF0ZUNhbGxGYWN0b3J5KCdhY3Rpdml0ZWQnKTtcbmV4cG9ydCBjb25zdCBjYWxsRGVBY3Rpdml0ZWQgPSBjcmVhdGVDYWxsRmFjdG9yeSgnZGVhY3Rpdml0ZWQnKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=