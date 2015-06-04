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
// Tree definition
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var isBalanced = function(root) {
  // define helper function, put this inside for faster performance
  var depth = function(node){
    // if node is null, then depth is 0
    if(node === null){
      return 0;
    }
    // check child node's depth
    var left = depth(node.left);
    var right = depth(node.right);
    // if either of the child node is already -1 (not balanced), return -1 (no need to compare)
    if(left < 0 || right < 0){
      return -1;
    }
    // if left and right's depth difference is greater than 1, return -1
    if(Math.abs(left - right) > 1){
      return -1;
    }
    // return bigger one of child's depth + 1 (child null depth is 0)
    return Math.max(left, right) + 1;
  }
  // check if the root's depth is greater than 0
  return depth(root) >= 0;
};


