/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(n, m, indices) {
  // make matrix
  let matrix = [];
  for (let i = 0; i < n; i++) {
    let subMatrix = [];
    for (let j = 0; j < m; j++) {
      subMatrix.push(0);
    }
    matrix.push(subMatrix);
  }

  // increment
  for (let pair = 0; pair < indices.length; pair++) {
    for (let i = 0; i < m; i++) {
      matrix[indices[pair][0]][i]++;
    }

    for (let i = 0; i < n; i++) {
      matrix[i][indices[pair][1]]++;
    }
  }

  // count odds
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] % 2 === 1) count++;
    }
  }
  return count;
};