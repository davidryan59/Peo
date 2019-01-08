var setNumbers = require('../../setters/setNumbers');

var getAsDecimal = function getAsDecimal() {
  setNumbers(this);
  return this.number.val;
};

module.exports = getAsDecimal;
