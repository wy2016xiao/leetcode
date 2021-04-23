/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 使用最小花费爬楼梯
 *
 * https://leetcode-cn.com/problems/min-cost-climbing-stairs/description/
 *
 * algorithms
 * Easy (55.10%)
 * Likes:    542
 * Dislikes: 0
 * Total Accepted:    93.5K
 * Total Submissions: 169.7K
 * Testcase Example:  '[10,15,20]'
 *
 * 数组的每个下标作为一个阶梯，第 i 个阶梯对应着一个非负数的体力花费值 cost[i]（下标从 0 开始）。
 * 
 * 每当你爬上一个阶梯你都要花费对应的体力值，一旦支付了相应的体力值，你就可以选择向上爬一个阶梯或者爬两个阶梯。
 * 
 * 请你找出达到楼层顶部的最低花费。在开始时，你可以选择从下标为 0 或 1 的元素作为初始阶梯。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：cost = [10, 15, 20]
 * 输出：15
 * 解释：最低花费是从 cost[1] 开始，然后走两步即可到阶梯顶，一共花费 15 。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
 * 输出：6
 * 解释：最低花费方式是从 cost[0] 开始，逐个经过那些 1 ，跳过 cost[3] ，一共花费 6 。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * cost 的长度范围是 [2, 1000]。
 * cost[i] 将会是一个整型数据，范围为 [0, 999] 。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 * 假设f(n)是第n步为止的最小花费
 * 那么，第n步可以从n-1跳过来，也可以从n-2跳过来
 * 我们需要取最小值
 * 即 Math.min((f(n-1)+arr[n-1], f(n-2)+arr[n-2]))
 * 状态转移方程为：f(n) = Math.min((f(n-1)+arr[n-1], f(n-2)+arr[n-2]))
 * 可以使用一个数组来保存f(n)的花费
 */
var minCostClimbingStairs = function(cost) {
  let dp = [0, 0]
  // n <= cost.length是因为有最后一步，最后一步需要跳数组来
  for (let n = 2; n <= cost.length; n++) {
    dp[n] = Math.min(dp[n-1]+cost[n-1], dp[n-2]+cost[n-2])
  }
  return dp.pop()
};
// @lc code=end

