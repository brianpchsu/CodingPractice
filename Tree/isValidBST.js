/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root, min, max) {
  if (!root) return true;
  var minValue = min || -Infinity, maxValue = max || Infinity;
  if(root.val <= min || root.val >= max){
    return false;
  }
  return isValidBST(root.left, minValue, root.val) && isValidBST(root.right, root.val, maxValue);
};

