var incrementFromIntegerPower = require('../setters/incrementFromIntegerPower')
var checkPower = require('../maths/checkPower')

var checkInt = function(input) {
  return (Number.isInteger(input) && input >= 1 && input<=1e15)
}

var initialiseFromNumAndDenom = function(peo, num, denom, powerInput) {
  var power = powerInput
  // peo will be set to rational number (num/denom)^power
  // Require all three inputs after peo to be positive bounded integers
  // (Peos only work for positive rational numbers)

  // If power is 0, return.
  // Otherwise, if it's an integer, leave it alone, or else default to 1
  if (!(power = checkPower(power))) return

  if (checkInt(num)) {
    // Use numerator and denominator to add factors to the peo
    incrementFromIntegerPower(peo, num, power)
    if (checkInt(denom)) incrementFromIntegerPower(peo, denom, -power)
  }
}

module.exports = initialiseFromNumAndDenom
