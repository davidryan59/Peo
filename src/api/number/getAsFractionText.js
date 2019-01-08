var setNumbers = require('../../setters/setNumbers')

var getAsFractionText = function() {
  setNumbers(this)
  return this.number.fracTxt
}

module.exports = getAsFractionText
