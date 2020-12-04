const morseAlphabet = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

const aInAscii = 97;

const transformWord = (word) => {
  let transformed = "";
  for (let i = 0; i < word.length; i++) {
    transformed += morseAlphabet[word.charCodeAt(i) - aInAscii];
  }

  return transformed;
};

/**
 * @param {string[]} words
 * @return {number}
 */
const uniqueMorseRepresentations = (words) =>{
  let transformationsCount = {};

  for (let i = 0; i < words.length; i++) {
    let current = transformWord(words[i]);
    if (!transformationsCount.hasOwnProperty(current)) {
      transformationsCount[current] = true;
    }
  }

  return Object.keys(transformationsCount).length;
};