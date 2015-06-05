/**
 * @param {number} n
 * @return {number}
 */
// recursive, exceed time limit
// var climbStairs = function(n) {
//   if(n < 3) return n;
//   return climbStairs(n-1) + climbStairs(n-2);
// };

// dynamic
var climbStairs = function(n) {
  // define record array to fill the array
  var record = new Array(n+1);
  // define the initial base case
  // only 1 way to climb 1 stair, 2 way to climb 2 stairs
  record[1] = 1;
  record[2] = 2;
  // for the following stais, it needs to be the combination from the i-1 and i-2
  for(var i = 3; i <= n; i++){
    record[i] = record[i-1] + record[i-2];
  }
  // return the n stairs result
  return record[n];
};

// extend to climb 3 stairs
var climb3Stairs = function(n) {
  // define record array to fill the array
  var record = new Array(n+1);
  // define the initial base case
  // only 1 way to climb 1 stair, 2 way to climb 2 stairs
  record[1] = 1;
  record[2] = 2;
  record[3] = 4;
  // for the following stais, it needs to be the combination from the i-1, i-2, i-3
  for(var i = 4; i <= n; i++){
    record[i] = record[i-1] + record[i-2] + record[i-3];
  }
  // return the n stairs result
  return record[n];
};

console.log(climb3Stairs(5));
