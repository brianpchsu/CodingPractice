/**
 * @constructor
 */
var Stack = function(){
  this.length = 0;
  this._storage = [];
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
  this.peek();
  this.outbox.pop();
};

/**
 * @returns {number}
 */
Queue.prototype.peek = function() {
  if(this.outbox.size() === 0){
    while(this.inbox.size() !== 0){
      this.outbox.push(this.inbox.pop());
    }
  }
  return this.outbox.peek();
};

/**
 * @returns {boolean}
 */
Queue.prototype.empty = function() {
  return (this.inbox.size() + this.outbox.size()) === 0;
};

var queue = new Queue();
queue.push(1);
console.log(queue.peek());
