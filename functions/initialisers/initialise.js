var Fraction = require('fraction.js')

var chk = require('../maths/checkNumber')

var incrementFromObjectPower = require('../setters/incrementFromObjectPower')
var initialiseFromFraction = require('./initialiseFromFraction')

var initialise = function(peo, args) {

  // Get the first couple of arguments given to Peo constructor
  var arg0 = args[0]
  var arg1 = args[1]

  // Check for 'Fraction' case first
  if (arg0 instanceof Fraction) {
    initialiseFromFraction(peo, arg0)
    return
  }

  // Then check for numeric case
  var cutOff = 1e6    // Don't allow Fraction setup for numbers larger than this
  if (chk(arg0, cutOff)) {
    // Treat as case where small numerator, and possibly small denominator, are supplied
    var fraction = null
    if (chk(arg1, cutOff)) {
      // Both numerator and denominator supplied
      fraction = new Fraction(arg0, arg1)
    } else {
      fraction = new Fraction(arg0, 1)
    }
    initialiseFromFraction(peo, fraction)
    return
  }

  // Another case needed here for arrays entered as arguments in the Peo constructor

  // Need to do this check last
  if (typeof(arg0)==='object') {
    incrementFromObjectPower(peo, arg0)
    return
  }

}

module.exports = initialise
