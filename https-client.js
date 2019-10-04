var https = require('https');
var fs = require('fs');

var n=0;

console.log('https connect...');

var client = require('socket.io-client');
options = {
    secure:true,
    reconnect: true,
    rejectUnauthorized: false
};
socket=client.connect('https://localhost:4443',options);
socket.on('connect', function () { 
    console.log('connected!');
    socket.emit('message','ping '+n++);
});
socket.on('event', function (data) { 
    console.log(data);
    socket.emit('message','ping');
});
socket.on('message',function(message) {
    console.log('CLIENT-RX:'+message);
    socket.emit('message','ping '+n++);
    if( n>20 ) {
        socket.disconnect();
    }
});
socket.on('disconnect', function () { 
    console.log('disconnected');
});
