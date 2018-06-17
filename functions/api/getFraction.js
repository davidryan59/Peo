var setFraction = require('../setters/setFraction')

var getFraction = function() {
  ;(!this.fr) ? setFraction(this) : null
  return this.fr
}

module.exports = getFraction
