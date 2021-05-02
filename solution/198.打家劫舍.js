/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 *
 * https://leetcode-cn.com/problems/house-robber/description/
 *
 * algorithms
 * Medium (49.23%)
 * Likes:    1428
 * Dislikes: 0
 * Total Accepted:    290.5K
 * Total Submissions: 589.9K
 * Testcase Example:  '[1,2,3,1]'
 *
 * 
 * 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
 * 
 * 给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：[1,2,3,1]
 * 输出：4
 * 解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
 * 偷窃到的最高金额 = 1 + 3 = 4 。
 * 
 * 示例 2：
 * 
 * 
 * 输入：[2,7,9,3,1]
 * 输出：12
 * 解释：偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
 * 偷窃到的最高金额 = 2 + 9 + 1 = 12 。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 0 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 像这种单串问题，通常需要分偷和不偷两种情况
 * dp[i] := 下标i结尾的串的最大值
 * 那么对于下标为i的最大值，有：
 * dp[i] = max(dp[i-2]+A[i], dp[i-1])
 */
var rob = function(nums) {
  let len = nums.length
  if (len === 1) {
    return nums[0]
  }
  
  let dp2 = nums[0] > nums[1] ? nums[0] : nums[1]
  if (len === 2) {
    return dp2
  }

  let dp = [nums[0], dp2]
  for (let i = 2; i < len; i++) {
    dp[i] = Math.max(dp[i-2]+nums[i], dp[i-1])
  }

  return dp[len-1]
};
// @lc code=end

