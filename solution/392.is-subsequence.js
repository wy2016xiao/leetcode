/*
 * @lc app=leetcode id=392 lang=javascript
 *
 * [392] Is Subsequence
 *
 * https://leetcode.com/problems/is-subsequence/description/
 *
 * algorithms
 * Medium (47.21%)
 * Likes:    1429
 * Dislikes: 199
 * Total Accepted:    207.8K
 * Total Submissions: 423.5K
 * Testcase Example:  '"abc"\n"ahbgdc"'
 *
 * Given a string s and a string t, check if s is subsequence of t.
 * 
 * A subsequence of a string is a new string which is formed from the original
 * string by deleting some (can be none) of the characters without disturbing
 * the relative positions of the remaining characters. (ie, "ace" is a
 * subsequence of "abcde" while "aec" is not).
 * 
 * Follow up:
 * If there are lots of incoming S, say S1, S2, ... , Sk where k >= 1B, and you
 * want to check one by one to see if T has its subsequence. In this scenario,
 * how would you change your code?
 * 
 * Credits:
 * Special thanks to @pbrother for adding this problem and creating all test
 * cases.
 * 
 * 
 * Example 1:
 * Input: s = "abc", t = "ahbgdc"
 * Output: true
 * Example 2:
 * Input: s = "axc", t = "ahbgdc"
 * Output: false
 * 
 * 
 * Constraints:
 * 
 * 
 * 0 <= s.length <= 100
 * 0 <= t.length <= 10^4
 * Both strings consists only of lowercase characters.
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  if (s === '') {
    return true
  }
  let curIndex = 0
  let searchIndex = 0
  let tLength = t.length
  while (searchIndex < tLength) {
    const curValue = s[curIndex]
    if (curValue === t[searchIndex]) {
      ++curIndex
      if (curIndex === s.length) {
        break
      }
    }
    ++searchIndex

  }

  return curIndex === s.length
};
// @lc code=end

