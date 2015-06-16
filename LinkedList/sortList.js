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
  if(!head || !head.next) return head;
  var middle = getMiddle(head);
  var nextHalf = middle.next;
  middle.next = null;
  return merge(sortList(head), sortList(nextHalf));
};

var getMiddle = function(head){
  if(!head) return head;
  var slow = head, fast = head;
  while(fast.next !== null && fast.next.next !== null){
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

var merge = function(head1, head2){
  var helper = new ListNode(0);
  helper.next = head1;
  var pre = helper;
  while(head1 !== null && head2 !== null){
    if(head1.val < head2.val){
      head1 = head1.next;
    } else {
      var next = head2.next;
      head2.next = pre.next;
      pre.next = head2;
      head2 = next;
    }
    pre = pre.next;
  }
  if(head2 !== null){
    pre.next = head2;
  }
  return helper.next;
};
