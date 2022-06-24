// httpServer
const http = require("http");
const url = require("url");
const server = http.createServer((req, res) => {
  const urlReq = req.url;
  const urlObj = url.parse(urlReq, true, true);
  console.log("urlReqe:", urlReq, "urlObj:", urlObj);
  let body = [];
  req.on("data", (chunk) => {
    body.push(chunk)
  })
  res.write("hello, i am serve");
  req.on("end", () => {
    console.log(body.toString());
    res.end();
  })
});
console.log("服务端服务启动成功，监听80端口");
server.listen(80);