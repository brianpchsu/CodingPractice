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
function ListNode(val) {
    this.val = val;
    this.next = null;
}

var swapPairs = function(head) {
  if(!head || !head.next) return head;
  var dummy = new ListNode(0);
  dummy.next = head;
  var p1 = dummy, p2 = head;
  while(p2 && p2.next){
    var temp = p2.next.next;
    p1.next = p2.next;
    p1.next.next = p2;
    p2.next = temp;

    p1 = p2;
    p2 = temp;
  }
  return dummy.next;
};

// Recursive solution (not fully got it yet)
// var swapPairs = function(head){
//     if(!head || !head.next) return head;
//     var nextPair = head.next.next;
//     var newHead = head.next;
//     head.next.next = head;
//     head.next = swapPairs(nextPair);
//     return newHead;
// };

var first = new ListNode(1);
var second = new ListNode(2);
first.next = second;
console.log(swapPairs(first));
