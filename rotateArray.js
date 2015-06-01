/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var rotate = function(nums, k) {
//   // define arrayLength for later use
//   var arrayLength = nums.length;
//   // make sure k is in the range of 0 to n-1
//   k = k % arrayLength;
//   // edge case, if k is 0 or negative, return
//   if(k <= 0){
//     return;
//   }
//   // reverse original array
//   reverseArray(nums, 0, arrayLength - 1);
//   // reverse first half of array, first k elements
//   reverseArray(nums, 0, k-1);
//   // reverse second half of array, n-k elements
//   reverseArray(nums, k, arrayLength-1);
// };

// // helper function to rotate array with starting and ending position
// var reverseArray = function(array, start, end){
//   //reverse element from start to end position
//   while(start < end){
//     var temp = array[start];
//     array[start] = array[end];
//     array[end] = temp;
//     start++;
//     end--;
//   }
// }

var rotate = function(nums, k){
  var arrayLength = nums.length;
  var index = 0, distance = 0, current = nums[0];
  for(var i = 0; i < arrayLength; i++){
    var next = (index + k) % arrayLength;
    temp = nums[next];
    nums[next] = current;
    index = next;
    current = temp;
    distance = (distance + k) % arrayLength;
    if(!distance) {
      index = (index + 1) % arrayLength;
      current = nums[index];
    }
  }
  return nums;
}

console.log(rotate([1,2,3,4,5,6,7], 4));
console.log(rotate([1,2], 1));
