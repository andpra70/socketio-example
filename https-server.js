
var https = require('https');
var fs = require('fs');
var util = require('util');

console.log( cwd=process.cwd() );

// genera con openssl req -nodes -new -x509 -keyout server.key -out server.cert
var httpsOptions = {    
    key: fs.readFileSync(cwd+'/certs/server.key'),
    cert: fs.readFileSync(cwd+'/certs/server.cert'),
    ca: [ 
        fs.readFileSync(cwd+'/certs/ca-cert.pem')
    ], 
    requestCert: false,
    rejectUnauthorized: false
};

server = https.createServer(httpsOptions, function (req, res) {
    console.log("------------>"+new Date()+' '+ 
        util.inspect(req)+'\n'+ 
        req.connection.remoteAddress+'\n'+ 
        req.method+'\n'+req.url); 
    res.writeHead(200);
    res.end("hello world \n"+util.inspect(req) );
}).listen(4443);
console.log('A server listens on 4443!');


// Loading socket.io
var io = require('socket.io').listen(server);

// When a client connects, we note it in the console
io.sockets.on('connection', function (socket) {
    console.log('A client is connected!');
    socket.emit('data', 'welcome!');
    // When the server receives a “message” type signal from the client   
    socket.on('message', function (message) {
        console.log('SERVER-RX: ' + message);
        socket.emit('message', 'pong');
    });
});

