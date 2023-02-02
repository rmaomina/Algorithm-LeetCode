/**
 * @param {number} n
 * @return {string[]}
 */
 
const generateParenthesis = (n) => {

  let result = []

  // str: 결과, left: "(", right: ")"
  let BFS = (str, left, right) => {
    // left가 n이고 right가 n이면 조건 충족 
    if (left === n && right === n) {
      result.push(str);
      return;
    }

    // left먼저 open n개까지 만족하는지 
    if (left !== n) {
      BFS(str + "(", left + 1, right);
    }
    
    // open없이 closing이 생기지 않도록 
    if (left > right) {
      BFS(str + ")", left, right + 1);
    }
  }

  BFS("", 0, 0)

  return result;
}