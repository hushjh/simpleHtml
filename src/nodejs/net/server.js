const net = require('net')
const server = new net.createServer()

let clients = {}
let clientName = 0

server.on('connection', (client) => {
  client.name = ++clientName
  clients[client.name] = client

  client.on('data', (msg) => {
    // console.log('客户端传来：' + msg);
    broadcast(client, msg.toString())
  })

  client.on('error', (e) => {
    console.log('client error' + e);
    client.end()
  })

  client.on('close', () => {
    delete clients[client.name]
    console.log(client.name + ' 下线了');
  })
})

const broadcast = (client, msg) => {
  for (let key in clients) {
    clients[key].write(client.name + ' 说：' + msg)
  }
}

server.listen(9000, 'localhost', () => {
  console.log('opened server on', server.address());
})
