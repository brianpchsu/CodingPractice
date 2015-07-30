/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  // if the initial grid is 1, then no need to do the calculation
  if(obstacleGrid[0][0] === 1) return 0;
  // define the result, row, and col for iteration
  var result = [], row = obstacleGrid.length, col = obstacleGrid[0].length;
  // initiate the 0th row, and define the begining grid
  result[0] = [], result[0][0] = 1;
  // initiate each column in the 0th row
  for(var j = 1; j < col; j++){
    // if the obstacleGrid[0][j] is 1, then no way to go there (0), otherwise, the grid num was the same as the last column
    result[0][j] = obstacleGrid[0][j] === 1? 0: result [0][j-1];
  }
  // initiate each row and define the 0th column of each row
  for(var i = 1; i < row; i++){
    result[i] = [];
    // if the obstacleGrid[i][0] is 1, then no way to go there (0), otherwise, the grid num was the same as the last row
    result[i][0] = obstacleGrid[i][0] === 1? 0: result[i-1][0];
  }
  // in the middle of the grid
  for(var i = 1; i < row; i++){
    for(var j = 1; j < col; j++){
      // if there is obstacle, then the grid result is 0
      if(obstacleGrid[i][j] === 1){
        result[i][j] = 0;
      } else {
        // otherwise, the grid is the combination of the upper grid and the left grid
        result[i][j] = result[i-1][j] + result[i][j-1];
      }
    }
  }
  return result[row-1][col-1];
};

var x = [[0,1,0,0,0],[1,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];

console.log(uniquePathsWithObstacles(x));
