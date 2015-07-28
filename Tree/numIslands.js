/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  // if the grid is null, or there is no data inside, return 0
  if(!grid || grid.length === 0 || grid[0].length ===0) return 0;
  // define the final result count
  var result = 0;

  // one iteration of the grid
  for(var i = 0; i < grid.length; i++){
    for(var j = 0; j < grid[0].length; j++){
      // if there is a '1', increment the count, merge the nearby island by recursion
      if(grid[i][j] === '1'){
        result++;
        merge(grid, i, j);
      }
    }
  }
  // return the result
  return result;
};

// helper function for merge island
var merge = function(grid, i, j){
  // if the position is out of the boundry, just return
  if(i < 0 || j < 0 || i > grid.length-1 || j > grid[0].length -1) return;
  // if the grid at the position is not '1', return as well
  if(grid[i][j] !== '1') return;

  // set the current one to 0
  grid[i][j] = '0';
  // set the adjacent one to 0 as well
  merge(grid, i-1, j);
  merge(grid, i+1, j);
  merge(grid, i, j-1);
  merge(grid, i, j+1);
};
