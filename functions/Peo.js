var initialise = require('./initialisers/initialise')

var copy = require('./api/copy')
var mult = require('./api/mult')
var getText = require('./api/getText')
var toString = require('./api/toString')
var getFraction = require('./api/getFraction')
var getPrimeExp = require('./api/getPrimeExp')
var getPrimeExps = require('./api/getPrimeExps')
var checkPrimeExps = require('./api/checkPrimeExps')

// Peo class constructor
function Peo() {
  // Control of Peo is here
  this.p = {}
  // Cached info to speed up Peo is here. Each value should start off falsey.
  this.fr = null
  this.txt = ""
  // Initialise from various arguments
  initialise(this, arguments)
}

// Setup the public API
Peo.prototype.copy = copy
Peo.prototype.mult = mult
Peo.prototype.getText = getText
Peo.prototype.toString = toString
Peo.prototype.getFraction = getFraction
Peo.prototype.getPrimeExp = getPrimeExp
Peo.prototype.getPrimeExps = getPrimeExps
Peo.prototype.checkPrimeExps = checkPrimeExps

module.exports = Peo
