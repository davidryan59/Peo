var pf = require('primes-and-factors')

var incrementPrimeExp = require('../setters/incrementPrimeExp')

var initialiseFromFraction = function(peo, fraction) {

  // Already got a suitable Fraction object. Initialise the .fr property.
  peo.fr = fraction

  var addFactors = function(primeFactorArray, multiplier) {
    // Each object in the array is of form {factor:A, times:B}
    // e.g. 8 is {factor:2, times:3}
    // See documentation for primes-and-factors on npm
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

  var num = fraction.n
  var numFactors = pf.getFrequency(num)
  addFactors(numFactors)

  var denom = fraction.d
  var denomFactors = pf.getFrequency(denom)
  addFactors(denomFactors, -1)

}

module.exports = initialiseFromFraction
