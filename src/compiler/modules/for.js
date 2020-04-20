/**
 * @file for
 * @author cxtom(cxtom2008@gmail.com)
 */

import transform from '../expression-transformer';

function postTransformNode(node) {
    if (node.type !== 1 || !node.for) {
        return;
    }

    let fr = node.alias;

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
    delete node.attrsMap['key'];
    delete node.attrsMap[':key'];
    delete node.attrsMap['v-bind:key'];
}

export default {
    postTransformNode
};
