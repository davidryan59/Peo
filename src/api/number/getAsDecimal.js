var setNumbers = require('../../setters/setNumbers');

var getAsDecimal = function getAsDecimal() {
  setNumbers(this);
  return this.n.v;
};

module.exports = getAsDecimal;
