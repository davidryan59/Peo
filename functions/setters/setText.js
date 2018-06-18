var setText = function(peo) {

  // Exit if already set
  if (peo.txt) return

  var fraction = peo.getFraction()
  var fractionText = fraction.toFraction()
  peo.txt = fractionText

  // This isn't going to work if numerator or denominator are too big
  // Want a different way of calculating text then.
}

module.exports = setText
