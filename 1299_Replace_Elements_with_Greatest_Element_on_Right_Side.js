/**
 * @param {number[]} arr
 * @return {number[]}
 */
const replaceElements = (arr) => {
  let max = -1;

  for (let i = arr.length - 1; i >= 0; i--) {
    let cur = arr[i];
    arr[i] = max;
    max = Math.max(cur, max);
  }

  return arr;
};