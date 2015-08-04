// memoize funciton
// input: fn, time to cache period

var result = {};
var memoize = function(func, secondsToCache){
  return function(){
    // Stringify the arguments (function and secondsToCache)
    var key = JSON.stringify(arguments);
    console.log("key is", key);
    // record the current time
    var currentTime = new Date();
    // if hashmap result doesn't contain the key or if the time difference from currentTime
    // and the record time exceed the secondsToCache
    if(!result.hasOwnProperty(key) || currentTime - result[key][1] > secondsToCache){
      // run the function and memorize the function and current time
      result[key] = [func.apply(this, arguments), new Date()];
    }
    // return the memorized result
    return result[key][0];
  };
};

// testing expensive function
var expensiveFunction = function(i, j) {
  // use the console.log to know if this function gets called and run
  console.log("Hi, I'm expensiveFunction. Running time! Input is ", [i, j]);
  return i * j;
};

var memoizedExpensiveFunction = memoize(expensiveFunction, 5);

console.log(memoizedExpensiveFunction(1, 2));  // Will run i * j
console.log(memoizedExpensiveFunction(1, 2));  // Will NOT run i * j
console.log(memoizedExpensiveFunction(2, 3));  // Will run i * j
setTimeout(function() {
    console.log(memoizedExpensiveFunction(1, 2));  // Will run i * j
}, 6000);
