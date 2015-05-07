/**
 * Definition for singly-linked list.
 * function   (val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// Define ListNode
var ListNode = function(val){
  this.val = val;
  this.next = null;
};

var insertionSortList = function(head) {
  // if there is no head or only 1 node, return
  if(head === null || head.next ===null){
    return head;
  };

  // define sorted list
  var sortedList = new ListNode(0);
  // get the current
  var current = head;
  // while the current is not null
  while(current){
    // define next and previous
    var next = current.next;
    var pre = sortedList;
    // while previous' next not equal to null, and the sorted last val < than current, move previous next
    while(pre.next &&  pre.next.val < current.val){
      pre = pre.next;
    }
    // update pre, current, current.next
    current.next = pre.next;
    pre.next = current;
    current = next;
  }
  // return the sorted list
  return sortedList.next;
};
