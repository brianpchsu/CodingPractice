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

var romanToInt = function(romanNumeral) {
  if (typeof romanNumeral !== 'string') return null; // return null if input is not string
  var digitIndex = Object.keys(DIGIT_VALUES);
  var input = romanNumeral.split('');
  result = 0;
  for (var i =0; i< input.length; i++){
    if (digitIndex.indexOf(input[i]) < digitIndex.indexOf(input[i+1])){
      result -= DIGIT_VALUES[input[i]];
    } else {
      result += DIGIT_VALUES[input[i]];
    }
  }
  return result;
};
