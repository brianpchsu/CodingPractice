/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  var width = height.length;
  if( width <= 2) return 0;
  var maxLeft = new Array(width), maxRight = new Array(width), max = height[0];

  for(var i = 1; i < width; i++){
    maxLeft[i] = max;
    if(max < height[i]){
      max = height[i];
    }
  }

  max = height[width-1];
  maxRight[width-1] = 0;
  var currentTrap = 0, totalTrap = 0;
  for(var i = width-2; i> 0; i--){
    maxRight[i] = max;
    currentTrap = Math.min(maxLeft[i], maxRight[i]);
    if(currentTrap > height[i]){
      totalTrap += currentTrap - height[i];
    }
    if(max < height[i]){
      max = height[i];
    }
  }
  return totalTrap;
};


console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
