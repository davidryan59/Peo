var Fraction = require('fraction.js')

var chk = require('../checkNumber')

var setFraction = function(peo) {
  var obj = peo.getPrimeExps()
  var keys = Object.keys(obj)

  var num = 1
  var denom = 1
  for (var i=0; i<keys.length; i++) {
    var key = keys[i]          // key is a string
    var exponent = obj[key]    // exponent should be a number
    var prime = Number.parseInt(key)
    if (chk(prime, 1e10) && (prime>=2) && chk(exponent, 1000) && exponent) {
      // 'prime' is numeric, at least 2, and smaller than 1e10
      // 'exponent' is numeric, within -1000 to +1000, and non-zero
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
