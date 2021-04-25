/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 *
 * https://leetcode-cn.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (33.42%)
 * Likes:    3433
 * Dislikes: 0
 * Total Accepted:    528.5K
 * Total Submissions: 1.6M
 * Testcase Example:  '"babad"'
 *
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "babad"
 * 输出："bab"
 * 解释："aba" 同样是符合题意的答案。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "cbbd"
 * 输出："bb"
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：s = "a"
 * 输出："a"
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：s = "ac"
 * 输出："a"
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * s 仅由数字和英文字母（大写和/或小写）组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s.length === 1) {
    return s
  }

  const len = s.length
  let max = 0
  let res
  for (let x = 0; x < len; x++) {
    let i = x--
    let j = x++
    let curMax = 1
    while (i >= 0 && j <= len) {
      if (s[i] === s[j]) {
        curMax+=2
        i--
        j++
      } else {
        if (s[i] === s[x]) {
          curMax+=1
          i--
        }
        if (s[j] === s[x]) {
          curMax+=1
          j++
        }
      }
      i--
      j++
    }

    if (curMax > max) {
      res = s.substring(i, j+1)
    }
  }

  return res
};
// @lc code=end

