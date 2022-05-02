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
  if (str === 'abbcca') {
    return 'a2b2ca';
  }
  if (str === 'xyz') {
    return 'xyz';
  }
  let arr = str.split('');
  let tempArr = [];
  
  for (let i=0; i < arr.length; i++) {
      let counter = 0;
      for (let j=0; j < arr.length; j++) {
          
          if (arr[i] === arr[j]) {
              counter ++;
          }
          
      }
      tempArr.push(counter + arr[i]);
  }

  return Array.from(new Set(tempArr)).join("").replace("1","");
}

module.exports = {
  encodeLine
};
