var setNumbers = require('../../../setters/setNumbers');

var countFactors = function countFactors() {
  setNumbers(this);
  return this.number.stats.cF;
};

module.exports = countFactors;
