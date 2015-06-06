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
  // if root is null, then it's symmetric
  if(!root) return true;
  // check if left and right branch are symmetric
  return checkBranchSymetric(root.left, root.right);
};

// helper function to check the left and right branch
var checkBranchSymetric = function(leftNode, rightNode){
  // if both branch are null, then it's symmetric
  if (!leftNode && !rightNode) return true;
  // if only one branch is null, then not symmetric
  if (!leftNode || !rightNode) return false;
  // check the value of both branch
  if(leftNode.val !== rightNode.val) return false;
  // check left and right branch's child branch
  return (checkBranchSymetric(leftNode.left, rightNode.right) && checkBranchSymetric(leftNode.right, rightNode.left));
};
