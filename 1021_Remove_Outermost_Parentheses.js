/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
  let lastOuterPosition = 0;
  let notClosedCounter = 0;
  let result = "";

  for (let i = 0; i < S.length; i++) {
    if (S[i] === "(") notClosedCounter++;
    else notClosedCounter--;

    if (notClosedCounter === 0) {
      result += S.slice(lastOuterPosition + 1, i);
      lastOuterPosition = i + 1; // + 1 because we have two outer parantheses one after another
    };
  }

  return result;
};