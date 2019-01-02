var setNumbers = require('../../../setters/setNumbers')

var getLowestExp = function(base) {
  setNumbers(this)
  return this.number.stats.eLo
}

module.exports = getLowestExp
