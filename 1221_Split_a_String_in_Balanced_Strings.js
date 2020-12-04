/**
 * @param {string} s
 * @return {number}
 */
const balancedStringSplit = (s) => {
  let rCount = 0;
  let lCount = 0;
  let amountOfBalancedStrings = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") rCount++;
    else lCount++;

    if (rCount !== 0 && rCount === lCount) amountOfBalancedStrings++;
  }

  return amountOfBalancedStrings;
};