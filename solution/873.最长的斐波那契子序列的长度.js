/*
 * @lc app=leetcode.cn id=873 lang=javascript
 *
 * [873] 最长的斐波那契子序列的长度
 *
 * https://leetcode-cn.com/problems/length-of-longest-fibonacci-subsequence/description/
 *
 * algorithms
 * Medium (49.83%)
 * Likes:    165
 * Dislikes: 0
 * Total Accepted:    12K
 * Total Submissions: 24K
 * Testcase Example:  '[1,2,3,4,5,6,7,8]'
 *
 * 如果序列 X_1, X_2, ..., X_n 满足下列条件，就说它是 斐波那契式 的：
 * 
 * 
 * n >= 3
 * 对于所有 i + 2 <= n，都有 X_i + X_{i+1} = X_{i+2}
 * 
 * 
 * 给定一个严格递增的正整数数组形成序列，找到 A 中最长的斐波那契式的子序列的长度。如果一个不存在，返回  0 。
 * 
 * （回想一下，子序列是从原序列 A 中派生出来的，它从 A 中删掉任意数量的元素（也可以不删），而不改变其余元素的顺序。例如， [3, 5, 8] 是
 * [3, 4, 5, 6, 7, 8] 的一个子序列）
 * 
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入: [1,2,3,4,5,6,7,8]
 * 输出: 5
 * 解释:
 * 最长的斐波那契式子序列为：[1,2,3,5,8] 。
 * 
 * 
 * 示例 2：
 * 
 * 输入: [1,3,7,11,12,14,18]
 * 输出: 3
 * 解释:
 * 最长的斐波那契式子序列有：
 * [1,11,12]，[3,11,14] 以及 [7,11,18] 。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 3 <= A.length <= 1000
 * 1 <= A[0] < A[1] < ... < A[A.length - 1] <= 10^9
 * （对于以 Java，C，C++，以及 C# 的提交，时间限制被减少了 50%）
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 * 
 * 状态定义：
 * dp[i][j] := 以A[i] A[j]结尾的最长斐波那契子序列长度
 * 即：dp[i][j] = Len(....A[i],A[j])
 * 
 * 此时令A[k]为i之前那个菲波那切数，则有：
 * dp[i][j] = dp[k][i] + 1
 * 
 * 问题在于如何找到这个k
 * 
 * k应该是满足A[k] + A[i] = A[j]的所有中，最大的
 * 因为只有k足够大才能让前面满足更多
 */
var lenLongestFibSubseq = function(arr) {
  let len = arr.length
  let dp = new Array(len).fill(0).map(() => new Array(len).fill(0))
  let max = 0
  for (let i = 0; i < len; i++) {
    for (let j = i+1; j < len; j++) {
      for (let k = 0; k < i; k++) {
        if (arr[k] + arr[i] == arr[j]) {
          if (dp[k][i] === 0) {
            dp[k][i] = 2
          }
          dp[i][j] = dp[k][i] + 1
          max = Math.max(max, dp[i][j])
        }
      }
    }
  }

  return max 
};
lenLongestFibSubseq([1,3,7,11,12,14,18])
// @lc code=end

