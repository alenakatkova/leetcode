/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
  let stack = [];
  let lastOuterPosition = 0;
  let result = "";

  for (let i = 0; i < S.length; i++) {
    if (S[i] === ")") stack.pop();
    else stack.push(S[i]);

    if (stack.length === 0) {
      result += S.slice(lastOuterPosition + 1, i);
      lastOuterPosition = i + 1;
    }
  }

  return result;
};