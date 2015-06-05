/**
 * @param {number} n
 * @return {number}
 */
// recursive, exceed time limit
var climbStairs = function(n) {
  if(n < 3) return n;
  return climbStairs(n-1) + climbStairs(n-2);
};

// dynamic
var climbStairs = function(n) {
  if(n < 3) return n;
  var record = new Array(n+1);
  record[0] = 1;
  record[1] = 1;
  for(var i = 2; i <= n; i++){
    record[i] = record[i-1] + record[i-2];
  }
  return record[n];
};


