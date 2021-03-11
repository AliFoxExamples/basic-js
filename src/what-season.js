const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

  if (!arguments.length) {
    return 'Unable to determine the time of year!';
  }

  let bool = Object.prototype.toString.call(date) === "[object Date]";

  if ( !(bool && date.getDate()) ){
    throw new Error ();
  }
  
  let seasons = {'winter': [11,0,1], 'spring':[2,3,4], 'summer':[5,6,7], 'autumn':[8,9,10]};

  let month = date.getMonth();

  for (let el in seasons) {

    if ( seasons[el].some(it=>it==month) ) {
      return el;
    }
  }
  
};
