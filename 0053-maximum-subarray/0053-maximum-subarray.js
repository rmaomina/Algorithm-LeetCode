/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function(nums) {
  let maxSum = nums[0]; // -2

  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(0, nums[i - 1]) + nums[i];   
    if (nums[i] > maxSum) { // -1 > -2(first)
      maxSum = nums[i];
    }
  }
  return maxSum 
};