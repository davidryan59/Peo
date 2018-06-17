var setText = require('../setters/setText')

var getText = function() {
  ;(!this.txt) ? setText(this) : null
  return this.txt
}

module.exports = getText
