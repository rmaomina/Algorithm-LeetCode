/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let left = 0, right = 0, maxLen = 0;
  let map = new Set();

  while (right < s.length) {
    if (!map.has(s[right])) {
      map.add(s[right]);
      right++;
      maxLen = Math.max(maxLen, map.size)
    } else {
      map.delete(s[left]);
      left++
    }
  }
  return maxLen
};