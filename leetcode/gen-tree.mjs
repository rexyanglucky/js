/**
 * @description 树的层序遍历/蛇形遍历
 * genTree 生成多个子节点的树
 * genBinaryTree 生成满二叉树
 * levelOrder 层序遍历
 * snakeLikelevelOrder 蛇形层序遍历
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, children) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.children = children;
 * }
 */
 function TreeNode(val, children) {
  this.val = (val === undefined ? 0 : val)
  this.children = (children === undefined ? null : children);
}
function genTree(val, childs, level, maxlevel) {
  const childArr = childs.map(i => new TreeNode(i + level * 10));
  let node = new TreeNode(val, childArr);
  if (node.children && level < maxlevel) {
    node.children.forEach(item => {
      item.children = genTree(val + level * 10, childs, level + 1, maxlevel).children;
    })
  }
  return node;
}
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function BinaryTreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

function genBinaryTree(val, level, maxlevel) {
  const node = new BinaryTreeNode(val);
  if (level < maxlevel) {
    node.left = genBinaryTree(2 * val + 1, level + 1, maxlevel);
    node.right = genBinaryTree(2 * val + 2, level + 1, maxlevel);
  }
  return node;
}
function genBinaryTree1(arrs) {
  const map = arrs.map((i, index) => new BinaryTreeNode(index));
  for (let k = 0; k < map.length; k++) {
    let level = Math.floor(k / 2);
    let lIndex = 2 * map[k].val + 1;
    let rIndex = 2 * map[k].val + 2;
    map[k].left = map[lIndex];
    map[k].right = map[rIndex];
  }
  return map[0];
}
const node1 = genTree(0, [1, 2, 3, 4, 5, 6], 0, 2);
const node2 = genBinaryTree(0, 0, 5);
const node3 = genBinaryTree1(new Array(63).fill(undefined));
const node4 = genBinaryTree1([1,2,3,null,null,4,5]);
console.log(node4);
export default {
  genTree,
  genBinaryTree,
  genBinaryTree1
}
