/**
 * @file component
 * @author cxtom(cxtom2008@gmail.com)
 */

import {defineComponent, inherits} from 'san';
import {extend, hyphenate} from '../shared/util';
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

/* eslint-disable fecs-camelcase */
const sanOptions = {
    _mc: mergeClass,
    _ms: mergeStyle,
    _l: loopExpression,
    template: options.__santemplate,
    filters: {
        json(obj) {
            return JSON.stringify(json);
        },
        lower(str) {
            return str.toLowerCase();
        },
        upper(str) {
            return str.toUpperCase();
        }
    }
};

const MATH_METHOD = [
    'floor', 'ceil', 'round',
    'abs', 'max', 'min', 'pow'
];

MATH_METHOD.forEach(name => {
    sanOptions[`math_${name}`] = function (...args) {
        return Math[name].apply(Math, args);
    };
});

sanOptions.array_slice = function (arr, start, len) {
    var end = len == null ? void 0 : (len >= 0 ? (start + len) : (arr.length + len));
    return arr.slice(start, end);
};

sanOptions.array_join = function (arr, sep) {
    return arr.join(sep);
};

sanOptions.str_pos = function (str, match) {
    return str.indexOf(match);
};

sanOptions.object_freeze = function (obj) {
    return Object.freeze(obj);
};

/* eslint-enable fecs-camelcase */

export default function define(options) {

    if (options.filters) {
        sanOptions.filters = Object.assign(
            sanOptions.filters,
            options.filters
        );
    }

    ['computed', 'watch'].forEach(key => {
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

    if (options.data || options.props) {
        sanOptions.initData = function () {

            const bindData = this._sbindData || {};
            console.log(bindData);
            const propKeys = options.props
                ? (Array.isArray(options.props) ? options.props : Object.keys(options.props))
                : [];

            // 默认属性
            const defaultProps = {};
            if (options.props && !Array.isArray(options.props)) {
                propKeys.forEach(p => {
                    if ('default' in options.props[p]) {
                        defaultProps[p] = typeof options.props[p].default === 'function'
                            ? options.props[p].default()
                            : options.props[p].default
                    }
                })
            }

            const data = typeof options.data === 'function'
                ? options.data.call(Object.assign({}, defaultProps, bindData))
                : (options.data || {});

            return Object.assign({}, defaultProps, data);
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

    const Component = defineComponent(sanOptions);

    return Component;
}

