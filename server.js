
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
    '<title>電源控制</title>'+
    '</head>'+
    '<body>'+

//監視攝影機

    '<center>'+

//有網路使用
    '<img src="http://arvin.ddns.net:8080/?action=stream" />'+

//無網路使用
//  '<img src="http://192.168.3.1:8080/?action=stream" />'+

    '</center>'+
    '</br>'+

//插座開啟
    '<form action="/plug_on" method="post">'+
        '<button name="plug_on" value="plug_on" style="width:1000px;height:200px;font-size:60px;">插座開啟</button>'+
            '</form>'+
                '</br>'+


//插座關閉
    '<form action="/plug_off" method="post">'+
            '<button name="plug_off" value="plug_off" style="width:1000px;height:200px;font-size:60px;">插座關閉</button>'+
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

