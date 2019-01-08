var reconstructUsingFraction = function reconstructUsingFraction(array, position, num, denom) {
  if (position < 0) return [num, denom];
  var elt = array[position];
  if (!num) return reconstructUsingFraction(array, position - 1, elt, 1);
  return reconstructUsingFraction(array, position - 1, elt * num + denom, num);
};

var decimalToFraction = function decimalToFraction(decimalInput, maxIterationsInput) {
  // maxIterations is optional
  var maxIterationsCalc = maxIterationsInput || 20;
  var currentDecimal = decimalInput;
  var currentInteger = null;
  var continuedFractionArray = [];
  var fractionResultArray = null;
  var currentFractionResult = null;
  for (var i = 0; i < maxIterationsCalc; i++) {
    // Math.round gives +/- continued fraction elements (quicker)
    // Math.floor gives +ve continued fraction elements, which is
    // mathematically more correct, but slower.
    currentInteger = Math.round(currentDecimal);
    continuedFractionArray.push(currentInteger);
    fractionResultArray = reconstructUsingFraction(continuedFractionArray, i);
    currentFractionResult = fractionResultArray[0] / fractionResultArray[1];
    if (Math.abs(currentFractionResult - decimalInput) < 1e-14) break;
    currentDecimal = 1 / (currentDecimal - currentInteger);
  }
  // Invert fraction array if denominator negative
  if (fractionResultArray[1] < 0) {
    fractionResultArray[0] = -fractionResultArray[0];
    fractionResultArray[1] = -fractionResultArray[1];
  }
  return fractionResultArray;
};

module.exports = decimalToFraction;
