/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps  = function(num) {
  if (num === 0) return 0;

  // base-10 to base-2 conversion
  let str = num.toString(2);

  // each time 0 occurs in the binary number, it means that the number is even and we need to divide it by to. Division by 2 in binary system is deleting 0 from the end (one step)
  // each time 1 occurs, it means that the number is odd and we need to substract 1, which will leave us with 0 in the end of the number - so we'll need to divide it buy 2 (two steps). It works for each 1 except for the first 1 in number - in this case we just need to perform a substraction (one step)
  let zeros = (str.match(/0/g) || []).length;
  let ones = str.length - zeros;
  return zeros + ones * 2 - 1;
};