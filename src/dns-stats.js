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
    let arr = [];
    let obj = {};
    for (let i = domains.length-1; i > -1; i--) {
  
      domains[i] = domains[i].split('.');
       for (let j = domains[i].length-1; j> -1; j--) {
  
      if (domains[i][j-1]===undefined)  {break};
           arr.push ('.'+domains[i][j]);
         arr.push('.'+domains[i][j]+'.'+domains[i][j-1]);
         if (domains[i][j-2]===undefined)  {break};
         arr.push('.'+domains[i][j]+'.'+domains[i][j-1]+'.'+domains[i][j-2]); break 
       }
      }
  
      let arrUnic = Array.from(new Set(arr));
      let count = [];
      arrUnic.forEach(item => {
        let counter = 0;
        for (let i = 0; i < arr.length; i++) {
          if (item == arr[i]) {counter++}
        }
        count.push(counter)
      })
  
      for(var i = 0; i < arrUnic.length; i++) {
        obj[arrUnic[i]] = count[i];}
  
  
  return obj
  
  }

module.exports = {
  getDNSStats
};
