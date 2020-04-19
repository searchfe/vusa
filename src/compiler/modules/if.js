/**
 * @file if
 * @author cxtom(cxtom2008@gmail.com)
 */

import transform from '../expression-transformer';

function postTransformNode(node) {
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

export default {
    postTransformNode
};
