var postorderTraversal = function (root) {
    if (!root) { return []; }
    /**方法一 递归 */
    // const results = [];
    // function traversal(node, arrs) {
    //     if (!node) {return;}
    //     traversal(node.left, arrs);
    //     traversal(node.right, arrs);
    //     results.push(node.val);
    // }
    // traversal(root, results);
    // return results;
    /**方法二 循环
     左右根 是 根右左的反序
     因此可以参考前序遍历，将入栈的顺序改变一下
     最后将结果逆序
     */
    // const results = [];
    // const stacks = [];
    // let node = root;
    // while (node) {
    //     results.push(node.val);
    //     if (node.left) {
    //         stacks.push(node.left);
    //     }
    //     if (node.right) {
    //         stacks.push(node.right);
    //     }
    //     node = stacks.pop();
    // }
    // return results.reverse();
    /** 方法三
     类似中序
     优先查找右节点，并将其押入栈中，将节点值存入数组，每个新的值放在数组第一个
     查找到无右节点的节点时，弹出该节点，将其左节点压入栈中，继续执行上一步
     */
    const results = [];
    const stacks = [];
    let node = root;
    while(node || stacks.length) {
        while(node) {
            results.unshift(node.val);
            stacks.push(node);
            node = node.right;
        }
        if (stacks.length) {
            node = stacks.pop();
            node = node.left;
        }
    }
    return results;
};
