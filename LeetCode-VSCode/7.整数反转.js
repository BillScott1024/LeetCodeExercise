/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let overflow = function (x) {
      return (x >= Math.pow(2, 31) - 1 || x <= -Math.pow(2, 31)) ? 0 : x
    }
    x = overflow(x)
  
    let isNegative = x < 0
    if (isNegative) {
      x = -x
    }
    let a = 0
    while (x > 9) {
      a = a * 10 + x % 10 * 10
      x = parseInt(x / 10)
    }
    a += x
  
    return isNegative ? overflow(-a) : overflow(a)
};
  console.log(reverse(12344))
// @lc code=end

