const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options = {}) {
  let {
    repeatTimes,
    separator,
    addition,
    additionRepeatTimes,
    additionSeparator,
  } = options;

  if (repeatTimes === 1 & !addition) return str;
  if (!separator) separator = "+";
  if (!additionSeparator) additionSeparator = "|";

  function repMe(value, sep = '', times = 1) {
    const me = (value + sep).repeat(times);
    const repeat = (me).slice(0, me.length - sep.length);
    return repeat === 'undefined' ? '' : repeat;
  }

  str += repMe(addition, additionSeparator, additionRepeatTimes);
  return repMe(str, separator, repeatTimes);
}

module.exports = {
  repeater
};
