/**
 * @file component
 * @author cxtom(cxtom2008@gmail.com)
 */

import { defineComponent, inherits } from 'san';
import { extend, hyphenate } from '../shared/util';
import mergeClass from './merge-class';
import mergeStyle from './merge-style';
import loopExpression from './loop-expression';

const lifeCycleMap = {
    beforeCreate: 'compiled',
    mounted: 'attached',
    created: 'inited',
    beforeMount: 'created',
    beforeDestroy: 'detached',
    destroy: 'disposed',
    updated: 'updated',
    beforeUpdate: 'updated'
};

export default function define (options) {

    const sanOptions = {
        _mc: mergeClass,
        _ms: mergeStyle,
        _l: loopExpression,
        template: options.__santemplate
    };

    ['filters', 'computed', 'watch'].forEach(key => {
        if (options[key]) {
            sanOptions[key] = options[key];
        }
    });

    if (options.methods) {
        Object.keys(options.methods).forEach(key => {
            sanOptions[key] = options.methods[key];
        });
    }

    Object.keys(lifeCycleMap).forEach(hook => {
        if (options[hook]) {
            sanOptions[lifeCycleMap[hook]] = options[hook];
        }
    });

    if (typeof options.data === 'function') {
        sanOptions.initData = options.data;
    }
    else if (options.data) {
        sanOptions.initData = function () {
            return options.data;
        };
    }

    if (options.components) {
        sanOptions.components = Object
            .keys(options.components)
            .reduce((prev, key) => {
                prev[key] = prev[hyphenate(key)] = define(options.components[key]);
                return prev;
            }, {});
    }

    console.log(sanOptions);

    const Component = defineComponent(sanOptions);

    return Component;
}

