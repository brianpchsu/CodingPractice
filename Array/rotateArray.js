/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// first method, reverse whole array and sub array
var rotate = function(nums, k) {
  // define arrayLength for later use
  var arrayLength = nums.length;
  // make sure k is in the range of 0 to n-1
  k = k % arrayLength;
  // edge case, if k is 0 or negative, return
  if(k <= 0){
    return;
  }
  // reverse original array
  reverseArray(nums, 0, arrayLength - 1);
  // reverse first half of array, first k elements
  reverseArray(nums, 0, k-1);
  // reverse second half of array, n-k elements
  reverseArray(nums, k, arrayLength-1);
};

// helper function to rotate array with starting and ending position
var reverseArray = function(array, start, end){
  //reverse element from start to end position
  while(start < end){
    var temp = array[start];
    array[start] = array[end];
    array[end] = temp;
    start++;
    end--;
  }
}

// 2nd method, move each element to the righ with k distance
var rotate = function(nums, k){
  // define index, distance (for checking index 0 case), and current elem
  var arrayLength = nums.length;
  var index = 0, distance = 0, current = nums[0];
  // iterate through the array
  for(var i = 0; i < arrayLength; i++){
    // next is the position that current will be moved to
    var next = (index + k) % arrayLength;
    // save nums[next] as temp for next iteration
    temp = nums[next];
    nums[next] = current;
    index = next;
    current = temp;
    // define distance (same as next)
    distance = (distance + k) % arrayLength;
    // if distance === 0, repeat the initial condition
    // if it happen in the middle of iteration, then some element won't be update properly
    if(!distance) {
      index = (index + 1) % arrayLength;
      current = nums[index];
    }
  }
}

console.log(rotate([1,2,3,4,5,6], 2));
console.log(rotate([1,2], 1));
