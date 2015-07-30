/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// Solution 1, Time Limit Exceeded
// var uniquePaths = function(m, n) {
//   if(m ===1 || n ===1) return 1;
//   return uniquePaths(m-1, n) +uniquePaths(m, n-1);
// };

// Solution 2, dynamic programming
var uniquePaths = function(m, n) {
  var result = [];
  for(var i = 0; i < m; i++){
    result[i] = [];
    result[i][0] = 1;
  }
  for(var j = 0; j < n; j++){
    result[0][j] = 1;
  }

  for(var i = 1; i < m; i++){
    for(var j = 1; j < n; j++){
      result[i][j] = result[i-1][j] + result[i][j-1];
    }
  }
  return result[m-1][n-1];
};

console.log(uniquePaths(3,3));
