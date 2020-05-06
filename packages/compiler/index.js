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

  const aNode = Object(external_san_["parseTemplate"])(template).children[0];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXRvbS1leHByZXNzaW9uLWNvbXBpbGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL2NvZGUtZnJhbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJlc2NhcGUtcXVvdGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG8tc2luZ2xlLXF1b3Rlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInZ1ZS10ZW1wbGF0ZS1jb21waWxlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNhblwiIiwid2VicGFjazovLy8uL3NyYy9jb21waWxlci9leHByZXNzaW9uLXRyYW5zZm9ybWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21waWxlci9tb2R1bGVzL2NsYXNzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21waWxlci9tb2R1bGVzL3N0eWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21waWxlci9tb2R1bGVzL2JpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBpbGVyL21vZHVsZXMvaWYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBpbGVyL21vZHVsZXMvZm9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21waWxlci9tb2R1bGVzL2V2ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21waWxlci9tb2R1bGVzL2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBpbGVyL21vZHVsZXMvcmVmLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21waWxlci9tb2R1bGVzL2R5bmFtaWMtY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21waWxlci9jb25zdGFudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcGlsZXIvbW9kdWxlcy9ib29sZWFuLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21waWxlci9tb2R1bGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21waWxlci9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21waWxlci9tb2R1bGVzL2Nzc21vZHVsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBpbGVyL21vZHVsZXMvYXRvbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcGlsZXIvb3B0aW1pemUtYW5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBpbGVyL2luZGV4LmpzIl0sIm5hbWVzIjpbIm1hcmsiLCJyZWciLCJSZWdFeHAiLCJ2YWxpZFVuYXJ5T3BlcmF0b3IiLCJTZXQiLCJ2YWxpZEJpbmFyeU9wZXJhdG9yIiwidmFsaWRMb2dpY2FsT3BlcmF0b3IiLCJub0JyYWNrZXRUeXBlcyIsIndyYXBCYWNrZXQiLCJjb2RlIiwibm9kZSIsImhhcyIsInR5cGUiLCJpbmNsdWRlcyIsIm9wZXJhdG9yIiwiU3ludGF4IiwiQXJyYXlFeHByZXNzaW9uIiwiTGl0ZXJhbCIsIk9iamVjdEV4cHJlc3Npb24iLCJVbmFyeUV4cHJlc3Npb24iLCJQcm9wZXJ0eSIsIlZ1ZUV4cHJlc3Npb24iLCJWdWVGaWx0ZXIiLCJJZGVudGlmaWVyIiwiTWVtYmVyRXhwcmVzc2lvbiIsIkJpbmFyeUV4cHJlc3Npb24iLCJMb2dpY2FsRXhwcmVzc2lvbiIsIkNvbmRpdGlvbmFsRXhwcmVzc2lvbiIsIkNhbGxFeHByZXNzaW9uIiwiVGVtcGxhdGVFeHByZXNzaW9uIiwiVmlzaXRvcktleXMiLCJ0b1N0cmluZyIsImEiLCJlc2NhcGVRdW90ZXMiLCJKU09OIiwic3RyaW5naWZ5IiwiQ29kZUdlbmVyYWdvciIsImV4cHJlc3Npb24iLCJmaWx0ZXJzIiwicmVkdWNlIiwicHJlIiwiZmlsdGVyIiwicmVwbGFjZSIsInJldCIsImFyZ3MiLCJoYXNBcmdzIiwibGVuZ3RoIiwibmFtZSIsIm1hcCIsImpvaW4iLCJyZXN1bHRzIiwicmVmIiwib2JqZWN0IiwicHJvcGVydHkiLCJjb21wdXRlZCIsImlzU3RhdGljIiwibGVuIiwidmFsdWUiLCJsZWZ0IiwicmlnaHQiLCJlcnJvciIsIkZ1bmN0aW9uIiwiZ2V0VHlwZSIsInRlc3QiLCJjb25zZXF1ZW50IiwiYWx0ZXJuYXRlIiwidGVzdENvZGUiLCJjb25zZXF1ZW50Q29kZSIsImFsdGVybmF0ZUNvZGUiLCJjYWxsZWUiLCJleHByZXNzaW9ucyIsImkiLCJyZXN1bHQiLCJjIiwidmFyRXhwb3J0IiwiaGFzQ29tcHV0ZWQiLCJjdXJyZW50IiwicHJldiIsInByb3BlcnRpZXMiLCJrZXlDb2RlIiwidHJhdmVyc2UiLCJrZXkiLCJnZW5Qcm9wZXJ0eUtleSIsIm9iaiIsInR5cGVTdHIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJjYWxsIiwic3Vic3RyaW5nIiwidG9Mb3dlckNhc2UiLCJDb2RlR2VuIiwiY29uc3RydWN0b3IiLCJzeW50YXgiLCJrZXlzIiwiZ2VuZXJhdGVyIiwibWVzc2FnZSIsImxvY2F0aW9uIiwic3RhcnQiLCJsaW5lIiwiY29sdW1uIiwiY29kZUZyYW1lIiwiY29kZUZyYW1lQ29sdW1ucyIsImhpZ2hsaWdodENvZGUiLCJFcnJvciIsInJvb3QiLCJ2aXNpdG9yS2V5cyIsImtleVJlc3VsdHMiLCJlbGVtZW50IiwiaXNOb2RlIiwiQXJyYXkiLCJpc0FycmF5IiwiZWxlIiwiZ2VuZXJhdGUiLCJhcHBseSIsIlN0cmluZyIsImFyZ3VtZW50cyIsImRhdGEiLCJwYXJzZSIsInN0YXJ0UnVsZSIsImUiLCJzdGFjayIsImNvZGVnZW4iLCJhc3QiLCJiaW5kS2V5cyIsInBvc3RUcmFuc2Zvcm1Ob2RlIiwiY2xhc3NCaW5kaW5nIiwic3RhdGljQ2xhc3MiLCJhdHRyc01hcCIsImNsYXNzIiwidHJhbnNmb3JtIiwiZm9yRWFjaCIsInZTaG93Iiwic3R5bGVCaW5kaW5nIiwic3RhdGljU3R5bGUiLCJzdHlsZSIsInRvU2luZ2xlUXVvdGVzIiwicmVCaW5kIiwibiIsInZCaW5kIiwiaWYiLCJlbHNlaWYiLCJlbHNlIiwiZm9yIiwiZnIiLCJhbGlhcyIsIml0ZXJhdG9yMSIsInRyYWNrQnlFeHByIiwicmVFdmVudCIsImV2ZW50QXR0cnMiLCJhdHRyc0xpc3QiLCJhdHRyIiwibW9kaWZpZXJzIiwic3BsaXQiLCJldmVudEhhbmRsZXIiLCJtIiwiZGlyIiwiZGlyZWN0aXZlcyIsImZpbmQiLCJkIiwiY2hpbGRyZW4iLCJ0ZXh0Iiwib3B0aW9ucyIsImluZm8iLCJwYXJlbnQiLCJ1bmRlZmluZWQiLCJyZWZzIiwicHVzaCIsImJpbmRSZWYiLCJ0YWciLCJpcyIsInN0YXJ0c1dpdGgiLCJzbGljZSIsInRyaW0iLCJleHByIiwidGVzdExvY2F0aW9uIiwib2Zmc2V0IiwiZW5kIiwiYXR0cnMiLCJpZkNvbmRpdGlvbnMiLCJleHAiLCJibG9jayIsInNpbmdsZVRhZyIsImFyZWEiLCJiYXNlIiwiYmFzZWZvbnQiLCJiciIsImNvbCIsImNvbW1hbmQiLCJlbWJlZCIsImZyYW1lIiwiaHIiLCJpbWciLCJpbnB1dCIsImlzaW5kZXgiLCJrZXlnZW4iLCJsaW5rIiwibWV0YSIsInBhcmFtIiwic291cmNlIiwidHJhY2siLCJ3YnIiLCJib29sZWFuQXR0ciIsImFsbG93ZnVsbHNjcmVlbiIsImFzeW5jIiwiYXV0b2ZvY3VzIiwiYXV0b3BsYXkiLCJjaGVja2VkIiwiY29tcGFjdCIsImNvbnRyb2xzIiwiZGVjbGFyZSIsImRlZmF1bHQiLCJkZWZhdWx0Y2hlY2tlZCIsImRlZmF1bHRtdXRlZCIsImRlZmF1bHRzZWxlY3RlZCIsImRlZmVyIiwiZGlzYWJsZWQiLCJlbmFibGVkIiwiZm9ybW5vdmFsaWRhdGUiLCJoaWRkZW4iLCJpbmRldGVybWluYXRlIiwiaW5lcnQiLCJpc21hcCIsIml0ZW1zY29wZSIsImxvb3AiLCJtdWx0aXBsZSIsIm11dGVkIiwibm9ocmVmIiwibm9yZXNpemUiLCJub3NoYWRlIiwibm92YWxpZGF0ZSIsIm5vd3JhcCIsIm9wZW4iLCJwYXVzZW9uZXhpdCIsInJlYWRvbmx5IiwicmVxdWlyZWQiLCJyZXZlcnNlZCIsInNjb3BlZCIsInNlYW1sZXNzIiwic2VsZWN0ZWQiLCJzb3J0YWJsZSIsInRyYW5zbGF0ZSIsInRydWVzcGVlZCIsInR5cGVtdXN0bWF0Y2giLCJ2aXNpYmxlIiwibm9WYWx1ZUF0dHIiLCJodG1sVGFnIiwiaHRtbCIsImJvZHkiLCJoZWFkIiwidGl0bGUiLCJhZGRyZXNzIiwiYXJ0aWNsZSIsImFzaWRlIiwiZm9vdGVyIiwiaGVhZGVyIiwiaDEiLCJoMiIsImgzIiwiaDQiLCJoNSIsImg2IiwiaGdyb3VwIiwibmF2Iiwic2VjdGlvbiIsImRpdiIsImRkIiwiZGwiLCJkdCIsImZpZ2NhcHRpb24iLCJmaWd1cmUiLCJsaSIsIm1haW4iLCJvbCIsInAiLCJ1bCIsImIiLCJhYmJyIiwiYmRpIiwiYmRvIiwiY2l0ZSIsImRmbiIsImVtIiwia2JkIiwicSIsInJwIiwicnQiLCJydGMiLCJydWJ5IiwicyIsInNhbXAiLCJzbWFsbCIsInNwYW4iLCJzdHJvbmciLCJzdWIiLCJzdXAiLCJ0aW1lIiwidSIsInZhciIsImF1ZGlvIiwidmlkZW8iLCJjYW52YXMiLCJzY3JpcHQiLCJub3NjcmlwdCIsImRlbCIsImlucyIsImNhcHRpb24iLCJjb2xncm91cCIsInRhYmxlIiwidGhlYWQiLCJ0Ym9keSIsInRkIiwidGgiLCJ0ciIsImJ1dHRvbiIsImRhdGFsaXN0IiwiZmllbGRzZXQiLCJmb3JtIiwibGFiZWwiLCJsZWdlbmQiLCJtZXRlciIsIm9wdGdyb3VwIiwib3B0aW9uIiwib3V0cHV0IiwicHJvZ3Jlc3MiLCJzZWxlY3QiLCJ0ZXh0YXJlYSIsImRldGFpbHMiLCJkaWFsb2ciLCJtZW51IiwibWVudWl0ZW0iLCJzdW1tYXJ5IiwiY29udGVudCIsInNoYWRvdyIsInRlbXBsYXRlIiwiYm9vbCIsInlmIiwiZXZlbnQiLCJjbGF6eiIsImJpbmQiLCJkeW5hbWljQ29tcG9uZW50Iiwic3RyaW5naWZ5QXR0ciIsInNjb3BlSWQiLCJzdHJpcCIsImF0b20iLCJoYXNDaGlsZHJlbiIsImhhc0F0dHIiLCJleHRlbmQiLCJhc3NpZ24iLCJ0b09iamVjdCIsImFyciIsInJlcyIsIl90b1N0cmluZyIsImlzT2JqZWN0IiwiaGFzT3duUHJvcGVydHkiLCJoYXNPd24iLCJpc1BsYWluT2JqZWN0IiwiZGVmIiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwiY2FjaGVkIiwiZm4iLCJjYWNoZSIsImNyZWF0ZSIsImNhY2hlZEZuIiwic3RyIiwiaGl0IiwiaHlwaGVuYXRlUkUiLCJoeXBoZW5hdGUiLCJjYW1lbGl6ZSIsIl8iLCJ0b1VwcGVyQ2FzZSIsImNzc01vZHVsZXMiLCJwcmVUcmFuc2Zvcm1Ob2RlIiwiZWwiLCIkc3R5bGUiLCJvcHRpbWl6ZSIsImFOb2RlIiwicmF3IiwiZWxzZXMiLCJ0ZXh0RXhwciIsInByb3BzIiwicHJvcCIsImV2ZW50cyIsImNvbXBpbGUiLCJtb2R1bGVzIiwiaXNBdG9tIiwiaXNFbXB0eSIsInVuc2hpZnQiLCJnZXRDc3NNb2R1bGVzIiwiZXJyb3JzIiwiY29tcGlsZXJPcHRpb25zIiwiYnVpbGRJbk1vZHVsZXMiLCJwcmVzZXJ2ZVdoaXRlc3BhY2UiLCJ1c2VEeW5hbWljQ29tcG9uZW50IiwibXNnIiwiY29uc29sZSIsInZ1ZUNvbXBpbGUiLCJwYXJzZVRlbXBsYXRlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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QU4sQ0FBMUIsQ0FyQzBDLENBc0MxQzs7QUFDQSxRQUFNVCxLQUFLLEdBQUdxQixzQ0FBYSxDQUFDakUsUUFBRCxDQUFiLENBQXdCOUssUUFBeEIsQ0FBaUMsQ0FBakMsQ0FBZDtBQUVBLFNBQU87QUFDSHJDLE9BREc7QUFFSCtQLFNBQUssRUFBRUQsUUFBUSxDQUFDQyxLQUFELENBRlo7QUFHSDVDLFlBSEc7QUFJSHhLLFFBQUksRUFBRWtPLGVBQWUsQ0FBQ2xPLElBSm5CO0FBS0hpTztBQUxHLEdBQVA7QUFPSCxDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDcpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXRvbS1leHByZXNzaW9uLWNvbXBpbGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvY29kZS1mcmFtZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlc2NhcGUtcXVvdGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRvLXNpbmdsZS1xdW90ZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidnVlLXRlbXBsYXRlLWNvbXBpbGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNhblwiKTsiLCIvKipcbiAqIEBmaWxlIHZ1ZSDnmoQgZXhwcmVzc2lvbiDovawgc2Fu77yM5Li76KaB5piv5aSE55CGIGVzNiDor63ms5VcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQge2NvZGVGcmFtZUNvbHVtbnN9IGZyb20gJ0BiYWJlbC9jb2RlLWZyYW1lJztcbmltcG9ydCB7cGFyc2V9IGZyb20gJ2F0b20tZXhwcmVzc2lvbi1jb21waWxlcic7XG5pbXBvcnQgZXNjYXBlUXVvdGVzIGZyb20gJ2VzY2FwZS1xdW90ZXMnO1xuXG5jb25zdCBtYXJrID0gJ19fdnVzYV9fZmlsdGVyX19tYXJrX18nO1xuY29uc3QgcmVnID0gbmV3IFJlZ0V4cChtYXJrLCAnZycpO1xuXG5jb25zdCB2YWxpZFVuYXJ5T3BlcmF0b3IgPSBuZXcgU2V0KFsnKycsICctJywgJyEnXSk7XG5jb25zdCB2YWxpZEJpbmFyeU9wZXJhdG9yID0gbmV3IFNldChbJysnLCAnLScsICcqJywgJy8nLCAnJScsICc+JywgJzwnLCAnPj0nLCAnPD0nLCAnPT0nLCAnPT09JywgJyE9JywgJyE9PSddKTtcbmNvbnN0IHZhbGlkTG9naWNhbE9wZXJhdG9yID0gbmV3IFNldChbJyYmJywgJ3x8J10pO1xuY29uc3Qgbm9CcmFja2V0VHlwZXMgPSBuZXcgU2V0KFtcbiAgICAnQXJyYXlFeHByZXNzaW9uJyxcbiAgICAnTGl0ZXJhbCcsXG4gICAgJ09iamVjdEV4cHJlc3Npb24nLFxuICAgICdJZGVudGlmaWVyJyxcbiAgICAnTWVtYmVyRXhwcmVzc2lvbicsXG4gICAgJ0NhbGxFeHByZXNzaW9uJyxcbiAgICAnVGVtcGxhdGVFeHByZXNzaW9uJyxcbiAgICAnVW5hcnlFeHByZXNzaW9uJ1xuXSk7XG5cbmZ1bmN0aW9uIHdyYXBCYWNrZXQoY29kZSwgbm9kZSkge1xuICAgIGlmIChub0JyYWNrZXRUeXBlcy5oYXMobm9kZS50eXBlKSkge1xuICAgICAgICByZXR1cm4gY29kZTtcbiAgICB9XG4gICAgaWYgKG5vZGUudHlwZSA9PT0gJ0JpbmFyeUV4cHJlc3Npb24nICYmIFsnPT0nLCAnPT09JywgJyE9JywgJyE9PSddLmluY2x1ZGVzKG5vZGUub3BlcmF0b3IpKSB7XG4gICAgICAgIHJldHVybiBjb2RlO1xuICAgIH1cbiAgICByZXR1cm4gYCgke2NvZGV9KWA7XG59XG5cbmNvbnN0IFN5bnRheCA9IHtcbiAgICBBcnJheUV4cHJlc3Npb246ICdBcnJheUV4cHJlc3Npb24nLFxuICAgIExpdGVyYWw6ICdMaXRlcmFsJyxcbiAgICBPYmplY3RFeHByZXNzaW9uOiAnT2JqZWN0RXhwcmVzc2lvbicsXG4gICAgVW5hcnlFeHByZXNzaW9uOiAnVW5hcnlFeHByZXNzaW9uJyxcbiAgICBQcm9wZXJ0eTogJ1Byb3BlcnR5JyxcbiAgICBWdWVFeHByZXNzaW9uOiAnVnVlRXhwcmVzc2lvbicsXG4gICAgVnVlRmlsdGVyOiAnVnVlRmlsdGVyJyxcbiAgICBJZGVudGlmaWVyOiAnSWRlbnRpZmllcicsXG4gICAgTWVtYmVyRXhwcmVzc2lvbjogJ01lbWJlckV4cHJlc3Npb24nLFxuICAgIEJpbmFyeUV4cHJlc3Npb246ICdCaW5hcnlFeHByZXNzaW9uJyxcbiAgICBMb2dpY2FsRXhwcmVzc2lvbjogJ0xvZ2ljYWxFeHByZXNzaW9uJyxcbiAgICBDb25kaXRpb25hbEV4cHJlc3Npb246ICdDb25kaXRpb25hbEV4cHJlc3Npb24nLFxuICAgIENhbGxFeHByZXNzaW9uOiAnQ2FsbEV4cHJlc3Npb24nLFxuICAgIFRlbXBsYXRlRXhwcmVzc2lvbjogJ1RlbXBsYXRlRXhwcmVzc2lvbidcbn07XG5cbmNvbnN0IFZpc2l0b3JLZXlzID0ge1xuICAgIEFycmF5RXhwcmVzc2lvbjogWydlbGVtZW50cyddLFxuICAgIE9iamVjdEV4cHJlc3Npb246IFsncHJvcGVydGllcyddLFxuICAgIFVuYXJ5RXhwcmVzc2lvbjogWydhcmd1bWVudCddLFxuICAgIFByb3BlcnR5OiBbJ3ZhbHVlJ10sXG4gICAgTWVtYmVyRXhwcmVzc2lvbjogWydvYmplY3QnLCAncHJvcGVydHknXSxcbiAgICBCaW5hcnlFeHByZXNzaW9uOiBbJ2xlZnQnLCAncmlnaHQnXSxcbiAgICBMb2dpY2FsRXhwcmVzc2lvbjogWydsZWZ0JywgJ3JpZ2h0J10sXG4gICAgQ29uZGl0aW9uYWxFeHByZXNzaW9uOiBbJ3Rlc3QnLCAnY29uc2VxdWVudCcsICdhbHRlcm5hdGUnXSxcbiAgICBDYWxsRXhwcmVzc2lvbjogWydhcmd1bWVudHMnXSxcbiAgICBWdWVFeHByZXNzaW9uOiBbJ2V4cHJlc3Npb24nLCAnZmlsdGVycyddLFxuICAgIFZ1ZUZpbHRlcjogWydhcmd1bWVudHMnXSxcbiAgICBUZW1wbGF0ZUV4cHJlc3Npb246IFsnZXhwcmVzc2lvbnMnXVxufTtcblxuZnVuY3Rpb24gdG9TdHJpbmcoYSkge1xuICAgIGlmICh0eXBlb2YgYSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIGEgKyAnJztcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBhID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gYCcke2VzY2FwZVF1b3RlcyhhKX0nYFxuICAgIH1cbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYSk7XG59XG5cbmNvbnN0IENvZGVHZW5lcmFnb3IgPSB7XG5cbiAgICBWdWVFeHByZXNzaW9uKG5vZGUsIFtleHByZXNzaW9uLCBmaWx0ZXJzXSkge1xuICAgICAgICBsZXQgY29kZSA9IGZpbHRlcnMucmVkdWNlKChwcmUsIGZpbHRlcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGZpbHRlci5jb2RlLnJlcGxhY2UocmVnLCBwcmUpO1xuICAgICAgICB9LCBleHByZXNzaW9uLmNvZGUpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZXQoY29kZSk7XG4gICAgfSxcblxuICAgIFZ1ZUZpbHRlcihub2RlLCBbYXJnc10pIHtcbiAgICAgICAgbGV0IGhhc0FyZ3MgPSBhcmdzLmxlbmd0aCA+IDA7XG4gICAgICAgIHJldHVybiB0aGlzLnJldChgJHttYXJrfSB8ICR7bm9kZS5uYW1lfWAgKyAoaGFzQXJncyA/IGAoJHthcmdzLm1hcChhID0+IGEuY29kZSkuam9pbignLCAnKX0pYCA6ICcnKSk7XG4gICAgfSxcblxuICAgIElkZW50aWZpZXIobm9kZSwgcmVzdWx0cywgcmVmKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJldChub2RlLm5hbWUpO1xuICAgIH0sXG5cbiAgICBNZW1iZXJFeHByZXNzaW9uKG5vZGUsIHJlc3VsdHMpIHtcblxuICAgICAgICBsZXQgW29iamVjdCwgcHJvcGVydHldID0gcmVzdWx0cztcblxuICAgICAgICBpZiAobm9kZS5jb21wdXRlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmV0KGAke29iamVjdC5jb2RlfVske3Byb3BlcnR5LmNvZGV9XWApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb3BlcnR5LmNvZGUgPT09ICdsZW5ndGgnKSB7XG4gICAgICAgICAgICBpZiAob2JqZWN0LnR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdC5pc1N0YXRpYykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbGVuID0gb2JqZWN0LnZhbHVlLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmV0KGxlbiArICcnLCAnbnVtYmVyJywgbGVuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmV0KGAke29iamVjdC5jb2RlfS5sZW5ndGhgLCAnbnVtYmVyJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5yZXQoYCR7b2JqZWN0LmNvZGV9LiR7cHJvcGVydHkuY29kZX1gKTtcbiAgICB9LFxuXG4gICAgQmluYXJ5RXhwcmVzc2lvbihub2RlLCBbbGVmdCwgcmlnaHRdLCByZWYpIHtcbiAgICAgICAgaWYgKCF2YWxpZEJpbmFyeU9wZXJhdG9yLmhhcyhub2RlLm9wZXJhdG9yKSkge1xuICAgICAgICAgICAgdGhpcy5lcnJvcihgaW52YWxpZCBiaW5hcnkgb3BlcmF0b3IgXCIke25vZGUub3BlcmF0b3J9XCJgLCBub2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGVmdC5pc1N0YXRpYyAmJiByaWdodC5pc1N0YXRpYykge1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gbmV3IEZ1bmN0aW9uKGByZXR1cm4gJHtsZWZ0LmNvZGV9ICR7bm9kZS5vcGVyYXRvcn0gJHtyaWdodC5jb2RlfWApKCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXQodG9TdHJpbmcodmFsdWUpLCBnZXRUeXBlKHZhbHVlKSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjb2RlID0gYCR7d3JhcEJhY2tldChsZWZ0LmNvZGUsIG5vZGUubGVmdCl9JHtub2RlLm9wZXJhdG9yfSR7d3JhcEJhY2tldChyaWdodC5jb2RlLCBub2RlLnJpZ2h0KX1gXG4gICAgICAgIHJldHVybiB0aGlzLnJldChjb2RlKTtcbiAgICB9LFxuXG4gICAgTG9naWNhbEV4cHJlc3Npb24obm9kZSwgW2xlZnQsIHJpZ2h0XSkge1xuICAgICAgICBpZiAoIXZhbGlkTG9naWNhbE9wZXJhdG9yLmhhcyhub2RlLm9wZXJhdG9yKSkge1xuICAgICAgICAgICAgdGhpcy5lcnJvcihgaW52YWxpZCBsb2dpY2FsIG9wZXJhdG9yIFwiJHtub2RlLm9wZXJhdG9yfVwiYCwgbm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxlZnQuaXNTdGF0aWMgJiYgcmlnaHQuaXNTdGF0aWMpIHtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IG5ldyBGdW5jdGlvbihgcmV0dXJuICR7bGVmdC5jb2RlfSR7bm9kZS5vcGVyYXRvcn0ke3JpZ2h0LmNvZGV9YCkoKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJldCh0b1N0cmluZyh2YWx1ZSksIGdldFR5cGUodmFsdWUpLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNvZGUgPSBgJHt3cmFwQmFja2V0KGxlZnQuY29kZSwgbm9kZS5sZWZ0KX0ke25vZGUub3BlcmF0b3J9JHt3cmFwQmFja2V0KHJpZ2h0LmNvZGUsIG5vZGUucmlnaHQpfWBcbiAgICAgICAgcmV0dXJuIHRoaXMucmV0KGNvZGUpO1xuICAgIH0sXG5cbiAgICBDb25kaXRpb25hbEV4cHJlc3Npb24obm9kZSwgW3Rlc3QsIGNvbnNlcXVlbnQsIGFsdGVybmF0ZV0pIHtcbiAgICAgICAgaWYgKHRlc3QuaXNTdGF0aWMpIHtcbiAgICAgICAgICAgIHJldHVybiB0ZXN0LnZhbHVlID8gY29uc2VxdWVudCA6IGFsdGVybmF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB0ZXN0Q29kZSA9IHdyYXBCYWNrZXQodGVzdC5jb2RlLCBub2RlLnRlc3QpO1xuICAgICAgICBsZXQgY29uc2VxdWVudENvZGUgPSB3cmFwQmFja2V0KGNvbnNlcXVlbnQuY29kZSwgbm9kZS5jb25zZXF1ZW50KTtcbiAgICAgICAgbGV0IGFsdGVybmF0ZUNvZGUgPSB3cmFwQmFja2V0KGFsdGVybmF0ZS5jb2RlLCBub2RlLmFsdGVybmF0ZSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmV0KGAke3Rlc3RDb2RlfT8ke2NvbnNlcXVlbnRDb2RlfToke2FsdGVybmF0ZUNvZGV9YCk7XG4gICAgfSxcblxuICAgIENhbGxFeHByZXNzaW9uKG5vZGUsIFthcmdzXSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXQoYCR7bm9kZS5jYWxsZWUubmFtZX0oJHthcmdzLm1hcChhID0+IGEuY29kZSkuam9pbignLCAnKX0pYCk7XG4gICAgfSxcblxuICAgIFRlbXBsYXRlRXhwcmVzc2lvbihub2RlLCBbZXhwcmVzc2lvbnNdKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJldChcbiAgICAgICAgICAgIGAoJHtleHByZXNzaW9ucy5tYXAoKHtjb2RlfSwgaSkgPT4gd3JhcEJhY2tldChjb2RlLCBub2RlLmV4cHJlc3Npb25zW2ldKSkuam9pbignKycpfSlgLFxuICAgICAgICAgICAgJ3N0cmluZydcbiAgICAgICAgKTtcbiAgICB9LFxuXG4gICAgQXJyYXlFeHByZXNzaW9uKG5vZGUsIHJlc3VsdHMpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHJlc3VsdHNbMF07XG4gICAgICAgIHJldHVybiB0aGlzLnJldChgWyR7cmVzdWx0Lm1hcChjID0+IGMuY29kZSkuam9pbignLCAnKX1dYCwgJ2FycmF5Jyk7XG4gICAgfSxcblxuICAgIExpdGVyYWwobm9kZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXQoXG4gICAgICAgICAgICB0aGlzLnZhckV4cG9ydChub2RlLnZhbHVlKSxcbiAgICAgICAgICAgIGdldFR5cGUobm9kZS52YWx1ZSksXG4gICAgICAgICAgICBub2RlLnZhbHVlXG4gICAgICAgICk7XG4gICAgfSxcblxuICAgIFVuYXJ5RXhwcmVzc2lvbihub2RlLCByZXN1bHRzKSB7XG5cbiAgICAgICAgaWYgKCF2YWxpZFVuYXJ5T3BlcmF0b3IuaGFzKG5vZGUub3BlcmF0b3IpKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yKGB1bmtub3cgdW5hcnkgb3BlcmF0b3IgXCIke25vZGUub3BlcmF0b3J9XCJgLCBub2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXN1bHQgPSByZXN1bHRzWzBdO1xuXG4gICAgICAgIGlmIChyZXN1bHQuaXNTdGF0aWMpIHtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IG5ldyBGdW5jdGlvbihgcmV0dXJuICR7bm9kZS5vcGVyYXRvcn0ke3Jlc3VsdC5jb2RlfWApKCk7XG4gICAgICAgICAgICBsZXQgc3RyaW5naWZ5ID0gdG9TdHJpbmcodmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmV0KHN0cmluZ2lmeSwgZ2V0VHlwZSh2YWx1ZSksIHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnJldChgJHtub2RlLm9wZXJhdG9yfSR7cmVzdWx0LmNvZGV9YCk7XG4gICAgfSxcblxuICAgIE9iamVjdEV4cHJlc3Npb24obm9kZSwgcmVzdWx0cykge1xuXG4gICAgICAgIGlmIChub2RlLmhhc0NvbXB1dGVkKSB7XG4gICAgICAgICAgICBsZXQgY29kZSA9ICdfZXgoJztcbiAgICAgICAgICAgIGxldCBjdXJyZW50O1xuICAgICAgICAgICAgbGV0IHByZXY7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gbm9kZS5wcm9wZXJ0aWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvcGVydHkgPSBub2RlLnByb3BlcnRpZXNbaV07XG4gICAgICAgICAgICAgICAgcHJldiA9IGN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgY3VycmVudCA9ICEhcHJvcGVydHkuY29tcHV0ZWQ7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQgJiYgcHJldiA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgY29kZSArPSAnfSwnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudCAmJiAhcHJldikge1xuICAgICAgICAgICAgICAgICAgICBjb2RlICs9ICdfb2NwKFsnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWN1cnJlbnQgJiYgcHJldikge1xuICAgICAgICAgICAgICAgICAgICBjb2RlICs9ICddKSx7JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFjdXJyZW50ICYmIHByZXYgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBjb2RlICs9ICd7JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQgPT09IHByZXYpIHtcbiAgICAgICAgICAgICAgICAgICAgY29kZSArPSAnLCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvZGUgKz0gcmVzdWx0c1swXVtpXS5jb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29kZSArPSBjdXJyZW50ID8gJ10pKScgOiAnfSknO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmV0KGNvZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJlc3VsdCA9IHJlc3VsdHNbMF07XG4gICAgICAgIHJldHVybiB0aGlzLnJldChgeyR7cmVzdWx0Lm1hcChjID0+IGMuY29kZSkuam9pbignLCcpfX0gYCwgJ29iamVjdCcpO1xuICAgIH0sXG5cbiAgICBQcm9wZXJ0eShub2RlLCByZXN1bHRzLCByZWYpIHtcblxuICAgICAgICBpZiAobm9kZS5jb21wdXRlZCkge1xuICAgICAgICAgICAgcmVmLmhhc0NvbXB1dGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldCBrZXlDb2RlID0gdGhpcy50cmF2ZXJzZShub2RlLmtleSwgbm9kZSkuY29kZTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJldChge2s6JHtrZXlDb2RlfSx2OiR7cmVzdWx0c1swXS5jb2RlfX1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBrZXlDb2RlID0gdGhpcy5nZW5Qcm9wZXJ0eUtleShub2RlLmtleSkuY29kZTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmV0KGAke2tleUNvZGV9OiR7cmVzdWx0c1swXS5jb2RlfWApO1xuICAgIH1cbn07XG5cbmZ1bmN0aW9uIGdldFR5cGUob2JqKSB7XG4gICAgbGV0IHR5cGVTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKTtcbiAgICByZXR1cm4gdHlwZVN0ci5zdWJzdHJpbmcoOCwgdHlwZVN0ci5sZW5ndGggLSAxKS50b0xvd2VyQ2FzZSgpO1xufVxuXG5jbGFzcyBDb2RlR2VuIHtcblxuICAgIGNvbnN0cnVjdG9yKHtjb2RlfSkge1xuICAgICAgICB0aGlzLnN5bnRheCA9IFN5bnRheDtcbiAgICAgICAgdGhpcy5rZXlzID0gVmlzaXRvcktleXM7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVyID0gQ29kZUdlbmVyYWdvcjtcblxuICAgICAgICB0aGlzLmNvZGUgPSBjb2RlO1xuICAgIH1cblxuICAgIGVycm9yKG1lc3NhZ2UsIG5vZGUpIHtcbiAgICAgICAgbWVzc2FnZSA9IGBbdnVzYSBleHByZXNzaW9uIHBhcnNlcl0gKCR7bm9kZS5sb2NhdGlvbi5zdGFydC5saW5lfToke25vZGUubG9jYXRpb24uc3RhcnQuY29sdW1ufSkgOiAke21lc3NhZ2V9YDtcblxuICAgICAgICBsZXQgY29kZUZyYW1lID0gY29kZUZyYW1lQ29sdW1ucyh0aGlzLmNvZGUsIG5vZGUubG9jYXRpb24sIHtcbiAgICAgICAgICAgIGhpZ2hsaWdodENvZGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIG1lc3NhZ2UgKz0gYFxcbiR7Y29kZUZyYW1lfWA7XG5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIHRyYXZlcnNlKG5vZGUsIHJlZikge1xuXG4gICAgICAgIGxldCBzeW50YXggPSB0aGlzLnN5bnRheFtub2RlLnR5cGVdO1xuXG4gICAgICAgIGlmIChub2RlID09PSByZWYpIHtcbiAgICAgICAgICAgIHRoaXMucm9vdCA9IG5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICBub2RlLnJlZiA9IHJlZjtcblxuICAgICAgICAvLyDlr7nosaHnmoQga2V5IOWAvOeJueauiuWkhOeQhuS4gOS4i1xuICAgICAgICBpZiAoIXN5bnRheCkge1xuICAgICAgICAgICAgdGhpcy5lcnJvcihgVW5rbm93biBub2RlIHR5cGUgXCIke25vZGUudHlwZX1cIiB3YXMgZm91bmQgd2hlbiBwYXJzaW5nIFwiJHtub2RlLm5hbWV9XCJgLCBub2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB2aXNpdG9yS2V5cyA9IHRoaXMua2V5c1tub2RlLnR5cGVdIHx8IFtdO1xuICAgICAgICBsZXQga2V5UmVzdWx0cyA9IHZpc2l0b3JLZXlzLm1hcChrZXkgPT4ge1xuICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBub2RlW2tleV07XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcblxuICAgICAgICAgICAgaWYgKHRoaXMuaXNOb2RlKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy50cmF2ZXJzZShlbGVtZW50LCBub2RlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGVsZW1lbnQubWFwKGVsZSA9PiB0aGlzLnRyYXZlcnNlKGVsZSwgbm9kZSkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yKGBVbmtub3duIFZpc2l0b3JLZXkgdHlwZSBcIiR7dHlwZW9mIGVsZW1lbnR9XCIgd2FzIGZvdW5kIHdoZW4gcGFyc2luZyAke2VsZW1lbnQubmFtZX1gLCBlbGVtZW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2VuZXJhdGUobm9kZSwga2V5UmVzdWx0cywgcmVmKTtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZShub2RlLCAuLi5hcmdzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdlbmVyYXRlcltub2RlLnR5cGVdLmFwcGx5KHRoaXMsIFtub2RlLCAuLi5hcmdzXSk7XG4gICAgfVxuXG4gICAgZ2VuUHJvcGVydHlLZXkobm9kZSkge1xuICAgICAgICBsZXQgY29kZTtcbiAgICAgICAgc3dpdGNoIChub2RlLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ0lkZW50aWZpZXInOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJldChub2RlLm5hbWUsICdzdHJpbmcnLCBub2RlLm5hbWUpO1xuICAgICAgICAgICAgY2FzZSAnTGl0ZXJhbCc6XG4gICAgICAgICAgICAgICAgY29kZSA9IHRvU3RyaW5nKFN0cmluZyhub2RlLnZhbHVlKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmV0KGNvZGUsICdzdHJpbmcnLCBTdHJpbmcobm9kZS52YWx1ZSkpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yKGBpbnZhbGlkIHByb3BlcnR5IGtleSB0eXBlIFwiJHtub2RlLnR5cGV9XCJgLCBub2RlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzTm9kZShub2RlKSB7XG4gICAgICAgIGlmIChub2RlID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHlwZW9mIG5vZGUgPT09ICdvYmplY3QnICYmIHR5cGVvZiBub2RlLnR5cGUgPT09ICdzdHJpbmcnO1xuICAgIH1cblxuICAgIHJldChjb2RlLCB0eXBlLCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29kZSxcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIGlzU3RhdGljOiBhcmd1bWVudHMubGVuZ3RoID4gMlxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHZhckV4cG9ydChkYXRhKSB7XG4gICAgICAgIHJldHVybiB0b1N0cmluZyhkYXRhKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjb2RlKSB7XG5cbiAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvZGU6ICcnXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgbGV0IG5vZGU7XG4gICAgdHJ5IHtcbiAgICAgICAgbm9kZSA9IHBhcnNlKGNvZGUsIHtcbiAgICAgICAgICAgIHN0YXJ0UnVsZTogJ1Z1ZUV4cHJlc3Npb24nXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFN5bnRheEVycm9yIGlzIGZvdW5kIHdoZW4gcGFyc2luZyBjb2RlIFwiJHtjb2RlfVwiLCAke2Uuc3RhY2t9YCk7XG4gICAgfVxuXG4gICAgbGV0IGNvZGVnZW4gPSBuZXcgQ29kZUdlbih7XG4gICAgICAgIGNvZGVcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGFzdDogbm9kZS5leHByZXNzaW9uLFxuICAgICAgICAuLi5jb2RlZ2VuLnRyYXZlcnNlKG5vZGUsIG5vZGUpXG4gICAgfTtcbn1cbiIsIi8qKlxuICogQGZpbGUgY2xhc3NcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQgdHJhbnNmb3JtIGZyb20gJy4uL2V4cHJlc3Npb24tdHJhbnNmb3JtZXInO1xuXG5jb25zdCBiaW5kS2V5cyA9IFsnOmNsYXNzJywgJ3YtYmluZDpjbGFzcyddO1xuXG5mdW5jdGlvbiBwb3N0VHJhbnNmb3JtTm9kZShub2RlKSB7XG4gICAgaWYgKG5vZGUudHlwZSA9PT0gMSAmJiBub2RlLmNsYXNzQmluZGluZykge1xuICAgICAgICBjb25zdCBzdGF0aWNDbGFzcyA9IG5vZGUuYXR0cnNNYXAuY2xhc3MgfHwgJyc7XG4gICAgICAgIGNvbnN0IGNsYXNzQmluZGluZyA9IHRyYW5zZm9ybShub2RlLmNsYXNzQmluZGluZykuY29kZTtcbiAgICAgICAgbm9kZS5hdHRyc01hcC5jbGFzcyA9IGB7eyBfbWMoJyR7c3RhdGljQ2xhc3N9JywgJHtjbGFzc0JpbmRpbmd9KSB9fWA7XG4gICAgICAgIGJpbmRLZXlzLmZvckVhY2goa2V5ID0+IGRlbGV0ZSBub2RlLmF0dHJzTWFwW2tleV0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHBvc3RUcmFuc2Zvcm1Ob2RlXG59O1xuIiwiLyoqXG4gKiBAZmlsZSBzdHlsZVxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCB0cmFuc2Zvcm0gZnJvbSAnLi4vZXhwcmVzc2lvbi10cmFuc2Zvcm1lcic7XG5pbXBvcnQgdG9TaW5nbGVRdW90ZXMgZnJvbSAndG8tc2luZ2xlLXF1b3Rlcyc7XG5cbmNvbnN0IGJpbmRLZXlzID0gWyc6c3R5bGUnLCAndi1iaW5kOnN0eWxlJywgJ3Ytc2hvdyddO1xuXG5mdW5jdGlvbiBwb3N0VHJhbnNmb3JtTm9kZShub2RlKSB7XG4gICAgY29uc3QgdlNob3cgPSBub2RlLmF0dHJzTWFwWyd2LXNob3cnXTtcbiAgICBpZiAobm9kZS50eXBlID09PSAxICYmIChub2RlLnN0eWxlQmluZGluZyB8fCB2U2hvdykpIHtcbiAgICAgICAgY29uc3Qgc3RhdGljU3R5bGUgPSBub2RlLnN0YXRpY1N0eWxlIHx8ICdcXCdcXCcnO1xuICAgICAgICBjb25zdCBzdHlsZUJpbmRpbmcgPSBub2RlLnN0eWxlQmluZGluZyA/IHRyYW5zZm9ybShub2RlLnN0eWxlQmluZGluZykuY29kZSA6ICd7fSc7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG4gICAgICAgIG5vZGUuYXR0cnNNYXAuc3R5bGUgPSBge3sgX21zKCR7dG9TaW5nbGVRdW90ZXMoc3RhdGljU3R5bGUpfSwgJHtzdHlsZUJpbmRpbmd9JHt2U2hvdyA/IGAsICR7dHJhbnNmb3JtKHZTaG93KS5jb2RlfWAgOiAnJ30pIH19YDtcbiAgICAgICAgYmluZEtleXMuZm9yRWFjaChrZXkgPT4gZGVsZXRlIG5vZGUuYXR0cnNNYXBba2V5XSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcG9zdFRyYW5zZm9ybU5vZGVcbn07XG4iLCIvKipcbiAqIEBmaWxlIGJpbmRcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQgdHJhbnNmb3JtIGZyb20gJy4uL2V4cHJlc3Npb24tdHJhbnNmb3JtZXInO1xuXG5jb25zdCByZUJpbmQgPSAvXih2LWJpbmQpP1xcOi87XG5cbmZ1bmN0aW9uIHBvc3RUcmFuc2Zvcm1Ob2RlKG5vZGUpIHtcbiAgICBpZiAobm9kZS50eXBlICE9PSAxKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG5vZGUuYXR0cnNNYXApLmZpbHRlcihuID0+IHJlQmluZC50ZXN0KG4pKTtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gbm9kZS5hdHRyc01hcFtrZXldO1xuICAgICAgICBkZWxldGUgbm9kZS5hdHRyc01hcFtrZXldO1xuICAgICAgICBjb25zdCByZXQgPSB0cmFuc2Zvcm0odmFsdWUpO1xuICAgICAgICBjb25zdCBjb2RlID0gcmV0LmNvZGU7XG4gICAgICAgIG5vZGUuYXR0cnNNYXBba2V5LnJlcGxhY2UocmVCaW5kLCAnJyldID0gYHt7ICR7Y29kZX0gfX1gO1xuICAgIH1cblxuICAgIGlmIChub2RlLmF0dHJzTWFwWyd2LWJpbmQnXSkge1xuICAgICAgICBjb25zdCB2QmluZCA9IG5vZGUuYXR0cnNNYXBbJ3YtYmluZCddO1xuICAgICAgICBub2RlLmF0dHJzTWFwWydzLWJpbmQnXSA9IGB7eyAke3RyYW5zZm9ybSh2QmluZCkuY29kZX0gfX1gO1xuICAgICAgICBkZWxldGUgbm9kZS5hdHRyc01hcFsndi1iaW5kJ107XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcG9zdFRyYW5zZm9ybU5vZGVcbn07XG4iLCIvKipcbiAqIEBmaWxlIGlmXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHRyYW5zZm9ybSBmcm9tICcuLi9leHByZXNzaW9uLXRyYW5zZm9ybWVyJztcblxuZnVuY3Rpb24gcG9zdFRyYW5zZm9ybU5vZGUobm9kZSkge1xuICAgIGlmIChub2RlLnR5cGUgIT09IDEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChub2RlLmlmKSB7XG4gICAgICAgIG5vZGUuYXR0cnNNYXBbJ3MtaWYnXSA9IHRyYW5zZm9ybShub2RlLmlmKS5jb2RlO1xuICAgICAgICBkZWxldGUgbm9kZS5hdHRyc01hcFsndi1pZiddO1xuICAgIH1cblxuICAgIGlmIChub2RlLmVsc2VpZikge1xuICAgICAgICBub2RlLmF0dHJzTWFwWydzLWVsc2UtaWYnXSA9IHRyYW5zZm9ybShub2RlLmVsc2VpZikuY29kZTtcbiAgICAgICAgZGVsZXRlIG5vZGUuYXR0cnNNYXBbJ3YtZWxzZS1pZiddO1xuICAgIH1cblxuICAgIGlmIChub2RlLmVsc2UpIHtcbiAgICAgICAgbm9kZS5hdHRyc01hcFsncy1lbHNlJ10gPSBub2RlLmVsc2U7XG4gICAgICAgIGRlbGV0ZSBub2RlLmF0dHJzTWFwWyd2LWVsc2UnXTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwb3N0VHJhbnNmb3JtTm9kZVxufTtcbiIsIi8qKlxuICogQGZpbGUgZm9yXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHRyYW5zZm9ybSBmcm9tICcuLi9leHByZXNzaW9uLXRyYW5zZm9ybWVyJztcblxuZnVuY3Rpb24gcG9zdFRyYW5zZm9ybU5vZGUobm9kZSkge1xuICAgIGlmIChub2RlLnR5cGUgIT09IDEgfHwgIW5vZGUuZm9yKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgZnIgPSBub2RlLmFsaWFzO1xuXG4gICAgaWYgKG5vZGUuaXRlcmF0b3IxKSB7XG4gICAgICAgIGZyICs9IGAsJHtub2RlLml0ZXJhdG9yMX1gO1xuICAgIH1cblxuICAgIGZyICs9IGAgaW4gX2woJHtub2RlLmZvcn0pYDtcblxuICAgIGlmIChub2RlLmtleSkge1xuICAgICAgICBjb25zdCB0cmFja0J5RXhwciA9IHRyYW5zZm9ybShub2RlLmtleSk7XG4gICAgICAgIC8vIHNhbiDlj6rmlK/mjIHlj5jph49cbiAgICAgICAgZnIgKz0gdHJhY2tCeUV4cHIuYXN0LnR5cGUgPT09ICdJZGVudGlmaWVyJyA/IGAgdHJhY2tCeSAke25vZGUua2V5fWAgOiAnJztcbiAgICB9XG5cbiAgICBub2RlLmF0dHJzTWFwWydzLWZvciddID0gZnI7XG5cbiAgICBkZWxldGUgbm9kZS5hdHRyc01hcFsndi1mb3InXTtcbiAgICBkZWxldGUgbm9kZS5hdHRyc01hcFsna2V5J107XG4gICAgZGVsZXRlIG5vZGUuYXR0cnNNYXBbJzprZXknXTtcbiAgICBkZWxldGUgbm9kZS5hdHRyc01hcFsndi1iaW5kOmtleSddO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcG9zdFRyYW5zZm9ybU5vZGVcbn07XG4iLCIvKipcbiAqIEBmaWxlIGV2ZW50XG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHRyYW5zZm9ybSBmcm9tICcuLi9leHByZXNzaW9uLXRyYW5zZm9ybWVyJztcblxuY29uc3QgcmVFdmVudCA9IC9eKEB8di1vbjopLztcblxuZnVuY3Rpb24gcG9zdFRyYW5zZm9ybU5vZGUobm9kZSkge1xuICAgIGNvbnN0IGV2ZW50QXR0cnMgPSBub2RlLmF0dHJzTGlzdC5maWx0ZXIobiA9PiByZUV2ZW50LnRlc3Qobi5uYW1lKSk7XG4gICAgZm9yIChjb25zdCBhdHRyIG9mIGV2ZW50QXR0cnMpIHtcbiAgICAgICAgZGVsZXRlIG5vZGUuYXR0cnNNYXBbYXR0ci5uYW1lXTtcbiAgICAgICAgY29uc3QgW25hbWUsIC4uLm1vZGlmaWVyc10gPSBhdHRyLm5hbWUuc3BsaXQoJy4nKTtcbiAgICAgICAgY29uc3QgZXZlbnRIYW5kbGVyID0gYXR0ci52YWx1ZSA/IHRyYW5zZm9ybShhdHRyLnZhbHVlKS5jb2RlIDogJ19ub29wJztcbiAgICAgICAgbm9kZS5hdHRyc01hcFtgb24tJHtuYW1lLnJlcGxhY2UocmVFdmVudCwgJycpfWBdXG4gICAgICAgICAgICA9IGAke21vZGlmaWVycy5tYXAobSA9PiBgJHttfTpgKS5qb2luKCcnKX0ke2V2ZW50SGFuZGxlcn1gO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHBvc3RUcmFuc2Zvcm1Ob2RlXG59O1xuIiwiLyoqXG4gKiBAZmlsZSBjbGFzc1xuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmZ1bmN0aW9uIHBvc3RUcmFuc2Zvcm1Ob2RlKG5vZGUpIHtcblxuICAgIGlmIChub2RlLmF0dHJzTWFwICYmIG5vZGUuYXR0cnNNYXBbJ3YtZGFuZ2Vyb3VzLWh0bWwnXSkge1xuICAgICAgICBjb25zdCBkaXIgPSBub2RlLmRpcmVjdGl2ZXMuZmluZChkID0+IGQubmFtZSA9PT0gJ2Rhbmdlcm91cy1odG1sJyk7XG4gICAgICAgIGRpci5uYW1lID0gJ2h0bWwnO1xuICAgICAgICBkaXIudmFsdWUgPSBub2RlLmF0dHJzTWFwWyd2LWh0bWwnXSA9IG5vZGUuYXR0cnNNYXBbJ3YtZGFuZ2Vyb3VzLWh0bWwnXTtcbiAgICAgICAgZGVsZXRlIG5vZGUuYXR0cnNNYXBbJ3YtZGFuZ2Vyb3VzLWh0bWwnXTtcbiAgICB9XG5cbiAgICBpZiAobm9kZS5hdHRyc01hcCAmJiBub2RlLmF0dHJzTWFwWyd2LXNhZmUtaHRtbCddKSB7XG4gICAgICAgIGNvbnN0IGRpciA9IG5vZGUuZGlyZWN0aXZlcy5maW5kKGQgPT4gZC5uYW1lID09PSAnc2FmZS1odG1sJyk7XG4gICAgICAgIGRpci5uYW1lID0gJ2h0bWwnO1xuICAgICAgICBkaXIudmFsdWUgPSBub2RlLmF0dHJzTWFwWyd2LWh0bWwnXSA9IGBfc2YoJHtub2RlLmF0dHJzTWFwWyd2LXNhZmUtaHRtbCddfSlgO1xuICAgICAgICBkZWxldGUgbm9kZS5hdHRyc01hcFsndi1zYWZlLWh0bWwnXTtcbiAgICB9XG5cbiAgICBpZiAobm9kZS50eXBlID09PSAxICYmIG5vZGUuYXR0cnNNYXBbJ3YtaHRtbCddKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gbm9kZS5kaXJlY3RpdmVzLmZpbmQoZCA9PiBkLm5hbWUgPT09ICdodG1sJykudmFsdWU7XG4gICAgICAgIGRlbGV0ZSBub2RlLmF0dHJzTWFwWyd2LWh0bWwnXTtcbiAgICAgICAgbm9kZS5hdHRyc01hcFsncy1odG1sJ10gPSBge3sgJHt2YWx1ZX0gfX1gO1xuICAgICAgICBub2RlLmNoaWxkcmVuID0gW107XG4gICAgfVxuXG4gICAgaWYgKG5vZGUudHlwZSA9PT0gMSAmJiBub2RlLmF0dHJzTWFwWyd2LXRleHQnXSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IG5vZGUuZGlyZWN0aXZlcy5maW5kKGQgPT4gZC5uYW1lID09PSAndGV4dCcpLnZhbHVlO1xuICAgICAgICBkZWxldGUgbm9kZS5hdHRyc01hcFsndi10ZXh0J107XG4gICAgICAgIG5vZGUuY2hpbGRyZW4gPSBbe1xuICAgICAgICAgICAgdHlwZTogMixcbiAgICAgICAgICAgIHRleHQ6IGB7eyAke3ZhbHVlfSB9fWBcbiAgICAgICAgfV07XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcG9zdFRyYW5zZm9ybU5vZGVcbn07XG4iLCIvKipcbiAqIEBmaWxlIHJlZlxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmZ1bmN0aW9uIHBvc3RUcmFuc2Zvcm1Ob2RlKG5vZGUsIG9wdGlvbnMpIHtcbiAgICBpZiAobm9kZS50eXBlICE9PSAxIHx8ICFub2RlLmF0dHJzTWFwLnJlZiAmJiAhbm9kZS5hdHRyc01hcFsnOnJlZiddKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCByZWYgPSBub2RlLmF0dHJzTWFwLnJlZjtcbiAgICBpZiAocmVmKSB7XG4gICAgICAgIGRlbGV0ZSBub2RlLmF0dHJzTWFwLnJlZjtcbiAgICAgICAgbm9kZS5hdHRyc01hcFsncy1yZWYnXSA9IHJlZjtcblxuICAgICAgICBjb25zdCBpbmZvID0ge1xuICAgICAgICAgICAgbmFtZTogcmVmLFxuICAgICAgICAgICAgcm9vdDogbm9kZS5wYXJlbnQgPyB1bmRlZmluZWQgOiAxXG4gICAgICAgIH07XG5cbiAgICAgICAgb3B0aW9ucy5yZWZzLnB1c2goaW5mbyk7XG4gICAgfVxuXG4gICAgY29uc3QgYmluZFJlZiA9IG5vZGUuYXR0cnNNYXBbJzpyZWYnXTtcbiAgICBpZiAoYmluZFJlZikge1xuICAgICAgICBkZWxldGUgbm9kZS5hdHRyc01hcFsnOnJlZiddO1xuICAgICAgICBub2RlLmF0dHJzTWFwWydzLXJlZiddID0gYHt7ICR7YmluZFJlZn0gfX1gO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHBvc3RUcmFuc2Zvcm1Ob2RlXG59O1xuIiwiLyoqXG4gKiBAZmlsZSBjb21wb25lbnQgOmlzXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHtwYXJzZX0gZnJvbSAnYXRvbS1leHByZXNzaW9uLWNvbXBpbGVyJztcblxuZnVuY3Rpb24gcG9zdFRyYW5zZm9ybU5vZGUobm9kZSwgb3B0aW9ucykge1xuICAgIGlmICghKG5vZGUudHlwZSA9PT0gMSAmJiBub2RlLnRhZyA9PT0gJ2NvbXBvbmVudCcpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgaXMgPSBub2RlLmF0dHJzTWFwLmlzO1xuICAgIGRlbGV0ZSBub2RlLmF0dHJzTWFwLmlzO1xuXG4gICAgaWYgKCFpcy5zdGFydHNXaXRoKCd7eycpKSB7XG4gICAgICAgIG5vZGUudGFnID0gbm9kZS5hdHRyc01hcC5pcztcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHZhbHVlID0gaXMuc2xpY2UoMiwgaXMubGVuZ3RoIC0gMikudHJpbSgpO1xuICAgIGNvbnN0IGV4cHIgPSBwYXJzZSh2YWx1ZSwge1xuICAgICAgICBzdGFydFJ1bGU6ICdWdWVFeHByZXNzaW9uJ1xuICAgIH0pO1xuXG4gICAgaWYgKG5vZGUuaWYgfHwgbm9kZS5lbHNlaWYgfHwgbm9kZS5lbHNlKSB7XG4gICAgICAgIG9wdGlvbnMuZXJyb3IoJ2R5bmFtaWMgY29tcG9uZW50IGNhbiBub3QgdXNlIHdpdGggdi1pZi4nKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgICAgZXhwci5leHByZXNzaW9uLnR5cGUgPT09ICdDb25kaXRpb25hbEV4cHJlc3Npb24nXG4gICAgICAgICYmIGV4cHIuZXhwcmVzc2lvbi5jb25zZXF1ZW50LnR5cGUgPT09ICdMaXRlcmFsJ1xuICAgICAgICAmJiBleHByLmV4cHJlc3Npb24uYWx0ZXJuYXRlLnR5cGUgPT09ICdMaXRlcmFsJ1xuICAgICkge1xuICAgICAgICBjb25zdCB0ZXN0TG9jYXRpb24gPSBleHByLmV4cHJlc3Npb24udGVzdC5sb2NhdGlvbjtcbiAgICAgICAgY29uc3QgdGVzdCA9IHZhbHVlLnNsaWNlKHRlc3RMb2NhdGlvbi5zdGFydC5vZmZzZXQsIHRlc3RMb2NhdGlvbi5lbmQub2Zmc2V0KTtcbiAgICAgICAgY29uc3QgYXR0cnMgPSB7XG4gICAgICAgICAgICAuLi5ub2RlLmF0dHJzTWFwLFxuICAgICAgICAgICAgJ3MtZWxzZSc6ICcnXG4gICAgICAgIH07XG4gICAgICAgIG5vZGUudGFnID0gZXhwci5leHByZXNzaW9uLmNvbnNlcXVlbnQudmFsdWU7XG4gICAgICAgIG5vZGUuYXR0cnNNYXBbJ3MtaWYnXSA9IHRlc3Q7XG4gICAgICAgIG5vZGUuaWZDb25kaXRpb25zID0gW3tcbiAgICAgICAgICAgIGV4cDogdGVzdCxcbiAgICAgICAgICAgIGJsb2NrOiBub2RlXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGJsb2NrOiB7XG4gICAgICAgICAgICAgICAgLi4ubm9kZSxcbiAgICAgICAgICAgICAgICBhdHRyc01hcDogYXR0cnMsXG4gICAgICAgICAgICAgICAgdGFnOiBleHByLmV4cHJlc3Npb24uYWx0ZXJuYXRlLnZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1dO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHBvc3RUcmFuc2Zvcm1Ob2RlXG59O1xuIiwiLyoqXG4gKiBAZmlsZSBjb25zdGFudHNcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG4vKlxuICBTZWxmLWVuY2xvc2luZyB0YWdzIChzdG9sZW4gZnJvbSBub2RlLWh0bWxwYXJzZXIpXG4qL1xuZXhwb3J0IGNvbnN0IHNpbmdsZVRhZyA9IHtcbiAgICBhcmVhOiB0cnVlLFxuICAgIGJhc2U6IHRydWUsXG4gICAgYmFzZWZvbnQ6IHRydWUsXG4gICAgYnI6IHRydWUsXG4gICAgY29sOiB0cnVlLFxuICAgIGNvbW1hbmQ6IHRydWUsXG4gICAgZW1iZWQ6IHRydWUsXG4gICAgZnJhbWU6IHRydWUsXG4gICAgaHI6IHRydWUsXG4gICAgaW1nOiB0cnVlLFxuICAgIGlucHV0OiB0cnVlLFxuICAgIGlzaW5kZXg6IHRydWUsXG4gICAga2V5Z2VuOiB0cnVlLFxuICAgIGxpbms6IHRydWUsXG4gICAgbWV0YTogdHJ1ZSxcbiAgICBwYXJhbTogdHJ1ZSxcbiAgICBzb3VyY2U6IHRydWUsXG4gICAgdHJhY2s6IHRydWUsXG4gICAgd2JyOiB0cnVlXG59O1xuXG5leHBvcnQgY29uc3QgYm9vbGVhbkF0dHIgPSB7XG4gICAgYWxsb3dmdWxsc2NyZWVuOiB0cnVlLFxuICAgIGFzeW5jOiB0cnVlLFxuICAgIGF1dG9mb2N1czogdHJ1ZSxcbiAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICBjaGVja2VkOiB0cnVlLFxuICAgIGNvbXBhY3Q6IHRydWUsXG4gICAgY29udHJvbHM6IHRydWUsXG4gICAgZGVjbGFyZTogdHJ1ZSxcbiAgICBkZWZhdWx0OiB0cnVlLFxuICAgIGRlZmF1bHRjaGVja2VkOiB0cnVlLFxuICAgIGRlZmF1bHRtdXRlZDogdHJ1ZSxcbiAgICBkZWZhdWx0c2VsZWN0ZWQ6IHRydWUsXG4gICAgZGVmZXI6IHRydWUsXG4gICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICBmb3Jtbm92YWxpZGF0ZTogdHJ1ZSxcbiAgICBoaWRkZW46IHRydWUsXG4gICAgaW5kZXRlcm1pbmF0ZTogdHJ1ZSxcbiAgICBpbmVydDogdHJ1ZSxcbiAgICBpc21hcDogdHJ1ZSxcbiAgICBpdGVtc2NvcGU6IHRydWUsXG4gICAgbG9vcDogdHJ1ZSxcbiAgICBtdWx0aXBsZTogdHJ1ZSxcbiAgICBtdXRlZDogdHJ1ZSxcbiAgICBub2hyZWY6IHRydWUsXG4gICAgbm9yZXNpemU6IHRydWUsXG4gICAgbm9zaGFkZTogdHJ1ZSxcbiAgICBub3ZhbGlkYXRlOiB0cnVlLFxuICAgIG5vd3JhcDogdHJ1ZSxcbiAgICBvcGVuOiB0cnVlLFxuICAgIHBhdXNlb25leGl0OiB0cnVlLFxuICAgIHJlYWRvbmx5OiB0cnVlLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIHJldmVyc2VkOiB0cnVlLFxuICAgIHNjb3BlZDogdHJ1ZSxcbiAgICBzZWFtbGVzczogdHJ1ZSxcbiAgICBzZWxlY3RlZDogdHJ1ZSxcbiAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICB0cmFuc2xhdGU6IHRydWUsXG4gICAgdHJ1ZXNwZWVkOiB0cnVlLFxuICAgIHR5cGVtdXN0bWF0Y2g6IHRydWUsXG4gICAgdmlzaWJsZTogdHJ1ZSxcbn07XG5cblxuZXhwb3J0IGNvbnN0IG5vVmFsdWVBdHRyID0ge1xuICAgICdzLWVsc2UnOiB0cnVlXG59O1xuXG5cbmV4cG9ydCBjb25zdCBodG1sVGFnID0ge1xuICAgIGh0bWw6IHRydWUsXG4gICAgYm9keTogdHJ1ZSxcbiAgICBiYXNlOiB0cnVlLFxuICAgIGhlYWQ6IHRydWUsXG4gICAgbGluazogdHJ1ZSxcbiAgICBtZXRhOiB0cnVlLFxuICAgIHN0eWxlOiB0cnVlLFxuICAgIHRpdGxlOiB0cnVlLFxuICAgIGFkZHJlc3M6IHRydWUsXG4gICAgYXJ0aWNsZTogdHJ1ZSxcbiAgICBhc2lkZTogdHJ1ZSxcbiAgICBmb290ZXI6IHRydWUsXG4gICAgaGVhZGVyOiB0cnVlLFxuICAgIGgxOiB0cnVlLFxuICAgIGgyOiB0cnVlLFxuICAgIGgzOiB0cnVlLFxuICAgIGg0OiB0cnVlLFxuICAgIGg1OiB0cnVlLFxuICAgIGg2OiB0cnVlLFxuICAgIGhncm91cDogdHJ1ZSxcbiAgICBuYXY6IHRydWUsXG4gICAgc2VjdGlvbjogdHJ1ZSxcbiAgICBkaXY6IHRydWUsXG4gICAgZGQ6IHRydWUsXG4gICAgZGw6IHRydWUsXG4gICAgZHQ6IHRydWUsXG4gICAgZmlnY2FwdGlvbjogdHJ1ZSxcbiAgICBmaWd1cmU6IHRydWUsXG4gICAgaHI6IHRydWUsXG4gICAgaW1nOiB0cnVlLFxuICAgIGxpOiB0cnVlLFxuICAgIG1haW46IHRydWUsXG4gICAgb2w6IHRydWUsXG4gICAgcDogdHJ1ZSxcbiAgICBwcmU6IHRydWUsXG4gICAgdWw6IHRydWUsXG4gICAgYTogdHJ1ZSxcbiAgICBiOiB0cnVlLFxuICAgIGFiYnI6IHRydWUsXG4gICAgYmRpOiB0cnVlLFxuICAgIGJkbzogdHJ1ZSxcbiAgICBicjogdHJ1ZSxcbiAgICBjaXRlOiB0cnVlLFxuICAgIGNvZGU6IHRydWUsXG4gICAgZGF0YTogdHJ1ZSxcbiAgICBkZm46IHRydWUsXG4gICAgZW06IHRydWUsXG4gICAgaTogdHJ1ZSxcbiAgICBrYmQ6IHRydWUsXG4gICAgbWFyazogdHJ1ZSxcbiAgICBxOiB0cnVlLFxuICAgIHJwOiB0cnVlLFxuICAgIHJ0OiB0cnVlLFxuICAgIHJ0YzogdHJ1ZSxcbiAgICBydWJ5OiB0cnVlLFxuICAgIHM6IHRydWUsXG4gICAgc2FtcDogdHJ1ZSxcbiAgICBzbWFsbDogdHJ1ZSxcbiAgICBzcGFuOiB0cnVlLFxuICAgIHN0cm9uZzogdHJ1ZSxcbiAgICBzdWI6IHRydWUsXG4gICAgc3VwOiB0cnVlLFxuICAgIHRpbWU6IHRydWUsXG4gICAgdTogdHJ1ZSxcbiAgICB2YXI6IHRydWUsXG4gICAgd2JyOiB0cnVlLFxuICAgIGFyZWE6IHRydWUsXG4gICAgYXVkaW86IHRydWUsXG4gICAgbWFwOiB0cnVlLFxuICAgIHRyYWNrOiB0cnVlLFxuICAgIHZpZGVvOiB0cnVlLFxuICAgIGVtYmVkOiB0cnVlLFxuICAgIG9iamVjdDogdHJ1ZSxcbiAgICBwYXJhbTogdHJ1ZSxcbiAgICBzb3VyY2U6IHRydWUsXG4gICAgY2FudmFzOiB0cnVlLFxuICAgIHNjcmlwdDogdHJ1ZSxcbiAgICBub3NjcmlwdDogdHJ1ZSxcbiAgICBkZWw6IHRydWUsXG4gICAgaW5zOiB0cnVlLFxuICAgIGNhcHRpb246IHRydWUsXG4gICAgY29sOiB0cnVlLFxuICAgIGNvbGdyb3VwOiB0cnVlLFxuICAgIHRhYmxlOiB0cnVlLFxuICAgIHRoZWFkOiB0cnVlLFxuICAgIHRib2R5OiB0cnVlLFxuICAgIHRkOiB0cnVlLFxuICAgIHRoOiB0cnVlLFxuICAgIHRyOiB0cnVlLFxuICAgIGJ1dHRvbjogdHJ1ZSxcbiAgICBkYXRhbGlzdDogdHJ1ZSxcbiAgICBmaWVsZHNldDogdHJ1ZSxcbiAgICBmb3JtOiB0cnVlLFxuICAgIGlucHV0OiB0cnVlLFxuICAgIGxhYmVsOiB0cnVlLFxuICAgIGxlZ2VuZDogdHJ1ZSxcbiAgICBtZXRlcjogdHJ1ZSxcbiAgICBvcHRncm91cDogdHJ1ZSxcbiAgICBvcHRpb246IHRydWUsXG4gICAgb3V0cHV0OiB0cnVlLFxuICAgIHByb2dyZXNzOiB0cnVlLFxuICAgIHNlbGVjdDogdHJ1ZSxcbiAgICB0ZXh0YXJlYTogdHJ1ZSxcbiAgICBkZXRhaWxzOiB0cnVlLFxuICAgIGRpYWxvZzogdHJ1ZSxcbiAgICBtZW51OiB0cnVlLFxuICAgIG1lbnVpdGVtOiB0cnVlLFxuICAgIHN1bW1hcnk6IHRydWUsXG4gICAgY29udGVudDogdHJ1ZSxcbiAgICBlbGVtZW50OiB0cnVlLFxuICAgIHNoYWRvdzogdHJ1ZSxcbiAgICB0ZW1wbGF0ZTogdHJ1ZVxufTtcbiIsIi8qKlxuICogQGZpbGUgYm9vbCDlnovkvKDlgLxcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQge2Jvb2xlYW5BdHRyLCBub1ZhbHVlQXR0ciwgaHRtbFRhZ30gZnJvbSAnLi4vY29uc3RhbnQnO1xuXG5mdW5jdGlvbiBwb3N0VHJhbnNmb3JtTm9kZShub2RlKSB7XG4gICAgaWYgKCFub2RlLnR5cGUgPT09IDEgfHwgIW5vZGUuYXR0cnNNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhub2RlLmF0dHJzTWFwKS5maWx0ZXIobiA9PiBub2RlLmF0dHJzTWFwW25dID09PSAnJyk7XG4gICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICBpZiAoKGh0bWxUYWdbbm9kZS50YWddICYmIGJvb2xlYW5BdHRyW2tleV0pIHx8IG5vVmFsdWVBdHRyW2tleV0pIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUuYXR0cnNNYXBba2V5XSA9IGB7eyB0cnVlIH19YDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwb3N0VHJhbnNmb3JtTm9kZVxufTtcbiIsIi8qKlxuICogQGZpbGUgdHJhbnNmb3JtZXJzXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IGNsYXp6IGZyb20gJy4vY2xhc3MnO1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vc3R5bGUnO1xuaW1wb3J0IGJpbmQgZnJvbSAnLi9iaW5kJztcbmltcG9ydCB5ZiBmcm9tICcuL2lmJztcbmltcG9ydCBmciBmcm9tICcuL2Zvcic7XG5pbXBvcnQgZXZlbnQgZnJvbSAnLi9ldmVudCc7XG5pbXBvcnQgaHRtbCBmcm9tICcuL2h0bWwnO1xuaW1wb3J0IHJlZiBmcm9tICcuL3JlZic7XG5pbXBvcnQgZHluYW1pY0NvbXBvbmVudCBmcm9tICcuL2R5bmFtaWMtY29tcG9uZW50JztcbmltcG9ydCBib29sIGZyb20gJy4vYm9vbGVhbic7XG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAgICBib29sLFxuICAgIHlmLFxuICAgIGZyLFxuICAgIGV2ZW50LFxuICAgIGh0bWwsXG4gICAgcmVmLFxuXG4gICAgY2xhenosXG4gICAgc3R5bGUsXG5cbiAgICAvLyBiaW5kIOaUvuWcqOaJgOacieWkhOeQhuWujOS5i+WQjlxuICAgIGJpbmQsXG5cbiAgICBkeW5hbWljQ29tcG9uZW50XG5dO1xuIiwiLyoqXG4gKiBAZmlsZSBnZXQgaHRtbCBmcm9tIGFzdFxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCB7dHJpbX0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7bm9WYWx1ZUF0dHIsIHNpbmdsZVRhZywgYm9vbGVhbkF0dHIsIGh0bWxUYWd9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHRyYW5zZm9ybSBmcm9tICcuL2V4cHJlc3Npb24tdHJhbnNmb3JtZXInO1xuXG5mdW5jdGlvbiBzdHJpbmdpZnlBdHRyKGtleSwgdmFsdWUsIHRhZykge1xuICAgIGlmIChub1ZhbHVlQXR0cltrZXldIHx8ICghdmFsdWUgJiYgaHRtbFRhZ1t0YWddICYmIGJvb2xlYW5BdHRyW2tleV0pKSB7XG4gICAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICAgIHJldHVybiBgJHtrZXl9PSR7SlNPTi5zdHJpbmdpZnkodmFsdWUuc3RhcnRzV2l0aCgne3snKSA/IHZhbHVlIDogdmFsdWUucmVwbGFjZSgvXFxzKy9nLCAnICcpKX1gO1xufVxuXG4vLyBmdW5jdGlvbiB0cmFuc2Zvcm1DaGlsZChub2RlKSB7XG4vLyAgICAgcmV0dXJuIG5vZGUudG9rZW5zLnJlZHVjZSgocHJldiwgdG9rZW4pID0+IHtcbi8vICAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gJ3N0cmluZycpIHtcbi8vICAgICAgICAgICAgIHJldHVybiBwcmV2ICsgdG9rZW47XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgY29uc29sZS5sb2cobm9kZSk7XG4vLyAgICAgICAgIHJldHVybiBwcmV2ICsgYHt7ICR7dHJhbnNmb3JtKHRva2VuWydAYmluZGluZyddKS5jb2RlfSB9fWA7XG4vLyAgICAgfSwgJycpO1xuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdHJpbmdpZnkoYXN0LCB7c2NvcGVJZCwgc3RyaXAsIGF0b219KSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFzdCkpIHtcbiAgICAgICAgYXN0ID0gW2FzdF07XG4gICAgfVxuXG4gICAgbGV0IGh0bWwgPSAnJztcblxuICAgIGZvciAoY29uc3Qgbm9kZSBvZiBhc3QpIHtcbiAgICAgICAgaWYgKG5vZGUudHlwZSA9PT0gMyB8fCBub2RlLnR5cGUgPT09IDIpIHtcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSBub2RlLnRleHQ7XG4gICAgICAgICAgICBodG1sICs9IHN0cmlwXG4gICAgICAgICAgICAgICAgPyB0cmltKHRleHQsICcgXFxuXFx0JylcbiAgICAgICAgICAgICAgICA6IHRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobm9kZS50eXBlID09PSAxKSB7XG4gICAgICAgICAgICBjb25zdCBhdHRycyA9IE9iamVjdC5rZXlzKG5vZGUuYXR0cnNNYXApLm1hcChrZXkgPT4gc3RyaW5naWZ5QXR0cihrZXksIG5vZGUuYXR0cnNNYXBba2V5XSwgbm9kZS50YWcpKTtcbiAgICAgICAgICAgIGlmIChzY29wZUlkKSB7XG4gICAgICAgICAgICAgICAgc2NvcGVJZCA9IHNjb3BlSWQucmVwbGFjZSgvXmRhdGEtKGF8diktLywgJycpO1xuICAgICAgICAgICAgICAgIGF0dHJzLnB1c2goYGRhdGEtJHthdG9tID8gJ2EnIDogJ3YnfS0ke3Njb3BlSWR9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBoYXNDaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW4gJiYgbm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwO1xuICAgICAgICAgICAgY29uc3QgaGFzQXR0ciA9IGF0dHJzLmxlbmd0aCA+IDA7XG4gICAgICAgICAgICBodG1sICs9IGA8JHtub2RlLnRhZ30ke2hhc0F0dHIgPyAnICcgOiAnJ30ke2F0dHJzLmpvaW4oJyAnKX0+YDtcbiAgICAgICAgICAgIGh0bWwgKz0gaGFzQ2hpbGRyZW4gPyBzdHJpbmdpZnkobm9kZS5jaGlsZHJlbiwge3Njb3BlSWQsIHN0cmlwLCBhdG9tfSkgOiAnJztcbiAgICAgICAgICAgIGh0bWwgKz0gIWhhc0NoaWxkcmVuICYmIHNpbmdsZVRhZ1tub2RlLnRhZ10gPyAnJyA6IGA8LyR7bm9kZS50YWd9PmA7XG5cbiAgICAgICAgICAgIGlmIChub2RlLmlmQ29uZGl0aW9ucyAmJiBub2RlLmlmQ29uZGl0aW9ucy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgaHRtbCArPSBzdHJpbmdpZnkobm9kZS5pZkNvbmRpdGlvbnMuc2xpY2UoMSkubWFwKG4gPT4gbi5ibG9jayksIHtzY29wZUlkLCBzdHJpcCwgYXRvbX0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWw7XG59XG4iLCIvKipcbiAqIEBmaWxlIOS4gOS6m+W3peWFt+WHveaVsFxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbi8qKlxuICogTWl4IHByb3BlcnRpZXMgaW50byB0YXJnZXQgb2JqZWN0LlxuICovXG5leHBvcnQgY29uc3QgZXh0ZW5kID0gT2JqZWN0LmFzc2lnbjtcblxuLyoqXG4gKiBNZXJnZSBhbiBBcnJheSBvZiBPYmplY3RzIGludG8gYSBzaW5nbGUgT2JqZWN0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9PYmplY3QoYXJyKSB7XG4gICAgY29uc3QgcmVzID0ge307XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGFycltpXSkge1xuICAgICAgICAgICAgZXh0ZW5kKHJlcywgYXJyW2ldKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufVxuXG4vKipcbiAqIEdldCB0aGUgcmF3IHR5cGUgc3RyaW5nIG9mIGEgdmFsdWUsIGUuZy4sIFtvYmplY3QgT2JqZWN0XS5cbiAqL1xuZXhwb3J0IGNvbnN0IF90b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogUXVpY2sgb2JqZWN0IGNoZWNrIC0gdGhpcyBpcyBwcmltYXJpbHkgdXNlZCB0byB0ZWxsXG4gKiBPYmplY3RzIGZyb20gcHJpbWl0aXZlIHZhbHVlcyB3aGVuIHdlIGtub3cgdGhlIHZhbHVlXG4gKiBpcyBhIEpTT04tY29tcGxpYW50IHR5cGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdChvYmopIHtcbiAgICByZXR1cm4gb2JqICE9PSBudWxsICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgYW4gb2JqZWN0IGhhcyB0aGUgcHJvcGVydHkuXG4gKi9cbmNvbnN0IGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbmV4cG9ydCBmdW5jdGlvbiBoYXNPd24ob2JqLCBrZXkpIHtcbiAgICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSk7XG59XG5cbi8qKlxuICogU3RyaWN0IG9iamVjdCB0eXBlIGNoZWNrLiBPbmx5IHJldHVybnMgdHJ1ZVxuICogZm9yIHBsYWluIEphdmFTY3JpcHQgb2JqZWN0cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzUGxhaW5PYmplY3Qob2JqKSB7XG4gICAgcmV0dXJuIF90b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IE9iamVjdF0nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVmKG9iaiwga2V5LCBwcm9wZXJ0eSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgZXh0ZW5kKHtcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0sIHByb3BlcnR5KSk7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgY2FjaGVkIHZlcnNpb24gb2YgYSBwdXJlIGZ1bmN0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2FjaGVkKGZuKSB7XG4gICAgY29uc3QgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHJldHVybiBmdW5jdGlvbiBjYWNoZWRGbihzdHIpIHtcbiAgICAgICAgY29uc3QgaGl0ID0gY2FjaGVbc3RyXTtcbiAgICAgICAgcmV0dXJuIGhpdCB8fCAoY2FjaGVbc3RyXSA9IGZuKHN0cikpO1xuICAgIH07XG59XG5cbi8qKlxuICogSHlwaGVuYXRlIGEgY2FtZWxDYXNlIHN0cmluZy5cbiAqL1xuY29uc3QgaHlwaGVuYXRlUkUgPSAvKFteLV0pKFtBLVpdKS9nO1xuZXhwb3J0IGNvbnN0IGh5cGhlbmF0ZSA9IGNhY2hlZCgoc3RyKSA9PiB7XG4gICAgcmV0dXJuIHN0clxuICAgICAgICAucmVwbGFjZShoeXBoZW5hdGVSRSwgJyQxLSQyJylcbiAgICAgICAgLnJlcGxhY2UoaHlwaGVuYXRlUkUsICckMS0kMicpXG4gICAgICAgIC50b0xvd2VyQ2FzZSgpO1xufSk7XG5cbmV4cG9ydCBjb25zdCBjYW1lbGl6ZSA9IHN0ciA9PiBzdHIucmVwbGFjZSgvLShcXHcpL2csIChfLCBjKSA9PiAoYyA/IGMudG9VcHBlckNhc2UoKSA6ICcnKSk7XG4iLCIvKipcbiAqIEBmaWxlIGNzcyBtb2R1bGVzIG1vZHVsZVxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCB7Y2FtZWxpemV9IGZyb20gJy4uLy4uL3NoYXJlZC91dGlsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNzc01vZHVsZXMpIHtcblxuICAgIGZ1bmN0aW9uIHByZVRyYW5zZm9ybU5vZGUoZWwpIHtcbiAgICAgICAgaWYgKGNzc01vZHVsZXMgJiYgY3NzTW9kdWxlcy4kc3R5bGUgJiYgZWwuYXR0cnNNYXAuY2xhc3MpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRpY0NsYXNzID0gZWwuYXR0cnNNYXAuY2xhc3MucmVwbGFjZSgvKF5cInxcIiQpL2csICcnKS5zcGxpdCgnICcpO1xuICAgICAgICAgICAgZWwuYXR0cnNNYXAuY2xhc3MgPSBzdGF0aWNDbGFzcy5tYXAoYyA9PiAoY3NzTW9kdWxlcy4kc3R5bGVbY2FtZWxpemUoYyldIHx8IGMpKS5qb2luKCcgJyk7XG4gICAgICAgICAgICBlbC5hdHRyc0xpc3QgPSBlbC5hdHRyc0xpc3QubWFwKFxuICAgICAgICAgICAgICAgICh7bmFtZSwgdmFsdWV9KSA9PiAoe25hbWUsIHZhbHVlOiBuYW1lID09PSAnY2xhc3MnID8gZWwuYXR0cnNNYXAuY2xhc3MgOiB2YWx1ZX0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJlVHJhbnNmb3JtTm9kZVxuICAgIH07XG59XG5cbiIsIi8qKlxuICogQGZpbGUgYXRvbSBtb2R1bGVcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5mdW5jdGlvbiBwcmVUcmFuc2Zvcm1Ob2RlKGVsKSB7XG4gICAgZWwuYXR0cnNMaXN0ID0gZWwuYXR0cnNMaXN0Lm1hcCgoe25hbWUsIHZhbHVlfSkgPT4ge1xuICAgICAgICBkZWxldGUgZWwuYXR0cnNNYXBbbmFtZV07XG4gICAgICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UoL15hLS8sICd2LScpO1xuICAgICAgICBlbC5hdHRyc01hcFtuYW1lXSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICBuYW1lXG4gICAgICAgIH07XG4gICAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcmVUcmFuc2Zvcm1Ob2RlXG59O1xuIiwiLyoqXG4gKiBAZmlsZSDkvJjljJYgYU5vZGUg55qE5L2T56evXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb3B0aW1pemUoYU5vZGUpIHtcbiAgICBkZWxldGUgYU5vZGUucmF3O1xuICAgIGlmIChhTm9kZS5jaGlsZHJlbikge1xuICAgICAgICBhTm9kZS5jaGlsZHJlbiA9IGFOb2RlLmNoaWxkcmVuLm1hcChvcHRpbWl6ZSk7XG4gICAgfVxuICAgIGlmIChhTm9kZS5lbHNlcykge1xuICAgICAgICBhTm9kZS5lbHNlcyA9IGFOb2RlLmVsc2VzLm1hcChvcHRpbWl6ZSk7XG4gICAgfVxuICAgIGlmIChhTm9kZS50ZXh0RXhwcikge1xuICAgICAgICBkZWxldGUgYU5vZGUudGV4dEV4cHIucmF3O1xuICAgIH1cbiAgICBpZiAoYU5vZGUucHJvcHMpIHtcbiAgICAgICAgYU5vZGUucHJvcHMgPSBhTm9kZS5wcm9wcy5tYXAocHJvcCA9PiB7XG4gICAgICAgICAgICBpZiAocHJvcC5yYXcpIHtcbiAgICAgICAgICAgICAgICAvLyDkuI3og73liKDpmaTvvIzov5DooYzml7bmnInnlKhcbiAgICAgICAgICAgICAgICBwcm9wLnJhdyA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcC5leHByKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHByb3AuZXhwci5yYXc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcHJvcDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChhTm9kZS5ldmVudHMpIHtcbiAgICAgICAgYU5vZGUuZXZlbnRzID0gYU5vZGUuZXZlbnRzLm1hcChldmVudCA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQucmF3KSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGV2ZW50LnJhdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChldmVudC5leHByKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGV2ZW50LmV4cHIucmF3O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGV2ZW50O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGFOb2RlLmRpcmVjdGl2ZXMpIHtcbiAgICAgICAgT2JqZWN0LmtleXMoYU5vZGUuZGlyZWN0aXZlcykuZm9yRWFjaChkaXIgPT4ge1xuICAgICAgICAgICAgZGVsZXRlIGFOb2RlLmRpcmVjdGl2ZXNbZGlyXS5yYXc7XG4gICAgICAgICAgICBpZiAoYU5vZGUuZGlyZWN0aXZlc1tkaXJdLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGFOb2RlLmRpcmVjdGl2ZXNbZGlyXS52YWx1ZS5yYXdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBhTm9kZTtcbn1cbiIsIi8qKlxuICogQGZpbGUgY29tcGlsZXJcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQgYnVpbGRJbk1vZHVsZXMgZnJvbSAnLi9tb2R1bGVzJztcbmltcG9ydCB7Y29tcGlsZSBhcyB2dWVDb21waWxlfSBmcm9tICd2dWUtdGVtcGxhdGUtY29tcGlsZXInO1xuaW1wb3J0IHN0cmluZ2lmeSBmcm9tICcuL3N0cmluZ2lmeSc7XG5pbXBvcnQgZ2V0Q3NzTW9kdWxlcyBmcm9tICcuL21vZHVsZXMvY3NzbW9kdWxlcyc7XG5pbXBvcnQgYXRvbSBmcm9tICcuL21vZHVsZXMvYXRvbSc7XG5pbXBvcnQge2lzRW1wdHl9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQge3BhcnNlVGVtcGxhdGV9IGZyb20gJ3Nhbic7XG5pbXBvcnQgb3B0aW1pemUgZnJvbSAnLi9vcHRpbWl6ZS1hbm9kZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21waWxlKHNvdXJjZSwgb3B0aW9ucyA9IHt9KSB7XG5cbiAgICBjb25zdCB7XG4gICAgICAgIG1vZHVsZXMgPSBbXSxcbiAgICAgICAgY3NzTW9kdWxlcyA9IG51bGwsXG4gICAgICAgIHNjb3BlSWQgPSAnJyxcbiAgICAgICAgc3RyaXAgPSB0cnVlLFxuICAgICAgICBhdG9tOiBpc0F0b20gPSBmYWxzZVxuICAgIH0gPSBvcHRpb25zO1xuXG4gICAgaWYgKCFpc0VtcHR5KGNzc01vZHVsZXMpKSB7XG4gICAgICAgIG1vZHVsZXMudW5zaGlmdChnZXRDc3NNb2R1bGVzKGNzc01vZHVsZXMpKTtcbiAgICB9XG5cbiAgICBpZiAoaXNBdG9tKSB7XG4gICAgICAgIG1vZHVsZXMudW5zaGlmdChhdG9tKTtcbiAgICB9XG5cbiAgICBjb25zdCBlcnJvcnMgPSBbXTtcbiAgICBjb25zdCBjb21waWxlck9wdGlvbnMgPSB7XG4gICAgICAgIG1vZHVsZXM6IFtcbiAgICAgICAgICAgIC4uLmJ1aWxkSW5Nb2R1bGVzLFxuICAgICAgICAgICAgLi4ubW9kdWxlc1xuICAgICAgICBdLFxuICAgICAgICBwcmVzZXJ2ZVdoaXRlc3BhY2U6IGZhbHNlLFxuICAgICAgICB1c2VEeW5hbWljQ29tcG9uZW50OiBmYWxzZSxcbiAgICAgICAgcmVmczogW10sXG4gICAgICAgIGVycm9yKG1zZykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgW3Z1c2EgZXJyb3JdICR7bXNnfWApO1xuICAgICAgICAgICAgZXJyb3JzLnB1c2gobXNnKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBjb25zb2xlLmxvZyhzb3VyY2UpO1xuXG4gICAgY29uc3Qge2FzdH0gPSB2dWVDb21waWxlKHNvdXJjZS50cmltKCksIGNvbXBpbGVyT3B0aW9ucyk7XG5cbiAgICBjb25zdCB0ZW1wbGF0ZSA9IHN0cmluZ2lmeShhc3QsIHsgc2NvcGVJZCwgc3RyaXAsIGF0b206IGlzQXRvbSB9KTtcbiAgICAvLyBjb25zb2xlLmxvZyh0ZW1wbGF0ZSk7XG4gICAgY29uc3QgYU5vZGUgPSBwYXJzZVRlbXBsYXRlKHRlbXBsYXRlKS5jaGlsZHJlblswXTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGFzdCxcbiAgICAgICAgYU5vZGU6IG9wdGltaXplKGFOb2RlKSxcbiAgICAgICAgdGVtcGxhdGUsXG4gICAgICAgIHJlZnM6IGNvbXBpbGVyT3B0aW9ucy5yZWZzLFxuICAgICAgICBlcnJvcnNcbiAgICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==