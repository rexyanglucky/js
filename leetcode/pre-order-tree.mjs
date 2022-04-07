import utils from './gen-tree.mjs';
const tree = utils.genBinaryTree(0, 0, 3);

/**
 * 方法一 递归
 */
// function preorderTraversal(root) {
//     const result = [];
//     function dg(node, arr) {
//         if (!node) {return};
//         arr.push(node.val);
//         dg(node.left, arr);
//         dg(node.right, arr);
//     }
//     dg(root, result);
//     return result;
// }
/**
 * 方法二 遍历
 * 将节点保存在栈中，每次弹出节点时，将其子节点按照 右-->左的顺序压入栈中
 * @param root
 * @returns {*[]}
 */
export function preorderTraversal(root) {
    const result = [];
    const stack = [root];
    while (stack.length) {
        const node = stack.pop();
        result.push(node.val);
        if (node.right) {
            stack.push(node.right);
        }
        if (node.left) {
            stack.push(node.left);
        }
    }
    return result;
}
console.log(tree);
console.log(preorderTraversal(tree));
