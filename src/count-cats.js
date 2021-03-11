const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  return matrix.toString().split(",").filter(el=>el=="^^").length;
};
