const letterCasePermutation = function(s) {
  const result = [];

  const dfs = (string, index) => {
    if (index === s.length) { // 모든 문자열을 다 변환한 경우
      result.push(string);
      return;
    }

    if (isNaN(s[index])) { // 문자인 경우
      dfs(string + s[index].toLowerCase(), index + 1); // 소문자로 변환한 경우 탐색
      dfs(string + s[index].toUpperCase(), index + 1); // 대문자로 변환한 경우 탐색
    } else { // 숫자인 경우
      dfs(string + s[index], index + 1); // 탐색하지 않고 그대로 추가
    }
  };

  dfs('', 0); // 탐색 시작

  return result;
};
