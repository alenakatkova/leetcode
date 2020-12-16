/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
const createTargetArray = (nums, index) =>{
  let target = [];
  for (let i = 0; i < index.length; i++) {
    target.splice(index[i], 0, nums[i]);
  }
  return target;
};