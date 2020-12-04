/**
 * @param {string} s
 * @return {number}
 */
const balancedStringSplit = (s) => {
  let balance = 0;
  let amountOfBalancedStrings = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") balance++;
    else balance--;

    if (balance === 0) amountOfBalancedStrings++;
  }

  return amountOfBalancedStrings;
};