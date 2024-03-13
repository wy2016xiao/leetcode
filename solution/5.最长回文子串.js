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
 * 中心扩散法，遍历每个字符，以当前字符为中心，向两边扩散，找到最长的回文子串
 */
var longestPalindrome = function(s) {
    if (s.length < 2) {
        return s
    }

    let res = ''
    const helper = (m, n) => {
        while(m >=0 && n <= s.length && s[m] === s[n]) {
            m--
            n++
        }
        if (n - m  > res.length) {
            res = s.slice(m + 1, n)
        }
    }

    for(let i = 0; i < s.length; i++) {
        helper(i, i)
        helper(i, i+1)
    }

    return res
};

// @lc code=end


// @after-stub-for-debug-begin
module.exports = longestPalindrome;
// @after-stub-for-debug-end