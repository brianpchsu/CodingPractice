/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

// ListNode class
function ListNode(val) {
    this.val = val;
    this.next = null;
}

var removeElements = function(head, val) {
  // define a helperList, the val is not important
  var helperList = new ListNode(0);
  // point the current list to the helperList's next
  helperList.next = head;
  // use a pointer for iteration
  var pointer = helperList;

  // if the pointer's next exists (not the tail)
  while(pointer.next !== null){
    // check the next's value, if that match the target
    if(pointer.next.val === val){
      // update the pointer next's next to the next (skip the target node)
      pointer.next = pointer.next.next;
    } else {
      // if the value doesn't match the target, continue
      pointer = pointer.next;
    }
  }
  // return the updated helperList
  return helperList.next;
};

