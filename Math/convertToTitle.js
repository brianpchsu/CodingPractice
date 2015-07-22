/**
 * @param {number} n
 * @return {string}
 */
// define numToCharacter for number to Character lookup
var numToCharacter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var convertToTitle = function(n) {
  // define final result from empty string
  var result = '';
  // edge case, negative number
  if(n < 0) return '';
  // continue to do task while n is greater than 0
  while(n > 0){
    // get the remaining from % and the n that is greater than 26 for next round
    var remaining = n % 26;
    n = Math.floor(n / 26);
    // if remaining is 0, then we have a Z, add the Z to the left of our current result
    if(remaining === 0){
      result ='Z' + result;
      // afer recording the Z, decrement the n by 1
      n--;
      // if we have letter other than Z, then we need to check our array for the right character
    } else {
      result = (numToCharacter[remaining - 1]) + result;
    }
  }
  return result;
};

console.log(convertToTitle(1));
console.log(convertToTitle(2));
console.log(convertToTitle(26));
console.log(convertToTitle(27));
console.log(convertToTitle(28));
