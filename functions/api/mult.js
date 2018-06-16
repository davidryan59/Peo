var initialiseFromObject = require('../initialisers/initialiseFromObject')

var mult = function(otherPeo) {

  var result = this.copy()
  // The initialise actually multiplies result by the object array from other Peo
  initialiseFromObject(result, otherPeo.getPrimeExps())
  return result

}

module.exports = mult
