import utils from './gen-tree.mjs';
console.log('111')
const tree = utils.genBinaryTree(0, 0, 3);
console.log('111', tree)
// 中序遍历
/**
 * 方法一 递归
 */
function preorderTraversal(root) {
  const result = [];
  function dg(node, arr) {
    if (!node) {return};
    dg(node.left, arr);
    arr.push(node.val);
    dg(node.right, arr);
  }
  dg(root, result);
  return result;
}
/**
 * 方法二
 优先查找左节点，并将其押入栈中
 查找到无左节点的节点时，弹出该节点，并记录其值，将其右节点压入栈中，继续执行上一步
 * @param root
 * @returns {*[]}
 */
function inOrder(root) {
  const result = [];
  const stack = [];
  let node = root;
  while (node || stack.length) {
    while (node) {
      stack.push(node);
      node = node.left;
    }
    if (stack.length) {
      node = stack.pop();
      result.push(node.val);
      node = node.right;
    }
  }
  return result;
}
const orderTree = inOrder(tree);
console.log(orderTree);
