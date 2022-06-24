const net = require("net");
const http = require("http");
var options = {
  port: 80,
  host: "localhost"
}

var client = net.connect(options, () => {
  client.write([
    'GET / HTTP/1.1',
    'User-Agent: curl/7.26.0',
    'Host: www.baidu.com',
    'Accept: */*',
    '',
    'i am net client'
  ].join("\n"))
})
client.on("data", (data) => {
  console.log("maxSockets:", http.globalAgent.maxSockets);
  console.log(data.toString())
  client.end()
})