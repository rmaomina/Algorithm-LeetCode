/**
 * @param {string}
 * @return {number}
 */

var romanToInt = function(s) {
  const symbol = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
  }

  let result = 0

  for (let i = 0; i < s.length; i++) {
    if (i + 1 < s.length && symbol[s[i]] < symbol[s[i + 1]]) { // III
      result -= symbol[s[i]]
    } else {
      result += symbol[s[i]]
    }
  }

  return result
};