var greaterThanOrEqualTo = function greaterThanOrEqualTo(input) {
  return this.mult(input, -1).greaterThanOrEqualTo1();
};

module.exports = greaterThanOrEqualTo;
