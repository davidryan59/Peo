var setNumbers = require('../../setters/setNumbers')

var getDenom = function() {
  setNumbers(this)
  return this.number.d
}

module.exports = getDenom
