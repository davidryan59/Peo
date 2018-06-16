var addFactors = require('../setters/addFactors')

var initialiseFromFraction = function(peo, fraction) {

  // Already got a suitable Fraction object
  // (Fractions are immutable)
  // Initialise the .fr property.
  peo.fr = fraction

  // Use numerator and denominator to add factors to the peo
  addFactors(peo, fraction.n)
  addFactors(peo, fraction.d, -1)

}

module.exports = initialiseFromFraction
