var setNumbers = require('../../../setters/setNumbers')

var getHighestExp = function(base) {
  setNumbers(this)
  return this.number.stats.eHi
}

module.exports = getHighestExp
