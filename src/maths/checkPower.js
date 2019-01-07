var checkPower = function(power) {
  // If power is not an integer, change it to 1
  return (Number.isInteger(power)) ? power : 1
  // This means power is only falsey if its 0
}

module.exports = checkPower
