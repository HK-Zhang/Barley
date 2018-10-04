exports.socketClientRun = () => {
    var net = require("net");
    var fs = require("fs");
    var tls = require('tls');

    function getConnection(connName) {
        var options = {
            port: 8107,
            host: "localhost"
            // key: fs.readFileSync('./client.pem'),
            // cert: fs.readFileSync('./client.crt'),
            // ca: fs.readFileSync('./server.crt')
        };
        var client = net.connect(
            options,
            function () {
                console.log(connName + " Connected: ");
                console.log(" local = %s:%s", this.localAddress, this.localPort);
                console.log(" remote = %s:%s", this.remoteAddress, this.remotePort);

                this.setTimeout(500);
                this.setEncoding("utf8");

                this.on("data", (data) => {
                    console.log(connName + " From Server: " + data.toString());
                    this.end();
                });

                this.on("end", () => {
                    console.log(connName + " Client disconnected");
                });

                this.on("error", (err) => {
                    console.log("Socket Error: ", JSON.stringify(err));
                });

                this.on("timeout", () => {
                    console.log("Socket Time Out");
                });

                this.on("close", () => {
                    console.log("Socket Closed");
                });
            }
        );

        return client;
    }

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

    var Dwarves = getConnection("Dwarves");
    var Elves = getConnection("Elves");
    var Hobbits = getConnection("Hobbits");

    writeData(Dwarves, "More Axes");
    writeData(Elves, "More Arrows");
    writeData(Hobbits, "More Pipe Weed");
};
