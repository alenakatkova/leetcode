/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */
var calculateTime = function(keyboard, word) {
  let time = 0;
  let previous = 0;
  let next = 0;
  let keyboardIndices = {};

  for (let i = 0; i < keyboard.length; i++) {
    keyboardIndices[keyboard[i]] = i;
  }

  for (let i = 0; i < word.length; i++) {
    next = keyboardIndices[word[i]];
    time += Math.abs(next - previous);
    previous = next;
  }

  return time;
};