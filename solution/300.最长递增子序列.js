/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 *
 * https://leetcode-cn.com/problems/longest-increasing-subsequence/description/
 *
 * algorithms
 * Medium (49.19%)
 * Likes:    1564
 * Dislikes: 0
 * Total Accepted:    256.9K
 * Total Submissions: 522.1K
 * Testcase Example:  '[10,9,2,5,3,7,101,18]'
 *
 * 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。
 * 
 * 子序列是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7]
 * 的子序列。
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [10,9,2,5,3,7,101,18]
 * 输出：4
 * 解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [0,1,0,3,2,3]
 * 输出：4
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [7,7,7,7,7,7,7]
 * 输出：1
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * -10^4 
 * 
 * 
 * 
 * 
 * 进阶：
 * 
 * 
 * 你可以设计时间复杂度为 O(n^2) 的解决方案吗？
 * 你能将算法的时间复杂度降低到 O(n log(n)) 吗?
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * 
 * f(n) := 以n结尾的递增子串最大值
 * 那么f(0)-f(n)就可以列出所有成员结尾的子序列最大值的所有情况
 * 原问题的解就是max(f(0), f(1)....f(n))
 * 
 * 状态转移方程：
 * dp[i] = dp[j] + 1，其中nums[j] < nums[i] && dp[j] + 1 > dp[i]
 */
var lengthOfLIS = function(nums) {
  let len = nums.length
  let dp = new Array(len).fill(1)
  let max = 1
  for (let i = 1; i < len; i++) {
    // 外层循环循环DP每一项
    for (let j = 0; j < i; j++) {
      // 每层循环循环nums每一项，进行dp计算
      if (nums[j] < nums[i] && dp[j] + 1 > dp[i]) {
        dp[i] = dp[j] + 1
      }
    }
    max = Math.max(dp[i], max)
  }
  return max
};
// @lc code=end

