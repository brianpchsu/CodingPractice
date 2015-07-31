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
// merge 2 lists and use the merged list to merge the third list
// Time: 2n + 3n + 4n + ... + kn = O(nk^2)
// Space: O(1)
var mergeKLists = function(lists) {
  if(!lists || lists.length === 0) return null;
  if(lists.length ===1) return lists[0];

  var l1 = lists.pop();
  var l2 = lists.pop();
  var merged = mergeTwoLists(l1, l2);
  lists.push(merged);
  return mergeKLists(lists);
};

// Solution two divide and merge
// Time: 2n * k/2 + 4n * k/4 + ... + (2^x) n /(2^x) = nkx
// k/(2^x) = 1 -> 2^x = k -> x = log2(k)
// So time is O(nk log(k))
// Space is O(1)
var mergeKLists = function(lists){
  // if the list is empty, return null
  if(lists.length === 0) return null;
  // end will be the last item in lists
  var end = lists.length-1;
  // run the merge until end is 0
  while(end > 0){
    // each new iteration begin starts from 0
    var begin  = 0;
    // divide and merge start
    while(begin < end){
      // the new merged at lists[begin] are the first (increment) and last (decrement)
      lists[begin] = mergeTwoLists(lists[begin], lists[end]);
      begin++;
      end--;
    }
    // end will be only half of the starting amount, iterate again for the double length list in the lists
  }
  return lists[0];
};

var mergeTwoLists = function(l1, l2) {
  if(l1 === null || l1.length === 0) return l2;
  if(l2 === null || l2.length === 0) return l1;
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
