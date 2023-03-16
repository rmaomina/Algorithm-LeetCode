/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let islandCounts = 0;

  var dfs = function(r, c) {
    if (r < 0 || c < 0 || r >= grid.length || c >= grid[0].length || grid[r][c] === '0') {
      return 0
    }

    grid[r][c] = "0";
    dfs(r - 1, c) // 상
    dfs(r + 1, c) // 하
    dfs(r, c - 1) // 좌
    dfs(r, c + 1) // 우
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        islandCounts++
        dfs(i, j)
      }
    }
  }

  return islandCounts
}