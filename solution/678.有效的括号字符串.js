/*
 * @lc app=leetcode.cn id=678 lang=javascript
 *
 * [678] 有效的括号字符串
 *
 * https://leetcode-cn.com/problems/valid-parenthesis-string/description/
 *
 * algorithms
 * Medium (34.26%)
 * Likes:    229
 * Dislikes: 0
 * Total Accepted:    13.2K
 * Total Submissions: 38.5K
 * Testcase Example:  '"()"'
 *
 * 给定一个只包含三种字符的字符串：（ ，） 和 *，写一个函数来检验这个字符串是否为有效字符串。有效字符串具有如下规则：
 * 
 * 
 * 任何左括号 ( 必须有相应的右括号 )。
 * 任何右括号 ) 必须有相应的左括号 ( 。
 * 左括号 ( 必须在对应的右括号之前 )。
 * * 可以被视为单个右括号 ) ，或单个左括号 ( ，或一个空字符串。
 * 一个空字符串也被视为有效字符串。
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: "()"
 * 输出: True
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: "(*)"
 * 输出: True
 * 
 * 
 * 示例 3:
 * 
 * 
 * 输入: "(*))"
 * 输出: True
 * 
 * 
 * 注意:
 * 
 * 
 * 字符串大小将在 [1，100] 范围内。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
  let lo = 0
  let hi = 0
  for (let i of s) {
    if (i === '(') {
      lo++
      hi++
    }
    if (i === '*') {
      if (lo > 0) {
        lo--
      }
      hi++
    }
    if (i === ')') {
      if (lo > 0) {
        lo--
      }
      if (hi > 0) {
        hi--
      } else {
        return false
      }
    }
  }
  return lo <= 0 && hi >= 0
};
// @lc code=end

