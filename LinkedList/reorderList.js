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
  // find the middle node of the list
  var slow = head, fast = head;
  while(fast.next && fast.next.next){
    slow = slow.next;
    fast = fast.next.next;
  }
  var middle = slow.next;
  // reverse the second half of the list
  var last = middle;
  var pre = null;
  while(last){
    var next = last.next;
    last.next = pre;
    pre = last;
    last = next;
  }
  // make the first half's end null (disconnect 2 lists)
  slow.next = null;
  // combine two lists
  while(head && pre){
    var next1 = head.next;
    head.next = pre;
    pre = pre.next;
    head.next.next = next1;
    head = next1;
  }
};
