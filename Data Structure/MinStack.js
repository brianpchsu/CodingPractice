/**
 * @constructor
 */
// use two array to store element in stack
var MinStack = function() {
  this._storage = [];
  this._minStorage = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
MinStack.prototype.push = function(x) {
  // push element to storage
  this._storage.push(x);
  // push element to minStorage if minStorage is empty
  if(!this._minStorage.length){
    this._minStorage.push(x);
    // if minStorage is not empty, only push element if it's less than current min
  } else if (this._minStorage[this._minStorage.length-1] >= x){
    this._minStorage.push(x);
  }
};

/**
 * @returns {void}
 */
MinStack.prototype.pop = function() {
  // if the one is about to pop from storage is the same as last element in minStorage, pop it from minStorage as well
  if(this._storage[this._storage.length -1] === this._minStorage[this._minStorage.length -1]){
    this._minStorage.pop();
  }
  // pop the last one from storage
  this._storage.pop();
};

/**
 * @returns {number}
 */
MinStack.prototype.top = function() {
  // get the last element from stack
  return this._storage[this._storage.length-1];
};

/**
 * @returns {number}
 */
MinStack.prototype.getMin = function() {
  // get the min from minStorage
  return this._minStorage[this._minStorage.length-1];
};

var stack = new MinStack();
stack.push(2);
stack.push(0);
stack.push(3);
stack.push(0);

console.log(stack.getMin());
stack.pop();
console.log(stack.getMin());
stack.pop();
console.log(stack.getMin());
stack.pop();
console.log(stack.getMin());
