/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

function mergeTwoLists (list1, list2) {
  if (!list1 || !list2) return list1 || list2;

  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2)
    return list1
  } else {
    list2.next = mergeTwoLists(list1, list2.next)
    return list2
  }
}

var mergeKLists = function(lists) {
  if (!lists.length) return null;

  for (let i = 1; i < lists.length; i++) {
    lists[0] = mergeTwoLists(lists[0], lists[i])
  }
  return lists[0]
};