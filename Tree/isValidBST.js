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
  // if root is null, then return true
  if (!root) return true;
  // get minimun and maxmium value from input or default (Infinity and -Infinity)
  var minValue = min || -Infinity, maxValue = max || Infinity;
  // if current root value is less than minValue or greater than maxValue, not a valid BST
  if(root.val <= minValue || root.val >= maxValue){
    return false;
  }
  // check the left and right branch using the current root value as new boundry
  return isValidBST(root.left, minValue, root.val) && isValidBST(root.right, root.val, maxValue);
};


// Solution 2, separate the checkBST out, somehow this method cause wrong answer
var checkBST = function(node, min, max){
  if (!node) return true;
  if(node.val <= min || node.val >= max){
    return false;
  }
  return checkBST(node.left, min, node.val) && isValidBST(node.right, node.val, max);
};

var isValidBST = function(root) {
  return checkBST(root, -Infinity, Infinity);
};
