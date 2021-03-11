const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  return members.map(el=> {

    return typeof el == 'string'? el.trim(): '';

  }).map(el=>el[0]).sort().join('').toUpperCase();

};
