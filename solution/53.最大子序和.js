/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 *
 * https://leetcode-cn.com/problems/maximum-subarray/description/
 *
 * algorithms
 * Easy (53.98%)
 * Likes:    3153
 * Dislikes: 0
 * Total Accepted:    488.4K
 * Total Submissions: 904.8K
 * Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
 *
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
 * 输出：6
 * 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [1]
 * 输出：1
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [0]
 * 输出：0
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：nums = [-1]
 * 输出：-1
 * 
 * 
 * 示例 5：
 * 
 * 
 * 输入：nums = [-100000]
 * 输出：-100000
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * -10^5 
 * 
 * 
 * 
 * 
 * 进阶：如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的 分治法 求解。
 * 
 */

/**
 * nums = [-2,1,-3,4,-1,2,1,-5,4]
 * 思路：
 * 首先，这道题需要知道的是，你一定需要遍历算出所有子串的和
 * 然后在所有和中找到最大的一个
 * 
 * 那么，如何去遍历呢？
 * 通常我们对于遍历方式，有三种
 * 1.以i为开头遍历，-2；-2 1；-2 1 -3；-2 1 -3 4；……
 * 2.按照子串长度遍历
 * 3.以i为结尾开始遍历，4；4 -3；4 -3 1；4 -3 1 -2；
 * 
 * 动态规划中我们需要寻找子问题，并且子问题是需要和当前问题有联系的
 * 仔细想想，第三种才是最有联系的
 * 
 * 思考状态转移方程：
 * 我们考虑f(i)，它的结果就是下方所有值中最大的那个
 * A[i]
 * A[i] + A[i-1]
 * A[i] + A[i-1] + A[i-2]
 * A[i] + A[i-1] + A[i-2] + ... + A[0]
 * 观察上面的式子，我们发现除第一项外，后面的几项可以写成f(i-1) + A[i]
 * 那么再加上第一项，状态转移方程为：f(i) = max(f(i-1) + nums[i], nums[i])
 * 
 * 
 * 初始条件：f(0) = nums[0]
 * 
 * 边界情况：nums.length === 1
 */
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  // 边界情况
  if (nums.length === 1){
    return nums[0]
  }

  let max = prev = nums[0]
  for (let i = 1;i < nums.length; i++) {
    // 状态转移方程
    prev = Math.max(prev + nums[i], nums[i])
    // 获得f(i)之后还没结束，需要和保存的max比较一下
    // 之所以这样，是因为max不一定是前一个，可能是老早之前的某一个结果
    max = Math.max(prev, max)
  }

  return max
};
// @lc code=end

