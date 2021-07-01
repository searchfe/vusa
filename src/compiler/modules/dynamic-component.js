/**
 * @file component :is
 * @author cxtom(cxtom2008@gmail.com)
 */

import transform from '../expression-transformer';

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
    const {ast, code} = transform(value);

    if (
        ast.type === 'ConditionalExpression'
        && ast.consequent.type === 'Literal'
        && ast.alternate.type === 'Literal'
    ) {
        const testLocation = ast.test.location;
        const test = value.slice(testLocation.start.offset, testLocation.end.offset);
        const attrs = {
            ...node.attrsMap,
            's-else': '',
        };
        node.tag = ast.consequent.value;
        node.attrsMap['s-if'] = test;
        node.ifConditions = [{
            exp: test,
            block: node,
        }, {
            block: {
                ...node,
                attrsMap: attrs,
                tag: ast.alternate.value,
            },
        }];
    }
    else {
        node.attrsMap['s-is'] = code;
    }
}

export default {
    postTransformNode,
};
