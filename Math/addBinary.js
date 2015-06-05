/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  var carry = 0, result = '';
  for(var i = a.length -1, j = b.length -1; i >=0 || j >= 0; i--, j--){
    var ai = i >= 0? a[i]: 0;
    var bj = j >= 0? b[j]: 0;
    var digit = Math.floor((parseInt(ai) + parseInt(bj) + carry) % 2);
    carry = Math.floor((parseInt(ai) + parseInt(bj) + carry) /2);
    result = digit + result;
  }
  if(carry === 1){
    result = "1" + result;
  }
  return result;
};


console.log(addBinary('0', '1'));
console.log('1' - '0');
