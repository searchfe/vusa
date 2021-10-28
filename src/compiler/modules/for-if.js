/**
 * @file 处理同时有 if 和 for 的情况
 * @author donghualei
 */


function postTransformNode(node) {

    if (node.type !== 1) {
        return;
    }

    // 查找字子节点是否有带 s-for 和 s-if 同时存在的场景
    let children = node.children;

    for (let i = 0; i < children.length; i++) {

        // 同时具有 if 和 for
        if (children[i].if && children[i].for) {

            let ifForNode = children[i];

            let newFragmentNode = {
                type: 1,
                tag: 'fragment',
                attrsMap: {
                    's-for': ifForNode.attrsMap['s-for'],
                },

                // 父节点是当前节点
                parent: node,

                for: ifForNode.for,
                alias: ifForNode.alias,
                iterator1: ifForNode.iterator1,
                plain: ifForNode.plain,
            };

            // fragment 替换本身 s-for 和 s-if 所在的节点
            children.splice(i, 1, newFragmentNode);

            // 修改 ifForNode 的父节点为 fragment
            ifForNode.parent = newFragmentNode;

            newFragmentNode.children = [ifForNode];

            delete ifForNode.attrsMap['s-for'];
            delete ifForNode.attrsMap.for;
            delete ifForNode.alias;
            delete ifForNode.iterator1;
        }
    }
}

export default {
    postTransformNode,
};
