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

  return S.split("").filter(a => !vowels[a]).join("");
};