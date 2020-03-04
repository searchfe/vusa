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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("vue-template-compiler");

/***/ }),
/* 2 */
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
    node.attrsMap.class = `{{ _mc('${staticClass}', ${node.classBinding.replace(/\s+/g, ' ')}) }}`;
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

    node.attrsMap.style = `{{ _ms(${staticStyle.replace(/"/g, '\'')}, ${node.styleBinding ? node.styleBinding.replace(/\s+/g, ' ') : '{}'}${vShow ? `, ${vShow}` : ''}) }}`;
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
    node.attrsMap[key.replace(reBind, '')] = `{{ ${value.replace(/\s+/g, ' ')} }}`;
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
    node.attrsMap[`on-${name.replace(reEvent, '')}`] = `${modifiers.map(m => `${m}:`).join('')}${attr.value}`;
  }
}

/* harmony default export */ var modules_event = ({
  postTransformNode: event_postTransformNode
});
// CONCATENATED MODULE: ./src/compiler/modules/html.js
/**
 * @file class
 * @author cxtom(cxtom2008@gmail.com)
 */
function html_postTransformNode(node) {
  if (node.type === 1 && node.attrsMap['v-html']) {
    const value = node.directives.find(d => d.name === 'html').value;
    delete node.attrsMap['v-html'];
    node.attrsMap['s-html'] = `{{ ${value} }}`;
    node.children = [];
  }

  if (node.type === 1 && node.attrsMap['v-text']) {
    const value = node.directives.find(d => d.name === 'text').value;
    delete node.attrsMap['v-text'];
    node.children = [{
      type: 2,
      text: `{{ ${value} }}`
    }];
  }
}

/* harmony default export */ var html = ({
  postTransformNode: html_postTransformNode
});
// CONCATENATED MODULE: ./src/compiler/modules/ref.js
/**
 * @file ref
 * @author cxtom(cxtom2008@gmail.com)
 */
function ref_postTransformNode(node) {
  if (node.type !== 1 || !node.attrsMap.ref) {
    return;
  }

  node.attrsMap['s-ref'] = node.attrsMap.ref;
  delete node.attrsMap.ref;
}

/* harmony default export */ var ref = ({
  postTransformNode: ref_postTransformNode
});
// CONCATENATED MODULE: ./src/compiler/modules/index.js
/**
 * @file transformers
 * @author cxtom(cxtom2008@gmail.com)
 */








/* harmony default export */ var compiler_modules = ([modules_if, modules_for, modules_event, html, ref, modules_class, style, // bind 放在 class 和 style 处理完之后
bind]);
// EXTERNAL MODULE: external "vue-template-compiler"
var external_vue_template_compiler_ = __webpack_require__(1);

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

function stringify(ast, scopeId) {
  if (!Array.isArray(ast)) {
    ast = [ast];
  }

  let html = '';

  for (const node of ast) {
    if (node.type === 3 || node.type === 2) {
      html += node.text;
    } else if (node.type === 1) {
      const attrs = Object.keys(node.attrsMap).map(key => stringifyAttr(key, node.attrsMap[key]));

      if (scopeId) {
        attrs.push(scopeId);
      }

      const hasChildren = node.children && node.children.length > 0;
      const hasAttr = attrs.length > 0;
      html += `<${node.tag}${hasAttr ? ' ' : ''}${attrs.join(' ')}>`;
      html += hasChildren ? stringify(node.children, scopeId) : '';
      html += !hasChildren && singleTag[node.tag] ? '' : `</${node.tag}>`;

      if (node.ifConditions && node.ifConditions.length > 1) {
        html += stringify(node.ifConditions.slice(1).map(n => n.block), scopeId);
      }
    }
  }

  return html;
}
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
const camelize = str => str.replace(/-(\w)/g, (_, c) => c ? c.toUpperCase() : '');
// CONCATENATED MODULE: ./src/compiler/modules/cssmodules.js
/**
 * @file css modules module
 * @author cxtom(cxtom2008@gmail.com)
 */

/* harmony default export */ var cssmodules = (function (cssModules) {
  function preTransformNode(el) {
    if (cssModules && cssModules.$style && el.attrsMap.class) {
      const staticClass = el.attrsMap.class.replace(/(^"|"$)/g, '').split(' ');
      el.attrsMap.class = staticClass.map(c => cssModules.$style[camelize(c)] || c).join(' ');
      el.attrsList = el.attrsList.map(({
        name,
        value
      }) => ({
        name,
        value: name === 'class' ? el.attrsMap.class : value
      }));
    }
  }

  return {
    preTransformNode
  };
});
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(0);
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_);

// CONCATENATED MODULE: ./src/compiler/modules/strip.js
/**
 * @file strip
 * @author cxtom(cxtom2008@gmail.com)
 */


function strip_postTransformNode(el) {
  el.children = el.children.map(child => {
    if (child.type === 3) {
      child.text = external_lodash_default.a.trim(child.text, ' \n');
    }

    if (child.type === 2) {
      const expression = child.expression;
      const parts = expression.split('+');
      let first = parts[0];
      let last = parts[parts.length - 1];

      if (/^".*"$/.test(first)) {
        first = JSON.parse(first);
        first = external_lodash_default.a.trimStart(first, ' \n');

        if (first) {
          child.tokens[0] = first;
          parts[0] = JSON.stringify(first);
        } else {
          child.tokens.shift();
          parts.shift();
        }
      }

      if (/^".*"$/.test(last)) {
        last = JSON.parse(last);
        last = external_lodash_default.a.trimEnd(last, ' \n');

        if (last) {
          child.tokens[parts.length - 1] = last;
          parts[parts.length - 1] = JSON.stringify(last);
        } else {
          child.tokens.pop();
          parts.pop();
        }
      }

      child.expression = parts.join('+');
      child.text = external_lodash_default.a.trim(child.text, ' \n');
    }

    return child;
  });
}

/* harmony default export */ var modules_strip = ({
  postTransformNode: strip_postTransformNode
});
// CONCATENATED MODULE: ./src/compiler/modules/atom.js
/**
 * @file atom module
 * @author cxtom(cxtom2008@gmail.com)
 */
function atom_preTransformNode(el) {
  el.attrsList = el.attrsList.map(({
    name,
    value
  }) => {
    delete el.attrsMap[name];
    name = name.replace(/^a-/, 'v-');
    el.attrsMap[name] = value;
    return {
      value,
      name
    };
  });
}

/* harmony default export */ var atom = ({
  preTransformNode: atom_preTransformNode
});
// CONCATENATED MODULE: ./src/compiler/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compile", function() { return compile; });
/**
 * @file compiler
 * @author cxtom(cxtom2008@gmail.com)
 */







function compile(source, options = {}) {
  const {
    modules = [],
    cssModules = null,
    scopeId = '',
    strip = true,
    atom: isAtom = false
  } = options;

  if (!Object(external_lodash_["isEmpty"])(cssModules)) {
    modules.unshift(cssmodules(cssModules));
  }

  if (strip) {
    modules.unshift(strip);
  }

  if (isAtom) {
    modules.unshift(atom);
  }

  const {
    ast
  } = Object(external_vue_template_compiler_["compile"])(source.trim(), {
    modules: [...compiler_modules, ...modules],
    preserveWhitespace: false
  });
  return {
    ast,
    code: stringify(ast, scopeId)
  };
}

/***/ })
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidnVlLXRlbXBsYXRlLWNvbXBpbGVyXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBpbGVyL21vZHVsZXMvY2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBpbGVyL21vZHVsZXMvc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBpbGVyL21vZHVsZXMvYmluZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcGlsZXIvbW9kdWxlcy9pZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcGlsZXIvbW9kdWxlcy9mb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBpbGVyL21vZHVsZXMvZXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBpbGVyL21vZHVsZXMvaHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcGlsZXIvbW9kdWxlcy9yZWYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBpbGVyL21vZHVsZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBpbGVyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBpbGVyL21vZHVsZXMvY3NzbW9kdWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcGlsZXIvbW9kdWxlcy9zdHJpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcGlsZXIvbW9kdWxlcy9hdG9tLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21waWxlci9pbmRleC5qcyJdLCJuYW1lcyI6WyJiaW5kS2V5cyIsInBvc3RUcmFuc2Zvcm1Ob2RlIiwibm9kZSIsInR5cGUiLCJjbGFzc0JpbmRpbmciLCJzdGF0aWNDbGFzcyIsImF0dHJzTWFwIiwiY2xhc3MiLCJyZXBsYWNlIiwiZm9yRWFjaCIsImtleSIsInZTaG93Iiwic3R5bGVCaW5kaW5nIiwic3RhdGljU3R5bGUiLCJzdHlsZSIsInJlQmluZCIsImtleXMiLCJPYmplY3QiLCJmaWx0ZXIiLCJuIiwidGVzdCIsInZhbHVlIiwidkJpbmQiLCJpZiIsImVsc2VpZiIsImVsc2UiLCJmb3IiLCJmciIsImFsaWFzIiwiaXRlcmF0b3IxIiwicHJlZml4ZXJzIiwicmVFdmVudCIsImV2ZW50QXR0cnMiLCJhdHRyc0xpc3QiLCJuYW1lIiwiYXR0ciIsIm1vZGlmaWVycyIsInNwbGl0IiwibWFwIiwibSIsImpvaW4iLCJkaXJlY3RpdmVzIiwiZmluZCIsImQiLCJjaGlsZHJlbiIsInRleHQiLCJyZWYiLCJ5ZiIsImV2ZW50IiwiaHRtbCIsImNsYXp6IiwiYmluZCIsInNpbmdsZVRhZyIsImFyZWEiLCJiYXNlIiwiYmFzZWZvbnQiLCJiciIsImNvbCIsImNvbW1hbmQiLCJlbWJlZCIsImZyYW1lIiwiaHIiLCJpbWciLCJpbnB1dCIsImlzaW5kZXgiLCJrZXlnZW4iLCJsaW5rIiwibWV0YSIsInBhcmFtIiwic291cmNlIiwidHJhY2siLCJ3YnIiLCJub1ZhbHVlQXR0ciIsInN0cmluZ2lmeUF0dHIiLCJKU09OIiwic3RyaW5naWZ5IiwiYXN0Iiwic2NvcGVJZCIsIkFycmF5IiwiaXNBcnJheSIsImF0dHJzIiwicHVzaCIsImhhc0NoaWxkcmVuIiwibGVuZ3RoIiwiaGFzQXR0ciIsInRhZyIsImlmQ29uZGl0aW9ucyIsInNsaWNlIiwiYmxvY2siLCJleHRlbmQiLCJ0byIsImZyb20iLCJ0b09iamVjdCIsImFyciIsInJlcyIsImkiLCJjYWNoZWQiLCJmbiIsImNhY2hlIiwiY3JlYXRlIiwiY2FjaGVkRm4iLCJzdHIiLCJoaXQiLCJoeXBoZW5hdGVSRSIsImh5cGhlbmF0ZSIsInRvTG93ZXJDYXNlIiwiY2FtZWxpemUiLCJfIiwiYyIsInRvVXBwZXJDYXNlIiwiY3NzTW9kdWxlcyIsInByZVRyYW5zZm9ybU5vZGUiLCJlbCIsIiRzdHlsZSIsImNoaWxkIiwidHJpbSIsImV4cHJlc3Npb24iLCJwYXJ0cyIsImZpcnN0IiwibGFzdCIsInBhcnNlIiwidHJpbVN0YXJ0IiwidG9rZW5zIiwic2hpZnQiLCJ0cmltRW5kIiwicG9wIiwiY29tcGlsZSIsIm9wdGlvbnMiLCJtb2R1bGVzIiwic3RyaXAiLCJhdG9tIiwiaXNBdG9tIiwiaXNFbXB0eSIsInVuc2hpZnQiLCJnZXRDc3NNb2R1bGVzIiwidnVlQ29tcGlsZSIsImJ1aWxkSW5Nb2R1bGVzIiwicHJlc2VydmVXaGl0ZXNwYWNlIiwiY29kZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7OztBQ2xGQSxtQzs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7QUNBQTs7OztBQUtBLE1BQU1BLFFBQVEsR0FBRyxDQUFDLFFBQUQsRUFBVyxjQUFYLENBQWpCOztBQUVBLFNBQVNDLGlCQUFULENBQTJCQyxJQUEzQixFQUFpQztBQUM3QixNQUFJQSxJQUFJLENBQUNDLElBQUwsS0FB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O0FBQ0ZDLFdBQU8sR0FBRyxFQURSO0FBRUZsQixjQUFVLEdBQUcsSUFGWDtBQUdGakMsV0FBTyxHQUFHLEVBSFI7QUFJRm9ELFNBQUssR0FBRyxJQUpOO0FBS0ZDLFFBQUksRUFBRUMsTUFBTSxHQUFHO0FBTGIsTUFNRkosT0FOSjs7QUFRQSxNQUFJLENBQUNLLG1DQUFPLENBQUN0QixVQUFELENBQVosRUFBMEI7QUFDdEJrQixXQUFPLENBQUNLLE9BQVIsQ0FBZ0JDLFVBQWEsQ0FBQ3hCLFVBQUQsQ0FBN0I7QUFDSDs7QUFFRCxNQUFJbUIsS0FBSixFQUFXO0FBQ1BELFdBQU8sQ0FBQ0ssT0FBUixDQUFnQkosS0FBaEI7QUFDSDs7QUFFRCxNQUFJRSxNQUFKLEVBQVk7QUFDUkgsV0FBTyxDQUFDSyxPQUFSLENBQWdCSCxJQUFoQjtBQUNIOztBQUVELFFBQU07QUFBQ3REO0FBQUQsTUFBUTJELGtEQUFVLENBQUNsRSxNQUFNLENBQUM4QyxJQUFQLEVBQUQsRUFBZ0I7QUFDcENhLFdBQU8sRUFBRSxDQUNMLEdBQUdRLGdCQURFLEVBRUwsR0FBR1IsT0FGRSxDQUQyQjtBQUtwQ1Msc0JBQWtCLEVBQUU7QUFMZ0IsR0FBaEIsQ0FBeEI7QUFRQSxTQUFPO0FBQ0g3RCxPQURHO0FBRUg4RCxRQUFJLEVBQUUvRCxTQUFTLENBQUNDLEdBQUQsRUFBTUMsT0FBTjtBQUZaLEdBQVA7QUFJSCxDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInZ1ZS10ZW1wbGF0ZS1jb21waWxlclwiKTsiLCIvKipcbiAqIEBmaWxlIGNsYXNzXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuY29uc3QgYmluZEtleXMgPSBbJzpjbGFzcycsICd2LWJpbmQ6Y2xhc3MnXTtcblxuZnVuY3Rpb24gcG9zdFRyYW5zZm9ybU5vZGUobm9kZSkge1xuICAgIGlmIChub2RlLnR5cGUgPT09IDEgJiYgbm9kZS5jbGFzc0JpbmRpbmcpIHtcbiAgICAgICAgY29uc3Qgc3RhdGljQ2xhc3MgPSBub2RlLmF0dHJzTWFwLmNsYXNzIHx8ICcnO1xuICAgICAgICBub2RlLmF0dHJzTWFwLmNsYXNzID0gYHt7IF9tYygnJHtzdGF0aWNDbGFzc30nLCAke25vZGUuY2xhc3NCaW5kaW5nLnJlcGxhY2UoL1xccysvZywgJyAnKX0pIH19YDtcbiAgICAgICAgYmluZEtleXMuZm9yRWFjaChrZXkgPT4gZGVsZXRlIG5vZGUuYXR0cnNNYXBba2V5XSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcG9zdFRyYW5zZm9ybU5vZGVcbn07XG4iLCIvKipcbiAqIEBmaWxlIHN0eWxlXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuY29uc3QgYmluZEtleXMgPSBbJzpzdHlsZScsICd2LWJpbmQ6c3R5bGUnLCAndi1zaG93J107XG5cbmZ1bmN0aW9uIHBvc3RUcmFuc2Zvcm1Ob2RlKG5vZGUpIHtcbiAgICBjb25zdCB2U2hvdyA9IG5vZGUuYXR0cnNNYXBbJ3Ytc2hvdyddO1xuICAgIGlmIChub2RlLnR5cGUgPT09IDEgJiYgKG5vZGUuc3R5bGVCaW5kaW5nIHx8IHZTaG93KSkge1xuICAgICAgICBjb25zdCBzdGF0aWNTdHlsZSA9IG5vZGUuc3RhdGljU3R5bGUgfHwgJ1xcJ1xcJyc7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG4gICAgICAgIG5vZGUuYXR0cnNNYXAuc3R5bGUgPSBge3sgX21zKCR7c3RhdGljU3R5bGUucmVwbGFjZSgvXCIvZywgJ1xcJycpfSwgJHtub2RlLnN0eWxlQmluZGluZyA/IG5vZGUuc3R5bGVCaW5kaW5nLnJlcGxhY2UoL1xccysvZywgJyAnKSA6ICd7fSd9JHt2U2hvdyA/IGAsICR7dlNob3d9YCA6ICcnfSkgfX1gO1xuICAgICAgICBiaW5kS2V5cy5mb3JFYWNoKGtleSA9PiBkZWxldGUgbm9kZS5hdHRyc01hcFtrZXldKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwb3N0VHJhbnNmb3JtTm9kZVxufTtcbiIsIi8qKlxuICogQGZpbGUgYmluZFxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmNvbnN0IHJlQmluZCA9IC9eKHYtYmluZCk/XFw6LztcblxuZnVuY3Rpb24gcG9zdFRyYW5zZm9ybU5vZGUobm9kZSkge1xuICAgIGlmIChub2RlLnR5cGUgIT09IDEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMobm9kZS5hdHRyc01hcCkuZmlsdGVyKG4gPT4gcmVCaW5kLnRlc3QobikpO1xuICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBub2RlLmF0dHJzTWFwW2tleV07XG4gICAgICAgIGRlbGV0ZSBub2RlLmF0dHJzTWFwW2tleV07XG4gICAgICAgIG5vZGUuYXR0cnNNYXBba2V5LnJlcGxhY2UocmVCaW5kLCAnJyldID0gYHt7ICR7dmFsdWUucmVwbGFjZSgvXFxzKy9nLCAnICcpfSB9fWA7XG4gICAgfVxuXG4gICAgaWYgKG5vZGUuYXR0cnNNYXBbJ3YtYmluZCddKSB7XG4gICAgICAgIGNvbnN0IHZCaW5kID0gbm9kZS5hdHRyc01hcFsndi1iaW5kJ107XG4gICAgICAgIG5vZGUuYXR0cnNNYXBbJ3MtYmluZCddID0gYHt7ICR7dkJpbmR9IH19YDtcbiAgICAgICAgZGVsZXRlIG5vZGUuYXR0cnNNYXBbJ3YtYmluZCddO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHBvc3RUcmFuc2Zvcm1Ob2RlXG59O1xuIiwiLyoqXG4gKiBAZmlsZSBpZlxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmZ1bmN0aW9uIHBvc3RUcmFuc2Zvcm1Ob2RlKG5vZGUpIHtcbiAgICBpZiAobm9kZS50eXBlICE9PSAxKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobm9kZS5pZikge1xuICAgICAgICBub2RlLmF0dHJzTWFwWydzLWlmJ10gPSBub2RlLmlmO1xuICAgICAgICBkZWxldGUgbm9kZS5hdHRyc01hcFsndi1pZiddO1xuICAgIH1cblxuICAgIGlmIChub2RlLmVsc2VpZikge1xuICAgICAgICBub2RlLmF0dHJzTWFwWydzLWVsc2UtaWYnXSA9IG5vZGUuZWxzZWlmO1xuICAgICAgICBkZWxldGUgbm9kZS5hdHRyc01hcFsndi1lbHNlLWlmJ107XG4gICAgfVxuXG4gICAgaWYgKG5vZGUuZWxzZSkge1xuICAgICAgICBub2RlLmF0dHJzTWFwWydzLWVsc2UnXSA9IG5vZGUuZWxzZTtcbiAgICAgICAgZGVsZXRlIG5vZGUuYXR0cnNNYXBbJ3YtZWxzZSddO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHBvc3RUcmFuc2Zvcm1Ob2RlXG59O1xuIiwiLyoqXG4gKiBAZmlsZSBmb3JcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5mdW5jdGlvbiBwb3N0VHJhbnNmb3JtTm9kZShub2RlKSB7XG4gICAgaWYgKG5vZGUudHlwZSAhPT0gMSB8fCAhbm9kZS5mb3IpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBmciA9IG5vZGUuYWxpYXM7XG5cbiAgICBpZiAobm9kZS5pdGVyYXRvcjEpIHtcbiAgICAgICAgZnIgKz0gYCwke25vZGUuaXRlcmF0b3IxfWA7XG4gICAgfVxuXG4gICAgZnIgKz0gYCBpbiBfbCgke25vZGUuZm9yfSlgO1xuXG4gICAgaWYgKG5vZGUua2V5KSB7XG4gICAgICAgIGZyICs9IGAgdHJhY2tCeSAke25vZGUua2V5fWA7XG4gICAgfVxuXG4gICAgbm9kZS5hdHRyc01hcFsncy1mb3InXSA9IGZyO1xuXG4gICAgZGVsZXRlIG5vZGUuYXR0cnNNYXBbJ3YtZm9yJ107XG4gICAgZGVsZXRlIG5vZGUuYXR0cnNNYXBbJ2tleSddO1xuICAgIGRlbGV0ZSBub2RlLmF0dHJzTWFwWyc6a2V5J107XG4gICAgZGVsZXRlIG5vZGUuYXR0cnNNYXBbJ3YtYmluZDprZXknXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHBvc3RUcmFuc2Zvcm1Ob2RlXG59O1xuIiwiLyoqXG4gKiBAZmlsZSBldmVudFxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmNvbnN0IHByZWZpeGVycyA9IFsnQCcsICd2LW9uOiddO1xuY29uc3QgcmVFdmVudCA9IC9eKEB8di1vbjopLztcblxuZnVuY3Rpb24gcG9zdFRyYW5zZm9ybU5vZGUobm9kZSkge1xuICAgIGNvbnN0IGV2ZW50QXR0cnMgPSBub2RlLmF0dHJzTGlzdC5maWx0ZXIobiA9PiByZUV2ZW50LnRlc3Qobi5uYW1lKSk7XG4gICAgZm9yIChjb25zdCBhdHRyIG9mIGV2ZW50QXR0cnMpIHtcbiAgICAgICAgZGVsZXRlIG5vZGUuYXR0cnNNYXBbYXR0ci5uYW1lXTtcbiAgICAgICAgY29uc3QgW25hbWUsIC4uLm1vZGlmaWVyc10gPSBhdHRyLm5hbWUuc3BsaXQoJy4nKTtcbiAgICAgICAgbm9kZS5hdHRyc01hcFtgb24tJHtuYW1lLnJlcGxhY2UocmVFdmVudCwgJycpfWBdXG4gICAgICAgICAgICA9IGAke21vZGlmaWVycy5tYXAobSA9PiBgJHttfTpgKS5qb2luKCcnKX0ke2F0dHIudmFsdWV9YDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwb3N0VHJhbnNmb3JtTm9kZVxufTtcbiIsIi8qKlxuICogQGZpbGUgY2xhc3NcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5mdW5jdGlvbiBwb3N0VHJhbnNmb3JtTm9kZShub2RlKSB7XG4gICAgaWYgKG5vZGUudHlwZSA9PT0gMSAmJiBub2RlLmF0dHJzTWFwWyd2LWh0bWwnXSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IG5vZGUuZGlyZWN0aXZlcy5maW5kKGQgPT4gZC5uYW1lID09PSAnaHRtbCcpLnZhbHVlO1xuICAgICAgICBkZWxldGUgbm9kZS5hdHRyc01hcFsndi1odG1sJ107XG4gICAgICAgIG5vZGUuYXR0cnNNYXBbJ3MtaHRtbCddID0gYHt7ICR7dmFsdWV9IH19YDtcbiAgICAgICAgbm9kZS5jaGlsZHJlbiA9IFtdO1xuICAgIH1cblxuICAgIGlmIChub2RlLnR5cGUgPT09IDEgJiYgbm9kZS5hdHRyc01hcFsndi10ZXh0J10pIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBub2RlLmRpcmVjdGl2ZXMuZmluZChkID0+IGQubmFtZSA9PT0gJ3RleHQnKS52YWx1ZTtcbiAgICAgICAgZGVsZXRlIG5vZGUuYXR0cnNNYXBbJ3YtdGV4dCddO1xuICAgICAgICBub2RlLmNoaWxkcmVuID0gW3tcbiAgICAgICAgICAgIHR5cGU6IDIsXG4gICAgICAgICAgICB0ZXh0OiBge3sgJHt2YWx1ZX0gfX1gXG4gICAgICAgIH1dO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHBvc3RUcmFuc2Zvcm1Ob2RlXG59O1xuIiwiLyoqXG4gKiBAZmlsZSByZWZcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5mdW5jdGlvbiBwb3N0VHJhbnNmb3JtTm9kZShub2RlKSB7XG4gICAgaWYgKG5vZGUudHlwZSAhPT0gMSB8fCAhbm9kZS5hdHRyc01hcC5yZWYpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBub2RlLmF0dHJzTWFwWydzLXJlZiddID0gbm9kZS5hdHRyc01hcC5yZWY7XG4gICAgZGVsZXRlIG5vZGUuYXR0cnNNYXAucmVmO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcG9zdFRyYW5zZm9ybU5vZGVcbn07XG4iLCIvKipcbiAqIEBmaWxlIHRyYW5zZm9ybWVyc1xuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCBjbGF6eiBmcm9tICcuL2NsYXNzJztcbmltcG9ydCBzdHlsZSBmcm9tICcuL3N0eWxlJztcbmltcG9ydCBiaW5kIGZyb20gJy4vYmluZCc7XG5pbXBvcnQgeWYgZnJvbSAnLi9pZic7XG5pbXBvcnQgZnIgZnJvbSAnLi9mb3InO1xuaW1wb3J0IGV2ZW50IGZyb20gJy4vZXZlbnQnO1xuaW1wb3J0IGh0bWwgZnJvbSAnLi9odG1sJztcbmltcG9ydCByZWYgZnJvbSAnLi9yZWYnO1xuXG5leHBvcnQgZGVmYXVsdCBbXG4gICAgeWYsXG4gICAgZnIsXG4gICAgZXZlbnQsXG4gICAgaHRtbCxcbiAgICByZWYsXG5cbiAgICBjbGF6eixcbiAgICBzdHlsZSxcblxuICAgIC8vIGJpbmQg5pS+5ZyoIGNsYXNzIOWSjCBzdHlsZSDlpITnkIblrozkuYvlkI5cbiAgICBiaW5kXG5dO1xuIiwiLyoqXG4gKiBAZmlsZSBnZXQgaHRtbCBmcm9tIGFzdFxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbi8qXG4gIFNlbGYtZW5jbG9zaW5nIHRhZ3MgKHN0b2xlbiBmcm9tIG5vZGUtaHRtbHBhcnNlcilcbiovXG5jb25zdCBzaW5nbGVUYWcgPSB7XG4gICAgYXJlYTogdHJ1ZSxcbiAgICBiYXNlOiB0cnVlLFxuICAgIGJhc2Vmb250OiB0cnVlLFxuICAgIGJyOiB0cnVlLFxuICAgIGNvbDogdHJ1ZSxcbiAgICBjb21tYW5kOiB0cnVlLFxuICAgIGVtYmVkOiB0cnVlLFxuICAgIGZyYW1lOiB0cnVlLFxuICAgIGhyOiB0cnVlLFxuICAgIGltZzogdHJ1ZSxcbiAgICBpbnB1dDogdHJ1ZSxcbiAgICBpc2luZGV4OiB0cnVlLFxuICAgIGtleWdlbjogdHJ1ZSxcbiAgICBsaW5rOiB0cnVlLFxuICAgIG1ldGE6IHRydWUsXG4gICAgcGFyYW06IHRydWUsXG4gICAgc291cmNlOiB0cnVlLFxuICAgIHRyYWNrOiB0cnVlLFxuICAgIHdicjogdHJ1ZVxufTtcblxuY29uc3Qgbm9WYWx1ZUF0dHIgPSB7XG4gICAgJ3MtZWxzZSc6IHRydWVcbn07XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeUF0dHIoa2V5LCB2YWx1ZSkge1xuICAgIGlmIChub1ZhbHVlQXR0cltrZXldKSB7XG4gICAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICAgIHJldHVybiBgJHtrZXl9PSR7SlNPTi5zdHJpbmdpZnkodmFsdWUpfWA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0cmluZ2lmeShhc3QsIHNjb3BlSWQpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXN0KSkge1xuICAgICAgICBhc3QgPSBbYXN0XTtcbiAgICB9XG5cbiAgICBsZXQgaHRtbCA9ICcnO1xuXG4gICAgZm9yIChjb25zdCBub2RlIG9mIGFzdCkge1xuICAgICAgICBpZiAobm9kZS50eXBlID09PSAzIHx8IG5vZGUudHlwZSA9PT0gMikge1xuICAgICAgICAgICAgaHRtbCArPSBub2RlLnRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobm9kZS50eXBlID09PSAxKSB7XG4gICAgICAgICAgICBjb25zdCBhdHRycyA9IE9iamVjdC5rZXlzKG5vZGUuYXR0cnNNYXApLm1hcChrZXkgPT4gc3RyaW5naWZ5QXR0cihrZXksIG5vZGUuYXR0cnNNYXBba2V5XSkpO1xuICAgICAgICAgICAgaWYgKHNjb3BlSWQpIHtcbiAgICAgICAgICAgICAgICBhdHRycy5wdXNoKHNjb3BlSWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgaGFzQ2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuICYmIG5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMDtcbiAgICAgICAgICAgIGNvbnN0IGhhc0F0dHIgPSBhdHRycy5sZW5ndGggPiAwO1xuICAgICAgICAgICAgaHRtbCArPSBgPCR7bm9kZS50YWd9JHtoYXNBdHRyID8gJyAnIDogJyd9JHthdHRycy5qb2luKCcgJyl9PmA7XG4gICAgICAgICAgICBodG1sICs9IGhhc0NoaWxkcmVuID8gc3RyaW5naWZ5KG5vZGUuY2hpbGRyZW4sIHNjb3BlSWQpIDogJyc7XG4gICAgICAgICAgICBodG1sICs9ICFoYXNDaGlsZHJlbiAmJiBzaW5nbGVUYWdbbm9kZS50YWddID8gJycgOiBgPC8ke25vZGUudGFnfT5gO1xuXG4gICAgICAgICAgICBpZiAobm9kZS5pZkNvbmRpdGlvbnMgJiYgbm9kZS5pZkNvbmRpdGlvbnMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIGh0bWwgKz0gc3RyaW5naWZ5KG5vZGUuaWZDb25kaXRpb25zLnNsaWNlKDEpLm1hcChuID0+IG4uYmxvY2spLCBzY29wZUlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBodG1sO1xufVxuIiwiLyoqXG4gKiBAZmlsZSDkuIDkupvlt6Xlhbflh73mlbBcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG4vKipcbiAqIE1peCBwcm9wZXJ0aWVzIGludG8gdGFyZ2V0IG9iamVjdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4dGVuZCh0bywgZnJvbSkge1xuICAgIGZvciAoY29uc3Qga2V5IGluIGZyb20pIHtcbiAgICAgICAgdG9ba2V5XSA9IGZyb21ba2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIHRvO1xufVxuXG4vKipcbiAqIE1lcmdlIGFuIEFycmF5IG9mIE9iamVjdHMgaW50byBhIHNpbmdsZSBPYmplY3QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b09iamVjdChhcnIpIHtcbiAgICBjb25zdCByZXMgPSB7fTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoYXJyW2ldKSB7XG4gICAgICAgICAgICBleHRlbmQocmVzLCBhcnJbaV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59XG5cblxuLyoqXG4gKiBDcmVhdGUgYSBjYWNoZWQgdmVyc2lvbiBvZiBhIHB1cmUgZnVuY3Rpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjYWNoZWQoZm4pIHtcbiAgICBjb25zdCBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGNhY2hlZEZuKHN0cikge1xuICAgICAgICBjb25zdCBoaXQgPSBjYWNoZVtzdHJdO1xuICAgICAgICByZXR1cm4gaGl0IHx8IChjYWNoZVtzdHJdID0gZm4oc3RyKSk7XG4gICAgfTtcbn1cblxuLyoqXG4gKiBIeXBoZW5hdGUgYSBjYW1lbENhc2Ugc3RyaW5nLlxuICovXG5jb25zdCBoeXBoZW5hdGVSRSA9IC8oW14tXSkoW0EtWl0pL2c7XG5leHBvcnQgY29uc3QgaHlwaGVuYXRlID0gY2FjaGVkKChzdHIpID0+IHtcbiAgICByZXR1cm4gc3RyXG4gICAgICAgIC5yZXBsYWNlKGh5cGhlbmF0ZVJFLCAnJDEtJDInKVxuICAgICAgICAucmVwbGFjZShoeXBoZW5hdGVSRSwgJyQxLSQyJylcbiAgICAgICAgLnRvTG93ZXJDYXNlKCk7XG59KTtcblxuZXhwb3J0IGNvbnN0IGNhbWVsaXplID0gc3RyID0+IHN0ci5yZXBsYWNlKC8tKFxcdykvZywgKF8sIGMpID0+IChjID8gYy50b1VwcGVyQ2FzZSgpIDogJycpKTtcbiIsIi8qKlxuICogQGZpbGUgY3NzIG1vZHVsZXMgbW9kdWxlXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHtjYW1lbGl6ZX0gZnJvbSAnLi4vLi4vc2hhcmVkL3V0aWwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY3NzTW9kdWxlcykge1xuXG4gICAgZnVuY3Rpb24gcHJlVHJhbnNmb3JtTm9kZShlbCkge1xuICAgICAgICBpZiAoY3NzTW9kdWxlcyAmJiBjc3NNb2R1bGVzLiRzdHlsZSAmJiBlbC5hdHRyc01hcC5jbGFzcykge1xuICAgICAgICAgICAgY29uc3Qgc3RhdGljQ2xhc3MgPSBlbC5hdHRyc01hcC5jbGFzcy5yZXBsYWNlKC8oXlwifFwiJCkvZywgJycpLnNwbGl0KCcgJyk7XG4gICAgICAgICAgICBlbC5hdHRyc01hcC5jbGFzcyA9IHN0YXRpY0NsYXNzLm1hcChjID0+IChjc3NNb2R1bGVzLiRzdHlsZVtjYW1lbGl6ZShjKV0gfHwgYykpLmpvaW4oJyAnKTtcbiAgICAgICAgICAgIGVsLmF0dHJzTGlzdCA9IGVsLmF0dHJzTGlzdC5tYXAoXG4gICAgICAgICAgICAgICAgKHtuYW1lLCB2YWx1ZX0pID0+ICh7bmFtZSwgdmFsdWU6IG5hbWUgPT09ICdjbGFzcycgPyBlbC5hdHRyc01hcC5jbGFzcyA6IHZhbHVlfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcmVUcmFuc2Zvcm1Ob2RlXG4gICAgfTtcbn1cblxuIiwiLyoqXG4gKiBAZmlsZSBzdHJpcFxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmZ1bmN0aW9uIHBvc3RUcmFuc2Zvcm1Ob2RlKGVsKSB7XG4gICAgZWwuY2hpbGRyZW4gPSBlbC5jaGlsZHJlbi5tYXAoY2hpbGQgPT4ge1xuICAgICAgICBpZiAoY2hpbGQudHlwZSA9PT0gMykge1xuICAgICAgICAgICAgY2hpbGQudGV4dCA9IF8udHJpbShjaGlsZC50ZXh0LCAnIFxcbicpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGlsZC50eXBlID09PSAyKSB7XG4gICAgICAgICAgICBjb25zdCBleHByZXNzaW9uID0gY2hpbGQuZXhwcmVzc2lvbjtcbiAgICAgICAgICAgIGNvbnN0IHBhcnRzID0gZXhwcmVzc2lvbi5zcGxpdCgnKycpO1xuICAgICAgICAgICAgbGV0IGZpcnN0ID0gcGFydHNbMF07XG4gICAgICAgICAgICBsZXQgbGFzdCA9IHBhcnRzW3BhcnRzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgaWYgKC9eXCIuKlwiJC8udGVzdChmaXJzdCkpIHtcbiAgICAgICAgICAgICAgICBmaXJzdCA9IEpTT04ucGFyc2UoZmlyc3QpO1xuICAgICAgICAgICAgICAgIGZpcnN0ID0gXy50cmltU3RhcnQoZmlyc3QsICcgXFxuJyk7XG4gICAgICAgICAgICAgICAgaWYgKGZpcnN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnRva2Vuc1swXSA9IGZpcnN0O1xuICAgICAgICAgICAgICAgICAgICBwYXJ0c1swXSA9IEpTT04uc3RyaW5naWZ5KGZpcnN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnRva2Vucy5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICBwYXJ0cy5zaGlmdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgvXlwiLipcIiQvLnRlc3QobGFzdCkpIHtcbiAgICAgICAgICAgICAgICBsYXN0ID0gSlNPTi5wYXJzZShsYXN0KTtcbiAgICAgICAgICAgICAgICBsYXN0ID0gXy50cmltRW5kKGxhc3QsICcgXFxuJyk7XG4gICAgICAgICAgICAgICAgaWYgKGxhc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQudG9rZW5zW3BhcnRzLmxlbmd0aCAtIDFdID0gbGFzdDtcbiAgICAgICAgICAgICAgICAgICAgcGFydHNbcGFydHMubGVuZ3RoIC0gMV0gPSBKU09OLnN0cmluZ2lmeShsYXN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnRva2Vucy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgcGFydHMucG9wKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2hpbGQuZXhwcmVzc2lvbiA9IHBhcnRzLmpvaW4oJysnKTtcbiAgICAgICAgICAgIGNoaWxkLnRleHQgPSBfLnRyaW0oY2hpbGQudGV4dCwgJyBcXG4nKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwb3N0VHJhbnNmb3JtTm9kZVxufTtcbiIsIi8qKlxuICogQGZpbGUgYXRvbSBtb2R1bGVcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5mdW5jdGlvbiBwcmVUcmFuc2Zvcm1Ob2RlKGVsKSB7XG4gICAgZWwuYXR0cnNMaXN0ID0gZWwuYXR0cnNMaXN0Lm1hcCgoe25hbWUsIHZhbHVlfSkgPT4ge1xuICAgICAgICBkZWxldGUgZWwuYXR0cnNNYXBbbmFtZV07XG4gICAgICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UoL15hLS8sICd2LScpO1xuICAgICAgICBlbC5hdHRyc01hcFtuYW1lXSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICBuYW1lXG4gICAgICAgIH07XG4gICAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcmVUcmFuc2Zvcm1Ob2RlXG59O1xuIiwiLyoqXG4gKiBAZmlsZSBjb21waWxlclxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCBidWlsZEluTW9kdWxlcyBmcm9tICcuL21vZHVsZXMnO1xuaW1wb3J0IHtjb21waWxlIGFzIHZ1ZUNvbXBpbGV9IGZyb20gJ3Z1ZS10ZW1wbGF0ZS1jb21waWxlcic7XG5pbXBvcnQgc3RyaW5naWZ5IGZyb20gJy4vc3RyaW5naWZ5JztcbmltcG9ydCBnZXRDc3NNb2R1bGVzIGZyb20gJy4vbW9kdWxlcy9jc3Ntb2R1bGVzJztcbmltcG9ydCBzdHJpcCBmcm9tICcuL21vZHVsZXMvc3RyaXAnO1xuaW1wb3J0IGF0b20gZnJvbSAnLi9tb2R1bGVzL2F0b20nO1xuaW1wb3J0IHtpc0VtcHR5fSBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29tcGlsZShzb3VyY2UsIG9wdGlvbnMgPSB7fSkge1xuXG4gICAgY29uc3Qge1xuICAgICAgICBtb2R1bGVzID0gW10sXG4gICAgICAgIGNzc01vZHVsZXMgPSBudWxsLFxuICAgICAgICBzY29wZUlkID0gJycsXG4gICAgICAgIHN0cmlwID0gdHJ1ZSxcbiAgICAgICAgYXRvbTogaXNBdG9tID0gZmFsc2VcbiAgICB9ID0gb3B0aW9ucztcblxuICAgIGlmICghaXNFbXB0eShjc3NNb2R1bGVzKSkge1xuICAgICAgICBtb2R1bGVzLnVuc2hpZnQoZ2V0Q3NzTW9kdWxlcyhjc3NNb2R1bGVzKSk7XG4gICAgfVxuXG4gICAgaWYgKHN0cmlwKSB7XG4gICAgICAgIG1vZHVsZXMudW5zaGlmdChzdHJpcCk7XG4gICAgfVxuXG4gICAgaWYgKGlzQXRvbSkge1xuICAgICAgICBtb2R1bGVzLnVuc2hpZnQoYXRvbSk7XG4gICAgfVxuXG4gICAgY29uc3Qge2FzdH0gPSB2dWVDb21waWxlKHNvdXJjZS50cmltKCksIHtcbiAgICAgICAgbW9kdWxlczogW1xuICAgICAgICAgICAgLi4uYnVpbGRJbk1vZHVsZXMsXG4gICAgICAgICAgICAuLi5tb2R1bGVzXG4gICAgICAgIF0sXG4gICAgICAgIHByZXNlcnZlV2hpdGVzcGFjZTogZmFsc2VcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGFzdCxcbiAgICAgICAgY29kZTogc3RyaW5naWZ5KGFzdCwgc2NvcGVJZClcbiAgICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==