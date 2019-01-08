var setNumbers = require('../../setters/setNumbers')

var getAsResultText = function() {
  setNumbers(this)
  return this.number.resTxt
}

module.exports = getAsResultText
