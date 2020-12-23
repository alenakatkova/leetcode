/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
var arraysIntersection = function(arr1, arr2, arr3) {
  let set1 = new Set(arr1);
  let set2 = new Set(arr2);
  let set3 = new Set(arr3);

  for (let item of set2) {
    if (!set1.has(item)) set2.delete(item);
  }

  for (let item of set3) {
    if (!set2.has(item)) set3.delete(item);
  }

  return Array.from(set3);
};