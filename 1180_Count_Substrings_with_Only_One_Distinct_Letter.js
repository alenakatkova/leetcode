/**
 * @param {string} S
 * @return {number}
 */
const countLetters = (S) => {
  let lastSequenceLength = 1;
  let result = 0;

  for (let i = 1; i < S.length; i++) {
    result += lastSequenceLength;
    if (S[i] === S[i - 1]) lastSequenceLength++;
    else lastSequenceLength = 1;
  }

  return result + lastSequenceLength;
};