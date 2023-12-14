const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  let maxValue = 0;
  const nStr = n.toString();

  for (let i = 0; i < nStr.length; i++) {
    let nStrTemp = nStr.replace(nStr[i], '');
    if (+nStrTemp > maxValue) maxValue = +nStrTemp;
  }

  return maxValue;
}

module.exports = {
  deleteDigit
};
