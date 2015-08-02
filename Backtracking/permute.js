
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// Solution 1 recursive
var helper = function(nums, used, item, result){
  if(item.length === nums.length){
    // console.log("push item", item);
    result.push(item.slice());
    // console.log("result", result);
    return;
  }
  for(var i = 0; i < nums.length; i++){
    if(!used[i]){
      used[i] = true;
      item.push(nums[i]);
      // console.log("item", item);
      helper(nums, used, item, result);
      item.pop();
      used[i] = false;
    }
  }
};

// var permute = function(nums) {
//   if(nums.length <= 1 ) return [nums];
//   var result = [];
//   helper(nums, [], [], result);
//   return result;
// };

// Solution 2 iterative
var permute = function(nums) {
  if(nums.length <= 1) return [nums];
  result = [[nums[0]]];

  for(var i = 1; i < nums.length; i++){
    var newResult = [];
    for(var j = 0; j < result.length; j++){
      var current = result[j];
      for(var k = 0; k <= current.length; k++){
        console.log("var current", current);
        var item = current.slice();
        item.splice(k, 0, nums[i]);
        console.log("item", item);
        newResult.push(item.slice());
        console.log("newResult", newResult);
      }
    }
    result = newResult;
    console.log("result", result);
  }
  return result;
};
// console.log(permute([1]));
console.log(permute([1,2]));
// console.log(permute([1,2,3]));
