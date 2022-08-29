/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
// var serialize = function (root) {
//   if (root == null) return "#";
//   return root.val + "," + serialize(root.left) + "," + serialize(root.right);
// }
var serialize = function (root) {
  const que = [root];
  const result = [];
  while (que.length) {
    const len = que.length;
    for (let k = 0; k < len; k++) {
      const node = que.shift();
      result.push(node ? node.val : "#");
      if (node) {
        que.push(node.left);
        que.push(node.right);
      }
    }
  }
  return result.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
// var deserialize = function (data) {
//   function createNode(arrs) {
//     const map = arrs.map((i, index) => {
//       if (i === "#") {
//         return null;
//       }
//       return new TreeNode(i);
//     });
//     for (let k = 0; k < map.length; k++) {
//       if (map[k]) {
//         // let level = Math.floor(k / 2);
//         let lIndex = 2 * k + 1;
//         let rIndex = 2 * k + 2;
//
//         map[k].left = lIndex > map.length - 1 ? null : map[lIndex];
//         map[k].right = rIndex > map.length - 1 ? null : map[rIndex];
//       }
//     }
//     return map[0];
//   }
//   if (!data) return null;
//   return createNode(data.split(","));
// };

var deserialize = function (data) {
  function createNode(arrs) {
    const root = new TreeNode(arrs[0]);
    const que = [root];
    while (que.length) {
      for (let k = 1; k< arrs.length; k++) {
        const node = que.shift();
        let val = arrs[k];
        if (val!=='#') {
          node.left = new TreeNode(val);
          que.push(node.left);
        }
        val = arrs[++k];
        if (val!=='#') {
          node.right = new TreeNode(val);
          que.push(node.right);
        }
      }
    }
    return root;
  }
  if (!data) return null;
  return createNode(data.split(","));
};


/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// let root = new TreeNode(1)
//  deserialize(serialize(root));
const node1 = deserialize("1,2,3,#,#,4,5,6,7");
const str = serialize(node1);
const node2 = deserialize(str);
const str1 = serialize(node2);
console.log(str);
console.log(node2);
console.log(str1);
