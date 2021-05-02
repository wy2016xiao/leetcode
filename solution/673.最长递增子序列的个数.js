/*
 * @lc app=leetcode.cn id=673 lang=javascript
 *
 * [673] 最长递增子序列的个数
 *
 * https://leetcode-cn.com/problems/number-of-longest-increasing-subsequence/description/
 *
 * algorithms
 * Medium (37.71%)
 * Likes:    296
 * Dislikes: 0
 * Total Accepted:    20.8K
 * Total Submissions: 55.2K
 * Testcase Example:  '[1,3,5,4,7]'
 *
 * 给定一个未排序的整数数组，找到最长递增子序列的个数。
 * 
 * 示例 1:
 * 
 * 
 * 输入: [1,3,5,4,7]
 * 输出: 2
 * 解释: 有两个最长递增子序列，分别是 [1, 3, 4, 7] 和[1, 3, 5, 7]。
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: [2,2,2,2,2]
 * 输出: 5
 * 解释: 最长递增子序列的长度是1，并且存在5个子序列的长度为1，因此输出5。
 * 
 * 
 * 注意: 给定的数组长度不超过 2000 并且结果一定是32位有符号整数。
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 比起LIS，这里要同时维护一个序列用来存储dp[i]长度有几个
 * count[i] := dp[i]长度下，有几个一样的长度出现
 */
var findNumberOfLIS = function(nums) {
  let len = nums.length
  let dp = new Array(len).fill(1)
  let maxCount = new Array(len).fill(1)
  let max = 1
  for (let i = 0; i < len; i++) { // 循环DP
    for (let j = 0; j < i; j++) { // 遍历nums
      if (nums[j] < nums[i]) {
        if (dp[j]+1 > dp[i]) {
          dp[i] = dp[j] + 1
          maxCount[i] = maxCount[j]
        }else if (dp[j]+1 === dp[i]) {
          maxCount[i]+=maxCount[j]
        }
      }
    }

    if (max < dp[i]) {
      max = dp[i]
    }
  }

  let res = 0
  for (let i = 0; i < len; i++) {
    max === dp[i] && (res+=maxCount[i])
  }
  return res
};
// @lc code=end

