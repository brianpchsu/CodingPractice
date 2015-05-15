/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums, starting) {
  // define starting for future add reference index
  var starting = starting || 0;
  // index for checking the center point
  var index = Math.floor(nums.length/2);

  // if the center is greater than the neighbors, return that index + starting
  if(nums[index] > nums[index-1] && nums[index] > nums[index+1]){
    return starting + index;
    // if the center is less than the left side, cut the array in half and search the left side array
  } else if (nums[index] < nums [index - 1]){
    var newArr = nums.slice(0, index);
    return findPeakElement(newArr, starting);
    // if the center is less than the right side, cut the array in half and search the right side array
  } else if (nums[index] < nums[index + 1]){
    // remember to add the index to the next starting to maintain the index from original array
    starting = starting + index;
    var newArr = nums.slice(index);
    return findPeakElement(newArr, starting);
  }
  // if reaching the end of array and no previous condition meet, then return that index
  return starting + index;
};

console.log(findPeakElement([3,2, 3, 4, 1]));
