/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function TreeNode(val) {
   this.val = val;
   this.left = this.right = null;
}

var levelOrderBottom = function(root) {
  var result = [];
  var searchTreeNode = function(node, level){
    if(node === null) {
      return;
    } else {
      if(result.length < level+1){
        result[level] = [];
      }
      result[level].push(node.val);
    }
    searchTreeNode(node.left, level+1);
    searchTreeNode(node.right, level+1);
  }
  searchTreeNode(root, 0);
  return result.reverse();
};
