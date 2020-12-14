/**
 * @param {number[][]} items
 * @return {number[][]}
 */
var highFive = function(items) {
  let result = [];
  let scoresById = items.reduce((acc, cur) => {
    if (!acc[cur[0]]) {
      acc[cur[0]] = [cur[1]];
    } else {
      acc[cur[0]] = [...acc[cur[0]], cur[1]];
    }
    return acc;
  }, {});

  for (let id in scoresById) {
    let topFive = 0;
    let sorted = scoresById[id].sort((a, b) => b - a);
    for (let i = 0; i < 5; i++) {
      topFive += sorted[i];
    }
    result.push([id, Math.floor(topFive / 5)]);
  }
  return result.sort((a, b) => a[0] - b[0]);
};