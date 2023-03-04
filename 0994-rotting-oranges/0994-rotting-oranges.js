/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]; // 4-directions
  let queue = [];
  let minutesElapsed = 0;

  // Find all rotten oranges
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j]);
      }
    }
  }

  // BFS to rot oranges
  while (queue.length > 0) {
    let size = queue.length;
    let infected = false;
    for (let i = 0; i < size; i++) {
      const [curI, curJ] = queue.shift();
      for (let direction of directions) {
        const nextI = curI + direction[0];
        const nextJ = curJ + direction[1];
        if (nextI >= 0 && nextI < rows && nextJ >= 0 && nextJ < cols && grid[nextI][nextJ] === 1) {
          grid[nextI][nextJ] = 2;
          queue.push([nextI, nextJ]);
          infected = true;
        }
      }
    }
    if (infected) {
      minutesElapsed++;
    }
  }

  // Check if there are still fresh oranges left
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) {
        return -1;
      }
    }
  }

  return minutesElapsed;
};