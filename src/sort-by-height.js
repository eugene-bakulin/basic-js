const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arrOfObj = [];
  
  for (let i=0; i < arr.length; i++) {
    if (arr[i]===-1) {
      arrOfObj.push({"value": arr[i], "pos": i});
    }
  }
  //console.log(arrOfObj);

  let filtered = arr.filter(item => !(item===-1)).sort();
  //console.log(filtered);

  for (let i=0; i < arrOfObj.length; i++) {
    filtered.splice(arrOfObj[i]["pos"], 0, arrOfObj[i]["value"]);
  }
  return filtered;



}

sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]);

module.exports = {
  sortByHeight
};
