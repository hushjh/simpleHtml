const net = require('net')
const readline = require('readline')

const port = 9000
const host = '127.0.0.1'

const socket = new net.Socket()

socket.setEncoding = 'UTF-8'

socket.connect(port, host, () => {
  socket.write('上线了.')
})

socket.on('data', (msg) => {
  console.log(msg.toString())
  say()
})

socket.on('error', (err) => {
  console.log('error' + err);
})

socket.on('close', () => {
  console.log('connection closeed');
})

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const say = () => {
  r1.question('', (inputMsg) => {
    if (inputMsg !== 'bye') {
      socket.write(inputMsg + '\n')
    } else {
      socket.destroy()
      r1.close()
    }
  })
}
