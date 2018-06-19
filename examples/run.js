var Peo = require('../functions/peo')

var peo1 = Peo.prim(102, 70)
var peo2 = Peo.prim(70, 40)
var result = peo1.mult(peo2, -1)
result.getLog()
console.log(result)

console.log(Math.log(Number.MAX_SAFE_INTEGER))
console.log(Math.log(1e15))
