/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  var result = [];
  if(n <= 0 || n < k){
    return result;
  }
  var item = [];
  dfs(n, k, 1, item, result);
  return result;
};

var dfs = function(n, k, start, item, result){
  if(item.length === k){
    result.push(item.slice());
  }
  for(var i = start; i <= n; i++){
    item.push(i);
    dfs(n, k, i+1, item, result);
    item.pop();
  }
};

console.log(combine(4,2));
