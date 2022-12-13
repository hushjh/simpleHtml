const DHT = require('bittorrent-dht')
const magnet = require('magnet-uri')

// const uri = 'magnet:?xt=urn:btih:e3811b9539cacff680e418124272177c47477157'
const uri = 'magnet:?xt=urn:btih:7ff77ff16b266c0a7d374caeb66b4004a0e7011b&dn=%e9%98%b3%e5%85%89%e7%94%b5%e5%bd%b1www.ygdy8.com.%e5%a4%a9%e6%89%8d%e4%b8%8d%e8%83%bd%e6%89%bf%e5%8f%97%e4%b9%8b%e9%87%8d.2022.BD.1080P.%e4%b8%ad%e8%8b%b1%e5%8f%8c%e5%ad%97.mkv&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce'
const parsed = magnet(uri)

console.log(parsed.infoHash) // 'e3811b9539cacff680e418124272177c47477157'

const dht = new DHT()

dht.listen(20000, function () {
  console.log('now listening')
})

dht.on('peer', function (peer, infoHash, from) {
  console.log('found potential peer ' + peer.host + ':' + peer.port + ' through ' + from.address + ':' + from.port)
})
dht.on('node', (node) => {
  console.log('node:', node);
})
dht.on('warning', (err) => {
  console.log("warning:", err);
})
dht.on('error', (err) => {
  console.log("warning:", err);
})

// find peers for the given torrent info hash
dht.lookup(parsed.infoHash)
