var pf = require('primes-and-factors')
var checkPower = require('../maths/checkPower')

var incrementPrimeExp = require('./incrementPrimeExp')

var incrementFromIntegerPower = function(peo, integer, powerInput) {
  var power = powerInput
  // power is optional, defaults to 1
  // integer is a whole number for which to add t
  // primeFactorArray output from pf.getFrequency(integer)
  //   where pf is primes-and-factors
  //   Each object in the array is of form {factor:A, times:B}
  //   e.g. 8 is {factor:2, times:3}

  // If power is 0, return.
  // Otherwise, if it's an integer, leave it alone, or else default to 1
  if (!(power = checkPower(power))) return

  var primesObject = pf.getPrimeExponentObject(integer)   // Format like {"2":3, "3":-1}
  var keys = Object.keys(primesObject)
  for (var i=0; i<keys.length; i++) {
    var key = keys[i]                    // key is a string
    var prime = Number.parseInt(key)     // both prime and exponent are numeric
    var exponent = primesObject[key]
    incrementPrimeExp(peo, prime, exponent * power)
  }
}

module.exports = incrementFromIntegerPower
