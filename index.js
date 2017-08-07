var server = require("./server");
var router = require("./route");
var requestHandlers = require("./requestHandlers");

var gpio = require('rpi-gpio');
 //GPIO Pin Setup

 console.log("GPIO Pin Setup");

 gpio.setup(31, gpio.DIR_OUT);
 gpio.setup(33, gpio.DIR_OUT);
 gpio.setup(35, gpio.DIR_OUT);
 gpio.setup(37, gpio.DIR_OUT);
 gpio.setup(8, gpio.DIR_OUT);



var handle = {}
handle["/"] = requestHandlers.start;
handle["/motor_front"] = requestHandlers.motor_front;
handle["/motor_back"] = requestHandlers.motor_back;
handle["/motor_stop"] = requestHandlers.motor_stop;
handle["/plug_on"] = requestHandlers.plug_on;
handle["/plug_off"] = requestHandlers.plug_off;


server.start(router.route, handle);

