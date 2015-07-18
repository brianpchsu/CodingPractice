/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  // edge case, if either of the node is null, return null
  if(!root || !p || !q) return null;
  // if both p and q are smaller than root, LCA must be in the left branch of root
  if(Math.max(p.val, q.val) < root.val){
    return lowestCommonAncestor(root.left, p, q);
    // if both p and q are larger than root, LCA must be in the right branch of root
  } else if (Math.min(p.val, q.val) > root.val){
    return lowestCommonAncestor(root.right, p, q);
    // else if p is smaller and q is larger than root (vise versa), then root is LCA
  } else {
    return root;
  }
};
