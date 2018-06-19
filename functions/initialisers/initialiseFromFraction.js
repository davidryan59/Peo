var incrementFromIntegerPower = require('../setters/incrementFromIntegerPower')

var check = require('../maths/checkPower')

var initialiseFromFraction = function(peo, fraction, power) {

  // Already got a suitable (immutable) Fraction object, so initialise the .fr property.
  peo.fr = fraction

  // If power is 0, return.
  // Otherwise, if it's an integer, leave it alone, or else default to 1
  if (!(power = check(power))) return

  // Use numerator and denominator to add factors to the peo
  incrementFromIntegerPower(peo, fraction.n, power)         // Default power is 1
  incrementFromIntegerPower(peo, fraction.d, -power)

}

module.exports = initialiseFromFraction
