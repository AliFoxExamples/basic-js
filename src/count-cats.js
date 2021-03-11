const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  return matrix.toString().split("^^").length-1
};
