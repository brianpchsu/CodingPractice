/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 function ListNode(val) {
     this.val = val;
     this.next = null;
 }
var removeNthFromEnd = function(head, n) {
  if(head === null || head.next === null){
    return null;
  }
  var fast = head, slow = head;
  for(var i = 0; i < n; i++){
    fast = fast.next;
  }
  if(fast === null){
    head = head.next;
    return head;
  }
  while(fast.next !== null){
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
  return head;
};
