/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  var arrayLength = nums.length;
  k = k % arrayLength;
  if(k <= 0){
    return;
  }
  reverseArray(nums, 0, arrayLength - 1);
  reverseArray(nums, 0, k-1);
  reverseArray(nums, k, arrayLength-1);
};

var reverseArray = function(array, start, end){
  while(start < end){
    var temp = array[start];
    array[start] = array[end];
    array[end] = temp;
    start++;
    end--;
  }
}

console.log(rotate([1,2,3,4,5,6,7], 4));
console.log(rotate([1,2], 1));
