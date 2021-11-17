/*!
 * vusa v1.0.0
 * (c) 2019-2021 * Released under the MIT License.
 */
/* eslint-disable */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var codeFrame = require('@babel/code-frame');
var atomExpressionCompiler = require('atom-expression-compiler');
var escapeQuotes = require('escape-quotes');
var toSingleQuotes = require('to-single-quotes');
var nanoid = require('nanoid');
var parser = require('@babel/parser');
var traverse = require('@babel/traverse');
var t = require('@babel/types');
var babelGenerate = require('@babel/generator');
var lodash = require('lodash');
var vueTemplateCompiler = require('vue-template-compiler');
require('san');
var sanAnodeUtils = require('san-anode-utils');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () {
                        return e[k];
                    }
                });
            }
        });
    }
    n['default'] = e;
    return Object.freeze(n);
}

var escapeQuotes__default = /*#__PURE__*/_interopDefaultLegacy(escapeQuotes);
var toSingleQuotes__default = /*#__PURE__*/_interopDefaultLegacy(toSingleQuotes);
var traverse__default = /*#__PURE__*/_interopDefaultLegacy(traverse);
var t__namespace = /*#__PURE__*/_interopNamespace(t);
var babelGenerate__default = /*#__PURE__*/_interopDefaultLegacy(babelGenerate);

/**
 * @file vue 的 expression 转 san，主要是处理 es6 语法
 * @author cxtom(cxtom2008@gmail.com)
 */

const mark = '__vusa__filter__mark__';
const reg = new RegExp(mark, 'g');

const validUnaryOperator = new Set(['+', '-', '!']);
const validBinaryOperator = new Set(['+', '-', '*', '/', '%', '>', '<', '>=', '<=', '==', '===', '!=', '!==']);
const validLogicalOperator = new Set(['&&', '||']);
const noBracketTypes = new Set([
    'ArrayExpression',
    'Literal',
    'ObjectExpression',
    'Identifier',
    'MemberExpression',
    'CallExpression',
    'TemplateExpression',
    'UnaryExpression'
]);

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

function toString(a) {
    if (typeof a === 'number') {
        return a + '';
    }
    if (typeof a === 'string') {
        return `'${escapeQuotes__default['default'](a)}'`
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
            return this.ret(toString(value), getType(value), value);
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
            return this.ret(toString(value), getType(value), value);
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
        return this.ret(
            `(${expressions.map(({code}, i) => wrapBacket(code, node.expressions[i])).join('+')})`,
            'string'
        );
    },

    ArrayExpression(node, results) {
        let result = results[0];
        return this.ret(`[${result.map(c => c.code).join(', ')}]`, 'array');
    },

    Literal(node) {
        return this.ret(
            this.varExport(node.value),
            getType(node.value),
            node.value
        );
    },

    UnaryExpression(node, results) {

        if (!validUnaryOperator.has(node.operator)) {
            this.error(`unknow unary operator "${node.operator}"`, node);
        }

        let result = results[0];

        if (result.isStatic) {
            let value = new Function(`return ${node.operator}${result.code}`)();
            let stringify = toString(value);
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

class CodeGen {

    constructor({code}) {
        this.syntax = Syntax;
        this.keys = VisitorKeys;
        this.generater = CodeGeneragor;

        this.code = code;
    }

    error(message, node) {
        message = `[vusa expression parser] (${node.location.start.line}:${node.location.start.column}) : ${message}`;

        let codeFrame$1 = codeFrame.codeFrameColumns(this.code, node.location, {
            highlightCode: true
        });
        message += `\n${codeFrame$1}`;

        throw new Error(message);
    }

    traverse(node, ref) {

        let syntax = this.syntax[node.type];

        if (node === ref) {
            this.root = node;
        }

        node.ref = ref;

        // 对象的 key 值特殊处理一下
        if (!syntax) {
            this.error(`Unknown node type "${node.type}" was found when parsing "${node.name}"`, node);
        }

        let visitorKeys = this.keys[node.type] || [];
        let keyResults = visitorKeys.map(key => {
            let element = node[key];
            let result = null;

            if (this.isNode(element)) {
                result = this.traverse(element, node);
            }
            else if (Array.isArray(element)) {
                result = element.map(ele => this.traverse(ele, node));
            }
            else {
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
                code = toString(String(node.value));
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
        return toString(data);
    }
}

function transform (code) {

    if (!code) {
        return {
            code: '',
        };
    }

    let node;
    try {
        node = atomExpressionCompiler.parse(code, {
            startRule: 'VueExpression',
        });
    }
    catch (e) {
        throw new Error(`SyntaxError is found when parsing code "${code}", ${e.stack}`);
    }

    let codegen = new CodeGen({
        code,
    });

    return {
        ast: node.expression,
        ...codegen.traverse(node, node),
    };
}

/**
 * @file class
 * @author cxtom(cxtom2008@gmail.com)
 */

const bindKeys$1 = [':class', 'v-bind:class'];

function postTransformNode$c(node) {
    if (node.type === 1 && node.classBinding) {
        const staticClass = node.attrsMap.class || '';
        const classBinding = transform(node.attrsMap[bindKeys$1[0]] || node.attrsMap[bindKeys$1[1]]).code;
        node.attrsMap.class = `{{ ${classBinding} | _mc('${staticClass}') }}`;
        bindKeys$1.forEach(key => delete node.attrsMap[key]);
    }
    // console.log('node.attrsMap', node.attrsMap);
}

var clazz = {
    postTransformNode: postTransformNode$c,
};

/**
 * @file style
 * @author cxtom(cxtom2008@gmail.com)
 */

const bindKeys = [':style', 'v-bind:style', 'v-show'];

function postTransformNode$b(node) {
    let vShow = node.attrsMap['v-show'];

    if (node.type === 1 && (node.styleBinding || vShow)) {

        const staticStyle = node.staticStyle || '\'\'';
        const styleBinding = node.styleBinding
            ? transform(node.attrsMap[bindKeys[0]] || node.attrsMap[bindKeys[1]]).code
            : '{}';
        // 用户没有设置v-show的时候默认v-show="true"
        let userSetVShow = node.attrsList.some(item => item.name === 'v-show');
        if (!userSetVShow && vShow === undefined) {
            vShow = 'true';
        }
        // eslint-disable-next-line max-len
        node.attrsMap.style = `{{ ${styleBinding.trim()} | _ms(${toSingleQuotes__default['default'](staticStyle)}${vShow ? `, ${transform(vShow).code}` : ''}) }}`;
        bindKeys.forEach(key => delete node.attrsMap[key]);
    }
}

var style = {
    postTransformNode: postTransformNode$b,
};

/**
 * @file bind
 * @author cxtom(cxtom2008@gmail.com)
 */

const reBind = /^(v-bind)?\:/;

function postTransformNode$a(node) {
    // console.log('bind~~~~~~~~~~~~~~~~~');

    if (node.type !== 1) {
        return;
    }
    const keys = Object.keys(node.attrsMap).filter(n => reBind.test(n));

    for (const key of keys) {
        const value = node.attrsMap[key];
        delete node.attrsMap[key];
        const ret = transform(value);
        const code = ret.code;
        node.attrsMap[key.replace(reBind, '')] = `{{ ${code} }}`;
        // node.attrsMap[key.replace(reBind, '')] = `{{ _b(${code})}}`;
    }

    if (node.attrsMap['v-bind']) {
        const vBind = node.attrsMap['v-bind'];
        node.attrsMap['s-bind'] = `{{ ${transform(vBind).code} }}`;
        delete node.attrsMap['v-bind'];
    }

    const camelKeys = Object.keys(node.attrsMap).filter(item => item.endsWith('.camel'));
    for (const key of camelKeys) {
        let tempKey = key.replace('.camel', '');
        const tempKeys = tempKey.split('-');
        if (tempKeys.length >= 2) {
            for (let i = 1; i < tempKeys.length; i++) {
                tempKeys[i] = tempKeys[i].charAt(0).toUpperCase() + tempKeys[i].substring(1);
            }
        }
        tempKey = tempKeys.join('');
        node.attrsMap[tempKey] = node.attrsMap[key];
        delete node.attrsMap[key];
    }
}

var bind = {
    postTransformNode: postTransformNode$a,
};

/**
 * @file if
 * @author cxtom(cxtom2008@gmail.com)
 */

function postTransformNode$9(node) {
    if (node.type !== 1) {
        return;
    }

    if (node.if) {
        node.attrsMap['s-if'] = transform(node.if).code;
        delete node.attrsMap['v-if'];
    }

    if (node.elseif) {
        node.attrsMap['s-else-if'] = transform(node.elseif).code;
        delete node.attrsMap['v-else-if'];
    }

    if (node.else) {
        node.attrsMap['s-else'] = node.else;
        delete node.attrsMap['v-else'];
    }
}

var yf = {
    postTransformNode: postTransformNode$9,
};

/**
 * @file for
 * @author cxtom(cxtom2008@gmail.com)
 */

function postTransformNode$8(node) {

    if (node.type !== 1 || !node.for) {
        return;
    }

    let fr = node.alias;

    if (node.parent && node.parent.tag === 'transition-group') {
        node.iterator1 = 'xxx';
    }

    if (node.iterator1) {
        fr += `,${node.iterator1}`;
    }

    fr += ` in _l(${node.for})`;

    if (node.key) {
        const trackByExpr = transform(node.key);

        // san 只支持变量
        fr += trackByExpr.ast.type === 'Identifier' ? ` trackBy ${node.key}` : '';
    }

    node.attrsMap['s-for'] = fr;

    delete node.attrsMap['v-for'];
    delete node.attrsMap.key;
    delete node.attrsMap[':key'];
    delete node.attrsMap['v-bind:key'];
}

var fr = {
    postTransformNode: postTransformNode$8,
};

function stripWith(code) {
    const ast = parser.parse(code);
    traverse__default['default'](ast, {
        WithStatement(p) {
            const fn = p.findParent(pa => pa.isFunctionDeclaration());
            const id = fn.scope.generateUidIdentifier('_me');
            fn.scope.push({id, init: p.get('object').node});
            p.traverse({
                Identifier(p) {
                    const parent = p.parentPath;
                    if (
                        !fn.scope.hasBinding(p.node.name)
                        && !(parent.isDeclaration() && parent.get('id') === p)
                        && !(parent.isObjectProperty() && parent.get('key') === p)
                        && !(parent.isMemberExpression() && parent.get('property') === p)
                    ) {
                        // console.log(parent);
                        p.replaceWith(t__namespace.memberExpression(id, p.node));
                    }
                    p.skip();
                },
            });
            p.replaceWith(p.get('body').get('body')[0]);
            p.skip();
        },
    });
    const res = babelGenerate__default['default'](ast);
    return res.code;
}

/**
 * @file event
 * @author cxtom(cxtom2008@gmail.com)
 */

const reEvent = /^(@|v-on:)/;
const fnExpRE = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
const simplePathRE = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/;

function getName() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz';
    const nanoid$1 = nanoid.customAlphabet(alphabet, 4);
    return nanoid$1();
}

function postTransformNode$7(node, options) {
    const eventAttrs = node.attrsList.filter(n => reEvent.test(n.name));
    for (const attr of eventAttrs) {
        delete node.attrsMap[attr.name];
        const [name, ...modifiers] = attr.name.split('.');

        const isMethodPath = simplePathRE.test(attr.value);
        const isFunctionExpression = fnExpRE.test(attr.value);

        if (isFunctionExpression) {
            options.error('function expression in event value are not supported.');
            return;
        }

        if (attr.value) {
            let eventHandler;
            if (isMethodPath) {
                eventHandler = transform(attr.value).code;
            }
            else {
                options.injectScript.methods = options.injectScript.methods || [];
                const fnName = getName();
                eventHandler = `${fnName}($event)`;
                let method = `${eventHandler} {with(this){${attr.value}}}`;
                if (options.stripWith) {
                    method = stripWith(`function ${method}`).replace(/^function /, '');
                }
                options.injectScript.methods.push(method);
            }

            node.attrsMap[`on-${name.replace(reEvent, '')}`]
                = `${modifiers.map(m => m + ':').join('')}${eventHandler}`;
        }
    }
}

var event = {
    postTransformNode: postTransformNode$7,
};

/**
 * @file class
 * @author cxtom(cxtom2008@gmail.com)
 */

function postTransformNode$6(node) {

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
    else if (node.attrsMap && node.attrsMap['v-html']) {
        const dir = node.directives.find(d => d.name === 'html');
        dir.value = node.attrsMap['v-html'] = `_h(${node.attrsMap['v-html']})`;
    }

    if (node.type === 1 && node.attrsMap['v-html']) {
        const value = node.directives.find(d => d.name === 'html').value;
        delete node.attrsMap['v-html'];
        node.attrsMap['s-html'] = `{{ ${value} }}`;
        // node.attrsMap['s-html'] = `{{ _h(${value}) }}`;
        node.children = [];
    }

    if (node.type === 1 && node.attrsMap['v-text']) {
        const value = node.directives.find(d => d.name === 'text').value;
        delete node.attrsMap['v-text'];
        node.children = [{
            type: 2,
            text: `{{ ${value} | _s }}`,
        }];
    }
}

var html = {
    postTransformNode: postTransformNode$6,
};

/**
 * @file ref
 * @author cxtom(cxtom2008@gmail.com)
 */

function postTransformNode$5(node, options) {
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

var ref = {
    postTransformNode: postTransformNode$5
};

/**
 * @file component :is
 * @author cxtom(cxtom2008@gmail.com)
 */

function postTransformNode$4(node, options) {

    if (!(node.type === 1 && node.tag === 'component')) {
        return;
    }

    let is = node.attrsMap.is;
    delete node.attrsMap.is;

    if (!is.startsWith('{{')) {
        node.tag = node.attrsMap.is;
        return;
    }

    const {code} = transform(is.replace(/(^{{|}}$)/g, ''));
    node.attrsMap['s-is'] = code;
}

var dynamicComponent = {
    postTransformNode: postTransformNode$4,
};

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
    wbr: true,
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
    visible: true,
};


const noValueAttr = {
    's-else': true,
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
    template: true,
};

/**
 * @file bool 型传值
 * @author cxtom(cxtom2008@gmail.com)
 */

function postTransformNode$3(node) {
    if (!node.type === 1 || !node.attrsMap) {
        return;
    }

    const keys = Object.keys(node.attrsMap).filter(n => node.attrsMap[n] === '');
    for (const key of keys) {
        if ((htmlTag[node.tag] && booleanAttr[key]) || noValueAttr[key]) {
            continue;
        }
        node.attrsMap[key] = `{{ true }}`;
    }
}

var bool = {
    postTransformNode: postTransformNode$3
};

/**
 * @file template
 * @author cxtom(cxtom2008@gmail.com)
 */

function preTransformNode$1(el) {
    if (el.tag === 'template') {
        el.tag = 'fragment';
    }
}

var template = {
    preTransformNode: preTransformNode$1
};

/**
 * @file template
 * @author cxtom(cxtom2008@gmail.com)
 */

function getAttrs(attrsMap) {
    return Object.keys(attrsMap).map(name => {
        let value = attrsMap[name];
        value = value.startsWith('{{') ? value.slice(2, value.length - 2) : `'${value}'`;
        delete attrsMap[name];
        return `${lodash.camelCase(name)}:${value}`;
    });
}

function postTransformNode$2(el) {
    if (el.tag === 'transition') {
        el.tag = 'fragment';

        const attrs = getAttrs(el.attrsMap);

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

    if (el.tag === 'transition-group') {
        el.tag = el.attrsMap.tag;
        delete el.attrsMap.tag;

        if (!el.children || el.children.length <= 0) {
            return;
        }

        for (const node of el.children) {
            const attrs = getAttrs(el.attrsMap);
            if (node.for) {
                attrs.push(`iterator:${node.iterator1}`);
            }
            node.attrsMap['s-transition'] = `_t({${attrs.join(',')}})`;
        }
    }
}

var transition = {
    postTransformNode: postTransformNode$2,
};

/**
 * @file text-combine
 * @author cxtom(cxtom2008@gmail.com)
 */

function postTransformNode$1(el, state) {
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
                    let str = escapeQuotes__default['default'](token.replace(/\s+/, ' '));
                    str = index === 0
                        ? lodash.trimStart(str, ' ')
                        : (index === child.tokens.length - 1 ? lodash.trimEnd(str, ' ') : str);
                    text = `'${str}'`;
                }
                return text;
            });

            tokens = tokens.filter(t => t !== '\'\'');

            child.text = tokens.map((t, i) => (i === 0 ? t : `_cat(${t})`)).join(' | ');
            child.text = `{{ ${child.text} }}`;
        }
    }
}

var textCombine = {
    postTransformNode: postTransformNode$1,
};

/**
 * @file 处理同时有 if 和 for 的情况
 * @author donghualei
 */


function postTransformNode(node) {

    if (node.type !== 1) {
        return;
    }

    // 查找字子节点是否有带 s-for 和 s-if 同时存在的场景
    let children = node.children;

    for (let i = 0; i < children.length; i++) {

        // 同时具有 if 和 for
        if (children[i].if && children[i].for) {

            let ifForNode = children[i];

            let newFragmentNode = {
                type: 1,
                tag: 'fragment',
                attrsMap: {
                    's-for': ifForNode.attrsMap['s-for'],
                },

                // 父节点是当前节点
                parent: node,

                for: ifForNode.for,
                alias: ifForNode.alias,
                iterator1: ifForNode.iterator1,
                plain: ifForNode.plain,
            };

            // fragment 替换本身 s-for 和 s-if 所在的节点
            children.splice(i, 1, newFragmentNode);

            // 修改 ifForNode 的父节点为 fragment
            ifForNode.parent = newFragmentNode;

            newFragmentNode.children = [ifForNode];

            delete ifForNode.attrsMap['s-for'];
            delete ifForNode.attrsMap.for;
            delete ifForNode.alias;
            delete ifForNode.iterator1;
        }
    }
}

var forIf = {
    postTransformNode,
};

/**
 * @file transformers
 * @author cxtom(cxtom2008@gmail.com)
 */

var buildInModules = [
    template,
    bool,
    yf,
    fr,
    forIf,
    event,
    html,
    ref,
    textCombine,

    clazz,
    style,

    // bind 放在所有处理完之后
    bind,
    transition,

    dynamicComponent,
];

/**
 * @file get html from ast
 * @author cxtom(cxtom2008@gmail.com)
 */
// import transform from './expression-transformer';

function stringifyAttr(key, value, tag) {
    if (noValueAttr[key] || (!value && htmlTag[tag] && booleanAttr[key])) {
        return key;
    }
    return `${key}=${JSON.stringify(value.startsWith('{{') ? value : value.replace(/\s+/g, ' '))}`;
}

// function transformChild(node) {
//     return node.tokens.reduce((prev, token) => {
//         if (typeof token === 'string') {
//             return prev + token;
//         }
//         console.log(node);
//         return prev + `{{ ${transform(token['@binding']).code} }}`;
//     }, '');
// }

function stringify(ast, {scopeId, strip, atom}) {
    if (!Array.isArray(ast)) {
        ast = [ast];
    }

    let html = '';

    for (const node of ast) {
        if (node.type === 3 || node.type === 2) {
            const text = node.text;
            html += strip
                ? lodash.trim(text, ' \n\t')
                : text;
        }
        else if (node.type === 1) {
            const attrs = Object.keys(node.attrsMap).map(key => stringifyAttr(key, node.attrsMap[key], node.tag));
            if (scopeId) {
                scopeId = scopeId.replace(/^data-(a|v)-/, '');
                attrs.push(`data-${atom ? 'a' : 'v'}-${scopeId}`);
            }
            const hasChildren = node.children && node.children.length > 0;
            const hasAttr = attrs.length > 0;
            html += `<${node.tag}${hasAttr ? ' ' : ''}${attrs.join(' ')}>`;
            html += hasChildren ? stringify(node.children, {scopeId, strip, atom}) : '';
            html += !hasChildren && singleTag[node.tag] ? '' : `</${node.tag}>`;

            if (node.ifConditions && node.ifConditions.length > 1) {
                html += stringify(node.ifConditions.slice(1).map(n => n.block), {scopeId, strip, atom});
            }
        }
    }

    return html;
}

/**
 * @file 一些工具函数
 * @author cxtom(cxtom2008@gmail.com)
 */

const camelize = str => str.replace(/-(\w)/g, (_, c) => (c ? c.toUpperCase() : ''));

/**
 * @file css modules module
 * @author cxtom(cxtom2008@gmail.com)
 */

function getCssModules (cssModules) {

    function preTransformNode(el) {
        if (cssModules && cssModules.$style && el.attrsMap.class) {
            const staticClass = el.attrsMap.class.replace(/(^"|"$)/g, '').split(' ');
            el.attrsMap.class = staticClass.map(c => (cssModules.$style[camelize(c)] || c)).join(' ');
            el.attrsList = el.attrsList.map(
                ({name, value}) => ({name, value: name === 'class' ? el.attrsMap.class : value})
            );
        }
    }

    return {
        preTransformNode,
    };
}

/**
 * @file atom module
 * @author cxtom(cxtom2008@gmail.com)
 */

function preTransformNode(el) {
    el.attrsList = el.attrsList.map(({name, value}) => {
        delete el.attrsMap[name];
        name = name.replace(/^a-/, 'v-');
        el.attrsMap[name] = value;
        return {
            value,
            name,
        };
    });
}

var atom = {
    preTransformNode,
};

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
        atom: isAtom = false,
        stripWith = false,
    } = options;

    if (!lodash.isEmpty(cssModules)) {
        modules.unshift(getCssModules(cssModules));
    }

    if (isAtom) {
        modules.unshift(atom);
    }

    const errors = [];
    const injectScript = {};
    const compilerOptions = {
        modules: [
            ...buildInModules,
            ...modules,
        ],
        preserveWhitespace: false,
        useDynamicComponent: false,
        refs: [],
        injectScript,
        error(msg) {
            // eslint-disable-next-line no-console
            console.error(`[vusa error] ${msg}`);
            errors.push(msg);
        },
        strip,
        stripWith,
    };

    const {ast} = vueTemplateCompiler.compile(source.trim(), compilerOptions);
    const template = stringify(ast, {scopeId, strip, atom: isAtom});


    const aNode = sanAnodeUtils.parseTemplate(template, {
        trimWhitespace: 'blank',
    }).children[0];

    // if (ast.tag === 'div1') {
    //     console.log('---------------------------------');
    //     console.log('ast', ast.children[0]);
    //     console.log('aNode', aNode.children[0]);
    //     console.log('template', template);
    // }

    return {
        ast,
        aNode,
        aPack: sanAnodeUtils.pack.stringify(sanAnodeUtils.pack(aNode)),
        template,
        refs: compilerOptions.refs,
        errors,
        injectScript,
    };
}

exports.compile = compile;
