/**
 * @param {string} S
 * @return {string}
 */
var removeVowels = function(S) {
  const vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true
  };

  let result = "";

  for (let i = 0; i < S.length; i++) {
    if (!vowels[S[i]]) {
      result += S[i];
    }
  }

  return result;
};