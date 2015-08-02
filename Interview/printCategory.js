// print a list of categories and sub-categories given an array of tuples
// print that in the DOM as nested lists
// [['parent', 'child'],['child','grandChild'],['parent','secondChild'], ['secondChild','secondgrandChild']]

var printCategories = function(inputArr, root){
  var record = {}, order = {};
  for(var i = 0; i < inputArr.length; i++){
    if(!record[inputArr[i][0]]){
      order[inputArr[i][0]] = order[inputArr[i][0]];
      order[inputArr[i][1]] = 1;
      record[inputArr[i][0]] = [inputArr[i][1]];
    } else {

      record[inputArr[i][0]].push(inputArr[i][1]);
    }
  }
  return record;
};
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
var printCategories = function(inputArr, root){
  var result = [];
  root = root || null;
  inputArr.forEach(function(node){
    if(node[0] === root){

    }
  });
  return result;
};

console.log(printCategories([['parent', 'child'],['child','grandChild'],['parent','secondChild'], ['secondChild','secondgrandChild']]));

