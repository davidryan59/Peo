var incrementFromIntegerPower = require('../setters/incrementFromIntegerPower')

var initialiseFromFraction = function(peo, fraction) {

  // Already got a suitable (immutable) Fraction object, so initialise the .fr property.
  peo.fr = fraction

  // Use numerator and denominator to add factors to the peo
  incrementFromIntegerPower(peo, fraction.n)         // Default power is 1
  incrementFromIntegerPower(peo, fraction.d, -1)

}

module.exports = initialiseFromFraction
