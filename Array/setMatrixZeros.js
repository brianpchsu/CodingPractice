/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// Solution 1, update in place
var setZeroes = function(matrix) {
  // store row and column length
  var rowLength = matrix.length, colLength = matrix[0].length;
  // if row length is 0, then don't need to do anything, just return
  if(rowLength < 1) return;
  // variable to check first row and first column's zero situation
  var firstRowWithZero = false, firstColWithZero = false;
  // check first col's zero
  for(var i = 0; i < rowLength && !firstColWithZero; i++){
    if(matrix[i][0] === 0) {
      firstColWithZero = true;
      break;
    }
  }
  // check first row's zero
  for(var j = 0; j < colLength && !firstRowWithZero; j++){
    if(matrix[0][j] === 0) {
      firstRowWithZero = true;
      break;
    }
  }
  // start from 1, if there is a zero, store that information in 0th row and 0th col
  for(var i = 1; i < rowLength; i++){
    for(var j = 1; j < colLength; j++){
      if(matrix[i][j] === 0){
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }
  // update the matrix by the info we stored in the last process
  for(var i = 1; i < rowLength; i++){
    for(var j = 1; j < colLength; j++){
      if(matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }
  // final update with the first column
  if(firstColWithZero){
    for(var i = 0; i < rowLength; i++){
      matrix[i][0] = 0;
    }
  }
  // final update with the first row
  if(firstRowWithZero){
    for(var j = 0; j < colLength; j++){
      matrix[0][j] = 0;
    }
  }
};

// Solution 2, use extra space
var setZeroes = function(matrix) {
  var rowLength = matrix.length, colLength = matrix[0].length;
  if(rowLength < 1) return;
  var rowRecorder = new Array(rowLength);
  var colRecorder = new Array(colLength);

  for(var i = 0; i < rowLength; i++){
    for(var j = 0; j < colLength; j++){
      if(matrix[i][j] === 0){
        rowRecorder[i] = true, colRecorder[j] = true;
      }
    }
  }
  for(var i = 0; i < rowLength; i++){
    for(var j = 0; j < colLength; j++){
      if(rowRecorder[i] || colRecorder[j]){
        matrix[i][j] = 0;
      }
    }
  }
};


var matrix = [[1,2,3,4],[5,0,5,2],[8,9,2,0],[5,7,2,1]];
setZeroes(matrix);
console.log(matrix);
