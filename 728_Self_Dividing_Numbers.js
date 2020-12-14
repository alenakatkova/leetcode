/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
const selfDividingNumbers = (left, right) => {
  let result = [];

  for (let i = left; i <= right; i++) {
    let num = i;
    let isSelfDeviding = true;
    while (num > 0) {
      let remainder = num % 10;
      if (remainder === 0 || i % remainder !== 0) {
        isSelfDeviding = false;
        break;
      }
      num = (num - remainder) / 10;
    }
    if (isSelfDeviding) result.push(i);
  }

  return result;
};