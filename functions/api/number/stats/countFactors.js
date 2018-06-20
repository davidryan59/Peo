var setNumbers = require('../../../setters/setNumbers')

var countFactors = function(base) {
  setNumbers(this)
  return this.number.stats.countFactors
}

module.exports = countFactors
