const net = require('net');

const server = net.createServer();
server.listen('12306', '127.0.0.1');
let number = 0;
// 一些事件
server.on('listening', () => {
  console.log('服务已启动');
});
// 当 一个新的链接建立时触发，可接收一个socket对象
server.on('connection', (socket) => {
  console.log('有新的链接');
  socket.write('hi bye');
  socket.on('data', (data) => {
    socket.write(`你好啊，${number++}号客户端`);
    console.log(data.toString());
    socket.write('客户端请关闭链接');
  });
  socket.on('error', (err) => {
    socket.destroy();
  })
  // server.close();
});

server.on('close', () => {
  console.log('链接已关闭');
});