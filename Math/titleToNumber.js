/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  var result = 0;
  for(var i = 0; i < s.length; i++){
    result = result * 26 + (s[i].charCodeAt(0) - 64);
  }
  return result;
};

console.log(titleToNumber('A'));
console.log(titleToNumber('B'));
console.log(titleToNumber('Z'));
console.log(titleToNumber('AA'));
console.log(titleToNumber('AB'));
