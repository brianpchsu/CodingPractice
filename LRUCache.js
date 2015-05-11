/*
Design and implement a data structure for Least Recently Used (LRU) cache.
It should support the following operations: get and set.

get(key) - Get the value (will always be positive) of the key if the key
exists in the cache, otherwise return -1.
set(key, value) - Set or insert the value if the key is not already present.
When the cache reached its capacity, it should invalidate the least recently
used item before inserting a new item.
 */

var LRUCache = function (limit) {
  // A map of key -> LRUCacheItem- use object for constant time lookup
  this._items = {};

  // A list of LRUCacheItem.node- use Doubly-linked lists for tracking
  this._ordering = new List();

  // Internal bookkeeping
  this._limit = limit;
  this._size = 0;
};

var LRUCacheItem = function (val, key) {
  this.val = val;
  this.key = key;
  this.node = null;
};

LRUCache.prototype.size = function () {
  return this._size;
};

LRUCache.prototype.get = function (key) {
  // get the item from the _items obj
  var item = this._items[key];
  // if there is no item, return -1
  if (item === undefined) { return -1; }
  // if item exists, move to the front(head)
  this.promote(item);
  return item.val;
};

LRUCache.prototype.set = function (key, val) {
  // Set an existing item
  var item = this._items[key];
  if (item !== undefined) {
    item.val = val;
    this.promote(item);
  // Set a new item
  } else {
    // Make space if necessary
    if (this.full()) { this.prune(); }

    this._size++;
    item = new LRUCacheItem(val, key);
    item.node = this._ordering.unshift(item);
    this._items[key] = item;
  }
};

// Check if cache is full
LRUCache.prototype.full = function () {
  return this._size >= this._limit;
};

// Delete the least use item (tail)
LRUCache.prototype.prune = function () {
  var oldest = this._ordering.pop();
  delete this._items[oldest.key];
  this._size = Math.max(0, this._size - 1);
};

// Move the item to the front (head)
LRUCache.prototype.promote = function (item) {
  this._ordering.moveToFront(item.node);
};

var List = function () {
  this.head = null;
  this.tail = null;
};

var ListNode = function (prev, val, next) {
  this.prev = prev || null;
  this.val = val;
  this.next = next || null;
};

// Insert at the head of the list.
List.prototype.unshift = function (val) {
  // Empty list
  if (this.head === null && this.tail === null) {
    this.head = this.tail = new ListNode(null, val, null);
  // Not empty list.
  } else {
    // if there was only one element in the list
    if(this.tail.prev === null){
     // update the tail's previous and head
     this.head = this.tail.prev = new ListNode(null, val, this.head);
     this.tail.prev.next = this.tail;
    } else {
      // if there were more than 1 elements, update the head
      this.head = new ListNode(null, val, this.head);
      this.head.next.prev = this.head;
    }
  }
  return this.head;
};

// Delete at the end of the list.
List.prototype.pop = function () {
  // Empty list
  if (this.head === null && this.tail === null) {
    return null;
  // Not empty list.
  } else {
    // if there is only 1 elements in the list, just delete
    if(this.head === this.tail){
      var tail = this.tail;
      tail.delete();
      return tail.val;
    } else {
      // if there were more than 1 elements in the list, delete and update tail
      var tail = this.tail;
      this.tail = this.tail.prev;
      tail.delete();
      return tail.val;
    }
  }
};

// Move a node to the front of the List
List.prototype.moveToFront = function (node) {
  // if node is the tail, pop the end
  if (node === this.tail) {
    this.pop();
    // if the node is head, no need to do anything
  } else if (node === this.head) {
    return;
    // if the node is not at ends, delete
  } else {
    node.delete();
  }
  // clean the node's prev and next
  node.prev = node.next = null;

  // Don't delegate to shift, since we want to keep the same
  // object.

  // Empty list
  if (this.head === null && this.tail === null) {
    this.head = this.tail = node;
  // At least one node.
  } else {
    this.head.prev = node;
    node.next = this.head;
    this.head = node;
  }
};

// update the list location
ListNode.prototype.delete = function () {
  if (this.prev) { this.prev.next = this.next; }
  if (this.next) { this.next.prev = this.prev; }
};


