var setNumbers = require('../../../setters/setNumbers')

var countDistinctFactors = function(base) {
  setNumbers(this)
  return this.number.stats.cDF
}

module.exports = countDistinctFactors
