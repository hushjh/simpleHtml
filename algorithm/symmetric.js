/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  check(root, root)
}
function check(left, right) {
  if (!left && !right) {
    // 遍历到最后，没有子节点了
    return true
  }
  if (!left || !right) {
    return false
  }
  return left === right && isSymmetric(left.left, right.right) && isSymmetric(left.right, right.left)
}
// [1,2,2,3,4,4,3]
//  var isSymmetric = function(root) {
//   var layerIndex = 0; // 哪一层树
//   var scope = Math.pow(2, layerIndex); // 每层树的元素个数, 0层开始
//   var cursor = 0; // 游标，初始指向每层树的首个元素
//   while((cursor + scope) <= root.length) {
//     if (!isSymmetricOneLayer(root.slice(cursor, cursor + scope))) {
//       return false;
//     } else {
//       cursor += scope; 
//       layerIndex++;
//       scope = Math.pow(2, layerIndex)
//     }
//   }
//   return true;
// };
// function isSymmetricOneLayer(layerData) {
//   let len = layerData.length
//   let start = 0;
//   let end = len - start - 1
//   while(start <= end) {
//     if (layerData[start] !== layerData[end]) {
//       return false;
//     } else {
//       start++;
//       end = len - start - 1
//     }
//   }
//   return true;
// }

