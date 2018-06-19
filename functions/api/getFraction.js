var setNumbers = require('../setters/setNumbers')

var getFraction = function() {
  setNumbers(this)
  return this.number.fr
}

module.exports = getFraction
