/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if (!head || !head.next) return true;
  var slow = head, fast = head;
  while(fast.next && fast.next.next){
    slow = slow.next;
    fast = fast.next.next;
  }
  var last = slow.next, pre = null;
  while(last){
    var temp = last.next;
    last.next = pre;
    pre = last;
    last = temp;
  }
  var pointer = head;
  while(pre){
    if(pointer.val !== pre.val) return false;
    pre = pre.next;
    pointer = pointer.next;
  }
  return true;
};
