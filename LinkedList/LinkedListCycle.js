/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  // if head is null, no cycle
  if (!head) return false;
  // use two pointers for tracking, if there is a cycle, then the two
  // pointers will meet sometime
  var fast = head, slow = head;
  while(fast && fast.next){
    slow = slow.next;
    fast = fast.next.next;
    // if the two pointers meet, then return true
    if(slow === fast){
      return true;
    }
  }
  // if reaching here, fast to the end node, then no cycle
  return false;
};
