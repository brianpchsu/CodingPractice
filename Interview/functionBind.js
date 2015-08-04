// Implement bind

var bind = function(func, context){
  var preArgs = Array.prototype.slice.call(arguments, 2);
  return function(){
    var args = Array.prototype.slice.call(arguments);
    args = preArgs.concat(args);
    return func.apply(context, args);
  };
};

var alice = {
  name: 'alice',
  shout: function(){
    console.log(this.name);
  }
};

// var boundShout = bind(alice.shout, alice);
// boundShout(); // console.log 'alice'
// boundShout = bind(alice.shout, {name: 'bob'});
// boundShout(); // console.log 'bob'

// var func = function(a, b){ return a + b };
// var boundFunc = bind(func, null, 'foo');
// var result = boundFunc('bar');
// console.log(result === 'foobar'); // true

// bind in the prototype chain
Function.prototype.bind = function(context) {
  var preArgs = Array.prototype.slice.call(arguments,1);
  var func = this;

  return function(){
    var args = Array.prototype.slice.call(arguments);
    args = preArgs.concat(args);
    return func.apply(context, args);
  };
};


var func = function(a, b){ return a + b };
var boundFunc = func.bind(null, 'foo');
var result = boundFunc('bar');
console.log(result === 'foobar'); // true
