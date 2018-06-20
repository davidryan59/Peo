// var Peo = require('peo')
var Peo = require('../functions/peo')

var peo = new Peo(80, 14)
console.log(peo.getText())  // "40/7"
console.log(peo.getNum())   // 40
console.log(peo.getDenom()) // 7
console.log(peo.getVal())   // 5.7142857142857135
