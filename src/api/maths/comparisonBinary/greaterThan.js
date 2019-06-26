var greaterThan = function greaterThan(otherPeo) {
  return this.mult(otherPeo, -1).greaterThan1();
};

module.exports = greaterThan;
