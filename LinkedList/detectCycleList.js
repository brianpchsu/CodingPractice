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
var detectCycle = function(head) {
  var first = head, second = head;
  while(first && second){
    first = first.next;
    second = second.next;
    if(second){
      second = second.next;
    }
    if(first === second){
      break;
    }
  }
  if(!second) return null;
  first = head;
  while(first !== second){
    first = first.next;
    second = second.next;
  }
  return second;
};
