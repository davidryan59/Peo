var setNumbers = require('../../../setters/setNumbers');

var getHighestPrime = function getHighestPrime() {
  setNumbers(this);
  return this.number.stats.pHi;
};

module.exports = getHighestPrime;
