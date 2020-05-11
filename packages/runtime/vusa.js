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
      _resolveTransition$ap = _resolveTransition.appear,
      appear = _resolveTransition$ap === void 0 ? false : _resolveTransition$ap,
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
    var beforeEnterHook = isAppear ? beforeAppear || beforeEnter : beforeEnter;
    var enterHook = isAppear ? typeof appear === 'function' ? appear : enter : enter;
    var afterEnterHook = isAppear ? afterAppear || afterEnter : afterEnter;
    var enterCancelledHook = isAppear ? appearCancelled || enterCancelled : enterCancelled;
    var explicitEnterDuration = +((0, _util.isObject)(duration) ? duration.enter : duration);
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
    beforeEnterHook && beforeEnterHook(el);

    if (expectsCSS) {
      addTransitionClass(el, startClass);
      addTransitionClass(el, activeClass);
      nextFrame(function () {
        removeTransitionClass(el, startClass);

        if (!cb.cancelled) {
          addTransitionClass(el, toClass);

          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      });
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

    var explicitLeaveDuration = +((0, _util.isObject)(duration) ? duration.leave : duration);
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
        afterLeave && afterLeave(el);
      }

      el._leaveCb = null;
    });

    if (delayLeave) {
      delayLeave(performLeave);
    } else {
      performLeave();
    }

    function performLeave() {
      if (cb.cancelled) {
        return;
      }

      beforeLeave && beforeLeave(el);

      if (expectsCSS) {
        addTransitionClass(el, leaveClass);
        addTransitionClass(el, leaveActiveClass);
        nextFrame(function () {
          removeTransitionClass(el, leaveClass);

          if (!cb.cancelled) {
            addTransitionClass(el, leaveToClass);

            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        });
      }

      leave && leave(el, cb);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3V0aWwuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2FuXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvZ2V0LXNsb3RzLmpzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lL2RlZmluZS1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvb3ZlcnJpZGUtZGF0YS1nZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvbWVyZ2UtY2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvbWVyZ2Utc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvbG9vcC1leHByZXNzaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lL2dldC1jb21wb25lbnQtdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcnVudGltZS9vYmplY3QtY29tcHV0ZWQtcHJvcGVydGlycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcnVudGltZS9yZWYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvbWVyZ2Utb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcnVudGltZS9jb25zdGFudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcnVudGltZS9hdG9tLWdsb2JhbC1hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvYmluZC1kYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lL2NhbGMtY29tcHV0ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvY2FsbC1hY3RpdmF0ZWQtaG9vay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcnVudGltZS90cmFuc2l0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lL2NsYXNzLXV0aWwuanMiXSwibmFtZXMiOlsiZXh0ZW5kIiwiT2JqZWN0IiwiYXNzaWduIiwidG9PYmplY3QiLCJhcnIiLCJyZXMiLCJpIiwibGVuZ3RoIiwicmVtb3ZlIiwiaXRlbSIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsIl90b1N0cmluZyIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiaXNPYmplY3QiLCJvYmoiLCJoYXNPd25Qcm9wZXJ0eSIsImhhc093biIsImtleSIsImNhbGwiLCJpc1BsYWluT2JqZWN0IiwiZGVmIiwicHJvcGVydHkiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJjYWNoZWQiLCJmbiIsImNhY2hlIiwiY3JlYXRlIiwiY2FjaGVkRm4iLCJzdHIiLCJoaXQiLCJoeXBoZW5hdGVSRSIsImh5cGhlbmF0ZSIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsImNhbWVsaXplIiwiXyIsImMiLCJ0b1VwcGVyQ2FzZSIsIm9uY2UiLCJjYWxsZWQiLCJhcHBseSIsImFyZ3VtZW50cyIsInNsb3RDaGlsZHJlbiIsImxpZmVDeWNsZSIsInNvdXJjZVNsb3RzIiwiYXR0YWNoZWQiLCJyZWR1Y2UiLCJwcmV2IiwiY2hpbGQiLCJuYW1lIiwiY29uY2F0IiwiY2hpbGRyZW4iLCJzbG90cyIsIm5hbWVkIiwibm9uYW1lIiwiZGVmYXVsdCIsImRlZmF1bHRTYW5PcHRpb25zIiwiJGFjdGl2YXRlIiwiY2FsbEFjdGl2aXRlZCIsIiRkZWFjdGl2YXRlIiwiY2FsbERlQWN0aXZpdGVkIiwiX21jIiwibWVyZ2VDbGFzcyIsIl9tcyIsIm1lcmdlU3R5bGUiLCJfbCIsImxvb3BFeHByZXNzaW9uIiwiX2V4IiwiX29jcCIsIm9iamVjdENvbXB1dGVkUHJvcGVydGllcyIsIl9ub29wIiwiX3QiLCJUcmFuc2l0aW9uIiwiZ2V0Q29tcG9uZW50VHlwZSIsIiRlbWl0IiwiQ29tcG9uZW50IiwiZmlyZSIsIiRvbiIsIm9uIiwiJHdhdGNoIiwid2F0Y2giLCIkbmV4dFRpY2siLCJuZXh0VGljayIsIm1lbWJlck1hcCIsIiRlbCIsImVsIiwiJGNvbnRleHQiLCJvd25lciIsIiRwYXJlbnQiLCJwYXJlbnRDb21wb25lbnQiLCIkY2hpbGRyZW4iLCJmaWx0ZXIiLCJub2RlVHlwZSIsIiRyb290Iiwicm9vdCIsIiRzbG90cyIsInNsb3QiLCJfaXNEZXN0cm95ZWQiLCJkaXNwb3NlZCIsIm9yaWdpbmFsVXBkYXRlIiwiX3VwZGF0ZSIsImNoYW5nZXMiLCJfdG9QaGFzZSIsImlubmVyS2V5IiwiZGVmaW5lIiwib3B0aW9ucyIsInNhbk9wdGlvbnMiLCJ0ZW1wbGF0ZSIsIl9fc2FudGVtcGxhdGUiLCJhTm9kZSIsIl9fc2FuYU5vZGUiLCJfaXNTYW4iLCJjb21waWxlZEhvb2siLCJjb21waWxlZCIsIl9jYWxjQ29tcHV0ZWQiLCJjYWxjQ29tcHV0ZWQiLCJiaW5kIiwicHJvcGVydGllcyIsImtleXMiLCJwcm9wcyIsImdldCIsIiRvcHRpb25zIiwidmFsdWUiLCJkZWZpbmVQcm9wZXJ0aWVzIiwicmVmcyIsIl9fc2FuUmVmcyIsImluaXRlZEhvb2siLCJpbml0ZWQiLCJtZSIsIiRyZWZzIiwibGVuIiwiciIsInJlZiIsIiRzdHlsZSIsImRhdGEiLCJyYXciLCJiaW5kRGF0YSIsImZvckVhY2giLCJwcmVwcm9jZXNzQU5vZGUiLCJiZWZvcmVVcGRhdGVIb29rIiwiYmVmb3JlVXBkYXRlIiwiaW5pdERhdGEiLCJkZWZhdWx0UHJvcHMiLCJwcm9wS2V5cyIsIl9wcm9wS2V5cyIsIkFycmF5IiwiaXNBcnJheSIsInAiLCJwcm9wIiwiY29tcHV0ZWQiLCJfY29tcHV0ZWRLZXlzIiwiayIsIl9zcmNTYmluZERhdGEiLCJfZGF0YUtleXMiLCJjb21wb25lbnRzIiwiY29tcG9uZW50IiwiX2NtcHRSZWFkeSIsImNtcHQiLCJvcmlnaW5hbEdldCIsIkRhdGEiLCJleHByIiwiY2FsbGVlIiwidW5kZWZpbmVkIiwidHlwZSIsIkV4cHJUeXBlIiwiQUNDRVNTT1IiLCJwYXRocyIsImZpcnN0IiwibCIsInN0cmluZyIsImNscyIsInNwbGl0Iiwib2JqZWN0IiwiYXJyYXkiLCJjbGF6eiIsImVsZW1lbnQiLCJzdGF0aWNDbGFzcyIsImpvaW4iLCJwYXJzZVN0eWxlVGV4dCIsImNzc1RleHQiLCJsaXN0RGVsaW1pdGVyIiwicHJvcGVydHlEZWxpbWl0ZXIiLCJ0bXAiLCJ0cmltIiwibm9ybWFsaXplU3R5bGVCaW5kaW5nIiwiYmluZGluZ1N0eWxlIiwic3RhdGljU3R5bGUiLCJzdHlsZSIsInZTaG93IiwiZGlzcGxheSIsInRvQXJyYXkiLCJuIiwiaXNOYU4iLCJ0YWdOYW1lIiwiaG90c3BvdCIsImlzIiwiaXNWYWx1ZSIsInYiLCJjaGlsZHJlblRyYXZlcnNhbCIsInJlZlRhcmdldCIsImVsZW1lbnRUcmF2ZXJzYWwiLCJkaXJlY3RpdmVzIiwic2FuIiwiZXZhbEV4cHIiLCJzY29wZSIsIm1hcCIsInNvdXJjZSIsIm1lcmdlSG9vayIsInBhcmVudFZhbCIsImNoaWxkVmFsIiwibWVyZ2VPcHRpb25zIiwiZGVzdE9wdGlvbnMiLCJsaXN0IiwibWl4aW5zIiwiYXRvbUJ1aWxkSW5NaXhpbiIsIm9wdCIsIm1ldGhvZHMiLCJqIiwibGlmZUN5Y2xlS2V5cyIsImRrIiwibGlmZUN5Y2xlTWFwIiwiaG9va3MiLCJzbGljZSIsImhvb2siLCJtZXNzYWdlcyIsImJlZm9yZUNyZWF0ZSIsIm1vdW50ZWQiLCJjcmVhdGVkIiwiYmVmb3JlTW91bnQiLCJiZWZvcmVEZXN0cm95IiwiZGVzdHJveSIsInVwZGF0ZWQiLCJhY3RpdmF0ZWQiLCJkZWFjdGl2YXRlZCIsIk1BVEhfTUVUSE9EIiwiZXhwb3J0cyIsImFyZ3MiLCJNYXRoIiwiYXJyYXlfc2xpY2UiLCJzdGFydCIsImVuZCIsImFycmF5X2pvaW4iLCJzZXAiLCJzdHJfcG9zIiwibWF0Y2giLCJvYmplY3RfZnJlZXplIiwiZnJlZXplIiwiZmlsdGVycyIsImpzb24iLCJKU09OIiwic3RyaW5naWZ5IiwibG93ZXIiLCJ1cHBlciIsImFycmF5UHJvdG8iLCJhcnJheU1ldGhvZHMiLCJtZXRob2RzVG9QYXRjaCIsIm1ldGhvZCIsIm9yaWdpbmFsIiwicmVzdWx0Iiwib2IiLCJfX29iX18iLCJpbnNlcnRlZCIsIm9ic2VydmVBcnJheSIsImNvbnRleHQiLCJvYnNlcnZlIiwiT2JzZXJ2ZXIiLCJfX3Byb3RvX18iLCJ3YWxrIiwiZGVmaW5lUmVhY3RpdmUiLCJpdGVtcyIsIk5VTUJFUiIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImdldHRlciIsInNldHRlciIsInNldCIsImtleUV4cHIiLCJTVFJJTkciLCJ2YWwiLCJuZXdQcm9wZXJ0eSIsIm5ld1ZhbCIsImZvcmNlIiwiZGVmYXVsdEV4cHIiLCJrZXlMZW5ndGgiLCJfZGF0YSIsImlzRXh0ZW5zaWJsZSIsImNvbXB1dGVkRGVwcyIsImNyZWF0ZUNhbGxGYWN0b3J5IiwiZGlyZWN0IiwiZWxlIiwiTm9kZVR5cGUiLCJDTVBUIiwicmVzb2x2ZVRyYW5zaXRpb24iLCJjc3MiLCJhdXRvQ3NzVHJhbnNpdGlvbiIsImVudGVyQ2xhc3MiLCJlbnRlclRvQ2xhc3MiLCJlbnRlckFjdGl2ZUNsYXNzIiwibGVhdmVDbGFzcyIsImxlYXZlVG9DbGFzcyIsImxlYXZlQWN0aXZlQ2xhc3MiLCJUUkFOU0lUSU9OIiwiQU5JTUFUSU9OIiwidHJhbnNpdGlvblByb3AiLCJ0cmFuc2l0aW9uRW5kRXZlbnQiLCJhbmltYXRpb25Qcm9wIiwiYW5pbWF0aW9uRW5kRXZlbnQiLCJ3aW5kb3ciLCJvbnRyYW5zaXRpb25lbmQiLCJvbndlYmtpdHRyYW5zaXRpb25lbmQiLCJvbmFuaW1hdGlvbmVuZCIsIm9ud2Via2l0YW5pbWF0aW9uZW5kIiwicmFmIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic2V0VGltZW91dCIsIm5leHRGcmFtZSIsInRyYW5zZm9ybVJFIiwiZ2V0VHJhbnNpdGlvbkluZm8iLCJleHBlY3RlZFR5cGUiLCJzdHlsZXMiLCJnZXRDb21wdXRlZFN0eWxlIiwidHJhbnNpdGlvbkRlbGF5cyIsInRyYW5zaXRpb25EdXJhdGlvbnMiLCJ0cmFuc2l0aW9uVGltZW91dCIsImdldFRpbWVvdXQiLCJhbmltYXRpb25EZWxheXMiLCJhbmltYXRpb25EdXJhdGlvbnMiLCJhbmltYXRpb25UaW1lb3V0IiwidGltZW91dCIsInByb3BDb3VudCIsIm1heCIsImhhc1RyYW5zZm9ybSIsInRlc3QiLCJkZWxheXMiLCJkdXJhdGlvbnMiLCJkIiwidG9NcyIsInMiLCJOdW1iZXIiLCJhZGRUcmFuc2l0aW9uQ2xhc3MiLCJ0cmFuc2l0aW9uQ2xhc3NlcyIsIl90cmFuc2l0aW9uQ2xhc3NlcyIsInB1c2giLCJyZW1vdmVUcmFuc2l0aW9uQ2xhc3MiLCJpc1ZhbGlkRHVyYXRpb24iLCJ3aGVuVHJhbnNpdGlvbkVuZHMiLCJjYiIsImV2ZW50IiwiZW5kZWQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib25FbmQiLCJlIiwidGFyZ2V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImFwcGVhckNsYXNzIiwiYXBwZWFyVG9DbGFzcyIsImFwcGVhckFjdGl2ZUNsYXNzIiwiYmVmb3JlRW50ZXIiLCJlbnRlciIsImFmdGVyRW50ZXIiLCJlbnRlckNhbmNlbGxlZCIsImJlZm9yZUFwcGVhciIsImFwcGVhciIsImFmdGVyQXBwZWFyIiwiYXBwZWFyQ2FuY2VsbGVkIiwiYmVmb3JlTGVhdmUiLCJsZWF2ZSIsImFmdGVyTGVhdmUiLCJsZWF2ZUNhbmNlbGxlZCIsImRlbGF5TGVhdmUiLCJkdXJhdGlvbiIsImV4cGVjdHNDU1MiLCJlbnRlckhhbmRsZXIiLCJsZWF2ZUhhbmRsZXIiLCJkb25lIiwiaXNBcHBlYXIiLCJfbGVhdmVDYiIsImNhbmNlbGxlZCIsIl9lbnRlckNiIiwic3RhcnRDbGFzcyIsImFjdGl2ZUNsYXNzIiwidG9DbGFzcyIsImJlZm9yZUVudGVySG9vayIsImVudGVySG9vayIsImFmdGVyRW50ZXJIb29rIiwiZW50ZXJDYW5jZWxsZWRIb29rIiwiZXhwbGljaXRFbnRlckR1cmF0aW9uIiwiZXhwbGljaXRMZWF2ZUR1cmF0aW9uIiwicGVyZm9ybUxlYXZlIiwidXNlcldhbnRzQ29udHJvbCIsIndoaXRlc3BhY2VSRSIsImFkZENsYXNzIiwiY2xhc3NMaXN0IiwiYWRkIiwiY3VyIiwiZ2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQ2xhc3MiLCJyZW1vdmVBdHRyaWJ1dGUiLCJ0YXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUVPLElBQU1BLE1BQU0sR0FBR0MsTUFBTSxDQUFDQyxNQUF0Qjs7O0FBS0EsU0FBU0MsUUFBVCxDQUFrQkMsR0FBbEIsRUFBdUI7QUFDMUIsTUFBTUMsR0FBRyxHQUFHLEVBQVo7O0FBQ0EsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FB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QUFHLEdBQUdBLEdBQUcsQ0FBQ2xOLElBQUosRUFBTjs7QUFDQSxRQUFJa04sR0FBSixFQUFTO0FBQ0xwVCxRQUFFLENBQUNzVCxZQUFILENBQWdCLE9BQWhCLEVBQXlCRixHQUF6QjtBQUNILEtBRkQsTUFHSztBQUNEcFQsUUFBRSxDQUFDd1QsZUFBSCxDQUFtQixPQUFuQjtBQUNIO0FBQ0o7QUFDSixDIiwiZmlsZSI6InZ1c2EuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJzYW5cIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wic2FuXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBmYWN0b3J5KHJlcXVpcmUoXCJzYW5cIikpIDogZmFjdG9yeShyb290W1wic2FuXCJdKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHdpbmRvdywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fMV9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuIiwiLyoqXG4gKiBAZmlsZSDkuIDkupvlt6Xlhbflh73mlbBcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG4vKipcbiAqIE1peCBwcm9wZXJ0aWVzIGludG8gdGFyZ2V0IG9iamVjdC5cbiAqL1xuZXhwb3J0IGNvbnN0IGV4dGVuZCA9IE9iamVjdC5hc3NpZ247XG5cbi8qKlxuICogTWVyZ2UgYW4gQXJyYXkgb2YgT2JqZWN0cyBpbnRvIGEgc2luZ2xlIE9iamVjdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvT2JqZWN0KGFycikge1xuICAgIGNvbnN0IHJlcyA9IHt9O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChhcnJbaV0pIHtcbiAgICAgICAgICAgIGV4dGVuZChyZXMsIGFycltpXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cblxuLyoqXG4gKiBSZW1vdmUgYW4gaXRlbSBmcm9tIGFuIGFycmF5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlKGFyciwgaXRlbSkge1xuICAgIGlmIChhcnIubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gYXJyLmluZGV4T2YoaXRlbSk7XG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gYXJyLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogR2V0IHRoZSByYXcgdHlwZSBzdHJpbmcgb2YgYSB2YWx1ZSwgZS5nLiwgW29iamVjdCBPYmplY3RdLlxuICovXG5leHBvcnQgY29uc3QgX3RvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBRdWljayBvYmplY3QgY2hlY2sgLSB0aGlzIGlzIHByaW1hcmlseSB1c2VkIHRvIHRlbGxcbiAqIE9iamVjdHMgZnJvbSBwcmltaXRpdmUgdmFsdWVzIHdoZW4gd2Uga25vdyB0aGUgdmFsdWVcbiAqIGlzIGEgSlNPTi1jb21wbGlhbnQgdHlwZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqZWN0KG9iaikge1xuICAgIHJldHVybiBvYmogIT09IG51bGwgJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogQ2hlY2sgd2hldGhlciBhbiBvYmplY3QgaGFzIHRoZSBwcm9wZXJ0eS5cbiAqL1xuY29uc3QgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuZXhwb3J0IGZ1bmN0aW9uIGhhc093bihvYmosIGtleSkge1xuICAgIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KTtcbn1cblxuLyoqXG4gKiBTdHJpY3Qgb2JqZWN0IHR5cGUgY2hlY2suIE9ubHkgcmV0dXJucyB0cnVlXG4gKiBmb3IgcGxhaW4gSmF2YVNjcmlwdCBvYmplY3RzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNQbGFpbk9iamVjdChvYmopIHtcbiAgICByZXR1cm4gX3RvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgT2JqZWN0XSc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWYob2JqLCBrZXksIHByb3BlcnR5KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCBleHRlbmQoe1xuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSwgcHJvcGVydHkpKTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBjYWNoZWQgdmVyc2lvbiBvZiBhIHB1cmUgZnVuY3Rpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjYWNoZWQoZm4pIHtcbiAgICBjb25zdCBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGNhY2hlZEZuKHN0cikge1xuICAgICAgICBjb25zdCBoaXQgPSBjYWNoZVtzdHJdO1xuICAgICAgICByZXR1cm4gaGl0IHx8IChjYWNoZVtzdHJdID0gZm4oc3RyKSk7XG4gICAgfTtcbn1cblxuLyoqXG4gKiBIeXBoZW5hdGUgYSBjYW1lbENhc2Ugc3RyaW5nLlxuICovXG5jb25zdCBoeXBoZW5hdGVSRSA9IC8oW14tXSkoW0EtWl0pL2c7XG5leHBvcnQgY29uc3QgaHlwaGVuYXRlID0gY2FjaGVkKChzdHIpID0+IHtcbiAgICByZXR1cm4gc3RyXG4gICAgICAgIC5yZXBsYWNlKGh5cGhlbmF0ZVJFLCAnJDEtJDInKVxuICAgICAgICAucmVwbGFjZShoeXBoZW5hdGVSRSwgJyQxLSQyJylcbiAgICAgICAgLnRvTG93ZXJDYXNlKCk7XG59KTtcblxuZXhwb3J0IGNvbnN0IGNhbWVsaXplID0gc3RyID0+IHN0ci5yZXBsYWNlKC8tKFxcdykvZywgKF8sIGMpID0+IChjID8gYy50b1VwcGVyQ2FzZSgpIDogJycpKTtcblxuLyoqXG4gKiBFbnN1cmUgYSBmdW5jdGlvbiBpcyBjYWxsZWQgb25seSBvbmNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gb25jZShmbikge1xuICAgIGxldCBjYWxsZWQgPSBmYWxzZVxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIWNhbGxlZCkge1xuICAgICAgICBjYWxsZWQgPSB0cnVlXG4gICAgICAgIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbiAgICAgIH1cbiAgICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzFfXzsiLCIvKipcbiAqIEBmaWxlIHNsb3RcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQge2V4dGVuZH0gZnJvbSAnLi4vc2hhcmVkL3V0aWwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3Qge1xuICAgICAgICBzbG90Q2hpbGRyZW4sXG4gICAgICAgIGxpZmVDeWNsZSxcbiAgICAgICAgc291cmNlU2xvdHNcbiAgICB9ID0gdGhpcztcblxuICAgIGlmIChsaWZlQ3ljbGUuYXR0YWNoZWQpIHtcbiAgICAgICAgcmV0dXJuIHNsb3RDaGlsZHJlbi5yZWR1Y2UoKHByZXYsIGNoaWxkKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gY2hpbGQubmFtZSB8fCAnZGVmYXVsdCc7XG4gICAgICAgICAgICBpZiAoIXByZXZbbmFtZV0pIHtcbiAgICAgICAgICAgICAgICBwcmV2W25hbWVdID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcmV2W25hbWVdID0gcHJldltuYW1lXS5jb25jYXQoY2hpbGQuY2hpbGRyZW4pO1xuICAgICAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICAgIH0sIHt9KTtcbiAgICB9XG5cbiAgICBjb25zdCBzbG90cyA9IHt9O1xuXG4gICAgaWYgKHNvdXJjZVNsb3RzLm5hbWVkKSB7XG4gICAgICAgIGV4dGVuZChzbG90cywgc291cmNlU2xvdHMubmFtZWQpO1xuICAgIH1cbiAgICBpZiAoc291cmNlU2xvdHMubm9uYW1lKSB7XG4gICAgICAgIHNsb3RzLmRlZmF1bHQgPSBzb3VyY2VTbG90cy5ub25hbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNsb3RzO1xuXG59XG4iLCIvKipcbiAqIEBmaWxlIGVudHJ5XG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuZXhwb3J0IHtkZWZhdWx0IGFzIGRlZmluZUNvbXBvbmVudH0gZnJvbSAnLi9kZWZpbmUtY29tcG9uZW50JztcbiIsIi8qKlxuICogQGZpbGUgY29tcG9uZW50XG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0ICcuL292ZXJyaWRlLWRhdGEtZ2V0JztcblxuaW1wb3J0IHtkZWZpbmVDb21wb25lbnQsIGluaGVyaXRzLCBDb21wb25lbnQsIG5leHRUaWNrfSBmcm9tICdzYW4nO1xuaW1wb3J0IHtleHRlbmQsIGh5cGhlbmF0ZSwgZGVmfSBmcm9tICcuLi9zaGFyZWQvdXRpbCc7XG5pbXBvcnQgbWVyZ2VDbGFzcyBmcm9tICcuL21lcmdlLWNsYXNzJztcbmltcG9ydCBtZXJnZVN0eWxlIGZyb20gJy4vbWVyZ2Utc3R5bGUnO1xuaW1wb3J0IGxvb3BFeHByZXNzaW9uIGZyb20gJy4vbG9vcC1leHByZXNzaW9uJztcbmltcG9ydCBnZXRDb21wb25lbnRUeXBlIGZyb20gJy4vZ2V0LWNvbXBvbmVudC10eXBlJztcbmltcG9ydCBvYmplY3RDb21wdXRlZFByb3BlcnRpZXMgZnJvbSAnLi9vYmplY3QtY29tcHV0ZWQtcHJvcGVydGlycyc7XG5pbXBvcnQgcmVmIGZyb20gJy4vcmVmJztcbmltcG9ydCBtZXJnZU9wdGlvbnMgZnJvbSAnLi9tZXJnZS1vcHRpb25zJztcbmltcG9ydCBiaW5kRGF0YSBmcm9tICcuL2JpbmQtZGF0YSc7XG5pbXBvcnQgY2FsY0NvbXB1dGVkIGZyb20gJy4vY2FsYy1jb21wdXRlZCc7XG5pbXBvcnQgc2xvdCBmcm9tICcuL2dldC1zbG90cyc7XG5pbXBvcnQge2NhbGxBY3Rpdml0ZWQsIGNhbGxEZUFjdGl2aXRlZH0gZnJvbSAnLi9jYWxsLWFjdGl2YXRlZC1ob29rJztcbmltcG9ydCBUcmFuc2l0aW9uIGZyb20gJy4vdHJhbnNpdGlvbic7XG5cbi8qIGVzbGludC1kaXNhYmxlIGZlY3MtY2FtZWxjYXNlICovXG5jb25zdCBkZWZhdWx0U2FuT3B0aW9ucyA9IHtcbiAgICAkYWN0aXZhdGU6IGNhbGxBY3Rpdml0ZWQsXG4gICAgJGRlYWN0aXZhdGU6IGNhbGxEZUFjdGl2aXRlZCxcbiAgICBfbWM6IG1lcmdlQ2xhc3MsXG4gICAgX21zOiBtZXJnZVN0eWxlLFxuICAgIF9sOiBsb29wRXhwcmVzc2lvbixcbiAgICBfZXg6IGV4dGVuZCxcbiAgICBfb2NwOiBvYmplY3RDb21wdXRlZFByb3BlcnRpZXMsXG4gICAgX25vb3A6IGZ1bmN0aW9uICgpIHt9LFxuICAgIF90OiBUcmFuc2l0aW9uLFxuICAgIGdldENvbXBvbmVudFR5cGUsXG4gICAgJGVtaXQ6IENvbXBvbmVudC5wcm90b3R5cGUuZmlyZSxcbiAgICAkb246IENvbXBvbmVudC5wcm90b3R5cGUub24sXG4gICAgJHdhdGNoOiBDb21wb25lbnQucHJvdG90eXBlLndhdGNoLFxuICAgICRuZXh0VGljazogbmV4dFRpY2tcbn07XG4vKiBlc2xpbnQtZW5hYmxlIGZlY3MtY2FtZWxjYXNlICovXG5cbmNvbnN0IG1lbWJlck1hcCA9IHtcbiAgICAkZWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsO1xuICAgIH0sXG4gICAgJGNvbnRleHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm93bmVyO1xuICAgIH0sXG4gICAgJHBhcmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50Q29tcG9uZW50O1xuICAgIH0sXG4gICAgJGNoaWxkcmVuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5maWx0ZXIoY2hpbGQgPT4gY2hpbGQubm9kZVR5cGUgPT09IDUpO1xuICAgIH0sXG4gICAgJHJvb3QoKSB7XG4gICAgICAgIGxldCByb290ID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMucGFyZW50Q29tcG9uZW50KSB7XG4gICAgICAgICAgICB3aGlsZSAocm9vdC5wYXJlbnRDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICByb290ID0gcm9vdC5wYXJlbnRDb21wb25lbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcm9vdDtcbiAgICB9LFxuICAgICRzbG90czogc2xvdCxcbiAgICBfaXNEZXN0cm95ZWQoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMubGlmZUN5Y2xlLmRpc3Bvc2VkO1xuICAgIH1cbn07XG5cbmNvbnN0IG9yaWdpbmFsVXBkYXRlID0gQ29tcG9uZW50LnByb3RvdHlwZS5fdXBkYXRlO1xuXG5Db21wb25lbnQucHJvdG90eXBlLl91cGRhdGUgPSBmdW5jdGlvbiAoY2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMuX3RvUGhhc2UoJ2JlZm9yZVVwZGF0ZScpO1xuICAgIH1cbiAgICBvcmlnaW5hbFVwZGF0ZS5jYWxsKHRoaXMsIGNoYW5nZXMpO1xufTtcblxuY29uc3QgaW5uZXJLZXkgPSAnX1NhbkN0b3InO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWZpbmUob3B0aW9ucykge1xuXG4gICAgaWYgKG9wdGlvbnNbaW5uZXJLZXldKSB7XG4gICAgICAgIHJldHVybiBvcHRpb25zW2lubmVyS2V5XTtcbiAgICB9XG5cbiAgICBjb25zdCBzYW5PcHRpb25zID0gZXh0ZW5kKHtcbiAgICAgICAgdGVtcGxhdGU6IG9wdGlvbnMuX19zYW50ZW1wbGF0ZSxcbiAgICAgICAgYU5vZGU6IG9wdGlvbnMuX19zYW5hTm9kZSxcbiAgICAgICAgX2lzU2FuOiB0cnVlLFxuICAgIH0sIGRlZmF1bHRTYW5PcHRpb25zLCBtZXJnZU9wdGlvbnMob3B0aW9ucykpO1xuXG4gICAgY29uc3QgY29tcGlsZWRIb29rID0gc2FuT3B0aW9ucy5jb21waWxlZDtcbiAgICBzYW5PcHRpb25zLmNvbXBpbGVkID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHRoaXMuX2NhbGNDb21wdXRlZCA9IGNhbGNDb21wdXRlZC5iaW5kKHRoaXMpO1xuICAgICAgICBjb21waWxlZEhvb2sgJiYgY29tcGlsZWRIb29rLmNhbGwodGhpcyk7XG5cbiAgICAgICAgY29uc3QgcHJvcGVydGllcyA9IE9iamVjdFxuICAgICAgICAgICAgLmtleXMobWVtYmVyTWFwKVxuICAgICAgICAgICAgLnJlZHVjZSgocHJvcHMsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIHByb3BzW2tleV0gPSB7XG4gICAgICAgICAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtZW1iZXJNYXBba2V5XS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvcHM7XG4gICAgICAgICAgICB9LCB7fSk7XG5cbiAgICAgICAgcHJvcGVydGllcy4kb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHZhbHVlOiBvcHRpb25zXG4gICAgICAgIH07XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywgcHJvcGVydGllcyk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlZnMgPSBvcHRpb25zLl9fc2FuUmVmcztcbiAgICBjb25zdCBpbml0ZWRIb29rID0gc2FuT3B0aW9ucy5pbml0ZWQ7XG4gICAgc2FuT3B0aW9ucy5pbml0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IG1lID0gdGhpcztcbiAgICAgICAgdGhpcy4kcmVmcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbiAgICAgICAgaWYgKHJlZnMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSByZWZzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgciA9IHJlZnNbaV07XG4gICAgICAgICAgICAgICAgZGVmKG1lLiRyZWZzLCByLm5hbWUsIHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHIucm9vdCA/IG1lLmVsIDogbWUucmVmKHIubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIG92ZXJ3cml0ZSBzYW4gY29tcG9uZW50IGFwaSBmb3Igc3VwcG9ydCB2LWZvciArIHJlZlxuICAgICAgICAgICAgbWUucmVmID0gcmVmO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5pdGVkSG9vayAmJiBpbml0ZWRIb29rLmNhbGwodGhpcyk7XG5cbiAgICAgICAgLy8gbWVyZ2UgY3NzIG1vZHVsZXNcbiAgICAgICAgaWYgKHRoaXMuJHN0eWxlKSB7XG4gICAgICAgICAgICBleHRlbmQodGhpcy5kYXRhLnJhdy4kc3R5bGUsIHRoaXMuJHN0eWxlKVxuICAgICAgICB9XG5cbiAgICAgICAgYmluZERhdGEuY2FsbCh0aGlzKTtcblxuICAgICAgICBpZiAob3B0aW9ucy53YXRjaCkge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMob3B0aW9ucy53YXRjaCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMud2F0Y2goa2V5LCBvcHRpb25zLndhdGNoW2tleV0uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLnByZXByb2Nlc3NBTm9kZSkge1xuICAgICAgICAgICAgb3B0aW9ucy5wcmVwcm9jZXNzQU5vZGUuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBiZWZvcmVVcGRhdGVIb29rID0gc2FuT3B0aW9ucy5iZWZvcmVVcGRhdGU7XG4gICAgc2FuT3B0aW9ucy5iZWZvcmVVcGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGJlZm9yZVVwZGF0ZUhvb2sgJiYgYmVmb3JlVXBkYXRlSG9vay5jYWxsKHRoaXMpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLnByZXByb2Nlc3NBTm9kZSkge1xuICAgICAgICAgICAgb3B0aW9ucy5wcmVwcm9jZXNzQU5vZGUuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBzYW5PcHRpb25zLmluaXREYXRhID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGNvbnN0IG1lID0gdGhpcztcblxuICAgICAgICBjb25zdCBkZWZhdWx0UHJvcHMgPSB7fTtcbiAgICAgICAgaWYgKG9wdGlvbnMucHJvcHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb3BLZXlzID0gbWUuX3Byb3BLZXlzID0gb3B0aW9ucy5fcHJvcEtleXMgPSBvcHRpb25zLnByb3BzXG4gICAgICAgICAgICAgICAgPyAoQXJyYXkuaXNBcnJheShvcHRpb25zLnByb3BzKSA/IG9wdGlvbnMucHJvcHMgOiBPYmplY3Qua2V5cyhvcHRpb25zLnByb3BzKSlcbiAgICAgICAgICAgICAgICA6IFtdO1xuXG4gICAgICAgICAgICAvLyDpu5jorqTlsZ7mgKdcbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShvcHRpb25zLnByb3BzKSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBwcm9wS2V5cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwID0gcHJvcEtleXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3AgPSBvcHRpb25zLnByb3BzW3BdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoJ2RlZmF1bHQnIGluIHByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRQcm9wc1twXSA9IHR5cGVvZiBwcm9wLmRlZmF1bHQgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHByb3AuZGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBwcm9wLmRlZmF1bHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBtZS5fcHJvcEtleXMgPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLmNvbXB1dGVkKSB7XG4gICAgICAgICAgICBtZS5fY29tcHV0ZWRLZXlzID0gT2JqZWN0LmtleXMob3B0aW9ucy5jb21wdXRlZCk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gbWUuX2NvbXB1dGVkS2V5czsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgayA9IG1lLl9jb21wdXRlZEtleXNbaV07XG4gICAgICAgICAgICAgICAgZGVmKG1lLCBrLCB7XG4gICAgICAgICAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtZS5kYXRhLmdldChrKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbWUuX2NvbXB1dGVkS2V5cyA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IHR5cGVvZiBvcHRpb25zLmRhdGEgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgID8gb3B0aW9ucy5kYXRhLmNhbGwoZXh0ZW5kKHt9LCBkZWZhdWx0UHJvcHMsIHRoaXMuX3NyY1NiaW5kRGF0YSkpXG4gICAgICAgICAgICA6IChvcHRpb25zLmRhdGEgfHwge30pO1xuXG4gICAgICAgIHRoaXMuX2RhdGFLZXlzID0gT2JqZWN0LmtleXMoZGF0YSkgfHwgW107XG5cbiAgICAgICAgcmV0dXJuIGV4dGVuZCh7JHN0eWxlOiB7fX0sIGRlZmF1bHRQcm9wcywgZGF0YSk7XG4gICAgfTtcblxuICAgIGlmIChvcHRpb25zLmNvbXBvbmVudHMpIHtcbiAgICAgICAgc2FuT3B0aW9ucy5jb21wb25lbnRzID0gT2JqZWN0XG4gICAgICAgICAgICAua2V5cyhvcHRpb25zLmNvbXBvbmVudHMpXG4gICAgICAgICAgICAucmVkdWNlKChwcmV2LCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBvcHRpb25zLmNvbXBvbmVudHNba2V5XTtcbiAgICAgICAgICAgICAgICBwcmV2W2tleV0gPSBwcmV2W2h5cGhlbmF0ZShrZXkpXSA9IGNvbXBvbmVudCBpbnN0YW5jZW9mIENvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICA/IGNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICA6IChjb21wb25lbnQudGVtcGxhdGUgfHwgY29tcG9uZW50LmFOb2RlID8gZGVmaW5lQ29tcG9uZW50KGNvbXBvbmVudCkgOiBkZWZpbmUoY29tcG9uZW50KSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICAgICAgICB9LCB7fSk7XG4gICAgICAgIHNhbk9wdGlvbnMuX2NtcHRSZWFkeSA9IDE7XG4gICAgfVxuXG4gICAgY29uc3QgY21wdCA9IGRlZmluZUNvbXBvbmVudChzYW5PcHRpb25zKTtcblxuICAgIHJldHVybiBvcHRpb25zW2lubmVyS2V5XSA9IGNtcHQ7XG59XG5cbiIsIi8qKlxuICogQGZpbGUgb3ZlcnJpZGUgZXZhbCBleHByXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHtEYXRhLCBwYXJzZUV4cHIsIEV4cHJUeXBlLCBldmFsRXhwcn0gZnJvbSAnc2FuJztcblxuY29uc3Qgb3JpZ2luYWxHZXQgPSBEYXRhLnByb3RvdHlwZS5nZXQ7XG5cbkRhdGEucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChleHByLCBjYWxsZWUpIHtcbiAgICBpZiAoZXhwciAmJiB0eXBlb2YgZXhwciAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXhwciA9IHBhcnNlRXhwcihleHByKTtcbiAgICB9XG4gICAgbGV0IHZhbHVlID0gb3JpZ2luYWxHZXQuY2FsbCh0aGlzLCBleHByLCBjYWxsZWUpO1xuICAgIGlmICghZXhwciB8fCB2YWx1ZSAhPT0gdW5kZWZpbmVkIHx8ICF0aGlzLm93bmVyIHx8IGV4cHIudHlwZSAhPT0gRXhwclR5cGUuQUNDRVNTT1IpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBjb25zdCBwYXRocyA9IGV4cHIucGF0aHM7XG4gICAgY29uc3QgZmlyc3QgPSBwYXRoc1swXS52YWx1ZTtcbiAgICBpZiAoXG4gICAgICAgIFtcbiAgICAgICAgICAgIC4uLnRoaXMub3duZXIuX3Byb3BLZXlzLFxuICAgICAgICAgICAgLi4udGhpcy5vd25lci5fZGF0YUtleXMsXG4gICAgICAgICAgICAuLi50aGlzLm93bmVyLl9jb21wdXRlZEtleXNcbiAgICAgICAgXS5pbmRleE9mKGZpcnN0KSA+PSAwXG4gICAgKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgdmFsdWUgPSB0aGlzLm93bmVyW2ZpcnN0XTtcbiAgICBmb3IgKHZhciBpID0gMSwgbCA9IHBhdGhzLmxlbmd0aDsgdmFsdWUgIT0gbnVsbCAmJiBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWVbcGF0aHNbaV0udmFsdWUgfHwgZXZhbEV4cHIocGF0aHNbaV0sIGNhbGxlZSldO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG59O1xuIiwiLyoqXG4gKiBAZmlsZSBtZXJnZSBjbGFzc1xuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmZ1bmN0aW9uIHN0cmluZyhjbHMgPSAnJykge1xuICAgIGlmICghY2xzKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuIGNsc1xuICAgICAgICAuc3BsaXQoJyAnKVxuICAgICAgICAucmVkdWNlKChwcmV2LCBuYW1lKSA9PiB7XG4gICAgICAgICAgICBpZiAoIW5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgICAgICBbbmFtZV06IDFcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sIHt9KTtcbn1cblxuZnVuY3Rpb24gb2JqZWN0KGNscyA9IHt9KSB7XG4gICAgcmV0dXJuIE9iamVjdFxuICAgICAgICAua2V5cyhjbHMpXG4gICAgICAgIC5yZWR1Y2UoKHByZXYsIGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFjbHNba2V5XSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgICAgIC4uLnN0cmluZyhrZXkpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LCB7fSk7XG59XG5cbmZ1bmN0aW9uIGFycmF5KGNscyA9IFtdKSB7XG4gICAgbGV0IGNsYXp6ID0ge307XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGNscy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gY2xzW2ldO1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGNsYXp6ID0ge1xuICAgICAgICAgICAgLi4uY2xhenosXG4gICAgICAgICAgICAuLi4oXG4gICAgICAgICAgICAgICAgdHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgPyBzdHJpbmcoZWxlbWVudClcbiAgICAgICAgICAgICAgICA6IChBcnJheS5pc0FycmF5KGVsZW1lbnQpID8gYXJyYXkoZWxlbWVudCkgOiBvYmplY3QoZWxlbWVudCkpXG4gICAgICAgICAgICApXG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBjbGF6ejtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRpY0NsYXNzID0gJycsIGNscyA9IHt9KSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGFycmF5KFtzdGF0aWNDbGFzcywgY2xzXSkpLmpvaW4oJyAnKTtcbn1cbiIsIi8qKlxuICogQGZpbGUgbWVyZ2Ugc3R5bGVcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQge2NhY2hlZCwgZXh0ZW5kLCB0b09iamVjdH0gZnJvbSAnLi4vc2hhcmVkL3V0aWwnO1xuXG5jb25zdCBwYXJzZVN0eWxlVGV4dCA9IGNhY2hlZChmdW5jdGlvbiAoY3NzVGV4dCkge1xuICAgIGNvbnN0IHJlcyA9IHt9O1xuICAgIGNvbnN0IGxpc3REZWxpbWl0ZXIgPSAvOyg/IVteKF0qXFwpKS9nO1xuICAgIGNvbnN0IHByb3BlcnR5RGVsaW1pdGVyID0gLzooLispLztcbiAgICBjc3NUZXh0LnNwbGl0KGxpc3REZWxpbWl0ZXIpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgIHZhciB0bXAgPSBpdGVtLnNwbGl0KHByb3BlcnR5RGVsaW1pdGVyKTtcbiAgICAgICAgICAgIHRtcC5sZW5ndGggPiAxICYmIChyZXNbdG1wWzBdLnRyaW0oKV0gPSB0bXBbMV0udHJpbSgpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXM7XG59KTtcblxuLy8gbm9ybWFsaXplIHBvc3NpYmxlIGFycmF5IC8gc3RyaW5nIHZhbHVlcyBpbnRvIE9iamVjdFxuZnVuY3Rpb24gbm9ybWFsaXplU3R5bGVCaW5kaW5nKGJpbmRpbmdTdHlsZSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGJpbmRpbmdTdHlsZSkpIHtcbiAgICAgICAgcmV0dXJuIHRvT2JqZWN0KGJpbmRpbmdTdHlsZSk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgYmluZGluZ1N0eWxlID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gcGFyc2VTdHlsZVRleHQoYmluZGluZ1N0eWxlKTtcbiAgICB9XG4gICAgcmV0dXJuIGJpbmRpbmdTdHlsZTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGljU3R5bGUsIHN0eWxlLCB2U2hvdyA9IHRydWUpIHtcbiAgICBzdHlsZSA9IG5vcm1hbGl6ZVN0eWxlQmluZGluZyhzdHlsZSk7XG4gICAgaWYgKCF2U2hvdykge1xuICAgICAgICBzdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgICByZXR1cm4gc3RhdGljU3R5bGVcbiAgICAgICAgPyBleHRlbmQoc3RhdGljU3R5bGUsIHN0eWxlKVxuICAgICAgICA6IHN0eWxlO1xufVxuIiwiLyoqXG4gKiBAZmlsZSBsb29wIGV4cHJlc3Npb25cbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQge2NhY2hlZH0gZnJvbSAnLi4vc2hhcmVkL3V0aWwnO1xuXG5jb25zdCB0b0FycmF5ID0gY2FjaGVkKGZ1bmN0aW9uIChuKSB7XG4gICAgY29uc3QgdmFsdWUgPSBuZXcgQXJyYXkobik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgdmFsdWVbaV0gPSBpICsgMTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICghaXNOYU4odmFsdWUpKSB7XG4gICAgICAgIGNvbnN0IG4gPSArdmFsdWU7XG4gICAgICAgIHZhbHVlID0gdG9BcnJheShuKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuXG4iLCIvKipcbiAqIEBmaWxlIGdldCBjb21wb25lbnQgdHlwZVxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCB7ZXZhbEV4cHJ9IGZyb20gJ3Nhbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChhTm9kZSwgZGF0YSkge1xuICAgIGlmIChhTm9kZS50YWdOYW1lICE9PSAnY29tcG9uZW50JyB8fCBhTm9kZS5ob3RzcG90LnByb3BzLmlzID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50c1thTm9kZS50YWdOYW1lXTtcbiAgICB9XG5cbiAgICBjb25zdCBpcyA9IGFOb2RlLnByb3BzW2FOb2RlLmhvdHNwb3QucHJvcHMuaXNdO1xuICAgIGNvbnN0IGlzVmFsdWUgPSBldmFsRXhwcihpcy5leHByLCBkYXRhKTtcbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnRzW2lzVmFsdWVdO1xufVxuIiwiLyoqXG4gKiBAZmlsZSBvYmplY3QgY29tcHV0ZWQgcHJvcGVydGllcyBtZXJnZVxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwcm9wZXJ0aWVzKSB7XG4gICAgcmV0dXJuIHByb3BlcnRpZXMucmVkdWNlKChwcmV2LCB7aywgdn0pID0+IHtcbiAgICAgICAgcHJldltrXSA9IHY7XG4gICAgICAgIHJldHVybiBwcmV2O1xuICAgIH0sIHt9KTtcbn1cbiIsIi8qKlxuICogQGZpbGUgc2FuIHJlZiByZXdyaXRlXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0ICogYXMgc2FuIGZyb20gJ3Nhbic7XG5pbXBvcnQge2NhbWVsaXplfSBmcm9tICcuLi9zaGFyZWQvdXRpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChuYW1lKSB7XG5cbiAgICBjb25zdCBvd25lciA9IHRoaXM7XG5cbiAgICBmdW5jdGlvbiBjaGlsZHJlblRyYXZlcnNhbChjaGlsZHJlbikge1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGxldCByZWZUYXJnZXQgPSBlbGVtZW50VHJhdmVyc2FsKGNoaWxkcmVuW2ldKTtcbiAgICAgICAgICAgIGlmIChyZWZUYXJnZXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVmVGFyZ2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZWxlbWVudFRyYXZlcnNhbChlbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IG5vZGVUeXBlID0gZWxlbWVudC5ub2RlVHlwZTtcbiAgICAgICAgaWYgKG5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlZlRhcmdldDtcbiAgICAgICAgaWYgKGVsZW1lbnQub3duZXIgPT09IG93bmVyKSB7XG4gICAgICAgICAgICBsZXQgcmVmO1xuICAgICAgICAgICAgbGV0IHZhbHVlO1xuICAgICAgICAgICAgc3dpdGNoIChub2RlVHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIHJlZiA9IGVsZW1lbnQuYU5vZGUuZGlyZWN0aXZlcy5yZWY7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gcmVmICYmIHNhbi5ldmFsRXhwcihyZWYudmFsdWUsIGVsZW1lbnQuc2NvcGUsIG93bmVyKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlZiAmJiAodmFsdWUgPT09IG5hbWUgfHwgY2FtZWxpemUodmFsdWUpID09PSBuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5vZGVUeXBlID09PSA0ID8gZWxlbWVudC5lbCA6IGVsZW1lbnQuY2hpbGRyZW4ubWFwKGVsZW1lbnRUcmF2ZXJzYWwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICByZWYgPSBlbGVtZW50LnNvdXJjZS5kaXJlY3RpdmVzLnJlZjtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBzYW4uZXZhbEV4cHIocmVmLnZhbHVlLCBlbGVtZW50LnNjb3BlLCBvd25lcik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWYgJiYgKHZhbHVlID09PSBuYW1lIHx8IGNhbWVsaXplKHZhbHVlKSA9PT0gbmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlZlRhcmdldCA9IGVsZW1lbnQuc2xvdENoaWxkcmVuICYmIGNoaWxkcmVuVHJhdmVyc2FsKGVsZW1lbnQuc2xvdENoaWxkcmVuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZWZUYXJnZXQgfHwgY2hpbGRyZW5UcmF2ZXJzYWwoZWxlbWVudC5jaGlsZHJlbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkcmVuVHJhdmVyc2FsKHRoaXMuY2hpbGRyZW4pO1xufTtcbiIsIi8qKlxuICogQGZpbGUgbWVyZ2Ugb3B0aW9uc1xuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCB7ZXh0ZW5kfSBmcm9tICcuLi9zaGFyZWQvdXRpbCc7XG5pbXBvcnQge2xpZmVDeWNsZUtleXMsIGxpZmVDeWNsZU1hcH0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQgYXRvbUJ1aWxkSW5NaXhpbiBmcm9tICcuL2F0b20tZ2xvYmFsLWFwaSc7XG5cbmNvbnN0IGtleXMgPSBbXG4gICAgJ2ZpbHRlcnMnLFxuICAgICdjb21wdXRlZCdcbl07XG5cbmZ1bmN0aW9uIG1lcmdlSG9vayhwYXJlbnRWYWwsIGNoaWxkVmFsKSB7XG4gICAgcmV0dXJuIGNoaWxkVmFsXG4gICAgICAgID8gcGFyZW50VmFsXG4gICAgICAgICAgICA/IHBhcmVudFZhbC5jb25jYXQoY2hpbGRWYWwpXG4gICAgICAgICAgICA6IEFycmF5LmlzQXJyYXkoY2hpbGRWYWwpXG4gICAgICAgICAgICAgICAgPyBjaGlsZFZhbFxuICAgICAgICAgICAgICAgIDogW2NoaWxkVmFsXVxuICAgICAgICAgICAgOiBwYXJlbnRWYWw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lcmdlT3B0aW9ucyhvcHRpb25zKSB7XG4gICAgY29uc3QgZGVzdE9wdGlvbnMgPSB7fTtcbiAgICBjb25zdCBsaXN0ID0gQXJyYXkuaXNBcnJheShvcHRpb25zLm1peGlucylcbiAgICAgICAgPyBbYXRvbUJ1aWxkSW5NaXhpbiwgLi4ub3B0aW9ucy5taXhpbnMsIG9wdGlvbnNdXG4gICAgICAgIDogW2F0b21CdWlsZEluTWl4aW4sIG9wdGlvbnNdO1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBsaXN0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG9wdCA9IGxpc3RbaV07XG4gICAgICAgIG9wdC5tZXRob2RzICYmIGV4dGVuZChkZXN0T3B0aW9ucywgb3B0Lm1ldGhvZHMpO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGtleXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGsgPSBrZXlzW2pdO1xuICAgICAgICAgICAgaWYgKG9wdFtrXSkge1xuICAgICAgICAgICAgICAgIGRlc3RPcHRpb25zW2tdID0gZXh0ZW5kKGRlc3RPcHRpb25zW2tdIHx8IHt9LCBvcHRba10pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGlmZUN5Y2xlS2V5cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgY29uc3QgayA9IGxpZmVDeWNsZUtleXNbal07XG4gICAgICAgICAgICBjb25zdCBkayA9IGxpZmVDeWNsZU1hcFtrXTtcbiAgICAgICAgICAgIGlmIChvcHRba10pIHtcbiAgICAgICAgICAgICAgICBkZXN0T3B0aW9uc1tka10gPSBtZXJnZUhvb2soZGVzdE9wdGlvbnNbZGtdIHx8IFtdLCBvcHRba10pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGlmZUN5Y2xlS2V5cy5sZW5ndGg7IGorKykge1xuICAgICAgICBjb25zdCBrID0gbGlmZUN5Y2xlS2V5c1tqXTtcbiAgICAgICAgY29uc3QgZGsgPSBsaWZlQ3ljbGVNYXBba107XG4gICAgICAgIGlmIChkZXN0T3B0aW9uc1tka10pIHtcbiAgICAgICAgICAgIGNvbnN0IGhvb2tzID0gZGVzdE9wdGlvbnNbZGtdLnNsaWNlKCk7XG4gICAgICAgICAgICBkZXN0T3B0aW9uc1tka10gPSBob29rcy5sZW5ndGggPT09IDEgPyBob29rc1swXSA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBob29rcy5mb3JFYWNoKGhvb2sgPT4gaG9vay5jYWxsKHRoaXMpLCB0aGlzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKG9wdGlvbnMubWVzc2FnZXMpIHtcbiAgICAgICAgZGVzdE9wdGlvbnMubWVzc2FnZXMgPSBvcHRpb25zLm1lc3NhZ2VzO1xuICAgIH1cbiAgICByZXR1cm4gZGVzdE9wdGlvbnM7XG59XG4iLCIvKipcbiAqIEBmaWxlIGNvbnN0YW50c1xuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmV4cG9ydCBjb25zdCBsaWZlQ3ljbGVNYXAgPSB7XG4gICAgYmVmb3JlQ3JlYXRlOiAnY29tcGlsZWQnLFxuICAgIG1vdW50ZWQ6ICdhdHRhY2hlZCcsXG4gICAgY3JlYXRlZDogJ2luaXRlZCcsXG4gICAgYmVmb3JlTW91bnQ6ICdjcmVhdGVkJyxcbiAgICBiZWZvcmVEZXN0cm95OiAnZGV0YWNoZWQnLFxuICAgIGRlc3Ryb3k6ICdkaXNwb3NlZCcsXG4gICAgdXBkYXRlZDogJ3VwZGF0ZWQnLFxuICAgIGJlZm9yZVVwZGF0ZTogJ2JlZm9yZVVwZGF0ZScsXG4gICAgYWN0aXZhdGVkOiAnYWN0aXZhdGVkJyxcbiAgICBkZWFjdGl2YXRlZDogJ2RlYWN0aXZhdGVkJ1xufTtcblxuZXhwb3J0IGNvbnN0IGxpZmVDeWNsZUtleXMgPSBPYmplY3Qua2V5cyhsaWZlQ3ljbGVNYXApO1xuIiwiLyoqXG4gKiBAZmlsZSDlhajlsYDnlJ/mlYjnmoTlh73mlbBcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5jb25zdCBNQVRIX01FVEhPRCA9IFtcbiAgICAnZmxvb3InLCAnY2VpbCcsICdyb3VuZCcsXG4gICAgJ2FicycsICdtYXgnLCAnbWluJywgJ3Bvdydcbl07XG5cbmNvbnN0IG1ldGhvZHMgPSBleHBvcnRzLm1ldGhvZHMgPSB7fTtcblxuTUFUSF9NRVRIT0QuZm9yRWFjaChuYW1lID0+IHtcbiAgICBtZXRob2RzW2BtYXRoXyR7bmFtZX1gXSA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICAgIHJldHVybiBNYXRoW25hbWVdLmFwcGx5KE1hdGgsIGFyZ3MpO1xuICAgIH07XG59KTtcblxubWV0aG9kcy5hcnJheV9zbGljZSA9IGZ1bmN0aW9uIChhcnIsIHN0YXJ0LCBsZW4pIHtcbiAgICB2YXIgZW5kID0gbGVuID09IG51bGwgPyB2b2lkIDAgOiAobGVuID49IDAgPyAoc3RhcnQgKyBsZW4pIDogKGFyci5sZW5ndGggKyBsZW4pKTtcbiAgICByZXR1cm4gYXJyLnNsaWNlKHN0YXJ0LCBlbmQpO1xufTtcblxubWV0aG9kcy5hcnJheV9qb2luID0gZnVuY3Rpb24gKGFyciwgc2VwKSB7XG4gICAgcmV0dXJuIGFyci5qb2luKHNlcCk7XG59O1xuXG5tZXRob2RzLnN0cl9wb3MgPSBmdW5jdGlvbiAoc3RyLCBtYXRjaCkge1xuICAgIHJldHVybiBzdHIuaW5kZXhPZihtYXRjaCk7XG59O1xuXG5tZXRob2RzLm9iamVjdF9mcmVlemUgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIE9iamVjdC5mcmVlemUob2JqKTtcbn07XG5cbmV4cG9ydHMuZmlsdGVycyA9IHtcbiAgICBqc29uKG9iaikge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoanNvbik7XG4gICAgfSxcbiAgICBsb3dlcihzdHIpIHtcbiAgICAgICAgcmV0dXJuIHN0ci50b0xvd2VyQ2FzZSgpO1xuICAgIH0sXG4gICAgdXBwZXIoc3RyKSB7XG4gICAgICAgIHJldHVybiBzdHIudG9VcHBlckNhc2UoKTtcbiAgICB9XG59O1xuIiwiLyoqXG4gKiBAZmlsZSDmlbDmja7nu5HlrppcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQge2lzT2JqZWN0LCBoYXNPd24sIGlzUGxhaW5PYmplY3QsIGV4dGVuZCwgZGVmfSBmcm9tICcuLi9zaGFyZWQvdXRpbCc7XG5pbXBvcnQge0V4cHJUeXBlfSBmcm9tICdzYW4nO1xuXG5jb25zdCBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuY29uc3QgYXJyYXlNZXRob2RzID0gT2JqZWN0LmNyZWF0ZShhcnJheVByb3RvKTtcblxuY29uc3QgbWV0aG9kc1RvUGF0Y2ggPSBbXG4gICAgJ3B1c2gnLFxuICAgICdwb3AnLFxuICAgICdzaGlmdCcsXG4gICAgJ3Vuc2hpZnQnLFxuICAgICdzcGxpY2UnXG4gICAgLy8gJ3NvcnQnLFxuICAgIC8vICdyZXZlcnNlJ1xuXTtcblxuLyoqXG4gKiBJbnRlcmNlcHQgbXV0YXRpbmcgbWV0aG9kcyBhbmQgZW1pdCBldmVudHNcbiAqL1xubWV0aG9kc1RvUGF0Y2guZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XG4gICAgLy8gY2FjaGUgb3JpZ2luYWwgbWV0aG9kXG4gICAgY29uc3Qgb3JpZ2luYWwgPSBhcnJheVByb3RvW21ldGhvZF1cbiAgICBkZWYoYXJyYXlNZXRob2RzLCBtZXRob2QsIHtcbiAgICAgICAgdmFsdWUoLi4uYXJncykge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gb3JpZ2luYWwuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgICAgICBjb25zdCBvYiA9IHRoaXMuX19vYl9fO1xuICAgICAgICAgICAgbGV0IGluc2VydGVkO1xuICAgICAgICAgICAgc3dpdGNoIChtZXRob2QpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdwdXNoJzpcbiAgICAgICAgICAgICAgICBjYXNlICd1bnNoaWZ0JzpcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0ZWQgPSBhcmdzO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdzcGxpY2UnOlxuICAgICAgICAgICAgICAgICAgICBpbnNlcnRlZCA9IGFyZ3Muc2xpY2UoMik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGluc2VydGVkKSB7XG4gICAgICAgICAgICAgICAgb2Iub2JzZXJ2ZUFycmF5KGluc2VydGVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9iLmNvbnRleHQuZGF0YVttZXRob2RdLmNhbGwob2IuY29udGV4dC5kYXRhLCBvYi5leHByLCAuLi5hcmdzKTtcbiAgICAgICAgICAgIG9ic2VydmUob2IuY29udGV4dC5kYXRhLmdldChvYi5leHByKSwgb2IuZXhwciwgb2IuY29udGV4dCk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgfSlcbn0pO1xuXG5jbGFzcyBPYnNlcnZlciB7XG5cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSwgZXhwciwgY29udGV4dCkge1xuICAgICAgICB0aGlzLmV4cHIgPSBleHByO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICBkZWYodmFsdWUsICdfX29iX18nLCB7XG4gICAgICAgICAgICB2YWx1ZTogdGhpc1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZS5fX3Byb3RvX18gPSBhcnJheU1ldGhvZHM7XG4gICAgICAgICAgICB0aGlzLm9ic2VydmVBcnJheSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSkgfHwgW107XG4gICAgICAgICAgICB0aGlzLndhbGsodmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2FsayB0aHJvdWdoIGFsbCBwcm9wZXJ0aWVzIGFuZCBjb252ZXJ0IHRoZW0gaW50b1xuICAgICAqIGdldHRlci9zZXR0ZXJzLiBUaGlzIG1ldGhvZCBzaG91bGQgb25seSBiZSBjYWxsZWQgd2hlblxuICAgICAqIHZhbHVlIHR5cGUgaXMgT2JqZWN0LlxuICAgICAqL1xuICAgIHdhbGsob2JqKSB7XG4gICAgICAgIGNvbnN0IGtleXMgPSB0aGlzLmtleXM7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZGVmaW5lUmVhY3RpdmUob2JqLCBrZXlzW2ldLCB0aGlzLmV4cHIsIHRoaXMuY29udGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPYnNlcnZlIGEgbGlzdCBvZiBBcnJheSBpdGVtcy5cbiAgICAgKi9cbiAgICBvYnNlcnZlQXJyYXkoaXRlbXMpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBpdGVtcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIG9ic2VydmUoaXRlbXNbaV0sIGV4dGVuZCh7fSwgdGhpcy5leHByLCB7XG4gICAgICAgICAgICAgICAgcGF0aHM6IFsuLi50aGlzLmV4cHIucGF0aHMsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogRXhwclR5cGUuTlVNQkVSLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9KSwgdGhpcy5jb250ZXh0KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5lUmVhY3RpdmUob2JqLCBrZXksIGV4cHIsIGNvbnRleHQpIHtcblxuICAgIGNvbnN0IHByb3BlcnR5ID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSk7XG4gICAgaWYgKHByb3BlcnR5ICYmIHByb3BlcnR5LmNvbmZpZ3VyYWJsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGNhdGVyIGZvciBwcmUtZGVmaW5lZCBnZXR0ZXIvc2V0dGVyc1xuICAgIGNvbnN0IGdldHRlciA9IHByb3BlcnR5ICYmIHByb3BlcnR5LmdldDtcbiAgICBjb25zdCBzZXR0ZXIgPSBwcm9wZXJ0eSAmJiBwcm9wZXJ0eS5zZXQ7XG5cbiAgICBjb25zdCBrZXlFeHByID0ge1xuICAgICAgICB0eXBlOiBFeHByVHlwZS5BQ0NFU1NPUixcbiAgICAgICAgcGF0aHM6IFsuLi5leHByLnBhdGhzLCB7XG4gICAgICAgICAgICB0eXBlOiBFeHByVHlwZS5TVFJJTkcsXG4gICAgICAgICAgICB2YWx1ZToga2V5XG4gICAgICAgIH1dXG4gICAgfTtcblxuICAgIGxldCB2YWwgPSBvYmpba2V5XTtcbiAgICBvYnNlcnZlKHZhbCwga2V5RXhwciwgY29udGV4dCk7XG4gICAgY29uc3QgbmV3UHJvcGVydHkgPSB7XG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgc2V0KG5ld1ZhbCkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBnZXR0ZXIgPyBnZXR0ZXIuY2FsbChvYmopIDogdmFsO1xuICAgICAgICAgICAgaWYgKG5ld1ZhbCA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZ2V0dGVyICYmICFzZXR0ZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2V0dGVyKSB7XG4gICAgICAgICAgICAgICAgc2V0dGVyLmNhbGwob2JqLCBuZXdWYWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsID0gbmV3VmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb2JzZXJ2ZShuZXdWYWwsIGtleUV4cHIsIGNvbnRleHQpO1xuICAgICAgICAgICAgY29udGV4dC5kYXRhLnNldChrZXlFeHByLCBuZXdWYWwsIHtmb3JjZTogdHJ1ZX0pO1xuICAgICAgICB9LFxuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGdldHRlciA/IGdldHRlci5jYWxsKG9iaikgOiB2YWw7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGRlZihvYmosIGtleSwgbmV3UHJvcGVydHkpO1xufVxuXG5jb25zdCBkZWZhdWx0RXhwciA9IHtcbiAgICB0eXBlOiBFeHByVHlwZS5BQ0NFU1NPUixcbiAgICBwYXRoczogW11cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBleHByID0gZXh0ZW5kKHt9LCBkZWZhdWx0RXhwcik7XG4gICAgY29uc3Qga2V5cyA9IFsuLi50aGlzLl9kYXRhS2V5cywgLi4udGhpcy5fcHJvcEtleXNdO1xuICAgIGNvbnN0IGtleUxlbmd0aCA9IGtleXMubGVuZ3RoO1xuXG4gICAgb2JzZXJ2ZSh0aGlzLmRhdGEuZ2V0KCksIGV4cHIsIHRoaXMpO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXM7XG5cbiAgICB0aGlzLl9kYXRhID0gdGhpcy5kYXRhLmdldCgpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlMZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBrZXkgPSBrZXlzW2ldO1xuICAgICAgICBkZWYoY29udGV4dCwga2V5LCB7XG4gICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRleHQuX2RhdGFba2V5XTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQobmV3VmFsKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5fZGF0YVtrZXldID0gbmV3VmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmRhdGEub3duZXIgPSB0aGlzO1xufVxuXG5mdW5jdGlvbiBvYnNlcnZlKHZhbHVlLCBleHByLCBjb250ZXh0KSB7XG4gICAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgb2I7XG4gICAgaWYgKGhhc093bih2YWx1ZSwgJ19fb2JfXycpICYmIHZhbHVlLl9fb2JfXyBpbnN0YW5jZW9mIE9ic2VydmVyKSB7XG4gICAgICAgIG9iID0gdmFsdWUuX19vYl9fXG4gICAgfVxuICAgIGVsc2UgaWYgKFxuICAgICAgICAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgfHwgaXNQbGFpbk9iamVjdCh2YWx1ZSkpXG4gICAgICAgICYmIE9iamVjdC5pc0V4dGVuc2libGUodmFsdWUpXG4gICAgKSB7XG4gICAgICAgIG9iID0gbmV3IE9ic2VydmVyKHZhbHVlLCBleHByLCBjb250ZXh0KTtcbiAgICB9XG4gICAgcmV0dXJuIG9iO1xufVxuIiwiLyoqXG4gKiBAZmlsZSDopobnm5Ygc2FuIOWOn+eUn+eahCBfY2FsY0NvbXB1dGVkXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHtkZWZ9IGZyb20gJy4uL3NoYXJlZC91dGlsJztcbmltcG9ydCBzbG90cyBmcm9tICcuL2dldC1zbG90cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChrZXkpIHtcbiAgICBsZXQgY29tcHV0ZWREZXBzID0gdGhpcy5jb21wdXRlZERlcHNba2V5XTtcbiAgICBpZiAoIWNvbXB1dGVkRGVwcykge1xuICAgICAgICBjb21wdXRlZERlcHMgPSB0aGlzLmNvbXB1dGVkRGVwc1trZXldID0ge307XG4gICAgfVxuXG4gICAgY29uc3QgbWUgPSB0aGlzO1xuICAgIGNvbnN0IGRhdGEgPSBtZS5kYXRhLmdldCgpO1xuICAgIGNvbnN0IGNvbnRleHQgPSB7fTtcblxuICAgIGRlZihjb250ZXh0LCAnJHJvb3QnLCB7XG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiBtZS4kcm9vdDtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgZGVmKGNvbnRleHQsICckc2xvdHMnLCB7XG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiBzbG90cy5jYWxsKG1lKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGRhdGEpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGsgPSBrZXlzW2ldO1xuICAgICAgICBkZWYoY29udGV4dCwgaywge1xuICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIGlmICghY29tcHV0ZWREZXBzW2tdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXB1dGVkRGVwc1trXSA9IDE7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lLmNvbXB1dGVkW2tdICYmICFtZS5jb21wdXRlZERlcHNba10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLl9jYWxjQ29tcHV0ZWQoayk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBtZS53YXRjaChrLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZS5fY2FsY0NvbXB1dGVkKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBtZS5kYXRhLmdldChrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5kYXRhLnNldChrZXksIHRoaXMuY29tcHV0ZWRba2V5XS5jYWxsKGNvbnRleHQpKTtcbn1cbiIsIi8qKlxuICogQGZpbGUgY2FsbCBhY3RpdmF0ZWQgZGVhY3RpdmF0ZWRcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQge05vZGVUeXBlfSBmcm9tICdzYW4nO1xuXG5mdW5jdGlvbiBjcmVhdGVDYWxsRmFjdG9yeShuYW1lKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGNhbGwoZGlyZWN0KSB7XG4gICAgICAgIGNvbnN0IGVsZSA9IHRoaXM7XG4gICAgICAgIGlmIChlbGUubm9kZVR5cGUgPT09IE5vZGVUeXBlLkNNUFQpIHtcbiAgICAgICAgICAgIGVsZS5fdG9QaGFzZShuYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlLmNoaWxkcmVuICYmIGVsZS5jaGlsZHJlbi5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBlbGUuY2hpbGRyZW4uZm9yRWFjaChjYWxsKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNhbGxBY3Rpdml0ZWQgPSBjcmVhdGVDYWxsRmFjdG9yeSgnYWN0aXZpdGVkJyk7XG5leHBvcnQgY29uc3QgY2FsbERlQWN0aXZpdGVkID0gY3JlYXRlQ2FsbEZhY3RvcnkoJ2RlYWN0aXZpdGVkJyk7XG4iLCIvKipcbiAqIEBmaWxlIHMtdHJhbnNpdGlvblxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCB7Y2FjaGVkLCByZW1vdmUsIGV4dGVuZCwgb25jZSwgaXNPYmplY3R9IGZyb20gJy4uL3NoYXJlZC91dGlsJztcbmltcG9ydCB7YWRkQ2xhc3MsIHJlbW92ZUNsYXNzfSBmcm9tICcuL2NsYXNzLXV0aWwnO1xuXG5mdW5jdGlvbiByZXNvbHZlVHJhbnNpdGlvbihkZWYpIHtcbiAgICBpZiAoIWRlZikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKHR5cGVvZiBkZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IHt9O1xuICAgICAgICBpZiAoZGVmLmNzcyAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGV4dGVuZChyZXMsIGF1dG9Dc3NUcmFuc2l0aW9uKGRlZi5uYW1lIHx8ICd2JykpO1xuICAgICAgICB9XG4gICAgICAgIGV4dGVuZChyZXMsIGRlZik7XG4gICAgICAgIHJldHVybiByZXNcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGRlZiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIGF1dG9Dc3NUcmFuc2l0aW9uKGRlZilcbiAgICB9XG59XG5cbmNvbnN0IGF1dG9Dc3NUcmFuc2l0aW9uID0gY2FjaGVkKG5hbWUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGVudGVyQ2xhc3M6IGAke25hbWV9LWVudGVyYCxcbiAgICAgICAgZW50ZXJUb0NsYXNzOiBgJHtuYW1lfS1lbnRlci10b2AsXG4gICAgICAgIGVudGVyQWN0aXZlQ2xhc3M6IGAke25hbWV9LWVudGVyLWFjdGl2ZWAsXG4gICAgICAgIGxlYXZlQ2xhc3M6IGAke25hbWV9LWxlYXZlYCxcbiAgICAgICAgbGVhdmVUb0NsYXNzOiBgJHtuYW1lfS1sZWF2ZS10b2AsXG4gICAgICAgIGxlYXZlQWN0aXZlQ2xhc3M6IGAke25hbWV9LWxlYXZlLWFjdGl2ZWBcbiAgICB9O1xufSk7XG5cbmNvbnN0IFRSQU5TSVRJT04gPSAndHJhbnNpdGlvbic7XG5jb25zdCBBTklNQVRJT04gPSAnYW5pbWF0aW9uJztcblxuLy8gVHJhbnNpdGlvbiBwcm9wZXJ0eS9ldmVudCBzbmlmZmluZ1xubGV0IHRyYW5zaXRpb25Qcm9wID0gJ3RyYW5zaXRpb24nO1xubGV0IHRyYW5zaXRpb25FbmRFdmVudCA9ICd0cmFuc2l0aW9uZW5kJztcbmxldCBhbmltYXRpb25Qcm9wID0gJ2FuaW1hdGlvbic7XG5sZXQgYW5pbWF0aW9uRW5kRXZlbnQgPSAnYW5pbWF0aW9uZW5kJztcbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuaWYgKFxuICAgIHdpbmRvdy5vbnRyYW5zaXRpb25lbmQgPT09IHVuZGVmaW5lZFxuICAgICYmIHdpbmRvdy5vbndlYmtpdHRyYW5zaXRpb25lbmQgIT09IHVuZGVmaW5lZFxuKSB7XG4gICAgdHJhbnNpdGlvblByb3AgPSAnV2Via2l0VHJhbnNpdGlvbic7XG4gICAgdHJhbnNpdGlvbkVuZEV2ZW50ID0gJ3dlYmtpdFRyYW5zaXRpb25FbmQnO1xufVxuaWYgKFxuICAgIHdpbmRvdy5vbmFuaW1hdGlvbmVuZCA9PT0gdW5kZWZpbmVkXG4gICAgJiYgd2luZG93Lm9ud2Via2l0YW5pbWF0aW9uZW5kICE9PSB1bmRlZmluZWRcbikge1xuICAgIGFuaW1hdGlvblByb3AgPSAnV2Via2l0QW5pbWF0aW9uJztcbiAgICBhbmltYXRpb25FbmRFdmVudCA9ICd3ZWJraXRBbmltYXRpb25FbmQnO1xufVxuXG5jb25zdCByYWYgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgPyB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lLmJpbmQod2luZG93KVxuICAgIDogc2V0VGltZW91dDtcblxuZnVuY3Rpb24gbmV4dEZyYW1lIChmbikge1xuICAgIHJhZigoKSA9PiB7XG4gICAgICAgIHJhZihmbik7XG4gICAgfSk7XG59XG5cbmNvbnN0IHRyYW5zZm9ybVJFID0gL1xcYih0cmFuc2Zvcm18YWxsKSgsfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHJhbnNpdGlvbkluZm8gKGVsLCBleHBlY3RlZFR5cGUpIHtcbiAgICBjb25zdCBzdHlsZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbClcbiAgICAvLyBKU0RPTSBtYXkgcmV0dXJuIHVuZGVmaW5lZCBmb3IgdHJhbnNpdGlvbiBwcm9wZXJ0aWVzXG4gICAgY29uc3QgdHJhbnNpdGlvbkRlbGF5cyA9IChzdHlsZXNbdHJhbnNpdGlvblByb3AgKyAnRGVsYXknXSB8fCAnJykuc3BsaXQoJywgJyk7XG4gICAgY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9ucyA9IChzdHlsZXNbdHJhbnNpdGlvblByb3AgKyAnRHVyYXRpb24nXSB8fCAnJykuc3BsaXQoJywgJyk7XG4gICAgY29uc3QgdHJhbnNpdGlvblRpbWVvdXQgPSBnZXRUaW1lb3V0KHRyYW5zaXRpb25EZWxheXMsIHRyYW5zaXRpb25EdXJhdGlvbnMpO1xuICAgIGNvbnN0IGFuaW1hdGlvbkRlbGF5cyA9IChzdHlsZXNbYW5pbWF0aW9uUHJvcCArICdEZWxheSddIHx8ICcnKS5zcGxpdCgnLCAnKTtcbiAgICBjb25zdCBhbmltYXRpb25EdXJhdGlvbnMgPSAoc3R5bGVzW2FuaW1hdGlvblByb3AgKyAnRHVyYXRpb24nXSB8fCAnJykuc3BsaXQoJywgJyk7XG4gICAgY29uc3QgYW5pbWF0aW9uVGltZW91dCA9IGdldFRpbWVvdXQoYW5pbWF0aW9uRGVsYXlzLCBhbmltYXRpb25EdXJhdGlvbnMpO1xuXG4gICAgbGV0IHR5cGU7XG4gICAgbGV0IHRpbWVvdXQgPSAwO1xuICAgIGxldCBwcm9wQ291bnQgPSAwO1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmIChleHBlY3RlZFR5cGUgPT09IFRSQU5TSVRJT04pIHtcbiAgICAgICAgaWYgKHRyYW5zaXRpb25UaW1lb3V0ID4gMCkge1xuICAgICAgICAgICAgdHlwZSA9IFRSQU5TSVRJT047XG4gICAgICAgICAgICB0aW1lb3V0ID0gdHJhbnNpdGlvblRpbWVvdXQ7XG4gICAgICAgICAgICBwcm9wQ291bnQgPSB0cmFuc2l0aW9uRHVyYXRpb25zLmxlbmd0aDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChleHBlY3RlZFR5cGUgPT09IEFOSU1BVElPTikge1xuICAgICAgICBpZiAoYW5pbWF0aW9uVGltZW91dCA+IDApIHtcbiAgICAgICAgICAgIHR5cGUgPSBBTklNQVRJT047XG4gICAgICAgICAgICB0aW1lb3V0ID0gYW5pbWF0aW9uVGltZW91dDtcbiAgICAgICAgICAgIHByb3BDb3VudCA9IGFuaW1hdGlvbkR1cmF0aW9ucy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRpbWVvdXQgPSBNYXRoLm1heCh0cmFuc2l0aW9uVGltZW91dCwgYW5pbWF0aW9uVGltZW91dClcbiAgICAgICAgdHlwZSA9IHRpbWVvdXQgPiAwXG4gICAgICAgICAgICA/IHRyYW5zaXRpb25UaW1lb3V0ID4gYW5pbWF0aW9uVGltZW91dFxuICAgICAgICAgICAgICAgID8gVFJBTlNJVElPTlxuICAgICAgICAgICAgICAgIDogQU5JTUFUSU9OXG4gICAgICAgICAgICA6IG51bGw7XG4gICAgICAgIHByb3BDb3VudCA9IHR5cGVcbiAgICAgICAgICAgID8gdHlwZSA9PT0gVFJBTlNJVElPTlxuICAgICAgICAgICAgICAgID8gdHJhbnNpdGlvbkR1cmF0aW9ucy5sZW5ndGhcbiAgICAgICAgICAgICAgICA6IGFuaW1hdGlvbkR1cmF0aW9ucy5sZW5ndGhcbiAgICAgICAgICAgIDogMDtcbiAgICB9XG4gICAgY29uc3QgaGFzVHJhbnNmb3JtID1cbiAgICAgICAgdHlwZSA9PT0gVFJBTlNJVElPTlxuICAgICAgICAmJiB0cmFuc2Zvcm1SRS50ZXN0KHN0eWxlc1t0cmFuc2l0aW9uUHJvcCArICdQcm9wZXJ0eSddKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlLFxuICAgICAgICB0aW1lb3V0LFxuICAgICAgICBwcm9wQ291bnQsXG4gICAgICAgIGhhc1RyYW5zZm9ybVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGdldFRpbWVvdXQoZGVsYXlzLCBkdXJhdGlvbnMpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIHdoaWxlIChkZWxheXMubGVuZ3RoIDwgZHVyYXRpb25zLmxlbmd0aCkge1xuICAgICAgICBkZWxheXMgPSBkZWxheXMuY29uY2F0KGRlbGF5cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIE1hdGgubWF4LmFwcGx5KG51bGwsIGR1cmF0aW9ucy5tYXAoKGQsIGkpID0+IHtcbiAgICAgICAgcmV0dXJuIHRvTXMoZCkgKyB0b01zKGRlbGF5c1tpXSk7XG4gICAgfSkpO1xufVxuXG4vLyBPbGQgdmVyc2lvbnMgb2YgQ2hyb21pdW0gKGJlbG93IDYxLjAuMzE2My4xMDApIGZvcm1hdHMgZmxvYXRpbmcgcG9pbnRlciBudW1iZXJzXG4vLyBpbiBhIGxvY2FsZS1kZXBlbmRlbnQgd2F5LCB1c2luZyBhIGNvbW1hIGluc3RlYWQgb2YgYSBkb3QuXG4vLyBJZiBjb21tYSBpcyBub3QgcmVwbGFjZWQgd2l0aCBhIGRvdCwgdGhlIGlucHV0IHdpbGwgYmUgcm91bmRlZCBkb3duIChpLmUuIGFjdGluZ1xuLy8gYXMgYSBmbG9vciBmdW5jdGlvbikgY2F1c2luZyB1bmV4cGVjdGVkIGJlaGF2aW9yc1xuZnVuY3Rpb24gdG9NcyhzKSB7XG4gICAgcmV0dXJuIE51bWJlcihzLnNsaWNlKDAsIC0xKS5yZXBsYWNlKCcsJywgJy4nKSkgKiAxMDAwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVHJhbnNpdGlvbkNsYXNzKGVsLCBjbHMpIHtcbiAgICBjb25zdCB0cmFuc2l0aW9uQ2xhc3NlcyA9IGVsLl90cmFuc2l0aW9uQ2xhc3NlcyB8fCAoZWwuX3RyYW5zaXRpb25DbGFzc2VzID0gW10pO1xuICAgIGlmICh0cmFuc2l0aW9uQ2xhc3Nlcy5pbmRleE9mKGNscykgPCAwKSB7XG4gICAgICAgIHRyYW5zaXRpb25DbGFzc2VzLnB1c2goY2xzKTtcbiAgICAgICAgYWRkQ2xhc3MoZWwsIGNscyk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVHJhbnNpdGlvbkNsYXNzKGVsLCBjbHMpIHtcbiAgICBpZiAoZWwuX3RyYW5zaXRpb25DbGFzc2VzKSB7XG4gICAgICAgIHJlbW92ZShlbC5fdHJhbnNpdGlvbkNsYXNzZXMsIGNscyk7XG4gICAgfVxuICAgIHJlbW92ZUNsYXNzKGVsLCBjbHMpO1xufVxuXG5mdW5jdGlvbiBpc1ZhbGlkRHVyYXRpb24odmFsKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdudW1iZXInICYmICFpc05hTih2YWwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2hlblRyYW5zaXRpb25FbmRzKGVsLCBleHBlY3RlZFR5cGUsIGNiKSB7XG4gICAgY29uc3Qge1xuICAgICAgICB0eXBlLFxuICAgICAgICB0aW1lb3V0LFxuICAgICAgICBwcm9wQ291bnRcbiAgICB9ID0gZ2V0VHJhbnNpdGlvbkluZm8oZWwsIGV4cGVjdGVkVHlwZSk7XG4gICAgaWYgKCF0eXBlKSB7XG4gICAgICAgIHJldHVybiBjYigpO1xuICAgIH1cbiAgICBjb25zdCBldmVudCA9IHR5cGUgPT09IFRSQU5TSVRJT04gPyB0cmFuc2l0aW9uRW5kRXZlbnQgOiBhbmltYXRpb25FbmRFdmVudDtcbiAgICBsZXQgZW5kZWQgPSAwO1xuICAgIGNvbnN0IGVuZCA9ICgpID0+IHtcbiAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgb25FbmQpXG4gICAgICAgIGNiKClcbiAgICB9O1xuICAgIGNvbnN0IG9uRW5kID0gZSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldCA9PT0gZWwpIHtcbiAgICAgICAgICAgIGlmICgrK2VuZGVkID49IHByb3BDb3VudCkge1xuICAgICAgICAgICAgICAgIGVuZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKGVuZGVkIDwgcHJvcENvdW50KSB7XG4gICAgICAgICAgICBlbmQoKTtcbiAgICAgICAgfVxuICAgIH0sIHRpbWVvdXQgKyAxKTtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBvbkVuZCk7XG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICAgY29uc3QgZGF0YSA9IHJlc29sdmVUcmFuc2l0aW9uKG9wdGlvbnMpO1xuXG4gICAgY29uc3Qge1xuICAgICAgICBjc3MsXG4gICAgICAgIHR5cGUsXG4gICAgICAgIGVudGVyQ2xhc3MsXG4gICAgICAgIGVudGVyVG9DbGFzcyxcbiAgICAgICAgZW50ZXJBY3RpdmVDbGFzcyxcbiAgICAgICAgYXBwZWFyQ2xhc3MsXG4gICAgICAgIGFwcGVhclRvQ2xhc3MsXG4gICAgICAgIGFwcGVhckFjdGl2ZUNsYXNzLFxuICAgICAgICBiZWZvcmVFbnRlcixcbiAgICAgICAgZW50ZXIsXG4gICAgICAgIGFmdGVyRW50ZXIsXG4gICAgICAgIGVudGVyQ2FuY2VsbGVkLFxuICAgICAgICBiZWZvcmVBcHBlYXIsXG4gICAgICAgIGFwcGVhciA9IGZhbHNlLFxuICAgICAgICBhZnRlckFwcGVhcixcbiAgICAgICAgYXBwZWFyQ2FuY2VsbGVkLFxuICAgICAgICBsZWF2ZUNsYXNzLFxuICAgICAgICBsZWF2ZVRvQ2xhc3MsXG4gICAgICAgIGxlYXZlQWN0aXZlQ2xhc3MsXG4gICAgICAgIGJlZm9yZUxlYXZlLFxuICAgICAgICBsZWF2ZSxcbiAgICAgICAgYWZ0ZXJMZWF2ZSxcbiAgICAgICAgbGVhdmVDYW5jZWxsZWQsXG4gICAgICAgIGRlbGF5TGVhdmUsXG4gICAgICAgIGR1cmF0aW9uXG4gICAgfSA9IHJlc29sdmVUcmFuc2l0aW9uKG9wdGlvbnMpO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXM7XG4gICAgY29uc3QgZXhwZWN0c0NTUyA9IGNzcyAhPT0gZmFsc2U7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBlbnRlcjogZW50ZXJIYW5kbGVyLFxuICAgICAgICBsZWF2ZTogbGVhdmVIYW5kbGVyXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGVudGVySGFuZGxlcihlbCwgZG9uZSkge1xuICAgICAgICBjb25zdCBpc0FwcGVhciA9ICFjb250ZXh0LmxpZmVDeWNsZS5hdHRhY2hlZDtcblxuICAgICAgICAvLyBjYWxsIGxlYXZlIGNhbGxiYWNrIG5vd1xuICAgICAgICBpZiAoZWwuX2xlYXZlQ2IpIHtcbiAgICAgICAgICAgIGVsLl9sZWF2ZUNiLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgICAgIGVsLl9sZWF2ZUNiKClcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICBpZiAoZWwuX2VudGVyQ2IgfHwgZWwubm9kZVR5cGUgIT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0FwcGVhciAmJiAhYXBwZWFyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzdGFydENsYXNzID0gaXNBcHBlYXIgJiYgYXBwZWFyQ2xhc3NcbiAgICAgICAgICAgID8gYXBwZWFyQ2xhc3NcbiAgICAgICAgICAgIDogZW50ZXJDbGFzcztcbiAgICAgICAgY29uc3QgYWN0aXZlQ2xhc3MgPSBpc0FwcGVhciAmJiBhcHBlYXJBY3RpdmVDbGFzc1xuICAgICAgICAgICAgPyBhcHBlYXJBY3RpdmVDbGFzc1xuICAgICAgICAgICAgOiBlbnRlckFjdGl2ZUNsYXNzO1xuICAgICAgICBjb25zdCB0b0NsYXNzID0gaXNBcHBlYXIgJiYgYXBwZWFyVG9DbGFzc1xuICAgICAgICAgICAgPyBhcHBlYXJUb0NsYXNzXG4gICAgICAgICAgICA6IGVudGVyVG9DbGFzcztcblxuICAgICAgICBjb25zdCBiZWZvcmVFbnRlckhvb2sgPSBpc0FwcGVhclxuICAgICAgICAgICAgPyAoYmVmb3JlQXBwZWFyIHx8IGJlZm9yZUVudGVyKVxuICAgICAgICAgICAgOiBiZWZvcmVFbnRlcjtcbiAgICAgICAgY29uc3QgZW50ZXJIb29rID0gaXNBcHBlYXJcbiAgICAgICAgICAgID8gKHR5cGVvZiBhcHBlYXIgPT09ICdmdW5jdGlvbicgPyBhcHBlYXIgOiBlbnRlcilcbiAgICAgICAgICAgIDogZW50ZXI7XG4gICAgICAgIGNvbnN0IGFmdGVyRW50ZXJIb29rID0gaXNBcHBlYXJcbiAgICAgICAgICAgID8gKGFmdGVyQXBwZWFyIHx8IGFmdGVyRW50ZXIpXG4gICAgICAgICAgICA6IGFmdGVyRW50ZXI7XG4gICAgICAgIGNvbnN0IGVudGVyQ2FuY2VsbGVkSG9vayA9IGlzQXBwZWFyXG4gICAgICAgICAgICA/IChhcHBlYXJDYW5jZWxsZWQgfHwgZW50ZXJDYW5jZWxsZWQpXG4gICAgICAgICAgICA6IGVudGVyQ2FuY2VsbGVkO1xuXG4gICAgICAgIGNvbnN0IGV4cGxpY2l0RW50ZXJEdXJhdGlvbiA9ICsoaXNPYmplY3QoZHVyYXRpb24pID8gZHVyYXRpb24uZW50ZXIgOiBkdXJhdGlvbik7XG5cbiAgICAgICAgY29uc3QgY2IgPSBlbC5fZW50ZXJDYiA9IG9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV4cGVjdHNDU1MpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVUcmFuc2l0aW9uQ2xhc3MoZWwsIHRvQ2xhc3MpXG4gICAgICAgICAgICAgICAgcmVtb3ZlVHJhbnNpdGlvbkNsYXNzKGVsLCBhY3RpdmVDbGFzcylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYi5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXhwZWN0c0NTUykge1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVUcmFuc2l0aW9uQ2xhc3MoZWwsIHN0YXJ0Q2xhc3MpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVudGVyQ2FuY2VsbGVkSG9vayAmJiBlbnRlckNhbmNlbGxlZEhvb2soZWwpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhZnRlckVudGVySG9vayAmJiBhZnRlckVudGVySG9vayhlbClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsLl9lbnRlckNiID0gbnVsbFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBzdGFydCBlbnRlciB0cmFuc2l0aW9uXG4gICAgICAgIGJlZm9yZUVudGVySG9vayAmJiBiZWZvcmVFbnRlckhvb2soZWwpO1xuICAgICAgICBpZiAoZXhwZWN0c0NTUykge1xuICAgICAgICAgICAgYWRkVHJhbnNpdGlvbkNsYXNzKGVsLCBzdGFydENsYXNzKTtcbiAgICAgICAgICAgIGFkZFRyYW5zaXRpb25DbGFzcyhlbCwgYWN0aXZlQ2xhc3MpO1xuICAgICAgICAgICAgbmV4dEZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICByZW1vdmVUcmFuc2l0aW9uQ2xhc3MoZWwsIHN0YXJ0Q2xhc3MpXG4gICAgICAgICAgICAgICAgaWYgKCFjYi5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkVHJhbnNpdGlvbkNsYXNzKGVsLCB0b0NsYXNzKVxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNWYWxpZER1cmF0aW9uKGV4cGxpY2l0RW50ZXJEdXJhdGlvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoY2IsIGV4cGxpY2l0RW50ZXJEdXJhdGlvbilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoZW5UcmFuc2l0aW9uRW5kcyhlbCwgdHlwZSwgY2IpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRvbmUoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsZWF2ZUhhbmRsZXIoZWwsIGRvbmUpIHtcblxuICAgICAgICAvLyBjYWxsIGVudGVyIGNhbGxiYWNrIG5vd1xuICAgICAgICBpZiAoZWwuX2VudGVyQ2IpIHtcbiAgICAgICAgICAgIGVsLl9lbnRlckNiLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICBlbC5fZW50ZXJDYigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgIGlmIChlbC5fbGVhdmVDYikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZXhwbGljaXRMZWF2ZUR1cmF0aW9uID0gKyhpc09iamVjdChkdXJhdGlvbikgPyBkdXJhdGlvbi5sZWF2ZSA6IGR1cmF0aW9uKTtcblxuICAgICAgICBjb25zdCBjYiA9IGVsLl9sZWF2ZUNiID0gb25jZSgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXhwZWN0c0NTUykge1xuICAgICAgICAgICAgICAgIHJlbW92ZVRyYW5zaXRpb25DbGFzcyhlbCwgbGVhdmVUb0NsYXNzKTtcbiAgICAgICAgICAgICAgICByZW1vdmVUcmFuc2l0aW9uQ2xhc3MoZWwsIGxlYXZlQWN0aXZlQ2xhc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNiLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgIGlmIChleHBlY3RzQ1NTKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZVRyYW5zaXRpb25DbGFzcyhlbCwgbGVhdmVDbGFzcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlYXZlQ2FuY2VsbGVkICYmIGxlYXZlQ2FuY2VsbGVkKGVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvbmUoKVxuICAgICAgICAgICAgICAgIGFmdGVyTGVhdmUgJiYgYWZ0ZXJMZWF2ZShlbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbC5fbGVhdmVDYiA9IG51bGw7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChkZWxheUxlYXZlKSB7XG4gICAgICAgICAgICBkZWxheUxlYXZlKHBlcmZvcm1MZWF2ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwZXJmb3JtTGVhdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHBlcmZvcm1MZWF2ZSgpIHtcbiAgICAgICAgICAgIC8vIHRoZSBkZWxheWVkIGxlYXZlIG1heSBoYXZlIGFscmVhZHkgYmVlbiBjYW5jZWxsZWRcbiAgICAgICAgICAgIGlmIChjYi5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJlZm9yZUxlYXZlICYmIGJlZm9yZUxlYXZlKGVsKVxuICAgICAgICAgICAgaWYgKGV4cGVjdHNDU1MpIHtcbiAgICAgICAgICAgICAgICBhZGRUcmFuc2l0aW9uQ2xhc3MoZWwsIGxlYXZlQ2xhc3MpXG4gICAgICAgICAgICAgICAgYWRkVHJhbnNpdGlvbkNsYXNzKGVsLCBsZWF2ZUFjdGl2ZUNsYXNzKVxuICAgICAgICAgICAgICAgIG5leHRGcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZVRyYW5zaXRpb25DbGFzcyhlbCwgbGVhdmVDbGFzcylcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjYi5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRyYW5zaXRpb25DbGFzcyhlbCwgbGVhdmVUb0NsYXNzKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzVmFsaWREdXJhdGlvbihleHBsaWNpdExlYXZlRHVyYXRpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChjYiwgZXhwbGljaXRMZWF2ZUR1cmF0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hlblRyYW5zaXRpb25FbmRzKGVsLCB0eXBlLCBjYilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGVhdmUgJiYgbGVhdmUoZWwsIGNiKVxuICAgICAgICAgICAgaWYgKCFleHBlY3RzQ1NTICYmICF1c2VyV2FudHNDb250cm9sKSB7XG4gICAgICAgICAgICAgICAgY2IoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiLyoqXG4gKiBAZmlsZSBjbGFzcyB1dGlsc1xuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmNvbnN0IHdoaXRlc3BhY2VSRSA9IC9cXHMrL1xuXG4vKipcbiAqIEFkZCBjbGFzcyB3aXRoIGNvbXBhdGliaWxpdHkgZm9yIFNWRyBzaW5jZSBjbGFzc0xpc3QgaXMgbm90IHN1cHBvcnRlZCBvblxuICogU1ZHIGVsZW1lbnRzIGluIElFXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRDbGFzcyAoZWwsIGNscykge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICghY2xzIHx8ICEoY2xzID0gY2xzLnRyaW0oKSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKGVsLmNsYXNzTGlzdCkge1xuICAgICAgICBpZiAoY2xzLmluZGV4T2YoJyAnKSA+IC0xKSB7XG4gICAgICAgICAgICBjbHMuc3BsaXQod2hpdGVzcGFjZVJFKS5mb3JFYWNoKGMgPT4gZWwuY2xhc3NMaXN0LmFkZChjKSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xzKVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBjdXIgPSBgICR7ZWwuZ2V0QXR0cmlidXRlKCdjbGFzcycpIHx8ICcnfSBgXG4gICAgICAgIGlmIChjdXIuaW5kZXhPZignICcgKyBjbHMgKyAnICcpIDwgMCkge1xuICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsIChjdXIgKyBjbHMpLnRyaW0oKSlcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBSZW1vdmUgY2xhc3Mgd2l0aCBjb21wYXRpYmlsaXR5IGZvciBTVkcgc2luY2UgY2xhc3NMaXN0IGlzIG5vdCBzdXBwb3J0ZWQgb25cbiAqIFNWRyBlbGVtZW50cyBpbiBJRVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2xhc3MgKGVsLCBjbHMpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoIWNscyB8fCAhKGNscyA9IGNscy50cmltKCkpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmIChlbC5jbGFzc0xpc3QpIHtcbiAgICAgICAgaWYgKGNscy5pbmRleE9mKCcgJykgPiAtMSkge1xuICAgICAgICAgICAgY2xzLnNwbGl0KHdoaXRlc3BhY2VSRSkuZm9yRWFjaChjID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoYykpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShjbHMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZWwuY2xhc3NMaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBsZXQgY3VyID0gYCAke2VsLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSB8fCAnJ30gYDtcbiAgICAgICAgY29uc3QgdGFyID0gJyAnICsgY2xzICsgJyAnO1xuICAgICAgICB3aGlsZSAoY3VyLmluZGV4T2YodGFyKSA+PSAwKSB7XG4gICAgICAgICAgICBjdXIgPSBjdXIucmVwbGFjZSh0YXIsICcgJyk7XG4gICAgICAgIH1cbiAgICAgICAgY3VyID0gY3VyLnRyaW0oKVxuICAgICAgICBpZiAoY3VyKSB7XG4gICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgY3VyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=