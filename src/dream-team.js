const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  return Object.prototype.toString.call(members) == "[object Array]"? members.filter(el=>typeof el == 'string').map(el=>el.trim()[0].toUpperCase()).sort().join(''): false;
};
