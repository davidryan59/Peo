var amendPrimeExponent = require('./amendPrimeExponent')

var incrementPrimeExp = function(peo, prime, exponent) {

  var currentPrimeExp = peo.getPrimeExp(prime)
  amendPrimeExponent(peo, prime, currentPrimeExp + exponent)

}

module.exports = incrementPrimeExp
