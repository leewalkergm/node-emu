var auth = require('./auth');
var net = require('net');

module.exports = function (logonServerPort) {
    var logonServer = net.createServer(function(socket) {
        socket.on('end', function() {
            console.log('Client disconnected');
        });

        console.log("Client connected from: " + socket.remoteAddress);

        auth(socket);
    });

    logonServer.listen({host: "0.0.0.0", port: logonServerPort}, function() { //'listening' listener
        var address = logonServer.address();
        console.log('server bound on: ' + address.address + ":" + address.port);
    });
};
