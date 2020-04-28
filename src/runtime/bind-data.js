/**
 * @file 数据绑定
 * @author cxtom(cxtom2008@gmail.com)
 */

import {isObject, hasOwn, isPlainObject, extend, def} from '../shared/util';
import {ExprType} from 'san';

const arrayProto = Array.prototype;
const arrayMethods = Object.create(arrayProto);

const methodsToPatch = [
    'push',
    'pop',
    'shift',
    'unshift',
    'splice'
    // 'sort',
    // 'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
    // cache original method
    const original = arrayProto[method]
    def(arrayMethods, method, {
        value(...args) {
            const result = original.apply(this, args);
            const ob = this.__ob__;
            let inserted;
            switch (method) {
                case 'push':
                case 'unshift':
                    inserted = args;
                    break;
                case 'splice':
                    inserted = args.slice(2);
                    break;
            }
            if (inserted) {
                ob.observeArray(inserted);
            }
            ob.context.data[method].call(ob.context.data, ob.expr, ...args);
            observe(ob.context.data.get(ob.expr), ob.expr, ob.context);
            return result;
        }
    })
});

class Observer {

    constructor(value, expr, context) {
        this.expr = expr;
        this.context = context;
        def(value, '__ob__', {
            value: this
        });

        this.value = value;

        if (Array.isArray(value)) {
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
                    value: i
                }]
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
            value: key
        }]
    };

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
            const value = getter ? getter.call(obj) : val;
            return value;
        }
    };
    def(obj, key, newProperty);
}

const defaultExpr = {
    type: ExprType.ACCESSOR,
    paths: []
};

export default function () {
    const expr = extend({}, defaultExpr);
    const keys = [...this._dataKeys, ...this._propKeys];
    const keyLength = keys.length;

    observe(this.data.get(), expr, this);

    const context = this;

    this._data = this.data.get();

    for (let i = 0; i < keyLength; i++) {
        const key = keys[i];
        def(context, key, {
            get() {
                return context._data[key];
            },
            set(newVal) {
                context._data[key] = newVal;
            }
        });
    }

    this.data.owner = this;
}

function observe(value, expr, context) {
    if (!isObject(value)) {
        return;
    }
    let ob;
    if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
        ob = value.__ob__
    }
    else if (
        (Array.isArray(value) || isPlainObject(value))
        && Object.isExtensible(value)
    ) {
        ob = new Observer(value, expr, context);
    }
    return ob;
}
