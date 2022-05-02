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
 function deleteDigit(n) {
  let arr = [];
  for (let i = 0; i < String(n).length; i ++) {
      arr.push((String(n).slice(0, i) + String(n).slice(i+1, String(n).length)));
  }
  let max = arr.reduce((acc, val) => {
      return acc > val ? acc : val;
  });
  return Number(max);
}

module.exports = {
  deleteDigit
};
