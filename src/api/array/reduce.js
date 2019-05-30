var reduce = function reduce(callback, initialValue) {
  return Object.entries(this.p).reduce(callback, initialValue);
  // Object.entries(this.p) is array of arrays, of form [[p1, exp1], [p2, exp2], ...]
};

module.exports = reduce;
