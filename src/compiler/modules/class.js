/**
 * @file class
 * @author cxtom(cxtom2008@gmail.com)
 */

import transform from '../expression-transformer';

const bindKeys = [':class', 'v-bind:class'];

function postTransformNode(node) {
    if (node.type === 1 && node.classBinding) {
        const staticClass = node.attrsMap.class || '';
        const classBinding = transform(node.classBinding).code;
        node.attrsMap.class = `{{ _mc('${staticClass}', ${classBinding}) }}`;
        bindKeys.forEach(key => delete node.attrsMap[key]);
    }
}

export default {
    postTransformNode
};
