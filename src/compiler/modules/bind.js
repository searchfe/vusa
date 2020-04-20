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
        node.attrsMap[key.replace(reBind, '')] = `{{ ${code} }}`;
    }

    if (node.attrsMap['v-bind']) {
        const vBind = node.attrsMap['v-bind'];
        node.attrsMap['s-bind'] = `{{ ${transform(vBind).code} }}`;
        delete node.attrsMap['v-bind'];
    }
}

export default {
    postTransformNode
};
