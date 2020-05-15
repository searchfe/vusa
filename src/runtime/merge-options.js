/**
 * @file merge options
 * @author cxtom(cxtom2008@gmail.com)
 */

import {extend} from '../shared/util';
import {lifeCycleKeys, lifeCycleMap} from './constant';
import * as atomBuildInMixin from './global-api';

const keys = [
    'filters',
    'computed'
];

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
        ? [atomBuildInMixin, ...options.mixins, options]
        : [atomBuildInMixin, options];

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
            const dk = lifeCycleMap[k];
            if (opt[k]) {
                destOptions[dk] = mergeHook(destOptions[dk] || [], opt[k]);
            }
        }
    }
    for (let j = 0; j < lifeCycleKeys.length; j++) {
        const k = lifeCycleKeys[j];
        const dk = lifeCycleMap[k];
        if (destOptions[dk]) {
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
