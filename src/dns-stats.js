const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const resultObj = {};

  domains.forEach((domain) => {
    const domainArr = domain.split(".").reverse();
    let inBetweenKey = "";

    domainArr.forEach((item) => {
      let objKey = "." + item;
      inBetweenKey += objKey;

      if (resultObj[inBetweenKey]) {
        resultObj[inBetweenKey]++;
      } else {
        resultObj[inBetweenKey] = 1;
      }
    });
  });

  return resultObj;
}

module.exports = {
  getDNSStats
};
