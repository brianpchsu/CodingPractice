/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  var i = 0, size = nums.length, result = [];
  while(i < size){
    var current = i, item = nums[i].toString();
    while( i+1 < size && (nums[i+1] - nums[i] === 1)){
      i += 1;
    }
    if(i > current){
      item += "->" + nums[i].toString();
    }
    result.push(item);
    i += 1;
  }
  return result;
};

console.log(summaryRanges([0,1,2,4,5,7]));
