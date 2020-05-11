/**
 * @file template
 * @author cxtom(cxtom2008@gmail.com)
 */

import {camelCase} from 'lodash';

function postTransformNode(el) {
    if (el.tag === 'transition') {
        el.tag = 'fragment';

        const attrs = Object.keys(el.attrsMap).map(name => {
            let value = el.attrsMap[name];
            value = value.startsWith('{{') ? value.slice(2, value.length - 2) : `'${value}'`;
            delete el.attrsMap[name];
            return `${camelCase(name)}:${value}`;
        });

        if (el.children && el.children[0]) {
            el.children[0].attrsMap['s-transition'] = `_t({${attrs.join(',')}})`;

            if (el.children[0].ifConditions) {
                for (const item of el.children[0].ifConditions.slice(1)) {
                    if (item.attrsMap) {
                        item.attrsMap['s-transition'] = `_t({${attrs.join(',')}})`;
                    }
                }
            }
        }
    }
}

export default {
    postTransformNode
};
