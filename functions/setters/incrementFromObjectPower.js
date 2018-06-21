var chk = require('../maths/checkNumber')
var check = require('../maths/checkPower')
var isPrime = require('primes-and-factors').isPrime
var incrementPrimeExp = require('./incrementPrimeExp')
var incrementFromIntegerPower = require('./incrementFromIntegerPower')

var incrementFromObjectPower = function(peo, obj, power) {

  // Will reconstruct obj into peo, but only the
  // keys that are primes, and the
  // values that are integers

  // If power is 0, return.
  // Otherwise, if it's an integer, leave it alone, or else default to 1
  if (!(power = check(power))) return

  var keys = Object.keys(obj)
  for (var i=0; i<keys.length; i++) {
    var key = keys[i]                    // key is a string
    var value = obj[key]
    // both key and value are string,
    // turn them into integers (NaN if anything goes wrong)
    var number = Number.parseInt(key)       // NaN if anything goes wrong
    var exponent = Number.parseInt(value)
    if (chk(number) && chk(exponent) && number>=2) {
      if (isPrime(number)) {
        incrementPrimeExp(peo, number, exponent * power)
      } else {
        incrementFromIntegerPower(peo, number, exponent * power)
      }
    }
  }

}

module.exports = incrementFromObjectPower
