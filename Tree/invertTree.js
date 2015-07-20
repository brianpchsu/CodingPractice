/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// recursive
var invertTree = function(root) {
  if(!root) return null;
  var temp = root.left;
  root.left = invertTree(root.right);
  root.right = invertTree(temp);
  return root;
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

// iterative
var invertTree = function(root){
  if(!root) return null;
  var queue = [root];
  while(queue){
    var front = queue.shift();
    // console.log("front is ", front);
    if(front.left){
      queue.push(front.left);
    }
    if(front.right){
      queue.push(front.right);
    }
    var temp = front.left;
    front.left = front.right;
    front.right = temp;
  }
  return root;
};

var root = new TreeNode(0);
root.left = new TreeNode(1);
root.right = new TreeNode(2);
console.log(invertTree(root));
