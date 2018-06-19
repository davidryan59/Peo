var Peo = require('../functions/peo')

var peo1 = Peo.prim(70, 50)
var peo2 = Peo.prim(60, 30)
var result = peo1.mult(peo2, -1)
result.getLog()
console.log(result)
