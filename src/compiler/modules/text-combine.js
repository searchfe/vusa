/**
 * @file text-combine
 * @author cxtom(cxtom2008@gmail.com)
 */

import escapeQuotes from 'escape-quotes';
// import {trimStart, trimEnd} from 'lodash';

function postTransformNode(el, state) {
    if (el.children && el.children.length > 0) {
        for (const child of el.children) {
            if (child.type !== 2 || !child.tokens || child.tokens.length <= 1) {
                continue;
            }
            let tokens = child.tokens.map(token => {
                let text = '\'\'';
                if (token['@binding']) {
                    text = token['@binding'];
                }
                if (typeof token === 'string') {
                    let str = escapeQuotes(token.replace(/\s+/, ' '));

                    // 以下逻辑会导致标签与文本节点的空格被忽略,先注释掉
                    // str = index === 0
                    //     ? trimStart(str, ' ')
                    //     : (index === child.tokens.length - 1 ? trimEnd(str, ' ') : str);
                    text = `'${str}'`;
                }
                return text;
            });

            tokens = tokens.filter(t => t !== '\'\'');

            child.text = tokens.map((t, i) => (i === 0 ? t : `_cat(${t})`)).join(' | ');
            child.text = `{{ ${child.text} }}`;
        }
    }
}

export default {
    postTransformNode,
};
