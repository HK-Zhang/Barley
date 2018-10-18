var http = require('http');
var options = { port: '8080' };

function sendRequest() {
    http.request(options, (response) => {
        var serverData = '';
        response.on('data', (chunk) => {
            serverData += chunk;
        });

        response.on('end', () => {
            console.log(serverData);
        });
    }).end();
}

for (let i = 0; i < 5; i++) {
    console.log('Sending Request');
    sendRequest();
}