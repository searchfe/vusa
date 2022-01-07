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
import {getDataType} from '../shared/util';

export function compile(source, options = {}) {
    const {
        modules = [],
        cssModules = null,
        scopeId = '',
        strip = true,
        atom: isAtom = false,
        stripWith = false,
    } = options;

    if (!isEmpty(cssModules)) {
        modules.unshift(getCssModules(cssModules));
    }

    if (isAtom) {
        modules.unshift(atom);
    }

    const errors = [];
    const injectScript = {};
    const methodsList = [];
    const compilerOptions = {
        modules: [
            ...buildInModules,
            ...modules,
        ],
        preserveWhitespace: false,
        useDynamicComponent: false,
        refs: [],
        injectScript,
        methodsList,
        error(msg) {
            // eslint-disable-next-line no-console
            console.error(`[vusa error] ${msg}`);
            errors.push(msg);
        },
        strip,
        stripWith,
    };
    const _source =  source ? source.trim() : source;
    const {ast} = vueCompile(_source, compilerOptions);

    // 传入的模板不正确，无法生成ast
    if (getDataType(ast) !== 'Object') {
        throw new Error(source);
    }
    const template = stringify(ast, {scopeId, strip, atom: isAtom});

    const aNode = parseTemplate(template, {
        trimWhitespace: 'blank',
    }).children[0];

    // if (ast.tag === 'child') {
    //     console.log('---------------------------------');
    //     console.log('ast', ast.children[0]);
    //     console.log('aNode', JSON.stringify(aNode));
    //     console.log('aPack', pack.stringify(pack(aNode)));
    //     console.log('template', template);
    //     console.log('---------------------------------');
    // }

    return {
        ast,
        aNode,
        aPack: pack.stringify(pack(aNode)),
        template,
        refs: compilerOptions.refs,
        errors,
        injectScript,
        methodsList,
    };
}
