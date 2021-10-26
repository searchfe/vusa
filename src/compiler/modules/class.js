/**
 * @file class
 * @author cxtom(cxtom2008@gmail.com)
 */

import transform from '../expression-transformer';

const bindKeys = [':class', 'v-bind:class'];

function postTransformNode(node) {
    if (node.type === 1 && node.classBinding) {
        const staticClass = node.attrsMap.class || '';
        const classBinding = transform(node.attrsMap[bindKeys[0]] || node.attrsMap[bindKeys[1]]).code;
        node.attrsMap.class = `{{ ${classBinding} | _mc('${staticClass}') }}`;
        bindKeys.forEach(key => delete node.attrsMap[key]);
    }
    // console.log('node.attrsMap', node.attrsMap);
}

export default {
    postTransformNode,
};
