// Comment out right lines to test either src or build:

var testDir = 'src';
// var testDir = 'build';

module.exports = {
  Peo: require('../' + testDir + '/Peo'),
  amendPrimeExponent: require('../' + testDir + '/setters/amendPrimeExponent'),
  incrementFromIntegerPower: require('../' + testDir + '/setters/incrementFromIntegerPower'),
  setNumbers: require('../' + testDir + '/setters/setNumbers')
};
