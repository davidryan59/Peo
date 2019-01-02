var setNumbers = require('../../../setters/setNumbers')

var getMobius = function(base) {
  setNumbers(this)
  return this.number.stats.mob
}

module.exports = getMobius
