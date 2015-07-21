/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  // define i for position, size for total length, result for final output
  var i = 0, size = nums.length, result = [];
  // while position is not over the size
  while(i < size){
    // get current position to current, item convert from number to string
    var current = i, item = nums[i].toString();
    // if it's still in the range, and the difference between the current and next item is 1
    while( i+1 < size && (nums[i+1] - nums[i] === 1)){
      // increment the position
      i += 1;
    }
    // if i is greater than the original current, there is a range
    if(i > current){
      // get the range string
      item += "->" + nums[i].toString();
    }
    // push the range string to result
    result.push(item);
    // increment i to the next position
    i += 1;
  }
  return result;
};

console.log(summaryRanges([0,1,2,4,5,7]));
