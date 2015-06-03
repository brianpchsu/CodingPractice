/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  if(digits.length < 1) return digits;
  var carry = 1;
  for(var i = digits.length -1; i >= 0 ; i--){
    var digit = Math.floor((digits[i] + carry) % 10);
    carry = Math.floor((digits[i] + carry)/10);
    digits[i] = digit;
    if(carry ===0){
      return digits;
    }
  }
  var newArr = new Array(digits.length + 1);
  newArr [0] = 1;
  for(var i = 1; i < newArr.length; i++){
    newArr[i] = 0;
  }
  return newArr;
};
