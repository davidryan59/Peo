var initialise = require('./initialisers/initialise')

// Peo class constructor
function Peo() {
  // Control of Peo is here
  this.p = {}
  // Cached info to speed up Peo is here. Each value should start off falsey.
  this.fr = null
  this.txt = ""
  this.log = null
  // Initialise from various arguments
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
Peo.fact = require('./apis/fact')
Peo.prim = require('./apis/prim')
Peo.binom = require('./apis/binom')

module.exports = Peo
