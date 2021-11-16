/**
 * @file root 节点处理
 * @author donghualei
 */


function postTransformNode(node) {

    // console.log('node.type~~~~~~~~~~~~', node.type);
    // console.log('node', node);
    if (node.type !== 1) {
        return;
    }

    console.log('~~~~~~~~~~~~~node before', node);

    // 如果没有父节点，则是卡片的
    if (!node.parent) {

        const newNode = Object.assign({}, node);

        for (let i in node) {
            delete node[i];
        }
        node.type = 1;
        node.tag = 'template';
        node.attrsList = [];
        node.attrsMap = {};
        node.parent = undefined;
        node.children = [newNode];
        node.plain = false;

        newNode.parent = node;
    }
    console.log('~~~~~~~~~~~~~node after', node);
}

export default {
    postTransformNode,
};
