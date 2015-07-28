/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if(!grid || grid.length === 0 || grid[0].length ===0) return 0;
  var result = 0;
  for(var i = 0; i < grid.length; i++){
    for(var j = 0; j < grid[0].length; j++){
      if(grid[i][j] === '1'){
        result++;
        merge(grid, i, j);
      }
    }
  }
  return result;
};

var merge = function(grid, i, j){
  if(i < 0 || j < 0 || i > grid.length-1 || j > grid[0].length -1) return;
  if(grid[i][j] !== '1') return;

  grid[i][j] = '0';
  merge(grid, i-1, j);
  merge(grid, i+1, j);
  merge(grid, i, j-1);
  merge(grid, i, j+1);
};
