/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

var reverseList = function(head) {
  // define prev, null is first used for the inital head.next
  var prev = null;
  // check every node while head is not null
  while(head !== null){
    // save head.next to temp
    var temp = head.next;
    // save the prev to current node's next
    head.next = prev;
    // move the current node to prev node
    prev = head;
    // iterate to next node (temp)
    head = temp;
  }
  // return the final node (new head)
  return prev;
};
