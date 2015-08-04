//Debounce - Only execute a function once in a specied amount of time in ms.
//signature.

// function debounce(fn, timeout);
//returns function;

// input: 1 function, 1 time to wait
// output function

// store time when function got call
// check time and decide to run the function
// it waits x number (ms) from the last invocation.

var debounce = function(fn, timeout){
  var to;
  return function debounce$return(){
    var args = arguments;
    var self = this;
    clearTimeout(to);
    to  = setTimeout(function(){
        fn.apply(self, args);
        }, timeout);
  };
};

var stuff = debounce(function(){
   console.log('hello from stuff');
},200);

setTimeout(stuff, 10); //-> does nothing.
setTimeout(stuff, 50); //-> does nothing.
setTimeout(stuff, 100);//-> does nothing.
setTimeout(stuff, 300); //-> prints hello
setTimeout(stuff, 400);//-> does nothing.
setTimeout(stuff, 500);//-> does nothing.
setTimeout(stuff, 700);//-> prints hello

//clarity
function hello(world){
  console.log('hello', world);
}

var sayHi = debounce(hello, 1000);

sayHi('w');//<-
sayHi('wo');//<-
sayHi('wor');//<-
sayHi('world');//<-
//some 300ms later.
sayHi('world');        // 450ms

//should console.log( ‘helloworld');

var obj = {
  word:'Hey',
  sayHi:debounce(function(you){
    console.log(this.word + ' ' + you);
 },100)
};

obj.sayHi('world'); //<-should say ‘hello world';
obj.sayHi('john'); //<within 100ms it should say ‘hello john';

