/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = new Map()
  let i = -1
  while (++i < nums.length) {
    let otherIndex = map.get(target - nums[i])
    if (otherIndex !== undefined) return [otherIndex, i]
    map.set(nums[i], i)
  }
};
// @lc code=end

