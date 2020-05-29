/**
 * @file calcComputed override
 * @author cxtom(cxtom2008@gmail.com)
 */

import {resetTarget, cleanTarget, Dep} from './bind-data';

export default function calcComputed(computedExpr) {

    if (typeof computedExpr === 'object') {
        computedExpr = computedExpr.paths.map(a => a.value).join('.');
    }

    let computedDeps = this.computedDeps[computedExpr];
    if (!computedDeps) {
        computedDeps = this.computedDeps[computedExpr] = {};
    }

    resetTarget();
    const value = this.computed[computedExpr].call(this);
    const deps = Dep.target;
    cleanTarget();

    const me = this;

    for (let i = 0; i < deps.length; i++) {
        const dep = deps[i];
        const {
            expr,
            key
        } = dep;
        if (!computedDeps[key]) {
            computedDeps[key] = 1;
            this.watch(expr, function (change) {
                calcComputed.call(me, computedExpr);
            });
        }
    }

    this.data.set(computedExpr, value);
}
