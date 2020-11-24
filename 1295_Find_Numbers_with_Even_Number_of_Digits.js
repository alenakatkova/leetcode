/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
  const amount = nums.length;
  let sorted = [...nums].sort((a, b) => a - b);
  let howManyAreLessOf = {};

  // count for each int how many int in array are less than current int
  for (let i = 0; i < amount; i++) {
    const current = sorted[i];
    if (!howManyAreLessOf.hasOwnProperty(current)) {
      howManyAreLessOf[current] = amount - (amount - i);
    }
  }

  // create result array
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    result.push(howManyAreLessOf[nums[i]]);
  }
  return result;
};