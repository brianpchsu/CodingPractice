/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  // define result
  var result = [];
  // edge case, if n is less than 0 or n is less than k, just return
  if(n <= 0 || n < k){
    return result;
  }
  // define initial item array
  var item = [];
  // start from number 1 to do dfs
  dfs(n, k, 1, item, result);
  return result;
};

// helper function for recursive call
var dfs = function(n, k, start, item, result){
  // if accumulative length reach k, then make a copy and push to result
  if(item.length === k){
    result.push(item.slice());
    // return the function to save performance
    return;
  }
  // iterate from the start to n
  for(var i = start; i <= n; i++){
    // add start number to item
    item.push(i);
    // make recursive call with increment start
    console.log("pushed item", item);
    dfs(n, k, i+1, item, result);
    // after reaching the end, pop out the last one
    item.pop();
  }
};

console.log(combine(4,2));
// console.log(combine(4,3));
