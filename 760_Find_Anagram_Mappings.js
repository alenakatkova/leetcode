/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var anagramMappings = function(A, B) {
  let result = [];
  let indices = {};

  for (let i = 0; i < B.length; i++) {
    indices[B[i]] = i;
  }

  for (let i = 0; i < A.length; i++) {
    result.push(indices[A[i]]);
  }

  return result;
};