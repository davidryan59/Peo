var compress = function() {
  // Remove all cached information
  // If system had millions of peos, might want to do this after calculations.
  // Would have to recalculate to obtain several of the API outputs.
  delete this.number
}

module.exports = compress
