/**
 * @file veta-loader
 * @author cxtom(cxtom2008@gmail.com)
 */

const {readFileSync} = require('fs');
const compile = require('../packages/compiler').compile;
const {parseComponent} = require('vue-template-compiler');

module.exports = function (content) {
    const {
        resourcePath,
        resourceQuery
    } = this;

    if (resourceQuery) {
        return content;
    }

    const output = parseComponent(readFileSync(resourcePath, 'utf8'));
    const templateCode = output.template.content;

    const vesaResult = compile(templateCode, {
        strip: true
    });
    const sanANode = vesaResult.aNode;

    content += `\ncomponent.options.__sanaNode = ${JSON.stringify(sanANode)}`;

    if (vesaResult.refs && vesaResult.refs.length > 0) {
        console.log(vesaResult.refs);
        content += `\ncomponent.options.__sanRefs = ${JSON.stringify(vesaResult.refs)}`;
    }

    return content;
};
