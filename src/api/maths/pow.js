var get1 = require('./get1')
var incrementFromObjectPower = require('../../setters/incrementFromObjectPower')

var pow = function(power) {
  var result = this.get1()     // Start a new Peo representing 1/1
  incrementFromObjectPower(result, this.getPrimeExps(), power)
  return result
}

module.exports = pow
