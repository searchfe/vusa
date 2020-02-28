/**
 * @file for
 * @author cxtom(cxtom2008@gmail.com)
 */

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
        fr += ` trackBy ${node.key}`;
    }

    node.attrsMap['s-for'] = fr;

    delete node.attrsMap['v-for'];
}

export default {
    postTransformNode
};
