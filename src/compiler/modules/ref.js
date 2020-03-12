/**
 * @file ref
 * @author cxtom(cxtom2008@gmail.com)
 */

import {camelize} from '../../shared/util';

function postTransformNode(node, options) {
    if (node.type !== 1 || !node.attrsMap.ref && !node.attrsMap[':ref']) {
        return;
    }

    const ref = node.attrsMap.ref;
    if (ref) {
        delete node.attrsMap.ref;
        node.attrsMap['s-ref'] = ref;

        const info = {
            name: ref,
            root: node.parent ? undefined : 1
        };

        options.refs.push(info);
        const camelName = camelize(ref);

        if (camelName !== ref) {
            options.refs.push({
                ...info,
                name: camelName
            });
        }
    }

    const bindRef = node.attrsMap[':ref'];
    if (bindRef) {
        delete node.attrsMap[':ref'];
        node.attrsMap['s-ref'] = `{{ ${bindRef} }}`;
    }
}

export default {
    postTransformNode
};
