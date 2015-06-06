/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  // define pointer for both array starting from the end
  // index pointer updated from the end of nums1
  var i = m - 1, j = n -1, index = m + n -1;
  // while both index are greater than 0
  while( i >= 0 && j >= 0 ){
    // update the end of nums1 with the bigger element
    if(nums1[i] > nums2[j]){
      nums1[index--] = nums1[i--];
    } else {
      nums1[index--] = nums2[j--];
    }
  }
  // if there is still elements left in nums1, update the remaining with nums1 elements
  while( i >= 0){
    nums1[index--] = nums1[i--];
  }
  // if there is still elements left in nums1, update the remaining with nums1 elements
  while( j >= 0){
    nums1[index--] = nums2[j--];
  }
};
