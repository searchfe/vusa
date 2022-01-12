/**
 * @file methods
 * @author donghualei
 */

import transform from '../expression-transformer';

// v-bind:xxx :xxx v-on:xxx @xxx v-if/else/else-if
// notice: not include v-for
const notStaticAttributeRE = /^(?:v\-(?:(?:else\-)?if|bind|model|else|show|slot|text|html|on)|[:@])/;

/**
 * 提取模板的methods
 * @param {Object} node 节点
 * @param {Object} options 其他参数
 */
function postTransformNode(node, options) {
    const attrsMap = node.attrsMap;

    if (attrsMap) {
        for (let key in attrsMap) {
            if (
                Object.prototype.hasOwnProperty.call(attrsMap, key)
                && notStaticAttributeRE.test(key)
            ) {
                let t;
                try {
                    t = transform(attrsMap[key]);
                }
                catch (e) {
                    continue;
                }
                if (t.ast && t.ast.type === 'CallExpression') {
                    options.methodsList.push(t.ast.callee.name);
                }
            }
        }
    }
}

export default {
    postTransformNode,
};
