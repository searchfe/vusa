/**
 * @file merge options
 * @author cxtom(cxtom2008@gmail.com)
 */

import {extend} from '../shared/util';
import {lifeCycleKeys, lifeCycleMap} from './constant';
import * as atomBuildInMixin from './global-api';

const keys = [
    'filters',
];

export const globalOptions = {
    methods: atomBuildInMixin.methods,
    filters: atomBuildInMixin.filters,
};

function mergeHook(parentVal, childVal) {
    return childVal
        ? parentVal
            ? parentVal.concat(childVal)
            : Array.isArray(childVal)
                ? childVal
                : [childVal]
        : parentVal;
}

export default function mergeOptions(options) {
    const destOptions = {};
    const list = Array.isArray(options.mixins)
        ? [globalOptions, ...options.mixins, options]
        : [globalOptions, options];

    const methods = {};
    for (let i = 0, len = list.length; i < len; i++) {
        const opt = list[i];
        opt.methods && extend(methods, opt.methods);
        for (let j = 0; j < keys.length; j++) {
            const k = keys[j];
            if (opt[k]) {
                destOptions[k] = extend(destOptions[k] || {}, opt[k]);
            }
        }
        for (let j = 0; j < lifeCycleKeys.length; j++) {
            const k = lifeCycleKeys[j];
            let dk = lifeCycleMap[k];
            if (isPureSan(options) && k === 'created') {
                dk = k;
            }
            if (opt[k]) {
                destOptions[dk] = mergeHook(destOptions[dk] || [], opt[k]);
            }
        }
    }
    for (let j = 0; j < lifeCycleKeys.length; j++) {
        const k = lifeCycleKeys[j];
        let dk = lifeCycleMap[k];
        if (isPureSan(options) && k === 'created') {
            dk = k;
        }
        if (Array.isArray(destOptions[dk])) {
            const hooks = destOptions[dk].slice();
            destOptions[dk] = hooks.length === 1 ? hooks[0] : function () {
                hooks.forEach(hook => hook.call(this), this);
            };
        }
    }
    destOptions._methodKeys = Object.keys(methods);
    extend(destOptions, methods);
    if (options.messages) {
        destOptions.messages = options.messages;
    }
    return destOptions;
}

// 在纯 san 和 atom2san 混合的情况下，区分纯 san 组件
export function isPureSan(options) {
    return !options.isAtom2san;
}
