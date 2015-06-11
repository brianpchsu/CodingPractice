/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if(!preorder || !inorder) return null;
  var map = {};
  for(var i = 0; i < inorder.length; i++){
    map[inorder[i]] = i;
  }
  return helper(preorder, 0, preorder.length-1, inorder, 0, inorder.length-1, map);
};

var helper = function(preorder, preLeft, preRight, inorder, inLeft, inRight, map){
  if(preLeft > preRight || inLeft > inRight){
    return null;
  }
  var root = new TreeNode(preorder[preLeft]);
  var index = map[root.val];
  root.left = helper(preorder, preLeft+1, index - inLeft + preLeft, inorder, inLeft, index-1, map);
  root.right = helper(preorder, preLeft + index - inLeft + 1, preRight, inorder, index + 1, inRight, map);
  return root;
};

