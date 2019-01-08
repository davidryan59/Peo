var setNumbers = require('../../../setters/setNumbers');

var getLowestPrime = function getLowestPrime() {
  setNumbers(this);
  return this.number.stats.pHi;
};

module.exports = getLowestPrime;
