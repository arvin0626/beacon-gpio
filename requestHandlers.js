var gpio = require('rpi-gpio');

function start() {
 console.log("Request handler 'start' was called.");
 
 //GPIO Pin Setup 

 console.log("GPIO Pin Setup");

 gpio.setup(31, gpio.DIR_OUT);
 gpio.setup(33, gpio.DIR_OUT);

 gpio.setup(35, gpio.DIR_OUT);
 gpio.setup(37, gpio.DIR_OUT);

}


function motor_front() {
 console.log("Request handler '電扇正轉' was called.");

    gpio.write(31, true, function(err) {
        if (err) throw err;
        console.log('Written to pin31 ON');
    });

    gpio.write(33, false, function(err) {
        if (err) throw err;
        console.log('Written to pin33 OFF');
    });

}

function motor_back() {
 console.log("Request handler '電扇反轉' was called.");

    gpio.write(31, false, function(err) {
        if (err) throw err;
        console.log('Written to pin31 OFF');
    });

    gpio.write(33, true, function(err) {
        if (err) throw err;
        console.log('Written to pin33 ON');
    });

}

function motor_stop() {
 console.log("Request handler '電扇停止' was called.");

    gpio.write(31, false, function(err) {
        if (err) throw err;
        console.log('Written to pin31 OFF');
    });

    gpio.write(33, false, function(err) {
        if (err) throw err;
        console.log('Written to pin33 OFF');
    });

}

exports.start = start;
exports.motor_front = motor_front;
exports.motor_back =  motor_back;
exports.motor_stop =  motor_stop;

