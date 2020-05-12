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
var methodsToPatch = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];
methodsToPatch.forEach(function (method) {
  var original = arrayProto[method];
  (0, _util.def)(arrayMethods, method, {
    value: function value() {
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

      ob.context.data.set(ob.expr, this, {
        force: true
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3V0aWwuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2FuXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvZ2V0LXNsb3RzLmpzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lL2RlZmluZS1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvb3ZlcnJpZGUtZGF0YS1nZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvbWVyZ2UtY2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvbWVyZ2Utc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvbG9vcC1leHByZXNzaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lL2dldC1jb21wb25lbnQtdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcnVudGltZS9vYmplY3QtY29tcHV0ZWQtcHJvcGVydGlycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcnVudGltZS9yZWYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvbWVyZ2Utb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcnVudGltZS9jb25zdGFudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcnVudGltZS9hdG9tLWdsb2JhbC1hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvYmluZC1kYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lL2NhbGMtY29tcHV0ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvY2FsbC1hY3RpdmF0ZWQtaG9vay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcnVudGltZS90cmFuc2l0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lL2NsYXNzLXV0aWwuanMiXSwibmFtZXMiOlsiZXh0ZW5kIiwiT2JqZWN0IiwiYXNzaWduIiwidG9PYmplY3QiLCJhcnIiLCJyZXMiLCJpIiwibGVuZ3RoIiwicmVtb3ZlIiwiaXRlbSIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsIl90b1N0cmluZyIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiaXNPYmplY3QiLCJvYmoiLCJoYXNPd25Qcm9wZXJ0eSIsImhhc093biIsImtleSIsImNhbGwiLCJpc1BsYWluT2JqZWN0IiwiZGVmIiwicHJvcGVydHkiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJjYWNoZWQiLCJmbiIsImNhY2hlIiwiY3JlYXRlIiwiY2FjaGVkRm4iLCJzdHIiLCJoaXQiLCJoeXBoZW5hdGVSRSIsImh5cGhlbmF0ZSIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsImNhbWVsaXplIiwiXyIsImMiLCJ0b1VwcGVyQ2FzZSIsIm9uY2UiLCJjYWxsZWQiLCJhcHBseSIsImFyZ3VtZW50cyIsInNsb3RDaGlsZHJlbiIsImxpZmVDeWNsZSIsInNvdXJjZVNsb3RzIiwiYXR0YWNoZWQiLCJyZWR1Y2UiLCJwcmV2IiwiY2hpbGQiLCJuYW1lIiwiY29uY2F0IiwiY2hpbGRyZW4iLCJzbG90cyIsIm5hbWVkIiwibm9uYW1lIiwiZGVmYXVsdCIsImRlZmF1bHRTYW5PcHRpb25zIiwiJGFjdGl2YXRlIiwiY2FsbEFjdGl2aXRlZCIsIiRkZWFjdGl2YXRlIiwiY2FsbERlQWN0aXZpdGVkIiwiX21jIiwibWVyZ2VDbGFzcyIsIl9tcyIsIm1lcmdlU3R5bGUiLCJfbCIsImxvb3BFeHByZXNzaW9uIiwiX2V4IiwiX29jcCIsIm9iamVjdENvbXB1dGVkUHJvcGVydGllcyIsIl9ub29wIiwiX3QiLCJUcmFuc2l0aW9uIiwiZ2V0Q29tcG9uZW50VHlwZSIsIiRlbWl0IiwiQ29tcG9uZW50IiwiZmlyZSIsIiRvbiIsIm9uIiwiJHdhdGNoIiwid2F0Y2giLCIkbmV4dFRpY2siLCJuZXh0VGljayIsIm1lbWJlck1hcCIsIiRlbCIsImVsIiwiJGNvbnRleHQiLCJvd25lciIsIiRwYXJlbnQiLCJwYXJlbnRDb21wb25lbnQiLCIkY2hpbGRyZW4iLCJmaWx0ZXIiLCJub2RlVHlwZSIsIiRyb290Iiwicm9vdCIsIiRzbG90cyIsInNsb3QiLCJfaXNEZXN0cm95ZWQiLCJkaXNwb3NlZCIsIm9yaWdpbmFsVXBkYXRlIiwiX3VwZGF0ZSIsImNoYW5nZXMiLCJfdG9QaGFzZSIsImlubmVyS2V5IiwiZGVmaW5lIiwib3B0aW9ucyIsInNhbk9wdGlvbnMiLCJ0ZW1wbGF0ZSIsIl9fc2FudGVtcGxhdGUiLCJhTm9kZSIsIl9fc2FuYU5vZGUiLCJfaXNTYW4iLCJjb21waWxlZEhvb2siLCJjb21waWxlZCIsIl9jYWxjQ29tcHV0ZWQiLCJjYWxjQ29tcHV0ZWQiLCJiaW5kIiwicHJvcGVydGllcyIsImtleXMiLCJwcm9wcyIsImdldCIsIiRvcHRpb25zIiwidmFsdWUiLCJkZWZpbmVQcm9wZXJ0aWVzIiwicmVmcyIsIl9fc2FuUmVmcyIsImluaXRlZEhvb2siLCJpbml0ZWQiLCJtZSIsIiRyZWZzIiwibGVuIiwiciIsInJlZiIsIiRzdHlsZSIsImRhdGEiLCJyYXciLCJiaW5kRGF0YSIsImZvckVhY2giLCJwcmVwcm9jZXNzQU5vZGUiLCJiZWZvcmVVcGRhdGVIb29rIiwiYmVmb3JlVXBkYXRlIiwiaW5pdERhdGEiLCJkZWZhdWx0UHJvcHMiLCJwcm9wS2V5cyIsIl9wcm9wS2V5cyIsIkFycmF5IiwiaXNBcnJheSIsInAiLCJwcm9wIiwiY29tcHV0ZWQiLCJfY29tcHV0ZWRLZXlzIiwiayIsIl9zcmNTYmluZERhdGEiLCJfZGF0YUtleXMiLCJjb21wb25lbnRzIiwiY29tcG9uZW50IiwiX2NtcHRSZWFkeSIsImNtcHQiLCJvcmlnaW5hbEdldCIsIkRhdGEiLCJleHByIiwiY2FsbGVlIiwidW5kZWZpbmVkIiwidHlwZSIsIkV4cHJUeXBlIiwiQUNDRVNTT1IiLCJwYXRocyIsImZpcnN0IiwibCIsInN0cmluZyIsImNscyIsInNwbGl0Iiwib2JqZWN0IiwiYXJyYXkiLCJjbGF6eiIsImVsZW1lbnQiLCJzdGF0aWNDbGFzcyIsImpvaW4iLCJwYXJzZVN0eWxlVGV4dCIsImNzc1RleHQiLCJsaXN0RGVsaW1pdGVyIiwicHJvcGVydHlEZWxpbWl0ZXIiLCJ0bXAiLCJ0cmltIiwibm9ybWFsaXplU3R5bGVCaW5kaW5nIiwiYmluZGluZ1N0eWxlIiwic3RhdGljU3R5bGUiLCJzdHlsZSIsInZTaG93IiwiZGlzcGxheSIsInRvQXJyYXkiLCJuIiwiaXNOYU4iLCJ0YWdOYW1lIiwiaG90c3BvdCIsImlzIiwiaXNWYWx1ZSIsInYiLCJjaGlsZHJlblRyYXZlcnNhbCIsInJlZlRhcmdldCIsImVsZW1lbnRUcmF2ZXJzYWwiLCJkaXJlY3RpdmVzIiwic2FuIiwiZXZhbEV4cHIiLCJzY29wZSIsIm1hcCIsInNvdXJjZSIsIm1lcmdlSG9vayIsInBhcmVudFZhbCIsImNoaWxkVmFsIiwibWVyZ2VPcHRpb25zIiwiZGVzdE9wdGlvbnMiLCJsaXN0IiwibWl4aW5zIiwiYXRvbUJ1aWxkSW5NaXhpbiIsIm9wdCIsIm1ldGhvZHMiLCJqIiwibGlmZUN5Y2xlS2V5cyIsImRrIiwibGlmZUN5Y2xlTWFwIiwiaG9va3MiLCJzbGljZSIsImhvb2siLCJtZXNzYWdlcyIsImJlZm9yZUNyZWF0ZSIsIm1vdW50ZWQiLCJjcmVhdGVkIiwiYmVmb3JlTW91bnQiLCJiZWZvcmVEZXN0cm95IiwiZGVzdHJveSIsInVwZGF0ZWQiLCJhY3RpdmF0ZWQiLCJkZWFjdGl2YXRlZCIsIk1BVEhfTUVUSE9EIiwiZXhwb3J0cyIsImFyZ3MiLCJNYXRoIiwiYXJyYXlfc2xpY2UiLCJzdGFydCIsImVuZCIsImFycmF5X2pvaW4iLCJzZXAiLCJzdHJfcG9zIiwibWF0Y2giLCJvYmplY3RfZnJlZXplIiwiZnJlZXplIiwiZmlsdGVycyIsImpzb24iLCJKU09OIiwic3RyaW5naWZ5IiwibG93ZXIiLCJ1cHBlciIsImFycmF5UHJvdG8iLCJhcnJheU1ldGhvZHMiLCJtZXRob2RzVG9QYXRjaCIsIm1ldGhvZCIsIm9yaWdpbmFsIiwicmVzdWx0Iiwib2IiLCJfX29iX18iLCJpbnNlcnRlZCIsIm9ic2VydmVBcnJheSIsImNvbnRleHQiLCJzZXQiLCJmb3JjZSIsIm9ic2VydmUiLCJPYnNlcnZlciIsIl9fcHJvdG9fXyIsIndhbGsiLCJkZWZpbmVSZWFjdGl2ZSIsIml0ZW1zIiwiTlVNQkVSIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZ2V0dGVyIiwic2V0dGVyIiwia2V5RXhwciIsIlNUUklORyIsInZhbCIsIm5ld1Byb3BlcnR5IiwibmV3VmFsIiwiZGVmYXVsdEV4cHIiLCJrZXlMZW5ndGgiLCJfZGF0YSIsImlzRXh0ZW5zaWJsZSIsImNvbXB1dGVkRGVwcyIsImNyZWF0ZUNhbGxGYWN0b3J5IiwiZGlyZWN0IiwiZWxlIiwiTm9kZVR5cGUiLCJDTVBUIiwicmVzb2x2ZVRyYW5zaXRpb24iLCJjc3MiLCJhdXRvQ3NzVHJhbnNpdGlvbiIsImVudGVyQ2xhc3MiLCJlbnRlclRvQ2xhc3MiLCJlbnRlckFjdGl2ZUNsYXNzIiwibGVhdmVDbGFzcyIsImxlYXZlVG9DbGFzcyIsImxlYXZlQWN0aXZlQ2xhc3MiLCJUUkFOU0lUSU9OIiwiQU5JTUFUSU9OIiwidHJhbnNpdGlvblByb3AiLCJ0cmFuc2l0aW9uRW5kRXZlbnQiLCJhbmltYXRpb25Qcm9wIiwiYW5pbWF0aW9uRW5kRXZlbnQiLCJ3aW5kb3ciLCJvbnRyYW5zaXRpb25lbmQiLCJvbndlYmtpdHRyYW5zaXRpb25lbmQiLCJvbmFuaW1hdGlvbmVuZCIsIm9ud2Via2l0YW5pbWF0aW9uZW5kIiwicmFmIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic2V0VGltZW91dCIsIm5leHRGcmFtZSIsInRyYW5zZm9ybVJFIiwiZ2V0VHJhbnNpdGlvbkluZm8iLCJleHBlY3RlZFR5cGUiLCJzdHlsZXMiLCJnZXRDb21wdXRlZFN0eWxlIiwidHJhbnNpdGlvbkRlbGF5cyIsInRyYW5zaXRpb25EdXJhdGlvbnMiLCJ0cmFuc2l0aW9uVGltZW91dCIsImdldFRpbWVvdXQiLCJhbmltYXRpb25EZWxheXMiLCJhbmltYXRpb25EdXJhdGlvbnMiLCJhbmltYXRpb25UaW1lb3V0IiwidGltZW91dCIsInByb3BDb3VudCIsIm1heCIsImhhc1RyYW5zZm9ybSIsInRlc3QiLCJkZWxheXMiLCJkdXJhdGlvbnMiLCJkIiwidG9NcyIsInMiLCJOdW1iZXIiLCJhZGRUcmFuc2l0aW9uQ2xhc3MiLCJ0cmFuc2l0aW9uQ2xhc3NlcyIsIl90cmFuc2l0aW9uQ2xhc3NlcyIsInB1c2giLCJyZW1vdmVUcmFuc2l0aW9uQ2xhc3MiLCJpc1ZhbGlkRHVyYXRpb24iLCJ3aGVuVHJhbnNpdGlvbkVuZHMiLCJjYiIsImV2ZW50IiwiZW5kZWQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib25FbmQiLCJlIiwidGFyZ2V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImFwcGVhckNsYXNzIiwiYXBwZWFyVG9DbGFzcyIsImFwcGVhckFjdGl2ZUNsYXNzIiwiYmVmb3JlRW50ZXIiLCJlbnRlciIsImFmdGVyRW50ZXIiLCJlbnRlckNhbmNlbGxlZCIsImJlZm9yZUFwcGVhciIsImFwcGVhciIsImFmdGVyQXBwZWFyIiwiYXBwZWFyQ2FuY2VsbGVkIiwiYmVmb3JlTGVhdmUiLCJsZWF2ZSIsImFmdGVyTGVhdmUiLCJsZWF2ZUNhbmNlbGxlZCIsImRlbGF5TGVhdmUiLCJkdXJhdGlvbiIsImV4cGVjdHNDU1MiLCJlbnRlckhhbmRsZXIiLCJsZWF2ZUhhbmRsZXIiLCJkb25lIiwiaXNBcHBlYXIiLCJfbGVhdmVDYiIsImNhbmNlbGxlZCIsIl9lbnRlckNiIiwic3RhcnRDbGFzcyIsImFjdGl2ZUNsYXNzIiwidG9DbGFzcyIsImJlZm9yZUVudGVySG9vayIsImVudGVySG9vayIsImFmdGVyRW50ZXJIb29rIiwiZW50ZXJDYW5jZWxsZWRIb29rIiwiZXhwbGljaXRFbnRlckR1cmF0aW9uIiwiZXhwbGljaXRMZWF2ZUR1cmF0aW9uIiwicGVyZm9ybUxlYXZlIiwidXNlcldhbnRzQ29udHJvbCIsIndoaXRlc3BhY2VSRSIsImFkZENsYXNzIiwiY2xhc3NMaXN0IiwiYWRkIiwiY3VyIiwiZ2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQ2xhc3MiLCJyZW1vdmVBdHRyaWJ1dGUiLCJ0YXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUVPLElBQU1BLE1BQU0sR0FBR0MsTUFBTSxDQUFDQyxNQUF0Qjs7O0FBS0EsU0FBU0MsUUFBVCxDQUFrQkMsR0FBbEIsRUFBdUI7QUFDMUIsTUFBTUMsR0FBRyxHQUFHLEVBQVo7O0FBQ0EsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FB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QSxHQUFHLENBQUNsTixJQUFKLEVBQU47O0FBQ0EsUUFBSWtOLEdBQUosRUFBUztBQUNMcFQsUUFBRSxDQUFDc1QsWUFBSCxDQUFnQixPQUFoQixFQUF5QkYsR0FBekI7QUFDSCxLQUZELE1BR0s7QUFDRHBULFFBQUUsQ0FBQ3dULGVBQUgsQ0FBbUIsT0FBbkI7QUFDSDtBQUNKO0FBQ0osQyIsImZpbGUiOiJ2dXNhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwic2FuXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInNhblwiXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZmFjdG9yeShyZXF1aXJlKFwic2FuXCIpKSA6IGZhY3Rvcnkocm9vdFtcInNhblwiXSk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh3aW5kb3csIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzFfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbiIsIi8qKlxuICogQGZpbGUg5LiA5Lqb5bel5YW35Ye95pWwXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuLyoqXG4gKiBNaXggcHJvcGVydGllcyBpbnRvIHRhcmdldCBvYmplY3QuXG4gKi9cbmV4cG9ydCBjb25zdCBleHRlbmQgPSBPYmplY3QuYXNzaWduO1xuXG4vKipcbiAqIE1lcmdlIGFuIEFycmF5IG9mIE9iamVjdHMgaW50byBhIHNpbmdsZSBPYmplY3QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b09iamVjdChhcnIpIHtcbiAgICBjb25zdCByZXMgPSB7fTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoYXJyW2ldKSB7XG4gICAgICAgICAgICBleHRlbmQocmVzLCBhcnJbaV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59XG5cbi8qKlxuICogUmVtb3ZlIGFuIGl0ZW0gZnJvbSBhbiBhcnJheS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZShhcnIsIGl0ZW0pIHtcbiAgICBpZiAoYXJyLmxlbmd0aCkge1xuICAgICAgICBjb25zdCBpbmRleCA9IGFyci5pbmRleE9mKGl0ZW0pO1xuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIGFyci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIEdldCB0aGUgcmF3IHR5cGUgc3RyaW5nIG9mIGEgdmFsdWUsIGUuZy4sIFtvYmplY3QgT2JqZWN0XS5cbiAqL1xuZXhwb3J0IGNvbnN0IF90b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogUXVpY2sgb2JqZWN0IGNoZWNrIC0gdGhpcyBpcyBwcmltYXJpbHkgdXNlZCB0byB0ZWxsXG4gKiBPYmplY3RzIGZyb20gcHJpbWl0aXZlIHZhbHVlcyB3aGVuIHdlIGtub3cgdGhlIHZhbHVlXG4gKiBpcyBhIEpTT04tY29tcGxpYW50IHR5cGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdChvYmopIHtcbiAgICByZXR1cm4gb2JqICE9PSBudWxsICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgYW4gb2JqZWN0IGhhcyB0aGUgcHJvcGVydHkuXG4gKi9cbmNvbnN0IGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbmV4cG9ydCBmdW5jdGlvbiBoYXNPd24ob2JqLCBrZXkpIHtcbiAgICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSk7XG59XG5cbi8qKlxuICogU3RyaWN0IG9iamVjdCB0eXBlIGNoZWNrLiBPbmx5IHJldHVybnMgdHJ1ZVxuICogZm9yIHBsYWluIEphdmFTY3JpcHQgb2JqZWN0cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzUGxhaW5PYmplY3Qob2JqKSB7XG4gICAgcmV0dXJuIF90b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IE9iamVjdF0nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVmKG9iaiwga2V5LCBwcm9wZXJ0eSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgZXh0ZW5kKHtcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0sIHByb3BlcnR5KSk7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgY2FjaGVkIHZlcnNpb24gb2YgYSBwdXJlIGZ1bmN0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2FjaGVkKGZuKSB7XG4gICAgY29uc3QgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHJldHVybiBmdW5jdGlvbiBjYWNoZWRGbihzdHIpIHtcbiAgICAgICAgY29uc3QgaGl0ID0gY2FjaGVbc3RyXTtcbiAgICAgICAgcmV0dXJuIGhpdCB8fCAoY2FjaGVbc3RyXSA9IGZuKHN0cikpO1xuICAgIH07XG59XG5cbi8qKlxuICogSHlwaGVuYXRlIGEgY2FtZWxDYXNlIHN0cmluZy5cbiAqL1xuY29uc3QgaHlwaGVuYXRlUkUgPSAvKFteLV0pKFtBLVpdKS9nO1xuZXhwb3J0IGNvbnN0IGh5cGhlbmF0ZSA9IGNhY2hlZCgoc3RyKSA9PiB7XG4gICAgcmV0dXJuIHN0clxuICAgICAgICAucmVwbGFjZShoeXBoZW5hdGVSRSwgJyQxLSQyJylcbiAgICAgICAgLnJlcGxhY2UoaHlwaGVuYXRlUkUsICckMS0kMicpXG4gICAgICAgIC50b0xvd2VyQ2FzZSgpO1xufSk7XG5cbmV4cG9ydCBjb25zdCBjYW1lbGl6ZSA9IHN0ciA9PiBzdHIucmVwbGFjZSgvLShcXHcpL2csIChfLCBjKSA9PiAoYyA/IGMudG9VcHBlckNhc2UoKSA6ICcnKSk7XG5cbi8qKlxuICogRW5zdXJlIGEgZnVuY3Rpb24gaXMgY2FsbGVkIG9ubHkgb25jZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9uY2UoZm4pIHtcbiAgICBsZXQgY2FsbGVkID0gZmFsc2VcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgICAgY2FsbGVkID0gdHJ1ZVxuICAgICAgICBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gICAgICB9XG4gICAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX18xX187IiwiLyoqXG4gKiBAZmlsZSBzbG90XG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHtleHRlbmR9IGZyb20gJy4uL3NoYXJlZC91dGlsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHtcbiAgICAgICAgc2xvdENoaWxkcmVuLFxuICAgICAgICBsaWZlQ3ljbGUsXG4gICAgICAgIHNvdXJjZVNsb3RzXG4gICAgfSA9IHRoaXM7XG5cbiAgICBpZiAobGlmZUN5Y2xlLmF0dGFjaGVkKSB7XG4gICAgICAgIHJldHVybiBzbG90Q2hpbGRyZW4ucmVkdWNlKChwcmV2LCBjaGlsZCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGNoaWxkLm5hbWUgfHwgJ2RlZmF1bHQnO1xuICAgICAgICAgICAgaWYgKCFwcmV2W25hbWVdKSB7XG4gICAgICAgICAgICAgICAgcHJldltuYW1lXSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJldltuYW1lXSA9IHByZXZbbmFtZV0uY29uY2F0KGNoaWxkLmNoaWxkcmVuKTtcbiAgICAgICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgICB9LCB7fSk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2xvdHMgPSB7fTtcblxuICAgIGlmIChzb3VyY2VTbG90cy5uYW1lZCkge1xuICAgICAgICBleHRlbmQoc2xvdHMsIHNvdXJjZVNsb3RzLm5hbWVkKTtcbiAgICB9XG4gICAgaWYgKHNvdXJjZVNsb3RzLm5vbmFtZSkge1xuICAgICAgICBzbG90cy5kZWZhdWx0ID0gc291cmNlU2xvdHMubm9uYW1lO1xuICAgIH1cblxuICAgIHJldHVybiBzbG90cztcblxufVxuIiwiLyoqXG4gKiBAZmlsZSBlbnRyeVxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmV4cG9ydCB7ZGVmYXVsdCBhcyBkZWZpbmVDb21wb25lbnR9IGZyb20gJy4vZGVmaW5lLWNvbXBvbmVudCc7XG4iLCIvKipcbiAqIEBmaWxlIGNvbXBvbmVudFxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCAnLi9vdmVycmlkZS1kYXRhLWdldCc7XG5cbmltcG9ydCB7ZGVmaW5lQ29tcG9uZW50LCBpbmhlcml0cywgQ29tcG9uZW50LCBuZXh0VGlja30gZnJvbSAnc2FuJztcbmltcG9ydCB7ZXh0ZW5kLCBoeXBoZW5hdGUsIGRlZn0gZnJvbSAnLi4vc2hhcmVkL3V0aWwnO1xuaW1wb3J0IG1lcmdlQ2xhc3MgZnJvbSAnLi9tZXJnZS1jbGFzcyc7XG5pbXBvcnQgbWVyZ2VTdHlsZSBmcm9tICcuL21lcmdlLXN0eWxlJztcbmltcG9ydCBsb29wRXhwcmVzc2lvbiBmcm9tICcuL2xvb3AtZXhwcmVzc2lvbic7XG5pbXBvcnQgZ2V0Q29tcG9uZW50VHlwZSBmcm9tICcuL2dldC1jb21wb25lbnQtdHlwZSc7XG5pbXBvcnQgb2JqZWN0Q29tcHV0ZWRQcm9wZXJ0aWVzIGZyb20gJy4vb2JqZWN0LWNvbXB1dGVkLXByb3BlcnRpcnMnO1xuaW1wb3J0IHJlZiBmcm9tICcuL3JlZic7XG5pbXBvcnQgbWVyZ2VPcHRpb25zIGZyb20gJy4vbWVyZ2Utb3B0aW9ucyc7XG5pbXBvcnQgYmluZERhdGEgZnJvbSAnLi9iaW5kLWRhdGEnO1xuaW1wb3J0IGNhbGNDb21wdXRlZCBmcm9tICcuL2NhbGMtY29tcHV0ZWQnO1xuaW1wb3J0IHNsb3QgZnJvbSAnLi9nZXQtc2xvdHMnO1xuaW1wb3J0IHtjYWxsQWN0aXZpdGVkLCBjYWxsRGVBY3Rpdml0ZWR9IGZyb20gJy4vY2FsbC1hY3RpdmF0ZWQtaG9vayc7XG5pbXBvcnQgVHJhbnNpdGlvbiBmcm9tICcuL3RyYW5zaXRpb24nO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBmZWNzLWNhbWVsY2FzZSAqL1xuY29uc3QgZGVmYXVsdFNhbk9wdGlvbnMgPSB7XG4gICAgJGFjdGl2YXRlOiBjYWxsQWN0aXZpdGVkLFxuICAgICRkZWFjdGl2YXRlOiBjYWxsRGVBY3Rpdml0ZWQsXG4gICAgX21jOiBtZXJnZUNsYXNzLFxuICAgIF9tczogbWVyZ2VTdHlsZSxcbiAgICBfbDogbG9vcEV4cHJlc3Npb24sXG4gICAgX2V4OiBleHRlbmQsXG4gICAgX29jcDogb2JqZWN0Q29tcHV0ZWRQcm9wZXJ0aWVzLFxuICAgIF9ub29wOiBmdW5jdGlvbiAoKSB7fSxcbiAgICBfdDogVHJhbnNpdGlvbixcbiAgICBnZXRDb21wb25lbnRUeXBlLFxuICAgICRlbWl0OiBDb21wb25lbnQucHJvdG90eXBlLmZpcmUsXG4gICAgJG9uOiBDb21wb25lbnQucHJvdG90eXBlLm9uLFxuICAgICR3YXRjaDogQ29tcG9uZW50LnByb3RvdHlwZS53YXRjaCxcbiAgICAkbmV4dFRpY2s6IG5leHRUaWNrXG59O1xuLyogZXNsaW50LWVuYWJsZSBmZWNzLWNhbWVsY2FzZSAqL1xuXG5jb25zdCBtZW1iZXJNYXAgPSB7XG4gICAgJGVsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbDtcbiAgICB9LFxuICAgICRjb250ZXh0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vd25lcjtcbiAgICB9LFxuICAgICRwYXJlbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmVudENvbXBvbmVudDtcbiAgICB9LFxuICAgICRjaGlsZHJlbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+IGNoaWxkLm5vZGVUeXBlID09PSA1KTtcbiAgICB9LFxuICAgICRyb290KCkge1xuICAgICAgICBsZXQgcm9vdCA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLnBhcmVudENvbXBvbmVudCkge1xuICAgICAgICAgICAgd2hpbGUgKHJvb3QucGFyZW50Q29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgcm9vdCA9IHJvb3QucGFyZW50Q29tcG9uZW50XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgfSxcbiAgICAkc2xvdHM6IHNsb3QsXG4gICAgX2lzRGVzdHJveWVkKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLmxpZmVDeWNsZS5kaXNwb3NlZDtcbiAgICB9XG59O1xuXG5jb25zdCBvcmlnaW5hbFVwZGF0ZSA9IENvbXBvbmVudC5wcm90b3R5cGUuX3VwZGF0ZTtcblxuQ29tcG9uZW50LnByb3RvdHlwZS5fdXBkYXRlID0gZnVuY3Rpb24gKGNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlcykge1xuICAgICAgICB0aGlzLl90b1BoYXNlKCdiZWZvcmVVcGRhdGUnKTtcbiAgICB9XG4gICAgb3JpZ2luYWxVcGRhdGUuY2FsbCh0aGlzLCBjaGFuZ2VzKTtcbn07XG5cbmNvbnN0IGlubmVyS2V5ID0gJ19TYW5DdG9yJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVmaW5lKG9wdGlvbnMpIHtcblxuICAgIGlmIChvcHRpb25zW2lubmVyS2V5XSkge1xuICAgICAgICByZXR1cm4gb3B0aW9uc1tpbm5lcktleV07XG4gICAgfVxuXG4gICAgY29uc3Qgc2FuT3B0aW9ucyA9IGV4dGVuZCh7XG4gICAgICAgIHRlbXBsYXRlOiBvcHRpb25zLl9fc2FudGVtcGxhdGUsXG4gICAgICAgIGFOb2RlOiBvcHRpb25zLl9fc2FuYU5vZGUsXG4gICAgICAgIF9pc1NhbjogdHJ1ZSxcbiAgICB9LCBkZWZhdWx0U2FuT3B0aW9ucywgbWVyZ2VPcHRpb25zKG9wdGlvbnMpKTtcblxuICAgIGNvbnN0IGNvbXBpbGVkSG9vayA9IHNhbk9wdGlvbnMuY29tcGlsZWQ7XG4gICAgc2FuT3B0aW9ucy5jb21waWxlZCA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB0aGlzLl9jYWxjQ29tcHV0ZWQgPSBjYWxjQ29tcHV0ZWQuYmluZCh0aGlzKTtcbiAgICAgICAgY29tcGlsZWRIb29rICYmIGNvbXBpbGVkSG9vay5jYWxsKHRoaXMpO1xuXG4gICAgICAgIGNvbnN0IHByb3BlcnRpZXMgPSBPYmplY3RcbiAgICAgICAgICAgIC5rZXlzKG1lbWJlck1hcClcbiAgICAgICAgICAgIC5yZWR1Y2UoKHByb3BzLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBwcm9wc1trZXldID0ge1xuICAgICAgICAgICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWVtYmVyTWFwW2tleV0uY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3BzO1xuICAgICAgICAgICAgfSwge30pO1xuXG4gICAgICAgIHByb3BlcnRpZXMuJG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB2YWx1ZTogb3B0aW9uc1xuICAgICAgICB9O1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHByb3BlcnRpZXMpO1xuICAgIH07XG5cbiAgICBjb25zdCByZWZzID0gb3B0aW9ucy5fX3NhblJlZnM7XG4gICAgY29uc3QgaW5pdGVkSG9vayA9IHNhbk9wdGlvbnMuaW5pdGVkO1xuICAgIHNhbk9wdGlvbnMuaW5pdGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBtZSA9IHRoaXM7XG4gICAgICAgIHRoaXMuJHJlZnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG4gICAgICAgIGlmIChyZWZzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gcmVmcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHIgPSByZWZzW2ldO1xuICAgICAgICAgICAgICAgIGRlZihtZS4kcmVmcywgci5uYW1lLCB7XG4gICAgICAgICAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByLnJvb3QgPyBtZS5lbCA6IG1lLnJlZihyLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBvdmVyd3JpdGUgc2FuIGNvbXBvbmVudCBhcGkgZm9yIHN1cHBvcnQgdi1mb3IgKyByZWZcbiAgICAgICAgICAgIG1lLnJlZiA9IHJlZjtcbiAgICAgICAgfVxuXG4gICAgICAgIGluaXRlZEhvb2sgJiYgaW5pdGVkSG9vay5jYWxsKHRoaXMpO1xuXG4gICAgICAgIC8vIG1lcmdlIGNzcyBtb2R1bGVzXG4gICAgICAgIGlmICh0aGlzLiRzdHlsZSkge1xuICAgICAgICAgICAgZXh0ZW5kKHRoaXMuZGF0YS5yYXcuJHN0eWxlLCB0aGlzLiRzdHlsZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGJpbmREYXRhLmNhbGwodGhpcyk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMud2F0Y2gpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMud2F0Y2gpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLndhdGNoKGtleSwgb3B0aW9ucy53YXRjaFtrZXldLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5wcmVwcm9jZXNzQU5vZGUpIHtcbiAgICAgICAgICAgIG9wdGlvbnMucHJlcHJvY2Vzc0FOb2RlLmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgYmVmb3JlVXBkYXRlSG9vayA9IHNhbk9wdGlvbnMuYmVmb3JlVXBkYXRlO1xuICAgIHNhbk9wdGlvbnMuYmVmb3JlVXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBiZWZvcmVVcGRhdGVIb29rICYmIGJlZm9yZVVwZGF0ZUhvb2suY2FsbCh0aGlzKTtcblxuICAgICAgICBpZiAob3B0aW9ucy5wcmVwcm9jZXNzQU5vZGUpIHtcbiAgICAgICAgICAgIG9wdGlvbnMucHJlcHJvY2Vzc0FOb2RlLmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgc2FuT3B0aW9ucy5pbml0RGF0YSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBjb25zdCBtZSA9IHRoaXM7XG5cbiAgICAgICAgY29uc3QgZGVmYXVsdFByb3BzID0ge307XG4gICAgICAgIGlmIChvcHRpb25zLnByb3BzKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9wS2V5cyA9IG1lLl9wcm9wS2V5cyA9IG9wdGlvbnMuX3Byb3BLZXlzID0gb3B0aW9ucy5wcm9wc1xuICAgICAgICAgICAgICAgID8gKEFycmF5LmlzQXJyYXkob3B0aW9ucy5wcm9wcykgPyBvcHRpb25zLnByb3BzIDogT2JqZWN0LmtleXMob3B0aW9ucy5wcm9wcykpXG4gICAgICAgICAgICAgICAgOiBbXTtcblxuICAgICAgICAgICAgLy8g6buY6K6k5bGe5oCnXG4gICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkob3B0aW9ucy5wcm9wcykpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gcHJvcEtleXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcCA9IHByb3BLZXlzW2ldO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wID0gb3B0aW9ucy5wcm9wc1twXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCdkZWZhdWx0JyBpbiBwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0UHJvcHNbcF0gPSB0eXBlb2YgcHJvcC5kZWZhdWx0ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBwcm9wLmRlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcHJvcC5kZWZhdWx0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbWUuX3Byb3BLZXlzID0gW107XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5jb21wdXRlZCkge1xuICAgICAgICAgICAgbWUuX2NvbXB1dGVkS2V5cyA9IE9iamVjdC5rZXlzKG9wdGlvbnMuY29tcHV0ZWQpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IG1lLl9jb21wdXRlZEtleXM7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGsgPSBtZS5fY29tcHV0ZWRLZXlzW2ldO1xuICAgICAgICAgICAgICAgIGRlZihtZSwgaywge1xuICAgICAgICAgICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWUuZGF0YS5nZXQoayk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1lLl9jb21wdXRlZEtleXMgPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRhdGEgPSB0eXBlb2Ygb3B0aW9ucy5kYXRhID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICA/IG9wdGlvbnMuZGF0YS5jYWxsKGV4dGVuZCh7fSwgZGVmYXVsdFByb3BzLCB0aGlzLl9zcmNTYmluZERhdGEpKVxuICAgICAgICAgICAgOiAob3B0aW9ucy5kYXRhIHx8IHt9KTtcblxuICAgICAgICB0aGlzLl9kYXRhS2V5cyA9IE9iamVjdC5rZXlzKGRhdGEpIHx8IFtdO1xuXG4gICAgICAgIHJldHVybiBleHRlbmQoeyRzdHlsZToge319LCBkZWZhdWx0UHJvcHMsIGRhdGEpO1xuICAgIH07XG5cbiAgICBpZiAob3B0aW9ucy5jb21wb25lbnRzKSB7XG4gICAgICAgIHNhbk9wdGlvbnMuY29tcG9uZW50cyA9IE9iamVjdFxuICAgICAgICAgICAgLmtleXMob3B0aW9ucy5jb21wb25lbnRzKVxuICAgICAgICAgICAgLnJlZHVjZSgocHJldiwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gb3B0aW9ucy5jb21wb25lbnRzW2tleV07XG4gICAgICAgICAgICAgICAgcHJldltrZXldID0gcHJldltoeXBoZW5hdGUoa2V5KV0gPSBjb21wb25lbnQgaW5zdGFuY2VvZiBDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgPyBjb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgOiAoY29tcG9uZW50LnRlbXBsYXRlIHx8IGNvbXBvbmVudC5hTm9kZSA/IGRlZmluZUNvbXBvbmVudChjb21wb25lbnQpIDogZGVmaW5lKGNvbXBvbmVudCkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgICAgICAgfSwge30pO1xuICAgICAgICBzYW5PcHRpb25zLl9jbXB0UmVhZHkgPSAxO1xuICAgIH1cblxuICAgIGNvbnN0IGNtcHQgPSBkZWZpbmVDb21wb25lbnQoc2FuT3B0aW9ucyk7XG5cbiAgICByZXR1cm4gb3B0aW9uc1tpbm5lcktleV0gPSBjbXB0O1xufVxuXG4iLCIvKipcbiAqIEBmaWxlIG92ZXJyaWRlIGV2YWwgZXhwclxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCB7RGF0YSwgcGFyc2VFeHByLCBFeHByVHlwZSwgZXZhbEV4cHJ9IGZyb20gJ3Nhbic7XG5cbmNvbnN0IG9yaWdpbmFsR2V0ID0gRGF0YS5wcm90b3R5cGUuZ2V0O1xuXG5EYXRhLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoZXhwciwgY2FsbGVlKSB7XG4gICAgaWYgKGV4cHIgJiYgdHlwZW9mIGV4cHIgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGV4cHIgPSBwYXJzZUV4cHIoZXhwcik7XG4gICAgfVxuICAgIGxldCB2YWx1ZSA9IG9yaWdpbmFsR2V0LmNhbGwodGhpcywgZXhwciwgY2FsbGVlKTtcbiAgICBpZiAoIWV4cHIgfHwgdmFsdWUgIT09IHVuZGVmaW5lZCB8fCAhdGhpcy5vd25lciB8fCBleHByLnR5cGUgIT09IEV4cHJUeXBlLkFDQ0VTU09SKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgY29uc3QgcGF0aHMgPSBleHByLnBhdGhzO1xuICAgIGNvbnN0IGZpcnN0ID0gcGF0aHNbMF0udmFsdWU7XG4gICAgaWYgKFxuICAgICAgICBbXG4gICAgICAgICAgICAuLi50aGlzLm93bmVyLl9wcm9wS2V5cyxcbiAgICAgICAgICAgIC4uLnRoaXMub3duZXIuX2RhdGFLZXlzLFxuICAgICAgICAgICAgLi4udGhpcy5vd25lci5fY29tcHV0ZWRLZXlzXG4gICAgICAgIF0uaW5kZXhPZihmaXJzdCkgPj0gMFxuICAgICkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHZhbHVlID0gdGhpcy5vd25lcltmaXJzdF07XG4gICAgZm9yICh2YXIgaSA9IDEsIGwgPSBwYXRocy5sZW5ndGg7IHZhbHVlICE9IG51bGwgJiYgaSA8IGw7IGkrKykge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlW3BhdGhzW2ldLnZhbHVlIHx8IGV2YWxFeHByKHBhdGhzW2ldLCBjYWxsZWUpXTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xufTtcbiIsIi8qKlxuICogQGZpbGUgbWVyZ2UgY2xhc3NcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5mdW5jdGlvbiBzdHJpbmcoY2xzID0gJycpIHtcbiAgICBpZiAoIWNscykge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHJldHVybiBjbHNcbiAgICAgICAgLnNwbGl0KCcgJylcbiAgICAgICAgLnJlZHVjZSgocHJldiwgbmFtZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgICAgW25hbWVdOiAxXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LCB7fSk7XG59XG5cbmZ1bmN0aW9uIG9iamVjdChjbHMgPSB7fSkge1xuICAgIHJldHVybiBPYmplY3RcbiAgICAgICAgLmtleXMoY2xzKVxuICAgICAgICAucmVkdWNlKChwcmV2LCBrZXkpID0+IHtcbiAgICAgICAgICAgIGlmICghY2xzW2tleV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgICAgICAuLi5zdHJpbmcoa2V5KVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSwge30pO1xufVxuXG5mdW5jdGlvbiBhcnJheShjbHMgPSBbXSkge1xuICAgIGxldCBjbGF6eiA9IHt9O1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBjbHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGNsc1tpXTtcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBjbGF6eiA9IHtcbiAgICAgICAgICAgIC4uLmNsYXp6LFxuICAgICAgICAgICAgLi4uKFxuICAgICAgICAgICAgICAgIHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgID8gc3RyaW5nKGVsZW1lbnQpXG4gICAgICAgICAgICAgICAgOiAoQXJyYXkuaXNBcnJheShlbGVtZW50KSA/IGFycmF5KGVsZW1lbnQpIDogb2JqZWN0KGVsZW1lbnQpKVxuICAgICAgICAgICAgKVxuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gY2xheno7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0aWNDbGFzcyA9ICcnLCBjbHMgPSB7fSkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhhcnJheShbc3RhdGljQ2xhc3MsIGNsc10pKS5qb2luKCcgJyk7XG59XG4iLCIvKipcbiAqIEBmaWxlIG1lcmdlIHN0eWxlXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHtjYWNoZWQsIGV4dGVuZCwgdG9PYmplY3R9IGZyb20gJy4uL3NoYXJlZC91dGlsJztcblxuY29uc3QgcGFyc2VTdHlsZVRleHQgPSBjYWNoZWQoZnVuY3Rpb24gKGNzc1RleHQpIHtcbiAgICBjb25zdCByZXMgPSB7fTtcbiAgICBjb25zdCBsaXN0RGVsaW1pdGVyID0gLzsoPyFbXihdKlxcKSkvZztcbiAgICBjb25zdCBwcm9wZXJ0eURlbGltaXRlciA9IC86KC4rKS87XG4gICAgY3NzVGV4dC5zcGxpdChsaXN0RGVsaW1pdGVyKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICB2YXIgdG1wID0gaXRlbS5zcGxpdChwcm9wZXJ0eURlbGltaXRlcik7XG4gICAgICAgICAgICB0bXAubGVuZ3RoID4gMSAmJiAocmVzW3RtcFswXS50cmltKCldID0gdG1wWzFdLnRyaW0oKSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzO1xufSk7XG5cbi8vIG5vcm1hbGl6ZSBwb3NzaWJsZSBhcnJheSAvIHN0cmluZyB2YWx1ZXMgaW50byBPYmplY3RcbmZ1bmN0aW9uIG5vcm1hbGl6ZVN0eWxlQmluZGluZyhiaW5kaW5nU3R5bGUpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShiaW5kaW5nU3R5bGUpKSB7XG4gICAgICAgIHJldHVybiB0b09iamVjdChiaW5kaW5nU3R5bGUpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGJpbmRpbmdTdHlsZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlU3R5bGVUZXh0KGJpbmRpbmdTdHlsZSk7XG4gICAgfVxuICAgIHJldHVybiBiaW5kaW5nU3R5bGU7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRpY1N0eWxlLCBzdHlsZSwgdlNob3cgPSB0cnVlKSB7XG4gICAgc3R5bGUgPSBub3JtYWxpemVTdHlsZUJpbmRpbmcoc3R5bGUpO1xuICAgIGlmICghdlNob3cpIHtcbiAgICAgICAgc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gICAgcmV0dXJuIHN0YXRpY1N0eWxlXG4gICAgICAgID8gZXh0ZW5kKHN0YXRpY1N0eWxlLCBzdHlsZSlcbiAgICAgICAgOiBzdHlsZTtcbn1cbiIsIi8qKlxuICogQGZpbGUgbG9vcCBleHByZXNzaW9uXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHtjYWNoZWR9IGZyb20gJy4uL3NoYXJlZC91dGlsJztcblxuY29uc3QgdG9BcnJheSA9IGNhY2hlZChmdW5jdGlvbiAobikge1xuICAgIGNvbnN0IHZhbHVlID0gbmV3IEFycmF5KG4pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgIHZhbHVlW2ldID0gaSArIDE7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAoIWlzTmFOKHZhbHVlKSkge1xuICAgICAgICBjb25zdCBuID0gK3ZhbHVlO1xuICAgICAgICB2YWx1ZSA9IHRvQXJyYXkobik7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn1cblxuIiwiLyoqXG4gKiBAZmlsZSBnZXQgY29tcG9uZW50IHR5cGVcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQge2V2YWxFeHByfSBmcm9tICdzYW4nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoYU5vZGUsIGRhdGEpIHtcbiAgICBpZiAoYU5vZGUudGFnTmFtZSAhPT0gJ2NvbXBvbmVudCcgfHwgYU5vZGUuaG90c3BvdC5wcm9wcy5pcyA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudHNbYU5vZGUudGFnTmFtZV07XG4gICAgfVxuXG4gICAgY29uc3QgaXMgPSBhTm9kZS5wcm9wc1thTm9kZS5ob3RzcG90LnByb3BzLmlzXTtcbiAgICBjb25zdCBpc1ZhbHVlID0gZXZhbEV4cHIoaXMuZXhwciwgZGF0YSk7XG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50c1tpc1ZhbHVlXTtcbn1cbiIsIi8qKlxuICogQGZpbGUgb2JqZWN0IGNvbXB1dGVkIHByb3BlcnRpZXMgbWVyZ2VcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocHJvcGVydGllcykge1xuICAgIHJldHVybiBwcm9wZXJ0aWVzLnJlZHVjZSgocHJldiwge2ssIHZ9KSA9PiB7XG4gICAgICAgIHByZXZba10gPSB2O1xuICAgICAgICByZXR1cm4gcHJldjtcbiAgICB9LCB7fSk7XG59XG4iLCIvKipcbiAqIEBmaWxlIHNhbiByZWYgcmV3cml0ZVxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCAqIGFzIHNhbiBmcm9tICdzYW4nO1xuaW1wb3J0IHtjYW1lbGl6ZX0gZnJvbSAnLi4vc2hhcmVkL3V0aWwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAobmFtZSkge1xuXG4gICAgY29uc3Qgb3duZXIgPSB0aGlzO1xuXG4gICAgZnVuY3Rpb24gY2hpbGRyZW5UcmF2ZXJzYWwoY2hpbGRyZW4pIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcmVmVGFyZ2V0ID0gZWxlbWVudFRyYXZlcnNhbChjaGlsZHJlbltpXSk7XG4gICAgICAgICAgICBpZiAocmVmVGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlZlRhcmdldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVsZW1lbnRUcmF2ZXJzYWwoZWxlbWVudCkge1xuICAgICAgICBjb25zdCBub2RlVHlwZSA9IGVsZW1lbnQubm9kZVR5cGU7XG4gICAgICAgIGlmIChub2RlVHlwZSA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZWZUYXJnZXQ7XG4gICAgICAgIGlmIChlbGVtZW50Lm93bmVyID09PSBvd25lcikge1xuICAgICAgICAgICAgbGV0IHJlZjtcbiAgICAgICAgICAgIGxldCB2YWx1ZTtcbiAgICAgICAgICAgIHN3aXRjaCAobm9kZVR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICByZWYgPSBlbGVtZW50LmFOb2RlLmRpcmVjdGl2ZXMucmVmO1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHJlZiAmJiBzYW4uZXZhbEV4cHIocmVmLnZhbHVlLCBlbGVtZW50LnNjb3BlLCBvd25lcik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWYgJiYgKHZhbHVlID09PSBuYW1lIHx8IGNhbWVsaXplKHZhbHVlKSA9PT0gbmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBub2RlVHlwZSA9PT0gNCA/IGVsZW1lbnQuZWwgOiBlbGVtZW50LmNoaWxkcmVuLm1hcChlbGVtZW50VHJhdmVyc2FsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgcmVmID0gZWxlbWVudC5zb3VyY2UuZGlyZWN0aXZlcy5yZWY7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gc2FuLmV2YWxFeHByKHJlZi52YWx1ZSwgZWxlbWVudC5zY29wZSwgb3duZXIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVmICYmICh2YWx1ZSA9PT0gbmFtZSB8fCBjYW1lbGl6ZSh2YWx1ZSkgPT09IG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZWZUYXJnZXQgPSBlbGVtZW50LnNsb3RDaGlsZHJlbiAmJiBjaGlsZHJlblRyYXZlcnNhbChlbGVtZW50LnNsb3RDaGlsZHJlbik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVmVGFyZ2V0IHx8IGNoaWxkcmVuVHJhdmVyc2FsKGVsZW1lbnQuY2hpbGRyZW4pO1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZHJlblRyYXZlcnNhbCh0aGlzLmNoaWxkcmVuKTtcbn07XG4iLCIvKipcbiAqIEBmaWxlIG1lcmdlIG9wdGlvbnNcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQge2V4dGVuZH0gZnJvbSAnLi4vc2hhcmVkL3V0aWwnO1xuaW1wb3J0IHtsaWZlQ3ljbGVLZXlzLCBsaWZlQ3ljbGVNYXB9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IGF0b21CdWlsZEluTWl4aW4gZnJvbSAnLi9hdG9tLWdsb2JhbC1hcGknO1xuXG5jb25zdCBrZXlzID0gW1xuICAgICdmaWx0ZXJzJyxcbiAgICAnY29tcHV0ZWQnXG5dO1xuXG5mdW5jdGlvbiBtZXJnZUhvb2socGFyZW50VmFsLCBjaGlsZFZhbCkge1xuICAgIHJldHVybiBjaGlsZFZhbFxuICAgICAgICA/IHBhcmVudFZhbFxuICAgICAgICAgICAgPyBwYXJlbnRWYWwuY29uY2F0KGNoaWxkVmFsKVxuICAgICAgICAgICAgOiBBcnJheS5pc0FycmF5KGNoaWxkVmFsKVxuICAgICAgICAgICAgICAgID8gY2hpbGRWYWxcbiAgICAgICAgICAgICAgICA6IFtjaGlsZFZhbF1cbiAgICAgICAgICAgIDogcGFyZW50VmFsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZXJnZU9wdGlvbnMob3B0aW9ucykge1xuICAgIGNvbnN0IGRlc3RPcHRpb25zID0ge307XG4gICAgY29uc3QgbGlzdCA9IEFycmF5LmlzQXJyYXkob3B0aW9ucy5taXhpbnMpXG4gICAgICAgID8gW2F0b21CdWlsZEluTWl4aW4sIC4uLm9wdGlvbnMubWl4aW5zLCBvcHRpb25zXVxuICAgICAgICA6IFthdG9tQnVpbGRJbk1peGluLCBvcHRpb25zXTtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gbGlzdC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBjb25zdCBvcHQgPSBsaXN0W2ldO1xuICAgICAgICBvcHQubWV0aG9kcyAmJiBleHRlbmQoZGVzdE9wdGlvbnMsIG9wdC5tZXRob2RzKTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBrZXlzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCBrID0ga2V5c1tqXTtcbiAgICAgICAgICAgIGlmIChvcHRba10pIHtcbiAgICAgICAgICAgICAgICBkZXN0T3B0aW9uc1trXSA9IGV4dGVuZChkZXN0T3B0aW9uc1trXSB8fCB7fSwgb3B0W2tdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxpZmVDeWNsZUtleXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGsgPSBsaWZlQ3ljbGVLZXlzW2pdO1xuICAgICAgICAgICAgY29uc3QgZGsgPSBsaWZlQ3ljbGVNYXBba107XG4gICAgICAgICAgICBpZiAob3B0W2tdKSB7XG4gICAgICAgICAgICAgICAgZGVzdE9wdGlvbnNbZGtdID0gbWVyZ2VIb29rKGRlc3RPcHRpb25zW2RrXSB8fCBbXSwgb3B0W2tdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxpZmVDeWNsZUtleXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgY29uc3QgayA9IGxpZmVDeWNsZUtleXNbal07XG4gICAgICAgIGNvbnN0IGRrID0gbGlmZUN5Y2xlTWFwW2tdO1xuICAgICAgICBpZiAoZGVzdE9wdGlvbnNbZGtdKSB7XG4gICAgICAgICAgICBjb25zdCBob29rcyA9IGRlc3RPcHRpb25zW2RrXS5zbGljZSgpO1xuICAgICAgICAgICAgZGVzdE9wdGlvbnNbZGtdID0gaG9va3MubGVuZ3RoID09PSAxID8gaG9va3NbMF0gOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaG9va3MuZm9yRWFjaChob29rID0+IGhvb2suY2FsbCh0aGlzKSwgdGhpcyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChvcHRpb25zLm1lc3NhZ2VzKSB7XG4gICAgICAgIGRlc3RPcHRpb25zLm1lc3NhZ2VzID0gb3B0aW9ucy5tZXNzYWdlcztcbiAgICB9XG4gICAgcmV0dXJuIGRlc3RPcHRpb25zO1xufVxuIiwiLyoqXG4gKiBAZmlsZSBjb25zdGFudHNcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5leHBvcnQgY29uc3QgbGlmZUN5Y2xlTWFwID0ge1xuICAgIGJlZm9yZUNyZWF0ZTogJ2NvbXBpbGVkJyxcbiAgICBtb3VudGVkOiAnYXR0YWNoZWQnLFxuICAgIGNyZWF0ZWQ6ICdpbml0ZWQnLFxuICAgIGJlZm9yZU1vdW50OiAnY3JlYXRlZCcsXG4gICAgYmVmb3JlRGVzdHJveTogJ2RldGFjaGVkJyxcbiAgICBkZXN0cm95OiAnZGlzcG9zZWQnLFxuICAgIHVwZGF0ZWQ6ICd1cGRhdGVkJyxcbiAgICBiZWZvcmVVcGRhdGU6ICdiZWZvcmVVcGRhdGUnLFxuICAgIGFjdGl2YXRlZDogJ2FjdGl2YXRlZCcsXG4gICAgZGVhY3RpdmF0ZWQ6ICdkZWFjdGl2YXRlZCdcbn07XG5cbmV4cG9ydCBjb25zdCBsaWZlQ3ljbGVLZXlzID0gT2JqZWN0LmtleXMobGlmZUN5Y2xlTWFwKTtcbiIsIi8qKlxuICogQGZpbGUg5YWo5bGA55Sf5pWI55qE5Ye95pWwXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuY29uc3QgTUFUSF9NRVRIT0QgPSBbXG4gICAgJ2Zsb29yJywgJ2NlaWwnLCAncm91bmQnLFxuICAgICdhYnMnLCAnbWF4JywgJ21pbicsICdwb3cnXG5dO1xuXG5jb25zdCBtZXRob2RzID0gZXhwb3J0cy5tZXRob2RzID0ge307XG5cbk1BVEhfTUVUSE9ELmZvckVhY2gobmFtZSA9PiB7XG4gICAgbWV0aG9kc1tgbWF0aF8ke25hbWV9YF0gPSBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICByZXR1cm4gTWF0aFtuYW1lXS5hcHBseShNYXRoLCBhcmdzKTtcbiAgICB9O1xufSk7XG5cbm1ldGhvZHMuYXJyYXlfc2xpY2UgPSBmdW5jdGlvbiAoYXJyLCBzdGFydCwgbGVuKSB7XG4gICAgdmFyIGVuZCA9IGxlbiA9PSBudWxsID8gdm9pZCAwIDogKGxlbiA+PSAwID8gKHN0YXJ0ICsgbGVuKSA6IChhcnIubGVuZ3RoICsgbGVuKSk7XG4gICAgcmV0dXJuIGFyci5zbGljZShzdGFydCwgZW5kKTtcbn07XG5cbm1ldGhvZHMuYXJyYXlfam9pbiA9IGZ1bmN0aW9uIChhcnIsIHNlcCkge1xuICAgIHJldHVybiBhcnIuam9pbihzZXApO1xufTtcblxubWV0aG9kcy5zdHJfcG9zID0gZnVuY3Rpb24gKHN0ciwgbWF0Y2gpIHtcbiAgICByZXR1cm4gc3RyLmluZGV4T2YobWF0Y2gpO1xufTtcblxubWV0aG9kcy5vYmplY3RfZnJlZXplID0gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBPYmplY3QuZnJlZXplKG9iaik7XG59O1xuXG5leHBvcnRzLmZpbHRlcnMgPSB7XG4gICAganNvbihvYmopIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGpzb24pO1xuICAgIH0sXG4gICAgbG93ZXIoc3RyKSB7XG4gICAgICAgIHJldHVybiBzdHIudG9Mb3dlckNhc2UoKTtcbiAgICB9LFxuICAgIHVwcGVyKHN0cikge1xuICAgICAgICByZXR1cm4gc3RyLnRvVXBwZXJDYXNlKCk7XG4gICAgfVxufTtcbiIsIi8qKlxuICogQGZpbGUg5pWw5o2u57uR5a6aXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHtpc09iamVjdCwgaGFzT3duLCBpc1BsYWluT2JqZWN0LCBleHRlbmQsIGRlZn0gZnJvbSAnLi4vc2hhcmVkL3V0aWwnO1xuaW1wb3J0IHtFeHByVHlwZX0gZnJvbSAnc2FuJztcblxuY29uc3QgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcbmNvbnN0IGFycmF5TWV0aG9kcyA9IE9iamVjdC5jcmVhdGUoYXJyYXlQcm90byk7XG5cbmNvbnN0IG1ldGhvZHNUb1BhdGNoID0gW1xuICAgICdwdXNoJyxcbiAgICAncG9wJyxcbiAgICAnc2hpZnQnLFxuICAgICd1bnNoaWZ0JyxcbiAgICAnc3BsaWNlJyxcbiAgICAnc29ydCcsXG4gICAgJ3JldmVyc2UnXG5dO1xuXG4vKipcbiAqIEludGVyY2VwdCBtdXRhdGluZyBtZXRob2RzIGFuZCBlbWl0IGV2ZW50c1xuICovXG5tZXRob2RzVG9QYXRjaC5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICAvLyBjYWNoZSBvcmlnaW5hbCBtZXRob2RcbiAgICBjb25zdCBvcmlnaW5hbCA9IGFycmF5UHJvdG9bbWV0aG9kXVxuICAgIGRlZihhcnJheU1ldGhvZHMsIG1ldGhvZCwge1xuICAgICAgICB2YWx1ZSguLi5hcmdzKSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgICAgIGNvbnN0IG9iID0gdGhpcy5fX29iX187XG4gICAgICAgICAgICBsZXQgaW5zZXJ0ZWQ7XG4gICAgICAgICAgICBzd2l0Y2ggKG1ldGhvZCkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3B1c2gnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ3Vuc2hpZnQnOlxuICAgICAgICAgICAgICAgICAgICBpbnNlcnRlZCA9IGFyZ3M7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3NwbGljZSc6XG4gICAgICAgICAgICAgICAgICAgIGluc2VydGVkID0gYXJncy5zbGljZSgyKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaW5zZXJ0ZWQpIHtcbiAgICAgICAgICAgICAgICBvYi5vYnNlcnZlQXJyYXkoaW5zZXJ0ZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb2IuY29udGV4dC5kYXRhLnNldChvYi5leHByLCB0aGlzLCB7Zm9yY2U6IHRydWV9KTtcbiAgICAgICAgICAgIG9ic2VydmUob2IuY29udGV4dC5kYXRhLmdldChvYi5leHByKSwgb2IuZXhwciwgb2IuY29udGV4dCk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgfSlcbn0pO1xuXG5jbGFzcyBPYnNlcnZlciB7XG5cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSwgZXhwciwgY29udGV4dCkge1xuICAgICAgICB0aGlzLmV4cHIgPSBleHByO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICBkZWYodmFsdWUsICdfX29iX18nLCB7XG4gICAgICAgICAgICB2YWx1ZTogdGhpc1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZS5fX3Byb3RvX18gPSBhcnJheU1ldGhvZHM7XG4gICAgICAgICAgICB0aGlzLm9ic2VydmVBcnJheSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSkgfHwgW107XG4gICAgICAgICAgICB0aGlzLndhbGsodmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2FsayB0aHJvdWdoIGFsbCBwcm9wZXJ0aWVzIGFuZCBjb252ZXJ0IHRoZW0gaW50b1xuICAgICAqIGdldHRlci9zZXR0ZXJzLiBUaGlzIG1ldGhvZCBzaG91bGQgb25seSBiZSBjYWxsZWQgd2hlblxuICAgICAqIHZhbHVlIHR5cGUgaXMgT2JqZWN0LlxuICAgICAqL1xuICAgIHdhbGsob2JqKSB7XG4gICAgICAgIGNvbnN0IGtleXMgPSB0aGlzLmtleXM7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZGVmaW5lUmVhY3RpdmUob2JqLCBrZXlzW2ldLCB0aGlzLmV4cHIsIHRoaXMuY29udGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPYnNlcnZlIGEgbGlzdCBvZiBBcnJheSBpdGVtcy5cbiAgICAgKi9cbiAgICBvYnNlcnZlQXJyYXkoaXRlbXMpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBpdGVtcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIG9ic2VydmUoaXRlbXNbaV0sIGV4dGVuZCh7fSwgdGhpcy5leHByLCB7XG4gICAgICAgICAgICAgICAgcGF0aHM6IFsuLi50aGlzLmV4cHIucGF0aHMsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogRXhwclR5cGUuTlVNQkVSLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9KSwgdGhpcy5jb250ZXh0KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5lUmVhY3RpdmUob2JqLCBrZXksIGV4cHIsIGNvbnRleHQpIHtcblxuICAgIGNvbnN0IHByb3BlcnR5ID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSk7XG4gICAgaWYgKHByb3BlcnR5ICYmIHByb3BlcnR5LmNvbmZpZ3VyYWJsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGNhdGVyIGZvciBwcmUtZGVmaW5lZCBnZXR0ZXIvc2V0dGVyc1xuICAgIGNvbnN0IGdldHRlciA9IHByb3BlcnR5ICYmIHByb3BlcnR5LmdldDtcbiAgICBjb25zdCBzZXR0ZXIgPSBwcm9wZXJ0eSAmJiBwcm9wZXJ0eS5zZXQ7XG5cbiAgICBjb25zdCBrZXlFeHByID0ge1xuICAgICAgICB0eXBlOiBFeHByVHlwZS5BQ0NFU1NPUixcbiAgICAgICAgcGF0aHM6IFsuLi5leHByLnBhdGhzLCB7XG4gICAgICAgICAgICB0eXBlOiBFeHByVHlwZS5TVFJJTkcsXG4gICAgICAgICAgICB2YWx1ZToga2V5XG4gICAgICAgIH1dXG4gICAgfTtcblxuICAgIGxldCB2YWwgPSBvYmpba2V5XTtcbiAgICBvYnNlcnZlKHZhbCwga2V5RXhwciwgY29udGV4dCk7XG4gICAgY29uc3QgbmV3UHJvcGVydHkgPSB7XG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgc2V0KG5ld1ZhbCkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBnZXR0ZXIgPyBnZXR0ZXIuY2FsbChvYmopIDogdmFsO1xuICAgICAgICAgICAgaWYgKG5ld1ZhbCA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZ2V0dGVyICYmICFzZXR0ZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2V0dGVyKSB7XG4gICAgICAgICAgICAgICAgc2V0dGVyLmNhbGwob2JqLCBuZXdWYWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsID0gbmV3VmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb2JzZXJ2ZShuZXdWYWwsIGtleUV4cHIsIGNvbnRleHQpO1xuICAgICAgICAgICAgY29udGV4dC5kYXRhLnNldChrZXlFeHByLCBuZXdWYWwsIHtmb3JjZTogdHJ1ZX0pO1xuICAgICAgICB9LFxuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGdldHRlciA/IGdldHRlci5jYWxsKG9iaikgOiB2YWw7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGRlZihvYmosIGtleSwgbmV3UHJvcGVydHkpO1xufVxuXG5jb25zdCBkZWZhdWx0RXhwciA9IHtcbiAgICB0eXBlOiBFeHByVHlwZS5BQ0NFU1NPUixcbiAgICBwYXRoczogW11cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBleHByID0gZXh0ZW5kKHt9LCBkZWZhdWx0RXhwcik7XG4gICAgY29uc3Qga2V5cyA9IFsuLi50aGlzLl9kYXRhS2V5cywgLi4udGhpcy5fcHJvcEtleXNdO1xuICAgIGNvbnN0IGtleUxlbmd0aCA9IGtleXMubGVuZ3RoO1xuXG4gICAgb2JzZXJ2ZSh0aGlzLmRhdGEuZ2V0KCksIGV4cHIsIHRoaXMpO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXM7XG5cbiAgICB0aGlzLl9kYXRhID0gdGhpcy5kYXRhLmdldCgpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlMZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBrZXkgPSBrZXlzW2ldO1xuICAgICAgICBkZWYoY29udGV4dCwga2V5LCB7XG4gICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRleHQuX2RhdGFba2V5XTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQobmV3VmFsKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5fZGF0YVtrZXldID0gbmV3VmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmRhdGEub3duZXIgPSB0aGlzO1xufVxuXG5mdW5jdGlvbiBvYnNlcnZlKHZhbHVlLCBleHByLCBjb250ZXh0KSB7XG4gICAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgb2I7XG4gICAgaWYgKGhhc093bih2YWx1ZSwgJ19fb2JfXycpICYmIHZhbHVlLl9fb2JfXyBpbnN0YW5jZW9mIE9ic2VydmVyKSB7XG4gICAgICAgIG9iID0gdmFsdWUuX19vYl9fXG4gICAgfVxuICAgIGVsc2UgaWYgKFxuICAgICAgICAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgfHwgaXNQbGFpbk9iamVjdCh2YWx1ZSkpXG4gICAgICAgICYmIE9iamVjdC5pc0V4dGVuc2libGUodmFsdWUpXG4gICAgKSB7XG4gICAgICAgIG9iID0gbmV3IE9ic2VydmVyKHZhbHVlLCBleHByLCBjb250ZXh0KTtcbiAgICB9XG4gICAgcmV0dXJuIG9iO1xufVxuIiwiLyoqXG4gKiBAZmlsZSDopobnm5Ygc2FuIOWOn+eUn+eahCBfY2FsY0NvbXB1dGVkXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHtkZWZ9IGZyb20gJy4uL3NoYXJlZC91dGlsJztcbmltcG9ydCBzbG90cyBmcm9tICcuL2dldC1zbG90cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChrZXkpIHtcbiAgICBsZXQgY29tcHV0ZWREZXBzID0gdGhpcy5jb21wdXRlZERlcHNba2V5XTtcbiAgICBpZiAoIWNvbXB1dGVkRGVwcykge1xuICAgICAgICBjb21wdXRlZERlcHMgPSB0aGlzLmNvbXB1dGVkRGVwc1trZXldID0ge307XG4gICAgfVxuXG4gICAgY29uc3QgbWUgPSB0aGlzO1xuICAgIGNvbnN0IGRhdGEgPSBtZS5kYXRhLmdldCgpO1xuICAgIGNvbnN0IGNvbnRleHQgPSB7fTtcblxuICAgIGRlZihjb250ZXh0LCAnJHJvb3QnLCB7XG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiBtZS4kcm9vdDtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgZGVmKGNvbnRleHQsICckc2xvdHMnLCB7XG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiBzbG90cy5jYWxsKG1lKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGRhdGEpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGsgPSBrZXlzW2ldO1xuICAgICAgICBkZWYoY29udGV4dCwgaywge1xuICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIGlmICghY29tcHV0ZWREZXBzW2tdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXB1dGVkRGVwc1trXSA9IDE7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lLmNvbXB1dGVkW2tdICYmICFtZS5jb21wdXRlZERlcHNba10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLl9jYWxjQ29tcHV0ZWQoayk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBtZS53YXRjaChrLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZS5fY2FsY0NvbXB1dGVkKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBtZS5kYXRhLmdldChrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5kYXRhLnNldChrZXksIHRoaXMuY29tcHV0ZWRba2V5XS5jYWxsKGNvbnRleHQpKTtcbn1cbiIsIi8qKlxuICogQGZpbGUgY2FsbCBhY3RpdmF0ZWQgZGVhY3RpdmF0ZWRcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQge05vZGVUeXBlfSBmcm9tICdzYW4nO1xuXG5mdW5jdGlvbiBjcmVhdGVDYWxsRmFjdG9yeShuYW1lKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGNhbGwoZGlyZWN0KSB7XG4gICAgICAgIGNvbnN0IGVsZSA9IHRoaXM7XG4gICAgICAgIGlmIChlbGUubm9kZVR5cGUgPT09IE5vZGVUeXBlLkNNUFQpIHtcbiAgICAgICAgICAgIGVsZS5fdG9QaGFzZShuYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlLmNoaWxkcmVuICYmIGVsZS5jaGlsZHJlbi5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBlbGUuY2hpbGRyZW4uZm9yRWFjaChjYWxsKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNhbGxBY3Rpdml0ZWQgPSBjcmVhdGVDYWxsRmFjdG9yeSgnYWN0aXZpdGVkJyk7XG5leHBvcnQgY29uc3QgY2FsbERlQWN0aXZpdGVkID0gY3JlYXRlQ2FsbEZhY3RvcnkoJ2RlYWN0aXZpdGVkJyk7XG4iLCIvKipcbiAqIEBmaWxlIHMtdHJhbnNpdGlvblxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCB7Y2FjaGVkLCByZW1vdmUsIGV4dGVuZCwgb25jZSwgaXNPYmplY3R9IGZyb20gJy4uL3NoYXJlZC91dGlsJztcbmltcG9ydCB7YWRkQ2xhc3MsIHJlbW92ZUNsYXNzfSBmcm9tICcuL2NsYXNzLXV0aWwnO1xuXG5mdW5jdGlvbiByZXNvbHZlVHJhbnNpdGlvbihkZWYpIHtcbiAgICBpZiAoIWRlZikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKHR5cGVvZiBkZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IHt9O1xuICAgICAgICBpZiAoZGVmLmNzcyAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGV4dGVuZChyZXMsIGF1dG9Dc3NUcmFuc2l0aW9uKGRlZi5uYW1lIHx8ICd2JykpO1xuICAgICAgICB9XG4gICAgICAgIGV4dGVuZChyZXMsIGRlZik7XG4gICAgICAgIHJldHVybiByZXNcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGRlZiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIGF1dG9Dc3NUcmFuc2l0aW9uKGRlZilcbiAgICB9XG59XG5cbmNvbnN0IGF1dG9Dc3NUcmFuc2l0aW9uID0gY2FjaGVkKG5hbWUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGVudGVyQ2xhc3M6IGAke25hbWV9LWVudGVyYCxcbiAgICAgICAgZW50ZXJUb0NsYXNzOiBgJHtuYW1lfS1lbnRlci10b2AsXG4gICAgICAgIGVudGVyQWN0aXZlQ2xhc3M6IGAke25hbWV9LWVudGVyLWFjdGl2ZWAsXG4gICAgICAgIGxlYXZlQ2xhc3M6IGAke25hbWV9LWxlYXZlYCxcbiAgICAgICAgbGVhdmVUb0NsYXNzOiBgJHtuYW1lfS1sZWF2ZS10b2AsXG4gICAgICAgIGxlYXZlQWN0aXZlQ2xhc3M6IGAke25hbWV9LWxlYXZlLWFjdGl2ZWBcbiAgICB9O1xufSk7XG5cbmNvbnN0IFRSQU5TSVRJT04gPSAndHJhbnNpdGlvbic7XG5jb25zdCBBTklNQVRJT04gPSAnYW5pbWF0aW9uJztcblxuLy8gVHJhbnNpdGlvbiBwcm9wZXJ0eS9ldmVudCBzbmlmZmluZ1xubGV0IHRyYW5zaXRpb25Qcm9wID0gJ3RyYW5zaXRpb24nO1xubGV0IHRyYW5zaXRpb25FbmRFdmVudCA9ICd0cmFuc2l0aW9uZW5kJztcbmxldCBhbmltYXRpb25Qcm9wID0gJ2FuaW1hdGlvbic7XG5sZXQgYW5pbWF0aW9uRW5kRXZlbnQgPSAnYW5pbWF0aW9uZW5kJztcbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuaWYgKFxuICAgIHdpbmRvdy5vbnRyYW5zaXRpb25lbmQgPT09IHVuZGVmaW5lZFxuICAgICYmIHdpbmRvdy5vbndlYmtpdHRyYW5zaXRpb25lbmQgIT09IHVuZGVmaW5lZFxuKSB7XG4gICAgdHJhbnNpdGlvblByb3AgPSAnV2Via2l0VHJhbnNpdGlvbic7XG4gICAgdHJhbnNpdGlvbkVuZEV2ZW50ID0gJ3dlYmtpdFRyYW5zaXRpb25FbmQnO1xufVxuaWYgKFxuICAgIHdpbmRvdy5vbmFuaW1hdGlvbmVuZCA9PT0gdW5kZWZpbmVkXG4gICAgJiYgd2luZG93Lm9ud2Via2l0YW5pbWF0aW9uZW5kICE9PSB1bmRlZmluZWRcbikge1xuICAgIGFuaW1hdGlvblByb3AgPSAnV2Via2l0QW5pbWF0aW9uJztcbiAgICBhbmltYXRpb25FbmRFdmVudCA9ICd3ZWJraXRBbmltYXRpb25FbmQnO1xufVxuXG5jb25zdCByYWYgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgPyB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lLmJpbmQod2luZG93KVxuICAgIDogc2V0VGltZW91dDtcblxuZnVuY3Rpb24gbmV4dEZyYW1lIChmbikge1xuICAgIHJhZigoKSA9PiB7XG4gICAgICAgIHJhZihmbik7XG4gICAgfSk7XG59XG5cbmNvbnN0IHRyYW5zZm9ybVJFID0gL1xcYih0cmFuc2Zvcm18YWxsKSgsfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHJhbnNpdGlvbkluZm8gKGVsLCBleHBlY3RlZFR5cGUpIHtcbiAgICBjb25zdCBzdHlsZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbClcbiAgICAvLyBKU0RPTSBtYXkgcmV0dXJuIHVuZGVmaW5lZCBmb3IgdHJhbnNpdGlvbiBwcm9wZXJ0aWVzXG4gICAgY29uc3QgdHJhbnNpdGlvbkRlbGF5cyA9IChzdHlsZXNbdHJhbnNpdGlvblByb3AgKyAnRGVsYXknXSB8fCAnJykuc3BsaXQoJywgJyk7XG4gICAgY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9ucyA9IChzdHlsZXNbdHJhbnNpdGlvblByb3AgKyAnRHVyYXRpb24nXSB8fCAnJykuc3BsaXQoJywgJyk7XG4gICAgY29uc3QgdHJhbnNpdGlvblRpbWVvdXQgPSBnZXRUaW1lb3V0KHRyYW5zaXRpb25EZWxheXMsIHRyYW5zaXRpb25EdXJhdGlvbnMpO1xuICAgIGNvbnN0IGFuaW1hdGlvbkRlbGF5cyA9IChzdHlsZXNbYW5pbWF0aW9uUHJvcCArICdEZWxheSddIHx8ICcnKS5zcGxpdCgnLCAnKTtcbiAgICBjb25zdCBhbmltYXRpb25EdXJhdGlvbnMgPSAoc3R5bGVzW2FuaW1hdGlvblByb3AgKyAnRHVyYXRpb24nXSB8fCAnJykuc3BsaXQoJywgJyk7XG4gICAgY29uc3QgYW5pbWF0aW9uVGltZW91dCA9IGdldFRpbWVvdXQoYW5pbWF0aW9uRGVsYXlzLCBhbmltYXRpb25EdXJhdGlvbnMpO1xuXG4gICAgbGV0IHR5cGU7XG4gICAgbGV0IHRpbWVvdXQgPSAwO1xuICAgIGxldCBwcm9wQ291bnQgPSAwO1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmIChleHBlY3RlZFR5cGUgPT09IFRSQU5TSVRJT04pIHtcbiAgICAgICAgaWYgKHRyYW5zaXRpb25UaW1lb3V0ID4gMCkge1xuICAgICAgICAgICAgdHlwZSA9IFRSQU5TSVRJT047XG4gICAgICAgICAgICB0aW1lb3V0ID0gdHJhbnNpdGlvblRpbWVvdXQ7XG4gICAgICAgICAgICBwcm9wQ291bnQgPSB0cmFuc2l0aW9uRHVyYXRpb25zLmxlbmd0aDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChleHBlY3RlZFR5cGUgPT09IEFOSU1BVElPTikge1xuICAgICAgICBpZiAoYW5pbWF0aW9uVGltZW91dCA+IDApIHtcbiAgICAgICAgICAgIHR5cGUgPSBBTklNQVRJT047XG4gICAgICAgICAgICB0aW1lb3V0ID0gYW5pbWF0aW9uVGltZW91dDtcbiAgICAgICAgICAgIHByb3BDb3VudCA9IGFuaW1hdGlvbkR1cmF0aW9ucy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRpbWVvdXQgPSBNYXRoLm1heCh0cmFuc2l0aW9uVGltZW91dCwgYW5pbWF0aW9uVGltZW91dClcbiAgICAgICAgdHlwZSA9IHRpbWVvdXQgPiAwXG4gICAgICAgICAgICA/IHRyYW5zaXRpb25UaW1lb3V0ID4gYW5pbWF0aW9uVGltZW91dFxuICAgICAgICAgICAgICAgID8gVFJBTlNJVElPTlxuICAgICAgICAgICAgICAgIDogQU5JTUFUSU9OXG4gICAgICAgICAgICA6IG51bGw7XG4gICAgICAgIHByb3BDb3VudCA9IHR5cGVcbiAgICAgICAgICAgID8gdHlwZSA9PT0gVFJBTlNJVElPTlxuICAgICAgICAgICAgICAgID8gdHJhbnNpdGlvbkR1cmF0aW9ucy5sZW5ndGhcbiAgICAgICAgICAgICAgICA6IGFuaW1hdGlvbkR1cmF0aW9ucy5sZW5ndGhcbiAgICAgICAgICAgIDogMDtcbiAgICB9XG4gICAgY29uc3QgaGFzVHJhbnNmb3JtID1cbiAgICAgICAgdHlwZSA9PT0gVFJBTlNJVElPTlxuICAgICAgICAmJiB0cmFuc2Zvcm1SRS50ZXN0KHN0eWxlc1t0cmFuc2l0aW9uUHJvcCArICdQcm9wZXJ0eSddKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlLFxuICAgICAgICB0aW1lb3V0LFxuICAgICAgICBwcm9wQ291bnQsXG4gICAgICAgIGhhc1RyYW5zZm9ybVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGdldFRpbWVvdXQoZGVsYXlzLCBkdXJhdGlvbnMpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIHdoaWxlIChkZWxheXMubGVuZ3RoIDwgZHVyYXRpb25zLmxlbmd0aCkge1xuICAgICAgICBkZWxheXMgPSBkZWxheXMuY29uY2F0KGRlbGF5cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIE1hdGgubWF4LmFwcGx5KG51bGwsIGR1cmF0aW9ucy5tYXAoKGQsIGkpID0+IHtcbiAgICAgICAgcmV0dXJuIHRvTXMoZCkgKyB0b01zKGRlbGF5c1tpXSk7XG4gICAgfSkpO1xufVxuXG4vLyBPbGQgdmVyc2lvbnMgb2YgQ2hyb21pdW0gKGJlbG93IDYxLjAuMzE2My4xMDApIGZvcm1hdHMgZmxvYXRpbmcgcG9pbnRlciBudW1iZXJzXG4vLyBpbiBhIGxvY2FsZS1kZXBlbmRlbnQgd2F5LCB1c2luZyBhIGNvbW1hIGluc3RlYWQgb2YgYSBkb3QuXG4vLyBJZiBjb21tYSBpcyBub3QgcmVwbGFjZWQgd2l0aCBhIGRvdCwgdGhlIGlucHV0IHdpbGwgYmUgcm91bmRlZCBkb3duIChpLmUuIGFjdGluZ1xuLy8gYXMgYSBmbG9vciBmdW5jdGlvbikgY2F1c2luZyB1bmV4cGVjdGVkIGJlaGF2aW9yc1xuZnVuY3Rpb24gdG9NcyhzKSB7XG4gICAgcmV0dXJuIE51bWJlcihzLnNsaWNlKDAsIC0xKS5yZXBsYWNlKCcsJywgJy4nKSkgKiAxMDAwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVHJhbnNpdGlvbkNsYXNzKGVsLCBjbHMpIHtcbiAgICBjb25zdCB0cmFuc2l0aW9uQ2xhc3NlcyA9IGVsLl90cmFuc2l0aW9uQ2xhc3NlcyB8fCAoZWwuX3RyYW5zaXRpb25DbGFzc2VzID0gW10pO1xuICAgIGlmICh0cmFuc2l0aW9uQ2xhc3Nlcy5pbmRleE9mKGNscykgPCAwKSB7XG4gICAgICAgIHRyYW5zaXRpb25DbGFzc2VzLnB1c2goY2xzKTtcbiAgICAgICAgYWRkQ2xhc3MoZWwsIGNscyk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVHJhbnNpdGlvbkNsYXNzKGVsLCBjbHMpIHtcbiAgICBpZiAoZWwuX3RyYW5zaXRpb25DbGFzc2VzKSB7XG4gICAgICAgIHJlbW92ZShlbC5fdHJhbnNpdGlvbkNsYXNzZXMsIGNscyk7XG4gICAgfVxuICAgIHJlbW92ZUNsYXNzKGVsLCBjbHMpO1xufVxuXG5mdW5jdGlvbiBpc1ZhbGlkRHVyYXRpb24odmFsKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdudW1iZXInICYmICFpc05hTih2YWwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2hlblRyYW5zaXRpb25FbmRzKGVsLCBleHBlY3RlZFR5cGUsIGNiKSB7XG4gICAgY29uc3Qge1xuICAgICAgICB0eXBlLFxuICAgICAgICB0aW1lb3V0LFxuICAgICAgICBwcm9wQ291bnRcbiAgICB9ID0gZ2V0VHJhbnNpdGlvbkluZm8oZWwsIGV4cGVjdGVkVHlwZSk7XG4gICAgaWYgKCF0eXBlKSB7XG4gICAgICAgIHJldHVybiBjYigpO1xuICAgIH1cbiAgICBjb25zdCBldmVudCA9IHR5cGUgPT09IFRSQU5TSVRJT04gPyB0cmFuc2l0aW9uRW5kRXZlbnQgOiBhbmltYXRpb25FbmRFdmVudDtcbiAgICBsZXQgZW5kZWQgPSAwO1xuICAgIGNvbnN0IGVuZCA9ICgpID0+IHtcbiAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgb25FbmQpXG4gICAgICAgIGNiKClcbiAgICB9O1xuICAgIGNvbnN0IG9uRW5kID0gZSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldCA9PT0gZWwpIHtcbiAgICAgICAgICAgIGlmICgrK2VuZGVkID49IHByb3BDb3VudCkge1xuICAgICAgICAgICAgICAgIGVuZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKGVuZGVkIDwgcHJvcENvdW50KSB7XG4gICAgICAgICAgICBlbmQoKTtcbiAgICAgICAgfVxuICAgIH0sIHRpbWVvdXQgKyAxKTtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBvbkVuZCk7XG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICAgY29uc3QgZGF0YSA9IHJlc29sdmVUcmFuc2l0aW9uKG9wdGlvbnMpO1xuXG4gICAgY29uc3Qge1xuICAgICAgICBjc3MsXG4gICAgICAgIHR5cGUsXG4gICAgICAgIGVudGVyQ2xhc3MsXG4gICAgICAgIGVudGVyVG9DbGFzcyxcbiAgICAgICAgZW50ZXJBY3RpdmVDbGFzcyxcbiAgICAgICAgYXBwZWFyQ2xhc3MsXG4gICAgICAgIGFwcGVhclRvQ2xhc3MsXG4gICAgICAgIGFwcGVhckFjdGl2ZUNsYXNzLFxuICAgICAgICBiZWZvcmVFbnRlcixcbiAgICAgICAgZW50ZXIsXG4gICAgICAgIGFmdGVyRW50ZXIsXG4gICAgICAgIGVudGVyQ2FuY2VsbGVkLFxuICAgICAgICBiZWZvcmVBcHBlYXIsXG4gICAgICAgIGFwcGVhciA9IGZhbHNlLFxuICAgICAgICBhZnRlckFwcGVhcixcbiAgICAgICAgYXBwZWFyQ2FuY2VsbGVkLFxuICAgICAgICBsZWF2ZUNsYXNzLFxuICAgICAgICBsZWF2ZVRvQ2xhc3MsXG4gICAgICAgIGxlYXZlQWN0aXZlQ2xhc3MsXG4gICAgICAgIGJlZm9yZUxlYXZlLFxuICAgICAgICBsZWF2ZSxcbiAgICAgICAgYWZ0ZXJMZWF2ZSxcbiAgICAgICAgbGVhdmVDYW5jZWxsZWQsXG4gICAgICAgIGRlbGF5TGVhdmUsXG4gICAgICAgIGR1cmF0aW9uXG4gICAgfSA9IHJlc29sdmVUcmFuc2l0aW9uKG9wdGlvbnMpO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXM7XG4gICAgY29uc3QgZXhwZWN0c0NTUyA9IGNzcyAhPT0gZmFsc2U7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBlbnRlcjogZW50ZXJIYW5kbGVyLFxuICAgICAgICBsZWF2ZTogbGVhdmVIYW5kbGVyXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGVudGVySGFuZGxlcihlbCwgZG9uZSkge1xuICAgICAgICBjb25zdCBpc0FwcGVhciA9ICFjb250ZXh0LmxpZmVDeWNsZS5hdHRhY2hlZDtcblxuICAgICAgICAvLyBjYWxsIGxlYXZlIGNhbGxiYWNrIG5vd1xuICAgICAgICBpZiAoZWwuX2xlYXZlQ2IpIHtcbiAgICAgICAgICAgIGVsLl9sZWF2ZUNiLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgICAgIGVsLl9sZWF2ZUNiKClcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICBpZiAoZWwuX2VudGVyQ2IgfHwgZWwubm9kZVR5cGUgIT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0FwcGVhciAmJiAhYXBwZWFyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzdGFydENsYXNzID0gaXNBcHBlYXIgJiYgYXBwZWFyQ2xhc3NcbiAgICAgICAgICAgID8gYXBwZWFyQ2xhc3NcbiAgICAgICAgICAgIDogZW50ZXJDbGFzcztcbiAgICAgICAgY29uc3QgYWN0aXZlQ2xhc3MgPSBpc0FwcGVhciAmJiBhcHBlYXJBY3RpdmVDbGFzc1xuICAgICAgICAgICAgPyBhcHBlYXJBY3RpdmVDbGFzc1xuICAgICAgICAgICAgOiBlbnRlckFjdGl2ZUNsYXNzO1xuICAgICAgICBjb25zdCB0b0NsYXNzID0gaXNBcHBlYXIgJiYgYXBwZWFyVG9DbGFzc1xuICAgICAgICAgICAgPyBhcHBlYXJUb0NsYXNzXG4gICAgICAgICAgICA6IGVudGVyVG9DbGFzcztcblxuICAgICAgICBjb25zdCBiZWZvcmVFbnRlckhvb2sgPSBpc0FwcGVhclxuICAgICAgICAgICAgPyAoYmVmb3JlQXBwZWFyIHx8IGJlZm9yZUVudGVyKVxuICAgICAgICAgICAgOiBiZWZvcmVFbnRlcjtcbiAgICAgICAgY29uc3QgZW50ZXJIb29rID0gaXNBcHBlYXJcbiAgICAgICAgICAgID8gKHR5cGVvZiBhcHBlYXIgPT09ICdmdW5jdGlvbicgPyBhcHBlYXIgOiBlbnRlcilcbiAgICAgICAgICAgIDogZW50ZXI7XG4gICAgICAgIGNvbnN0IGFmdGVyRW50ZXJIb29rID0gaXNBcHBlYXJcbiAgICAgICAgICAgID8gKGFmdGVyQXBwZWFyIHx8IGFmdGVyRW50ZXIpXG4gICAgICAgICAgICA6IGFmdGVyRW50ZXI7XG4gICAgICAgIGNvbnN0IGVudGVyQ2FuY2VsbGVkSG9vayA9IGlzQXBwZWFyXG4gICAgICAgICAgICA/IChhcHBlYXJDYW5jZWxsZWQgfHwgZW50ZXJDYW5jZWxsZWQpXG4gICAgICAgICAgICA6IGVudGVyQ2FuY2VsbGVkO1xuXG4gICAgICAgIGNvbnN0IGV4cGxpY2l0RW50ZXJEdXJhdGlvbiA9ICsoaXNPYmplY3QoZHVyYXRpb24pID8gZHVyYXRpb24uZW50ZXIgOiBkdXJhdGlvbik7XG5cbiAgICAgICAgY29uc3QgY2IgPSBlbC5fZW50ZXJDYiA9IG9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV4cGVjdHNDU1MpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVUcmFuc2l0aW9uQ2xhc3MoZWwsIHRvQ2xhc3MpXG4gICAgICAgICAgICAgICAgcmVtb3ZlVHJhbnNpdGlvbkNsYXNzKGVsLCBhY3RpdmVDbGFzcylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYi5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXhwZWN0c0NTUykge1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVUcmFuc2l0aW9uQ2xhc3MoZWwsIHN0YXJ0Q2xhc3MpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVudGVyQ2FuY2VsbGVkSG9vayAmJiBlbnRlckNhbmNlbGxlZEhvb2soZWwpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhZnRlckVudGVySG9vayAmJiBhZnRlckVudGVySG9vayhlbClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsLl9lbnRlckNiID0gbnVsbFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBzdGFydCBlbnRlciB0cmFuc2l0aW9uXG4gICAgICAgIGJlZm9yZUVudGVySG9vayAmJiBiZWZvcmVFbnRlckhvb2soZWwpO1xuICAgICAgICBpZiAoZXhwZWN0c0NTUykge1xuICAgICAgICAgICAgYWRkVHJhbnNpdGlvbkNsYXNzKGVsLCBzdGFydENsYXNzKTtcbiAgICAgICAgICAgIGFkZFRyYW5zaXRpb25DbGFzcyhlbCwgYWN0aXZlQ2xhc3MpO1xuICAgICAgICAgICAgbmV4dEZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICByZW1vdmVUcmFuc2l0aW9uQ2xhc3MoZWwsIHN0YXJ0Q2xhc3MpXG4gICAgICAgICAgICAgICAgaWYgKCFjYi5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkVHJhbnNpdGlvbkNsYXNzKGVsLCB0b0NsYXNzKVxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNWYWxpZER1cmF0aW9uKGV4cGxpY2l0RW50ZXJEdXJhdGlvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoY2IsIGV4cGxpY2l0RW50ZXJEdXJhdGlvbilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoZW5UcmFuc2l0aW9uRW5kcyhlbCwgdHlwZSwgY2IpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRvbmUoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsZWF2ZUhhbmRsZXIoZWwsIGRvbmUpIHtcblxuICAgICAgICAvLyBjYWxsIGVudGVyIGNhbGxiYWNrIG5vd1xuICAgICAgICBpZiAoZWwuX2VudGVyQ2IpIHtcbiAgICAgICAgICAgIGVsLl9lbnRlckNiLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICBlbC5fZW50ZXJDYigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgIGlmIChlbC5fbGVhdmVDYikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZXhwbGljaXRMZWF2ZUR1cmF0aW9uID0gKyhpc09iamVjdChkdXJhdGlvbikgPyBkdXJhdGlvbi5sZWF2ZSA6IGR1cmF0aW9uKTtcblxuICAgICAgICBjb25zdCBjYiA9IGVsLl9sZWF2ZUNiID0gb25jZSgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXhwZWN0c0NTUykge1xuICAgICAgICAgICAgICAgIHJlbW92ZVRyYW5zaXRpb25DbGFzcyhlbCwgbGVhdmVUb0NsYXNzKTtcbiAgICAgICAgICAgICAgICByZW1vdmVUcmFuc2l0aW9uQ2xhc3MoZWwsIGxlYXZlQWN0aXZlQ2xhc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNiLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgIGlmIChleHBlY3RzQ1NTKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZVRyYW5zaXRpb25DbGFzcyhlbCwgbGVhdmVDbGFzcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlYXZlQ2FuY2VsbGVkICYmIGxlYXZlQ2FuY2VsbGVkKGVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvbmUoKVxuICAgICAgICAgICAgICAgIGFmdGVyTGVhdmUgJiYgYWZ0ZXJMZWF2ZShlbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbC5fbGVhdmVDYiA9IG51bGw7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChkZWxheUxlYXZlKSB7XG4gICAgICAgICAgICBkZWxheUxlYXZlKHBlcmZvcm1MZWF2ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwZXJmb3JtTGVhdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHBlcmZvcm1MZWF2ZSgpIHtcbiAgICAgICAgICAgIC8vIHRoZSBkZWxheWVkIGxlYXZlIG1heSBoYXZlIGFscmVhZHkgYmVlbiBjYW5jZWxsZWRcbiAgICAgICAgICAgIGlmIChjYi5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJlZm9yZUxlYXZlICYmIGJlZm9yZUxlYXZlKGVsKVxuICAgICAgICAgICAgaWYgKGV4cGVjdHNDU1MpIHtcbiAgICAgICAgICAgICAgICBhZGRUcmFuc2l0aW9uQ2xhc3MoZWwsIGxlYXZlQ2xhc3MpXG4gICAgICAgICAgICAgICAgYWRkVHJhbnNpdGlvbkNsYXNzKGVsLCBsZWF2ZUFjdGl2ZUNsYXNzKVxuICAgICAgICAgICAgICAgIG5leHRGcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZVRyYW5zaXRpb25DbGFzcyhlbCwgbGVhdmVDbGFzcylcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjYi5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRyYW5zaXRpb25DbGFzcyhlbCwgbGVhdmVUb0NsYXNzKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzVmFsaWREdXJhdGlvbihleHBsaWNpdExlYXZlRHVyYXRpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChjYiwgZXhwbGljaXRMZWF2ZUR1cmF0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hlblRyYW5zaXRpb25FbmRzKGVsLCB0eXBlLCBjYilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGVhdmUgJiYgbGVhdmUoZWwsIGNiKVxuICAgICAgICAgICAgaWYgKCFleHBlY3RzQ1NTICYmICF1c2VyV2FudHNDb250cm9sKSB7XG4gICAgICAgICAgICAgICAgY2IoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiLyoqXG4gKiBAZmlsZSBjbGFzcyB1dGlsc1xuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmNvbnN0IHdoaXRlc3BhY2VSRSA9IC9cXHMrL1xuXG4vKipcbiAqIEFkZCBjbGFzcyB3aXRoIGNvbXBhdGliaWxpdHkgZm9yIFNWRyBzaW5jZSBjbGFzc0xpc3QgaXMgbm90IHN1cHBvcnRlZCBvblxuICogU1ZHIGVsZW1lbnRzIGluIElFXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRDbGFzcyAoZWwsIGNscykge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICghY2xzIHx8ICEoY2xzID0gY2xzLnRyaW0oKSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKGVsLmNsYXNzTGlzdCkge1xuICAgICAgICBpZiAoY2xzLmluZGV4T2YoJyAnKSA+IC0xKSB7XG4gICAgICAgICAgICBjbHMuc3BsaXQod2hpdGVzcGFjZVJFKS5mb3JFYWNoKGMgPT4gZWwuY2xhc3NMaXN0LmFkZChjKSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xzKVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBjdXIgPSBgICR7ZWwuZ2V0QXR0cmlidXRlKCdjbGFzcycpIHx8ICcnfSBgXG4gICAgICAgIGlmIChjdXIuaW5kZXhPZignICcgKyBjbHMgKyAnICcpIDwgMCkge1xuICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsIChjdXIgKyBjbHMpLnRyaW0oKSlcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBSZW1vdmUgY2xhc3Mgd2l0aCBjb21wYXRpYmlsaXR5IGZvciBTVkcgc2luY2UgY2xhc3NMaXN0IGlzIG5vdCBzdXBwb3J0ZWQgb25cbiAqIFNWRyBlbGVtZW50cyBpbiBJRVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2xhc3MgKGVsLCBjbHMpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoIWNscyB8fCAhKGNscyA9IGNscy50cmltKCkpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmIChlbC5jbGFzc0xpc3QpIHtcbiAgICAgICAgaWYgKGNscy5pbmRleE9mKCcgJykgPiAtMSkge1xuICAgICAgICAgICAgY2xzLnNwbGl0KHdoaXRlc3BhY2VSRSkuZm9yRWFjaChjID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoYykpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShjbHMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZWwuY2xhc3NMaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBsZXQgY3VyID0gYCAke2VsLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSB8fCAnJ30gYDtcbiAgICAgICAgY29uc3QgdGFyID0gJyAnICsgY2xzICsgJyAnO1xuICAgICAgICB3aGlsZSAoY3VyLmluZGV4T2YodGFyKSA+PSAwKSB7XG4gICAgICAgICAgICBjdXIgPSBjdXIucmVwbGFjZSh0YXIsICcgJyk7XG4gICAgICAgIH1cbiAgICAgICAgY3VyID0gY3VyLnRyaW0oKVxuICAgICAgICBpZiAoY3VyKSB7XG4gICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgY3VyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=