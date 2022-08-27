const dgram = require('dgram')

const buf1 = Buffer.from('i am ');
const buf2 = Buffer.from('client');
const client = dgram.createSocket('udp4');
client.send([buf1, buf2], 41234, (err) => {
  client.close();
});