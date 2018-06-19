var incrementFromObjectPower = require('../setters/incrementFromObjectPower')

var pow = function(power) {
  var PeoConstructor = this.constructor
  var result = new PeoConstructor()       // 1/1
  incrementFromObjectPower(result, this.getPrimeExps(), power)
  return result
}

module.exports = pow
