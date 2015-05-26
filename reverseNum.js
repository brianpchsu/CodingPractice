/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var lastdigit = 0, result = 0, value = Math.abs(x);
  while(value >= 1){
    lastdigit = Math.floor(value % 10);
    result = result * 10 + lastdigit;
    value /= 10;
  }
  if(result > 2147483647) return 0;
  if(result < 0) return -1;
  return x < 0 ? result *= -1 : result;
};

console.log(reverse(10));
console.log(reverse(-20));
console.log(reverse(-1288));
