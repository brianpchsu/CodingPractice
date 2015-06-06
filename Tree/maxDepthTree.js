/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var maxDepth = function(root) {
  // if root is null, reach leaf, return 0 level
  if(!root) return 0;
  // if either left or right branch is null, check the other side of branch, add this level 1 to the calculation
  if(!root.left) return maxDepth(root.right) + 1;
  if(!root.right) return maxDepth(root.left) + 1;
  // if both branches exist, check the max of the branch
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
