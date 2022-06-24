const net = require("net");
const server = net.createServer((conn) => {
  conn.on("data", (data) => {
    console.log(data.toString());
    conn.write([
      'HTTP/1.1 200 OK',
      'Content-Type: text/plain',
      'Content-Length: 11',
      '',
      'Hello, i am net serever'
    ].join("\n"));
  })
});
server.listen(80);