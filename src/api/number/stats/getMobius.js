var setNumbers = require('../../../setters/setNumbers');

var getMobius = function getMobius() {
  setNumbers(this);
  return this.n.s.mob;
};

module.exports = getMobius;
