/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
var arraysIntersection = function(arr1, arr2, arr3) {
  let frequencies = {};

  for (let i = 0; i < arr1.length; i++) {
    if (!frequencies.hasOwnProperty(arr1[i])) frequencies[arr1[i]] = 1;
    else frequencies[arr1[i]]++;
  }

  for (let i = 0; i < arr2.length; i++) {
    if (frequencies.hasOwnProperty(arr2[i])) frequencies[arr2[i]]++;
  }

  for (let i = 0; i < arr3.length; i++) {
    if (frequencies.hasOwnProperty(arr3[i])) frequencies[arr3[i]]++;
  }

  return Object.keys(frequencies).filter(a => frequencies[a] === 3);
};