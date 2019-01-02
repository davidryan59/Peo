var incrementFromObjectPower = require('../../setters/incrementFromObjectPower')

var mult = function(otherPeo, power) {

  // First make a copy to store the result.
  var result = this.copy()

  // Second mutate the copy by multiplying from the otherPeo (with an optional power)
  incrementFromObjectPower(result, otherPeo.getPrimeExps(), power)

  // Multiplication complete. Return result.
  return result

}

module.exports = mult
