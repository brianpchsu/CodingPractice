/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if(nums.length < 2) return nums.length;
  var index = 0, count = 0;
  for(var i = 0; i < nums.length; i++){
    if(i > 0 && nums[i] === nums[i-1]){
      count++;
      if(count > 2){
        continue;
      }
    } else {
        count = 1;
    }
    nums[index++] = nums[i];
  }
  return index;
};

console.log(removeDuplicates([1,1,1]))
console.log(removeDuplicates([1,1,2,2,2]))

var x = 0;
console.log("x", x++);
