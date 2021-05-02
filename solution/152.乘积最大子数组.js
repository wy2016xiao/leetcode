/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 *
 * https://leetcode-cn.com/problems/maximum-product-subarray/description/
 *
 * algorithms
 * Medium (41.39%)
 * Likes:    1067
 * Dislikes: 0
 * Total Accepted:    136.8K
 * Total Submissions: 330.4K
 * Testcase Example:  '[2,3,-2,4]'
 *
 * 给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: [2,3,-2,4]
 * 输出: 6
 * 解释: 子数组 [2,3] 有最大乘积 6。
 * 
 * 
 * 示例 2:
 * 
 * 输入: [-2,0,-1]
 * 输出: 0
 * 解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * 一样，用最大子数组和来做
 * 
 * 思考状态转移方程：
 * 我们考虑f(i)，它的结果就是下方所有值中最大的那个
 * A[i]
 * A[i] * A[i-1]
 * A[i] * A[i-1] * A[i-2]
 * A[i] * A[i-1] * A[i-2] * ... * A[0]
 * 
 * dpMin[i] := A[i]为结尾的最小乘积子串的值
 * dpMax[i] := A[i]为结尾的最大乘积子串的值
 * dp[i] := 
 * 乘法和加法不同的是，乘以一个负数是变小的，所以dp[i]要分情况：
 * 当A[i] < 0时，dp[i-1]取最小的，A[i] * dp[i]才最大
 * 当A[i] > 0时，dp[i-1]取最大的，A[i] * dp[i]才最大
 * 
 * 由于只取dp[i-1]所以只需要两个变量来保存最大最小
 */
var maxProduct = function(nums) {
  // 边界情况
  if (nums.length === 1){
    return nums[0]
  }

  let max = nums[0]
  let prevMin = prevMax = nums[0]
  for (let i = 1; i < nums.length; i++) {
    let curMax, curMin
    curMax = Math.max(prevMin * nums[i], prevMax * nums[i], nums[i])
    curMin = Math.min(prevMin * nums[i], prevMax * nums[i], nums[i])

    prevMin = curMin
    prevMax = curMax

    max = Math.max(prevMax, max)
  }

  return max
};
// @lc code=end

