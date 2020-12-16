const calculateTopFiveAverage = (scores) => {
  return Math.floor(scores
      .sort((a, b) => b - a)
      .slice(0, 5)
      .reduce((a, b) => a + b, 0) / 5);
};


/**
 * @param {number[][]} items
 * @return {number[][]}
 */
const highFive = (items) => {
  let result = [];

  let students = items.reduce((acc, cur) => {
    acc[cur[0]] = acc[cur[0]] ? [...acc[cur[0]], cur[1]] : [cur[1]];
    return acc;
  }, {});

  for (let student in students) {
    result.push([student, calculateTopFiveAverage(students[student])]);
  }

  return result.sort((a, b) => a[0] - b[0]);
};