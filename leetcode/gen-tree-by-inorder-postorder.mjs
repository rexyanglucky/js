/**
 * 根据中序数组，后序数组生成树
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
[2,3,1]
[3,2,1]

export function preorderTraversal(root) {
    const result = [];
    const stack = [root];
    while (stack.length) {
        const node = stack.pop();
        if (node) {
            result.push(node.val);
            stack.push(node.right);
            stack.push(node.left);
        } else {
            result.push(null);
        }
    }
    return result;
}


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
// var buildTree = function (inorder, postorder) {
//     function createNode(inorder, postorder) {
//         if (!inorder.length || !postorder.length) {
//             return null;
//         }
//         if (postorder.length === 1) {
//             return new TreeNode(postorder[0]);
//         }
//         let curIndex = postorder.length - 1;
//         const val = postorder[curIndex];
//         const root = new TreeNode(val);
//         const nodeInOrderIndex = inorder.indexOf(val);
//         const leftIndex = nodeInOrderIndex - 1;
//         let hasLeft = false, hasRight = false;
//         if (leftIndex >= 0) {
//             hasLeft = true;
//             if (postorder[curIndex - 1] === inorder[leftIndex]) {
//                 hasRight = false;
//             } else {
//                 hasRight = true;
//             }
//         } else {
//             hasLeft = false;
//             hasRight = true;
//         }
//         if (hasLeft) {
//             let tempIndex = postorder.indexOf(inorder[leftIndex]);
//             root.left = createNode(inorder, postorder.slice(0, postorder.indexOf(inorder[leftIndex]) + 1));
//             postorder[tempIndex] = undefined;
//         }else {
//             root.left = null;
//         }
//         postorder = postorder.filter(i => i);
//         root.right = hasRight? createNode(inorder, postorder.slice(0, postorder.length - 1)): null;
//
//         return root;
//     }
//
//     const r = createNode(inorder, postorder);
//     return r;
// };

var buildTree = function (inorder, postorder) {
    function createNode(inorder, postorder) {
        if (!inorder.length || !postorder.length) {
            return null;
        }
        if (inorder.length === 1) {
            return new TreeNode(inorder[0]);
        }
        let curIndex = postorder.length - 1;
        const val = postorder.pop();
        const root = new TreeNode(val);
        const nodeInOrderIndex = inorder.indexOf(val);
        const inorderLeft = inorder.slice(0, nodeInOrderIndex);
        const inorderRight = inorder.slice(nodeInOrderIndex + 1 , inorder.length);
        // root.left = createNode(inorderLeft, postorder.slice(0, inorderLeft.length));
        // root.right = createNode(inorderRight, postorder.slice(inorderLeft.length , postorder.length - 1));
        root.left = createNode(inorderLeft, postorder);
        root.right = createNode(inorderRight, postorder);
        return root;
    }

    const r = createNode(inorder, postorder);
    return r;
};

// var buildTree = function (inorder, postorder) {
//     const result = [];
//     for (let k =0 ;k< postorder.length;k++) {
//         let root = postorder[k];
//         result.push(root);
//         let hasLeft = false;
//         let hasRight = false;
//         const leftIndex = inorder.indexOf(root);
//         if (leftIndex > 0) {
//             hasLeft = true;
//             if (postorder[k-1] === inorder[inorder.indexOf(root) - 1]) {
//                 hasRight = false;
//             } else {
//                 hasRight = true;
//             }
//         } else {
//             hasLeft = false;
//             hasRight = true;
//         }
//         result.push(hasLeft ?  inorder[inorder.indexOf(root) - 1]: null);
//         result.push(hasRight? postorder[k-1]: null);
//     }
// }
const r = buildTree([9,3,15,20,7],[9,15,7,20,3])
console.log(r);
console.log('rr',preorderTraversal(r));

