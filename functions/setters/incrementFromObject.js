var chk = require('../maths/checkNumber')
var isPrime = require('../maths/isPrime')
var incrementPrimeExp = require('./incrementPrimeExp')
var incrementFromIntegerPower = require('./incrementFromIntegerPower')

var incrementFromObject = function(peo, obj) {

  // Will reconstruct obj into peo, but only the
  // keys that are primes, and the
  // values that are integers
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
        incrementPrimeExp(peo, number, exponent)
      } else {
        incrementFromIntegerPower(peo, number, exponent)
      }
    }
  }

}

module.exports = incrementFromObject
