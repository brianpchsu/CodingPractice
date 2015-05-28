/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  // use even and odd to track
  var even = 0, odd = 0;
  // iterate through each element in the array
  for(var i = 0; i < nums.length; i++){
    // if i is at even position
    if(i % 2 === 0){
      // add number to even
      even += nums[i];
      // console.log("before max even", even);
      // update even by comparing even and odd so far
      even = Math.max(even, odd);
      // console.log("after max even", even);
    } else {
      // add number to odd
      odd += nums[i];
      // console.log("before max odd", odd);
      // update odd by comparing even and odd
      odd = Math.max(even, odd);
      // console.log("after max odd", odd);
    }
  }
  // return the max value of even and odd
  return Math.max(even, odd);
};

console.log(rob([50, 50, 10, 1]));
console.log(rob([50,1, 1, 50]));
console.log(rob([2, 1, 6, 5]));
