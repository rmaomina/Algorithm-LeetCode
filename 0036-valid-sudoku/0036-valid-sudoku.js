/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  const rows = new Array(9).fill(0).map(() => new Set())
  const cols = new Array(9).fill(0).map(() => new Set())
  const boxes = new Array(9).fill(0).map(() => new Set())

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const n = board[row][col];
      if (n === ".") continue;

      const box = Math.floor(row / 3) * 3 + Math.floor(col / 3)
      if (rows[row].has(n) || cols[col].has(n) || boxes[box].has(n)) {
        return false;
      }

      rows[row].add(n)
      cols[col].add(n)
      boxes[box].add(n)
    }
  }
  
  return true
};