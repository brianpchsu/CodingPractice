/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  // if nums length is 0 or 1, return the length (no duplicate)
  if(nums.length < 2) return nums.length;
  // initiate index, and count
  var index = 0, count = 0;
  // iterate through the array
  for(var i = 0; i < nums.length; i++){
    // if not in the beginning position and the near elements are the same
    if(i > 0 && nums[i] === nums[i-1]){
      // increment the count
      count++;
      // if the count is greater than 2, jump to next element iteration
      if(count > 2){
        continue;
      }
      // if i = 0 or near element is not the same, initiate count to 1
    } else {
        count = 1;
    }
    // unless count > 2, otherwise, update the nums[index] with nums[i], increment index
    nums[index++] = nums[i];
  }
  // return the index (with no more than 2 duplicate)
  return index;
};

console.log(removeDuplicates([1,1,1]))
console.log(removeDuplicates([1,1,1, 2,2,2]))
