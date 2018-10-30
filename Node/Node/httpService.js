export function httpServerStatic() {
    var fs = require("fs");
    var http = require("http");
    var url = require("url");
    var ROOT_DIR = "html/";

    http
        .createServer((req, res) => {
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
        })
        .listen(8080);
}

export function httpClientStatic() {
    var http = require("http");
    var options = {
        hostname: "localhost",
        port: "8080",
        path: "/hello.html"
    };

    function handleResponse(response) {
        var serverData = "";
        response.on("data", chunk => {
            serverData += chunk;
        });
        response.on("end", () => {
            console.log(serverData);
        });
    }

    http
        .request(options, response => {
            handleResponse(response);
        })
        .end();
}

export function httpServerGet() {
    var http = require("http");
    var message = ["Hello World", "From a basic Node.js server", "Take Luck"];
    http
        .createServer((req, res) => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.write("<html><head><title>Simple HTTP Server</title></head>");
            res.write("<body>");
            for (const idx in message) {
                res.write("\n<h1>" + message[idx] + "</h1>");
            }
            res.end("\n</body></html>");
        })
        .listen(8080);
}

export function httpClientGet() {
    var http = require("http");
    var options = {
        hostname: "localhost",
        port: "8080"
    };

    function handleResponse(response) {
        var serverData = "";
        response.on("data", chunk => {
            serverData += chunk;
        });
        response.on("end", () => {
            console.log("Response Status:", response.statusCode);
            console.log("Response Headers:", response.headers);
            console.log(serverData);
        });
    }

    http
        .request(options, response => {
            handleResponse(response);
        })
        .end();
}

export function httpServerPost() {
    var http = require("http");
    http
        .createServer((req, res) => {
            var jsonData = "";
            req.on("data", chunk => {
                jsonData += chunk;
            });
            req.on("end", () => {
                var reqObj = JSON.parse(jsonData);
                var resObj = {
                    message: "Hello " + reqObj.name,
                    question: "Are you a good " + reqObj.occupation + "?"
                };
                res.writeHead(200);
                res.end(JSON.stringify(resObj));
            });
        })
        .listen(8080);
}

export function httpClientPost() {
    var http = require("http");
    var options = {
        host: "127.0.0.1",
        path: "/",
        port: "8080",
        method: "POST"
    };

    function readJSONResponse(response) {
        var responseData = '';
        response.on('data', (chunk) => {
            responseData += chunk;
        });
        response.on('end', () => {
            var dataObj = JSON.parse(responseData);
            console.log("Raw Response: " + responseData);
            console.log("Message: " + dataObj.message);
            console.log("Question: " + dataObj.question);
        });
    }

    var req = http.request(options, readJSONResponse);
    req.write('{"name":"Bilbo","occupation":"Burglar"}');
    req.end();
}

export function httpServerExternal() {
    var http = require('http');
    var url = require('url');
    var qstring = require('querystring');

    function sendResponse(weatherData, res) {
        var page = '<html><head><title>External Example</title></head>' +
            '<body>' +
            '<form method="post">' +
            'City: <input name="city"><br>' +
            '<input type="submit" value="Get Weather">' +
            '</form>';

        if (weatherData) {
            page += '<h1>Weather Info</h1><p>' + weatherData + '</p>'
        }

        page += '</body></html>';
        res.end(page);
    }

    function parseWeather(weatherRepsponse, res) {
        var weatherData = '';
        weatherRepsponse.on('data', (chunk) => {
            weatherData += chunk;
        });
        weatherRepsponse.on('end', () => {
            sendResponse(weatherData, res);
        });
    }

    function getWeather(city, res) {
        var options = {
            host: 'api.openweathermap.org',
            path: '/data/2.5/weather?q=' + city
        }

        http.request(options, (weatherRepsponse) => {
            parseWeather(weatherRepsponse, res);
        }).end();
    }

    http.createServer((req, res) => {
        console.log(req.method);
        if (req.method == "POST") {
            var reqData = '';
            req.on('data', (chunk) => {
                reqData == chunk;
            });

            req.on('end', () => {
                var postParams = qstring.parse(reqData);
                getWeather(postParams.city, res);
            });
        } else {
            sendResponse(null, res);
        }
    }).listen(8080);
}