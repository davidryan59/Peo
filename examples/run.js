var Peo = require('../functions/peo')

for (var n=66; n<=70; n++) {
  for (var r=0; r<=n; r++) {
    console.log(n, r, Peo.binom(n, r).getText())
  }
}

// var v = new Peo(11028387, 227973)
// v.getText()
// console.log(v)
