/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortArrayByParity = (A) => {
  return A.sort((a, b) => a % 2 - b % 2);
};