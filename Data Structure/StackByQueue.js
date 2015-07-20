/**
 * @constructor
 */

var Queue = function(){
  this._storage = [];
  this.push = function(value){
    this._storage.push(value);
  };
  this.peek = function(){
    return this._storage[0];
  };
  this.pop = function(){
    return this._storage.shift();
  };
  this.size = function(){
    return this._storage.length;
  };
  this.isEmpty = function(){
    return this._storage.length === 0;
  };
} ;

var Stack = function() {
  this.q1 = new Queue();
  this.q2 = new Queue();
};

/**
 * @param {number} x
 * @returns {void}
 */
Stack.prototype.push = function(x) {
  this.q2.push(x);
  while(this.q2.size() > 1){
    this.q1.push(this.q2.pop());
  }
};

/**
 * @returns {void}
 */
Stack.prototype.pop = function() {
  this.top();
  this.q2.pop();
};

/**
 * @returns {number}
 */
Stack.prototype.top = function() {
  if(this.q2.isEmpty()){
    for(var i = 0; i < this.q1.size(); i++){
      this.q1.push(this.q1.pop());
    }
    this.q2.push(this.q1.pop());
  }
  return this.q2.peek();
};

/**
 * @returns {boolean}
 */
Stack.prototype.empty = function() {
  return this.q1.isEmpty() && this.q2.isEmpty();
};
