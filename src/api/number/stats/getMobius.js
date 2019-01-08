var setNumbers = require('../../../setters/setNumbers');

var getMobius = function getMobius() {
  setNumbers(this);
  return this.number.stats.mob;
};

module.exports = getMobius;
