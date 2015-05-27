/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  var recordSet = {};
  var sumDigit = function(array){
    var sum = 0;
    for(var i = 0; i< array.length; i++){
      sum += array[i] * array[i];
    }
    return sum;
  }
  var getDigits = function(num){
    return num.toString().split('');
  }
  while(true){
    n = sumDigit(getDigits(n));
    if(n === 1){
      return true;
    }
    if (recordSet[n]){
      return false;
    }
    recordSet[n] = true;
  }
};

console.log(isHappy(19));
console.log(isHappy(123));
