/**
 * @file get html from ast
 * @author cxtom(cxtom2008@gmail.com)
 */

import {trim} from 'lodash';
import {noValueAttr, singleTag, booleanAttr, htmlTag} from './constant';
import transform from './expression-transformer';

function stringifyAttr(key, value, tag) {
    if (noValueAttr[key] || (!value && htmlTag[tag] && booleanAttr[key])) {
        return key;
    }
    return `${key}=${JSON.stringify(value.startsWith('{{') ? value : value.replace(/\s+/g, ' '))}`;
}

// function transformChild(node) {
//     return node.tokens.reduce((prev, token) => {
//         if (typeof token === 'string') {
//             return prev + token;
//         }
//         console.log(node);
//         return prev + `{{ ${transform(token['@binding']).code} }}`;
//     }, '');
// }

export default function stringify(ast, {scopeId, strip, atom}) {
    if (!Array.isArray(ast)) {
        ast = [ast];
    }

    let html = '';

    for (const node of ast) {
        if (node.type === 3 || node.type === 2) {
            const text = node.text;
            html += strip
                ? trim(text, ' \n\t')
                : text;
        }
        else if (node.type === 1) {
            const attrs = Object.keys(node.attrsMap).map(key => stringifyAttr(key, node.attrsMap[key], node.tag));
            if (scopeId) {
                scopeId = scopeId.replace(/^data-(a|v)-/, '');
                attrs.push(`data-${atom ? 'a' : 'v'}-${scopeId}`);
            }
            const hasChildren = node.children && node.children.length > 0;
            const hasAttr = attrs.length > 0;
            html += `<${node.tag}${hasAttr ? ' ' : ''}${attrs.join(' ')}>`;
            html += hasChildren ? stringify(node.children, {scopeId, strip, atom}) : '';
            html += !hasChildren && singleTag[node.tag] ? '' : `</${node.tag}>`;

            if (node.ifConditions && node.ifConditions.length > 1) {
                html += stringify(node.ifConditions.slice(1).map(n => n.block), {scopeId, strip, atom});
            }
        }
    }

    return html;
}
