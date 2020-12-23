/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortArrayByParity = (A) => {
  let i = 0;
  let j = A.length - 1;
  while (i < j) {
    if (A[i] % 2 === 1 && A[j] % 2 === 0) {
      let tmp = A[i];
      A[i] = A[j];
      A[j] = tmp;
    }

    if (A[i] % 2 === 0) i++;
    if (A[j] % 2 === 1) j--;
  }
  return A;
};