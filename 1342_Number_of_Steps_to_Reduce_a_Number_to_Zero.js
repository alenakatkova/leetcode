/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps  = function(num) {
  let numberOfSteps = 0;
  let result = num;
  while (result > 0) {
    result = result % 2 === 0
        ? result / 2
        : result - 1;
    numberOfSteps++;
  }
  return numberOfSteps;
};
