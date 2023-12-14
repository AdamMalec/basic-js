const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let resultStr = "";
  let strArr = str.split("");
  let counter = 1;

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] !== strArr[i + 1] && counter === 1) {
      resultStr += strArr[i];
    } else if (strArr[i] === strArr[i + 1]) {
      counter++;
    } else {
      resultStr += counter + strArr[i];
      counter = 1;
    }
  }

  return resultStr;
}

module.exports = {
  encodeLine
};
