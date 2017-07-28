var gpio = require('rpi-gpio');

//GPIO init pin 31,33,35,37

gpio.setup(31, gpio.DIR_OUT);
gpio.setup(33, gpio.DIR_OUT, init_gpio);

function init_gpio() {
    gpio.write(31, false, function(err) {
        if (err) throw err;
        console.log('Written to pin31 OFF');
    });

    gpio.write(33, false, function(err) {
        if (err) throw err;
        console.log('Written to pin33 OFF');
    });
}


function motor_front() {


    gpio.write(31, true, function(err) {
        if (err) throw err;
        console.log('Written to pin31 ON');
    });

    gpio.write(33, false, function(err) {
        if (err) throw err;
        console.log('Written to pin33 OFF');
    });
}

