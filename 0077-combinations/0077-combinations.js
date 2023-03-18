/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */


var combine = function(n, k) {
  const combinations = [];

  var generateCombinations = (combination, num, remaining) => {
    if (remaining === 0) {
      combinations.push(combination)
    } else {
      for (let i = num; i <= n; i++) {
        generateCombinations([...combination, i], i + 1, remaining - 1)
      }
    }
  }

  generateCombinations([], 1, k) 
  return combinations
};