/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  // define result 0 for start
  var result = 0;
  // go over each digit
  for(var i = 0; i < s.length; i++){
    // the result will be the current one (check the character code) - character code A (65) + 1
    // and add the previous one times 26
    result = result * 26 + (s[i].charCodeAt(0) - 64);
  }
  return result;
};

console.log(titleToNumber('A'));
console.log(titleToNumber('B'));
console.log(titleToNumber('Z'));
console.log(titleToNumber('AA'));
console.log(titleToNumber('AB'));
