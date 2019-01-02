var pf = require('primes-and-factors')
var checked = require('../maths/checkPower')

var incrementPrimeExp = require('./incrementPrimeExp')

var incrementFromIntegerPower = function(peo, integer, power) {
  // power is optional, defaults to 1
  // integer is a whole number for which to add t
  // primeFactorArray output from pf.getFrequency(integer)
  //   where pf is primes-and-factors
  //   Each object in the array is of form {factor:A, times:B}
  //   e.g. 8 is {factor:2, times:3}

  // If power is 0, return.
  // Otherwise, if it's an integer, leave it alone, or else default to 1
  if (!(power = checked(power))) return

  var primeFactorArray = pf.getFrequency(integer)
  for (var i=0; i<primeFactorArray.length; i++) {
    var obj = primeFactorArray[i]
    var prime = obj.factor
    var exponent = obj.times
    incrementPrimeExp(peo, prime, exponent * power)
  }
}

module.exports = incrementFromIntegerPower
