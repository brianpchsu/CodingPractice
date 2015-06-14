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
  return mergeSort(head);
};

var mergeSort = function(head){
  if(!head || !head.next) return head;
  var walker = head;
  var runner = head;
  while(runner.next !== null && runner.next.next !== null){
    walker = walker.next;
    runner = runner.next.next;
  }
  var head2 = walker.next;
  walker.next = null;
  var head1 = head;
  head1 = mergeSort(head1);
  head2 = mergeSort(head2);
  return merge(head1, head2);
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
