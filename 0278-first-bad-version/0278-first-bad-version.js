/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
      // return Array.from({length: n}, (v, i) => i + 1).filter(el => isBadVersion(el))[0]
      let badNum = n;
      let goodNum = 0;
      let count = 0

      while (badNum - goodNum > 1) {
        let halfNum = Math.floor((badNum + goodNum) / 2)
        if (isBadVersion(halfNum)) {
          badNum = halfNum
        } else {
          goodNum = halfNum
        }
        count++
      }
      console.log(count)
      return badNum
    };
};