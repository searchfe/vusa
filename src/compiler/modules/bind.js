/**
 * @file bind
 * @author cxtom(cxtom2008@gmail.com)
 */

import transform from '../expression-transformer';

const reBind = /^(v-bind)?\:/;

function postTransformNode(node) {

    if (node.type !== 1) {
        return;
    }
    const keys = Object.keys(node.attrsMap).filter(n => reBind.test(n));

    for (const key of keys) {
        const value = node.attrsMap[key];
        delete node.attrsMap[key];
        const ret = transform(value);
        const code = ret.code;
        const attr = key.replace(reBind, '');
        let attrValue = `{{ ${code} }}`;

        if (attr === 'disabled') {
            attrValue = `{{ _da(${code})}}`;
        }
        node.attrsMap[attr] = attrValue;
        // node.attrsMap[key.replace(reBind, '')] = `{{ ${code} }}`;
        // node.attrsMap[key.replace(reBind, '')] = `{{ _b(${code})}}`;
    }

    if (node.attrsMap['v-bind']) {
        const vBind = node.attrsMap['v-bind'];
        node.attrsMap['s-bind'] = `{{ ${transform(vBind).code} }}`;
        delete node.attrsMap['v-bind'];
    }

    const camelKeys = Object.keys(node.attrsMap).filter(item => item.endsWith('.camel'));
    for (const key of camelKeys) {
        let tempKey = key.replace('.camel', '');
        const tempKeys = tempKey.split('-');
        if (tempKeys.length >= 2) {
            for (let i = 1; i < tempKeys.length; i++) {
                tempKeys[i] = tempKeys[i].charAt(0).toUpperCase() + tempKeys[i].substring(1);
            }
        }
        tempKey = tempKeys.join('');
        node.attrsMap[tempKey] = node.attrsMap[key];
        delete node.attrsMap[key];
    }
}

export default {
    postTransformNode,
};
