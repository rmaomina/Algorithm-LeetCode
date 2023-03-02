/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
  let m = image.length;
  let n = image[0].length;
  let start = image[sr][sc];

  function dfs (r, c) {
    // r과 c가 범위 안에 있거나 탐색할 셀이 이미 color와 같으면 return
    if (r < 0 || r >= m || c < 0 || c >= n || image[r][c] === color) {
      return 
    }

    if (image[r][c] === start) {
      // 새로운 셀에 color로 바꾸고 
      image[r][c] = color;
      // 상하좌우 순으로 탐색
      dfs(r - 1, c)
      dfs(r + 1, c)
      dfs(r, c - 1)
      dfs(r, c + 1)
    }
  };

  dfs(sr, sc) // 1, 1
  
  return image;
};