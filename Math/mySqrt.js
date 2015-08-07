/**
 * @param {number} x
 * @return {number}
 */
// Solution
 var mySqrt = function(x) {
  // return -1 if x is less than 0
  if(x < 0 ) return -1;
  // return 0 if x is 0
  if(x === 0 ) return 0;
  // return 1 if x is 1
  if(x === 1 ) return 1;
  // define start and end as two boundry
  var start = 0, end = x/2 + 1;
  // define the middle
  var mid;
  // continue the while loop if start is less than end
  while(start <= end){
    // mid is the half of start plus end
    mid = (start + end)/2;
    // get the square of the mid
    var sqr = mid * mid;
    // if this squre is equal to x, return the mid
    if(sqr === x){
      return mid;
      // if square is less than x, then add start with mid + 1
    } else if (sqr < x){
      start = mid +1;
      // if squre is greater than x, then make end with mid -1
    } else {
      end = mid -1;
    }
  }
  // if reaching here, return the last mid
  return Math.floor(mid);
};

// Solution using Newton's method, check the wiki for the method's logic
// https://en.wikipedia.org/wiki/Newton%27s_method
var mySqrt = function(x) {
  // use divide and conquer with recursion
  if( x === 0) return 0;
  var last = 0, result = 1;
  while(result !== last){
    last = result;
    result = (result + x/result)/2;
  }
  return Math.floor(result);
};

console.log(mySqrt(1)); //1
console.log(mySqrt(2)); //1
console.log(mySqrt(3)); //1
console.log(mySqrt(4)); //2
console.log(mySqrt(5)); //2
console.log(mySqrt(9)); //3
console.log(mySqrt(16));  //4
console.log(mySqrt(25));  //5
console.log(mySqrt(30));  //5
