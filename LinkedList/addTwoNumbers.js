/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

var addTwoNumbers = function(l1, l2) {
  // if one list is null, no point to add, return the other one
  if(!l1) return l2;
  if(!l2) return l1;
  // define a new list for final result
  var newhead = new ListNode(-1);
  // use helper pointer for tracking
  var pointer = newhead;
  var carry = 0;
  // if either of the node in the list still not null, add the node to the final result
  while(l1 || l2){
    // get value from each node
    var value1 = l1? l1.val: 0;
    var value2 = l2? l2.val: 0;
    // create node for the sumValue
    var sumValue = Math.floor((value1 + value2 + carry)%10);
    var node = new ListNode(sumValue);
    // record carry
    carry = Math.floor((value1 + value2 + carry)/10);
    // update the pointer and prepare for next itertion
    pointer.next = node;
    pointer = pointer.next;
    l1 = l1? l1.next: null;
    l2 = l2? l2.next: null;
  }
  // if after running all digit and there is still carry, add the new digit
  if(carry === 1){
    pointer.next = new ListNode(1);
  }
  return newhead.next;
};

var list1 = new ListNode(1);
var list2 = new ListNode(2);
console.log(addTwoNumbers(list1, list2));
