/**
 * @param {number[]} nums
 * @return {number}
 */

// solved DP 1
var maxSubArray = function(nums) {
  if (nums=== null || nums.length === 0) return 0

  let dp = new Array(nums.length).fill(0);
  dp[0] = nums[0]

  for(let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
  }
  console.log(dp)
  return Math.max(...dp);
}
