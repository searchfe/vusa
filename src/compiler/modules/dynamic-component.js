/**
 * @file component :is
 * @author cxtom(cxtom2008@gmail.com)
 */

import {parse} from 'atom-expression-compiler';

function postTransformNode(node, options) {
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
    const expr = parse(value, {
        startRule: 'VueExpression'
    });

    if (node.if || node.elseif || node.else) {
        options.error('dynamic component can not use with v-if.');
        return;
    }

    if (
        expr.expression.type === 'ConditionalExpression'
        && expr.expression.consequent.type === 'Literal'
        && expr.expression.alternate.type === 'Literal'
    ) {
        const testLocation = expr.expression.test.location;
        const test = value.slice(testLocation.start.offset, testLocation.end.offset);
        const attrs = {
            ...node.attrsMap,
            's-else': ''
        };
        node.tag = expr.expression.consequent.value;
        node.attrsMap['s-if'] = test;
        node.ifConditions = [{
            exp: test,
            block: node
        }, {
            block: {
                ...node,
                attrsMap: attrs,
                tag: expr.expression.alternate.value
            }
        }];
    }
}

export default {
    postTransformNode
};
