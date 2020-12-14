/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
const selfDividingNumbers = (left, right) => {
  let result = [];

  for (let i = left; i <= right; i++) {
    let str = i.toString();
    let isSelfDividing = true;
    for (let j = 0; j < str.length; j++) {
      let num = Number(str[j]);
      if (num === 0 || i % num !== 0) {
        isSelfDividing = false;
        break;
      }
    }
    if (isSelfDividing) result.push(i);
  }

  return result;
};