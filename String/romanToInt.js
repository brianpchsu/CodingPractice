/**
 * @param {string} s
 * @return {number}
 */
var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var romanToInt = function(romanNumeral){
  // define input string and final result
  var input = romanNumeral.split(''), result = 0;

  // iterate through the inpu
  for(var i = 0; i< input.length; i++){
    // if current digit is less than next digit, current number should be deducted
    if(DIGIT_VALUES[input[i]] < DIGIT_VALUES[input[i+1]]){
      result -= DIGIT_VALUES[input[i]];
      // otherwise the number should be added
    } else {
      result += DIGIT_VALUES[input[i]];
    }
  }
  return result;
};

console.log(romanToInt("VI"));
console.log(romanToInt("IV"));
console.log(romanToInt("XVI"));
console.log(romanToInt("LXXXIII"));
