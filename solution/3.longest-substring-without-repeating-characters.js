/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 *
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (28.60%)
 * Likes:    5918
 * Dislikes: 339
 * Total Accepted:    1M
 * Total Submissions: 3.5M
 * Testcase Example:  '"abcabcbb"'
 *
 * Given a string, find the length of the longest substring without repeating
 * characters.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: "abcabcbb"
 * Output: 3 
 * Explanation: The answer is "abc", with the length of 3. 
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 * 
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3. 
 * ⁠            Note that the answer must be a substring, "pwke" is a
 * subsequence and not a substring.
 * 
 * 
 * 
 * 
 * 
 */
/**
 * @param {string} s
 * @return {number}
 * 双指针暴力算法，时间复杂度O(n^2)
 * 1. 从第一个字符开始，向后遍历，找到第一个重复字符的位置
 * 2. 记录长度
 * 3. 然后指针全部后移，开始下一轮遍历
 * 4. 重复1-3
 * 5. 返回最大长度
 * 
 */
var lengthOfLongestSubstring = function(s) {
  let arr = s.split('')
  let len = 0;
  for (let index = 0; index < arr.length; index++) {
    const element = s[index];
    for (let indexx = index+1; indexx < arr.length; indexx++) {
      const elementt = s[indexx];
      if (element == elementt || indexx == arr.length-1) {
        indexx-index > len && (len = indexx-index);
        break
      }
    }
  }
  return len || arr.length
};

