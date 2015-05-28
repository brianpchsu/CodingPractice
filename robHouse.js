/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  var even = 0, odd = 0;
  for(var i = 0; i < nums.length; i++){
    if(i % 2 === 0){
      even += nums[i];
      // console.log("before max even", even);
      even = Math.max(even, odd);
      // console.log("after max even", even);
    } else {
      odd += nums[i];
      // console.log("before max odd", odd);
      odd = Math.max(even, odd);
      // console.log("after max odd", odd);
    }
  }
  return Math.max(even, odd);
};

console.log(rob([50,1,1,50]));
console.log(rob([2,1,6,5]));
