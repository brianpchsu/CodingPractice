/**
 * @param {number} rowIndex
 * @return {number[]}
 */
//
var getRow = function(rowIndex) {
  var result = [1];
  if(rowIndex < 1) return result;

  for(var i = 1; i <= rowIndex; i++){
    for( j = result.length-2; j>=0; j--){
      result[j+1] = result[j] + result[j+1];
    }
    result.push(1);
  }
  return result;
};

console.log(getRow(3));

// use PascalTriangle I method to get the row info
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
