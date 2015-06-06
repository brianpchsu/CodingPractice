/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var isSameTree = function(p, q) {
  // if both node is null, ending situation, return true
  if(!p && !q) return true;
  // if only one node is null, not the same tree
  if(!p || !q) return false;
  // if node's value is not the same, return false;
  if(p.val !== q.val) return false;
  // compare the current node value and the left and right branch
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
