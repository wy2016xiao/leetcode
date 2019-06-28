/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 *
 * https://leetcode.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (25.36%)
 * Likes:    2224
 * Dislikes: 3423
 * Total Accepted:    719.1K
 * Total Submissions: 2.8M
 * Testcase Example:  '123'
 *
 * Given a 32-bit signed integer, reverse digits of an integer.
 * 
 * Example 1:
 * 
 * 
 * Input: 123
 * Output: 321
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: -123
 * Output: -321
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: 120
 * Output: 21
 * 
 * 
 * Note:
 * Assume we are dealing with an environment which could only store integers
 * within the 32-bit signed integer range: [−2^31,  2^31 − 1]. For the purpose
 * of this problem, assume that your function returns 0 when the reversed
 * integer overflows.
 * 
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse1 = function(x) {
  if (x == 0) {
    return 0
  }

  let upper = Math.pow(2, 31) -1;
  let lower = -Math.pow(2, 31);
  if (x > upper || x < lower) {
    return 0
  }


  let sym = true;
  if (x<0) {
    sym = false;
  }
  let res;
  let arr = Math.abs(x).toString().split('').reverse();
  arr.forEach(item => {
    if (res) {
      res+=item
    } else {
      res = item;
    }
  })
  !sym && (res = 0-res);

  if (res > upper || res < lower) {
    return 0
  }
  return Number(res);
};




var reverse2 = function(x) {
  let upper = Math.pow(2, 31) -1;
  let lower = -Math.pow(2, 31);
  if (x > upper || x < lower) {
    return 0
  }

  let sym = true;
  if (x<0) {
    sym = false;
  }


  let remainder = function (num) {
    if (num < 1) {
      return 0
    }
    let lastNum = num % 10;
    return lastNum * Math.pow(10, num.toString().length -1) + remainder(Math.floor(num/10));
  }

  let qq = remainder(Math.abs(x))
  !sym && (qq = 0-qq);
  if (qq > upper || qq < lower) {
    return 0
  }
  return qq
}
