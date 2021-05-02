/*
 * @lc app=leetcode.cn id=918 lang=javascript
 *
 * [918] 环形子数组的最大和
 *
 * https://leetcode-cn.com/problems/maximum-sum-circular-subarray/description/
 *
 * algorithms
 * Medium (34.56%)
 * Likes:    154
 * Dislikes: 0
 * Total Accepted:    8.8K
 * Total Submissions: 25.4K
 * Testcase Example:  '[1,-2,3,-2]'
 *
 * 给定一个由整数数组 A 表示的环形数组 C，求 C 的非空子数组的最大可能和。
 * 
 * 在此处，环形数组意味着数组的末端将会与开头相连呈环状。（形式上，当0 <= i < A.length 时 C[i] = A[i]，且当 i >= 0 时
 * C[i+A.length] = C[i]）
 * 
 * 此外，子数组最多只能包含固定缓冲区 A 中的每个元素一次。（形式上，对于子数组 C[i], C[i+1], ..., C[j]，不存在 i <= k1,
 * k2 <= j 其中 k1 % A.length = k2 % A.length）
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：[1,-2,3,-2]
 * 输出：3
 * 解释：从子数组 [3] 得到最大和 3
 * 
 * 
 * 示例 2：
 * 
 * 输入：[5,-3,5]
 * 输出：10
 * 解释：从子数组 [5,5] 得到最大和 5 + 5 = 10
 * 
 * 
 * 示例 3：
 * 
 * 输入：[3,-1,2,-1]
 * 输出：4
 * 解释：从子数组 [2,-1,3] 得到最大和 2 + (-1) + 3 = 4
 * 
 * 
 * 示例 4：
 * 
 * 输入：[3,-2,2,-3]
 * 输出：3
 * 解释：从子数组 [3] 和 [3,-2,2] 都可以得到最大和 3
 * 
 * 
 * 示例 5：
 * 
 * 输入：[-2,-3,-1]
 * 输出：-1
 * 解释：从子数组 [-1] 得到最大和 -1
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * -30000 <= A[i] <= 30000
 * 1 <= A.length <= 30000
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 * 考虑一个环形数组
 * 找到其中一个连续片段A，那么剩下部分肯定也是一个连续片段B
 * 并且A+B就是换型数组所有成员的和，这个和是不变的
 * 那么就有A越大，B就越小
 * 如果能找到环形数组的最大和的子数组A
 * 那么剩下的那个片段数组肯定是最小的
 * 
 * 以上为基础知识
 * 接下来，我们看这个换型数组，
 * 我们可以将其分为两类，
 * 1.题解的子数组在A（整数数组）上
 * 2.题解的子数组不在A上
 * 
 * 当出现第二种情况的时候，根据上面的基础知识，我们可以判定剩下的那个代表着最小和的数组，肯定在A上（可以将A首尾相连成一个圆，来理解这一层思路）
 * 
 * 那么我们只需要分别找出两个类型的答案，选其中最大的那个就可以了
 */

var maxSubarraySumCircular = function(A) {
  if (A.length === 1) return A[0]

  let prevMax = prevMin = max = count = A[0]
  // min要从A[1]为起点开始算
  let min = 0
  for (let i = 1; i < A.length; i++) {

    // 1.找最大值
    prevMax = Math.max(prevMax+A[i], A[i])
    max = Math.max(max, prevMax)

    // 2.找最小值
    // 有个注意点，就是不能算最后一个
    // 因为这种情况下必定0 len-1在最大值数组中，那么算最小值就排除他们俩
    if (i < A.length-1) {
      prevMin = Math.min(prevMin+A[i], A[i])
      min = Math.min(min, prevMin)
    }
    // 记录环形数组所有成员和
    count+=A[i]
  }

  return Math.max(count-min, max)
};
// @lc code=end

