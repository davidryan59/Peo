var setNumbers = require('../../../setters/setNumbers');

var getLowestExp = function getLowestExp() {
  setNumbers(this);
  return this.number.stats.eLo;
};

module.exports = getLowestExp;
