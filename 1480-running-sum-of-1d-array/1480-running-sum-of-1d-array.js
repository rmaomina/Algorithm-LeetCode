/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    return nums.map((el, idx) => {
      return nums.slice(0, idx + 1).reduce((acc, cur) => acc + cur)
    })
};