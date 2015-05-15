/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums, starting) {
  var starting = starting || 0;
  var index = Math.floor(nums.length/2);

  if(nums[index] > nums[index-1] && nums[index] > nums[index+1]){
    return starting + index;
  } else if (nums[index] < nums [index - 1]){
    var newArr = nums.slice(0, index);
    return findPeakElement(newArr, starting);
  } else if (nums[index] < nums[index + 1]){
    starting = starting + index;
    var newArr = nums.slice(index);
    return findPeakElement(newArr, starting);
  }
  return starting + index;
};

console.log(findPeakElement([3,2, 3, 4, 1]));
