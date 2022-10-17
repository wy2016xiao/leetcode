/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 *
 * https://leetcode.cn/problems/sort-colors/description/
 *
 * algorithms
 * Medium (60.09%)
 * Likes:    1413
 * Dislikes: 0
 * Total Accepted:    453.4K
 * Total Submissions: 754.5K
 * Testcase Example:  '[2,0,2,1,1,0]'
 *
 * 给定一个包含红色、白色和蓝色、共 n 个元素的数组 nums ，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
 * 
 * 我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
 * 
 * 
 * 
 * 
 * 必须在不使用库的sort函数的情况下解决这个问题。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [2,0,2,1,1,0]
 * 输出：[0,0,1,1,2,2]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [2,0,1]
 * 输出：[0,1,2]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * n == nums.length
 * 1 <= n <= 300
 * nums[i] 为 0、1 或 2
 * 
 * 
 * 
 * 
 * 进阶：
 * 
 * 
 * 你可以不使用代码库中的排序函数来解决这道题吗？
 * 你能想出一个仅使用常数空间的一趟扫描算法吗？
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var swap = (arr, i, j) => {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

var partition = (arr, low, high) => {
    const pivot = arr[low]
    while (low < high) {
        while (low < high && arr[high] >= pivot) {
            --high
        }
        swap(arr, low, high)
        while (low < high && arr[low] < pivot) {
            ++low
        }
        swap(arr, low, high)
    }

    arr[low] = pivot
    return low
}

var quickSort = (arr, low, high) => {
    if (low < high) {
        const pivotIndex = partition(arr, low, high)
        quickSort(arr, pivotIndex+1, high)
        quickSort(arr, low, pivotIndex-1)
    }
    return arr
}
var sortColors = function(nums) {
    return quickSort(nums, 0, nums.length-1)
};
// @lc code=end