/**
 * @param {number} x
 * @return {boolean}
 */
// use reverse function to help reverse numer
var reverse = function(x) {
  var lastdigit = 0, result = 0;
  while(x >= 1){
    lastdigit = Math.floor(x % 10);
    result = result * 10 + lastdigit;
    x /= 10;
  }
  if(result > 2147483647) return 0;
  return result;
};

var isPalindrome = function(x) {
  // if x < 0, then it won't be palindrome
  if(x < 0) return false;
  // check if x is equal to revere x
  return x === reverse(x);
};

console.log(isPalindrome(2111001112))
console.log(isPalindrome(2111001113))
