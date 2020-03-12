/**
 * @file strip attr
 * @author cxtom(cxtom2008@gmail.com)
 */

function preTransformNode(node) {
    if (node.type !== 1) {
        return;
    }

    const staticAttrs = Object
        .keys(node.attrsMap)
        .filter(n => !(/^(v-|\:)/.test(n)));

    for (const attr of staticAttrs) {
        node.attrsMap[attr] = node.attrsMap[attr].replace(/\s+/g, ' ');
    }
}

export default {
    preTransformNode
};
