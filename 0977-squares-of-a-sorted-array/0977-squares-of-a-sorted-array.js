/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  let result = []
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let leftSquared = nums[left] ** 2;
    let rightSquared = nums[right] ** 2;

    if (leftSquared > rightSquared) {
      result.unshift(leftSquared)
      left++
    } else {
      result.unshift(rightSquared)
      right--
    }
  }
  
  return result;
};