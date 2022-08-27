var fs = require('fs'),
  path = require('path'),
  url = require("url"),
  http = require('http');
  mockIns = require("./mock.js");


var MIME = {
  ".mp4": "video/mp4",
  '.gif': "image/gif",
  '.css': 'text/css',
  '.js': 'application/javascript'
};
function main(argv) {
  var config = require("./config.js");
  var root = config.root || '.',
      port = config.port || 80;
  http.createServer(function (request, response) {
    var urlInfo = parseURL(root, request.url);
    console.log("urlInfo:", urlInfo);
    output(urlInfo.pathname, response);
  }).listen(port);
  
  console.log(`mock 服务启动: ${getServeUrl(port)}`);
}
function getServeUrl(port) {
  const ip = require("../ip/ip.js");
  const address = `http://${ip}:${port}`
  return address;
}
function output(pathname, writer) {
  const data = mockIns.mock(pathname);
  console.log("data:", data);
  if (!data) {
    writer.statusCode = 404
    writer.write("404");
  } else {
    writer.setHeader('Content-Type', 'application/json; charset=UTF-8')
    writer.statusCode = 200
    writer.write(JSON.stringify(data));
  }
  writer.end();
}

function parseURL(root, urlReq) {
  const { pathname } = url.parse(urlReq, true, true);
  console.log("pathname;", pathname);
  return {
    mime: 'application/json; charset=UTF-8',
    pathname: pathname
  };
}
main(process.argv.slice(2));