/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 *
 * https://leetcode.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (55.86%)
 * Likes:    2962
 * Dislikes: 188
 * Total Accepted:    361.9K
 * Total Submissions: 647.8K
 * Testcase Example:  '3'
 *
 * 
 * Given n pairs of parentheses, write a function to generate all combinations
 * of well-formed parentheses.
 * 
 * 
 * 
 * For example, given n = 3, a solution set is:
 * 
 * 
 * [
 * ⁠ "((()))",
 * ⁠ "(()())",
 * ⁠ "(())()",
 * ⁠ "()(())",
 * ⁠ "()()()"
 * ]
 * 
 */
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let res = [];
  function h(ps, l, r) {
      if (l == n && r == n) {
          res.push(ps);
          return;
      }
      if (l < n) {
          h(ps+'(', l+1, r);
      }
      if (l > r) {
          h(ps+')', l, r+1);
      }
  }
  h('', 0, 0);
  return res;

};
