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

module.exports = require("atom-expression-compiler");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@babel/code-frame");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("escape-quotes");

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
var code_frame_ = __webpack_require__(2);

// EXTERNAL MODULE: external "atom-expression-compiler"
var external_atom_expression_compiler_ = __webpack_require__(0);

// EXTERNAL MODULE: external "escape-quotes"
var external_escape_quotes_ = __webpack_require__(3);
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
    node.attrsMap['v-html'] = node.attrsMap['v-dangerous-html'];
    delete node.attrsMap['v-dangerous-html'];
  }

  if (node.attrsMap && node.attrsMap['v-safe-html']) {
    node.attrsMap['v-html'] = `_sf(${node.attrsMap['v-safe-html']})`;
    delete node.attrsMap['v-dangerous-html'];
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
// CONCATENATED MODULE: ./src/compiler/modules/index.js
/**
 * @file transformers
 * @author cxtom(cxtom2008@gmail.com)
 */










/* harmony default export */ var compiler_modules = ([modules_boolean, modules_if, modules_for, modules_event, modules_html, ref, modules_class, style, // bind 放在所有处理完之后
bind, dynamic_component]);
// EXTERNAL MODULE: external "vue-template-compiler"
var external_vue_template_compiler_ = __webpack_require__(5);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(1);

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

  const aNode = Object(external_san_["parseTemplate"])(template).children[0];
  return {
    ast,
    aNode,
    template,
    refs: compilerOptions.refs,
    errors
  };
}

/***/ })
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXRvbS1leHByZXNzaW9uLWNvbXBpbGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL2NvZGUtZnJhbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJlc2NhcGUtcXVvdGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG8tc2luZ2xlLXF1b3Rlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInZ1ZS10ZW1wbGF0ZS1jb21waWxlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNhblwiIiwid2VicGFjazovLy8uL3NyYy9jb21waWxlci9leHByZXNzaW9uLXRyYW5zZm9ybWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21waWxlci9tb2R1bGVzL2NsYXNzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21waWxlci9tb2R1bGVzL3N0eWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21waWxlci9tb2R1bGVzL2JpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBpbGVyL21vZHVsZXMvaWYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBpbGVyL21vZHVsZXMvZm9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21waWxlci9tb2R1bGVzL2V2ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21waWxlci9tb2R1bGVzL2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBpbGVyL21vZHVsZXMvcmVmLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21waWxlci9tb2R1bGVzL2R5bmFtaWMtY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21waWxlci9jb25zdGFudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcGlsZXIvbW9kdWxlcy9ib29sZWFuLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21waWxlci9tb2R1bGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21waWxlci9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21waWxlci9tb2R1bGVzL2Nzc21vZHVsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBpbGVyL21vZHVsZXMvYXRvbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcGlsZXIvaW5kZXguanMiXSwibmFtZXMiOlsibWFyayIsInJlZyIsIlJlZ0V4cCIsInZhbGlkVW5hcnlPcGVyYXRvciIsIlNldCIsInZhbGlkQmluYXJ5T3BlcmF0b3IiLCJ2YWxpZExvZ2ljYWxPcGVyYXRvciIsIm5vQnJhY2tldFR5cGVzIiwid3JhcEJhY2tldCIsImNvZGUiLCJub2RlIiwiaGFzIiwidHlwZSIsImluY2x1ZGVzIiwib3BlcmF0b3IiLCJTeW50YXgiLCJBcnJheUV4cHJlc3Npb24iLCJMaXRlcmFsIiwiT2JqZWN0RXhwcmVzc2lvbiIsIlVuYXJ5RXhwcmVzc2lvbiIsIlByb3BlcnR5IiwiVnVlRXhwcmVzc2lvbiIsIlZ1ZUZpbHRlciIsIklkZW50aWZpZXIiLCJNZW1iZXJFeHByZXNzaW9uIiwiQmluYXJ5RXhwcmVzc2lvbiIsIkxvZ2ljYWxFeHByZXNzaW9uIiwiQ29uZGl0aW9uYWxFeHByZXNzaW9uIiwiQ2FsbEV4cHJlc3Npb24iLCJUZW1wbGF0ZUV4cHJlc3Npb24iLCJWaXNpdG9yS2V5cyIsInRvU3RyaW5nIiwiYSIsImVzY2FwZVF1b3RlcyIsIkpTT04iLCJzdHJpbmdpZnkiLCJDb2RlR2VuZXJhZ29yIiwiZXhwcmVzc2lvbiIsImZpbHRlcnMiLCJyZWR1Y2UiLCJwcmUiLCJmaWx0ZXIiLCJyZXBsYWNlIiwicmV0IiwiYXJncyIsImhhc0FyZ3MiLCJsZW5ndGgiLCJuYW1lIiwibWFwIiwiam9pbiIsInJlc3VsdHMiLCJyZWYiLCJvYmplY3QiLCJwcm9wZXJ0eSIsImNvbXB1dGVkIiwiaXNTdGF0aWMiLCJsZW4iLCJ2YWx1ZSIsImxlZnQiLCJyaWdodCIsImVycm9yIiwiRnVuY3Rpb24iLCJnZXRUeXBlIiwidGVzdCIsImNvbnNlcXVlbnQiLCJhbHRlcm5hdGUiLCJ0ZXN0Q29kZSIsImNvbnNlcXVlbnRDb2RlIiwiYWx0ZXJuYXRlQ29kZSIsImNhbGxlZSIsImV4cHJlc3Npb25zIiwiaSIsInJlc3VsdCIsImMiLCJ2YXJFeHBvcnQiLCJoYXNDb21wdXRlZCIsImN1cnJlbnQiLCJwcmV2IiwicHJvcGVydGllcyIsImtleUNvZGUiLCJ0cmF2ZXJzZSIsImtleSIsImdlblByb3BlcnR5S2V5Iiwib2JqIiwidHlwZVN0ciIsIk9iamVjdCIsInByb3RvdHlwZSIsImNhbGwiLCJzdWJzdHJpbmciLCJ0b0xvd2VyQ2FzZSIsIkNvZGVHZW4iLCJjb25zdHJ1Y3RvciIsInN5bnRheCIsImtleXMiLCJnZW5lcmF0ZXIiLCJtZXNzYWdlIiwibG9jYXRpb24iLCJzdGFydCIsImxpbmUiLCJjb2x1bW4iLCJjb2RlRnJhbWUiLCJjb2RlRnJhbWVDb2x1bW5zIiwiaGlnaGxpZ2h0Q29kZSIsIkVycm9yIiwicm9vdCIsInZpc2l0b3JLZXlzIiwia2V5UmVzdWx0cyIsImVsZW1lbnQiLCJpc05vZGUiLCJBcnJheSIsImlzQXJyYXkiLCJlbGUiLCJnZW5lcmF0ZSIsImFwcGx5IiwiU3RyaW5nIiwiYXJndW1lbnRzIiwiZGF0YSIsInBhcnNlIiwic3RhcnRSdWxlIiwiZSIsInN0YWNrIiwiY29kZWdlbiIsImFzdCIsImJpbmRLZXlzIiwicG9zdFRyYW5zZm9ybU5vZGUiLCJjbGFzc0JpbmRpbmciLCJzdGF0aWNDbGFzcyIsImF0dHJzTWFwIiwiY2xhc3MiLCJ0cmFuc2Zvcm0iLCJmb3JFYWNoIiwidlNob3ciLCJzdHlsZUJpbmRpbmciLCJzdGF0aWNTdHlsZSIsInN0eWxlIiwidG9TaW5nbGVRdW90ZXMiLCJyZUJpbmQiLCJuIiwidkJpbmQiLCJpZiIsImVsc2VpZiIsImVsc2UiLCJmb3IiLCJmciIsImFsaWFzIiwiaXRlcmF0b3IxIiwidHJhY2tCeUV4cHIiLCJyZUV2ZW50IiwiZXZlbnRBdHRycyIsImF0dHJzTGlzdCIsImF0dHIiLCJtb2RpZmllcnMiLCJzcGxpdCIsImV2ZW50SGFuZGxlciIsIm0iLCJkaXJlY3RpdmVzIiwiZmluZCIsImQiLCJjaGlsZHJlbiIsInRleHQiLCJvcHRpb25zIiwiaW5mbyIsInBhcmVudCIsInVuZGVmaW5lZCIsInJlZnMiLCJwdXNoIiwiYmluZFJlZiIsInRhZyIsImlzIiwic3RhcnRzV2l0aCIsInNsaWNlIiwidHJpbSIsImV4cHIiLCJ0ZXN0TG9jYXRpb24iLCJvZmZzZXQiLCJlbmQiLCJhdHRycyIsImlmQ29uZGl0aW9ucyIsImV4cCIsImJsb2NrIiwic2luZ2xlVGFnIiwiYXJlYSIsImJhc2UiLCJiYXNlZm9udCIsImJyIiwiY29sIiwiY29tbWFuZCIsImVtYmVkIiwiZnJhbWUiLCJociIsImltZyIsImlucHV0IiwiaXNpbmRleCIsImtleWdlbiIsImxpbmsiLCJtZXRhIiwicGFyYW0iLCJzb3VyY2UiLCJ0cmFjayIsIndiciIsImJvb2xlYW5BdHRyIiwiYWxsb3dmdWxsc2NyZWVuIiwiYXN5bmMiLCJhdXRvZm9jdXMiLCJhdXRvcGxheSIsImNoZWNrZWQiLCJjb21wYWN0IiwiY29udHJvbHMiLCJkZWNsYXJlIiwiZGVmYXVsdCIsImRlZmF1bHRjaGVja2VkIiwiZGVmYXVsdG11dGVkIiwiZGVmYXVsdHNlbGVjdGVkIiwiZGVmZXIiLCJkaXNhYmxlZCIsImVuYWJsZWQiLCJmb3Jtbm92YWxpZGF0ZSIsImhpZGRlbiIsImluZGV0ZXJtaW5hdGUiLCJpbmVydCIsImlzbWFwIiwiaXRlbXNjb3BlIiwibG9vcCIsIm11bHRpcGxlIiwibXV0ZWQiLCJub2hyZWYiLCJub3Jlc2l6ZSIsIm5vc2hhZGUiLCJub3ZhbGlkYXRlIiwibm93cmFwIiwib3BlbiIsInBhdXNlb25leGl0IiwicmVhZG9ubHkiLCJyZXF1aXJlZCIsInJldmVyc2VkIiwic2NvcGVkIiwic2VhbWxlc3MiLCJzZWxlY3RlZCIsInNvcnRhYmxlIiwidHJhbnNsYXRlIiwidHJ1ZXNwZWVkIiwidHlwZW11c3RtYXRjaCIsInZpc2libGUiLCJub1ZhbHVlQXR0ciIsImh0bWxUYWciLCJodG1sIiwiYm9keSIsImhlYWQiLCJ0aXRsZSIsImFkZHJlc3MiLCJhcnRpY2xlIiwiYXNpZGUiLCJmb290ZXIiLCJoZWFkZXIiLCJoMSIsImgyIiwiaDMiLCJoNCIsImg1IiwiaDYiLCJoZ3JvdXAiLCJuYXYiLCJzZWN0aW9uIiwiZGl2IiwiZGQiLCJkbCIsImR0IiwiZmlnY2FwdGlvbiIsImZpZ3VyZSIsImxpIiwibWFpbiIsIm9sIiwicCIsInVsIiwiYiIsImFiYnIiLCJiZGkiLCJiZG8iLCJjaXRlIiwiZGZuIiwiZW0iLCJrYmQiLCJxIiwicnAiLCJydCIsInJ0YyIsInJ1YnkiLCJzIiwic2FtcCIsInNtYWxsIiwic3BhbiIsInN0cm9uZyIsInN1YiIsInN1cCIsInRpbWUiLCJ1IiwidmFyIiwiYXVkaW8iLCJ2aWRlbyIsImNhbnZhcyIsInNjcmlwdCIsIm5vc2NyaXB0IiwiZGVsIiwiaW5zIiwiY2FwdGlvbiIsImNvbGdyb3VwIiwidGFibGUiLCJ0aGVhZCIsInRib2R5IiwidGQiLCJ0aCIsInRyIiwiYnV0dG9uIiwiZGF0YWxpc3QiLCJmaWVsZHNldCIsImZvcm0iLCJsYWJlbCIsImxlZ2VuZCIsIm1ldGVyIiwib3B0Z3JvdXAiLCJvcHRpb24iLCJvdXRwdXQiLCJwcm9ncmVzcyIsInNlbGVjdCIsInRleHRhcmVhIiwiZGV0YWlscyIsImRpYWxvZyIsIm1lbnUiLCJtZW51aXRlbSIsInN1bW1hcnkiLCJjb250ZW50Iiwic2hhZG93IiwidGVtcGxhdGUiLCJib29sIiwieWYiLCJldmVudCIsImNsYXp6IiwiYmluZCIsImR5bmFtaWNDb21wb25lbnQiLCJzdHJpbmdpZnlBdHRyIiwic2NvcGVJZCIsInN0cmlwIiwiYXRvbSIsImhhc0NoaWxkcmVuIiwiaGFzQXR0ciIsImV4dGVuZCIsImFzc2lnbiIsInRvT2JqZWN0IiwiYXJyIiwicmVzIiwiX3RvU3RyaW5nIiwiaXNPYmplY3QiLCJoYXNPd25Qcm9wZXJ0eSIsImhhc093biIsImlzUGxhaW5PYmplY3QiLCJkZWYiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJjYWNoZWQiLCJmbiIsImNhY2hlIiwiY3JlYXRlIiwiY2FjaGVkRm4iLCJzdHIiLCJoaXQiLCJoeXBoZW5hdGVSRSIsImh5cGhlbmF0ZSIsImNhbWVsaXplIiwiXyIsInRvVXBwZXJDYXNlIiwiY3NzTW9kdWxlcyIsInByZVRyYW5zZm9ybU5vZGUiLCJlbCIsIiRzdHlsZSIsImNvbXBpbGUiLCJtb2R1bGVzIiwiaXNBdG9tIiwiaXNFbXB0eSIsInVuc2hpZnQiLCJnZXRDc3NNb2R1bGVzIiwiZXJyb3JzIiwiY29tcGlsZXJPcHRpb25zIiwiYnVpbGRJbk1vZHVsZXMiLCJwcmVzZXJ2ZVdoaXRlc3BhY2UiLCJ1c2VEeW5hbWljQ29tcG9uZW50IiwibXNnIiwiY29uc29sZSIsInZ1ZUNvbXBpbGUiLCJhTm9kZSIsInBhcnNlVGVtcGxhdGUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7QUNsRkEscUQ7Ozs7OztBQ0FBLG1DOzs7Ozs7QUNBQSw4Qzs7Ozs7O0FDQUEsMEM7Ozs7OztBQ0FBLDZDOzs7Ozs7QUNBQSxrRDs7Ozs7O0FDQUEsZ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7O0FBS0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsSUFBSSxHQUFHLHdCQUFiO0FBQ0EsTUFBTUMsR0FBRyxHQUFHLElBQUlDLE1BQUosQ0FBV0YsSUFBWCxFQUFpQixHQUFqQixDQUFaO0FBRUEsTUFBTUcsa0JBQWtCLEdBQUcsSUFBSUMsR0FBSixDQUFRLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLENBQVIsQ0FBM0I7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxJQUFJRCxHQUFKLENBQVEsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsRUFBMEIsR0FBMUIsRUFBK0IsR0FBL0IsRUFBb0MsSUFBcEMsRUFBMEMsSUFBMUMsRUFBZ0QsSUFBaEQsRUFBc0QsS0FBdEQsRUFBNkQsSUFBN0QsRUFBbUUsS0FBbkUsQ0FBUixDQUE1QjtBQUNBLE1BQU1FLG9CQUFvQixHQUFHLElBQUlGLEdBQUosQ0FBUSxDQUFDLElBQUQsRUFBTyxJQUFQLENBQVIsQ0FBN0I7QUFDQSxNQUFNRyxjQUFjLEdBQUcsSUFBSUgsR0FBSixDQUFRLENBQzNCLGlCQUQyQixFQUUzQixTQUYyQixFQUczQixrQkFIMkIsRUFJM0IsWUFKMkIsRUFLM0Isa0JBTDJCLEVBTTNCLGdCQU4yQixFQU8zQixvQkFQMkIsRUFRM0IsaUJBUjJCLENBQVIsQ0FBdkI7O0FBV0EsU0FBU0ksVUFBVCxDQUFvQkMsSUFBcEIsRUFBMEJDLElBQTFCLEVBQWdDO0FBQzVCLE1BQUlILGNBQWMsQ0FBQ0ksR0FBZixDQUFtQkQsSUFBSSxDQUFDRSxJQUF4QixDQUFKLEVBQW1DO0FBQy9CLFdBQU9ILElBQVA7QUFDSDs7QUFDRCxNQUFJQyxJQUFJLENBQUNFLElBQUwsS0FBYyxrQkFBZCxJQUFvQyxDQUFDLElBQUQsRUFBTyxLQUFQLEVBQWMsSUFBZCxFQUFvQixLQUFwQixFQUEyQkMsUUFBM0IsQ0FBb0NILElBQUksQ0FBQ0ksUUFBekMsQ0FBeEMsRUFBNEY7QUFDeEYsV0FBT0wsSUFBUDtBQUNIOztBQUNELFNBQVEsSUFBR0EsSUFBSyxHQUFoQjtBQUNIOztBQUVELE1BQU1NLE1BQU0sR0FBRztBQUNYQyxpQkFBZSxFQUFFLGlCQUROO0FBRVhDLFNBQU8sRUFBRSxTQUZFO0FBR1hDLGtCQUFnQixFQUFFLGtCQUhQO0FBSVhDLGlCQUFlLEVBQUUsaUJBSk47QUFLWEMsVUFBUSxFQUFFLFVBTEM7QUFNWEMsZUFBYSxFQUFFLGVBTko7QUFPWEMsV0FBUyxFQUFFLFdBUEE7QUFRWEMsWUFBVSxFQUFFLFlBUkQ7QUFTWEMsa0JBQWdCLEVBQUUsa0JBVFA7QUFVWEMsa0JBQWdCLEVBQUUsa0JBVlA7QUFXWEMsbUJBQWlCLEVBQUUsbUJBWFI7QUFZWEMsdUJBQXFCLEVBQUUsdUJBWlo7QUFhWEMsZ0JBQWMsRUFBRSxnQkFiTDtBQWNYQyxvQkFBa0IsRUFBRTtBQWRULENBQWY7QUFpQkEsTUFBTUMsV0FBVyxHQUFHO0FBQ2hCZCxpQkFBZSxFQUFFLENBQUMsVUFBRCxDQUREO0FBRWhCRSxrQkFBZ0IsRUFBRSxDQUFDLFlBQUQsQ0FGRjtBQUdoQkMsaUJBQWUsRUFBRSxDQUFDLFVBQUQsQ0FIRDtBQUloQkMsVUFBUSxFQUFFLENBQUMsT0FBRCxDQUpNO0FBS2hCSSxrQkFBZ0IsRUFBRSxDQUFDLFFBQUQsRUFBVyxVQUFYLENBTEY7QUFNaEJDLGtCQUFnQixFQUFFLENBQUMsTUFBRCxFQUFTLE9BQVQsQ0FORjtBQU9oQkMsbUJBQWlCLEVBQUUsQ0FBQyxNQUFELEVBQVMsT0FBVCxDQVBIO0FBUWhCQyx1QkFBcUIsRUFBRSxDQUFDLE1BQUQsRUFBUyxZQUFULEVBQXVCLFdBQXZCLENBUlA7QUFTaEJDLGdCQUFjLEVBQUUsQ0FBQyxXQUFELENBVEE7QUFVaEJQLGVBQWEsRUFBRSxDQUFDLFlBQUQsRUFBZSxTQUFmLENBVkM7QUFXaEJDLFdBQVMsRUFBRSxDQUFDLFdBQUQsQ0FYSztBQVloQk8sb0JBQWtCLEVBQUUsQ0FBQyxhQUFEO0FBWkosQ0FBcEI7O0FBZUEsU0FBU0UsK0JBQVQsQ0FBa0JDLENBQWxCLEVBQXFCO0FBQ2pCLE1BQUksT0FBT0EsQ0FBUCxLQUFhLFFBQWpCLEVBQTJCO0FBQ3ZCLFdBQU9BLENBQUMsR0FBRyxFQUFYO0FBQ0g7O0FBQ0QsTUFBSSxPQUFPQSxDQUFQLEtBQWEsUUFBakIsRUFBMkI7QUFDdkIsV0FBUSxJQUFHQyxnQ0FBWSxDQUFDRCxDQUFELENBQUksR0FBM0I7QUFDSDs7QUFDRCxTQUFPRSxJQUFJLENBQUNDLFNBQUwsQ0FBZUgsQ0FBZixDQUFQO0FBQ0g7O0FBRUQsTUFBTUksYUFBYSxHQUFHO0FBRWxCZixlQUFhLENBQUNYLElBQUQsRUFBTyxDQUFDMkIsVUFBRCxFQUFhQyxPQUFiLENBQVAsRUFBOEI7QUFDdkMsUUFBSTdCLElBQUksR0FBRzZCLE9BQU8sQ0FBQ0MsTUFBUixDQUFlLENBQUNDLEdBQUQsRUFBTUMsTUFBTixLQUFpQjtBQUN2QyxhQUFPQSxNQUFNLENBQUNoQyxJQUFQLENBQVlpQyxPQUFaLENBQW9CekMsR0FBcEIsRUFBeUJ1QyxHQUF6QixDQUFQO0FBQ0gsS0FGVSxFQUVSSCxVQUFVLENBQUM1QixJQUZILENBQVg7QUFHQSxXQUFPLEtBQUtrQyxHQUFMLENBQVNsQyxJQUFULENBQVA7QUFDSCxHQVBpQjs7QUFTbEJhLFdBQVMsQ0FBQ1osSUFBRCxFQUFPLENBQUNrQyxJQUFELENBQVAsRUFBZTtBQUNwQixRQUFJQyxPQUFPLEdBQUdELElBQUksQ0FBQ0UsTUFBTCxHQUFjLENBQTVCO0FBQ0EsV0FBTyxLQUFLSCxHQUFMLENBQVUsR0FBRTNDLElBQUssTUFBS1UsSUFBSSxDQUFDcUMsSUFBSyxFQUF2QixJQUE0QkYsT0FBTyxHQUFJLElBQUdELElBQUksQ0FBQ0ksR0FBTCxDQUFTaEIsQ0FBQyxJQUFJQSxDQUFDLENBQUN2QixJQUFoQixFQUFzQndDLElBQXRCLENBQTJCLElBQTNCLENBQWlDLEdBQXhDLEdBQTZDLEVBQWhGLENBQVQsQ0FBUDtBQUNILEdBWmlCOztBQWNsQjFCLFlBQVUsQ0FBQ2IsSUFBRCxFQUFPd0MsT0FBUCxFQUFnQkMsR0FBaEIsRUFBcUI7QUFDM0IsV0FBTyxLQUFLUixHQUFMLENBQVNqQyxJQUFJLENBQUNxQyxJQUFkLENBQVA7QUFDSCxHQWhCaUI7O0FBa0JsQnZCLGtCQUFnQixDQUFDZCxJQUFELEVBQU93QyxPQUFQLEVBQWdCO0FBRTVCLFFBQUksQ0FBQ0UsTUFBRCxFQUFTQyxRQUFULElBQXFCSCxPQUF6Qjs7QUFFQSxRQUFJeEMsSUFBSSxDQUFDNEMsUUFBVCxFQUFtQjtBQUNmLGFBQU8sS0FBS1gsR0FBTCxDQUFVLEdBQUVTLE1BQU0sQ0FBQzNDLElBQUssSUFBRzRDLFFBQVEsQ0FBQzVDLElBQUssR0FBekMsQ0FBUDtBQUNIOztBQUVELFFBQUk0QyxRQUFRLENBQUM1QyxJQUFULEtBQWtCLFFBQXRCLEVBQWdDO0FBQzVCLFVBQUkyQyxNQUFNLENBQUN4QyxJQUFQLEtBQWdCLFFBQXBCLEVBQThCO0FBQzFCLFlBQUl3QyxNQUFNLENBQUNHLFFBQVgsRUFBcUI7QUFDakIsY0FBSUMsR0FBRyxHQUFHSixNQUFNLENBQUNLLEtBQVAsQ0FBYVgsTUFBdkI7QUFDQSxpQkFBTyxLQUFLSCxHQUFMLENBQVNhLEdBQUcsR0FBRyxFQUFmLEVBQW1CLFFBQW5CLEVBQTZCQSxHQUE3QixDQUFQO0FBQ0g7O0FBQ0QsZUFBTyxLQUFLYixHQUFMLENBQVUsR0FBRVMsTUFBTSxDQUFDM0MsSUFBSyxTQUF4QixFQUFrQyxRQUFsQyxDQUFQO0FBQ0g7QUFDSjs7QUFFRCxXQUFPLEtBQUtrQyxHQUFMLENBQVUsR0FBRVMsTUFBTSxDQUFDM0MsSUFBSyxJQUFHNEMsUUFBUSxDQUFDNUMsSUFBSyxFQUF6QyxDQUFQO0FBQ0gsR0FyQ2lCOztBQXVDbEJnQixrQkFBZ0IsQ0FBQ2YsSUFBRCxFQUFPLENBQUNnRCxJQUFELEVBQU9DLEtBQVAsQ0FBUCxFQUFzQlIsR0FBdEIsRUFBMkI7QUFDdkMsUUFBSSxDQUFDOUMsbUJBQW1CLENBQUNNLEdBQXBCLENBQXdCRCxJQUFJLENBQUNJLFFBQTdCLENBQUwsRUFBNkM7QUFDekMsV0FBSzhDLEtBQUwsQ0FBWSw0QkFBMkJsRCxJQUFJLENBQUNJLFFBQVMsR0FBckQsRUFBeURKLElBQXpEO0FBQ0g7O0FBQ0QsUUFBSWdELElBQUksQ0FBQ0gsUUFBTCxJQUFpQkksS0FBSyxDQUFDSixRQUEzQixFQUFxQztBQUNqQyxVQUFJRSxLQUFLLEdBQUcsSUFBSUksUUFBSixDQUFjLFVBQVNILElBQUksQ0FBQ2pELElBQUssSUFBR0MsSUFBSSxDQUFDSSxRQUFTLElBQUc2QyxLQUFLLENBQUNsRCxJQUFLLEVBQWhFLEdBQVo7QUFDQSxhQUFPLEtBQUtrQyxHQUFMLENBQVNaLCtCQUFRLENBQUMwQixLQUFELENBQWpCLEVBQTBCSyxPQUFPLENBQUNMLEtBQUQsQ0FBakMsRUFBMENBLEtBQTFDLENBQVA7QUFDSDs7QUFDRCxRQUFJaEQsSUFBSSxHQUFJLEdBQUVELFVBQVUsQ0FBQ2tELElBQUksQ0FBQ2pELElBQU4sRUFBWUMsSUFBSSxDQUFDZ0QsSUFBakIsQ0FBdUIsR0FBRWhELElBQUksQ0FBQ0ksUUFBUyxHQUFFTixVQUFVLENBQUNtRCxLQUFLLENBQUNsRCxJQUFQLEVBQWFDLElBQUksQ0FBQ2lELEtBQWxCLENBQXlCLEVBQXBHO0FBQ0EsV0FBTyxLQUFLaEIsR0FBTCxDQUFTbEMsSUFBVCxDQUFQO0FBQ0gsR0FqRGlCOztBQW1EbEJpQixtQkFBaUIsQ0FBQ2hCLElBQUQsRUFBTyxDQUFDZ0QsSUFBRCxFQUFPQyxLQUFQLENBQVAsRUFBc0I7QUFDbkMsUUFBSSxDQUFDckQsb0JBQW9CLENBQUNLLEdBQXJCLENBQXlCRCxJQUFJLENBQUNJLFFBQTlCLENBQUwsRUFBOEM7QUFDMUMsV0FBSzhDLEtBQUwsQ0FBWSw2QkFBNEJsRCxJQUFJLENBQUNJLFFBQVMsR0FBdEQsRUFBMERKLElBQTFEO0FBQ0g7O0FBQ0QsUUFBSWdELElBQUksQ0FBQ0gsUUFBTCxJQUFpQkksS0FBSyxDQUFDSixRQUEzQixFQUFxQztBQUNqQyxVQUFJRSxLQUFLLEdBQUcsSUFBSUksUUFBSixDQUFjLFVBQVNILElBQUksQ0FBQ2pELElBQUssR0FBRUMsSUFBSSxDQUFDSSxRQUFTLEdBQUU2QyxLQUFLLENBQUNsRCxJQUFLLEVBQTlELEdBQVo7QUFDQSxhQUFPLEtBQUtrQyxHQUFMLENBQVNaLCtCQUFRLENBQUMwQixLQUFELENBQWpCLEVBQTBCSyxPQUFPLENBQUNMLEtBQUQsQ0FBakMsRUFBMENBLEtBQTFDLENBQVA7QUFDSDs7QUFDRCxRQUFJaEQsSUFBSSxHQUFJLEdBQUVELFVBQVUsQ0FBQ2tELElBQUksQ0FBQ2pELElBQU4sRUFBWUMsSUFBSSxDQUFDZ0QsSUFBakIsQ0FBdUIsR0FBRWhELElBQUksQ0FBQ0ksUUFBUyxHQUFFTixVQUFVLENBQUNtRCxLQUFLLENBQUNsRCxJQUFQLEVBQWFDLElBQUksQ0FBQ2lELEtBQWxCLENBQXlCLEVBQXBHO0FBQ0EsV0FBTyxLQUFLaEIsR0FBTCxDQUFTbEMsSUFBVCxDQUFQO0FBQ0gsR0E3RGlCOztBQStEbEJrQix1QkFBcUIsQ0FBQ2pCLElBQUQsRUFBTyxDQUFDcUQsSUFBRCxFQUFPQyxVQUFQLEVBQW1CQyxTQUFuQixDQUFQLEVBQXNDO0FBQ3ZELFFBQUlGLElBQUksQ0FBQ1IsUUFBVCxFQUFtQjtBQUNmLGFBQU9RLElBQUksQ0FBQ04sS0FBTCxHQUFhTyxVQUFiLEdBQTBCQyxTQUFqQztBQUNIOztBQUVELFFBQUlDLFFBQVEsR0FBRzFELFVBQVUsQ0FBQ3VELElBQUksQ0FBQ3RELElBQU4sRUFBWUMsSUFBSSxDQUFDcUQsSUFBakIsQ0FBekI7QUFDQSxRQUFJSSxjQUFjLEdBQUczRCxVQUFVLENBQUN3RCxVQUFVLENBQUN2RCxJQUFaLEVBQWtCQyxJQUFJLENBQUNzRCxVQUF2QixDQUEvQjtBQUNBLFFBQUlJLGFBQWEsR0FBRzVELFVBQVUsQ0FBQ3lELFNBQVMsQ0FBQ3hELElBQVgsRUFBaUJDLElBQUksQ0FBQ3VELFNBQXRCLENBQTlCO0FBRUEsV0FBTyxLQUFLdEIsR0FBTCxDQUFVLEdBQUV1QixRQUFTLElBQUdDLGNBQWUsSUFBR0MsYUFBYyxFQUF4RCxDQUFQO0FBQ0gsR0F6RWlCOztBQTJFbEJ4QyxnQkFBYyxDQUFDbEIsSUFBRCxFQUFPLENBQUNrQyxJQUFELENBQVAsRUFBZTtBQUN6QixXQUFPLEtBQUtELEdBQUwsQ0FBVSxHQUFFakMsSUFBSSxDQUFDMkQsTUFBTCxDQUFZdEIsSUFBSyxJQUFHSCxJQUFJLENBQUNJLEdBQUwsQ0FBU2hCLENBQUMsSUFBSUEsQ0FBQyxDQUFDdkIsSUFBaEIsRUFBc0J3QyxJQUF0QixDQUEyQixJQUEzQixDQUFpQyxHQUFqRSxDQUFQO0FBQ0gsR0E3RWlCOztBQStFbEJwQixvQkFBa0IsQ0FBQ25CLElBQUQsRUFBTyxDQUFDNEQsV0FBRCxDQUFQLEVBQXNCO0FBQ3BDLFdBQU8sS0FBSzNCLEdBQUwsQ0FDRixJQUFHMkIsV0FBVyxDQUFDdEIsR0FBWixDQUFnQixDQUFDO0FBQUN2QztBQUFELEtBQUQsRUFBUzhELENBQVQsS0FBZS9ELFVBQVUsQ0FBQ0MsSUFBRCxFQUFPQyxJQUFJLENBQUM0RCxXQUFMLENBQWlCQyxDQUFqQixDQUFQLENBQXpDLEVBQXNFdEIsSUFBdEUsQ0FBMkUsR0FBM0UsQ0FBZ0YsR0FEakYsRUFFSCxRQUZHLENBQVA7QUFJSCxHQXBGaUI7O0FBc0ZsQmpDLGlCQUFlLENBQUNOLElBQUQsRUFBT3dDLE9BQVAsRUFBZ0I7QUFDM0IsUUFBSXNCLE1BQU0sR0FBR3RCLE9BQU8sQ0FBQyxDQUFELENBQXBCO0FBQ0EsV0FBTyxLQUFLUCxHQUFMLENBQVUsSUFBRzZCLE1BQU0sQ0FBQ3hCLEdBQVAsQ0FBV3lCLENBQUMsSUFBSUEsQ0FBQyxDQUFDaEUsSUFBbEIsRUFBd0J3QyxJQUF4QixDQUE2QixJQUE3QixDQUFtQyxHQUFoRCxFQUFvRCxPQUFwRCxDQUFQO0FBQ0gsR0F6RmlCOztBQTJGbEJoQyxTQUFPLENBQUNQLElBQUQsRUFBTztBQUNWLFdBQU8sS0FBS2lDLEdBQUwsQ0FDSCxLQUFLK0IsU0FBTCxDQUFlaEUsSUFBSSxDQUFDK0MsS0FBcEIsQ0FERyxFQUVISyxPQUFPLENBQUNwRCxJQUFJLENBQUMrQyxLQUFOLENBRkosRUFHSC9DLElBQUksQ0FBQytDLEtBSEYsQ0FBUDtBQUtILEdBakdpQjs7QUFtR2xCdEMsaUJBQWUsQ0FBQ1QsSUFBRCxFQUFPd0MsT0FBUCxFQUFnQjtBQUUzQixRQUFJLENBQUMvQyxrQkFBa0IsQ0FBQ1EsR0FBbkIsQ0FBdUJELElBQUksQ0FBQ0ksUUFBNUIsQ0FBTCxFQUE0QztBQUN4QyxXQUFLOEMsS0FBTCxDQUFZLDBCQUF5QmxELElBQUksQ0FBQ0ksUUFBUyxHQUFuRCxFQUF1REosSUFBdkQ7QUFDSDs7QUFFRCxRQUFJOEQsTUFBTSxHQUFHdEIsT0FBTyxDQUFDLENBQUQsQ0FBcEI7O0FBRUEsUUFBSXNCLE1BQU0sQ0FBQ2pCLFFBQVgsRUFBcUI7QUFDakIsVUFBSUUsS0FBSyxHQUFHLElBQUlJLFFBQUosQ0FBYyxVQUFTbkQsSUFBSSxDQUFDSSxRQUFTLEdBQUUwRCxNQUFNLENBQUMvRCxJQUFLLEVBQW5ELEdBQVo7QUFDQSxVQUFJMEIsU0FBUyxHQUFHSiwrQkFBUSxDQUFDMEIsS0FBRCxDQUF4QjtBQUNBLGFBQU8sS0FBS2QsR0FBTCxDQUFTUixTQUFULEVBQW9CMkIsT0FBTyxDQUFDTCxLQUFELENBQTNCLEVBQW9DQSxLQUFwQyxDQUFQO0FBQ0g7O0FBRUQsV0FBTyxLQUFLZCxHQUFMLENBQVUsR0FBRWpDLElBQUksQ0FBQ0ksUUFBUyxHQUFFMEQsTUFBTSxDQUFDL0QsSUFBSyxFQUF4QyxDQUFQO0FBQ0gsR0FsSGlCOztBQW9IbEJTLGtCQUFnQixDQUFDUixJQUFELEVBQU93QyxPQUFQLEVBQWdCO0FBRTVCLFFBQUl4QyxJQUFJLENBQUNpRSxXQUFULEVBQXNCO0FBQ2xCLFVBQUlsRSxJQUFJLEdBQUcsTUFBWDtBQUNBLFVBQUltRSxPQUFKO0FBQ0EsVUFBSUMsSUFBSjs7QUFDQSxXQUFLLElBQUlOLENBQUMsR0FBRyxDQUFSLEVBQVdmLEdBQUcsR0FBRzlDLElBQUksQ0FBQ29FLFVBQUwsQ0FBZ0JoQyxNQUF0QyxFQUE4Q3lCLENBQUMsR0FBR2YsR0FBbEQsRUFBdURlLENBQUMsRUFBeEQsRUFBNEQ7QUFDeEQsY0FBTWxCLFFBQVEsR0FBRzNDLElBQUksQ0FBQ29FLFVBQUwsQ0FBZ0JQLENBQWhCLENBQWpCO0FBQ0FNLFlBQUksR0FBR0QsT0FBUDtBQUNBQSxlQUFPLEdBQUcsQ0FBQyxDQUFDdkIsUUFBUSxDQUFDQyxRQUFyQjs7QUFDQSxZQUFJc0IsT0FBTyxJQUFJQyxJQUFJLEtBQUssS0FBeEIsRUFBK0I7QUFDM0JwRSxjQUFJLElBQUksSUFBUjtBQUNIOztBQUNELFlBQUltRSxPQUFPLElBQUksQ0FBQ0MsSUFBaEIsRUFBc0I7QUFDbEJwRSxjQUFJLElBQUksUUFBUjtBQUNIOztBQUNELFlBQUksQ0FBQ21FLE9BQUQsSUFBWUMsSUFBaEIsRUFBc0I7QUFDbEJwRSxjQUFJLElBQUksTUFBUjtBQUNIOztBQUNELFlBQUksQ0FBQ21FLE9BQUQsSUFBWUMsSUFBSSxJQUFJLElBQXhCLEVBQThCO0FBQzFCcEUsY0FBSSxJQUFJLEdBQVI7QUFDSDs7QUFDRCxZQUFJbUUsT0FBTyxLQUFLQyxJQUFoQixFQUFzQjtBQUNsQnBFLGNBQUksSUFBSSxHQUFSO0FBQ0g7O0FBQ0RBLFlBQUksSUFBSXlDLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV3FCLENBQVgsRUFBYzlELElBQXRCO0FBQ0g7O0FBQ0RBLFVBQUksSUFBSW1FLE9BQU8sR0FBRyxLQUFILEdBQVcsSUFBMUI7QUFDQSxhQUFPLEtBQUtqQyxHQUFMLENBQVNsQyxJQUFULENBQVA7QUFDSDs7QUFFRCxRQUFJK0QsTUFBTSxHQUFHdEIsT0FBTyxDQUFDLENBQUQsQ0FBcEI7QUFDQSxXQUFPLEtBQUtQLEdBQUwsQ0FBVSxJQUFHNkIsTUFBTSxDQUFDeEIsR0FBUCxDQUFXeUIsQ0FBQyxJQUFJQSxDQUFDLENBQUNoRSxJQUFsQixFQUF3QndDLElBQXhCLENBQTZCLEdBQTdCLENBQWtDLElBQS9DLEVBQW9ELFFBQXBELENBQVA7QUFDSCxHQXJKaUI7O0FBdUpsQjdCLFVBQVEsQ0FBQ1YsSUFBRCxFQUFPd0MsT0FBUCxFQUFnQkMsR0FBaEIsRUFBcUI7QUFFekIsUUFBSXpDLElBQUksQ0FBQzRDLFFBQVQsRUFBbUI7QUFDZkgsU0FBRyxDQUFDd0IsV0FBSixHQUFrQixJQUFsQjtBQUNBLFVBQUlJLE9BQU8sR0FBRyxLQUFLQyxRQUFMLENBQWN0RSxJQUFJLENBQUN1RSxHQUFuQixFQUF3QnZFLElBQXhCLEVBQThCRCxJQUE1QztBQUNBLGFBQU8sS0FBS2tDLEdBQUwsQ0FBVSxNQUFLb0MsT0FBUSxNQUFLN0IsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXekMsSUFBSyxHQUE1QyxDQUFQO0FBQ0g7O0FBRUQsUUFBSXNFLE9BQU8sR0FBRyxLQUFLRyxjQUFMLENBQW9CeEUsSUFBSSxDQUFDdUUsR0FBekIsRUFBOEJ4RSxJQUE1QztBQUNBLFdBQU8sS0FBS2tDLEdBQUwsQ0FBVSxHQUFFb0MsT0FBUSxJQUFHN0IsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXekMsSUFBSyxFQUF2QyxDQUFQO0FBQ0g7O0FBaktpQixDQUF0Qjs7QUFvS0EsU0FBU3FELE9BQVQsQ0FBaUJxQixHQUFqQixFQUFzQjtBQUNsQixNQUFJQyxPQUFPLEdBQUdDLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQnZELFFBQWpCLENBQTBCd0QsSUFBMUIsQ0FBK0JKLEdBQS9CLENBQWQ7QUFDQSxTQUFPQyxPQUFPLENBQUNJLFNBQVIsQ0FBa0IsQ0FBbEIsRUFBcUJKLE9BQU8sQ0FBQ3RDLE1BQVIsR0FBaUIsQ0FBdEMsRUFBeUMyQyxXQUF6QyxFQUFQO0FBQ0g7O0FBRUQsTUFBTUMsOEJBQU4sQ0FBYztBQUVWQyxhQUFXLENBQUM7QUFBQ2xGO0FBQUQsR0FBRCxFQUFTO0FBQ2hCLFNBQUttRixNQUFMLEdBQWM3RSxNQUFkO0FBQ0EsU0FBSzhFLElBQUwsR0FBWS9ELFdBQVo7QUFDQSxTQUFLZ0UsU0FBTCxHQUFpQjFELGFBQWpCO0FBRUEsU0FBSzNCLElBQUwsR0FBWUEsSUFBWjtBQUNIOztBQUVEbUQsT0FBSyxDQUFDbUMsT0FBRCxFQUFVckYsSUFBVixFQUFnQjtBQUNqQnFGLFdBQU8sR0FBSSw2QkFBNEJyRixJQUFJLENBQUNzRixRQUFMLENBQWNDLEtBQWQsQ0FBb0JDLElBQUssSUFBR3hGLElBQUksQ0FBQ3NGLFFBQUwsQ0FBY0MsS0FBZCxDQUFvQkUsTUFBTyxPQUFNSixPQUFRLEVBQTVHO0FBRUEsUUFBSUssU0FBUyxHQUFHQyx1Q0FBZ0IsQ0FBQyxLQUFLNUYsSUFBTixFQUFZQyxJQUFJLENBQUNzRixRQUFqQixFQUEyQjtBQUN2RE0sbUJBQWEsRUFBRTtBQUR3QyxLQUEzQixDQUFoQztBQUdBUCxXQUFPLElBQUssS0FBSUssU0FBVSxFQUExQjtBQUVBLFVBQU0sSUFBSUcsS0FBSixDQUFVUixPQUFWLENBQU47QUFDSDs7QUFFRGYsVUFBUSxDQUFDdEUsSUFBRCxFQUFPeUMsR0FBUCxFQUFZO0FBRWhCLFFBQUl5QyxNQUFNLEdBQUcsS0FBS0EsTUFBTCxDQUFZbEYsSUFBSSxDQUFDRSxJQUFqQixDQUFiOztBQUVBLFFBQUlGLElBQUksS0FBS3lDLEdBQWIsRUFBa0I7QUFDZCxXQUFLcUQsSUFBTCxHQUFZOUYsSUFBWjtBQUNIOztBQUVEQSxRQUFJLENBQUN5QyxHQUFMLEdBQVdBLEdBQVgsQ0FSZ0IsQ0FVaEI7O0FBQ0EsUUFBSSxDQUFDeUMsTUFBTCxFQUFhO0FBQ1QsV0FBS2hDLEtBQUwsQ0FBWSxzQkFBcUJsRCxJQUFJLENBQUNFLElBQUssNkJBQTRCRixJQUFJLENBQUNxQyxJQUFLLEdBQWpGLEVBQXFGckMsSUFBckY7QUFDSDs7QUFFRCxRQUFJK0YsV0FBVyxHQUFHLEtBQUtaLElBQUwsQ0FBVW5GLElBQUksQ0FBQ0UsSUFBZixLQUF3QixFQUExQztBQUNBLFFBQUk4RixVQUFVLEdBQUdELFdBQVcsQ0FBQ3pELEdBQVosQ0FBZ0JpQyxHQUFHLElBQUk7QUFDcEMsVUFBSTBCLE9BQU8sR0FBR2pHLElBQUksQ0FBQ3VFLEdBQUQsQ0FBbEI7QUFDQSxVQUFJVCxNQUFNLEdBQUcsSUFBYjs7QUFFQSxVQUFJLEtBQUtvQyxNQUFMLENBQVlELE9BQVosQ0FBSixFQUEwQjtBQUN0Qm5DLGNBQU0sR0FBRyxLQUFLUSxRQUFMLENBQWMyQixPQUFkLEVBQXVCakcsSUFBdkIsQ0FBVDtBQUNILE9BRkQsTUFHSyxJQUFJbUcsS0FBSyxDQUFDQyxPQUFOLENBQWNILE9BQWQsQ0FBSixFQUE0QjtBQUM3Qm5DLGNBQU0sR0FBR21DLE9BQU8sQ0FBQzNELEdBQVIsQ0FBWStELEdBQUcsSUFBSSxLQUFLL0IsUUFBTCxDQUFjK0IsR0FBZCxFQUFtQnJHLElBQW5CLENBQW5CLENBQVQ7QUFDSCxPQUZJLE1BR0E7QUFDRCxhQUFLa0QsS0FBTCxDQUFZLDRCQUEyQixPQUFPK0MsT0FBUSw0QkFBMkJBLE9BQU8sQ0FBQzVELElBQUssRUFBOUYsRUFBaUc0RCxPQUFqRztBQUNIOztBQUVELGFBQU9uQyxNQUFQO0FBQ0gsS0FmZ0IsQ0FBakI7QUFpQkEsV0FBTyxLQUFLd0MsUUFBTCxDQUFjdEcsSUFBZCxFQUFvQmdHLFVBQXBCLEVBQWdDdkQsR0FBaEMsQ0FBUDtBQUNIOztBQUVENkQsVUFBUSxDQUFDdEcsSUFBRCxFQUFPLEdBQUdrQyxJQUFWLEVBQWdCO0FBQ3BCLFdBQU8sS0FBS2tELFNBQUwsQ0FBZXBGLElBQUksQ0FBQ0UsSUFBcEIsRUFBMEJxRyxLQUExQixDQUFnQyxJQUFoQyxFQUFzQyxDQUFDdkcsSUFBRCxFQUFPLEdBQUdrQyxJQUFWLENBQXRDLENBQVA7QUFDSDs7QUFFRHNDLGdCQUFjLENBQUN4RSxJQUFELEVBQU87QUFDakIsUUFBSUQsSUFBSjs7QUFDQSxZQUFRQyxJQUFJLENBQUNFLElBQWI7QUFDSSxXQUFLLFlBQUw7QUFDSSxlQUFPLEtBQUsrQixHQUFMLENBQVNqQyxJQUFJLENBQUNxQyxJQUFkLEVBQW9CLFFBQXBCLEVBQThCckMsSUFBSSxDQUFDcUMsSUFBbkMsQ0FBUDs7QUFDSixXQUFLLFNBQUw7QUFDSXRDLFlBQUksR0FBR3NCLCtCQUFRLENBQUNtRixNQUFNLENBQUN4RyxJQUFJLENBQUMrQyxLQUFOLENBQVAsQ0FBZjtBQUNBLGVBQU8sS0FBS2QsR0FBTCxDQUFTbEMsSUFBVCxFQUFlLFFBQWYsRUFBeUJ5RyxNQUFNLENBQUN4RyxJQUFJLENBQUMrQyxLQUFOLENBQS9CLENBQVA7O0FBQ0o7QUFDSSxhQUFLRyxLQUFMLENBQVksOEJBQTZCbEQsSUFBSSxDQUFDRSxJQUFLLEdBQW5ELEVBQXVERixJQUF2RDtBQVBSO0FBU0g7O0FBRURrRyxRQUFNLENBQUNsRyxJQUFELEVBQU87QUFDVCxRQUFJQSxJQUFJLElBQUksSUFBWixFQUFrQjtBQUNkLGFBQU8sS0FBUDtBQUNIOztBQUNELFdBQU8sT0FBT0EsSUFBUCxLQUFnQixRQUFoQixJQUE0QixPQUFPQSxJQUFJLENBQUNFLElBQVosS0FBcUIsUUFBeEQ7QUFDSDs7QUFFRCtCLEtBQUcsQ0FBQ2xDLElBQUQsRUFBT0csSUFBUCxFQUFhNkMsS0FBYixFQUFvQjtBQUNuQixXQUFPO0FBQ0hoRCxVQURHO0FBRUhHLFVBRkc7QUFHSDZDLFdBSEc7QUFJSEYsY0FBUSxFQUFFNEQsU0FBUyxDQUFDckUsTUFBVixHQUFtQjtBQUoxQixLQUFQO0FBTUg7O0FBRUQ0QixXQUFTLENBQUMwQyxJQUFELEVBQU87QUFDWixXQUFPckYsK0JBQVEsQ0FBQ3FGLElBQUQsQ0FBZjtBQUNIOztBQTVGUzs7QUErRkMscUVBQVUzRyxJQUFWLEVBQWdCO0FBRTNCLE1BQUksQ0FBQ0EsSUFBTCxFQUFXO0FBQ1AsV0FBTztBQUNIQSxVQUFJLEVBQUU7QUFESCxLQUFQO0FBR0g7O0FBRUQsTUFBSUMsSUFBSjs7QUFDQSxNQUFJO0FBQ0FBLFFBQUksR0FBRzJHLG1EQUFLLENBQUM1RyxJQUFELEVBQU87QUFDZjZHLGVBQVMsRUFBRTtBQURJLEtBQVAsQ0FBWjtBQUdILEdBSkQsQ0FLQSxPQUFPQyxDQUFQLEVBQVU7QUFDTixVQUFNLElBQUloQixLQUFKLENBQVcsMkNBQTBDOUYsSUFBSyxNQUFLOEcsQ0FBQyxDQUFDQyxLQUFNLEVBQXZFLENBQU47QUFDSDs7QUFFRCxNQUFJQyxPQUFPLEdBQUcsSUFBSS9CLDhCQUFKLENBQVk7QUFDdEJqRjtBQURzQixHQUFaLENBQWQ7QUFJQSxTQUFPO0FBQ0hpSCxPQUFHLEVBQUVoSCxJQUFJLENBQUMyQixVQURQO0FBRUgsT0FBR29GLE9BQU8sQ0FBQ3pDLFFBQVIsQ0FBaUJ0RSxJQUFqQixFQUF1QkEsSUFBdkI7QUFGQSxHQUFQO0FBSUgsQzs7QUNoWEQ7Ozs7QUFLQTtBQUVBLE1BQU1pSCxRQUFRLEdBQUcsQ0FBQyxRQUFELEVBQVcsY0FBWCxDQUFqQjs7QUFFQSxTQUFTQyxpQkFBVCxDQUEyQmxILElBQTNCLEVBQWlDO0FBQzdCLE1BQUlBLElBQUksQ0FBQ0UsSUFBTCxLQUFjLENBQWQsSUFBbUJGLElBQUksQ0FBQ21ILFlBQTVCLEVBQTBDO0FBQ3RDLFVBQU1DLFdBQVcsR0FBR3BILElBQUksQ0FBQ3FILFFBQUwsQ0FBY0MsS0FBZCxJQUF1QixFQUEzQztBQUNBLFVBQU1ILFlBQVksR0FBR0ksc0JBQVMsQ0FBQ3ZILElBQUksQ0FBQ21ILFlBQU4sQ0FBVCxDQUE2QnBILElBQWxEO0FBQ0FDLFFBQUksQ0FBQ3FILFFBQUwsQ0FBY0MsS0FBZCxHQUF1QixXQUFVRixXQUFZLE1BQUtELFlBQWEsTUFBL0Q7QUFDQUYsWUFBUSxDQUFDTyxPQUFULENBQWlCakQsR0FBRyxJQUFJLE9BQU92RSxJQUFJLENBQUNxSCxRQUFMLENBQWM5QyxHQUFkLENBQS9CO0FBQ0g7QUFDSjs7QUFFYztBQUNYMkM7QUFEVyxDQUFmLEU7Ozs7OztBQ2xCQTs7OztBQUtBO0FBQ0E7QUFFQSxNQUFNRCxjQUFRLEdBQUcsQ0FBQyxRQUFELEVBQVcsY0FBWCxFQUEyQixRQUEzQixDQUFqQjs7QUFFQSxTQUFTQyx1QkFBVCxDQUEyQmxILElBQTNCLEVBQWlDO0FBQzdCLFFBQU15SCxLQUFLLEdBQUd6SCxJQUFJLENBQUNxSCxRQUFMLENBQWMsUUFBZCxDQUFkOztBQUNBLE1BQUlySCxJQUFJLENBQUNFLElBQUwsS0FBYyxDQUFkLEtBQW9CRixJQUFJLENBQUMwSCxZQUFMLElBQXFCRCxLQUF6QyxDQUFKLEVBQXFEO0FBQ2pELFVBQU1FLFdBQVcsR0FBRzNILElBQUksQ0FBQzJILFdBQUwsSUFBb0IsTUFBeEM7QUFDQSxVQUFNRCxZQUFZLEdBQUcxSCxJQUFJLENBQUMwSCxZQUFMLEdBQW9CSCxzQkFBUyxDQUFDdkgsSUFBSSxDQUFDMEgsWUFBTixDQUFULENBQTZCM0gsSUFBakQsR0FBd0QsSUFBN0UsQ0FGaUQsQ0FHakQ7O0FBQ0FDLFFBQUksQ0FBQ3FILFFBQUwsQ0FBY08sS0FBZCxHQUF1QixVQUFTQyxtQ0FBYyxDQUFDRixXQUFELENBQWMsS0FBSUQsWUFBYSxHQUFFRCxLQUFLLEdBQUksS0FBSUYsc0JBQVMsQ0FBQ0UsS0FBRCxDQUFULENBQWlCMUgsSUFBSyxFQUE5QixHQUFrQyxFQUFHLE1BQXpIO0FBQ0FrSCxrQkFBUSxDQUFDTyxPQUFULENBQWlCakQsR0FBRyxJQUFJLE9BQU92RSxJQUFJLENBQUNxSCxRQUFMLENBQWM5QyxHQUFkLENBQS9CO0FBQ0g7QUFDSjs7QUFFYztBQUNYMkMsbUJBQWlCQTtBQUROLENBQWYsRTs7QUNyQkE7Ozs7QUFLQTtBQUVBLE1BQU1ZLE1BQU0sR0FBRyxjQUFmOztBQUVBLFNBQVNaLHNCQUFULENBQTJCbEgsSUFBM0IsRUFBaUM7QUFDN0IsTUFBSUEsSUFBSSxDQUFDRSxJQUFMLEtBQWMsQ0FBbEIsRUFBcUI7QUFDakI7QUFDSDs7QUFDRCxRQUFNaUYsSUFBSSxHQUFHUixNQUFNLENBQUNRLElBQVAsQ0FBWW5GLElBQUksQ0FBQ3FILFFBQWpCLEVBQTJCdEYsTUFBM0IsQ0FBa0NnRyxDQUFDLElBQUlELE1BQU0sQ0FBQ3pFLElBQVAsQ0FBWTBFLENBQVosQ0FBdkMsQ0FBYjs7QUFDQSxPQUFLLE1BQU14RCxHQUFYLElBQWtCWSxJQUFsQixFQUF3QjtBQUNwQixVQUFNcEMsS0FBSyxHQUFHL0MsSUFBSSxDQUFDcUgsUUFBTCxDQUFjOUMsR0FBZCxDQUFkO0FBQ0EsV0FBT3ZFLElBQUksQ0FBQ3FILFFBQUwsQ0FBYzlDLEdBQWQsQ0FBUDtBQUNBLFVBQU10QyxHQUFHLEdBQUdzRixzQkFBUyxDQUFDeEUsS0FBRCxDQUFyQjtBQUNBLFVBQU1oRCxJQUFJLEdBQUdrQyxHQUFHLENBQUNsQyxJQUFqQjtBQUNBQyxRQUFJLENBQUNxSCxRQUFMLENBQWM5QyxHQUFHLENBQUN2QyxPQUFKLENBQVk4RixNQUFaLEVBQW9CLEVBQXBCLENBQWQsSUFBMEMsTUFBSy9ILElBQUssS0FBcEQ7QUFDSDs7QUFFRCxNQUFJQyxJQUFJLENBQUNxSCxRQUFMLENBQWMsUUFBZCxDQUFKLEVBQTZCO0FBQ3pCLFVBQU1XLEtBQUssR0FBR2hJLElBQUksQ0FBQ3FILFFBQUwsQ0FBYyxRQUFkLENBQWQ7QUFDQXJILFFBQUksQ0FBQ3FILFFBQUwsQ0FBYyxRQUFkLElBQTJCLE1BQUtFLHNCQUFTLENBQUNTLEtBQUQsQ0FBVCxDQUFpQmpJLElBQUssS0FBdEQ7QUFDQSxXQUFPQyxJQUFJLENBQUNxSCxRQUFMLENBQWMsUUFBZCxDQUFQO0FBQ0g7QUFDSjs7QUFFYztBQUNYSCxtQkFBaUJBO0FBRE4sQ0FBZixFOztBQzdCQTs7OztBQUtBOztBQUVBLFNBQVNBLG9CQUFULENBQTJCbEgsSUFBM0IsRUFBaUM7QUFDN0IsTUFBSUEsSUFBSSxDQUFDRSxJQUFMLEtBQWMsQ0FBbEIsRUFBcUI7QUFDakI7QUFDSDs7QUFFRCxNQUFJRixJQUFJLENBQUNpSSxFQUFULEVBQWE7QUFDVGpJLFFBQUksQ0FBQ3FILFFBQUwsQ0FBYyxNQUFkLElBQXdCRSxzQkFBUyxDQUFDdkgsSUFBSSxDQUFDaUksRUFBTixDQUFULENBQW1CbEksSUFBM0M7QUFDQSxXQUFPQyxJQUFJLENBQUNxSCxRQUFMLENBQWMsTUFBZCxDQUFQO0FBQ0g7O0FBRUQsTUFBSXJILElBQUksQ0FBQ2tJLE1BQVQsRUFBaUI7QUFDYmxJLFFBQUksQ0FBQ3FILFFBQUwsQ0FBYyxXQUFkLElBQTZCRSxzQkFBUyxDQUFDdkgsSUFBSSxDQUFDa0ksTUFBTixDQUFULENBQXVCbkksSUFBcEQ7QUFDQSxXQUFPQyxJQUFJLENBQUNxSCxRQUFMLENBQWMsV0FBZCxDQUFQO0FBQ0g7O0FBRUQsTUFBSXJILElBQUksQ0FBQ21JLElBQVQsRUFBZTtBQUNYbkksUUFBSSxDQUFDcUgsUUFBTCxDQUFjLFFBQWQsSUFBMEJySCxJQUFJLENBQUNtSSxJQUEvQjtBQUNBLFdBQU9uSSxJQUFJLENBQUNxSCxRQUFMLENBQWMsUUFBZCxDQUFQO0FBQ0g7QUFDSjs7QUFFYztBQUNYSCxtQkFBaUJBO0FBRE4sQ0FBZixFOztBQzVCQTs7OztBQUtBOztBQUVBLFNBQVNBLHFCQUFULENBQTJCbEgsSUFBM0IsRUFBaUM7QUFDN0IsTUFBSUEsSUFBSSxDQUFDRSxJQUFMLEtBQWMsQ0FBZCxJQUFtQixDQUFDRixJQUFJLENBQUNvSSxHQUE3QixFQUFrQztBQUM5QjtBQUNIOztBQUVELE1BQUlDLEVBQUUsR0FBR3JJLElBQUksQ0FBQ3NJLEtBQWQ7O0FBRUEsTUFBSXRJLElBQUksQ0FBQ3VJLFNBQVQsRUFBb0I7QUFDaEJGLE1BQUUsSUFBSyxJQUFHckksSUFBSSxDQUFDdUksU0FBVSxFQUF6QjtBQUNIOztBQUVERixJQUFFLElBQUssVUFBU3JJLElBQUksQ0FBQ29JLEdBQUksR0FBekI7O0FBRUEsTUFBSXBJLElBQUksQ0FBQ3VFLEdBQVQsRUFBYztBQUNWLFVBQU1pRSxXQUFXLEdBQUdqQixzQkFBUyxDQUFDdkgsSUFBSSxDQUFDdUUsR0FBTixDQUE3QixDQURVLENBRVY7O0FBQ0E4RCxNQUFFLElBQUlHLFdBQVcsQ0FBQ3hCLEdBQVosQ0FBZ0I5RyxJQUFoQixLQUF5QixZQUF6QixHQUF5QyxZQUFXRixJQUFJLENBQUN1RSxHQUFJLEVBQTdELEdBQWlFLEVBQXZFO0FBQ0g7O0FBRUR2RSxNQUFJLENBQUNxSCxRQUFMLENBQWMsT0FBZCxJQUF5QmdCLEVBQXpCO0FBRUEsU0FBT3JJLElBQUksQ0FBQ3FILFFBQUwsQ0FBYyxPQUFkLENBQVA7QUFDQSxTQUFPckgsSUFBSSxDQUFDcUgsUUFBTCxDQUFjLEtBQWQsQ0FBUDtBQUNBLFNBQU9ySCxJQUFJLENBQUNxSCxRQUFMLENBQWMsTUFBZCxDQUFQO0FBQ0EsU0FBT3JILElBQUksQ0FBQ3FILFFBQUwsQ0FBYyxZQUFkLENBQVA7QUFDSDs7QUFFYztBQUNYSCxtQkFBaUJBO0FBRE4sQ0FBZixFOztBQ2xDQTs7OztBQUtBO0FBRUEsTUFBTXVCLE9BQU8sR0FBRyxZQUFoQjs7QUFFQSxTQUFTdkIsdUJBQVQsQ0FBMkJsSCxJQUEzQixFQUFpQztBQUM3QixRQUFNMEksVUFBVSxHQUFHMUksSUFBSSxDQUFDMkksU0FBTCxDQUFlNUcsTUFBZixDQUFzQmdHLENBQUMsSUFBSVUsT0FBTyxDQUFDcEYsSUFBUixDQUFhMEUsQ0FBQyxDQUFDMUYsSUFBZixDQUEzQixDQUFuQjs7QUFDQSxPQUFLLE1BQU11RyxJQUFYLElBQW1CRixVQUFuQixFQUErQjtBQUMzQixXQUFPMUksSUFBSSxDQUFDcUgsUUFBTCxDQUFjdUIsSUFBSSxDQUFDdkcsSUFBbkIsQ0FBUDtBQUNBLFVBQU0sQ0FBQ0EsSUFBRCxFQUFPLEdBQUd3RyxTQUFWLElBQXVCRCxJQUFJLENBQUN2RyxJQUFMLENBQVV5RyxLQUFWLENBQWdCLEdBQWhCLENBQTdCO0FBQ0EsVUFBTUMsWUFBWSxHQUFHSCxJQUFJLENBQUM3RixLQUFMLEdBQWF3RSxzQkFBUyxDQUFDcUIsSUFBSSxDQUFDN0YsS0FBTixDQUFULENBQXNCaEQsSUFBbkMsR0FBMEMsT0FBL0Q7QUFDQUMsUUFBSSxDQUFDcUgsUUFBTCxDQUFlLE1BQUtoRixJQUFJLENBQUNMLE9BQUwsQ0FBYXlHLE9BQWIsRUFBc0IsRUFBdEIsQ0FBMEIsRUFBOUMsSUFDTyxHQUFFSSxTQUFTLENBQUN2RyxHQUFWLENBQWMwRyxDQUFDLElBQUssR0FBRUEsQ0FBRSxHQUF4QixFQUE0QnpHLElBQTVCLENBQWlDLEVBQWpDLENBQXFDLEdBQUV3RyxZQUFhLEVBRDdEO0FBRUg7QUFDSjs7QUFFYztBQUNYN0IsbUJBQWlCQTtBQUROLENBQWYsRTs7QUNwQkE7Ozs7QUFLQSxTQUFTQSxzQkFBVCxDQUEyQmxILElBQTNCLEVBQWlDO0FBRTdCLE1BQUlBLElBQUksQ0FBQ3FILFFBQUwsSUFBaUJySCxJQUFJLENBQUNxSCxRQUFMLENBQWMsa0JBQWQsQ0FBckIsRUFBd0Q7QUFDcERySCxRQUFJLENBQUNxSCxRQUFMLENBQWMsUUFBZCxJQUEwQnJILElBQUksQ0FBQ3FILFFBQUwsQ0FBYyxrQkFBZCxDQUExQjtBQUNBLFdBQU9ySCxJQUFJLENBQUNxSCxRQUFMLENBQWMsa0JBQWQsQ0FBUDtBQUNIOztBQUVELE1BQUlySCxJQUFJLENBQUNxSCxRQUFMLElBQWlCckgsSUFBSSxDQUFDcUgsUUFBTCxDQUFjLGFBQWQsQ0FBckIsRUFBbUQ7QUFDL0NySCxRQUFJLENBQUNxSCxRQUFMLENBQWMsUUFBZCxJQUEyQixPQUFNckgsSUFBSSxDQUFDcUgsUUFBTCxDQUFjLGFBQWQsQ0FBNkIsR0FBOUQ7QUFDQSxXQUFPckgsSUFBSSxDQUFDcUgsUUFBTCxDQUFjLGtCQUFkLENBQVA7QUFDSDs7QUFFRCxNQUFJckgsSUFBSSxDQUFDRSxJQUFMLEtBQWMsQ0FBZCxJQUFtQkYsSUFBSSxDQUFDcUgsUUFBTCxDQUFjLFFBQWQsQ0FBdkIsRUFBZ0Q7QUFDNUMsVUFBTXRFLEtBQUssR0FBRy9DLElBQUksQ0FBQ2lKLFVBQUwsQ0FBZ0JDLElBQWhCLENBQXFCQyxDQUFDLElBQUlBLENBQUMsQ0FBQzlHLElBQUYsS0FBVyxNQUFyQyxFQUE2Q1UsS0FBM0Q7QUFDQSxXQUFPL0MsSUFBSSxDQUFDcUgsUUFBTCxDQUFjLFFBQWQsQ0FBUDtBQUNBckgsUUFBSSxDQUFDcUgsUUFBTCxDQUFjLFFBQWQsSUFBMkIsTUFBS3RFLEtBQU0sS0FBdEM7QUFDQS9DLFFBQUksQ0FBQ29KLFFBQUwsR0FBZ0IsRUFBaEI7QUFDSDs7QUFFRCxNQUFJcEosSUFBSSxDQUFDRSxJQUFMLEtBQWMsQ0FBZCxJQUFtQkYsSUFBSSxDQUFDcUgsUUFBTCxDQUFjLFFBQWQsQ0FBdkIsRUFBZ0Q7QUFDNUMsVUFBTXRFLEtBQUssR0FBRy9DLElBQUksQ0FBQ2lKLFVBQUwsQ0FBZ0JDLElBQWhCLENBQXFCQyxDQUFDLElBQUlBLENBQUMsQ0FBQzlHLElBQUYsS0FBVyxNQUFyQyxFQUE2Q1UsS0FBM0Q7QUFDQSxXQUFPL0MsSUFBSSxDQUFDcUgsUUFBTCxDQUFjLFFBQWQsQ0FBUDtBQUNBckgsUUFBSSxDQUFDb0osUUFBTCxHQUFnQixDQUFDO0FBQ2JsSixVQUFJLEVBQUUsQ0FETztBQUVibUosVUFBSSxFQUFHLE1BQUt0RyxLQUFNO0FBRkwsS0FBRCxDQUFoQjtBQUlIO0FBQ0o7O0FBRWM7QUFDWG1FLG1CQUFpQkE7QUFETixDQUFmLEU7O0FDbENBOzs7O0FBS0EsU0FBU0EscUJBQVQsQ0FBMkJsSCxJQUEzQixFQUFpQ3NKLE9BQWpDLEVBQTBDO0FBQ3RDLE1BQUl0SixJQUFJLENBQUNFLElBQUwsS0FBYyxDQUFkLElBQW1CLENBQUNGLElBQUksQ0FBQ3FILFFBQUwsQ0FBYzVFLEdBQWYsSUFBc0IsQ0FBQ3pDLElBQUksQ0FBQ3FILFFBQUwsQ0FBYyxNQUFkLENBQTlDLEVBQXFFO0FBQ2pFO0FBQ0g7O0FBRUQsUUFBTTVFLEdBQUcsR0FBR3pDLElBQUksQ0FBQ3FILFFBQUwsQ0FBYzVFLEdBQTFCOztBQUNBLE1BQUlBLEdBQUosRUFBUztBQUNMLFdBQU96QyxJQUFJLENBQUNxSCxRQUFMLENBQWM1RSxHQUFyQjtBQUNBekMsUUFBSSxDQUFDcUgsUUFBTCxDQUFjLE9BQWQsSUFBeUI1RSxHQUF6QjtBQUVBLFVBQU04RyxJQUFJLEdBQUc7QUFDVGxILFVBQUksRUFBRUksR0FERztBQUVUcUQsVUFBSSxFQUFFOUYsSUFBSSxDQUFDd0osTUFBTCxHQUFjQyxTQUFkLEdBQTBCO0FBRnZCLEtBQWI7QUFLQUgsV0FBTyxDQUFDSSxJQUFSLENBQWFDLElBQWIsQ0FBa0JKLElBQWxCO0FBQ0g7O0FBRUQsUUFBTUssT0FBTyxHQUFHNUosSUFBSSxDQUFDcUgsUUFBTCxDQUFjLE1BQWQsQ0FBaEI7O0FBQ0EsTUFBSXVDLE9BQUosRUFBYTtBQUNULFdBQU81SixJQUFJLENBQUNxSCxRQUFMLENBQWMsTUFBZCxDQUFQO0FBQ0FySCxRQUFJLENBQUNxSCxRQUFMLENBQWMsT0FBZCxJQUEwQixNQUFLdUMsT0FBUSxLQUF2QztBQUNIO0FBQ0o7O0FBRWM7QUFDWDFDLG1CQUFpQkE7QUFETixDQUFmLEU7O0FDOUJBOzs7O0FBS0E7O0FBRUEsU0FBU0EsbUNBQVQsQ0FBMkJsSCxJQUEzQixFQUFpQ3NKLE9BQWpDLEVBQTBDO0FBQ3RDLE1BQUksRUFBRXRKLElBQUksQ0FBQ0UsSUFBTCxLQUFjLENBQWQsSUFBbUJGLElBQUksQ0FBQzZKLEdBQUwsS0FBYSxXQUFsQyxDQUFKLEVBQW9EO0FBQ2hEO0FBQ0g7O0FBRUQsTUFBSUMsRUFBRSxHQUFHOUosSUFBSSxDQUFDcUgsUUFBTCxDQUFjeUMsRUFBdkI7QUFDQSxTQUFPOUosSUFBSSxDQUFDcUgsUUFBTCxDQUFjeUMsRUFBckI7O0FBRUEsTUFBSSxDQUFDQSxFQUFFLENBQUNDLFVBQUgsQ0FBYyxJQUFkLENBQUwsRUFBMEI7QUFDdEIvSixRQUFJLENBQUM2SixHQUFMLEdBQVc3SixJQUFJLENBQUNxSCxRQUFMLENBQWN5QyxFQUF6QjtBQUNBO0FBQ0g7O0FBRUQsUUFBTS9HLEtBQUssR0FBRytHLEVBQUUsQ0FBQ0UsS0FBSCxDQUFTLENBQVQsRUFBWUYsRUFBRSxDQUFDMUgsTUFBSCxHQUFZLENBQXhCLEVBQTJCNkgsSUFBM0IsRUFBZDtBQUNBLFFBQU1DLElBQUksR0FBR3ZELG1EQUFLLENBQUM1RCxLQUFELEVBQVE7QUFDdEI2RCxhQUFTLEVBQUU7QUFEVyxHQUFSLENBQWxCOztBQUlBLE1BQUk1RyxJQUFJLENBQUNpSSxFQUFMLElBQVdqSSxJQUFJLENBQUNrSSxNQUFoQixJQUEwQmxJLElBQUksQ0FBQ21JLElBQW5DLEVBQXlDO0FBQ3JDbUIsV0FBTyxDQUFDcEcsS0FBUixDQUFjLDBDQUFkO0FBQ0E7QUFDSDs7QUFFRCxNQUNJZ0gsSUFBSSxDQUFDdkksVUFBTCxDQUFnQnpCLElBQWhCLEtBQXlCLHVCQUF6QixJQUNHZ0ssSUFBSSxDQUFDdkksVUFBTCxDQUFnQjJCLFVBQWhCLENBQTJCcEQsSUFBM0IsS0FBb0MsU0FEdkMsSUFFR2dLLElBQUksQ0FBQ3ZJLFVBQUwsQ0FBZ0I0QixTQUFoQixDQUEwQnJELElBQTFCLEtBQW1DLFNBSDFDLEVBSUU7QUFDRSxVQUFNaUssWUFBWSxHQUFHRCxJQUFJLENBQUN2SSxVQUFMLENBQWdCMEIsSUFBaEIsQ0FBcUJpQyxRQUExQztBQUNBLFVBQU1qQyxJQUFJLEdBQUdOLEtBQUssQ0FBQ2lILEtBQU4sQ0FBWUcsWUFBWSxDQUFDNUUsS0FBYixDQUFtQjZFLE1BQS9CLEVBQXVDRCxZQUFZLENBQUNFLEdBQWIsQ0FBaUJELE1BQXhELENBQWI7QUFDQSxVQUFNRSxLQUFLLEdBQUcsRUFDVixHQUFHdEssSUFBSSxDQUFDcUgsUUFERTtBQUVWLGdCQUFVO0FBRkEsS0FBZDtBQUlBckgsUUFBSSxDQUFDNkosR0FBTCxHQUFXSyxJQUFJLENBQUN2SSxVQUFMLENBQWdCMkIsVUFBaEIsQ0FBMkJQLEtBQXRDO0FBQ0EvQyxRQUFJLENBQUNxSCxRQUFMLENBQWMsTUFBZCxJQUF3QmhFLElBQXhCO0FBQ0FyRCxRQUFJLENBQUN1SyxZQUFMLEdBQW9CLENBQUM7QUFDakJDLFNBQUcsRUFBRW5ILElBRFk7QUFFakJvSCxXQUFLLEVBQUV6SztBQUZVLEtBQUQsRUFHakI7QUFDQ3lLLFdBQUssRUFBRSxFQUNILEdBQUd6SyxJQURBO0FBRUhxSCxnQkFBUSxFQUFFaUQsS0FGUDtBQUdIVCxXQUFHLEVBQUVLLElBQUksQ0FBQ3ZJLFVBQUwsQ0FBZ0I0QixTQUFoQixDQUEwQlI7QUFINUI7QUFEUixLQUhpQixDQUFwQjtBQVVIO0FBQ0o7O0FBRWM7QUFDWG1FLG1CQUFpQkE7QUFETixDQUFmLEU7O0FDeERBOzs7OztBQUtBOzs7QUFHTyxNQUFNd0QsU0FBUyxHQUFHO0FBQ3JCQyxNQUFJLEVBQUUsSUFEZTtBQUVyQkMsTUFBSSxFQUFFLElBRmU7QUFHckJDLFVBQVEsRUFBRSxJQUhXO0FBSXJCQyxJQUFFLEVBQUUsSUFKaUI7QUFLckJDLEtBQUcsRUFBRSxJQUxnQjtBQU1yQkMsU0FBTyxFQUFFLElBTlk7QUFPckJDLE9BQUssRUFBRSxJQVBjO0FBUXJCQyxPQUFLLEVBQUUsSUFSYztBQVNyQkMsSUFBRSxFQUFFLElBVGlCO0FBVXJCQyxLQUFHLEVBQUUsSUFWZ0I7QUFXckJDLE9BQUssRUFBRSxJQVhjO0FBWXJCQyxTQUFPLEVBQUUsSUFaWTtBQWFyQkMsUUFBTSxFQUFFLElBYmE7QUFjckJDLE1BQUksRUFBRSxJQWRlO0FBZXJCQyxNQUFJLEVBQUUsSUFmZTtBQWdCckJDLE9BQUssRUFBRSxJQWhCYztBQWlCckJDLFFBQU0sRUFBRSxJQWpCYTtBQWtCckJDLE9BQUssRUFBRSxJQWxCYztBQW1CckJDLEtBQUcsRUFBRTtBQW5CZ0IsQ0FBbEI7QUFzQkEsTUFBTUMsV0FBVyxHQUFHO0FBQ3ZCQyxpQkFBZSxFQUFFLElBRE07QUFFdkJDLE9BQUssRUFBRSxJQUZnQjtBQUd2QkMsV0FBUyxFQUFFLElBSFk7QUFJdkJDLFVBQVEsRUFBRSxJQUphO0FBS3ZCQyxTQUFPLEVBQUUsSUFMYztBQU12QkMsU0FBTyxFQUFFLElBTmM7QUFPdkJDLFVBQVEsRUFBRSxJQVBhO0FBUXZCQyxTQUFPLEVBQUUsSUFSYztBQVN2QkMsU0FBTyxFQUFFLElBVGM7QUFVdkJDLGdCQUFjLEVBQUUsSUFWTztBQVd2QkMsY0FBWSxFQUFFLElBWFM7QUFZdkJDLGlCQUFlLEVBQUUsSUFaTTtBQWF2QkMsT0FBSyxFQUFFLElBYmdCO0FBY3ZCQyxVQUFRLEVBQUUsSUFkYTtBQWV2QkMsU0FBTyxFQUFFLElBZmM7QUFnQnZCQyxnQkFBYyxFQUFFLElBaEJPO0FBaUJ2QkMsUUFBTSxFQUFFLElBakJlO0FBa0J2QkMsZUFBYSxFQUFFLElBbEJRO0FBbUJ2QkMsT0FBSyxFQUFFLElBbkJnQjtBQW9CdkJDLE9BQUssRUFBRSxJQXBCZ0I7QUFxQnZCQyxXQUFTLEVBQUUsSUFyQlk7QUFzQnZCQyxNQUFJLEVBQUUsSUF0QmlCO0FBdUJ2QkMsVUFBUSxFQUFFLElBdkJhO0FBd0J2QkMsT0FBSyxFQUFFLElBeEJnQjtBQXlCdkJDLFFBQU0sRUFBRSxJQXpCZTtBQTBCdkJDLFVBQVEsRUFBRSxJQTFCYTtBQTJCdkJDLFNBQU8sRUFBRSxJQTNCYztBQTRCdkJDLFlBQVUsRUFBRSxJQTVCVztBQTZCdkJDLFFBQU0sRUFBRSxJQTdCZTtBQThCdkJDLE1BQUksRUFBRSxJQTlCaUI7QUErQnZCQyxhQUFXLEVBQUUsSUEvQlU7QUFnQ3ZCQyxVQUFRLEVBQUUsSUFoQ2E7QUFpQ3ZCQyxVQUFRLEVBQUUsSUFqQ2E7QUFrQ3ZCQyxVQUFRLEVBQUUsSUFsQ2E7QUFtQ3ZCQyxRQUFNLEVBQUUsSUFuQ2U7QUFvQ3ZCQyxVQUFRLEVBQUUsSUFwQ2E7QUFxQ3ZCQyxVQUFRLEVBQUUsSUFyQ2E7QUFzQ3ZCQyxVQUFRLEVBQUUsSUF0Q2E7QUF1Q3ZCQyxXQUFTLEVBQUUsSUF2Q1k7QUF3Q3ZCQyxXQUFTLEVBQUUsSUF4Q1k7QUF5Q3ZCQyxlQUFhLEVBQUUsSUF6Q1E7QUEwQ3ZCQyxTQUFPLEVBQUU7QUExQ2MsQ0FBcEI7QUE4Q0EsTUFBTUMsV0FBVyxHQUFHO0FBQ3ZCLFlBQVU7QUFEYSxDQUFwQjtBQUtBLE1BQU1DLE9BQU8sR0FBRztBQUNuQkMsTUFBSSxFQUFFLElBRGE7QUFFbkJDLE1BQUksRUFBRSxJQUZhO0FBR25CaEUsTUFBSSxFQUFFLElBSGE7QUFJbkJpRSxNQUFJLEVBQUUsSUFKYTtBQUtuQnJELE1BQUksRUFBRSxJQUxhO0FBTW5CQyxNQUFJLEVBQUUsSUFOYTtBQU9uQjdELE9BQUssRUFBRSxJQVBZO0FBUW5Ca0gsT0FBSyxFQUFFLElBUlk7QUFTbkJDLFNBQU8sRUFBRSxJQVRVO0FBVW5CQyxTQUFPLEVBQUUsSUFWVTtBQVduQkMsT0FBSyxFQUFFLElBWFk7QUFZbkJDLFFBQU0sRUFBRSxJQVpXO0FBYW5CQyxRQUFNLEVBQUUsSUFiVztBQWNuQkMsSUFBRSxFQUFFLElBZGU7QUFlbkJDLElBQUUsRUFBRSxJQWZlO0FBZ0JuQkMsSUFBRSxFQUFFLElBaEJlO0FBaUJuQkMsSUFBRSxFQUFFLElBakJlO0FBa0JuQkMsSUFBRSxFQUFFLElBbEJlO0FBbUJuQkMsSUFBRSxFQUFFLElBbkJlO0FBb0JuQkMsUUFBTSxFQUFFLElBcEJXO0FBcUJuQkMsS0FBRyxFQUFFLElBckJjO0FBc0JuQkMsU0FBTyxFQUFFLElBdEJVO0FBdUJuQkMsS0FBRyxFQUFFLElBdkJjO0FBd0JuQkMsSUFBRSxFQUFFLElBeEJlO0FBeUJuQkMsSUFBRSxFQUFFLElBekJlO0FBMEJuQkMsSUFBRSxFQUFFLElBMUJlO0FBMkJuQkMsWUFBVSxFQUFFLElBM0JPO0FBNEJuQkMsUUFBTSxFQUFFLElBNUJXO0FBNkJuQi9FLElBQUUsRUFBRSxJQTdCZTtBQThCbkJDLEtBQUcsRUFBRSxJQTlCYztBQStCbkIrRSxJQUFFLEVBQUUsSUEvQmU7QUFnQ25CQyxNQUFJLEVBQUUsSUFoQ2E7QUFpQ25CQyxJQUFFLEVBQUUsSUFqQ2U7QUFrQ25CQyxHQUFDLEVBQUUsSUFsQ2dCO0FBbUNuQnhPLEtBQUcsRUFBRSxJQW5DYztBQW9DbkJ5TyxJQUFFLEVBQUUsSUFwQ2U7QUFxQ25CalAsR0FBQyxFQUFFLElBckNnQjtBQXNDbkJrUCxHQUFDLEVBQUUsSUF0Q2dCO0FBdUNuQkMsTUFBSSxFQUFFLElBdkNhO0FBd0NuQkMsS0FBRyxFQUFFLElBeENjO0FBeUNuQkMsS0FBRyxFQUFFLElBekNjO0FBMENuQjdGLElBQUUsRUFBRSxJQTFDZTtBQTJDbkI4RixNQUFJLEVBQUUsSUEzQ2E7QUE0Q25CN1EsTUFBSSxFQUFFLElBNUNhO0FBNkNuQjJHLE1BQUksRUFBRSxJQTdDYTtBQThDbkJtSyxLQUFHLEVBQUUsSUE5Q2M7QUErQ25CQyxJQUFFLEVBQUUsSUEvQ2U7QUFnRG5Cak4sR0FBQyxFQUFFLElBaERnQjtBQWlEbkJrTixLQUFHLEVBQUUsSUFqRGM7QUFrRG5CelIsTUFBSSxFQUFFLElBbERhO0FBbURuQjBSLEdBQUMsRUFBRSxJQW5EZ0I7QUFvRG5CQyxJQUFFLEVBQUUsSUFwRGU7QUFxRG5CQyxJQUFFLEVBQUUsSUFyRGU7QUFzRG5CQyxLQUFHLEVBQUUsSUF0RGM7QUF1RG5CQyxNQUFJLEVBQUUsSUF2RGE7QUF3RG5CQyxHQUFDLEVBQUUsSUF4RGdCO0FBeURuQkMsTUFBSSxFQUFFLElBekRhO0FBMERuQkMsT0FBSyxFQUFFLElBMURZO0FBMkRuQkMsTUFBSSxFQUFFLElBM0RhO0FBNERuQkMsUUFBTSxFQUFFLElBNURXO0FBNkRuQkMsS0FBRyxFQUFFLElBN0RjO0FBOERuQkMsS0FBRyxFQUFFLElBOURjO0FBK0RuQkMsTUFBSSxFQUFFLElBL0RhO0FBZ0VuQkMsR0FBQyxFQUFFLElBaEVnQjtBQWlFbkJDLEtBQUcsRUFBRSxJQWpFYztBQWtFbkJqRyxLQUFHLEVBQUUsSUFsRWM7QUFtRW5CbEIsTUFBSSxFQUFFLElBbkVhO0FBb0VuQm9ILE9BQUssRUFBRSxJQXBFWTtBQXFFbkJ6UCxLQUFHLEVBQUUsSUFyRWM7QUFzRW5Cc0osT0FBSyxFQUFFLElBdEVZO0FBdUVuQm9HLE9BQUssRUFBRSxJQXZFWTtBQXdFbkIvRyxPQUFLLEVBQUUsSUF4RVk7QUF5RW5CdkksUUFBTSxFQUFFLElBekVXO0FBMEVuQmdKLE9BQUssRUFBRSxJQTFFWTtBQTJFbkJDLFFBQU0sRUFBRSxJQTNFVztBQTRFbkJzRyxRQUFNLEVBQUUsSUE1RVc7QUE2RW5CQyxRQUFNLEVBQUUsSUE3RVc7QUE4RW5CQyxVQUFRLEVBQUUsSUE5RVM7QUErRW5CQyxLQUFHLEVBQUUsSUEvRWM7QUFnRm5CQyxLQUFHLEVBQUUsSUFoRmM7QUFpRm5CQyxTQUFPLEVBQUUsSUFqRlU7QUFrRm5CdkgsS0FBRyxFQUFFLElBbEZjO0FBbUZuQndILFVBQVEsRUFBRSxJQW5GUztBQW9GbkJDLE9BQUssRUFBRSxJQXBGWTtBQXFGbkJDLE9BQUssRUFBRSxJQXJGWTtBQXNGbkJDLE9BQUssRUFBRSxJQXRGWTtBQXVGbkJDLElBQUUsRUFBRSxJQXZGZTtBQXdGbkJDLElBQUUsRUFBRSxJQXhGZTtBQXlGbkJDLElBQUUsRUFBRSxJQXpGZTtBQTBGbkJDLFFBQU0sRUFBRSxJQTFGVztBQTJGbkJDLFVBQVEsRUFBRSxJQTNGUztBQTRGbkJDLFVBQVEsRUFBRSxJQTVGUztBQTZGbkJDLE1BQUksRUFBRSxJQTdGYTtBQThGbkI1SCxPQUFLLEVBQUUsSUE5Rlk7QUErRm5CNkgsT0FBSyxFQUFFLElBL0ZZO0FBZ0duQkMsUUFBTSxFQUFFLElBaEdXO0FBaUduQkMsT0FBSyxFQUFFLElBakdZO0FBa0duQkMsVUFBUSxFQUFFLElBbEdTO0FBbUduQkMsUUFBTSxFQUFFLElBbkdXO0FBb0duQkMsUUFBTSxFQUFFLElBcEdXO0FBcUduQkMsVUFBUSxFQUFFLElBckdTO0FBc0duQkMsUUFBTSxFQUFFLElBdEdXO0FBdUduQkMsVUFBUSxFQUFFLElBdkdTO0FBd0duQkMsU0FBTyxFQUFFLElBeEdVO0FBeUduQkMsUUFBTSxFQUFFLElBekdXO0FBMEduQkMsTUFBSSxFQUFFLElBMUdhO0FBMkduQkMsVUFBUSxFQUFFLElBM0dTO0FBNEduQkMsU0FBTyxFQUFFLElBNUdVO0FBNkduQkMsU0FBTyxFQUFFLElBN0dVO0FBOEduQi9OLFNBQU8sRUFBRSxJQTlHVTtBQStHbkJnTyxRQUFNLEVBQUUsSUEvR1c7QUFnSG5CQyxVQUFRLEVBQUU7QUFoSFMsQ0FBaEIsQzs7QUNqRlA7Ozs7QUFLQTs7QUFFQSxTQUFTaE4seUJBQVQsQ0FBMkJsSCxJQUEzQixFQUFpQztBQUM3QixNQUFJLENBQUNBLElBQUksQ0FBQ0UsSUFBTixLQUFlLENBQWYsSUFBb0IsQ0FBQ0YsSUFBSSxDQUFDcUgsUUFBOUIsRUFBd0M7QUFDcEM7QUFDSDs7QUFFRCxRQUFNbEMsSUFBSSxHQUFHUixNQUFNLENBQUNRLElBQVAsQ0FBWW5GLElBQUksQ0FBQ3FILFFBQWpCLEVBQTJCdEYsTUFBM0IsQ0FBa0NnRyxDQUFDLElBQUkvSCxJQUFJLENBQUNxSCxRQUFMLENBQWNVLENBQWQsTUFBcUIsRUFBNUQsQ0FBYjs7QUFDQSxPQUFLLE1BQU14RCxHQUFYLElBQWtCWSxJQUFsQixFQUF3QjtBQUNwQixRQUFLdUosT0FBTyxDQUFDMU8sSUFBSSxDQUFDNkosR0FBTixDQUFQLElBQXFCaUMsV0FBVyxDQUFDdkgsR0FBRCxDQUFqQyxJQUEyQ2tLLFdBQVcsQ0FBQ2xLLEdBQUQsQ0FBMUQsRUFBaUU7QUFDN0Q7QUFDSDs7QUFDRHZFLFFBQUksQ0FBQ3FILFFBQUwsQ0FBYzlDLEdBQWQsSUFBc0IsWUFBdEI7QUFDSDtBQUNKOztBQUVjO0FBQ1gyQyxtQkFBaUJBO0FBRE4sQ0FBZixFOztBQ3JCQTs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsc0RBQ1hpTixlQURXLEVBRVhDLFVBRlcsRUFHWC9MLFdBSFcsRUFJWGdNLGFBSlcsRUFLWDFGLFlBTFcsRUFNWGxNLEdBTlcsRUFRWDZSLGFBUlcsRUFTWDFNLEtBVFcsRUFXWDtBQUNBMk0sSUFaVyxFQWNYQyxpQkFkVyxDQUFmLEU7Ozs7Ozs7O0FDaEJBOzs7O0FBS0E7QUFDQTtBQUNBOztBQUVBLFNBQVNDLGFBQVQsQ0FBdUJsUSxHQUF2QixFQUE0QnhCLEtBQTVCLEVBQW1DOEcsR0FBbkMsRUFBd0M7QUFDcEMsTUFBSTRFLFdBQVcsQ0FBQ2xLLEdBQUQsQ0FBWCxJQUFxQixDQUFDeEIsS0FBRCxJQUFVMkwsT0FBTyxDQUFDN0UsR0FBRCxDQUFqQixJQUEwQmlDLFdBQVcsQ0FBQ3ZILEdBQUQsQ0FBOUQsRUFBc0U7QUFDbEUsV0FBT0EsR0FBUDtBQUNIOztBQUNELFNBQVEsR0FBRUEsR0FBSSxJQUFHL0MsSUFBSSxDQUFDQyxTQUFMLENBQWVzQixLQUFLLENBQUNnSCxVQUFOLENBQWlCLElBQWpCLElBQXlCaEgsS0FBekIsR0FBaUNBLEtBQUssQ0FBQ2YsT0FBTixDQUFjLE1BQWQsRUFBc0IsR0FBdEIsQ0FBaEQsQ0FBNEUsRUFBN0Y7QUFDSCxDLENBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFZSxTQUFTUCxTQUFULENBQW1CdUYsR0FBbkIsRUFBd0I7QUFBQzBOLFNBQUQ7QUFBVUMsT0FBVjtBQUFpQkM7QUFBakIsQ0FBeEIsRUFBZ0Q7QUFDM0QsTUFBSSxDQUFDek8sS0FBSyxDQUFDQyxPQUFOLENBQWNZLEdBQWQsQ0FBTCxFQUF5QjtBQUNyQkEsT0FBRyxHQUFHLENBQUNBLEdBQUQsQ0FBTjtBQUNIOztBQUVELE1BQUkySCxJQUFJLEdBQUcsRUFBWDs7QUFFQSxPQUFLLE1BQU0zTyxJQUFYLElBQW1CZ0gsR0FBbkIsRUFBd0I7QUFDcEIsUUFBSWhILElBQUksQ0FBQ0UsSUFBTCxLQUFjLENBQWQsSUFBbUJGLElBQUksQ0FBQ0UsSUFBTCxLQUFjLENBQXJDLEVBQXdDO0FBQ3BDLFlBQU1tSixJQUFJLEdBQUdySixJQUFJLENBQUNxSixJQUFsQjtBQUNBc0YsVUFBSSxJQUFJZ0csS0FBSyxHQUNQMUssZ0NBQUksQ0FBQ1osSUFBRCxFQUFPLE9BQVAsQ0FERyxHQUVQQSxJQUZOO0FBR0gsS0FMRCxNQU1LLElBQUlySixJQUFJLENBQUNFLElBQUwsS0FBYyxDQUFsQixFQUFxQjtBQUN0QixZQUFNb0ssS0FBSyxHQUFHM0YsTUFBTSxDQUFDUSxJQUFQLENBQVluRixJQUFJLENBQUNxSCxRQUFqQixFQUEyQi9FLEdBQTNCLENBQStCaUMsR0FBRyxJQUFJa1EsYUFBYSxDQUFDbFEsR0FBRCxFQUFNdkUsSUFBSSxDQUFDcUgsUUFBTCxDQUFjOUMsR0FBZCxDQUFOLEVBQTBCdkUsSUFBSSxDQUFDNkosR0FBL0IsQ0FBbkQsQ0FBZDs7QUFDQSxVQUFJNkssT0FBSixFQUFhO0FBQ1RBLGVBQU8sR0FBR0EsT0FBTyxDQUFDMVMsT0FBUixDQUFnQixjQUFoQixFQUFnQyxFQUFoQyxDQUFWO0FBQ0FzSSxhQUFLLENBQUNYLElBQU4sQ0FBWSxRQUFPaUwsSUFBSSxHQUFHLEdBQUgsR0FBUyxHQUFJLElBQUdGLE9BQVEsRUFBL0M7QUFDSDs7QUFDRCxZQUFNRyxXQUFXLEdBQUc3VSxJQUFJLENBQUNvSixRQUFMLElBQWlCcEosSUFBSSxDQUFDb0osUUFBTCxDQUFjaEgsTUFBZCxHQUF1QixDQUE1RDtBQUNBLFlBQU0wUyxPQUFPLEdBQUd4SyxLQUFLLENBQUNsSSxNQUFOLEdBQWUsQ0FBL0I7QUFDQXVNLFVBQUksSUFBSyxJQUFHM08sSUFBSSxDQUFDNkosR0FBSSxHQUFFaUwsT0FBTyxHQUFHLEdBQUgsR0FBUyxFQUFHLEdBQUV4SyxLQUFLLENBQUMvSCxJQUFOLENBQVcsR0FBWCxDQUFnQixHQUE1RDtBQUNBb00sVUFBSSxJQUFJa0csV0FBVyxHQUFHcFQsU0FBUyxDQUFDekIsSUFBSSxDQUFDb0osUUFBTixFQUFnQjtBQUFDc0wsZUFBRDtBQUFVQyxhQUFWO0FBQWlCQztBQUFqQixPQUFoQixDQUFaLEdBQXNELEVBQXpFO0FBQ0FqRyxVQUFJLElBQUksQ0FBQ2tHLFdBQUQsSUFBZ0JuSyxTQUFTLENBQUMxSyxJQUFJLENBQUM2SixHQUFOLENBQXpCLEdBQXNDLEVBQXRDLEdBQTRDLEtBQUk3SixJQUFJLENBQUM2SixHQUFJLEdBQWpFOztBQUVBLFVBQUk3SixJQUFJLENBQUN1SyxZQUFMLElBQXFCdkssSUFBSSxDQUFDdUssWUFBTCxDQUFrQm5JLE1BQWxCLEdBQTJCLENBQXBELEVBQXVEO0FBQ25EdU0sWUFBSSxJQUFJbE4sU0FBUyxDQUFDekIsSUFBSSxDQUFDdUssWUFBTCxDQUFrQlAsS0FBbEIsQ0FBd0IsQ0FBeEIsRUFBMkIxSCxHQUEzQixDQUErQnlGLENBQUMsSUFBSUEsQ0FBQyxDQUFDMEMsS0FBdEMsQ0FBRCxFQUErQztBQUFDaUssaUJBQUQ7QUFBVUMsZUFBVjtBQUFpQkM7QUFBakIsU0FBL0MsQ0FBakI7QUFDSDtBQUNKO0FBQ0o7O0FBRUQsU0FBT2pHLElBQVA7QUFDSCxDOztBQzNERDs7Ozs7QUFLQTs7O0FBR08sTUFBTW9HLE1BQU0sR0FBR3BRLE1BQU0sQ0FBQ3FRLE1BQXRCO0FBRVA7Ozs7QUFHTyxTQUFTQyxRQUFULENBQWtCQyxHQUFsQixFQUF1QjtBQUMxQixRQUFNQyxHQUFHLEdBQUcsRUFBWjs7QUFDQSxPQUFLLElBQUl0UixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHcVIsR0FBRyxDQUFDOVMsTUFBeEIsRUFBZ0N5QixDQUFDLEVBQWpDLEVBQXFDO0FBQ2pDLFFBQUlxUixHQUFHLENBQUNyUixDQUFELENBQVAsRUFBWTtBQUNSa1IsWUFBTSxDQUFDSSxHQUFELEVBQU1ELEdBQUcsQ0FBQ3JSLENBQUQsQ0FBVCxDQUFOO0FBQ0g7QUFDSjs7QUFDRCxTQUFPc1IsR0FBUDtBQUNIO0FBRUQ7Ozs7QUFHTyxNQUFNQyxTQUFTLEdBQUd6USxNQUFNLENBQUNDLFNBQVAsQ0FBaUJ2RCxRQUFuQztBQUVQOzs7Ozs7QUFLTyxTQUFTZ1UsUUFBVCxDQUFrQjVRLEdBQWxCLEVBQXVCO0FBQzFCLFNBQU9BLEdBQUcsS0FBSyxJQUFSLElBQWdCLE9BQU9BLEdBQVAsS0FBZSxRQUF0QztBQUNIO0FBRUQ7Ozs7QUFHQSxNQUFNNlEsbUJBQWMsR0FBRzNRLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQjBRLGNBQXhDO0FBQ08sU0FBU0MsTUFBVCxDQUFnQjlRLEdBQWhCLEVBQXFCRixHQUFyQixFQUEwQjtBQUM3QixTQUFPK1EsbUJBQWMsQ0FBQ3pRLElBQWYsQ0FBb0JKLEdBQXBCLEVBQXlCRixHQUF6QixDQUFQO0FBQ0g7QUFFRDs7Ozs7QUFJTyxTQUFTaVIsYUFBVCxDQUF1Qi9RLEdBQXZCLEVBQTRCO0FBQy9CLFNBQU8yUSxTQUFTLENBQUN2USxJQUFWLENBQWVKLEdBQWYsTUFBd0IsaUJBQS9CO0FBQ0g7QUFFTSxTQUFTZ1IsR0FBVCxDQUFhaFIsR0FBYixFQUFrQkYsR0FBbEIsRUFBdUI1QixRQUF2QixFQUFpQztBQUNwQ2dDLFFBQU0sQ0FBQytRLGNBQVAsQ0FBc0JqUixHQUF0QixFQUEyQkYsR0FBM0IsRUFBZ0N3USxNQUFNLENBQUM7QUFDbkNZLGNBQVUsRUFBRSxLQUR1QjtBQUVuQ0MsZ0JBQVksRUFBRTtBQUZxQixHQUFELEVBR25DalQsUUFIbUMsQ0FBdEM7QUFJSDtBQUVEOzs7O0FBR08sU0FBU2tULE1BQVQsQ0FBZ0JDLEVBQWhCLEVBQW9CO0FBQ3ZCLFFBQU1DLEtBQUssR0FBR3BSLE1BQU0sQ0FBQ3FSLE1BQVAsQ0FBYyxJQUFkLENBQWQ7QUFDQSxTQUFPLFNBQVNDLFFBQVQsQ0FBa0JDLEdBQWxCLEVBQXVCO0FBQzFCLFVBQU1DLEdBQUcsR0FBR0osS0FBSyxDQUFDRyxHQUFELENBQWpCO0FBQ0EsV0FBT0MsR0FBRyxLQUFLSixLQUFLLENBQUNHLEdBQUQsQ0FBTCxHQUFhSixFQUFFLENBQUNJLEdBQUQsQ0FBcEIsQ0FBVjtBQUNILEdBSEQ7QUFJSDtBQUVEOzs7O0FBR0EsTUFBTUUsV0FBVyxHQUFHLGdCQUFwQjtBQUNPLE1BQU1DLFNBQVMsR0FBR1IsTUFBTSxDQUFFSyxHQUFELElBQVM7QUFDckMsU0FBT0EsR0FBRyxDQUNMbFUsT0FERSxDQUNNb1UsV0FETixFQUNtQixPQURuQixFQUVGcFUsT0FGRSxDQUVNb1UsV0FGTixFQUVtQixPQUZuQixFQUdGclIsV0FIRSxFQUFQO0FBSUgsQ0FMOEIsQ0FBeEI7QUFPQSxNQUFNdVIsUUFBUSxHQUFHSixHQUFHLElBQUlBLEdBQUcsQ0FBQ2xVLE9BQUosQ0FBWSxRQUFaLEVBQXNCLENBQUN1VSxDQUFELEVBQUl4UyxDQUFKLEtBQVdBLENBQUMsR0FBR0EsQ0FBQyxDQUFDeVMsV0FBRixFQUFILEdBQXFCLEVBQXZELENBQXhCLEM7O0FDbEZQOzs7O0FBS0E7QUFFZSx5REFBVUMsVUFBVixFQUFzQjtBQUVqQyxXQUFTQyxnQkFBVCxDQUEwQkMsRUFBMUIsRUFBOEI7QUFDMUIsUUFBSUYsVUFBVSxJQUFJQSxVQUFVLENBQUNHLE1BQXpCLElBQW1DRCxFQUFFLENBQUN0UCxRQUFILENBQVlDLEtBQW5ELEVBQTBEO0FBQ3RELFlBQU1GLFdBQVcsR0FBR3VQLEVBQUUsQ0FBQ3RQLFFBQUgsQ0FBWUMsS0FBWixDQUFrQnRGLE9BQWxCLENBQTBCLFVBQTFCLEVBQXNDLEVBQXRDLEVBQTBDOEcsS0FBMUMsQ0FBZ0QsR0FBaEQsQ0FBcEI7QUFDQTZOLFFBQUUsQ0FBQ3RQLFFBQUgsQ0FBWUMsS0FBWixHQUFvQkYsV0FBVyxDQUFDOUUsR0FBWixDQUFnQnlCLENBQUMsSUFBSzBTLFVBQVUsQ0FBQ0csTUFBWCxDQUFrQk4sUUFBUSxDQUFDdlMsQ0FBRCxDQUExQixLQUFrQ0EsQ0FBeEQsRUFBNER4QixJQUE1RCxDQUFpRSxHQUFqRSxDQUFwQjtBQUNBb1UsUUFBRSxDQUFDaE8sU0FBSCxHQUFlZ08sRUFBRSxDQUFDaE8sU0FBSCxDQUFhckcsR0FBYixDQUNYLENBQUM7QUFBQ0QsWUFBRDtBQUFPVTtBQUFQLE9BQUQsTUFBb0I7QUFBQ1YsWUFBRDtBQUFPVSxhQUFLLEVBQUVWLElBQUksS0FBSyxPQUFULEdBQW1Cc1UsRUFBRSxDQUFDdFAsUUFBSCxDQUFZQyxLQUEvQixHQUF1Q3ZFO0FBQXJELE9BQXBCLENBRFcsQ0FBZjtBQUdIO0FBQ0o7O0FBRUQsU0FBTztBQUNIMlQ7QUFERyxHQUFQO0FBR0gsQzs7QUN0QkQ7Ozs7QUFLQSxTQUFTQSxxQkFBVCxDQUEwQkMsRUFBMUIsRUFBOEI7QUFDMUJBLElBQUUsQ0FBQ2hPLFNBQUgsR0FBZWdPLEVBQUUsQ0FBQ2hPLFNBQUgsQ0FBYXJHLEdBQWIsQ0FBaUIsQ0FBQztBQUFDRCxRQUFEO0FBQU9VO0FBQVAsR0FBRCxLQUFtQjtBQUMvQyxXQUFPNFQsRUFBRSxDQUFDdFAsUUFBSCxDQUFZaEYsSUFBWixDQUFQO0FBQ0FBLFFBQUksR0FBR0EsSUFBSSxDQUFDTCxPQUFMLENBQWEsS0FBYixFQUFvQixJQUFwQixDQUFQO0FBQ0EyVSxNQUFFLENBQUN0UCxRQUFILENBQVloRixJQUFaLElBQW9CVSxLQUFwQjtBQUNBLFdBQU87QUFDSEEsV0FERztBQUVIVjtBQUZHLEtBQVA7QUFJSCxHQVJjLENBQWY7QUFTSDs7QUFFYztBQUNYcVUsa0JBQWdCQTtBQURMLENBQWYsRTs7Ozs7QUNqQkE7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLFNBQVNHLE9BQVQsQ0FBaUJsTCxNQUFqQixFQUF5QnJDLE9BQU8sR0FBRyxFQUFuQyxFQUF1QztBQUUxQyxRQUFNO0FBQ0Z3TixXQUFPLEdBQUcsRUFEUjtBQUVGTCxjQUFVLEdBQUcsSUFGWDtBQUdGL0IsV0FBTyxHQUFHLEVBSFI7QUFJRkMsU0FBSyxHQUFHLElBSk47QUFLRkMsUUFBSSxFQUFFbUMsTUFBTSxHQUFHO0FBTGIsTUFNRnpOLE9BTko7O0FBUUEsTUFBSSxDQUFDME4sbUNBQU8sQ0FBQ1AsVUFBRCxDQUFaLEVBQTBCO0FBQ3RCSyxXQUFPLENBQUNHLE9BQVIsQ0FBZ0JDLFVBQWEsQ0FBQ1QsVUFBRCxDQUE3QjtBQUNIOztBQUVELE1BQUlNLE1BQUosRUFBWTtBQUNSRCxXQUFPLENBQUNHLE9BQVIsQ0FBZ0JyQyxZQUFoQjtBQUNIOztBQUVELFFBQU11QyxNQUFNLEdBQUcsRUFBZjtBQUNBLFFBQU1DLGVBQWUsR0FBRztBQUNwQk4sV0FBTyxFQUFFLENBQ0wsR0FBR08sZ0JBREUsRUFFTCxHQUFHUCxPQUZFLENBRFc7QUFLcEJRLHNCQUFrQixFQUFFLEtBTEE7QUFNcEJDLHVCQUFtQixFQUFFLEtBTkQ7QUFPcEI3TixRQUFJLEVBQUUsRUFQYzs7QUFRcEJ4RyxTQUFLLENBQUNzVSxHQUFELEVBQU07QUFDUEMsYUFBTyxDQUFDdlUsS0FBUixDQUFlLGdCQUFlc1UsR0FBSSxFQUFsQztBQUNBTCxZQUFNLENBQUN4TixJQUFQLENBQVk2TixHQUFaO0FBQ0g7O0FBWG1CLEdBQXhCLENBbkIwQyxDQWlDMUM7O0FBRUEsUUFBTTtBQUFDeFE7QUFBRCxNQUFRMFEsa0RBQVUsQ0FBQy9MLE1BQU0sQ0FBQzFCLElBQVAsRUFBRCxFQUFnQm1OLGVBQWhCLENBQXhCO0FBRUEsUUFBTWxELFFBQVEsR0FBR3pTLFNBQVMsQ0FBQ3VGLEdBQUQsRUFBTTtBQUFFME4sV0FBRjtBQUFXQyxTQUFYO0FBQWtCQyxRQUFJLEVBQUVtQztBQUF4QixHQUFOLENBQTFCLENBckMwQyxDQXNDMUM7O0FBQ0EsUUFBTVksS0FBSyxHQUFHQyxzQ0FBYSxDQUFDMUQsUUFBRCxDQUFiLENBQXdCOUssUUFBeEIsQ0FBaUMsQ0FBakMsQ0FBZDtBQUVBLFNBQU87QUFDSHBDLE9BREc7QUFFSDJRLFNBRkc7QUFHSHpELFlBSEc7QUFJSHhLLFFBQUksRUFBRTBOLGVBQWUsQ0FBQzFOLElBSm5CO0FBS0h5TjtBQUxHLEdBQVA7QUFPSCxDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDcpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXRvbS1leHByZXNzaW9uLWNvbXBpbGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvY29kZS1mcmFtZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlc2NhcGUtcXVvdGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRvLXNpbmdsZS1xdW90ZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidnVlLXRlbXBsYXRlLWNvbXBpbGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNhblwiKTsiLCIvKipcbiAqIEBmaWxlIHZ1ZSDnmoQgZXhwcmVzc2lvbiDovawgc2Fu77yM5Li76KaB5piv5aSE55CGIGVzNiDor63ms5VcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQge2NvZGVGcmFtZUNvbHVtbnN9IGZyb20gJ0BiYWJlbC9jb2RlLWZyYW1lJztcbmltcG9ydCB7cGFyc2V9IGZyb20gJ2F0b20tZXhwcmVzc2lvbi1jb21waWxlcic7XG5pbXBvcnQgZXNjYXBlUXVvdGVzIGZyb20gJ2VzY2FwZS1xdW90ZXMnO1xuXG5jb25zdCBtYXJrID0gJ19fdnVzYV9fZmlsdGVyX19tYXJrX18nO1xuY29uc3QgcmVnID0gbmV3IFJlZ0V4cChtYXJrLCAnZycpO1xuXG5jb25zdCB2YWxpZFVuYXJ5T3BlcmF0b3IgPSBuZXcgU2V0KFsnKycsICctJywgJyEnXSk7XG5jb25zdCB2YWxpZEJpbmFyeU9wZXJhdG9yID0gbmV3IFNldChbJysnLCAnLScsICcqJywgJy8nLCAnJScsICc+JywgJzwnLCAnPj0nLCAnPD0nLCAnPT0nLCAnPT09JywgJyE9JywgJyE9PSddKTtcbmNvbnN0IHZhbGlkTG9naWNhbE9wZXJhdG9yID0gbmV3IFNldChbJyYmJywgJ3x8J10pO1xuY29uc3Qgbm9CcmFja2V0VHlwZXMgPSBuZXcgU2V0KFtcbiAgICAnQXJyYXlFeHByZXNzaW9uJyxcbiAgICAnTGl0ZXJhbCcsXG4gICAgJ09iamVjdEV4cHJlc3Npb24nLFxuICAgICdJZGVudGlmaWVyJyxcbiAgICAnTWVtYmVyRXhwcmVzc2lvbicsXG4gICAgJ0NhbGxFeHByZXNzaW9uJyxcbiAgICAnVGVtcGxhdGVFeHByZXNzaW9uJyxcbiAgICAnVW5hcnlFeHByZXNzaW9uJ1xuXSk7XG5cbmZ1bmN0aW9uIHdyYXBCYWNrZXQoY29kZSwgbm9kZSkge1xuICAgIGlmIChub0JyYWNrZXRUeXBlcy5oYXMobm9kZS50eXBlKSkge1xuICAgICAgICByZXR1cm4gY29kZTtcbiAgICB9XG4gICAgaWYgKG5vZGUudHlwZSA9PT0gJ0JpbmFyeUV4cHJlc3Npb24nICYmIFsnPT0nLCAnPT09JywgJyE9JywgJyE9PSddLmluY2x1ZGVzKG5vZGUub3BlcmF0b3IpKSB7XG4gICAgICAgIHJldHVybiBjb2RlO1xuICAgIH1cbiAgICByZXR1cm4gYCgke2NvZGV9KWA7XG59XG5cbmNvbnN0IFN5bnRheCA9IHtcbiAgICBBcnJheUV4cHJlc3Npb246ICdBcnJheUV4cHJlc3Npb24nLFxuICAgIExpdGVyYWw6ICdMaXRlcmFsJyxcbiAgICBPYmplY3RFeHByZXNzaW9uOiAnT2JqZWN0RXhwcmVzc2lvbicsXG4gICAgVW5hcnlFeHByZXNzaW9uOiAnVW5hcnlFeHByZXNzaW9uJyxcbiAgICBQcm9wZXJ0eTogJ1Byb3BlcnR5JyxcbiAgICBWdWVFeHByZXNzaW9uOiAnVnVlRXhwcmVzc2lvbicsXG4gICAgVnVlRmlsdGVyOiAnVnVlRmlsdGVyJyxcbiAgICBJZGVudGlmaWVyOiAnSWRlbnRpZmllcicsXG4gICAgTWVtYmVyRXhwcmVzc2lvbjogJ01lbWJlckV4cHJlc3Npb24nLFxuICAgIEJpbmFyeUV4cHJlc3Npb246ICdCaW5hcnlFeHByZXNzaW9uJyxcbiAgICBMb2dpY2FsRXhwcmVzc2lvbjogJ0xvZ2ljYWxFeHByZXNzaW9uJyxcbiAgICBDb25kaXRpb25hbEV4cHJlc3Npb246ICdDb25kaXRpb25hbEV4cHJlc3Npb24nLFxuICAgIENhbGxFeHByZXNzaW9uOiAnQ2FsbEV4cHJlc3Npb24nLFxuICAgIFRlbXBsYXRlRXhwcmVzc2lvbjogJ1RlbXBsYXRlRXhwcmVzc2lvbidcbn07XG5cbmNvbnN0IFZpc2l0b3JLZXlzID0ge1xuICAgIEFycmF5RXhwcmVzc2lvbjogWydlbGVtZW50cyddLFxuICAgIE9iamVjdEV4cHJlc3Npb246IFsncHJvcGVydGllcyddLFxuICAgIFVuYXJ5RXhwcmVzc2lvbjogWydhcmd1bWVudCddLFxuICAgIFByb3BlcnR5OiBbJ3ZhbHVlJ10sXG4gICAgTWVtYmVyRXhwcmVzc2lvbjogWydvYmplY3QnLCAncHJvcGVydHknXSxcbiAgICBCaW5hcnlFeHByZXNzaW9uOiBbJ2xlZnQnLCAncmlnaHQnXSxcbiAgICBMb2dpY2FsRXhwcmVzc2lvbjogWydsZWZ0JywgJ3JpZ2h0J10sXG4gICAgQ29uZGl0aW9uYWxFeHByZXNzaW9uOiBbJ3Rlc3QnLCAnY29uc2VxdWVudCcsICdhbHRlcm5hdGUnXSxcbiAgICBDYWxsRXhwcmVzc2lvbjogWydhcmd1bWVudHMnXSxcbiAgICBWdWVFeHByZXNzaW9uOiBbJ2V4cHJlc3Npb24nLCAnZmlsdGVycyddLFxuICAgIFZ1ZUZpbHRlcjogWydhcmd1bWVudHMnXSxcbiAgICBUZW1wbGF0ZUV4cHJlc3Npb246IFsnZXhwcmVzc2lvbnMnXVxufTtcblxuZnVuY3Rpb24gdG9TdHJpbmcoYSkge1xuICAgIGlmICh0eXBlb2YgYSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIGEgKyAnJztcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBhID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gYCcke2VzY2FwZVF1b3RlcyhhKX0nYFxuICAgIH1cbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYSk7XG59XG5cbmNvbnN0IENvZGVHZW5lcmFnb3IgPSB7XG5cbiAgICBWdWVFeHByZXNzaW9uKG5vZGUsIFtleHByZXNzaW9uLCBmaWx0ZXJzXSkge1xuICAgICAgICBsZXQgY29kZSA9IGZpbHRlcnMucmVkdWNlKChwcmUsIGZpbHRlcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGZpbHRlci5jb2RlLnJlcGxhY2UocmVnLCBwcmUpO1xuICAgICAgICB9LCBleHByZXNzaW9uLmNvZGUpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZXQoY29kZSk7XG4gICAgfSxcblxuICAgIFZ1ZUZpbHRlcihub2RlLCBbYXJnc10pIHtcbiAgICAgICAgbGV0IGhhc0FyZ3MgPSBhcmdzLmxlbmd0aCA+IDA7XG4gICAgICAgIHJldHVybiB0aGlzLnJldChgJHttYXJrfSB8ICR7bm9kZS5uYW1lfWAgKyAoaGFzQXJncyA/IGAoJHthcmdzLm1hcChhID0+IGEuY29kZSkuam9pbignLCAnKX0pYCA6ICcnKSk7XG4gICAgfSxcblxuICAgIElkZW50aWZpZXIobm9kZSwgcmVzdWx0cywgcmVmKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJldChub2RlLm5hbWUpO1xuICAgIH0sXG5cbiAgICBNZW1iZXJFeHByZXNzaW9uKG5vZGUsIHJlc3VsdHMpIHtcblxuICAgICAgICBsZXQgW29iamVjdCwgcHJvcGVydHldID0gcmVzdWx0cztcblxuICAgICAgICBpZiAobm9kZS5jb21wdXRlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmV0KGAke29iamVjdC5jb2RlfVske3Byb3BlcnR5LmNvZGV9XWApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb3BlcnR5LmNvZGUgPT09ICdsZW5ndGgnKSB7XG4gICAgICAgICAgICBpZiAob2JqZWN0LnR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdC5pc1N0YXRpYykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbGVuID0gb2JqZWN0LnZhbHVlLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmV0KGxlbiArICcnLCAnbnVtYmVyJywgbGVuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmV0KGAke29iamVjdC5jb2RlfS5sZW5ndGhgLCAnbnVtYmVyJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5yZXQoYCR7b2JqZWN0LmNvZGV9LiR7cHJvcGVydHkuY29kZX1gKTtcbiAgICB9LFxuXG4gICAgQmluYXJ5RXhwcmVzc2lvbihub2RlLCBbbGVmdCwgcmlnaHRdLCByZWYpIHtcbiAgICAgICAgaWYgKCF2YWxpZEJpbmFyeU9wZXJhdG9yLmhhcyhub2RlLm9wZXJhdG9yKSkge1xuICAgICAgICAgICAgdGhpcy5lcnJvcihgaW52YWxpZCBiaW5hcnkgb3BlcmF0b3IgXCIke25vZGUub3BlcmF0b3J9XCJgLCBub2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGVmdC5pc1N0YXRpYyAmJiByaWdodC5pc1N0YXRpYykge1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gbmV3IEZ1bmN0aW9uKGByZXR1cm4gJHtsZWZ0LmNvZGV9ICR7bm9kZS5vcGVyYXRvcn0gJHtyaWdodC5jb2RlfWApKCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXQodG9TdHJpbmcodmFsdWUpLCBnZXRUeXBlKHZhbHVlKSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjb2RlID0gYCR7d3JhcEJhY2tldChsZWZ0LmNvZGUsIG5vZGUubGVmdCl9JHtub2RlLm9wZXJhdG9yfSR7d3JhcEJhY2tldChyaWdodC5jb2RlLCBub2RlLnJpZ2h0KX1gXG4gICAgICAgIHJldHVybiB0aGlzLnJldChjb2RlKTtcbiAgICB9LFxuXG4gICAgTG9naWNhbEV4cHJlc3Npb24obm9kZSwgW2xlZnQsIHJpZ2h0XSkge1xuICAgICAgICBpZiAoIXZhbGlkTG9naWNhbE9wZXJhdG9yLmhhcyhub2RlLm9wZXJhdG9yKSkge1xuICAgICAgICAgICAgdGhpcy5lcnJvcihgaW52YWxpZCBsb2dpY2FsIG9wZXJhdG9yIFwiJHtub2RlLm9wZXJhdG9yfVwiYCwgbm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxlZnQuaXNTdGF0aWMgJiYgcmlnaHQuaXNTdGF0aWMpIHtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IG5ldyBGdW5jdGlvbihgcmV0dXJuICR7bGVmdC5jb2RlfSR7bm9kZS5vcGVyYXRvcn0ke3JpZ2h0LmNvZGV9YCkoKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJldCh0b1N0cmluZyh2YWx1ZSksIGdldFR5cGUodmFsdWUpLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNvZGUgPSBgJHt3cmFwQmFja2V0KGxlZnQuY29kZSwgbm9kZS5sZWZ0KX0ke25vZGUub3BlcmF0b3J9JHt3cmFwQmFja2V0KHJpZ2h0LmNvZGUsIG5vZGUucmlnaHQpfWBcbiAgICAgICAgcmV0dXJuIHRoaXMucmV0KGNvZGUpO1xuICAgIH0sXG5cbiAgICBDb25kaXRpb25hbEV4cHJlc3Npb24obm9kZSwgW3Rlc3QsIGNvbnNlcXVlbnQsIGFsdGVybmF0ZV0pIHtcbiAgICAgICAgaWYgKHRlc3QuaXNTdGF0aWMpIHtcbiAgICAgICAgICAgIHJldHVybiB0ZXN0LnZhbHVlID8gY29uc2VxdWVudCA6IGFsdGVybmF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB0ZXN0Q29kZSA9IHdyYXBCYWNrZXQodGVzdC5jb2RlLCBub2RlLnRlc3QpO1xuICAgICAgICBsZXQgY29uc2VxdWVudENvZGUgPSB3cmFwQmFja2V0KGNvbnNlcXVlbnQuY29kZSwgbm9kZS5jb25zZXF1ZW50KTtcbiAgICAgICAgbGV0IGFsdGVybmF0ZUNvZGUgPSB3cmFwQmFja2V0KGFsdGVybmF0ZS5jb2RlLCBub2RlLmFsdGVybmF0ZSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmV0KGAke3Rlc3RDb2RlfT8ke2NvbnNlcXVlbnRDb2RlfToke2FsdGVybmF0ZUNvZGV9YCk7XG4gICAgfSxcblxuICAgIENhbGxFeHByZXNzaW9uKG5vZGUsIFthcmdzXSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXQoYCR7bm9kZS5jYWxsZWUubmFtZX0oJHthcmdzLm1hcChhID0+IGEuY29kZSkuam9pbignLCAnKX0pYCk7XG4gICAgfSxcblxuICAgIFRlbXBsYXRlRXhwcmVzc2lvbihub2RlLCBbZXhwcmVzc2lvbnNdKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJldChcbiAgICAgICAgICAgIGAoJHtleHByZXNzaW9ucy5tYXAoKHtjb2RlfSwgaSkgPT4gd3JhcEJhY2tldChjb2RlLCBub2RlLmV4cHJlc3Npb25zW2ldKSkuam9pbignKycpfSlgLFxuICAgICAgICAgICAgJ3N0cmluZydcbiAgICAgICAgKTtcbiAgICB9LFxuXG4gICAgQXJyYXlFeHByZXNzaW9uKG5vZGUsIHJlc3VsdHMpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHJlc3VsdHNbMF07XG4gICAgICAgIHJldHVybiB0aGlzLnJldChgWyR7cmVzdWx0Lm1hcChjID0+IGMuY29kZSkuam9pbignLCAnKX1dYCwgJ2FycmF5Jyk7XG4gICAgfSxcblxuICAgIExpdGVyYWwobm9kZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXQoXG4gICAgICAgICAgICB0aGlzLnZhckV4cG9ydChub2RlLnZhbHVlKSxcbiAgICAgICAgICAgIGdldFR5cGUobm9kZS52YWx1ZSksXG4gICAgICAgICAgICBub2RlLnZhbHVlXG4gICAgICAgICk7XG4gICAgfSxcblxuICAgIFVuYXJ5RXhwcmVzc2lvbihub2RlLCByZXN1bHRzKSB7XG5cbiAgICAgICAgaWYgKCF2YWxpZFVuYXJ5T3BlcmF0b3IuaGFzKG5vZGUub3BlcmF0b3IpKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yKGB1bmtub3cgdW5hcnkgb3BlcmF0b3IgXCIke25vZGUub3BlcmF0b3J9XCJgLCBub2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXN1bHQgPSByZXN1bHRzWzBdO1xuXG4gICAgICAgIGlmIChyZXN1bHQuaXNTdGF0aWMpIHtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IG5ldyBGdW5jdGlvbihgcmV0dXJuICR7bm9kZS5vcGVyYXRvcn0ke3Jlc3VsdC5jb2RlfWApKCk7XG4gICAgICAgICAgICBsZXQgc3RyaW5naWZ5ID0gdG9TdHJpbmcodmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmV0KHN0cmluZ2lmeSwgZ2V0VHlwZSh2YWx1ZSksIHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnJldChgJHtub2RlLm9wZXJhdG9yfSR7cmVzdWx0LmNvZGV9YCk7XG4gICAgfSxcblxuICAgIE9iamVjdEV4cHJlc3Npb24obm9kZSwgcmVzdWx0cykge1xuXG4gICAgICAgIGlmIChub2RlLmhhc0NvbXB1dGVkKSB7XG4gICAgICAgICAgICBsZXQgY29kZSA9ICdfZXgoJztcbiAgICAgICAgICAgIGxldCBjdXJyZW50O1xuICAgICAgICAgICAgbGV0IHByZXY7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gbm9kZS5wcm9wZXJ0aWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvcGVydHkgPSBub2RlLnByb3BlcnRpZXNbaV07XG4gICAgICAgICAgICAgICAgcHJldiA9IGN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgY3VycmVudCA9ICEhcHJvcGVydHkuY29tcHV0ZWQ7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQgJiYgcHJldiA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgY29kZSArPSAnfSwnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudCAmJiAhcHJldikge1xuICAgICAgICAgICAgICAgICAgICBjb2RlICs9ICdfb2NwKFsnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWN1cnJlbnQgJiYgcHJldikge1xuICAgICAgICAgICAgICAgICAgICBjb2RlICs9ICddKSx7JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFjdXJyZW50ICYmIHByZXYgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBjb2RlICs9ICd7JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQgPT09IHByZXYpIHtcbiAgICAgICAgICAgICAgICAgICAgY29kZSArPSAnLCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvZGUgKz0gcmVzdWx0c1swXVtpXS5jb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29kZSArPSBjdXJyZW50ID8gJ10pKScgOiAnfSknO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmV0KGNvZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJlc3VsdCA9IHJlc3VsdHNbMF07XG4gICAgICAgIHJldHVybiB0aGlzLnJldChgeyR7cmVzdWx0Lm1hcChjID0+IGMuY29kZSkuam9pbignLCcpfX0gYCwgJ29iamVjdCcpO1xuICAgIH0sXG5cbiAgICBQcm9wZXJ0eShub2RlLCByZXN1bHRzLCByZWYpIHtcblxuICAgICAgICBpZiAobm9kZS5jb21wdXRlZCkge1xuICAgICAgICAgICAgcmVmLmhhc0NvbXB1dGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldCBrZXlDb2RlID0gdGhpcy50cmF2ZXJzZShub2RlLmtleSwgbm9kZSkuY29kZTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJldChge2s6JHtrZXlDb2RlfSx2OiR7cmVzdWx0c1swXS5jb2RlfX1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBrZXlDb2RlID0gdGhpcy5nZW5Qcm9wZXJ0eUtleShub2RlLmtleSkuY29kZTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmV0KGAke2tleUNvZGV9OiR7cmVzdWx0c1swXS5jb2RlfWApO1xuICAgIH1cbn07XG5cbmZ1bmN0aW9uIGdldFR5cGUob2JqKSB7XG4gICAgbGV0IHR5cGVTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKTtcbiAgICByZXR1cm4gdHlwZVN0ci5zdWJzdHJpbmcoOCwgdHlwZVN0ci5sZW5ndGggLSAxKS50b0xvd2VyQ2FzZSgpO1xufVxuXG5jbGFzcyBDb2RlR2VuIHtcblxuICAgIGNvbnN0cnVjdG9yKHtjb2RlfSkge1xuICAgICAgICB0aGlzLnN5bnRheCA9IFN5bnRheDtcbiAgICAgICAgdGhpcy5rZXlzID0gVmlzaXRvcktleXM7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVyID0gQ29kZUdlbmVyYWdvcjtcblxuICAgICAgICB0aGlzLmNvZGUgPSBjb2RlO1xuICAgIH1cblxuICAgIGVycm9yKG1lc3NhZ2UsIG5vZGUpIHtcbiAgICAgICAgbWVzc2FnZSA9IGBbdnVzYSBleHByZXNzaW9uIHBhcnNlcl0gKCR7bm9kZS5sb2NhdGlvbi5zdGFydC5saW5lfToke25vZGUubG9jYXRpb24uc3RhcnQuY29sdW1ufSkgOiAke21lc3NhZ2V9YDtcblxuICAgICAgICBsZXQgY29kZUZyYW1lID0gY29kZUZyYW1lQ29sdW1ucyh0aGlzLmNvZGUsIG5vZGUubG9jYXRpb24sIHtcbiAgICAgICAgICAgIGhpZ2hsaWdodENvZGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIG1lc3NhZ2UgKz0gYFxcbiR7Y29kZUZyYW1lfWA7XG5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIHRyYXZlcnNlKG5vZGUsIHJlZikge1xuXG4gICAgICAgIGxldCBzeW50YXggPSB0aGlzLnN5bnRheFtub2RlLnR5cGVdO1xuXG4gICAgICAgIGlmIChub2RlID09PSByZWYpIHtcbiAgICAgICAgICAgIHRoaXMucm9vdCA9IG5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICBub2RlLnJlZiA9IHJlZjtcblxuICAgICAgICAvLyDlr7nosaHnmoQga2V5IOWAvOeJueauiuWkhOeQhuS4gOS4i1xuICAgICAgICBpZiAoIXN5bnRheCkge1xuICAgICAgICAgICAgdGhpcy5lcnJvcihgVW5rbm93biBub2RlIHR5cGUgXCIke25vZGUudHlwZX1cIiB3YXMgZm91bmQgd2hlbiBwYXJzaW5nIFwiJHtub2RlLm5hbWV9XCJgLCBub2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB2aXNpdG9yS2V5cyA9IHRoaXMua2V5c1tub2RlLnR5cGVdIHx8IFtdO1xuICAgICAgICBsZXQga2V5UmVzdWx0cyA9IHZpc2l0b3JLZXlzLm1hcChrZXkgPT4ge1xuICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBub2RlW2tleV07XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcblxuICAgICAgICAgICAgaWYgKHRoaXMuaXNOb2RlKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy50cmF2ZXJzZShlbGVtZW50LCBub2RlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGVsZW1lbnQubWFwKGVsZSA9PiB0aGlzLnRyYXZlcnNlKGVsZSwgbm9kZSkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yKGBVbmtub3duIFZpc2l0b3JLZXkgdHlwZSBcIiR7dHlwZW9mIGVsZW1lbnR9XCIgd2FzIGZvdW5kIHdoZW4gcGFyc2luZyAke2VsZW1lbnQubmFtZX1gLCBlbGVtZW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2VuZXJhdGUobm9kZSwga2V5UmVzdWx0cywgcmVmKTtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZShub2RlLCAuLi5hcmdzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdlbmVyYXRlcltub2RlLnR5cGVdLmFwcGx5KHRoaXMsIFtub2RlLCAuLi5hcmdzXSk7XG4gICAgfVxuXG4gICAgZ2VuUHJvcGVydHlLZXkobm9kZSkge1xuICAgICAgICBsZXQgY29kZTtcbiAgICAgICAgc3dpdGNoIChub2RlLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ0lkZW50aWZpZXInOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJldChub2RlLm5hbWUsICdzdHJpbmcnLCBub2RlLm5hbWUpO1xuICAgICAgICAgICAgY2FzZSAnTGl0ZXJhbCc6XG4gICAgICAgICAgICAgICAgY29kZSA9IHRvU3RyaW5nKFN0cmluZyhub2RlLnZhbHVlKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmV0KGNvZGUsICdzdHJpbmcnLCBTdHJpbmcobm9kZS52YWx1ZSkpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yKGBpbnZhbGlkIHByb3BlcnR5IGtleSB0eXBlIFwiJHtub2RlLnR5cGV9XCJgLCBub2RlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzTm9kZShub2RlKSB7XG4gICAgICAgIGlmIChub2RlID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHlwZW9mIG5vZGUgPT09ICdvYmplY3QnICYmIHR5cGVvZiBub2RlLnR5cGUgPT09ICdzdHJpbmcnO1xuICAgIH1cblxuICAgIHJldChjb2RlLCB0eXBlLCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29kZSxcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIGlzU3RhdGljOiBhcmd1bWVudHMubGVuZ3RoID4gMlxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHZhckV4cG9ydChkYXRhKSB7XG4gICAgICAgIHJldHVybiB0b1N0cmluZyhkYXRhKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjb2RlKSB7XG5cbiAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvZGU6ICcnXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgbGV0IG5vZGU7XG4gICAgdHJ5IHtcbiAgICAgICAgbm9kZSA9IHBhcnNlKGNvZGUsIHtcbiAgICAgICAgICAgIHN0YXJ0UnVsZTogJ1Z1ZUV4cHJlc3Npb24nXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFN5bnRheEVycm9yIGlzIGZvdW5kIHdoZW4gcGFyc2luZyBjb2RlIFwiJHtjb2RlfVwiLCAke2Uuc3RhY2t9YCk7XG4gICAgfVxuXG4gICAgbGV0IGNvZGVnZW4gPSBuZXcgQ29kZUdlbih7XG4gICAgICAgIGNvZGVcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGFzdDogbm9kZS5leHByZXNzaW9uLFxuICAgICAgICAuLi5jb2RlZ2VuLnRyYXZlcnNlKG5vZGUsIG5vZGUpXG4gICAgfTtcbn1cbiIsIi8qKlxuICogQGZpbGUgY2xhc3NcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQgdHJhbnNmb3JtIGZyb20gJy4uL2V4cHJlc3Npb24tdHJhbnNmb3JtZXInO1xuXG5jb25zdCBiaW5kS2V5cyA9IFsnOmNsYXNzJywgJ3YtYmluZDpjbGFzcyddO1xuXG5mdW5jdGlvbiBwb3N0VHJhbnNmb3JtTm9kZShub2RlKSB7XG4gICAgaWYgKG5vZGUudHlwZSA9PT0gMSAmJiBub2RlLmNsYXNzQmluZGluZykge1xuICAgICAgICBjb25zdCBzdGF0aWNDbGFzcyA9IG5vZGUuYXR0cnNNYXAuY2xhc3MgfHwgJyc7XG4gICAgICAgIGNvbnN0IGNsYXNzQmluZGluZyA9IHRyYW5zZm9ybShub2RlLmNsYXNzQmluZGluZykuY29kZTtcbiAgICAgICAgbm9kZS5hdHRyc01hcC5jbGFzcyA9IGB7eyBfbWMoJyR7c3RhdGljQ2xhc3N9JywgJHtjbGFzc0JpbmRpbmd9KSB9fWA7XG4gICAgICAgIGJpbmRLZXlzLmZvckVhY2goa2V5ID0+IGRlbGV0ZSBub2RlLmF0dHJzTWFwW2tleV0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHBvc3RUcmFuc2Zvcm1Ob2RlXG59O1xuIiwiLyoqXG4gKiBAZmlsZSBzdHlsZVxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCB0cmFuc2Zvcm0gZnJvbSAnLi4vZXhwcmVzc2lvbi10cmFuc2Zvcm1lcic7XG5pbXBvcnQgdG9TaW5nbGVRdW90ZXMgZnJvbSAndG8tc2luZ2xlLXF1b3Rlcyc7XG5cbmNvbnN0IGJpbmRLZXlzID0gWyc6c3R5bGUnLCAndi1iaW5kOnN0eWxlJywgJ3Ytc2hvdyddO1xuXG5mdW5jdGlvbiBwb3N0VHJhbnNmb3JtTm9kZShub2RlKSB7XG4gICAgY29uc3QgdlNob3cgPSBub2RlLmF0dHJzTWFwWyd2LXNob3cnXTtcbiAgICBpZiAobm9kZS50eXBlID09PSAxICYmIChub2RlLnN0eWxlQmluZGluZyB8fCB2U2hvdykpIHtcbiAgICAgICAgY29uc3Qgc3RhdGljU3R5bGUgPSBub2RlLnN0YXRpY1N0eWxlIHx8ICdcXCdcXCcnO1xuICAgICAgICBjb25zdCBzdHlsZUJpbmRpbmcgPSBub2RlLnN0eWxlQmluZGluZyA/IHRyYW5zZm9ybShub2RlLnN0eWxlQmluZGluZykuY29kZSA6ICd7fSc7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG4gICAgICAgIG5vZGUuYXR0cnNNYXAuc3R5bGUgPSBge3sgX21zKCR7dG9TaW5nbGVRdW90ZXMoc3RhdGljU3R5bGUpfSwgJHtzdHlsZUJpbmRpbmd9JHt2U2hvdyA/IGAsICR7dHJhbnNmb3JtKHZTaG93KS5jb2RlfWAgOiAnJ30pIH19YDtcbiAgICAgICAgYmluZEtleXMuZm9yRWFjaChrZXkgPT4gZGVsZXRlIG5vZGUuYXR0cnNNYXBba2V5XSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcG9zdFRyYW5zZm9ybU5vZGVcbn07XG4iLCIvKipcbiAqIEBmaWxlIGJpbmRcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQgdHJhbnNmb3JtIGZyb20gJy4uL2V4cHJlc3Npb24tdHJhbnNmb3JtZXInO1xuXG5jb25zdCByZUJpbmQgPSAvXih2LWJpbmQpP1xcOi87XG5cbmZ1bmN0aW9uIHBvc3RUcmFuc2Zvcm1Ob2RlKG5vZGUpIHtcbiAgICBpZiAobm9kZS50eXBlICE9PSAxKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG5vZGUuYXR0cnNNYXApLmZpbHRlcihuID0+IHJlQmluZC50ZXN0KG4pKTtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gbm9kZS5hdHRyc01hcFtrZXldO1xuICAgICAgICBkZWxldGUgbm9kZS5hdHRyc01hcFtrZXldO1xuICAgICAgICBjb25zdCByZXQgPSB0cmFuc2Zvcm0odmFsdWUpO1xuICAgICAgICBjb25zdCBjb2RlID0gcmV0LmNvZGU7XG4gICAgICAgIG5vZGUuYXR0cnNNYXBba2V5LnJlcGxhY2UocmVCaW5kLCAnJyldID0gYHt7ICR7Y29kZX0gfX1gO1xuICAgIH1cblxuICAgIGlmIChub2RlLmF0dHJzTWFwWyd2LWJpbmQnXSkge1xuICAgICAgICBjb25zdCB2QmluZCA9IG5vZGUuYXR0cnNNYXBbJ3YtYmluZCddO1xuICAgICAgICBub2RlLmF0dHJzTWFwWydzLWJpbmQnXSA9IGB7eyAke3RyYW5zZm9ybSh2QmluZCkuY29kZX0gfX1gO1xuICAgICAgICBkZWxldGUgbm9kZS5hdHRyc01hcFsndi1iaW5kJ107XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcG9zdFRyYW5zZm9ybU5vZGVcbn07XG4iLCIvKipcbiAqIEBmaWxlIGlmXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHRyYW5zZm9ybSBmcm9tICcuLi9leHByZXNzaW9uLXRyYW5zZm9ybWVyJztcblxuZnVuY3Rpb24gcG9zdFRyYW5zZm9ybU5vZGUobm9kZSkge1xuICAgIGlmIChub2RlLnR5cGUgIT09IDEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChub2RlLmlmKSB7XG4gICAgICAgIG5vZGUuYXR0cnNNYXBbJ3MtaWYnXSA9IHRyYW5zZm9ybShub2RlLmlmKS5jb2RlO1xuICAgICAgICBkZWxldGUgbm9kZS5hdHRyc01hcFsndi1pZiddO1xuICAgIH1cblxuICAgIGlmIChub2RlLmVsc2VpZikge1xuICAgICAgICBub2RlLmF0dHJzTWFwWydzLWVsc2UtaWYnXSA9IHRyYW5zZm9ybShub2RlLmVsc2VpZikuY29kZTtcbiAgICAgICAgZGVsZXRlIG5vZGUuYXR0cnNNYXBbJ3YtZWxzZS1pZiddO1xuICAgIH1cblxuICAgIGlmIChub2RlLmVsc2UpIHtcbiAgICAgICAgbm9kZS5hdHRyc01hcFsncy1lbHNlJ10gPSBub2RlLmVsc2U7XG4gICAgICAgIGRlbGV0ZSBub2RlLmF0dHJzTWFwWyd2LWVsc2UnXTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwb3N0VHJhbnNmb3JtTm9kZVxufTtcbiIsIi8qKlxuICogQGZpbGUgZm9yXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHRyYW5zZm9ybSBmcm9tICcuLi9leHByZXNzaW9uLXRyYW5zZm9ybWVyJztcblxuZnVuY3Rpb24gcG9zdFRyYW5zZm9ybU5vZGUobm9kZSkge1xuICAgIGlmIChub2RlLnR5cGUgIT09IDEgfHwgIW5vZGUuZm9yKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgZnIgPSBub2RlLmFsaWFzO1xuXG4gICAgaWYgKG5vZGUuaXRlcmF0b3IxKSB7XG4gICAgICAgIGZyICs9IGAsJHtub2RlLml0ZXJhdG9yMX1gO1xuICAgIH1cblxuICAgIGZyICs9IGAgaW4gX2woJHtub2RlLmZvcn0pYDtcblxuICAgIGlmIChub2RlLmtleSkge1xuICAgICAgICBjb25zdCB0cmFja0J5RXhwciA9IHRyYW5zZm9ybShub2RlLmtleSk7XG4gICAgICAgIC8vIHNhbiDlj6rmlK/mjIHlj5jph49cbiAgICAgICAgZnIgKz0gdHJhY2tCeUV4cHIuYXN0LnR5cGUgPT09ICdJZGVudGlmaWVyJyA/IGAgdHJhY2tCeSAke25vZGUua2V5fWAgOiAnJztcbiAgICB9XG5cbiAgICBub2RlLmF0dHJzTWFwWydzLWZvciddID0gZnI7XG5cbiAgICBkZWxldGUgbm9kZS5hdHRyc01hcFsndi1mb3InXTtcbiAgICBkZWxldGUgbm9kZS5hdHRyc01hcFsna2V5J107XG4gICAgZGVsZXRlIG5vZGUuYXR0cnNNYXBbJzprZXknXTtcbiAgICBkZWxldGUgbm9kZS5hdHRyc01hcFsndi1iaW5kOmtleSddO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcG9zdFRyYW5zZm9ybU5vZGVcbn07XG4iLCIvKipcbiAqIEBmaWxlIGV2ZW50XG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHRyYW5zZm9ybSBmcm9tICcuLi9leHByZXNzaW9uLXRyYW5zZm9ybWVyJztcblxuY29uc3QgcmVFdmVudCA9IC9eKEB8di1vbjopLztcblxuZnVuY3Rpb24gcG9zdFRyYW5zZm9ybU5vZGUobm9kZSkge1xuICAgIGNvbnN0IGV2ZW50QXR0cnMgPSBub2RlLmF0dHJzTGlzdC5maWx0ZXIobiA9PiByZUV2ZW50LnRlc3Qobi5uYW1lKSk7XG4gICAgZm9yIChjb25zdCBhdHRyIG9mIGV2ZW50QXR0cnMpIHtcbiAgICAgICAgZGVsZXRlIG5vZGUuYXR0cnNNYXBbYXR0ci5uYW1lXTtcbiAgICAgICAgY29uc3QgW25hbWUsIC4uLm1vZGlmaWVyc10gPSBhdHRyLm5hbWUuc3BsaXQoJy4nKTtcbiAgICAgICAgY29uc3QgZXZlbnRIYW5kbGVyID0gYXR0ci52YWx1ZSA/IHRyYW5zZm9ybShhdHRyLnZhbHVlKS5jb2RlIDogJ19ub29wJztcbiAgICAgICAgbm9kZS5hdHRyc01hcFtgb24tJHtuYW1lLnJlcGxhY2UocmVFdmVudCwgJycpfWBdXG4gICAgICAgICAgICA9IGAke21vZGlmaWVycy5tYXAobSA9PiBgJHttfTpgKS5qb2luKCcnKX0ke2V2ZW50SGFuZGxlcn1gO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHBvc3RUcmFuc2Zvcm1Ob2RlXG59O1xuIiwiLyoqXG4gKiBAZmlsZSBjbGFzc1xuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmZ1bmN0aW9uIHBvc3RUcmFuc2Zvcm1Ob2RlKG5vZGUpIHtcblxuICAgIGlmIChub2RlLmF0dHJzTWFwICYmIG5vZGUuYXR0cnNNYXBbJ3YtZGFuZ2Vyb3VzLWh0bWwnXSkge1xuICAgICAgICBub2RlLmF0dHJzTWFwWyd2LWh0bWwnXSA9IG5vZGUuYXR0cnNNYXBbJ3YtZGFuZ2Vyb3VzLWh0bWwnXTtcbiAgICAgICAgZGVsZXRlIG5vZGUuYXR0cnNNYXBbJ3YtZGFuZ2Vyb3VzLWh0bWwnXTtcbiAgICB9XG5cbiAgICBpZiAobm9kZS5hdHRyc01hcCAmJiBub2RlLmF0dHJzTWFwWyd2LXNhZmUtaHRtbCddKSB7XG4gICAgICAgIG5vZGUuYXR0cnNNYXBbJ3YtaHRtbCddID0gYF9zZigke25vZGUuYXR0cnNNYXBbJ3Ytc2FmZS1odG1sJ119KWA7XG4gICAgICAgIGRlbGV0ZSBub2RlLmF0dHJzTWFwWyd2LWRhbmdlcm91cy1odG1sJ107XG4gICAgfVxuXG4gICAgaWYgKG5vZGUudHlwZSA9PT0gMSAmJiBub2RlLmF0dHJzTWFwWyd2LWh0bWwnXSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IG5vZGUuZGlyZWN0aXZlcy5maW5kKGQgPT4gZC5uYW1lID09PSAnaHRtbCcpLnZhbHVlO1xuICAgICAgICBkZWxldGUgbm9kZS5hdHRyc01hcFsndi1odG1sJ107XG4gICAgICAgIG5vZGUuYXR0cnNNYXBbJ3MtaHRtbCddID0gYHt7ICR7dmFsdWV9IH19YDtcbiAgICAgICAgbm9kZS5jaGlsZHJlbiA9IFtdO1xuICAgIH1cblxuICAgIGlmIChub2RlLnR5cGUgPT09IDEgJiYgbm9kZS5hdHRyc01hcFsndi10ZXh0J10pIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBub2RlLmRpcmVjdGl2ZXMuZmluZChkID0+IGQubmFtZSA9PT0gJ3RleHQnKS52YWx1ZTtcbiAgICAgICAgZGVsZXRlIG5vZGUuYXR0cnNNYXBbJ3YtdGV4dCddO1xuICAgICAgICBub2RlLmNoaWxkcmVuID0gW3tcbiAgICAgICAgICAgIHR5cGU6IDIsXG4gICAgICAgICAgICB0ZXh0OiBge3sgJHt2YWx1ZX0gfX1gXG4gICAgICAgIH1dO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHBvc3RUcmFuc2Zvcm1Ob2RlXG59O1xuIiwiLyoqXG4gKiBAZmlsZSByZWZcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5mdW5jdGlvbiBwb3N0VHJhbnNmb3JtTm9kZShub2RlLCBvcHRpb25zKSB7XG4gICAgaWYgKG5vZGUudHlwZSAhPT0gMSB8fCAhbm9kZS5hdHRyc01hcC5yZWYgJiYgIW5vZGUuYXR0cnNNYXBbJzpyZWYnXSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcmVmID0gbm9kZS5hdHRyc01hcC5yZWY7XG4gICAgaWYgKHJlZikge1xuICAgICAgICBkZWxldGUgbm9kZS5hdHRyc01hcC5yZWY7XG4gICAgICAgIG5vZGUuYXR0cnNNYXBbJ3MtcmVmJ10gPSByZWY7XG5cbiAgICAgICAgY29uc3QgaW5mbyA9IHtcbiAgICAgICAgICAgIG5hbWU6IHJlZixcbiAgICAgICAgICAgIHJvb3Q6IG5vZGUucGFyZW50ID8gdW5kZWZpbmVkIDogMVxuICAgICAgICB9O1xuXG4gICAgICAgIG9wdGlvbnMucmVmcy5wdXNoKGluZm8pO1xuICAgIH1cblxuICAgIGNvbnN0IGJpbmRSZWYgPSBub2RlLmF0dHJzTWFwWyc6cmVmJ107XG4gICAgaWYgKGJpbmRSZWYpIHtcbiAgICAgICAgZGVsZXRlIG5vZGUuYXR0cnNNYXBbJzpyZWYnXTtcbiAgICAgICAgbm9kZS5hdHRyc01hcFsncy1yZWYnXSA9IGB7eyAke2JpbmRSZWZ9IH19YDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwb3N0VHJhbnNmb3JtTm9kZVxufTtcbiIsIi8qKlxuICogQGZpbGUgY29tcG9uZW50IDppc1xuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCB7cGFyc2V9IGZyb20gJ2F0b20tZXhwcmVzc2lvbi1jb21waWxlcic7XG5cbmZ1bmN0aW9uIHBvc3RUcmFuc2Zvcm1Ob2RlKG5vZGUsIG9wdGlvbnMpIHtcbiAgICBpZiAoIShub2RlLnR5cGUgPT09IDEgJiYgbm9kZS50YWcgPT09ICdjb21wb25lbnQnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGlzID0gbm9kZS5hdHRyc01hcC5pcztcbiAgICBkZWxldGUgbm9kZS5hdHRyc01hcC5pcztcblxuICAgIGlmICghaXMuc3RhcnRzV2l0aCgne3snKSkge1xuICAgICAgICBub2RlLnRhZyA9IG5vZGUuYXR0cnNNYXAuaXM7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB2YWx1ZSA9IGlzLnNsaWNlKDIsIGlzLmxlbmd0aCAtIDIpLnRyaW0oKTtcbiAgICBjb25zdCBleHByID0gcGFyc2UodmFsdWUsIHtcbiAgICAgICAgc3RhcnRSdWxlOiAnVnVlRXhwcmVzc2lvbidcbiAgICB9KTtcblxuICAgIGlmIChub2RlLmlmIHx8IG5vZGUuZWxzZWlmIHx8IG5vZGUuZWxzZSkge1xuICAgICAgICBvcHRpb25zLmVycm9yKCdkeW5hbWljIGNvbXBvbmVudCBjYW4gbm90IHVzZSB3aXRoIHYtaWYuJyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICAgIGV4cHIuZXhwcmVzc2lvbi50eXBlID09PSAnQ29uZGl0aW9uYWxFeHByZXNzaW9uJ1xuICAgICAgICAmJiBleHByLmV4cHJlc3Npb24uY29uc2VxdWVudC50eXBlID09PSAnTGl0ZXJhbCdcbiAgICAgICAgJiYgZXhwci5leHByZXNzaW9uLmFsdGVybmF0ZS50eXBlID09PSAnTGl0ZXJhbCdcbiAgICApIHtcbiAgICAgICAgY29uc3QgdGVzdExvY2F0aW9uID0gZXhwci5leHByZXNzaW9uLnRlc3QubG9jYXRpb247XG4gICAgICAgIGNvbnN0IHRlc3QgPSB2YWx1ZS5zbGljZSh0ZXN0TG9jYXRpb24uc3RhcnQub2Zmc2V0LCB0ZXN0TG9jYXRpb24uZW5kLm9mZnNldCk7XG4gICAgICAgIGNvbnN0IGF0dHJzID0ge1xuICAgICAgICAgICAgLi4ubm9kZS5hdHRyc01hcCxcbiAgICAgICAgICAgICdzLWVsc2UnOiAnJ1xuICAgICAgICB9O1xuICAgICAgICBub2RlLnRhZyA9IGV4cHIuZXhwcmVzc2lvbi5jb25zZXF1ZW50LnZhbHVlO1xuICAgICAgICBub2RlLmF0dHJzTWFwWydzLWlmJ10gPSB0ZXN0O1xuICAgICAgICBub2RlLmlmQ29uZGl0aW9ucyA9IFt7XG4gICAgICAgICAgICBleHA6IHRlc3QsXG4gICAgICAgICAgICBibG9jazogbm9kZVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBibG9jazoge1xuICAgICAgICAgICAgICAgIC4uLm5vZGUsXG4gICAgICAgICAgICAgICAgYXR0cnNNYXA6IGF0dHJzLFxuICAgICAgICAgICAgICAgIHRhZzogZXhwci5leHByZXNzaW9uLmFsdGVybmF0ZS52YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwb3N0VHJhbnNmb3JtTm9kZVxufTtcbiIsIi8qKlxuICogQGZpbGUgY29uc3RhbnRzXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuLypcbiAgU2VsZi1lbmNsb3NpbmcgdGFncyAoc3RvbGVuIGZyb20gbm9kZS1odG1scGFyc2VyKVxuKi9cbmV4cG9ydCBjb25zdCBzaW5nbGVUYWcgPSB7XG4gICAgYXJlYTogdHJ1ZSxcbiAgICBiYXNlOiB0cnVlLFxuICAgIGJhc2Vmb250OiB0cnVlLFxuICAgIGJyOiB0cnVlLFxuICAgIGNvbDogdHJ1ZSxcbiAgICBjb21tYW5kOiB0cnVlLFxuICAgIGVtYmVkOiB0cnVlLFxuICAgIGZyYW1lOiB0cnVlLFxuICAgIGhyOiB0cnVlLFxuICAgIGltZzogdHJ1ZSxcbiAgICBpbnB1dDogdHJ1ZSxcbiAgICBpc2luZGV4OiB0cnVlLFxuICAgIGtleWdlbjogdHJ1ZSxcbiAgICBsaW5rOiB0cnVlLFxuICAgIG1ldGE6IHRydWUsXG4gICAgcGFyYW06IHRydWUsXG4gICAgc291cmNlOiB0cnVlLFxuICAgIHRyYWNrOiB0cnVlLFxuICAgIHdicjogdHJ1ZVxufTtcblxuZXhwb3J0IGNvbnN0IGJvb2xlYW5BdHRyID0ge1xuICAgIGFsbG93ZnVsbHNjcmVlbjogdHJ1ZSxcbiAgICBhc3luYzogdHJ1ZSxcbiAgICBhdXRvZm9jdXM6IHRydWUsXG4gICAgYXV0b3BsYXk6IHRydWUsXG4gICAgY2hlY2tlZDogdHJ1ZSxcbiAgICBjb21wYWN0OiB0cnVlLFxuICAgIGNvbnRyb2xzOiB0cnVlLFxuICAgIGRlY2xhcmU6IHRydWUsXG4gICAgZGVmYXVsdDogdHJ1ZSxcbiAgICBkZWZhdWx0Y2hlY2tlZDogdHJ1ZSxcbiAgICBkZWZhdWx0bXV0ZWQ6IHRydWUsXG4gICAgZGVmYXVsdHNlbGVjdGVkOiB0cnVlLFxuICAgIGRlZmVyOiB0cnVlLFxuICAgIGRpc2FibGVkOiB0cnVlLFxuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgZm9ybW5vdmFsaWRhdGU6IHRydWUsXG4gICAgaGlkZGVuOiB0cnVlLFxuICAgIGluZGV0ZXJtaW5hdGU6IHRydWUsXG4gICAgaW5lcnQ6IHRydWUsXG4gICAgaXNtYXA6IHRydWUsXG4gICAgaXRlbXNjb3BlOiB0cnVlLFxuICAgIGxvb3A6IHRydWUsXG4gICAgbXVsdGlwbGU6IHRydWUsXG4gICAgbXV0ZWQ6IHRydWUsXG4gICAgbm9ocmVmOiB0cnVlLFxuICAgIG5vcmVzaXplOiB0cnVlLFxuICAgIG5vc2hhZGU6IHRydWUsXG4gICAgbm92YWxpZGF0ZTogdHJ1ZSxcbiAgICBub3dyYXA6IHRydWUsXG4gICAgb3BlbjogdHJ1ZSxcbiAgICBwYXVzZW9uZXhpdDogdHJ1ZSxcbiAgICByZWFkb25seTogdHJ1ZSxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICByZXZlcnNlZDogdHJ1ZSxcbiAgICBzY29wZWQ6IHRydWUsXG4gICAgc2VhbWxlc3M6IHRydWUsXG4gICAgc2VsZWN0ZWQ6IHRydWUsXG4gICAgc29ydGFibGU6IHRydWUsXG4gICAgdHJhbnNsYXRlOiB0cnVlLFxuICAgIHRydWVzcGVlZDogdHJ1ZSxcbiAgICB0eXBlbXVzdG1hdGNoOiB0cnVlLFxuICAgIHZpc2libGU6IHRydWUsXG59O1xuXG5cbmV4cG9ydCBjb25zdCBub1ZhbHVlQXR0ciA9IHtcbiAgICAncy1lbHNlJzogdHJ1ZVxufTtcblxuXG5leHBvcnQgY29uc3QgaHRtbFRhZyA9IHtcbiAgICBodG1sOiB0cnVlLFxuICAgIGJvZHk6IHRydWUsXG4gICAgYmFzZTogdHJ1ZSxcbiAgICBoZWFkOiB0cnVlLFxuICAgIGxpbms6IHRydWUsXG4gICAgbWV0YTogdHJ1ZSxcbiAgICBzdHlsZTogdHJ1ZSxcbiAgICB0aXRsZTogdHJ1ZSxcbiAgICBhZGRyZXNzOiB0cnVlLFxuICAgIGFydGljbGU6IHRydWUsXG4gICAgYXNpZGU6IHRydWUsXG4gICAgZm9vdGVyOiB0cnVlLFxuICAgIGhlYWRlcjogdHJ1ZSxcbiAgICBoMTogdHJ1ZSxcbiAgICBoMjogdHJ1ZSxcbiAgICBoMzogdHJ1ZSxcbiAgICBoNDogdHJ1ZSxcbiAgICBoNTogdHJ1ZSxcbiAgICBoNjogdHJ1ZSxcbiAgICBoZ3JvdXA6IHRydWUsXG4gICAgbmF2OiB0cnVlLFxuICAgIHNlY3Rpb246IHRydWUsXG4gICAgZGl2OiB0cnVlLFxuICAgIGRkOiB0cnVlLFxuICAgIGRsOiB0cnVlLFxuICAgIGR0OiB0cnVlLFxuICAgIGZpZ2NhcHRpb246IHRydWUsXG4gICAgZmlndXJlOiB0cnVlLFxuICAgIGhyOiB0cnVlLFxuICAgIGltZzogdHJ1ZSxcbiAgICBsaTogdHJ1ZSxcbiAgICBtYWluOiB0cnVlLFxuICAgIG9sOiB0cnVlLFxuICAgIHA6IHRydWUsXG4gICAgcHJlOiB0cnVlLFxuICAgIHVsOiB0cnVlLFxuICAgIGE6IHRydWUsXG4gICAgYjogdHJ1ZSxcbiAgICBhYmJyOiB0cnVlLFxuICAgIGJkaTogdHJ1ZSxcbiAgICBiZG86IHRydWUsXG4gICAgYnI6IHRydWUsXG4gICAgY2l0ZTogdHJ1ZSxcbiAgICBjb2RlOiB0cnVlLFxuICAgIGRhdGE6IHRydWUsXG4gICAgZGZuOiB0cnVlLFxuICAgIGVtOiB0cnVlLFxuICAgIGk6IHRydWUsXG4gICAga2JkOiB0cnVlLFxuICAgIG1hcms6IHRydWUsXG4gICAgcTogdHJ1ZSxcbiAgICBycDogdHJ1ZSxcbiAgICBydDogdHJ1ZSxcbiAgICBydGM6IHRydWUsXG4gICAgcnVieTogdHJ1ZSxcbiAgICBzOiB0cnVlLFxuICAgIHNhbXA6IHRydWUsXG4gICAgc21hbGw6IHRydWUsXG4gICAgc3BhbjogdHJ1ZSxcbiAgICBzdHJvbmc6IHRydWUsXG4gICAgc3ViOiB0cnVlLFxuICAgIHN1cDogdHJ1ZSxcbiAgICB0aW1lOiB0cnVlLFxuICAgIHU6IHRydWUsXG4gICAgdmFyOiB0cnVlLFxuICAgIHdicjogdHJ1ZSxcbiAgICBhcmVhOiB0cnVlLFxuICAgIGF1ZGlvOiB0cnVlLFxuICAgIG1hcDogdHJ1ZSxcbiAgICB0cmFjazogdHJ1ZSxcbiAgICB2aWRlbzogdHJ1ZSxcbiAgICBlbWJlZDogdHJ1ZSxcbiAgICBvYmplY3Q6IHRydWUsXG4gICAgcGFyYW06IHRydWUsXG4gICAgc291cmNlOiB0cnVlLFxuICAgIGNhbnZhczogdHJ1ZSxcbiAgICBzY3JpcHQ6IHRydWUsXG4gICAgbm9zY3JpcHQ6IHRydWUsXG4gICAgZGVsOiB0cnVlLFxuICAgIGluczogdHJ1ZSxcbiAgICBjYXB0aW9uOiB0cnVlLFxuICAgIGNvbDogdHJ1ZSxcbiAgICBjb2xncm91cDogdHJ1ZSxcbiAgICB0YWJsZTogdHJ1ZSxcbiAgICB0aGVhZDogdHJ1ZSxcbiAgICB0Ym9keTogdHJ1ZSxcbiAgICB0ZDogdHJ1ZSxcbiAgICB0aDogdHJ1ZSxcbiAgICB0cjogdHJ1ZSxcbiAgICBidXR0b246IHRydWUsXG4gICAgZGF0YWxpc3Q6IHRydWUsXG4gICAgZmllbGRzZXQ6IHRydWUsXG4gICAgZm9ybTogdHJ1ZSxcbiAgICBpbnB1dDogdHJ1ZSxcbiAgICBsYWJlbDogdHJ1ZSxcbiAgICBsZWdlbmQ6IHRydWUsXG4gICAgbWV0ZXI6IHRydWUsXG4gICAgb3B0Z3JvdXA6IHRydWUsXG4gICAgb3B0aW9uOiB0cnVlLFxuICAgIG91dHB1dDogdHJ1ZSxcbiAgICBwcm9ncmVzczogdHJ1ZSxcbiAgICBzZWxlY3Q6IHRydWUsXG4gICAgdGV4dGFyZWE6IHRydWUsXG4gICAgZGV0YWlsczogdHJ1ZSxcbiAgICBkaWFsb2c6IHRydWUsXG4gICAgbWVudTogdHJ1ZSxcbiAgICBtZW51aXRlbTogdHJ1ZSxcbiAgICBzdW1tYXJ5OiB0cnVlLFxuICAgIGNvbnRlbnQ6IHRydWUsXG4gICAgZWxlbWVudDogdHJ1ZSxcbiAgICBzaGFkb3c6IHRydWUsXG4gICAgdGVtcGxhdGU6IHRydWVcbn07XG4iLCIvKipcbiAqIEBmaWxlIGJvb2wg5Z6L5Lyg5YC8XG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHtib29sZWFuQXR0ciwgbm9WYWx1ZUF0dHIsIGh0bWxUYWd9IGZyb20gJy4uL2NvbnN0YW50JztcblxuZnVuY3Rpb24gcG9zdFRyYW5zZm9ybU5vZGUobm9kZSkge1xuICAgIGlmICghbm9kZS50eXBlID09PSAxIHx8ICFub2RlLmF0dHJzTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMobm9kZS5hdHRyc01hcCkuZmlsdGVyKG4gPT4gbm9kZS5hdHRyc01hcFtuXSA9PT0gJycpO1xuICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgaWYgKChodG1sVGFnW25vZGUudGFnXSAmJiBib29sZWFuQXR0cltrZXldKSB8fCBub1ZhbHVlQXR0cltrZXldKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBub2RlLmF0dHJzTWFwW2tleV0gPSBge3sgdHJ1ZSB9fWA7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcG9zdFRyYW5zZm9ybU5vZGVcbn07XG4iLCIvKipcbiAqIEBmaWxlIHRyYW5zZm9ybWVyc1xuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCBjbGF6eiBmcm9tICcuL2NsYXNzJztcbmltcG9ydCBzdHlsZSBmcm9tICcuL3N0eWxlJztcbmltcG9ydCBiaW5kIGZyb20gJy4vYmluZCc7XG5pbXBvcnQgeWYgZnJvbSAnLi9pZic7XG5pbXBvcnQgZnIgZnJvbSAnLi9mb3InO1xuaW1wb3J0IGV2ZW50IGZyb20gJy4vZXZlbnQnO1xuaW1wb3J0IGh0bWwgZnJvbSAnLi9odG1sJztcbmltcG9ydCByZWYgZnJvbSAnLi9yZWYnO1xuaW1wb3J0IGR5bmFtaWNDb21wb25lbnQgZnJvbSAnLi9keW5hbWljLWNvbXBvbmVudCc7XG5pbXBvcnQgYm9vbCBmcm9tICcuL2Jvb2xlYW4nO1xuXG5leHBvcnQgZGVmYXVsdCBbXG4gICAgYm9vbCxcbiAgICB5ZixcbiAgICBmcixcbiAgICBldmVudCxcbiAgICBodG1sLFxuICAgIHJlZixcblxuICAgIGNsYXp6LFxuICAgIHN0eWxlLFxuXG4gICAgLy8gYmluZCDmlL7lnKjmiYDmnInlpITnkIblrozkuYvlkI5cbiAgICBiaW5kLFxuXG4gICAgZHluYW1pY0NvbXBvbmVudFxuXTtcbiIsIi8qKlxuICogQGZpbGUgZ2V0IGh0bWwgZnJvbSBhc3RcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQge3RyaW19IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQge25vVmFsdWVBdHRyLCBzaW5nbGVUYWcsIGJvb2xlYW5BdHRyLCBodG1sVGFnfSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCB0cmFuc2Zvcm0gZnJvbSAnLi9leHByZXNzaW9uLXRyYW5zZm9ybWVyJztcblxuZnVuY3Rpb24gc3RyaW5naWZ5QXR0cihrZXksIHZhbHVlLCB0YWcpIHtcbiAgICBpZiAobm9WYWx1ZUF0dHJba2V5XSB8fCAoIXZhbHVlICYmIGh0bWxUYWdbdGFnXSAmJiBib29sZWFuQXR0cltrZXldKSkge1xuICAgICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgICByZXR1cm4gYCR7a2V5fT0ke0pTT04uc3RyaW5naWZ5KHZhbHVlLnN0YXJ0c1dpdGgoJ3t7JykgPyB2YWx1ZSA6IHZhbHVlLnJlcGxhY2UoL1xccysvZywgJyAnKSl9YDtcbn1cblxuLy8gZnVuY3Rpb24gdHJhbnNmb3JtQ2hpbGQobm9kZSkge1xuLy8gICAgIHJldHVybiBub2RlLnRva2Vucy5yZWR1Y2UoKHByZXYsIHRva2VuKSA9PiB7XG4vLyAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09ICdzdHJpbmcnKSB7XG4vLyAgICAgICAgICAgICByZXR1cm4gcHJldiArIHRva2VuO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKG5vZGUpO1xuLy8gICAgICAgICByZXR1cm4gcHJldiArIGB7eyAke3RyYW5zZm9ybSh0b2tlblsnQGJpbmRpbmcnXSkuY29kZX0gfX1gO1xuLy8gICAgIH0sICcnKTtcbi8vIH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RyaW5naWZ5KGFzdCwge3Njb3BlSWQsIHN0cmlwLCBhdG9tfSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShhc3QpKSB7XG4gICAgICAgIGFzdCA9IFthc3RdO1xuICAgIH1cblxuICAgIGxldCBodG1sID0gJyc7XG5cbiAgICBmb3IgKGNvbnN0IG5vZGUgb2YgYXN0KSB7XG4gICAgICAgIGlmIChub2RlLnR5cGUgPT09IDMgfHwgbm9kZS50eXBlID09PSAyKSB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gbm9kZS50ZXh0O1xuICAgICAgICAgICAgaHRtbCArPSBzdHJpcFxuICAgICAgICAgICAgICAgID8gdHJpbSh0ZXh0LCAnIFxcblxcdCcpXG4gICAgICAgICAgICAgICAgOiB0ZXh0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG5vZGUudHlwZSA9PT0gMSkge1xuICAgICAgICAgICAgY29uc3QgYXR0cnMgPSBPYmplY3Qua2V5cyhub2RlLmF0dHJzTWFwKS5tYXAoa2V5ID0+IHN0cmluZ2lmeUF0dHIoa2V5LCBub2RlLmF0dHJzTWFwW2tleV0sIG5vZGUudGFnKSk7XG4gICAgICAgICAgICBpZiAoc2NvcGVJZCkge1xuICAgICAgICAgICAgICAgIHNjb3BlSWQgPSBzY29wZUlkLnJlcGxhY2UoL15kYXRhLShhfHYpLS8sICcnKTtcbiAgICAgICAgICAgICAgICBhdHRycy5wdXNoKGBkYXRhLSR7YXRvbSA/ICdhJyA6ICd2J30tJHtzY29wZUlkfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgaGFzQ2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuICYmIG5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMDtcbiAgICAgICAgICAgIGNvbnN0IGhhc0F0dHIgPSBhdHRycy5sZW5ndGggPiAwO1xuICAgICAgICAgICAgaHRtbCArPSBgPCR7bm9kZS50YWd9JHtoYXNBdHRyID8gJyAnIDogJyd9JHthdHRycy5qb2luKCcgJyl9PmA7XG4gICAgICAgICAgICBodG1sICs9IGhhc0NoaWxkcmVuID8gc3RyaW5naWZ5KG5vZGUuY2hpbGRyZW4sIHtzY29wZUlkLCBzdHJpcCwgYXRvbX0pIDogJyc7XG4gICAgICAgICAgICBodG1sICs9ICFoYXNDaGlsZHJlbiAmJiBzaW5nbGVUYWdbbm9kZS50YWddID8gJycgOiBgPC8ke25vZGUudGFnfT5gO1xuXG4gICAgICAgICAgICBpZiAobm9kZS5pZkNvbmRpdGlvbnMgJiYgbm9kZS5pZkNvbmRpdGlvbnMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIGh0bWwgKz0gc3RyaW5naWZ5KG5vZGUuaWZDb25kaXRpb25zLnNsaWNlKDEpLm1hcChuID0+IG4uYmxvY2spLCB7c2NvcGVJZCwgc3RyaXAsIGF0b219KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBodG1sO1xufVxuIiwiLyoqXG4gKiBAZmlsZSDkuIDkupvlt6Xlhbflh73mlbBcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG4vKipcbiAqIE1peCBwcm9wZXJ0aWVzIGludG8gdGFyZ2V0IG9iamVjdC5cbiAqL1xuZXhwb3J0IGNvbnN0IGV4dGVuZCA9IE9iamVjdC5hc3NpZ247XG5cbi8qKlxuICogTWVyZ2UgYW4gQXJyYXkgb2YgT2JqZWN0cyBpbnRvIGEgc2luZ2xlIE9iamVjdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvT2JqZWN0KGFycikge1xuICAgIGNvbnN0IHJlcyA9IHt9O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChhcnJbaV0pIHtcbiAgICAgICAgICAgIGV4dGVuZChyZXMsIGFycltpXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHJhdyB0eXBlIHN0cmluZyBvZiBhIHZhbHVlLCBlLmcuLCBbb2JqZWN0IE9iamVjdF0uXG4gKi9cbmV4cG9ydCBjb25zdCBfdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIFF1aWNrIG9iamVjdCBjaGVjayAtIHRoaXMgaXMgcHJpbWFyaWx5IHVzZWQgdG8gdGVsbFxuICogT2JqZWN0cyBmcm9tIHByaW1pdGl2ZSB2YWx1ZXMgd2hlbiB3ZSBrbm93IHRoZSB2YWx1ZVxuICogaXMgYSBKU09OLWNvbXBsaWFudCB0eXBlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3Qob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAhPT0gbnVsbCAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIGFuIG9iamVjdCBoYXMgdGhlIHByb3BlcnR5LlxuICovXG5jb25zdCBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5leHBvcnQgZnVuY3Rpb24gaGFzT3duKG9iaiwga2V5KSB7XG4gICAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpO1xufVxuXG4vKipcbiAqIFN0cmljdCBvYmplY3QgdHlwZSBjaGVjay4gT25seSByZXR1cm5zIHRydWVcbiAqIGZvciBwbGFpbiBKYXZhU2NyaXB0IG9iamVjdHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1BsYWluT2JqZWN0KG9iaikge1xuICAgIHJldHVybiBfdG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBPYmplY3RdJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZihvYmosIGtleSwgcHJvcGVydHkpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIGV4dGVuZCh7XG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9LCBwcm9wZXJ0eSkpO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIGNhY2hlZCB2ZXJzaW9uIG9mIGEgcHVyZSBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhY2hlZChmbikge1xuICAgIGNvbnN0IGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gY2FjaGVkRm4oc3RyKSB7XG4gICAgICAgIGNvbnN0IGhpdCA9IGNhY2hlW3N0cl07XG4gICAgICAgIHJldHVybiBoaXQgfHwgKGNhY2hlW3N0cl0gPSBmbihzdHIpKTtcbiAgICB9O1xufVxuXG4vKipcbiAqIEh5cGhlbmF0ZSBhIGNhbWVsQ2FzZSBzdHJpbmcuXG4gKi9cbmNvbnN0IGh5cGhlbmF0ZVJFID0gLyhbXi1dKShbQS1aXSkvZztcbmV4cG9ydCBjb25zdCBoeXBoZW5hdGUgPSBjYWNoZWQoKHN0cikgPT4ge1xuICAgIHJldHVybiBzdHJcbiAgICAgICAgLnJlcGxhY2UoaHlwaGVuYXRlUkUsICckMS0kMicpXG4gICAgICAgIC5yZXBsYWNlKGh5cGhlbmF0ZVJFLCAnJDEtJDInKVxuICAgICAgICAudG9Mb3dlckNhc2UoKTtcbn0pO1xuXG5leHBvcnQgY29uc3QgY2FtZWxpemUgPSBzdHIgPT4gc3RyLnJlcGxhY2UoLy0oXFx3KS9nLCAoXywgYykgPT4gKGMgPyBjLnRvVXBwZXJDYXNlKCkgOiAnJykpO1xuIiwiLyoqXG4gKiBAZmlsZSBjc3MgbW9kdWxlcyBtb2R1bGVcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQge2NhbWVsaXplfSBmcm9tICcuLi8uLi9zaGFyZWQvdXRpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjc3NNb2R1bGVzKSB7XG5cbiAgICBmdW5jdGlvbiBwcmVUcmFuc2Zvcm1Ob2RlKGVsKSB7XG4gICAgICAgIGlmIChjc3NNb2R1bGVzICYmIGNzc01vZHVsZXMuJHN0eWxlICYmIGVsLmF0dHJzTWFwLmNsYXNzKSB7XG4gICAgICAgICAgICBjb25zdCBzdGF0aWNDbGFzcyA9IGVsLmF0dHJzTWFwLmNsYXNzLnJlcGxhY2UoLyheXCJ8XCIkKS9nLCAnJykuc3BsaXQoJyAnKTtcbiAgICAgICAgICAgIGVsLmF0dHJzTWFwLmNsYXNzID0gc3RhdGljQ2xhc3MubWFwKGMgPT4gKGNzc01vZHVsZXMuJHN0eWxlW2NhbWVsaXplKGMpXSB8fCBjKSkuam9pbignICcpO1xuICAgICAgICAgICAgZWwuYXR0cnNMaXN0ID0gZWwuYXR0cnNMaXN0Lm1hcChcbiAgICAgICAgICAgICAgICAoe25hbWUsIHZhbHVlfSkgPT4gKHtuYW1lLCB2YWx1ZTogbmFtZSA9PT0gJ2NsYXNzJyA/IGVsLmF0dHJzTWFwLmNsYXNzIDogdmFsdWV9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHByZVRyYW5zZm9ybU5vZGVcbiAgICB9O1xufVxuXG4iLCIvKipcbiAqIEBmaWxlIGF0b20gbW9kdWxlXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuZnVuY3Rpb24gcHJlVHJhbnNmb3JtTm9kZShlbCkge1xuICAgIGVsLmF0dHJzTGlzdCA9IGVsLmF0dHJzTGlzdC5tYXAoKHtuYW1lLCB2YWx1ZX0pID0+IHtcbiAgICAgICAgZGVsZXRlIGVsLmF0dHJzTWFwW25hbWVdO1xuICAgICAgICBuYW1lID0gbmFtZS5yZXBsYWNlKC9eYS0vLCAndi0nKTtcbiAgICAgICAgZWwuYXR0cnNNYXBbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgbmFtZVxuICAgICAgICB9O1xuICAgIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcHJlVHJhbnNmb3JtTm9kZVxufTtcbiIsIi8qKlxuICogQGZpbGUgY29tcGlsZXJcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQgYnVpbGRJbk1vZHVsZXMgZnJvbSAnLi9tb2R1bGVzJztcbmltcG9ydCB7Y29tcGlsZSBhcyB2dWVDb21waWxlfSBmcm9tICd2dWUtdGVtcGxhdGUtY29tcGlsZXInO1xuaW1wb3J0IHN0cmluZ2lmeSBmcm9tICcuL3N0cmluZ2lmeSc7XG5pbXBvcnQgZ2V0Q3NzTW9kdWxlcyBmcm9tICcuL21vZHVsZXMvY3NzbW9kdWxlcyc7XG5pbXBvcnQgYXRvbSBmcm9tICcuL21vZHVsZXMvYXRvbSc7XG5pbXBvcnQge2lzRW1wdHl9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQge3BhcnNlVGVtcGxhdGV9IGZyb20gJ3Nhbic7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21waWxlKHNvdXJjZSwgb3B0aW9ucyA9IHt9KSB7XG5cbiAgICBjb25zdCB7XG4gICAgICAgIG1vZHVsZXMgPSBbXSxcbiAgICAgICAgY3NzTW9kdWxlcyA9IG51bGwsXG4gICAgICAgIHNjb3BlSWQgPSAnJyxcbiAgICAgICAgc3RyaXAgPSB0cnVlLFxuICAgICAgICBhdG9tOiBpc0F0b20gPSBmYWxzZVxuICAgIH0gPSBvcHRpb25zO1xuXG4gICAgaWYgKCFpc0VtcHR5KGNzc01vZHVsZXMpKSB7XG4gICAgICAgIG1vZHVsZXMudW5zaGlmdChnZXRDc3NNb2R1bGVzKGNzc01vZHVsZXMpKTtcbiAgICB9XG5cbiAgICBpZiAoaXNBdG9tKSB7XG4gICAgICAgIG1vZHVsZXMudW5zaGlmdChhdG9tKTtcbiAgICB9XG5cbiAgICBjb25zdCBlcnJvcnMgPSBbXTtcbiAgICBjb25zdCBjb21waWxlck9wdGlvbnMgPSB7XG4gICAgICAgIG1vZHVsZXM6IFtcbiAgICAgICAgICAgIC4uLmJ1aWxkSW5Nb2R1bGVzLFxuICAgICAgICAgICAgLi4ubW9kdWxlc1xuICAgICAgICBdLFxuICAgICAgICBwcmVzZXJ2ZVdoaXRlc3BhY2U6IGZhbHNlLFxuICAgICAgICB1c2VEeW5hbWljQ29tcG9uZW50OiBmYWxzZSxcbiAgICAgICAgcmVmczogW10sXG4gICAgICAgIGVycm9yKG1zZykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgW3Z1c2EgZXJyb3JdICR7bXNnfWApO1xuICAgICAgICAgICAgZXJyb3JzLnB1c2gobXNnKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBjb25zb2xlLmxvZyhzb3VyY2UpO1xuXG4gICAgY29uc3Qge2FzdH0gPSB2dWVDb21waWxlKHNvdXJjZS50cmltKCksIGNvbXBpbGVyT3B0aW9ucyk7XG5cbiAgICBjb25zdCB0ZW1wbGF0ZSA9IHN0cmluZ2lmeShhc3QsIHsgc2NvcGVJZCwgc3RyaXAsIGF0b206IGlzQXRvbSB9KTtcbiAgICAvLyBjb25zb2xlLmxvZyh0ZW1wbGF0ZSk7XG4gICAgY29uc3QgYU5vZGUgPSBwYXJzZVRlbXBsYXRlKHRlbXBsYXRlKS5jaGlsZHJlblswXTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGFzdCxcbiAgICAgICAgYU5vZGUsXG4gICAgICAgIHRlbXBsYXRlLFxuICAgICAgICByZWZzOiBjb21waWxlck9wdGlvbnMucmVmcyxcbiAgICAgICAgZXJyb3JzXG4gICAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=