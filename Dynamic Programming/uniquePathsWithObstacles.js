/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  if(obstacleGrid[0][0] === 1) return 0;
  var result = [], row = obstacleGrid.length, col = obstacleGrid[0].length;

  result[0] = [];
  result[0][0] = 1;
  for(var i = 1; i < row; i++){
    result[i] = [];
    result[i][0] = obstacleGrid[i][0] === 1? 0: result[i-1][0];
  }
  for(var j = 1; j < col; j++){
    result[0][j] = obstacleGrid[0][j] === 1? 0: result [0][j-1];
  }
  for(var i = 1; i < row; i++){
    for(var j = 1; j < col; j++){
      if(obstacleGrid[i][j] === 1){
        result[i][j] = 0;
      } else {
        result[i][j] = result[i-1][j] + result[i][j-1];
      }
    }
  }
  return result[row-1][col-1];
};

var x = [[0,1,0,0,0],[1,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];

console.log(uniquePathsWithObstacles(x));
