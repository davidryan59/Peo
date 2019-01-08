var setNumbers = require('../../setters/setNumbers')

var getAsDecimal = function() {
  setNumbers(this)
  return this.number.val
}

module.exports = getAsDecimal
