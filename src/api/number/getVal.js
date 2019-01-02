var setNumbers = require('../../setters/setNumbers')

var getVal = function() {
  setNumbers(this)
  return this.number.val
}

module.exports = getVal
