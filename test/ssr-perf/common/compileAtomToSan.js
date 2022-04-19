const {
    getBlocks,
    configCompiler,
} = require('atom-web-compiler');
const {parse: babelParse} = require('@babel/parser');
const {default: traverse} = require('@babel/traverse');
const {default: babelGenerate} = require('@babel/generator');
const t = require('@babel/types');
const _ = require('lodash');
const vusa = require('../../../packages/compiler');

const shouldKeepComponentProperties = new Set([
    'computed',
    'methods',
    'filters',
    'created',
    'data',
    'props',
    'components',
]);

function compileComponentObject(code) {

    const ast = babelParse(code, {
        sourceType: 'module',
    });

    // 提取 export default 中的 object
    let objExpression;
    traverse(ast, {
        ExportDefaultDeclaration(path) {
            path.traverse({
                ObjectExpression(p) {
                    if (!objExpression) {
                        objExpression = p;
                        p.skip();
                    }
                },
            });
        },
        MemberExpression(path) {
            const property = path.get('property');
            const object = path.get('object');
            if (
                t.isIdentifier(property) && property.node.name === 'exports'
                && t.isIdentifier(object) && object.node.name === 'module'
                && t.isAssignmentExpression(path.parentPath)
            ) {
                const right = path.parentPath.get('right');
                if (t.isObjectExpression(right)) {
                    objExpression = right;
                }
            }
        },
    });

    if (!objExpression) {
        throw Error('Atom component must export default an Object or Class!');
    }

    let methods = [];
    // 删掉不用的 key
    objExpression.traverse({
        ObjectProperty(path) {
            if (path.parentPath === objExpression) {
                const key = path.node.key;

                if (
                    t.isIdentifier(key)
                    && !shouldKeepComponentProperties.has(key.name + '')) {
                    path.remove();
                }
                else if (key.name + '' === 'components') {
                    const compObj = path.node.value;
                    if (!t.isObjectExpression(compObj)) {
                        throw Error('components must be a object.');
                    }
                    compObj.properties.forEach(item => {
                        let compVal = item.value;
                        const compKey = item.key;

                        if (!t.isIdentifier(compKey) && !t.isStringLiteral(compKey)) {
                            throw Error('Can not get component keys.');
                        }

                        if (!t.isIdentifier(compVal) && t.isFunctionExpression(compVal)) {

                            const dynamicImport = compVal.body.body[0];
                            if (
                                !dynamicImport
                                || !t.isExpressionStatement(dynamicImport)
                                || !t.isCallExpression(dynamicImport.expression)
                            ) {
                                throw Error('Only can deal width dynamic import case');
                            }

                            try {
                                const moduleSpecifier = dynamicImport.expression.callee.object.arguments[0].value;
                                // 使用 components 的 key 作为转换的静态引入的组件名，支持相同模块通过重命名 key 重复引入的情况
                                const dynamicImportIdentifier = _.upperFirst(_.camelCase(compKey.value));
                                // 构建 动态组件 静态引入 import
                                const dynamicImportExpression = t.importDeclaration(
                                    [t.importDefaultSpecifier(
                                        t.identifier(dynamicImportIdentifier)
                                    )],
                                    t.stringLiteral(moduleSpecifier)
                                );
                                ast.program.body.unshift(dynamicImportExpression);
                                item.value = t.identifier(dynamicImportIdentifier);
                            }
                            catch (error) {
                                throw error;
                            }
                        }
                    });
                }
                else if (key.name === 'methods') {
                    const compObj = path.node.value;
                    compObj.properties.forEach(item => {
                        const compKey = item.key.name;
                        if (compKey) {
                            methods.push(compKey);
                        }
                    });
                }
                path.skip();
            }
        },
        ObjectMethod(path) {
            const key = path.node.key;
            if (
                path.parentPath === objExpression
                && !shouldKeepComponentProperties.has(key.name + '')
            ) {
                path.remove();
            }
        },
    });

    let exp = objExpression.parentPath;
    while (exp && !t.isExportDefaultDeclaration(exp) && !t.isExpressionStatement(exp)) {
        exp = exp.parentPath;
    }
    exp.replaceWith(t.variableDeclaration('var', [
        t.variableDeclarator(t.identifier('obj'), objExpression.node),
    ]));

    const str = babelGenerate(ast);
    return {
        code: str.code,
        methods: methods,
    };

}

function compile(fileContent, options) {
    const sfc = getBlocks(fileContent);
    const atomCompilerOptions = options.atomCompilerOptions || {};

    // script
    let code = 'var obj = {};\n';
    const hasScript = sfc.script && sfc.script.code.trim();

    let cco = {
        code: '',
        methods: [],
    };

    if (hasScript) {
        cco = compileComponentObject(sfc.script.code, sfc.script.lang === 'ts');
        code = cco.code;
    }

    // config
    if (sfc.config) {
        const config = configCompiler.compile(sfc.config.code, {
            jsPath: atomCompilerOptions.jsPath,
        });

        let {
            components: configComponents,
            props: configProps,
            data: configData,
            computed: configComputed,
        } = config.parts || {};

        code += configProps ? `obj.props = ${configProps.code.js};\n` : '';
        code += configComponents ? `obj.components = ${configComponents.code.js};\n` : '';
        code += configData ? `obj.data = function () {
            return ${configData.code.js};
        };\n` : '';

        let hasComputed = configComputed && configComputed.keys.length > 0;
        if (hasComputed) {
            code += `
var computed = obj.computed || {};
${configComputed.code.js};
obj.computed = computed;
`;
        }
    }

    const result = vusa.compile(sfc.template.code, {
        atom: true,
        strip: true,
        stripWith: true,
    });

    code += `obj.__santemplate = ${JSON.stringify(result.template)};\n`;

    if (result.refs && result.refs.length > 0) {
        code += `obj.__sanRefs = ${result.refs && result.refs.length ? JSON.stringify(result.refs) : '[]'};\n`;
    }

    // 全局方法如下
    const methodsList = result.methodsList;

    if (methodsList && methodsList.length >= 0) {
        let injectCode = 'var injectMethods = {';
        injectCode += '};';
        code += injectCode;
        code += '\nobj.methods = obj.methods || {};\nObject.assign(obj.methods, injectMethods);\n';
    }

    code += `var originCreated = obj.created;
obj.created = function () {var self = this;`;

    code += `
this.$isServer = true;
this.$ssrContext = global.__SAN_SSR_CONTEXT__;
if (this.$ssrContext && this.$ssrContext.locals) {
    Object.keys(this.$ssrContext.locals).forEach(function (localKey) {
        self.data.set(localKey, self.$ssrContext.locals[localKey]);
    });
}
`;

    code += '\noriginCreated && originCreated.call(this);};\nobj.__sanOptimizeSSR = true;\n';
    code += 'module.exports = obj;';

    return {
        code,
    };
}


module.exports = {
    compile,
};