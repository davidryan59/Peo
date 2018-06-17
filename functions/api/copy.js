var copy = function() {
  // Get the constructor for this Peo object (requiring Peo didn't work!)
  var PeoConstructor = this.constructor
  // Start with a new Peo representing 1/1
  var copyPeo = new PeoConstructor()
  // Assign it a copy of the prime exponent information, which contains all relevant info
  copyPeo.p = Object.assign({}, this.p)
  // Doing it this way because this.p is already trusted,
  // don't want to have to check every key is prime again, could be costly
  return copyPeo
}

module.exports = copy
