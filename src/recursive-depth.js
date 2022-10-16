const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 class DepthCalculator {
  calculateDepth(arr, deep = 1) {
    let elem = 0;
      for(elem in arr){
        if(Array.isArray(arr[elem])){
          deep++;
          arr = arr.flat();
        return this.calculateDepth(arr, deep);
      }  
    }
    return deep;
  }
}

module.exports = {
  DepthCalculator
};
