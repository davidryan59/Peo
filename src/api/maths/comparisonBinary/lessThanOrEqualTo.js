var lessThanOrEqualTo = function lessThanOrEqualTo(otherPeo) {
  return this.mult(otherPeo, -1).lessThanOrEqualTo1();
};

module.exports = lessThanOrEqualTo;
