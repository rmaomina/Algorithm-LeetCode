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
var detectCycle = function(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      let n1 = head;
      let n2 = slow;

      while (n1 !== n2) {
        n1 = n1.next;
        n2 = n2.next;
      }

      return n1
    }
  }

  return null;
};