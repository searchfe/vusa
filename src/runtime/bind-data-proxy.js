/**
 * @file 数据绑定
 * @author cxtom(cxtom2008@gmail.com)
 */

import {isObject, isPlainObject, extend, def} from '../shared/util';
import {ExprType} from 'san';
import {Dep} from './dep';

const arrayProto = Array.prototype;

const methodsToPatch = [
    'push',
    'pop',
    'shift',
    'unshift',
    'splice',
];

const proxyKey = '__proxy__';

function proxy(obj, expr, context) {

    const dep = new Dep();
    const isArray = Array.isArray(obj);

    function getKeyExpr(key) {
        const paths = expr && expr.paths || [];
        return extend({}, expr, {
            paths: [...paths, {
                type: ExprType.STRING,
                value: key,
            }],
        });
    }

    const handler = {
        set(target, prop, newVal) {
            if (target[prop] === newVal) {
                return true;
            }
            const keyExpr = getKeyExpr(prop);
            target[prop] = observe(newVal);
            context.data.fire({
                type: 1,
                expr: keyExpr,
                value: target[prop],
                option: {},
            });
            return true;
        },
        get(target, prop) {

            if (prop === proxyKey) {
                return true;
            }
            const keyExpr = getKeyExpr(prop);
            let key = '';
            for (let i = 0; i < keyExpr.paths.length; i++) {
                if (i === 0) {
                    key = keyExpr.paths[i].value;
                }
                else {
                    key = key + '.' + keyExpr.paths[i].value;
                }
            }

            dep.depend({
                context,
                expr: keyExpr,
                key: key,
            });
            if (isArray && methodsToPatch.indexOf(prop) >= 0) {
                const original = arrayProto[prop];
                return function (...args) {
                    let insertions = [];
                    switch (prop) {
                        case 'push':
                        case 'unshift':
                            args[0] = observe(args[0], keyExpr, context);
                            insertions = [args[0]];
                            break;
                        case 'splice':
                            insertions = args.slice(2).map(t => observe(t, keyExpr, context));
                            args = [
                                ...args.slice(0, 2),
                                ...insertions,
                            ];
                            break;
                    }

                    let index;
                    switch (prop) {
                        case 'push':
                        case 'pop':
                            index = Math.max(target.length - 1, 0);
                            break;
                        case 'shift':
                        case 'unshift':
                            index = 0;
                            break;
                        case 'splice':
                            index = args[0];
                            let len = target.length;
                            if (index > len) {
                                index = len;
                            }
                            else if (index < 0) {
                                index = len + index;
                                if (index < 0) {
                                    index = 0;
                                }
                            }
                            break;
                    }

                    const result = original.apply(target, args);

                    context.data.fire({
                        expr: expr,
                        type: 2,
                        index: index,
                        deleteCount: result.length,
                        value: result,
                        insertions,
                        option: {},
                    });

                    return result;
                };
            }
            return observe(target[prop], keyExpr, context);
        },
    };

    return new Proxy(obj, handler);
}

const defaultExpr = {
    type: ExprType.ACCESSOR,
    paths: [],
};

function observe(value, expr, context) {
    if (!isObject(value)) {
        return value;
    }

    if (value[proxyKey]) {
        return value;
    }

    if (
        (Array.isArray(value) || isPlainObject(value))
        && Object.isExtensible(value)
    ) {
        return proxy(value, expr, context);
    }
}

export default function () {
    const expr = extend({}, defaultExpr);
    const keys = [...this._dataKeys, ...this._propKeys];
    const keyLength = keys.length;

    this.data.raw = observe(this.data.raw, expr, this);

    const context = this;

    for (let i = 0; i < keyLength; i++) {
        const key = keys[i];
        def(this, key, {
            get() {
                return context.data.raw[key];
            },
            set(newVal) {
                context.data.raw[key] = newVal;
            },
        });
    }

    this.data.owner = this;
}
