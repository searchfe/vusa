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
var sanOptions = {
  _mc: merge_class,
  _ms: merge_style,
  _l: loop_expression,
  template: options.__santemplate,
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
  sanOptions["math_".concat(name)] = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return Math[name].apply(Math, args);
  };
});

sanOptions.array_slice = function (arr, start, len) {
  var end = len == null ? void 0 : len >= 0 ? start + len : arr.length + len;
  return arr.slice(start, end);
};

sanOptions.array_join = function (arr, sep) {
  return arr.join(sep);
};

sanOptions.str_pos = function (str, match) {
  return str.indexOf(match);
};

sanOptions.object_freeze = function (obj) {
  return Object.freeze(obj);
};

function define(options) {
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

  if (options.data || options.props) {
    sanOptions.initData = function () {
      var bindData = this._sbindData || {};
      console.log(bindData);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzYW5cIiIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvbWVyZ2UtY2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvbWVyZ2Utc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvbG9vcC1leHByZXNzaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lL2RlZmluZS1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvaW5kZXguanMiXSwibmFtZXMiOlsiZXh0ZW5kIiwidG8iLCJmcm9tIiwia2V5IiwidG9PYmplY3QiLCJhcnIiLCJyZXMiLCJpIiwibGVuZ3RoIiwiY2FjaGVkIiwiZm4iLCJjYWNoZSIsIk9iamVjdCIsImNyZWF0ZSIsImNhY2hlZEZuIiwic3RyIiwiaGl0IiwiaHlwaGVuYXRlUkUiLCJoeXBoZW5hdGUiLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJjYW1lbGl6ZSIsIl8iLCJjIiwidG9VcHBlckNhc2UiLCJzdHJpbmciLCJjbHMiLCJzcGxpdCIsInJlZHVjZSIsInByZXYiLCJuYW1lIiwib2JqZWN0Iiwia2V5cyIsImFycmF5IiwiY2xhenoiLCJsZW4iLCJlbGVtZW50IiwiQXJyYXkiLCJpc0FycmF5Iiwic3RhdGljQ2xhc3MiLCJqb2luIiwicGFyc2VTdHlsZVRleHQiLCJjc3NUZXh0IiwibGlzdERlbGltaXRlciIsInByb3BlcnR5RGVsaW1pdGVyIiwiZm9yRWFjaCIsIml0ZW0iLCJ0bXAiLCJ0cmltIiwibm9ybWFsaXplU3R5bGVCaW5kaW5nIiwiYmluZGluZ1N0eWxlIiwic3RhdGljU3R5bGUiLCJzdHlsZSIsInZTaG93IiwiZGlzcGxheSIsInRvQXJyYXkiLCJuIiwidmFsdWUiLCJpc05hTiIsImxpZmVDeWNsZU1hcCIsImJlZm9yZUNyZWF0ZSIsIm1vdW50ZWQiLCJjcmVhdGVkIiwiYmVmb3JlTW91bnQiLCJiZWZvcmVEZXN0cm95IiwiZGVzdHJveSIsInVwZGF0ZWQiLCJiZWZvcmVVcGRhdGUiLCJzYW5PcHRpb25zIiwiX21jIiwibWVyZ2VDbGFzcyIsIl9tcyIsIm1lcmdlU3R5bGUiLCJfbCIsImxvb3BFeHByZXNzaW9uIiwidGVtcGxhdGUiLCJvcHRpb25zIiwiX19zYW50ZW1wbGF0ZSIsImZpbHRlcnMiLCJqc29uIiwib2JqIiwiSlNPTiIsInN0cmluZ2lmeSIsImxvd2VyIiwidXBwZXIiLCJNQVRIX01FVEhPRCIsImFyZ3MiLCJNYXRoIiwiYXBwbHkiLCJhcnJheV9zbGljZSIsInN0YXJ0IiwiZW5kIiwic2xpY2UiLCJhcnJheV9qb2luIiwic2VwIiwic3RyX3BvcyIsIm1hdGNoIiwiaW5kZXhPZiIsIm9iamVjdF9mcmVlemUiLCJmcmVlemUiLCJkZWZpbmUiLCJhc3NpZ24iLCJtZXRob2RzIiwiaG9vayIsImRhdGEiLCJwcm9wcyIsImluaXREYXRhIiwiYmluZERhdGEiLCJfc2JpbmREYXRhIiwiY29uc29sZSIsImxvZyIsInByb3BLZXlzIiwiZGVmYXVsdFByb3BzIiwicCIsImNhbGwiLCJjb21wb25lbnRzIiwiQ29tcG9uZW50IiwiZGVmaW5lQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVB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bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwic2FuXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInNhblwiXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZmFjdG9yeShyZXF1aXJlKFwic2FuXCIpKSA6IGZhY3Rvcnkocm9vdFtcInNhblwiXSk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh3aW5kb3csIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzBfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fMF9fOyIsIi8qKlxuICogQGZpbGUg5LiA5Lqb5bel5YW35Ye95pWwXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuLyoqXG4gKiBNaXggcHJvcGVydGllcyBpbnRvIHRhcmdldCBvYmplY3QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleHRlbmQodG8sIGZyb20pIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBmcm9tKSB7XG4gICAgICAgIHRvW2tleV0gPSBmcm9tW2tleV07XG4gICAgfVxuICAgIHJldHVybiB0bztcbn1cblxuLyoqXG4gKiBNZXJnZSBhbiBBcnJheSBvZiBPYmplY3RzIGludG8gYSBzaW5nbGUgT2JqZWN0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9PYmplY3QoYXJyKSB7XG4gICAgY29uc3QgcmVzID0ge307XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGFycltpXSkge1xuICAgICAgICAgICAgZXh0ZW5kKHJlcywgYXJyW2ldKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufVxuXG5cbi8qKlxuICogQ3JlYXRlIGEgY2FjaGVkIHZlcnNpb24gb2YgYSBwdXJlIGZ1bmN0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2FjaGVkKGZuKSB7XG4gICAgY29uc3QgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHJldHVybiBmdW5jdGlvbiBjYWNoZWRGbihzdHIpIHtcbiAgICAgICAgY29uc3QgaGl0ID0gY2FjaGVbc3RyXTtcbiAgICAgICAgcmV0dXJuIGhpdCB8fCAoY2FjaGVbc3RyXSA9IGZuKHN0cikpO1xuICAgIH07XG59XG5cbi8qKlxuICogSHlwaGVuYXRlIGEgY2FtZWxDYXNlIHN0cmluZy5cbiAqL1xuY29uc3QgaHlwaGVuYXRlUkUgPSAvKFteLV0pKFtBLVpdKS9nO1xuZXhwb3J0IGNvbnN0IGh5cGhlbmF0ZSA9IGNhY2hlZCgoc3RyKSA9PiB7XG4gICAgcmV0dXJuIHN0clxuICAgICAgICAucmVwbGFjZShoeXBoZW5hdGVSRSwgJyQxLSQyJylcbiAgICAgICAgLnJlcGxhY2UoaHlwaGVuYXRlUkUsICckMS0kMicpXG4gICAgICAgIC50b0xvd2VyQ2FzZSgpO1xufSk7XG5cbmV4cG9ydCBjb25zdCBjYW1lbGl6ZSA9IHN0ciA9PiBzdHIucmVwbGFjZSgvLShcXHcpL2csIChfLCBjKSA9PiAoYyA/IGMudG9VcHBlckNhc2UoKSA6ICcnKSk7XG4iLCIvKipcbiAqIEBmaWxlIG1lcmdlIGNsYXNzXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuZnVuY3Rpb24gc3RyaW5nKGNscyA9ICcnKSB7XG4gICAgaWYgKCFjbHMpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICByZXR1cm4gY2xzXG4gICAgICAgIC5zcGxpdCgnICcpXG4gICAgICAgIC5yZWR1Y2UoKHByZXYsIG5hbWUpID0+IHtcbiAgICAgICAgICAgIGlmICghbmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgICAgIFtuYW1lXTogMVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSwge30pO1xufVxuXG5mdW5jdGlvbiBvYmplY3QoY2xzID0ge30pIHtcbiAgICByZXR1cm4gT2JqZWN0XG4gICAgICAgIC5rZXlzKGNscylcbiAgICAgICAgLnJlZHVjZSgocHJldiwga2V5KSA9PiB7XG4gICAgICAgICAgICBpZiAoIWNsc1trZXldKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgICAgLi4uc3RyaW5nKGtleSlcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sIHt9KTtcbn1cblxuZnVuY3Rpb24gYXJyYXkoY2xzID0gW10pIHtcbiAgICBsZXQgY2xhenogPSB7fTtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gY2xzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBjbHNbaV07XG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgY2xhenogPSB7XG4gICAgICAgICAgICAgICAgLi4uY2xhenosXG4gICAgICAgICAgICAgICAgLi4uc3RyaW5nKGVsZW1lbnQpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZWxlbWVudCkpIHtcbiAgICAgICAgICAgIGNsYXp6ID0ge1xuICAgICAgICAgICAgICAgIC4uLmNsYXp6LFxuICAgICAgICAgICAgICAgIC4uLmFycmF5KGVsZW1lbnQpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2xhenogPSB7XG4gICAgICAgICAgICAgICAgLi4uY2xhenosXG4gICAgICAgICAgICAgICAgLi4ub2JqZWN0KGVsZW1lbnQpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjbGF6ejtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRpY0NsYXNzID0gJycsIGNscyA9IHt9KSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGFycmF5KFtzdGF0aWNDbGFzcywgY2xzXSkpLmpvaW4oJyAnKTtcbn1cbiIsIi8qKlxuICogQGZpbGUgbWVyZ2Ugc3R5bGVcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQge2NhY2hlZCwgZXh0ZW5kLCB0b09iamVjdH0gZnJvbSAnLi4vc2hhcmVkL3V0aWwnO1xuXG5jb25zdCBwYXJzZVN0eWxlVGV4dCA9IGNhY2hlZChmdW5jdGlvbiAoY3NzVGV4dCkge1xuICAgIGNvbnN0IHJlcyA9IHt9O1xuICAgIGNvbnN0IGxpc3REZWxpbWl0ZXIgPSAvOyg/IVteKF0qXFwpKS9nO1xuICAgIGNvbnN0IHByb3BlcnR5RGVsaW1pdGVyID0gLzooLispLztcbiAgICBjc3NUZXh0LnNwbGl0KGxpc3REZWxpbWl0ZXIpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgIHZhciB0bXAgPSBpdGVtLnNwbGl0KHByb3BlcnR5RGVsaW1pdGVyKTtcbiAgICAgICAgICAgIHRtcC5sZW5ndGggPiAxICYmIChyZXNbdG1wWzBdLnRyaW0oKV0gPSB0bXBbMV0udHJpbSgpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXM7XG59KTtcblxuLy8gbm9ybWFsaXplIHBvc3NpYmxlIGFycmF5IC8gc3RyaW5nIHZhbHVlcyBpbnRvIE9iamVjdFxuZnVuY3Rpb24gbm9ybWFsaXplU3R5bGVCaW5kaW5nKGJpbmRpbmdTdHlsZSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGJpbmRpbmdTdHlsZSkpIHtcbiAgICAgICAgcmV0dXJuIHRvT2JqZWN0KGJpbmRpbmdTdHlsZSk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgYmluZGluZ1N0eWxlID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gcGFyc2VTdHlsZVRleHQoYmluZGluZ1N0eWxlKTtcbiAgICB9XG4gICAgcmV0dXJuIGJpbmRpbmdTdHlsZTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGljU3R5bGUsIHN0eWxlLCB2U2hvdyA9IHRydWUpIHtcbiAgICBzdHlsZSA9IG5vcm1hbGl6ZVN0eWxlQmluZGluZyhzdHlsZSk7XG4gICAgaWYgKCF2U2hvdykge1xuICAgICAgICBzdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgICByZXR1cm4gc3RhdGljU3R5bGVcbiAgICAgICAgPyBleHRlbmQoc3RhdGljU3R5bGUsIHN0eWxlKVxuICAgICAgICA6IHN0eWxlO1xufVxuIiwiLyoqXG4gKiBAZmlsZSBsb29wIGV4cHJlc3Npb25cbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQge2NhY2hlZH0gZnJvbSAnLi4vc2hhcmVkL3V0aWwnO1xuXG5jb25zdCB0b0FycmF5ID0gY2FjaGVkKGZ1bmN0aW9uIChuKSB7XG4gICAgY29uc3QgdmFsdWUgPSBuZXcgQXJyYXkobik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgdmFsdWVbaV0gPSBpICsgMTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICghaXNOYU4odmFsdWUpKSB7XG4gICAgICAgIGNvbnN0IG4gPSArdmFsdWU7XG4gICAgICAgIHZhbHVlID0gdG9BcnJheShuKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuXG4iLCIvKipcbiAqIEBmaWxlIGNvbXBvbmVudFxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCB7ZGVmaW5lQ29tcG9uZW50LCBpbmhlcml0c30gZnJvbSAnc2FuJztcbmltcG9ydCB7ZXh0ZW5kLCBoeXBoZW5hdGV9IGZyb20gJy4uL3NoYXJlZC91dGlsJztcbmltcG9ydCBtZXJnZUNsYXNzIGZyb20gJy4vbWVyZ2UtY2xhc3MnO1xuaW1wb3J0IG1lcmdlU3R5bGUgZnJvbSAnLi9tZXJnZS1zdHlsZSc7XG5pbXBvcnQgbG9vcEV4cHJlc3Npb24gZnJvbSAnLi9sb29wLWV4cHJlc3Npb24nO1xuXG5jb25zdCBsaWZlQ3ljbGVNYXAgPSB7XG4gICAgYmVmb3JlQ3JlYXRlOiAnY29tcGlsZWQnLFxuICAgIG1vdW50ZWQ6ICdhdHRhY2hlZCcsXG4gICAgY3JlYXRlZDogJ2luaXRlZCcsXG4gICAgYmVmb3JlTW91bnQ6ICdjcmVhdGVkJyxcbiAgICBiZWZvcmVEZXN0cm95OiAnZGV0YWNoZWQnLFxuICAgIGRlc3Ryb3k6ICdkaXNwb3NlZCcsXG4gICAgdXBkYXRlZDogJ3VwZGF0ZWQnLFxuICAgIGJlZm9yZVVwZGF0ZTogJ3VwZGF0ZWQnXG59O1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBmZWNzLWNhbWVsY2FzZSAqL1xuY29uc3Qgc2FuT3B0aW9ucyA9IHtcbiAgICBfbWM6IG1lcmdlQ2xhc3MsXG4gICAgX21zOiBtZXJnZVN0eWxlLFxuICAgIF9sOiBsb29wRXhwcmVzc2lvbixcbiAgICB0ZW1wbGF0ZTogb3B0aW9ucy5fX3NhbnRlbXBsYXRlLFxuICAgIGZpbHRlcnM6IHtcbiAgICAgICAganNvbihvYmopIHtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShqc29uKTtcbiAgICAgICAgfSxcbiAgICAgICAgbG93ZXIoc3RyKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHVwcGVyKHN0cikge1xuICAgICAgICAgICAgcmV0dXJuIHN0ci50b1VwcGVyQ2FzZSgpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuY29uc3QgTUFUSF9NRVRIT0QgPSBbXG4gICAgJ2Zsb29yJywgJ2NlaWwnLCAncm91bmQnLFxuICAgICdhYnMnLCAnbWF4JywgJ21pbicsICdwb3cnXG5dO1xuXG5NQVRIX01FVEhPRC5mb3JFYWNoKG5hbWUgPT4ge1xuICAgIHNhbk9wdGlvbnNbYG1hdGhfJHtuYW1lfWBdID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIE1hdGhbbmFtZV0uYXBwbHkoTWF0aCwgYXJncyk7XG4gICAgfTtcbn0pO1xuXG5zYW5PcHRpb25zLmFycmF5X3NsaWNlID0gZnVuY3Rpb24gKGFyciwgc3RhcnQsIGxlbikge1xuICAgIHZhciBlbmQgPSBsZW4gPT0gbnVsbCA/IHZvaWQgMCA6IChsZW4gPj0gMCA/IChzdGFydCArIGxlbikgOiAoYXJyLmxlbmd0aCArIGxlbikpO1xuICAgIHJldHVybiBhcnIuc2xpY2Uoc3RhcnQsIGVuZCk7XG59O1xuXG5zYW5PcHRpb25zLmFycmF5X2pvaW4gPSBmdW5jdGlvbiAoYXJyLCBzZXApIHtcbiAgICByZXR1cm4gYXJyLmpvaW4oc2VwKTtcbn07XG5cbnNhbk9wdGlvbnMuc3RyX3BvcyA9IGZ1bmN0aW9uIChzdHIsIG1hdGNoKSB7XG4gICAgcmV0dXJuIHN0ci5pbmRleE9mKG1hdGNoKTtcbn07XG5cbnNhbk9wdGlvbnMub2JqZWN0X2ZyZWV6ZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gT2JqZWN0LmZyZWV6ZShvYmopO1xufTtcblxuLyogZXNsaW50LWVuYWJsZSBmZWNzLWNhbWVsY2FzZSAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWZpbmUob3B0aW9ucykge1xuXG4gICAgaWYgKG9wdGlvbnMuZmlsdGVycykge1xuICAgICAgICBzYW5PcHRpb25zLmZpbHRlcnMgPSBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgc2FuT3B0aW9ucy5maWx0ZXJzLFxuICAgICAgICAgICAgb3B0aW9ucy5maWx0ZXJzXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgWydjb21wdXRlZCcsICd3YXRjaCddLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgaWYgKG9wdGlvbnNba2V5XSkge1xuICAgICAgICAgICAgc2FuT3B0aW9uc1trZXldID0gb3B0aW9uc1trZXldO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAob3B0aW9ucy5tZXRob2RzKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMubWV0aG9kcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgc2FuT3B0aW9uc1trZXldID0gb3B0aW9ucy5tZXRob2RzW2tleV07XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKGxpZmVDeWNsZU1hcCkuZm9yRWFjaChob29rID0+IHtcbiAgICAgICAgaWYgKG9wdGlvbnNbaG9va10pIHtcbiAgICAgICAgICAgIHNhbk9wdGlvbnNbbGlmZUN5Y2xlTWFwW2hvb2tdXSA9IG9wdGlvbnNbaG9va107XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChvcHRpb25zLmRhdGEgfHwgb3B0aW9ucy5wcm9wcykge1xuICAgICAgICBzYW5PcHRpb25zLmluaXREYXRhID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICBjb25zdCBiaW5kRGF0YSA9IHRoaXMuX3NiaW5kRGF0YSB8fCB7fTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGJpbmREYXRhKTtcbiAgICAgICAgICAgIGNvbnN0IHByb3BLZXlzID0gb3B0aW9ucy5wcm9wc1xuICAgICAgICAgICAgICAgID8gKEFycmF5LmlzQXJyYXkob3B0aW9ucy5wcm9wcykgPyBvcHRpb25zLnByb3BzIDogT2JqZWN0LmtleXMob3B0aW9ucy5wcm9wcykpXG4gICAgICAgICAgICAgICAgOiBbXTtcblxuICAgICAgICAgICAgLy8g6buY6K6k5bGe5oCnXG4gICAgICAgICAgICBjb25zdCBkZWZhdWx0UHJvcHMgPSB7fTtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnByb3BzICYmICFBcnJheS5pc0FycmF5KG9wdGlvbnMucHJvcHMpKSB7XG4gICAgICAgICAgICAgICAgcHJvcEtleXMuZm9yRWFjaChwID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCdkZWZhdWx0JyBpbiBvcHRpb25zLnByb3BzW3BdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0UHJvcHNbcF0gPSB0eXBlb2Ygb3B0aW9ucy5wcm9wc1twXS5kZWZhdWx0ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBvcHRpb25zLnByb3BzW3BdLmRlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogb3B0aW9ucy5wcm9wc1twXS5kZWZhdWx0XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gdHlwZW9mIG9wdGlvbnMuZGF0YSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgID8gb3B0aW9ucy5kYXRhLmNhbGwoT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdFByb3BzLCBiaW5kRGF0YSkpXG4gICAgICAgICAgICAgICAgOiAob3B0aW9ucy5kYXRhIHx8IHt9KTtcblxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRQcm9wcywgZGF0YSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuY29tcG9uZW50cykge1xuICAgICAgICBzYW5PcHRpb25zLmNvbXBvbmVudHMgPSBPYmplY3RcbiAgICAgICAgICAgIC5rZXlzKG9wdGlvbnMuY29tcG9uZW50cylcbiAgICAgICAgICAgIC5yZWR1Y2UoKHByZXYsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIHByZXZba2V5XSA9IHByZXZbaHlwaGVuYXRlKGtleSldID0gZGVmaW5lKG9wdGlvbnMuY29tcG9uZW50c1trZXldKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgICAgICAgIH0sIHt9KTtcbiAgICB9XG5cbiAgICBjb25zdCBDb21wb25lbnQgPSBkZWZpbmVDb21wb25lbnQoc2FuT3B0aW9ucyk7XG5cbiAgICByZXR1cm4gQ29tcG9uZW50O1xufVxuXG4iLCIvKipcbiAqIEBmaWxlIGVudHJ5XG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuZXhwb3J0IHtkZWZhdWx0IGFzIGRlZmluZUNvbXBvbmVudH0gZnJvbSAnLi9kZWZpbmUtY29tcG9uZW50JztcbiJdLCJzb3VyY2VSb290IjoiIn0=