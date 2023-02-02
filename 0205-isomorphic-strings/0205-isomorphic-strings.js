/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const createStrCode = (s) => {
  let map = new Map()
  let idx = 0;
  let str = "";

  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], idx);
      str += idx + '.';
      idx++
    } else {
      let key = map.get(s[i]);
      str += key + '.'
    }
  }
  return str
}

var isIsomorphic = function(s, t) {
  console.log(createStrCode(s))
  console.log(createStrCode(t))
  return createStrCode(s) === createStrCode(t)
};
