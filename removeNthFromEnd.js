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
  // if LinkedList is null or only 1 node, return null
  if(head === null || head.next === null){
    return null;
  }
  // use two pointer to track
  var fast = head, slow = head;
  // let the fast pointer to run n step
  for(var i = 0; i < n; i++){
    fast = fast.next;
  }
  // if the fast is null, that mean we need to remove the head
  if(fast === null){
    head = head.next;
    return head;
  }
  // if the fast is not null, the node needs to be removed is in the middle
  // let slow and fast move at same speed
  // if fast.next is null, fast is at the end and slow is at the node before the removing node
  while(fast.next !== null){
    slow = slow.next;
    fast = fast.next;
  }
  // remove the node
  slow.next = slow.next.next;
  return head;
};
