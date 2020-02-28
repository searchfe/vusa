/**
 * @file class
 * @author cxtom(cxtom2008@gmail.com)
 */

const bindKeys = [':class', 'v-bind:class'];

function postTransformNode(node) {
    if (node.type === 1 && node.classBinding) {
        const staticClass = node.attrsMap.class || '';
        node.attrsMap.class = `{{ _mc('${staticClass}', ${node.classBinding}) }}`;
        bindKeys.forEach(key => delete node.attrsMap[key]);
    }
}

export default {
    postTransformNode
};
