const http = require("http");
const postData = JSON.stringify({
  appId: "fe10636e-387e-4ff9-bc98-38b0c5500df9",
  userName: "zypt",
  type: "PC",
  page: "flight",
  lang: "zh-CN",
  userKey: "2fbb730e-5e2e-43e8-9db0-37a5ea056f86"
});
const options = {
  hostname: 'localhost',
  port: 80,
  path: '/international/flight/ticketUse/actualUseStatusList',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData),
    appId: "fe10636e-387e-4ff9-bc98-38b0c5500df9"
  }
};
const request = http.request(options, (res) => {
  let body = [];
  res.on("data", (chunk) => {
    body.push(chunk);
  })
  res.on("end", () => {
    body = Buffer.concat(body);
    console.log(body.toString());
  })
});
request.write(postData);
request.end();