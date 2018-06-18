var Fraction = require('fraction.js')

var chk = require('../maths/checkNumber')

var incrementFromObjectPower = require('../setters/incrementFromObjectPower')
var initialiseFromFraction = require('./initialiseFromFraction')

var initialise = function(peo, args) {

  // Get the first couple of arguments given to Peo constructor
  var arg0 = args[0]
  var arg1 = args[1]
  var arg2 = args[2]

  // Check for 'Fraction' case first
  if (arg0 instanceof Fraction) {
    initialiseFromFraction(peo, arg0, arg1)   // arg1 is the power
    return
  }

  // Then check for numeric case
  var cutOff = 1e15    // Number.MAX_SAFE_INTEGER is around 10^15.95
  if (chk(arg0, cutOff)) {
    // Treat as case where small numerator, and possibly small denominator, are supplied
    var fraction = null
    if (chk(arg1, cutOff)) {
      // Both numerator and denominator supplied
      fraction = new Fraction(arg0, arg1)
    } else {
      fraction = new Fraction(arg0, 1)
    }
    initialiseFromFraction(peo, fraction, arg2)
    return
  }

  // Another case needed here for arrays entered as arguments in the Peo constructor

  // Need to do this check last
  if (typeof(arg0)==='object') {
    incrementFromObjectPower(peo, arg0, arg1)
    return
  }

}

module.exports = initialise
