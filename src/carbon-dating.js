const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(/*sampleActivity*/) {
  throw new CustomError('Not implemented');
  // return typeof sampleActivity == 'string' && Number.isFinite(+sampleActivity)? Math.ceil(Math.log(15/sampleActivity)/(Math.log(2)/5730)): false;
};
