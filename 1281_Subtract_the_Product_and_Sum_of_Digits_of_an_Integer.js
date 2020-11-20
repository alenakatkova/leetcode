/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(num) {
  let sum = 0;
  let product = 1;

  while (num > 0) {
    let remainder = num % 10;
    sum += remainder;
    product *= remainder;
    num = (num - remainder) / 10;
  }

  return product - sum;
};