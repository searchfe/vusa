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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("atom-expression-compiler");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("escape-quotes");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@babel/code-frame");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("to-single-quotes");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("vue-template-compiler");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("san");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "compile", function() { return /* binding */ compile; });

// EXTERNAL MODULE: external "@babel/code-frame"
var code_frame_ = __webpack_require__(3);

// EXTERNAL MODULE: external "atom-expression-compiler"
var external_atom_expression_compiler_ = __webpack_require__(1);

// EXTERNAL MODULE: external "escape-quotes"
var external_escape_quotes_ = __webpack_require__(2);
var external_escape_quotes_default = /*#__PURE__*/__webpack_require__.n(external_escape_quotes_);

// CONCATENATED MODULE: ./src/compiler/expression-transformer.js
/**
 * @file vue 的 expression 转 san，主要是处理 es6 语法
 * @author cxtom(cxtom2008@gmail.com)
 */



const mark = '__vusa__filter__mark__';
const reg = new RegExp(mark, 'g');
const validUnaryOperator = new Set(['+', '-', '!']);
const validBinaryOperator = new Set(['+', '-', '*', '/', '%', '>', '<', '>=', '<=', '==', '===', '!=', '!==']);
const validLogicalOperator = new Set(['&&', '||']);
const noBracketTypes = new Set(['ArrayExpression', 'Literal', 'ObjectExpression', 'Identifier', 'MemberExpression', 'CallExpression', 'TemplateExpression', 'UnaryExpression']);

function wrapBacket(code, node) {
  if (noBracketTypes.has(node.type)) {
    return code;
  }

  if (node.type === 'BinaryExpression' && ['==', '===', '!=', '!=='].includes(node.operator)) {
    return code;
  }

  return `(${code})`;
}

const Syntax = {
  ArrayExpression: 'ArrayExpression',
  Literal: 'Literal',
  ObjectExpression: 'ObjectExpression',
  UnaryExpression: 'UnaryExpression',
  Property: 'Property',
  VueExpression: 'VueExpression',
  VueFilter: 'VueFilter',
  Identifier: 'Identifier',
  MemberExpression: 'MemberExpression',
  BinaryExpression: 'BinaryExpression',
  LogicalExpression: 'LogicalExpression',
  ConditionalExpression: 'ConditionalExpression',
  CallExpression: 'CallExpression',
  TemplateExpression: 'TemplateExpression'
};
const VisitorKeys = {
  ArrayExpression: ['elements'],
  ObjectExpression: ['properties'],
  UnaryExpression: ['argument'],
  Property: ['value'],
  MemberExpression: ['object', 'property'],
  BinaryExpression: ['left', 'right'],
  LogicalExpression: ['left', 'right'],
  ConditionalExpression: ['test', 'consequent', 'alternate'],
  CallExpression: ['arguments'],
  VueExpression: ['expression', 'filters'],
  VueFilter: ['arguments'],
  TemplateExpression: ['expressions']
};

function expression_transformer_toString(a) {
  if (typeof a === 'number') {
    return a + '';
  }

  if (typeof a === 'string') {
    return `'${external_escape_quotes_default()(a)}'`;
  }

  return JSON.stringify(a);
}

const CodeGeneragor = {
  VueExpression(node, [expression, filters]) {
    let code = filters.reduce((pre, filter) => {
      return filter.code.replace(reg, pre);
    }, expression.code);
    return this.ret(code);
  },

  VueFilter(node, [args]) {
    let hasArgs = args.length > 0;
    return this.ret(`${mark} | ${node.name}` + (hasArgs ? `(${args.map(a => a.code).join(', ')})` : ''));
  },

  Identifier(node, results, ref) {
    return this.ret(node.name);
  },

  MemberExpression(node, results) {
    let [object, property] = results;

    if (node.computed) {
      return this.ret(`${object.code}[${property.code}]`);
    }

    if (property.code === 'length') {
      if (object.type === 'string') {
        if (object.isStatic) {
          let len = object.value.length;
          return this.ret(len + '', 'number', len);
        }

        return this.ret(`${object.code}.length`, 'number');
      }
    }

    return this.ret(`${object.code}.${property.code}`);
  },

  BinaryExpression(node, [left, right], ref) {
    if (!validBinaryOperator.has(node.operator)) {
      this.error(`invalid binary operator "${node.operator}"`, node);
    }

    if (left.isStatic && right.isStatic) {
      let value = new Function(`return ${left.code} ${node.operator} ${right.code}`)();
      return this.ret(expression_transformer_toString(value), getType(value), value);
    }

    let code = `${wrapBacket(left.code, node.left)}${node.operator}${wrapBacket(right.code, node.right)}`;
    return this.ret(code);
  },

  LogicalExpression(node, [left, right]) {
    if (!validLogicalOperator.has(node.operator)) {
      this.error(`invalid logical operator "${node.operator}"`, node);
    }

    if (left.isStatic && right.isStatic) {
      let value = new Function(`return ${left.code}${node.operator}${right.code}`)();
      return this.ret(expression_transformer_toString(value), getType(value), value);
    }

    let code = `${wrapBacket(left.code, node.left)}${node.operator}${wrapBacket(right.code, node.right)}`;
    return this.ret(code);
  },

  ConditionalExpression(node, [test, consequent, alternate]) {
    if (test.isStatic) {
      return test.value ? consequent : alternate;
    }

    let testCode = wrapBacket(test.code, node.test);
    let consequentCode = wrapBacket(consequent.code, node.consequent);
    let alternateCode = wrapBacket(alternate.code, node.alternate);
    return this.ret(`${testCode}?${consequentCode}:${alternateCode}`);
  },

  CallExpression(node, [args]) {
    return this.ret(`${node.callee.name}(${args.map(a => a.code).join(', ')})`);
  },

  TemplateExpression(node, [expressions]) {
    return this.ret(`(${expressions.map(({
      code
    }, i) => wrapBacket(code, node.expressions[i])).join('+')})`, 'string');
  },

  ArrayExpression(node, results) {
    let result = results[0];
    return this.ret(`[${result.map(c => c.code).join(', ')}]`, 'array');
  },

  Literal(node) {
    return this.ret(this.varExport(node.value), getType(node.value), node.value);
  },

  UnaryExpression(node, results) {
    if (!validUnaryOperator.has(node.operator)) {
      this.error(`unknow unary operator "${node.operator}"`, node);
    }

    let result = results[0];

    if (result.isStatic) {
      let value = new Function(`return ${node.operator}${result.code}`)();
      let stringify = expression_transformer_toString(value);
      return this.ret(stringify, getType(value), value);
    }

    return this.ret(`${node.operator}${result.code}`);
  },

  ObjectExpression(node, results) {
    if (node.hasComputed) {
      let code = '_ex(';
      let current;
      let prev;

      for (let i = 0, len = node.properties.length; i < len; i++) {
        const property = node.properties[i];
        prev = current;
        current = !!property.computed;

        if (current && prev === false) {
          code += '},';
        }

        if (current && !prev) {
          code += '_ocp([';
        }

        if (!current && prev) {
          code += ']),{';
        }

        if (!current && prev == null) {
          code += '{';
        }

        if (current === prev) {
          code += ',';
        }

        code += results[0][i].code;
      }

      code += current ? ']))' : '})';
      return this.ret(code);
    }

    let result = results[0];
    return this.ret(`{${result.map(c => c.code).join(',')}} `, 'object');
  },

  Property(node, results, ref) {
    if (node.computed) {
      ref.hasComputed = true;
      let keyCode = this.traverse(node.key, node).code;
      return this.ret(`{k:${keyCode},v:${results[0].code}}`);
    }

    let keyCode = this.genPropertyKey(node.key).code;
    return this.ret(`${keyCode}:${results[0].code}`);
  }

};

function getType(obj) {
  let typeStr = Object.prototype.toString.call(obj);
  return typeStr.substring(8, typeStr.length - 1).toLowerCase();
}

class expression_transformer_CodeGen {
  constructor({
    code
  }) {
    this.syntax = Syntax;
    this.keys = VisitorKeys;
    this.generater = CodeGeneragor;
    this.code = code;
  }

  error(message, node) {
    message = `[vusa expression parser] (${node.location.start.line}:${node.location.start.column}) : ${message}`;
    let codeFrame = Object(code_frame_["codeFrameColumns"])(this.code, node.location, {
      highlightCode: true
    });
    message += `\n${codeFrame}`;
    throw new Error(message);
  }

  traverse(node, ref) {
    let syntax = this.syntax[node.type];

    if (node === ref) {
      this.root = node;
    }

    node.ref = ref; // 对象的 key 值特殊处理一下

    if (!syntax) {
      this.error(`Unknown node type "${node.type}" was found when parsing "${node.name}"`, node);
    }

    let visitorKeys = this.keys[node.type] || [];
    let keyResults = visitorKeys.map(key => {
      let element = node[key];
      let result = null;

      if (this.isNode(element)) {
        result = this.traverse(element, node);
      } else if (Array.isArray(element)) {
        result = element.map(ele => this.traverse(ele, node));
      } else {
        this.error(`Unknown VisitorKey type "${typeof element}" was found when parsing ${element.name}`, element);
      }

      return result;
    });
    return this.generate(node, keyResults, ref);
  }

  generate(node, ...args) {
    return this.generater[node.type].apply(this, [node, ...args]);
  }

  genPropertyKey(node) {
    let code;

    switch (node.type) {
      case 'Identifier':
        return this.ret(node.name, 'string', node.name);

      case 'Literal':
        code = expression_transformer_toString(String(node.value));
        return this.ret(code, 'string', String(node.value));

      default:
        this.error(`invalid property key type "${node.type}"`, node);
    }
  }

  isNode(node) {
    if (node == null) {
      return false;
    }

    return typeof node === 'object' && typeof node.type === 'string';
  }

  ret(code, type, value) {
    return {
      code,
      type,
      value,
      isStatic: arguments.length > 2
    };
  }

  varExport(data) {
    return expression_transformer_toString(data);
  }

}

/* harmony default export */ var expression_transformer = (function (code) {
  if (!code) {
    return {
      code: ''
    };
  }

  let node;

  try {
    node = Object(external_atom_expression_compiler_["parse"])(code, {
      startRule: 'VueExpression'
    });
  } catch (e) {
    throw new Error(`SyntaxError is found when parsing code "${code}", ${e.stack}`);
  }

  let codegen = new expression_transformer_CodeGen({
    code
  });
  return {
    ast: node.expression,
    ...codegen.traverse(node, node)
  };
});
// CONCATENATED MODULE: ./src/compiler/modules/class.js
/**
 * @file class
 * @author cxtom(cxtom2008@gmail.com)
 */

const bindKeys = [':class', 'v-bind:class'];

function postTransformNode(node) {
  if (node.type === 1 && node.classBinding) {
    const staticClass = node.attrsMap.class || '';
    const classBinding = expression_transformer(node.classBinding).code;
    node.attrsMap.class = `{{ _mc('${staticClass}', ${classBinding}) }}`;
    bindKeys.forEach(key => delete node.attrsMap[key]);
  }
}

/* harmony default export */ var modules_class = ({
  postTransformNode
});
// EXTERNAL MODULE: external "to-single-quotes"
var external_to_single_quotes_ = __webpack_require__(4);
var external_to_single_quotes_default = /*#__PURE__*/__webpack_require__.n(external_to_single_quotes_);

// CONCATENATED MODULE: ./src/compiler/modules/style.js
/**
 * @file style
 * @author cxtom(cxtom2008@gmail.com)
 */


const style_bindKeys = [':style', 'v-bind:style', 'v-show'];

function style_postTransformNode(node) {
  const vShow = node.attrsMap['v-show'];

  if (node.type === 1 && (node.styleBinding || vShow)) {
    const staticStyle = node.staticStyle || '\'\'';
    const styleBinding = node.styleBinding ? expression_transformer(node.styleBinding).code : '{}'; // eslint-disable-next-line max-len

    node.attrsMap.style = `{{ _ms(${external_to_single_quotes_default()(staticStyle)}, ${styleBinding}${vShow ? `, ${expression_transformer(vShow).code}` : ''}) }}`;
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
    const ret = expression_transformer(value);
    const code = ret.code;
    node.attrsMap[key.replace(reBind, '')] = `{{ ${code} }}`;
  }

  if (node.attrsMap['v-bind']) {
    const vBind = node.attrsMap['v-bind'];
    node.attrsMap['s-bind'] = `{{ ${expression_transformer(vBind).code} }}`;
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
    node.attrsMap['s-if'] = expression_transformer(node.if).code;
    delete node.attrsMap['v-if'];
  }

  if (node.elseif) {
    node.attrsMap['s-else-if'] = expression_transformer(node.elseif).code;
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
    const trackByExpr = expression_transformer(node.key); // san 只支持变量

    fr += trackByExpr.ast.type === 'Identifier' ? ` trackBy ${node.key}` : '';
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

const reEvent = /^(@|v-on:)/;

function event_postTransformNode(node) {
  const eventAttrs = node.attrsList.filter(n => reEvent.test(n.name));

  for (const attr of eventAttrs) {
    delete node.attrsMap[attr.name];
    const [name, ...modifiers] = attr.name.split('.');
    const eventHandler = attr.value ? expression_transformer(attr.value).code : '_noop';
    node.attrsMap[`on-${name.replace(reEvent, '')}`] = `${modifiers.map(m => `${m}:`).join('')}${eventHandler}`;
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
  if (node.attrsMap && node.attrsMap['v-dangerous-html']) {
    const dir = node.directives.find(d => d.name === 'dangerous-html');
    dir.name = 'html';
    dir.value = node.attrsMap['v-html'] = node.attrsMap['v-dangerous-html'];
    delete node.attrsMap['v-dangerous-html'];
  }

  if (node.attrsMap && node.attrsMap['v-safe-html']) {
    const dir = node.directives.find(d => d.name === 'safe-html');
    dir.name = 'html';
    dir.value = node.attrsMap['v-html'] = `_sf(${node.attrsMap['v-safe-html']})`;
    delete node.attrsMap['v-safe-html'];
  }

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

/* harmony default export */ var modules_html = ({
  postTransformNode: html_postTransformNode
});
// CONCATENATED MODULE: ./src/compiler/modules/ref.js
/**
 * @file ref
 * @author cxtom(cxtom2008@gmail.com)
 */
function ref_postTransformNode(node, options) {
  if (node.type !== 1 || !node.attrsMap.ref && !node.attrsMap[':ref']) {
    return;
  }

  const ref = node.attrsMap.ref;

  if (ref) {
    delete node.attrsMap.ref;
    node.attrsMap['s-ref'] = ref;
    const info = {
      name: ref,
      root: node.parent ? undefined : 1
    };
    options.refs.push(info);
  }

  const bindRef = node.attrsMap[':ref'];

  if (bindRef) {
    delete node.attrsMap[':ref'];
    node.attrsMap['s-ref'] = `{{ ${bindRef} }}`;
  }
}

/* harmony default export */ var ref = ({
  postTransformNode: ref_postTransformNode
});
// CONCATENATED MODULE: ./src/compiler/modules/dynamic-component.js
/**
 * @file component :is
 * @author cxtom(cxtom2008@gmail.com)
 */


function dynamic_component_postTransformNode(node, options) {
  if (!(node.type === 1 && node.tag === 'component')) {
    return;
  }

  let is = node.attrsMap.is;
  delete node.attrsMap.is;

  if (!is.startsWith('{{')) {
    node.tag = node.attrsMap.is;
    return;
  }

  const value = is.slice(2, is.length - 2).trim();
  const expr = Object(external_atom_expression_compiler_["parse"])(value, {
    startRule: 'VueExpression'
  });

  if (node.if || node.elseif || node.else) {
    options.error('dynamic component can not use with v-if.');
    return;
  }

  if (expr.expression.type === 'ConditionalExpression' && expr.expression.consequent.type === 'Literal' && expr.expression.alternate.type === 'Literal') {
    const testLocation = expr.expression.test.location;
    const test = value.slice(testLocation.start.offset, testLocation.end.offset);
    const attrs = { ...node.attrsMap,
      's-else': ''
    };
    node.tag = expr.expression.consequent.value;
    node.attrsMap['s-if'] = test;
    node.ifConditions = [{
      exp: test,
      block: node
    }, {
      block: { ...node,
        attrsMap: attrs,
        tag: expr.expression.alternate.value
      }
    }];
  }
}

/* harmony default export */ var dynamic_component = ({
  postTransformNode: dynamic_component_postTransformNode
});
// CONCATENATED MODULE: ./src/compiler/constant.js
/**
 * @file constants
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
const booleanAttr = {
  allowfullscreen: true,
  async: true,
  autofocus: true,
  autoplay: true,
  checked: true,
  compact: true,
  controls: true,
  declare: true,
  default: true,
  defaultchecked: true,
  defaultmuted: true,
  defaultselected: true,
  defer: true,
  disabled: true,
  enabled: true,
  formnovalidate: true,
  hidden: true,
  indeterminate: true,
  inert: true,
  ismap: true,
  itemscope: true,
  loop: true,
  multiple: true,
  muted: true,
  nohref: true,
  noresize: true,
  noshade: true,
  novalidate: true,
  nowrap: true,
  open: true,
  pauseonexit: true,
  readonly: true,
  required: true,
  reversed: true,
  scoped: true,
  seamless: true,
  selected: true,
  sortable: true,
  translate: true,
  truespeed: true,
  typemustmatch: true,
  visible: true
};
const noValueAttr = {
  's-else': true
};
const htmlTag = {
  html: true,
  body: true,
  base: true,
  head: true,
  link: true,
  meta: true,
  style: true,
  title: true,
  address: true,
  article: true,
  aside: true,
  footer: true,
  header: true,
  h1: true,
  h2: true,
  h3: true,
  h4: true,
  h5: true,
  h6: true,
  hgroup: true,
  nav: true,
  section: true,
  div: true,
  dd: true,
  dl: true,
  dt: true,
  figcaption: true,
  figure: true,
  hr: true,
  img: true,
  li: true,
  main: true,
  ol: true,
  p: true,
  pre: true,
  ul: true,
  a: true,
  b: true,
  abbr: true,
  bdi: true,
  bdo: true,
  br: true,
  cite: true,
  code: true,
  data: true,
  dfn: true,
  em: true,
  i: true,
  kbd: true,
  mark: true,
  q: true,
  rp: true,
  rt: true,
  rtc: true,
  ruby: true,
  s: true,
  samp: true,
  small: true,
  span: true,
  strong: true,
  sub: true,
  sup: true,
  time: true,
  u: true,
  var: true,
  wbr: true,
  area: true,
  audio: true,
  map: true,
  track: true,
  video: true,
  embed: true,
  object: true,
  param: true,
  source: true,
  canvas: true,
  script: true,
  noscript: true,
  del: true,
  ins: true,
  caption: true,
  col: true,
  colgroup: true,
  table: true,
  thead: true,
  tbody: true,
  td: true,
  th: true,
  tr: true,
  button: true,
  datalist: true,
  fieldset: true,
  form: true,
  input: true,
  label: true,
  legend: true,
  meter: true,
  optgroup: true,
  option: true,
  output: true,
  progress: true,
  select: true,
  textarea: true,
  details: true,
  dialog: true,
  menu: true,
  menuitem: true,
  summary: true,
  content: true,
  element: true,
  shadow: true,
  template: true
};
// CONCATENATED MODULE: ./src/compiler/modules/boolean.js
/**
 * @file bool 型传值
 * @author cxtom(cxtom2008@gmail.com)
 */


function boolean_postTransformNode(node) {
  if (!node.type === 1 || !node.attrsMap) {
    return;
  }

  const keys = Object.keys(node.attrsMap).filter(n => node.attrsMap[n] === '');

  for (const key of keys) {
    if (htmlTag[node.tag] && booleanAttr[key] || noValueAttr[key]) {
      continue;
    }

    node.attrsMap[key] = `{{ true }}`;
  }
}

/* harmony default export */ var modules_boolean = ({
  postTransformNode: boolean_postTransformNode
});
// CONCATENATED MODULE: ./src/compiler/modules/template.js
/**
 * @file template
 * @author cxtom(cxtom2008@gmail.com)
 */
function template_preTransformNode(el) {
  if (el.tag === 'template') {
    el.tag = 'fragment';
  }
}

/* harmony default export */ var modules_template = ({
  preTransformNode: template_preTransformNode
});
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(0);

// CONCATENATED MODULE: ./src/compiler/modules/transition.js
/**
 * @file template
 * @author cxtom(cxtom2008@gmail.com)
 */


function transition_postTransformNode(el) {
  if (el.tag === 'transition') {
    el.tag = 'fragment';
    const attrs = Object.keys(el.attrsMap).map(name => {
      let value = el.attrsMap[name];
      value = value.startsWith('{{') ? value.slice(2, value.length - 2) : `'${value}'`;
      delete el.attrsMap[name];
      return `${Object(external_lodash_["camelCase"])(name)}:${value}`;
    });

    if (el.children && el.children[0]) {
      el.children[0].attrsMap['s-transition'] = `_t({${attrs.join(',')}})`;

      if (el.children[0].ifConditions) {
        for (const item of el.children[0].ifConditions.slice(1)) {
          if (item.attrsMap) {
            item.attrsMap['s-transition'] = `_t({${attrs.join(',')}})`;
          }
        }
      }
    }
  }
}

/* harmony default export */ var transition = ({
  postTransformNode: transition_postTransformNode
});
// CONCATENATED MODULE: ./src/compiler/modules/text-combine.js
/**
 * @file text-combine
 * @author cxtom(cxtom2008@gmail.com)
 */


function text_combine_postTransformNode(el) {
  if (el.children && el.children.length > 0) {
    for (const child of el.children) {
      if (child.type !== 2 || !child.tokens || child.tokens.length <= 1) {
        continue;
      }

      child.text = child.tokens.map((token, index) => {
        let text = '\'\'';

        if (token['@binding']) {
          text = token['@binding'];
        }

        if (typeof token === 'string') {
          text = `'${external_escape_quotes_default()(token)}'`;
        }

        return index === 0 ? text : `_cat(${text})`;
      }).join(' | ');
      child.text = `{{ ${child.text} }}`;
      console.log(child.text);
    }
  }
}

/* harmony default export */ var text_combine = ({
  postTransformNode: text_combine_postTransformNode
});
// CONCATENATED MODULE: ./src/compiler/modules/index.js
/**
 * @file transformers
 * @author cxtom(cxtom2008@gmail.com)
 */













/* harmony default export */ var compiler_modules = ([modules_template, modules_boolean, modules_if, modules_for, modules_event, modules_html, ref, text_combine, modules_class, style, // bind 放在所有处理完之后
bind, transition, dynamic_component]);
// EXTERNAL MODULE: external "vue-template-compiler"
var external_vue_template_compiler_ = __webpack_require__(5);

// CONCATENATED MODULE: ./src/compiler/stringify.js
/**
 * @file get html from ast
 * @author cxtom(cxtom2008@gmail.com)
 */




function stringifyAttr(key, value, tag) {
  if (noValueAttr[key] || !value && htmlTag[tag] && booleanAttr[key]) {
    return key;
  }

  return `${key}=${JSON.stringify(value.startsWith('{{') ? value : value.replace(/\s+/g, ' '))}`;
} // function transformChild(node) {
//     return node.tokens.reduce((prev, token) => {
//         if (typeof token === 'string') {
//             return prev + token;
//         }
//         console.log(node);
//         return prev + `{{ ${transform(token['@binding']).code} }}`;
//     }, '');
// }


function stringify(ast, {
  scopeId,
  strip,
  atom
}) {
  if (!Array.isArray(ast)) {
    ast = [ast];
  }

  let html = '';

  for (const node of ast) {
    if (node.type === 3 || node.type === 2) {
      const text = node.text;
      html += strip ? Object(external_lodash_["trim"])(text, ' \n\t') : text;
    } else if (node.type === 1) {
      const attrs = Object.keys(node.attrsMap).map(key => stringifyAttr(key, node.attrsMap[key], node.tag));

      if (scopeId) {
        scopeId = scopeId.replace(/^data-(a|v)-/, '');
        attrs.push(`data-${atom ? 'a' : 'v'}-${scopeId}`);
      }

      const hasChildren = node.children && node.children.length > 0;
      const hasAttr = attrs.length > 0;
      html += `<${node.tag}${hasAttr ? ' ' : ''}${attrs.join(' ')}>`;
      html += hasChildren ? stringify(node.children, {
        scopeId,
        strip,
        atom
      }) : '';
      html += !hasChildren && singleTag[node.tag] ? '' : `</${node.tag}>`;

      if (node.ifConditions && node.ifConditions.length > 1) {
        html += stringify(node.ifConditions.slice(1).map(n => n.block), {
          scopeId,
          strip,
          atom
        });
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
const extend = Object.assign;
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
 * Remove an item from an array.
 */

function remove(arr, item) {
  if (arr.length) {
    const index = arr.indexOf(item);

    if (index > -1) {
      return arr.splice(index, 1);
    }
  }
}
/**
 * Get the raw type string of a value, e.g., [object Object].
 */

const _toString = Object.prototype.toString;
/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */

function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}
/**
 * Check whether an object has the property.
 */

const util_hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
  return util_hasOwnProperty.call(obj, key);
}
/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}
function def(obj, key, property) {
  Object.defineProperty(obj, key, extend({
    enumerable: false,
    configurable: true
  }, property));
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
/**
 * Ensure a function is called only once.
 */

function once(fn) {
  let called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  };
}
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

/* harmony default export */ var modules_atom = ({
  preTransformNode: atom_preTransformNode
});
// EXTERNAL MODULE: external "san"
var external_san_ = __webpack_require__(6);

// CONCATENATED MODULE: ./src/compiler/optimize-anode.js
/**
 * @file 优化 aNode 的体积
 * @author cxtom(cxtom2008@gmail.com)
 */
function optimize(aNode) {
  delete aNode.raw;

  if (aNode.children) {
    aNode.children = aNode.children.map(optimize);
  }

  if (aNode.elses) {
    aNode.elses = aNode.elses.map(optimize);
  }

  if (aNode.textExpr) {
    delete aNode.textExpr.raw;
  }

  if (aNode.props) {
    aNode.props = aNode.props.map(prop => {
      if (prop.raw) {
        // 不能删除，运行时有用
        prop.raw = 1;
      }

      if (prop.expr) {
        delete prop.expr.raw;
      }

      return prop;
    });
  }

  if (aNode.events) {
    aNode.events = aNode.events.map(event => {
      if (event.raw) {
        delete event.raw;
      }

      if (event.expr) {
        delete event.expr.raw;
      }

      return event;
    });
  }

  if (aNode.directives) {
    Object.keys(aNode.directives).forEach(dir => {
      delete aNode.directives[dir].raw;

      if (aNode.directives[dir].value) {
        delete aNode.directives[dir].value.raw;
      }
    });
  }

  return aNode;
}
// CONCATENATED MODULE: ./src/compiler/index.js
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

  if (isAtom) {
    modules.unshift(modules_atom);
  }

  const errors = [];
  const compilerOptions = {
    modules: [...compiler_modules, ...modules],
    preserveWhitespace: false,
    useDynamicComponent: false,
    refs: [],

    error(msg) {
      console.error(`[vusa error] ${msg}`);
      errors.push(msg);
    }

  }; // console.log(source);

  const {
    ast
  } = Object(external_vue_template_compiler_["compile"])(source.trim(), compilerOptions);
  const template = stringify(ast, {
    scopeId,
    strip,
    atom: isAtom
  }); // console.log(template);

  const aNode = Object(external_san_["parseTemplate"])(template, {
    trimWhitespace: 'blank'
  }).children[0];
  return {
    ast,
    aNode: optimize(aNode),
    template,
    refs: compilerOptions.refs,
    errors
  };
}

/***/ })
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXRvbS1leHByZXNzaW9uLWNvbXBpbGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXNjYXBlLXF1b3Rlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9jb2RlLWZyYW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG8tc2luZ2xlLXF1b3Rlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInZ1ZS10ZW1wbGF0ZS1jb21waWxlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNhblwiIiwid2VicGFjazovLy8uL3NyYy9jb21waWxlci9leHByZXNzaW9uLXRyYW5zZm9ybWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21waWxlci9tb2R1bGVzL2NsYXNzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21waWxlci9tb2R1bGVzL3N0eWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21waWxlci9tb2R1bGVzL2JpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBpbGVyL21vZHVsZXMvaWYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBpbGVyL21vZHVsZXMvZm9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21waWxlci9tb2R1bGVzL2V2ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21waWxlci9tb2R1bGVzL2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBpbGVyL21vZHVsZXMvcmVmLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21waWxlci9tb2R1bGVzL2R5bmFtaWMtY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21waWxlci9jb25zdGFudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcGlsZXIvbW9kdWxlcy9ib29sZWFuLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21waWxlci9tb2R1bGVzL3RlbXBsYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21waWxlci9tb2R1bGVzL3RyYW5zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBpbGVyL21vZHVsZXMvdGV4dC1jb21iaW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21waWxlci9tb2R1bGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21waWxlci9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21waWxlci9tb2R1bGVzL2Nzc21vZHVsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBpbGVyL21vZHVsZXMvYXRvbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcGlsZXIvb3B0aW1pemUtYW5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBpbGVyL2luZGV4LmpzIl0sIm5hbWVzIjpbIm1hcmsiLCJyZWciLCJSZWdFeHAiLCJ2YWxpZFVuYXJ5T3BlcmF0b3IiLCJTZXQiLCJ2YWxpZEJpbmFyeU9wZXJhdG9yIiwidmFsaWRMb2dpY2FsT3BlcmF0b3IiLCJub0JyYWNrZXRUeXBlcyIsIndyYXBCYWNrZXQiLCJjb2RlIiwibm9kZSIsImhhcyIsInR5cGUiLCJpbmNsdWRlcyIsIm9wZXJhdG9yIiwiU3ludGF4IiwiQXJyYXlFeHByZXNzaW9uIiwiTGl0ZXJhbCIsIk9iamVjdEV4cHJlc3Npb24iLCJVbmFyeUV4cHJlc3Npb24iLCJQcm9wZXJ0eSIsIlZ1ZUV4cHJlc3Npb24iLCJWdWVGaWx0ZXIiLCJJZGVudGlmaWVyIiwiTWVtYmVyRXhwcmVzc2lvbiIsIkJpbmFyeUV4cHJlc3Npb24iLCJMb2dpY2FsRXhwcmVzc2lvbiIsIkNvbmRpdGlvbmFsRXhwcmVzc2lvbiIsIkNhbGxFeHByZXNzaW9uIiwiVGVtcGxhdGVFeHByZXNzaW9uIiwiVmlzaXRvcktleXMiLCJ0b1N0cmluZyIsImEiLCJlc2NhcGVRdW90ZXMiLCJKU09OIiwic3RyaW5naWZ5IiwiQ29kZUdlbmVyYWdvciIsImV4cHJlc3Npb24iLCJmaWx0ZXJzIiwicmVkdWNlIiwicHJlIiwiZmlsdGVyIiwicmVwbGFjZSIsInJldCIsImFyZ3MiLCJoYXNBcmdzIiwibGVuZ3RoIiwibmFtZSIsIm1hcCIsImpvaW4iLCJyZXN1bHRzIiwicmVmIiwib2JqZWN0IiwicHJvcGVydHkiLCJjb21wdXRlZCIsImlzU3RhdGljIiwibGVuIiwidmFsdWUiLCJsZWZ0IiwicmlnaHQiLCJlcnJvciIsIkZ1bmN0aW9uIiwiZ2V0VHlwZSIsInRlc3QiLCJjb25zZXF1ZW50IiwiYWx0ZXJuYXRlIiwidGVzdENvZGUiLCJjb25zZXF1ZW50Q29kZSIsImFsdGVybmF0ZUNvZGUiLCJjYWxsZWUiLCJleHByZXNzaW9ucyIsImkiLCJyZXN1bHQiLCJjIiwidmFyRXhwb3J0IiwiaGFzQ29tcHV0ZWQiLCJjdXJyZW50IiwicHJldiIsInByb3BlcnRpZXMiLCJrZXlDb2RlIiwidHJhdmVyc2UiLCJrZXkiLCJnZW5Qcm9wZXJ0eUtleSIsIm9iaiIsInR5cGVTdHIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJjYWxsIiwic3Vic3RyaW5nIiwidG9Mb3dlckNhc2UiLCJDb2RlR2VuIiwiY29uc3RydWN0b3IiLCJzeW50YXgiLCJrZXlzIiwiZ2VuZXJhdGVyIiwibWVzc2FnZSIsImxvY2F0aW9uIiwic3RhcnQiLCJsaW5lIiwiY29sdW1uIiwiY29kZUZyYW1lIiwiY29kZUZyYW1lQ29sdW1ucyIsImhpZ2hsaWdodENvZGUiLCJFcnJvciIsInJvb3QiLCJ2aXNpdG9yS2V5cyIsImtleVJlc3VsdHMiLCJlbGVtZW50IiwiaXNOb2RlIiwiQXJyYXkiLCJpc0FycmF5IiwiZWxlIiwiZ2VuZXJhdGUiLCJhcHBseSIsIlN0cmluZyIsImFyZ3VtZW50cyIsImRhdGEiLCJwYXJzZSIsInN0YXJ0UnVsZSIsImUiLCJzdGFjayIsImNvZGVnZW4iLCJhc3QiLCJiaW5kS2V5cyIsInBvc3RUcmFuc2Zvcm1Ob2RlIiwiY2xhc3NCaW5kaW5nIiwic3RhdGljQ2xhc3MiLCJhdHRyc01hcCIsImNsYXNzIiwidHJhbnNmb3JtIiwiZm9yRWFjaCIsInZTaG93Iiwic3R5bGVCaW5kaW5nIiwic3RhdGljU3R5bGUiLCJzdHlsZSIsInRvU2luZ2xlUXVvdGVzIiwicmVCaW5kIiwibiIsInZCaW5kIiwiaWYiLCJlbHNlaWYiLCJlbHNlIiwiZm9yIiwiZnIiLCJhbGlhcyIsIml0ZXJhdG9yMSIsInRyYWNrQnlFeHByIiwicmVFdmVudCIsImV2ZW50QXR0cnMiLCJhdHRyc0xpc3QiLCJhdHRyIiwibW9kaWZpZXJzIiwic3BsaXQiLCJldmVudEhhbmRsZXIiLCJtIiwiZGlyIiwiZGlyZWN0aXZlcyIsImZpbmQiLCJkIiwiY2hpbGRyZW4iLCJ0ZXh0Iiwib3B0aW9ucyIsImluZm8iLCJwYXJlbnQiLCJ1bmRlZmluZWQiLCJyZWZzIiwicHVzaCIsImJpbmRSZWYiLCJ0YWciLCJpcyIsInN0YXJ0c1dpdGgiLCJzbGljZSIsInRyaW0iLCJleHByIiwidGVzdExvY2F0aW9uIiwib2Zmc2V0IiwiZW5kIiwiYXR0cnMiLCJpZkNvbmRpdGlvbnMiLCJleHAiLCJibG9jayIsInNpbmdsZVRhZyIsImFyZWEiLCJiYXNlIiwiYmFzZWZvbnQiLCJiciIsImNvbCIsImNvbW1hbmQiLCJlbWJlZCIsImZyYW1lIiwiaHIiLCJpbWciLCJpbnB1dCIsImlzaW5kZXgiLCJrZXlnZW4iLCJsaW5rIiwibWV0YSIsInBhcmFtIiwic291cmNlIiwidHJhY2siLCJ3YnIiLCJib29sZWFuQXR0ciIsImFsbG93ZnVsbHNjcmVlbiIsImFzeW5jIiwiYXV0b2ZvY3VzIiwiYXV0b3BsYXkiLCJjaGVja2VkIiwiY29tcGFjdCIsImNvbnRyb2xzIiwiZGVjbGFyZSIsImRlZmF1bHQiLCJkZWZhdWx0Y2hlY2tlZCIsImRlZmF1bHRtdXRlZCIsImRlZmF1bHRzZWxlY3RlZCIsImRlZmVyIiwiZGlzYWJsZWQiLCJlbmFibGVkIiwiZm9ybW5vdmFsaWRhdGUiLCJoaWRkZW4iLCJpbmRldGVybWluYXRlIiwiaW5lcnQiLCJpc21hcCIsIml0ZW1zY29wZSIsImxvb3AiLCJtdWx0aXBsZSIsIm11dGVkIiwibm9ocmVmIiwibm9yZXNpemUiLCJub3NoYWRlIiwibm92YWxpZGF0ZSIsIm5vd3JhcCIsIm9wZW4iLCJwYXVzZW9uZXhpdCIsInJlYWRvbmx5IiwicmVxdWlyZWQiLCJyZXZlcnNlZCIsInNjb3BlZCIsInNlYW1sZXNzIiwic2VsZWN0ZWQiLCJzb3J0YWJsZSIsInRyYW5zbGF0ZSIsInRydWVzcGVlZCIsInR5cGVtdXN0bWF0Y2giLCJ2aXNpYmxlIiwibm9WYWx1ZUF0dHIiLCJodG1sVGFnIiwiaHRtbCIsImJvZHkiLCJoZWFkIiwidGl0bGUiLCJhZGRyZXNzIiwiYXJ0aWNsZSIsImFzaWRlIiwiZm9vdGVyIiwiaGVhZGVyIiwiaDEiLCJoMiIsImgzIiwiaDQiLCJoNSIsImg2IiwiaGdyb3VwIiwibmF2Iiwic2VjdGlvbiIsImRpdiIsImRkIiwiZGwiLCJkdCIsImZpZ2NhcHRpb24iLCJmaWd1cmUiLCJsaSIsIm1haW4iLCJvbCIsInAiLCJ1bCIsImIiLCJhYmJyIiwiYmRpIiwiYmRvIiwiY2l0ZSIsImRmbiIsImVtIiwia2JkIiwicSIsInJwIiwicnQiLCJydGMiLCJydWJ5IiwicyIsInNhbXAiLCJzbWFsbCIsInNwYW4iLCJzdHJvbmciLCJzdWIiLCJzdXAiLCJ0aW1lIiwidSIsInZhciIsImF1ZGlvIiwidmlkZW8iLCJjYW52YXMiLCJzY3JpcHQiLCJub3NjcmlwdCIsImRlbCIsImlucyIsImNhcHRpb24iLCJjb2xncm91cCIsInRhYmxlIiwidGhlYWQiLCJ0Ym9keSIsInRkIiwidGgiLCJ0ciIsImJ1dHRvbiIsImRhdGFsaXN0IiwiZmllbGRzZXQiLCJmb3JtIiwibGFiZWwiLCJsZWdlbmQiLCJtZXRlciIsIm9wdGdyb3VwIiwib3B0aW9uIiwib3V0cHV0IiwicHJvZ3Jlc3MiLCJzZWxlY3QiLCJ0ZXh0YXJlYSIsImRldGFpbHMiLCJkaWFsb2ciLCJtZW51IiwibWVudWl0ZW0iLCJzdW1tYXJ5IiwiY29udGVudCIsInNoYWRvdyIsInRlbXBsYXRlIiwicHJlVHJhbnNmb3JtTm9kZSIsImVsIiwiY2FtZWxDYXNlIiwiaXRlbSIsImNoaWxkIiwidG9rZW5zIiwidG9rZW4iLCJpbmRleCIsImNvbnNvbGUiLCJsb2ciLCJib29sIiwieWYiLCJldmVudCIsInRleHRDb21iaW5lIiwiY2xhenoiLCJiaW5kIiwidHJhbnNpdGlvbiIsImR5bmFtaWNDb21wb25lbnQiLCJzdHJpbmdpZnlBdHRyIiwic2NvcGVJZCIsInN0cmlwIiwiYXRvbSIsImhhc0NoaWxkcmVuIiwiaGFzQXR0ciIsImV4dGVuZCIsImFzc2lnbiIsInRvT2JqZWN0IiwiYXJyIiwicmVzIiwicmVtb3ZlIiwiaW5kZXhPZiIsInNwbGljZSIsIl90b1N0cmluZyIsImlzT2JqZWN0IiwiaGFzT3duUHJvcGVydHkiLCJoYXNPd24iLCJpc1BsYWluT2JqZWN0IiwiZGVmIiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwiY2FjaGVkIiwiZm4iLCJjYWNoZSIsImNyZWF0ZSIsImNhY2hlZEZuIiwic3RyIiwiaGl0IiwiaHlwaGVuYXRlUkUiLCJoeXBoZW5hdGUiLCJjYW1lbGl6ZSIsIl8iLCJ0b1VwcGVyQ2FzZSIsIm9uY2UiLCJjYWxsZWQiLCJjc3NNb2R1bGVzIiwiJHN0eWxlIiwib3B0aW1pemUiLCJhTm9kZSIsInJhdyIsImVsc2VzIiwidGV4dEV4cHIiLCJwcm9wcyIsInByb3AiLCJldmVudHMiLCJjb21waWxlIiwibW9kdWxlcyIsImlzQXRvbSIsImlzRW1wdHkiLCJ1bnNoaWZ0IiwiZ2V0Q3NzTW9kdWxlcyIsImVycm9ycyIsImNvbXBpbGVyT3B0aW9ucyIsImJ1aWxkSW5Nb2R1bGVzIiwicHJlc2VydmVXaGl0ZXNwYWNlIiwidXNlRHluYW1pY0NvbXBvbmVudCIsIm1zZyIsInZ1ZUNvbXBpbGUiLCJwYXJzZVRlbXBsYXRlIiwidHJpbVdoaXRlc3BhY2Ui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Q0FMLFlBQU0sQ0FBQy9PLElBQVAsQ0FBWW9QLEdBQVo7QUFDSDs7QUFYbUIsR0FBeEIsQ0FuQjBDLENBaUMxQzs7QUFFQSxRQUFNO0FBQUNoUztBQUFELE1BQVFpUyxrREFBVSxDQUFDck4sTUFBTSxDQUFDMUIsSUFBUCxFQUFELEVBQWdCME8sZUFBaEIsQ0FBeEI7QUFFQSxRQUFNekUsUUFBUSxHQUFHMVMsU0FBUyxDQUFDdUYsR0FBRCxFQUFNO0FBQUV1TyxXQUFGO0FBQVdDLFNBQVg7QUFBa0JDLFFBQUksRUFBRThDO0FBQXhCLEdBQU4sQ0FBMUIsQ0FyQzBDLENBc0MxQzs7QUFDQSxRQUFNVCxLQUFLLEdBQUdvQixzQ0FBYSxDQUFDL0UsUUFBRCxFQUFXO0FBQ2xDZ0Ysa0JBQWMsRUFBRTtBQURrQixHQUFYLENBQWIsQ0FFWDlQLFFBRlcsQ0FFRixDQUZFLENBQWQ7QUFJQSxTQUFPO0FBQ0hyQyxPQURHO0FBRUg4USxTQUFLLEVBQUVELFFBQVEsQ0FBQ0MsS0FBRCxDQUZaO0FBR0gzRCxZQUhHO0FBSUh4SyxRQUFJLEVBQUVpUCxlQUFlLENBQUNqUCxJQUpuQjtBQUtIZ1A7QUFMRyxHQUFQO0FBT0gsQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA3KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhdG9tLWV4cHJlc3Npb24tY29tcGlsZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXNjYXBlLXF1b3Rlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvY29kZS1mcmFtZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0by1zaW5nbGUtcXVvdGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInZ1ZS10ZW1wbGF0ZS1jb21waWxlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzYW5cIik7IiwiLyoqXG4gKiBAZmlsZSB2dWUg55qEIGV4cHJlc3Npb24g6L2sIHNhbu+8jOS4u+imgeaYr+WkhOeQhiBlczYg6K+t5rOVXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHtjb2RlRnJhbWVDb2x1bW5zfSBmcm9tICdAYmFiZWwvY29kZS1mcmFtZSc7XG5pbXBvcnQge3BhcnNlfSBmcm9tICdhdG9tLWV4cHJlc3Npb24tY29tcGlsZXInO1xuaW1wb3J0IGVzY2FwZVF1b3RlcyBmcm9tICdlc2NhcGUtcXVvdGVzJztcblxuY29uc3QgbWFyayA9ICdfX3Z1c2FfX2ZpbHRlcl9fbWFya19fJztcbmNvbnN0IHJlZyA9IG5ldyBSZWdFeHAobWFyaywgJ2cnKTtcblxuY29uc3QgdmFsaWRVbmFyeU9wZXJhdG9yID0gbmV3IFNldChbJysnLCAnLScsICchJ10pO1xuY29uc3QgdmFsaWRCaW5hcnlPcGVyYXRvciA9IG5ldyBTZXQoWycrJywgJy0nLCAnKicsICcvJywgJyUnLCAnPicsICc8JywgJz49JywgJzw9JywgJz09JywgJz09PScsICchPScsICchPT0nXSk7XG5jb25zdCB2YWxpZExvZ2ljYWxPcGVyYXRvciA9IG5ldyBTZXQoWycmJicsICd8fCddKTtcbmNvbnN0IG5vQnJhY2tldFR5cGVzID0gbmV3IFNldChbXG4gICAgJ0FycmF5RXhwcmVzc2lvbicsXG4gICAgJ0xpdGVyYWwnLFxuICAgICdPYmplY3RFeHByZXNzaW9uJyxcbiAgICAnSWRlbnRpZmllcicsXG4gICAgJ01lbWJlckV4cHJlc3Npb24nLFxuICAgICdDYWxsRXhwcmVzc2lvbicsXG4gICAgJ1RlbXBsYXRlRXhwcmVzc2lvbicsXG4gICAgJ1VuYXJ5RXhwcmVzc2lvbidcbl0pO1xuXG5mdW5jdGlvbiB3cmFwQmFja2V0KGNvZGUsIG5vZGUpIHtcbiAgICBpZiAobm9CcmFja2V0VHlwZXMuaGFzKG5vZGUudHlwZSkpIHtcbiAgICAgICAgcmV0dXJuIGNvZGU7XG4gICAgfVxuICAgIGlmIChub2RlLnR5cGUgPT09ICdCaW5hcnlFeHByZXNzaW9uJyAmJiBbJz09JywgJz09PScsICchPScsICchPT0nXS5pbmNsdWRlcyhub2RlLm9wZXJhdG9yKSkge1xuICAgICAgICByZXR1cm4gY29kZTtcbiAgICB9XG4gICAgcmV0dXJuIGAoJHtjb2RlfSlgO1xufVxuXG5jb25zdCBTeW50YXggPSB7XG4gICAgQXJyYXlFeHByZXNzaW9uOiAnQXJyYXlFeHByZXNzaW9uJyxcbiAgICBMaXRlcmFsOiAnTGl0ZXJhbCcsXG4gICAgT2JqZWN0RXhwcmVzc2lvbjogJ09iamVjdEV4cHJlc3Npb24nLFxuICAgIFVuYXJ5RXhwcmVzc2lvbjogJ1VuYXJ5RXhwcmVzc2lvbicsXG4gICAgUHJvcGVydHk6ICdQcm9wZXJ0eScsXG4gICAgVnVlRXhwcmVzc2lvbjogJ1Z1ZUV4cHJlc3Npb24nLFxuICAgIFZ1ZUZpbHRlcjogJ1Z1ZUZpbHRlcicsXG4gICAgSWRlbnRpZmllcjogJ0lkZW50aWZpZXInLFxuICAgIE1lbWJlckV4cHJlc3Npb246ICdNZW1iZXJFeHByZXNzaW9uJyxcbiAgICBCaW5hcnlFeHByZXNzaW9uOiAnQmluYXJ5RXhwcmVzc2lvbicsXG4gICAgTG9naWNhbEV4cHJlc3Npb246ICdMb2dpY2FsRXhwcmVzc2lvbicsXG4gICAgQ29uZGl0aW9uYWxFeHByZXNzaW9uOiAnQ29uZGl0aW9uYWxFeHByZXNzaW9uJyxcbiAgICBDYWxsRXhwcmVzc2lvbjogJ0NhbGxFeHByZXNzaW9uJyxcbiAgICBUZW1wbGF0ZUV4cHJlc3Npb246ICdUZW1wbGF0ZUV4cHJlc3Npb24nXG59O1xuXG5jb25zdCBWaXNpdG9yS2V5cyA9IHtcbiAgICBBcnJheUV4cHJlc3Npb246IFsnZWxlbWVudHMnXSxcbiAgICBPYmplY3RFeHByZXNzaW9uOiBbJ3Byb3BlcnRpZXMnXSxcbiAgICBVbmFyeUV4cHJlc3Npb246IFsnYXJndW1lbnQnXSxcbiAgICBQcm9wZXJ0eTogWyd2YWx1ZSddLFxuICAgIE1lbWJlckV4cHJlc3Npb246IFsnb2JqZWN0JywgJ3Byb3BlcnR5J10sXG4gICAgQmluYXJ5RXhwcmVzc2lvbjogWydsZWZ0JywgJ3JpZ2h0J10sXG4gICAgTG9naWNhbEV4cHJlc3Npb246IFsnbGVmdCcsICdyaWdodCddLFxuICAgIENvbmRpdGlvbmFsRXhwcmVzc2lvbjogWyd0ZXN0JywgJ2NvbnNlcXVlbnQnLCAnYWx0ZXJuYXRlJ10sXG4gICAgQ2FsbEV4cHJlc3Npb246IFsnYXJndW1lbnRzJ10sXG4gICAgVnVlRXhwcmVzc2lvbjogWydleHByZXNzaW9uJywgJ2ZpbHRlcnMnXSxcbiAgICBWdWVGaWx0ZXI6IFsnYXJndW1lbnRzJ10sXG4gICAgVGVtcGxhdGVFeHByZXNzaW9uOiBbJ2V4cHJlc3Npb25zJ11cbn07XG5cbmZ1bmN0aW9uIHRvU3RyaW5nKGEpIHtcbiAgICBpZiAodHlwZW9mIGEgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybiBhICsgJyc7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgYSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIGAnJHtlc2NhcGVRdW90ZXMoYSl9J2BcbiAgICB9XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGEpO1xufVxuXG5jb25zdCBDb2RlR2VuZXJhZ29yID0ge1xuXG4gICAgVnVlRXhwcmVzc2lvbihub2RlLCBbZXhwcmVzc2lvbiwgZmlsdGVyc10pIHtcbiAgICAgICAgbGV0IGNvZGUgPSBmaWx0ZXJzLnJlZHVjZSgocHJlLCBmaWx0ZXIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBmaWx0ZXIuY29kZS5yZXBsYWNlKHJlZywgcHJlKTtcbiAgICAgICAgfSwgZXhwcmVzc2lvbi5jb2RlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmV0KGNvZGUpO1xuICAgIH0sXG5cbiAgICBWdWVGaWx0ZXIobm9kZSwgW2FyZ3NdKSB7XG4gICAgICAgIGxldCBoYXNBcmdzID0gYXJncy5sZW5ndGggPiAwO1xuICAgICAgICByZXR1cm4gdGhpcy5yZXQoYCR7bWFya30gfCAke25vZGUubmFtZX1gICsgKGhhc0FyZ3MgPyBgKCR7YXJncy5tYXAoYSA9PiBhLmNvZGUpLmpvaW4oJywgJyl9KWAgOiAnJykpO1xuICAgIH0sXG5cbiAgICBJZGVudGlmaWVyKG5vZGUsIHJlc3VsdHMsIHJlZikge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXQobm9kZS5uYW1lKTtcbiAgICB9LFxuXG4gICAgTWVtYmVyRXhwcmVzc2lvbihub2RlLCByZXN1bHRzKSB7XG5cbiAgICAgICAgbGV0IFtvYmplY3QsIHByb3BlcnR5XSA9IHJlc3VsdHM7XG5cbiAgICAgICAgaWYgKG5vZGUuY29tcHV0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJldChgJHtvYmplY3QuY29kZX1bJHtwcm9wZXJ0eS5jb2RlfV1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9wZXJ0eS5jb2RlID09PSAnbGVuZ3RoJykge1xuICAgICAgICAgICAgaWYgKG9iamVjdC50eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGlmIChvYmplY3QuaXNTdGF0aWMpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxlbiA9IG9iamVjdC52YWx1ZS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJldChsZW4gKyAnJywgJ251bWJlcicsIGxlbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJldChgJHtvYmplY3QuY29kZX0ubGVuZ3RoYCwgJ251bWJlcicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmV0KGAke29iamVjdC5jb2RlfS4ke3Byb3BlcnR5LmNvZGV9YCk7XG4gICAgfSxcblxuICAgIEJpbmFyeUV4cHJlc3Npb24obm9kZSwgW2xlZnQsIHJpZ2h0XSwgcmVmKSB7XG4gICAgICAgIGlmICghdmFsaWRCaW5hcnlPcGVyYXRvci5oYXMobm9kZS5vcGVyYXRvcikpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IoYGludmFsaWQgYmluYXJ5IG9wZXJhdG9yIFwiJHtub2RlLm9wZXJhdG9yfVwiYCwgbm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxlZnQuaXNTdGF0aWMgJiYgcmlnaHQuaXNTdGF0aWMpIHtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IG5ldyBGdW5jdGlvbihgcmV0dXJuICR7bGVmdC5jb2RlfSAke25vZGUub3BlcmF0b3J9ICR7cmlnaHQuY29kZX1gKSgpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmV0KHRvU3RyaW5nKHZhbHVlKSwgZ2V0VHlwZSh2YWx1ZSksIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY29kZSA9IGAke3dyYXBCYWNrZXQobGVmdC5jb2RlLCBub2RlLmxlZnQpfSR7bm9kZS5vcGVyYXRvcn0ke3dyYXBCYWNrZXQocmlnaHQuY29kZSwgbm9kZS5yaWdodCl9YFxuICAgICAgICByZXR1cm4gdGhpcy5yZXQoY29kZSk7XG4gICAgfSxcblxuICAgIExvZ2ljYWxFeHByZXNzaW9uKG5vZGUsIFtsZWZ0LCByaWdodF0pIHtcbiAgICAgICAgaWYgKCF2YWxpZExvZ2ljYWxPcGVyYXRvci5oYXMobm9kZS5vcGVyYXRvcikpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IoYGludmFsaWQgbG9naWNhbCBvcGVyYXRvciBcIiR7bm9kZS5vcGVyYXRvcn1cImAsIG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsZWZ0LmlzU3RhdGljICYmIHJpZ2h0LmlzU3RhdGljKSB7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBuZXcgRnVuY3Rpb24oYHJldHVybiAke2xlZnQuY29kZX0ke25vZGUub3BlcmF0b3J9JHtyaWdodC5jb2RlfWApKCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXQodG9TdHJpbmcodmFsdWUpLCBnZXRUeXBlKHZhbHVlKSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjb2RlID0gYCR7d3JhcEJhY2tldChsZWZ0LmNvZGUsIG5vZGUubGVmdCl9JHtub2RlLm9wZXJhdG9yfSR7d3JhcEJhY2tldChyaWdodC5jb2RlLCBub2RlLnJpZ2h0KX1gXG4gICAgICAgIHJldHVybiB0aGlzLnJldChjb2RlKTtcbiAgICB9LFxuXG4gICAgQ29uZGl0aW9uYWxFeHByZXNzaW9uKG5vZGUsIFt0ZXN0LCBjb25zZXF1ZW50LCBhbHRlcm5hdGVdKSB7XG4gICAgICAgIGlmICh0ZXN0LmlzU3RhdGljKSB7XG4gICAgICAgICAgICByZXR1cm4gdGVzdC52YWx1ZSA/IGNvbnNlcXVlbnQgOiBhbHRlcm5hdGU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdGVzdENvZGUgPSB3cmFwQmFja2V0KHRlc3QuY29kZSwgbm9kZS50ZXN0KTtcbiAgICAgICAgbGV0IGNvbnNlcXVlbnRDb2RlID0gd3JhcEJhY2tldChjb25zZXF1ZW50LmNvZGUsIG5vZGUuY29uc2VxdWVudCk7XG4gICAgICAgIGxldCBhbHRlcm5hdGVDb2RlID0gd3JhcEJhY2tldChhbHRlcm5hdGUuY29kZSwgbm9kZS5hbHRlcm5hdGUpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnJldChgJHt0ZXN0Q29kZX0/JHtjb25zZXF1ZW50Q29kZX06JHthbHRlcm5hdGVDb2RlfWApO1xuICAgIH0sXG5cbiAgICBDYWxsRXhwcmVzc2lvbihub2RlLCBbYXJnc10pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmV0KGAke25vZGUuY2FsbGVlLm5hbWV9KCR7YXJncy5tYXAoYSA9PiBhLmNvZGUpLmpvaW4oJywgJyl9KWApO1xuICAgIH0sXG5cbiAgICBUZW1wbGF0ZUV4cHJlc3Npb24obm9kZSwgW2V4cHJlc3Npb25zXSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXQoXG4gICAgICAgICAgICBgKCR7ZXhwcmVzc2lvbnMubWFwKCh7Y29kZX0sIGkpID0+IHdyYXBCYWNrZXQoY29kZSwgbm9kZS5leHByZXNzaW9uc1tpXSkpLmpvaW4oJysnKX0pYCxcbiAgICAgICAgICAgICdzdHJpbmcnXG4gICAgICAgICk7XG4gICAgfSxcblxuICAgIEFycmF5RXhwcmVzc2lvbihub2RlLCByZXN1bHRzKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSByZXN1bHRzWzBdO1xuICAgICAgICByZXR1cm4gdGhpcy5yZXQoYFske3Jlc3VsdC5tYXAoYyA9PiBjLmNvZGUpLmpvaW4oJywgJyl9XWAsICdhcnJheScpO1xuICAgIH0sXG5cbiAgICBMaXRlcmFsKG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmV0KFxuICAgICAgICAgICAgdGhpcy52YXJFeHBvcnQobm9kZS52YWx1ZSksXG4gICAgICAgICAgICBnZXRUeXBlKG5vZGUudmFsdWUpLFxuICAgICAgICAgICAgbm9kZS52YWx1ZVxuICAgICAgICApO1xuICAgIH0sXG5cbiAgICBVbmFyeUV4cHJlc3Npb24obm9kZSwgcmVzdWx0cykge1xuXG4gICAgICAgIGlmICghdmFsaWRVbmFyeU9wZXJhdG9yLmhhcyhub2RlLm9wZXJhdG9yKSkge1xuICAgICAgICAgICAgdGhpcy5lcnJvcihgdW5rbm93IHVuYXJ5IG9wZXJhdG9yIFwiJHtub2RlLm9wZXJhdG9yfVwiYCwgbm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVzdWx0ID0gcmVzdWx0c1swXTtcblxuICAgICAgICBpZiAocmVzdWx0LmlzU3RhdGljKSB7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBuZXcgRnVuY3Rpb24oYHJldHVybiAke25vZGUub3BlcmF0b3J9JHtyZXN1bHQuY29kZX1gKSgpO1xuICAgICAgICAgICAgbGV0IHN0cmluZ2lmeSA9IHRvU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJldChzdHJpbmdpZnksIGdldFR5cGUodmFsdWUpLCB2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5yZXQoYCR7bm9kZS5vcGVyYXRvcn0ke3Jlc3VsdC5jb2RlfWApO1xuICAgIH0sXG5cbiAgICBPYmplY3RFeHByZXNzaW9uKG5vZGUsIHJlc3VsdHMpIHtcblxuICAgICAgICBpZiAobm9kZS5oYXNDb21wdXRlZCkge1xuICAgICAgICAgICAgbGV0IGNvZGUgPSAnX2V4KCc7XG4gICAgICAgICAgICBsZXQgY3VycmVudDtcbiAgICAgICAgICAgIGxldCBwcmV2O1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IG5vZGUucHJvcGVydGllcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5ID0gbm9kZS5wcm9wZXJ0aWVzW2ldO1xuICAgICAgICAgICAgICAgIHByZXYgPSBjdXJyZW50O1xuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSAhIXByb3BlcnR5LmNvbXB1dGVkO1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50ICYmIHByZXYgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGUgKz0gJ30sJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQgJiYgIXByZXYpIHtcbiAgICAgICAgICAgICAgICAgICAgY29kZSArPSAnX29jcChbJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFjdXJyZW50ICYmIHByZXYpIHtcbiAgICAgICAgICAgICAgICAgICAgY29kZSArPSAnXSkseyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghY3VycmVudCAmJiBwcmV2ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY29kZSArPSAneyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50ID09PSBwcmV2KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGUgKz0gJywnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb2RlICs9IHJlc3VsdHNbMF1baV0uY29kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvZGUgKz0gY3VycmVudCA/ICddKSknIDogJ30pJztcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJldChjb2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXN1bHQgPSByZXN1bHRzWzBdO1xuICAgICAgICByZXR1cm4gdGhpcy5yZXQoYHske3Jlc3VsdC5tYXAoYyA9PiBjLmNvZGUpLmpvaW4oJywnKX19IGAsICdvYmplY3QnKTtcbiAgICB9LFxuXG4gICAgUHJvcGVydHkobm9kZSwgcmVzdWx0cywgcmVmKSB7XG5cbiAgICAgICAgaWYgKG5vZGUuY29tcHV0ZWQpIHtcbiAgICAgICAgICAgIHJlZi5oYXNDb21wdXRlZCA9IHRydWU7XG4gICAgICAgICAgICBsZXQga2V5Q29kZSA9IHRoaXMudHJhdmVyc2Uobm9kZS5rZXksIG5vZGUpLmNvZGU7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXQoYHtrOiR7a2V5Q29kZX0sdjoke3Jlc3VsdHNbMF0uY29kZX19YCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQga2V5Q29kZSA9IHRoaXMuZ2VuUHJvcGVydHlLZXkobm9kZS5rZXkpLmNvZGU7XG4gICAgICAgIHJldHVybiB0aGlzLnJldChgJHtrZXlDb2RlfToke3Jlc3VsdHNbMF0uY29kZX1gKTtcbiAgICB9XG59O1xuXG5mdW5jdGlvbiBnZXRUeXBlKG9iaikge1xuICAgIGxldCB0eXBlU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaik7XG4gICAgcmV0dXJuIHR5cGVTdHIuc3Vic3RyaW5nKDgsIHR5cGVTdHIubGVuZ3RoIC0gMSkudG9Mb3dlckNhc2UoKTtcbn1cblxuY2xhc3MgQ29kZUdlbiB7XG5cbiAgICBjb25zdHJ1Y3Rvcih7Y29kZX0pIHtcbiAgICAgICAgdGhpcy5zeW50YXggPSBTeW50YXg7XG4gICAgICAgIHRoaXMua2V5cyA9IFZpc2l0b3JLZXlzO1xuICAgICAgICB0aGlzLmdlbmVyYXRlciA9IENvZGVHZW5lcmFnb3I7XG5cbiAgICAgICAgdGhpcy5jb2RlID0gY29kZTtcbiAgICB9XG5cbiAgICBlcnJvcihtZXNzYWdlLCBub2RlKSB7XG4gICAgICAgIG1lc3NhZ2UgPSBgW3Z1c2EgZXhwcmVzc2lvbiBwYXJzZXJdICgke25vZGUubG9jYXRpb24uc3RhcnQubGluZX06JHtub2RlLmxvY2F0aW9uLnN0YXJ0LmNvbHVtbn0pIDogJHttZXNzYWdlfWA7XG5cbiAgICAgICAgbGV0IGNvZGVGcmFtZSA9IGNvZGVGcmFtZUNvbHVtbnModGhpcy5jb2RlLCBub2RlLmxvY2F0aW9uLCB7XG4gICAgICAgICAgICBoaWdobGlnaHRDb2RlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBtZXNzYWdlICs9IGBcXG4ke2NvZGVGcmFtZX1gO1xuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9XG5cbiAgICB0cmF2ZXJzZShub2RlLCByZWYpIHtcblxuICAgICAgICBsZXQgc3ludGF4ID0gdGhpcy5zeW50YXhbbm9kZS50eXBlXTtcblxuICAgICAgICBpZiAobm9kZSA9PT0gcmVmKSB7XG4gICAgICAgICAgICB0aGlzLnJvb3QgPSBub2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgbm9kZS5yZWYgPSByZWY7XG5cbiAgICAgICAgLy8g5a+56LGh55qEIGtleSDlgLznibnmrorlpITnkIbkuIDkuItcbiAgICAgICAgaWYgKCFzeW50YXgpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IoYFVua25vd24gbm9kZSB0eXBlIFwiJHtub2RlLnR5cGV9XCIgd2FzIGZvdW5kIHdoZW4gcGFyc2luZyBcIiR7bm9kZS5uYW1lfVwiYCwgbm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdmlzaXRvcktleXMgPSB0aGlzLmtleXNbbm9kZS50eXBlXSB8fCBbXTtcbiAgICAgICAgbGV0IGtleVJlc3VsdHMgPSB2aXNpdG9yS2V5cy5tYXAoa2V5ID0+IHtcbiAgICAgICAgICAgIGxldCBlbGVtZW50ID0gbm9kZVtrZXldO1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IG51bGw7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmlzTm9kZShlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMudHJhdmVyc2UoZWxlbWVudCwgbm9kZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBlbGVtZW50Lm1hcChlbGUgPT4gdGhpcy50cmF2ZXJzZShlbGUsIG5vZGUpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvcihgVW5rbm93biBWaXNpdG9yS2V5IHR5cGUgXCIke3R5cGVvZiBlbGVtZW50fVwiIHdhcyBmb3VuZCB3aGVuIHBhcnNpbmcgJHtlbGVtZW50Lm5hbWV9YCwgZWxlbWVudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmdlbmVyYXRlKG5vZGUsIGtleVJlc3VsdHMsIHJlZik7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGUobm9kZSwgLi4uYXJncykge1xuICAgICAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZXJbbm9kZS50eXBlXS5hcHBseSh0aGlzLCBbbm9kZSwgLi4uYXJnc10pO1xuICAgIH1cblxuICAgIGdlblByb3BlcnR5S2V5KG5vZGUpIHtcbiAgICAgICAgbGV0IGNvZGU7XG4gICAgICAgIHN3aXRjaCAobm9kZS50eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdJZGVudGlmaWVyJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZXQobm9kZS5uYW1lLCAnc3RyaW5nJywgbm9kZS5uYW1lKTtcbiAgICAgICAgICAgIGNhc2UgJ0xpdGVyYWwnOlxuICAgICAgICAgICAgICAgIGNvZGUgPSB0b1N0cmluZyhTdHJpbmcobm9kZS52YWx1ZSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJldChjb2RlLCAnc3RyaW5nJywgU3RyaW5nKG5vZGUudmFsdWUpKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvcihgaW52YWxpZCBwcm9wZXJ0eSBrZXkgdHlwZSBcIiR7bm9kZS50eXBlfVwiYCwgbm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc05vZGUobm9kZSkge1xuICAgICAgICBpZiAobm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHR5cGVvZiBub2RlID09PSAnb2JqZWN0JyAmJiB0eXBlb2Ygbm9kZS50eXBlID09PSAnc3RyaW5nJztcbiAgICB9XG5cbiAgICByZXQoY29kZSwgdHlwZSwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvZGUsXG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICBpc1N0YXRpYzogYXJndW1lbnRzLmxlbmd0aCA+IDJcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICB2YXJFeHBvcnQoZGF0YSkge1xuICAgICAgICByZXR1cm4gdG9TdHJpbmcoZGF0YSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY29kZSkge1xuXG4gICAgaWYgKCFjb2RlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb2RlOiAnJ1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGxldCBub2RlO1xuICAgIHRyeSB7XG4gICAgICAgIG5vZGUgPSBwYXJzZShjb2RlLCB7XG4gICAgICAgICAgICBzdGFydFJ1bGU6ICdWdWVFeHByZXNzaW9uJ1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBTeW50YXhFcnJvciBpcyBmb3VuZCB3aGVuIHBhcnNpbmcgY29kZSBcIiR7Y29kZX1cIiwgJHtlLnN0YWNrfWApO1xuICAgIH1cblxuICAgIGxldCBjb2RlZ2VuID0gbmV3IENvZGVHZW4oe1xuICAgICAgICBjb2RlXG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhc3Q6IG5vZGUuZXhwcmVzc2lvbixcbiAgICAgICAgLi4uY29kZWdlbi50cmF2ZXJzZShub2RlLCBub2RlKVxuICAgIH07XG59XG4iLCIvKipcbiAqIEBmaWxlIGNsYXNzXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHRyYW5zZm9ybSBmcm9tICcuLi9leHByZXNzaW9uLXRyYW5zZm9ybWVyJztcblxuY29uc3QgYmluZEtleXMgPSBbJzpjbGFzcycsICd2LWJpbmQ6Y2xhc3MnXTtcblxuZnVuY3Rpb24gcG9zdFRyYW5zZm9ybU5vZGUobm9kZSkge1xuICAgIGlmIChub2RlLnR5cGUgPT09IDEgJiYgbm9kZS5jbGFzc0JpbmRpbmcpIHtcbiAgICAgICAgY29uc3Qgc3RhdGljQ2xhc3MgPSBub2RlLmF0dHJzTWFwLmNsYXNzIHx8ICcnO1xuICAgICAgICBjb25zdCBjbGFzc0JpbmRpbmcgPSB0cmFuc2Zvcm0obm9kZS5jbGFzc0JpbmRpbmcpLmNvZGU7XG4gICAgICAgIG5vZGUuYXR0cnNNYXAuY2xhc3MgPSBge3sgX21jKCcke3N0YXRpY0NsYXNzfScsICR7Y2xhc3NCaW5kaW5nfSkgfX1gO1xuICAgICAgICBiaW5kS2V5cy5mb3JFYWNoKGtleSA9PiBkZWxldGUgbm9kZS5hdHRyc01hcFtrZXldKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwb3N0VHJhbnNmb3JtTm9kZVxufTtcbiIsIi8qKlxuICogQGZpbGUgc3R5bGVcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQgdHJhbnNmb3JtIGZyb20gJy4uL2V4cHJlc3Npb24tdHJhbnNmb3JtZXInO1xuaW1wb3J0IHRvU2luZ2xlUXVvdGVzIGZyb20gJ3RvLXNpbmdsZS1xdW90ZXMnO1xuXG5jb25zdCBiaW5kS2V5cyA9IFsnOnN0eWxlJywgJ3YtYmluZDpzdHlsZScsICd2LXNob3cnXTtcblxuZnVuY3Rpb24gcG9zdFRyYW5zZm9ybU5vZGUobm9kZSkge1xuICAgIGNvbnN0IHZTaG93ID0gbm9kZS5hdHRyc01hcFsndi1zaG93J107XG4gICAgaWYgKG5vZGUudHlwZSA9PT0gMSAmJiAobm9kZS5zdHlsZUJpbmRpbmcgfHwgdlNob3cpKSB7XG4gICAgICAgIGNvbnN0IHN0YXRpY1N0eWxlID0gbm9kZS5zdGF0aWNTdHlsZSB8fCAnXFwnXFwnJztcbiAgICAgICAgY29uc3Qgc3R5bGVCaW5kaW5nID0gbm9kZS5zdHlsZUJpbmRpbmcgPyB0cmFuc2Zvcm0obm9kZS5zdHlsZUJpbmRpbmcpLmNvZGUgOiAne30nO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuICAgICAgICBub2RlLmF0dHJzTWFwLnN0eWxlID0gYHt7IF9tcygke3RvU2luZ2xlUXVvdGVzKHN0YXRpY1N0eWxlKX0sICR7c3R5bGVCaW5kaW5nfSR7dlNob3cgPyBgLCAke3RyYW5zZm9ybSh2U2hvdykuY29kZX1gIDogJyd9KSB9fWA7XG4gICAgICAgIGJpbmRLZXlzLmZvckVhY2goa2V5ID0+IGRlbGV0ZSBub2RlLmF0dHJzTWFwW2tleV0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHBvc3RUcmFuc2Zvcm1Ob2RlXG59O1xuIiwiLyoqXG4gKiBAZmlsZSBiaW5kXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHRyYW5zZm9ybSBmcm9tICcuLi9leHByZXNzaW9uLXRyYW5zZm9ybWVyJztcblxuY29uc3QgcmVCaW5kID0gL14odi1iaW5kKT9cXDovO1xuXG5mdW5jdGlvbiBwb3N0VHJhbnNmb3JtTm9kZShub2RlKSB7XG4gICAgaWYgKG5vZGUudHlwZSAhPT0gMSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhub2RlLmF0dHJzTWFwKS5maWx0ZXIobiA9PiByZUJpbmQudGVzdChuKSk7XG4gICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IG5vZGUuYXR0cnNNYXBba2V5XTtcbiAgICAgICAgZGVsZXRlIG5vZGUuYXR0cnNNYXBba2V5XTtcbiAgICAgICAgY29uc3QgcmV0ID0gdHJhbnNmb3JtKHZhbHVlKTtcbiAgICAgICAgY29uc3QgY29kZSA9IHJldC5jb2RlO1xuICAgICAgICBub2RlLmF0dHJzTWFwW2tleS5yZXBsYWNlKHJlQmluZCwgJycpXSA9IGB7eyAke2NvZGV9IH19YDtcbiAgICB9XG5cbiAgICBpZiAobm9kZS5hdHRyc01hcFsndi1iaW5kJ10pIHtcbiAgICAgICAgY29uc3QgdkJpbmQgPSBub2RlLmF0dHJzTWFwWyd2LWJpbmQnXTtcbiAgICAgICAgbm9kZS5hdHRyc01hcFsncy1iaW5kJ10gPSBge3sgJHt0cmFuc2Zvcm0odkJpbmQpLmNvZGV9IH19YDtcbiAgICAgICAgZGVsZXRlIG5vZGUuYXR0cnNNYXBbJ3YtYmluZCddO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHBvc3RUcmFuc2Zvcm1Ob2RlXG59O1xuIiwiLyoqXG4gKiBAZmlsZSBpZlxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCB0cmFuc2Zvcm0gZnJvbSAnLi4vZXhwcmVzc2lvbi10cmFuc2Zvcm1lcic7XG5cbmZ1bmN0aW9uIHBvc3RUcmFuc2Zvcm1Ob2RlKG5vZGUpIHtcbiAgICBpZiAobm9kZS50eXBlICE9PSAxKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobm9kZS5pZikge1xuICAgICAgICBub2RlLmF0dHJzTWFwWydzLWlmJ10gPSB0cmFuc2Zvcm0obm9kZS5pZikuY29kZTtcbiAgICAgICAgZGVsZXRlIG5vZGUuYXR0cnNNYXBbJ3YtaWYnXTtcbiAgICB9XG5cbiAgICBpZiAobm9kZS5lbHNlaWYpIHtcbiAgICAgICAgbm9kZS5hdHRyc01hcFsncy1lbHNlLWlmJ10gPSB0cmFuc2Zvcm0obm9kZS5lbHNlaWYpLmNvZGU7XG4gICAgICAgIGRlbGV0ZSBub2RlLmF0dHJzTWFwWyd2LWVsc2UtaWYnXTtcbiAgICB9XG5cbiAgICBpZiAobm9kZS5lbHNlKSB7XG4gICAgICAgIG5vZGUuYXR0cnNNYXBbJ3MtZWxzZSddID0gbm9kZS5lbHNlO1xuICAgICAgICBkZWxldGUgbm9kZS5hdHRyc01hcFsndi1lbHNlJ107XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcG9zdFRyYW5zZm9ybU5vZGVcbn07XG4iLCIvKipcbiAqIEBmaWxlIGZvclxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCB0cmFuc2Zvcm0gZnJvbSAnLi4vZXhwcmVzc2lvbi10cmFuc2Zvcm1lcic7XG5cbmZ1bmN0aW9uIHBvc3RUcmFuc2Zvcm1Ob2RlKG5vZGUpIHtcbiAgICBpZiAobm9kZS50eXBlICE9PSAxIHx8ICFub2RlLmZvcikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGZyID0gbm9kZS5hbGlhcztcblxuICAgIGlmIChub2RlLml0ZXJhdG9yMSkge1xuICAgICAgICBmciArPSBgLCR7bm9kZS5pdGVyYXRvcjF9YDtcbiAgICB9XG5cbiAgICBmciArPSBgIGluIF9sKCR7bm9kZS5mb3J9KWA7XG5cbiAgICBpZiAobm9kZS5rZXkpIHtcbiAgICAgICAgY29uc3QgdHJhY2tCeUV4cHIgPSB0cmFuc2Zvcm0obm9kZS5rZXkpO1xuICAgICAgICAvLyBzYW4g5Y+q5pSv5oyB5Y+Y6YePXG4gICAgICAgIGZyICs9IHRyYWNrQnlFeHByLmFzdC50eXBlID09PSAnSWRlbnRpZmllcicgPyBgIHRyYWNrQnkgJHtub2RlLmtleX1gIDogJyc7XG4gICAgfVxuXG4gICAgbm9kZS5hdHRyc01hcFsncy1mb3InXSA9IGZyO1xuXG4gICAgZGVsZXRlIG5vZGUuYXR0cnNNYXBbJ3YtZm9yJ107XG4gICAgZGVsZXRlIG5vZGUuYXR0cnNNYXBbJ2tleSddO1xuICAgIGRlbGV0ZSBub2RlLmF0dHJzTWFwWyc6a2V5J107XG4gICAgZGVsZXRlIG5vZGUuYXR0cnNNYXBbJ3YtYmluZDprZXknXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHBvc3RUcmFuc2Zvcm1Ob2RlXG59O1xuIiwiLyoqXG4gKiBAZmlsZSBldmVudFxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCB0cmFuc2Zvcm0gZnJvbSAnLi4vZXhwcmVzc2lvbi10cmFuc2Zvcm1lcic7XG5cbmNvbnN0IHJlRXZlbnQgPSAvXihAfHYtb246KS87XG5cbmZ1bmN0aW9uIHBvc3RUcmFuc2Zvcm1Ob2RlKG5vZGUpIHtcbiAgICBjb25zdCBldmVudEF0dHJzID0gbm9kZS5hdHRyc0xpc3QuZmlsdGVyKG4gPT4gcmVFdmVudC50ZXN0KG4ubmFtZSkpO1xuICAgIGZvciAoY29uc3QgYXR0ciBvZiBldmVudEF0dHJzKSB7XG4gICAgICAgIGRlbGV0ZSBub2RlLmF0dHJzTWFwW2F0dHIubmFtZV07XG4gICAgICAgIGNvbnN0IFtuYW1lLCAuLi5tb2RpZmllcnNdID0gYXR0ci5uYW1lLnNwbGl0KCcuJyk7XG4gICAgICAgIGNvbnN0IGV2ZW50SGFuZGxlciA9IGF0dHIudmFsdWUgPyB0cmFuc2Zvcm0oYXR0ci52YWx1ZSkuY29kZSA6ICdfbm9vcCc7XG4gICAgICAgIG5vZGUuYXR0cnNNYXBbYG9uLSR7bmFtZS5yZXBsYWNlKHJlRXZlbnQsICcnKX1gXVxuICAgICAgICAgICAgPSBgJHttb2RpZmllcnMubWFwKG0gPT4gYCR7bX06YCkuam9pbignJyl9JHtldmVudEhhbmRsZXJ9YDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwb3N0VHJhbnNmb3JtTm9kZVxufTtcbiIsIi8qKlxuICogQGZpbGUgY2xhc3NcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5mdW5jdGlvbiBwb3N0VHJhbnNmb3JtTm9kZShub2RlKSB7XG5cbiAgICBpZiAobm9kZS5hdHRyc01hcCAmJiBub2RlLmF0dHJzTWFwWyd2LWRhbmdlcm91cy1odG1sJ10pIHtcbiAgICAgICAgY29uc3QgZGlyID0gbm9kZS5kaXJlY3RpdmVzLmZpbmQoZCA9PiBkLm5hbWUgPT09ICdkYW5nZXJvdXMtaHRtbCcpO1xuICAgICAgICBkaXIubmFtZSA9ICdodG1sJztcbiAgICAgICAgZGlyLnZhbHVlID0gbm9kZS5hdHRyc01hcFsndi1odG1sJ10gPSBub2RlLmF0dHJzTWFwWyd2LWRhbmdlcm91cy1odG1sJ107XG4gICAgICAgIGRlbGV0ZSBub2RlLmF0dHJzTWFwWyd2LWRhbmdlcm91cy1odG1sJ107XG4gICAgfVxuXG4gICAgaWYgKG5vZGUuYXR0cnNNYXAgJiYgbm9kZS5hdHRyc01hcFsndi1zYWZlLWh0bWwnXSkge1xuICAgICAgICBjb25zdCBkaXIgPSBub2RlLmRpcmVjdGl2ZXMuZmluZChkID0+IGQubmFtZSA9PT0gJ3NhZmUtaHRtbCcpO1xuICAgICAgICBkaXIubmFtZSA9ICdodG1sJztcbiAgICAgICAgZGlyLnZhbHVlID0gbm9kZS5hdHRyc01hcFsndi1odG1sJ10gPSBgX3NmKCR7bm9kZS5hdHRyc01hcFsndi1zYWZlLWh0bWwnXX0pYDtcbiAgICAgICAgZGVsZXRlIG5vZGUuYXR0cnNNYXBbJ3Ytc2FmZS1odG1sJ107XG4gICAgfVxuXG4gICAgaWYgKG5vZGUudHlwZSA9PT0gMSAmJiBub2RlLmF0dHJzTWFwWyd2LWh0bWwnXSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IG5vZGUuZGlyZWN0aXZlcy5maW5kKGQgPT4gZC5uYW1lID09PSAnaHRtbCcpLnZhbHVlO1xuICAgICAgICBkZWxldGUgbm9kZS5hdHRyc01hcFsndi1odG1sJ107XG4gICAgICAgIG5vZGUuYXR0cnNNYXBbJ3MtaHRtbCddID0gYHt7ICR7dmFsdWV9IH19YDtcbiAgICAgICAgbm9kZS5jaGlsZHJlbiA9IFtdO1xuICAgIH1cblxuICAgIGlmIChub2RlLnR5cGUgPT09IDEgJiYgbm9kZS5hdHRyc01hcFsndi10ZXh0J10pIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBub2RlLmRpcmVjdGl2ZXMuZmluZChkID0+IGQubmFtZSA9PT0gJ3RleHQnKS52YWx1ZTtcbiAgICAgICAgZGVsZXRlIG5vZGUuYXR0cnNNYXBbJ3YtdGV4dCddO1xuICAgICAgICBub2RlLmNoaWxkcmVuID0gW3tcbiAgICAgICAgICAgIHR5cGU6IDIsXG4gICAgICAgICAgICB0ZXh0OiBge3sgJHt2YWx1ZX0gfX1gXG4gICAgICAgIH1dO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHBvc3RUcmFuc2Zvcm1Ob2RlXG59O1xuIiwiLyoqXG4gKiBAZmlsZSByZWZcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5mdW5jdGlvbiBwb3N0VHJhbnNmb3JtTm9kZShub2RlLCBvcHRpb25zKSB7XG4gICAgaWYgKG5vZGUudHlwZSAhPT0gMSB8fCAhbm9kZS5hdHRyc01hcC5yZWYgJiYgIW5vZGUuYXR0cnNNYXBbJzpyZWYnXSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcmVmID0gbm9kZS5hdHRyc01hcC5yZWY7XG4gICAgaWYgKHJlZikge1xuICAgICAgICBkZWxldGUgbm9kZS5hdHRyc01hcC5yZWY7XG4gICAgICAgIG5vZGUuYXR0cnNNYXBbJ3MtcmVmJ10gPSByZWY7XG5cbiAgICAgICAgY29uc3QgaW5mbyA9IHtcbiAgICAgICAgICAgIG5hbWU6IHJlZixcbiAgICAgICAgICAgIHJvb3Q6IG5vZGUucGFyZW50ID8gdW5kZWZpbmVkIDogMVxuICAgICAgICB9O1xuXG4gICAgICAgIG9wdGlvbnMucmVmcy5wdXNoKGluZm8pO1xuICAgIH1cblxuICAgIGNvbnN0IGJpbmRSZWYgPSBub2RlLmF0dHJzTWFwWyc6cmVmJ107XG4gICAgaWYgKGJpbmRSZWYpIHtcbiAgICAgICAgZGVsZXRlIG5vZGUuYXR0cnNNYXBbJzpyZWYnXTtcbiAgICAgICAgbm9kZS5hdHRyc01hcFsncy1yZWYnXSA9IGB7eyAke2JpbmRSZWZ9IH19YDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwb3N0VHJhbnNmb3JtTm9kZVxufTtcbiIsIi8qKlxuICogQGZpbGUgY29tcG9uZW50IDppc1xuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCB7cGFyc2V9IGZyb20gJ2F0b20tZXhwcmVzc2lvbi1jb21waWxlcic7XG5cbmZ1bmN0aW9uIHBvc3RUcmFuc2Zvcm1Ob2RlKG5vZGUsIG9wdGlvbnMpIHtcbiAgICBpZiAoIShub2RlLnR5cGUgPT09IDEgJiYgbm9kZS50YWcgPT09ICdjb21wb25lbnQnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGlzID0gbm9kZS5hdHRyc01hcC5pcztcbiAgICBkZWxldGUgbm9kZS5hdHRyc01hcC5pcztcblxuICAgIGlmICghaXMuc3RhcnRzV2l0aCgne3snKSkge1xuICAgICAgICBub2RlLnRhZyA9IG5vZGUuYXR0cnNNYXAuaXM7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB2YWx1ZSA9IGlzLnNsaWNlKDIsIGlzLmxlbmd0aCAtIDIpLnRyaW0oKTtcbiAgICBjb25zdCBleHByID0gcGFyc2UodmFsdWUsIHtcbiAgICAgICAgc3RhcnRSdWxlOiAnVnVlRXhwcmVzc2lvbidcbiAgICB9KTtcblxuICAgIGlmIChub2RlLmlmIHx8IG5vZGUuZWxzZWlmIHx8IG5vZGUuZWxzZSkge1xuICAgICAgICBvcHRpb25zLmVycm9yKCdkeW5hbWljIGNvbXBvbmVudCBjYW4gbm90IHVzZSB3aXRoIHYtaWYuJyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICAgIGV4cHIuZXhwcmVzc2lvbi50eXBlID09PSAnQ29uZGl0aW9uYWxFeHByZXNzaW9uJ1xuICAgICAgICAmJiBleHByLmV4cHJlc3Npb24uY29uc2VxdWVudC50eXBlID09PSAnTGl0ZXJhbCdcbiAgICAgICAgJiYgZXhwci5leHByZXNzaW9uLmFsdGVybmF0ZS50eXBlID09PSAnTGl0ZXJhbCdcbiAgICApIHtcbiAgICAgICAgY29uc3QgdGVzdExvY2F0aW9uID0gZXhwci5leHByZXNzaW9uLnRlc3QubG9jYXRpb247XG4gICAgICAgIGNvbnN0IHRlc3QgPSB2YWx1ZS5zbGljZSh0ZXN0TG9jYXRpb24uc3RhcnQub2Zmc2V0LCB0ZXN0TG9jYXRpb24uZW5kLm9mZnNldCk7XG4gICAgICAgIGNvbnN0IGF0dHJzID0ge1xuICAgICAgICAgICAgLi4ubm9kZS5hdHRyc01hcCxcbiAgICAgICAgICAgICdzLWVsc2UnOiAnJ1xuICAgICAgICB9O1xuICAgICAgICBub2RlLnRhZyA9IGV4cHIuZXhwcmVzc2lvbi5jb25zZXF1ZW50LnZhbHVlO1xuICAgICAgICBub2RlLmF0dHJzTWFwWydzLWlmJ10gPSB0ZXN0O1xuICAgICAgICBub2RlLmlmQ29uZGl0aW9ucyA9IFt7XG4gICAgICAgICAgICBleHA6IHRlc3QsXG4gICAgICAgICAgICBibG9jazogbm9kZVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBibG9jazoge1xuICAgICAgICAgICAgICAgIC4uLm5vZGUsXG4gICAgICAgICAgICAgICAgYXR0cnNNYXA6IGF0dHJzLFxuICAgICAgICAgICAgICAgIHRhZzogZXhwci5leHByZXNzaW9uLmFsdGVybmF0ZS52YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwb3N0VHJhbnNmb3JtTm9kZVxufTtcbiIsIi8qKlxuICogQGZpbGUgY29uc3RhbnRzXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuLypcbiAgU2VsZi1lbmNsb3NpbmcgdGFncyAoc3RvbGVuIGZyb20gbm9kZS1odG1scGFyc2VyKVxuKi9cbmV4cG9ydCBjb25zdCBzaW5nbGVUYWcgPSB7XG4gICAgYXJlYTogdHJ1ZSxcbiAgICBiYXNlOiB0cnVlLFxuICAgIGJhc2Vmb250OiB0cnVlLFxuICAgIGJyOiB0cnVlLFxuICAgIGNvbDogdHJ1ZSxcbiAgICBjb21tYW5kOiB0cnVlLFxuICAgIGVtYmVkOiB0cnVlLFxuICAgIGZyYW1lOiB0cnVlLFxuICAgIGhyOiB0cnVlLFxuICAgIGltZzogdHJ1ZSxcbiAgICBpbnB1dDogdHJ1ZSxcbiAgICBpc2luZGV4OiB0cnVlLFxuICAgIGtleWdlbjogdHJ1ZSxcbiAgICBsaW5rOiB0cnVlLFxuICAgIG1ldGE6IHRydWUsXG4gICAgcGFyYW06IHRydWUsXG4gICAgc291cmNlOiB0cnVlLFxuICAgIHRyYWNrOiB0cnVlLFxuICAgIHdicjogdHJ1ZVxufTtcblxuZXhwb3J0IGNvbnN0IGJvb2xlYW5BdHRyID0ge1xuICAgIGFsbG93ZnVsbHNjcmVlbjogdHJ1ZSxcbiAgICBhc3luYzogdHJ1ZSxcbiAgICBhdXRvZm9jdXM6IHRydWUsXG4gICAgYXV0b3BsYXk6IHRydWUsXG4gICAgY2hlY2tlZDogdHJ1ZSxcbiAgICBjb21wYWN0OiB0cnVlLFxuICAgIGNvbnRyb2xzOiB0cnVlLFxuICAgIGRlY2xhcmU6IHRydWUsXG4gICAgZGVmYXVsdDogdHJ1ZSxcbiAgICBkZWZhdWx0Y2hlY2tlZDogdHJ1ZSxcbiAgICBkZWZhdWx0bXV0ZWQ6IHRydWUsXG4gICAgZGVmYXVsdHNlbGVjdGVkOiB0cnVlLFxuICAgIGRlZmVyOiB0cnVlLFxuICAgIGRpc2FibGVkOiB0cnVlLFxuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgZm9ybW5vdmFsaWRhdGU6IHRydWUsXG4gICAgaGlkZGVuOiB0cnVlLFxuICAgIGluZGV0ZXJtaW5hdGU6IHRydWUsXG4gICAgaW5lcnQ6IHRydWUsXG4gICAgaXNtYXA6IHRydWUsXG4gICAgaXRlbXNjb3BlOiB0cnVlLFxuICAgIGxvb3A6IHRydWUsXG4gICAgbXVsdGlwbGU6IHRydWUsXG4gICAgbXV0ZWQ6IHRydWUsXG4gICAgbm9ocmVmOiB0cnVlLFxuICAgIG5vcmVzaXplOiB0cnVlLFxuICAgIG5vc2hhZGU6IHRydWUsXG4gICAgbm92YWxpZGF0ZTogdHJ1ZSxcbiAgICBub3dyYXA6IHRydWUsXG4gICAgb3BlbjogdHJ1ZSxcbiAgICBwYXVzZW9uZXhpdDogdHJ1ZSxcbiAgICByZWFkb25seTogdHJ1ZSxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICByZXZlcnNlZDogdHJ1ZSxcbiAgICBzY29wZWQ6IHRydWUsXG4gICAgc2VhbWxlc3M6IHRydWUsXG4gICAgc2VsZWN0ZWQ6IHRydWUsXG4gICAgc29ydGFibGU6IHRydWUsXG4gICAgdHJhbnNsYXRlOiB0cnVlLFxuICAgIHRydWVzcGVlZDogdHJ1ZSxcbiAgICB0eXBlbXVzdG1hdGNoOiB0cnVlLFxuICAgIHZpc2libGU6IHRydWUsXG59O1xuXG5cbmV4cG9ydCBjb25zdCBub1ZhbHVlQXR0ciA9IHtcbiAgICAncy1lbHNlJzogdHJ1ZVxufTtcblxuXG5leHBvcnQgY29uc3QgaHRtbFRhZyA9IHtcbiAgICBodG1sOiB0cnVlLFxuICAgIGJvZHk6IHRydWUsXG4gICAgYmFzZTogdHJ1ZSxcbiAgICBoZWFkOiB0cnVlLFxuICAgIGxpbms6IHRydWUsXG4gICAgbWV0YTogdHJ1ZSxcbiAgICBzdHlsZTogdHJ1ZSxcbiAgICB0aXRsZTogdHJ1ZSxcbiAgICBhZGRyZXNzOiB0cnVlLFxuICAgIGFydGljbGU6IHRydWUsXG4gICAgYXNpZGU6IHRydWUsXG4gICAgZm9vdGVyOiB0cnVlLFxuICAgIGhlYWRlcjogdHJ1ZSxcbiAgICBoMTogdHJ1ZSxcbiAgICBoMjogdHJ1ZSxcbiAgICBoMzogdHJ1ZSxcbiAgICBoNDogdHJ1ZSxcbiAgICBoNTogdHJ1ZSxcbiAgICBoNjogdHJ1ZSxcbiAgICBoZ3JvdXA6IHRydWUsXG4gICAgbmF2OiB0cnVlLFxuICAgIHNlY3Rpb246IHRydWUsXG4gICAgZGl2OiB0cnVlLFxuICAgIGRkOiB0cnVlLFxuICAgIGRsOiB0cnVlLFxuICAgIGR0OiB0cnVlLFxuICAgIGZpZ2NhcHRpb246IHRydWUsXG4gICAgZmlndXJlOiB0cnVlLFxuICAgIGhyOiB0cnVlLFxuICAgIGltZzogdHJ1ZSxcbiAgICBsaTogdHJ1ZSxcbiAgICBtYWluOiB0cnVlLFxuICAgIG9sOiB0cnVlLFxuICAgIHA6IHRydWUsXG4gICAgcHJlOiB0cnVlLFxuICAgIHVsOiB0cnVlLFxuICAgIGE6IHRydWUsXG4gICAgYjogdHJ1ZSxcbiAgICBhYmJyOiB0cnVlLFxuICAgIGJkaTogdHJ1ZSxcbiAgICBiZG86IHRydWUsXG4gICAgYnI6IHRydWUsXG4gICAgY2l0ZTogdHJ1ZSxcbiAgICBjb2RlOiB0cnVlLFxuICAgIGRhdGE6IHRydWUsXG4gICAgZGZuOiB0cnVlLFxuICAgIGVtOiB0cnVlLFxuICAgIGk6IHRydWUsXG4gICAga2JkOiB0cnVlLFxuICAgIG1hcms6IHRydWUsXG4gICAgcTogdHJ1ZSxcbiAgICBycDogdHJ1ZSxcbiAgICBydDogdHJ1ZSxcbiAgICBydGM6IHRydWUsXG4gICAgcnVieTogdHJ1ZSxcbiAgICBzOiB0cnVlLFxuICAgIHNhbXA6IHRydWUsXG4gICAgc21hbGw6IHRydWUsXG4gICAgc3BhbjogdHJ1ZSxcbiAgICBzdHJvbmc6IHRydWUsXG4gICAgc3ViOiB0cnVlLFxuICAgIHN1cDogdHJ1ZSxcbiAgICB0aW1lOiB0cnVlLFxuICAgIHU6IHRydWUsXG4gICAgdmFyOiB0cnVlLFxuICAgIHdicjogdHJ1ZSxcbiAgICBhcmVhOiB0cnVlLFxuICAgIGF1ZGlvOiB0cnVlLFxuICAgIG1hcDogdHJ1ZSxcbiAgICB0cmFjazogdHJ1ZSxcbiAgICB2aWRlbzogdHJ1ZSxcbiAgICBlbWJlZDogdHJ1ZSxcbiAgICBvYmplY3Q6IHRydWUsXG4gICAgcGFyYW06IHRydWUsXG4gICAgc291cmNlOiB0cnVlLFxuICAgIGNhbnZhczogdHJ1ZSxcbiAgICBzY3JpcHQ6IHRydWUsXG4gICAgbm9zY3JpcHQ6IHRydWUsXG4gICAgZGVsOiB0cnVlLFxuICAgIGluczogdHJ1ZSxcbiAgICBjYXB0aW9uOiB0cnVlLFxuICAgIGNvbDogdHJ1ZSxcbiAgICBjb2xncm91cDogdHJ1ZSxcbiAgICB0YWJsZTogdHJ1ZSxcbiAgICB0aGVhZDogdHJ1ZSxcbiAgICB0Ym9keTogdHJ1ZSxcbiAgICB0ZDogdHJ1ZSxcbiAgICB0aDogdHJ1ZSxcbiAgICB0cjogdHJ1ZSxcbiAgICBidXR0b246IHRydWUsXG4gICAgZGF0YWxpc3Q6IHRydWUsXG4gICAgZmllbGRzZXQ6IHRydWUsXG4gICAgZm9ybTogdHJ1ZSxcbiAgICBpbnB1dDogdHJ1ZSxcbiAgICBsYWJlbDogdHJ1ZSxcbiAgICBsZWdlbmQ6IHRydWUsXG4gICAgbWV0ZXI6IHRydWUsXG4gICAgb3B0Z3JvdXA6IHRydWUsXG4gICAgb3B0aW9uOiB0cnVlLFxuICAgIG91dHB1dDogdHJ1ZSxcbiAgICBwcm9ncmVzczogdHJ1ZSxcbiAgICBzZWxlY3Q6IHRydWUsXG4gICAgdGV4dGFyZWE6IHRydWUsXG4gICAgZGV0YWlsczogdHJ1ZSxcbiAgICBkaWFsb2c6IHRydWUsXG4gICAgbWVudTogdHJ1ZSxcbiAgICBtZW51aXRlbTogdHJ1ZSxcbiAgICBzdW1tYXJ5OiB0cnVlLFxuICAgIGNvbnRlbnQ6IHRydWUsXG4gICAgZWxlbWVudDogdHJ1ZSxcbiAgICBzaGFkb3c6IHRydWUsXG4gICAgdGVtcGxhdGU6IHRydWVcbn07XG4iLCIvKipcbiAqIEBmaWxlIGJvb2wg5Z6L5Lyg5YC8XG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHtib29sZWFuQXR0ciwgbm9WYWx1ZUF0dHIsIGh0bWxUYWd9IGZyb20gJy4uL2NvbnN0YW50JztcblxuZnVuY3Rpb24gcG9zdFRyYW5zZm9ybU5vZGUobm9kZSkge1xuICAgIGlmICghbm9kZS50eXBlID09PSAxIHx8ICFub2RlLmF0dHJzTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMobm9kZS5hdHRyc01hcCkuZmlsdGVyKG4gPT4gbm9kZS5hdHRyc01hcFtuXSA9PT0gJycpO1xuICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgaWYgKChodG1sVGFnW25vZGUudGFnXSAmJiBib29sZWFuQXR0cltrZXldKSB8fCBub1ZhbHVlQXR0cltrZXldKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBub2RlLmF0dHJzTWFwW2tleV0gPSBge3sgdHJ1ZSB9fWA7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcG9zdFRyYW5zZm9ybU5vZGVcbn07XG4iLCIvKipcbiAqIEBmaWxlIHRlbXBsYXRlXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuZnVuY3Rpb24gcHJlVHJhbnNmb3JtTm9kZShlbCkge1xuICAgIGlmIChlbC50YWcgPT09ICd0ZW1wbGF0ZScpIHtcbiAgICAgICAgZWwudGFnID0gJ2ZyYWdtZW50JztcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcmVUcmFuc2Zvcm1Ob2RlXG59O1xuIiwiLyoqXG4gKiBAZmlsZSB0ZW1wbGF0ZVxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCB7Y2FtZWxDYXNlfSBmcm9tICdsb2Rhc2gnO1xuXG5mdW5jdGlvbiBwb3N0VHJhbnNmb3JtTm9kZShlbCkge1xuICAgIGlmIChlbC50YWcgPT09ICd0cmFuc2l0aW9uJykge1xuICAgICAgICBlbC50YWcgPSAnZnJhZ21lbnQnO1xuXG4gICAgICAgIGNvbnN0IGF0dHJzID0gT2JqZWN0LmtleXMoZWwuYXR0cnNNYXApLm1hcChuYW1lID0+IHtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IGVsLmF0dHJzTWFwW25hbWVdO1xuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zdGFydHNXaXRoKCd7eycpID8gdmFsdWUuc2xpY2UoMiwgdmFsdWUubGVuZ3RoIC0gMikgOiBgJyR7dmFsdWV9J2A7XG4gICAgICAgICAgICBkZWxldGUgZWwuYXR0cnNNYXBbbmFtZV07XG4gICAgICAgICAgICByZXR1cm4gYCR7Y2FtZWxDYXNlKG5hbWUpfToke3ZhbHVlfWA7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChlbC5jaGlsZHJlbiAmJiBlbC5jaGlsZHJlblswXSkge1xuICAgICAgICAgICAgZWwuY2hpbGRyZW5bMF0uYXR0cnNNYXBbJ3MtdHJhbnNpdGlvbiddID0gYF90KHske2F0dHJzLmpvaW4oJywnKX19KWA7XG5cbiAgICAgICAgICAgIGlmIChlbC5jaGlsZHJlblswXS5pZkNvbmRpdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZWwuY2hpbGRyZW5bMF0uaWZDb25kaXRpb25zLnNsaWNlKDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmF0dHJzTWFwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmF0dHJzTWFwWydzLXRyYW5zaXRpb24nXSA9IGBfdCh7JHthdHRycy5qb2luKCcsJyl9fSlgO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcG9zdFRyYW5zZm9ybU5vZGVcbn07XG4iLCIvKipcbiAqIEBmaWxlIHRleHQtY29tYmluZVxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCBlc2NhcGVRdW90ZXMgZnJvbSAnZXNjYXBlLXF1b3Rlcyc7XG5cbmZ1bmN0aW9uIHBvc3RUcmFuc2Zvcm1Ob2RlKGVsKSB7XG4gICAgaWYgKGVsLmNoaWxkcmVuICYmIGVsLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBlbC5jaGlsZHJlbikge1xuICAgICAgICAgICAgaWYgKGNoaWxkLnR5cGUgIT09IDIgfHwgIWNoaWxkLnRva2VucyB8fCBjaGlsZC50b2tlbnMubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNoaWxkLnRleHQgPSBjaGlsZC50b2tlbnMubWFwKCh0b2tlbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdGV4dCA9ICdcXCdcXCcnO1xuICAgICAgICAgICAgICAgIGlmICh0b2tlblsnQGJpbmRpbmcnXSkge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0ID0gdG9rZW5bJ0BiaW5kaW5nJ107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQgPSBgJyR7ZXNjYXBlUXVvdGVzKHRva2VuKX0nYDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGluZGV4ID09PSAwID8gdGV4dCA6IGBfY2F0KCR7dGV4dH0pYDtcbiAgICAgICAgICAgIH0pLmpvaW4oJyB8ICcpO1xuXG4gICAgICAgICAgICBjaGlsZC50ZXh0ID0gYHt7ICR7Y2hpbGQudGV4dH0gfX1gO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjaGlsZC50ZXh0KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHBvc3RUcmFuc2Zvcm1Ob2RlXG59O1xuIiwiLyoqXG4gKiBAZmlsZSB0cmFuc2Zvcm1lcnNcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQgY2xhenogZnJvbSAnLi9jbGFzcyc7XG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZSc7XG5pbXBvcnQgYmluZCBmcm9tICcuL2JpbmQnO1xuaW1wb3J0IHlmIGZyb20gJy4vaWYnO1xuaW1wb3J0IGZyIGZyb20gJy4vZm9yJztcbmltcG9ydCBldmVudCBmcm9tICcuL2V2ZW50JztcbmltcG9ydCBodG1sIGZyb20gJy4vaHRtbCc7XG5pbXBvcnQgcmVmIGZyb20gJy4vcmVmJztcbmltcG9ydCBkeW5hbWljQ29tcG9uZW50IGZyb20gJy4vZHluYW1pYy1jb21wb25lbnQnO1xuaW1wb3J0IGJvb2wgZnJvbSAnLi9ib29sZWFuJztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3RlbXBsYXRlJztcbmltcG9ydCB0cmFuc2l0aW9uIGZyb20gJy4vdHJhbnNpdGlvbic7XG5pbXBvcnQgdGV4dENvbWJpbmUgZnJvbSAnLi90ZXh0LWNvbWJpbmUnO1xuXG5leHBvcnQgZGVmYXVsdCBbXG4gICAgdGVtcGxhdGUsXG4gICAgYm9vbCxcbiAgICB5ZixcbiAgICBmcixcbiAgICBldmVudCxcbiAgICBodG1sLFxuICAgIHJlZixcbiAgICB0ZXh0Q29tYmluZSxcblxuICAgIGNsYXp6LFxuICAgIHN0eWxlLFxuXG4gICAgLy8gYmluZCDmlL7lnKjmiYDmnInlpITnkIblrozkuYvlkI5cbiAgICBiaW5kLFxuICAgIHRyYW5zaXRpb24sXG5cbiAgICBkeW5hbWljQ29tcG9uZW50XG5dO1xuIiwiLyoqXG4gKiBAZmlsZSBnZXQgaHRtbCBmcm9tIGFzdFxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCB7dHJpbX0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7bm9WYWx1ZUF0dHIsIHNpbmdsZVRhZywgYm9vbGVhbkF0dHIsIGh0bWxUYWd9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHRyYW5zZm9ybSBmcm9tICcuL2V4cHJlc3Npb24tdHJhbnNmb3JtZXInO1xuXG5mdW5jdGlvbiBzdHJpbmdpZnlBdHRyKGtleSwgdmFsdWUsIHRhZykge1xuICAgIGlmIChub1ZhbHVlQXR0cltrZXldIHx8ICghdmFsdWUgJiYgaHRtbFRhZ1t0YWddICYmIGJvb2xlYW5BdHRyW2tleV0pKSB7XG4gICAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICAgIHJldHVybiBgJHtrZXl9PSR7SlNPTi5zdHJpbmdpZnkodmFsdWUuc3RhcnRzV2l0aCgne3snKSA/IHZhbHVlIDogdmFsdWUucmVwbGFjZSgvXFxzKy9nLCAnICcpKX1gO1xufVxuXG4vLyBmdW5jdGlvbiB0cmFuc2Zvcm1DaGlsZChub2RlKSB7XG4vLyAgICAgcmV0dXJuIG5vZGUudG9rZW5zLnJlZHVjZSgocHJldiwgdG9rZW4pID0+IHtcbi8vICAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gJ3N0cmluZycpIHtcbi8vICAgICAgICAgICAgIHJldHVybiBwcmV2ICsgdG9rZW47XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgY29uc29sZS5sb2cobm9kZSk7XG4vLyAgICAgICAgIHJldHVybiBwcmV2ICsgYHt7ICR7dHJhbnNmb3JtKHRva2VuWydAYmluZGluZyddKS5jb2RlfSB9fWA7XG4vLyAgICAgfSwgJycpO1xuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdHJpbmdpZnkoYXN0LCB7c2NvcGVJZCwgc3RyaXAsIGF0b219KSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFzdCkpIHtcbiAgICAgICAgYXN0ID0gW2FzdF07XG4gICAgfVxuXG4gICAgbGV0IGh0bWwgPSAnJztcblxuICAgIGZvciAoY29uc3Qgbm9kZSBvZiBhc3QpIHtcbiAgICAgICAgaWYgKG5vZGUudHlwZSA9PT0gMyB8fCBub2RlLnR5cGUgPT09IDIpIHtcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSBub2RlLnRleHQ7XG4gICAgICAgICAgICBodG1sICs9IHN0cmlwXG4gICAgICAgICAgICAgICAgPyB0cmltKHRleHQsICcgXFxuXFx0JylcbiAgICAgICAgICAgICAgICA6IHRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobm9kZS50eXBlID09PSAxKSB7XG4gICAgICAgICAgICBjb25zdCBhdHRycyA9IE9iamVjdC5rZXlzKG5vZGUuYXR0cnNNYXApLm1hcChrZXkgPT4gc3RyaW5naWZ5QXR0cihrZXksIG5vZGUuYXR0cnNNYXBba2V5XSwgbm9kZS50YWcpKTtcbiAgICAgICAgICAgIGlmIChzY29wZUlkKSB7XG4gICAgICAgICAgICAgICAgc2NvcGVJZCA9IHNjb3BlSWQucmVwbGFjZSgvXmRhdGEtKGF8diktLywgJycpO1xuICAgICAgICAgICAgICAgIGF0dHJzLnB1c2goYGRhdGEtJHthdG9tID8gJ2EnIDogJ3YnfS0ke3Njb3BlSWR9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBoYXNDaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW4gJiYgbm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwO1xuICAgICAgICAgICAgY29uc3QgaGFzQXR0ciA9IGF0dHJzLmxlbmd0aCA+IDA7XG4gICAgICAgICAgICBodG1sICs9IGA8JHtub2RlLnRhZ30ke2hhc0F0dHIgPyAnICcgOiAnJ30ke2F0dHJzLmpvaW4oJyAnKX0+YDtcbiAgICAgICAgICAgIGh0bWwgKz0gaGFzQ2hpbGRyZW4gPyBzdHJpbmdpZnkobm9kZS5jaGlsZHJlbiwge3Njb3BlSWQsIHN0cmlwLCBhdG9tfSkgOiAnJztcbiAgICAgICAgICAgIGh0bWwgKz0gIWhhc0NoaWxkcmVuICYmIHNpbmdsZVRhZ1tub2RlLnRhZ10gPyAnJyA6IGA8LyR7bm9kZS50YWd9PmA7XG5cbiAgICAgICAgICAgIGlmIChub2RlLmlmQ29uZGl0aW9ucyAmJiBub2RlLmlmQ29uZGl0aW9ucy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgaHRtbCArPSBzdHJpbmdpZnkobm9kZS5pZkNvbmRpdGlvbnMuc2xpY2UoMSkubWFwKG4gPT4gbi5ibG9jayksIHtzY29wZUlkLCBzdHJpcCwgYXRvbX0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWw7XG59XG4iLCIvKipcbiAqIEBmaWxlIOS4gOS6m+W3peWFt+WHveaVsFxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbi8qKlxuICogTWl4IHByb3BlcnRpZXMgaW50byB0YXJnZXQgb2JqZWN0LlxuICovXG5leHBvcnQgY29uc3QgZXh0ZW5kID0gT2JqZWN0LmFzc2lnbjtcblxuLyoqXG4gKiBNZXJnZSBhbiBBcnJheSBvZiBPYmplY3RzIGludG8gYSBzaW5nbGUgT2JqZWN0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9PYmplY3QoYXJyKSB7XG4gICAgY29uc3QgcmVzID0ge307XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGFycltpXSkge1xuICAgICAgICAgICAgZXh0ZW5kKHJlcywgYXJyW2ldKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufVxuXG4vKipcbiAqIFJlbW92ZSBhbiBpdGVtIGZyb20gYW4gYXJyYXkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmUoYXJyLCBpdGVtKSB7XG4gICAgaWYgKGFyci5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBhcnIuaW5kZXhPZihpdGVtKTtcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBhcnIuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBHZXQgdGhlIHJhdyB0eXBlIHN0cmluZyBvZiBhIHZhbHVlLCBlLmcuLCBbb2JqZWN0IE9iamVjdF0uXG4gKi9cbmV4cG9ydCBjb25zdCBfdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIFF1aWNrIG9iamVjdCBjaGVjayAtIHRoaXMgaXMgcHJpbWFyaWx5IHVzZWQgdG8gdGVsbFxuICogT2JqZWN0cyBmcm9tIHByaW1pdGl2ZSB2YWx1ZXMgd2hlbiB3ZSBrbm93IHRoZSB2YWx1ZVxuICogaXMgYSBKU09OLWNvbXBsaWFudCB0eXBlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3Qob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAhPT0gbnVsbCAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIGFuIG9iamVjdCBoYXMgdGhlIHByb3BlcnR5LlxuICovXG5jb25zdCBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5leHBvcnQgZnVuY3Rpb24gaGFzT3duKG9iaiwga2V5KSB7XG4gICAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpO1xufVxuXG4vKipcbiAqIFN0cmljdCBvYmplY3QgdHlwZSBjaGVjay4gT25seSByZXR1cm5zIHRydWVcbiAqIGZvciBwbGFpbiBKYXZhU2NyaXB0IG9iamVjdHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1BsYWluT2JqZWN0KG9iaikge1xuICAgIHJldHVybiBfdG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBPYmplY3RdJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZihvYmosIGtleSwgcHJvcGVydHkpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIGV4dGVuZCh7XG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9LCBwcm9wZXJ0eSkpO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIGNhY2hlZCB2ZXJzaW9uIG9mIGEgcHVyZSBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhY2hlZChmbikge1xuICAgIGNvbnN0IGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gY2FjaGVkRm4oc3RyKSB7XG4gICAgICAgIGNvbnN0IGhpdCA9IGNhY2hlW3N0cl07XG4gICAgICAgIHJldHVybiBoaXQgfHwgKGNhY2hlW3N0cl0gPSBmbihzdHIpKTtcbiAgICB9O1xufVxuXG4vKipcbiAqIEh5cGhlbmF0ZSBhIGNhbWVsQ2FzZSBzdHJpbmcuXG4gKi9cbmNvbnN0IGh5cGhlbmF0ZVJFID0gLyhbXi1dKShbQS1aXSkvZztcbmV4cG9ydCBjb25zdCBoeXBoZW5hdGUgPSBjYWNoZWQoKHN0cikgPT4ge1xuICAgIHJldHVybiBzdHJcbiAgICAgICAgLnJlcGxhY2UoaHlwaGVuYXRlUkUsICckMS0kMicpXG4gICAgICAgIC5yZXBsYWNlKGh5cGhlbmF0ZVJFLCAnJDEtJDInKVxuICAgICAgICAudG9Mb3dlckNhc2UoKTtcbn0pO1xuXG5leHBvcnQgY29uc3QgY2FtZWxpemUgPSBzdHIgPT4gc3RyLnJlcGxhY2UoLy0oXFx3KS9nLCAoXywgYykgPT4gKGMgPyBjLnRvVXBwZXJDYXNlKCkgOiAnJykpO1xuXG4vKipcbiAqIEVuc3VyZSBhIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbmx5IG9uY2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvbmNlKGZuKSB7XG4gICAgbGV0IGNhbGxlZCA9IGZhbHNlXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghY2FsbGVkKSB7XG4gICAgICAgIGNhbGxlZCA9IHRydWVcbiAgICAgICAgZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICAgICAgfVxuICAgIH1cbn1cbiIsIi8qKlxuICogQGZpbGUgY3NzIG1vZHVsZXMgbW9kdWxlXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHtjYW1lbGl6ZX0gZnJvbSAnLi4vLi4vc2hhcmVkL3V0aWwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY3NzTW9kdWxlcykge1xuXG4gICAgZnVuY3Rpb24gcHJlVHJhbnNmb3JtTm9kZShlbCkge1xuICAgICAgICBpZiAoY3NzTW9kdWxlcyAmJiBjc3NNb2R1bGVzLiRzdHlsZSAmJiBlbC5hdHRyc01hcC5jbGFzcykge1xuICAgICAgICAgICAgY29uc3Qgc3RhdGljQ2xhc3MgPSBlbC5hdHRyc01hcC5jbGFzcy5yZXBsYWNlKC8oXlwifFwiJCkvZywgJycpLnNwbGl0KCcgJyk7XG4gICAgICAgICAgICBlbC5hdHRyc01hcC5jbGFzcyA9IHN0YXRpY0NsYXNzLm1hcChjID0+IChjc3NNb2R1bGVzLiRzdHlsZVtjYW1lbGl6ZShjKV0gfHwgYykpLmpvaW4oJyAnKTtcbiAgICAgICAgICAgIGVsLmF0dHJzTGlzdCA9IGVsLmF0dHJzTGlzdC5tYXAoXG4gICAgICAgICAgICAgICAgKHtuYW1lLCB2YWx1ZX0pID0+ICh7bmFtZSwgdmFsdWU6IG5hbWUgPT09ICdjbGFzcycgPyBlbC5hdHRyc01hcC5jbGFzcyA6IHZhbHVlfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcmVUcmFuc2Zvcm1Ob2RlXG4gICAgfTtcbn1cblxuIiwiLyoqXG4gKiBAZmlsZSBhdG9tIG1vZHVsZVxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmZ1bmN0aW9uIHByZVRyYW5zZm9ybU5vZGUoZWwpIHtcbiAgICBlbC5hdHRyc0xpc3QgPSBlbC5hdHRyc0xpc3QubWFwKCh7bmFtZSwgdmFsdWV9KSA9PiB7XG4gICAgICAgIGRlbGV0ZSBlbC5hdHRyc01hcFtuYW1lXTtcbiAgICAgICAgbmFtZSA9IG5hbWUucmVwbGFjZSgvXmEtLywgJ3YtJyk7XG4gICAgICAgIGVsLmF0dHJzTWFwW25hbWVdID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIG5hbWVcbiAgICAgICAgfTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHByZVRyYW5zZm9ybU5vZGVcbn07XG4iLCIvKipcbiAqIEBmaWxlIOS8mOWMliBhTm9kZSDnmoTkvZPnp69cbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvcHRpbWl6ZShhTm9kZSkge1xuICAgIGRlbGV0ZSBhTm9kZS5yYXc7XG4gICAgaWYgKGFOb2RlLmNoaWxkcmVuKSB7XG4gICAgICAgIGFOb2RlLmNoaWxkcmVuID0gYU5vZGUuY2hpbGRyZW4ubWFwKG9wdGltaXplKTtcbiAgICB9XG4gICAgaWYgKGFOb2RlLmVsc2VzKSB7XG4gICAgICAgIGFOb2RlLmVsc2VzID0gYU5vZGUuZWxzZXMubWFwKG9wdGltaXplKTtcbiAgICB9XG4gICAgaWYgKGFOb2RlLnRleHRFeHByKSB7XG4gICAgICAgIGRlbGV0ZSBhTm9kZS50ZXh0RXhwci5yYXc7XG4gICAgfVxuICAgIGlmIChhTm9kZS5wcm9wcykge1xuICAgICAgICBhTm9kZS5wcm9wcyA9IGFOb2RlLnByb3BzLm1hcChwcm9wID0+IHtcbiAgICAgICAgICAgIGlmIChwcm9wLnJhdykge1xuICAgICAgICAgICAgICAgIC8vIOS4jeiDveWIoOmZpO+8jOi/kOihjOaXtuacieeUqFxuICAgICAgICAgICAgICAgIHByb3AucmF3ID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wLmV4cHIpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgcHJvcC5leHByLnJhdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwcm9wO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGFOb2RlLmV2ZW50cykge1xuICAgICAgICBhTm9kZS5ldmVudHMgPSBhTm9kZS5ldmVudHMubWFwKGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC5yYXcpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgZXZlbnQucmF3O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGV2ZW50LmV4cHIpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgZXZlbnQuZXhwci5yYXc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZXZlbnQ7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoYU5vZGUuZGlyZWN0aXZlcykge1xuICAgICAgICBPYmplY3Qua2V5cyhhTm9kZS5kaXJlY3RpdmVzKS5mb3JFYWNoKGRpciA9PiB7XG4gICAgICAgICAgICBkZWxldGUgYU5vZGUuZGlyZWN0aXZlc1tkaXJdLnJhdztcbiAgICAgICAgICAgIGlmIChhTm9kZS5kaXJlY3RpdmVzW2Rpcl0udmFsdWUpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgYU5vZGUuZGlyZWN0aXZlc1tkaXJdLnZhbHVlLnJhd1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGFOb2RlO1xufVxuIiwiLyoqXG4gKiBAZmlsZSBjb21waWxlclxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCBidWlsZEluTW9kdWxlcyBmcm9tICcuL21vZHVsZXMnO1xuaW1wb3J0IHtjb21waWxlIGFzIHZ1ZUNvbXBpbGV9IGZyb20gJ3Z1ZS10ZW1wbGF0ZS1jb21waWxlcic7XG5pbXBvcnQgc3RyaW5naWZ5IGZyb20gJy4vc3RyaW5naWZ5JztcbmltcG9ydCBnZXRDc3NNb2R1bGVzIGZyb20gJy4vbW9kdWxlcy9jc3Ntb2R1bGVzJztcbmltcG9ydCBhdG9tIGZyb20gJy4vbW9kdWxlcy9hdG9tJztcbmltcG9ydCB7aXNFbXB0eX0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7cGFyc2VUZW1wbGF0ZX0gZnJvbSAnc2FuJztcbmltcG9ydCBvcHRpbWl6ZSBmcm9tICcuL29wdGltaXplLWFub2RlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBpbGUoc291cmNlLCBvcHRpb25zID0ge30pIHtcblxuICAgIGNvbnN0IHtcbiAgICAgICAgbW9kdWxlcyA9IFtdLFxuICAgICAgICBjc3NNb2R1bGVzID0gbnVsbCxcbiAgICAgICAgc2NvcGVJZCA9ICcnLFxuICAgICAgICBzdHJpcCA9IHRydWUsXG4gICAgICAgIGF0b206IGlzQXRvbSA9IGZhbHNlXG4gICAgfSA9IG9wdGlvbnM7XG5cbiAgICBpZiAoIWlzRW1wdHkoY3NzTW9kdWxlcykpIHtcbiAgICAgICAgbW9kdWxlcy51bnNoaWZ0KGdldENzc01vZHVsZXMoY3NzTW9kdWxlcykpO1xuICAgIH1cblxuICAgIGlmIChpc0F0b20pIHtcbiAgICAgICAgbW9kdWxlcy51bnNoaWZ0KGF0b20pO1xuICAgIH1cblxuICAgIGNvbnN0IGVycm9ycyA9IFtdO1xuICAgIGNvbnN0IGNvbXBpbGVyT3B0aW9ucyA9IHtcbiAgICAgICAgbW9kdWxlczogW1xuICAgICAgICAgICAgLi4uYnVpbGRJbk1vZHVsZXMsXG4gICAgICAgICAgICAuLi5tb2R1bGVzXG4gICAgICAgIF0sXG4gICAgICAgIHByZXNlcnZlV2hpdGVzcGFjZTogZmFsc2UsXG4gICAgICAgIHVzZUR5bmFtaWNDb21wb25lbnQ6IGZhbHNlLFxuICAgICAgICByZWZzOiBbXSxcbiAgICAgICAgZXJyb3IobXNnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBbdnVzYSBlcnJvcl0gJHttc2d9YCk7XG4gICAgICAgICAgICBlcnJvcnMucHVzaChtc2cpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIGNvbnNvbGUubG9nKHNvdXJjZSk7XG5cbiAgICBjb25zdCB7YXN0fSA9IHZ1ZUNvbXBpbGUoc291cmNlLnRyaW0oKSwgY29tcGlsZXJPcHRpb25zKTtcblxuICAgIGNvbnN0IHRlbXBsYXRlID0gc3RyaW5naWZ5KGFzdCwgeyBzY29wZUlkLCBzdHJpcCwgYXRvbTogaXNBdG9tIH0pO1xuICAgIC8vIGNvbnNvbGUubG9nKHRlbXBsYXRlKTtcbiAgICBjb25zdCBhTm9kZSA9IHBhcnNlVGVtcGxhdGUodGVtcGxhdGUsIHtcbiAgICAgICAgdHJpbVdoaXRlc3BhY2U6ICdibGFuaydcbiAgICB9KS5jaGlsZHJlblswXTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGFzdCxcbiAgICAgICAgYU5vZGU6IG9wdGltaXplKGFOb2RlKSxcbiAgICAgICAgdGVtcGxhdGUsXG4gICAgICAgIHJlZnM6IGNvbXBpbGVyT3B0aW9ucy5yZWZzLFxuICAgICAgICBlcnJvcnNcbiAgICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==