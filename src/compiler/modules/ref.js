/**
 * @file ref
 * @author cxtom(cxtom2008@gmail.com)
 */

function postTransformNode(node) {
    if (node.type !== 1 || !node.attrsMap.ref) {
        return;
    }
    node.attrsMap['s-ref'] = node.attrsMap.ref;
    delete node.attrsMap.ref;
}

export default {
    postTransformNode
};
