var express = require('express');
var gpio = require('rpi-gpio');


//GPIO Pin Setup

 console.log("GPIO Pin Setup");

 gpio.setup(31, gpio.DIR_OUT);
 gpio.setup(33, gpio.DIR_OUT);
 gpio.setup(35, gpio.DIR_OUT);
 gpio.setup(37, gpio.DIR_OUT);


var app = express();

app.get('/', function(req, res) {

 console.log("GPIO Pin Setup");

 gpio.setup(31, gpio.DIR_OUT);
 gpio.setup(33, gpio.DIR_OUT);

 gpio.setup(35, gpio.DIR_OUT);
 gpio.setup(37, gpio.DIR_OUT);

});


app.get('/motor_front', function(req, res) {

    console.log("Request handler '電扇正轉' was called.");

    gpio.write(31, true, function(err) {
        if (err) throw err;
        console.log('Written to pin31 ON');
    });

    gpio.write(33, false, function(err) {
        if (err) throw err;
        console.log('Written to pin33 OFF');
    });

});


app.get('/motor_back', function(req, res) {

    console.log("Request handler '電扇反轉' was called.");

    gpio.write(31, false, function(err) {
        if (err) throw err;
        console.log('Written to pin31 OFF');
    });

    gpio.write(33, true, function(err) {
        if (err) throw err;
        console.log('Written to pin33 ON');
    });

});


app.get('/motor_stop', function(req, res) {

    console.log("Request handler '電扇停止' was called.");

    gpio.write(31, false, function(err) {
        if (err) throw err;
        console.log('Written to pin31 OFF');
    });

    gpio.write(33, false, function(err) {
        if (err) throw err;
        console.log('Written to pin33 OFF');
    });

});

app.listen(3000);

