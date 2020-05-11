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

var _transition = _interopRequireDefault(__webpack_require__(18));

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
      prev[key] = prev[(0, _util.hyphenate)(key)] = component instanceof _san.Component ? component : component.template || component.aNode ? (0, _san.defineComponent)(component) : define(component);
      return prev;
    }, {});
  }

  sanOptions._cmptReady = 1;
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
          value = ref && san.evalExpr(ref.value, element.scope, owner);

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

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default(options) {
  return {
    enter: enter,
    leave: leave
  };

  function enter(el, done) {
    console.log('enter');
    done();
  }

  function leave(el, done) {
    console.log('leave');
    done();
  }
}

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3V0aWwuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2FuXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvZ2V0LXNsb3RzLmpzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lL2RlZmluZS1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvb3ZlcnJpZGUtZGF0YS1nZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvbWVyZ2UtY2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvbWVyZ2Utc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvbG9vcC1leHByZXNzaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lL2dldC1jb21wb25lbnQtdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcnVudGltZS9vYmplY3QtY29tcHV0ZWQtcHJvcGVydGlycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcnVudGltZS9yZWYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvbWVyZ2Utb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcnVudGltZS9jb25zdGFudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcnVudGltZS9hdG9tLWdsb2JhbC1hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvYmluZC1kYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lL2NhbGMtY29tcHV0ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvY2FsbC1hY3RpdmF0ZWQtaG9vay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcnVudGltZS90cmFuc2l0aW9uLmpzIl0sIm5hbWVzIjpbImV4dGVuZCIsIk9iamVjdCIsImFzc2lnbiIsInRvT2JqZWN0IiwiYXJyIiwicmVzIiwiaSIsImxlbmd0aCIsIl90b1N0cmluZyIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiaXNPYmplY3QiLCJvYmoiLCJoYXNPd25Qcm9wZXJ0eSIsImhhc093biIsImtleSIsImNhbGwiLCJpc1BsYWluT2JqZWN0IiwiZGVmIiwicHJvcGVydHkiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJjYWNoZWQiLCJmbiIsImNhY2hlIiwiY3JlYXRlIiwiY2FjaGVkRm4iLCJzdHIiLCJoaXQiLCJoeXBoZW5hdGVSRSIsImh5cGhlbmF0ZSIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsImNhbWVsaXplIiwiXyIsImMiLCJ0b1VwcGVyQ2FzZSIsInNsb3RDaGlsZHJlbiIsImxpZmVDeWNsZSIsInNvdXJjZVNsb3RzIiwiYXR0YWNoZWQiLCJyZWR1Y2UiLCJwcmV2IiwiY2hpbGQiLCJuYW1lIiwiY29uY2F0IiwiY2hpbGRyZW4iLCJzbG90cyIsIm5hbWVkIiwibm9uYW1lIiwiZGVmYXVsdCIsImRlZmF1bHRTYW5PcHRpb25zIiwiJGFjdGl2YXRlIiwiY2FsbEFjdGl2aXRlZCIsIiRkZWFjdGl2YXRlIiwiY2FsbERlQWN0aXZpdGVkIiwiX21jIiwibWVyZ2VDbGFzcyIsIl9tcyIsIm1lcmdlU3R5bGUiLCJfbCIsImxvb3BFeHByZXNzaW9uIiwiX2V4IiwiX29jcCIsIm9iamVjdENvbXB1dGVkUHJvcGVydGllcyIsIl9ub29wIiwiX3QiLCJUcmFuc2l0aW9uIiwiZ2V0Q29tcG9uZW50VHlwZSIsIiRlbWl0IiwiQ29tcG9uZW50IiwiZmlyZSIsIiRvbiIsIm9uIiwiJHdhdGNoIiwid2F0Y2giLCIkbmV4dFRpY2siLCJuZXh0VGljayIsIm1lbWJlck1hcCIsIiRlbCIsImVsIiwiJGNvbnRleHQiLCJvd25lciIsIiRwYXJlbnQiLCJwYXJlbnRDb21wb25lbnQiLCIkY2hpbGRyZW4iLCJmaWx0ZXIiLCJub2RlVHlwZSIsIiRyb290Iiwicm9vdCIsIiRzbG90cyIsInNsb3QiLCJfaXNEZXN0cm95ZWQiLCJkaXNwb3NlZCIsIm9yaWdpbmFsVXBkYXRlIiwiX3VwZGF0ZSIsImNoYW5nZXMiLCJfdG9QaGFzZSIsImlubmVyS2V5IiwiZGVmaW5lIiwib3B0aW9ucyIsInNhbk9wdGlvbnMiLCJ0ZW1wbGF0ZSIsIl9fc2FudGVtcGxhdGUiLCJhTm9kZSIsIl9fc2FuYU5vZGUiLCJfaXNTYW4iLCJjb21waWxlZEhvb2siLCJjb21waWxlZCIsIl9jYWxjQ29tcHV0ZWQiLCJjYWxjQ29tcHV0ZWQiLCJiaW5kIiwicHJvcGVydGllcyIsImtleXMiLCJwcm9wcyIsImdldCIsIiRvcHRpb25zIiwidmFsdWUiLCJkZWZpbmVQcm9wZXJ0aWVzIiwicmVmcyIsIl9fc2FuUmVmcyIsImluaXRlZEhvb2siLCJpbml0ZWQiLCJtZSIsIiRyZWZzIiwibGVuIiwiciIsInJlZiIsIiRzdHlsZSIsImRhdGEiLCJyYXciLCJiaW5kRGF0YSIsImZvckVhY2giLCJwcmVwcm9jZXNzQU5vZGUiLCJiZWZvcmVVcGRhdGVIb29rIiwiYmVmb3JlVXBkYXRlIiwiaW5pdERhdGEiLCJkZWZhdWx0UHJvcHMiLCJwcm9wS2V5cyIsIl9wcm9wS2V5cyIsIkFycmF5IiwiaXNBcnJheSIsInAiLCJwcm9wIiwiY29tcHV0ZWQiLCJfY29tcHV0ZWRLZXlzIiwiayIsIl9zcmNTYmluZERhdGEiLCJfZGF0YUtleXMiLCJjb21wb25lbnRzIiwiY29tcG9uZW50IiwiX2NtcHRSZWFkeSIsImNtcHQiLCJvcmlnaW5hbEdldCIsIkRhdGEiLCJleHByIiwiY2FsbGVlIiwidW5kZWZpbmVkIiwidHlwZSIsIkV4cHJUeXBlIiwiQUNDRVNTT1IiLCJwYXRocyIsImZpcnN0IiwiaW5kZXhPZiIsImwiLCJzdHJpbmciLCJjbHMiLCJzcGxpdCIsIm9iamVjdCIsImFycmF5IiwiY2xhenoiLCJlbGVtZW50Iiwic3RhdGljQ2xhc3MiLCJqb2luIiwicGFyc2VTdHlsZVRleHQiLCJjc3NUZXh0IiwibGlzdERlbGltaXRlciIsInByb3BlcnR5RGVsaW1pdGVyIiwiaXRlbSIsInRtcCIsInRyaW0iLCJub3JtYWxpemVTdHlsZUJpbmRpbmciLCJiaW5kaW5nU3R5bGUiLCJzdGF0aWNTdHlsZSIsInN0eWxlIiwidlNob3ciLCJkaXNwbGF5IiwidG9BcnJheSIsIm4iLCJpc05hTiIsInRhZ05hbWUiLCJob3RzcG90IiwiaXMiLCJpc1ZhbHVlIiwidiIsImNoaWxkcmVuVHJhdmVyc2FsIiwicmVmVGFyZ2V0IiwiZWxlbWVudFRyYXZlcnNhbCIsImRpcmVjdGl2ZXMiLCJzYW4iLCJldmFsRXhwciIsInNjb3BlIiwibWFwIiwic291cmNlIiwibWVyZ2VIb29rIiwicGFyZW50VmFsIiwiY2hpbGRWYWwiLCJtZXJnZU9wdGlvbnMiLCJkZXN0T3B0aW9ucyIsImxpc3QiLCJtaXhpbnMiLCJhdG9tQnVpbGRJbk1peGluIiwib3B0IiwibWV0aG9kcyIsImoiLCJsaWZlQ3ljbGVLZXlzIiwiZGsiLCJsaWZlQ3ljbGVNYXAiLCJob29rcyIsInNsaWNlIiwiaG9vayIsIm1lc3NhZ2VzIiwiYmVmb3JlQ3JlYXRlIiwibW91bnRlZCIsImNyZWF0ZWQiLCJiZWZvcmVNb3VudCIsImJlZm9yZURlc3Ryb3kiLCJkZXN0cm95IiwidXBkYXRlZCIsImFjdGl2YXRlZCIsImRlYWN0aXZhdGVkIiwiTUFUSF9NRVRIT0QiLCJleHBvcnRzIiwiYXJncyIsIk1hdGgiLCJhcHBseSIsImFycmF5X3NsaWNlIiwic3RhcnQiLCJlbmQiLCJhcnJheV9qb2luIiwic2VwIiwic3RyX3BvcyIsIm1hdGNoIiwib2JqZWN0X2ZyZWV6ZSIsImZyZWV6ZSIsImZpbHRlcnMiLCJqc29uIiwiSlNPTiIsInN0cmluZ2lmeSIsImxvd2VyIiwidXBwZXIiLCJhcnJheVByb3RvIiwiYXJyYXlNZXRob2RzIiwibWV0aG9kc1RvUGF0Y2giLCJtZXRob2QiLCJvcmlnaW5hbCIsInJlc3VsdCIsIm9iIiwiX19vYl9fIiwiaW5zZXJ0ZWQiLCJvYnNlcnZlQXJyYXkiLCJjb250ZXh0Iiwib2JzZXJ2ZSIsIk9ic2VydmVyIiwiX19wcm90b19fIiwid2FsayIsImRlZmluZVJlYWN0aXZlIiwiaXRlbXMiLCJOVU1CRVIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJnZXR0ZXIiLCJzZXR0ZXIiLCJzZXQiLCJrZXlFeHByIiwiU1RSSU5HIiwidmFsIiwibmV3UHJvcGVydHkiLCJuZXdWYWwiLCJmb3JjZSIsImRlZmF1bHRFeHByIiwia2V5TGVuZ3RoIiwiX2RhdGEiLCJpc0V4dGVuc2libGUiLCJjb21wdXRlZERlcHMiLCJjcmVhdGVDYWxsRmFjdG9yeSIsImRpcmVjdCIsImVsZSIsIk5vZGVUeXBlIiwiQ01QVCIsImVudGVyIiwibGVhdmUiLCJkb25lIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNE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QUNqREQ7O0FBRUEsU0FBU3VCLGlCQUFULENBQTJCaFAsSUFBM0IsRUFBaUM7QUFDN0IsU0FBTyxTQUFTN0IsSUFBVCxDQUFjOFEsTUFBZCxFQUFzQjtBQUN6QixRQUFNQyxHQUFHLEdBQUcsSUFBWjs7QUFDQSxRQUFJQSxHQUFHLENBQUN2TSxRQUFKLEtBQWlCd00sY0FBU0MsSUFBOUIsRUFBb0M7QUFDaENGLFNBQUcsQ0FBQzdMLFFBQUosQ0FBYXJELElBQWI7QUFDSDs7QUFDRCxRQUFJa1AsR0FBRyxDQUFDaFAsUUFBSixJQUFnQmdQLEdBQUcsQ0FBQ2hQLFFBQUosQ0FBYXhDLE1BQWIsR0FBc0IsQ0FBMUMsRUFBNkM7QUFDekN3UixTQUFHLENBQUNoUCxRQUFKLENBQWFzRixPQUFiLENBQXFCckgsSUFBckI7QUFDSDtBQUNKLEdBUkQ7QUFTSDs7QUFFTSxJQUFNc0MsYUFBYSxHQUFHdU8saUJBQWlCLENBQUMsV0FBRCxDQUF2Qzs7QUFDQSxJQUFNck8sZUFBZSxHQUFHcU8saUJBQWlCLENBQUMsYUFBRCxDQUF6Qzs7Ozs7Ozs7Ozs7Ozs7O0FDZlEsa0JBQVV4TCxPQUFWLEVBQW1CO0FBRTlCLFNBQU87QUFDSDZMLFNBQUssRUFBRUEsS0FESjtBQUVIQyxTQUFLLEVBQUVBO0FBRkosR0FBUDs7QUFLQSxXQUFTRCxLQUFULENBQWVqTixFQUFmLEVBQW1CbU4sSUFBbkIsRUFBeUI7QUFDckJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7QUFDQUYsUUFBSTtBQUNQOztBQUVELFdBQVNELEtBQVQsQ0FBZWxOLEVBQWYsRUFBbUJtTixJQUFuQixFQUF5QjtBQUNyQkMsV0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWjtBQUNBRixRQUFJO0FBQ1A7QUFFSixDIiwiZmlsZSI6InZ1c2EuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJzYW5cIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wic2FuXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBmYWN0b3J5KHJlcXVpcmUoXCJzYW5cIikpIDogZmFjdG9yeShyb290W1wic2FuXCJdKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHdpbmRvdywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fMV9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuIiwiLyoqXG4gKiBAZmlsZSDkuIDkupvlt6Xlhbflh73mlbBcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG4vKipcbiAqIE1peCBwcm9wZXJ0aWVzIGludG8gdGFyZ2V0IG9iamVjdC5cbiAqL1xuZXhwb3J0IGNvbnN0IGV4dGVuZCA9IE9iamVjdC5hc3NpZ247XG5cbi8qKlxuICogTWVyZ2UgYW4gQXJyYXkgb2YgT2JqZWN0cyBpbnRvIGEgc2luZ2xlIE9iamVjdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvT2JqZWN0KGFycikge1xuICAgIGNvbnN0IHJlcyA9IHt9O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChhcnJbaV0pIHtcbiAgICAgICAgICAgIGV4dGVuZChyZXMsIGFycltpXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHJhdyB0eXBlIHN0cmluZyBvZiBhIHZhbHVlLCBlLmcuLCBbb2JqZWN0IE9iamVjdF0uXG4gKi9cbmV4cG9ydCBjb25zdCBfdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIFF1aWNrIG9iamVjdCBjaGVjayAtIHRoaXMgaXMgcHJpbWFyaWx5IHVzZWQgdG8gdGVsbFxuICogT2JqZWN0cyBmcm9tIHByaW1pdGl2ZSB2YWx1ZXMgd2hlbiB3ZSBrbm93IHRoZSB2YWx1ZVxuICogaXMgYSBKU09OLWNvbXBsaWFudCB0eXBlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3Qob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAhPT0gbnVsbCAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIGFuIG9iamVjdCBoYXMgdGhlIHByb3BlcnR5LlxuICovXG5jb25zdCBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5leHBvcnQgZnVuY3Rpb24gaGFzT3duKG9iaiwga2V5KSB7XG4gICAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpO1xufVxuXG4vKipcbiAqIFN0cmljdCBvYmplY3QgdHlwZSBjaGVjay4gT25seSByZXR1cm5zIHRydWVcbiAqIGZvciBwbGFpbiBKYXZhU2NyaXB0IG9iamVjdHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1BsYWluT2JqZWN0KG9iaikge1xuICAgIHJldHVybiBfdG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBPYmplY3RdJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZihvYmosIGtleSwgcHJvcGVydHkpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIGV4dGVuZCh7XG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9LCBwcm9wZXJ0eSkpO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIGNhY2hlZCB2ZXJzaW9uIG9mIGEgcHVyZSBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhY2hlZChmbikge1xuICAgIGNvbnN0IGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gY2FjaGVkRm4oc3RyKSB7XG4gICAgICAgIGNvbnN0IGhpdCA9IGNhY2hlW3N0cl07XG4gICAgICAgIHJldHVybiBoaXQgfHwgKGNhY2hlW3N0cl0gPSBmbihzdHIpKTtcbiAgICB9O1xufVxuXG4vKipcbiAqIEh5cGhlbmF0ZSBhIGNhbWVsQ2FzZSBzdHJpbmcuXG4gKi9cbmNvbnN0IGh5cGhlbmF0ZVJFID0gLyhbXi1dKShbQS1aXSkvZztcbmV4cG9ydCBjb25zdCBoeXBoZW5hdGUgPSBjYWNoZWQoKHN0cikgPT4ge1xuICAgIHJldHVybiBzdHJcbiAgICAgICAgLnJlcGxhY2UoaHlwaGVuYXRlUkUsICckMS0kMicpXG4gICAgICAgIC5yZXBsYWNlKGh5cGhlbmF0ZVJFLCAnJDEtJDInKVxuICAgICAgICAudG9Mb3dlckNhc2UoKTtcbn0pO1xuXG5leHBvcnQgY29uc3QgY2FtZWxpemUgPSBzdHIgPT4gc3RyLnJlcGxhY2UoLy0oXFx3KS9nLCAoXywgYykgPT4gKGMgPyBjLnRvVXBwZXJDYXNlKCkgOiAnJykpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX18xX187IiwiLyoqXG4gKiBAZmlsZSBzbG90XG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHtleHRlbmR9IGZyb20gJy4uL3NoYXJlZC91dGlsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHtcbiAgICAgICAgc2xvdENoaWxkcmVuLFxuICAgICAgICBsaWZlQ3ljbGUsXG4gICAgICAgIHNvdXJjZVNsb3RzXG4gICAgfSA9IHRoaXM7XG5cbiAgICBpZiAobGlmZUN5Y2xlLmF0dGFjaGVkKSB7XG4gICAgICAgIHJldHVybiBzbG90Q2hpbGRyZW4ucmVkdWNlKChwcmV2LCBjaGlsZCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGNoaWxkLm5hbWUgfHwgJ2RlZmF1bHQnO1xuICAgICAgICAgICAgaWYgKCFwcmV2W25hbWVdKSB7XG4gICAgICAgICAgICAgICAgcHJldltuYW1lXSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJldltuYW1lXSA9IHByZXZbbmFtZV0uY29uY2F0KGNoaWxkLmNoaWxkcmVuKTtcbiAgICAgICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgICB9LCB7fSk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2xvdHMgPSB7fTtcblxuICAgIGlmIChzb3VyY2VTbG90cy5uYW1lZCkge1xuICAgICAgICBleHRlbmQoc2xvdHMsIHNvdXJjZVNsb3RzLm5hbWVkKTtcbiAgICB9XG4gICAgaWYgKHNvdXJjZVNsb3RzLm5vbmFtZSkge1xuICAgICAgICBzbG90cy5kZWZhdWx0ID0gc291cmNlU2xvdHMubm9uYW1lO1xuICAgIH1cblxuICAgIHJldHVybiBzbG90cztcblxufVxuIiwiLyoqXG4gKiBAZmlsZSBlbnRyeVxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmV4cG9ydCB7ZGVmYXVsdCBhcyBkZWZpbmVDb21wb25lbnR9IGZyb20gJy4vZGVmaW5lLWNvbXBvbmVudCc7XG4iLCIvKipcbiAqIEBmaWxlIGNvbXBvbmVudFxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCAnLi9vdmVycmlkZS1kYXRhLWdldCc7XG5cbmltcG9ydCB7ZGVmaW5lQ29tcG9uZW50LCBpbmhlcml0cywgQ29tcG9uZW50LCBuZXh0VGlja30gZnJvbSAnc2FuJztcbmltcG9ydCB7ZXh0ZW5kLCBoeXBoZW5hdGUsIGRlZn0gZnJvbSAnLi4vc2hhcmVkL3V0aWwnO1xuaW1wb3J0IG1lcmdlQ2xhc3MgZnJvbSAnLi9tZXJnZS1jbGFzcyc7XG5pbXBvcnQgbWVyZ2VTdHlsZSBmcm9tICcuL21lcmdlLXN0eWxlJztcbmltcG9ydCBsb29wRXhwcmVzc2lvbiBmcm9tICcuL2xvb3AtZXhwcmVzc2lvbic7XG5pbXBvcnQgZ2V0Q29tcG9uZW50VHlwZSBmcm9tICcuL2dldC1jb21wb25lbnQtdHlwZSc7XG5pbXBvcnQgb2JqZWN0Q29tcHV0ZWRQcm9wZXJ0aWVzIGZyb20gJy4vb2JqZWN0LWNvbXB1dGVkLXByb3BlcnRpcnMnO1xuaW1wb3J0IHJlZiBmcm9tICcuL3JlZic7XG5pbXBvcnQgbWVyZ2VPcHRpb25zIGZyb20gJy4vbWVyZ2Utb3B0aW9ucyc7XG5pbXBvcnQgYmluZERhdGEgZnJvbSAnLi9iaW5kLWRhdGEnO1xuaW1wb3J0IGNhbGNDb21wdXRlZCBmcm9tICcuL2NhbGMtY29tcHV0ZWQnO1xuaW1wb3J0IHNsb3QgZnJvbSAnLi9nZXQtc2xvdHMnO1xuaW1wb3J0IHtjYWxsQWN0aXZpdGVkLCBjYWxsRGVBY3Rpdml0ZWR9IGZyb20gJy4vY2FsbC1hY3RpdmF0ZWQtaG9vayc7XG5pbXBvcnQgVHJhbnNpdGlvbiBmcm9tICcuL3RyYW5zaXRpb24nO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBmZWNzLWNhbWVsY2FzZSAqL1xuY29uc3QgZGVmYXVsdFNhbk9wdGlvbnMgPSB7XG4gICAgJGFjdGl2YXRlOiBjYWxsQWN0aXZpdGVkLFxuICAgICRkZWFjdGl2YXRlOiBjYWxsRGVBY3Rpdml0ZWQsXG4gICAgX21jOiBtZXJnZUNsYXNzLFxuICAgIF9tczogbWVyZ2VTdHlsZSxcbiAgICBfbDogbG9vcEV4cHJlc3Npb24sXG4gICAgX2V4OiBleHRlbmQsXG4gICAgX29jcDogb2JqZWN0Q29tcHV0ZWRQcm9wZXJ0aWVzLFxuICAgIF9ub29wOiBmdW5jdGlvbiAoKSB7fSxcbiAgICBfdDogVHJhbnNpdGlvbixcbiAgICBnZXRDb21wb25lbnRUeXBlLFxuICAgICRlbWl0OiBDb21wb25lbnQucHJvdG90eXBlLmZpcmUsXG4gICAgJG9uOiBDb21wb25lbnQucHJvdG90eXBlLm9uLFxuICAgICR3YXRjaDogQ29tcG9uZW50LnByb3RvdHlwZS53YXRjaCxcbiAgICAkbmV4dFRpY2s6IG5leHRUaWNrXG59O1xuLyogZXNsaW50LWVuYWJsZSBmZWNzLWNhbWVsY2FzZSAqL1xuXG5jb25zdCBtZW1iZXJNYXAgPSB7XG4gICAgJGVsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbDtcbiAgICB9LFxuICAgICRjb250ZXh0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vd25lcjtcbiAgICB9LFxuICAgICRwYXJlbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmVudENvbXBvbmVudDtcbiAgICB9LFxuICAgICRjaGlsZHJlbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+IGNoaWxkLm5vZGVUeXBlID09PSA1KTtcbiAgICB9LFxuICAgICRyb290KCkge1xuICAgICAgICBsZXQgcm9vdCA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLnBhcmVudENvbXBvbmVudCkge1xuICAgICAgICAgICAgd2hpbGUgKHJvb3QucGFyZW50Q29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgcm9vdCA9IHJvb3QucGFyZW50Q29tcG9uZW50XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgfSxcbiAgICAkc2xvdHM6IHNsb3QsXG4gICAgX2lzRGVzdHJveWVkKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLmxpZmVDeWNsZS5kaXNwb3NlZDtcbiAgICB9XG59O1xuXG5jb25zdCBvcmlnaW5hbFVwZGF0ZSA9IENvbXBvbmVudC5wcm90b3R5cGUuX3VwZGF0ZTtcblxuQ29tcG9uZW50LnByb3RvdHlwZS5fdXBkYXRlID0gZnVuY3Rpb24gKGNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlcykge1xuICAgICAgICB0aGlzLl90b1BoYXNlKCdiZWZvcmVVcGRhdGUnKTtcbiAgICB9XG4gICAgb3JpZ2luYWxVcGRhdGUuY2FsbCh0aGlzLCBjaGFuZ2VzKTtcbn07XG5cbmNvbnN0IGlubmVyS2V5ID0gJ19TYW5DdG9yJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVmaW5lKG9wdGlvbnMpIHtcblxuICAgIGlmIChvcHRpb25zW2lubmVyS2V5XSkge1xuICAgICAgICByZXR1cm4gb3B0aW9uc1tpbm5lcktleV07XG4gICAgfVxuXG4gICAgY29uc3Qgc2FuT3B0aW9ucyA9IGV4dGVuZCh7XG4gICAgICAgIHRlbXBsYXRlOiBvcHRpb25zLl9fc2FudGVtcGxhdGUsXG4gICAgICAgIGFOb2RlOiBvcHRpb25zLl9fc2FuYU5vZGUsXG4gICAgICAgIF9pc1NhbjogdHJ1ZSxcbiAgICB9LCBkZWZhdWx0U2FuT3B0aW9ucywgbWVyZ2VPcHRpb25zKG9wdGlvbnMpKTtcblxuICAgIGNvbnN0IGNvbXBpbGVkSG9vayA9IHNhbk9wdGlvbnMuY29tcGlsZWQ7XG4gICAgc2FuT3B0aW9ucy5jb21waWxlZCA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB0aGlzLl9jYWxjQ29tcHV0ZWQgPSBjYWxjQ29tcHV0ZWQuYmluZCh0aGlzKTtcbiAgICAgICAgY29tcGlsZWRIb29rICYmIGNvbXBpbGVkSG9vay5jYWxsKHRoaXMpO1xuXG4gICAgICAgIGNvbnN0IHByb3BlcnRpZXMgPSBPYmplY3RcbiAgICAgICAgICAgIC5rZXlzKG1lbWJlck1hcClcbiAgICAgICAgICAgIC5yZWR1Y2UoKHByb3BzLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBwcm9wc1trZXldID0ge1xuICAgICAgICAgICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWVtYmVyTWFwW2tleV0uY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3BzO1xuICAgICAgICAgICAgfSwge30pO1xuXG4gICAgICAgIHByb3BlcnRpZXMuJG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB2YWx1ZTogb3B0aW9uc1xuICAgICAgICB9O1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHByb3BlcnRpZXMpO1xuICAgIH07XG5cbiAgICBjb25zdCByZWZzID0gb3B0aW9ucy5fX3NhblJlZnM7XG4gICAgY29uc3QgaW5pdGVkSG9vayA9IHNhbk9wdGlvbnMuaW5pdGVkO1xuICAgIHNhbk9wdGlvbnMuaW5pdGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBtZSA9IHRoaXM7XG4gICAgICAgIHRoaXMuJHJlZnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG4gICAgICAgIGlmIChyZWZzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gcmVmcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHIgPSByZWZzW2ldO1xuICAgICAgICAgICAgICAgIGRlZihtZS4kcmVmcywgci5uYW1lLCB7XG4gICAgICAgICAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByLnJvb3QgPyBtZS5lbCA6IG1lLnJlZihyLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBvdmVyd3JpdGUgc2FuIGNvbXBvbmVudCBhcGkgZm9yIHN1cHBvcnQgdi1mb3IgKyByZWZcbiAgICAgICAgICAgIG1lLnJlZiA9IHJlZjtcbiAgICAgICAgfVxuXG4gICAgICAgIGluaXRlZEhvb2sgJiYgaW5pdGVkSG9vay5jYWxsKHRoaXMpO1xuXG4gICAgICAgIC8vIG1lcmdlIGNzcyBtb2R1bGVzXG4gICAgICAgIGlmICh0aGlzLiRzdHlsZSkge1xuICAgICAgICAgICAgZXh0ZW5kKHRoaXMuZGF0YS5yYXcuJHN0eWxlLCB0aGlzLiRzdHlsZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGJpbmREYXRhLmNhbGwodGhpcyk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMud2F0Y2gpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMud2F0Y2gpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLndhdGNoKGtleSwgb3B0aW9ucy53YXRjaFtrZXldLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5wcmVwcm9jZXNzQU5vZGUpIHtcbiAgICAgICAgICAgIG9wdGlvbnMucHJlcHJvY2Vzc0FOb2RlLmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgYmVmb3JlVXBkYXRlSG9vayA9IHNhbk9wdGlvbnMuYmVmb3JlVXBkYXRlO1xuICAgIHNhbk9wdGlvbnMuYmVmb3JlVXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBiZWZvcmVVcGRhdGVIb29rICYmIGJlZm9yZVVwZGF0ZUhvb2suY2FsbCh0aGlzKTtcblxuICAgICAgICBpZiAob3B0aW9ucy5wcmVwcm9jZXNzQU5vZGUpIHtcbiAgICAgICAgICAgIG9wdGlvbnMucHJlcHJvY2Vzc0FOb2RlLmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgc2FuT3B0aW9ucy5pbml0RGF0YSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBjb25zdCBtZSA9IHRoaXM7XG5cbiAgICAgICAgY29uc3QgZGVmYXVsdFByb3BzID0ge307XG4gICAgICAgIGlmIChvcHRpb25zLnByb3BzKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9wS2V5cyA9IG1lLl9wcm9wS2V5cyA9IG9wdGlvbnMuX3Byb3BLZXlzID0gb3B0aW9ucy5wcm9wc1xuICAgICAgICAgICAgICAgID8gKEFycmF5LmlzQXJyYXkob3B0aW9ucy5wcm9wcykgPyBvcHRpb25zLnByb3BzIDogT2JqZWN0LmtleXMob3B0aW9ucy5wcm9wcykpXG4gICAgICAgICAgICAgICAgOiBbXTtcblxuICAgICAgICAgICAgLy8g6buY6K6k5bGe5oCnXG4gICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkob3B0aW9ucy5wcm9wcykpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gcHJvcEtleXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcCA9IHByb3BLZXlzW2ldO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wID0gb3B0aW9ucy5wcm9wc1twXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCdkZWZhdWx0JyBpbiBwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0UHJvcHNbcF0gPSB0eXBlb2YgcHJvcC5kZWZhdWx0ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBwcm9wLmRlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcHJvcC5kZWZhdWx0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbWUuX3Byb3BLZXlzID0gW107XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5jb21wdXRlZCkge1xuICAgICAgICAgICAgbWUuX2NvbXB1dGVkS2V5cyA9IE9iamVjdC5rZXlzKG9wdGlvbnMuY29tcHV0ZWQpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IG1lLl9jb21wdXRlZEtleXM7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGsgPSBtZS5fY29tcHV0ZWRLZXlzW2ldO1xuICAgICAgICAgICAgICAgIGRlZihtZSwgaywge1xuICAgICAgICAgICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWUuZGF0YS5nZXQoayk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1lLl9jb21wdXRlZEtleXMgPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRhdGEgPSB0eXBlb2Ygb3B0aW9ucy5kYXRhID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICA/IG9wdGlvbnMuZGF0YS5jYWxsKGV4dGVuZCh7fSwgZGVmYXVsdFByb3BzLCB0aGlzLl9zcmNTYmluZERhdGEpKVxuICAgICAgICAgICAgOiAob3B0aW9ucy5kYXRhIHx8IHt9KTtcblxuICAgICAgICB0aGlzLl9kYXRhS2V5cyA9IE9iamVjdC5rZXlzKGRhdGEpIHx8IFtdO1xuXG4gICAgICAgIHJldHVybiBleHRlbmQoeyRzdHlsZToge319LCBkZWZhdWx0UHJvcHMsIGRhdGEpO1xuICAgIH07XG5cbiAgICBpZiAob3B0aW9ucy5jb21wb25lbnRzKSB7XG4gICAgICAgIHNhbk9wdGlvbnMuY29tcG9uZW50cyA9IE9iamVjdFxuICAgICAgICAgICAgLmtleXMob3B0aW9ucy5jb21wb25lbnRzKVxuICAgICAgICAgICAgLnJlZHVjZSgocHJldiwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gb3B0aW9ucy5jb21wb25lbnRzW2tleV07XG4gICAgICAgICAgICAgICAgcHJldltrZXldID0gcHJldltoeXBoZW5hdGUoa2V5KV0gPSBjb21wb25lbnQgaW5zdGFuY2VvZiBDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgPyBjb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgOiAoY29tcG9uZW50LnRlbXBsYXRlIHx8IGNvbXBvbmVudC5hTm9kZSA/IGRlZmluZUNvbXBvbmVudChjb21wb25lbnQpIDogZGVmaW5lKGNvbXBvbmVudCkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgICAgICAgfSwge30pO1xuICAgIH1cblxuICAgIHNhbk9wdGlvbnMuX2NtcHRSZWFkeSA9IDE7XG5cbiAgICBjb25zdCBjbXB0ID0gZGVmaW5lQ29tcG9uZW50KHNhbk9wdGlvbnMpO1xuXG4gICAgcmV0dXJuIG9wdGlvbnNbaW5uZXJLZXldID0gY21wdDtcbn1cblxuIiwiLyoqXG4gKiBAZmlsZSBvdmVycmlkZSBldmFsIGV4cHJcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQge0RhdGEsIHBhcnNlRXhwciwgRXhwclR5cGUsIGV2YWxFeHByfSBmcm9tICdzYW4nO1xuXG5jb25zdCBvcmlnaW5hbEdldCA9IERhdGEucHJvdG90eXBlLmdldDtcblxuRGF0YS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGV4cHIsIGNhbGxlZSkge1xuICAgIGlmIChleHByICYmIHR5cGVvZiBleHByICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBleHByID0gcGFyc2VFeHByKGV4cHIpO1xuICAgIH1cbiAgICBsZXQgdmFsdWUgPSBvcmlnaW5hbEdldC5jYWxsKHRoaXMsIGV4cHIsIGNhbGxlZSk7XG4gICAgaWYgKCFleHByIHx8IHZhbHVlICE9PSB1bmRlZmluZWQgfHwgIXRoaXMub3duZXIgfHwgZXhwci50eXBlICE9PSBFeHByVHlwZS5BQ0NFU1NPUikge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGNvbnN0IHBhdGhzID0gZXhwci5wYXRocztcbiAgICBjb25zdCBmaXJzdCA9IHBhdGhzWzBdLnZhbHVlO1xuICAgIGlmIChcbiAgICAgICAgW1xuICAgICAgICAgICAgLi4udGhpcy5vd25lci5fcHJvcEtleXMsXG4gICAgICAgICAgICAuLi50aGlzLm93bmVyLl9kYXRhS2V5cyxcbiAgICAgICAgICAgIC4uLnRoaXMub3duZXIuX2NvbXB1dGVkS2V5c1xuICAgICAgICBdLmluZGV4T2YoZmlyc3QpID49IDBcbiAgICApIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICB2YWx1ZSA9IHRoaXMub3duZXJbZmlyc3RdO1xuICAgIGZvciAodmFyIGkgPSAxLCBsID0gcGF0aHMubGVuZ3RoOyB2YWx1ZSAhPSBudWxsICYmIGkgPCBsOyBpKyspIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZVtwYXRoc1tpXS52YWx1ZSB8fCBldmFsRXhwcihwYXRoc1tpXSwgY2FsbGVlKV07XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn07XG4iLCIvKipcbiAqIEBmaWxlIG1lcmdlIGNsYXNzXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuZnVuY3Rpb24gc3RyaW5nKGNscyA9ICcnKSB7XG4gICAgaWYgKCFjbHMpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICByZXR1cm4gY2xzXG4gICAgICAgIC5zcGxpdCgnICcpXG4gICAgICAgIC5yZWR1Y2UoKHByZXYsIG5hbWUpID0+IHtcbiAgICAgICAgICAgIGlmICghbmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgICAgIFtuYW1lXTogMVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSwge30pO1xufVxuXG5mdW5jdGlvbiBvYmplY3QoY2xzID0ge30pIHtcbiAgICByZXR1cm4gT2JqZWN0XG4gICAgICAgIC5rZXlzKGNscylcbiAgICAgICAgLnJlZHVjZSgocHJldiwga2V5KSA9PiB7XG4gICAgICAgICAgICBpZiAoIWNsc1trZXldKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgICAgLi4uc3RyaW5nKGtleSlcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sIHt9KTtcbn1cblxuZnVuY3Rpb24gYXJyYXkoY2xzID0gW10pIHtcbiAgICBsZXQgY2xhenogPSB7fTtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gY2xzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBjbHNbaV07XG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgY2xhenogPSB7XG4gICAgICAgICAgICAuLi5jbGF6eixcbiAgICAgICAgICAgIC4uLihcbiAgICAgICAgICAgICAgICB0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgICA/IHN0cmluZyhlbGVtZW50KVxuICAgICAgICAgICAgICAgIDogKEFycmF5LmlzQXJyYXkoZWxlbWVudCkgPyBhcnJheShlbGVtZW50KSA6IG9iamVjdChlbGVtZW50KSlcbiAgICAgICAgICAgIClcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIGNsYXp6O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGljQ2xhc3MgPSAnJywgY2xzID0ge30pIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoYXJyYXkoW3N0YXRpY0NsYXNzLCBjbHNdKSkuam9pbignICcpO1xufVxuIiwiLyoqXG4gKiBAZmlsZSBtZXJnZSBzdHlsZVxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCB7Y2FjaGVkLCBleHRlbmQsIHRvT2JqZWN0fSBmcm9tICcuLi9zaGFyZWQvdXRpbCc7XG5cbmNvbnN0IHBhcnNlU3R5bGVUZXh0ID0gY2FjaGVkKGZ1bmN0aW9uIChjc3NUZXh0KSB7XG4gICAgY29uc3QgcmVzID0ge307XG4gICAgY29uc3QgbGlzdERlbGltaXRlciA9IC87KD8hW14oXSpcXCkpL2c7XG4gICAgY29uc3QgcHJvcGVydHlEZWxpbWl0ZXIgPSAvOiguKykvO1xuICAgIGNzc1RleHQuc3BsaXQobGlzdERlbGltaXRlcikuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgdmFyIHRtcCA9IGl0ZW0uc3BsaXQocHJvcGVydHlEZWxpbWl0ZXIpO1xuICAgICAgICAgICAgdG1wLmxlbmd0aCA+IDEgJiYgKHJlc1t0bXBbMF0udHJpbSgpXSA9IHRtcFsxXS50cmltKCkpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlcztcbn0pO1xuXG4vLyBub3JtYWxpemUgcG9zc2libGUgYXJyYXkgLyBzdHJpbmcgdmFsdWVzIGludG8gT2JqZWN0XG5mdW5jdGlvbiBub3JtYWxpemVTdHlsZUJpbmRpbmcoYmluZGluZ1N0eWxlKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYmluZGluZ1N0eWxlKSkge1xuICAgICAgICByZXR1cm4gdG9PYmplY3QoYmluZGluZ1N0eWxlKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBiaW5kaW5nU3R5bGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBwYXJzZVN0eWxlVGV4dChiaW5kaW5nU3R5bGUpO1xuICAgIH1cbiAgICByZXR1cm4gYmluZGluZ1N0eWxlO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0aWNTdHlsZSwgc3R5bGUsIHZTaG93ID0gdHJ1ZSkge1xuICAgIHN0eWxlID0gbm9ybWFsaXplU3R5bGVCaW5kaW5nKHN0eWxlKTtcbiAgICBpZiAoIXZTaG93KSB7XG4gICAgICAgIHN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICAgIHJldHVybiBzdGF0aWNTdHlsZVxuICAgICAgICA/IGV4dGVuZChzdGF0aWNTdHlsZSwgc3R5bGUpXG4gICAgICAgIDogc3R5bGU7XG59XG4iLCIvKipcbiAqIEBmaWxlIGxvb3AgZXhwcmVzc2lvblxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCB7Y2FjaGVkfSBmcm9tICcuLi9zaGFyZWQvdXRpbCc7XG5cbmNvbnN0IHRvQXJyYXkgPSBjYWNoZWQoZnVuY3Rpb24gKG4pIHtcbiAgICBjb25zdCB2YWx1ZSA9IG5ldyBBcnJheShuKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICB2YWx1ZVtpXSA9IGkgKyAxO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKCFpc05hTih2YWx1ZSkpIHtcbiAgICAgICAgY29uc3QgbiA9ICt2YWx1ZTtcbiAgICAgICAgdmFsdWUgPSB0b0FycmF5KG4pO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG59XG5cbiIsIi8qKlxuICogQGZpbGUgZ2V0IGNvbXBvbmVudCB0eXBlXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHtldmFsRXhwcn0gZnJvbSAnc2FuJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGFOb2RlLCBkYXRhKSB7XG4gICAgaWYgKGFOb2RlLnRhZ05hbWUgIT09ICdjb21wb25lbnQnIHx8IGFOb2RlLmhvdHNwb3QucHJvcHMuaXMgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnRzW2FOb2RlLnRhZ05hbWVdO1xuICAgIH1cblxuICAgIGNvbnN0IGlzID0gYU5vZGUucHJvcHNbYU5vZGUuaG90c3BvdC5wcm9wcy5pc107XG4gICAgY29uc3QgaXNWYWx1ZSA9IGV2YWxFeHByKGlzLmV4cHIsIGRhdGEpO1xuICAgIHJldHVybiB0aGlzLmNvbXBvbmVudHNbaXNWYWx1ZV07XG59XG4iLCIvKipcbiAqIEBmaWxlIG9iamVjdCBjb21wdXRlZCBwcm9wZXJ0aWVzIG1lcmdlXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb3BlcnRpZXMpIHtcbiAgICByZXR1cm4gcHJvcGVydGllcy5yZWR1Y2UoKHByZXYsIHtrLCB2fSkgPT4ge1xuICAgICAgICBwcmV2W2tdID0gdjtcbiAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgfSwge30pO1xufVxuIiwiLyoqXG4gKiBAZmlsZSBzYW4gcmVmIHJld3JpdGVcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQgKiBhcyBzYW4gZnJvbSAnc2FuJztcbmltcG9ydCB7Y2FtZWxpemV9IGZyb20gJy4uL3NoYXJlZC91dGlsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKG5hbWUpIHtcblxuICAgIGNvbnN0IG93bmVyID0gdGhpcztcblxuICAgIGZ1bmN0aW9uIGNoaWxkcmVuVHJhdmVyc2FsKGNoaWxkcmVuKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgbGV0IHJlZlRhcmdldCA9IGVsZW1lbnRUcmF2ZXJzYWwoY2hpbGRyZW5baV0pO1xuICAgICAgICAgICAgaWYgKHJlZlRhcmdldCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZWZUYXJnZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlbGVtZW50VHJhdmVyc2FsKGVsZW1lbnQpIHtcbiAgICAgICAgY29uc3Qgbm9kZVR5cGUgPSBlbGVtZW50Lm5vZGVUeXBlO1xuICAgICAgICBpZiAobm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVmVGFyZ2V0O1xuICAgICAgICBpZiAoZWxlbWVudC5vd25lciA9PT0gb3duZXIpIHtcbiAgICAgICAgICAgIGxldCByZWY7XG4gICAgICAgICAgICBsZXQgdmFsdWU7XG4gICAgICAgICAgICBzd2l0Y2ggKG5vZGVUeXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgcmVmID0gZWxlbWVudC5hTm9kZS5kaXJlY3RpdmVzLnJlZjtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSByZWYgJiYgc2FuLmV2YWxFeHByKHJlZi52YWx1ZSwgZWxlbWVudC5zY29wZSwgb3duZXIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVmICYmICh2YWx1ZSA9PT0gbmFtZSB8fCBjYW1lbGl6ZSh2YWx1ZSkgPT09IG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbm9kZVR5cGUgPT09IDQgPyBlbGVtZW50LmVsIDogZWxlbWVudC5jaGlsZHJlbi5tYXAoZWxlbWVudFRyYXZlcnNhbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgIHJlZiA9IGVsZW1lbnQuc291cmNlLmRpcmVjdGl2ZXMucmVmO1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHNhbi5ldmFsRXhwcihyZWYudmFsdWUsIGVsZW1lbnQuc2NvcGUsIG93bmVyKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlZiAmJiAodmFsdWUgPT09IG5hbWUgfHwgY2FtZWxpemUodmFsdWUpID09PSBuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVmVGFyZ2V0ID0gZWxlbWVudC5zbG90Q2hpbGRyZW4gJiYgY2hpbGRyZW5UcmF2ZXJzYWwoZWxlbWVudC5zbG90Q2hpbGRyZW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlZlRhcmdldCB8fCBjaGlsZHJlblRyYXZlcnNhbChlbGVtZW50LmNoaWxkcmVuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGRyZW5UcmF2ZXJzYWwodGhpcy5jaGlsZHJlbik7XG59O1xuIiwiLyoqXG4gKiBAZmlsZSBtZXJnZSBvcHRpb25zXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHtleHRlbmR9IGZyb20gJy4uL3NoYXJlZC91dGlsJztcbmltcG9ydCB7bGlmZUN5Y2xlS2V5cywgbGlmZUN5Y2xlTWFwfSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCBhdG9tQnVpbGRJbk1peGluIGZyb20gJy4vYXRvbS1nbG9iYWwtYXBpJztcblxuY29uc3Qga2V5cyA9IFtcbiAgICAnZmlsdGVycycsXG4gICAgJ2NvbXB1dGVkJ1xuXTtcblxuZnVuY3Rpb24gbWVyZ2VIb29rKHBhcmVudFZhbCwgY2hpbGRWYWwpIHtcbiAgICByZXR1cm4gY2hpbGRWYWxcbiAgICAgICAgPyBwYXJlbnRWYWxcbiAgICAgICAgICAgID8gcGFyZW50VmFsLmNvbmNhdChjaGlsZFZhbClcbiAgICAgICAgICAgIDogQXJyYXkuaXNBcnJheShjaGlsZFZhbClcbiAgICAgICAgICAgICAgICA/IGNoaWxkVmFsXG4gICAgICAgICAgICAgICAgOiBbY2hpbGRWYWxdXG4gICAgICAgICAgICA6IHBhcmVudFZhbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVyZ2VPcHRpb25zKG9wdGlvbnMpIHtcbiAgICBjb25zdCBkZXN0T3B0aW9ucyA9IHt9O1xuICAgIGNvbnN0IGxpc3QgPSBBcnJheS5pc0FycmF5KG9wdGlvbnMubWl4aW5zKVxuICAgICAgICA/IFthdG9tQnVpbGRJbk1peGluLCAuLi5vcHRpb25zLm1peGlucywgb3B0aW9uc11cbiAgICAgICAgOiBbYXRvbUJ1aWxkSW5NaXhpbiwgb3B0aW9uc107XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGxpc3QubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgY29uc3Qgb3B0ID0gbGlzdFtpXTtcbiAgICAgICAgb3B0Lm1ldGhvZHMgJiYgZXh0ZW5kKGRlc3RPcHRpb25zLCBvcHQubWV0aG9kcyk7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwga2V5cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgY29uc3QgayA9IGtleXNbal07XG4gICAgICAgICAgICBpZiAob3B0W2tdKSB7XG4gICAgICAgICAgICAgICAgZGVzdE9wdGlvbnNba10gPSBleHRlbmQoZGVzdE9wdGlvbnNba10gfHwge30sIG9wdFtrXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsaWZlQ3ljbGVLZXlzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCBrID0gbGlmZUN5Y2xlS2V5c1tqXTtcbiAgICAgICAgICAgIGNvbnN0IGRrID0gbGlmZUN5Y2xlTWFwW2tdO1xuICAgICAgICAgICAgaWYgKG9wdFtrXSkge1xuICAgICAgICAgICAgICAgIGRlc3RPcHRpb25zW2RrXSA9IG1lcmdlSG9vayhkZXN0T3B0aW9uc1tka10gfHwgW10sIG9wdFtrXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBsaWZlQ3ljbGVLZXlzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGNvbnN0IGsgPSBsaWZlQ3ljbGVLZXlzW2pdO1xuICAgICAgICBjb25zdCBkayA9IGxpZmVDeWNsZU1hcFtrXTtcbiAgICAgICAgaWYgKGRlc3RPcHRpb25zW2RrXSkge1xuICAgICAgICAgICAgY29uc3QgaG9va3MgPSBkZXN0T3B0aW9uc1tka10uc2xpY2UoKTtcbiAgICAgICAgICAgIGRlc3RPcHRpb25zW2RrXSA9IGhvb2tzLmxlbmd0aCA9PT0gMSA/IGhvb2tzWzBdIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGhvb2tzLmZvckVhY2goaG9vayA9PiBob29rLmNhbGwodGhpcyksIHRoaXMpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAob3B0aW9ucy5tZXNzYWdlcykge1xuICAgICAgICBkZXN0T3B0aW9ucy5tZXNzYWdlcyA9IG9wdGlvbnMubWVzc2FnZXM7XG4gICAgfVxuICAgIHJldHVybiBkZXN0T3B0aW9ucztcbn1cbiIsIi8qKlxuICogQGZpbGUgY29uc3RhbnRzXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuZXhwb3J0IGNvbnN0IGxpZmVDeWNsZU1hcCA9IHtcbiAgICBiZWZvcmVDcmVhdGU6ICdjb21waWxlZCcsXG4gICAgbW91bnRlZDogJ2F0dGFjaGVkJyxcbiAgICBjcmVhdGVkOiAnaW5pdGVkJyxcbiAgICBiZWZvcmVNb3VudDogJ2NyZWF0ZWQnLFxuICAgIGJlZm9yZURlc3Ryb3k6ICdkZXRhY2hlZCcsXG4gICAgZGVzdHJveTogJ2Rpc3Bvc2VkJyxcbiAgICB1cGRhdGVkOiAndXBkYXRlZCcsXG4gICAgYmVmb3JlVXBkYXRlOiAnYmVmb3JlVXBkYXRlJyxcbiAgICBhY3RpdmF0ZWQ6ICdhY3RpdmF0ZWQnLFxuICAgIGRlYWN0aXZhdGVkOiAnZGVhY3RpdmF0ZWQnXG59O1xuXG5leHBvcnQgY29uc3QgbGlmZUN5Y2xlS2V5cyA9IE9iamVjdC5rZXlzKGxpZmVDeWNsZU1hcCk7XG4iLCIvKipcbiAqIEBmaWxlIOWFqOWxgOeUn+aViOeahOWHveaVsFxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmNvbnN0IE1BVEhfTUVUSE9EID0gW1xuICAgICdmbG9vcicsICdjZWlsJywgJ3JvdW5kJyxcbiAgICAnYWJzJywgJ21heCcsICdtaW4nLCAncG93J1xuXTtcblxuY29uc3QgbWV0aG9kcyA9IGV4cG9ydHMubWV0aG9kcyA9IHt9O1xuXG5NQVRIX01FVEhPRC5mb3JFYWNoKG5hbWUgPT4ge1xuICAgIG1ldGhvZHNbYG1hdGhfJHtuYW1lfWBdID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIE1hdGhbbmFtZV0uYXBwbHkoTWF0aCwgYXJncyk7XG4gICAgfTtcbn0pO1xuXG5tZXRob2RzLmFycmF5X3NsaWNlID0gZnVuY3Rpb24gKGFyciwgc3RhcnQsIGxlbikge1xuICAgIHZhciBlbmQgPSBsZW4gPT0gbnVsbCA/IHZvaWQgMCA6IChsZW4gPj0gMCA/IChzdGFydCArIGxlbikgOiAoYXJyLmxlbmd0aCArIGxlbikpO1xuICAgIHJldHVybiBhcnIuc2xpY2Uoc3RhcnQsIGVuZCk7XG59O1xuXG5tZXRob2RzLmFycmF5X2pvaW4gPSBmdW5jdGlvbiAoYXJyLCBzZXApIHtcbiAgICByZXR1cm4gYXJyLmpvaW4oc2VwKTtcbn07XG5cbm1ldGhvZHMuc3RyX3BvcyA9IGZ1bmN0aW9uIChzdHIsIG1hdGNoKSB7XG4gICAgcmV0dXJuIHN0ci5pbmRleE9mKG1hdGNoKTtcbn07XG5cbm1ldGhvZHMub2JqZWN0X2ZyZWV6ZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gT2JqZWN0LmZyZWV6ZShvYmopO1xufTtcblxuZXhwb3J0cy5maWx0ZXJzID0ge1xuICAgIGpzb24ob2JqKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShqc29uKTtcbiAgICB9LFxuICAgIGxvd2VyKHN0cikge1xuICAgICAgICByZXR1cm4gc3RyLnRvTG93ZXJDYXNlKCk7XG4gICAgfSxcbiAgICB1cHBlcihzdHIpIHtcbiAgICAgICAgcmV0dXJuIHN0ci50b1VwcGVyQ2FzZSgpO1xuICAgIH1cbn07XG4iLCIvKipcbiAqIEBmaWxlIOaVsOaNrue7keWumlxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCB7aXNPYmplY3QsIGhhc093biwgaXNQbGFpbk9iamVjdCwgZXh0ZW5kLCBkZWZ9IGZyb20gJy4uL3NoYXJlZC91dGlsJztcbmltcG9ydCB7RXhwclR5cGV9IGZyb20gJ3Nhbic7XG5cbmNvbnN0IGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5jb25zdCBhcnJheU1ldGhvZHMgPSBPYmplY3QuY3JlYXRlKGFycmF5UHJvdG8pO1xuXG5jb25zdCBtZXRob2RzVG9QYXRjaCA9IFtcbiAgICAncHVzaCcsXG4gICAgJ3BvcCcsXG4gICAgJ3NoaWZ0JyxcbiAgICAndW5zaGlmdCcsXG4gICAgJ3NwbGljZSdcbiAgICAvLyAnc29ydCcsXG4gICAgLy8gJ3JldmVyc2UnXG5dO1xuXG4vKipcbiAqIEludGVyY2VwdCBtdXRhdGluZyBtZXRob2RzIGFuZCBlbWl0IGV2ZW50c1xuICovXG5tZXRob2RzVG9QYXRjaC5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICAvLyBjYWNoZSBvcmlnaW5hbCBtZXRob2RcbiAgICBjb25zdCBvcmlnaW5hbCA9IGFycmF5UHJvdG9bbWV0aG9kXVxuICAgIGRlZihhcnJheU1ldGhvZHMsIG1ldGhvZCwge1xuICAgICAgICB2YWx1ZSguLi5hcmdzKSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgICAgIGNvbnN0IG9iID0gdGhpcy5fX29iX187XG4gICAgICAgICAgICBsZXQgaW5zZXJ0ZWQ7XG4gICAgICAgICAgICBzd2l0Y2ggKG1ldGhvZCkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3B1c2gnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ3Vuc2hpZnQnOlxuICAgICAgICAgICAgICAgICAgICBpbnNlcnRlZCA9IGFyZ3M7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3NwbGljZSc6XG4gICAgICAgICAgICAgICAgICAgIGluc2VydGVkID0gYXJncy5zbGljZSgyKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaW5zZXJ0ZWQpIHtcbiAgICAgICAgICAgICAgICBvYi5vYnNlcnZlQXJyYXkoaW5zZXJ0ZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb2IuY29udGV4dC5kYXRhW21ldGhvZF0uY2FsbChvYi5jb250ZXh0LmRhdGEsIG9iLmV4cHIsIC4uLmFyZ3MpO1xuICAgICAgICAgICAgb2JzZXJ2ZShvYi5jb250ZXh0LmRhdGEuZ2V0KG9iLmV4cHIpLCBvYi5leHByLCBvYi5jb250ZXh0KTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICB9KVxufSk7XG5cbmNsYXNzIE9ic2VydmVyIHtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlLCBleHByLCBjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuZXhwciA9IGV4cHI7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIGRlZih2YWx1ZSwgJ19fb2JfXycsIHtcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlLl9fcHJvdG9fXyA9IGFycmF5TWV0aG9kcztcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZUFycmF5KHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMua2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKSB8fCBbXTtcbiAgICAgICAgICAgIHRoaXMud2Fsayh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXYWxrIHRocm91Z2ggYWxsIHByb3BlcnRpZXMgYW5kIGNvbnZlcnQgdGhlbSBpbnRvXG4gICAgICogZ2V0dGVyL3NldHRlcnMuIFRoaXMgbWV0aG9kIHNob3VsZCBvbmx5IGJlIGNhbGxlZCB3aGVuXG4gICAgICogdmFsdWUgdHlwZSBpcyBPYmplY3QuXG4gICAgICovXG4gICAgd2FsayhvYmopIHtcbiAgICAgICAgY29uc3Qga2V5cyA9IHRoaXMua2V5cztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBkZWZpbmVSZWFjdGl2ZShvYmosIGtleXNbaV0sIHRoaXMuZXhwciwgdGhpcy5jb250ZXh0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9ic2VydmUgYSBsaXN0IG9mIEFycmF5IGl0ZW1zLlxuICAgICAqL1xuICAgIG9ic2VydmVBcnJheShpdGVtcykge1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGl0ZW1zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgb2JzZXJ2ZShpdGVtc1tpXSwgZXh0ZW5kKHt9LCB0aGlzLmV4cHIsIHtcbiAgICAgICAgICAgICAgICBwYXRoczogWy4uLnRoaXMuZXhwci5wYXRocywge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBFeHByVHlwZS5OVU1CRVIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBpXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0pLCB0aGlzLmNvbnRleHQpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkZWZpbmVSZWFjdGl2ZShvYmosIGtleSwgZXhwciwgY29udGV4dCkge1xuXG4gICAgY29uc3QgcHJvcGVydHkgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KTtcbiAgICBpZiAocHJvcGVydHkgJiYgcHJvcGVydHkuY29uZmlndXJhYmxlID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gY2F0ZXIgZm9yIHByZS1kZWZpbmVkIGdldHRlci9zZXR0ZXJzXG4gICAgY29uc3QgZ2V0dGVyID0gcHJvcGVydHkgJiYgcHJvcGVydHkuZ2V0O1xuICAgIGNvbnN0IHNldHRlciA9IHByb3BlcnR5ICYmIHByb3BlcnR5LnNldDtcblxuICAgIGNvbnN0IGtleUV4cHIgPSB7XG4gICAgICAgIHR5cGU6IEV4cHJUeXBlLkFDQ0VTU09SLFxuICAgICAgICBwYXRoczogWy4uLmV4cHIucGF0aHMsIHtcbiAgICAgICAgICAgIHR5cGU6IEV4cHJUeXBlLlNUUklORyxcbiAgICAgICAgICAgIHZhbHVlOiBrZXlcbiAgICAgICAgfV1cbiAgICB9O1xuXG4gICAgbGV0IHZhbCA9IG9ialtrZXldO1xuICAgIG9ic2VydmUodmFsLCBrZXlFeHByLCBjb250ZXh0KTtcbiAgICBjb25zdCBuZXdQcm9wZXJ0eSA9IHtcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBzZXQobmV3VmFsKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGdldHRlciA/IGdldHRlci5jYWxsKG9iaikgOiB2YWw7XG4gICAgICAgICAgICBpZiAobmV3VmFsID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChnZXR0ZXIgJiYgIXNldHRlcikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzZXR0ZXIpIHtcbiAgICAgICAgICAgICAgICBzZXR0ZXIuY2FsbChvYmosIG5ld1ZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWwgPSBuZXdWYWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvYnNlcnZlKG5ld1ZhbCwga2V5RXhwciwgY29udGV4dCk7XG4gICAgICAgICAgICBjb250ZXh0LmRhdGEuc2V0KGtleUV4cHIsIG5ld1ZhbCwge2ZvcmNlOiB0cnVlfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZ2V0dGVyID8gZ2V0dGVyLmNhbGwob2JqKSA6IHZhbDtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZGVmKG9iaiwga2V5LCBuZXdQcm9wZXJ0eSk7XG59XG5cbmNvbnN0IGRlZmF1bHRFeHByID0ge1xuICAgIHR5cGU6IEV4cHJUeXBlLkFDQ0VTU09SLFxuICAgIHBhdGhzOiBbXVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGV4cHIgPSBleHRlbmQoe30sIGRlZmF1bHRFeHByKTtcbiAgICBjb25zdCBrZXlzID0gWy4uLnRoaXMuX2RhdGFLZXlzLCAuLi50aGlzLl9wcm9wS2V5c107XG4gICAgY29uc3Qga2V5TGVuZ3RoID0ga2V5cy5sZW5ndGg7XG5cbiAgICBvYnNlcnZlKHRoaXMuZGF0YS5nZXQoKSwgZXhwciwgdGhpcyk7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcztcblxuICAgIHRoaXMuX2RhdGEgPSB0aGlzLmRhdGEuZ2V0KCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleUxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IGtleXNbaV07XG4gICAgICAgIGRlZihjb250ZXh0LCBrZXksIHtcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGV4dC5fZGF0YVtrZXldO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldChuZXdWYWwpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0Ll9kYXRhW2tleV0gPSBuZXdWYWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuZGF0YS5vd25lciA9IHRoaXM7XG59XG5cbmZ1bmN0aW9uIG9ic2VydmUodmFsdWUsIGV4cHIsIGNvbnRleHQpIHtcbiAgICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBvYjtcbiAgICBpZiAoaGFzT3duKHZhbHVlLCAnX19vYl9fJykgJiYgdmFsdWUuX19vYl9fIGluc3RhbmNlb2YgT2JzZXJ2ZXIpIHtcbiAgICAgICAgb2IgPSB2YWx1ZS5fX29iX19cbiAgICB9XG4gICAgZWxzZSBpZiAoXG4gICAgICAgIChBcnJheS5pc0FycmF5KHZhbHVlKSB8fCBpc1BsYWluT2JqZWN0KHZhbHVlKSlcbiAgICAgICAgJiYgT2JqZWN0LmlzRXh0ZW5zaWJsZSh2YWx1ZSlcbiAgICApIHtcbiAgICAgICAgb2IgPSBuZXcgT2JzZXJ2ZXIodmFsdWUsIGV4cHIsIGNvbnRleHQpO1xuICAgIH1cbiAgICByZXR1cm4gb2I7XG59XG4iLCIvKipcbiAqIEBmaWxlIOimhuebliBzYW4g5Y6f55Sf55qEIF9jYWxjQ29tcHV0ZWRcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQge2RlZn0gZnJvbSAnLi4vc2hhcmVkL3V0aWwnO1xuaW1wb3J0IHNsb3RzIGZyb20gJy4vZ2V0LXNsb3RzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGtleSkge1xuICAgIGxldCBjb21wdXRlZERlcHMgPSB0aGlzLmNvbXB1dGVkRGVwc1trZXldO1xuICAgIGlmICghY29tcHV0ZWREZXBzKSB7XG4gICAgICAgIGNvbXB1dGVkRGVwcyA9IHRoaXMuY29tcHV0ZWREZXBzW2tleV0gPSB7fTtcbiAgICB9XG5cbiAgICBjb25zdCBtZSA9IHRoaXM7XG4gICAgY29uc3QgZGF0YSA9IG1lLmRhdGEuZ2V0KCk7XG4gICAgY29uc3QgY29udGV4dCA9IHt9O1xuXG4gICAgZGVmKGNvbnRleHQsICckcm9vdCcsIHtcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIG1lLiRyb290O1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBkZWYoY29udGV4dCwgJyRzbG90cycsIHtcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHNsb3RzLmNhbGwobWUpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZGF0YSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgayA9IGtleXNbaV07XG4gICAgICAgIGRlZihjb250ZXh0LCBrLCB7XG4gICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFjb21wdXRlZERlcHNba10pIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcHV0ZWREZXBzW2tdID0gMTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAobWUuY29tcHV0ZWRba10gJiYgIW1lLmNvbXB1dGVkRGVwc1trXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWUuX2NhbGNDb21wdXRlZChrKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIG1lLndhdGNoKGssIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLl9jYWxjQ29tcHV0ZWQoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lLmRhdGEuZ2V0KGspO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmRhdGEuc2V0KGtleSwgdGhpcy5jb21wdXRlZFtrZXldLmNhbGwoY29udGV4dCkpO1xufVxuIiwiLyoqXG4gKiBAZmlsZSBjYWxsIGFjdGl2YXRlZCBkZWFjdGl2YXRlZFxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCB7Tm9kZVR5cGV9IGZyb20gJ3Nhbic7XG5cbmZ1bmN0aW9uIGNyZWF0ZUNhbGxGYWN0b3J5KG5hbWUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gY2FsbChkaXJlY3QpIHtcbiAgICAgICAgY29uc3QgZWxlID0gdGhpcztcbiAgICAgICAgaWYgKGVsZS5ub2RlVHlwZSA9PT0gTm9kZVR5cGUuQ01QVCkge1xuICAgICAgICAgICAgZWxlLl90b1BoYXNlKG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbGUuY2hpbGRyZW4gJiYgZWxlLmNoaWxkcmVuLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGVsZS5jaGlsZHJlbi5mb3JFYWNoKGNhbGwpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgY2FsbEFjdGl2aXRlZCA9IGNyZWF0ZUNhbGxGYWN0b3J5KCdhY3Rpdml0ZWQnKTtcbmV4cG9ydCBjb25zdCBjYWxsRGVBY3Rpdml0ZWQgPSBjcmVhdGVDYWxsRmFjdG9yeSgnZGVhY3Rpdml0ZWQnKTtcbiIsIi8qKlxuICogQGZpbGUgdHJhbnNpdGlvbiDnu4Tku7ZcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZW50ZXI6IGVudGVyLFxuICAgICAgICBsZWF2ZTogbGVhdmVcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gZW50ZXIoZWwsIGRvbmUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2VudGVyJyk7XG4gICAgICAgIGRvbmUoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsZWF2ZShlbCwgZG9uZSkge1xuICAgICAgICBjb25zb2xlLmxvZygnbGVhdmUnKTtcbiAgICAgICAgZG9uZSgpO1xuICAgIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==