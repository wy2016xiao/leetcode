/*
 * @lc app=leetcode.cn id=740 lang=javascript
 *
 * [740] 删除并获得点数
 *
 * https://leetcode-cn.com/problems/delete-and-earn/description/
 *
 * algorithms
 * Medium (54.29%)
 * Likes:    234
 * Dislikes: 0
 * Total Accepted:    12.4K
 * Total Submissions: 22.8K
 * Testcase Example:  '[3,4,2]'
 *
 * 给你一个整数数组 nums ，你可以对它进行一些操作。
 * 
 * 每次操作中，选择任意一个 nums[i] ，删除它并获得 nums[i] 的点数。之后，你必须删除每个等于 nums[i] - 1 或 nums[i]
 * + 1 的元素。
 * 
 * 开始你拥有 0 个点数。返回你能通过这些操作获得的最大点数。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [3,4,2]
 * 输出：6
 * 解释：
 * 删除 4 获得 4 个点数，因此 3 也被删除。
 * 之后，删除 2 获得 2 个点数。总共获得 6 个点数。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [2,2,3,3,3,4]
 * 输出：9
 * 解释：
 * 删除 3 获得 3 个点数，接着要删除两个 2 和 4 。
 * 之后，再次删除 3 获得 3 个点数，再次删除 3 获得 3 个点数。
 * 总共获得 9 个点数。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 1 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * 构造一个数组all，all[i]代表着i这个数字有多少个
 * 那么[1,2,333]可以表示为all = [1,1,3]
 * 这样以来其实原问题就变成了对all求打家劫舍问题
 * 
 * 回顾一下打家劫舍，
 * dp[i] = max(dp[i-2]+A[i], dp[i-1])
 */
var deleteAndEarn = function(nums) {
  let len = nums.length
  let max = Math.max(...nums)
  let all = new Array(max+1).fill(0)

  for (let i = 0; i < len; i++) {
    all[nums[i]] += 1
  }
  
  let dp2 = Math.max(all[0], all[1])
  let dp = [all[0], dp2]
  for (let i = 2; i < all.length; i++) {
    dp[i] = Math.max(dp[i-2]+all[i]*i, dp[i-1])
  }

  return dp[all.length-1]
};
// @lc code=end

