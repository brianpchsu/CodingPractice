/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

// Solution 1, recursive for merge K lists
var mergeKLists = function(lists) {
  if(!lists || lists.length === 0) return null;
  if(lists.length ===1) return lists[0];

  var l1 = lists.pop();
  var l2 = lists.pop();
  var merged = mergeTwoLists(l1, l2);
  lists.push(merged);
  return mergeKLists(lists);
};

var mergeTwoLists = function(l1, l2) {
  if(l1 === null) return l2;
  if(l2 === null) return l1;
  // Define a ListNode
  var head = new ListNode(0);
  // Define a pointer for later update
  var pointer = head;
  // go over node one by one
  while(l1 && l2){
    if(l1.val < l2.val){
      pointer.next = l1;
      l1 = l1.next;
    } else {
      pointer.next = l2;
      l2 = l2.next;
    }
    // update pointer's pointer to next one
    pointer = pointer.next;
  }
  // if there is any node remaining in one of the list, add them to the end
  if(l1 !== null){
    pointer.next = l1;
  }
  if(l2 !== null){
    pointer.next = l2;
  }
  // return head.next for the combined list
  return head.next;
};

console.log(mergeKLists([[], []]));
