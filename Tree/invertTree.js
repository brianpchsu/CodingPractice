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
// recursive way
var invertTree = function(root) {
  if(!root) return null;
  // save root.left for later
  var temp = root.left;
  // root .left be update using root.right (also need to undergo inverTree for each subTree)
  root.left = invertTree(root.right);
  // root .right be update using root.left (also need to undergo inverTree for each subTree)
  root.right = invertTree(temp);
  return root;
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

// iterative way
var invertTree = function(root){
  if(!root) return null;
  // using queue (array for simplification)
  var queue = [root];
  // if there is item in the queue
  while(queue){
    // get the first item in the queue
    var front = queue.shift();
    // console.log("front is ", front);
    // save the item's left to queue
    if(front.left){
      queue.push(front.left);
    }
    // save the item's right to the queue
    if(front.right){
      queue.push(front.right);
    }
    // save front.left to temp for later
    var temp = front.left;
    // update front.left using front.right
    front.left = front.right;
    // update front.right using front.left (temp)
    front.right = temp;
  }
  return root;
};

var root = new TreeNode(0);
root.left = new TreeNode(1);
root.right = new TreeNode(2);
console.log(invertTree(root));
