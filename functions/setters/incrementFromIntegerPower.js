var pf = require('primes-and-factors')

var incrementPrimeExp = require('./incrementPrimeExp')

var incrementFromIntegerPower = function(peo, integer, multiplier) {
  // multiplier is optional, defaults to 1
  // integer is a whole number for which to add t
  // primeFactorArray output from pf.getFrequency(integer)
  //   where pf is primes-and-factors
  //   Each object in the array is of form {factor:A, times:B}
  //   e.g. 8 is {factor:2, times:3}

  var primeFactorArray = pf.getFrequency(integer)
  for (var i=0; i<primeFactorArray.length; i++) {
    var obj = primeFactorArray[i]
    var prime = obj.factor
    var exponent = obj.times
    // One bug is 1 returns {factor:1, times:1}. Catch this one.
    if (prime>=2) {
      incrementPrimeExp(peo, prime, exponent * (multiplier||1))
    }
  }
}

module.exports = incrementFromIntegerPower
