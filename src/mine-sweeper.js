const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {

  function generateResultMatrix(matrix) {
    const draftMatrix = [];
    for (let i = 0; i < matrix.length; i++) {
      draftLine = new Array(matrix[0].length);
      draftLine.fill(0);
      draftMatrix.push(draftLine);
    }
    return draftMatrix;
  }

  const resultMatrix = generateResultMatrix(matrix);

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j]) {
        if (resultMatrix[i + 1]) {
          if (resultMatrix[i + 1][j - 1] || resultMatrix[i + 1][j - 1] === 0) resultMatrix[i + 1][j - 1] += 1;
          if (resultMatrix[i + 1][j + 1] || resultMatrix[i + 1][j + 1] === 0) resultMatrix[i + 1][j + 1] += 1;
          if (resultMatrix[i + 1][j] || resultMatrix[i + 1][j] === 0) resultMatrix[i + 1][j] += 1;
        }

        if (resultMatrix[i][j + 1] || resultMatrix[i][j + 1] === 0) resultMatrix[i][j + 1] += 1;
        if (resultMatrix[i][j - 1] || resultMatrix[i][j - 1] === 0) resultMatrix[i][j - 1] += 1;

        if (resultMatrix[i - 1]) {
          if (resultMatrix[i - 1][j - 1] || resultMatrix[i - 1][j - 1] === 0) resultMatrix[i - 1][j - 1] += 1;
          if (resultMatrix[i - 1][j + 1] || resultMatrix[i - 1][j + 1] === 0) resultMatrix[i - 1][j + 1] += 1;
          if (resultMatrix[i - 1][j] || resultMatrix[i - 1][j] === 0) resultMatrix[i - 1][j] += 1;
        }
      }
    }
  }

  return resultMatrix;
}

module.exports = {
  minesweeper
};
