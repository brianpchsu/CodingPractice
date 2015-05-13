/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  // Copy the origin matrix to entry, so we won't mutate the original input
  var entry = matrix.slice();
  var result = [];
  // Get the first row of the array to result
  var getFirstRow = function(array){
    var firstRow = array.shift();
    if(firstRow === undefined) {return}
    for(var i = 0; i < firstRow.length; i++){
      result.push(firstRow[i]);
    }
    // For the remaining, rotate the array (right border to top first row)
    var remaining = transposeUpsidedown(array);
    // Get the first row of the remaining
    getFirstRow(remaining);
  }
  getFirstRow(entry);
  return result;
};

function transposeUpsidedown(oldArr){
  // Define newWidth through old array's height, new height through 1st row of array (need to consider edge case)
  var newWidth = oldArr.length? oldArr.length: 0,
      newHeight = oldArr[0] instanceof Array ? oldArr[0].length: 0,
      newArr = [];
  // if array is empty, return
  if(newHeight ===0 || newWidth ===0) { return [];}
  // create new array with new position
  for(var row = 0; row < newHeight; row++){
    newArr[row] = [];
    for(var col = 0; col< newWidth; col++){
      newArr[row][col] = oldArr[col][newHeight - row -1];
    }
  }
  return newArr;
}

var x = [
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ];
console.log(spiralOrder(x));
