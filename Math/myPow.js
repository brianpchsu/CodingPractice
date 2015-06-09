/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  // if n is 0, edge case, return 0
  if(n === 0) return 1;
  // if n is 1, no pow is needed, return x
  if(n === 1) return x;
  // if n is negative, then return the 1/ positive myPow
  if(n < 0) {
    return 1 / myPow(x, -n);
  }
  // divide n to half
  var half = myPow(x, Math.floor(n/2));
  // if n is even, then myPow is the result of the half and half
  if(n % 2 === 0){
    return half * half;
  } else {
    // else return half * half * another x
    return half * half * x;
  }
};

console.log(myPow(2, 3));
// console.log(myPow(34.00515, -3));
