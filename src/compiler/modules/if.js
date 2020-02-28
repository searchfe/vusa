/**
 * @file if
 * @author cxtom(cxtom2008@gmail.com)
 */

function postTransformNode(node) {
    if (node.type !== 1) {
        return;
    }

    if (node.if) {
        node.attrsMap['s-if'] = node.if;
        delete node.attrsMap['v-if'];
    }

    if (node.elseif) {
        node.attrsMap['s-else-if'] = node.elseif;
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
