/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
  let met = new Set();
  for (let i = 0; i <= A.length / 2 + 1; i++) {
    if (met.has(A[i])) return A[i];
    else met.add(A[i]);
  }
};