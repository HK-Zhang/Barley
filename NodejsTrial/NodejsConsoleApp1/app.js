var sys = require("sys");

setTimeout(function () { sys.puts("world"); }, 3000);
sys.puts("hello");

var http = require("http");
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(5000, "127.0.0.1");

var net = require("net");
net.createServer(function (socket) {
    socket.write("Echo Server\r\n");
    socket.pipe(socket);
}).listen(6000, "127.0.0.1");