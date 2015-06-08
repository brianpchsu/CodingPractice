/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
function RandomListNode(label) {
    this.label = label;
    this.next = this.random = null;
}

var copyRandomList = function(head) {
  if(!head) return null;
  var newheadbefore = new RandomListNode(0);
  var map = {};
  var current = head;
  var newpointer = newheadbefore;

  while(current !== null){
    var newNode = new RandomListNode(current.label);
    map[current] = newNode;
    newpointer.next = newNode;
    newpointer = newpointer.next;
    current = current.next;
  }
  current = head;
  newpointer = newheadbefore.next;

  while(current !== null){
    var randomNode = map[current.random];
    newpointer.random = randomNode;
    newpointer = newpointer.next;
    current = current.next;
  }
  return newheadbefore.next;
};



