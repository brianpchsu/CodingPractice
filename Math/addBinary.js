/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  // define carry for ongoing addtion
  var carry = 0, result = '';
  // checking from the end of digit to the beginning of digit
  for(var i = a.length -1, j = b.length -1; i >=0 || j >= 0; i--, j--){
    // if the index is legit index, use the element, otherwise, use 0 for calculation
    var ai = i >= 0? a[i]: 0;
    var bj = j >= 0? b[j]: 0;
    // digit will be the update value after addition
    var digit = Math.floor((parseInt(ai) + parseInt(bj) + carry) % 2);
    // carry is the value for next digit
    carry = Math.floor((parseInt(ai) + parseInt(bj) + carry) /2);
    // addint current digit to result
    result = digit + result;
  }
  // if carry is 1, we have addition digit to add to the result
  if(carry === 1){
    result = "1" + result;
  }
  return result;
};


console.log(addBinary('0', '1'));
console.log('1' - '0');
