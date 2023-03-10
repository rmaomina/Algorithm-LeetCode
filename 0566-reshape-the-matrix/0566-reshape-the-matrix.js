/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
  let m = mat.length;
  let n = mat[0].length;
  if (m * n !== r * c) return mat;

  const arr = new Array(r).fill().map(() => new Array(c).fill(0));
  let row = 0, col = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      arr[row][col] = mat[i][j];
      col++;
      if (col === c) {
        col = 0;
        row++
      }
    }
  }
  return arr;
};