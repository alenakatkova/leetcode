/**
 * @param {string} str
 * @param {number} amount
 */
var addZeros = function (str, amount) {
  let zeros = "";
  for (let i = 0; i < amount; i++) zeros += "0";
  return zeros + str;
};

/**
 * @param {string} string1
 * @param {string} string2
 */
var makeLengthTheSame = function (string1, string2) {
  let diff = Math.abs(string1.length - string2.length);
  if (diff === 0) return [string1, string2];
  if (string1.length > string2.length) return [string1, addZeros(string2, diff)];
  else return [string2, addZeros(string1, diff)];
};

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let xString = Number(x).toString(2);
  let yString = Number(y).toString(2);
  let diffCount = 0;
  let sameLengthStrings = makeLengthTheSame(xString, yString);

  for (let i = 0; i < sameLengthStrings[0].length; i++) {
    if (sameLengthStrings[0][i] !== sameLengthStrings[1][i]) diffCount++;
  }

  return diffCount;
};