var incrementFromIntegerPower = require('../../setters/incrementFromIntegerPower');
var incrementFromObjectPower = require('../../setters/incrementFromObjectPower');

var mult = function mult( multBy, power ) {
  // multBy can be:
  // Case 1: positive integer
  // Case 2: positive decimal
  // Case 3: peo (default)

  // power should be any integer (positive, negative or zero whole number)

  // Make a copy to start off calculating the result
  var result = this.copy();

  // Deal with the 3 cases
  if (Number.isInteger(multBy) && multBy > 0) {
    // Case 1: integer.
    // Mutate the copy, this is more direct than Case 3 below.
    incrementFromIntegerPower(result, multBy, power);
  } else if (Number.isFinite(multBy) && multBy > 0) {
    // Case 2: decimal. Iterate function, but with a Peo (so using Case 3)
    // (Don't use the copy.)
    var peoMult = this.construct(multBy, power);
    return this.mult(peoMult);
  } else {
    // Case 3: default, assume multBy is a peo.
    // Mutate the copy by multiplying from the otherPeo (with an optional power)
    incrementFromObjectPower(result, multBy.getPrimeExps(), power);
  }

  // Multiplication complete. Return result.
  return result;
};

module.exports = mult;
