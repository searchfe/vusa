/**
 * @file get html from ast
 * @author cxtom(cxtom2008@gmail.com)
 */

/*
  Self-enclosing tags (stolen from node-htmlparser)
*/
const singleTag = {
    area: true,
    base: true,
    basefont: true,
    br: true,
    col: true,
    command: true,
    embed: true,
    frame: true,
    hr: true,
    img: true,
    input: true,
    isindex: true,
    keygen: true,
    link: true,
    meta: true,
    param: true,
    source: true,
    track: true,
    wbr: true
};

const noValueAttr = {
    's-else': true
};

function stringifyAttr(key, value) {
    if (noValueAttr[key]) {
        return key;
    }
    return `${key}=${JSON.stringify(value)}`;
}

export default function stringify(ast, scopeId) {
    if (!Array.isArray(ast)) {
        ast = [ast];
    }

    let html = '';

    for (const node of ast) {
        if (node.type === 3 || node.type === 2) {
            html += node.text;
        }
        else if (node.type === 1) {
            const attrs = Object.keys(node.attrsMap).map(key => stringifyAttr(key, node.attrsMap[key]));
            if (scopeId) {
                attrs.push(scopeId);
            }
            const hasChildren = node.children && node.children.length > 0;
            const hasAttr = attrs.length > 0;
            html += `<${node.tag}${hasAttr ? ' ' : ''}${attrs.join(' ')}>`;
            html += hasChildren ? stringify(node.children, scopeId) : '';
            html += !hasChildren && singleTag[node.tag] ? '' : `</${node.tag}>`;

            if (node.ifConditions && node.ifConditions.length > 1) {
                html += stringify(node.ifConditions.slice(1).map(n => n.block), scopeId);
            }
        }
    }

    return html;
}
