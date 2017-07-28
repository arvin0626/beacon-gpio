
var http = require("http");
var url = require("url");
var eddystoneBeacon = require('eddystone-beacon');

var beacon_url = 'http://goo.gl/jmNsDg';

//http://arvin.ddns.net:3000


function start(route, handle) {
 
 function onRequest(request, response) {
 var pathname = url.parse(request.url).pathname;
 console.log("Request for " + pathname + " received.");
 route(handle, pathname);

 var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '<title>電扇控制</title>'+
    '</head>'+
    '<body>'+

//監視攝影機

    '<center>'+
      '<img src="http://arvin.ddns.net:8080/?action=stream" />'+
    '</center>'+
    '</br>'+

//風扇正轉
    '<form action="/motor_front" method="post">'+
    '<button name="motor_front" value="motor_front" style="width:1000px;height:200px;font-size:60px;">風扇正轉</button>'+
    '</form>'+
    '</br>'+


//風扇反轉
    '<form action="/motor_back" method="post">'+
    '<button name="motor_back" value="motor_back" style="width:1000px;height:200px;font-size:60px;">風扇反轉</button>'+
    '</form>'+
    '</br>'+


//風扇停止
    '<form action="/motor_stop" method="post">'+
    '<button name="motor_stop" value="motor_stop" style="width:1000px;height:200px;font-size:60px;">風扇停止</button>'+
    '</form>'+
    '</br>'+


    '</body>'+
    '</html>';

// response.writeHead(200, {"Content-Type": "text/html"});
 
 response.write(body);
 response.end();

 }
 
http.createServer(onRequest).listen(3000);
 console.log("Server has started port 3000.");



// Beacon URL Setup

var options = {
  name: 'ArvinBeacon',    // set device name when advertising (Linux only)
  txPowerLevel: -22, // override TX Power Level, default value is -21,
  tlmCount: 2,       // 2 TLM frames
  tlmPeriod: 10      // every 10 advertisements
};

eddystoneBeacon.advertiseUrl( beacon_url, [options]);

}


exports.start = start;

