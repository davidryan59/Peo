var ibn = require('is-bounded-number');

var getBaseMult = function getBaseMult(base) {
  return (!ibn(base) || base <= 1) ? 1 : 1 / Math.log(base);
};

module.exports = getBaseMult;
