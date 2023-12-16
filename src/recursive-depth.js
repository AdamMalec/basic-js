const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let maxLevel = 1;

    arr.forEach(item => {
      let level = 1;
      if (Array.isArray(item)) {
        level += this.calculateDepth(item);
      }
      if (level > maxLevel) {
        maxLevel = level;
      }
    })

    return maxLevel;
  }
}

module.exports = {
  DepthCalculator
};
