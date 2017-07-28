
var eddystoneBeacon = require('eddystone-beacon');

var options = {
  name: 'ArvinBeacon',    // set device name when advertising (Linux only)
  txPowerLevel: -22, // override TX Power Level, default value is -21,
  tlmCount: 2,       // 2 TLM frames
  tlmPeriod: 10      // every 10 advertisements
};

var url = 'http://192.168.3.1:8888';

eddystoneBeacon.advertiseUrl(url, [options]);


