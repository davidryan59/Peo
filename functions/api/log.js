var log = function(base) {

  var logBaseReciprocal = 1/Math.log(base)
  var primeExpObj = this.getPrimeExps()
  var keys = Object.keys(primeExpObj)
  
  var result = 0
  for (var i=0; i<keys.length; i++) {
    var key = keys[i]                    // key is a string
    var value = primeExpObj[key]
    var prime = Number.parseInt(key)
    var exponent = Number.parseInt(value)
    if (prime) result += exponent * Math.log(prime) * logBaseReciprocal
  }

  return result

}

module.exports = log
