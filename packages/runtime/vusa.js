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

      switch (nodeType) {
        case 4:
        case 3:
          ref = element.aNode.directives.ref;

          if (ref && Object(external_san_["evalExpr"])(ref.value, element.scope, owner) === name) {
            return nodeType === 4 ? element.el : element.children.map(elementTraversal);
          }

          break;

        case 5:
          ref = element.source.directives.ref;

          if (ref && Object(external_san_["evalExpr"])(ref.value, element.scope, owner) === name) {
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
      var _loop = function _loop(i, len) {
        var r = refs[i];
        Object.defineProperty(me.$refs, r.name, {
          enumerable: true,
          get: function get() {
            return r.root ? me.el : me.ref(r.name);
          }
        });
      };

      for (var i = 0, len = refs.length; i < len; i++) {
        _loop(i, len);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzYW5cIiIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvbWVyZ2UtY2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvbWVyZ2Utc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUvbG9vcC1leHByZXNzaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lL3JlZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcnVudGltZS9kZWZpbmUtY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lL2luZGV4LmpzIl0sIm5hbWVzIjpbImV4dGVuZCIsInRvIiwiZnJvbSIsImtleSIsInRvT2JqZWN0IiwiYXJyIiwicmVzIiwiaSIsImxlbmd0aCIsImNhY2hlZCIsImZuIiwiY2FjaGUiLCJPYmplY3QiLCJjcmVhdGUiLCJjYWNoZWRGbiIsInN0ciIsImhpdCIsImh5cGhlbmF0ZVJFIiwiaHlwaGVuYXRlIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwiY2FtZWxpemUiLCJfIiwiYyIsInRvVXBwZXJDYXNlIiwic3RyaW5nIiwiY2xzIiwic3BsaXQiLCJyZWR1Y2UiLCJwcmV2IiwibmFtZSIsIm9iamVjdCIsImtleXMiLCJhcnJheSIsImNsYXp6IiwibGVuIiwiZWxlbWVudCIsIkFycmF5IiwiaXNBcnJheSIsInN0YXRpY0NsYXNzIiwiam9pbiIsInBhcnNlU3R5bGVUZXh0IiwiY3NzVGV4dCIsImxpc3REZWxpbWl0ZXIiLCJwcm9wZXJ0eURlbGltaXRlciIsImZvckVhY2giLCJpdGVtIiwidG1wIiwidHJpbSIsIm5vcm1hbGl6ZVN0eWxlQmluZGluZyIsImJpbmRpbmdTdHlsZSIsInN0YXRpY1N0eWxlIiwic3R5bGUiLCJ2U2hvdyIsImRpc3BsYXkiLCJ0b0FycmF5IiwibiIsInZhbHVlIiwiaXNOYU4iLCJvd25lciIsImNoaWxkcmVuVHJhdmVyc2FsIiwiY2hpbGRyZW4iLCJyZWZUYXJnZXQiLCJlbGVtZW50VHJhdmVyc2FsIiwibm9kZVR5cGUiLCJyZWYiLCJhTm9kZSIsImRpcmVjdGl2ZXMiLCJldmFsRXhwciIsInNjb3BlIiwiZWwiLCJtYXAiLCJzb3VyY2UiLCJzbG90Q2hpbGRyZW4iLCJsaWZlQ3ljbGVNYXAiLCJiZWZvcmVDcmVhdGUiLCJtb3VudGVkIiwiY3JlYXRlZCIsImJlZm9yZU1vdW50IiwiYmVmb3JlRGVzdHJveSIsImRlc3Ryb3kiLCJ1cGRhdGVkIiwiYmVmb3JlVXBkYXRlIiwiZGVmYXVsdFNhbk9wdGlvbnMiLCJfbWMiLCJtZXJnZUNsYXNzIiwiX21zIiwibWVyZ2VTdHlsZSIsIl9sIiwibG9vcEV4cHJlc3Npb24iLCJmaWx0ZXJzIiwianNvbiIsIm9iaiIsIkpTT04iLCJzdHJpbmdpZnkiLCJsb3dlciIsInVwcGVyIiwiTUFUSF9NRVRIT0QiLCJhcmdzIiwiTWF0aCIsImFwcGx5IiwiYXJyYXlfc2xpY2UiLCJzdGFydCIsImVuZCIsInNsaWNlIiwiYXJyYXlfam9pbiIsInNlcCIsInN0cl9wb3MiLCJtYXRjaCIsImluZGV4T2YiLCJvYmplY3RfZnJlZXplIiwiZnJlZXplIiwiZ2V0Q29tcG9uZW50VHlwZSIsImRhdGEiLCJob3RzcG90IiwicHJvcHMiLCJpcyIsImNvbXBvbmVudHMiLCJ0YWdOYW1lIiwiaXNWYWx1ZSIsImV4cHIiLCJzcGxpY2UiLCJkZWZpbmUiLCJvcHRpb25zIiwic2FuT3B0aW9ucyIsInRlbXBsYXRlIiwiX19zYW50ZW1wbGF0ZSIsIl9fc2FuYU5vZGUiLCJhc3NpZ24iLCJtZXRob2RzIiwiaG9vayIsInJlZnMiLCJfX3NhblJlZnMiLCJjcmVhdGVkSG9vayIsIm1lIiwiJHJlZnMiLCJyIiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0Iiwicm9vdCIsImNhbGwiLCJpbml0RGF0YSIsImJpbmREYXRhIiwiX3NiaW5kRGF0YSIsInByb3BLZXlzIiwiZGVmYXVsdFByb3BzIiwicCIsIkNvbXBvbmVudCIsImRlZmluZUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7QUNsRkEsZ0Q7Ozs7Ozs7Ozs7Ozs7QUNRTyxTQUFTQSxNQUFULENBQWdCQyxFQUFoQixFQUFvQkMsSUFBcEIsRUFBMEI7QUFDN0IsT0FBSyxJQUFNQyxHQUFYLElBQWtCRCxJQUFsQixFQUF3QjtBQUNwQkQsTUFBRSxDQUFDRSxHQUFELENBQUYsR0FBVUQsSUFBSSxDQUFDQyxHQUFELENBQWQ7QUFDSDs7QUFDRCxTQUFPRixFQUFQO0FBQ0g7QUFLTSxTQUFTRyxRQUFULENBQWtCQyxHQUFsQixFQUF1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RW5CekYsTUFGbUIsQ0FFWixVQUFDQyxJQUFELEVBQU8xQixHQUFQLEVBQWU7QUFDbkIwQixVQUFJLENBQUMxQixHQUFELENBQUosR0FBWTBCLElBQUksQ0FBQ1gsU0FBUyxDQUFDZixHQUFELENBQVYsQ0FBSixHQUF1QnVILE1BQU0sQ0FBQ0MsT0FBTyxDQUFDTixVQUFSLENBQW1CbEgsR0FBbkIsQ0FBRCxDQUF6QztBQUNBLGFBQU8wQixJQUFQO0FBQ0gsS0FMbUIsRUFLakIsRUFMaUIsQ0FBeEI7QUFNSDs7QUFFRCxNQUFNdUgsU0FBUyxHQUFHQyx3Q0FBZSxDQUFDekIsVUFBRCxDQUFqQztBQUVBLFNBQU93QixTQUFQO0FBQ0gsQzs7QUM3S0QiLCJmaWxlIjoidnVzYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInNhblwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJzYW5cIl0sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGZhY3RvcnkocmVxdWlyZShcInNhblwiKSkgOiBmYWN0b3J5KHJvb3RbXCJzYW5cIl0pO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkod2luZG93LCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX18wX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzBfXzsiLCIvKipcbiAqIEBmaWxlIOS4gOS6m+W3peWFt+WHveaVsFxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbi8qKlxuICogTWl4IHByb3BlcnRpZXMgaW50byB0YXJnZXQgb2JqZWN0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXh0ZW5kKHRvLCBmcm9tKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gZnJvbSkge1xuICAgICAgICB0b1trZXldID0gZnJvbVtrZXldO1xuICAgIH1cbiAgICByZXR1cm4gdG87XG59XG5cbi8qKlxuICogTWVyZ2UgYW4gQXJyYXkgb2YgT2JqZWN0cyBpbnRvIGEgc2luZ2xlIE9iamVjdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvT2JqZWN0KGFycikge1xuICAgIGNvbnN0IHJlcyA9IHt9O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChhcnJbaV0pIHtcbiAgICAgICAgICAgIGV4dGVuZChyZXMsIGFycltpXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cblxuXG4vKipcbiAqIENyZWF0ZSBhIGNhY2hlZCB2ZXJzaW9uIG9mIGEgcHVyZSBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhY2hlZChmbikge1xuICAgIGNvbnN0IGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gY2FjaGVkRm4oc3RyKSB7XG4gICAgICAgIGNvbnN0IGhpdCA9IGNhY2hlW3N0cl07XG4gICAgICAgIHJldHVybiBoaXQgfHwgKGNhY2hlW3N0cl0gPSBmbihzdHIpKTtcbiAgICB9O1xufVxuXG4vKipcbiAqIEh5cGhlbmF0ZSBhIGNhbWVsQ2FzZSBzdHJpbmcuXG4gKi9cbmNvbnN0IGh5cGhlbmF0ZVJFID0gLyhbXi1dKShbQS1aXSkvZztcbmV4cG9ydCBjb25zdCBoeXBoZW5hdGUgPSBjYWNoZWQoKHN0cikgPT4ge1xuICAgIHJldHVybiBzdHJcbiAgICAgICAgLnJlcGxhY2UoaHlwaGVuYXRlUkUsICckMS0kMicpXG4gICAgICAgIC5yZXBsYWNlKGh5cGhlbmF0ZVJFLCAnJDEtJDInKVxuICAgICAgICAudG9Mb3dlckNhc2UoKTtcbn0pO1xuXG5leHBvcnQgY29uc3QgY2FtZWxpemUgPSBzdHIgPT4gc3RyLnJlcGxhY2UoLy0oXFx3KS9nLCAoXywgYykgPT4gKGMgPyBjLnRvVXBwZXJDYXNlKCkgOiAnJykpO1xuIiwiLyoqXG4gKiBAZmlsZSBtZXJnZSBjbGFzc1xuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmZ1bmN0aW9uIHN0cmluZyhjbHMgPSAnJykge1xuICAgIGlmICghY2xzKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuIGNsc1xuICAgICAgICAuc3BsaXQoJyAnKVxuICAgICAgICAucmVkdWNlKChwcmV2LCBuYW1lKSA9PiB7XG4gICAgICAgICAgICBpZiAoIW5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgICAgICBbbmFtZV06IDFcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sIHt9KTtcbn1cblxuZnVuY3Rpb24gb2JqZWN0KGNscyA9IHt9KSB7XG4gICAgcmV0dXJuIE9iamVjdFxuICAgICAgICAua2V5cyhjbHMpXG4gICAgICAgIC5yZWR1Y2UoKHByZXYsIGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFjbHNba2V5XSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgICAgIC4uLnN0cmluZyhrZXkpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LCB7fSk7XG59XG5cbmZ1bmN0aW9uIGFycmF5KGNscyA9IFtdKSB7XG4gICAgbGV0IGNsYXp6ID0ge307XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGNscy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gY2xzW2ldO1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGNsYXp6ID0ge1xuICAgICAgICAgICAgICAgIC4uLmNsYXp6LFxuICAgICAgICAgICAgICAgIC4uLnN0cmluZyhlbGVtZW50KVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KGVsZW1lbnQpKSB7XG4gICAgICAgICAgICBjbGF6eiA9IHtcbiAgICAgICAgICAgICAgICAuLi5jbGF6eixcbiAgICAgICAgICAgICAgICAuLi5hcnJheShlbGVtZW50KVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNsYXp6ID0ge1xuICAgICAgICAgICAgICAgIC4uLmNsYXp6LFxuICAgICAgICAgICAgICAgIC4uLm9iamVjdChlbGVtZW50KVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY2xheno7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0aWNDbGFzcyA9ICcnLCBjbHMgPSB7fSkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhhcnJheShbc3RhdGljQ2xhc3MsIGNsc10pKS5qb2luKCcgJyk7XG59XG4iLCIvKipcbiAqIEBmaWxlIG1lcmdlIHN0eWxlXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHtjYWNoZWQsIGV4dGVuZCwgdG9PYmplY3R9IGZyb20gJy4uL3NoYXJlZC91dGlsJztcblxuY29uc3QgcGFyc2VTdHlsZVRleHQgPSBjYWNoZWQoZnVuY3Rpb24gKGNzc1RleHQpIHtcbiAgICBjb25zdCByZXMgPSB7fTtcbiAgICBjb25zdCBsaXN0RGVsaW1pdGVyID0gLzsoPyFbXihdKlxcKSkvZztcbiAgICBjb25zdCBwcm9wZXJ0eURlbGltaXRlciA9IC86KC4rKS87XG4gICAgY3NzVGV4dC5zcGxpdChsaXN0RGVsaW1pdGVyKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICB2YXIgdG1wID0gaXRlbS5zcGxpdChwcm9wZXJ0eURlbGltaXRlcik7XG4gICAgICAgICAgICB0bXAubGVuZ3RoID4gMSAmJiAocmVzW3RtcFswXS50cmltKCldID0gdG1wWzFdLnRyaW0oKSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzO1xufSk7XG5cbi8vIG5vcm1hbGl6ZSBwb3NzaWJsZSBhcnJheSAvIHN0cmluZyB2YWx1ZXMgaW50byBPYmplY3RcbmZ1bmN0aW9uIG5vcm1hbGl6ZVN0eWxlQmluZGluZyhiaW5kaW5nU3R5bGUpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShiaW5kaW5nU3R5bGUpKSB7XG4gICAgICAgIHJldHVybiB0b09iamVjdChiaW5kaW5nU3R5bGUpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGJpbmRpbmdTdHlsZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlU3R5bGVUZXh0KGJpbmRpbmdTdHlsZSk7XG4gICAgfVxuICAgIHJldHVybiBiaW5kaW5nU3R5bGU7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRpY1N0eWxlLCBzdHlsZSwgdlNob3cgPSB0cnVlKSB7XG4gICAgc3R5bGUgPSBub3JtYWxpemVTdHlsZUJpbmRpbmcoc3R5bGUpO1xuICAgIGlmICghdlNob3cpIHtcbiAgICAgICAgc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gICAgcmV0dXJuIHN0YXRpY1N0eWxlXG4gICAgICAgID8gZXh0ZW5kKHN0YXRpY1N0eWxlLCBzdHlsZSlcbiAgICAgICAgOiBzdHlsZTtcbn1cbiIsIi8qKlxuICogQGZpbGUgbG9vcCBleHByZXNzaW9uXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHtjYWNoZWR9IGZyb20gJy4uL3NoYXJlZC91dGlsJztcblxuY29uc3QgdG9BcnJheSA9IGNhY2hlZChmdW5jdGlvbiAobikge1xuICAgIGNvbnN0IHZhbHVlID0gbmV3IEFycmF5KG4pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgIHZhbHVlW2ldID0gaSArIDE7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAoIWlzTmFOKHZhbHVlKSkge1xuICAgICAgICBjb25zdCBuID0gK3ZhbHVlO1xuICAgICAgICB2YWx1ZSA9IHRvQXJyYXkobik7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn1cblxuIiwiLyoqXG4gKiBAZmlsZSBzYW4gcmVmIHJld3JpdGVcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQge2V2YWxFeHByfSBmcm9tICdzYW4nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAobmFtZSkge1xuXG4gICAgY29uc3Qgb3duZXIgPSB0aGlzO1xuXG4gICAgZnVuY3Rpb24gY2hpbGRyZW5UcmF2ZXJzYWwoY2hpbGRyZW4pIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcmVmVGFyZ2V0ID0gZWxlbWVudFRyYXZlcnNhbChjaGlsZHJlbltpXSk7XG4gICAgICAgICAgICBpZiAocmVmVGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlZlRhcmdldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVsZW1lbnRUcmF2ZXJzYWwoZWxlbWVudCkge1xuICAgICAgICBjb25zdCBub2RlVHlwZSA9IGVsZW1lbnQubm9kZVR5cGU7XG4gICAgICAgIGlmIChub2RlVHlwZSA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZWZUYXJnZXQ7XG4gICAgICAgIGlmIChlbGVtZW50Lm93bmVyID09PSBvd25lcikge1xuICAgICAgICAgICAgbGV0IHJlZjtcbiAgICAgICAgICAgIHN3aXRjaCAobm9kZVR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICByZWYgPSBlbGVtZW50LmFOb2RlLmRpcmVjdGl2ZXMucmVmO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVmICYmIGV2YWxFeHByKHJlZi52YWx1ZSwgZWxlbWVudC5zY29wZSwgb3duZXIpID09PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbm9kZVR5cGUgPT09IDQgPyBlbGVtZW50LmVsIDogZWxlbWVudC5jaGlsZHJlbi5tYXAoZWxlbWVudFRyYXZlcnNhbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgIHJlZiA9IGVsZW1lbnQuc291cmNlLmRpcmVjdGl2ZXMucmVmO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVmICYmIGV2YWxFeHByKHJlZi52YWx1ZSwgZWxlbWVudC5zY29wZSwgb3duZXIpID09PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZWZUYXJnZXQgPSBlbGVtZW50LnNsb3RDaGlsZHJlbiAmJiBjaGlsZHJlblRyYXZlcnNhbChlbGVtZW50LnNsb3RDaGlsZHJlbik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVmVGFyZ2V0IHx8IGNoaWxkcmVuVHJhdmVyc2FsKGVsZW1lbnQuY2hpbGRyZW4pO1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZHJlblRyYXZlcnNhbCh0aGlzLmNoaWxkcmVuKTtcbn07XG4iLCIvKipcbiAqIEBmaWxlIGNvbXBvbmVudFxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCB7ZGVmaW5lQ29tcG9uZW50LCBpbmhlcml0cywgZXZhbEV4cHJ9IGZyb20gJ3Nhbic7XG5pbXBvcnQge2V4dGVuZCwgaHlwaGVuYXRlfSBmcm9tICcuLi9zaGFyZWQvdXRpbCc7XG5pbXBvcnQgbWVyZ2VDbGFzcyBmcm9tICcuL21lcmdlLWNsYXNzJztcbmltcG9ydCBtZXJnZVN0eWxlIGZyb20gJy4vbWVyZ2Utc3R5bGUnO1xuaW1wb3J0IGxvb3BFeHByZXNzaW9uIGZyb20gJy4vbG9vcC1leHByZXNzaW9uJztcbmltcG9ydCByZWYgZnJvbSAnLi9yZWYnO1xuXG5jb25zdCBsaWZlQ3ljbGVNYXAgPSB7XG4gICAgYmVmb3JlQ3JlYXRlOiAnY29tcGlsZWQnLFxuICAgIG1vdW50ZWQ6ICdhdHRhY2hlZCcsXG4gICAgY3JlYXRlZDogJ2luaXRlZCcsXG4gICAgYmVmb3JlTW91bnQ6ICdjcmVhdGVkJyxcbiAgICBiZWZvcmVEZXN0cm95OiAnZGV0YWNoZWQnLFxuICAgIGRlc3Ryb3k6ICdkaXNwb3NlZCcsXG4gICAgdXBkYXRlZDogJ3VwZGF0ZWQnLFxuICAgIGJlZm9yZVVwZGF0ZTogJ3VwZGF0ZWQnXG59O1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBmZWNzLWNhbWVsY2FzZSAqL1xuY29uc3QgZGVmYXVsdFNhbk9wdGlvbnMgPSB7XG4gICAgX21jOiBtZXJnZUNsYXNzLFxuICAgIF9tczogbWVyZ2VTdHlsZSxcbiAgICBfbDogbG9vcEV4cHJlc3Npb24sXG4gICAgZmlsdGVyczoge1xuICAgICAgICBqc29uKG9iaikge1xuICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGpzb24pO1xuICAgICAgICB9LFxuICAgICAgICBsb3dlcihzdHIpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHIudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfSxcbiAgICAgICAgdXBwZXIoc3RyKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5jb25zdCBNQVRIX01FVEhPRCA9IFtcbiAgICAnZmxvb3InLCAnY2VpbCcsICdyb3VuZCcsXG4gICAgJ2FicycsICdtYXgnLCAnbWluJywgJ3Bvdydcbl07XG5cbk1BVEhfTUVUSE9ELmZvckVhY2gobmFtZSA9PiB7XG4gICAgZGVmYXVsdFNhbk9wdGlvbnNbYG1hdGhfJHtuYW1lfWBdID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIE1hdGhbbmFtZV0uYXBwbHkoTWF0aCwgYXJncyk7XG4gICAgfTtcbn0pO1xuXG5kZWZhdWx0U2FuT3B0aW9ucy5hcnJheV9zbGljZSA9IGZ1bmN0aW9uIChhcnIsIHN0YXJ0LCBsZW4pIHtcbiAgICB2YXIgZW5kID0gbGVuID09IG51bGwgPyB2b2lkIDAgOiAobGVuID49IDAgPyAoc3RhcnQgKyBsZW4pIDogKGFyci5sZW5ndGggKyBsZW4pKTtcbiAgICByZXR1cm4gYXJyLnNsaWNlKHN0YXJ0LCBlbmQpO1xufTtcblxuZGVmYXVsdFNhbk9wdGlvbnMuYXJyYXlfam9pbiA9IGZ1bmN0aW9uIChhcnIsIHNlcCkge1xuICAgIHJldHVybiBhcnIuam9pbihzZXApO1xufTtcblxuZGVmYXVsdFNhbk9wdGlvbnMuc3RyX3BvcyA9IGZ1bmN0aW9uIChzdHIsIG1hdGNoKSB7XG4gICAgcmV0dXJuIHN0ci5pbmRleE9mKG1hdGNoKTtcbn07XG5cbmRlZmF1bHRTYW5PcHRpb25zLm9iamVjdF9mcmVlemUgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIE9iamVjdC5mcmVlemUob2JqKTtcbn07XG5cbmRlZmF1bHRTYW5PcHRpb25zLmdldENvbXBvbmVudFR5cGUgPSBmdW5jdGlvbiAoYU5vZGUsIGRhdGEpIHtcbiAgICBpZiAoYU5vZGUuaG90c3BvdC5wcm9wcy5pcyA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudHNbYU5vZGUudGFnTmFtZV07XG4gICAgfVxuXG4gICAgY29uc3QgaXMgPSBhTm9kZS5wcm9wc1thTm9kZS5ob3RzcG90LnByb3BzLmlzXTtcbiAgICBjb25zdCBpc1ZhbHVlID0gZXZhbEV4cHIoaXMuZXhwciwgZGF0YSk7XG4gICAgYU5vZGUudGFnTmFtZSA9IGlzVmFsdWU7XG4gICAgYU5vZGUucHJvcHMuc3BsaWNlKGlzLCAxKTtcbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnRzW2lzVmFsdWVdO1xufTtcblxuLyogZXNsaW50LWVuYWJsZSBmZWNzLWNhbWVsY2FzZSAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWZpbmUob3B0aW9ucykge1xuXG4gICAgY29uc3Qgc2FuT3B0aW9ucyA9IGV4dGVuZCh7XG4gICAgICAgIHRlbXBsYXRlOiBvcHRpb25zLl9fc2FudGVtcGxhdGUsXG4gICAgICAgIGFOb2RlOiBvcHRpb25zLl9fc2FuYU5vZGVcbiAgICB9LCBkZWZhdWx0U2FuT3B0aW9ucyk7XG5cbiAgICBpZiAob3B0aW9ucy5maWx0ZXJzKSB7XG4gICAgICAgIHNhbk9wdGlvbnMuZmlsdGVycyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICBzYW5PcHRpb25zLmZpbHRlcnMsXG4gICAgICAgICAgICBvcHRpb25zLmZpbHRlcnNcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBbJ2NvbXB1dGVkJywgJ3dhdGNoJ10uZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBpZiAob3B0aW9uc1trZXldKSB7XG4gICAgICAgICAgICBzYW5PcHRpb25zW2tleV0gPSBvcHRpb25zW2tleV07XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChvcHRpb25zLm1ldGhvZHMpIHtcbiAgICAgICAgT2JqZWN0LmtleXMob3B0aW9ucy5tZXRob2RzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBzYW5PcHRpb25zW2tleV0gPSBvcHRpb25zLm1ldGhvZHNba2V5XTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXMobGlmZUN5Y2xlTWFwKS5mb3JFYWNoKGhvb2sgPT4ge1xuICAgICAgICBpZiAob3B0aW9uc1tob29rXSkge1xuICAgICAgICAgICAgc2FuT3B0aW9uc1tsaWZlQ3ljbGVNYXBbaG9va11dID0gb3B0aW9uc1tob29rXTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgcmVmcyA9IG9wdGlvbnMuX19zYW5SZWZzO1xuICAgIGNvbnN0IGNyZWF0ZWRIb29rID0gc2FuT3B0aW9ucy5jcmVhdGVkO1xuICAgIHNhbk9wdGlvbnMuY3JlYXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgbWUgPSB0aGlzO1xuICAgICAgICB0aGlzLiRyZWZzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuICAgICAgICBpZiAocmVmcykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHJlZnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCByID0gcmVmc1tpXTtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobWUuJHJlZnMsIHIubmFtZSwge1xuICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gci5yb290ID8gbWUuZWwgOiBtZS5yZWYoci5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gb3ZlcndyaXRlIHNhbiBjb21wb25lbnQgYXBpIGZvciBzdXBwb3J0IHYtZm9yICsgcmVmXG4gICAgICAgICAgICBtZS5yZWYgPSByZWY7XG4gICAgICAgIH1cblxuICAgICAgICBjcmVhdGVkSG9vayAmJiBjcmVhdGVkSG9vay5jYWxsKHRoaXMpO1xuICAgIH07XG5cbiAgICBpZiAob3B0aW9ucy5kYXRhIHx8IG9wdGlvbnMucHJvcHMpIHtcbiAgICAgICAgc2FuT3B0aW9ucy5pbml0RGF0YSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgY29uc3QgYmluZERhdGEgPSB0aGlzLl9zYmluZERhdGEgfHwge307XG4gICAgICAgICAgICBjb25zdCBwcm9wS2V5cyA9IG9wdGlvbnMucHJvcHNcbiAgICAgICAgICAgICAgICA/IChBcnJheS5pc0FycmF5KG9wdGlvbnMucHJvcHMpID8gb3B0aW9ucy5wcm9wcyA6IE9iamVjdC5rZXlzKG9wdGlvbnMucHJvcHMpKVxuICAgICAgICAgICAgICAgIDogW107XG5cbiAgICAgICAgICAgIC8vIOm7mOiupOWxnuaAp1xuICAgICAgICAgICAgY29uc3QgZGVmYXVsdFByb3BzID0ge307XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5wcm9wcyAmJiAhQXJyYXkuaXNBcnJheShvcHRpb25zLnByb3BzKSkge1xuICAgICAgICAgICAgICAgIHByb3BLZXlzLmZvckVhY2gocCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgnZGVmYXVsdCcgaW4gb3B0aW9ucy5wcm9wc1twXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFByb3BzW3BdID0gdHlwZW9mIG9wdGlvbnMucHJvcHNbcF0uZGVmYXVsdCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gb3B0aW9ucy5wcm9wc1twXS5kZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG9wdGlvbnMucHJvcHNbcF0uZGVmYXVsdFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHR5cGVvZiBvcHRpb25zLmRhdGEgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICA/IG9wdGlvbnMuZGF0YS5jYWxsKE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRQcm9wcywgYmluZERhdGEpKVxuICAgICAgICAgICAgICAgIDogKG9wdGlvbnMuZGF0YSB8fCB7fSk7XG5cbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0UHJvcHMsIGRhdGEpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmNvbXBvbmVudHMpIHtcbiAgICAgICAgc2FuT3B0aW9ucy5jb21wb25lbnRzID0gT2JqZWN0XG4gICAgICAgICAgICAua2V5cyhvcHRpb25zLmNvbXBvbmVudHMpXG4gICAgICAgICAgICAucmVkdWNlKChwcmV2LCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBwcmV2W2tleV0gPSBwcmV2W2h5cGhlbmF0ZShrZXkpXSA9IGRlZmluZShvcHRpb25zLmNvbXBvbmVudHNba2V5XSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICAgICAgICB9LCB7fSk7XG4gICAgfVxuXG4gICAgY29uc3QgQ29tcG9uZW50ID0gZGVmaW5lQ29tcG9uZW50KHNhbk9wdGlvbnMpO1xuXG4gICAgcmV0dXJuIENvbXBvbmVudDtcbn1cblxuIiwiLyoqXG4gKiBAZmlsZSBlbnRyeVxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmV4cG9ydCB7ZGVmYXVsdCBhcyBkZWZpbmVDb21wb25lbnR9IGZyb20gJy4vZGVmaW5lLWNvbXBvbmVudCc7XG4iXSwic291cmNlUm9vdCI6IiJ9