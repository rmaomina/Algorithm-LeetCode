/**
 * @param {number[]} nums
 * @return {number}
 */

var pivotIndex = function(nums) { // [1,7,3,6,5,6]
  let rightSum = nums.reduce((a, c) => a + c);
  let leftSum = 0;

  for (let i = 0; i <= nums.length; i++) {
    let current = nums[i]
    rightSum -= current

    if (leftSum === rightSum) {
      return i
    }

    leftSum += current
  }

  return -1
  
};
