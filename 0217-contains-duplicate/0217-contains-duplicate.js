/**
 * @param {number[]} nums
 * @return {boolean}
 */
 
var containsDuplicate = function(nums) {
    let array = new Set(nums)
    return nums.length !== array.size
};