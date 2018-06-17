var incrementFromObject = require('../setters/incrementFromObject')

var mult = function(otherPeo) {

  // First make a copy to store the result.
  var result = this.copy()

  // Second mutate the copy by multiplying from the otherPeo.
  incrementFromObject(result, otherPeo.getPrimeExps())

  // Multiplication complete. Return result.
  return result

}

module.exports = mult
