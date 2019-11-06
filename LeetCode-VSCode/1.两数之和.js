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
let nums = [-1, -2, -3, -4, -5];
let target = -8;
var twoSum = function (nums, target) {
    let dif = 0;
    for (let i = 0; i < nums.length; i++) { 
        dif = target - nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            if (dif === nums[j]) {
                return [i, j];
            }
        }
    }
};
console.log(twoSum(nums, target));
// @lc code=end

