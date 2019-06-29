var equals = function equals(input) {
  // The 6 binary comparison functions handle the same inputs as .mult
  // which includes Peo and positive decimals.
  return this.mult(input, -1).is1();
};

module.exports = equals;
