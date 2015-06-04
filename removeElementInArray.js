/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  var pointer = 0;
  for(var i = 0; i < nums.length; i++){
    if(nums[i] === val){
      continue;
    }
    nums[pointer] = nums[i];
    pointer++;
  }
  return pointer;
};

console.log(removeElement([1,2,3], 1))
