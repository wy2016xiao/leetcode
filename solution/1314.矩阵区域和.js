/*
 * @lc app=leetcode.cn id=1314 lang=javascript
 *
 * [1314] 矩阵区域和
 *
 * https://leetcode-cn.com/problems/matrix-block-sum/description/
 *
 * algorithms
 * Medium (72.42%)
 * Likes:    81
 * Dislikes: 0
 * Total Accepted:    7.8K
 * Total Submissions: 10.8K
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]\n1'
 *
 * 给你一个 m * n 的矩阵 mat 和一个整数 K ，请你返回一个矩阵 answer ，其中每个 answer[i][j] 是所有满足下述条件的元素
 * mat[r][c] 的和： 
 * 
 * 
 * i - K <= r <= i + K, j - K <= c <= j + K 
 * (r, c) 在矩阵内。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：mat = [[1,2,3],[4,5,6],[7,8,9]], K = 1
 * 输出：[[12,21,16],[27,45,33],[24,39,28]]
 * 
 * 
 * 示例 2：
 * 
 * 输入：mat = [[1,2,3],[4,5,6],[7,8,9]], K = 2
 * 输出：[[45,45,45],[45,45,45],[45,45,45]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * m == mat.length
 * n == mat[i].length
 * 1 <= m, n, K <= 100
 * 1 <= mat[i][j] <= 100
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 * 假设dp[i][j]为mat矩阵的二维前缀和
 * 根据题意，直接可以推出状态转移方程：
 * ans[i][j] = dp[i+k][j+k] - dp[i-k-1][j+k] - dp[i+k][j-k-1] + dp[i-k-1][j-k-1]
 * dp[i][j] = d[i-1][j] + dp[i][j-1] - dp[i-1][j-1] + mat[i][j]
 * 
 * 初始值：
 * 这里要注意的是，你需要初始值来进行状态转移，所以dp矩阵的长宽应该比mat多1
 * 使用0去填充，作为初始值
 * 
 * 在之后的ans构造中，也要时刻注意访问dp时应该是+1的
 */
var matrixBlockSum = function(mat, k) {
  let m = mat[0].length
  let n = mat.length

  // 初始化dp
  let dp = new Array(n+1).fill(0).map(() => new Array(m+1).fill(0))

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      dp[i][j] = dp[i-1][j] + dp[i][j-1] - dp[i-1][j-1] + mat[i-1][j-1]
    }
  }

  // 组成ans
  let ans = new Array(n).fill(0).map(() => new Array(m))
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      let sl = i-k >= 0 ? i-k : 0
      let sr = j-k >= 0 ? j-k : 0
      let bl = i+k+1 < n ? i+k+1 : n
      let br = j+k+1 < m ? j+k+1 : m
      ans[i][j] = dp[bl][br] - dp[sl][br] - dp[bl][sr] + dp[sl][sr]
    }
  }

  return ans
};
// @lc code=end

