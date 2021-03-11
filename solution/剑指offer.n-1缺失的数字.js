/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let len = nums.length
  let left = 0;
  let right = len - 1;
  while(left <= right) {
    let mid = Math.floor((left+right) / 2) 
    if (mid === nums[mid]) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return left
};