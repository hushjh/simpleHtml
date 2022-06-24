const https = require("http");
// https.get("https://www.baidu.com", (res) => {
//     let body = [];
//   res.on("data", (chunk) => {
//     body.push(chunk);
//   })
//   res.on("end", () => {
//     body = Buffer.concat(body);
//     console.log(body.toString());
//   })
// });
const options = {
  hostname: 'www.example.com',
  port: 443,
  path: '/',
  method: 'GET',
  rejectUnauthorized: false
};
const request = https.request(options, (res) => {
  let body = [];
  res.on("data", (chunk) => {
    body.push(chunk);
  })
  res.on("end", () => {
    body = Buffer.concat(body);
    console.log(body.toString());
  })
});
request.on("error", (e) => {
  console.log("error:", e);
});
// request.write("hello, i am client");
request.end();