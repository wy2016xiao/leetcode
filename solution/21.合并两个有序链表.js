/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 *
 * https://leetcode.cn/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (66.53%)
 * Likes:    2786
 * Dislikes: 0
 * Total Accepted:    1.2M
 * Total Submissions: 1.8M
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：l1 = [1,2,4], l2 = [1,3,4]
 * 输出：[1,1,2,3,4,4]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：l1 = [], l2 = []
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：l1 = [], l2 = [0]
 * 输出：[0]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 两个链表的节点数目范围是 [0, 50]
 * -100 
 * l1 和 l2 均按 非递减顺序 排列
 * 
 * 
 */

const { genListNode, ListNode } = require("../others/utils");

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // 临界条件
    if (list1 === null) return list2;
    if (list2 === null) return list1;
    // 做两个临时变量
    // 一个用来存储第一个节点，方便之后返回
    // 一个用来做当前指针，指向当前已排好序的链表的末尾
    let res = new ListNode();
    let temp = res;

    // 循环，结束标志为其中一条链表遍历结束，那么剩下一个链表就可以直接全部塞在temp的最后
    // 找出当前比较小的那一个节点，塞到temp的next中
    // 然后将指针移动到下一个
    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            temp.next = list1;
            list1 = list1.next;
        } else {
            temp.next = list2;
            list2 = list2.next;
        }
        temp = temp.next;
    }

    if (list1 === null) {
        temp.next = list2;
    }
    if (list2 === null) {
        temp.next = list1;
    }

    return res.next;
};
// @lc code=end
mergeTwoLists(genListNode([1,2,4]), genListNode([1,3,4]))
