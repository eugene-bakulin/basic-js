const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {
  let counter = 0;
  let ss1 = s1.split('').sort();
  let ss2 = s2.split('').sort();

  for (let i = 0; i < ss1.length; i++) {
      for (let j = 0; j < ss2.length; j ++) {
          if (ss1[i] == ss2[j]) {
              counter ++;
              delete ss2[j];
              break;
          }
      }
  }

  return counter;
}

module.exports = {
  getCommonCharacterCount
};
