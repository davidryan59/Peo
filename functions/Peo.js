var initialise = require('./initialisers/initialise')

var setFraction = require('./setters/setFraction')
var setText = require('./setters/setText')


// Here's the Peo class
function Peo() {

  // Set up structure
  this.p = {}              // This is the main data store. Its going to be set with primes and exponents
  this.fr = null           // Going to set a Fraction in here later (small only)
  this.txt = ""            // Going to set some descriptive text here later

  // Initialise from arguments
  initialise(this, arguments)
  
}


// Now put some functions onto the prototype
Peo.prototype.getPrimeExps = function() {
  return this.p
}

Peo.prototype.getPrimeExp = function(prime) {
  return this.p[prime] || 0
}

Peo.prototype.getFraction = function() {
  ;(!this.fr) ? setFraction(this) : null
  return this.fr
}

Peo.prototype.getText = function() {
  ;(!this.txt) ? setText(this) : null
  return this.txt
}

Peo.prototype.toString = function() {
  return this.getText()
}


module.exports = Peo
