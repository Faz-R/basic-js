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
  let res = 0;   
  let text = n.toString();
  for(let i = 0; i < text.length; i++){
    let arr = text.split('');
    arr.splice(i, 1);
    if(+arr.join('') > res){
      res = +arr.join('');
    }
  }
  return res;
}

module.exports = {
  deleteDigit
};
