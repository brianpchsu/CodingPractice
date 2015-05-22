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

var isBalanced = function(root) {
  var depth = function(node){
    if(node === null){
      return 0;
    }
    var left = depth(node.left);
    var right = depth(node.right);
    if(left < 0 || right < 0){
      return -1;
    }
    if(Math.abs(left - right) > 1){
      return -1;
    }
    return Math.max(left, right) + 1;
  }
  return depth(root) >= 0;
};


