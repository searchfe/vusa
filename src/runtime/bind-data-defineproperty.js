/**
 * @file 数据绑定
 * @author cxtom(cxtom2008@gmail.com)
 */

import {
    isObject,
    hasOwn,
    isPlainObject,
    extend,
    def,
    createAccesser,
    isPrimitive,
    isValidArrayIndex,
} from '../shared/util';
import {ExprType, NodeType, parseExpr} from 'san';
import {Dep} from './dep';
import calcComputed from './calc-computed';

const arrayProto = Array.prototype;
const arrayMethods = Object.create(arrayProto);

const methodsToPatch = [
    'push',
    'pop',
    'shift',
    'unshift',
    'splice',
    'sort',
    'reverse',
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
    // cache original method
    const original = arrayProto[method];
    def(arrayMethods, method, {
        value(...args) {
            const ob = this.__ob__;
            switch (method) {
                case 'push':
                case 'unshift':
                    ob.context.data[method](ob.expr, args[0]);
                    break;
                case 'pop':
                case 'shift':
                    ob.context.data[method](ob.expr);
                    break;
                case 'splice':
                    ob.context.data.splice(ob.expr, args);
                    break;
                default:
                    ob.context.data.set(ob.expr, original.apply(this.slice(), args));
            }
            const result = ob.context.data.get(ob.expr);
            observe(result, ob.expr, ob.context);
            return result;
        },
    });
});

class Observer {

    constructor(value, expr, context) {
        this.expr = expr;
        this.context = context;
        def(value, '__ob__', {
            value: this,
        });

        this.value = value;

        if (Array.isArray(value)) {
            // eslint-disable-next-line no-proto
            value.__proto__ = arrayMethods;
            this.observeArray(value);
        }
        else {
            this.keys = Object.keys(value) || [];
            this.walk(value);
        }
    }

    /**
     * Walk through all properties and convert them into
     * getter/setters. This method should only be called when
     * value type is Object.
     */
    walk(obj) {
        const keys = this.keys;
        for (let i = 0; i < keys.length; i++) {
            defineReactive(obj, keys[i], this.expr, this.context);
        }
    }

    /**
     * Observe a list of Array items.
     */
    observeArray(items) {
        for (let i = 0, l = items.length; i < l; i++) {
            observe(items[i], extend({}, this.expr, {
                paths: [...this.expr.paths, {
                    type: ExprType.NUMBER,
                    value: i,
                }],
            }), this.context);
        }
    }
}

function defineReactive(obj, key, expr, context) {

    const property = Object.getOwnPropertyDescriptor(obj, key);
    if (property && property.configurable === false) {
        return;
    }

    // cater for pre-defined getter/setters
    const getter = property && property.get;
    const setter = property && property.set;

    const keyExpr = {
        type: ExprType.ACCESSOR,
        paths: [...expr.paths, {
            type: ExprType.STRING,
            value: key,
        }],
    };

    const dep = new Dep();

    let val = obj[key];

    observe(val, keyExpr, context);
    const newProperty = {
        enumerable: true,
        configurable: true,
        set(newVal) {

            const value = getter ? getter.call(obj) : val;
            if (newVal === value) {
                return;
            }
            if (getter && !setter) {
                return;
            }
            if (setter) {
                setter.call(obj, newVal);
            }
            else {
                val = newVal;
            }

            observe(newVal, keyExpr, context);
            context.data.set(keyExpr, newVal, {force: true});
        },
        get() {
            dep.depend({
                context,
                expr: keyExpr,
            });
            const value = getter ? getter.call(obj) : val;
            return value;
        },
    };
    def(obj, key, newProperty);
}

// const defaultExpr = {
//     type: ExprType.ACCESSOR,
//     paths: [],
// };

function observe(value, expr, context) {
    if (!isObject(value)) {
        return;
    }
    let ob;
    if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
        ob = value.__ob__;
    }
    else if (
        (Array.isArray(value) || isPlainObject(value))
        && Object.isExtensible(value)
    ) {
        ob = new Observer(value, expr, context);
    }
    return ob;
}

export function set(target, propertyNameOrIndex, value) {
    if (target == null || isPrimitive(target)) {
        return;
    }
    const expr = parseExpr(propertyNameOrIndex);
    if (target.nodeType === NodeType.CMPT) {
        target.data.set(expr, value, {
            force: true,
        });
        return value;
    }
    const ob = target.__ob__;
    if (ob && Array.isArray(target) && isValidArrayIndex(propertyNameOrIndex)) {
        target.length = Math.max(target.length, propertyNameOrIndex);
        ob.context.data.splice(ob.expr, expr, 1, value);
    }
    else if (ob) {
        const finalExpr = {
            type: ExprType.ACCESSOR,
            paths: [...ob.expr.paths, ...expr.paths],
        };
        ob.context.set(finalExpr, value, {
            force: true,
        });
    }
}

export default function (computed) {
    // const expr = extend({}, defaultExpr);
    const keys = [...this._dataKeys, ...this._propKeys];
    const keyLength = keys.length;

    const context = this;

    const dep = new Dep();

    for (let i = 0; i < keyLength; i++) {
        const key = keys[i];
        const keyExpr = {
            type: ExprType.ACCESSOR,
            paths: [{
                type: ExprType.STRING,
                value: key,
            }],
        };
        def(context, key, {
            get() {
                dep.depend({
                    context,
                    expr: keyExpr,
                });
                const val = context.data.get(keyExpr);
                observe(val, keyExpr, context);
                return val;
            },
            set(newVal) {
                if (isObject(newVal) && hasOwn(newVal, '__ob__')) {
                    if (Array.isArray(newVal)) {
                        newVal = newVal.slice();
                    }
                    else {
                        newVal = {...newVal};
                    }
                }
                context.data.set(keyExpr, newVal);
            },
        });
    }

    const me = this.data.owner = this;

    // define computed
    this.computedDeps = {};
    for (let i = 0; i < this._computedKeys.length; i++) {
        const key = this._computedKeys[i];
        const keyExpr = {
            type: ExprType.ACCESSOR,
            paths: [{
                type: ExprType.STRING,
                value: key,
            }],
        };
        def(this, key, {
            get() {
                dep.depend({
                    context,
                    expr: keyExpr,
                });
                return me.data.get(createAccesser(key));
            },
        });
    }

    for (let i = 0; i < this._computedKeys.length; i++) {
        const key = this._computedKeys[i];
        calcComputed.call(this, key, computed);
    }
}
