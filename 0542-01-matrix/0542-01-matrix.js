const updateDistance = (mat, row, col, queue) => {
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // 4방향으로 이동하는 좌표값
  const currDist = mat[row][col]; // 현재 위치의 거리

  for (const [dx, dy] of directions) { // 4방향 모두 탐색
    const newRow = row + dx;
    const newCol = col + dy;

    if (
      newRow < 0 || newRow >= mat.length || // 범위 체크
      newCol < 0 || newCol >= mat[0].length ||
      mat[newRow][newCol] <= currDist + 1 // 이미 탐색한 곳인 경우
    ) {
      continue;
    }

    mat[newRow][newCol] = currDist + 1; // 거리 갱신
    queue.push([newRow, newCol]); // 다음 탐색할 위치 추가
  }
}

const updateMatrix = (mat) => {
  const queue = [];
  const rows = mat.length;
  const cols = mat[0].length;

  // 0인 위치를 큐에 추가
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (mat[row][col] === 0) {
        queue.push([row, col]);
      } else {
        mat[row][col] = Infinity; // 아직 0까지의 거리를 모르는 경우 Infinity로 초기화
      }
    }
  }

  // BFS 탐색 시작
  while (queue.length > 0) {
    const [row, col] = queue.shift();
    updateDistance(mat, row, col, queue);
  }

  // Infinity인 경우 0으로 변환
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (mat[row][col] === Infinity) {
        mat[row][col] = 0;
      }
    }
  }

  return mat;
}
