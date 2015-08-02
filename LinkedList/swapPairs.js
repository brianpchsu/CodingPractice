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
  // if head is null or just one node, then there is no need to do anything
  if(!head || !head.next) return head;
  // if more than 1 node, then use a dummy node to help tracking
  var dummy = new ListNode(0);
  // connect dummy node with head
  dummy.next = head;
  // use two pointer, p1 to dummy, p2 to head (here we don't really need p2, can just use head for the following)
  var p1 = dummy, p2 = head;
  // while our current head and next is not null
  while(p2 && p2.next){
    // save the 3rd node (head.next.next) to temp
    var temp = p2.next.next;
    // connect dummy's next to the second node
    p1.next = p2.next;
    // connect the original first node to p1.next.next (second node)
    p1.next.next = p2;
    // connect the second node with the original third node
    p2.next = temp;
    // move the p1 to p2, and p2 to the temp for next iteration
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
