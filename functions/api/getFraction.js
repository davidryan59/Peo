var setFraction = require('../setters/setFraction')

var getFraction = function() {
  setFraction(this)
  return this.fr
}

module.exports = getFraction
