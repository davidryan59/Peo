var setNumbers = require('../setters/setNumbers')

var getText = function() {
  setNumbers(this)
  return this.number.txt
}

module.exports = getText
