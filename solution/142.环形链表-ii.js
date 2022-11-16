/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 *
 * https://leetcode.cn/problems/linked-list-cycle-ii/description/
 *
 * algorithms
 * Medium (56.49%)
 * Likes:    1853
 * Dislikes: 0
 * Total Accepted:    571.9K
 * Total Submissions: 1M
 * Testcase Example:  '[3,2,0,-4]\n1'
 *
 * 给定一个链表的头节点  head ，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
 * 
 * 如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos
 * 来表示链表尾连接到链表中的位置（索引从 0 开始）。如果 pos 是 -1，则在该链表中没有环。注意：pos
 * 不作为参数进行传递，仅仅是为了标识链表的实际情况。
 * 
 * 不允许修改 链表。
 * 
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 
 * 输入：head = [3,2,0,-4], pos = 1
 * 输出：返回索引为 1 的链表节点
 * 解释：链表中有一个环，其尾部连接到第二个节点。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 
 * 
 * 输入：head = [1,2], pos = 0
 * 输出：返回索引为 0 的链表节点
 * 解释：链表中有一个环，其尾部连接到第一个节点。
 * 
 * 
 * 示例 3：
 * 
 * 
 * 
 * 
 * 输入：head = [1], pos = -1
 * 输出：返回 null
 * 解释：链表中没有环。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表中节点的数目范围在范围 [0, 10^4] 内
 * -10^5 <= Node.val <= 10^5
 * pos 的值为 -1 或者链表中的一个有效索引
 * 
 * 
 * 
 * 
 * 进阶：你是否可以使用 O(1) 空间解决此题？
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 和141相比，除了要返回是否回文以外
 * 还要找到环形起点
 * 这里有个固定技巧
 * 当快慢指针相遇时，那个节点距离环形起点的节点数就是从起点到环形起点的节点数
 * 设从链表起始到环形起点（不算起点节点）有a个节点，环形一圈为b个节点
 * 设快指针走的节点数为f，慢指针走的节点数为s
 * 在两节点相遇时，有：
 * 1. f = 2s
 * 2. f - s = nb n为正整数
 * 两等式相减，得 s = nb
 * 
 * 设从起始处走到环形起点的步数为k
 * 则有k = a + nb  即a + 整数倍的圈数
 * 而又有s = nb
 * 所以k = a + s
 * 即s再走a步就到达起点了
 * 
 * 此时我们将快指针fp指到起点，一次走一步，当fp === sp时，刚好走了a步，说明此时两个指针在环形起点上
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if (head === null || head.next === null) return null;

    let slowPtr = fastPtr = head;
    while (fastPtr !== null && fastPtr.next !== null) {
        slowPtr = slowPtr.next;
        fastPtr = fastPtr.next.next;
        if (slowPtr === fastPtr) {
            fastPtr = head;
            while (slowPtr !== fastPtr) {
                slowPtr = slowPtr.next;
                fastPtr = fastPtr.next;
            }
            return slowPtr
        }
    }
    return null
};
// @lc code=end

