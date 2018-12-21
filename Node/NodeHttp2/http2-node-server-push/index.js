const http2 = require('spdy')
const logger = require('morgan')
const express = require('express')
const app = express()
const fs = require('fs')

app.use(logger('dev'))

app.get('/', function (req, res) {
    res.send(`hello, http2! go to /pushy`)
  })

app.get('/pushy', (req, res) => {
    var stream = res.push('/main.js', {
        status: 200, // optional
        method: 'GET', // optional
        request: {
        accept: '*/*'
        },
        response: {
        'content-type': 'application/javascript'
        }
    })
    stream.on('error', function() {
    })
    stream.end('alert("hello from push stream!");')
    var stream1 = res.push('/main1.js', {
        status: 200, // optional
        method: 'GET', // optional
        request: {
        accept: '*/*'
        },
        response: {
        'content-type': 'application/javascript'
        }
    })
    stream1.on('error', function() {
    })
    stream1.end('alert("hello from push stream1!");')
    res.end('<script src="/main1.js"></script>')
})

var options = {
    key: fs.readFileSync('./server.key'),
    cert: fs.readFileSync('./server.crt')
  }

  const server = http2.createServer(options, app)
  // server.on('stream', (stream) => {
  //   stream.respond({ ':status': 200 });
  //   stream.pushStream({ ':path': '/' }, (err, pushStream, headers) => {
  //     if (err) throw err;
  //     pushStream.respond({ ':status': 200 });
  //     pushStream.end('alert("hello from push stream12!");');
  //   });
  //   stream.end('some data');
  // });
  
  server.listen(8080, ()=>{
      console.log(`Server is listening on https://localhost:8080.
      You can open the URL in the browser.`)
    }
  )
  