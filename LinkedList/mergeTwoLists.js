/**
  Merge two sorted linked lists and return it as a new list.
  The new list should be made by splicing together the nodes of the first two lists.
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// Define node
function ListNode(val) {
  this.val = val;
  this.next = null;
}

var mergeTwoLists = function(l1, l2) {
  if(l1 === null){ return l2}
  if(l2 === null){ return l1}
  // Define a ListNode
  var head = new ListNode(0);
  // Define a pointer for later update
  var pointer = head;
  // go over node one by one
  while(l1 && l2){
    if(l1.val < l2.val){
      pointer.next = l1;
      l1 = l1.next;
    } else {
      pointer.next = l2;
      l2 = l2.next;
    }
    // update pointer's pointer to next one
    pointer = pointer.next;
  }
  // if there is any node remaining in one of the list, add them to the end
  if(l1 !== null){
    pointer.next = l1;
  }
  if(l2 !== null){
    pointer.next = l2;
  }
  // return head.next for the combined list
  return head.next;
};
