/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  var result = [];
  if(!nums || nums.length <3) return result;
  nums = nums.sort(function(a,b){
    return a-b;
  });
  for(var i = 0; i < nums.length; i++){
    var twoSumTarget = 0 - nums[i];
    var start = i+1, end = nums.length-1;
    while(start < end){
      if(nums[start] + nums[end] === twoSumTarget){
        result.push([nums[i], nums[start], nums[end]]);
        start++, end--;
        while(start < end && nums[start] === nums[start-1]) start++;
        while(start < end && nums[end] === nums[end+1]) end--;
      } else if(nums[start] + nums[end] < twoSumTarget){
        start++;
      } else {
        end--;
      }
    }
    if(i < nums.length){
      while(nums[i] === nums[i+1]) i++;
    }
  }
  return result;
};


console.log(threeSum([-1,0,1,2,-1,-4]));
