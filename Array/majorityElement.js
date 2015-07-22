/**
 * @param {number[]} nums
 * @return {number}
 */
// Solution 1: using hashmap O(2n)
var majorityElement = function(nums) {
  // define a hashmap
  var map = {};
  // iterate through array and record the occurance of each number
  for(var i = 0; i < nums.length; i++){
    if(map[nums[i]]){
      map[nums[i]]++;
    } else {
      map[nums[i]] = 1;
    }
  }
  // go over each number and return the majority key in the hashmap
  for(var key in map){
    if(map[key] > nums.length/2){
      return parseInt(key);
    }
  }
};

// Solution 2: since majority element occur more than n/2 times,
// after we sort the array, the middle element will be the majority one
var majorityElement = function(nums) {
  return nums.sort()[Math.floor(nums.length/2)];
};

console.log(majorityElement([1, 1, 2, 4, 1]));
