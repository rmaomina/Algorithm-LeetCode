/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  // 상,하,좌,우 배열 
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]; 
  let queue = [];
  let minutes = 0;

  // 상한 오렌지를 큐에 담는다. 
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j]);
      }
    }
  }

  // BFS 상한 오렌지 주변의 셀을 탐색해
  // 신선한 오렌지가 있으면 썩히고 큐에 넣고 체크(infected)한다. 
  while (queue.length > 0) {
    let size = queue.length;
    let infected = false;
    for (let i = 0; i < size; i++) {
      const [currI, currJ] = queue.shift();
      for (let direction of directions) {
        const nextI = currI + direction[0];
        const nextJ = currJ + direction[1];
        if (nextI >= 0 && nextI < rows && nextJ >= 0 && nextJ < cols && grid[nextI][nextJ] === 1) {
          grid[nextI][nextJ] = 2;
          queue.push([nextI, nextJ]);
          infected = true;
        }
      }
    }

    // 썩힌 오렌지가 있으면 minute를 +1한다. 
    if (infected) {
      minutes++;
    }
  }

  // 탐색 후에 신선한 오렌지가 남아있으면 -1을 반환한다. 
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) {
        return -1;
      }
    }
  }

  return minutes;
};