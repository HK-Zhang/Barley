export function httpServerStatic() {
    var fs = require("fs");
    var http = require("http");
    var url = require("url");
    var ROOT_DIR = "html/";

    http.createServer((req, res) => {
        var urlObj = url.parse(req.url, true, false);
        fs.readFile(ROOT_DIR + urlObj.pathname, (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end(JSON.stringify(err));
                return;
            }
            res.writeHead(200);
            res.end(data);
        });
    }).listen(8080);
}

export function httpClientStatic() {
    var http = require("http");
    var options = {
        hostname: 'localhost',
        port: '8080',
        path: '/hello.html'
    };

    function handleResponse(response) {
        var serverData = '';
        response.on('data', (chunk) => {
            serverData += chunk;
        });
        response.on('end', () => {
            console.log(serverData);
        });
    }

    http.request(options, (response) => {
        handleResponse(response);
    }).end();
}

export function httpServerGet() {
    var http = require("http");
    var message = [
        'Hello World',
        'From a basic Node.js server',
        'Take Luck'];
    http.createServer((req, res) => {
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200);
        res.write('<html><head><title>Simple HTTP Server</title></head>');
        res.write('<body>');
        for (const idx in message) {
            res.write('\n<h1>' + message[idx] + '</h1>');
        }
        res.end('\n</body></html>')
    }).listen(8080);
}

export function httpClientGet() {
    var http = require("http");
    var options = {
        hostname: 'localhost',
        port: '8080',
    };

    function handleResponse(response) {
        var serverData = '';
        response.on('data', (chunk) => {
            serverData += chunk;
        });
        response.on('end', () => {
            console.log("Response Status:", response.statusCode);
            console.log("Response Headers:", response.headers);
            console.log(serverData);
        });
    }
    
    http.request(options, (response) => {
        handleResponse(response);
    }).end();

}