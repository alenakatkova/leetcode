/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
  let result = [];
  for (let i = 0; i < A.length; i++) {
    let row = [];
    for (let j = A[i].length - 1; j >= 0; j--) {
      row.push(A[i][j] === 0 ? 1 : 0);
    }
    result.push(row);
  }
  return result;
};