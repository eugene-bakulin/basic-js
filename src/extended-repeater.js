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
 function repeater(str, options) {

  if (!arguments[1].additionRepeatTimes) {
      options.additionRepeatTimes = 1;
  }

  if (!arguments[1].repeatTimes) {
      options.repeatTimes = 1;
  }

  if ((!arguments[1].addition)) {
    if (arguments[1].addition === false) {
      options.addition = arguments[1].addition;
    } else if (arguments[1].addition === null) {
      options.addition = arguments[1].addition;
    } else {
      options.addition = '';
    }
  }

  if (!arguments[1].separator) {
      options.separator = "+";
  }

  if (!arguments[1].additionSeparator) {
      options.additionSeparator = "|";
  }

  let repeatedAddition  = (`${options.addition}`+ `${options.additionSeparator}`).repeat(`${options.additionRepeatTimes}`);
  let repeatedAll = (str + repeatedAddition.slice(0, - `${options.additionSeparator.length}`) + `${options.separator}`).repeat(`${options.repeatTimes}`);
  
  

  return repeatedAll.slice(0, - `${options.separator.length}`);
  
}

module.exports = {
  repeater
};
