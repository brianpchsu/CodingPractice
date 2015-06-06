/**
 * @param {number} rowIndex
 * @return {number[]}
 */
// Time complexity O(n2), time complexity 1 d array
var getRow = function(rowIndex) {
  // define base condition
  var result = [1];
  // if rowIndex is 0, return base array
  if(rowIndex < 1) return result;
  // iterate from 1 to rowIndex
  for(var i = 1; i <= rowIndex; i++){
    // update array from the current result end to position 1
    for( j = result.length-2; j>=0; j--){
      // the new j+1 is combined from old j and j+1
      result[j+1] = result[j] + result[j+1];
    }
    // add additional 1 to the end
    result.push(1);
  }
  return result;
};

console.log(getRow(3));

// use PascalTriangle I method to get the row info
// time complexity O(n2), space complexity 2d array
// var getRow = function(rowIndex) {
//   var result = [];
//   var first = [1];
//   result.push(first);
//   if(rowIndex < 1) return result[0];
//   for(var i = 1; i <= rowIndex; i++){
//     var temp = new Array(i+1);
//     var prev = result[i-1];
//     temp[0] = 1, temp[i] = 1;
//     for(var j = 1; j < i; j++){
//       temp[j] = prev[j-1] + prev[j];
//     }
//     result.push(temp);
//   }
//   return result[rowIndex];
// };
