const RandomNumberStream = require("./randomNumberStream.js");
const fs = require("fs")
const stream = require("stream")
// const rns = new RandomNumberStream(5);
const ws = fs.createWriteStream("./download/cp.txt")
const readable = stream.Readable.from();
rns.on("data", chunk => {
  console.log(chunk);
  ws.write(chunk)
})
rns.on("end", () => {
  console.log("end");
})
// rns.pipe(process.stdout); // pipe 流动模式
// rns.on("readable", () => { // 暂停模式
//   let chunk;
//   while((chunk = rns.read()) !== null) {
//     console.log(chunk)
//   }
// })