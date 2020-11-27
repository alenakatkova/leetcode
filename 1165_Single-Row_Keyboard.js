/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */
var calculateTime = function(keyboard, word) {
  let time = 0;
  let previous = 0;
  let next = 0;

  for (let i = 0; i < word.length; i++) {
    next = keyboard.indexOf(word[i]);
    time += Math.abs(next - previous);
    previous = next;
  }

  return time;
};