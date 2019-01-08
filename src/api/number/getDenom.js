var setNumbers = require('../../setters/setNumbers');

var getDenom = function getDenom() {
  setNumbers(this);
  return this.number.d;
};

module.exports = getDenom;
