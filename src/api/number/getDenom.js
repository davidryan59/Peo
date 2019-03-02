var setNumbers = require('../../setters/setNumbers');

var getDenom = function getDenom() {
  setNumbers(this);
  return this.n.d;
};

module.exports = getDenom;
