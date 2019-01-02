// Return the identity 1/1, which is a new empty Peo
var get1 = function() {
  var PeoConstructor = this.constructor
  return new PeoConstructor()       // Peo() represents 1/1
}

module.exports = get1
