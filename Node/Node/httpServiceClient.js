exports.httpClientGet = () => {
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