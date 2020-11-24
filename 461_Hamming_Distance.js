/**
 * Option with array
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance1 = function(x, y) {
  return (x ^ y)
      .toString(2)
      .split("")
      .filter(a => a === "1")
      .length;
};

/**
 * Option with match. The fastest accroding to LeetCode
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance2 = function(x, y) {
  return ((x ^ y)
      .toString(2)
      .match(/1/g) || [])
      .length;
};