var getBaseMult = require('../maths/getBaseMult')
var setNumbers = require('../setters/setNumbers')

var getLogNum = function(base) {
  setNumbers(this)
  return this.number.ln.n * getBaseMult(base)
}

module.exports = getLogNum
