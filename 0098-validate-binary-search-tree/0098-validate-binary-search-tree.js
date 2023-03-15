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

var checkIfValid = function(root, min, max) {
  // 말단 노드까지 검사가 끝났다면 true를 반환
  if (root === null) return true;

  // 오른쪽 노드를 탐색할 때 min를 업데이트하면서 
  // min보다 큰지 확인 
  if (min !== null && root.val <= min) {
    return false;
  }

  // 왼쪽 노드를 탐색할 때 max를 업데이트하면서 
  // max보다 작은지 확인
  if (max !== null && root.val >= max) {
    return false;
  }

  return checkIfValid(root.left, min, root.val) && checkIfValid(root.right, root.val, max);
}

var isValidBST = function(root) {
  return checkIfValid(root, null, null);
};
