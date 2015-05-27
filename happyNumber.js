/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  // use object/ hashtable embeded for recording
  var recordSet = {};
  // helper function to sum digit from array
  var sumDigit = function(array){
    var sum = 0;
    for(var i = 0; i< array.length; i++){
      sum += array[i] * array[i];
    }
    return sum;
  }
  // helper function to convert num to array
  var getDigits = function(num){
    return num.toString().split('');
  }
  // check the number's sum of the squares of its digits
  while(true){
    // update n with the sum of the squares of its digits
    n = sumDigit(getDigits(n));
    // if n is 1, happy number!
    if(n === 1){
      return true;
    }
    // if n is not 1, check if the number already exists in the object
    // if the number is already in the object, means it's in the infinit loop
    if (recordSet[n]){
      return false;
    }
    // record number if it failed all the above conditions
    recordSet[n] = true;
  }
};

console.log(isHappy(19));
console.log(isHappy(123));
