var equals = function equals(otherPeo) {
  // Two peos are equal if their ratio is 1
  return this.mult(otherPeo, -1).is1();
};

module.exports = equals;
