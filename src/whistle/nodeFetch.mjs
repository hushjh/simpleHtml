// const fetch = require("node-fetch");
import fetch from "node-fetch";
// const HttpProxyAgent = require('http-proxy-agent');
import HttpProxyAgent from 'http-proxy-agent';

// let url="http://pv.sohu.com/cityjson";
// let url="http://ip-api.com/json";
let url = "http://whois.pconline.com.cn/ipJson.jsp";
let ip = '192.168.95.143';
let port = '8080';
fetch(url, {
  method: 'GET',
  // body: null,    
  redirect: 'follow', // set to `manual` to extract redirect headers, `error` to reject redirect 
  timeout: 10000,      //ms 
  agent: new HttpProxyAgent("http://" + ip + ":" + port)
}).then(function (res) {
  console.log("Response Headers ============ ");
  res.headers.forEach(function (v, i, a) {
    console.log(i + " : " + v);
  });
  return res.text();
}).then(function (res) {
  console.log("Response Body ============ ");
  console.log(res);
});