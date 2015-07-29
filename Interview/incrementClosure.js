// Build an increment function without using a global scope variable
// increment() => 1
// increment() => 2

var increment = (function(){
  var id = 0;
  return function() {
    return id++;
  };
})();

console.log(typeof increment);
console.log(increment());
console.log(increment());
console.log(increment());


