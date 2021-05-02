/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 *
 * https://leetcode-cn.com/problems/longest-valid-parentheses/description/
 *
 * algorithms
 * Hard (34.82%)
 * Likes:    1288
 * Dislikes: 0
 * Total Accepted:    146.8K
 * Total Submissions: 421.6K
 * Testcase Example:  '"(()"'
 *
 * 给你一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号子串的长度。
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "(()"
 * 输出：2
 * 解释：最长有效括号子串是 "()"
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = ")()())"
 * 输出：4
 * 解释：最长有效括号子串是 "()()"
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：s = ""
 * 输出：0
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 
 * s[i] 为 '(' 或 ')'
 * 
 * 
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 * 
 * 确定状态：
 * dp[i] := i下标为止最长有效括号的长度
 * 
 * 状态转移：
 * 当A[i] = '('
 *  dp[i] = 0
 * 
 * 当A[i] = ')'
 * 要分情况讨论，
 * 当A[i-1] = '('
 * dp[i] = dp[i-2] + 2
 * 当A[i-1] = ')'
 * 即为'...))'
 * 那么要考虑是否能构成A[i - dp[i-1] -1] = '('
 * 即为'...((...))'
 * 这里要注意，i - dp[i-1]要大于0，因为有可能等于0
 * 即为'(...))'
 * 如果A[i - dp[i-1] -1] = '('，那么dp[i] = dp[i-1] + 2 + dp[i-dp[i-1]-2]
 * 如果A[i - dp[i-1] -1] = ')'
 * 即为'...)(...))'，仔细观察，这种直接就构成不了以i结尾的有效括号，直接判为0
 */
var longestValidParentheses = function(s) {
  let len = s.length
  let dp = new Array(len).fill(0)
  let max = 0
  for (let i = 1; i < len; i++) {
    if (s.charAt(i) === ')') {
      if (s.charAt(i-1) === '(') {
        dp[i] = i-2 >= 0 ? dp[i-2] + 2 : 2
      } else if (i - dp[i-1] > 0 && s.charAt(i - dp[i-1] -1) === '(') {
        dp[i] = dp[i-1] + 2 + (i-dp[i-1] >= 2 ? dp[i-dp[i-1]-2] : 0)
      }
      max = Math.max(max, dp[i])
    }
  }
  return max
};
// @lc code=end

