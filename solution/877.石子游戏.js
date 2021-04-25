/*
 * @lc app=leetcode.cn id=877 lang=javascript
 *
 * [877] 石子游戏
 *
 * https://leetcode-cn.com/problems/stone-game/description/
 *
 * algorithms
 * Medium (72.94%)
 * Likes:    236
 * Dislikes: 0
 * Total Accepted:    31.9K
 * Total Submissions: 43.7K
 * Testcase Example:  '[5,3,4,5]'
 *
 * 亚历克斯和李用几堆石子在做游戏。偶数堆石子排成一行，每堆都有正整数颗石子 piles[i] 。
 * 
 * 游戏以谁手中的石子最多来决出胜负。石子的总数是奇数，所以没有平局。
 * 
 * 亚历克斯和李轮流进行，亚历克斯先开始。 每回合，玩家从行的开始或结束处取走整堆石头。
 * 这种情况一直持续到没有更多的石子堆为止，此时手中石子最多的玩家获胜。
 * 
 * 假设亚历克斯和李都发挥出最佳水平，当亚历克斯赢得比赛时返回 true ，当李赢得比赛时返回 false 。
 * 
 * 
 * 
 * 示例：
 * 
 * 输入：[5,3,4,5]
 * 输出：true
 * 解释：
 * 亚历克斯先开始，只能拿前 5 颗或后 5 颗石子 。
 * 假设他取了前 5 颗，这一行就变成了 [3,4,5] 。
 * 如果李拿走前 3 颗，那么剩下的是 [4,5]，亚历克斯拿走后 5 颗赢得 10 分。
 * 如果李拿走后 5 颗，那么剩下的是 [3,4]，亚历克斯拿走后 4 颗赢得 9 分。
 * 这表明，取前 5 颗石子对亚历克斯来说是一个胜利的举动，所以我们返回 true 。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 2 <= piles.length <= 500
 * piles.length 是偶数。
 * 1 <= piles[i] <= 500
 * sum(piles) 是奇数。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @return {boolean}
 * 6912
 * dp[i][j]表示当剩下的石子堆为下标 i 到下标 j 时，当前玩家与另一个玩家的石子数量之差的最大值
 * 也就是说，当石子为i-j时，直到拿完为止，我们之间的差值最大为dp[i][j]
 * 
 * 如果我先手拿左边，那么如何表示呢？
 * 首先我们有piles[i]
 * 然后下一轮的他减我的差值是dp[i+1][j]
 * 注意这里dp[i+1][j]代表的是什么，代表的是当只剩下dp[i+1][j]时，他与我差值的最大值
 * 换句话说就是 在下一轮的最佳情况下，他能拿的最大值的总和b - 我能拿的最大值的总和a = dp[i+1][j]
 * 那么回到这一轮，我能拿的最大值，就是c+a
 * 他能拿到的最大值是b
 * 我们需要构造出dp[i][j] = c + a - b
 * 
 * 如何构造？
 * 现在有c --- piles[i]
 * dp[i+1][j] --- b - a
 * c - (b - a) = c + a - b
 * 构造出来了
 * 即：dp[i][j] = piles[i] - dp[i+1][j]
 * 
 * 那么先手拿左边的情况下，方程为：
 * piles[i] - dp[i+1][j]
 * 先手右边的情况下，就是：
 * piles[j] - dp[i][j-1]
 * 
 * 那么出来了，
 * dp[i][j] = max(piles[i] - dp[i+1][j], piles[j] - dp[i][j-1])
 * 
 * 所以，构造一个二维数组，最后的结果就是我们最终的差值，返回是否大于零即可
 */
var stoneGame = function(piles) {
  let len = piles.length
  let dp = new Array(len).fill(new Array(len))
  // 初始值
  for (let i = 0; i < len; i++) {
    dp[i][i] = piles[i]
  }

  // 计算数组
  for (let i = len-2; i >= 0; i--) {
    for (let j = i; j < len; j++) {
      if (i < j) {
        dp[i][j] = Math.max(piles[i] - dp[i+1][j], piles[j] - dp[i][j-1])
      }
    }
  }

  return dp[0][len-1] > 0
};
stoneGame([3,7,2,3])
// @lc code=end

