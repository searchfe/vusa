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
  var initedHook = sanOptions.inited;

  sanOptions.inited = function () {
    initedHook && initedHook.call(this);
    this.$ref = {};
    var me = this;

    if (refs) {
      var _loop = function _loop(i, len) {
        var r = refs[i];
        Object.defineProperties(me.$ref, r.name, {
          enumerable: true,
          get: function get() {
            return r.root ? me.el : me.ref(r.name);
          }
        });
      };

      for (var i = 0, len = refs.length; i < len; i++) {
        _loop(i, len);
      }
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzYW5cIiIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvbWVyZ2UtY2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvbWVyZ2Utc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvbG9vcC1leHByZXNzaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lL2RlZmluZS1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvaW5kZXguanMiXSwibmFtZXMiOlsiZXh0ZW5kIiwidG8iLCJmcm9tIiwia2V5IiwidG9PYmplY3QiLCJhcnIiLCJyZXMiLCJpIiwibGVuZ3RoIiwiY2FjaGVkIiwiZm4iLCJjYWNoZSIsIk9iamVjdCIsImNyZWF0ZSIsImNhY2hlZEZuIiwic3RyIiwiaGl0IiwiaHlwaGVuYXRlUkUiLCJoeXBoZW5hdGUiLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJjYW1lbGl6ZSIsIl8iLCJjIiwidG9VcHBlckNhc2UiLCJzdHJpbmciLCJjbHMiLCJzcGxpdCIsInJlZHVjZSIsInByZXYiLCJuYW1lIiwib2JqZWN0Iiwia2V5cyIsImFycmF5IiwiY2xhenoiLCJsZW4iLCJlbGVtZW50IiwiQXJyYXkiLCJpc0FycmF5Iiwic3RhdGljQ2xhc3MiLCJqb2luIiwicGFyc2VTdHlsZVRleHQiLCJjc3NUZXh0IiwibGlzdERlbGltaXRlciIsInByb3BlcnR5RGVsaW1pdGVyIiwiZm9yRWFjaCIsIml0ZW0iLCJ0bXAiLCJ0cmltIiwibm9ybWFsaXplU3R5bGVCaW5kaW5nIiwiYmluZGluZ1N0eWxlIiwic3RhdGljU3R5bGUiLCJzdHlsZSIsInZTaG93IiwiZGlzcGxheSIsInRvQXJyYXkiLCJuIiwidmFsdWUiLCJpc05hTiIsImxpZmVDeWNsZU1hcCIsImJlZm9yZUNyZWF0ZSIsIm1vdW50ZWQiLCJjcmVhdGVkIiwiYmVmb3JlTW91bnQiLCJiZWZvcmVEZXN0cm95IiwiZGVzdHJveSIsInVwZGF0ZWQiLCJiZWZvcmVVcGRhdGUiLCJkZWZhdWx0U2FuT3B0aW9ucyIsIl9tYyIsIm1lcmdlQ2xhc3MiLCJfbXMiLCJtZXJnZVN0eWxlIiwiX2wiLCJsb29wRXhwcmVzc2lvbiIsImZpbHRlcnMiLCJqc29uIiwib2JqIiwiSlNPTiIsInN0cmluZ2lmeSIsImxvd2VyIiwidXBwZXIiLCJNQVRIX01FVEhPRCIsImFyZ3MiLCJNYXRoIiwiYXBwbHkiLCJhcnJheV9zbGljZSIsInN0YXJ0IiwiZW5kIiwic2xpY2UiLCJhcnJheV9qb2luIiwic2VwIiwic3RyX3BvcyIsIm1hdGNoIiwiaW5kZXhPZiIsIm9iamVjdF9mcmVlemUiLCJmcmVlemUiLCJnZXRDb21wb25lbnRUeXBlIiwiYU5vZGUiLCJkYXRhIiwiaG90c3BvdCIsInByb3BzIiwiaXMiLCJjb21wb25lbnRzIiwidGFnTmFtZSIsImlzVmFsdWUiLCJldmFsRXhwciIsImV4cHIiLCJzcGxpY2UiLCJkZWZpbmUiLCJvcHRpb25zIiwic2FuT3B0aW9ucyIsInRlbXBsYXRlIiwiX19zYW50ZW1wbGF0ZSIsIl9fc2FuYU5vZGUiLCJhc3NpZ24iLCJtZXRob2RzIiwiaG9vayIsInJlZnMiLCJfX3NhblJlZnMiLCJpbml0ZWRIb29rIiwiaW5pdGVkIiwiY2FsbCIsIiRyZWYiLCJtZSIsInIiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiZW51bWVyYWJsZSIsImdldCIsInJvb3QiLCJlbCIsInJlZiIsImluaXREYXRhIiwiYmluZERhdGEiLCJfc2JpbmREYXRhIiwicHJvcEtleXMiLCJkZWZhdWx0UHJvcHMiLCJwIiwiQ29tcG9uZW50IiwiZGVmaW5lQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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LEdBRU52QixPQUFPLENBQUNYLElBQVIsSUFBZ0IsRUFGdkI7QUFJQSxhQUFPdkYsTUFBTSxDQUFDdUcsTUFBUCxDQUFjLEVBQWQsRUFBa0JxQixZQUFsQixFQUFnQ3JDLElBQWhDLENBQVA7QUFDSCxLQXhCRDtBQXlCSDs7QUFFRCxNQUFJVyxPQUFPLENBQUNQLFVBQVosRUFBd0I7QUFDcEJRLGNBQVUsQ0FBQ1IsVUFBWCxHQUF3QjNGLE1BQU0sQ0FDekJvQixJQURtQixDQUNkOEUsT0FBTyxDQUFDUCxVQURNLEVBRW5CM0UsTUFGbUIsQ0FFWixVQUFDQyxJQUFELEVBQU8xQixHQUFQLEVBQWU7QUFDbkIwQixVQUFJLENBQUMxQixHQUFELENBQUosR0FBWTBCLElBQUksQ0FBQ1gsU0FBUyxDQUFDZixHQUFELENBQVYsQ0FBSixHQUF1QjBHLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDUCxVQUFSLENBQW1CcEcsR0FBbkIsQ0FBRCxDQUF6QztBQUNBLGFBQU8wQixJQUFQO0FBQ0gsS0FMbUIsRUFLakIsRUFMaUIsQ0FBeEI7QUFNSDs7QUFFRCxNQUFNNkcsU0FBUyxHQUFHQyx3Q0FBZSxDQUFDNUIsVUFBRCxDQUFqQztBQUVBLFNBQU8yQixTQUFQO0FBQ0gsQzs7QUN6S0QiLCJmaWxlIjoidnVzYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInNhblwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJzYW5cIl0sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGZhY3RvcnkocmVxdWlyZShcInNhblwiKSkgOiBmYWN0b3J5KHJvb3RbXCJzYW5cIl0pO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkod2luZG93LCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX18wX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzBfXzsiLCIvKipcbiAqIEBmaWxlIOS4gOS6m+W3peWFt+WHveaVsFxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbi8qKlxuICogTWl4IHByb3BlcnRpZXMgaW50byB0YXJnZXQgb2JqZWN0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXh0ZW5kKHRvLCBmcm9tKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gZnJvbSkge1xuICAgICAgICB0b1trZXldID0gZnJvbVtrZXldO1xuICAgIH1cbiAgICByZXR1cm4gdG87XG59XG5cbi8qKlxuICogTWVyZ2UgYW4gQXJyYXkgb2YgT2JqZWN0cyBpbnRvIGEgc2luZ2xlIE9iamVjdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvT2JqZWN0KGFycikge1xuICAgIGNvbnN0IHJlcyA9IHt9O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChhcnJbaV0pIHtcbiAgICAgICAgICAgIGV4dGVuZChyZXMsIGFycltpXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cblxuXG4vKipcbiAqIENyZWF0ZSBhIGNhY2hlZCB2ZXJzaW9uIG9mIGEgcHVyZSBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhY2hlZChmbikge1xuICAgIGNvbnN0IGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gY2FjaGVkRm4oc3RyKSB7XG4gICAgICAgIGNvbnN0IGhpdCA9IGNhY2hlW3N0cl07XG4gICAgICAgIHJldHVybiBoaXQgfHwgKGNhY2hlW3N0cl0gPSBmbihzdHIpKTtcbiAgICB9O1xufVxuXG4vKipcbiAqIEh5cGhlbmF0ZSBhIGNhbWVsQ2FzZSBzdHJpbmcuXG4gKi9cbmNvbnN0IGh5cGhlbmF0ZVJFID0gLyhbXi1dKShbQS1aXSkvZztcbmV4cG9ydCBjb25zdCBoeXBoZW5hdGUgPSBjYWNoZWQoKHN0cikgPT4ge1xuICAgIHJldHVybiBzdHJcbiAgICAgICAgLnJlcGxhY2UoaHlwaGVuYXRlUkUsICckMS0kMicpXG4gICAgICAgIC5yZXBsYWNlKGh5cGhlbmF0ZVJFLCAnJDEtJDInKVxuICAgICAgICAudG9Mb3dlckNhc2UoKTtcbn0pO1xuXG5leHBvcnQgY29uc3QgY2FtZWxpemUgPSBzdHIgPT4gc3RyLnJlcGxhY2UoLy0oXFx3KS9nLCAoXywgYykgPT4gKGMgPyBjLnRvVXBwZXJDYXNlKCkgOiAnJykpO1xuIiwiLyoqXG4gKiBAZmlsZSBtZXJnZSBjbGFzc1xuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmZ1bmN0aW9uIHN0cmluZyhjbHMgPSAnJykge1xuICAgIGlmICghY2xzKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuIGNsc1xuICAgICAgICAuc3BsaXQoJyAnKVxuICAgICAgICAucmVkdWNlKChwcmV2LCBuYW1lKSA9PiB7XG4gICAgICAgICAgICBpZiAoIW5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgICAgICBbbmFtZV06IDFcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sIHt9KTtcbn1cblxuZnVuY3Rpb24gb2JqZWN0KGNscyA9IHt9KSB7XG4gICAgcmV0dXJuIE9iamVjdFxuICAgICAgICAua2V5cyhjbHMpXG4gICAgICAgIC5yZWR1Y2UoKHByZXYsIGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFjbHNba2V5XSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgICAgIC4uLnN0cmluZyhrZXkpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LCB7fSk7XG59XG5cbmZ1bmN0aW9uIGFycmF5KGNscyA9IFtdKSB7XG4gICAgbGV0IGNsYXp6ID0ge307XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGNscy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gY2xzW2ldO1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGNsYXp6ID0ge1xuICAgICAgICAgICAgICAgIC4uLmNsYXp6LFxuICAgICAgICAgICAgICAgIC4uLnN0cmluZyhlbGVtZW50KVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KGVsZW1lbnQpKSB7XG4gICAgICAgICAgICBjbGF6eiA9IHtcbiAgICAgICAgICAgICAgICAuLi5jbGF6eixcbiAgICAgICAgICAgICAgICAuLi5hcnJheShlbGVtZW50KVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNsYXp6ID0ge1xuICAgICAgICAgICAgICAgIC4uLmNsYXp6LFxuICAgICAgICAgICAgICAgIC4uLm9iamVjdChlbGVtZW50KVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY2xheno7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0aWNDbGFzcyA9ICcnLCBjbHMgPSB7fSkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhhcnJheShbc3RhdGljQ2xhc3MsIGNsc10pKS5qb2luKCcgJyk7XG59XG4iLCIvKipcbiAqIEBmaWxlIG1lcmdlIHN0eWxlXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHtjYWNoZWQsIGV4dGVuZCwgdG9PYmplY3R9IGZyb20gJy4uL3NoYXJlZC91dGlsJztcblxuY29uc3QgcGFyc2VTdHlsZVRleHQgPSBjYWNoZWQoZnVuY3Rpb24gKGNzc1RleHQpIHtcbiAgICBjb25zdCByZXMgPSB7fTtcbiAgICBjb25zdCBsaXN0RGVsaW1pdGVyID0gLzsoPyFbXihdKlxcKSkvZztcbiAgICBjb25zdCBwcm9wZXJ0eURlbGltaXRlciA9IC86KC4rKS87XG4gICAgY3NzVGV4dC5zcGxpdChsaXN0RGVsaW1pdGVyKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICB2YXIgdG1wID0gaXRlbS5zcGxpdChwcm9wZXJ0eURlbGltaXRlcik7XG4gICAgICAgICAgICB0bXAubGVuZ3RoID4gMSAmJiAocmVzW3RtcFswXS50cmltKCldID0gdG1wWzFdLnRyaW0oKSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzO1xufSk7XG5cbi8vIG5vcm1hbGl6ZSBwb3NzaWJsZSBhcnJheSAvIHN0cmluZyB2YWx1ZXMgaW50byBPYmplY3RcbmZ1bmN0aW9uIG5vcm1hbGl6ZVN0eWxlQmluZGluZyhiaW5kaW5nU3R5bGUpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShiaW5kaW5nU3R5bGUpKSB7XG4gICAgICAgIHJldHVybiB0b09iamVjdChiaW5kaW5nU3R5bGUpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGJpbmRpbmdTdHlsZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlU3R5bGVUZXh0KGJpbmRpbmdTdHlsZSk7XG4gICAgfVxuICAgIHJldHVybiBiaW5kaW5nU3R5bGU7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRpY1N0eWxlLCBzdHlsZSwgdlNob3cgPSB0cnVlKSB7XG4gICAgc3R5bGUgPSBub3JtYWxpemVTdHlsZUJpbmRpbmcoc3R5bGUpO1xuICAgIGlmICghdlNob3cpIHtcbiAgICAgICAgc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gICAgcmV0dXJuIHN0YXRpY1N0eWxlXG4gICAgICAgID8gZXh0ZW5kKHN0YXRpY1N0eWxlLCBzdHlsZSlcbiAgICAgICAgOiBzdHlsZTtcbn1cbiIsIi8qKlxuICogQGZpbGUgbG9vcCBleHByZXNzaW9uXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHtjYWNoZWR9IGZyb20gJy4uL3NoYXJlZC91dGlsJztcblxuY29uc3QgdG9BcnJheSA9IGNhY2hlZChmdW5jdGlvbiAobikge1xuICAgIGNvbnN0IHZhbHVlID0gbmV3IEFycmF5KG4pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgIHZhbHVlW2ldID0gaSArIDE7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAoIWlzTmFOKHZhbHVlKSkge1xuICAgICAgICBjb25zdCBuID0gK3ZhbHVlO1xuICAgICAgICB2YWx1ZSA9IHRvQXJyYXkobik7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn1cblxuIiwiLyoqXG4gKiBAZmlsZSBjb21wb25lbnRcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQge2RlZmluZUNvbXBvbmVudCwgaW5oZXJpdHMsIGV2YWxFeHByfSBmcm9tICdzYW4nO1xuaW1wb3J0IHtleHRlbmQsIGh5cGhlbmF0ZX0gZnJvbSAnLi4vc2hhcmVkL3V0aWwnO1xuaW1wb3J0IG1lcmdlQ2xhc3MgZnJvbSAnLi9tZXJnZS1jbGFzcyc7XG5pbXBvcnQgbWVyZ2VTdHlsZSBmcm9tICcuL21lcmdlLXN0eWxlJztcbmltcG9ydCBsb29wRXhwcmVzc2lvbiBmcm9tICcuL2xvb3AtZXhwcmVzc2lvbic7XG5cbmNvbnN0IGxpZmVDeWNsZU1hcCA9IHtcbiAgICBiZWZvcmVDcmVhdGU6ICdjb21waWxlZCcsXG4gICAgbW91bnRlZDogJ2F0dGFjaGVkJyxcbiAgICBjcmVhdGVkOiAnaW5pdGVkJyxcbiAgICBiZWZvcmVNb3VudDogJ2NyZWF0ZWQnLFxuICAgIGJlZm9yZURlc3Ryb3k6ICdkZXRhY2hlZCcsXG4gICAgZGVzdHJveTogJ2Rpc3Bvc2VkJyxcbiAgICB1cGRhdGVkOiAndXBkYXRlZCcsXG4gICAgYmVmb3JlVXBkYXRlOiAndXBkYXRlZCdcbn07XG5cbi8qIGVzbGludC1kaXNhYmxlIGZlY3MtY2FtZWxjYXNlICovXG5jb25zdCBkZWZhdWx0U2FuT3B0aW9ucyA9IHtcbiAgICBfbWM6IG1lcmdlQ2xhc3MsXG4gICAgX21zOiBtZXJnZVN0eWxlLFxuICAgIF9sOiBsb29wRXhwcmVzc2lvbixcbiAgICBmaWx0ZXJzOiB7XG4gICAgICAgIGpzb24ob2JqKSB7XG4gICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoanNvbik7XG4gICAgICAgIH0sXG4gICAgICAgIGxvd2VyKHN0cikge1xuICAgICAgICAgICAgcmV0dXJuIHN0ci50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9LFxuICAgICAgICB1cHBlcihzdHIpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHIudG9VcHBlckNhc2UoKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmNvbnN0IE1BVEhfTUVUSE9EID0gW1xuICAgICdmbG9vcicsICdjZWlsJywgJ3JvdW5kJyxcbiAgICAnYWJzJywgJ21heCcsICdtaW4nLCAncG93J1xuXTtcblxuTUFUSF9NRVRIT0QuZm9yRWFjaChuYW1lID0+IHtcbiAgICBkZWZhdWx0U2FuT3B0aW9uc1tgbWF0aF8ke25hbWV9YF0gPSBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICByZXR1cm4gTWF0aFtuYW1lXS5hcHBseShNYXRoLCBhcmdzKTtcbiAgICB9O1xufSk7XG5cbmRlZmF1bHRTYW5PcHRpb25zLmFycmF5X3NsaWNlID0gZnVuY3Rpb24gKGFyciwgc3RhcnQsIGxlbikge1xuICAgIHZhciBlbmQgPSBsZW4gPT0gbnVsbCA/IHZvaWQgMCA6IChsZW4gPj0gMCA/IChzdGFydCArIGxlbikgOiAoYXJyLmxlbmd0aCArIGxlbikpO1xuICAgIHJldHVybiBhcnIuc2xpY2Uoc3RhcnQsIGVuZCk7XG59O1xuXG5kZWZhdWx0U2FuT3B0aW9ucy5hcnJheV9qb2luID0gZnVuY3Rpb24gKGFyciwgc2VwKSB7XG4gICAgcmV0dXJuIGFyci5qb2luKHNlcCk7XG59O1xuXG5kZWZhdWx0U2FuT3B0aW9ucy5zdHJfcG9zID0gZnVuY3Rpb24gKHN0ciwgbWF0Y2gpIHtcbiAgICByZXR1cm4gc3RyLmluZGV4T2YobWF0Y2gpO1xufTtcblxuZGVmYXVsdFNhbk9wdGlvbnMub2JqZWN0X2ZyZWV6ZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gT2JqZWN0LmZyZWV6ZShvYmopO1xufTtcblxuZGVmYXVsdFNhbk9wdGlvbnMuZ2V0Q29tcG9uZW50VHlwZSA9IGZ1bmN0aW9uIChhTm9kZSwgZGF0YSkge1xuICAgIGlmIChhTm9kZS5ob3RzcG90LnByb3BzLmlzID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50c1thTm9kZS50YWdOYW1lXTtcbiAgICB9XG5cbiAgICBjb25zdCBpcyA9IGFOb2RlLnByb3BzW2FOb2RlLmhvdHNwb3QucHJvcHMuaXNdO1xuICAgIGNvbnN0IGlzVmFsdWUgPSBldmFsRXhwcihpcy5leHByLCBkYXRhKTtcbiAgICBhTm9kZS50YWdOYW1lID0gaXNWYWx1ZTtcbiAgICBhTm9kZS5wcm9wcy5zcGxpY2UoaXMsIDEpO1xuICAgIHJldHVybiB0aGlzLmNvbXBvbmVudHNbaXNWYWx1ZV07XG59O1xuXG4vKiBlc2xpbnQtZW5hYmxlIGZlY3MtY2FtZWxjYXNlICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlZmluZShvcHRpb25zKSB7XG5cbiAgICBjb25zdCBzYW5PcHRpb25zID0gZXh0ZW5kKHtcbiAgICAgICAgdGVtcGxhdGU6IG9wdGlvbnMuX19zYW50ZW1wbGF0ZSxcbiAgICAgICAgYU5vZGU6IG9wdGlvbnMuX19zYW5hTm9kZVxuICAgIH0sIGRlZmF1bHRTYW5PcHRpb25zKTtcblxuICAgIGlmIChvcHRpb25zLmZpbHRlcnMpIHtcbiAgICAgICAgc2FuT3B0aW9ucy5maWx0ZXJzID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHNhbk9wdGlvbnMuZmlsdGVycyxcbiAgICAgICAgICAgIG9wdGlvbnMuZmlsdGVyc1xuICAgICAgICApO1xuICAgIH1cblxuICAgIFsnY29tcHV0ZWQnLCAnd2F0Y2gnXS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGlmIChvcHRpb25zW2tleV0pIHtcbiAgICAgICAgICAgIHNhbk9wdGlvbnNba2V5XSA9IG9wdGlvbnNba2V5XTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKG9wdGlvbnMubWV0aG9kcykge1xuICAgICAgICBPYmplY3Qua2V5cyhvcHRpb25zLm1ldGhvZHMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIHNhbk9wdGlvbnNba2V5XSA9IG9wdGlvbnMubWV0aG9kc1trZXldO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyhsaWZlQ3ljbGVNYXApLmZvckVhY2goaG9vayA9PiB7XG4gICAgICAgIGlmIChvcHRpb25zW2hvb2tdKSB7XG4gICAgICAgICAgICBzYW5PcHRpb25zW2xpZmVDeWNsZU1hcFtob29rXV0gPSBvcHRpb25zW2hvb2tdO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCByZWZzID0gb3B0aW9ucy5fX3NhblJlZnM7XG4gICAgY29uc3QgaW5pdGVkSG9vayA9IHNhbk9wdGlvbnMuaW5pdGVkO1xuICAgIHNhbk9wdGlvbnMuaW5pdGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpbml0ZWRIb29rICYmIGluaXRlZEhvb2suY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy4kcmVmID0ge307XG4gICAgICAgIGNvbnN0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAocmVmcykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHJlZnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCByID0gcmVmc1tpXTtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhtZS4kcmVmLCByLm5hbWUsIHtcbiAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHIucm9vdCA/IG1lLmVsIDogbWUucmVmKHIubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAob3B0aW9ucy5kYXRhIHx8IG9wdGlvbnMucHJvcHMpIHtcbiAgICAgICAgc2FuT3B0aW9ucy5pbml0RGF0YSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgY29uc3QgYmluZERhdGEgPSB0aGlzLl9zYmluZERhdGEgfHwge307XG4gICAgICAgICAgICBjb25zdCBwcm9wS2V5cyA9IG9wdGlvbnMucHJvcHNcbiAgICAgICAgICAgICAgICA/IChBcnJheS5pc0FycmF5KG9wdGlvbnMucHJvcHMpID8gb3B0aW9ucy5wcm9wcyA6IE9iamVjdC5rZXlzKG9wdGlvbnMucHJvcHMpKVxuICAgICAgICAgICAgICAgIDogW107XG5cbiAgICAgICAgICAgIC8vIOm7mOiupOWxnuaAp1xuICAgICAgICAgICAgY29uc3QgZGVmYXVsdFByb3BzID0ge307XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5wcm9wcyAmJiAhQXJyYXkuaXNBcnJheShvcHRpb25zLnByb3BzKSkge1xuICAgICAgICAgICAgICAgIHByb3BLZXlzLmZvckVhY2gocCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgnZGVmYXVsdCcgaW4gb3B0aW9ucy5wcm9wc1twXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFByb3BzW3BdID0gdHlwZW9mIG9wdGlvbnMucHJvcHNbcF0uZGVmYXVsdCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gb3B0aW9ucy5wcm9wc1twXS5kZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG9wdGlvbnMucHJvcHNbcF0uZGVmYXVsdFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHR5cGVvZiBvcHRpb25zLmRhdGEgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICA/IG9wdGlvbnMuZGF0YS5jYWxsKE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRQcm9wcywgYmluZERhdGEpKVxuICAgICAgICAgICAgICAgIDogKG9wdGlvbnMuZGF0YSB8fCB7fSk7XG5cbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0UHJvcHMsIGRhdGEpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmNvbXBvbmVudHMpIHtcbiAgICAgICAgc2FuT3B0aW9ucy5jb21wb25lbnRzID0gT2JqZWN0XG4gICAgICAgICAgICAua2V5cyhvcHRpb25zLmNvbXBvbmVudHMpXG4gICAgICAgICAgICAucmVkdWNlKChwcmV2LCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBwcmV2W2tleV0gPSBwcmV2W2h5cGhlbmF0ZShrZXkpXSA9IGRlZmluZShvcHRpb25zLmNvbXBvbmVudHNba2V5XSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICAgICAgICB9LCB7fSk7XG4gICAgfVxuXG4gICAgY29uc3QgQ29tcG9uZW50ID0gZGVmaW5lQ29tcG9uZW50KHNhbk9wdGlvbnMpO1xuXG4gICAgcmV0dXJuIENvbXBvbmVudDtcbn1cblxuIiwiLyoqXG4gKiBAZmlsZSBlbnRyeVxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmV4cG9ydCB7ZGVmYXVsdCBhcyBkZWZpbmVDb21wb25lbnR9IGZyb20gJy4vZGVmaW5lLWNvbXBvbmVudCc7XG4iXSwic291cmNlUm9vdCI6IiJ9