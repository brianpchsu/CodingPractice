/**
 * @param {number} n
 * @return {number}
 */
// find out the all the prime less than input n

var countPrimes = function(n) {
  if(n < 2){
    return 0;
  }
  var primesArr = [], count = 0;
  for(var i = 2; i <= n; i++){
    primesArr[i] = true;
  }
          console.log(primesArr)

  for(var i = 2; i <= Math.sqrt(n); i++){
    if(primesArr[i]){
      for(var j = i+i; j < n; j+= i){
        primesArr[j] = false;
      }
    }
  }
  for(var i = 2; i <= n; i++){
    if(primesArr[i]){
      count++;
      console.log(i)
    }
  }
  return count;
};

var countPrimes = function(n) {
  if(n < 2){
    return 0;
  }
  var primesArr = [], count = n-1;
  for(var i = 2; i <= n; i++){
    primesArr[i] = true;
  }

  for(var i = 2; i <= Math.sqrt(n); i++){
    if(primesArr[i]){
      for(var j = i+i; j <= n; j+= i){
        primesArr[j] = false;
        count--;
      }
    }
  }

  return count;
};

console.log(countPrimes(11));
