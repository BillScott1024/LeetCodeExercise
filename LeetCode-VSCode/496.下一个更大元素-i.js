/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let stackResult = [];
    for (let i = 0; i < nums1.length; i++) {
        const num1 = nums1[i];
        const index = nums2.indexOf(num1);
        for (let j = index; j < nums2.length; j++) {
            const num2 = nums2[j];
            if (num2 > num1) {
                stackResult.push(num2);
                break;
            }
            if (j == nums2.length - 1) {
                stackResult.push(-1);
            }
        }
    }
    return stackResult;
};
// @lc code=end

