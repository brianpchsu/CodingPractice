/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  // if str is null or nothing, return 0
  if(str === null || str.length < 1) return 0;
  // trim white space
  str = str.trim();
  // check negative, define pointer position and result
  var isNegative = false, position = 0, result = 0;
  // check negative logic
  if(str[position] === '-') {
    isNegative = true;
    position++;
  } else if (str[position] === '+'){
    position++;
  }
  // check each character in the string
  while(position < str.length ){
    // if that character is not number, break the while loop
    if( str.charAt(position) < '0' || str.charAt(position) > '9') {
      break;
    }
    // if the character is between 0 and 9
    if(parseInt(str[position]) >=0 && parseInt(str[position]) <= 9){
      result = result*10 + parseInt(str[position]);
      position++;
    }
  }
  // return negative result
  if(isNegative) result *= -1;
  // handle overflow, not issue in Javascript
  if(result > 2147483647) return 2147483647;
  if(result < -2147483648) return -2147483648;
  return result;
};

console.log(myAtoi('-1'));
console.log(myAtoi('30'));
console.log(myAtoi('-99'));
console.log(myAtoi('+-2'));
console.log(myAtoi('  -0012a42'));

console.log(Number.MAX_VALUE, Number.MIN_VALUE);
