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

var deleteDuplicates = function(head) {
  // if head is null, return null
  if(!head) return null;
  // define pointer for operation
  var pointer = head;
  // check from the beginning of the list, ending in pointer.next === null
  while(pointer.next !== null){
    // if the current val is equal to the next val
    if (pointer.val === pointer.next.val){
      // remove the next with the next's next
      pointer.next = pointer.next.next;
    } else {
      // if the next is different, then move the pointer to the next one
      pointer = pointer.next;
    }
  }
  // return the head (starting point list)
  return head;
};
