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
        resourceQuery,
    } = this;

    if (resourceQuery) {
        return content;
    }

    const m = content.match(/type=template&id=(\w{8})&scoped=true/);

    const output = parseComponent(readFileSync(resourcePath, 'utf8'));
    const templateCode = output.template.content;

    const vesaResult = compile(templateCode, {
        strip: true,
        atom: false,
        scopeId: m && m[1] ? m[1] : '',
        stripWith: true,
    });
    // console.log(vesaResult.template);
    if (vesaResult.injectScript && vesaResult.injectScript.methods) {
        content += '\ncomponent.options.methods = component.options.methods || {};';
        content += `\nObject.assign(component.options.methods, {${vesaResult.injectScript.methods.join(',')}});`;
    }
    const aPack = vesaResult.aPack;
    content += `\ncomponent.options.__sanaPack = ${aPack};`;
    // content += `\ncomponent.options.__santemplate = ${JSON.stringify(template)}`;

    if (vesaResult.refs && vesaResult.refs.length > 0) {
        content += `\ncomponent.options.__sanRefs = ${JSON.stringify(vesaResult.refs)}`;
    }

    return content;
};
