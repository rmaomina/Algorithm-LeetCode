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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
  const hash = {};
  
  function traverse(node) {
    if (!node) return false;
    if (hash[k - node.val]) return true;
    hash[node.val] = true;
    return traverse(node.left) || traverse(node.right);
  }
  
  return traverse(root);
};