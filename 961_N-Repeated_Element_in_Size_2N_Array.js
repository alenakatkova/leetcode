/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
  let met = {};
  for (let i = 0; i <= A.length / 2 + 1; i++) {
    if (met.hasOwnProperty(A[i])) return A[i];
    else met[A[i]] = true;
  }
};