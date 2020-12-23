/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
var arraysIntersection = function(arr1, arr2, arr3) {
  return arr1.filter(a => arr2.indexOf(a) > -1 && arr3.indexOf(a) > -1);
};