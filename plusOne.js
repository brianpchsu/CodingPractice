/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  // if the input is empty, no need to do anything
  if(digits.length < 1) return digits;
  // carry is the number to add to the end
  var carry = 1;
  // add the number to the end of the array
  for(var i = digits.length -1; i >= 0 ; i--){
    // check the last digit after adding 1
    var digit = Math.floor((digits[i] + carry) % 10);
    // check to see if the digit is greater than 9
    carry = Math.floor((digits[i] + carry)/10);
    // update the digit
    digits[i] = digit;
    // if after adding one, then digit is not greater than 9, return
    if(carry === 0){
      return digits;
    }
    // if the digit is greater than 9, need to go to next iteration
  }
  // if reaching here, all digits is 0, need to add one more digit 1 in front
  digits.unshift(1);
  return digits;
};

console.log(plusOne([9,9]));
