var setNumbers = require('../../../setters/setNumbers')

var getLiouville = function(base) {
  setNumbers(this)
  return this.number.stats.liou
}

module.exports = getLiouville
