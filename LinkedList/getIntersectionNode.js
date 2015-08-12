/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  var record = {};
  var p1 = headA, p2 = headB;
  while(p1){
    record[p1.val] = true;
    p1 = p1.next;
  }
  while(p2){
    if(record[p2.val]){
      return p2;
    }
    p2 = p2.next;
  }
  return null;
};
