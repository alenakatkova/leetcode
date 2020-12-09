/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
      let counter = {};
      for (let i = 0; i < nums.length; i++) {
        counter[nums[i]] = !counter.hasOwnProperty(nums[i]);
      }
      return Object.keys(counter).find(key => counter[key] === true);
    };