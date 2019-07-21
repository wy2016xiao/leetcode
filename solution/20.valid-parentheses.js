/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 *
 * https://leetcode.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (36.78%)
 * Likes:    3121
 * Dislikes: 149
 * Total Accepted:    638K
 * Total Submissions: 1.7M
 * Testcase Example:  '"()"'
 *
 * Given a string containing just the characters '(', ')', '{', '}', '[' and
 * ']', determine if the input string is valid.
 * 
 * An input string is valid if:
 * 
 * 
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * 
 * 
 * Note that an empty string is also considered valid.
 * 
 * Example 1:
 * 
 * 
 * Input: "()"
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "()[]{}"
 * Output: true
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: "(]"
 * Output: false
 * 
 * 
 * Example 4:
 * 
 * 
 * Input: "([)]"
 * Output: false
 * 
 * 
 * Example 5:
 * 
 * 
 * Input: "{[]}"
 * Output: true
 * 
 * 
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s == '') return true
  if (s.length % 2 == 1) return false
  let left = '[({';
  let right = '])}';
  let curIndexMap = [];
  for (item of s) {
    let leftIndex = left.indexOf(item);
    let rightIndex = right.indexOf(item);
    if (leftIndex != -1) {
      curIndexMap.push(leftIndex);
    } else {
      if (curIndexMap[curIndexMap.length - 1] == rightIndex) {
        curIndexMap.pop()
      } else {
        return false
      }
    }
  }
  return curIndexMap.length == 0 ? true : false

};
console.log(isValid('()'))