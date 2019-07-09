/*
 * @lc app=leetcode id=82 lang=javascript
 *
 * [82] Remove Duplicates from Sorted List II
 *
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/description/
 *
 * algorithms
 * Medium (33.37%)
 * Likes:    888
 * Dislikes: 75
 * Total Accepted:    188.1K
 * Total Submissions: 563.1K
 * Testcase Example:  '[1,2,3,3,4,4,5]'
 *
 * Given a sorted linked list, delete all nodes that have duplicate numbers,
 * leaving only distinct numbers from the original list.
 * 
 * Example 1:
 * 
 * 
 * Input: 1->2->3->3->4->4->5
 * Output: 1->2->5
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 1->1->1->2->3
 * Output: 2->3
 * 
 * 
 */
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
var deleteDuplicates = function(head) {
  if (!head || !head.next) return head
  let cur = head.next;
  let prev = head;
  let pprev = {
    val: null,
    next: head
  };
  let ppprev = pprev;
  let hasDup = false;
  while(cur){
    if (cur.val === prev.val) {
      prev.next = cur.next
      hasDup = true
    } else {
      if (hasDup) {
        hasDup = false;
        pprev.next = cur
      }else {
        pprev = prev
      }
      prev = cur
    }
    cur = cur.next
  }

  if (hasDup) pprev.next = null
  return ppprev.next
};

