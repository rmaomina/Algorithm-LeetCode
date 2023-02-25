/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    let tempSum = numbers[left] + numbers[right];
    if (tempSum === target) {
      return [left + 1, right + 1]
    } else if (tempSum > target) {
      right--;
    } else {
      left++;
    }
  }
};