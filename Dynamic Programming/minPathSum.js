/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  // get the row and column number from grid
  var row = grid.length, col = grid[0].length;
  // define reuslt for recording sum for each grid
  var result = [];
  // initialize the 0th row, and insert the top left grid from original grid
  result[0] = [], result[0][0] = grid[0][0];
  // initialize each row and get sum the number from previous row (from result) with the current grid (from grid)
  for(var i = 1; i < row; i++){
    result[i] = [];
    result[i][0] = result[i-1][0] + grid[i][0];
  }
  // initialize each col and get sum the number from previous col (from result) with the current grid (from grid)
  for(var j = 1; j < col; j++){
    result[0][j] = result[0][j-1] + grid[0][j];
  }
  // for all grid not in the 0th row and col, the sum will take the minumun of the result (top and left) and the current grid
  for(var i = 1; i < row; i++){
    for(var j = 1; j < col; j++){
      result[i][j] = Math.min(result[i-1][j], result[i][j-1]) + grid[i][j];
    }
  }
  // return the final result grid
  return result[row-1][col-1];
};

var x = [[1,3,1],[1,5,1],[4,2,1]];
console.log(minPathSum(x));
