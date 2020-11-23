/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let numberOfDigits = 0;
    while (num >= 1)
    {
      num /= 10;
      numberOfDigits++;
    }

    if (numberOfDigits % 2 === 0) count++;
  }
  return count;
};