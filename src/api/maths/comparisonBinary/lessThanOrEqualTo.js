var lessThanOrEqualTo = function lessThanOrEqualTo(input) {
  return this.mult(input, -1).lessThanOrEqualTo1();
};

module.exports = lessThanOrEqualTo;
