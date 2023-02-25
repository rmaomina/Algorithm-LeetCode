/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let array = s.split(' ')

  for (let i = 0; i < array.length; i++) {
    array[i] = reverse(array[i])
  }
  return array.join(' ')

};

var reverse = function(str) {
  if (str.length === 0) return arr
  
  let arr = str.split('')
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let temp = arr[start]
    arr[start] = arr[end]
    arr[end] = temp

    start++
    end--
  }
  return arr.join('')
}