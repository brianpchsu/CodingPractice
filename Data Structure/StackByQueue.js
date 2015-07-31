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
// Solution 1, use two Queue for Stack
var Stack = function() {
  // use two Queue for tracking, q1 for older record, q2 for the latest input
  this.q1 = new Queue();
  this.q2 = new Queue();
};

/**
 * @param {number} x
 * @returns {void}
 */
Stack.prototype.push = function(x) {
  // save the latest input to q2
  this.q2.push(x);
  // if q2 is greater than 1, then move the older items to q1
  while(this.q2.size() > 1){
    this.q1.push(this.q2.pop());
  }
};

/**
 * @returns {void}
 */
Stack.prototype.pop = function() {
  // do top to make sure we have the right number in q2
  this.top();
  // pop the q2 to get the number
  this.q2.pop();
};

/**
 * @returns {number}
 */
Stack.prototype.top = function() {
  // if q2 is empty, then we need to get the number from q1
  if(this.q2.isEmpty()){
    // the target number is in the end of q1, so we move the head to the end and do it q1.size()-1 times
    for(var i = 0; i < this.q1.size()-1; i++){
      this.q1.push(this.q1.pop());
    }
    // the head of q1 is the latest item, move that to q2
    this.q2.push(this.q1.pop());
  }
  // return the q2 item for peeking
  return this.q2.peek();
};

/**
 * @returns {boolean}
 */
Stack.prototype.empty = function() {
  // check empty by looking q1 and q2 together
  return this.q1.isEmpty() && this.q2.isEmpty();
};


// Solution 2, use one Queue for Stack, another temp one when pushing value
var Stack = function() {
  this.q = new Queue();
};

/**
 * @param {number} x
 * @returns {void}
 */
Stack.prototype.push = function(x) {
  // define a temp Queue for helping
  var temp = new Queue();
  // if q is not empty
  while(!this.q.isEmpty()){
    // move all items in q to temp
    temp.push(this.q.pop());
  }
  // save x (latest one) to q
  this.q.push(x);
  // save all temp items back to q
  while(!temp.isEmpty()){
    this.q.push(temp.pop());
  }
};

/**
 * @returns {void}
 */
// since q is in the Stack order (last one in the front), call the q method is legit
Stack.prototype.pop = function() {
  this.q.pop();
};

/**
 * @returns {number}
 */
Stack.prototype.top = function() {
  return this.q.peek();
};

/**
 * @returns {boolean}
 */
Stack.prototype.empty = function() {
  return this.q.isEmpty();
};
