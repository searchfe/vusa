/**
 * @file compiler
 * @author cxtom(cxtom2008@gmail.com)
 */

import buildInModules from './modules/index';
import {compile as vueCompile} from 'vue-template-compiler';
import stringify from './stringify';
import getCssModules from './modules/cssmodules';
import atom from './modules/atom';
import {isEmpty} from 'lodash';
import {parseTemplate, pack} from 'san-anode-utils';

const injectScriptRE = /^\[injectScript:([A-Za-z_]+)\]/;

export function compile(source, options = {}) {

    const {
        modules = [],
        cssModules = null,
        scopeId = '',
        strip = true,
        atom: isAtom = false,
    } = options;

    if (!isEmpty(cssModules)) {
        modules.unshift(getCssModules(cssModules));
    }

    if (isAtom) {
        modules.unshift(atom);
    }

    const errors = [];
    const injectScript = {};
    const compilerOptions = {
        modules: [
            ...buildInModules,
            ...modules,
        ],
        preserveWhitespace: false,
        useDynamicComponent: false,
        refs: [],
        error(msg) {
            const matches = msg.match(injectScriptRE);
            if (matches && matches.length === 2) {
                const member = matches[1];
                const value = JSON.parse(msg.replace(injectScriptRE, ''));
                injectScript[member]
                    ? injectScript[member].push(...value)
                    : injectScript[member] = value;
            }
            else {
                // eslint-disable-next-line no-console
                console.error(`[vusa error] ${msg}`);
                errors.push(msg);
            }
        },
        strip,
    };

    const {ast} = vueCompile(source.trim(), compilerOptions);

    const template = stringify(ast, {scopeId, strip, atom: isAtom});
    const aNode = parseTemplate(template, {
        trimWhitespace: 'blank',
    }).children[0];

    return {
        ast,
        aNode,
        aPack: pack.stringify(pack(aNode)),
        template,
        refs: compilerOptions.refs,
        errors,
        injectScript,
    };
}
