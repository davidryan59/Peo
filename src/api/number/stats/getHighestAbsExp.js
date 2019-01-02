var setNumbers = require('../../../setters/setNumbers')

var getHighestAbsExp = function(base) {
  setNumbers(this)
  return this.number.stats.eAbsHi
}

module.exports = getHighestAbsExp
