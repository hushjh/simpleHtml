var http=require('http'); //引入http模块

var server=http.createServer(function(req,res){  //创建一个server
　　res.setHeader('Content-Type','text/html'); //response响应头设置  text或html
　　// res.writeHead(200,{'Content-Type':'text/plain'});
　　res.end('<h1>hello world</h1>');
})

//监听3000端口号 ,端口号自己任意指定
server.listen(3000)