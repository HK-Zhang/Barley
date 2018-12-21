const http2 = require('http2-client');

http2.get('https://localhost:8080', function(response) {
    console.log(response)
  response.pipe(process.stdout);
});