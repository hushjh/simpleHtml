const crypto = require("crypto")
const bencode = require('bencode')

const hash = crypto.createHash("sha1")
hash.update('one')
console.log(hash.copy().digest('hex'))
// hash.update(bencode.decode('file.torrent').info);
// console.log(bencode.encode('file.torrent'));
// console.log(hash.copy().digest('hex'))
str = "magnet:?xt=urn:btih:7ff77ff16b266c0a7d374caeb66b4004a0e7011b&dn=%e9%98%b3%e5%85%89%e7%94%b5%e5%bd%b1www.ygdy8.com.%e5%a4%a9%e6%89%8d%e4%b8%8d%e8%83%bd%e6%89%bf%e5%8f%97%e4%b9%8b%e9%87%8d.2022.BD.1080P.%e4%b8%ad%e8%8b%b1%e5%8f%8c%e5%ad%97.mkv&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce"
// const message = bencode.decode('btih:7ff77ff16b266c0a7d374caeb66b4004a0e7011b')

// Query = {"t":"aa", "y":"q", "q":"ping", "a":{"id":"abcdefghij0123456789"}}
// bencode.encode(Query)
// console.log("query encode:", bencode.encode(Query).toString());
// var data = Buffer.from('7ff77ff16b266c0a7d374caeb66b4004a0e7011b')
// var result = bencode.decode( data )
// str = "hello world"
// console.log("result:", bencode.encode(str).toString('hex'));
// encodeStr = bencode.encode(str).toString('hex');
// console.log("result:", bencode.decode(Buffer.from(encodeStr, 'hex')).toString());
// 种子文件 16进制编码
str = '64383A616E6E6F756E636534343A7564703A2F2F747261636B65722E6F70656E626974746F7272656E742E636F6D3A38302F616E6E6F756E636531333A616E6E6F756E63652D6C6973746C6C34343A7564703A2F2F747261636B65722E6F70656E626974746F7272656E742E636F6D3A38302F616E6E6F756E6365656C34323A7564703A2F2F747261636B65722E6F70656E747261636B722E6F72673A313333372F616E6E6F756E63656565373A636F6D6D656E7431383A74686973206973206120636F6D6D656E742E31303A6372656174656420627931373A426974546F7272656E742F372E31302E3531333A6372656174696F6E2064617465693136323833323737393565383A656E636F64696E67353A5554462D38343A696E666F64363A6C656E677468693665343A6E616D65373A646F732E74787431323A7069656365206C656E67746869313633383465363A70696563657332303A7C4A8D09CA3762AF61E59520943DC26494F8941B6565'
var data = Buffer.from(str, 'hex')
console.log(data);
metadata = bencode.decode(data)
console.log("result:", bencode.decode(data, 'utf8'));
infoBts = bencode.encode(metadata.info);
infoHash = hash.copy().update(infoBts).digest('hex')
console.log(infoHash)
magnetStr = `magnet:?xt=urn:btih:${infoHash}`
console.log("magnetStr:", magnetStr);