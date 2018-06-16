var initialiseFromObject = function(peo, object) {

  // Probably want to do a bit more here, to filter the object
  // Going to need a numeric check, and also a prime check.

  // Treat as case where an object such as {2:3, 3:-2} is supplied
  peo.p = object

}

module.exports = initialiseFromObject
