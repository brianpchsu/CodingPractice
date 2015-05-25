/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  var occurance = {};
  for(var i = 0; i < nums.length; i++){
    occurance[nums[i]] = occurance[nums[i]] + 1 || 1;
  }
  for(var key in occurance){
    if(occurance[key] > 1){
      return true;
    }
  }
  return false;
};


console.log(containsDuplicate([1,2,3,1]))
