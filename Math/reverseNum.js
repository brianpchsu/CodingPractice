/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  // define lastdigit for each round, final result, and absolute value of input
  var lastdigit = 0, result = 0, value = Math.abs(x);
  // if value is greater and equal to 1, then it can be reversed
  while(value >= 1){
    // lastdigit is from our current value's remainder
    lastdigit = Math.floor(value % 10);
    // updating result with 10 times earlier one and current lastdigit
    result = result * 10 + lastdigit;
    // divide value with 10
    value /= 10;
  }
  // check overflow, seems not an issue in Javascript
  if(result > 2147483647) return 0;
  // return result with right sign;
  return x < 0 ? result *= -1 : result;
};

console.log(reverse(10));
console.log(reverse(-20));
console.log(reverse(-1288));
