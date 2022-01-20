var net = require('net');

var socket = net.connect('12306', '127.0.0.1');
// 失败事件
socket.on('error', () => {
  console.log('链接失败');
});

socket.on('connect', () => {
  console.log('链接服务器成功');
  socket.write('你好啊，服务器:');
  socket.on('data', (data) => {
    console.log(data.toString())
    // socket.end()
  })
})
socket.on('end', () => {
  console.log('我已经主动关闭链接成功')
})
