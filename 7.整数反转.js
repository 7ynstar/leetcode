/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 * 
 * ~x 按位非运算符
 *    ~x === -(x + 1)
 * 
 * ~~ 双飞运算符
 *    if (arr.indexOf(ele) > -1) {...} //易读
 *    if (~~arr.indexOf(ele)) {...} // 简洁
 * 
 * ~~value 可以替代 parseInt(value)，而且效率更高点
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let res = 0
  while (x !== 0) {
    res = res * 10 + ~~(x % 10)
    x = ~~(x / 10) 
  }
  return (res >= (2 ** 31) || res <= -(2 ** 31)) ? 0 : res
};
// @lc code=end

