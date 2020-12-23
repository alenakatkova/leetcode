/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let result = "";
  let currentWord = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== " ") {
      currentWord = s[i] + currentWord;
    } else {
      result += currentWord + " ";
      currentWord = "";
    }
  }
  return result + currentWord;
};