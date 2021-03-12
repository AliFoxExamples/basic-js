const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = ((disksNumber-1)**3)-1;

  let seconds =  Math.floor(turns/(turnsSpeed/3600))

  return {turns, seconds}
};
