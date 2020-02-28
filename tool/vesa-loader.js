/**
 * @file veta-loader
 * @author cxtom(cxtom2008@gmail.com)
 */

const {readFileSync} = require('fs');
const compile = require('../dist/compiler').default;
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

    const vesaResult = compile(templateCode);
    const sanTemplate = vesaResult.code;

    console.log(sanTemplate);

    content += `\ncomponent.options.__santemplate = ${JSON.stringify(sanTemplate)}`;

    return content;
};
