/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  // define pointer for result array's current location
  var pointer = 0;
  for(var i = 0; i < nums.length; i++){
    // if nums[i] is target
    if(nums[i] === val){
      // go to next iteration
      continue;
    }
    // if nums[i] is not target, save that element to result's current pointer
    nums[pointer] = nums[i];
    // increment pointer location
    pointer++;
  }
  return pointer;
};

console.log(removeElement([1,2,3], 1))
