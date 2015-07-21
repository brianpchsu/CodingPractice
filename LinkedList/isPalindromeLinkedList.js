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
  // if head is null or head.next is null, it's palindrome
  if (!head || !head.next) return true;
  // use two pointer to get the middle point
  var slow = head, fast = head;
  while(fast.next && fast.next.next){
    slow = slow.next;
    fast = fast.next.next;
  }
  // reverse the second half of the linkedlist
  var secondHead = slow.next, pre = null;
  // while the second half node is not null
  while(secondHead){
    // save secondHead.next to temp
    var temp = secondHead.next;
    // update secondHead.next with null value (the first time)
    secondHead.next = pre;
    // move current node to pre node
    pre = secondHead;
    // iterate to the next node (temp)
    secondHead = temp;
  }
  // compare the first half and second half
  var pointer = head;
  // while the second half node is not null
  while(pre){
    // check if the two values are not the same
    if(pointer.val !== pre.val) return false;
    // iterate to the next node of both part
    pre = pre.next;
    pointer = pointer.next;
  }
  return true;
};
