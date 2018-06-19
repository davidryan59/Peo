var Peo = require('../functions/peo')

for (var n=66; n<=70; n++) {
  for (var r=0; r<=n; r++) {
    console.log(n, r, Peo.binom(n, r).getText())
  }
}

// var v = new Peo(11028387, 227973)
// v.getText()
// console.log(v)

var peo2 = Peo.prim(10000, 9100)
// peo.mult(Peo.prim(900,200))
console.log(peo2)
