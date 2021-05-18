let url = require("url");
let http = require("http");

// 1.创建一个服务器实例对象
let server = http.createServer();
server.on("request", function (req, res) {
    console.log(req.url);
    let obj = url.parse(req.url, true);
    res.end(obj);
});

// 2.指定监听的端口
server.listen(3000);
