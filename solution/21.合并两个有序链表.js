/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 *
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (65.53%)
 * Likes:    1590
 * Dislikes: 0
 * Total Accepted:    494.4K
 * Total Submissions: 754.5K
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

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// 插入一个node到当前node之后
var insertNodePrev = function (node, byInsertNode) {
  byInsertNode.next = node
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (!l1 && !l2) return null
  if (!l1 || !l2) return l1 || l2

  let currentL1 = l1
  let currentL2 = l2
  let res // 返回值链表的最后一个节点
  let node
  
  while (true) {
    // c1 next === null
    if (
      currentL1 === null &&
      currentL2 !== null
    ) {
      res.next = currentL2
      return node
    }

    // c2 next === null
    if (
      currentL1 !== null &&
      currentL2 === null
    ) {
      res.next = currentL1
      return node
    }

    if (currentL1.val <= currentL2.val) {
      if (res) {
        res.next = currentL1
        res = res.next
      } else {
        res = currentL1
        node = res
      }
      currentL1 = currentL1.next
    } else {
      if (res) {
        res.next = currentL2
        res = res.next
      } else {
        res = currentL2
        node = res
      }
      currentL2 = currentL2.next
    }
  }
};
// @lc code=end

