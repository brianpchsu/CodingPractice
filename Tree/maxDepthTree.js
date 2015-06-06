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
  if(!root) return 0;
  if(!root.left) return maxDepth(root.right) + 1;
  if(!root.right) return maxDepth(root.left) + 1;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
