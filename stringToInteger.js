/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  if(str === null || str.length < 1) return 0;
  str = str.trim();
  var isNegative = false, position = 0, result = 0;
  if(str[position] === '-') {
    isNegative = true;
    position++;
  } else if (str[position] === '+'){
    position++;
  }
  while(position < str.length ){
    if(parseInt(str[position]) >=0 && parseInt(str[position]) <= 9){
      result = result*10 + parseInt(str[position]);
    }
    if( str.charAt(position) < '0' || str.charAt(position) > '9') {
      break;
    }
    position++;
  }
  if(isNegative) result *= -1;
  if(result > 2147483647) return 2147483647;
  if(result < -2147483648) return -2147483648;
  return result;
};

console.log(myAtoi('-1'));
console.log(myAtoi('30'));
console.log(myAtoi('-99'));
console.log(myAtoi('+-2'));
console.log(myAtoi('  -0012a42'));
