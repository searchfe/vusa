/**
 * @file event
 * @author cxtom(cxtom2008@gmail.com)
 */

import transform from '../expression-transformer';

const reEvent = /^(@|v-on:)/;

function postTransformNode(node) {
    const eventAttrs = node.attrsList.filter(n => reEvent.test(n.name));
    for (const attr of eventAttrs) {
        delete node.attrsMap[attr.name];
        const [name, ...modifiers] = attr.name.split('.');
        const eventHandler = transform(attr.value).code;
        node.attrsMap[`on-${name.replace(reEvent, '')}`]
            = `${modifiers.map(m => `${m}:`).join('')}${eventHandler}`;
    }
}

export default {
    postTransformNode
};
