/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  // Edge cases
  if(divisor === 1) {return dividend;}
  if(dividend ===0) {return 0; }
  if(divisor === 0) {return Infinity; }
  if(dividend === divisor) { return 1;}

  // Calculate using position number
  var divd = Math.abs(dividend), divs = Math.abs(divisor);
  var result = 0;

  while(divd >= divs){
    var shift = -1;   //use shift to find the number that divs's most closest number to divd
    var temp = divd;      // use temp to calculate each round of divd
    while(temp >= divs){
      temp >>= 1; // right shift one position
      shift++;    // add one
    }
    console.log("divs, shift", [divs, shift] );
    divd -= divs << shift;  // divd minus the left shift of the divs ()
    console.log("divd is ", divd );
    result += 1 << shift;   // result is old result + 1 left shift
    console.log("result is ", result );
    console.log("divd ", divd, "divs ", divs);

  }
  // if the dividend and divisor are not all positive/ negative, change result sign
  if((divisor>0) !== (dividend>0)){
    result = -result;
  }
  // handle edge case, int overflow (seems not a problem in JS)
  if(result > 2147483647){
    return 2147483647;
  }
  return result;
};

console.log(divide(-10, -2));

//http://www.w3schools.com/js/js_comparisons.asp
