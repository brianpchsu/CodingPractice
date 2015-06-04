/**
 * @constructor
 */
var MinStack = function() {
  this._storage = [];
  this._minStorage = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
MinStack.prototype.push = function(x) {
  this._storage.push(x);
  if(!this._minStorage.length){
    this._minStorage.push(x);
  } else if (this._minStorage[this._minStorage.length-1] >= x){
    this._minStorage.push(x);
  }
};

/**
 * @returns {void}
 */
MinStack.prototype.pop = function() {
  if(this._storage[this._storage.length -1] === this._minStorage[this._minStorage.length -1]){
    this._minStorage.pop();
  }
  this._storage.pop();
};

/**
 * @returns {number}
 */
MinStack.prototype.top = function() {
  return this._storage[this._storage.length-1];
};

/**
 * @returns {number}
 */
MinStack.prototype.getMin = function() {
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
