/**
 * @param {number[]} height
 * @return {number}
 */
// Complexity O(n)
var maxArea = function(height) {
  // define the default start and end point
  var start = 0, end = height.length -1;
  // define the maxVolume for comparison
  var maxVolume = -Infinity;
  // while the left hand side is less than right hand side, continue to check
  while(start < end){
    // contain volumen is equal to the lower height of the two points times the width
    var contain = Math.min(height[end], height[start]) * (end - start);
    // update the maxVolume if needed
    maxVolume = Math.max(maxVolume, contain);
    // if left hand side is lower than right hand side, move the left hand right, and look for higher left hand point
    if(height[start] <= height[end]){
      start++;
    // if right hand side is lower than left hand side, move the right hand left, and look for higher right hand point
    } else {
      end--;
    }
  }
  return maxVolume;
};

console.log(maxArea([1,2,3,1]));
