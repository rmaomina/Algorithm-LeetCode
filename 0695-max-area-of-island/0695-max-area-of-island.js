/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  let maxArea = 0;

  function dfs(grid, i, j) {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === 0) {
        return 0;
    }
    grid[i][j] = 0;
    console.log(i, j)
    let sum = 1 + dfs(grid, i+1, j) + dfs(grid, i-1, j) + dfs(grid, i, j+1) + dfs(grid, i, j-1)
    console.log('Sum is', sum)
    return sum;
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        let result = dfs(grid, i, j)
        console.log('maxArea:', maxArea,' & dfs:', result)
        maxArea = Math.max(maxArea, result);
        console.log('maxArea:', maxArea,' & dfs:', result)
      }
    }
  }

  return maxArea;
};
