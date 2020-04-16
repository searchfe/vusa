/**
 * @file 覆盖 san 原生的 _calcComputed
 * @author cxtom(cxtom2008@gmail.com)
 */

import {def} from '../shared/util';

export default function (key) {
    let computedDeps = this.computedDeps[key];
    if (!computedDeps) {
        computedDeps = this.computedDeps[key] = {};
    }

    const me = this;
    const data = me.data.get();
    const context = {};

    def(context, '$root', {
        get() {
            return me.$root;
        }
    });

    const keys = Object.keys(data);

    for (let i = 0; i < keys.length; i++) {
        const k = keys[i];
        def(context, k, {
            get() {
                if (!computedDeps[k]) {
                    computedDeps[k] = 1;

                    if (me.computed[k] && !me.computedDeps[k]) {
                        me._calcComputed(k);
                    }

                    me.watch(k, function () {
                        me._calcComputed(key);
                    });
                }

                return me.data.get(k);
            }
        });
    }

    this.data.set(key, this.computed[key].call(context));
}
