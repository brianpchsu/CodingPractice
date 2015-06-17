/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  if(!head || !head.next) return;
  var slow = head, fast = head;
  while(fast.next && fast.next.next){
    slow = slow.next;
    fast = fast.next.next;
  }
  var middle = slow.next;
  var last = middle;
  var pre = null;
  while(last){
    var next = last.next;
    last.next = pre;
    pre = last;
    last = next;
  }
  slow.next = null;
  while(head && pre){
    var next1 = head.next;
    head.next = pre;
    pre = pre.next;
    head.next.next = next1;
    head = next1;
  }
};
