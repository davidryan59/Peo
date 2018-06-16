var setPrimeExp = require('./setPrimeExp')

var incrementPrimeExp = function(peo, prime, exponent) {

  var currentPrimeExp = peo.getPrimeExp(prime)
  setPrimeExp(peo, prime, currentPrimeExp + exponent)

}

module.exports = incrementPrimeExp
