var getBaseMult = require('../../../maths/getBaseMult')
var setNumbers = require('../../../setters/setNumbers')

var getLog = function(base) {
  setNumbers(this)
  return this.number.ln.val * getBaseMult(base)
}

module.exports = getLog
