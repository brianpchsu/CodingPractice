/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  var start = 0, end = height.length -1;
  var maxVolume = -Infinity;
  while(start < end){
    var contain = Math.min(height[end], height[start]) * (end - start);
    maxVolume = Math.max(maxVolume, contain);
    if(height[start] <= height[end]){
      start++;
    } else {
      end--;
    }
  }
  return maxVolume;
};

console.log(maxArea([1,2,3,1]));
