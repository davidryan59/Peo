var initialise = require('./initialisers/initialise')
// Instance methods
var copy = require('./api/copy')
var mult = require('./api/mult')
var log = require('./api/log')
var getText = require('./api/getText')
var toString = require('./api/toString')
var getFraction = require('./api/getFraction')
var getPrimeExp = require('./api/getPrimeExp')
var getPrimeExps = require('./api/getPrimeExps')
var checkPrimeExps = require('./api/checkPrimeExps')
// Static methods
var fact = require('./apis/fact')
var binom = require('./apis/binom')

// Peo class constructor
function Peo() {
  // Control of Peo is here
  this.p = {}
  // Cached info to speed up Peo is here. Each value should start off falsey.
  this.fr = null
  this.txt = ""
  this.naturalLog = null
  // Initialise from various arguments
  initialise(this, arguments)
}

// Instance methods
Peo.prototype.copy = copy
Peo.prototype.mult = mult
Peo.prototype.log = log
Peo.prototype.getText = getText
Peo.prototype.toString = toString
Peo.prototype.getFraction = getFraction
Peo.prototype.getPrimeExp = getPrimeExp
Peo.prototype.getPrimeExps = getPrimeExps
Peo.prototype.checkPrimeExps = checkPrimeExps
// Static methods
Peo.fact = fact
Peo.binom = binom

module.exports = Peo
