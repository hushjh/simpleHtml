var fs = require('fs'),
  path = require('path'),
  url = require("url"),
  http = require('http');

var MIME = {
  ".mp4": "video/mp4",
  '.gif': "image/gif",
  '.css': 'text/css',
  '.js': 'application/javascript'
};
function main(argv) {
  console.log("main.js main");
  var config = {};
  if (argv[0]) {
    config = JSON.parse(fs.readFileSync(argv[0] || "", 'utf-8'))
  }
  var root = config.root || '.',
    port = config.port || 80;

  http.createServer(function (request, response) {
    var urlInfo = parseURL(root, request.url);
    console.log("urlInfo:", urlInfo);

    validateFiles(urlInfo.pathnames, function (err, fileStats) {
      const { size } = fileStats;
      if (err) {
        response.writeHead(404);
        response.end(err.message);
      } else {
        response.writeHead(200, {
          "content-length": size,
          'Content-Type': urlInfo.mime
        });
        outputFiles(urlInfo.pathnames, response);
      }
    });
  }).listen(port);
  process.on("SIGTERM", () => {
    server.close(() => {
      process.exit(0);
    })
  })
  process.on("message", m => {
    console.log("main 接收到参数：", m);
    if (typeof m === "object" && m.type === "fib") {
      const result = fib(m.data);
      process.send({ type: "fib", data: result });
    }
  })
}
function fib(num) {
  if (num === 0) return 0;
  if (num === 1) return 1;
  return fib(num - 2) + fib(num - 1);
}
function outputFiles(pathnames, writer) {
  (function next(i, len) {
    if (i < len) {
      var reader = fs.createReadStream(pathnames[i]);

      reader.pipe(writer, { end: false });
      reader.on('end', function () {
        next(i + 1, len);
      });
    } else {
      writer.end();
    }
  }(0, pathnames.length));
}

function validateFiles(pathnames, callback) {
  let size = 0;
  (function next(i, len) {
    if (i < len) {
      fs.stat(pathnames[i], function (err, stats) {
        if (err) {
          callback(err);
        } else if (!stats.isFile()) {
          callback(new Error());
        } else {
          size += stats.size;
          next(i + 1, len);
        }
      });
    } else {
      console.log("file size:", size);
      const fileStats = {
        size: size
      };
      callback(null, fileStats);
    }
  }(0, pathnames.length));
}
function parseURL(root, urlReq) {

  const { pathname } = url.parse(urlReq, true, true);
  console.log("pathname;", pathname);
  return {
    mime: MIME[path.extname(root + pathname)] || 'text/plain',
    pathnames: [root + pathname]
  };
}
main(process.argv.slice(2));