/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 *
 * https://leetcode-cn.com/problems/reverse-linked-list/description/
 *
 * algorithms
 * Easy (71.48%)
 * Likes:    1684
 * Dislikes: 0
 * Total Accepted:    510.4K
 * Total Submissions: 713.6K
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * 反转一个单链表。
 * 
 * 示例:
 * 
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 * 
 * 进阶:
 * 你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * 两个指针，一个prev，一个head
 * 首先将next取出来暂存，然后将head的next指向prev（翻转）
 * 然后移动两个指针，prev = head, head = next
 */
var reverseList = function(head) {  
  let prev = null
  while (head) {
    let next = head.next
    head.next = prev
    prev = head
    head = next
  }
  return prev
};
// @lc code=end

