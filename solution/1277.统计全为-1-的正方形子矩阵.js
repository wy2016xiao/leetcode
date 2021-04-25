/*
 * @lc app=leetcode.cn id=1277 lang=javascript
 *
 * [1277] 统计全为 1 的正方形子矩阵
 *
 * https://leetcode-cn.com/problems/count-square-submatrices-with-all-ones/description/
 *
 * algorithms
 * Medium (71.97%)
 * Likes:    146
 * Dislikes: 0
 * Total Accepted:    15.3K
 * Total Submissions: 21.3K
 * Testcase Example:  '[[0,1,1,1],[1,1,1,1],[0,1,1,1]]'
 *
 * 给你一个 m * n 的矩阵，矩阵中的元素不是 0 就是 1，请你统计并返回其中完全由 1 组成的 正方形 子矩阵的个数。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：matrix =
 * [
 * [0,1,1,1],
 * [1,1,1,1],
 * [0,1,1,1]
 * ]
 * 输出：15
 * 解释： 
 * 边长为 1 的正方形有 10 个。
 * 边长为 2 的正方形有 4 个。
 * 边长为 3 的正方形有 1 个。
 * 正方形的总数 = 10 + 4 + 1 = 15.
 * 
 * 
 * 示例 2：
 * 
 * 输入：matrix = 
 * [
 * ⁠ [1,0,1],
 * ⁠ [1,1,0],
 * ⁠ [1,1,0]
 * ]
 * 输出：7
 * 解释：
 * 边长为 1 的正方形有 6 个。 
 * 边长为 2 的正方形有 1 个。
 * 正方形的总数 = 6 + 1 = 7.
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= arr.length <= 300
 * 1 <= arr[0].length <= 300
 * 0 <= arr[i][j] <= 1
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number}
 * 
 * 思路：
 * 设dp[i][j]为矩阵（i,j)处的最长前缀和
 * 那么边长为d的正方形满足：
 * dp[i][j] - dp[i-d-1][j] - dp[i][j-d-1] + dp[i-d-1][j-d-1] = d^2
 * 
 * 状态转移方程是固定的，为：
 * dp[i][j] = dp[i-1][j] + dp[i][j-1] - dp[i-1][j-1] + mat[i][j]
 * 要注意的是，这里的ij是指mat上的下标而不是dp的下标
 * 
 * 如果是以dp下标为准，则状态转移方程为：
 * dp[i][j] = dp[i-1][j] + dp[i][j-1] - dp[i-1][j-1] + mat[i-1][j-1]
 * 
 * 找到边界,d的取值为1-min(m, n)
 * 1 <= d <= min(m,n)
 * 
 */
var countSquares = function(matrix) {
  let m = matrix[0].length
  let n = matrix.length

  // 初始化dp
  let dp = new Array(n+1).fill(0).map(() => new Array(m+1).fill(0))

  // 构造dp
  for (let i = 1; i < n+1; i++) {
    for (let j = 1; j < m+1; j++) {
      dp[i][j] = dp[i-1][j] + dp[i][j-1] - dp[i-1][j-1] + matrix[i-1][j-1]
    }
  }

  // 计数函数
  // 这里的循环，是循环的dp
  let count = (d) => {
    let count = 0
    for (let i = d; i < n+1; i++) {
      for (let j = d; j<m+1; j++) {
        if (dp[i][j] - dp[i-d][j] - dp[i][j-d] + dp[i-d][j-d] === Math.pow(d, 2)) {
          count++
        }
      }
    }
    return count
  }

  // 进行判断
  // 这里循环的是边长
  let res = 0
  for (let d = 1; d <= Math.min(m,n); d++) {
    res += count(d)
  }
  return res
};
// @lc code=end

