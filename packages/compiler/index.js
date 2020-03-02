(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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

module.exports = require("vue-template-compiler");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/compiler/modules/class.js
/**
 * @file class
 * @author cxtom(cxtom2008@gmail.com)
 */
const bindKeys = [':class', 'v-bind:class'];

function postTransformNode(node) {
  if (node.type === 1 && node.classBinding) {
    const staticClass = node.attrsMap.class || '';
    node.attrsMap.class = `{{ _mc('${staticClass}', ${node.classBinding}) }}`;
    bindKeys.forEach(key => delete node.attrsMap[key]);
  }
}

/* harmony default export */ var modules_class = ({
  postTransformNode
});
// CONCATENATED MODULE: ./src/compiler/modules/style.js
/**
 * @file style
 * @author cxtom(cxtom2008@gmail.com)
 */
const style_bindKeys = [':style', 'v-bind:style', 'v-show'];

function style_postTransformNode(node) {
  const vShow = node.attrsMap['v-show'];

  if (node.type === 1 && (node.styleBinding || vShow)) {
    const staticStyle = node.staticStyle || '\'\''; // eslint-disable-next-line max-len

    node.attrsMap.style = `{{ _ms(${staticStyle.replace(/"/g, '\'')}, ${node.styleBinding || '{}'}${vShow ? `, ${vShow}` : ''}) }}`;
    style_bindKeys.forEach(key => delete node.attrsMap[key]);
  }
}

/* harmony default export */ var style = ({
  postTransformNode: style_postTransformNode
});
// CONCATENATED MODULE: ./src/compiler/modules/bind.js
/**
 * @file bind
 * @author cxtom(cxtom2008@gmail.com)
 */
const reBind = /^(v-bind)?\:/;

function bind_postTransformNode(node) {
  if (node.type !== 1) {
    return;
  }

  const keys = Object.keys(node.attrsMap).filter(n => reBind.test(n));

  for (const key of keys) {
    const value = node.attrsMap[key];
    delete node.attrsMap[key];
    node.attrsMap[key.replace(reBind, '')] = `{{ ${value} }}`;
  }

  if (node.attrsMap['v-bind']) {
    const vBind = node.attrsMap['v-bind'];
    node.attrsMap['s-bind'] = `{{ ${vBind} }}`;
    delete node.attrsMap['v-bind'];
  }
}

/* harmony default export */ var bind = ({
  postTransformNode: bind_postTransformNode
});
// CONCATENATED MODULE: ./src/compiler/modules/if.js
/**
 * @file if
 * @author cxtom(cxtom2008@gmail.com)
 */
function if_postTransformNode(node) {
  if (node.type !== 1) {
    return;
  }

  if (node.if) {
    node.attrsMap['s-if'] = node.if;
    delete node.attrsMap['v-if'];
  }

  if (node.elseif) {
    node.attrsMap['s-else-if'] = node.elseif;
    delete node.attrsMap['v-else-if'];
  }

  if (node.else) {
    node.attrsMap['s-else'] = node.else;
    delete node.attrsMap['v-else'];
  }
}

/* harmony default export */ var modules_if = ({
  postTransformNode: if_postTransformNode
});
// CONCATENATED MODULE: ./src/compiler/modules/for.js
/**
 * @file for
 * @author cxtom(cxtom2008@gmail.com)
 */
function for_postTransformNode(node) {
  if (node.type !== 1 || !node.for) {
    return;
  }

  let fr = node.alias;

  if (node.iterator1) {
    fr += `,${node.iterator1}`;
  }

  fr += ` in _l(${node.for})`;

  if (node.key) {
    fr += ` trackBy ${node.key}`;
  }

  node.attrsMap['s-for'] = fr;
  delete node.attrsMap['v-for'];
  delete node.attrsMap['key'];
  delete node.attrsMap[':key'];
  delete node.attrsMap['v-bind:key'];
}

/* harmony default export */ var modules_for = ({
  postTransformNode: for_postTransformNode
});
// CONCATENATED MODULE: ./src/compiler/modules/event.js
/**
 * @file event
 * @author cxtom(cxtom2008@gmail.com)
 */
const prefixers = ['@', 'v-on:'];
const reEvent = /^(@|v-on:)/;

function event_postTransformNode(node) {
  const eventAttrs = node.attrsList.filter(n => reEvent.test(n.name));

  for (const attr of eventAttrs) {
    delete node.attrsMap[attr.name];
    const [name, ...modifiers] = attr.name.split('.');
    node.attrsMap[`on-${name.replace(reEvent, '')}`] = `${modifiers.join(':')}:${attr.value}`;
  }
}

/* harmony default export */ var modules_event = ({
  postTransformNode: event_postTransformNode
});
// CONCATENATED MODULE: ./src/compiler/modules/index.js
/**
 * @file transformers
 * @author cxtom(cxtom2008@gmail.com)
 */






/* harmony default export */ var compiler_modules = ([modules_if, modules_for, modules_event, modules_class, style, // bind 放在 class 和 style 处理完之后
bind]);
// EXTERNAL MODULE: external "vue-template-compiler"
var external_vue_template_compiler_ = __webpack_require__(0);

// CONCATENATED MODULE: ./src/compiler/stringify.js
/**
 * @file get html from ast
 * @author cxtom(cxtom2008@gmail.com)
 */

/*
  Self-enclosing tags (stolen from node-htmlparser)
*/
const singleTag = {
  area: true,
  base: true,
  basefont: true,
  br: true,
  col: true,
  command: true,
  embed: true,
  frame: true,
  hr: true,
  img: true,
  input: true,
  isindex: true,
  keygen: true,
  link: true,
  meta: true,
  param: true,
  source: true,
  track: true,
  wbr: true
};
const noValueAttr = {
  's-else': true
};

function stringifyAttr(key, value) {
  if (noValueAttr[key]) {
    return key;
  }

  return `${key}=${JSON.stringify(value)}`;
}

function stringify(ast) {
  if (!Array.isArray(ast)) {
    ast = [ast];
  }

  let html = '';

  for (const node of ast) {
    if (node.type === 3 || node.type === 2) {
      html += node.text;
    } else if (node.type === 1) {
      const attrs = Object.keys(node.attrsMap).map(key => stringifyAttr(key, node.attrsMap[key]));
      const hasChildren = node.children && node.children.length > 0;
      const hasAttr = attrs.length > 0;
      html += `<${node.tag}${hasAttr ? ' ' : ''}${attrs.join(' ')}>`;
      html += hasChildren ? stringify(node.children) : '';
      html += !hasChildren && singleTag[node.tag] ? '' : `</${node.tag}>`;

      if (node.ifConditions && node.ifConditions.length > 1) {
        html += stringify(node.ifConditions.slice(1).map(n => n.block));
      }
    }
  }

  return html;
}
// CONCATENATED MODULE: ./src/compiler/index.js
/**
 * @file compiler
 * @author cxtom(cxtom2008@gmail.com)
 */



/* harmony default export */ var compiler = __webpack_exports__["default"] = (function (source, options = {}) {
  const {
    modules = []
  } = options;
  const {
    ast
  } = Object(external_vue_template_compiler_["compile"])(source.trim(), {
    modules: [...compiler_modules, ...modules],
    preserveWhitespace: false
  });
  return {
    ast,
    code: stringify(ast)
  };
});

/***/ })
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidnVlLXRlbXBsYXRlLWNvbXBpbGVyXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBpbGVyL21vZHVsZXMvY2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBpbGVyL21vZHVsZXMvc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBpbGVyL21vZHVsZXMvYmluZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcGlsZXIvbW9kdWxlcy9pZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcGlsZXIvbW9kdWxlcy9mb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBpbGVyL21vZHVsZXMvZXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBpbGVyL21vZHVsZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBpbGVyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcGlsZXIvaW5kZXguanMiXSwibmFtZXMiOlsiYmluZEtleXMiLCJwb3N0VHJhbnNmb3JtTm9kZSIsIm5vZGUiLCJ0eXBlIiwiY2xhc3NCaW5kaW5nIiwic3RhdGljQ2xhc3MiLCJhdHRyc01hcCIsImNsYXNzIiwiZm9yRWFjaCIsImtleSIsInZTaG93Iiwic3R5bGVCaW5kaW5nIiwic3RhdGljU3R5bGUiLCJzdHlsZSIsInJlcGxhY2UiLCJyZUJpbmQiLCJrZXlzIiwiT2JqZWN0IiwiZmlsdGVyIiwibiIsInRlc3QiLCJ2YWx1ZSIsInZCaW5kIiwiaWYiLCJlbHNlaWYiLCJlbHNlIiwiZm9yIiwiZnIiLCJhbGlhcyIsIml0ZXJhdG9yMSIsInByZWZpeGVycyIsInJlRXZlbnQiLCJldmVudEF0dHJzIiwiYXR0cnNMaXN0IiwibmFtZSIsImF0dHIiLCJtb2RpZmllcnMiLCJzcGxpdCIsImpvaW4iLCJ5ZiIsImV2ZW50IiwiY2xhenoiLCJiaW5kIiwic2luZ2xlVGFnIiwiYXJlYSIsImJhc2UiLCJiYXNlZm9udCIsImJyIiwiY29sIiwiY29tbWFuZCIsImVtYmVkIiwiZnJhbWUiLCJociIsImltZyIsImlucHV0IiwiaXNpbmRleCIsImtleWdlbiIsImxpbmsiLCJtZXRhIiwicGFyYW0iLCJzb3VyY2UiLCJ0cmFjayIsIndiciIsIm5vVmFsdWVBdHRyIiwic3RyaW5naWZ5QXR0ciIsIkpTT04iLCJzdHJpbmdpZnkiLCJhc3QiLCJBcnJheSIsImlzQXJyYXkiLCJodG1sIiwidGV4dCIsImF0dHJzIiwibWFwIiwiaGFzQ2hpbGRyZW4iLCJjaGlsZHJlbiIsImxlbmd0aCIsImhhc0F0dHIiLCJ0YWciLCJpZkNvbmRpdGlvbnMiLCJzbGljZSIsImJsb2NrIiwib3B0aW9ucyIsIm1vZHVsZXMiLCJjb21waWxlIiwidHJpbSIsImJ1aWxkSW5Nb2R1bGVzIiwicHJlc2VydmVXaGl0ZXNwYWNlIiwiY29kZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7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LElBQUksQ0FBQzRFLEdBQUksR0FBakU7O0FBRUEsVUFBSTVFLElBQUksQ0FBQzZFLFlBQUwsSUFBcUI3RSxJQUFJLENBQUM2RSxZQUFMLENBQWtCSCxNQUFsQixHQUEyQixDQUFwRCxFQUF1RDtBQUNuRE4sWUFBSSxJQUFJSixTQUFTLENBQUNoRSxJQUFJLENBQUM2RSxZQUFMLENBQWtCQyxLQUFsQixDQUF3QixDQUF4QixFQUEyQlAsR0FBM0IsQ0FBK0J0RCxDQUFDLElBQUlBLENBQUMsQ0FBQzhELEtBQXRDLENBQUQsQ0FBakI7QUFDSDtBQUNKO0FBQ0o7O0FBRUQsU0FBT1gsSUFBUDtBQUNILEM7O0FDbkVEOzs7O0FBS0E7QUFDQTtBQUNBO0FBRWUsd0ZBQVVWLE1BQVYsRUFBa0JzQixPQUFPLEdBQUcsRUFBNUIsRUFBZ0M7QUFFM0MsUUFBTTtBQUNGQyxXQUFPLEdBQUc7QUFEUixNQUVGRCxPQUZKO0FBSUEsUUFBTTtBQUFDZjtBQUFELE1BQVFpQixrREFBTyxDQUFDeEIsTUFBTSxDQUFDeUIsSUFBUCxFQUFELEVBQWdCO0FBQ2pDRixXQUFPLEVBQUUsQ0FBQyxHQUFHRyxnQkFBSixFQUFvQixHQUFHSCxPQUF2QixDQUR3QjtBQUVqQ0ksc0JBQWtCLEVBQUU7QUFGYSxHQUFoQixDQUFyQjtBQUtBLFNBQU87QUFDSHBCLE9BREc7QUFFSHFCLFFBQUksRUFBRXRCLFNBQVMsQ0FBQ0MsR0FBRDtBQUZaLEdBQVA7QUFJSCxDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidnVlLXRlbXBsYXRlLWNvbXBpbGVyXCIpOyIsIi8qKlxuICogQGZpbGUgY2xhc3NcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5jb25zdCBiaW5kS2V5cyA9IFsnOmNsYXNzJywgJ3YtYmluZDpjbGFzcyddO1xuXG5mdW5jdGlvbiBwb3N0VHJhbnNmb3JtTm9kZShub2RlKSB7XG4gICAgaWYgKG5vZGUudHlwZSA9PT0gMSAmJiBub2RlLmNsYXNzQmluZGluZykge1xuICAgICAgICBjb25zdCBzdGF0aWNDbGFzcyA9IG5vZGUuYXR0cnNNYXAuY2xhc3MgfHwgJyc7XG4gICAgICAgIG5vZGUuYXR0cnNNYXAuY2xhc3MgPSBge3sgX21jKCcke3N0YXRpY0NsYXNzfScsICR7bm9kZS5jbGFzc0JpbmRpbmd9KSB9fWA7XG4gICAgICAgIGJpbmRLZXlzLmZvckVhY2goa2V5ID0+IGRlbGV0ZSBub2RlLmF0dHJzTWFwW2tleV0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHBvc3RUcmFuc2Zvcm1Ob2RlXG59O1xuIiwiLyoqXG4gKiBAZmlsZSBzdHlsZVxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmNvbnN0IGJpbmRLZXlzID0gWyc6c3R5bGUnLCAndi1iaW5kOnN0eWxlJywgJ3Ytc2hvdyddO1xuXG5mdW5jdGlvbiBwb3N0VHJhbnNmb3JtTm9kZShub2RlKSB7XG4gICAgY29uc3QgdlNob3cgPSBub2RlLmF0dHJzTWFwWyd2LXNob3cnXTtcbiAgICBpZiAobm9kZS50eXBlID09PSAxICYmIChub2RlLnN0eWxlQmluZGluZyB8fCB2U2hvdykpIHtcbiAgICAgICAgY29uc3Qgc3RhdGljU3R5bGUgPSBub2RlLnN0YXRpY1N0eWxlIHx8ICdcXCdcXCcnO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuICAgICAgICBub2RlLmF0dHJzTWFwLnN0eWxlID0gYHt7IF9tcygke3N0YXRpY1N0eWxlLnJlcGxhY2UoL1wiL2csICdcXCcnKX0sICR7bm9kZS5zdHlsZUJpbmRpbmcgfHwgJ3t9J30ke3ZTaG93ID8gYCwgJHt2U2hvd31gIDogJyd9KSB9fWA7XG4gICAgICAgIGJpbmRLZXlzLmZvckVhY2goa2V5ID0+IGRlbGV0ZSBub2RlLmF0dHJzTWFwW2tleV0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHBvc3RUcmFuc2Zvcm1Ob2RlXG59O1xuIiwiLyoqXG4gKiBAZmlsZSBiaW5kXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuY29uc3QgcmVCaW5kID0gL14odi1iaW5kKT9cXDovO1xuXG5mdW5jdGlvbiBwb3N0VHJhbnNmb3JtTm9kZShub2RlKSB7XG4gICAgaWYgKG5vZGUudHlwZSAhPT0gMSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhub2RlLmF0dHJzTWFwKS5maWx0ZXIobiA9PiByZUJpbmQudGVzdChuKSk7XG4gICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IG5vZGUuYXR0cnNNYXBba2V5XTtcbiAgICAgICAgZGVsZXRlIG5vZGUuYXR0cnNNYXBba2V5XTtcbiAgICAgICAgbm9kZS5hdHRyc01hcFtrZXkucmVwbGFjZShyZUJpbmQsICcnKV0gPSBge3sgJHt2YWx1ZX0gfX1gO1xuICAgIH1cblxuICAgIGlmIChub2RlLmF0dHJzTWFwWyd2LWJpbmQnXSkge1xuICAgICAgICBjb25zdCB2QmluZCA9IG5vZGUuYXR0cnNNYXBbJ3YtYmluZCddO1xuICAgICAgICBub2RlLmF0dHJzTWFwWydzLWJpbmQnXSA9IGB7eyAke3ZCaW5kfSB9fWA7XG4gICAgICAgIGRlbGV0ZSBub2RlLmF0dHJzTWFwWyd2LWJpbmQnXTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwb3N0VHJhbnNmb3JtTm9kZVxufTtcbiIsIi8qKlxuICogQGZpbGUgaWZcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5mdW5jdGlvbiBwb3N0VHJhbnNmb3JtTm9kZShub2RlKSB7XG4gICAgaWYgKG5vZGUudHlwZSAhPT0gMSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG5vZGUuaWYpIHtcbiAgICAgICAgbm9kZS5hdHRyc01hcFsncy1pZiddID0gbm9kZS5pZjtcbiAgICAgICAgZGVsZXRlIG5vZGUuYXR0cnNNYXBbJ3YtaWYnXTtcbiAgICB9XG5cbiAgICBpZiAobm9kZS5lbHNlaWYpIHtcbiAgICAgICAgbm9kZS5hdHRyc01hcFsncy1lbHNlLWlmJ10gPSBub2RlLmVsc2VpZjtcbiAgICAgICAgZGVsZXRlIG5vZGUuYXR0cnNNYXBbJ3YtZWxzZS1pZiddO1xuICAgIH1cblxuICAgIGlmIChub2RlLmVsc2UpIHtcbiAgICAgICAgbm9kZS5hdHRyc01hcFsncy1lbHNlJ10gPSBub2RlLmVsc2U7XG4gICAgICAgIGRlbGV0ZSBub2RlLmF0dHJzTWFwWyd2LWVsc2UnXTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwb3N0VHJhbnNmb3JtTm9kZVxufTtcbiIsIi8qKlxuICogQGZpbGUgZm9yXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuZnVuY3Rpb24gcG9zdFRyYW5zZm9ybU5vZGUobm9kZSkge1xuICAgIGlmIChub2RlLnR5cGUgIT09IDEgfHwgIW5vZGUuZm9yKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgZnIgPSBub2RlLmFsaWFzO1xuXG4gICAgaWYgKG5vZGUuaXRlcmF0b3IxKSB7XG4gICAgICAgIGZyICs9IGAsJHtub2RlLml0ZXJhdG9yMX1gO1xuICAgIH1cblxuICAgIGZyICs9IGAgaW4gX2woJHtub2RlLmZvcn0pYDtcblxuICAgIGlmIChub2RlLmtleSkge1xuICAgICAgICBmciArPSBgIHRyYWNrQnkgJHtub2RlLmtleX1gO1xuICAgIH1cblxuICAgIG5vZGUuYXR0cnNNYXBbJ3MtZm9yJ10gPSBmcjtcblxuICAgIGRlbGV0ZSBub2RlLmF0dHJzTWFwWyd2LWZvciddO1xuICAgIGRlbGV0ZSBub2RlLmF0dHJzTWFwWydrZXknXTtcbiAgICBkZWxldGUgbm9kZS5hdHRyc01hcFsnOmtleSddO1xuICAgIGRlbGV0ZSBub2RlLmF0dHJzTWFwWyd2LWJpbmQ6a2V5J107XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwb3N0VHJhbnNmb3JtTm9kZVxufTtcbiIsIi8qKlxuICogQGZpbGUgZXZlbnRcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5jb25zdCBwcmVmaXhlcnMgPSBbJ0AnLCAndi1vbjonXTtcbmNvbnN0IHJlRXZlbnQgPSAvXihAfHYtb246KS87XG5cbmZ1bmN0aW9uIHBvc3RUcmFuc2Zvcm1Ob2RlKG5vZGUpIHtcbiAgICBjb25zdCBldmVudEF0dHJzID0gbm9kZS5hdHRyc0xpc3QuZmlsdGVyKG4gPT4gcmVFdmVudC50ZXN0KG4ubmFtZSkpO1xuICAgIGZvciAoY29uc3QgYXR0ciBvZiBldmVudEF0dHJzKSB7XG4gICAgICAgIGRlbGV0ZSBub2RlLmF0dHJzTWFwW2F0dHIubmFtZV07XG4gICAgICAgIGNvbnN0IFtuYW1lLCAuLi5tb2RpZmllcnNdID0gYXR0ci5uYW1lLnNwbGl0KCcuJyk7XG4gICAgICAgIG5vZGUuYXR0cnNNYXBbYG9uLSR7bmFtZS5yZXBsYWNlKHJlRXZlbnQsICcnKX1gXSA9IGAke21vZGlmaWVycy5qb2luKCc6Jyl9OiR7YXR0ci52YWx1ZX1gO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHBvc3RUcmFuc2Zvcm1Ob2RlXG59O1xuIiwiLyoqXG4gKiBAZmlsZSB0cmFuc2Zvcm1lcnNcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQgY2xhenogZnJvbSAnLi9jbGFzcyc7XG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZSc7XG5pbXBvcnQgYmluZCBmcm9tICcuL2JpbmQnO1xuaW1wb3J0IHlmIGZyb20gJy4vaWYnO1xuaW1wb3J0IGZyIGZyb20gJy4vZm9yJztcbmltcG9ydCBldmVudCBmcm9tICcuL2V2ZW50JztcblxuZXhwb3J0IGRlZmF1bHQgW1xuICAgIHlmLFxuICAgIGZyLFxuICAgIGV2ZW50LFxuXG4gICAgY2xhenosXG4gICAgc3R5bGUsXG5cbiAgICAvLyBiaW5kIOaUvuWcqCBjbGFzcyDlkowgc3R5bGUg5aSE55CG5a6M5LmL5ZCOXG4gICAgYmluZFxuXTtcbiIsIi8qKlxuICogQGZpbGUgZ2V0IGh0bWwgZnJvbSBhc3RcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG4vKlxuICBTZWxmLWVuY2xvc2luZyB0YWdzIChzdG9sZW4gZnJvbSBub2RlLWh0bWxwYXJzZXIpXG4qL1xuY29uc3Qgc2luZ2xlVGFnID0ge1xuICAgIGFyZWE6IHRydWUsXG4gICAgYmFzZTogdHJ1ZSxcbiAgICBiYXNlZm9udDogdHJ1ZSxcbiAgICBicjogdHJ1ZSxcbiAgICBjb2w6IHRydWUsXG4gICAgY29tbWFuZDogdHJ1ZSxcbiAgICBlbWJlZDogdHJ1ZSxcbiAgICBmcmFtZTogdHJ1ZSxcbiAgICBocjogdHJ1ZSxcbiAgICBpbWc6IHRydWUsXG4gICAgaW5wdXQ6IHRydWUsXG4gICAgaXNpbmRleDogdHJ1ZSxcbiAgICBrZXlnZW46IHRydWUsXG4gICAgbGluazogdHJ1ZSxcbiAgICBtZXRhOiB0cnVlLFxuICAgIHBhcmFtOiB0cnVlLFxuICAgIHNvdXJjZTogdHJ1ZSxcbiAgICB0cmFjazogdHJ1ZSxcbiAgICB3YnI6IHRydWVcbn07XG5cbmNvbnN0IG5vVmFsdWVBdHRyID0ge1xuICAgICdzLWVsc2UnOiB0cnVlXG59O1xuXG5mdW5jdGlvbiBzdHJpbmdpZnlBdHRyKGtleSwgdmFsdWUpIHtcbiAgICBpZiAobm9WYWx1ZUF0dHJba2V5XSkge1xuICAgICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgICByZXR1cm4gYCR7a2V5fT0ke0pTT04uc3RyaW5naWZ5KHZhbHVlKX1gO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdHJpbmdpZnkoYXN0KSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFzdCkpIHtcbiAgICAgICAgYXN0ID0gW2FzdF07XG4gICAgfVxuXG4gICAgbGV0IGh0bWwgPSAnJztcblxuICAgIGZvciAoY29uc3Qgbm9kZSBvZiBhc3QpIHtcbiAgICAgICAgaWYgKG5vZGUudHlwZSA9PT0gMyB8fCBub2RlLnR5cGUgPT09IDIpIHtcbiAgICAgICAgICAgIGh0bWwgKz0gbm9kZS50ZXh0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG5vZGUudHlwZSA9PT0gMSkge1xuICAgICAgICAgICAgY29uc3QgYXR0cnMgPSBPYmplY3Qua2V5cyhub2RlLmF0dHJzTWFwKS5tYXAoa2V5ID0+IHN0cmluZ2lmeUF0dHIoa2V5LCBub2RlLmF0dHJzTWFwW2tleV0pKTtcbiAgICAgICAgICAgIGNvbnN0IGhhc0NoaWxkcmVuID0gbm9kZS5jaGlsZHJlbiAmJiBub2RlLmNoaWxkcmVuLmxlbmd0aCA+IDA7XG4gICAgICAgICAgICBjb25zdCBoYXNBdHRyID0gYXR0cnMubGVuZ3RoID4gMDtcbiAgICAgICAgICAgIGh0bWwgKz0gYDwke25vZGUudGFnfSR7aGFzQXR0ciA/ICcgJyA6ICcnfSR7YXR0cnMuam9pbignICcpfT5gO1xuICAgICAgICAgICAgaHRtbCArPSBoYXNDaGlsZHJlbiA/IHN0cmluZ2lmeShub2RlLmNoaWxkcmVuKSA6ICcnO1xuICAgICAgICAgICAgaHRtbCArPSAhaGFzQ2hpbGRyZW4gJiYgc2luZ2xlVGFnW25vZGUudGFnXSA/ICcnIDogYDwvJHtub2RlLnRhZ30+YDtcblxuICAgICAgICAgICAgaWYgKG5vZGUuaWZDb25kaXRpb25zICYmIG5vZGUuaWZDb25kaXRpb25zLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICBodG1sICs9IHN0cmluZ2lmeShub2RlLmlmQ29uZGl0aW9ucy5zbGljZSgxKS5tYXAobiA9PiBuLmJsb2NrKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbDtcbn1cbiIsIi8qKlxuICogQGZpbGUgY29tcGlsZXJcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQgYnVpbGRJbk1vZHVsZXMgZnJvbSAnLi9tb2R1bGVzJztcbmltcG9ydCB7Y29tcGlsZX0gZnJvbSAndnVlLXRlbXBsYXRlLWNvbXBpbGVyJztcbmltcG9ydCBzdHJpbmdpZnkgZnJvbSAnLi9zdHJpbmdpZnknO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc291cmNlLCBvcHRpb25zID0ge30pIHtcblxuICAgIGNvbnN0IHtcbiAgICAgICAgbW9kdWxlcyA9IFtdXG4gICAgfSA9IG9wdGlvbnM7XG5cbiAgICBjb25zdCB7YXN0fSA9IGNvbXBpbGUoc291cmNlLnRyaW0oKSwge1xuICAgICAgICBtb2R1bGVzOiBbLi4uYnVpbGRJbk1vZHVsZXMsIC4uLm1vZHVsZXNdLFxuICAgICAgICBwcmVzZXJ2ZVdoaXRlc3BhY2U6IGZhbHNlXG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhc3QsXG4gICAgICAgIGNvZGU6IHN0cmluZ2lmeShhc3QpXG4gICAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=