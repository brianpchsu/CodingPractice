/**
 * @param {number} n
 * @return {boolean}
 */
// var isPowerOfTwo = function(n) {
//   if(n < 0) return false;
//   var bit = 1;
//   while(n > bit){
//     bit <<= 1;
//   }
//   if(n === bit){
//     return true;
//   }
//   return false;
// };

var isPowerOfTwo = function(n) {
  return n > 0 && (n &(n-1)) ===0;
};

console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(4));
console.log(isPowerOfTwo(9));
