var initialise = require('./initialisers/initialise')

// Peo class constructor
function Peo() {
  // This object must be immutable and completely determine the Peo output
  this.p = {}
  // Initialise the Peo
  initialise(this, arguments)
}

// Instance methods
Peo.prototype.copy = require('./api/copy')
Peo.prototype.mult = require('./api/mult')
Peo.prototype.getLog = require('./api/getLog')
Peo.prototype.getLogNum = require('./api/getLogNum')
Peo.prototype.getLogDenom = require('./api/getLogDenom')
Peo.prototype.getText = require('./api/getText')
Peo.prototype.toString = require('./api/toString')
Peo.prototype.getFraction = require('./api/getFraction')
Peo.prototype.getPrimeExp = require('./api/getPrimeExp')
Peo.prototype.getPrimeExps = require('./api/getPrimeExps')
Peo.prototype.checkPrimeExps = require('./api/checkPrimeExps')

// Static methods
Peo.power = require('./apis/power')
Peo.fact = require('./apis/fact')
Peo.prim = require('./apis/prim')
Peo.binom = require('./apis/binom')

module.exports = Peo
