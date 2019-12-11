/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
	let index = nums.indexOf(val)
	while (index > -1) {
		nums.splice(index, 1)
		index = nums.indexOf(val)
	}
	return nums.length
};
// @lc code=end

