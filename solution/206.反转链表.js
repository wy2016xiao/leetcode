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

const { genListNode } = require("../others/utils");

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
 */
// 迭代
// var reverseList = function(head) {
//     if (!head || !head.next) return head;
//     let prev = null;
//     let cur = head;
//     let next = head.next;
//     while (cur !== null) {
//         cur.next = prev;
//         prev = cur;
//         cur = next;
//         next = next ? next.next : null;
//     }
//     return prev;
// };
// 递归
var reverseList = function(head) {
    if(!head || !head.next) return head;
    const res = reverseList(head.next)
    head.next.next = head;
    head.next = null;
    return res;
}
// @lc code=end
