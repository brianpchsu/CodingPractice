/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  var result = [], stack = [];
  if(!root) return result;
  stack.push(root);
  while(stack.length >0){
    var top = stack.pop();
    result.push(top.val);
    if(top.right) stack.push(top.right);
    if(top.left) stack.push(top.left);
  }
  return result;
};


