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
  let res = '';
  String(str);
  this.repeatTimes = options.repeatTimes || 1;
  this.separator = options.separator || '+';
  this.addition = options.addition;
  this.additionRepeatTimes = options.additionRepeatTimes;
    if (this.addition && !this.additionRepeatTimes) {
      this.additionRepeatTimes = 1;
  }
  this.additionSeparator = options.additionSeparator || '|';

  for (let i = 0; i < repeatTimes; i++) {
    res += str;
    for (let j = 0; j < additionRepeatTimes; j++) {
      (j != additionRepeatTimes - 1) ? (res += addition + additionSeparator) : (res += addition)
    }
    (i != repeatTimes - 1) ? (res += separator) : res;
  }
  return res;
}

module.exports = {
  repeater
};
