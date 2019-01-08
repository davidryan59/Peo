var setNumbers = require('../../../setters/setNumbers');

var countDistinctFactors = function countDistinctFactors() {
  setNumbers(this);
  return this.number.stats.cDF;
};

module.exports = countDistinctFactors;
