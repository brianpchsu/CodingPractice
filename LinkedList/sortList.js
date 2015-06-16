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
var sortList = function(head) {
  // if there is no node or only one node, no need to sort
  if(!head || !head.next) return head;
  // split the list into two
  var middle = getMiddle(head);
  var nextHalf = middle.next;
  middle.next = null;
  // divide and conquer the sorting into two parts
  return merge(sortList(head), sortList(nextHalf));
};

// helper function to get the middle of the node
var getMiddle = function(head){
  if(!head) return head;
  var slow = head, fast = head;
  while(fast.next !== null && fast.next.next !== null){
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

// merge two list using constant space complexity
var merge = function(head1, head2){
  var helper = new ListNode(0);
  helper.next = head1;
  var pre = helper;
  while(head1 !== null && head2 !== null){
    // if head1 val is less than head2 val, move the node to next
    if(head1.val < head2.val){
      head1 = head1.next;
    } else {
      // if head2 is smaller, save the next temporary
      var next = head2.next;
      // save the head1.next node to head2.next
      head2.next = pre.next;
      //assign head2 to pre.next
      pre.next = head2;
      // save next back to head2
      head2 = next;
    }
    pre = pre.next;
  }
  // if there are still nodes left in head2, connect that to pre
  if(head2 !== null){
    pre.next = head2;
  }
  return helper.next;
};
