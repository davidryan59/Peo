var setNumbers = require('../../../setters/setNumbers')

var countFactors = function(base) {
  setNumbers(this)
  return this.number.stats.cF
}

module.exports = countFactors
