/**
 * @file vue 的 expression 转 san，主要是处理 es6 语法
 * @author cxtom(cxtom2008@gmail.com)
 */

import {codeFrameColumns} from '@babel/code-frame';
import {parse} from 'atom-expression-compiler';
import escapeQuotes from 'escape-quotes';

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
        return `'${escapeQuotes(a)}'`
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
        let code = `${wrapBacket(left.code, node.left)}${node.operator}${wrapBacket(right.code, node.right)}`
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
        let code = `${wrapBacket(left.code, node.left)}${node.operator}${wrapBacket(right.code, node.right)}`
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

        let codeFrame = codeFrameColumns(this.code, node.location, {
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
                result = this.traverse(element, node)
            }
            else if (Array.isArray(element)) {
                result = element.map(ele => this.traverse(ele, node))
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

export default function (code) {

    if (!code) {
        return {
            code: ''
        };
    }

    let node;
    try {
        node = parse(code, {
            startRule: 'VueExpression'
        });
    }
    catch (e) {
        throw new Error(`SyntaxError is found when parsing code "${code}", ${e.stack}`);
    }

    let codegen = new CodeGen({
        code
    });

    return {
        ast: node.expression,
        ...codegen.traverse(node, node)
    };
}
