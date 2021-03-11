const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity == 'string' &&  Number.isFinite(+sampleActivity) &&  +sampleActivity !== 0) {
    return Math.ceil(Math.log(15/sampleActivity)/(Math.log(2)/5730)) <= 0? false: true;
  }
  return false;
};
