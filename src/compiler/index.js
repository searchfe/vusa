/**
 * @file compiler
 * @author cxtom(cxtom2008@gmail.com)
 */

import buildInModules from './modules';
import {compile} from 'vue-template-compiler';
import stringify from './stringify';

export default function (source, options = {}) {

    const {
        modules = []
    } = options;

    const {ast} = compile(source.trim(), {
        modules: [...buildInModules, ...modules],
        preserveWhitespace: false
    });

    return {
        ast,
        code: stringify(ast)
    };
}
