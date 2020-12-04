/**
 * @param {string} moves
 * @return {boolean}
 */
const judgeCircle = (moves) => {
  let horizontal = 0;
  let vertical = 0;
  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === "U") vertical++;
    else if (moves[i] === "D") vertical--;
    else if (moves[i] === "R") horizontal++;
    else horizontal--;
  }
  return horizontal === 0 && vertical === 0;
};