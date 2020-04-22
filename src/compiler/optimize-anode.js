/**
 * @file 优化 aNode 的体积
 * @author cxtom(cxtom2008@gmail.com)
 */

export default function optimize(aNode) {
    delete aNode.raw;
    if (aNode.children) {
        aNode.children = aNode.children.map(optimize);
    }
    return aNode;
}
