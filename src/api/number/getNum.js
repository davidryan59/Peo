var setNumbers = require('../../setters/setNumbers');

var getNum = function getNum() {
  setNumbers(this);
  return this.number.n;
};

module.exports = getNum;
