/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
  let amountOfPairs = nums.length / 2;
  let result = [];
  for (let i = 0; i < amountOfPairs; i++) {
    for (let j = 0; j < nums[i * 2]; j++) {
      result.push(nums[i * 2 + 1]);
    }
  }
  return result;
};