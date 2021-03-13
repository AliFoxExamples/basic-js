const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    for(let el of arr) {
      let temp = 1;
      if (Array.isArray(el)) {
        temp += this.calculateDepth(el)
      }
      depth = Math.max(depth, temp)
    }
    return depth;
  }
};