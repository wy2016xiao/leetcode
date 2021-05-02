/*
 * @lc app=leetcode.cn id=354 lang=javascript
 *
 * [354] 俄罗斯套娃信封问题
 *
 * https://leetcode-cn.com/problems/russian-doll-envelopes/description/
 *
 * algorithms
 * Hard (43.78%)
 * Likes:    513
 * Dislikes: 0
 * Total Accepted:    56K
 * Total Submissions: 127.9K
 * Testcase Example:  '[[5,4],[6,4],[6,7],[2,3]]'
 *
 * 给你一个二维整数数组 envelopes ，其中 envelopes[i] = [wi, hi] ，表示第 i 个信封的宽度和高度。
 * 
 * 当另一个信封的宽度和高度都比这个信封大的时候，这个信封就可以放进另一个信封里，如同俄罗斯套娃一样。
 * 
 * 请计算 最多能有多少个 信封能组成一组“俄罗斯套娃”信封（即可以把一个信封放到另一个信封里面）。
 * 
 * 注意：不允许旋转信封。
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：envelopes = [[5,4],[6,4],[6,7],[2,3]]
 * 输出：3
 * 解释：最多信封的个数为 3, 组合为: [2,3] => [5,4] => [6,7]。
 * 
 * 示例 2：
 * 
 * 
 * 输入：envelopes = [[1,1],[1,1],[1,1]]
 * 输出：1
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * envelopes[i].length == 2
 * 1 i, hi 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} envelopes
 * @return {number}
 * 
 * LIS问题的变形
 * LIS通用解法中，dp[i]的结果只与dp[j] j < i有关
 * 注意这里的j < i
 * 在本问题中，可能找到后面的，因为没有限定顺序
 * 所以一种做法是先对序列进行排序，这样就可以使用LIS了
 * 如何排序？
 * 最容易想到的就是先对w进行生序排列，这样后面的可以把前面的装进去
 * 可问题在于很明显在每一个wi中，h也要排序，
 * h怎么排
 * 1.h升序
 * 此时在做LIS算法时，需要考虑多一种情况，就是比较双方的wi wj
 * 必须wj > wi才行
 * 2.h降序
 * 此时w相同的情况下，后者是无法装下前者的，毕竟h是降序，所以在做LIS算法时，无需考虑w
 * 两种方法都行
 */
var maxEnvelopes = function(envelopes) {
  let len = envelopes.length
  let dp = new Array(len).fill(1)
  let max = 1

  envelopes = envelopes.sort((a,b) => {
    if (a[0] === b[0]) {
      return b[1] - a[1]
    } else {
      return a[0] - b[0]
    }
  })

  for (let i = 1; i < len; i++) { // 循环整个dp
    for (let j = 0; j < i; j++) { // 循环dp[i]之前的dp
      if (
        envelopes[i][1] > envelopes[j][1] &&
        dp[j]+1 > dp[i]
      ) {
        dp[i] = dp[j] + 1
      }
    }
    if (max < dp[i]) {
      max = dp[i]
    }
  }

  return max
};
// @lc code=end

