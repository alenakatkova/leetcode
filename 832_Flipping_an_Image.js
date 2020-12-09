/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
  for (let i = 0; i < A.length; i++) {
    let pointer1 = 0,
        pointer2 = A[i].length - 1;

    while (pointer1 < pointer2) {
      if (A[i][pointer1] === A[i][pointer2]) {
        A[i][pointer1] = A[i][pointer2] = A[i][pointer1] ^ 1;
      }
      pointer1++;
      pointer2--;
    }

    if (pointer1 === pointer2) A[i][pointer1] ^= 1;
  }
  return A;
};