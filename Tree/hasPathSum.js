/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var hasPathSum = function(root, sum) {
  // if original root is null, return false (impossible)
  if(root === null){
    return false;
  }
  // if it's leaf, check if the root's val equal to current desired sum
  if(root.left === null && root.right === null){
    return sum === root.val;
  }
  // if it's the root or middle node, use recursion to check the remaining value
  return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
};
