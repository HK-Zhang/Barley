exports.socketServerRun = () => {
    var net = require("net");
    var fs = require("fs");
    var tls = require('tls');

    var options = {
        key: fs.readFileSync('./server.pem'),
        cert: fs.readFileSync('./server.crt'),
        ca: fs.readFileSync('./client.crt')
    };

    var server = net.createServer(options, client => {


        console.log("Client Connection: ");
        console.log(" local = %s:%s", client.localAddress, client.localPort);
        console.log(" remote = %s:%s", client.remoteAddress, client.remotePort);
        client.setTimeout(500);
        client.setEncoding("utf8");

        client.on("data", (data) => {
            console.log(
                "Received data from client on port %d: %s",
                client.remotePort,
                data.toString()
            );
            console.log(" Bytes received: " + client.bytesRead);
            writeData(client, "Sending: " + data.toString());
            console.log(" Bytes sent: " + client.bytesWritten);
        });

        client.on("end", () => {
            console.log("Client disconnected");
            server.getConnections((err, count) => {
                console.log("Remaining Connections: " + count);
            });
        });

        client.on("error", (err) => {
            console.log("Socket Error: ", JSON.stringify(err));
        });

        client.on("timeout", () => {
            console.log("Socket Time Out");
        });
    });

    server.listen(8107, () => {
        console.log("Server listening: " + JSON.stringify(server.address()));

        server.on("close", () => {
            console.log("Server Terminated");
        });

        server.on("error", (err) => {
            console.log("Server Error: ", JSON.stringify(err));
        });
    });

    function writeData(socket, data) {
        var success = !socket.write(data);
        if (!success) {
            (function (socket, data) {
                socket.once("drain", () => {
                    writeData(socket, data);
                });
            })(socket, data);
        }
    }
};
