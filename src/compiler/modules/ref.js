/**
 * @file ref
 * @author cxtom(cxtom2008@gmail.com)
 */

function postTransformNode(node, options) {
    if (node.type !== 1 || !node.attrsMap.ref) {
        return;
    }
    const ref = node.attrsMap['s-ref'] = node.attrsMap.ref;
    delete node.attrsMap.ref;

    options.refs.push({
        name: ref,
        root: node.parent ? undefined : 1,
        for: node.for ? 1 : undefined
    });
}

export default {
    postTransformNode
};
