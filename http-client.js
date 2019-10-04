var http = require('http');
var fs = require('fs');

var n=0;

var socket = require('socket.io-client')('http://localhost:8080');
socket.on('connect', function () { 
    console.log('connected!');
    socket.emit('message','ping '+n++);
});
socket.on('event', function (data) { 
    console.log(data);
    socket.emit('message','ping');
});
socket.on('message',function(message) {
    console.log(message);
    socket.emit('message','ping '+n++);
});
socket.on('disconnect', function () { 
    console.log('disconnected');
});
