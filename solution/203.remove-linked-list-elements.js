/*
 * @lc app=leetcode id=203 lang=javascript
 *
 * [203] Remove Linked List Elements
 *
 * https://leetcode.com/problems/remove-linked-list-elements/description/
 *
 * algorithms
 * Easy (35.99%)
 * Likes:    867
 * Dislikes: 52
 * Total Accepted:    233.3K
 * Total Submissions: 648K
 * Testcase Example:  '[1,2,6,3,4,5,6]\n6'
 *
 * Remove all elements from a linked list of integers that have value val.
 * 
 * Example:
 * 
 * 
 * Input:  1->2->6->3->4->5->6, val = 6
 * Output: 1->2->3->4->5
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  let prev = null;
  let cur = head;
  while(cur) {
    if (cur.val === val) {
      if (prev) {
        prev.next = cur.next; // 修改当前地址上的数据
      } else {
        head = cur.next;
      }
    } else {
      prev = cur; // 将 prev 指向到 cur 对应的地址(向下移动)
    }
    cur = cur.next; // 将 cur 变量指向到它的 next 下一个地址上
  }

  return head
}
