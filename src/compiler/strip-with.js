import {parse as babelParse} from '@babel/parser';
import {default as traverse} from '@babel/traverse';
import * as t from '@babel/types';
import {default as babelGenerate} from '@babel/generator';

export default function stripWith(code) {
    const ast = babelParse(code);
    traverse(ast, {
        WithStatement(p) {
            const fn = p.findParent(pa => pa.isFunctionDeclaration());
            const id = fn.scope.generateUidIdentifier('_me');
            fn.scope.push({id, init: p.get('object').node});
            p.traverse({
                Identifier(p) {
                    const parent = p.parentPath;
                    if (
                        !fn.scope.hasBinding(p.node.name)
                        && !(parent.isDeclaration() && parent.get('id') === p)
                        && !(parent.isObjectProperty() && parent.get('key') === p)
                        && !(parent.isMemberExpression() && parent.get('property') === p)
                    ) {
                        // console.log(parent);
                        p.replaceWith(t.memberExpression(id, p.node));
                    }
                    p.skip();
                },
            });
            p.replaceWith(p.get('body').get('body')[0]);
            p.skip();
        },
    });
    const res = babelGenerate(ast);
    return res.code;
}
