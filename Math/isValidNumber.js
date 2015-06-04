/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
  return !isNaN(parseFloat(s)) && isFinite(s);
};

console.log(isNumber('078332e437'));
console.log(isNumber('0.1'));
console.log(isNumber('abc'));
console.log(isNumber('1 a'));
console.log(isNumber('2e10'));

