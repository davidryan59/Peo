var incrementFromIntegerPower = require('../setters/incrementFromIntegerPower')

var checked = require('../maths/checkPower')

var initialiseFromFraction = function(peo, fraction, power) {

  // If power is 0, return.
  // Otherwise, if it's an integer, leave it alone, or else default to 1
  if (!(power = checked(power))) return

  // Use numerator and denominator to add factors to the peo
  incrementFromIntegerPower(peo, fraction.n, power)         // Default power is 1
  incrementFromIntegerPower(peo, fraction.d, -power)

}

module.exports = initialiseFromFraction
