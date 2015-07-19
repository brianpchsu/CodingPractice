/**
 * @param {number} n
 * @return {boolean}
 */
// 1st solution, use left shift to compare, the power of two would have binary number starting with 1 (and 0 afterward)
var isPowerOfTwo = function(n) {
  // negative number couldn't be the result of power of two
  if(n < 0) return false;
  // use bit starting from 1
  var bit = 1;
  // if n is bigger than bit, left shift bit
  while(n > bit){
    bit <<= 1;
  }
  // after left shift ends, check if the two numbers are the same
  if(n === bit){
    return true;
  }
  // othewise if two numbers are not the same, n is not power of two
  return false;
};

// 2nd solution, use bitwise solution, if n is power of two,
// then the highest digit is 1 and the rest is 0
// n-1 highest digit will be 0 and the rest be 1
// perform bitwise & will get the result 0

var isPowerOfTwo = function(n) {
  return n > 0 && (n &(n-1)) ===0;
};

console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(4));
console.log(isPowerOfTwo(9));
