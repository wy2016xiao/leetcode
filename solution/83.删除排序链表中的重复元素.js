/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 *
 * https://leetcode.cn/problems/remove-duplicates-from-sorted-list/description/
 *
 * algorithms
 * Easy (53.24%)
 * Likes:    890
 * Dislikes: 0
 * Total Accepted:    511.3K
 * Total Submissions: 960.5K
 * Testcase Example:  '[1,1,2]'
 *
 * 给定一个已排序的链表的头 head ， 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：head = [1,1,2]
 * 输出：[1,2]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：head = [1,1,2,3,3]
 * 输出：[1,2,3]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表中节点数目在范围 [0, 300] 内
 * -100 <= Node.val <= 100
 * 题目数据保证链表已经按升序 排列
 * 
 * 
 */

const { ListNode, genListNode } = require("../others/utils");

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
var deleteDuplicates = function(head) {
    if(head === null) return head
    // 经典双指针解法
    // 有指针temp和指针index
    // temp表示当前已过滤的链表的最后一个节点
    // index用来扫描剩下节点，找到第一个和temp不同的节点，赋值给其next
    // 直至index扫描至末尾，返回
    let res = temp = head;
    let index = head.next;
    while (index !== null) {
        if (temp.val !== index.val) {
            temp.next = index;
            temp = index;
        }
        index = index.next;
    }
    // 这里注意，因为是链表，一定要记得把尾巴处理掉
    temp.next = null;
    return res;
};
// @lc code=end
deleteDuplicates(genListNode([1,1,2,3,3]))
