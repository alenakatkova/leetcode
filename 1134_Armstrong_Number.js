/**
 * @param {number} N
 * @return {boolean}
 */
const isArmstrong = (N) =>{
  let k = N.toString().length;
  let sum = 0;
  let num = N;
  while (sum <= N && num > 0) {
    let remainder = num % 10;
    sum += Math.pow(remainder, k);
    num = (num - remainder) / 10;
  }

  return sum === N;
};