/**
 * @file 覆盖 san 原生的 _calcComputed
 * @author cxtom(cxtom2008@gmail.com)
 */

import {def} from '../shared/util';
import slots from './get-slots';
import {resetTarget, cleanTarget, Dep} from './bind-data';
import {nextTick} from 'san';

export default function calcComputed(key) {
    let computedDeps = this.computedDeps[key];
    if (!computedDeps) {
        computedDeps = this.computedDeps[key] = {};
    }

    const me = this;

    const oldValue = this.data.get(key);

    resetTarget();
    const value = this.computed[key].call(this);
    const deps = Dep.target;
    for (let i = 0; i < deps.length; i++) {
        const dep = deps[i];
        const {expr, context} = dep;
        const exprPrefix = this === context ? '' : 'upper';
        const exprSuffix = expr.paths.map(a => a.value).join('.');
        const exprStr = exprPrefix + exprSuffix;
        if (!computedDeps[exprStr]) {
            computedDeps[exprStr] = 1;
            delete expr.changeCache;
            nextTick(function () {
                context.watch(expr, function (change) {
                    calcComputed.call(me, key);
                });
            });
        }
    }
    cleanTarget();

    if (oldValue !== value) {
        this.data.set(key, value);
    }
}
