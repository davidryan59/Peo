var setText = function(peo) {

  var fraction = peo.getFraction()
  var fractionText = fraction.toFraction()
  peo.txt = fractionText

  // This isn't going to work if numerator or denominator are too big
  // Want a different way of calculating text then.
}

module.exports = setText
