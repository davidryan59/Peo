var checkNumber = function(input, limit) {
  // Number.MAX_SAFE_INTEGER is approx 9e15
  // We need to add numbers up to this limit
  // Choose 1e15 by default
  return typeof(input)==='number' && Math.abs(input)<=(limit||1e15)
  // Second term catches NaN, -NaN, Infinity, -Infinity, and anything outside [-limit, limit]
}

module.exports = checkNumber
