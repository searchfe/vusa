/**
 * @file text-combine
 * @author cxtom(cxtom2008@gmail.com)
 */

import escapeQuotes from 'escape-quotes';

function postTransformNode(el) {
    if (el.children && el.children.length > 0) {
        for (const child of el.children) {
            if (child.type !== 2 || !child.tokens || child.tokens.length <= 1) {
                continue;
            }
            child.text = child.tokens.map((token, index) => {
                let text = '\'\'';
                if (token['@binding']) {
                    text = token['@binding'];
                }
                if (typeof token === 'string') {
                    text = `'${escapeQuotes(token)}'`;
                }
                return index === 0 ? text : `_cat(${text})`;
            }).join(' | ');

            child.text = `{{ ${child.text} }}`;

            console.log(child.text);
        }
    }
}

export default {
    postTransformNode
};
