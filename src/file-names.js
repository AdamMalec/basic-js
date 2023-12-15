const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  if (!names.length) return [];
  const resultArr = [];
  const namesSet = new Set(names);
  const objFromSet = Object.assign(...Array.from(namesSet, (item) => ({ [item]: 0 })));

  for (let i = 0; i < names.length; i++) {
    if (objFromSet[names[i]]) {
      resultArr.push(`${names[i]}(${objFromSet[names[i]]})`);
      objFromSet[names[i]]++;
    } else if (resultArr.includes(names[i]) && namesSet.has(names[i])) {
      resultArr.push(names[i] + '(1)');
    } else  {
      resultArr.push(names[i]);
      objFromSet[names[i]]++;
    }
  }

  return resultArr;
}

module.exports = {
  renameFiles
};
