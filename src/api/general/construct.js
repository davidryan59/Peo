var construct = function construct() {
  // Idea is for peo.construct(...args)
  // to be identical to new Peo(...args)
  // For Peo, only the first 3 arguments are needed, see initialise function
  var args = arguments;
  var PeoConstructor = this.constructor;
  var peo = new PeoConstructor(args[0], args[1], args[2]);
  return peo;
};

module.exports = construct;
