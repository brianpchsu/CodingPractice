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
  // use two pointer to check cycle
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
  // if the second (fast one) is null, no cycle
  if(!second) return null;
  // going together at same speed to find the target
  first = head;
  while(first !== second){
    first = first.next;
    second = second.next;
  }
  return second;
};
