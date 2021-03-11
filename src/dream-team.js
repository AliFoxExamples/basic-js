const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  return members.filter(el=>typeof el == 'string').map(el=>el.trim()[0].toUpperCase()).sort().join('');
};
