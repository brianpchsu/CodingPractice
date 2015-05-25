/**
 * @param {number} n
 * @return {number}
 */
// find out the all the prime less than input n
// Sieve of Eratosthenes- http://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
var countPrimes = function(n) {
  // if n < 2, then no prime number
  if(n <= 2){
    return 0;
  }
  // use primeArr to record number from 2 to n-1 with true
  var primesArr = [], count = 0;
  for(var i = 2; i < n; i++){
    primesArr[i] = true;
  }
  // iterate from 2 to square root of n, if that number is true, then toggle the multiple of that number to false
  for(var i = 2; i <= Math.sqrt(n); i++){
    if(primesArr[i]){
      for(var j = i+i; j < n; j+= i){
        primesArr[j] = false;
      }
    }
  }
  // check the array to find all true number
  for(var i = 2; i <= n; i++){
    if(primesArr[i]){
      count++;
    }
  }
  return count;
};

// var countPrimes = function(n) {
//   // if n < 2, then no prime number
//   if(n <= 2){
//     return 0;
//   }
//   if(n ===3){
//     return 1;
//   }
//   // use primeArr to record number from 2 to n-1 with true, initialize count with n-1
//   var primesArr = [], count = n-2;
//   for(var i = 2; i < n; i++){
//     primesArr[i] = true;
//   }
//   // iterate from 2 to square root of n, if that number is true, then toggle the multiple
//   // of that number to false, minus 1 from the count;
//   for(var i = 2; i <= Math.sqrt(n); i++){
//     if(primesArr[i]){
//       for(var j = i+i; j < n; j+= i){
//         primesArr[j] = false;
//         count--;
//       }
//     }
//   }
//   // return the count
//   return count;
// };

// console.log(countPrimes(2));  // 0
// console.log(countPrimes(3));  // 1
// console.log(countPrimes(6)); // 3
// console.log(countPrimes(11)); // 4
// console.log(countPrimes(14)); // 6
