var checkPrimeExps = function(input) {
  // Check that 'this' peo has specific primes p1, p2...
  // to the same exponents e1, e2...
  // as specified in an input object of form {p1:e1, p2:e2...}

  var keys = Object.keys(input)
  for (var i=0; i<keys.length; i++) {
    var key = keys[i]
    var inputVal = input[key] || 0
    var thisVal = this.getPrimeExp(key)
    if (inputVal !== thisVal) return false
  }
  return true

}

module.exports = checkPrimeExps
