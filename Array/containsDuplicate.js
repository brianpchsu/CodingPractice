/**
 * @param {number[]} nums
 * @return {boolean}
 */
// Solution O(2n)
var containsDuplicate = function(nums) {
  // define object for record occurance
  var occurance = {};
  // check each element in array, update occurance
  for(var i = 0; i < nums.length; i++){
    occurance[nums[i]] = occurance[nums[i]] + 1 || 1;
  }
  // check each key in occurance, return true if occured more than once
  for(var key in occurance){
    if(occurance[key] > 1){
      return true;
    }
  }
  // if no element occured more than once, no duplicate
  return false;
};

// Solution O(n)
var containsDuplicate = function(nums) {
  // define object for record occurance
  var occurance = {};
  // check each element in array, update occurance
  for(var i = 0; i < nums.length; i++){
    if(occurance[nums[i]]) {
      return true;
    } else {
      occurance[nums[i]] = 1;
    }
  }
  return false;
};

console.log(containsDuplicate([1,2,3,12]))
