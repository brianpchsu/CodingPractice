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
  if(!l1) return l2;
  if(!l2) return l1;

  var newhead = new ListNode(-1);
  var pointer = newhead;
  var carry = 0;
  while(l1 || l2){
    var value1 = l1? l1.val: 0;
    var value2 = l2? l2.val: 0;
    var sumValue = Math.floor((value1 + value2 + carry)%10);
    var node = new ListNode(sumValue);
    carry = Math.floor((value1 + value2 + carry)/10);
    pointer.next = node;
    pointer = pointer.next;
    l1 = l1? l1.next: null;
    l2 = l2? l2.next: null;
  }
  if(carry === 1){
    pointer.next = new ListNode(1);
  }
  return newhead.next;
};

var list1 = new ListNode(1);
var list2 = new ListNode(2);
console.log(addTwoNumbers(list1, list2));
