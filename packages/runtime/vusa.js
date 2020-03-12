(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("san"));
	else if(typeof define === 'function' && define.amd)
		define(["san"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("san")) : factory(root["san"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "san"
var external_san_ = __webpack_require__(0);

// CONCATENATED MODULE: ./src/shared/util.js
function extend(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }

  return to;
}
function toObject(arr) {
  var res = {};

  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }

  return res;
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
var camelize = function camelize(str) {
  return str.replace(/-(\w)/g, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
};
// CONCATENATED MODULE: ./src/runtime/merge-class.js
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

    if (typeof element === 'string') {
      clazz = _objectSpread({}, clazz, {}, string(element));
    } else if (Array.isArray(element)) {
      clazz = _objectSpread({}, clazz, {}, array(element));
    } else {
      clazz = _objectSpread({}, clazz, {}, object(element));
    }
  }

  return clazz;
}

/* harmony default export */ var merge_class = (function () {
  var staticClass = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var cls = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return Object.keys(array([staticClass, cls])).join(' ');
});
// CONCATENATED MODULE: ./src/runtime/merge-style.js

var parseStyleText = cached(function (cssText) {
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
    return toObject(bindingStyle);
  }

  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle);
  }

  return bindingStyle;
}

/* harmony default export */ var merge_style = (function (staticStyle, style) {
  var vShow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  style = normalizeStyleBinding(style);

  if (!vShow) {
    style.display = 'none';
  }

  return staticStyle ? extend(staticStyle, style) : style;
});
// CONCATENATED MODULE: ./src/runtime/loop-expression.js

var toArray = cached(function (n) {
  var value = new Array(n);

  for (var i = 0; i < n; i++) {
    value[i] = i + 1;
  }

  return value;
});
/* harmony default export */ var loop_expression = (function (value) {
  if (!isNaN(value)) {
    var n = +value;
    value = toArray(n);
  }

  return value;
});
// CONCATENATED MODULE: ./src/runtime/ref.js


/* harmony default export */ var runtime_ref = (function (name) {
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
          value = Object(external_san_["evalExpr"])(ref.value, element.scope, owner);

          if (ref && (value === name || camelize(value) === name)) {
            return nodeType === 4 ? element.el : element.children.map(elementTraversal);
          }

          break;

        case 5:
          ref = element.source.directives.ref;
          value = Object(external_san_["evalExpr"])(ref.value, element.scope, owner);

          if (ref && (value === name || camelize(value) === name)) {
            return element;
          }

      }

      refTarget = element.slotChildren && childrenTraversal(element.slotChildren);
    }

    return refTarget || childrenTraversal(element.children);
  }

  return childrenTraversal(this.children);
});
;
// CONCATENATED MODULE: ./src/runtime/define-component.js






var lifeCycleMap = {
  beforeCreate: 'compiled',
  mounted: 'attached',
  created: 'inited',
  beforeMount: 'created',
  beforeDestroy: 'detached',
  destroy: 'disposed',
  updated: 'updated',
  beforeUpdate: 'updated'
};
var defaultSanOptions = {
  _mc: merge_class,
  _ms: merge_style,
  _l: loop_expression,
  filters: {
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
  }
};
var MATH_METHOD = ['floor', 'ceil', 'round', 'abs', 'max', 'min', 'pow'];
MATH_METHOD.forEach(function (name) {
  defaultSanOptions["math_".concat(name)] = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return Math[name].apply(Math, args);
  };
});

defaultSanOptions.array_slice = function (arr, start, len) {
  var end = len == null ? void 0 : len >= 0 ? start + len : arr.length + len;
  return arr.slice(start, end);
};

defaultSanOptions.array_join = function (arr, sep) {
  return arr.join(sep);
};

defaultSanOptions.str_pos = function (str, match) {
  return str.indexOf(match);
};

defaultSanOptions.object_freeze = function (obj) {
  return Object.freeze(obj);
};

defaultSanOptions.getComponentType = function (aNode, data) {
  if (aNode.hotspot.props.is == null) {
    return this.components[aNode.tagName];
  }

  var is = aNode.props[aNode.hotspot.props.is];
  var isValue = Object(external_san_["evalExpr"])(is.expr, data);
  aNode.tagName = isValue;
  aNode.props.splice(is, 1);
  return this.components[isValue];
};

function define(options) {
  var sanOptions = extend({
    template: options.__santemplate,
    aNode: options.__sanaNode
  }, defaultSanOptions);

  if (options.mixins && options.mixins.length) {
    var methods = {};

    var _loop = function _loop(i) {
      var item = options.mixins[i];

      if (!item) {
        return "continue";
      }

      if (item.methods) {
        methods = Object.assign(methods, item.methods);
      }

      ['created', 'mounted', 'activated', 'deactivated', 'beforeDestroy'].forEach(function (key) {
        if (!options[key] && item[key]) {
          options[key] = item[key];
        }
      });
    };

    for (var i = 0; i < options.mixins.length; i++) {
      var _ret = _loop(i);

      if (_ret === "continue") continue;
    }

    if (Object.keys(methods).length) {
      if (!options.methods) {
        options.methods = {};
      }

      options.methods = Object.assign({}, methods, options.methods);
    }
  }

  if (options.filters) {
    sanOptions.filters = Object.assign(sanOptions.filters, options.filters);
  }

  ['computed', 'watch'].forEach(function (key) {
    if (options[key]) {
      sanOptions[key] = options[key];
    }
  });

  if (options.methods) {
    Object.keys(options.methods).forEach(function (key) {
      sanOptions[key] = options.methods[key];
    });
  }

  Object.keys(lifeCycleMap).forEach(function (hook) {
    if (options[hook]) {
      sanOptions[lifeCycleMap[hook]] = options[hook];
    }
  });
  var refs = options.__sanRefs;
  var createdHook = sanOptions.created;

  sanOptions.created = function () {
    var me = this;
    this.$refs = Object.create(null);

    if (refs) {
      var _loop2 = function _loop2(len, _i) {
        var r = refs[_i];
        Object.defineProperty(me.$refs, r.name, {
          enumerable: true,
          get: function get() {
            return r.root ? me.el : me.ref(r.name);
          }
        });
      };

      for (var _i = 0, len = refs.length; _i < len; _i++) {
        _loop2(len, _i);
      }

      me.ref = runtime_ref;
    }

    createdHook && createdHook.call(this);
  };

  if (options.data || options.props) {
    sanOptions.initData = function () {
      var bindData = this._sbindData || {};
      var propKeys = options.props ? Array.isArray(options.props) ? options.props : Object.keys(options.props) : [];
      var defaultProps = {};

      if (options.props && !Array.isArray(options.props)) {
        propKeys.forEach(function (p) {
          if ('default' in options.props[p]) {
            defaultProps[p] = typeof options.props[p]["default"] === 'function' ? options.props[p]["default"]() : options.props[p]["default"];
          }
        });
      }

      var data = typeof options.data === 'function' ? options.data.call(Object.assign({}, defaultProps, bindData)) : options.data || {};
      return Object.assign({}, defaultProps, data);
    };
  }

  if (options.components) {
    sanOptions.components = Object.keys(options.components).reduce(function (prev, key) {
      prev[key] = prev[hyphenate(key)] = define(options.components[key]);
      return prev;
    }, {});
  }

  var Component = Object(external_san_["defineComponent"])(sanOptions);
  return Component;
}
// CONCATENATED MODULE: ./src/runtime/index.js
/* concated harmony reexport defineComponent */__webpack_require__.d(__webpack_exports__, "defineComponent", function() { return define; });


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzYW5cIiIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvbWVyZ2UtY2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvbWVyZ2Utc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvbG9vcC1leHByZXNzaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lL3JlZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcnVudGltZS9kZWZpbmUtY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lL2luZGV4LmpzIl0sIm5hbWVzIjpbImV4dGVuZCIsInRvIiwiZnJvbSIsImtleSIsInRvT2JqZWN0IiwiYXJyIiwicmVzIiwiaSIsImxlbmd0aCIsImNhY2hlZCIsImZuIiwiY2FjaGUiLCJPYmplY3QiLCJjcmVhdGUiLCJjYWNoZWRGbiIsInN0ciIsImhpdCIsImh5cGhlbmF0ZVJFIiwiaHlwaGVuYXRlIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwiY2FtZWxpemUiLCJfIiwiYyIsInRvVXBwZXJDYXNlIiwic3RyaW5nIiwiY2xzIiwic3BsaXQiLCJyZWR1Y2UiLCJwcmV2IiwibmFtZSIsIm9iamVjdCIsImtleXMiLCJhcnJheSIsImNsYXp6IiwibGVuIiwiZWxlbWVudCIsIkFycmF5IiwiaXNBcnJheSIsInN0YXRpY0NsYXNzIiwiam9pbiIsInBhcnNlU3R5bGVUZXh0IiwiY3NzVGV4dCIsImxpc3REZWxpbWl0ZXIiLCJwcm9wZXJ0eURlbGltaXRlciIsImZvckVhY2giLCJpdGVtIiwidG1wIiwidHJpbSIsIm5vcm1hbGl6ZVN0eWxlQmluZGluZyIsImJpbmRpbmdTdHlsZSIsInN0YXRpY1N0eWxlIiwic3R5bGUiLCJ2U2hvdyIsImRpc3BsYXkiLCJ0b0FycmF5IiwibiIsInZhbHVlIiwiaXNOYU4iLCJvd25lciIsImNoaWxkcmVuVHJhdmVyc2FsIiwiY2hpbGRyZW4iLCJyZWZUYXJnZXQiLCJlbGVtZW50VHJhdmVyc2FsIiwibm9kZVR5cGUiLCJyZWYiLCJhTm9kZSIsImRpcmVjdGl2ZXMiLCJldmFsRXhwciIsInNjb3BlIiwiZWwiLCJtYXAiLCJzb3VyY2UiLCJzbG90Q2hpbGRyZW4iLCJsaWZlQ3ljbGVNYXAiLCJiZWZvcmVDcmVhdGUiLCJtb3VudGVkIiwiY3JlYXRlZCIsImJlZm9yZU1vdW50IiwiYmVmb3JlRGVzdHJveSIsImRlc3Ryb3kiLCJ1cGRhdGVkIiwiYmVmb3JlVXBkYXRlIiwiZGVmYXVsdFNhbk9wdGlvbnMiLCJfbWMiLCJtZXJnZUNsYXNzIiwiX21zIiwibWVyZ2VTdHlsZSIsIl9sIiwibG9vcEV4cHJlc3Npb24iLCJmaWx0ZXJzIiwianNvbiIsIm9iaiIsIkpTT04iLCJzdHJpbmdpZnkiLCJsb3dlciIsInVwcGVyIiwiTUFUSF9NRVRIT0QiLCJhcmdzIiwiTWF0aCIsImFwcGx5IiwiYXJyYXlfc2xpY2UiLCJzdGFydCIsImVuZCIsInNsaWNlIiwiYXJyYXlfam9pbiIsInNlcCIsInN0cl9wb3MiLCJtYXRjaCIsImluZGV4T2YiLCJvYmplY3RfZnJlZXplIiwiZnJlZXplIiwiZ2V0Q29tcG9uZW50VHlwZSIsImRhdGEiLCJob3RzcG90IiwicHJvcHMiLCJpcyIsImNvbXBvbmVudHMiLCJ0YWdOYW1lIiwiaXNWYWx1ZSIsImV4cHIiLCJzcGxpY2UiLCJkZWZpbmUiLCJvcHRpb25zIiwic2FuT3B0aW9ucyIsInRlbXBsYXRlIiwiX19zYW50ZW1wbGF0ZSIsIl9fc2FuYU5vZGUiLCJtaXhpbnMiLCJtZXRob2RzIiwiYXNzaWduIiwiaG9vayIsInJlZnMiLCJfX3NhblJlZnMiLCJjcmVhdGVkSG9vayIsIm1lIiwiJHJlZnMiLCJyIiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0Iiwicm9vdCIsImNhbGwiLCJpbml0RGF0YSIsImJpbmREYXRhIiwiX3NiaW5kRGF0YSIsInByb3BLZXlzIiwiZGVmYXVsdFByb3BzIiwicCIsIkNvbXBvbmVudCIsImRlZmluZUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7QUNsRkEsZ0Q7Ozs7Ozs7Ozs7Ozs7QUNRTyxTQUFTQSxNQUFULENBQWdCQyxFQUFoQixFQUFvQkMsSUFBcEIsRUFBMEI7QUFDN0IsT0FBSyxJQUFNQyxHQUFYLElBQWtCRCxJQUFsQixFQUF3QjtBQUNwQkQsTUFBRSxDQUFDRSxHQUFELENBQUYsR0FBVUQsSUFBSSxDQUFDQyxHQUFELENBQWQ7QUFDSDs7QUFDRCxTQUFPRixFQUFQO0FBQ0g7QUFLTSxTQUFTRyxRQUFULENBQWtCQyxH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Z0NILFFBQWhDLENBQWxCLENBRE8sR0FFTnJCLE9BQU8sQ0FBQ1YsSUFBUixJQUFnQixFQUZ2QjtBQUlBLGFBQU9yRyxNQUFNLENBQUNzSCxNQUFQLENBQWMsRUFBZCxFQUFrQmlCLFlBQWxCLEVBQWdDbEMsSUFBaEMsQ0FBUDtBQUNILEtBeEJEO0FBeUJIOztBQUVELE1BQUlVLE9BQU8sQ0FBQ04sVUFBWixFQUF3QjtBQUNwQk8sY0FBVSxDQUFDUCxVQUFYLEdBQXdCekcsTUFBTSxDQUN6Qm9CLElBRG1CLENBQ2QyRixPQUFPLENBQUNOLFVBRE0sRUFFbkJ6RixNQUZtQixDQUVaLFVBQUNDLElBQUQsRUFBTzFCLEdBQVAsRUFBZTtBQUNuQjBCLFVBQUksQ0FBQzFCLEdBQUQsQ0FBSixHQUFZMEIsSUFBSSxDQUFDWCxTQUFTLENBQUNmLEdBQUQsQ0FBVixDQUFKLEdBQXVCdUgsTUFBTSxDQUFDQyxPQUFPLENBQUNOLFVBQVIsQ0FBbUJsSCxHQUFuQixDQUFELENBQXpDO0FBQ0EsYUFBTzBCLElBQVA7QUFDSCxLQUxtQixFQUtqQixFQUxpQixDQUF4QjtBQU1IOztBQUVELE1BQU13SCxTQUFTLEdBQUdDLHdDQUFlLENBQUMxQixVQUFELENBQWpDO0FBRUEsU0FBT3lCLFNBQVA7QUFDSCxDOztBQzNNRCIsImZpbGUiOiJ2dXNhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwic2FuXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInNhblwiXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZmFjdG9yeShyZXF1aXJlKFwic2FuXCIpKSA6IGZhY3Rvcnkocm9vdFtcInNhblwiXSk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh3aW5kb3csIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzBfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fMF9fOyIsIi8qKlxuICogQGZpbGUg5LiA5Lqb5bel5YW35Ye95pWwXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuLyoqXG4gKiBNaXggcHJvcGVydGllcyBpbnRvIHRhcmdldCBvYmplY3QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleHRlbmQodG8sIGZyb20pIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBmcm9tKSB7XG4gICAgICAgIHRvW2tleV0gPSBmcm9tW2tleV07XG4gICAgfVxuICAgIHJldHVybiB0bztcbn1cblxuLyoqXG4gKiBNZXJnZSBhbiBBcnJheSBvZiBPYmplY3RzIGludG8gYSBzaW5nbGUgT2JqZWN0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9PYmplY3QoYXJyKSB7XG4gICAgY29uc3QgcmVzID0ge307XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGFycltpXSkge1xuICAgICAgICAgICAgZXh0ZW5kKHJlcywgYXJyW2ldKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufVxuXG5cbi8qKlxuICogQ3JlYXRlIGEgY2FjaGVkIHZlcnNpb24gb2YgYSBwdXJlIGZ1bmN0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2FjaGVkKGZuKSB7XG4gICAgY29uc3QgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHJldHVybiBmdW5jdGlvbiBjYWNoZWRGbihzdHIpIHtcbiAgICAgICAgY29uc3QgaGl0ID0gY2FjaGVbc3RyXTtcbiAgICAgICAgcmV0dXJuIGhpdCB8fCAoY2FjaGVbc3RyXSA9IGZuKHN0cikpO1xuICAgIH07XG59XG5cbi8qKlxuICogSHlwaGVuYXRlIGEgY2FtZWxDYXNlIHN0cmluZy5cbiAqL1xuY29uc3QgaHlwaGVuYXRlUkUgPSAvKFteLV0pKFtBLVpdKS9nO1xuZXhwb3J0IGNvbnN0IGh5cGhlbmF0ZSA9IGNhY2hlZCgoc3RyKSA9PiB7XG4gICAgcmV0dXJuIHN0clxuICAgICAgICAucmVwbGFjZShoeXBoZW5hdGVSRSwgJyQxLSQyJylcbiAgICAgICAgLnJlcGxhY2UoaHlwaGVuYXRlUkUsICckMS0kMicpXG4gICAgICAgIC50b0xvd2VyQ2FzZSgpO1xufSk7XG5cbmV4cG9ydCBjb25zdCBjYW1lbGl6ZSA9IHN0ciA9PiBzdHIucmVwbGFjZSgvLShcXHcpL2csIChfLCBjKSA9PiAoYyA/IGMudG9VcHBlckNhc2UoKSA6ICcnKSk7XG4iLCIvKipcbiAqIEBmaWxlIG1lcmdlIGNsYXNzXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuZnVuY3Rpb24gc3RyaW5nKGNscyA9ICcnKSB7XG4gICAgaWYgKCFjbHMpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICByZXR1cm4gY2xzXG4gICAgICAgIC5zcGxpdCgnICcpXG4gICAgICAgIC5yZWR1Y2UoKHByZXYsIG5hbWUpID0+IHtcbiAgICAgICAgICAgIGlmICghbmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgICAgIFtuYW1lXTogMVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSwge30pO1xufVxuXG5mdW5jdGlvbiBvYmplY3QoY2xzID0ge30pIHtcbiAgICByZXR1cm4gT2JqZWN0XG4gICAgICAgIC5rZXlzKGNscylcbiAgICAgICAgLnJlZHVjZSgocHJldiwga2V5KSA9PiB7XG4gICAgICAgICAgICBpZiAoIWNsc1trZXldKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgICAgLi4uc3RyaW5nKGtleSlcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sIHt9KTtcbn1cblxuZnVuY3Rpb24gYXJyYXkoY2xzID0gW10pIHtcbiAgICBsZXQgY2xhenogPSB7fTtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gY2xzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBjbHNbaV07XG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgY2xhenogPSB7XG4gICAgICAgICAgICAgICAgLi4uY2xhenosXG4gICAgICAgICAgICAgICAgLi4uc3RyaW5nKGVsZW1lbnQpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZWxlbWVudCkpIHtcbiAgICAgICAgICAgIGNsYXp6ID0ge1xuICAgICAgICAgICAgICAgIC4uLmNsYXp6LFxuICAgICAgICAgICAgICAgIC4uLmFycmF5KGVsZW1lbnQpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2xhenogPSB7XG4gICAgICAgICAgICAgICAgLi4uY2xhenosXG4gICAgICAgICAgICAgICAgLi4ub2JqZWN0KGVsZW1lbnQpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjbGF6ejtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRpY0NsYXNzID0gJycsIGNscyA9IHt9KSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGFycmF5KFtzdGF0aWNDbGFzcywgY2xzXSkpLmpvaW4oJyAnKTtcbn1cbiIsIi8qKlxuICogQGZpbGUgbWVyZ2Ugc3R5bGVcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQge2NhY2hlZCwgZXh0ZW5kLCB0b09iamVjdH0gZnJvbSAnLi4vc2hhcmVkL3V0aWwnO1xuXG5jb25zdCBwYXJzZVN0eWxlVGV4dCA9IGNhY2hlZChmdW5jdGlvbiAoY3NzVGV4dCkge1xuICAgIGNvbnN0IHJlcyA9IHt9O1xuICAgIGNvbnN0IGxpc3REZWxpbWl0ZXIgPSAvOyg/IVteKF0qXFwpKS9nO1xuICAgIGNvbnN0IHByb3BlcnR5RGVsaW1pdGVyID0gLzooLispLztcbiAgICBjc3NUZXh0LnNwbGl0KGxpc3REZWxpbWl0ZXIpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgIHZhciB0bXAgPSBpdGVtLnNwbGl0KHByb3BlcnR5RGVsaW1pdGVyKTtcbiAgICAgICAgICAgIHRtcC5sZW5ndGggPiAxICYmIChyZXNbdG1wWzBdLnRyaW0oKV0gPSB0bXBbMV0udHJpbSgpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXM7XG59KTtcblxuLy8gbm9ybWFsaXplIHBvc3NpYmxlIGFycmF5IC8gc3RyaW5nIHZhbHVlcyBpbnRvIE9iamVjdFxuZnVuY3Rpb24gbm9ybWFsaXplU3R5bGVCaW5kaW5nKGJpbmRpbmdTdHlsZSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGJpbmRpbmdTdHlsZSkpIHtcbiAgICAgICAgcmV0dXJuIHRvT2JqZWN0KGJpbmRpbmdTdHlsZSk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgYmluZGluZ1N0eWxlID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gcGFyc2VTdHlsZVRleHQoYmluZGluZ1N0eWxlKTtcbiAgICB9XG4gICAgcmV0dXJuIGJpbmRpbmdTdHlsZTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGljU3R5bGUsIHN0eWxlLCB2U2hvdyA9IHRydWUpIHtcbiAgICBzdHlsZSA9IG5vcm1hbGl6ZVN0eWxlQmluZGluZyhzdHlsZSk7XG4gICAgaWYgKCF2U2hvdykge1xuICAgICAgICBzdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgICByZXR1cm4gc3RhdGljU3R5bGVcbiAgICAgICAgPyBleHRlbmQoc3RhdGljU3R5bGUsIHN0eWxlKVxuICAgICAgICA6IHN0eWxlO1xufVxuIiwiLyoqXG4gKiBAZmlsZSBsb29wIGV4cHJlc3Npb25cbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQge2NhY2hlZH0gZnJvbSAnLi4vc2hhcmVkL3V0aWwnO1xuXG5jb25zdCB0b0FycmF5ID0gY2FjaGVkKGZ1bmN0aW9uIChuKSB7XG4gICAgY29uc3QgdmFsdWUgPSBuZXcgQXJyYXkobik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgdmFsdWVbaV0gPSBpICsgMTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICghaXNOYU4odmFsdWUpKSB7XG4gICAgICAgIGNvbnN0IG4gPSArdmFsdWU7XG4gICAgICAgIHZhbHVlID0gdG9BcnJheShuKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuXG4iLCIvKipcbiAqIEBmaWxlIHNhbiByZWYgcmV3cml0ZVxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCB7ZXZhbEV4cHJ9IGZyb20gJ3Nhbic7XG5pbXBvcnQge2NhbWVsaXplfSBmcm9tICcuLi9zaGFyZWQvdXRpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChuYW1lKSB7XG5cbiAgICBjb25zdCBvd25lciA9IHRoaXM7XG5cbiAgICBmdW5jdGlvbiBjaGlsZHJlblRyYXZlcnNhbChjaGlsZHJlbikge1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGxldCByZWZUYXJnZXQgPSBlbGVtZW50VHJhdmVyc2FsKGNoaWxkcmVuW2ldKTtcbiAgICAgICAgICAgIGlmIChyZWZUYXJnZXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVmVGFyZ2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZWxlbWVudFRyYXZlcnNhbChlbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IG5vZGVUeXBlID0gZWxlbWVudC5ub2RlVHlwZTtcbiAgICAgICAgaWYgKG5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlZlRhcmdldDtcbiAgICAgICAgaWYgKGVsZW1lbnQub3duZXIgPT09IG93bmVyKSB7XG4gICAgICAgICAgICBsZXQgcmVmO1xuICAgICAgICAgICAgbGV0IHZhbHVlO1xuICAgICAgICAgICAgc3dpdGNoIChub2RlVHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIHJlZiA9IGVsZW1lbnQuYU5vZGUuZGlyZWN0aXZlcy5yZWY7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gZXZhbEV4cHIocmVmLnZhbHVlLCBlbGVtZW50LnNjb3BlLCBvd25lcik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWYgJiYgKHZhbHVlID09PSBuYW1lIHx8IGNhbWVsaXplKHZhbHVlKSA9PT0gbmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBub2RlVHlwZSA9PT0gNCA/IGVsZW1lbnQuZWwgOiBlbGVtZW50LmNoaWxkcmVuLm1hcChlbGVtZW50VHJhdmVyc2FsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgcmVmID0gZWxlbWVudC5zb3VyY2UuZGlyZWN0aXZlcy5yZWY7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gZXZhbEV4cHIocmVmLnZhbHVlLCBlbGVtZW50LnNjb3BlLCBvd25lcik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWYgJiYgKHZhbHVlID09PSBuYW1lIHx8IGNhbWVsaXplKHZhbHVlKSA9PT0gbmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlZlRhcmdldCA9IGVsZW1lbnQuc2xvdENoaWxkcmVuICYmIGNoaWxkcmVuVHJhdmVyc2FsKGVsZW1lbnQuc2xvdENoaWxkcmVuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZWZUYXJnZXQgfHwgY2hpbGRyZW5UcmF2ZXJzYWwoZWxlbWVudC5jaGlsZHJlbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkcmVuVHJhdmVyc2FsKHRoaXMuY2hpbGRyZW4pO1xufTtcbiIsIi8qKlxuICogQGZpbGUgY29tcG9uZW50XG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHtkZWZpbmVDb21wb25lbnQsIGluaGVyaXRzLCBldmFsRXhwcn0gZnJvbSAnc2FuJztcbmltcG9ydCB7ZXh0ZW5kLCBoeXBoZW5hdGV9IGZyb20gJy4uL3NoYXJlZC91dGlsJztcbmltcG9ydCBtZXJnZUNsYXNzIGZyb20gJy4vbWVyZ2UtY2xhc3MnO1xuaW1wb3J0IG1lcmdlU3R5bGUgZnJvbSAnLi9tZXJnZS1zdHlsZSc7XG5pbXBvcnQgbG9vcEV4cHJlc3Npb24gZnJvbSAnLi9sb29wLWV4cHJlc3Npb24nO1xuaW1wb3J0IHJlZiBmcm9tICcuL3JlZic7XG5cbmNvbnN0IGxpZmVDeWNsZU1hcCA9IHtcbiAgICBiZWZvcmVDcmVhdGU6ICdjb21waWxlZCcsXG4gICAgbW91bnRlZDogJ2F0dGFjaGVkJyxcbiAgICBjcmVhdGVkOiAnaW5pdGVkJyxcbiAgICBiZWZvcmVNb3VudDogJ2NyZWF0ZWQnLFxuICAgIGJlZm9yZURlc3Ryb3k6ICdkZXRhY2hlZCcsXG4gICAgZGVzdHJveTogJ2Rpc3Bvc2VkJyxcbiAgICB1cGRhdGVkOiAndXBkYXRlZCcsXG4gICAgYmVmb3JlVXBkYXRlOiAndXBkYXRlZCdcbn07XG5cbi8qIGVzbGludC1kaXNhYmxlIGZlY3MtY2FtZWxjYXNlICovXG5jb25zdCBkZWZhdWx0U2FuT3B0aW9ucyA9IHtcbiAgICBfbWM6IG1lcmdlQ2xhc3MsXG4gICAgX21zOiBtZXJnZVN0eWxlLFxuICAgIF9sOiBsb29wRXhwcmVzc2lvbixcbiAgICBmaWx0ZXJzOiB7XG4gICAgICAgIGpzb24ob2JqKSB7XG4gICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoanNvbik7XG4gICAgICAgIH0sXG4gICAgICAgIGxvd2VyKHN0cikge1xuICAgICAgICAgICAgcmV0dXJuIHN0ci50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9LFxuICAgICAgICB1cHBlcihzdHIpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHIudG9VcHBlckNhc2UoKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmNvbnN0IE1BVEhfTUVUSE9EID0gW1xuICAgICdmbG9vcicsICdjZWlsJywgJ3JvdW5kJyxcbiAgICAnYWJzJywgJ21heCcsICdtaW4nLCAncG93J1xuXTtcblxuTUFUSF9NRVRIT0QuZm9yRWFjaChuYW1lID0+IHtcbiAgICBkZWZhdWx0U2FuT3B0aW9uc1tgbWF0aF8ke25hbWV9YF0gPSBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICByZXR1cm4gTWF0aFtuYW1lXS5hcHBseShNYXRoLCBhcmdzKTtcbiAgICB9O1xufSk7XG5cbmRlZmF1bHRTYW5PcHRpb25zLmFycmF5X3NsaWNlID0gZnVuY3Rpb24gKGFyciwgc3RhcnQsIGxlbikge1xuICAgIHZhciBlbmQgPSBsZW4gPT0gbnVsbCA/IHZvaWQgMCA6IChsZW4gPj0gMCA/IChzdGFydCArIGxlbikgOiAoYXJyLmxlbmd0aCArIGxlbikpO1xuICAgIHJldHVybiBhcnIuc2xpY2Uoc3RhcnQsIGVuZCk7XG59O1xuXG5kZWZhdWx0U2FuT3B0aW9ucy5hcnJheV9qb2luID0gZnVuY3Rpb24gKGFyciwgc2VwKSB7XG4gICAgcmV0dXJuIGFyci5qb2luKHNlcCk7XG59O1xuXG5kZWZhdWx0U2FuT3B0aW9ucy5zdHJfcG9zID0gZnVuY3Rpb24gKHN0ciwgbWF0Y2gpIHtcbiAgICByZXR1cm4gc3RyLmluZGV4T2YobWF0Y2gpO1xufTtcblxuZGVmYXVsdFNhbk9wdGlvbnMub2JqZWN0X2ZyZWV6ZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gT2JqZWN0LmZyZWV6ZShvYmopO1xufTtcblxuZGVmYXVsdFNhbk9wdGlvbnMuZ2V0Q29tcG9uZW50VHlwZSA9IGZ1bmN0aW9uIChhTm9kZSwgZGF0YSkge1xuICAgIGlmIChhTm9kZS5ob3RzcG90LnByb3BzLmlzID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50c1thTm9kZS50YWdOYW1lXTtcbiAgICB9XG5cbiAgICBjb25zdCBpcyA9IGFOb2RlLnByb3BzW2FOb2RlLmhvdHNwb3QucHJvcHMuaXNdO1xuICAgIGNvbnN0IGlzVmFsdWUgPSBldmFsRXhwcihpcy5leHByLCBkYXRhKTtcbiAgICBhTm9kZS50YWdOYW1lID0gaXNWYWx1ZTtcbiAgICBhTm9kZS5wcm9wcy5zcGxpY2UoaXMsIDEpO1xuICAgIHJldHVybiB0aGlzLmNvbXBvbmVudHNbaXNWYWx1ZV07XG59O1xuXG4vKiBlc2xpbnQtZW5hYmxlIGZlY3MtY2FtZWxjYXNlICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlZmluZShvcHRpb25zKSB7XG5cbiAgICBjb25zdCBzYW5PcHRpb25zID0gZXh0ZW5kKHtcbiAgICAgICAgdGVtcGxhdGU6IG9wdGlvbnMuX19zYW50ZW1wbGF0ZSxcbiAgICAgICAgYU5vZGU6IG9wdGlvbnMuX19zYW5hTm9kZVxuICAgIH0sIGRlZmF1bHRTYW5PcHRpb25zKTtcblxuICAgIC8vIOWkhOeQhiBtaXhpblxuICAgIGlmIChvcHRpb25zLm1peGlucyAmJiBvcHRpb25zLm1peGlucy5sZW5ndGgpIHtcblxuICAgICAgICBsZXQgbWV0aG9kcyA9IHt9O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbnMubWl4aW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gb3B0aW9ucy5taXhpbnNbaV07XG4gICAgICAgICAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g5omA5pyJIG1peGlucyDnmoQgbWV0aG9kcyDmlLbpm4bliLDkuIDotbfvvIzkvJjlhYjmlbDnu4TlkI7pnaLnmoQgbWV0aG9kc1xuICAgICAgICAgICAgaWYgKGl0ZW0ubWV0aG9kcykge1xuICAgICAgICAgICAgICAgIG1ldGhvZHMgPSBPYmplY3QuYXNzaWduKG1ldGhvZHMsIGl0ZW0ubWV0aG9kcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDlpITnkIblhbbku5bnlJ/lkb3lkajmnJ9cbiAgICAgICAgICAgIFsnY3JlYXRlZCcsICdtb3VudGVkJywgJ2FjdGl2YXRlZCcsICdkZWFjdGl2YXRlZCcsICdiZWZvcmVEZXN0cm95J10uZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghb3B0aW9uc1trZXldICYmIGl0ZW1ba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zW2tleV0gPSBpdGVtW2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoT2JqZWN0LmtleXMobWV0aG9kcykubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMubWV0aG9kcykge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMubWV0aG9kcyA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3B0aW9ucy5tZXRob2RzID0gT2JqZWN0LmFzc2lnbih7fSwgbWV0aG9kcywgb3B0aW9ucy5tZXRob2RzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmZpbHRlcnMpIHtcbiAgICAgICAgc2FuT3B0aW9ucy5maWx0ZXJzID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHNhbk9wdGlvbnMuZmlsdGVycyxcbiAgICAgICAgICAgIG9wdGlvbnMuZmlsdGVyc1xuICAgICAgICApO1xuICAgIH1cblxuICAgIFsnY29tcHV0ZWQnLCAnd2F0Y2gnXS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGlmIChvcHRpb25zW2tleV0pIHtcbiAgICAgICAgICAgIHNhbk9wdGlvbnNba2V5XSA9IG9wdGlvbnNba2V5XTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKG9wdGlvbnMubWV0aG9kcykge1xuICAgICAgICBPYmplY3Qua2V5cyhvcHRpb25zLm1ldGhvZHMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIHNhbk9wdGlvbnNba2V5XSA9IG9wdGlvbnMubWV0aG9kc1trZXldO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyhsaWZlQ3ljbGVNYXApLmZvckVhY2goaG9vayA9PiB7XG4gICAgICAgIGlmIChvcHRpb25zW2hvb2tdKSB7XG4gICAgICAgICAgICBzYW5PcHRpb25zW2xpZmVDeWNsZU1hcFtob29rXV0gPSBvcHRpb25zW2hvb2tdO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCByZWZzID0gb3B0aW9ucy5fX3NhblJlZnM7XG4gICAgY29uc3QgY3JlYXRlZEhvb2sgPSBzYW5PcHRpb25zLmNyZWF0ZWQ7XG4gICAgc2FuT3B0aW9ucy5jcmVhdGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBtZSA9IHRoaXM7XG4gICAgICAgIHRoaXMuJHJlZnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG4gICAgICAgIGlmIChyZWZzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gcmVmcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHIgPSByZWZzW2ldO1xuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtZS4kcmVmcywgci5uYW1lLCB7XG4gICAgICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByLnJvb3QgPyBtZS5lbCA6IG1lLnJlZihyLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBvdmVyd3JpdGUgc2FuIGNvbXBvbmVudCBhcGkgZm9yIHN1cHBvcnQgdi1mb3IgKyByZWZcbiAgICAgICAgICAgIG1lLnJlZiA9IHJlZjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNyZWF0ZWRIb29rICYmIGNyZWF0ZWRIb29rLmNhbGwodGhpcyk7XG4gICAgfTtcblxuICAgIGlmIChvcHRpb25zLmRhdGEgfHwgb3B0aW9ucy5wcm9wcykge1xuICAgICAgICBzYW5PcHRpb25zLmluaXREYXRhID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICBjb25zdCBiaW5kRGF0YSA9IHRoaXMuX3NiaW5kRGF0YSB8fCB7fTtcbiAgICAgICAgICAgIGNvbnN0IHByb3BLZXlzID0gb3B0aW9ucy5wcm9wc1xuICAgICAgICAgICAgICAgID8gKEFycmF5LmlzQXJyYXkob3B0aW9ucy5wcm9wcykgPyBvcHRpb25zLnByb3BzIDogT2JqZWN0LmtleXMob3B0aW9ucy5wcm9wcykpXG4gICAgICAgICAgICAgICAgOiBbXTtcblxuICAgICAgICAgICAgLy8g6buY6K6k5bGe5oCnXG4gICAgICAgICAgICBjb25zdCBkZWZhdWx0UHJvcHMgPSB7fTtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnByb3BzICYmICFBcnJheS5pc0FycmF5KG9wdGlvbnMucHJvcHMpKSB7XG4gICAgICAgICAgICAgICAgcHJvcEtleXMuZm9yRWFjaChwID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCdkZWZhdWx0JyBpbiBvcHRpb25zLnByb3BzW3BdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0UHJvcHNbcF0gPSB0eXBlb2Ygb3B0aW9ucy5wcm9wc1twXS5kZWZhdWx0ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBvcHRpb25zLnByb3BzW3BdLmRlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogb3B0aW9ucy5wcm9wc1twXS5kZWZhdWx0XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gdHlwZW9mIG9wdGlvbnMuZGF0YSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgID8gb3B0aW9ucy5kYXRhLmNhbGwoT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdFByb3BzLCBiaW5kRGF0YSkpXG4gICAgICAgICAgICAgICAgOiAob3B0aW9ucy5kYXRhIHx8IHt9KTtcblxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRQcm9wcywgZGF0YSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuY29tcG9uZW50cykge1xuICAgICAgICBzYW5PcHRpb25zLmNvbXBvbmVudHMgPSBPYmplY3RcbiAgICAgICAgICAgIC5rZXlzKG9wdGlvbnMuY29tcG9uZW50cylcbiAgICAgICAgICAgIC5yZWR1Y2UoKHByZXYsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIHByZXZba2V5XSA9IHByZXZbaHlwaGVuYXRlKGtleSldID0gZGVmaW5lKG9wdGlvbnMuY29tcG9uZW50c1trZXldKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgICAgICAgIH0sIHt9KTtcbiAgICB9XG5cbiAgICBjb25zdCBDb21wb25lbnQgPSBkZWZpbmVDb21wb25lbnQoc2FuT3B0aW9ucyk7XG5cbiAgICByZXR1cm4gQ29tcG9uZW50O1xufVxuXG4iLCIvKipcbiAqIEBmaWxlIGVudHJ5XG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuZXhwb3J0IHtkZWZhdWx0IGFzIGRlZmluZUNvbXBvbmVudH0gZnJvbSAnLi9kZWZpbmUtY29tcG9uZW50JztcbiJdLCJzb3VyY2VSb290IjoiIn0=