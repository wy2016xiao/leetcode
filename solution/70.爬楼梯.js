/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 *
 * https://leetcode-cn.com/problems/climbing-stairs/description/
 *
 * algorithms
 * Easy (51.83%)
 * Likes:    1618
 * Dislikes: 0
 * Total Accepted:    425.6K
 * Total Submissions: 821.2K
 * Testcase Example:  '2'
 *
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 
 * 注意：给定 n 是一个正整数。
 * 
 * 示例 1：
 * 
 * 输入： 2
 * 输出： 2
 * 解释： 有两种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶
 * 2.  2 阶
 * 
 * 示例 2：
 * 
 * 输入： 3
 * 输出： 3
 * 解释： 有三种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶 + 1 阶
 * 2.  1 阶 + 2 阶
 * 3.  2 阶 + 1 阶
 * 
 * 
 */
/**
 * 状态转移方程：
 * f(x) = f(x-1) + f(x-2)
 * 
 * 边界情况、初始条件：
 * f(0) = 1
 * f(1) = 1
 * 
 */
// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  // 设a为f(0)
  // 给b c一个初始值
  let a = 1, b = 0, c = 0
  // 从f(1)开始转移
  for (let i = 1;i <= n; i++) {
    c = b
    b = a
    a = b + c
  }
  return a
};
// @lc code=end

