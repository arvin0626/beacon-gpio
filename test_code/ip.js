var os = require('os');  
var IPv4,hostName;  

hostName=os.hostname();  

for(var i=0;i<os.networkInterfaces().wlan0.length;i++){  
    if(os.networkInterfaces().wlan0[i].family=='IPv4'){  
        IPv4=os.networkInterfaces().wlan0[i].address;  
    }  
}

console.log('----------local IP: '+IPv4);  
console.log('----------local host: '+hostName);  

