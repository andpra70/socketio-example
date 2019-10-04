var http = require('http');
var fs = require('fs');

// Loading the index file . html displayed to the client
var server = http.createServer(function(req, res) {
    fs.readFile('./index.html', 'utf-8', function(error, content) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(content);
    });
});

// Loading socket.io
var io = require('socket.io').listen(server);

// When a client connects, we note it in the console
io.sockets.on('connection', function (socket) {
    console.log('A client is connected!');
    socket.emit('data', 'welcome!');
    // When the server receives a “message” type signal from the client   
    socket.on('message', function (message) {
        console.log('A client is speaking to me! They’re saying: ' + message);
        socket.emit('message','pong');
    }); 
});


server.listen(8080);
console.log('A server listens on 8080!');