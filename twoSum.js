/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}

 Given an array of integers, find two numbers such that they add up to a specific target number.

 The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.

 You may assume that each input would have exactly one solution.

 Input: numbers={2, 7, 11, 15}, target=9
 Output: index1=1, index2=2

 */

var twoSum = function(nums, target) {
  // Crate an tempMap object (for later constant time checking)
  var tempMap ={};
  // save all num to the tempMap
  for(var i = 0; i< nums.length; i++){
    tempMap[nums[i]] = i;
  }
  // Checking from the beginning
  for(var i = 0; i< nums.length; i++){
    // if there is a matching (target- current)
    if(tempMap[target-nums[i]]){
      // return the index
      return [ i+1, tempMap[target - nums[i]]+1];
    }
  }
};
