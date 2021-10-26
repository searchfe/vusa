/**
 * @file 数据绑定
 * @author cxtom(cxtom2008@gmail.com)
 */

import {def, createAccesser} from '../shared/util';
import calcComputed from './calc-computed';
import {Dep} from './dep';


export default function () {
    const keys = [...this._dataKeys, ...this._propKeys];
    const keyLength = keys.length;

    const context = this;

    for (let i = 0; i < keyLength; i++) {
        const key = keys[i];
        def(context, key, {
            get() {
                return context.data.get(createAccesser(key));
            },
            set(newVal) {
                console.log('~~~~~~~~~~~~set', newVal);
                context.data.set(createAccesser(key), newVal);
            },
        });
    }

    const me = this.data.owner = this;
    this.data._dep = new Dep();

    // define computed
    for (let i = 0; i < this._computedKeys.length; i++) {
        const key = this._computedKeys[i];
        def(this, key, {
            get() {
                return me.data.get(createAccesser(key));
            },
        });
        calcComputed.call(this, key);
    }
}
