const http = require('http');

const server = http.createServer((req, res) => {
  var body = [];
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  req.on('data', (chunk) => {
    body.push(chunk);
    res.write(chunk);
  });
  req.on('end', () => {
    res.end('你好');
  })
  
  // res.end('Hello world\n');
})
server.on('connect', (...res) => {
  console.log('connect res:', res)
})
server.on('request', (...res) => {
  console.log('request res:', res)
})
server.listen(9527);
console.log('服务以启动，访问地址 127.0.0.1:9527')

// http.createServer((req, res) => {
//   res.writeHead(200, {
//     'Content-Type': 'text-plain'
//   });
//   res.end('Hello world\n');
// }).listen(8124);