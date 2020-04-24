/**
 * @file 优化 aNode 的体积
 * @author cxtom(cxtom2008@gmail.com)
 */

export default function optimize(aNode) {
    delete aNode.raw;
    if (aNode.children) {
        aNode.children = aNode.children.map(optimize);
    }
    if (aNode.props) {
        aNode.props = aNode.props.map(prop => {
            if (prop.raw) {
                // 不能删除，运行时有用
                prop.raw = 1;
            }
            if (prop.expr) {
                delete prop.expr.raw;
            }
            return prop;
        });
    }
    if (aNode.directives) {
        Object.keys(aNode.directives).forEach(dir => {
            delete aNode.directives[dir].raw;
            if (aNode.directives[dir].value) {
                delete aNode.directives[dir].value.raw
            }
        });
    }
    return aNode;
}
