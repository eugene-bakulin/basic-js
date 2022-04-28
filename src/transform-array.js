const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  
  if (!(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let next = '--discard-next';
  let prev = '--discard-prev';
  let dbl_next = '--double-next';
  let dbl_prev = '--double-prev';
  let transArr = arr.slice();
 

  for (let i = 0; i < transArr.length; i++) {
     // transArr[i] = arr[i];

     if (transArr[0] == prev) { transArr.splice(0, 1)}
          if (transArr[i] == next) { transArr.splice((i+1), 1) } else {
              if (transArr[i] == prev) { 
          //      if (typeof transArr[i-1] == 'string') {transArr.splice((i), 1)} else {
             transArr.splice((i-1), 2)} else {
                  if (transArr[i] == dbl_next) { transArr[i] = transArr[i+1] } else {
                      if (transArr[i] == dbl_prev) { transArr[i] = transArr[i-1] }
  } 
  } 
  } 
  }



  return transArr.filter(item => {
      if (item != (next || prev || dbl_next || dbl_prev)) return item;}) 

}

module.exports = {
  transform
};
