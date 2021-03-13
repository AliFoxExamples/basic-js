const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  
  function main (n) {
    return n < 2? (2**(n-1)): (2**(n-1))+main(n-1);
  }

  let turns = main(disksNumber);

  let seconds =  Math.floor(turns/(turnsSpeed/3600))

  return {turns, seconds}
}