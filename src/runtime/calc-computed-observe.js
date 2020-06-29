/**
 * @file 覆盖 san 原生的 _calcComputed
 * @author cxtom(cxtom2008@gmail.com)
 */

import {resetTarget, cleanTarget, Dep} from './dep';
import {createAccesser} from '../shared/util';

export default function calcComputed(key) {
    let computedDeps = this.computedDeps[key];
    if (!computedDeps) {
        computedDeps = this.computedDeps[key] = {};
    }

    const me = this;
    const computedExpr = createAccesser(key);
    const oldValue = this.data.get(computedExpr);

    resetTarget();
    const value = this.computed[key].call(this);
    const deps = Dep.target;
    cleanTarget();

    for (let i = 0; i < deps.length; i++) {
        const dep = deps[i];
        const {expr, context} = dep;
        const exprStr = expr.paths.map(a => a.value).join('.');
        if (!computedDeps[exprStr]) {
            computedDeps[exprStr] = 1;
            context.watch(expr, function () {
                calcComputed.call(me, key);
            });
        }
    }

    if (oldValue !== value) {
        this.data.set(computedExpr, value);
    }
}
