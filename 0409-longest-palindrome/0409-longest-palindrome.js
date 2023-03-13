/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  const charCounts = new Map()
  let oddCount = 0;

  for (let char of s) {
    charCounts.set(char, (charCounts.get(char) || 0) + 1);
  }
  console.log(charCounts)

  for (let count of charCounts.values()) {
    // 홀수 문자열 갯수 찾기 
    if (count % 2 !== 0) {
      // 1, 1, 5 -> 3
      oddCount++
    }
  }
  // s의 길이에서 홀수 문자열은 하나만 남겨두고 전부 제외 
  // 즉, 중앙에 들어갈 하나만 남겨둘 수 있음.
  return s.length - Math.max(0, oddCount - 1)
};