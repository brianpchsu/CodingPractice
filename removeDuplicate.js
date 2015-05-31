/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if(nums.length < 2) return nums.length;
  var index = 1, arrLength = nums.length;
  for(var i = 1; i < arrLength; i++){
    if(nums[i] !== nums[i-1]){
      nums[index] = nums[i];
      index++;
    }
  }
  return index;
};

console.log(removeDuplicates([1,1,2]));
console.log(removeDuplicates([1,1,1]));
