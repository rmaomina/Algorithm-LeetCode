/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  const s1Freq = new Array(26).fill(0);
  const windowFreq = new Array(26).fill(0);

  // count S1
  for (let i = 0; i < s1.length; i++) {
    s1Freq[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
  }

  for (let i = 0; i < s2.length; i++) {
    windowFreq[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;

    if (i >= s1.length) {
      windowFreq[s2.charCodeAt(i - s1.length) - 'a'.charCodeAt(0)]--;
    }

    if (i >= s1.length - 1 && frequencyMatch(s1Freq, windowFreq)){
      return true
    }
  }

  return false
};

function frequencyMatch(freq1, freq2) {
  for (let i = 0; i < freq1.length; i++) {
    if (freq1[i] !== freq2[i]) {
      return false;
    }
  }
  return true;
}