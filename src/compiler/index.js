/**
 * @file compiler
 * @author cxtom(cxtom2008@gmail.com)
 */

import buildInModules from './modules';
import {compile as vueCompile} from 'vue-template-compiler';
import stringify from './stringify';
import getCssModules from './modules/cssmodules';
import strip from './modules/strip';
import atom from './modules/atom';
import {isEmpty} from 'lodash';

export function compile(source, options = {}) {

    const {
        modules = [],
        cssModules = null,
        scopeId = '',
        strip = true,
        atom: isAtom = false
    } = options;

    if (!isEmpty(cssModules)) {
        modules.unshift(getCssModules(cssModules));
    }

    if (strip) {
        modules.unshift(strip);
    }

    if (isAtom) {
        modules.unshift(atom);
    }

    const {ast} = vueCompile(source.trim(), {
        modules: [
            ...buildInModules,
            ...modules
        ],
        preserveWhitespace: false
    });

    return {
        ast,
        code: stringify(ast, scopeId)
    };
}
