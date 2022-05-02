const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  
  let mac = n.split("");
  let regStr = "[0-9a-fA-F]";
  let reg = new RegExp(regStr);

  function isHex(item) {
    if (reg.test(item) || (item === "-")) {
      return true;
    } else {
      return false;
    }
  }

  return mac.every(isHex);

}
module.exports = {
  isMAC48Address
};
