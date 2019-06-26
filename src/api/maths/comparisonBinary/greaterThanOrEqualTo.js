var greaterThanOrEqualTo = function greaterThanOrEqualTo(otherPeo) {
  return this.mult(otherPeo, -1).greaterThanOrEqualTo1();
};

module.exports = greaterThanOrEqualTo;
