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
  // define result array and stack for tracking
  var result = [], stack = [];
  // if root is empty, return result
  if(!root) return result;
  // push the root to stack as beginning state
  stack.push(root);
  // keep the while loop if there is element in the stack
  while(stack.length >0){
    // get the last element from stack
    var top = stack.pop();
    // record the value to result
    result.push(top.val);
    // record right and left to stack, right first because stack is FILO
    if(top.right) stack.push(top.right);
    if(top.left) stack.push(top.left);
  }
  // return the final val result
  return result;
};


