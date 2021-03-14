const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  options.separator = options.separator || "+";
  options.addition = options.addition === undefined? "" : options.addition;
  options.additionSeparator  = options.additionSeparator || "|";

  str = typeof str == 'string'? str: String(str);
  options.addition = typeof options.addition == 'string'? options.addition : String(options.addition);

  function parser(str='',n=1,sep='') {
    return new Array(n).fill(str).join(sep)
  }
  let add = parser(options.addition, options.additionRepeatTimes, options.additionSeparator);
  return parser(str+add, options.repeatTimes, options.separator);
};


