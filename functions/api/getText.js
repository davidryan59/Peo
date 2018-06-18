var setText = require('../setters/setText')

var getText = function() {
  setText(this)
  return this.txt
}

module.exports = getText
