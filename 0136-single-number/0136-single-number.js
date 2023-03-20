/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  if (nums.length === 1) return nums[0]

  const map = new Map()

  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) map.set(nums[i], 0)
    map.set(nums[i], map.get(nums[i]) + 1)
  }

  let result = 0
  map.forEach((v, k) => {
    if (v === 1) result = k
  })

  return result

  
};