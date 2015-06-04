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

// recursive solution
var minDepth = function(root) {
  // if root is null, then return 0
  if(!root){
    return 0;
  }
  // if left node is null, check the right node branch
  if(!root.left){
    return minDepth(root.right)+1;
  }
  // if right node is null, check the left node branch
  if(!root.right){
    return minDepth(root.left)+1;
  }
  // return the min of two branches
  return Math.min(minDepth(root.left), minDepth(root.right))+1;
};
