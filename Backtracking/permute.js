
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// Solution 1 recursive
// helper function for recursive call
var helper = function(nums, used, item, result){
  // base case, if the item's length is equal to the nums's length, then we want to record this item to result
  if(item.length === nums.length){
    // console.log("push item", item);
    result.push(item.slice());
    // console.log("result", result);
    return;
  }
  // not base case, iterate from the beginning to the end of nums
  for(var i = 0; i < nums.length; i++){
    // if the character is not used
    if(!used[i]){
      // set the used to true
      used[i] = true;
      // push the nums to the current built item
      item.push(nums[i]);
      // console.log("item", item);
      // recursive call for next build up
      helper(nums, used, item, result);
      // after all the iteration, pop the item out
      item.pop();
      // set the used to false for other combination
      used[i] = false;
    }
  }
};

var permute = function(nums) {
  // if nums has only 1 number or 0, return itself (in array)
  if(nums.length <= 1 ) return [nums];
  // define result
  var result = [];
  // use helper function to pass in nums, used character array, current built array, and result
  helper(nums, [], [], result);
  return result;
};

// Solution 2 iterative
var permute = function(nums) {
  if(nums.length <= 1) return [nums];
  result = [[nums[0]]];

  // iterate through the nums
  for(var i = 1; i < nums.length; i++){
    // define the new result for each nums's iteration
    var newResult = [];
    // will iterate through the current result
    for(var j = 0; j < result.length; j++){
      // get each result item
      var current = result[j];
      // for each result, the item will be added to every position (therefore, <= current.length)
      for(var k = 0; k <= current.length; k++){
        console.log("var current", current);
        // make a copy of current because current will change
        var item = current.slice();
        // add nums[i] to the k position
        item.splice(k, 0, nums[i]);
        console.log("item", item);
        // push item to newResult
        newResult.push(item.slice());
        console.log("newResult", newResult);
      }
    }
    // after update one letter to current result, update the result with newResult
    // for next letter
    result = newResult;
    console.log("result", result);
  }
  return result;
};
// console.log(permute([1]));
console.log(permute([1,2]));
// console.log(permute([1,2,3]));
