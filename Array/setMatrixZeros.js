/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  var rowLength = matrix.length, colLength = matrix[0].length;
  if(rowLength < 1) return;
  var firstRowWithZero = false, firstColWithZero = false;

  for(var i = 0; i < rowLength && !firstColWithZero; i++){
    if(matrix[i][0] === 0) {
      firstColWithZero = true;
    }
  }
  for(var j = 0; j < colLength && !firstRowWithZero; j++){
    if(matrix[0][j] === 0) {
      firstRowWithZero = true;
    }
  }
  for(var i = 0; i < rowLength; i++){
    for(var j = 0; j < colLength; j++){
      if(matrix[i][j] ===[0]){
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  for(var i = 1; i < rowLength; i++){
    for(var j = 1; j < colLength; j++){
      if(matrix[i][0] === 0) {
        matrix[i][j] = 0;
      } else if (matrix[0][j] === 0){
        matrix[i][j] = 0;
      }
    }
  }
  if(firstColWithZero){
    for(var i = 0; i < rowLength; i++){
      matrix[i][0] = 0;
    }
  }
  if(firstRowWithZero){
    for(var j = 0; j < colLength; j++){
      matrix[0][j] = 0;
    }
  }
};

var matrix = [[1,2,3,4],[5,0,5,2],[8,9,2,0],[5,7,2,1]];
setZeroes(matrix);
console.log(matrix);
