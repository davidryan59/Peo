var incrementFromIntegerPower = require('../../setters/incrementFromIntegerPower')
var incrementFromObjectPower = require('../../setters/incrementFromObjectPower')

var mult = function(multBy, power) {

  // Make a copy to store the result.
  var result = this.copy()

  // multBy can be a Peo (default) or a positive Integer (override)
  if (Number.isInteger(multBy)) {
    // Case multBy is numeric
    incrementFromIntegerPower(result, multBy, power)
  } else {
    // Default case - assume multBy is Peo
    // Mutate the copy by multiplying from the otherPeo (with an optional power)
    incrementFromObjectPower(result, multBy.getPrimeExps(), power)
  }

  // Multiplication complete. Return result.
  return result

}

module.exports = mult
