/* eslint-disable func-names*/
/* eslint-disable no-unused-vars*/
/* eslint-disable no-console*/

var assert = require('assert');

var testIndex = require('./_test_index');
var Peo = testIndex.Peo;

var getTimeMS = function () {
  return new Date().getTime();
};

var runTest = function (startAtNumber, totalLoops, maxTimeMicroseconds, testLabel, functionToCall) {
  it(testLabel, function () {
    var exampleOutput = null;
    var startTimeMS = getTimeMS();
    for (var i = startAtNumber; i < startAtNumber + totalLoops; i++) exampleOutput = functionToCall(i);
    var endTimeMS = getTimeMS();
    // console.log(`Example output:`)
    // console.log(exampleOutput)
    var timeInMicroseconds = Math.round((endTimeMS - startTimeMS) * 1000 / totalLoops);
    console.log(`Average time was ${timeInMicroseconds}us, tested on ${totalLoops} instances from ${startAtNumber} to ${startAtNumber + totalLoops - 1}, total time ${endTimeMS - startTimeMS}ms.`);
    assert(timeInMicroseconds < maxTimeMicroseconds);
  });
};

describe('Performance of Peo', function () {
  runTest(100000, 3000, 45, 'average < 45us (microseconds) for new Peo(i, i+210), around i=1e5', function (i) {
    var thePeo = new Peo(i, i + 210);
    return thePeo;
  });

  runTest(100000, 2000, 55, 'average < 55us for new Peo(i, i+210), around i=1e5, with calculations', function (i) {
    var thePeo = new Peo(i, i + 210);
    thePeo.getAsFractionText();  // Forces extra calculations to run
    return thePeo;
  });

  runTest(10000000000, 300, 350, 'average < 350us for new Peo(i, i+27720), around i=1e10', function (i) {
    var thePeo = new Peo(i, i + 27720);
    return thePeo;
  });

  runTest(100000000000000, 20, 12000, 'average < 12000us for new Peo(i, i+510510), around i=1e14', function (i) {
    var thePeo = new Peo(i, i + 510510);
    return thePeo;
  });
});
