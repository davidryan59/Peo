var Fraction = require('fraction.js')

var chk = require('../maths/checkNumber')

var setFraction = function(peo) {
  var obj = peo.getPrimeExps()
  var keys = Object.keys(obj)

  var num = 1
  var denom = 1
  for (var i=0; i<keys.length; i++) {
    var key = keys[i]          // key is a string
    var exponent = obj[key]    // exponent should be a number
    var prime = Number.parseInt(key)
    if (chk(prime) && (prime>=2) && chk(exponent) && exponent) {
      // 'prime' is numeric and finite, at least 2
      // 'exponent' is numeric and finite, and non-zero
      if (exponent>0) {
        num = num * Math.pow(prime, exponent)
      } else {
        denom = denom * Math.pow(prime, -exponent)
      }
    }
  }
  peo.fr = new Fraction(num, denom)
}

module.exports = setFraction
