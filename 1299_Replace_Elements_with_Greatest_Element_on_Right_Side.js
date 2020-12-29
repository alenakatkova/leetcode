/**
 * @param {number[]} arr
 * @return {number[]}
 */
const replaceElements = (arr) => {
  let sorted = [ ...arr ].sort((a, b) => b - a);
  let counter = arr.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
  let pointer = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    counter[arr[i]]--;
    if (arr[i] === sorted[pointer]) pointer++;
    while (counter[sorted[pointer]] === 0) pointer++;
    arr[i] = sorted[pointer];
  }

  arr[arr.length - 1] = -1;
  return arr;
};