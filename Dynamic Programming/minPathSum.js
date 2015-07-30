/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  var row = grid.length, col = grid[0].length;
  var result = [];
  result[0] = [], result[0][0] = grid[0][0];
  for(var i = 1; i < row; i++){
    result[i] = [];
    result[i][0] = result[i-1][0] + grid[i][0];
  }
  for(var j = 1; j < col; j++){
    result[0][j] = result[0][j-1] + grid[0][j];
  }
  for(var i = 1; i < row; i++){
    for(var j = 1; j < col; j++){
      result[i][j] = Math.min(result[i-1][j], result[i][j-1]) + grid[i][j];
    }
  }
  return result[row-1][col-1];
};

var x = [[1,3,1],[1,5,1],[4,2,1]];
console.log(minPathSum(x));
