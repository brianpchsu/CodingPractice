/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  // get the width of the bar
  var width = height.length;
  // if the width is less or equal to two, no place to trap water
  if( width <= 2) return 0;
  // use two array to record the max from the left and from the right
  var maxLeft = new Array(width), maxRight = new Array(width), max = height[0];

  // iterate through the array to record the max left
  for(var i = 1; i < width; i++){
    // save max to maxLeft at the position
    maxLeft[i] = max;
    // if the current height is greater than the max, update the max
    if(max < height[i]){
      max = height[i];
    }
  }
  // iterate from the right to the left, set max to the last element
  max = height[width-1];
  // define the currentTrap for each position and totalTrap for overall trap water
  var currentTrap = 0, totalTrap = 0;
  // iterate from the end to the beginning
  for(var i = width-2; i> 0; i--){
    // set the max to the right to the last element's height
    maxRight[i] = max;
    // current trap will be the minium of the maxLeft and maxRight (available to contain water)
    currentTrap = Math.min(maxLeft[i], maxRight[i]);
    // if the curretTrap is higher than the current position's height
    if(currentTrap > height[i]){
      // add the current trap to the total trap
      totalTrap += currentTrap - height[i];
    }
    // if current height is greater than the max, update the max
    if(max < height[i]){
      max = height[i];
    }
  }
  return totalTrap;
};


console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
