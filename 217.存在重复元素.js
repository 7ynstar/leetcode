/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const filted = nums.filter((ele, index, array) => array.indexOf(ele) === index)
  if (filted.length === nums.length) return false 
  return true
};
// @lc code=end

