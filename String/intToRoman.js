/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  // define roman symbol and the roman value
  var symbol = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
  var value = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  // final roman result
  var roman ='';
  // if num is not zero, deduct the num using the couterpart value and add the value to result roman
  for(var i = 0; num !==0; i++){
    while(num >= value[i]){
      num -= value[i];
      roman += symbol[i];
    }
  }
  return roman;
};

console.log(intToRoman(3900));
console.log(intToRoman(2200));
console.log(intToRoman(999));
console.log(intToRoman(50));
console.log(intToRoman(6));
