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

function ListNode(val) {
    this.val = val;
    this.next = null;
}
var removeElements = function(head, val) {
  var helperList = new ListNode(0);
  helperList.next = head;
  var pointer = helperList;

  while(pointer.next !== null){
    if(pointer.next.val === val){
      pointer.next = pointer.next.next;
    } else {
      pointer = pointer.next;
    }
  }
  return helperList.next;
};

