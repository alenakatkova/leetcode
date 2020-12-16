/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
  let target = [];
  for (let i = 0; i < index.length; i++) {
    target = target
        .slice(0, index[i])
        .concat(nums[i], target.slice(index[i]));
  }
  return target;
};