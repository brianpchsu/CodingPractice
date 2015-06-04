/**
 * @param {number[]} nums
 * @return {boolean}
 */
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


console.log(containsDuplicate([1,2,3,1]))
