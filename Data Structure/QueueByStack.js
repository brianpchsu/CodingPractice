/**
 * @constructor
 */
// Define Stack for Queue
var Stack = function(){
  this.length = 0;
  this._storage = [];
  // Define all the Stack functions
  this.push = function(value){
    this._storage[this.length++] = value;
  };

  this.pop = function(){
    if(this.length){
      this.length--;
      return this._storage.pop();
    }
  };

  this.peek = function(){
    return this._storage[this.length-1];
  };

  this.size = function(){
    return this.length;
  };
};

var Queue = function() {
  // Use two Stack to achieve Queue functions
  this.inbox = new Stack();
  this.outbox = new Stack();
};

/**
 * @param {number} x
 * @returns {void}
 */
Queue.prototype.push = function(x) {
  this.inbox.push(x);
};

/**
 * @returns {void}
 */
Queue.prototype.pop = function() {
  // using peek first to make sure outbox has all the element stored by inbox
  this.peek();
  this.outbox.pop();
};

/**
 * @returns {number}
 */
Queue.prototype.peek = function() {
  // if the outbox is empty, get element from inbox
  if(this.outbox.size() === 0){
    while(this.inbox.size() !== 0){
      this.outbox.push(this.inbox.pop());
    }
  }
  // return the last element from outbox
  return this.outbox.peek();
};

/**
 * @returns {boolean}
 */
Queue.prototype.empty = function() {
  // check empty by summing the two stacks' size
  return (this.inbox.size() + this.outbox.size()) === 0;
};

var queue = new Queue();
queue.push(1);
console.log(queue.peek());
