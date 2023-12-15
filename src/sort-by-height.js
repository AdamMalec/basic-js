const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const indexList = arr
    .map((item, i) => {
      if (item === -1) return i;
    })
    .filter((item) => isFinite(item));

  if (arr.length === indexList.length) return arr;

  const sortedArr = arr.sort((a, b) => a - b).filter((item) => item !== -1);

  indexList.forEach(item => {
    sortedArr.splice(item, 0, -1);
  });

  return sortedArr;
}

module.exports = {
  sortByHeight
};
