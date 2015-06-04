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
  // Helper function to seach each node
  var searchTreeNode = function(node, level){
    // if node is empty, then return
    if(node === null) {
      return;
    } else {
      // if the result hasn't have the level array yet, creat one
      if(result.length < level+1){
        result[level] = [];
      }
      // update the result with node value
      result[level].push(node.val);
    }
    // checking node.left and node.right with increment level
    searchTreeNode(node.left, level+1);
    searchTreeNode(node.right, level+1);
  }
  // initial calling helper function with root and level 0
  searchTreeNode(root, 0);
  // reverse the result to show from bottom up
  return result.reverse();
};
