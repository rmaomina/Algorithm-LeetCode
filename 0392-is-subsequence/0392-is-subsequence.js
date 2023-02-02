var isSubsequence = function(s, t) {
  if (s.length > t.length) return false
  let sIdx = 0

  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[sIdx]) {
      sIdx++
    }
  }

  return sIdx === s.length
};

console.log(isSubsequence("abc", "afbrtyc"))