var ibn = require('is-bounded-number')
var Fraction = require('fraction.js')

var incrementFromObjectPower = require('../setters/incrementFromObjectPower')
var initialiseFromFraction = require('./initialiseFromFraction')

var digits = 15
var cutOff = 10 ** digits
var searchForDigits = "[0-9]{1," + digits + "}"
var regexIntegerString = new RegExp("^" + searchForDigits + "$")
var regexFractionString = new RegExp("^" + searchForDigits + "\\/" + searchForDigits + "$")


var initialise = function(peo, args) {

  // Get the first few arguments given to Peo constructor
  var arg0 = args[0]
  var arg1 = args[1]
  var arg2 = args[2]

  // Check for 'Peo' case
  // Have to use peo.constructor, rather than Peo
  if (arg0 instanceof peo.constructor) {
    // arg0.p is an object, from which we can increment peo
    incrementFromObjectPower(peo, arg0.p, arg1)
    return
  }

  // Check for 'Fraction' case
  if (arg0 instanceof Fraction) {
    initialiseFromFraction(peo, arg0, arg1)   // arg1 is the power
    return
  }

  // Then check for numeric case
  if (ibn(arg0, cutOff)) {
    // Treat as case where small numerator, and possibly small denominator, are supplied
    var fraction = null
    if (ibn(arg1, cutOff)) {
      // Both numerator and denominator supplied
      fraction = new Fraction(arg0, arg1)
    } else {
      fraction = new Fraction(arg0)
    }
    initialiseFromFraction(peo, fraction, arg2)
    return
  }

  // Check for string case e.g. new Peo("5") or new Peo("3/2")
  // .search is 0 if match (at start), -1 if no match
  // Fraction will initialise correctly from either "5" or "3/2"
  if (typeof(arg0) === typeof("")) {
    if (arg0.search(regexIntegerString)===0 || arg0.search(regexFractionString)===0) {
      var fraction = new Fraction(arg0)
      initialiseFromFraction(peo, fraction, arg1)
      return
    }
  }

  // Another case needed here for arrays entered as arguments in the Peo constructor

  // Need to do this check last, since its 'object', the most general!
  if (typeof(arg0)==='object') {
    incrementFromObjectPower(peo, arg0, arg1)
    return
  }

}

module.exports = initialise
