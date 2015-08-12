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
  // use a object (hashmap) to store the first List
  var record = {};
  // use two pointer to go over each list
  var p1 = headA, p2 = headB;
  // iterate through each node in headA
  while(p1){
    // record each node with the value
    record[p1.val] = true;
    // move the the next list
    p1 = p1.next;
  }
  // after iterating the first list, iterate the second list
  while(p2){
    // if the second node's value is recorded in the record, it's the intersaction, return the node
    if(record[p2.val]){
      return p2;
    }
    // otherwise move to the next node
    p2 = p2.next;
  }
  // if nothing found, return null
  return null;
};
