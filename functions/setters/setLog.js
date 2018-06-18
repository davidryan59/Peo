var setLog = function(peo) {

  // Calculate and store the natural log
  var result = 0
  var primeExpObj = peo.getPrimeExps()
  var keys = Object.keys(primeExpObj)
  for (var i=0; i<keys.length; i++) {
    var key = keys[i]                    // key is a string
    var value = primeExpObj[key]
    var prime = Number.parseInt(key)
    var exponent = Number.parseInt(value)
    if (prime) result += exponent * Math.log(prime)
  }
  peo.naturalLog = result

}

module.exports = setLog
