/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  // if nums length is 0 or 1, return the length (no duplicate)
  if(nums.length < 2) return nums.length;
  // define index and arrayLength
  var index = 1, arrLength = nums.length;
  // iterate through the array
  for(var i = 1; i < arrLength; i++){
    // if current one is different than the previous one
    if(nums[i] !== nums[i-1]){
      // rewrite the index position element to the current i
      nums[index] = nums[i];
      // increment the index
      index++;
    }
  }
  // return the index (final distinct number)
  return index;
};

console.log(removeDuplicates([1,1,2]));
console.log(removeDuplicates([1,1,1]));
