const http2 = require('http2')
const fs = require('fs')
const cert = fs.readFileSync('./server.crt')
const key = fs.readFileSync('./server.key')
const localWindowSize = 100
const server = http2.createSecureServer({cert, key, localWindowSize})

server.on('stream', (stream, headers) => {
  stream.respond({ ':status': 200 })
  stream.end('hello world')
  stream.priority({weight: 2})
})

server.listen(8080, ()=>{
  console.log(`Server is listening on https://localhost:8080.
  You can open the URL in the browser.`)
}
)