/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const permutations = []

  var permuted = (permutation, remaining) => {
    if (remaining.length === 0) {
      permutations.push(permutation)
    } else {
      for (let i = 0; i < remaining.length; i++) {
        const num = remaining[i]
        permuted([...permutation, num], [...remaining.slice(0, i), ...remaining.slice(i + 1)])
      }
    }
  }

  permuted([], nums)
  return permutations
};