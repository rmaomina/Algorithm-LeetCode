/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 
var spiralOrder = function(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  
  let [top, left, right, bottom] = [0, 0, cols - 1, rows - 1]
  let result = [];

  while (left <= right && top <= bottom) {
    // left to right
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i])
    }
    top++

    // top to bottom
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right])
    }
    right--

    // 만약 위에서 끝날 경우, 아래 케이스를 진행하지 않도록
    if (left <= right && top <= bottom) {
      // right to left
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i])
      }
      bottom--
  
      // bottom to up
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left])
      }
      left++
    }
  }
  return result
};
