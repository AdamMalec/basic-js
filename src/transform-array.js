const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform( arr ) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  let copyArr = [...arr];

  for (let i = 0; i < copyArr.length; i++) {
    const item = copyArr[i];

    if (item === '--double-next') {
      const nextItem = copyArr[i + 1];
      if (nextItem || nextItem === 0) {
        copyArr.splice(i, 1, nextItem);
        i += 1;
      } else {
        copyArr.splice(i, 1);
      }
    }

    if (item === '--double-prev') {
      const prevItem = copyArr[i - 1];
      if (prevItem === ' ' ) {
        copyArr.splice(i - 1, 2);
        continue;
      }
      if (prevItem || prevItem === 0) {
        copyArr.splice(i, 1, prevItem);
      } else {
        copyArr.splice(i, 1);
        i -= 1;
      }
    }

    if (item === '--discard-next') {
      copyArr.splice(i, 2, ' ');
    }

    if (item === '--discard-prev') {
      if (!copyArr[i - 1] && copyArr[i - 1] !== 0) {
        copyArr.splice(i, 1);
        i -= 1;
      } else {
        copyArr.splice(i-1, 2);
        i -= 2;
      }
    }
  }

  return copyArr.filter(item => item !== ' ');
}

module.exports = {
  transform
};
