const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {

  try {

    return members.filter( a => typeof a === "string").map( str => str.replace(/\s+/g, '').toUpperCase()).sort().reduce(function(accumulator, currentValue, index, array) {
      return accumulator + currentValue[0];
    }, "");

  }
  catch (e) {

    return false;
    
  }
  
}

module.exports = {
  createDreamTeam
};
