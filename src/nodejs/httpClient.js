// import { writeFile } from "node:fs";
const fs = require("fs");
const http = require("http");
const url = require("url");
const path = require("path");
// http://localhost:80/static/a.txt,static/b.txt
// http:localhost:80/static/a.gif
// http:localhost:80/static/ev.mp4
const reqUrl = "http:localhost:80/static/ev.mp4"
const config = {
  root: "./download/"
}
http.get(reqUrl, (res) => {
  let body = [];
  let fileSize = 0;
  const { headers } = res;
  const { "content-length": contentLength } = headers
  console.log("content-length:", contentLength);
  const fileName = generateFileName(reqUrl);
  const filePath = config.root + fileName;
  // fsWatch(filePath, contentLength);
  ws = fs.createWriteStream(filePath)
  const startTime = Date.now();
  res.on("data", (chunk) => {
    console.log("chunk:", Buffer.byteLength(chunk));
    fileSize += Buffer.byteLength(chunk);
    console.log("fileSize:", fileSize);
    console.log("percent:", fileSize / contentLength);
    // body.push(chunk);
    ws.write(chunk)
  })
  // res.pipe(writeStream);
  res.on("end", () => {
    // body = Buffer.concat(body);
    // fs.writeFile(filePath, body, (err) => {
    //   if (err) throw err;
    //   console.log("the file has been saved");
    // })
    console.log("the file has been saved");
    const endTime = Date.now();
    const during = endTime - startTime;
    const bps = contentLength * 8 / (1024 * 1024) / (during / 1000)
    console.log("during:", during, "bps:", bps);
  })
});
function fsWatch(filePath, contentLength) {
  // 检查当前目录中是否存在该文件。
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      console.log(`${filePath} ${err ? 'does not exist' : 'exists'}`);
      fs.writeFile(filePath, '', (err) => {
        if (err) throw err;
        console.log("the file has been created");
        fs.watch(filePath, (data) => {
          console.log("file changed data:", data);
          fs.stat(filePath, (err, stats) => {
            if (err) {
              console.log(err);
            } else {
              console.log("stats.size:", stats.size);
            }
          });
        });
      })
    } else {
      fs.watch(filePath, (data) => {
        console.log("file changed data:", data);
        fs.stat(filePath, (err, stats) => {
          if (err) {
            console.log(err);
          } else {
            console.log("stats.size:", stats.size);
          }
        });
      });
    }
  });
}
function generateFileName(urlReq) {
  const { pathname } = url.parse(urlReq, true, true);
  const extName = path.extname(pathname);
  const fileName = Date.now() + extName;
  return fileName;
}
// const options = {
//   hostname: 'www.baidu.com',
//   port: 80,
//   path: '/upload',
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/x-www-form-urlencoded'
//   }
// };
// const request = http.request(options, (res) => {
//   let body = [];
//   res.on("data", (chunk) => {
//     body.push(chunk);
//   })
//   res.on("end", () => {
//     body = Buffer.concat(body);
//     console.log(body.toString());
//   })
// });
// request.write("hello, i am client");
// request.end();