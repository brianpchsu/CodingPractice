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
function TreeNode(val) {
   this.val = val;
   this.left = this.right = null;
}

var isSymmetric = function(root) {
  if(!root) return true;
  return checkBranchSymetric(root.left, root.right);
};

var checkBranchSymetric = function(leftNode, rightNode){
  if (!leftNode && !rightNode) return true;
  if (!leftNode || !rightNode) return false;
  if(leftNode.val !== rightNode.val) return false;
  return (checkBranchSymetric(leftNode.left, rightNode.right) && checkBranchSymetric(leftNode.right, rightNode.left));
};
