/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  var result = [];
  // if there is less than 3 items in the array, no way to have 3Sum
  if(!nums || nums.length <3) return result;
  // sort the array
  nums = nums.sort(function(a,b){
    return a-b;
  });

  for(var i = 0; i < nums.length; i++){
    // get twoSumTarget by decrement the nums[i]
    var twoSumTarget = 0 - nums[i];
    // checking the remaining element from the next element of i and the end
    var start = i+1, end = nums.length-1;
    while(start < end){
      // if we found the right two elements, push it to result
      if(nums[start] + nums[end] === twoSumTarget){
        result.push([nums[i], nums[start], nums[end]]);
        start++, end--;
        // no need to do duplicate calculation
        while(start < end && nums[start] === nums[start-1]) start++;
        while(start < end && nums[end] === nums[end+1]) end--;
        // if twoSum is not big enough, increment the start
      } else if(nums[start] + nums[end] < twoSumTarget){
        start++;
        // if twoSum to bigger than twoSumTarget, decrement the end
      } else {
        end--;
      }
    }
    // if the next element is the same, move to the next one
    if(i < nums.length){
      while(nums[i] === nums[i+1]) i++;
    }
  }
  return result;
};


console.log(threeSum([-1,0,1,2,-1,-4]));
