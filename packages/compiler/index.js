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



function text_combine_postTransformNode(el, state) {
  if (el.children && el.children.length > 0) {
    for (const child of el.children) {
      if (child.type !== 2 || !child.tokens || child.tokens.length <= 1) {
        continue;
      }

      let tokens = child.tokens.map((token, index) => {
        let text = '\'\'';

        if (token['@binding']) {
          text = token['@binding'];
        }

        if (typeof token === 'string') {
          text = `'${external_escape_quotes_default()(state.strip ? Object(external_lodash_["trim"])(token, ' \n\t') : token)}'`;
        }

        return text;
      });
      tokens = tokens.filter(t => t !== '\'\'');
      child.text = tokens.map((t, i) => i === 0 ? t : `_cat(${t})`).join(' | ');
      child.text = `{{ ${child.text} }}`;
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
    },

    strip
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXRvbS1leHByZXNzaW9uLWNvbXBpbGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXNjYXBlLXF1b3Rlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9jb2RlLWZyYW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG8tc2luZ2xlLXF1b3Rlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInZ1ZS10ZW1wbGF0ZS1jb21waWxlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNhblwiIiwid2VicGFjazovLy8uL3NyYy9jb21waWxlci9leHByZXNzaW9uLXRyYW5zZm9ybWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21waWxlci9tb2R1bGVzL2NsYXNzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21waWxlci9tb2R1bGVzL3N0eWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21waWxlci9tb2R1bGVzL2JpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBpbGVyL21vZHVsZXMvaWYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBpbGVyL21vZHVsZXMvZm9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21waWxlci9tb2R1bGVzL2V2ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21waWxlci9tb2R1bGVzL2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBpbGVyL21vZHVsZXMvcmVmLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21waWxlci9tb2R1bGVzL2R5bmFtaWMtY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21waWxlci9jb25zdGFudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcGlsZXIvbW9kdWxlcy9ib29sZWFuLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21waWxlci9tb2R1bGVzL3RlbXBsYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21waWxlci9tb2R1bGVzL3RyYW5zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBpbGVyL21vZHVsZXMvdGV4dC1jb21iaW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21waWxlci9tb2R1bGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21waWxlci9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21waWxlci9tb2R1bGVzL2Nzc21vZHVsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBpbGVyL21vZHVsZXMvYXRvbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcGlsZXIvb3B0aW1pemUtYW5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBpbGVyL2luZGV4LmpzIl0sIm5hbWVzIjpbIm1hcmsiLCJyZWciLCJSZWdFeHAiLCJ2YWxpZFVuYXJ5T3BlcmF0b3IiLCJTZXQiLCJ2YWxpZEJpbmFyeU9wZXJhdG9yIiwidmFsaWRMb2dpY2FsT3BlcmF0b3IiLCJub0JyYWNrZXRUeXBlcyIsIndyYXBCYWNrZXQiLCJjb2RlIiwibm9kZSIsImhhcyIsInR5cGUiLCJpbmNsdWRlcyIsIm9wZXJhdG9yIiwiU3ludGF4IiwiQXJyYXlFeHByZXNzaW9uIiwiTGl0ZXJhbCIsIk9iamVjdEV4cHJlc3Npb24iLCJVbmFyeUV4cHJlc3Npb24iLCJQcm9wZXJ0eSIsIlZ1ZUV4cHJlc3Npb24iLCJWdWVGaWx0ZXIiLCJJZGVudGlmaWVyIiwiTWVtYmVyRXhwcmVzc2lvbiIsIkJpbmFyeUV4cHJlc3Npb24iLCJMb2dpY2FsRXhwcmVzc2lvbiIsIkNvbmRpdGlvbmFsRXhwcmVzc2lvbiIsIkNhbGxFeHByZXNzaW9uIiwiVGVtcGxhdGVFeHByZXNzaW9uIiwiVmlzaXRvcktleXMiLCJ0b1N0cmluZyIsImEiLCJlc2NhcGVRdW90ZXMiLCJKU09OIiwic3RyaW5naWZ5IiwiQ29kZUdlbmVyYWdvciIsImV4cHJlc3Npb24iLCJmaWx0ZXJzIiwicmVkdWNlIiwicHJlIiwiZmlsdGVyIiwicmVwbGFjZSIsInJldCIsImFyZ3MiLCJoYXNBcmdzIiwibGVuZ3RoIiwibmFtZSIsIm1hcCIsImpvaW4iLCJyZXN1bHRzIiwicmVmIiwib2JqZWN0IiwicHJvcGVydHkiLCJjb21wdXRlZCIsImlzU3RhdGljIiwibGVuIiwidmFsdWUiLCJsZWZ0IiwicmlnaHQiLCJlcnJvciIsIkZ1bmN0aW9uIiwiZ2V0VHlwZSIsInRlc3QiLCJjb25zZXF1ZW50IiwiYWx0ZXJuYXRlIiwidGVzdENvZGUiLCJjb25zZXF1ZW50Q29kZSIsImFsdGVybmF0ZUNvZGUiLCJjYWxsZWUiLCJleHByZXNzaW9ucyIsImkiLCJyZXN1bHQiLCJjIiwidmFyRXhwb3J0IiwiaGFzQ29tcHV0ZWQiLCJjdXJyZW50IiwicHJldiIsInByb3BlcnRpZXMiLCJrZXlDb2RlIiwidHJhdmVyc2UiLCJrZXkiLCJnZW5Qcm9wZXJ0eUtleSIsIm9iaiIsInR5cGVTdHIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJjYWxsIiwic3Vic3RyaW5nIiwidG9Mb3dlckNhc2UiLCJDb2RlR2VuIiwiY29uc3RydWN0b3IiLCJzeW50YXgiLCJrZXlzIiwiZ2VuZXJhdGVyIiwibWVzc2FnZSIsImxvY2F0aW9uIiwic3RhcnQiLCJsaW5lIiwiY29sdW1uIiwiY29kZUZyYW1lIiwiY29kZUZyYW1lQ29sdW1ucyIsImhpZ2hsaWdodENvZGUiLCJFcnJvciIsInJvb3QiLCJ2aXNpdG9yS2V5cyIsImtleVJlc3VsdHMiLCJlbGVtZW50IiwiaXNOb2RlIiwiQXJyYXkiLCJpc0FycmF5IiwiZWxlIiwiZ2VuZXJhdGUiLCJhcHBseSIsIlN0cmluZyIsImFyZ3VtZW50cyIsImRhdGEiLCJwYXJzZSIsInN0YXJ0UnVsZSIsImUiLCJzdGFjayIsImNvZGVnZW4iLCJhc3QiLCJiaW5kS2V5cyIsInBvc3RUcmFuc2Zvcm1Ob2RlIiwiY2xhc3NCaW5kaW5nIiwic3RhdGljQ2xhc3MiLCJhdHRyc01hcCIsImNsYXNzIiwidHJhbnNmb3JtIiwiZm9yRWFjaCIsInZTaG93Iiwic3R5bGVCaW5kaW5nIiwic3RhdGljU3R5bGUiLCJzdHlsZSIsInRvU2luZ2xlUXVvdGVzIiwicmVCaW5kIiwibiIsInZCaW5kIiwiaWYiLCJlbHNlaWYiLCJlbHNlIiwiZm9yIiwiZnIiLCJhbGlhcyIsIml0ZXJhdG9yMSIsInRyYWNrQnlFeHByIiwicmVFdmVudCIsImV2ZW50QXR0cnMiLCJhdHRyc0xpc3QiLCJhdHRyIiwibW9kaWZpZXJzIiwic3BsaXQiLCJldmVudEhhbmRsZXIiLCJtIiwiZGlyIiwiZGlyZWN0aXZlcyIsImZpbmQiLCJkIiwiY2hpbGRyZW4iLCJ0ZXh0Iiwib3B0aW9ucyIsImluZm8iLCJwYXJlbnQiLCJ1bmRlZmluZWQiLCJyZWZzIiwicHVzaCIsImJpbmRSZWYiLCJ0YWciLCJpcyIsInN0YXJ0c1dpdGgiLCJzbGljZSIsInRyaW0iLCJleHByIiwidGVzdExvY2F0aW9uIiwib2Zmc2V0IiwiZW5kIiwiYXR0cnMiLCJpZkNvbmRpdGlvbnMiLCJleHAiLCJibG9jayIsInNpbmdsZVRhZyIsImFyZWEiLCJiYXNlIiwiYmFzZWZvbnQiLCJiciIsImNvbCIsImNvbW1hbmQiLCJlbWJlZCIsImZyYW1lIiwiaHIiLCJpbWciLCJpbnB1dCIsImlzaW5kZXgiLCJrZXlnZW4iLCJsaW5rIiwibWV0YSIsInBhcmFtIiwic291cmNlIiwidHJhY2siLCJ3YnIiLCJib29sZWFuQXR0ciIsImFsbG93ZnVsbHNjcmVlbiIsImFzeW5jIiwiYXV0b2ZvY3VzIiwiYXV0b3BsYXkiLCJjaGVja2VkIiwiY29tcGFjdCIsImNvbnRyb2xzIiwiZGVjbGFyZSIsImRlZmF1bHQiLCJkZWZhdWx0Y2hlY2tlZCIsImRlZmF1bHRtdXRlZCIsImRlZmF1bHRzZWxlY3RlZCIsImRlZmVyIiwiZGlzYWJsZWQiLCJlbmFibGVkIiwiZm9ybW5vdmFsaWRhdGUiLCJoaWRkZW4iLCJpbmRldGVybWluYXRlIiwiaW5lcnQiLCJpc21hcCIsIml0ZW1zY29wZSIsImxvb3AiLCJtdWx0aXBsZSIsIm11dGVkIiwibm9ocmVmIiwibm9yZXNpemUiLCJub3NoYWRlIiwibm92YWxpZGF0ZSIsIm5vd3JhcCIsIm9wZW4iLCJwYXVzZW9uZXhpdCIsInJlYWRvbmx5IiwicmVxdWlyZWQiLCJyZXZlcnNlZCIsInNjb3BlZCIsInNlYW1sZXNzIiwic2VsZWN0ZWQiLCJzb3J0YWJsZSIsInRyYW5zbGF0ZSIsInRydWVzcGVlZCIsInR5cGVtdXN0bWF0Y2giLCJ2aXNpYmxlIiwibm9WYWx1ZUF0dHIiLCJodG1sVGFnIiwiaHRtbCIsImJvZHkiLCJoZWFkIiwidGl0bGUiLCJhZGRyZXNzIiwiYXJ0aWNsZSIsImFzaWRlIiwiZm9vdGVyIiwiaGVhZGVyIiwiaDEiLCJoMiIsImgzIiwiaDQiLCJoNSIsImg2IiwiaGdyb3VwIiwibmF2Iiwic2VjdGlvbiIsImRpdiIsImRkIiwiZGwiLCJkdCIsImZpZ2NhcHRpb24iLCJmaWd1cmUiLCJsaSIsIm1haW4iLCJvbCIsInAiLCJ1bCIsImIiLCJhYmJyIiwiYmRpIiwiYmRvIiwiY2l0ZSIsImRmbiIsImVtIiwia2JkIiwicSIsInJwIiwicnQiLCJydGMiLCJydWJ5IiwicyIsInNhbXAiLCJzbWFsbCIsInNwYW4iLCJzdHJvbmciLCJzdWIiLCJzdXAiLCJ0aW1lIiwidSIsInZhciIsImF1ZGlvIiwidmlkZW8iLCJjYW52YXMiLCJzY3JpcHQiLCJub3NjcmlwdCIsImRlbCIsImlucyIsImNhcHRpb24iLCJjb2xncm91cCIsInRhYmxlIiwidGhlYWQiLCJ0Ym9keSIsInRkIiwidGgiLCJ0ciIsImJ1dHRvbiIsImRhdGFsaXN0IiwiZmllbGRzZXQiLCJmb3JtIiwibGFiZWwiLCJsZWdlbmQiLCJtZXRlciIsIm9wdGdyb3VwIiwib3B0aW9uIiwib3V0cHV0IiwicHJvZ3Jlc3MiLCJzZWxlY3QiLCJ0ZXh0YXJlYSIsImRldGFpbHMiLCJkaWFsb2ciLCJtZW51IiwibWVudWl0ZW0iLCJzdW1tYXJ5IiwiY29udGVudCIsInNoYWRvdyIsInRlbXBsYXRlIiwicHJlVHJhbnNmb3JtTm9kZSIsImVsIiwiY2FtZWxDYXNlIiwiaXRlbSIsInN0YXRlIiwiY2hpbGQiLCJ0b2tlbnMiLCJ0b2tlbiIsImluZGV4Iiwic3RyaXAiLCJ0IiwiYm9vbCIsInlmIiwiZXZlbnQiLCJ0ZXh0Q29tYmluZSIsImNsYXp6IiwiYmluZCIsInRyYW5zaXRpb24iLCJkeW5hbWljQ29tcG9uZW50Iiwic3RyaW5naWZ5QXR0ciIsInNjb3BlSWQiLCJhdG9tIiwiaGFzQ2hpbGRyZW4iLCJoYXNBdHRyIiwiZXh0ZW5kIiwiYXNzaWduIiwidG9PYmplY3QiLCJhcnIiLCJyZXMiLCJyZW1vdmUiLCJpbmRleE9mIiwic3BsaWNlIiwiX3RvU3RyaW5nIiwiaXNPYmplY3QiLCJoYXNPd25Qcm9wZXJ0eSIsImhhc093biIsImlzUGxhaW5PYmplY3QiLCJkZWYiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJjYWNoZWQiLCJmbiIsImNhY2hlIiwiY3JlYXRlIiwiY2FjaGVkRm4iLCJzdHIiLCJoaXQiLCJoeXBoZW5hdGVSRSIsImh5cGhlbmF0ZSIsImNhbWVsaXplIiwiXyIsInRvVXBwZXJDYXNlIiwib25jZSIsImNhbGxlZCIsImNzc01vZHVsZXMiLCIkc3R5bGUiLCJvcHRpbWl6ZSIsImFOb2RlIiwicmF3IiwiZWxzZXMiLCJ0ZXh0RXhwciIsInByb3BzIiwicHJvcCIsImV2ZW50cyIsImNvbXBpbGUiLCJtb2R1bGVzIiwiaXNBdG9tIiwiaXNFbXB0eSIsInVuc2hpZnQiLCJnZXRDc3NNb2R1bGVzIiwiZXJyb3JzIiwiY29tcGlsZXJPcHRpb25zIiwiYnVpbGRJbk1vZHVsZXMiLCJwcmVzZXJ2ZVdoaXRlc3BhY2UiLCJ1c2VEeW5hbWljQ29tcG9uZW50IiwibXNnIiwiY29uc29sZSIsInZ1ZUNvbXBpbGUiLCJwYXJzZVRlbXBsYXRlIiwidHJpbVdoaXRlc3BhY2UiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7QUNsRkEsbUM7Ozs7OztBQ0FBLHFEOzs7Ozs7QUNBQSwwQzs7Ozs7O0FDQUEsOEM7Ozs7OztBQ0FBLDZDOzs7Ozs7QUNBQSxrRDs7Ozs7O0FDQUEsZ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7O0FBS0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsSUFBSSxHQUFHLHdCQUFiO0FBQ0EsTUFBTUMsR0FBRyxHQUFHLElBQUlDLE1BQUosQ0FBV0YsSUFBWCxFQUFpQixHQUFqQixDQUFaO0FBRUEsTUFBTUcsa0JBQWtCLEdBQUcsSUFBSUMsR0FBSixDQUFRLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLENBQVIsQ0FBM0I7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxJQUFJRCxHQUFKLENBQVEsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsRUFBMEIsR0FBMUIsRUFBK0IsR0FBL0IsRUFBb0MsSUFBcEMsRUFBMEMsSUFBMUMsRUFBZ0QsSUFBaEQsRUFBc0QsS0FBdEQsRUFBNkQsSUFBN0QsRUFBbUUsS0FBbkUsQ0FBUixDQUE1QjtBQUNBLE1BQU1FLG9CQUFvQixHQUFHLElBQUlGLEdBQUosQ0FBUSxDQUFDLElBQUQsRUFBTyxJQUFQLENBQVIsQ0FBN0I7QUFDQSxNQUFNRyxjQUFjLEdBQUcsSUFBSUgsR0FBSixDQUFRLENBQzNCLGlCQUQyQixFQUUzQixTQUYyQixFQUczQixrQkFIMkIsRUFJM0IsWUFKMkIsRUFLM0Isa0JBTDJCLEVBTTNCLGdCQU4yQixFQU8zQixvQkFQMkIsRUFRM0IsaUJBUjJCLENBQVIsQ0FBdkI7O0FBV0EsU0FBU0ksVUFBVCxDQUFvQkMsSUFBcEIsRUFBMEJDLElBQTFCLEVBQWdDO0FBQzVCLE1BQUlILGNBQWMsQ0FBQ0ksR0FBZixDQUFtQkQsSUFBSSxDQUFDRSxJQUF4QixDQUFKLEVBQW1DO0FBQy9CLFdBQU9ILElBQVA7QUFDSDs7QUFDRCxNQUFJQyxJQUFJLENBQUNFLElBQUwsS0FBYyxrQkFBZCxJQUFvQyxDQUFDLElBQUQsRUFBTyxLQUFQLEVBQWMsSUFBZCxFQUFvQixLQUFwQixFQUEyQkMsUUFBM0IsQ0FBb0NILElBQUksQ0FBQ0ksUUFBekMsQ0FBeEMsRUFBNEY7QUFDeEYsV0FBT0wsSUFBUDtBQUNIOztBQUNELFNBQVEsSUFBR0EsSUFBSyxHQUFoQjtBQUNIOztBQUVELE1BQU1NLE1BQU0sR0FBRztBQUNYQyxpQkFBZSxFQUFFLGlCQUROO0FBRVhDLFNBQU8sRUFBRSxTQUZFO0FBR1hDLGtCQUFnQixFQUFFLGtCQUhQO0FBSVhDLGlCQUFlLEVBQUUsaUJBSk47QUFLWEMsVUFBUSxFQUFFLFVBTEM7QUFNWEMsZUFBYSxFQUFFLGVBTko7QUFPWEMsV0FBUyxFQUFFLFdBUEE7QUFRWEMsWUFBVSxFQUFFLFlBUkQ7QUFTWEMsa0JBQWdCLEVBQUUsa0JBVFA7QUFVWEMsa0JBQWdCLEVBQUUsa0JBVlA7QUFXWEMsbUJBQWlCLEVBQUUsbUJBWFI7QUFZWEMsdUJBQXFCLEVBQUUsdUJBWlo7QUFhWEMsZ0JBQWMsRUFBRSxnQkFiTDtBQWNYQyxvQkFBa0IsRUFBRTtBQWRULENBQWY7QUFpQkEsTUFBTUMsV0FBVyxHQUFHO0FBQ2hCZCxpQkFBZSxFQUFFLENBQUMsVUFBRCxDQUREO0FBRWhCRSxrQkFBZ0IsRUFBRSxDQUFDLFlBQUQsQ0FGRjtBQUdoQkMsaUJBQWUsRUFBRSxDQUFDLFVBQUQsQ0FIRDtBQUloQkMsVUFBUSxFQUFFLENBQUMsT0FBRCxDQUpNO0FBS2hCSSxrQkFBZ0IsRUFBRSxDQUFDLFFBQUQsRUFBVyxVQUFYLENBTEY7QUFNaEJDLGtCQUFnQixFQUFFLENBQUMsTUFBRCxFQUFTLE9BQVQsQ0FORjtBQU9oQkMsbUJBQWlCLEVBQUUsQ0FBQyxNQUFELEVBQVMsT0FBVCxDQVBIO0FBUWhCQyx1QkFBcUIsRUFBRSxDQUFDLE1BQUQsRUFBUyxZQUFULEVBQXVCLFdBQXZCLENBUlA7QUFTaEJDLGdCQUFjLEVBQUUsQ0FBQyxXQUFELENBVEE7QUFVaEJQLGVBQWEsRUFBRSxDQUFDLFlBQUQsRUFBZSxTQUFmLENBVkM7QUFXaEJDLFdBQVMsRUFBRSxDQUFDLFdBQUQsQ0FYSztBQVloQk8sb0JBQWtCLEVBQUUsQ0FBQyxhQUFEO0FBWkosQ0FBcEI7O0FBZUEsU0FBU0UsK0JBQVQsQ0FBa0JDLENBQWxCLEVBQXFCO0FBQ2pCLE1BQUksT0FBT0EsQ0FBUCxLQUFhLFFBQWpCLEVBQTJCO0FBQ3ZCLFdBQU9BLENBQUMsR0FBRyxFQUFYO0FBQ0g7O0FBQ0QsTUFBSSxPQUFPQSxDQUFQLEtBQWEsUUFBakIsRUFBMkI7QUFDdkIsV0FBUSxJQUFHQyxnQ0FBWSxDQUFDRCxDQUFELENBQUksR0FBM0I7QUFDSDs7QUFDRCxTQUFPRSxJQUFJLENBQUNDLFNBQUwsQ0FBZUgsQ0FBZixDQUFQO0FBQ0g7O0FBRUQsTUFBTUksYUFBYSxHQUFHO0FBRWxCZixlQUFhLENBQUNYLElBQUQsRUFBTyxDQUFDMkIsVUFBRCxFQUFhQyxPQUFiLENBQVAsRUFBOEI7QUFDdkMsUUFBSTdCLElBQUksR0FBRzZCLE9BQU8sQ0FBQ0MsTUFBUixDQUFlLENBQUNDLEdBQUQsRUFBTUMsTUFBTixLQUFpQjtBQUN2QyxhQUFPQSxNQUFNLENBQUNoQyxJQUFQLENBQVlpQyxPQUFaLENBQW9CekMsR0FBcEIsRUFBeUJ1QyxHQUF6QixDQUFQO0FBQ0gsS0FGVSxFQUVSSCxVQUFVLENBQUM1QixJQUZILENBQVg7QUFHQSxXQUFPLEtBQUtrQyxHQUFMLENBQVNsQyxJQUFULENBQVA7QUFDSCxHQVBpQjs7QUFTbEJhLFdBQVMsQ0FBQ1osSUFBRCxFQUFPLENBQUNrQyxJQUFELENBQVAsRUFBZTtBQUNwQixRQUFJQyxPQUFPLEdBQUdELElBQUksQ0FBQ0UsTUFBTCxHQUFjLENBQTVCO0FBQ0EsV0FBTyxLQUFLSCxHQUFMLENBQVUsR0FBRTNDLElBQUssTUFBS1UsSUFBSSxDQUFDcUMsSUFBSyxFQUF2QixJQUE0QkYsT0FBTyxHQUFJLElBQUdELElBQUksQ0FBQ0ksR0FBTCxDQUFTaEIsQ0FBQyxJQUFJQSxDQUFDLENBQUN2QixJQUFoQixFQUFzQndDLElBQXRCLENBQTJCLElBQTNCLENBQWlDLEdBQXhDLEdBQTZDLEVBQWhGLENBQVQsQ0FBUDtBQUNILEdBWmlCOztBQWNsQjFCLFlBQVUsQ0FBQ2IsSUFBRCxFQUFPd0MsT0FBUCxFQUFnQkMsR0FBaEIsRUFBcUI7QUFDM0IsV0FBTyxLQUFLUixHQUFMLENBQVNqQyxJQUFJLENBQUNxQyxJQUFkLENBQVA7QUFDSCxHQWhCaUI7O0FBa0JsQnZCLGtCQUFnQixDQUFDZCxJQUFELEVBQU93QyxPQUFQLEVBQWdCO0FBRTVCLFFBQUksQ0FBQ0UsTUFBRCxFQUFTQyxRQUFULElBQXFCSCxPQUF6Qjs7QUFFQSxRQUFJeEMsSUFBSSxDQUFDNEMsUUFBVCxFQUFtQjtBQUNmLGFBQU8sS0FBS1gsR0FBTCxDQUFVLEdBQUVTLE1BQU0sQ0FBQzNDLElBQUssSUFBRzRDLFFBQVEsQ0FBQzVDLElBQUssR0FBekMsQ0FBUDtBQUNIOztBQUVELFFBQUk0QyxRQUFRLENBQUM1QyxJQUFULEtBQWtCLFFBQXRCLEVBQWdDO0FBQzVCLFVBQUkyQyxNQUFNLENBQUN4QyxJQUFQLEtBQWdCLFFBQXBCLEVBQThCO0FBQzFCLFlBQUl3QyxNQUFNLENBQUNHLFFBQVgsRUFBcUI7QUFDakIsY0FBSUMsR0FBRyxHQUFHSixNQUFNLENBQUNLLEtBQVAsQ0FBYVgsTUFBdkI7QUFDQSxpQkFBTyxLQUFLSCxHQUFMLENBQVNhLEdBQUcsR0FBRyxFQUFmLEVBQW1CLFFBQW5CLEVBQTZCQSxHQUE3QixDQUFQO0FBQ0g7O0FBQ0QsZUFBTyxLQUFLYixHQUFMLENBQVUsR0FBRVMsTUFBTSxDQUFDM0MsSUFBSyxTQUF4QixFQUFrQyxRQUFsQyxDQUFQO0FBQ0g7QUFDSjs7QUFFRCxXQUFPLEtBQUtrQyxHQUFMLENBQVUsR0FBRVMsTUFBTSxDQUFDM0MsSUFBSyxJQUFHNEMsUUFBUSxDQUFDNUMsSUFBSyxFQUF6QyxDQUFQO0FBQ0gsR0FyQ2lCOztBQXVDbEJnQixrQkFBZ0IsQ0FBQ2YsSUFBRCxFQUFPLENBQUNnRCxJQUFELEVBQU9DLEtBQVAsQ0FBUCxFQUFzQlIsR0FBdEIsRUFBMkI7QUFDdkMsUUFBSSxDQUFDOUMsbUJBQW1CLENBQUNNLEdBQXBCLENBQXdCRCxJQUFJLENBQUNJLFFBQTdCLENBQUwsRUFBNkM7QUFDekMsV0FBSzhDLEtBQUwsQ0FBWSw0QkFBMkJsRCxJQUFJLENBQUNJLFFBQVMsR0FBckQsRUFBeURKLElBQXpEO0FBQ0g7O0FBQ0QsUUFBSWdELElBQUksQ0FBQ0gsUUFBTCxJQUFpQkksS0FBSyxDQUFDSixRQUEzQixFQUFxQztBQUNqQyxVQUFJRSxLQUFLLEdBQUcsSUFBSUksUUFBSixDQUFjLFVBQVNILElBQUksQ0FBQ2pELElBQUssSUFBR0MsSUFBSSxDQUFDSSxRQUFTLElBQUc2QyxLQUFLLENBQUNsRCxJQUFLLEVBQWhFLEdBQVo7QUFDQSxhQUFPLEtBQUtrQyxHQUFMLENBQVNaLCtCQUFRLENBQUMwQixLQUFELENBQWpCLEVBQTBCSyxPQUFPLENBQUNMLEtBQUQsQ0FBakMsRUFBMENBLEtBQTFDLENBQVA7QUFDSDs7QUFDRCxRQUFJaEQsSUFBSSxHQUFJLEdBQUVELFVBQVUsQ0FBQ2tELElBQUksQ0FBQ2pELElBQU4sRUFBWUMsSUFBSSxDQUFDZ0QsSUFBakIsQ0FBdUIsR0FBRWhELElBQUksQ0FBQ0ksUUFBUyxHQUFFTixVQUFVLENBQUNtRCxLQUFLLENBQUNsRCxJQUFQLEVBQWFDLElBQUksQ0FBQ2lELEtBQWxCLENBQXlCLEVBQXBHO0FBQ0EsV0FBTyxLQUFLaEIsR0FBTCxDQUFTbEMsSUFBVCxDQUFQO0FBQ0gsR0FqRGlCOztBQW1EbEJpQixtQkFBaUIsQ0FBQ2hCLElBQUQsRUFBTyxDQUFDZ0QsSUFBRCxFQUFPQyxLQUFQLENBQVAsRUFBc0I7QUFDbkMsUUFBSSxDQUFDckQsb0JBQW9CLENBQUNLLEdBQXJCLENBQXlCRCxJQUFJLENBQUNJLFFBQTlCLENBQUwsRUFBOEM7QUFDMUMsV0FBSzhDLEtBQUwsQ0FBWSw2QkFBNEJsRCxJQUFJLENBQUNJLFFBQVMsR0FBdEQsRUFBMERKLElBQTFEO0FBQ0g7O0FBQ0QsUUFBSWdELElBQUksQ0FBQ0gsUUFBTCxJQUFpQkksS0FBSyxDQUFDSixRQUEzQixFQUFxQztBQUNqQyxVQUFJRSxLQUFLLEdBQUcsSUFBSUksUUFBSixDQUFjLFVBQVNILElBQUksQ0FBQ2pELElBQUssR0FBRUMsSUFBSSxDQUFDSSxRQUFTLEdBQUU2QyxLQUFLLENBQUNsRCxJQUFLLEVBQTlELEdBQVo7QUFDQSxhQUFPLEtBQUtrQyxHQUFMLENBQVNaLCtCQUFRLENBQUMwQixLQUFELENBQWpCLEVBQTBCSyxPQUFPLENBQUNMLEtBQUQsQ0FBakMsRUFBMENBLEtBQTFDLENBQVA7QUFDSDs7QUFDRCxRQUFJaEQsSUFBSSxHQUFJLEdBQUVELFVBQVUsQ0FBQ2tELElBQUksQ0FBQ2pELElBQU4sRUFBWUMsSUFBSSxDQUFDZ0QsSUFBakIsQ0FBdUIsR0FBRWhELElBQUksQ0FBQ0ksUUFBUyxHQUFFTixVQUFVLENBQUNtRCxLQUFLLENBQUNsRCxJQUFQLEVBQWFDLElBQUksQ0FBQ2lELEtBQWxCLENBQXlCLEVBQXBHO0FBQ0EsV0FBTyxLQUFLaEIsR0FBTCxDQUFTbEMsSUFBVCxDQUFQO0FBQ0gsR0E3RGlCOztBQStEbEJrQix1QkFBcUIsQ0FBQ2pCLElBQUQsRUFBTyxDQUFDcUQsSUFBRCxFQUFPQyxVQUFQLEVBQW1CQyxTQUFuQixDQUFQLEVBQXNDO0FBQ3ZELFFBQUlGLElBQUksQ0FBQ1IsUUFBVCxFQUFtQjtBQUNmLGFBQU9RLElBQUksQ0FBQ04sS0FBTCxHQUFhTyxVQUFiLEdBQTBCQyxTQUFqQztBQUNIOztBQUVELFFBQUlDLFFBQVEsR0FBRzFELFVBQVUsQ0FBQ3VELElBQUksQ0FBQ3RELElBQU4sRUFBWUMsSUFBSSxDQUFDcUQsSUFBakIsQ0FBekI7QUFDQSxRQUFJSSxjQUFjLEdBQUczRCxVQUFVLENBQUN3RCxVQUFVLENBQUN2RCxJQUFaLEVBQWtCQyxJQUFJLENBQUNzRCxVQUF2QixDQUEvQjtBQUNBLFFBQUlJLGFBQWEsR0FBRzVELFVBQVUsQ0FBQ3lELFNBQVMsQ0FBQ3hELElBQVgsRUFBaUJDLElBQUksQ0FBQ3VELFNBQXRCLENBQTlCO0FBRUEsV0FBTyxLQUFLdEIsR0FBTCxDQUFVLEdBQUV1QixRQUFTLElBQUdDLGNBQWUsSUFBR0MsYUFBYyxFQUF4RCxDQUFQO0FBQ0gsR0F6RWlCOztBQTJFbEJ4QyxnQkFBYyxDQUFDbEIsSUFBRCxFQUFPLENBQUNrQyxJQUFELENBQVAsRUFBZTtBQUN6QixXQUFPLEtBQUtELEdBQUwsQ0FBVSxHQUFFakMsSUFBSSxDQUFDMkQsTUFBTCxDQUFZdEIsSUFBSyxJQUFHSCxJQUFJLENBQUNJLEdBQUwsQ0FBU2hCLENBQUMsSUFBSUEsQ0FBQyxDQUFDdkIsSUFBaEIsRUFBc0J3QyxJQUF0QixDQUEyQixJQUEzQixDQUFpQyxHQUFqRSxDQUFQO0FBQ0gsR0E3RWlCOztBQStFbEJwQixvQkFBa0IsQ0FBQ25CLElBQUQsRUFBTyxDQUFDNEQsV0FBRCxDQUFQLEVBQXNCO0FBQ3BDLFdBQU8sS0FBSzNCLEdBQUwsQ0FDRixJQUFHMkIsV0FBVyxDQUFDdEIsR0FBWixDQUFnQixDQUFDO0FBQUN2QztBQUFELEtBQUQsRUFBUzhELENBQVQsS0FBZS9ELFVBQVUsQ0FBQ0MsSUFBRCxFQUFPQyxJQUFJLENBQUM0RCxXQUFMLENBQWlCQyxDQUFqQixDQUFQLENBQXpDLEVBQXNFdEIsSUFBdEUsQ0FBMkUsR0FBM0UsQ0FBZ0YsR0FEakYsRUFFSCxRQUZHLENBQVA7QUFJSCxHQXBGaUI7O0FBc0ZsQmpDLGlCQUFlLENBQUNOLElBQUQsRUFBT3dDLE9BQVAsRUFBZ0I7QUFDM0IsUUFBSXNCLE1BQU0sR0FBR3RCLE9BQU8sQ0FBQyxDQUFELENBQXBCO0FBQ0EsV0FBTyxLQUFLUCxHQUFMLENBQVUsSUFBRzZCLE1BQU0sQ0FBQ3hCLEdBQVAsQ0FBV3lCLENBQUMsSUFBSUEsQ0FBQyxDQUFDaEUsSUFBbEIsRUFBd0J3QyxJQUF4QixDQUE2QixJQUE3QixDQUFtQyxHQUFoRCxFQUFvRCxPQUFwRCxDQUFQO0FBQ0gsR0F6RmlCOztBQTJGbEJoQyxTQUFPLENBQUNQLElBQUQsRUFBTztBQUNWLFdBQU8sS0FBS2lDLEdBQUwsQ0FDSCxLQUFLK0IsU0FBTCxDQUFlaEUsSUFBSSxDQUFDK0MsS0FBcEIsQ0FERyxFQUVISyxPQUFPLENBQUNwRCxJQUFJLENBQUMrQyxLQUFOLENBRkosRUFHSC9DLElBQUksQ0FBQytDLEtBSEYsQ0FBUDtBQUtILEdBakdpQjs7QUFtR2xCdEMsaUJBQWUsQ0FBQ1QsSUFBRCxFQUFPd0MsT0FBUCxFQUFnQjtBQUUzQixRQUFJLENBQUMvQyxrQkFBa0IsQ0FBQ1EsR0FBbkIsQ0FBdUJELElBQUksQ0FBQ0ksUUFBNUIsQ0FBTCxFQUE0QztBQUN4QyxXQUFLOEMsS0FBTCxDQUFZLDBCQUF5QmxELElBQUksQ0FBQ0ksUUFBUyxHQUFuRCxFQUF1REosSUFBdkQ7QUFDSDs7QUFFRCxRQUFJOEQsTUFBTSxHQUFHdEIsT0FBTyxDQUFDLENBQUQsQ0FBcEI7O0FBRUEsUUFBSXNCLE1BQU0sQ0FBQ2pCLFFBQVgsRUFBcUI7QUFDakIsVUFBSUUsS0FBSyxHQUFHLElBQUlJLFFBQUosQ0FBYyxVQUFTbkQsSUFBSSxDQUFDSSxRQUFTLEdBQUUwRCxNQUFNLENBQUMvRCxJQUFLLEVBQW5ELEdBQVo7QUFDQSxVQUFJMEIsU0FBUyxHQUFHSiwrQkFBUSxDQUFDMEIsS0FBRCxDQUF4QjtBQUNBLGFBQU8sS0FBS2QsR0FBTCxDQUFTUixTQUFULEVBQW9CMkIsT0FBTyxDQUFDTCxLQUFELENBQTNCLEVBQW9DQSxLQUFwQyxDQUFQO0FBQ0g7O0FBRUQsV0FBTyxLQUFLZCxHQUFMLENBQVUsR0FBRWpDLElBQUksQ0FBQ0ksUUFBUyxHQUFFMEQsTUFBTSxDQUFDL0QsSUFBSyxFQUF4QyxDQUFQO0FBQ0gsR0FsSGlCOztBQW9IbEJTLGtCQUFnQixDQUFDUixJQUFELEVBQU93QyxPQUFQLEVBQWdCO0FBRTVCLFFBQUl4QyxJQUFJLENBQUNpRSxXQUFULEVBQXNCO0FBQ2xCLFVBQUlsRSxJQUFJLEdBQUcsTUFBWDtBQUNBLFVBQUltRSxPQUFKO0FBQ0EsVUFBSUMsSUFBSjs7QUFDQSxXQUFLLElBQUlOLENBQUMsR0FBRyxDQUFSLEVBQVdmLEdBQUcsR0FBRzlDLElBQUksQ0FBQ29FLFVBQUwsQ0FBZ0JoQyxNQUF0QyxFQUE4Q3lCLENBQUMsR0FBR2YsR0FBbEQsRUFBdURlLENBQUMsRUFBeEQsRUFBNEQ7QUFDeEQsY0FBTWxCLFFBQVEsR0FBRzNDLElBQUksQ0FBQ29FLFVBQUwsQ0FBZ0JQLENBQWhCLENBQWpCO0FBQ0FNLFlBQUksR0FBR0QsT0FBUDtBQUNBQSxlQUFPLEdBQUcsQ0FBQyxDQUFDdkIsUUFBUSxDQUFDQyxRQUFyQjs7QUFDQSxZQUFJc0IsT0FBTyxJQUFJQyxJQUFJLEtBQUssS0FBeEIsRUFBK0I7QUFDM0JwRSxjQUFJLElBQUksSUFBUjtBQUNIOztBQUNELFlBQUltRSxPQUFPLElBQUksQ0FBQ0MsSUFBaEIsRUFBc0I7QUFDbEJwRSxjQUFJLElBQUksUUFBUjtBQUNIOztBQUNELFlBQUksQ0FBQ21FLE9BQUQsSUFBWUMsSUFBaEIsRUFBc0I7QUFDbEJwRSxjQUFJLElBQUksTUFBUjtBQUNIOztBQUNELFlBQUksQ0FBQ21FLE9BQUQsSUFBWUMsSUFBSSxJQUFJLElBQXhCLEVBQThCO0FBQzFCcEUsY0FBSSxJQUFJLEdBQVI7QUFDSDs7QUFDRCxZQUFJbUUsT0FBTyxLQUFLQyxJQUFoQixFQUFzQjtBQUNsQnBFLGNBQUksSUFBSSxHQUFSO0FBQ0g7O0FBQ0RBLFlBQUksSUFBSXlDLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV3FCLENBQVgsRUFBYzlELElBQXRCO0FBQ0g7O0FBQ0RBLFVBQUksSUFBSW1FLE9BQU8sR0FBRyxLQUFILEdBQVcsSUFBMUI7QUFDQSxhQUFPLEtBQUtqQyxHQUFMLENBQVNsQyxJQUFULENBQVA7QUFDSDs7QUFFRCxRQUFJK0QsTUFBTSxHQUFHdEIsT0FBTyxDQUFDLENBQUQsQ0FBcEI7QUFDQSxXQUFPLEtBQUtQLEdBQUwsQ0FBVSxJQUFHNkIsTUFBTSxDQUFDeEIsR0FBUCxDQUFXeUIsQ0FBQyxJQUFJQSxDQUFDLENBQUNoRSxJQUFsQixFQUF3QndDLElBQXhCLENBQTZCLEdBQTdCLENBQWtDLElBQS9DLEVBQW9ELFFBQXBELENBQVA7QUFDSCxHQXJKaUI7O0FBdUpsQjdCLFVBQVEsQ0FBQ1YsSUFBRCxFQUFPd0MsT0FBUCxFQUFnQkMsR0FBaEIsRUFBcUI7QUFFekIsUUFBSXpDLElBQUksQ0FBQzRDLFFBQVQsRUFBbUI7QUFDZkgsU0FBRyxDQUFDd0IsV0FBSixHQUFrQixJQUFsQjtBQUNBLFVBQUlJLE9BQU8sR0FBRyxLQUFLQyxRQUFMLENBQWN0RSxJQUFJLENBQUN1RSxHQUFuQixFQUF3QnZFLElBQXhCLEVBQThCRCxJQUE1QztBQUNBLGFBQU8sS0FBS2tDLEdBQUwsQ0FBVSxNQUFLb0MsT0FBUSxNQUFLN0IsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXekMsSUFBSyxHQUE1QyxDQUFQO0FBQ0g7O0FBRUQsUUFBSXNFLE9BQU8sR0FBRyxLQUFLRyxjQUFMLENBQW9CeEUsSUFBSSxDQUFDdUUsR0FBekIsRUFBOEJ4RSxJQUE1QztBQUNBLFdBQU8sS0FBS2tDLEdBQUwsQ0FBVSxHQUFFb0MsT0FBUSxJQUFHN0IsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXekMsSUFBSyxFQUF2QyxDQUFQO0FBQ0g7O0FBaktpQixDQUF0Qjs7QUFvS0EsU0FBU3FELE9BQVQsQ0FBaUJxQixHQUFqQixFQUFzQjtBQUNsQixNQUFJQyxPQUFPLEdBQUdDLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQnZELFFBQWpCLENBQTBCd0QsSUFBMUIsQ0FBK0JKLEdBQS9CLENBQWQ7QUFDQSxTQUFPQyxPQUFPLENBQUNJLFNBQVIsQ0FBa0IsQ0FBbEIsRUFBcUJKLE9BQU8sQ0FBQ3RDLE1BQVIsR0FBaUIsQ0FBdEMsRUFBeUMyQyxXQUF6QyxFQUFQO0FBQ0g7O0FBRUQsTUFBTUMsOEJBQU4sQ0FBYztBQUVWQyxhQUFXLENBQUM7QUFBQ2xGO0FBQUQsR0FBRCxFQUFTO0FBQ2hCLFNBQUttRixNQUFMLEdBQWM3RSxNQUFkO0FBQ0EsU0FBSzhFLElBQUwsR0FBWS9ELFdBQVo7QUFDQSxTQUFLZ0UsU0FBTCxHQUFpQjFELGFBQWpCO0FBRUEsU0FBSzNCLElBQUwsR0FBWUEsSUFBWjtBQUNIOztBQUVEbUQsT0FBSyxDQUFDbUMsT0FBRCxFQUFVckYsSUFBVixFQUFnQjtBQUNqQnFGLFdBQU8sR0FBSSw2QkFBNEJyRixJQUFJLENBQUNzRixRQUFMLENBQWNDLEtBQWQsQ0FBb0JDLElBQUssSUFBR3hGLElBQUksQ0FBQ3NGLFFBQUwsQ0FBY0MsS0FBZCxDQUFvQkUsTUFBTyxPQUFNSixPQUFRLEVBQTVHO0FBRUEsUUFBSUssU0FBUyxHQUFHQyx1Q0FBZ0IsQ0FBQyxLQUFLNUYsSUFBTixFQUFZQyxJQUFJLENBQUNzRixRQUFqQixFQUEyQjtBQUN2RE0sbUJBQWEsRUFBRTtBQUR3QyxLQUEzQixDQUFoQztBQUdBUCxXQUFPLElBQUssS0FBSUssU0FBVSxFQUExQjtBQUVBLFVBQU0sSUFBSUcsS0FBSixDQUFVUixPQUFWLENBQU47QUFDSDs7QUFFRGYsVUFBUSxDQUFDdEUsSUFBRCxFQUFPeUMsR0FBUCxFQUFZO0FBRWhCLFFBQUl5QyxNQUFNLEdBQUcsS0FBS0EsTUFBTCxDQUFZbEYsSUFBSSxDQUFDRSxJQUFqQixDQUFiOztBQUVBLFFBQUlGLElBQUksS0FBS3lDLEdBQWIsRUFBa0I7QUFDZCxXQUFLcUQsSUFBTCxHQUFZOUYsSUFBWjtBQUNIOztBQUVEQSxRQUFJLENBQUN5QyxHQUFMLEdBQVdBLEdBQVgsQ0FSZ0IsQ0FVaEI7O0FBQ0EsUUFBSSxDQUFDeUMsTUFBTCxFQUFhO0FBQ1QsV0FBS2hDLEtBQUwsQ0FBWSxzQkFBcUJsRCxJQUFJLENBQUNFLElBQUssNkJBQTRCRixJQUFJLENBQUNxQyxJQUFLLEdBQWpGLEVBQXFGckMsSUFBckY7QUFDSDs7QUFFRCxRQUFJK0YsV0FBVyxHQUFHLEtBQUtaLElBQUwsQ0FBVW5GLElBQUksQ0FBQ0UsSUFBZixLQUF3QixFQUExQztBQUNBLFFBQUk4RixVQUFVLEdBQUdELFdBQVcsQ0FBQ3pELEdBQVosQ0FBZ0JpQyxHQUFHLElBQUk7QUFDcEMsVUFBSTBCLE9BQU8sR0FBR2pHLElBQUksQ0FBQ3VFLEdBQUQsQ0FBbEI7QUFDQSxVQUFJVCxNQUFNLEdBQUcsSUFBYjs7QUFFQSxVQUFJLEtBQUtvQyxNQUFMLENBQVlELE9BQVosQ0FBSixFQUEwQjtBQUN0Qm5DLGNBQU0sR0FBRyxLQUFLUSxRQUFMLENBQWMyQixPQUFkLEVBQXVCakcsSUFBdkIsQ0FBVDtBQUNILE9BRkQsTUFHSyxJQUFJbUcsS0FBSyxDQUFDQyxPQUFOLENBQWNILE9BQWQsQ0FBSixFQUE0QjtBQUM3Qm5DLGNBQU0sR0FBR21DLE9BQU8sQ0FBQzNELEdBQVIsQ0FBWStELEdBQUcsSUFBSSxLQUFLL0IsUUFBTCxDQUFjK0IsR0FBZCxFQUFtQnJHLElBQW5CLENBQW5CLENBQVQ7QUFDSCxPQUZJLE1BR0E7QUFDRCxhQUFLa0QsS0FBTCxDQUFZLDRCQUEyQixPQUFPK0MsT0FBUSw0QkFBMkJBLE9BQU8sQ0FBQzVELElBQUssRUFBOUYsRUFBaUc0RCxPQUFqRztBQUNIOztBQUVELGFBQU9uQyxNQUFQO0FBQ0gsS0FmZ0IsQ0FBakI7QUFpQkEsV0FBTyxLQUFLd0MsUUFBTCxDQUFjdEcsSUFBZCxFQUFvQmdHLFVBQXBCLEVBQWdDdkQsR0FBaEMsQ0FBUDtBQUNIOztBQUVENkQsVUFBUSxDQUFDdEcsSUFBRCxFQUFPLEdBQUdrQyxJQUFWLEVBQWdCO0FBQ3BCLFdBQU8sS0FBS2tELFNBQUwsQ0FBZXBGLElBQUksQ0FBQ0UsSUFBcEIsRUFBMEJxRyxLQUExQixDQUFnQyxJQUFoQyxFQUFzQyxDQUFDdkcsSUFBRCxFQUFPLEdBQUdrQyxJQUFWLENBQXRDLENBQVA7QUFDSDs7QUFFRHNDLGdCQUFjLENBQUN4RSxJQUFELEVBQU87QUFDakIsUUFBSUQsSUFBSjs7QUFDQSxZQUFRQyxJQUFJLENBQUNFLElBQWI7QUFDSSxXQUFLLFlBQUw7QUFDSSxlQUFPLEtBQUsrQixHQUFMLENBQVNqQyxJQUFJLENBQUNxQyxJQUFkLEVBQW9CLFFBQXBCLEVBQThCckMsSUFBSSxDQUFDcUMsSUFBbkMsQ0FBUDs7QUFDSixXQUFLLFNBQUw7QUFDSXRDLFlBQUksR0FBR3NCLCtCQUFRLENBQUNtRixNQUFNLENBQUN4RyxJQUFJLENBQUMrQyxLQUFOLENBQVAsQ0FBZjtBQUNBLGVBQU8sS0FBS2QsR0FBTCxDQUFTbEMsSUFBVCxFQUFlLFFBQWYsRUFBeUJ5RyxNQUFNLENBQUN4RyxJQUFJLENBQUMrQyxLQUFOLENBQS9CLENBQVA7O0FBQ0o7QUFDSSxhQUFLRyxLQUFMLENBQVksOEJBQTZCbEQsSUFBSSxDQUFDRSxJQUFLLEdBQW5ELEVBQXVERixJQUF2RDtBQVBSO0FBU0g7O0FBRURrRyxRQUFNLENBQUNsRyxJQUFELEVBQU87QUFDVCxRQUFJQSxJQUFJLElBQUksSUFBWixFQUFrQjtBQUNkLGFBQU8sS0FBUDtBQUNIOztBQUNELFdBQU8sT0FBT0EsSUFBUCxLQUFnQixRQUFoQixJQUE0QixPQUFPQSxJQUFJLENBQUNFLElBQVosS0FBcUIsUUFBeEQ7QUFDSDs7QUFFRCtCLEtBQUcsQ0FBQ2xDLElBQUQsRUFBT0csSUFBUCxFQUFhNkMsS0FBYixFQUFvQjtBQUNuQixXQUFPO0FBQ0hoRCxVQURHO0FBRUhHLFVBRkc7QUFHSDZDLFdBSEc7QUFJSEYsY0FBUSxFQUFFNEQsU0FBUyxDQUFDckUsTUFBVixHQUFtQjtBQUoxQixLQUFQO0FBTUg7O0FBRUQ0QixXQUFTLENBQUMwQyxJQUFELEVBQU87QUFDWixXQUFPckYsK0JBQVEsQ0FBQ3FGLElBQUQsQ0FBZjtBQUNIOztBQTVGUzs7QUErRkMscUVBQVUzRyxJQUFWLEVBQWdCO0FBRTNCLE1BQUksQ0FBQ0EsSUFBTCxFQUFXO0FBQ1AsV0FBTztBQUNIQSxVQUFJLEVBQUU7QUFESCxLQUFQO0FBR0g7O0FBRUQsTUFBSUMsSUFBSjs7QUFDQSxNQUFJO0FBQ0FBLFFBQUksR0FBRzJHLG1EQUFLLENBQUM1RyxJQUFELEVBQU87QUFDZjZHLGVBQVMsRUFBRTtBQURJLEtBQVAsQ0FBWjtBQUdILEdBSkQsQ0FLQSxPQUFPQyxDQUFQLEVBQVU7QUFDTixVQUFNLElBQUloQixLQUFKLENBQVcsMkNBQTBDOUYsSUFBSyxNQUFLOEcsQ0FBQyxDQUFDQyxLQUFNLEVBQXZFLENBQU47QUFDSDs7QUFFRCxNQUFJQyxPQUFPLEdBQUcsSUFBSS9CLDhCQUFKLENBQVk7QUFDdEJqRjtBQURzQixHQUFaLENBQWQ7QUFJQSxTQUFPO0FBQ0hpSCxPQUFHLEVBQUVoSCxJQUFJLENBQUMyQixVQURQO0FBRUgsT0FBR29GLE9BQU8sQ0FBQ3pDLFFBQVIsQ0FBaUJ0RSxJQUFqQixFQUF1QkEsSUFBdkI7QUFGQSxHQUFQO0FBSUgsQzs7QUNoWEQ7Ozs7QUFLQTtBQUVBLE1BQU1pSCxRQUFRLEdBQUcsQ0FBQyxRQUFELEVBQVcsY0FBWCxDQUFqQjs7QUFFQSxTQUFTQyxpQkFBVCxDQUEyQmxILElBQTNCLEVBQWlDO0FBQzdCLE1BQUlBLElBQUksQ0FBQ0UsSUFBTCxLQUFjLENBQWQsSUFBbUJGLElBQUksQ0FBQ21ILFlBQTVCLEVBQTBDO0FBQ3RDLFVBQU1DLFdBQVcsR0FBR3BILElBQUksQ0FBQ3FILFFBQUwsQ0FBY0MsS0FBZCxJQUF1QixFQUEzQztBQUNBLFVBQU1ILFlBQVksR0FBR0ksc0JBQVMsQ0FBQ3ZILElBQUksQ0FBQ21ILFlBQU4sQ0FBVCxDQUE2QnBILElBQWxEO0FBQ0FDLFFBQUksQ0FBQ3FILFFBQUwsQ0FBY0MsS0FBZCxHQUF1QixXQUFVRixXQUFZLE1BQUtELFlBQWEsTUFBL0Q7QUFDQUYsWUFBUSxDQUFDTyxPQUFULENBQWlCakQsR0FBRyxJQUFJLE9BQU92RSxJQUFJLENBQUNxSCxRQUFMLENBQWM5QyxHQUFkLENBQS9CO0FBQ0g7QUFDSjs7QUFFYztBQUNYMkM7QUFEVyxDQUFmLEU7Ozs7OztBQ2xCQTs7OztBQUtBO0FBQ0E7QUFFQSxNQUFNRCxjQUFRLEdBQUcsQ0FBQyxRQUFELEVBQVcsY0FBWCxFQUEyQixRQUEzQixDQUFqQjs7QUFFQSxTQUFTQyx1QkFBVCxDQUEyQmxILElBQTNCLEVBQWlDO0FBQzdCLFFBQU15SCxLQUFLLEdBQUd6SCxJQUFJLENBQUNxSCxRQUFMLENBQWMsUUFBZCxDQUFkOztBQUNBLE1BQUlySCxJQUFJLENBQUNFLElBQUwsS0FBYyxDQUFkLEtBQW9CRixJQUFJLENBQUMwSCxZQUFMLElBQXFCRCxLQUF6QyxDQUFKLEVBQXFEO0FBQ2pELFVBQU1FLFdBQVcsR0FBRzNILElBQUksQ0FBQzJILFdBQUwsSUFBb0IsTUFBeEM7QUFDQSxVQUFNRCxZQUFZLEdBQUcxSCxJQUFJLENBQUMwSCxZQUFMLEdBQW9CSCxzQkFBUyxDQUFDdkgsSUFBSSxDQUFDMEgsWUFBTixDQUFULENBQTZCM0gsSUFBakQsR0FBd0QsSUFBN0UsQ0FGaUQsQ0FHakQ7O0FBQ0FDLFFBQUksQ0FBQ3FILFFBQUwsQ0FBY08sS0FBZCxHQUF1QixVQUFTQyxtQ0FBYyxDQUFDRixXQUFELENBQWMsS0FBSUQsWUFBYSxHQUFFRCxLQUFLLEdBQUksS0FBSUYsc0JBQVMsQ0FBQ0UsS0FBRCxDQUFULENBQWlCMUgsSUFBSyxFQUE5QixHQUFrQyxFQUFHLE1BQXpIO0FBQ0FrSCxrQkFBUSxDQUFDTyxPQUFULENBQWlCakQsR0FBRyxJQUFJLE9BQU92RSxJQUFJLENBQUNxSCxRQUFMLENBQWM5QyxHQUFkLENBQS9CO0FBQ0g7QUFDSjs7QUFFYztBQUNYMkMsbUJBQWlCQTtBQUROLENBQWYsRTs7QUNyQkE7Ozs7QUFLQTtBQUVBLE1BQU1ZLE1BQU0sR0FBRyxjQUFmOztBQUVBLFNBQVNaLHNCQUFULENBQTJCbEgsSUFBM0IsRUFBaUM7QUFDN0IsTUFBSUEsSUFBSSxDQUFDRSxJQUFMLEtBQWMsQ0FBbEIsRUFBcUI7QUFDakI7QUFDSDs7QUFDRCxRQUFNaUYsSUFBSSxHQUFHUixNQUFNLENBQUNRLElBQVAsQ0FBWW5GLElBQUksQ0FBQ3FILFFBQWpCLEVBQTJCdEYsTUFBM0IsQ0FBa0NnRyxDQUFDLElBQUlELE1BQU0sQ0FBQ3pFLElBQVAsQ0FBWTBFLENBQVosQ0FBdkMsQ0FBYjs7QUFDQSxPQUFLLE1BQU14RCxHQUFYLElBQWtCWSxJQUFsQixFQUF3QjtBQUNwQixVQUFNcEMsS0FBSyxHQUFHL0MsSUFBSSxDQUFDcUgsUUFBTCxDQUFjOUMsR0FBZCxDQUFkO0FBQ0EsV0FBT3ZFLElBQUksQ0FBQ3FILFFBQUwsQ0FBYzlDLEdBQWQsQ0FBUDtBQUNBLFVBQU10QyxHQUFHLEdBQUdzRixzQkFBUyxDQUFDeEUsS0FBRCxDQUFyQjtBQUNBLFVBQU1oRCxJQUFJLEdBQUdrQyxHQUFHLENBQUNsQyxJQUFqQjtBQUNBQyxRQUFJLENBQUNxSCxRQUFMLENBQWM5QyxHQUFHLENBQUN2QyxPQUFKLENBQVk4RixNQUFaLEVBQW9CLEVBQXBCLENBQWQsSUFBMEMsTUFBSy9ILElBQUssS0FBcEQ7QUFDSDs7QUFFRCxNQUFJQyxJQUFJLENBQUNxSCxRQUFMLENBQWMsUUFBZCxDQUFKLEVBQTZCO0FBQ3pCLFVBQU1XLEtBQUssR0FBR2hJLElBQUksQ0FBQ3FILFFBQUwsQ0FBYyxRQUFkLENBQWQ7QUFDQXJILFFBQUksQ0FBQ3FILFFBQUwsQ0FBYyxRQUFkLElBQTJCLE1BQUtFLHNCQUFTLENBQUNTLEtBQUQsQ0FBVCxDQUFpQmpJLElBQUssS0FBdEQ7QUFDQSxXQUFPQyxJQUFJLENBQUNxSCxRQUFMLENBQWMsUUFBZCxDQUFQO0FBQ0g7QUFDSjs7QUFFYztBQUNYSCxtQkFBaUJBO0FBRE4sQ0FBZixFOztBQzdCQTs7OztBQUtBOztBQUVBLFNBQVNBLG9CQUFULENBQTJCbEgsSUFBM0IsRUFBaUM7QUFDN0IsTUFBSUEsSUFBSSxDQUFDRSxJQUFMLEtBQWMsQ0FBbEIsRUFBcUI7QUFDakI7QUFDSDs7QUFFRCxNQUFJRixJQUFJLENBQUNpSSxFQUFULEVBQWE7QUFDVGpJLFFBQUksQ0FBQ3FILFFBQUwsQ0FBYyxNQUFkLElBQXdCRSxzQkFBUyxDQUFDdkgsSUFBSSxDQUFDaUksRUFBTixDQUFULENBQW1CbEksSUFBM0M7QUFDQSxXQUFPQyxJQUFJLENBQUNxSCxRQUFMLENBQWMsTUFBZCxDQUFQO0FBQ0g7O0FBRUQsTUFBSXJILElBQUksQ0FBQ2tJLE1BQVQsRUFBaUI7QUFDYmxJLFFBQUksQ0FBQ3FILFFBQUwsQ0FBYyxXQUFkLElBQTZCRSxzQkFBUyxDQUFDdkgsSUFBSSxDQUFDa0ksTUFBTixDQUFULENBQXVCbkksSUFBcEQ7QUFDQSxXQUFPQyxJQUFJLENBQUNxSCxRQUFMLENBQWMsV0FBZCxDQUFQO0FBQ0g7O0FBRUQsTUFBSXJILElBQUksQ0FBQ21JLElBQVQsRUFBZTtBQUNYbkksUUFBSSxDQUFDcUgsUUFBTCxDQUFjLFFBQWQsSUFBMEJySCxJQUFJLENBQUNtSSxJQUEvQjtBQUNBLFdBQU9uSSxJQUFJLENBQUNxSCxRQUFMLENBQWMsUUFBZCxDQUFQO0FBQ0g7QUFDSjs7QUFFYztBQUNYSCxtQkFBaUJBO0FBRE4sQ0FBZixFOztBQzVCQTs7OztBQUtBOztBQUVBLFNBQVNBLHFCQUFULENBQTJCbEgsSUFBM0IsRUFBaUM7QUFDN0IsTUFBSUEsSUFBSSxDQUFDRSxJQUFMLEtBQWMsQ0FBZCxJQUFtQixDQUFDRixJQUFJLENBQUNvSSxHQUE3QixFQUFrQztBQUM5QjtBQUNIOztBQUVELE1BQUlDLEVBQUUsR0FBR3JJLElBQUksQ0FBQ3NJLEtBQWQ7O0FBRUEsTUFBSXRJLElBQUksQ0FBQ3VJLFNBQVQsRUFBb0I7QUFDaEJGLE1BQUUsSUFBSyxJQUFHckksSUFBSSxDQUFDdUksU0FBVSxFQUF6QjtBQUNIOztBQUVERixJQUFFLElBQUssVUFBU3JJLElBQUksQ0FBQ29JLEdBQUksR0FBekI7O0FBRUEsTUFBSXBJLElBQUksQ0FBQ3VFLEdBQVQsRUFBYztBQUNWLFVBQU1pRSxXQUFXLEdBQUdqQixzQkFBUyxDQUFDdkgsSUFBSSxDQUFDdUUsR0FBTixDQUE3QixDQURVLENBRVY7O0FBQ0E4RCxNQUFFLElBQUlHLFdBQVcsQ0FBQ3hCLEdBQVosQ0FBZ0I5RyxJQUFoQixLQUF5QixZQUF6QixHQUF5QyxZQUFXRixJQUFJLENBQUN1RSxHQUFJLEVBQTdELEdBQWlFLEVBQXZFO0FBQ0g7O0FBRUR2RSxNQUFJLENBQUNxSCxRQUFMLENBQWMsT0FBZCxJQUF5QmdCLEVBQXpCO0FBRUEsU0FBT3JJLElBQUksQ0FBQ3FILFFBQUwsQ0FBYyxPQUFkLENBQVA7QUFDQSxTQUFPckgsSUFBSSxDQUFDcUgsUUFBTCxDQUFjLEtBQWQsQ0FBUDtBQUNBLFNBQU9ySCxJQUFJLENBQUNxSCxRQUFMLENBQWMsTUFBZCxDQUFQO0FBQ0EsU0FBT3JILElBQUksQ0FBQ3FILFFBQUwsQ0FBYyxZQUFkLENBQVA7QUFDSDs7QUFFYztBQUNYSCxtQkFBaUJBO0FBRE4sQ0FBZixFOztBQ2xDQTs7OztBQUtBO0FBRUEsTUFBTXVCLE9BQU8sR0FBRyxZQUFoQjs7QUFFQSxTQUFTdkIsdUJBQVQsQ0FBMkJsSCxJQUEzQixFQUFpQztBQUM3QixRQUFNMEksVUFBVSxHQUFHMUksSUFBSSxDQUFDMkksU0FBTCxDQUFlNUcsTUFBZixDQUFzQmdHLENBQUMsSUFBSVUsT0FBTyxDQUFDcEYsSUFBUixDQUFhMEUsQ0FBQyxDQUFDMUYsSUFBZixDQUEzQixDQUFuQjs7QUFDQSxPQUFLLE1BQU11RyxJQUFYLElBQW1CRixVQUFuQixFQUErQjtBQUMzQixXQUFPMUksSUFBSSxDQUFDcUgsUUFBTCxDQUFjdUIsSUFBSSxDQUFDdkcsSUFBbkIsQ0FBUDtBQUNBLFVBQU0sQ0FBQ0EsSUFBRCxFQUFPLEdBQUd3RyxTQUFWLElBQXVCRCxJQUFJLENBQUN2RyxJQUFMLENBQVV5RyxLQUFWLENBQWdCLEdBQWhCLENBQTdCO0FBQ0EsVUFBTUMsWUFBWSxHQUFHSCxJQUFJLENBQUM3RixLQUFMLEdBQWF3RSxzQkFBUyxDQUFDcUIsSUFBSSxDQUFDN0YsS0FBTixDQUFULENBQXNCaEQsSUFBbkMsR0FBMEMsT0FBL0Q7QUFDQUMsUUFBSSxDQUFDcUgsUUFBTCxDQUFlLE1BQUtoRixJQUFJLENBQUNMLE9BQUwsQ0FBYXlHLE9BQWIsRUFBc0IsRUFBdEIsQ0FBMEIsRUFBOUMsSUFDTyxHQUFFSSxTQUFTLENBQUN2RyxHQUFWLENBQWMwRyxDQUFDLElBQUssR0FBRUEsQ0FBRSxHQUF4QixFQUE0QnpHLElBQTVCLENBQWlDLEVBQWpDLENBQXFDLEdBQUV3RyxZQUFhLEVBRDdEO0FBRUg7QUFDSjs7QUFFYztBQUNYN0IsbUJBQWlCQTtBQUROLENBQWYsRTs7QUNwQkE7Ozs7QUFLQSxTQUFTQSxzQkFBVCxDQUEyQmxILElBQTNCLEVBQWlDO0FBRTdCLE1BQUlBLElBQUksQ0FBQ3FILFFBQUwsSUFBaUJySCxJQUFJLENBQUNxSCxRQUFMLENBQWMsa0JBQWQsQ0FBckIsRUFBd0Q7QUFDcEQsVUFBTTRCLEdBQUcsR0FBR2pKLElBQUksQ0FBQ2tKLFVBQUwsQ0FBZ0JDLElBQWhCLENBQXFCQyxDQUFDLElBQUlBLENBQUMsQ0FBQy9HLElBQUYsS0FBVyxnQkFBckMsQ0FBWjtBQUNBNEcsT0FBRyxDQUFDNUcsSUFBSixHQUFXLE1BQVg7QUFDQTRHLE9BQUcsQ0FBQ2xHLEtBQUosR0FBWS9DLElBQUksQ0FBQ3FILFFBQUwsQ0FBYyxRQUFkLElBQTBCckgsSUFBSSxDQUFDcUgsUUFBTCxDQUFjLGtCQUFkLENBQXRDO0FBQ0EsV0FBT3JILElBQUksQ0FBQ3FILFFBQUwsQ0FBYyxrQkFBZCxDQUFQO0FBQ0g7O0FBRUQsTUFBSXJILElBQUksQ0FBQ3FILFFBQUwsSUFBaUJySCxJQUFJLENBQUNxSCxRQUFMLENBQWMsYUFBZCxDQUFyQixFQUFtRDtBQUMvQyxVQUFNNEIsR0FBRyxHQUFHakosSUFBSSxDQUFDa0osVUFBTCxDQUFnQkMsSUFBaEIsQ0FBcUJDLENBQUMsSUFBSUEsQ0FBQyxDQUFDL0csSUFBRixLQUFXLFdBQXJDLENBQVo7QUFDQTRHLE9BQUcsQ0FBQzVHLElBQUosR0FBVyxNQUFYO0FBQ0E0RyxPQUFHLENBQUNsRyxLQUFKLEdBQVkvQyxJQUFJLENBQUNxSCxRQUFMLENBQWMsUUFBZCxJQUEyQixPQUFNckgsSUFBSSxDQUFDcUgsUUFBTCxDQUFjLGFBQWQsQ0FBNkIsR0FBMUU7QUFDQSxXQUFPckgsSUFBSSxDQUFDcUgsUUFBTCxDQUFjLGFBQWQsQ0FBUDtBQUNIOztBQUVELE1BQUlySCxJQUFJLENBQUNFLElBQUwsS0FBYyxDQUFkLElBQW1CRixJQUFJLENBQUNxSCxRQUFMLENBQWMsUUFBZCxDQUF2QixFQUFnRDtBQUM1QyxVQUFNdEUsS0FBSyxHQUFHL0MsSUFBSSxDQUFDa0osVUFBTCxDQUFnQkMsSUFBaEIsQ0FBcUJDLENBQUMsSUFBSUEsQ0FBQyxDQUFDL0csSUFBRixLQUFXLE1BQXJDLEVBQTZDVSxLQUEzRDtBQUNBLFdBQU8vQyxJQUFJLENBQUNxSCxRQUFMLENBQWMsUUFBZCxDQUFQO0FBQ0FySCxRQUFJLENBQUNxSCxRQUFMLENBQWMsUUFBZCxJQUEyQixNQUFLdEUsS0FBTSxLQUF0QztBQUNBL0MsUUFBSSxDQUFDcUosUUFBTCxHQUFnQixFQUFoQjtBQUNIOztBQUVELE1BQUlySixJQUFJLENBQUNFLElBQUwsS0FBYyxDQUFkLElBQW1CRixJQUFJLENBQUNxSCxRQUFMLENBQWMsUUFBZCxDQUF2QixFQUFnRDtBQUM1QyxVQUFNdEUsS0FBSyxHQUFHL0MsSUFBSSxDQUFDa0osVUFBTCxDQUFnQkMsSUFBaEIsQ0FBcUJDLENBQUMsSUFBSUEsQ0FBQyxDQUFDL0csSUFBRixLQUFXLE1BQXJDLEVBQTZDVSxLQUEzRDtBQUNBLFdBQU8vQyxJQUFJLENBQUNxSCxRQUFMLENBQWMsUUFBZCxDQUFQO0FBQ0FySCxRQUFJLENBQUNxSixRQUFMLEdBQWdCLENBQUM7QUFDYm5KLFVBQUksRUFBRSxDQURPO0FBRWJvSixVQUFJLEVBQUcsTUFBS3ZHLEtBQU07QUFGTCxLQUFELENBQWhCO0FBSUg7QUFDSjs7QUFFYztBQUNYbUUsbUJBQWlCQTtBQUROLENBQWYsRTs7QUN0Q0E7Ozs7QUFLQSxTQUFTQSxxQkFBVCxDQUEyQmxILElBQTNCLEVBQWlDdUosT0FBakMsRUFBMEM7QUFDdEMsTUFBSXZKLElBQUksQ0FBQ0UsSUFBTCxLQUFjLENBQWQsSUFBbUIsQ0FBQ0YsSUFBSSxDQUFDcUgsUUFBTCxDQUFjNUUsR0FBZixJQUFzQixDQUFDekMsSUFBSSxDQUFDcUgsUUFBTCxDQUFjLE1BQWQsQ0FBOUMsRUFBcUU7QUFDakU7QUFDSDs7QUFFRCxRQUFNNUUsR0FBRyxHQUFHekMsSUFBSSxDQUFDcUgsUUFBTCxDQUFjNUUsR0FBMUI7O0FBQ0EsTUFBSUEsR0FBSixFQUFTO0FBQ0wsV0FBT3pDLElBQUksQ0FBQ3FILFFBQUwsQ0FBYzVFLEdBQXJCO0FBQ0F6QyxRQUFJLENBQUNxSCxRQUFMLENBQWMsT0FBZCxJQUF5QjVFLEdBQXpCO0FBRUEsVUFBTStHLElBQUksR0FBRztBQUNUbkgsVUFBSSxFQUFFSSxHQURHO0FBRVRxRCxVQUFJLEVBQUU5RixJQUFJLENBQUN5SixNQUFMLEdBQWNDLFNBQWQsR0FBMEI7QUFGdkIsS0FBYjtBQUtBSCxXQUFPLENBQUNJLElBQVIsQ0FBYUMsSUFBYixDQUFrQkosSUFBbEI7QUFDSDs7QUFFRCxRQUFNSyxPQUFPLEdBQUc3SixJQUFJLENBQUNxSCxRQUFMLENBQWMsTUFBZCxDQUFoQjs7QUFDQSxNQUFJd0MsT0FBSixFQUFhO0FBQ1QsV0FBTzdKLElBQUksQ0FBQ3FILFFBQUwsQ0FBYyxNQUFkLENBQVA7QUFDQXJILFFBQUksQ0FBQ3FILFFBQUwsQ0FBYyxPQUFkLElBQTBCLE1BQUt3QyxPQUFRLEtBQXZDO0FBQ0g7QUFDSjs7QUFFYztBQUNYM0MsbUJBQWlCQTtBQUROLENBQWYsRTs7QUM5QkE7Ozs7QUFLQTs7QUFFQSxTQUFTQSxtQ0FBVCxDQUEyQmxILElBQTNCLEVBQWlDdUosT0FBakMsRUFBMEM7QUFDdEMsTUFBSSxFQUFFdkosSUFBSSxDQUFDRSxJQUFMLEtBQWMsQ0FBZCxJQUFtQkYsSUFBSSxDQUFDOEosR0FBTCxLQUFhLFdBQWxDLENBQUosRUFBb0Q7QUFDaEQ7QUFDSDs7QUFFRCxNQUFJQyxFQUFFLEdBQUcvSixJQUFJLENBQUNxSCxRQUFMLENBQWMwQyxFQUF2QjtBQUNBLFNBQU8vSixJQUFJLENBQUNxSCxRQUFMLENBQWMwQyxFQUFyQjs7QUFFQSxNQUFJLENBQUNBLEVBQUUsQ0FBQ0MsVUFBSCxDQUFjLElBQWQsQ0FBTCxFQUEwQjtBQUN0QmhLLFFBQUksQ0FBQzhKLEdBQUwsR0FBVzlKLElBQUksQ0FBQ3FILFFBQUwsQ0FBYzBDLEVBQXpCO0FBQ0E7QUFDSDs7QUFFRCxRQUFNaEgsS0FBSyxHQUFHZ0gsRUFBRSxDQUFDRSxLQUFILENBQVMsQ0FBVCxFQUFZRixFQUFFLENBQUMzSCxNQUFILEdBQVksQ0FBeEIsRUFBMkI4SCxJQUEzQixFQUFkO0FBQ0EsUUFBTUMsSUFBSSxHQUFHeEQsbURBQUssQ0FBQzVELEtBQUQsRUFBUTtBQUN0QjZELGFBQVMsRUFBRTtBQURXLEdBQVIsQ0FBbEI7O0FBSUEsTUFBSTVHLElBQUksQ0FBQ2lJLEVBQUwsSUFBV2pJLElBQUksQ0FBQ2tJLE1BQWhCLElBQTBCbEksSUFBSSxDQUFDbUksSUFBbkMsRUFBeUM7QUFDckNvQixXQUFPLENBQUNyRyxLQUFSLENBQWMsMENBQWQ7QUFDQTtBQUNIOztBQUVELE1BQ0lpSCxJQUFJLENBQUN4SSxVQUFMLENBQWdCekIsSUFBaEIsS0FBeUIsdUJBQXpCLElBQ0dpSyxJQUFJLENBQUN4SSxVQUFMLENBQWdCMkIsVUFBaEIsQ0FBMkJwRCxJQUEzQixLQUFvQyxTQUR2QyxJQUVHaUssSUFBSSxDQUFDeEksVUFBTCxDQUFnQjRCLFNBQWhCLENBQTBCckQsSUFBMUIsS0FBbUMsU0FIMUMsRUFJRTtBQUNFLFVBQU1rSyxZQUFZLEdBQUdELElBQUksQ0FBQ3hJLFVBQUwsQ0FBZ0IwQixJQUFoQixDQUFxQmlDLFFBQTFDO0FBQ0EsVUFBTWpDLElBQUksR0FBR04sS0FBSyxDQUFDa0gsS0FBTixDQUFZRyxZQUFZLENBQUM3RSxLQUFiLENBQW1COEUsTUFBL0IsRUFBdUNELFlBQVksQ0FBQ0UsR0FBYixDQUFpQkQsTUFBeEQsQ0FBYjtBQUNBLFVBQU1FLEtBQUssR0FBRyxFQUNWLEdBQUd2SyxJQUFJLENBQUNxSCxRQURFO0FBRVYsZ0JBQVU7QUFGQSxLQUFkO0FBSUFySCxRQUFJLENBQUM4SixHQUFMLEdBQVdLLElBQUksQ0FBQ3hJLFVBQUwsQ0FBZ0IyQixVQUFoQixDQUEyQlAsS0FBdEM7QUFDQS9DLFFBQUksQ0FBQ3FILFFBQUwsQ0FBYyxNQUFkLElBQXdCaEUsSUFBeEI7QUFDQXJELFFBQUksQ0FBQ3dLLFlBQUwsR0FBb0IsQ0FBQztBQUNqQkMsU0FBRyxFQUFFcEgsSUFEWTtBQUVqQnFILFdBQUssRUFBRTFLO0FBRlUsS0FBRCxFQUdqQjtBQUNDMEssV0FBSyxFQUFFLEVBQ0gsR0FBRzFLLElBREE7QUFFSHFILGdCQUFRLEVBQUVrRCxLQUZQO0FBR0hULFdBQUcsRUFBRUssSUFBSSxDQUFDeEksVUFBTCxDQUFnQjRCLFNBQWhCLENBQTBCUjtBQUg1QjtBQURSLEtBSGlCLENBQXBCO0FBVUg7QUFDSjs7QUFFYztBQUNYbUUsbUJBQWlCQTtBQUROLENBQWYsRTs7QUN4REE7Ozs7O0FBS0E7OztBQUdPLE1BQU15RCxTQUFTLEdBQUc7QUFDckJDLE1BQUksRUFBRSxJQURlO0FBRXJCQyxNQUFJLEVBQUUsSUFGZTtBQUdyQkMsVUFBUSxFQUFFLElBSFc7QUFJckJDLElBQUUsRUFBRSxJQUppQjtBQUtyQkMsS0FBRyxFQUFFLElBTGdCO0FBTXJCQyxTQUFPLEVBQUUsSUFOWTtBQU9yQkMsT0FBSyxFQUFFLElBUGM7QUFRckJDLE9BQUssRUFBRSxJQVJjO0FBU3JCQyxJQUFFLEVBQUUsSUFUaUI7QUFVckJDLEtBQUcsRUFBRSxJQVZnQjtBQVdyQkMsT0FBSyxFQUFFLElBWGM7QUFZckJDLFNBQU8sRUFBRSxJQVpZO0FBYXJCQyxRQUFNLEVBQUUsSUFiYTtBQWNyQkMsTUFBSSxFQUFFLElBZGU7QUFlckJDLE1BQUksRUFBRSxJQWZlO0FBZ0JyQkMsT0FBSyxFQUFFLElBaEJjO0FBaUJyQkMsUUFBTSxFQUFFLElBakJhO0FBa0JyQkMsT0FBSyxFQUFFLElBbEJjO0FBbUJyQkMsS0FBRyxFQUFFO0FBbkJnQixDQUFsQjtBQXNCQSxNQUFNQyxXQUFXLEdBQUc7QUFDdkJDLGlCQUFlLEVBQUUsSUFETTtBQUV2QkMsT0FBSyxFQUFFLElBRmdCO0FBR3ZCQyxXQUFTLEVBQUUsSUFIWTtBQUl2QkMsVUFBUSxFQUFFLElBSmE7QUFLdkJDLFNBQU8sRUFBRSxJQUxjO0FBTXZCQyxTQUFPLEVBQUUsSUFOYztBQU92QkMsVUFBUSxFQUFFLElBUGE7QUFRdkJDLFNBQU8sRUFBRSxJQVJjO0FBU3ZCQyxTQUFPLEVBQUUsSUFUYztBQVV2QkMsZ0JBQWMsRUFBRSxJQVZPO0FBV3ZCQyxjQUFZLEVBQUUsSUFYUztBQVl2QkMsaUJBQWUsRUFBRSxJQVpNO0FBYXZCQyxPQUFLLEVBQUUsSUFiZ0I7QUFjdkJDLFVBQVEsRUFBRSxJQWRhO0FBZXZCQyxTQUFPLEVBQUUsSUFmYztBQWdCdkJDLGdCQUFjLEVBQUUsSUFoQk87QUFpQnZCQyxRQUFNLEVBQUUsSUFqQmU7QUFrQnZCQyxlQUFhLEVBQUUsSUFsQlE7QUFtQnZCQyxPQUFLLEVBQUUsSUFuQmdCO0FBb0J2QkMsT0FBSyxFQUFFLElBcEJnQjtBQXFCdkJDLFdBQVMsRUFBRSxJQXJCWTtBQXNCdkJDLE1BQUksRUFBRSxJQXRCaUI7QUF1QnZCQyxVQUFRLEVBQUUsSUF2QmE7QUF3QnZCQyxPQUFLLEVBQUUsSUF4QmdCO0FBeUJ2QkMsUUFBTSxFQUFFLElBekJlO0FBMEJ2QkMsVUFBUSxFQUFFLElBMUJhO0FBMkJ2QkMsU0FBTyxFQUFFLElBM0JjO0FBNEJ2QkMsWUFBVSxFQUFFLElBNUJXO0FBNkJ2QkMsUUFBTSxFQUFFLElBN0JlO0FBOEJ2QkMsTUFBSSxFQUFFLElBOUJpQjtBQStCdkJDLGFBQVcsRUFBRSxJQS9CVTtBQWdDdkJDLFVBQVEsRUFBRSxJQWhDYTtBQWlDdkJDLFVBQVEsRUFBRSxJQWpDYTtBQWtDdkJDLFVBQVEsRUFBRSxJQWxDYTtBQW1DdkJDLFFBQU0sRUFBRSxJQW5DZTtBQW9DdkJDLFVBQVEsRUFBRSxJQXBDYTtBQXFDdkJDLFVBQVEsRUFBRSxJQXJDYTtBQXNDdkJDLFVBQVEsRUFBRSxJQXRDYTtBQXVDdkJDLFdBQVMsRUFBRSxJQXZDWTtBQXdDdkJDLFdBQVMsRUFBRSxJQXhDWTtBQXlDdkJDLGVBQWEsRUFBRSxJQXpDUTtBQTBDdkJDLFNBQU8sRUFBRTtBQTFDYyxDQUFwQjtBQThDQSxNQUFNQyxXQUFXLEdBQUc7QUFDdkIsWUFBVTtBQURhLENBQXBCO0FBS0EsTUFBTUMsT0FBTyxHQUFHO0FBQ25CQyxNQUFJLEVBQUUsSUFEYTtBQUVuQkMsTUFBSSxFQUFFLElBRmE7QUFHbkJoRSxNQUFJLEVBQUUsSUFIYTtBQUluQmlFLE1BQUksRUFBRSxJQUphO0FBS25CckQsTUFBSSxFQUFFLElBTGE7QUFNbkJDLE1BQUksRUFBRSxJQU5hO0FBT25COUQsT0FBSyxFQUFFLElBUFk7QUFRbkJtSCxPQUFLLEVBQUUsSUFSWTtBQVNuQkMsU0FBTyxFQUFFLElBVFU7QUFVbkJDLFNBQU8sRUFBRSxJQVZVO0FBV25CQyxPQUFLLEVBQUUsSUFYWTtBQVluQkMsUUFBTSxFQUFFLElBWlc7QUFhbkJDLFFBQU0sRUFBRSxJQWJXO0FBY25CQyxJQUFFLEVBQUUsSUFkZTtBQWVuQkMsSUFBRSxFQUFFLElBZmU7QUFnQm5CQyxJQUFFLEVBQUUsSUFoQmU7QUFpQm5CQyxJQUFFLEVBQUUsSUFqQmU7QUFrQm5CQyxJQUFFLEVBQUUsSUFsQmU7QUFtQm5CQyxJQUFFLEVBQUUsSUFuQmU7QUFvQm5CQyxRQUFNLEVBQUUsSUFwQlc7QUFxQm5CQyxLQUFHLEVBQUUsSUFyQmM7QUFzQm5CQyxTQUFPLEVBQUUsSUF0QlU7QUF1Qm5CQyxLQUFHLEVBQUUsSUF2QmM7QUF3Qm5CQyxJQUFFLEVBQUUsSUF4QmU7QUF5Qm5CQyxJQUFFLEVBQUUsSUF6QmU7QUEwQm5CQyxJQUFFLEVBQUUsSUExQmU7QUEyQm5CQyxZQUFVLEVBQUUsSUEzQk87QUE0Qm5CQyxRQUFNLEVBQUUsSUE1Qlc7QUE2Qm5CL0UsSUFBRSxFQUFFLElBN0JlO0FBOEJuQkMsS0FBRyxFQUFFLElBOUJjO0FBK0JuQitFLElBQUUsRUFBRSxJQS9CZTtBQWdDbkJDLE1BQUksRUFBRSxJQWhDYTtBQWlDbkJDLElBQUUsRUFBRSxJQWpDZTtBQWtDbkJDLEdBQUMsRUFBRSxJQWxDZ0I7QUFtQ25Cek8sS0FBRyxFQUFFLElBbkNjO0FBb0NuQjBPLElBQUUsRUFBRSxJQXBDZTtBQXFDbkJsUCxHQUFDLEVBQUUsSUFyQ2dCO0FBc0NuQm1QLEdBQUMsRUFBRSxJQXRDZ0I7QUF1Q25CQyxNQUFJLEVBQUUsSUF2Q2E7QUF3Q25CQyxLQUFHLEVBQUUsSUF4Q2M7QUF5Q25CQyxLQUFHLEVBQUUsSUF6Q2M7QUEwQ25CN0YsSUFBRSxFQUFFLElBMUNlO0FBMkNuQjhGLE1BQUksRUFBRSxJQTNDYTtBQTRDbkI5USxNQUFJLEVBQUUsSUE1Q2E7QUE2Q25CMkcsTUFBSSxFQUFFLElBN0NhO0FBOENuQm9LLEtBQUcsRUFBRSxJQTlDYztBQStDbkJDLElBQUUsRUFBRSxJQS9DZTtBQWdEbkJsTixHQUFDLEVBQUUsSUFoRGdCO0FBaURuQm1OLEtBQUcsRUFBRSxJQWpEYztBQWtEbkIxUixNQUFJLEVBQUUsSUFsRGE7QUFtRG5CMlIsR0FBQyxFQUFFLElBbkRnQjtBQW9EbkJDLElBQUUsRUFBRSxJQXBEZTtBQXFEbkJDLElBQUUsRUFBRSxJQXJEZTtBQXNEbkJDLEtBQUcsRUFBRSxJQXREYztBQXVEbkJDLE1BQUksRUFBRSxJQXZEYTtBQXdEbkJDLEdBQUMsRUFBRSxJQXhEZ0I7QUF5RG5CQyxNQUFJLEVBQUUsSUF6RGE7QUEwRG5CQyxPQUFLLEVBQUUsSUExRFk7QUEyRG5CQyxNQUFJLEVBQUUsSUEzRGE7QUE0RG5CQyxRQUFNLEVBQUUsSUE1RFc7QUE2RG5CQyxLQUFHLEVBQUUsSUE3RGM7QUE4RG5CQyxLQUFHLEVBQUUsSUE5RGM7QUErRG5CQyxNQUFJLEVBQUUsSUEvRGE7QUFnRW5CQyxHQUFDLEVBQUUsSUFoRWdCO0FBaUVuQkMsS0FBRyxFQUFFLElBakVjO0FBa0VuQmpHLEtBQUcsRUFBRSxJQWxFYztBQW1FbkJsQixNQUFJLEVBQUUsSUFuRWE7QUFvRW5Cb0gsT0FBSyxFQUFFLElBcEVZO0FBcUVuQjFQLEtBQUcsRUFBRSxJQXJFYztBQXNFbkJ1SixPQUFLLEVBQUUsSUF0RVk7QUF1RW5Cb0csT0FBSyxFQUFFLElBdkVZO0FBd0VuQi9HLE9BQUssRUFBRSxJQXhFWTtBQXlFbkJ4SSxRQUFNLEVBQUUsSUF6RVc7QUEwRW5CaUosT0FBSyxFQUFFLElBMUVZO0FBMkVuQkMsUUFBTSxFQUFFLElBM0VXO0FBNEVuQnNHLFFBQU0sRUFBRSxJQTVFVztBQTZFbkJDLFFBQU0sRUFBRSxJQTdFVztBQThFbkJDLFVBQVEsRUFBRSxJQTlFUztBQStFbkJDLEtBQUcsRUFBRSxJQS9FYztBQWdGbkJDLEtBQUcsRUFBRSxJQWhGYztBQWlGbkJDLFNBQU8sRUFBRSxJQWpGVTtBQWtGbkJ2SCxLQUFHLEVBQUUsSUFsRmM7QUFtRm5Cd0gsVUFBUSxFQUFFLElBbkZTO0FBb0ZuQkMsT0FBSyxFQUFFLElBcEZZO0FBcUZuQkMsT0FBSyxFQUFFLElBckZZO0FBc0ZuQkMsT0FBSyxFQUFFLElBdEZZO0FBdUZuQkMsSUFBRSxFQUFFLElBdkZlO0FBd0ZuQkMsSUFBRSxFQUFFLElBeEZlO0FBeUZuQkMsSUFBRSxFQUFFLElBekZlO0FBMEZuQkMsUUFBTSxFQUFFLElBMUZXO0FBMkZuQkMsVUFBUSxFQUFFLElBM0ZTO0FBNEZuQkMsVUFBUSxFQUFFLElBNUZTO0FBNkZuQkMsTUFBSSxFQUFFLElBN0ZhO0FBOEZuQjVILE9BQUssRUFBRSxJQTlGWTtBQStGbkI2SCxPQUFLLEVBQUUsSUEvRlk7QUFnR25CQyxRQUFNLEVBQUUsSUFoR1c7QUFpR25CQyxPQUFLLEVBQUUsSUFqR1k7QUFrR25CQyxVQUFRLEVBQUUsSUFsR1M7QUFtR25CQyxRQUFNLEVBQUUsSUFuR1c7QUFvR25CQyxRQUFNLEVBQUUsSUFwR1c7QUFxR25CQyxVQUFRLEVBQUUsSUFyR1M7QUFzR25CQyxRQUFNLEVBQUUsSUF0R1c7QUF1R25CQyxVQUFRLEVBQUUsSUF2R1M7QUF3R25CQyxTQUFPLEVBQUUsSUF4R1U7QUF5R25CQyxRQUFNLEVBQUUsSUF6R1c7QUEwR25CQyxNQUFJLEVBQUUsSUExR2E7QUEyR25CQyxVQUFRLEVBQUUsSUEzR1M7QUE0R25CQyxTQUFPLEVBQUUsSUE1R1U7QUE2R25CQyxTQUFPLEVBQUUsSUE3R1U7QUE4R25CaE8sU0FBTyxFQUFFLElBOUdVO0FBK0duQmlPLFFBQU0sRUFBRSxJQS9HVztBQWdIbkJDLFVBQVEsRUFBRTtBQWhIUyxDQUFoQixDOztBQ2pGUDs7OztBQUtBOztBQUVBLFNBQVNqTix5QkFBVCxDQUEyQmxILElBQTNCLEVBQWlDO0FBQzdCLE1BQUksQ0FBQ0EsSUFBSSxDQUFDRSxJQUFOLEtBQWUsQ0FBZixJQUFvQixDQUFDRixJQUFJLENBQUNxSCxRQUE5QixFQUF3QztBQUNwQztBQUNIOztBQUVELFFBQU1sQyxJQUFJLEdBQUdSLE1BQU0sQ0FBQ1EsSUFBUCxDQUFZbkYsSUFBSSxDQUFDcUgsUUFBakIsRUFBMkJ0RixNQUEzQixDQUFrQ2dHLENBQUMsSUFBSS9ILElBQUksQ0FBQ3FILFFBQUwsQ0FBY1UsQ0FBZCxNQUFxQixFQUE1RCxDQUFiOztBQUNBLE9BQUssTUFBTXhELEdBQVgsSUFBa0JZLElBQWxCLEVBQXdCO0FBQ3BCLFFBQUt3SixPQUFPLENBQUMzTyxJQUFJLENBQUM4SixHQUFOLENBQVAsSUFBcUJpQyxXQUFXLENBQUN4SCxHQUFELENBQWpDLElBQTJDbUssV0FBVyxDQUFDbkssR0FBRCxDQUExRCxFQUFpRTtBQUM3RDtBQUNIOztBQUNEdkUsUUFBSSxDQUFDcUgsUUFBTCxDQUFjOUMsR0FBZCxJQUFzQixZQUF0QjtBQUNIO0FBQ0o7O0FBRWM7QUFDWDJDLG1CQUFpQkE7QUFETixDQUFmLEU7O0FDckJBOzs7O0FBS0EsU0FBU2tOLHlCQUFULENBQTBCQyxFQUExQixFQUE4QjtBQUMxQixNQUFJQSxFQUFFLENBQUN2SyxHQUFILEtBQVcsVUFBZixFQUEyQjtBQUN2QnVLLE1BQUUsQ0FBQ3ZLLEdBQUgsR0FBUyxVQUFUO0FBQ0g7QUFDSjs7QUFFYztBQUNYc0ssa0JBQWdCQTtBQURMLENBQWYsRTs7Ozs7QUNYQTs7OztBQUtBOztBQUVBLFNBQVNsTiw0QkFBVCxDQUEyQm1OLEVBQTNCLEVBQStCO0FBQzNCLE1BQUlBLEVBQUUsQ0FBQ3ZLLEdBQUgsS0FBVyxZQUFmLEVBQTZCO0FBQ3pCdUssTUFBRSxDQUFDdkssR0FBSCxHQUFTLFVBQVQ7QUFFQSxVQUFNUyxLQUFLLEdBQUc1RixNQUFNLENBQUNRLElBQVAsQ0FBWWtQLEVBQUUsQ0FBQ2hOLFFBQWYsRUFBeUIvRSxHQUF6QixDQUE2QkQsSUFBSSxJQUFJO0FBQy9DLFVBQUlVLEtBQUssR0FBR3NSLEVBQUUsQ0FBQ2hOLFFBQUgsQ0FBWWhGLElBQVosQ0FBWjtBQUNBVSxXQUFLLEdBQUdBLEtBQUssQ0FBQ2lILFVBQU4sQ0FBaUIsSUFBakIsSUFBeUJqSCxLQUFLLENBQUNrSCxLQUFOLENBQVksQ0FBWixFQUFlbEgsS0FBSyxDQUFDWCxNQUFOLEdBQWUsQ0FBOUIsQ0FBekIsR0FBNkQsSUFBR1csS0FBTSxHQUE5RTtBQUNBLGFBQU9zUixFQUFFLENBQUNoTixRQUFILENBQVloRixJQUFaLENBQVA7QUFDQSxhQUFRLEdBQUVpUyxxQ0FBUyxDQUFDalMsSUFBRCxDQUFPLElBQUdVLEtBQU0sRUFBbkM7QUFDSCxLQUxhLENBQWQ7O0FBT0EsUUFBSXNSLEVBQUUsQ0FBQ2hMLFFBQUgsSUFBZWdMLEVBQUUsQ0FBQ2hMLFFBQUgsQ0FBWSxDQUFaLENBQW5CLEVBQW1DO0FBQy9CZ0wsUUFBRSxDQUFDaEwsUUFBSCxDQUFZLENBQVosRUFBZWhDLFFBQWYsQ0FBd0IsY0FBeEIsSUFBMkMsT0FBTWtELEtBQUssQ0FBQ2hJLElBQU4sQ0FBVyxHQUFYLENBQWdCLElBQWpFOztBQUVBLFVBQUk4UixFQUFFLENBQUNoTCxRQUFILENBQVksQ0FBWixFQUFlbUIsWUFBbkIsRUFBaUM7QUFDN0IsYUFBSyxNQUFNK0osSUFBWCxJQUFtQkYsRUFBRSxDQUFDaEwsUUFBSCxDQUFZLENBQVosRUFBZW1CLFlBQWYsQ0FBNEJQLEtBQTVCLENBQWtDLENBQWxDLENBQW5CLEVBQXlEO0FBQ3JELGNBQUlzSyxJQUFJLENBQUNsTixRQUFULEVBQW1CO0FBQ2ZrTixnQkFBSSxDQUFDbE4sUUFBTCxDQUFjLGNBQWQsSUFBaUMsT0FBTWtELEtBQUssQ0FBQ2hJLElBQU4sQ0FBVyxHQUFYLENBQWdCLElBQXZEO0FBQ0g7QUFDSjtBQUNKO0FBQ0o7QUFDSjtBQUNKOztBQUVjO0FBQ1gyRSxtQkFBaUJBO0FBRE4sQ0FBZixFOztBQ2hDQTs7OztBQUtBO0FBQ0E7O0FBRUEsU0FBU0EsOEJBQVQsQ0FBMkJtTixFQUEzQixFQUErQkcsS0FBL0IsRUFBc0M7QUFDbEMsTUFBSUgsRUFBRSxDQUFDaEwsUUFBSCxJQUFlZ0wsRUFBRSxDQUFDaEwsUUFBSCxDQUFZakgsTUFBWixHQUFxQixDQUF4QyxFQUEyQztBQUN2QyxTQUFLLE1BQU1xUyxLQUFYLElBQW9CSixFQUFFLENBQUNoTCxRQUF2QixFQUFpQztBQUM3QixVQUFJb0wsS0FBSyxDQUFDdlUsSUFBTixLQUFlLENBQWYsSUFBb0IsQ0FBQ3VVLEtBQUssQ0FBQ0MsTUFBM0IsSUFBcUNELEtBQUssQ0FBQ0MsTUFBTixDQUFhdFMsTUFBYixJQUF1QixDQUFoRSxFQUFtRTtBQUMvRDtBQUNIOztBQUNELFVBQUlzUyxNQUFNLEdBQUdELEtBQUssQ0FBQ0MsTUFBTixDQUFhcFMsR0FBYixDQUFpQixDQUFDcVMsS0FBRCxFQUFRQyxLQUFSLEtBQWtCO0FBQzVDLFlBQUl0TCxJQUFJLEdBQUcsTUFBWDs7QUFDQSxZQUFJcUwsS0FBSyxDQUFDLFVBQUQsQ0FBVCxFQUF1QjtBQUNuQnJMLGNBQUksR0FBR3FMLEtBQUssQ0FBQyxVQUFELENBQVo7QUFDSDs7QUFDRCxZQUFJLE9BQU9BLEtBQVAsS0FBaUIsUUFBckIsRUFBK0I7QUFDM0JyTCxjQUFJLEdBQUksSUFBRy9ILGdDQUFZLENBQUNpVCxLQUFLLENBQUNLLEtBQU4sR0FBYzNLLGdDQUFJLENBQUN5SyxLQUFELEVBQVEsT0FBUixDQUFsQixHQUFxQ0EsS0FBdEMsQ0FBNkMsR0FBcEU7QUFDSDs7QUFDRCxlQUFPckwsSUFBUDtBQUNILE9BVFksQ0FBYjtBQVdBb0wsWUFBTSxHQUFHQSxNQUFNLENBQUMzUyxNQUFQLENBQWMrUyxDQUFDLElBQUlBLENBQUMsS0FBSyxNQUF6QixDQUFUO0FBRUFMLFdBQUssQ0FBQ25MLElBQU4sR0FBYW9MLE1BQU0sQ0FBQ3BTLEdBQVAsQ0FBVyxDQUFDd1MsQ0FBRCxFQUFJalIsQ0FBSixLQUFXQSxDQUFDLEtBQUssQ0FBTixHQUFVaVIsQ0FBVixHQUFlLFFBQU9BLENBQUUsR0FBOUMsRUFBbUR2UyxJQUFuRCxDQUF3RCxLQUF4RCxDQUFiO0FBQ0FrUyxXQUFLLENBQUNuTCxJQUFOLEdBQWMsTUFBS21MLEtBQUssQ0FBQ25MLElBQUssS0FBOUI7QUFDSDtBQUNKO0FBQ0o7O0FBRWM7QUFDWHBDLG1CQUFpQkE7QUFETixDQUFmLEU7O0FDakNBOzs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxzREFDWGlOLGdCQURXLEVBRVhZLGVBRlcsRUFHWEMsVUFIVyxFQUlYM00sV0FKVyxFQUtYNE0sYUFMVyxFQU1YckcsWUFOVyxFQU9Ybk0sR0FQVyxFQVFYeVMsWUFSVyxFQVVYQyxhQVZXLEVBV1h2TixLQVhXLEVBYVg7QUFDQXdOLElBZFcsRUFlWEMsVUFmVyxFQWlCWEMsaUJBakJXLENBQWYsRTs7Ozs7QUNuQkE7Ozs7QUFLQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0MsYUFBVCxDQUF1QmhSLEdBQXZCLEVBQTRCeEIsS0FBNUIsRUFBbUMrRyxHQUFuQyxFQUF3QztBQUNwQyxNQUFJNEUsV0FBVyxDQUFDbkssR0FBRCxDQUFYLElBQXFCLENBQUN4QixLQUFELElBQVU0TCxPQUFPLENBQUM3RSxHQUFELENBQWpCLElBQTBCaUMsV0FBVyxDQUFDeEgsR0FBRCxDQUE5RCxFQUFzRTtBQUNsRSxXQUFPQSxHQUFQO0FBQ0g7O0FBQ0QsU0FBUSxHQUFFQSxHQUFJLElBQUcvQyxJQUFJLENBQUNDLFNBQUwsQ0FBZXNCLEtBQUssQ0FBQ2lILFVBQU4sQ0FBaUIsSUFBakIsSUFBeUJqSCxLQUF6QixHQUFpQ0EsS0FBSyxDQUFDZixPQUFOLENBQWMsTUFBZCxFQUFzQixHQUF0QixDQUFoRCxDQUE0RSxFQUE3RjtBQUNILEMsQ0FFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVlLFNBQVNQLFNBQVQsQ0FBbUJ1RixHQUFuQixFQUF3QjtBQUFDd08sU0FBRDtBQUFVWCxPQUFWO0FBQWlCWTtBQUFqQixDQUF4QixFQUFnRDtBQUMzRCxNQUFJLENBQUN0UCxLQUFLLENBQUNDLE9BQU4sQ0FBY1ksR0FBZCxDQUFMLEVBQXlCO0FBQ3JCQSxPQUFHLEdBQUcsQ0FBQ0EsR0FBRCxDQUFOO0FBQ0g7O0FBRUQsTUFBSTRILElBQUksR0FBRyxFQUFYOztBQUVBLE9BQUssTUFBTTVPLElBQVgsSUFBbUJnSCxHQUFuQixFQUF3QjtBQUNwQixRQUFJaEgsSUFBSSxDQUFDRSxJQUFMLEtBQWMsQ0FBZCxJQUFtQkYsSUFBSSxDQUFDRSxJQUFMLEtBQWMsQ0FBckMsRUFBd0M7QUFDcEMsWUFBTW9KLElBQUksR0FBR3RKLElBQUksQ0FBQ3NKLElBQWxCO0FBQ0FzRixVQUFJLElBQUlpRyxLQUFLLEdBQ1AzSyxnQ0FBSSxDQUFDWixJQUFELEVBQU8sT0FBUCxDQURHLEdBRVBBLElBRk47QUFHSCxLQUxELE1BTUssSUFBSXRKLElBQUksQ0FBQ0UsSUFBTCxLQUFjLENBQWxCLEVBQXFCO0FBQ3RCLFlBQU1xSyxLQUFLLEdBQUc1RixNQUFNLENBQUNRLElBQVAsQ0FBWW5GLElBQUksQ0FBQ3FILFFBQWpCLEVBQTJCL0UsR0FBM0IsQ0FBK0JpQyxHQUFHLElBQUlnUixhQUFhLENBQUNoUixHQUFELEVBQU12RSxJQUFJLENBQUNxSCxRQUFMLENBQWM5QyxHQUFkLENBQU4sRUFBMEJ2RSxJQUFJLENBQUM4SixHQUEvQixDQUFuRCxDQUFkOztBQUNBLFVBQUkwTCxPQUFKLEVBQWE7QUFDVEEsZUFBTyxHQUFHQSxPQUFPLENBQUN4VCxPQUFSLENBQWdCLGNBQWhCLEVBQWdDLEVBQWhDLENBQVY7QUFDQXVJLGFBQUssQ0FBQ1gsSUFBTixDQUFZLFFBQU82TCxJQUFJLEdBQUcsR0FBSCxHQUFTLEdBQUksSUFBR0QsT0FBUSxFQUEvQztBQUNIOztBQUNELFlBQU1FLFdBQVcsR0FBRzFWLElBQUksQ0FBQ3FKLFFBQUwsSUFBaUJySixJQUFJLENBQUNxSixRQUFMLENBQWNqSCxNQUFkLEdBQXVCLENBQTVEO0FBQ0EsWUFBTXVULE9BQU8sR0FBR3BMLEtBQUssQ0FBQ25JLE1BQU4sR0FBZSxDQUEvQjtBQUNBd00sVUFBSSxJQUFLLElBQUc1TyxJQUFJLENBQUM4SixHQUFJLEdBQUU2TCxPQUFPLEdBQUcsR0FBSCxHQUFTLEVBQUcsR0FBRXBMLEtBQUssQ0FBQ2hJLElBQU4sQ0FBVyxHQUFYLENBQWdCLEdBQTVEO0FBQ0FxTSxVQUFJLElBQUk4RyxXQUFXLEdBQUdqVSxTQUFTLENBQUN6QixJQUFJLENBQUNxSixRQUFOLEVBQWdCO0FBQUNtTSxlQUFEO0FBQVVYLGFBQVY7QUFBaUJZO0FBQWpCLE9BQWhCLENBQVosR0FBc0QsRUFBekU7QUFDQTdHLFVBQUksSUFBSSxDQUFDOEcsV0FBRCxJQUFnQi9LLFNBQVMsQ0FBQzNLLElBQUksQ0FBQzhKLEdBQU4sQ0FBekIsR0FBc0MsRUFBdEMsR0FBNEMsS0FBSTlKLElBQUksQ0FBQzhKLEdBQUksR0FBakU7O0FBRUEsVUFBSTlKLElBQUksQ0FBQ3dLLFlBQUwsSUFBcUJ4SyxJQUFJLENBQUN3SyxZQUFMLENBQWtCcEksTUFBbEIsR0FBMkIsQ0FBcEQsRUFBdUQ7QUFDbkR3TSxZQUFJLElBQUluTixTQUFTLENBQUN6QixJQUFJLENBQUN3SyxZQUFMLENBQWtCUCxLQUFsQixDQUF3QixDQUF4QixFQUEyQjNILEdBQTNCLENBQStCeUYsQ0FBQyxJQUFJQSxDQUFDLENBQUMyQyxLQUF0QyxDQUFELEVBQStDO0FBQUM4SyxpQkFBRDtBQUFVWCxlQUFWO0FBQWlCWTtBQUFqQixTQUEvQyxDQUFqQjtBQUNIO0FBQ0o7QUFDSjs7QUFFRCxTQUFPN0csSUFBUDtBQUNILEM7O0FDM0REOzs7OztBQUtBOzs7QUFHTyxNQUFNZ0gsTUFBTSxHQUFHalIsTUFBTSxDQUFDa1IsTUFBdEI7QUFFUDs7OztBQUdPLFNBQVNDLFFBQVQsQ0FBa0JDLEdBQWxCLEVBQXVCO0FBQzFCLFFBQU1DLEdBQUcsR0FBRyxFQUFaOztBQUNBLE9BQUssSUFBSW5TLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdrUyxHQUFHLENBQUMzVCxNQUF4QixFQUFnQ3lCLENBQUMsRUFBakMsRUFBcUM7QUFDakMsUUFBSWtTLEdBQUcsQ0FBQ2xTLENBQUQsQ0FBUCxFQUFZO0FBQ1IrUixZQUFNLENBQUNJLEdBQUQsRUFBTUQsR0FBRyxDQUFDbFMsQ0FBRCxDQUFULENBQU47QUFDSDtBQUNKOztBQUNELFNBQU9tUyxHQUFQO0FBQ0g7QUFFRDs7OztBQUdPLFNBQVNDLE1BQVQsQ0FBZ0JGLEdBQWhCLEVBQXFCeEIsSUFBckIsRUFBMkI7QUFDOUIsTUFBSXdCLEdBQUcsQ0FBQzNULE1BQVIsRUFBZ0I7QUFDWixVQUFNd1MsS0FBSyxHQUFHbUIsR0FBRyxDQUFDRyxPQUFKLENBQVkzQixJQUFaLENBQWQ7O0FBQ0EsUUFBSUssS0FBSyxHQUFHLENBQUMsQ0FBYixFQUFnQjtBQUNaLGFBQU9tQixHQUFHLENBQUNJLE1BQUosQ0FBV3ZCLEtBQVgsRUFBa0IsQ0FBbEIsQ0FBUDtBQUNIO0FBQ0o7QUFDSjtBQUVEOzs7O0FBR08sTUFBTXdCLFNBQVMsR0FBR3pSLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQnZELFFBQW5DO0FBRVA7Ozs7OztBQUtPLFNBQVNnVixRQUFULENBQWtCNVIsR0FBbEIsRUFBdUI7QUFDMUIsU0FBT0EsR0FBRyxLQUFLLElBQVIsSUFBZ0IsT0FBT0EsR0FBUCxLQUFlLFFBQXRDO0FBQ0g7QUFFRDs7OztBQUdBLE1BQU02UixtQkFBYyxHQUFHM1IsTUFBTSxDQUFDQyxTQUFQLENBQWlCMFIsY0FBeEM7QUFDTyxTQUFTQyxNQUFULENBQWdCOVIsR0FBaEIsRUFBcUJGLEdBQXJCLEVBQTBCO0FBQzdCLFNBQU8rUixtQkFBYyxDQUFDelIsSUFBZixDQUFvQkosR0FBcEIsRUFBeUJGLEdBQXpCLENBQVA7QUFDSDtBQUVEOzs7OztBQUlPLFNBQVNpUyxhQUFULENBQXVCL1IsR0FBdkIsRUFBNEI7QUFDL0IsU0FBTzJSLFNBQVMsQ0FBQ3ZSLElBQVYsQ0FBZUosR0FBZixNQUF3QixpQkFBL0I7QUFDSDtBQUVNLFNBQVNnUyxHQUFULENBQWFoUyxHQUFiLEVBQWtCRixHQUFsQixFQUF1QjVCLFFBQXZCLEVBQWlDO0FBQ3BDZ0MsUUFBTSxDQUFDK1IsY0FBUCxDQUFzQmpTLEdBQXRCLEVBQTJCRixHQUEzQixFQUFnQ3FSLE1BQU0sQ0FBQztBQUNuQ2UsY0FBVSxFQUFFLEtBRHVCO0FBRW5DQyxnQkFBWSxFQUFFO0FBRnFCLEdBQUQsRUFHbkNqVSxRQUhtQyxDQUF0QztBQUlIO0FBRUQ7Ozs7QUFHTyxTQUFTa1UsTUFBVCxDQUFnQkMsRUFBaEIsRUFBb0I7QUFDdkIsUUFBTUMsS0FBSyxHQUFHcFMsTUFBTSxDQUFDcVMsTUFBUCxDQUFjLElBQWQsQ0FBZDtBQUNBLFNBQU8sU0FBU0MsUUFBVCxDQUFrQkMsR0FBbEIsRUFBdUI7QUFDMUIsVUFBTUMsR0FBRyxHQUFHSixLQUFLLENBQUNHLEdBQUQsQ0FBakI7QUFDQSxXQUFPQyxHQUFHLEtBQUtKLEtBQUssQ0FBQ0csR0FBRCxDQUFMLEdBQWFKLEVBQUUsQ0FBQ0ksR0FBRCxDQUFwQixDQUFWO0FBQ0gsR0FIRDtBQUlIO0FBRUQ7Ozs7QUFHQSxNQUFNRSxXQUFXLEdBQUcsZ0JBQXBCO0FBQ08sTUFBTUMsU0FBUyxHQUFHUixNQUFNLENBQUVLLEdBQUQsSUFBUztBQUNyQyxTQUFPQSxHQUFHLENBQ0xsVixPQURFLENBQ01vVixXQUROLEVBQ21CLE9BRG5CLEVBRUZwVixPQUZFLENBRU1vVixXQUZOLEVBRW1CLE9BRm5CLEVBR0ZyUyxXQUhFLEVBQVA7QUFJSCxDQUw4QixDQUF4QjtBQU9BLE1BQU11UyxRQUFRLEdBQUdKLEdBQUcsSUFBSUEsR0FBRyxDQUFDbFYsT0FBSixDQUFZLFFBQVosRUFBc0IsQ0FBQ3VWLENBQUQsRUFBSXhULENBQUosS0FBV0EsQ0FBQyxHQUFHQSxDQUFDLENBQUN5VCxXQUFGLEVBQUgsR0FBcUIsRUFBdkQsQ0FBeEI7QUFFUDs7OztBQUdPLFNBQVNDLElBQVQsQ0FBY1gsRUFBZCxFQUFrQjtBQUNyQixNQUFJWSxNQUFNLEdBQUcsS0FBYjtBQUNBLFNBQU8sWUFBWTtBQUNqQixRQUFJLENBQUNBLE1BQUwsRUFBYTtBQUNYQSxZQUFNLEdBQUcsSUFBVDtBQUNBWixRQUFFLENBQUN2USxLQUFILENBQVMsSUFBVCxFQUFlRSxTQUFmO0FBQ0Q7QUFDRixHQUxEO0FBTUgsQzs7QUMzR0Q7Ozs7QUFLQTtBQUVlLHlEQUFVa1IsVUFBVixFQUFzQjtBQUVqQyxXQUFTdkQsZ0JBQVQsQ0FBMEJDLEVBQTFCLEVBQThCO0FBQzFCLFFBQUlzRCxVQUFVLElBQUlBLFVBQVUsQ0FBQ0MsTUFBekIsSUFBbUN2RCxFQUFFLENBQUNoTixRQUFILENBQVlDLEtBQW5ELEVBQTBEO0FBQ3RELFlBQU1GLFdBQVcsR0FBR2lOLEVBQUUsQ0FBQ2hOLFFBQUgsQ0FBWUMsS0FBWixDQUFrQnRGLE9BQWxCLENBQTBCLFVBQTFCLEVBQXNDLEVBQXRDLEVBQTBDOEcsS0FBMUMsQ0FBZ0QsR0FBaEQsQ0FBcEI7QUFDQXVMLFFBQUUsQ0FBQ2hOLFFBQUgsQ0FBWUMsS0FBWixHQUFvQkYsV0FBVyxDQUFDOUUsR0FBWixDQUFnQnlCLENBQUMsSUFBSzRULFVBQVUsQ0FBQ0MsTUFBWCxDQUFrQk4sUUFBUSxDQUFDdlQsQ0FBRCxDQUExQixLQUFrQ0EsQ0FBeEQsRUFBNER4QixJQUE1RCxDQUFpRSxHQUFqRSxDQUFwQjtBQUNBOFIsUUFBRSxDQUFDMUwsU0FBSCxHQUFlMEwsRUFBRSxDQUFDMUwsU0FBSCxDQUFhckcsR0FBYixDQUNYLENBQUM7QUFBQ0QsWUFBRDtBQUFPVTtBQUFQLE9BQUQsTUFBb0I7QUFBQ1YsWUFBRDtBQUFPVSxhQUFLLEVBQUVWLElBQUksS0FBSyxPQUFULEdBQW1CZ1MsRUFBRSxDQUFDaE4sUUFBSCxDQUFZQyxLQUEvQixHQUF1Q3ZFO0FBQXJELE9BQXBCLENBRFcsQ0FBZjtBQUdIO0FBQ0o7O0FBRUQsU0FBTztBQUNIcVI7QUFERyxHQUFQO0FBR0gsQzs7QUN0QkQ7Ozs7QUFLQSxTQUFTQSxxQkFBVCxDQUEwQkMsRUFBMUIsRUFBOEI7QUFDMUJBLElBQUUsQ0FBQzFMLFNBQUgsR0FBZTBMLEVBQUUsQ0FBQzFMLFNBQUgsQ0FBYXJHLEdBQWIsQ0FBaUIsQ0FBQztBQUFDRCxRQUFEO0FBQU9VO0FBQVAsR0FBRCxLQUFtQjtBQUMvQyxXQUFPc1IsRUFBRSxDQUFDaE4sUUFBSCxDQUFZaEYsSUFBWixDQUFQO0FBQ0FBLFFBQUksR0FBR0EsSUFBSSxDQUFDTCxPQUFMLENBQWEsS0FBYixFQUFvQixJQUFwQixDQUFQO0FBQ0FxUyxNQUFFLENBQUNoTixRQUFILENBQVloRixJQUFaLElBQW9CVSxLQUFwQjtBQUNBLFdBQU87QUFDSEEsV0FERztBQUVIVjtBQUZHLEtBQVA7QUFJSCxHQVJjLENBQWY7QUFTSDs7QUFFYztBQUNYK1Isa0JBQWdCQTtBQURMLENBQWYsRTs7Ozs7QUNqQkE7Ozs7QUFLZSxTQUFTeUQsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFDcEMsU0FBT0EsS0FBSyxDQUFDQyxHQUFiOztBQUNBLE1BQUlELEtBQUssQ0FBQ3pPLFFBQVYsRUFBb0I7QUFDaEJ5TyxTQUFLLENBQUN6TyxRQUFOLEdBQWlCeU8sS0FBSyxDQUFDek8sUUFBTixDQUFlL0csR0FBZixDQUFtQnVWLFFBQW5CLENBQWpCO0FBQ0g7O0FBQ0QsTUFBSUMsS0FBSyxDQUFDRSxLQUFWLEVBQWlCO0FBQ2JGLFNBQUssQ0FBQ0UsS0FBTixHQUFjRixLQUFLLENBQUNFLEtBQU4sQ0FBWTFWLEdBQVosQ0FBZ0J1VixRQUFoQixDQUFkO0FBQ0g7O0FBQ0QsTUFBSUMsS0FBSyxDQUFDRyxRQUFWLEVBQW9CO0FBQ2hCLFdBQU9ILEtBQUssQ0FBQ0csUUFBTixDQUFlRixHQUF0QjtBQUNIOztBQUNELE1BQUlELEtBQUssQ0FBQ0ksS0FBVixFQUFpQjtBQUNiSixTQUFLLENBQUNJLEtBQU4sR0FBY0osS0FBSyxDQUFDSSxLQUFOLENBQVk1VixHQUFaLENBQWdCNlYsSUFBSSxJQUFJO0FBQ2xDLFVBQUlBLElBQUksQ0FBQ0osR0FBVCxFQUFjO0FBQ1Y7QUFDQUksWUFBSSxDQUFDSixHQUFMLEdBQVcsQ0FBWDtBQUNIOztBQUNELFVBQUlJLElBQUksQ0FBQ2hPLElBQVQsRUFBZTtBQUNYLGVBQU9nTyxJQUFJLENBQUNoTyxJQUFMLENBQVU0TixHQUFqQjtBQUNIOztBQUNELGFBQU9JLElBQVA7QUFDSCxLQVRhLENBQWQ7QUFVSDs7QUFDRCxNQUFJTCxLQUFLLENBQUNNLE1BQVYsRUFBa0I7QUFDZE4sU0FBSyxDQUFDTSxNQUFOLEdBQWVOLEtBQUssQ0FBQ00sTUFBTixDQUFhOVYsR0FBYixDQUFpQjJTLEtBQUssSUFBSTtBQUNyQyxVQUFJQSxLQUFLLENBQUM4QyxHQUFWLEVBQWU7QUFDWCxlQUFPOUMsS0FBSyxDQUFDOEMsR0FBYjtBQUNIOztBQUNELFVBQUk5QyxLQUFLLENBQUM5SyxJQUFWLEVBQWdCO0FBQ1osZUFBTzhLLEtBQUssQ0FBQzlLLElBQU4sQ0FBVzROLEdBQWxCO0FBQ0g7O0FBQ0QsYUFBTzlDLEtBQVA7QUFDSCxLQVJjLENBQWY7QUFTSDs7QUFDRCxNQUFJNkMsS0FBSyxDQUFDNU8sVUFBVixFQUFzQjtBQUNsQnZFLFVBQU0sQ0FBQ1EsSUFBUCxDQUFZMlMsS0FBSyxDQUFDNU8sVUFBbEIsRUFBOEIxQixPQUE5QixDQUFzQ3lCLEdBQUcsSUFBSTtBQUN6QyxhQUFPNk8sS0FBSyxDQUFDNU8sVUFBTixDQUFpQkQsR0FBakIsRUFBc0I4TyxHQUE3Qjs7QUFDQSxVQUFJRCxLQUFLLENBQUM1TyxVQUFOLENBQWlCRCxHQUFqQixFQUFzQmxHLEtBQTFCLEVBQWlDO0FBQzdCLGVBQU8rVSxLQUFLLENBQUM1TyxVQUFOLENBQWlCRCxHQUFqQixFQUFzQmxHLEtBQXRCLENBQTRCZ1YsR0FBbkM7QUFDSDtBQUNKLEtBTEQ7QUFNSDs7QUFDRCxTQUFPRCxLQUFQO0FBQ0gsQzs7QUNoREQ7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sU0FBU08sT0FBVCxDQUFpQnpNLE1BQWpCLEVBQXlCckMsT0FBTyxHQUFHLEVBQW5DLEVBQXVDO0FBRTFDLFFBQU07QUFDRitPLFdBQU8sR0FBRyxFQURSO0FBRUZYLGNBQVUsR0FBRyxJQUZYO0FBR0ZuQyxXQUFPLEdBQUcsRUFIUjtBQUlGWCxTQUFLLEdBQUcsSUFKTjtBQUtGWSxRQUFJLEVBQUU4QyxNQUFNLEdBQUc7QUFMYixNQU1GaFAsT0FOSjs7QUFRQSxNQUFJLENBQUNpUCxtQ0FBTyxDQUFDYixVQUFELENBQVosRUFBMEI7QUFDdEJXLFdBQU8sQ0FBQ0csT0FBUixDQUFnQkMsVUFBYSxDQUFDZixVQUFELENBQTdCO0FBQ0g7O0FBRUQsTUFBSVksTUFBSixFQUFZO0FBQ1JELFdBQU8sQ0FBQ0csT0FBUixDQUFnQmhELFlBQWhCO0FBQ0g7O0FBRUQsUUFBTWtELE1BQU0sR0FBRyxFQUFmO0FBQ0EsUUFBTUMsZUFBZSxHQUFHO0FBQ3BCTixXQUFPLEVBQUUsQ0FDTCxHQUFHTyxnQkFERSxFQUVMLEdBQUdQLE9BRkUsQ0FEVztBQUtwQlEsc0JBQWtCLEVBQUUsS0FMQTtBQU1wQkMsdUJBQW1CLEVBQUUsS0FORDtBQU9wQnBQLFFBQUksRUFBRSxFQVBjOztBQVFwQnpHLFNBQUssQ0FBQzhWLEdBQUQsRUFBTTtBQUNQQyxhQUFPLENBQUMvVixLQUFSLENBQWUsZ0JBQWU4VixHQUFJLEVBQWxDO0FBQ0FMLFlBQU0sQ0FBQy9PLElBQVAsQ0FBWW9QLEdBQVo7QUFDSCxLQVhtQjs7QUFZcEJuRTtBQVpvQixHQUF4QixDQW5CMEMsQ0FrQzFDOztBQUVBLFFBQU07QUFBQzdOO0FBQUQsTUFBUWtTLGtEQUFVLENBQUN0TixNQUFNLENBQUMxQixJQUFQLEVBQUQsRUFBZ0IwTyxlQUFoQixDQUF4QjtBQUVBLFFBQU16RSxRQUFRLEdBQUcxUyxTQUFTLENBQUN1RixHQUFELEVBQU07QUFBRXdPLFdBQUY7QUFBV1gsU0FBWDtBQUFrQlksUUFBSSxFQUFFOEM7QUFBeEIsR0FBTixDQUExQixDQXRDMEMsQ0F1QzFDOztBQUNBLFFBQU1ULEtBQUssR0FBR3FCLHNDQUFhLENBQUNoRixRQUFELEVBQVc7QUFDbENpRixrQkFBYyxFQUFFO0FBRGtCLEdBQVgsQ0FBYixDQUVYL1AsUUFGVyxDQUVGLENBRkUsQ0FBZDtBQUlBLFNBQU87QUFDSHJDLE9BREc7QUFFSDhRLFNBQUssRUFBRUQsUUFBUSxDQUFDQyxLQUFELENBRlo7QUFHSDNELFlBSEc7QUFJSHhLLFFBQUksRUFBRWlQLGVBQWUsQ0FBQ2pQLElBSm5CO0FBS0hnUDtBQUxHLEdBQVA7QUFPSCxDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDcpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF0b20tZXhwcmVzc2lvbi1jb21waWxlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlc2NhcGUtcXVvdGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9jb2RlLWZyYW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRvLXNpbmdsZS1xdW90ZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidnVlLXRlbXBsYXRlLWNvbXBpbGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNhblwiKTsiLCIvKipcbiAqIEBmaWxlIHZ1ZSDnmoQgZXhwcmVzc2lvbiDovawgc2Fu77yM5Li76KaB5piv5aSE55CGIGVzNiDor63ms5VcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQge2NvZGVGcmFtZUNvbHVtbnN9IGZyb20gJ0BiYWJlbC9jb2RlLWZyYW1lJztcbmltcG9ydCB7cGFyc2V9IGZyb20gJ2F0b20tZXhwcmVzc2lvbi1jb21waWxlcic7XG5pbXBvcnQgZXNjYXBlUXVvdGVzIGZyb20gJ2VzY2FwZS1xdW90ZXMnO1xuXG5jb25zdCBtYXJrID0gJ19fdnVzYV9fZmlsdGVyX19tYXJrX18nO1xuY29uc3QgcmVnID0gbmV3IFJlZ0V4cChtYXJrLCAnZycpO1xuXG5jb25zdCB2YWxpZFVuYXJ5T3BlcmF0b3IgPSBuZXcgU2V0KFsnKycsICctJywgJyEnXSk7XG5jb25zdCB2YWxpZEJpbmFyeU9wZXJhdG9yID0gbmV3IFNldChbJysnLCAnLScsICcqJywgJy8nLCAnJScsICc+JywgJzwnLCAnPj0nLCAnPD0nLCAnPT0nLCAnPT09JywgJyE9JywgJyE9PSddKTtcbmNvbnN0IHZhbGlkTG9naWNhbE9wZXJhdG9yID0gbmV3IFNldChbJyYmJywgJ3x8J10pO1xuY29uc3Qgbm9CcmFja2V0VHlwZXMgPSBuZXcgU2V0KFtcbiAgICAnQXJyYXlFeHByZXNzaW9uJyxcbiAgICAnTGl0ZXJhbCcsXG4gICAgJ09iamVjdEV4cHJlc3Npb24nLFxuICAgICdJZGVudGlmaWVyJyxcbiAgICAnTWVtYmVyRXhwcmVzc2lvbicsXG4gICAgJ0NhbGxFeHByZXNzaW9uJyxcbiAgICAnVGVtcGxhdGVFeHByZXNzaW9uJyxcbiAgICAnVW5hcnlFeHByZXNzaW9uJ1xuXSk7XG5cbmZ1bmN0aW9uIHdyYXBCYWNrZXQoY29kZSwgbm9kZSkge1xuICAgIGlmIChub0JyYWNrZXRUeXBlcy5oYXMobm9kZS50eXBlKSkge1xuICAgICAgICByZXR1cm4gY29kZTtcbiAgICB9XG4gICAgaWYgKG5vZGUudHlwZSA9PT0gJ0JpbmFyeUV4cHJlc3Npb24nICYmIFsnPT0nLCAnPT09JywgJyE9JywgJyE9PSddLmluY2x1ZGVzKG5vZGUub3BlcmF0b3IpKSB7XG4gICAgICAgIHJldHVybiBjb2RlO1xuICAgIH1cbiAgICByZXR1cm4gYCgke2NvZGV9KWA7XG59XG5cbmNvbnN0IFN5bnRheCA9IHtcbiAgICBBcnJheUV4cHJlc3Npb246ICdBcnJheUV4cHJlc3Npb24nLFxuICAgIExpdGVyYWw6ICdMaXRlcmFsJyxcbiAgICBPYmplY3RFeHByZXNzaW9uOiAnT2JqZWN0RXhwcmVzc2lvbicsXG4gICAgVW5hcnlFeHByZXNzaW9uOiAnVW5hcnlFeHByZXNzaW9uJyxcbiAgICBQcm9wZXJ0eTogJ1Byb3BlcnR5JyxcbiAgICBWdWVFeHByZXNzaW9uOiAnVnVlRXhwcmVzc2lvbicsXG4gICAgVnVlRmlsdGVyOiAnVnVlRmlsdGVyJyxcbiAgICBJZGVudGlmaWVyOiAnSWRlbnRpZmllcicsXG4gICAgTWVtYmVyRXhwcmVzc2lvbjogJ01lbWJlckV4cHJlc3Npb24nLFxuICAgIEJpbmFyeUV4cHJlc3Npb246ICdCaW5hcnlFeHByZXNzaW9uJyxcbiAgICBMb2dpY2FsRXhwcmVzc2lvbjogJ0xvZ2ljYWxFeHByZXNzaW9uJyxcbiAgICBDb25kaXRpb25hbEV4cHJlc3Npb246ICdDb25kaXRpb25hbEV4cHJlc3Npb24nLFxuICAgIENhbGxFeHByZXNzaW9uOiAnQ2FsbEV4cHJlc3Npb24nLFxuICAgIFRlbXBsYXRlRXhwcmVzc2lvbjogJ1RlbXBsYXRlRXhwcmVzc2lvbidcbn07XG5cbmNvbnN0IFZpc2l0b3JLZXlzID0ge1xuICAgIEFycmF5RXhwcmVzc2lvbjogWydlbGVtZW50cyddLFxuICAgIE9iamVjdEV4cHJlc3Npb246IFsncHJvcGVydGllcyddLFxuICAgIFVuYXJ5RXhwcmVzc2lvbjogWydhcmd1bWVudCddLFxuICAgIFByb3BlcnR5OiBbJ3ZhbHVlJ10sXG4gICAgTWVtYmVyRXhwcmVzc2lvbjogWydvYmplY3QnLCAncHJvcGVydHknXSxcbiAgICBCaW5hcnlFeHByZXNzaW9uOiBbJ2xlZnQnLCAncmlnaHQnXSxcbiAgICBMb2dpY2FsRXhwcmVzc2lvbjogWydsZWZ0JywgJ3JpZ2h0J10sXG4gICAgQ29uZGl0aW9uYWxFeHByZXNzaW9uOiBbJ3Rlc3QnLCAnY29uc2VxdWVudCcsICdhbHRlcm5hdGUnXSxcbiAgICBDYWxsRXhwcmVzc2lvbjogWydhcmd1bWVudHMnXSxcbiAgICBWdWVFeHByZXNzaW9uOiBbJ2V4cHJlc3Npb24nLCAnZmlsdGVycyddLFxuICAgIFZ1ZUZpbHRlcjogWydhcmd1bWVudHMnXSxcbiAgICBUZW1wbGF0ZUV4cHJlc3Npb246IFsnZXhwcmVzc2lvbnMnXVxufTtcblxuZnVuY3Rpb24gdG9TdHJpbmcoYSkge1xuICAgIGlmICh0eXBlb2YgYSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIGEgKyAnJztcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBhID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gYCcke2VzY2FwZVF1b3RlcyhhKX0nYFxuICAgIH1cbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYSk7XG59XG5cbmNvbnN0IENvZGVHZW5lcmFnb3IgPSB7XG5cbiAgICBWdWVFeHByZXNzaW9uKG5vZGUsIFtleHByZXNzaW9uLCBmaWx0ZXJzXSkge1xuICAgICAgICBsZXQgY29kZSA9IGZpbHRlcnMucmVkdWNlKChwcmUsIGZpbHRlcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGZpbHRlci5jb2RlLnJlcGxhY2UocmVnLCBwcmUpO1xuICAgICAgICB9LCBleHByZXNzaW9uLmNvZGUpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZXQoY29kZSk7XG4gICAgfSxcblxuICAgIFZ1ZUZpbHRlcihub2RlLCBbYXJnc10pIHtcbiAgICAgICAgbGV0IGhhc0FyZ3MgPSBhcmdzLmxlbmd0aCA+IDA7XG4gICAgICAgIHJldHVybiB0aGlzLnJldChgJHttYXJrfSB8ICR7bm9kZS5uYW1lfWAgKyAoaGFzQXJncyA/IGAoJHthcmdzLm1hcChhID0+IGEuY29kZSkuam9pbignLCAnKX0pYCA6ICcnKSk7XG4gICAgfSxcblxuICAgIElkZW50aWZpZXIobm9kZSwgcmVzdWx0cywgcmVmKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJldChub2RlLm5hbWUpO1xuICAgIH0sXG5cbiAgICBNZW1iZXJFeHByZXNzaW9uKG5vZGUsIHJlc3VsdHMpIHtcblxuICAgICAgICBsZXQgW29iamVjdCwgcHJvcGVydHldID0gcmVzdWx0cztcblxuICAgICAgICBpZiAobm9kZS5jb21wdXRlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmV0KGAke29iamVjdC5jb2RlfVske3Byb3BlcnR5LmNvZGV9XWApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb3BlcnR5LmNvZGUgPT09ICdsZW5ndGgnKSB7XG4gICAgICAgICAgICBpZiAob2JqZWN0LnR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdC5pc1N0YXRpYykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbGVuID0gb2JqZWN0LnZhbHVlLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmV0KGxlbiArICcnLCAnbnVtYmVyJywgbGVuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmV0KGAke29iamVjdC5jb2RlfS5sZW5ndGhgLCAnbnVtYmVyJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5yZXQoYCR7b2JqZWN0LmNvZGV9LiR7cHJvcGVydHkuY29kZX1gKTtcbiAgICB9LFxuXG4gICAgQmluYXJ5RXhwcmVzc2lvbihub2RlLCBbbGVmdCwgcmlnaHRdLCByZWYpIHtcbiAgICAgICAgaWYgKCF2YWxpZEJpbmFyeU9wZXJhdG9yLmhhcyhub2RlLm9wZXJhdG9yKSkge1xuICAgICAgICAgICAgdGhpcy5lcnJvcihgaW52YWxpZCBiaW5hcnkgb3BlcmF0b3IgXCIke25vZGUub3BlcmF0b3J9XCJgLCBub2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGVmdC5pc1N0YXRpYyAmJiByaWdodC5pc1N0YXRpYykge1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gbmV3IEZ1bmN0aW9uKGByZXR1cm4gJHtsZWZ0LmNvZGV9ICR7bm9kZS5vcGVyYXRvcn0gJHtyaWdodC5jb2RlfWApKCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXQodG9TdHJpbmcodmFsdWUpLCBnZXRUeXBlKHZhbHVlKSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjb2RlID0gYCR7d3JhcEJhY2tldChsZWZ0LmNvZGUsIG5vZGUubGVmdCl9JHtub2RlLm9wZXJhdG9yfSR7d3JhcEJhY2tldChyaWdodC5jb2RlLCBub2RlLnJpZ2h0KX1gXG4gICAgICAgIHJldHVybiB0aGlzLnJldChjb2RlKTtcbiAgICB9LFxuXG4gICAgTG9naWNhbEV4cHJlc3Npb24obm9kZSwgW2xlZnQsIHJpZ2h0XSkge1xuICAgICAgICBpZiAoIXZhbGlkTG9naWNhbE9wZXJhdG9yLmhhcyhub2RlLm9wZXJhdG9yKSkge1xuICAgICAgICAgICAgdGhpcy5lcnJvcihgaW52YWxpZCBsb2dpY2FsIG9wZXJhdG9yIFwiJHtub2RlLm9wZXJhdG9yfVwiYCwgbm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxlZnQuaXNTdGF0aWMgJiYgcmlnaHQuaXNTdGF0aWMpIHtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IG5ldyBGdW5jdGlvbihgcmV0dXJuICR7bGVmdC5jb2RlfSR7bm9kZS5vcGVyYXRvcn0ke3JpZ2h0LmNvZGV9YCkoKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJldCh0b1N0cmluZyh2YWx1ZSksIGdldFR5cGUodmFsdWUpLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNvZGUgPSBgJHt3cmFwQmFja2V0KGxlZnQuY29kZSwgbm9kZS5sZWZ0KX0ke25vZGUub3BlcmF0b3J9JHt3cmFwQmFja2V0KHJpZ2h0LmNvZGUsIG5vZGUucmlnaHQpfWBcbiAgICAgICAgcmV0dXJuIHRoaXMucmV0KGNvZGUpO1xuICAgIH0sXG5cbiAgICBDb25kaXRpb25hbEV4cHJlc3Npb24obm9kZSwgW3Rlc3QsIGNvbnNlcXVlbnQsIGFsdGVybmF0ZV0pIHtcbiAgICAgICAgaWYgKHRlc3QuaXNTdGF0aWMpIHtcbiAgICAgICAgICAgIHJldHVybiB0ZXN0LnZhbHVlID8gY29uc2VxdWVudCA6IGFsdGVybmF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB0ZXN0Q29kZSA9IHdyYXBCYWNrZXQodGVzdC5jb2RlLCBub2RlLnRlc3QpO1xuICAgICAgICBsZXQgY29uc2VxdWVudENvZGUgPSB3cmFwQmFja2V0KGNvbnNlcXVlbnQuY29kZSwgbm9kZS5jb25zZXF1ZW50KTtcbiAgICAgICAgbGV0IGFsdGVybmF0ZUNvZGUgPSB3cmFwQmFja2V0KGFsdGVybmF0ZS5jb2RlLCBub2RlLmFsdGVybmF0ZSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmV0KGAke3Rlc3RDb2RlfT8ke2NvbnNlcXVlbnRDb2RlfToke2FsdGVybmF0ZUNvZGV9YCk7XG4gICAgfSxcblxuICAgIENhbGxFeHByZXNzaW9uKG5vZGUsIFthcmdzXSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXQoYCR7bm9kZS5jYWxsZWUubmFtZX0oJHthcmdzLm1hcChhID0+IGEuY29kZSkuam9pbignLCAnKX0pYCk7XG4gICAgfSxcblxuICAgIFRlbXBsYXRlRXhwcmVzc2lvbihub2RlLCBbZXhwcmVzc2lvbnNdKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJldChcbiAgICAgICAgICAgIGAoJHtleHByZXNzaW9ucy5tYXAoKHtjb2RlfSwgaSkgPT4gd3JhcEJhY2tldChjb2RlLCBub2RlLmV4cHJlc3Npb25zW2ldKSkuam9pbignKycpfSlgLFxuICAgICAgICAgICAgJ3N0cmluZydcbiAgICAgICAgKTtcbiAgICB9LFxuXG4gICAgQXJyYXlFeHByZXNzaW9uKG5vZGUsIHJlc3VsdHMpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHJlc3VsdHNbMF07XG4gICAgICAgIHJldHVybiB0aGlzLnJldChgWyR7cmVzdWx0Lm1hcChjID0+IGMuY29kZSkuam9pbignLCAnKX1dYCwgJ2FycmF5Jyk7XG4gICAgfSxcblxuICAgIExpdGVyYWwobm9kZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXQoXG4gICAgICAgICAgICB0aGlzLnZhckV4cG9ydChub2RlLnZhbHVlKSxcbiAgICAgICAgICAgIGdldFR5cGUobm9kZS52YWx1ZSksXG4gICAgICAgICAgICBub2RlLnZhbHVlXG4gICAgICAgICk7XG4gICAgfSxcblxuICAgIFVuYXJ5RXhwcmVzc2lvbihub2RlLCByZXN1bHRzKSB7XG5cbiAgICAgICAgaWYgKCF2YWxpZFVuYXJ5T3BlcmF0b3IuaGFzKG5vZGUub3BlcmF0b3IpKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yKGB1bmtub3cgdW5hcnkgb3BlcmF0b3IgXCIke25vZGUub3BlcmF0b3J9XCJgLCBub2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXN1bHQgPSByZXN1bHRzWzBdO1xuXG4gICAgICAgIGlmIChyZXN1bHQuaXNTdGF0aWMpIHtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IG5ldyBGdW5jdGlvbihgcmV0dXJuICR7bm9kZS5vcGVyYXRvcn0ke3Jlc3VsdC5jb2RlfWApKCk7XG4gICAgICAgICAgICBsZXQgc3RyaW5naWZ5ID0gdG9TdHJpbmcodmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmV0KHN0cmluZ2lmeSwgZ2V0VHlwZSh2YWx1ZSksIHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnJldChgJHtub2RlLm9wZXJhdG9yfSR7cmVzdWx0LmNvZGV9YCk7XG4gICAgfSxcblxuICAgIE9iamVjdEV4cHJlc3Npb24obm9kZSwgcmVzdWx0cykge1xuXG4gICAgICAgIGlmIChub2RlLmhhc0NvbXB1dGVkKSB7XG4gICAgICAgICAgICBsZXQgY29kZSA9ICdfZXgoJztcbiAgICAgICAgICAgIGxldCBjdXJyZW50O1xuICAgICAgICAgICAgbGV0IHByZXY7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gbm9kZS5wcm9wZXJ0aWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvcGVydHkgPSBub2RlLnByb3BlcnRpZXNbaV07XG4gICAgICAgICAgICAgICAgcHJldiA9IGN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgY3VycmVudCA9ICEhcHJvcGVydHkuY29tcHV0ZWQ7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQgJiYgcHJldiA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgY29kZSArPSAnfSwnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudCAmJiAhcHJldikge1xuICAgICAgICAgICAgICAgICAgICBjb2RlICs9ICdfb2NwKFsnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWN1cnJlbnQgJiYgcHJldikge1xuICAgICAgICAgICAgICAgICAgICBjb2RlICs9ICddKSx7JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFjdXJyZW50ICYmIHByZXYgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBjb2RlICs9ICd7JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQgPT09IHByZXYpIHtcbiAgICAgICAgICAgICAgICAgICAgY29kZSArPSAnLCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvZGUgKz0gcmVzdWx0c1swXVtpXS5jb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29kZSArPSBjdXJyZW50ID8gJ10pKScgOiAnfSknO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmV0KGNvZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJlc3VsdCA9IHJlc3VsdHNbMF07XG4gICAgICAgIHJldHVybiB0aGlzLnJldChgeyR7cmVzdWx0Lm1hcChjID0+IGMuY29kZSkuam9pbignLCcpfX0gYCwgJ29iamVjdCcpO1xuICAgIH0sXG5cbiAgICBQcm9wZXJ0eShub2RlLCByZXN1bHRzLCByZWYpIHtcblxuICAgICAgICBpZiAobm9kZS5jb21wdXRlZCkge1xuICAgICAgICAgICAgcmVmLmhhc0NvbXB1dGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldCBrZXlDb2RlID0gdGhpcy50cmF2ZXJzZShub2RlLmtleSwgbm9kZSkuY29kZTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJldChge2s6JHtrZXlDb2RlfSx2OiR7cmVzdWx0c1swXS5jb2RlfX1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBrZXlDb2RlID0gdGhpcy5nZW5Qcm9wZXJ0eUtleShub2RlLmtleSkuY29kZTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmV0KGAke2tleUNvZGV9OiR7cmVzdWx0c1swXS5jb2RlfWApO1xuICAgIH1cbn07XG5cbmZ1bmN0aW9uIGdldFR5cGUob2JqKSB7XG4gICAgbGV0IHR5cGVTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKTtcbiAgICByZXR1cm4gdHlwZVN0ci5zdWJzdHJpbmcoOCwgdHlwZVN0ci5sZW5ndGggLSAxKS50b0xvd2VyQ2FzZSgpO1xufVxuXG5jbGFzcyBDb2RlR2VuIHtcblxuICAgIGNvbnN0cnVjdG9yKHtjb2RlfSkge1xuICAgICAgICB0aGlzLnN5bnRheCA9IFN5bnRheDtcbiAgICAgICAgdGhpcy5rZXlzID0gVmlzaXRvcktleXM7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVyID0gQ29kZUdlbmVyYWdvcjtcblxuICAgICAgICB0aGlzLmNvZGUgPSBjb2RlO1xuICAgIH1cblxuICAgIGVycm9yKG1lc3NhZ2UsIG5vZGUpIHtcbiAgICAgICAgbWVzc2FnZSA9IGBbdnVzYSBleHByZXNzaW9uIHBhcnNlcl0gKCR7bm9kZS5sb2NhdGlvbi5zdGFydC5saW5lfToke25vZGUubG9jYXRpb24uc3RhcnQuY29sdW1ufSkgOiAke21lc3NhZ2V9YDtcblxuICAgICAgICBsZXQgY29kZUZyYW1lID0gY29kZUZyYW1lQ29sdW1ucyh0aGlzLmNvZGUsIG5vZGUubG9jYXRpb24sIHtcbiAgICAgICAgICAgIGhpZ2hsaWdodENvZGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIG1lc3NhZ2UgKz0gYFxcbiR7Y29kZUZyYW1lfWA7XG5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIHRyYXZlcnNlKG5vZGUsIHJlZikge1xuXG4gICAgICAgIGxldCBzeW50YXggPSB0aGlzLnN5bnRheFtub2RlLnR5cGVdO1xuXG4gICAgICAgIGlmIChub2RlID09PSByZWYpIHtcbiAgICAgICAgICAgIHRoaXMucm9vdCA9IG5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICBub2RlLnJlZiA9IHJlZjtcblxuICAgICAgICAvLyDlr7nosaHnmoQga2V5IOWAvOeJueauiuWkhOeQhuS4gOS4i1xuICAgICAgICBpZiAoIXN5bnRheCkge1xuICAgICAgICAgICAgdGhpcy5lcnJvcihgVW5rbm93biBub2RlIHR5cGUgXCIke25vZGUudHlwZX1cIiB3YXMgZm91bmQgd2hlbiBwYXJzaW5nIFwiJHtub2RlLm5hbWV9XCJgLCBub2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB2aXNpdG9yS2V5cyA9IHRoaXMua2V5c1tub2RlLnR5cGVdIHx8IFtdO1xuICAgICAgICBsZXQga2V5UmVzdWx0cyA9IHZpc2l0b3JLZXlzLm1hcChrZXkgPT4ge1xuICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBub2RlW2tleV07XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcblxuICAgICAgICAgICAgaWYgKHRoaXMuaXNOb2RlKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy50cmF2ZXJzZShlbGVtZW50LCBub2RlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGVsZW1lbnQubWFwKGVsZSA9PiB0aGlzLnRyYXZlcnNlKGVsZSwgbm9kZSkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yKGBVbmtub3duIFZpc2l0b3JLZXkgdHlwZSBcIiR7dHlwZW9mIGVsZW1lbnR9XCIgd2FzIGZvdW5kIHdoZW4gcGFyc2luZyAke2VsZW1lbnQubmFtZX1gLCBlbGVtZW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2VuZXJhdGUobm9kZSwga2V5UmVzdWx0cywgcmVmKTtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZShub2RlLCAuLi5hcmdzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdlbmVyYXRlcltub2RlLnR5cGVdLmFwcGx5KHRoaXMsIFtub2RlLCAuLi5hcmdzXSk7XG4gICAgfVxuXG4gICAgZ2VuUHJvcGVydHlLZXkobm9kZSkge1xuICAgICAgICBsZXQgY29kZTtcbiAgICAgICAgc3dpdGNoIChub2RlLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ0lkZW50aWZpZXInOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJldChub2RlLm5hbWUsICdzdHJpbmcnLCBub2RlLm5hbWUpO1xuICAgICAgICAgICAgY2FzZSAnTGl0ZXJhbCc6XG4gICAgICAgICAgICAgICAgY29kZSA9IHRvU3RyaW5nKFN0cmluZyhub2RlLnZhbHVlKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmV0KGNvZGUsICdzdHJpbmcnLCBTdHJpbmcobm9kZS52YWx1ZSkpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yKGBpbnZhbGlkIHByb3BlcnR5IGtleSB0eXBlIFwiJHtub2RlLnR5cGV9XCJgLCBub2RlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzTm9kZShub2RlKSB7XG4gICAgICAgIGlmIChub2RlID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHlwZW9mIG5vZGUgPT09ICdvYmplY3QnICYmIHR5cGVvZiBub2RlLnR5cGUgPT09ICdzdHJpbmcnO1xuICAgIH1cblxuICAgIHJldChjb2RlLCB0eXBlLCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29kZSxcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIGlzU3RhdGljOiBhcmd1bWVudHMubGVuZ3RoID4gMlxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHZhckV4cG9ydChkYXRhKSB7XG4gICAgICAgIHJldHVybiB0b1N0cmluZyhkYXRhKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjb2RlKSB7XG5cbiAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvZGU6ICcnXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgbGV0IG5vZGU7XG4gICAgdHJ5IHtcbiAgICAgICAgbm9kZSA9IHBhcnNlKGNvZGUsIHtcbiAgICAgICAgICAgIHN0YXJ0UnVsZTogJ1Z1ZUV4cHJlc3Npb24nXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFN5bnRheEVycm9yIGlzIGZvdW5kIHdoZW4gcGFyc2luZyBjb2RlIFwiJHtjb2RlfVwiLCAke2Uuc3RhY2t9YCk7XG4gICAgfVxuXG4gICAgbGV0IGNvZGVnZW4gPSBuZXcgQ29kZUdlbih7XG4gICAgICAgIGNvZGVcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGFzdDogbm9kZS5leHByZXNzaW9uLFxuICAgICAgICAuLi5jb2RlZ2VuLnRyYXZlcnNlKG5vZGUsIG5vZGUpXG4gICAgfTtcbn1cbiIsIi8qKlxuICogQGZpbGUgY2xhc3NcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQgdHJhbnNmb3JtIGZyb20gJy4uL2V4cHJlc3Npb24tdHJhbnNmb3JtZXInO1xuXG5jb25zdCBiaW5kS2V5cyA9IFsnOmNsYXNzJywgJ3YtYmluZDpjbGFzcyddO1xuXG5mdW5jdGlvbiBwb3N0VHJhbnNmb3JtTm9kZShub2RlKSB7XG4gICAgaWYgKG5vZGUudHlwZSA9PT0gMSAmJiBub2RlLmNsYXNzQmluZGluZykge1xuICAgICAgICBjb25zdCBzdGF0aWNDbGFzcyA9IG5vZGUuYXR0cnNNYXAuY2xhc3MgfHwgJyc7XG4gICAgICAgIGNvbnN0IGNsYXNzQmluZGluZyA9IHRyYW5zZm9ybShub2RlLmNsYXNzQmluZGluZykuY29kZTtcbiAgICAgICAgbm9kZS5hdHRyc01hcC5jbGFzcyA9IGB7eyBfbWMoJyR7c3RhdGljQ2xhc3N9JywgJHtjbGFzc0JpbmRpbmd9KSB9fWA7XG4gICAgICAgIGJpbmRLZXlzLmZvckVhY2goa2V5ID0+IGRlbGV0ZSBub2RlLmF0dHJzTWFwW2tleV0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHBvc3RUcmFuc2Zvcm1Ob2RlXG59O1xuIiwiLyoqXG4gKiBAZmlsZSBzdHlsZVxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCB0cmFuc2Zvcm0gZnJvbSAnLi4vZXhwcmVzc2lvbi10cmFuc2Zvcm1lcic7XG5pbXBvcnQgdG9TaW5nbGVRdW90ZXMgZnJvbSAndG8tc2luZ2xlLXF1b3Rlcyc7XG5cbmNvbnN0IGJpbmRLZXlzID0gWyc6c3R5bGUnLCAndi1iaW5kOnN0eWxlJywgJ3Ytc2hvdyddO1xuXG5mdW5jdGlvbiBwb3N0VHJhbnNmb3JtTm9kZShub2RlKSB7XG4gICAgY29uc3QgdlNob3cgPSBub2RlLmF0dHJzTWFwWyd2LXNob3cnXTtcbiAgICBpZiAobm9kZS50eXBlID09PSAxICYmIChub2RlLnN0eWxlQmluZGluZyB8fCB2U2hvdykpIHtcbiAgICAgICAgY29uc3Qgc3RhdGljU3R5bGUgPSBub2RlLnN0YXRpY1N0eWxlIHx8ICdcXCdcXCcnO1xuICAgICAgICBjb25zdCBzdHlsZUJpbmRpbmcgPSBub2RlLnN0eWxlQmluZGluZyA/IHRyYW5zZm9ybShub2RlLnN0eWxlQmluZGluZykuY29kZSA6ICd7fSc7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG4gICAgICAgIG5vZGUuYXR0cnNNYXAuc3R5bGUgPSBge3sgX21zKCR7dG9TaW5nbGVRdW90ZXMoc3RhdGljU3R5bGUpfSwgJHtzdHlsZUJpbmRpbmd9JHt2U2hvdyA/IGAsICR7dHJhbnNmb3JtKHZTaG93KS5jb2RlfWAgOiAnJ30pIH19YDtcbiAgICAgICAgYmluZEtleXMuZm9yRWFjaChrZXkgPT4gZGVsZXRlIG5vZGUuYXR0cnNNYXBba2V5XSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcG9zdFRyYW5zZm9ybU5vZGVcbn07XG4iLCIvKipcbiAqIEBmaWxlIGJpbmRcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQgdHJhbnNmb3JtIGZyb20gJy4uL2V4cHJlc3Npb24tdHJhbnNmb3JtZXInO1xuXG5jb25zdCByZUJpbmQgPSAvXih2LWJpbmQpP1xcOi87XG5cbmZ1bmN0aW9uIHBvc3RUcmFuc2Zvcm1Ob2RlKG5vZGUpIHtcbiAgICBpZiAobm9kZS50eXBlICE9PSAxKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG5vZGUuYXR0cnNNYXApLmZpbHRlcihuID0+IHJlQmluZC50ZXN0KG4pKTtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gbm9kZS5hdHRyc01hcFtrZXldO1xuICAgICAgICBkZWxldGUgbm9kZS5hdHRyc01hcFtrZXldO1xuICAgICAgICBjb25zdCByZXQgPSB0cmFuc2Zvcm0odmFsdWUpO1xuICAgICAgICBjb25zdCBjb2RlID0gcmV0LmNvZGU7XG4gICAgICAgIG5vZGUuYXR0cnNNYXBba2V5LnJlcGxhY2UocmVCaW5kLCAnJyldID0gYHt7ICR7Y29kZX0gfX1gO1xuICAgIH1cblxuICAgIGlmIChub2RlLmF0dHJzTWFwWyd2LWJpbmQnXSkge1xuICAgICAgICBjb25zdCB2QmluZCA9IG5vZGUuYXR0cnNNYXBbJ3YtYmluZCddO1xuICAgICAgICBub2RlLmF0dHJzTWFwWydzLWJpbmQnXSA9IGB7eyAke3RyYW5zZm9ybSh2QmluZCkuY29kZX0gfX1gO1xuICAgICAgICBkZWxldGUgbm9kZS5hdHRyc01hcFsndi1iaW5kJ107XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcG9zdFRyYW5zZm9ybU5vZGVcbn07XG4iLCIvKipcbiAqIEBmaWxlIGlmXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHRyYW5zZm9ybSBmcm9tICcuLi9leHByZXNzaW9uLXRyYW5zZm9ybWVyJztcblxuZnVuY3Rpb24gcG9zdFRyYW5zZm9ybU5vZGUobm9kZSkge1xuICAgIGlmIChub2RlLnR5cGUgIT09IDEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChub2RlLmlmKSB7XG4gICAgICAgIG5vZGUuYXR0cnNNYXBbJ3MtaWYnXSA9IHRyYW5zZm9ybShub2RlLmlmKS5jb2RlO1xuICAgICAgICBkZWxldGUgbm9kZS5hdHRyc01hcFsndi1pZiddO1xuICAgIH1cblxuICAgIGlmIChub2RlLmVsc2VpZikge1xuICAgICAgICBub2RlLmF0dHJzTWFwWydzLWVsc2UtaWYnXSA9IHRyYW5zZm9ybShub2RlLmVsc2VpZikuY29kZTtcbiAgICAgICAgZGVsZXRlIG5vZGUuYXR0cnNNYXBbJ3YtZWxzZS1pZiddO1xuICAgIH1cblxuICAgIGlmIChub2RlLmVsc2UpIHtcbiAgICAgICAgbm9kZS5hdHRyc01hcFsncy1lbHNlJ10gPSBub2RlLmVsc2U7XG4gICAgICAgIGRlbGV0ZSBub2RlLmF0dHJzTWFwWyd2LWVsc2UnXTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwb3N0VHJhbnNmb3JtTm9kZVxufTtcbiIsIi8qKlxuICogQGZpbGUgZm9yXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHRyYW5zZm9ybSBmcm9tICcuLi9leHByZXNzaW9uLXRyYW5zZm9ybWVyJztcblxuZnVuY3Rpb24gcG9zdFRyYW5zZm9ybU5vZGUobm9kZSkge1xuICAgIGlmIChub2RlLnR5cGUgIT09IDEgfHwgIW5vZGUuZm9yKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgZnIgPSBub2RlLmFsaWFzO1xuXG4gICAgaWYgKG5vZGUuaXRlcmF0b3IxKSB7XG4gICAgICAgIGZyICs9IGAsJHtub2RlLml0ZXJhdG9yMX1gO1xuICAgIH1cblxuICAgIGZyICs9IGAgaW4gX2woJHtub2RlLmZvcn0pYDtcblxuICAgIGlmIChub2RlLmtleSkge1xuICAgICAgICBjb25zdCB0cmFja0J5RXhwciA9IHRyYW5zZm9ybShub2RlLmtleSk7XG4gICAgICAgIC8vIHNhbiDlj6rmlK/mjIHlj5jph49cbiAgICAgICAgZnIgKz0gdHJhY2tCeUV4cHIuYXN0LnR5cGUgPT09ICdJZGVudGlmaWVyJyA/IGAgdHJhY2tCeSAke25vZGUua2V5fWAgOiAnJztcbiAgICB9XG5cbiAgICBub2RlLmF0dHJzTWFwWydzLWZvciddID0gZnI7XG5cbiAgICBkZWxldGUgbm9kZS5hdHRyc01hcFsndi1mb3InXTtcbiAgICBkZWxldGUgbm9kZS5hdHRyc01hcFsna2V5J107XG4gICAgZGVsZXRlIG5vZGUuYXR0cnNNYXBbJzprZXknXTtcbiAgICBkZWxldGUgbm9kZS5hdHRyc01hcFsndi1iaW5kOmtleSddO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcG9zdFRyYW5zZm9ybU5vZGVcbn07XG4iLCIvKipcbiAqIEBmaWxlIGV2ZW50XG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHRyYW5zZm9ybSBmcm9tICcuLi9leHByZXNzaW9uLXRyYW5zZm9ybWVyJztcblxuY29uc3QgcmVFdmVudCA9IC9eKEB8di1vbjopLztcblxuZnVuY3Rpb24gcG9zdFRyYW5zZm9ybU5vZGUobm9kZSkge1xuICAgIGNvbnN0IGV2ZW50QXR0cnMgPSBub2RlLmF0dHJzTGlzdC5maWx0ZXIobiA9PiByZUV2ZW50LnRlc3Qobi5uYW1lKSk7XG4gICAgZm9yIChjb25zdCBhdHRyIG9mIGV2ZW50QXR0cnMpIHtcbiAgICAgICAgZGVsZXRlIG5vZGUuYXR0cnNNYXBbYXR0ci5uYW1lXTtcbiAgICAgICAgY29uc3QgW25hbWUsIC4uLm1vZGlmaWVyc10gPSBhdHRyLm5hbWUuc3BsaXQoJy4nKTtcbiAgICAgICAgY29uc3QgZXZlbnRIYW5kbGVyID0gYXR0ci52YWx1ZSA/IHRyYW5zZm9ybShhdHRyLnZhbHVlKS5jb2RlIDogJ19ub29wJztcbiAgICAgICAgbm9kZS5hdHRyc01hcFtgb24tJHtuYW1lLnJlcGxhY2UocmVFdmVudCwgJycpfWBdXG4gICAgICAgICAgICA9IGAke21vZGlmaWVycy5tYXAobSA9PiBgJHttfTpgKS5qb2luKCcnKX0ke2V2ZW50SGFuZGxlcn1gO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHBvc3RUcmFuc2Zvcm1Ob2RlXG59O1xuIiwiLyoqXG4gKiBAZmlsZSBjbGFzc1xuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmZ1bmN0aW9uIHBvc3RUcmFuc2Zvcm1Ob2RlKG5vZGUpIHtcblxuICAgIGlmIChub2RlLmF0dHJzTWFwICYmIG5vZGUuYXR0cnNNYXBbJ3YtZGFuZ2Vyb3VzLWh0bWwnXSkge1xuICAgICAgICBjb25zdCBkaXIgPSBub2RlLmRpcmVjdGl2ZXMuZmluZChkID0+IGQubmFtZSA9PT0gJ2Rhbmdlcm91cy1odG1sJyk7XG4gICAgICAgIGRpci5uYW1lID0gJ2h0bWwnO1xuICAgICAgICBkaXIudmFsdWUgPSBub2RlLmF0dHJzTWFwWyd2LWh0bWwnXSA9IG5vZGUuYXR0cnNNYXBbJ3YtZGFuZ2Vyb3VzLWh0bWwnXTtcbiAgICAgICAgZGVsZXRlIG5vZGUuYXR0cnNNYXBbJ3YtZGFuZ2Vyb3VzLWh0bWwnXTtcbiAgICB9XG5cbiAgICBpZiAobm9kZS5hdHRyc01hcCAmJiBub2RlLmF0dHJzTWFwWyd2LXNhZmUtaHRtbCddKSB7XG4gICAgICAgIGNvbnN0IGRpciA9IG5vZGUuZGlyZWN0aXZlcy5maW5kKGQgPT4gZC5uYW1lID09PSAnc2FmZS1odG1sJyk7XG4gICAgICAgIGRpci5uYW1lID0gJ2h0bWwnO1xuICAgICAgICBkaXIudmFsdWUgPSBub2RlLmF0dHJzTWFwWyd2LWh0bWwnXSA9IGBfc2YoJHtub2RlLmF0dHJzTWFwWyd2LXNhZmUtaHRtbCddfSlgO1xuICAgICAgICBkZWxldGUgbm9kZS5hdHRyc01hcFsndi1zYWZlLWh0bWwnXTtcbiAgICB9XG5cbiAgICBpZiAobm9kZS50eXBlID09PSAxICYmIG5vZGUuYXR0cnNNYXBbJ3YtaHRtbCddKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gbm9kZS5kaXJlY3RpdmVzLmZpbmQoZCA9PiBkLm5hbWUgPT09ICdodG1sJykudmFsdWU7XG4gICAgICAgIGRlbGV0ZSBub2RlLmF0dHJzTWFwWyd2LWh0bWwnXTtcbiAgICAgICAgbm9kZS5hdHRyc01hcFsncy1odG1sJ10gPSBge3sgJHt2YWx1ZX0gfX1gO1xuICAgICAgICBub2RlLmNoaWxkcmVuID0gW107XG4gICAgfVxuXG4gICAgaWYgKG5vZGUudHlwZSA9PT0gMSAmJiBub2RlLmF0dHJzTWFwWyd2LXRleHQnXSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IG5vZGUuZGlyZWN0aXZlcy5maW5kKGQgPT4gZC5uYW1lID09PSAndGV4dCcpLnZhbHVlO1xuICAgICAgICBkZWxldGUgbm9kZS5hdHRyc01hcFsndi10ZXh0J107XG4gICAgICAgIG5vZGUuY2hpbGRyZW4gPSBbe1xuICAgICAgICAgICAgdHlwZTogMixcbiAgICAgICAgICAgIHRleHQ6IGB7eyAke3ZhbHVlfSB9fWBcbiAgICAgICAgfV07XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcG9zdFRyYW5zZm9ybU5vZGVcbn07XG4iLCIvKipcbiAqIEBmaWxlIHJlZlxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmZ1bmN0aW9uIHBvc3RUcmFuc2Zvcm1Ob2RlKG5vZGUsIG9wdGlvbnMpIHtcbiAgICBpZiAobm9kZS50eXBlICE9PSAxIHx8ICFub2RlLmF0dHJzTWFwLnJlZiAmJiAhbm9kZS5hdHRyc01hcFsnOnJlZiddKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCByZWYgPSBub2RlLmF0dHJzTWFwLnJlZjtcbiAgICBpZiAocmVmKSB7XG4gICAgICAgIGRlbGV0ZSBub2RlLmF0dHJzTWFwLnJlZjtcbiAgICAgICAgbm9kZS5hdHRyc01hcFsncy1yZWYnXSA9IHJlZjtcblxuICAgICAgICBjb25zdCBpbmZvID0ge1xuICAgICAgICAgICAgbmFtZTogcmVmLFxuICAgICAgICAgICAgcm9vdDogbm9kZS5wYXJlbnQgPyB1bmRlZmluZWQgOiAxXG4gICAgICAgIH07XG5cbiAgICAgICAgb3B0aW9ucy5yZWZzLnB1c2goaW5mbyk7XG4gICAgfVxuXG4gICAgY29uc3QgYmluZFJlZiA9IG5vZGUuYXR0cnNNYXBbJzpyZWYnXTtcbiAgICBpZiAoYmluZFJlZikge1xuICAgICAgICBkZWxldGUgbm9kZS5hdHRyc01hcFsnOnJlZiddO1xuICAgICAgICBub2RlLmF0dHJzTWFwWydzLXJlZiddID0gYHt7ICR7YmluZFJlZn0gfX1gO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHBvc3RUcmFuc2Zvcm1Ob2RlXG59O1xuIiwiLyoqXG4gKiBAZmlsZSBjb21wb25lbnQgOmlzXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHtwYXJzZX0gZnJvbSAnYXRvbS1leHByZXNzaW9uLWNvbXBpbGVyJztcblxuZnVuY3Rpb24gcG9zdFRyYW5zZm9ybU5vZGUobm9kZSwgb3B0aW9ucykge1xuICAgIGlmICghKG5vZGUudHlwZSA9PT0gMSAmJiBub2RlLnRhZyA9PT0gJ2NvbXBvbmVudCcpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgaXMgPSBub2RlLmF0dHJzTWFwLmlzO1xuICAgIGRlbGV0ZSBub2RlLmF0dHJzTWFwLmlzO1xuXG4gICAgaWYgKCFpcy5zdGFydHNXaXRoKCd7eycpKSB7XG4gICAgICAgIG5vZGUudGFnID0gbm9kZS5hdHRyc01hcC5pcztcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHZhbHVlID0gaXMuc2xpY2UoMiwgaXMubGVuZ3RoIC0gMikudHJpbSgpO1xuICAgIGNvbnN0IGV4cHIgPSBwYXJzZSh2YWx1ZSwge1xuICAgICAgICBzdGFydFJ1bGU6ICdWdWVFeHByZXNzaW9uJ1xuICAgIH0pO1xuXG4gICAgaWYgKG5vZGUuaWYgfHwgbm9kZS5lbHNlaWYgfHwgbm9kZS5lbHNlKSB7XG4gICAgICAgIG9wdGlvbnMuZXJyb3IoJ2R5bmFtaWMgY29tcG9uZW50IGNhbiBub3QgdXNlIHdpdGggdi1pZi4nKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgICAgZXhwci5leHByZXNzaW9uLnR5cGUgPT09ICdDb25kaXRpb25hbEV4cHJlc3Npb24nXG4gICAgICAgICYmIGV4cHIuZXhwcmVzc2lvbi5jb25zZXF1ZW50LnR5cGUgPT09ICdMaXRlcmFsJ1xuICAgICAgICAmJiBleHByLmV4cHJlc3Npb24uYWx0ZXJuYXRlLnR5cGUgPT09ICdMaXRlcmFsJ1xuICAgICkge1xuICAgICAgICBjb25zdCB0ZXN0TG9jYXRpb24gPSBleHByLmV4cHJlc3Npb24udGVzdC5sb2NhdGlvbjtcbiAgICAgICAgY29uc3QgdGVzdCA9IHZhbHVlLnNsaWNlKHRlc3RMb2NhdGlvbi5zdGFydC5vZmZzZXQsIHRlc3RMb2NhdGlvbi5lbmQub2Zmc2V0KTtcbiAgICAgICAgY29uc3QgYXR0cnMgPSB7XG4gICAgICAgICAgICAuLi5ub2RlLmF0dHJzTWFwLFxuICAgICAgICAgICAgJ3MtZWxzZSc6ICcnXG4gICAgICAgIH07XG4gICAgICAgIG5vZGUudGFnID0gZXhwci5leHByZXNzaW9uLmNvbnNlcXVlbnQudmFsdWU7XG4gICAgICAgIG5vZGUuYXR0cnNNYXBbJ3MtaWYnXSA9IHRlc3Q7XG4gICAgICAgIG5vZGUuaWZDb25kaXRpb25zID0gW3tcbiAgICAgICAgICAgIGV4cDogdGVzdCxcbiAgICAgICAgICAgIGJsb2NrOiBub2RlXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGJsb2NrOiB7XG4gICAgICAgICAgICAgICAgLi4ubm9kZSxcbiAgICAgICAgICAgICAgICBhdHRyc01hcDogYXR0cnMsXG4gICAgICAgICAgICAgICAgdGFnOiBleHByLmV4cHJlc3Npb24uYWx0ZXJuYXRlLnZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1dO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHBvc3RUcmFuc2Zvcm1Ob2RlXG59O1xuIiwiLyoqXG4gKiBAZmlsZSBjb25zdGFudHNcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG4vKlxuICBTZWxmLWVuY2xvc2luZyB0YWdzIChzdG9sZW4gZnJvbSBub2RlLWh0bWxwYXJzZXIpXG4qL1xuZXhwb3J0IGNvbnN0IHNpbmdsZVRhZyA9IHtcbiAgICBhcmVhOiB0cnVlLFxuICAgIGJhc2U6IHRydWUsXG4gICAgYmFzZWZvbnQ6IHRydWUsXG4gICAgYnI6IHRydWUsXG4gICAgY29sOiB0cnVlLFxuICAgIGNvbW1hbmQ6IHRydWUsXG4gICAgZW1iZWQ6IHRydWUsXG4gICAgZnJhbWU6IHRydWUsXG4gICAgaHI6IHRydWUsXG4gICAgaW1nOiB0cnVlLFxuICAgIGlucHV0OiB0cnVlLFxuICAgIGlzaW5kZXg6IHRydWUsXG4gICAga2V5Z2VuOiB0cnVlLFxuICAgIGxpbms6IHRydWUsXG4gICAgbWV0YTogdHJ1ZSxcbiAgICBwYXJhbTogdHJ1ZSxcbiAgICBzb3VyY2U6IHRydWUsXG4gICAgdHJhY2s6IHRydWUsXG4gICAgd2JyOiB0cnVlXG59O1xuXG5leHBvcnQgY29uc3QgYm9vbGVhbkF0dHIgPSB7XG4gICAgYWxsb3dmdWxsc2NyZWVuOiB0cnVlLFxuICAgIGFzeW5jOiB0cnVlLFxuICAgIGF1dG9mb2N1czogdHJ1ZSxcbiAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICBjaGVja2VkOiB0cnVlLFxuICAgIGNvbXBhY3Q6IHRydWUsXG4gICAgY29udHJvbHM6IHRydWUsXG4gICAgZGVjbGFyZTogdHJ1ZSxcbiAgICBkZWZhdWx0OiB0cnVlLFxuICAgIGRlZmF1bHRjaGVja2VkOiB0cnVlLFxuICAgIGRlZmF1bHRtdXRlZDogdHJ1ZSxcbiAgICBkZWZhdWx0c2VsZWN0ZWQ6IHRydWUsXG4gICAgZGVmZXI6IHRydWUsXG4gICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICBmb3Jtbm92YWxpZGF0ZTogdHJ1ZSxcbiAgICBoaWRkZW46IHRydWUsXG4gICAgaW5kZXRlcm1pbmF0ZTogdHJ1ZSxcbiAgICBpbmVydDogdHJ1ZSxcbiAgICBpc21hcDogdHJ1ZSxcbiAgICBpdGVtc2NvcGU6IHRydWUsXG4gICAgbG9vcDogdHJ1ZSxcbiAgICBtdWx0aXBsZTogdHJ1ZSxcbiAgICBtdXRlZDogdHJ1ZSxcbiAgICBub2hyZWY6IHRydWUsXG4gICAgbm9yZXNpemU6IHRydWUsXG4gICAgbm9zaGFkZTogdHJ1ZSxcbiAgICBub3ZhbGlkYXRlOiB0cnVlLFxuICAgIG5vd3JhcDogdHJ1ZSxcbiAgICBvcGVuOiB0cnVlLFxuICAgIHBhdXNlb25leGl0OiB0cnVlLFxuICAgIHJlYWRvbmx5OiB0cnVlLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIHJldmVyc2VkOiB0cnVlLFxuICAgIHNjb3BlZDogdHJ1ZSxcbiAgICBzZWFtbGVzczogdHJ1ZSxcbiAgICBzZWxlY3RlZDogdHJ1ZSxcbiAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICB0cmFuc2xhdGU6IHRydWUsXG4gICAgdHJ1ZXNwZWVkOiB0cnVlLFxuICAgIHR5cGVtdXN0bWF0Y2g6IHRydWUsXG4gICAgdmlzaWJsZTogdHJ1ZSxcbn07XG5cblxuZXhwb3J0IGNvbnN0IG5vVmFsdWVBdHRyID0ge1xuICAgICdzLWVsc2UnOiB0cnVlXG59O1xuXG5cbmV4cG9ydCBjb25zdCBodG1sVGFnID0ge1xuICAgIGh0bWw6IHRydWUsXG4gICAgYm9keTogdHJ1ZSxcbiAgICBiYXNlOiB0cnVlLFxuICAgIGhlYWQ6IHRydWUsXG4gICAgbGluazogdHJ1ZSxcbiAgICBtZXRhOiB0cnVlLFxuICAgIHN0eWxlOiB0cnVlLFxuICAgIHRpdGxlOiB0cnVlLFxuICAgIGFkZHJlc3M6IHRydWUsXG4gICAgYXJ0aWNsZTogdHJ1ZSxcbiAgICBhc2lkZTogdHJ1ZSxcbiAgICBmb290ZXI6IHRydWUsXG4gICAgaGVhZGVyOiB0cnVlLFxuICAgIGgxOiB0cnVlLFxuICAgIGgyOiB0cnVlLFxuICAgIGgzOiB0cnVlLFxuICAgIGg0OiB0cnVlLFxuICAgIGg1OiB0cnVlLFxuICAgIGg2OiB0cnVlLFxuICAgIGhncm91cDogdHJ1ZSxcbiAgICBuYXY6IHRydWUsXG4gICAgc2VjdGlvbjogdHJ1ZSxcbiAgICBkaXY6IHRydWUsXG4gICAgZGQ6IHRydWUsXG4gICAgZGw6IHRydWUsXG4gICAgZHQ6IHRydWUsXG4gICAgZmlnY2FwdGlvbjogdHJ1ZSxcbiAgICBmaWd1cmU6IHRydWUsXG4gICAgaHI6IHRydWUsXG4gICAgaW1nOiB0cnVlLFxuICAgIGxpOiB0cnVlLFxuICAgIG1haW46IHRydWUsXG4gICAgb2w6IHRydWUsXG4gICAgcDogdHJ1ZSxcbiAgICBwcmU6IHRydWUsXG4gICAgdWw6IHRydWUsXG4gICAgYTogdHJ1ZSxcbiAgICBiOiB0cnVlLFxuICAgIGFiYnI6IHRydWUsXG4gICAgYmRpOiB0cnVlLFxuICAgIGJkbzogdHJ1ZSxcbiAgICBicjogdHJ1ZSxcbiAgICBjaXRlOiB0cnVlLFxuICAgIGNvZGU6IHRydWUsXG4gICAgZGF0YTogdHJ1ZSxcbiAgICBkZm46IHRydWUsXG4gICAgZW06IHRydWUsXG4gICAgaTogdHJ1ZSxcbiAgICBrYmQ6IHRydWUsXG4gICAgbWFyazogdHJ1ZSxcbiAgICBxOiB0cnVlLFxuICAgIHJwOiB0cnVlLFxuICAgIHJ0OiB0cnVlLFxuICAgIHJ0YzogdHJ1ZSxcbiAgICBydWJ5OiB0cnVlLFxuICAgIHM6IHRydWUsXG4gICAgc2FtcDogdHJ1ZSxcbiAgICBzbWFsbDogdHJ1ZSxcbiAgICBzcGFuOiB0cnVlLFxuICAgIHN0cm9uZzogdHJ1ZSxcbiAgICBzdWI6IHRydWUsXG4gICAgc3VwOiB0cnVlLFxuICAgIHRpbWU6IHRydWUsXG4gICAgdTogdHJ1ZSxcbiAgICB2YXI6IHRydWUsXG4gICAgd2JyOiB0cnVlLFxuICAgIGFyZWE6IHRydWUsXG4gICAgYXVkaW86IHRydWUsXG4gICAgbWFwOiB0cnVlLFxuICAgIHRyYWNrOiB0cnVlLFxuICAgIHZpZGVvOiB0cnVlLFxuICAgIGVtYmVkOiB0cnVlLFxuICAgIG9iamVjdDogdHJ1ZSxcbiAgICBwYXJhbTogdHJ1ZSxcbiAgICBzb3VyY2U6IHRydWUsXG4gICAgY2FudmFzOiB0cnVlLFxuICAgIHNjcmlwdDogdHJ1ZSxcbiAgICBub3NjcmlwdDogdHJ1ZSxcbiAgICBkZWw6IHRydWUsXG4gICAgaW5zOiB0cnVlLFxuICAgIGNhcHRpb246IHRydWUsXG4gICAgY29sOiB0cnVlLFxuICAgIGNvbGdyb3VwOiB0cnVlLFxuICAgIHRhYmxlOiB0cnVlLFxuICAgIHRoZWFkOiB0cnVlLFxuICAgIHRib2R5OiB0cnVlLFxuICAgIHRkOiB0cnVlLFxuICAgIHRoOiB0cnVlLFxuICAgIHRyOiB0cnVlLFxuICAgIGJ1dHRvbjogdHJ1ZSxcbiAgICBkYXRhbGlzdDogdHJ1ZSxcbiAgICBmaWVsZHNldDogdHJ1ZSxcbiAgICBmb3JtOiB0cnVlLFxuICAgIGlucHV0OiB0cnVlLFxuICAgIGxhYmVsOiB0cnVlLFxuICAgIGxlZ2VuZDogdHJ1ZSxcbiAgICBtZXRlcjogdHJ1ZSxcbiAgICBvcHRncm91cDogdHJ1ZSxcbiAgICBvcHRpb246IHRydWUsXG4gICAgb3V0cHV0OiB0cnVlLFxuICAgIHByb2dyZXNzOiB0cnVlLFxuICAgIHNlbGVjdDogdHJ1ZSxcbiAgICB0ZXh0YXJlYTogdHJ1ZSxcbiAgICBkZXRhaWxzOiB0cnVlLFxuICAgIGRpYWxvZzogdHJ1ZSxcbiAgICBtZW51OiB0cnVlLFxuICAgIG1lbnVpdGVtOiB0cnVlLFxuICAgIHN1bW1hcnk6IHRydWUsXG4gICAgY29udGVudDogdHJ1ZSxcbiAgICBlbGVtZW50OiB0cnVlLFxuICAgIHNoYWRvdzogdHJ1ZSxcbiAgICB0ZW1wbGF0ZTogdHJ1ZVxufTtcbiIsIi8qKlxuICogQGZpbGUgYm9vbCDlnovkvKDlgLxcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQge2Jvb2xlYW5BdHRyLCBub1ZhbHVlQXR0ciwgaHRtbFRhZ30gZnJvbSAnLi4vY29uc3RhbnQnO1xuXG5mdW5jdGlvbiBwb3N0VHJhbnNmb3JtTm9kZShub2RlKSB7XG4gICAgaWYgKCFub2RlLnR5cGUgPT09IDEgfHwgIW5vZGUuYXR0cnNNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhub2RlLmF0dHJzTWFwKS5maWx0ZXIobiA9PiBub2RlLmF0dHJzTWFwW25dID09PSAnJyk7XG4gICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICBpZiAoKGh0bWxUYWdbbm9kZS50YWddICYmIGJvb2xlYW5BdHRyW2tleV0pIHx8IG5vVmFsdWVBdHRyW2tleV0pIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUuYXR0cnNNYXBba2V5XSA9IGB7eyB0cnVlIH19YDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwb3N0VHJhbnNmb3JtTm9kZVxufTtcbiIsIi8qKlxuICogQGZpbGUgdGVtcGxhdGVcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5mdW5jdGlvbiBwcmVUcmFuc2Zvcm1Ob2RlKGVsKSB7XG4gICAgaWYgKGVsLnRhZyA9PT0gJ3RlbXBsYXRlJykge1xuICAgICAgICBlbC50YWcgPSAnZnJhZ21lbnQnO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHByZVRyYW5zZm9ybU5vZGVcbn07XG4iLCIvKipcbiAqIEBmaWxlIHRlbXBsYXRlXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHtjYW1lbENhc2V9IGZyb20gJ2xvZGFzaCc7XG5cbmZ1bmN0aW9uIHBvc3RUcmFuc2Zvcm1Ob2RlKGVsKSB7XG4gICAgaWYgKGVsLnRhZyA9PT0gJ3RyYW5zaXRpb24nKSB7XG4gICAgICAgIGVsLnRhZyA9ICdmcmFnbWVudCc7XG5cbiAgICAgICAgY29uc3QgYXR0cnMgPSBPYmplY3Qua2V5cyhlbC5hdHRyc01hcCkubWFwKG5hbWUgPT4ge1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gZWwuYXR0cnNNYXBbbmFtZV07XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnN0YXJ0c1dpdGgoJ3t7JykgPyB2YWx1ZS5zbGljZSgyLCB2YWx1ZS5sZW5ndGggLSAyKSA6IGAnJHt2YWx1ZX0nYDtcbiAgICAgICAgICAgIGRlbGV0ZSBlbC5hdHRyc01hcFtuYW1lXTtcbiAgICAgICAgICAgIHJldHVybiBgJHtjYW1lbENhc2UobmFtZSl9OiR7dmFsdWV9YDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGVsLmNoaWxkcmVuICYmIGVsLmNoaWxkcmVuWzBdKSB7XG4gICAgICAgICAgICBlbC5jaGlsZHJlblswXS5hdHRyc01hcFsncy10cmFuc2l0aW9uJ10gPSBgX3QoeyR7YXR0cnMuam9pbignLCcpfX0pYDtcblxuICAgICAgICAgICAgaWYgKGVsLmNoaWxkcmVuWzBdLmlmQ29uZGl0aW9ucykge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBlbC5jaGlsZHJlblswXS5pZkNvbmRpdGlvbnMuc2xpY2UoMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uYXR0cnNNYXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uYXR0cnNNYXBbJ3MtdHJhbnNpdGlvbiddID0gYF90KHske2F0dHJzLmpvaW4oJywnKX19KWA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwb3N0VHJhbnNmb3JtTm9kZVxufTtcbiIsIi8qKlxuICogQGZpbGUgdGV4dC1jb21iaW5lXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IGVzY2FwZVF1b3RlcyBmcm9tICdlc2NhcGUtcXVvdGVzJztcbmltcG9ydCB7dHJpbX0gZnJvbSAnbG9kYXNoJztcblxuZnVuY3Rpb24gcG9zdFRyYW5zZm9ybU5vZGUoZWwsIHN0YXRlKSB7XG4gICAgaWYgKGVsLmNoaWxkcmVuICYmIGVsLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBlbC5jaGlsZHJlbikge1xuICAgICAgICAgICAgaWYgKGNoaWxkLnR5cGUgIT09IDIgfHwgIWNoaWxkLnRva2VucyB8fCBjaGlsZC50b2tlbnMubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCB0b2tlbnMgPSBjaGlsZC50b2tlbnMubWFwKCh0b2tlbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdGV4dCA9ICdcXCdcXCcnO1xuICAgICAgICAgICAgICAgIGlmICh0b2tlblsnQGJpbmRpbmcnXSkge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0ID0gdG9rZW5bJ0BiaW5kaW5nJ107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQgPSBgJyR7ZXNjYXBlUXVvdGVzKHN0YXRlLnN0cmlwID8gdHJpbSh0b2tlbiwgJyBcXG5cXHQnKSA6IHRva2VuKX0nYDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdG9rZW5zID0gdG9rZW5zLmZpbHRlcih0ID0+IHQgIT09ICdcXCdcXCcnKTtcblxuICAgICAgICAgICAgY2hpbGQudGV4dCA9IHRva2Vucy5tYXAoKHQsIGkpID0+IChpID09PSAwID8gdCA6IGBfY2F0KCR7dH0pYCkpLmpvaW4oJyB8ICcpO1xuICAgICAgICAgICAgY2hpbGQudGV4dCA9IGB7eyAke2NoaWxkLnRleHR9IH19YDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHBvc3RUcmFuc2Zvcm1Ob2RlXG59O1xuIiwiLyoqXG4gKiBAZmlsZSB0cmFuc2Zvcm1lcnNcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQgY2xhenogZnJvbSAnLi9jbGFzcyc7XG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZSc7XG5pbXBvcnQgYmluZCBmcm9tICcuL2JpbmQnO1xuaW1wb3J0IHlmIGZyb20gJy4vaWYnO1xuaW1wb3J0IGZyIGZyb20gJy4vZm9yJztcbmltcG9ydCBldmVudCBmcm9tICcuL2V2ZW50JztcbmltcG9ydCBodG1sIGZyb20gJy4vaHRtbCc7XG5pbXBvcnQgcmVmIGZyb20gJy4vcmVmJztcbmltcG9ydCBkeW5hbWljQ29tcG9uZW50IGZyb20gJy4vZHluYW1pYy1jb21wb25lbnQnO1xuaW1wb3J0IGJvb2wgZnJvbSAnLi9ib29sZWFuJztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3RlbXBsYXRlJztcbmltcG9ydCB0cmFuc2l0aW9uIGZyb20gJy4vdHJhbnNpdGlvbic7XG5pbXBvcnQgdGV4dENvbWJpbmUgZnJvbSAnLi90ZXh0LWNvbWJpbmUnO1xuXG5leHBvcnQgZGVmYXVsdCBbXG4gICAgdGVtcGxhdGUsXG4gICAgYm9vbCxcbiAgICB5ZixcbiAgICBmcixcbiAgICBldmVudCxcbiAgICBodG1sLFxuICAgIHJlZixcbiAgICB0ZXh0Q29tYmluZSxcblxuICAgIGNsYXp6LFxuICAgIHN0eWxlLFxuXG4gICAgLy8gYmluZCDmlL7lnKjmiYDmnInlpITnkIblrozkuYvlkI5cbiAgICBiaW5kLFxuICAgIHRyYW5zaXRpb24sXG5cbiAgICBkeW5hbWljQ29tcG9uZW50XG5dO1xuIiwiLyoqXG4gKiBAZmlsZSBnZXQgaHRtbCBmcm9tIGFzdFxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCB7dHJpbX0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7bm9WYWx1ZUF0dHIsIHNpbmdsZVRhZywgYm9vbGVhbkF0dHIsIGh0bWxUYWd9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHRyYW5zZm9ybSBmcm9tICcuL2V4cHJlc3Npb24tdHJhbnNmb3JtZXInO1xuXG5mdW5jdGlvbiBzdHJpbmdpZnlBdHRyKGtleSwgdmFsdWUsIHRhZykge1xuICAgIGlmIChub1ZhbHVlQXR0cltrZXldIHx8ICghdmFsdWUgJiYgaHRtbFRhZ1t0YWddICYmIGJvb2xlYW5BdHRyW2tleV0pKSB7XG4gICAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICAgIHJldHVybiBgJHtrZXl9PSR7SlNPTi5zdHJpbmdpZnkodmFsdWUuc3RhcnRzV2l0aCgne3snKSA/IHZhbHVlIDogdmFsdWUucmVwbGFjZSgvXFxzKy9nLCAnICcpKX1gO1xufVxuXG4vLyBmdW5jdGlvbiB0cmFuc2Zvcm1DaGlsZChub2RlKSB7XG4vLyAgICAgcmV0dXJuIG5vZGUudG9rZW5zLnJlZHVjZSgocHJldiwgdG9rZW4pID0+IHtcbi8vICAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gJ3N0cmluZycpIHtcbi8vICAgICAgICAgICAgIHJldHVybiBwcmV2ICsgdG9rZW47XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgY29uc29sZS5sb2cobm9kZSk7XG4vLyAgICAgICAgIHJldHVybiBwcmV2ICsgYHt7ICR7dHJhbnNmb3JtKHRva2VuWydAYmluZGluZyddKS5jb2RlfSB9fWA7XG4vLyAgICAgfSwgJycpO1xuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdHJpbmdpZnkoYXN0LCB7c2NvcGVJZCwgc3RyaXAsIGF0b219KSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFzdCkpIHtcbiAgICAgICAgYXN0ID0gW2FzdF07XG4gICAgfVxuXG4gICAgbGV0IGh0bWwgPSAnJztcblxuICAgIGZvciAoY29uc3Qgbm9kZSBvZiBhc3QpIHtcbiAgICAgICAgaWYgKG5vZGUudHlwZSA9PT0gMyB8fCBub2RlLnR5cGUgPT09IDIpIHtcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSBub2RlLnRleHQ7XG4gICAgICAgICAgICBodG1sICs9IHN0cmlwXG4gICAgICAgICAgICAgICAgPyB0cmltKHRleHQsICcgXFxuXFx0JylcbiAgICAgICAgICAgICAgICA6IHRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobm9kZS50eXBlID09PSAxKSB7XG4gICAgICAgICAgICBjb25zdCBhdHRycyA9IE9iamVjdC5rZXlzKG5vZGUuYXR0cnNNYXApLm1hcChrZXkgPT4gc3RyaW5naWZ5QXR0cihrZXksIG5vZGUuYXR0cnNNYXBba2V5XSwgbm9kZS50YWcpKTtcbiAgICAgICAgICAgIGlmIChzY29wZUlkKSB7XG4gICAgICAgICAgICAgICAgc2NvcGVJZCA9IHNjb3BlSWQucmVwbGFjZSgvXmRhdGEtKGF8diktLywgJycpO1xuICAgICAgICAgICAgICAgIGF0dHJzLnB1c2goYGRhdGEtJHthdG9tID8gJ2EnIDogJ3YnfS0ke3Njb3BlSWR9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBoYXNDaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW4gJiYgbm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwO1xuICAgICAgICAgICAgY29uc3QgaGFzQXR0ciA9IGF0dHJzLmxlbmd0aCA+IDA7XG4gICAgICAgICAgICBodG1sICs9IGA8JHtub2RlLnRhZ30ke2hhc0F0dHIgPyAnICcgOiAnJ30ke2F0dHJzLmpvaW4oJyAnKX0+YDtcbiAgICAgICAgICAgIGh0bWwgKz0gaGFzQ2hpbGRyZW4gPyBzdHJpbmdpZnkobm9kZS5jaGlsZHJlbiwge3Njb3BlSWQsIHN0cmlwLCBhdG9tfSkgOiAnJztcbiAgICAgICAgICAgIGh0bWwgKz0gIWhhc0NoaWxkcmVuICYmIHNpbmdsZVRhZ1tub2RlLnRhZ10gPyAnJyA6IGA8LyR7bm9kZS50YWd9PmA7XG5cbiAgICAgICAgICAgIGlmIChub2RlLmlmQ29uZGl0aW9ucyAmJiBub2RlLmlmQ29uZGl0aW9ucy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgaHRtbCArPSBzdHJpbmdpZnkobm9kZS5pZkNvbmRpdGlvbnMuc2xpY2UoMSkubWFwKG4gPT4gbi5ibG9jayksIHtzY29wZUlkLCBzdHJpcCwgYXRvbX0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWw7XG59XG4iLCIvKipcbiAqIEBmaWxlIOS4gOS6m+W3peWFt+WHveaVsFxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbi8qKlxuICogTWl4IHByb3BlcnRpZXMgaW50byB0YXJnZXQgb2JqZWN0LlxuICovXG5leHBvcnQgY29uc3QgZXh0ZW5kID0gT2JqZWN0LmFzc2lnbjtcblxuLyoqXG4gKiBNZXJnZSBhbiBBcnJheSBvZiBPYmplY3RzIGludG8gYSBzaW5nbGUgT2JqZWN0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9PYmplY3QoYXJyKSB7XG4gICAgY29uc3QgcmVzID0ge307XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGFycltpXSkge1xuICAgICAgICAgICAgZXh0ZW5kKHJlcywgYXJyW2ldKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufVxuXG4vKipcbiAqIFJlbW92ZSBhbiBpdGVtIGZyb20gYW4gYXJyYXkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmUoYXJyLCBpdGVtKSB7XG4gICAgaWYgKGFyci5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBhcnIuaW5kZXhPZihpdGVtKTtcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBhcnIuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBHZXQgdGhlIHJhdyB0eXBlIHN0cmluZyBvZiBhIHZhbHVlLCBlLmcuLCBbb2JqZWN0IE9iamVjdF0uXG4gKi9cbmV4cG9ydCBjb25zdCBfdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIFF1aWNrIG9iamVjdCBjaGVjayAtIHRoaXMgaXMgcHJpbWFyaWx5IHVzZWQgdG8gdGVsbFxuICogT2JqZWN0cyBmcm9tIHByaW1pdGl2ZSB2YWx1ZXMgd2hlbiB3ZSBrbm93IHRoZSB2YWx1ZVxuICogaXMgYSBKU09OLWNvbXBsaWFudCB0eXBlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3Qob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAhPT0gbnVsbCAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIGFuIG9iamVjdCBoYXMgdGhlIHByb3BlcnR5LlxuICovXG5jb25zdCBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5leHBvcnQgZnVuY3Rpb24gaGFzT3duKG9iaiwga2V5KSB7XG4gICAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpO1xufVxuXG4vKipcbiAqIFN0cmljdCBvYmplY3QgdHlwZSBjaGVjay4gT25seSByZXR1cm5zIHRydWVcbiAqIGZvciBwbGFpbiBKYXZhU2NyaXB0IG9iamVjdHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1BsYWluT2JqZWN0KG9iaikge1xuICAgIHJldHVybiBfdG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBPYmplY3RdJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZihvYmosIGtleSwgcHJvcGVydHkpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIGV4dGVuZCh7XG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9LCBwcm9wZXJ0eSkpO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIGNhY2hlZCB2ZXJzaW9uIG9mIGEgcHVyZSBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhY2hlZChmbikge1xuICAgIGNvbnN0IGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gY2FjaGVkRm4oc3RyKSB7XG4gICAgICAgIGNvbnN0IGhpdCA9IGNhY2hlW3N0cl07XG4gICAgICAgIHJldHVybiBoaXQgfHwgKGNhY2hlW3N0cl0gPSBmbihzdHIpKTtcbiAgICB9O1xufVxuXG4vKipcbiAqIEh5cGhlbmF0ZSBhIGNhbWVsQ2FzZSBzdHJpbmcuXG4gKi9cbmNvbnN0IGh5cGhlbmF0ZVJFID0gLyhbXi1dKShbQS1aXSkvZztcbmV4cG9ydCBjb25zdCBoeXBoZW5hdGUgPSBjYWNoZWQoKHN0cikgPT4ge1xuICAgIHJldHVybiBzdHJcbiAgICAgICAgLnJlcGxhY2UoaHlwaGVuYXRlUkUsICckMS0kMicpXG4gICAgICAgIC5yZXBsYWNlKGh5cGhlbmF0ZVJFLCAnJDEtJDInKVxuICAgICAgICAudG9Mb3dlckNhc2UoKTtcbn0pO1xuXG5leHBvcnQgY29uc3QgY2FtZWxpemUgPSBzdHIgPT4gc3RyLnJlcGxhY2UoLy0oXFx3KS9nLCAoXywgYykgPT4gKGMgPyBjLnRvVXBwZXJDYXNlKCkgOiAnJykpO1xuXG4vKipcbiAqIEVuc3VyZSBhIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbmx5IG9uY2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvbmNlKGZuKSB7XG4gICAgbGV0IGNhbGxlZCA9IGZhbHNlXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghY2FsbGVkKSB7XG4gICAgICAgIGNhbGxlZCA9IHRydWVcbiAgICAgICAgZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICAgICAgfVxuICAgIH1cbn1cbiIsIi8qKlxuICogQGZpbGUgY3NzIG1vZHVsZXMgbW9kdWxlXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHtjYW1lbGl6ZX0gZnJvbSAnLi4vLi4vc2hhcmVkL3V0aWwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY3NzTW9kdWxlcykge1xuXG4gICAgZnVuY3Rpb24gcHJlVHJhbnNmb3JtTm9kZShlbCkge1xuICAgICAgICBpZiAoY3NzTW9kdWxlcyAmJiBjc3NNb2R1bGVzLiRzdHlsZSAmJiBlbC5hdHRyc01hcC5jbGFzcykge1xuICAgICAgICAgICAgY29uc3Qgc3RhdGljQ2xhc3MgPSBlbC5hdHRyc01hcC5jbGFzcy5yZXBsYWNlKC8oXlwifFwiJCkvZywgJycpLnNwbGl0KCcgJyk7XG4gICAgICAgICAgICBlbC5hdHRyc01hcC5jbGFzcyA9IHN0YXRpY0NsYXNzLm1hcChjID0+IChjc3NNb2R1bGVzLiRzdHlsZVtjYW1lbGl6ZShjKV0gfHwgYykpLmpvaW4oJyAnKTtcbiAgICAgICAgICAgIGVsLmF0dHJzTGlzdCA9IGVsLmF0dHJzTGlzdC5tYXAoXG4gICAgICAgICAgICAgICAgKHtuYW1lLCB2YWx1ZX0pID0+ICh7bmFtZSwgdmFsdWU6IG5hbWUgPT09ICdjbGFzcycgPyBlbC5hdHRyc01hcC5jbGFzcyA6IHZhbHVlfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcmVUcmFuc2Zvcm1Ob2RlXG4gICAgfTtcbn1cblxuIiwiLyoqXG4gKiBAZmlsZSBhdG9tIG1vZHVsZVxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmZ1bmN0aW9uIHByZVRyYW5zZm9ybU5vZGUoZWwpIHtcbiAgICBlbC5hdHRyc0xpc3QgPSBlbC5hdHRyc0xpc3QubWFwKCh7bmFtZSwgdmFsdWV9KSA9PiB7XG4gICAgICAgIGRlbGV0ZSBlbC5hdHRyc01hcFtuYW1lXTtcbiAgICAgICAgbmFtZSA9IG5hbWUucmVwbGFjZSgvXmEtLywgJ3YtJyk7XG4gICAgICAgIGVsLmF0dHJzTWFwW25hbWVdID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIG5hbWVcbiAgICAgICAgfTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHByZVRyYW5zZm9ybU5vZGVcbn07XG4iLCIvKipcbiAqIEBmaWxlIOS8mOWMliBhTm9kZSDnmoTkvZPnp69cbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvcHRpbWl6ZShhTm9kZSkge1xuICAgIGRlbGV0ZSBhTm9kZS5yYXc7XG4gICAgaWYgKGFOb2RlLmNoaWxkcmVuKSB7XG4gICAgICAgIGFOb2RlLmNoaWxkcmVuID0gYU5vZGUuY2hpbGRyZW4ubWFwKG9wdGltaXplKTtcbiAgICB9XG4gICAgaWYgKGFOb2RlLmVsc2VzKSB7XG4gICAgICAgIGFOb2RlLmVsc2VzID0gYU5vZGUuZWxzZXMubWFwKG9wdGltaXplKTtcbiAgICB9XG4gICAgaWYgKGFOb2RlLnRleHRFeHByKSB7XG4gICAgICAgIGRlbGV0ZSBhTm9kZS50ZXh0RXhwci5yYXc7XG4gICAgfVxuICAgIGlmIChhTm9kZS5wcm9wcykge1xuICAgICAgICBhTm9kZS5wcm9wcyA9IGFOb2RlLnByb3BzLm1hcChwcm9wID0+IHtcbiAgICAgICAgICAgIGlmIChwcm9wLnJhdykge1xuICAgICAgICAgICAgICAgIC8vIOS4jeiDveWIoOmZpO+8jOi/kOihjOaXtuacieeUqFxuICAgICAgICAgICAgICAgIHByb3AucmF3ID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wLmV4cHIpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgcHJvcC5leHByLnJhdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwcm9wO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGFOb2RlLmV2ZW50cykge1xuICAgICAgICBhTm9kZS5ldmVudHMgPSBhTm9kZS5ldmVudHMubWFwKGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC5yYXcpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgZXZlbnQucmF3O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGV2ZW50LmV4cHIpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgZXZlbnQuZXhwci5yYXc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZXZlbnQ7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoYU5vZGUuZGlyZWN0aXZlcykge1xuICAgICAgICBPYmplY3Qua2V5cyhhTm9kZS5kaXJlY3RpdmVzKS5mb3JFYWNoKGRpciA9PiB7XG4gICAgICAgICAgICBkZWxldGUgYU5vZGUuZGlyZWN0aXZlc1tkaXJdLnJhdztcbiAgICAgICAgICAgIGlmIChhTm9kZS5kaXJlY3RpdmVzW2Rpcl0udmFsdWUpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgYU5vZGUuZGlyZWN0aXZlc1tkaXJdLnZhbHVlLnJhd1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGFOb2RlO1xufVxuIiwiLyoqXG4gKiBAZmlsZSBjb21waWxlclxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCBidWlsZEluTW9kdWxlcyBmcm9tICcuL21vZHVsZXMnO1xuaW1wb3J0IHtjb21waWxlIGFzIHZ1ZUNvbXBpbGV9IGZyb20gJ3Z1ZS10ZW1wbGF0ZS1jb21waWxlcic7XG5pbXBvcnQgc3RyaW5naWZ5IGZyb20gJy4vc3RyaW5naWZ5JztcbmltcG9ydCBnZXRDc3NNb2R1bGVzIGZyb20gJy4vbW9kdWxlcy9jc3Ntb2R1bGVzJztcbmltcG9ydCBhdG9tIGZyb20gJy4vbW9kdWxlcy9hdG9tJztcbmltcG9ydCB7aXNFbXB0eX0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7cGFyc2VUZW1wbGF0ZX0gZnJvbSAnc2FuJztcbmltcG9ydCBvcHRpbWl6ZSBmcm9tICcuL29wdGltaXplLWFub2RlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBpbGUoc291cmNlLCBvcHRpb25zID0ge30pIHtcblxuICAgIGNvbnN0IHtcbiAgICAgICAgbW9kdWxlcyA9IFtdLFxuICAgICAgICBjc3NNb2R1bGVzID0gbnVsbCxcbiAgICAgICAgc2NvcGVJZCA9ICcnLFxuICAgICAgICBzdHJpcCA9IHRydWUsXG4gICAgICAgIGF0b206IGlzQXRvbSA9IGZhbHNlXG4gICAgfSA9IG9wdGlvbnM7XG5cbiAgICBpZiAoIWlzRW1wdHkoY3NzTW9kdWxlcykpIHtcbiAgICAgICAgbW9kdWxlcy51bnNoaWZ0KGdldENzc01vZHVsZXMoY3NzTW9kdWxlcykpO1xuICAgIH1cblxuICAgIGlmIChpc0F0b20pIHtcbiAgICAgICAgbW9kdWxlcy51bnNoaWZ0KGF0b20pO1xuICAgIH1cblxuICAgIGNvbnN0IGVycm9ycyA9IFtdO1xuICAgIGNvbnN0IGNvbXBpbGVyT3B0aW9ucyA9IHtcbiAgICAgICAgbW9kdWxlczogW1xuICAgICAgICAgICAgLi4uYnVpbGRJbk1vZHVsZXMsXG4gICAgICAgICAgICAuLi5tb2R1bGVzXG4gICAgICAgIF0sXG4gICAgICAgIHByZXNlcnZlV2hpdGVzcGFjZTogZmFsc2UsXG4gICAgICAgIHVzZUR5bmFtaWNDb21wb25lbnQ6IGZhbHNlLFxuICAgICAgICByZWZzOiBbXSxcbiAgICAgICAgZXJyb3IobXNnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBbdnVzYSBlcnJvcl0gJHttc2d9YCk7XG4gICAgICAgICAgICBlcnJvcnMucHVzaChtc2cpO1xuICAgICAgICB9LFxuICAgICAgICBzdHJpcFxuICAgIH07XG5cbiAgICAvLyBjb25zb2xlLmxvZyhzb3VyY2UpO1xuXG4gICAgY29uc3Qge2FzdH0gPSB2dWVDb21waWxlKHNvdXJjZS50cmltKCksIGNvbXBpbGVyT3B0aW9ucyk7XG5cbiAgICBjb25zdCB0ZW1wbGF0ZSA9IHN0cmluZ2lmeShhc3QsIHsgc2NvcGVJZCwgc3RyaXAsIGF0b206IGlzQXRvbSB9KTtcbiAgICAvLyBjb25zb2xlLmxvZyh0ZW1wbGF0ZSk7XG4gICAgY29uc3QgYU5vZGUgPSBwYXJzZVRlbXBsYXRlKHRlbXBsYXRlLCB7XG4gICAgICAgIHRyaW1XaGl0ZXNwYWNlOiAnYmxhbmsnXG4gICAgfSkuY2hpbGRyZW5bMF07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhc3QsXG4gICAgICAgIGFOb2RlOiBvcHRpbWl6ZShhTm9kZSksXG4gICAgICAgIHRlbXBsYXRlLFxuICAgICAgICByZWZzOiBjb21waWxlck9wdGlvbnMucmVmcyxcbiAgICAgICAgZXJyb3JzXG4gICAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=