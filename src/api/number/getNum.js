var setNumbers = require('../../setters/setNumbers')

var getNum = function() {
  setNumbers(this)
  return this.number.n
}

module.exports = getNum
