var setNumbers = require('../../../setters/setNumbers');

var getBenedettiHeight = function getBenedettiHeight() {
  setNumbers(this);
  return this.n.s.bh;
};

module.exports = getBenedettiHeight;
