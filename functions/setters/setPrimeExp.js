var chk = require('../checkNumber')

var setPrimeExp = function(peo, prime, exponent) {

  // Get the object to be set
  var obj = peo.p

  if (chk(exponent, 1e15)) {
    // exponent is numeric, and not too big
    if (exponent) {
      // exponent is non-zero - set the object
      obj[prime] = exponent
    } else {
      // exponent is zero - remove the key from object
      delete obj[prime]
    }
  }

}

module.exports = setPrimeExp
