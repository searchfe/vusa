/**
 * @file 处理v-model的情况
 * @author donghualei
 */

import transform from '../expression-transformer';

function postTransformNode(node) {

    if (node.type !== 1
        || !node.attrsMap.hasOwnProperty('v-model')) {
        return;
    }

    // 处理 input 的场景
    if (node.tag === 'input') {
        node.attrsMap.value = `{= ${transform(node.attrsMap['v-model']).code} =}`;
        delete node.attrsMap['v-model'];
    }
}

export default {
    postTransformNode,
};

