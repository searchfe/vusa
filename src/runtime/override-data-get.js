/**
 * @file override eval expr
 * @author cxtom(cxtom2008@gmail.com)
 */

import {Data, parseExpr, ExprType, evalExpr} from 'san';

const original = Data.prototype.get;

Data.prototype.get = function (expr, callee) {
    if (!expr) {
        return this.raw;
    }
    let key = expr;
    if (typeof expr === 'string') {
        expr = parseExpr(expr);
    }
    else {
        key = expr.paths.map(a => a.value).join('.');
    }

    this._dep && this._dep.depend({
        key,
        expr,
    });

    let value = original.call(this, expr, callee);
    if (!expr || value !== undefined || !this.owner || expr.type !== ExprType.ACCESSOR) {
        return value;
    }
    const paths = expr.paths;
    const first = paths[0].value;
    if (
        [
            ...this.owner._propKeys,
            ...this.owner._dataKeys,
            ...this.owner._computedKeys,
        ].indexOf(first) >= 0
    ) {
        return value;
    }
    value = this.owner[first];
    for (let i = 1, l = paths.length; value != null && i < l; i++) {
        value = value[paths[i].value || evalExpr(paths[i], callee)];
    }
    return value;
};

