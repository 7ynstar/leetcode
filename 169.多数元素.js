/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] ????
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  return nums.sort()[~~(nums.length / 2)]  
};
// @lc code=end

