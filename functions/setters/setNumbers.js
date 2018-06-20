var Fraction = require('fraction.js')

var setNumbers = function(peo) {

  // Exit if already set
  if (peo.number) return

  // Calculate and store the natural logs of numerator, denominator, whole Peo
  var val = 1
  var num = 1
  var denom = 1
  var lnVal = 0
  var lnNum = 0
  var lnDenom = 0
  var primeExpObj = peo.getPrimeExps()
  var keys = Object.keys(primeExpObj)
  for (var i=0; i<keys.length; i++) {
    var key = keys[i]                    // key is a string
    var value = primeExpObj[key]
    var prime = Number.parseInt(key)
    var exponent = Number.parseInt(value)
    if (prime) {
      var factor = Math.pow(prime, exponent)
      var logFactor = exponent * Math.log(prime)
      val *= factor
      lnVal += logFactor
      if (logFactor>0) {
        num *= factor
        lnNum += logFactor
      }
      if (logFactor<0) {
        denom *= Math.pow(prime, -exponent)  // Always use whole numbers if possible!
        lnDenom -= logFactor
      }
    }

  }

  // Store results
  peo.number = {}
  peo.number.val = val
  peo.number.n = num
  peo.number.d = denom
  peo.number.ln = {}
  peo.number.ln.val = lnVal
  peo.number.ln.n = lnNum
  peo.number.ln.d = lnDenom

  // Only allow a Fraction if num and denom both less than 10^15
  var accuracyLimit = 34.539      // Just over ln(10^15)
  if (lnNum<accuracyLimit && lnDenom<accuracyLimit) {
    peo.number.fr = new Fraction(num, denom)
    peo.number.txt = (denom===1) ? "" + num : num + "/" + denom
  } else {
    peo.number.fr = new Fraction(1, 1)
    peo.number.txt = "10^" + Math.round(lnVal*100/Math.log(10))/100  // 4dps
  }

}

module.exports = setNumbers
