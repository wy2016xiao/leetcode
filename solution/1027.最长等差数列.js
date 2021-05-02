/*
 * @lc app=leetcode.cn id=1027 lang=javascript
 *
 * [1027] 最长等差数列
 *
 * https://leetcode-cn.com/problems/longest-arithmetic-subsequence/description/
 *
 * algorithms
 * Medium (43.47%)
 * Likes:    127
 * Dislikes: 0
 * Total Accepted:    10.5K
 * Total Submissions: 24.2K
 * Testcase Example:  '[3,6,9,12]'
 *
 * 给定一个整数数组 A，返回 A 中最长等差子序列的长度。
 * 
 * 回想一下，A 的子序列是列表 A[i_1], A[i_2], ..., A[i_k] 其中 0 <= i_1 < i_2 < ... < i_k <=
 * A.length - 1。并且如果 B[i+1] - B[i]( 0 <= i < B.length - 1) 的值都相同，那么序列 B
 * 是等差的。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：[3,6,9,12]
 * 输出：4
 * 解释： 
 * 整个数组是公差为 3 的等差数列。
 * 
 * 
 * 示例 2：
 * 
 * 输入：[9,4,7,2,10]
 * 输出：3
 * 解释：
 * 最长的等差子序列是 [4,7,10]。
 * 
 * 
 * 示例 3：
 * 
 * 输入：[20,1,15,3,10,5,8]
 * 输出：4
 * 解释：
 * 最长的等差子序列是 [20,15,10,5]。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 2 <= A.length <= 2000
 * 0 <= A[i] <= 10000
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 * 
 * 和《873-最长斐波那契子序列》一样的思路，
 * 首先我们定义dp[i][j]是以A[i]、A[j]结尾的最长等差数列的长度
 * 
 * 那么会有一个k，使得A[j] - A[i] = A[i] - A[k]
 * dp[i][j] = dp[k][i] + 1
 * 
 * 同样是三个循环来找到这三个变量
 * 
 * 初始状态为2
 * 
 * 这里要注意的是初始状态，只要len>1，那么肯定有至少2个
 * 这是唯一和873不同的地方
 */
var longestArithSeqLength = function(A) {
  let len = A.length
  let dp = new Array(len).fill(0).map(() => new Array(len).fill(2))
  let max = 2
  for (let i = 0; i < len; i++) {
    for (let j = i+1; j < len; j++) {
      for (let k = 0; k < i; k++) {
        if (A[j] - A[i] === A[i] - A[k]) {

          dp[i][j] = dp[k][i] + 1
          max = Math.max(dp[i][j], max)
        }
      }
    }
  }

  return max
};
longestArithSeqLength([83,20,17,43,52,78,68,45])
// @lc code=end

