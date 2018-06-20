var setNumbers = require('../../../setters/setNumbers')

var countDistinctFactors = function(base) {
  setNumbers(this)
  return this.number.stats.countDistinctFactors
}

module.exports = countDistinctFactors
