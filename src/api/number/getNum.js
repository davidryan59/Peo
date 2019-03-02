var setNumbers = require('../../setters/setNumbers');

var getNum = function getNum() {
  setNumbers(this);
  return this.n.n;
};

module.exports = getNum;
