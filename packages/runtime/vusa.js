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
/**
 * @file 一些工具函数
 * @author cxtom(cxtom2008@gmail.com)
 */

/**
 * Mix properties into target object.
 */
function extend(to, from) {
  for (const key in from) {
    to[key] = from[key];
  }

  return to;
}
/**
 * Merge an Array of Objects into a single Object.
 */

function toObject(arr) {
  const res = {};

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }

  return res;
}
/**
 * Create a cached version of a pure function.
 */

function cached(fn) {
  const cache = Object.create(null);
  return function cachedFn(str) {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}
/**
 * Hyphenate a camelCase string.
 */

const hyphenateRE = /([^-])([A-Z])/g;
const hyphenate = cached(str => {
  return str.replace(hyphenateRE, '$1-$2').replace(hyphenateRE, '$1-$2').toLowerCase();
});
// CONCATENATED MODULE: ./src/runtime/merge-class.js
/**
 * @file merge class
 * @author cxtom(cxtom2008@gmail.com)
 */
function string(cls = '') {
  if (!cls) {
    return '';
  }

  return cls.split(' ').reduce((prev, name) => {
    if (!name) {
      return prev;
    }

    return { ...prev,
      [name]: 1
    };
  }, {});
}

function object(cls = {}) {
  return Object.keys(cls).reduce((prev, key) => {
    if (!cls[key]) {
      return prev;
    }

    return { ...prev,
      ...string(key)
    };
  }, {});
}

function array(cls = []) {
  let clazz = {};

  for (let i = 0, len = cls.length; i < len; i++) {
    const element = cls[i];

    if (!element) {
      continue;
    }

    if (typeof element === 'string') {
      clazz = { ...clazz,
        ...string(element)
      };
    } else if (Array.isArray(element)) {
      clazz = { ...clazz,
        ...array(element)
      };
    } else {
      clazz = { ...clazz,
        ...object(element)
      };
    }
  }

  return clazz;
}

/* harmony default export */ var merge_class = (function (staticClass = '', cls = {}) {
  return Object.keys(array([staticClass, cls])).join(' ');
});
// CONCATENATED MODULE: ./src/runtime/merge-style.js
/**
 * @file merge style
 * @author cxtom(cxtom2008@gmail.com)
 */

const parseStyleText = cached(function (cssText) {
  const res = {};
  const listDelimiter = /;(?![^(]*\))/g;
  const propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res;
}); // normalize possible array / string values into Object

function normalizeStyleBinding(bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle);
  }

  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle);
  }

  return bindingStyle;
}

/* harmony default export */ var merge_style = (function (staticStyle, style, vShow = true) {
  style = normalizeStyleBinding(style);

  if (!vShow) {
    style.display = 'none';
  }

  return staticStyle ? extend(staticStyle, style) : style;
});
// CONCATENATED MODULE: ./src/runtime/loop-expression.js
/**
 * @file loop expression
 * @author cxtom(cxtom2008@gmail.com)
 */

const toArray = cached(function (n) {
  const value = new Array(n);

  for (let i = 0; i < n; i++) {
    value[i] = i + 1;
  }

  return value;
});
/* harmony default export */ var loop_expression = (function (value) {
  if (!isNaN(value)) {
    const n = +value;
    value = toArray(n);
  }

  return value;
});
// CONCATENATED MODULE: ./src/runtime/define-component.js
/**
 * @file component
 * @author cxtom(cxtom2008@gmail.com)
 */





const lifeCycleMap = {
  beforeCreate: 'compiled',
  mounted: 'attached',
  created: 'inited',
  beforeMount: 'created',
  beforeDestroy: 'detached',
  destroy: 'disposed',
  updated: 'updated',
  beforeUpdate: 'updated'
};
function define(options) {
  /* eslint-disable fecs-camelcase */
  const sanOptions = {
    _mc: merge_class,
    _ms: merge_style,
    _l: loop_expression,
    template: options.__santemplate
  };
  /* eslint-enable fecs-camelcase */

  ['filters', 'computed', 'watch'].forEach(key => {
    if (options[key]) {
      sanOptions[key] = options[key];
    }
  });

  if (options.methods) {
    Object.keys(options.methods).forEach(key => {
      sanOptions[key] = options.methods[key];
    });
  }

  Object.keys(lifeCycleMap).forEach(hook => {
    if (options[hook]) {
      sanOptions[lifeCycleMap[hook]] = options[hook];
    }
  });

  if (typeof options.data === 'function') {
    sanOptions.initData = options.data;
  } else if (options.data) {
    sanOptions.initData = function () {
      return options.data;
    };
  }

  if (options.components) {
    sanOptions.components = Object.keys(options.components).reduce((prev, key) => {
      prev[key] = prev[hyphenate(key)] = define(options.components[key]);
      return prev;
    }, {});
  }

  console.log(sanOptions);
  const Component = Object(external_san_["defineComponent"])(sanOptions);
  return Component;
}
// CONCATENATED MODULE: ./src/runtime/index.js
/* concated harmony reexport defineComponent */__webpack_require__.d(__webpack_exports__, "defineComponent", function() { return define; });
/**
 * @file entry
 * @author cxtom(cxtom2008@gmail.com)
 */


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzYW5cIiIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvbWVyZ2UtY2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvbWVyZ2Utc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvbG9vcC1leHByZXNzaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lL2RlZmluZS1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvaW5kZXguanMiXSwibmFtZXMiOlsiZXh0ZW5kIiwidG8iLCJmcm9tIiwia2V5IiwidG9PYmplY3QiLCJhcnIiLCJyZXMiLCJpIiwibGVuZ3RoIiwiY2FjaGVkIiwiZm4iLCJjYWNoZSIsIk9iamVjdCIsImNyZWF0ZSIsImNhY2hlZEZuIiwic3RyIiwiaGl0IiwiaHlwaGVuYXRlUkUiLCJoeXBoZW5hdGUiLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJzdHJpbmciLCJjbHMiLCJzcGxpdCIsInJlZHVjZSIsInByZXYiLCJuYW1lIiwib2JqZWN0Iiwia2V5cyIsImFycmF5IiwiY2xhenoiLCJsZW4iLCJlbGVtZW50IiwiQXJyYXkiLCJpc0FycmF5Iiwic3RhdGljQ2xhc3MiLCJqb2luIiwicGFyc2VTdHlsZVRleHQiLCJjc3NUZXh0IiwibGlzdERlbGltaXRlciIsInByb3BlcnR5RGVsaW1pdGVyIiwiZm9yRWFjaCIsIml0ZW0iLCJ0bXAiLCJ0cmltIiwibm9ybWFsaXplU3R5bGVCaW5kaW5nIiwiYmluZGluZ1N0eWxlIiwic3RhdGljU3R5bGUiLCJzdHlsZSIsInZTaG93IiwiZGlzcGxheSIsInRvQXJyYXkiLCJuIiwidmFsdWUiLCJpc05hTiIsImxpZmVDeWNsZU1hcCIsImJlZm9yZUNyZWF0ZSIsIm1vdW50ZWQiLCJjcmVhdGVkIiwiYmVmb3JlTW91bnQiLCJiZWZvcmVEZXN0cm95IiwiZGVzdHJveSIsInVwZGF0ZWQiLCJiZWZvcmVVcGRhdGUiLCJkZWZpbmUiLCJvcHRpb25zIiwic2FuT3B0aW9ucyIsIl9tYyIsIm1lcmdlQ2xhc3MiLCJfbXMiLCJtZXJnZVN0eWxlIiwiX2wiLCJsb29wRXhwcmVzc2lvbiIsInRlbXBsYXRlIiwiX19zYW50ZW1wbGF0ZSIsIm1ldGhvZHMiLCJob29rIiwiZGF0YSIsImluaXREYXRhIiwiY29tcG9uZW50cyIsImNvbnNvbGUiLCJsb2ciLCJDb21wb25lbnQiLCJkZWZpbmVDb21wb25lbnQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7O0FDbEZBLGdEOzs7Ozs7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d0NBQWUsQ0FBQ2pCLFVBQUQsQ0FBakM7QUFFQSxTQUFPZ0IsU0FBUDtBQUNILEM7O0FDMUVEO0FBQUEiLCJmaWxlIjoidnVzYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInNhblwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJzYW5cIl0sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGZhY3RvcnkocmVxdWlyZShcInNhblwiKSkgOiBmYWN0b3J5KHJvb3RbXCJzYW5cIl0pO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkod2luZG93LCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX18wX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzBfXzsiLCIvKipcbiAqIEBmaWxlIOS4gOS6m+W3peWFt+WHveaVsFxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbi8qKlxuICogTWl4IHByb3BlcnRpZXMgaW50byB0YXJnZXQgb2JqZWN0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXh0ZW5kKHRvLCBmcm9tKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gZnJvbSkge1xuICAgICAgICB0b1trZXldID0gZnJvbVtrZXldO1xuICAgIH1cbiAgICByZXR1cm4gdG87XG59XG5cbi8qKlxuICogTWVyZ2UgYW4gQXJyYXkgb2YgT2JqZWN0cyBpbnRvIGEgc2luZ2xlIE9iamVjdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvT2JqZWN0KGFycikge1xuICAgIGNvbnN0IHJlcyA9IHt9O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChhcnJbaV0pIHtcbiAgICAgICAgICAgIGV4dGVuZChyZXMsIGFycltpXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cblxuXG4vKipcbiAqIENyZWF0ZSBhIGNhY2hlZCB2ZXJzaW9uIG9mIGEgcHVyZSBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhY2hlZChmbikge1xuICAgIGNvbnN0IGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gY2FjaGVkRm4oc3RyKSB7XG4gICAgICAgIGNvbnN0IGhpdCA9IGNhY2hlW3N0cl07XG4gICAgICAgIHJldHVybiBoaXQgfHwgKGNhY2hlW3N0cl0gPSBmbihzdHIpKTtcbiAgICB9O1xufVxuXG4vKipcbiAqIEh5cGhlbmF0ZSBhIGNhbWVsQ2FzZSBzdHJpbmcuXG4gKi9cbmNvbnN0IGh5cGhlbmF0ZVJFID0gLyhbXi1dKShbQS1aXSkvZztcbmV4cG9ydCBjb25zdCBoeXBoZW5hdGUgPSBjYWNoZWQoKHN0cikgPT4ge1xuICAgIHJldHVybiBzdHJcbiAgICAgICAgLnJlcGxhY2UoaHlwaGVuYXRlUkUsICckMS0kMicpXG4gICAgICAgIC5yZXBsYWNlKGh5cGhlbmF0ZVJFLCAnJDEtJDInKVxuICAgICAgICAudG9Mb3dlckNhc2UoKTtcbn0pO1xuIiwiLyoqXG4gKiBAZmlsZSBtZXJnZSBjbGFzc1xuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmZ1bmN0aW9uIHN0cmluZyhjbHMgPSAnJykge1xuICAgIGlmICghY2xzKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuIGNsc1xuICAgICAgICAuc3BsaXQoJyAnKVxuICAgICAgICAucmVkdWNlKChwcmV2LCBuYW1lKSA9PiB7XG4gICAgICAgICAgICBpZiAoIW5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgICAgICBbbmFtZV06IDFcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sIHt9KTtcbn1cblxuZnVuY3Rpb24gb2JqZWN0KGNscyA9IHt9KSB7XG4gICAgcmV0dXJuIE9iamVjdFxuICAgICAgICAua2V5cyhjbHMpXG4gICAgICAgIC5yZWR1Y2UoKHByZXYsIGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFjbHNba2V5XSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgICAgIC4uLnN0cmluZyhrZXkpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LCB7fSk7XG59XG5cbmZ1bmN0aW9uIGFycmF5KGNscyA9IFtdKSB7XG4gICAgbGV0IGNsYXp6ID0ge307XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGNscy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gY2xzW2ldO1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGNsYXp6ID0ge1xuICAgICAgICAgICAgICAgIC4uLmNsYXp6LFxuICAgICAgICAgICAgICAgIC4uLnN0cmluZyhlbGVtZW50KVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KGVsZW1lbnQpKSB7XG4gICAgICAgICAgICBjbGF6eiA9IHtcbiAgICAgICAgICAgICAgICAuLi5jbGF6eixcbiAgICAgICAgICAgICAgICAuLi5hcnJheShlbGVtZW50KVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNsYXp6ID0ge1xuICAgICAgICAgICAgICAgIC4uLmNsYXp6LFxuICAgICAgICAgICAgICAgIC4uLm9iamVjdChlbGVtZW50KVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY2xheno7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0aWNDbGFzcyA9ICcnLCBjbHMgPSB7fSkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhhcnJheShbc3RhdGljQ2xhc3MsIGNsc10pKS5qb2luKCcgJyk7XG59XG4iLCIvKipcbiAqIEBmaWxlIG1lcmdlIHN0eWxlXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHtjYWNoZWQsIGV4dGVuZCwgdG9PYmplY3R9IGZyb20gJy4uL3NoYXJlZC91dGlsJztcblxuY29uc3QgcGFyc2VTdHlsZVRleHQgPSBjYWNoZWQoZnVuY3Rpb24gKGNzc1RleHQpIHtcbiAgICBjb25zdCByZXMgPSB7fTtcbiAgICBjb25zdCBsaXN0RGVsaW1pdGVyID0gLzsoPyFbXihdKlxcKSkvZztcbiAgICBjb25zdCBwcm9wZXJ0eURlbGltaXRlciA9IC86KC4rKS87XG4gICAgY3NzVGV4dC5zcGxpdChsaXN0RGVsaW1pdGVyKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICB2YXIgdG1wID0gaXRlbS5zcGxpdChwcm9wZXJ0eURlbGltaXRlcik7XG4gICAgICAgICAgICB0bXAubGVuZ3RoID4gMSAmJiAocmVzW3RtcFswXS50cmltKCldID0gdG1wWzFdLnRyaW0oKSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzO1xufSk7XG5cbi8vIG5vcm1hbGl6ZSBwb3NzaWJsZSBhcnJheSAvIHN0cmluZyB2YWx1ZXMgaW50byBPYmplY3RcbmZ1bmN0aW9uIG5vcm1hbGl6ZVN0eWxlQmluZGluZyhiaW5kaW5nU3R5bGUpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShiaW5kaW5nU3R5bGUpKSB7XG4gICAgICAgIHJldHVybiB0b09iamVjdChiaW5kaW5nU3R5bGUpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGJpbmRpbmdTdHlsZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlU3R5bGVUZXh0KGJpbmRpbmdTdHlsZSk7XG4gICAgfVxuICAgIHJldHVybiBiaW5kaW5nU3R5bGU7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRpY1N0eWxlLCBzdHlsZSwgdlNob3cgPSB0cnVlKSB7XG4gICAgc3R5bGUgPSBub3JtYWxpemVTdHlsZUJpbmRpbmcoc3R5bGUpO1xuICAgIGlmICghdlNob3cpIHtcbiAgICAgICAgc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gICAgcmV0dXJuIHN0YXRpY1N0eWxlXG4gICAgICAgID8gZXh0ZW5kKHN0YXRpY1N0eWxlLCBzdHlsZSlcbiAgICAgICAgOiBzdHlsZTtcbn1cbiIsIi8qKlxuICogQGZpbGUgbG9vcCBleHByZXNzaW9uXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHtjYWNoZWR9IGZyb20gJy4uL3NoYXJlZC91dGlsJztcblxuY29uc3QgdG9BcnJheSA9IGNhY2hlZChmdW5jdGlvbiAobikge1xuICAgIGNvbnN0IHZhbHVlID0gbmV3IEFycmF5KG4pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgIHZhbHVlW2ldID0gaSArIDE7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAoIWlzTmFOKHZhbHVlKSkge1xuICAgICAgICBjb25zdCBuID0gK3ZhbHVlO1xuICAgICAgICB2YWx1ZSA9IHRvQXJyYXkobik7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn1cblxuIiwiLyoqXG4gKiBAZmlsZSBjb21wb25lbnRcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQge2RlZmluZUNvbXBvbmVudCwgaW5oZXJpdHN9IGZyb20gJ3Nhbic7XG5pbXBvcnQge2V4dGVuZCwgaHlwaGVuYXRlfSBmcm9tICcuLi9zaGFyZWQvdXRpbCc7XG5pbXBvcnQgbWVyZ2VDbGFzcyBmcm9tICcuL21lcmdlLWNsYXNzJztcbmltcG9ydCBtZXJnZVN0eWxlIGZyb20gJy4vbWVyZ2Utc3R5bGUnO1xuaW1wb3J0IGxvb3BFeHByZXNzaW9uIGZyb20gJy4vbG9vcC1leHByZXNzaW9uJztcblxuY29uc3QgbGlmZUN5Y2xlTWFwID0ge1xuICAgIGJlZm9yZUNyZWF0ZTogJ2NvbXBpbGVkJyxcbiAgICBtb3VudGVkOiAnYXR0YWNoZWQnLFxuICAgIGNyZWF0ZWQ6ICdpbml0ZWQnLFxuICAgIGJlZm9yZU1vdW50OiAnY3JlYXRlZCcsXG4gICAgYmVmb3JlRGVzdHJveTogJ2RldGFjaGVkJyxcbiAgICBkZXN0cm95OiAnZGlzcG9zZWQnLFxuICAgIHVwZGF0ZWQ6ICd1cGRhdGVkJyxcbiAgICBiZWZvcmVVcGRhdGU6ICd1cGRhdGVkJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVmaW5lKG9wdGlvbnMpIHtcblxuICAgIC8qIGVzbGludC1kaXNhYmxlIGZlY3MtY2FtZWxjYXNlICovXG4gICAgY29uc3Qgc2FuT3B0aW9ucyA9IHtcbiAgICAgICAgX21jOiBtZXJnZUNsYXNzLFxuICAgICAgICBfbXM6IG1lcmdlU3R5bGUsXG4gICAgICAgIF9sOiBsb29wRXhwcmVzc2lvbixcbiAgICAgICAgdGVtcGxhdGU6IG9wdGlvbnMuX19zYW50ZW1wbGF0ZVxuICAgIH07XG4gICAgLyogZXNsaW50LWVuYWJsZSBmZWNzLWNhbWVsY2FzZSAqL1xuXG4gICAgWydmaWx0ZXJzJywgJ2NvbXB1dGVkJywgJ3dhdGNoJ10uZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBpZiAob3B0aW9uc1trZXldKSB7XG4gICAgICAgICAgICBzYW5PcHRpb25zW2tleV0gPSBvcHRpb25zW2tleV07XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChvcHRpb25zLm1ldGhvZHMpIHtcbiAgICAgICAgT2JqZWN0LmtleXMob3B0aW9ucy5tZXRob2RzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBzYW5PcHRpb25zW2tleV0gPSBvcHRpb25zLm1ldGhvZHNba2V5XTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXMobGlmZUN5Y2xlTWFwKS5mb3JFYWNoKGhvb2sgPT4ge1xuICAgICAgICBpZiAob3B0aW9uc1tob29rXSkge1xuICAgICAgICAgICAgc2FuT3B0aW9uc1tsaWZlQ3ljbGVNYXBbaG9va11dID0gb3B0aW9uc1tob29rXTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmRhdGEgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgc2FuT3B0aW9ucy5pbml0RGF0YSA9IG9wdGlvbnMuZGF0YTtcbiAgICB9XG4gICAgZWxzZSBpZiAob3B0aW9ucy5kYXRhKSB7XG4gICAgICAgIHNhbk9wdGlvbnMuaW5pdERhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5kYXRhO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmNvbXBvbmVudHMpIHtcbiAgICAgICAgc2FuT3B0aW9ucy5jb21wb25lbnRzID0gT2JqZWN0XG4gICAgICAgICAgICAua2V5cyhvcHRpb25zLmNvbXBvbmVudHMpXG4gICAgICAgICAgICAucmVkdWNlKChwcmV2LCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBwcmV2W2tleV0gPSBwcmV2W2h5cGhlbmF0ZShrZXkpXSA9IGRlZmluZShvcHRpb25zLmNvbXBvbmVudHNba2V5XSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICAgICAgICB9LCB7fSk7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coc2FuT3B0aW9ucyk7XG5cbiAgICBjb25zdCBDb21wb25lbnQgPSBkZWZpbmVDb21wb25lbnQoc2FuT3B0aW9ucyk7XG5cbiAgICByZXR1cm4gQ29tcG9uZW50O1xufVxuXG4iLCIvKipcbiAqIEBmaWxlIGVudHJ5XG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuZXhwb3J0IHtkZWZhdWx0IGFzIGRlZmluZUNvbXBvbmVudH0gZnJvbSAnLi9kZWZpbmUtY29tcG9uZW50JztcbiJdLCJzb3VyY2VSb290IjoiIn0=