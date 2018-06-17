var chk = require('../maths/checkNumber')
var isPrime = require('../maths/isPrime')
var incrementPrimeExp = require('./incrementPrimeExp')
var incrementFromIntegerPower = require('./incrementFromIntegerPower')

var incrementFromObjectPower = function(peo, obj, power) {

  // Will reconstruct obj into peo, but only the
  // keys that are primes, and the
  // values that are integers

  // Check power is a positive or negative integer
  power = (Number.isInteger(power)) ? power : 1    // If power=undefined, make it 1
  if (!power) return                               // If power=0, do nothing

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
