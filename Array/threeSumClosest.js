/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  var result = 0, minDiff = Infinity;
  // if there is less than 3 items in the array, no way to have 3Sum
  if(!nums || nums.length <3) return result;
  // sort the array
  nums = nums.sort(function(a,b){
    return a-b;
  });

  for(var i = 0; i < nums.length; i++){
    // checking the remaining element from the next element of i and the end
    var start = i+1, end = nums.length-1;
    while(start < end){
      var sum = nums[i] + nums[start] + nums[end];
      // if we found the right two elements, push it to result
      if(sum === target){
        minDiff = 0;
        result = sum;
        break;
        // if twoSum is not big enough, increment the start
      } else if(sum < target){
       if(target - sum < minDiff){
        minDiff = target - sum;
        result = sum;
       }
       start++;
        // if twoSum to bigger than twoSumTarget, decrement the end
      } else {
        if(sum - target < minDiff){
          minDiff = sum - target;
          result = sum;
        }
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
